#
# Copyright (c) 2014 Plex Development Team. All rights reserved.
#

from urllib import urlencode  # TODO: expose urlencode for dicts in the Framework?
from collections import Counter
from Utils import normalize_artist_name
from Artist import find_artist_posters, find_artist_art, find_lastfm_artist, find_lastfm_top_tracks, find_lastfm_similar_artists, find_lastfm_album, find_lastfm_events, find_fanart_artist, find_fanart_album_posters, find_htbackdrops_artist_images, artist_mbid_lookup

LFM_RED_POSTER_HASHES = ['1c117ac7c5303f4a273546e0965c5573', '833dccc04633e5616e9f34ae5d5ba057', '573e957e111f4ff846fbd6cf241c2bbd', '359a82f4540afe7e1ace42b08cdfcfed', '73083c9b3b4868dc3902926c7fe002ef', 'f157bd7cfdca5ffe5e9d49f80e4ddd3e', 'f9c024789ef0eea9808c549907d46f71', '688720ac7373d5940c2600fa74021237', '87b9e298dadac0dec7f7daad0921be5b', '866e9cdc5591824f9a4370176cae9afe', 'de54a33e866921b9453cd9d104598b09']

GENERIC_ARTIST_NAMES = ['various artists', '[unknown artist]', 'soundtrack', 'ost', 'original sound track', 'original soundtrack', 'original broadway cast']

FANART_TV_PREVIEW_PATH = '/preview/'
FANART_TV_FANART_PATH = '/fanart/'

@expose
def NormalizeArtist(artist):
  return normalize_artist_name(artist)

def Start():
  HTTP.CacheTime = 30

def LevenshteinRatio(first, second):
  if not (first and second):
    return 0.0
  else:
    return 1 - (Util.LevenshteinDistance(first, second) / float(max(len(first), len(second))))

def album_search(tree, album, lang, album_results, artist_guids=[], fingerprint='1', artist_thumbs=[]):

  args = {}

  if hasattr(album, 'artist'):
    artist = album.artist
    title = album.title
  else:
    artist = tree.title
    title = tree.albums.values()[0].title

  for i, track in enumerate(album.children):
    args['tracks[%d].path' % i]        = track.items[0].parts[0].file
    args['tracks[%d].userData' % i]    = track.id
    args['tracks[%d].track' % i]       = track.title
    if hasattr(track, 'originalTitle'):
      args['tracks[%d].artist' % i]    = track.originalTitle
    args['tracks[%d].albumArtist' % i] = artist
    args['tracks[%d].album' % i]       = title
    if hasattr(track, 'index'):
      args['tracks[%d].index' % i]     = track.index
    args['lang']                       = lang

  querystring = urlencode(args).replace('%5B','[').replace('%5D',']')
  url = 'http://127.0.0.1:32400/services/gracenote/search?fingerprint=%s&%s' % (fingerprint, querystring)
  
  try:
    res = XML.ElementFromURL(url, timeout=60)
    track_xml = res.xpath('//Track')
    if len(track_xml) > 0:
      first_track = [0]
    else:
      Log('No matches from Gracenote search')
      return
  except Exception, e:
    Log('Exception running Gracenote search: ' + str(e))
    return

  # Go back and get the full album for more reliable metadata and so we can populate any missing tracks in the SearchResult.
  # Sometimes multi-disc albums get split out in Gracenote data, so load each one if we see that condition.
  #
  album_guid_consensus = {}
  discs = sorted(list(set([int(t.get('parentIndex', 1)) for t in res.xpath('//Track')])))

  for disc in discs:
    album_guid_consensus[disc] = Counter([t.get('parentGUID') for t in res.xpath('//Track[@parentIndex="%s" or @parentIndex=""]' % disc)]).most_common()[0][0]
    Log('Got consensus on album GUID: %s' % album_guid_consensus[disc])

  album_res = XML.ElementFromURL('http://127.0.0.1:32400/services/gracenote/update?guid=' + String.URLEncode(album_guid_consensus[discs[0]]))  
  album_elm = album_res.xpath('//Directory')[0]

  for disc in discs:
    if disc != discs[0]:
      for track in XML.ElementFromURL('http://127.0.0.1:32400/services/gracenote/update?guid=' + String.URLEncode(album_guid_consensus[disc]), timeout=60).xpath('//Track'):
        track.set('parentIndex', str(disc))
        album_elm.append(track)

  # No album art from gracenote, clear out the thumb.
  thumb = album_elm.get('thumb')
  if thumb == 'http://': 
    thumb = ''

  artist_thumbs.append(album_elm.get('parentThumb'))

  track_results = []
  matched_guids = [t.get('guid') for t in track_xml]
  for track in sorted(album_res.xpath('//Track'), key=lambda i: (int(i.get('parentIndex', 1)), int(i.get('index')))):
    if track.get('guid') in matched_guids:
      matched = '1'
      track_id = res.xpath('//Track[@guid="%s"]' % track.get('guid'))[0].get('userData')
    else:
      matched = '0'
      track_id = ''
    track_results.append(SearchResult(matched=matched, type='track', name=track.get('title'), id=track_id, guid=track.get('guid'), index=track.get('index'), parentIndex=track.get('parentIndex', 1)))

  # Score based on number of matched tracks.  Used when checking against a threshold for automatically matching after renaming/reparenting.
  album_score = 100 - (len(album.children) - len([t for t in track_results if t.matched == '1']))
  album_result = SearchResult(id=album.id, type='album', parentName=album_elm.get('parentTitle'), name=album_elm.get('title'), guid=album_guid_consensus[discs[0]], thumb=thumb, year=album_elm.get('year'), parentGUID=album_elm.get('parentGUID'), score=album_score)
  for track_result in track_results:
    album_result.add(track_result)

  Log('Got album result: %s (score: %d)' % (album_result.name, album_result.score))
  album_results.append(album_result)
  artist_guids.append(album_elm.get('parentGUID'))


def add_posters(posters, metadata):
  valid_keys = []
  for i, poster in enumerate(posters):
    if poster in metadata.posters:
      valid_keys.append(poster)
      continue
    
    try:
      if 'fanart.tv' in poster:
        # fanart.tv has a preview image which we use instead of downloading full res image
        poster_url_preview = poster.replace(FANART_TV_FANART_PATH, FANART_TV_PREVIEW_PATH)
        metadata.posters[poster] = Proxy.Preview(HTTP.Request(poster_url_preview).content, sort_order='%02d' % (i + 1))
        valid_keys.append(poster)
      else:
        poster_req = HTTP.Request(poster)
        poster_req.load()
        poster_data = poster_req.content
        poster_hash = Hash.MD5(poster_data)

        # Avoid the Last.fm placeholder image.
        if poster_hash not in LFM_RED_POSTER_HASHES:
          Log('Adding poster with hash: %s' % poster_hash)
          metadata.posters[poster] = Proxy.Media(poster_data, sort_order='%02d' % (i + 1))
          valid_keys.append(poster)
        else:
          Log('Skipping Last.fm Red Poster of Death: %s' % poster)

    except Exception, e:
      Log('Couldn\'t add poster (%s): %s' % (poster, str(e)))
  
  metadata.posters.validate_keys(valid_keys)

def add_art(arts, metadata):
  valid_keys = []
  for i, art in enumerate(arts):
    try:
      metadata.art[art[0]] = Proxy.Preview(HTTP.Request(art[1]), sort_order='%02d' % (i + 1))
      valid_keys.append(art[0])
    except Exception, e:
      Log('Couldn\'t add art (%s): %s' % (art[0], str(e)))

  metadata.art.validate_keys(valid_keys)

class GracenoteArtistAgent(Agent.Artist):

  name = 'Plex Premium Music'
  languages = [Locale.Language.English, Locale.Language.Arabic, Locale.Language.Bulgarian, Locale.Language.Chinese, Locale.Language.Croatian, 
               Locale.Language.Czech, Locale.Language.Danish, Locale.Language.Dutch, Locale.Language.Finnish, Locale.Language.French, 
               Locale.Language.German, Locale.Language.Greek, Locale.Language.Hungarian, Locale.Language.Indonesian, Locale.Language.Italian, 
               Locale.Language.Japanese, Locale.Language.Korean, Locale.Language.NorwegianNynorsk, Locale.Language.Polish, 
               Locale.Language.Portuguese, Locale.Language.Romanian, Locale.Language.Russian, Locale.Language.Serbian, Locale.Language.Slovak, 
               Locale.Language.Spanish, Locale.Language.Swedish, Locale.Language.Thai, Locale.Language.Turkish, Locale.Language.Vietnamese]
  contributes_to = ['com.plexapp.agents.localmedia']

  def search(self, results, media, lang='en', manual=False, tree=None, primary=True):

    # Good match when being used as a secondary agent.
    if not primary:
      results.add(SearchResult(id=tree.id, score=100))
      return

    # Don't do automatic matching for this agent.
    if not manual:
      return

    album_results = []
    artist_guids = []
    artist_thumbs = []
    for j, album in enumerate(tree.albums.values()):
      album_search(tree, album, lang, album_results, artist_guids, artist_thumbs=artist_thumbs)

      # Limit to five albums for artist consensus. TODO: This may be too many, it takes a while.
      if j > 4:
        break

    if not artist_guids:
      Log('No Gracenote artists found for %s' % tree.title)
      return

    artist_guid_counter = Counter(artist_guids).most_common()
    artist_guid_consensus = artist_guid_counter[0][0]
    Log('Got consensus on artist GUID: %s' % artist_guid_consensus)  # TODO: Gracenote is returning all different GnUId's for these :(
    for album_result in album_results:
      if album_result.parentGUID == artist_guid_consensus:
        artist_name = album_result.parentName
        break
      
    # Score based on the proportion of albums that matched.
    artist_score = int(50 + 50 * (artist_guid_counter[0][1] / float(len(tree.albums))))

    artist_thumb = artist_thumbs[0] if artist_thumbs else ''
    artist_result = SearchResult(id=tree.id, type='artist', name=artist_name, guid=artist_guid_consensus, score=artist_score, thumb=artist_thumb)
    for album_result in album_results:
      artist_result.add(album_result)

    Log('Got artist result: %s (score: %d)' % (artist_result.name, artist_result.score))
    results.add(artist_result)


  def update(self, metadata, media, lang):

    Log('Updating: %s (GUID: %s)' % (media.title, media.guid))

    posters = []
    arts = []

    # FIXME, not sure why metadata title isn't set when used as secondary agent.
    the_title = metadata.title or media.title

    # Special art for Generic Artist and skip rest of data.
    if the_title.lower() in GENERIC_ARTIST_NAMES:
      add_posters(['https://music.plex.tv/pixogs/various_artists_poster.jpg'], metadata)
      add_art([['https://music.plex.tv/pixogs/various_artists_art.jpg', 'https://music.plex.tv/pixogs/various_artists_art.jpg']], metadata)
      Log('Not updating rest of info for artist: "%s" because it looks too generic' % (the_title))
      return

    gracenote_poster = None
    gracenote_guids = [c.guid for c in media.children if c.guid.startswith('com.plexapp.agents.plexmusic://gracenote/')]
    if len(gracenote_guids) > 0:
  
      # Fetch an album (use the given child_guid if we have it) and use the artist data from that.
      res = XML.ElementFromURL('http://127.0.0.1:32400/services/gracenote/update?guid=' + String.URLEncode(gracenote_guids[0]))

      # Artist name.
      if metadata.title is None and not media.title:
        metadata.title = res.xpath('//Directory[@type="album"]')[0].get('parentTitle')
      else:
        metadata.title = media.title
      the_title = metadata.title

      # Artist bio.
      metadata.summary = res.xpath('//Directory[@type="album"]')[0].get('parentSummary')

      # Artist country.
      metadata.countries.clear()
      country = res.xpath('//Directory[@type="album"]')[0].get('parentCountry')
      if country:
        metadata.countries.add(country)

      # Artist poster.
      gracenote_poster = res.xpath('//Directory[@type="album"]')[0].get('parentThumb')
      
    else:
      # We still need to make sure the title is set.
      metadata.title = media.title

    # Find artist posters and art from other sources.
    album_titles = [a.title for a in media.children]
    lastfm_artist = find_lastfm_artist(the_title, album_titles, lang)
    artist_mbid = artist_mbid_lookup(lastfm_artist)
    fanart_artist = find_fanart_artist(the_title, artist_mbid)
    htbackdrops_artist_images = find_htbackdrops_artist_images(the_title, artist_mbid)

    metadata.similar.clear()
    metadata.concerts.clear()
    
    find_artist_posters(posters, the_title, lastfm_artist, fanart_artist, htbackdrops_artist_images)

    if lastfm_artist is not None or htbackdrops_artist_images is not None:
      find_artist_art(arts, the_title, lastfm_artist, fanart_artist, htbackdrops_artist_images, artist_mbid)
    
    if lastfm_artist is not None:
      # Find similar artists.
      similar_artists = find_lastfm_similar_artists(lastfm_artist, lang)
      
      if similar_artists is not None:
        for artist in similar_artists:
          metadata.similar.add(artist['name'])
      
      # Find events
      if Prefs['concerts']:
        events = find_lastfm_events(lastfm_artist)
        if events:
          for event in events:
            try:
              concert = metadata.concerts.new()
              concert.title = event['displayName']
              concert.venue = event['venue']['displayName']
              concert.city = event['venue']['metroArea']['displayName']
              concert.country = event['venue']['metroArea']['country']['displayName']
              concert.date = Datetime.ParseDate(event['start']['date'], '%Y-%m-%d')
              concert.url = event['uri']
            except:
              pass

    # If we had a Gracenote poster, add it last.
    if gracenote_poster is not None and len(gracenote_poster) > 0:
      posters.append(gracenote_poster)
      
    # If we didn't get an artist summary, try to get one from Last.FM.
    if lastfm_artist is not None and (metadata.summary is None or len(metadata.summary) == 0):
      metadata.summary = String.DecodeHTMLEntities(String.StripTags(lastfm_artist['bio']['content'][:lastfm_artist['bio']['content'].find('\n\n')]).strip())

    # Add posters.
    add_posters(posters, metadata)

    # Add art.
    add_art(arts, metadata)

class GracenoteAlbumAgent(Agent.Album):

  name = 'Plex Premium Music'
  languages = [Locale.Language.English, Locale.Language.Arabic, Locale.Language.Bulgarian, Locale.Language.Chinese, Locale.Language.Croatian, 
               Locale.Language.Czech, Locale.Language.Danish, Locale.Language.Dutch, Locale.Language.Finnish, Locale.Language.French, 
               Locale.Language.German, Locale.Language.Greek, Locale.Language.Hungarian, Locale.Language.Indonesian, Locale.Language.Italian, 
               Locale.Language.Japanese, Locale.Language.Korean, Locale.Language.NorwegianNynorsk, Locale.Language.Polish, 
               Locale.Language.Portuguese, Locale.Language.Romanian, Locale.Language.Russian, Locale.Language.Serbian, Locale.Language.Slovak, 
               Locale.Language.Spanish, Locale.Language.Swedish, Locale.Language.Thai, Locale.Language.Turkish, Locale.Language.Vietnamese]
  contributes_to = ['com.plexapp.agents.localmedia']

  def search(self, results, media, lang, manual=False, tree=None, primary=False):

    # Good match when being used as a secondary agent.
    if not primary:
      results.add(SearchResult(id=tree.id, score=100))
      return
    
    # Don't do automatic matching for this agent.
    if not manual:
      return

    album_results = []
    for fingerprint in ['0', '1']:
      album_search(tree, media, lang, album_results, fingerprint=fingerprint)

    seen = []
    Log(str(seen))
    for album_result in sorted(album_results, key=lambda a: a.score, reverse=True):
      if not (album_result.parentName, album_result.name) in seen:
        results.add(album_result)
        seen.append((album_result.parentName, album_result.name))


  def update(self, metadata, media, lang):

    posters = []

    Log('Updating album: ' + media.title)
    Log('With guid: ' + media.guid)

    # Even if this album itself is not a Gracenote album, we may have some tracks that came from one, or we may be post multi-disc merge.
    # Look through all the tracks for their parent GNIDs. Later, we'll load each one so we can update track data for everything.
    #
    album_gnids = set([track.guid.split('/')[-2] for track in media.children if 'com.plexapp.agents.plexmusic://gracenote' in track.guid])

    # Try to get last.fm information for most popular tracks.
    most_popular_tracks = {}
    try:
      # Look up the artist.
      lastfm_artist = find_lastfm_artist(media.parentTitle, [media.title], lang)
      
      # Get top tracks.
      top_tracks = find_lastfm_top_tracks(lastfm_artist, lang)
      for track in top_tracks:
        most_popular_tracks[track['name']] = int(track['playcount'])
    except:
      pass

    if len(album_gnids) == 0:
      if Prefs['popular']:
        Log('Didn\'t find any tracks from Gracenote albums, finish by searching for most popular tracks only')
        for track in media.children:
          # See if it's the top tracks.
          title = track.title
          guid = track.guid
          metadata_track = metadata.tracks[guid]
          for popular_track in most_popular_tracks.keys():
            if popular_track and title and LevenshteinRatio(popular_track, title) > 0.95:
              metadata_track.rating_count = most_popular_tracks[popular_track]
      else:
        Log('Didn\'t find any tracks from Gracenote albums, aborting')
      return

    try:
      res = XML.ElementFromURL('http://127.0.0.1:32400/services/gracenote/update?guid=' + String.URLEncode(media.guid), timeout=60)
    except Exception, e:
      Log('Error issuing album update request: ' + str(e))
      return

    # Carry over the media title. This should always be set by the Premium Music scanner.
    if media.title is not None and len(media.title) > 0:
      metadata.title = media.title

    if Prefs['album_reviews']:
      metadata.summary = res.xpath('//Directory[@type="album"]')[0].get('summary')

    metadata.studio = res.xpath('//Directory[@type="album"]')[0].get('studio')

    if res.xpath('//Directory[@type="album"]')[0].get('year') is not None:
      metadata.originally_available_at = Datetime.ParseDate(res.xpath('//Directory[@type="album"]')[0].get('year') + '-01-01')

    # Poster from Gracenote.
    try:
      poster_url = res.xpath('//Directory[@type="album"]')[0].get('thumb')
      if len(poster_url) > 0:
        posters.append(poster_url)
    except Exception, e:
      Log('Couldn\'t add album art from Gracenote: ' + str(e))

    # Try to get last.fm information for album.
    if lastfm_artist:
      album = find_lastfm_album(lastfm_artist, metadata.title, res.xpath('//Directory[@type="album"]')[0].get('year'), lang)
      if album:
        try:
          if 'releasedate' in album:
            metadata.originally_available_at = Datetime.ParseDate(album['releasedate'].split(',')[0].strip())
        except Exception, e:
          Log('Problem with releasedate: ' + str(e))

        artist_mbid = artist_mbid_lookup(lastfm_artist)
        if 'mbid' in album and artist_mbid:
          # Posters from fanart.tv (before last.fm poster because better quality)
          fanart_posters = find_fanart_album_posters(artist_mbid, album['mbid'], lang)
          if fanart_posters:
            posters.extend(fanart_posters)

        # Posters from lastfm, only 'mega' otherwise they are too small.
        for image in album['image']:
          if image['size'] == 'mega':
            posters.append(image['#text'])
   
    # Add all the posters
    add_posters(posters, metadata)

    # Go back and get track metadata for any additional albums if needed.
    if 'com.plexapp.agents.plexmusic://gracenote' in media.guid:
      album_gnids.remove(media.guid.split('/')[-1].split('?')[0])

    for album_gnid in album_gnids:
      dummy_guid = 'com.plexapp.agents.plexmusic://gracenote/x/%s?%s' % (album_gnid, media.guid.split('?')[-1]) 
      try:
        additional_res = XML.ElementFromURL('http://127.0.0.1:32400/services/gracenote/update?guid=' + String.URLEncode(dummy_guid))
      except Exception, e:
        Log('Error issuing album update request: ' + str(e))
        continue

      for track in additional_res.xpath('//Track'):
        res.xpath('//Directory')[0].append(track)
        
    # Map gracenote tracks by GUID.
    gracenote_tracks = {}
    for track in res.xpath('//Track'):
      gracenote_tracks[track.get('guid')] = track

    # Go through all the media tracks, match up with metadata via GUID.
    for track in media.children:
      guid = track.guid
      title = track.title

      gracenote_track = gracenote_tracks[guid] if guid in gracenote_tracks else None
      metadata_track = metadata.tracks[guid]
      
      if gracenote_track:
        metadata_track.tempo = int(gracenote_track.get('bpm') or -1)

      # See if it's the top tracks.
      for popular_track in most_popular_tracks.keys():
        if popular_track and title and LevenshteinRatio(popular_track, title) > 0.95:
          if Prefs['popular']:
            metadata_track.rating_count = most_popular_tracks[popular_track]
          else:
            metadata_track.rating_count = 0

      # Moods.
      metadata_track.moods.clear()
      if gracenote_track:
        for mood in gracenote_track.xpath('./Mood/@tag'):
          metadata_track.moods.add(mood)
