#
# Copyright (c) 2014 Plex Development Team. All rights reserved.
#

from urllib import quote
from Utils import normalize_artist_name

FANART_TV_API_KEY = '72519ab36caf49c09f69a028fb7f741d'
FANART_TV_ARTIST_URL = 'https://webservice.fanart.tv/v3/music/%s' # TODO: Cloudflare this.
FANART_TV_FANART_PATH = '/fanart/'
FANART_TV_PREVIEW_PATH = '/preview/'

HTBACKDROPS_API_KEY = '15f8fe4ad7760d77c85e686eefafd26f'
HTBACKDROPS_MBID_SEARCH_URL = 'https://htbackdrops.plex.tv/api/%s/searchXML?mbid=%%s&default_operator=and&aid=1,5' % HTBACKDROPS_API_KEY
HTBACKDROPS_KEYWORD_SEARCH_URL = 'https://htbackdrops.plex.tv/api/%s/searchXML?keywords=%%s&default_operator=and&aid=1,5' % HTBACKDROPS_API_KEY
HTBACKDROPS_THUMB_URL = 'https://htbackdrops.plex.tv/api/%s/download/%%s/thumbnail' % HTBACKDROPS_API_KEY
HTBACKDROPS_FULL_URL = 'https://htbackdrops.plex.tv/api/%s/download/%%s/fullsize' % HTBACKDROPS_API_KEY

def find_lastfm_artist(artist, album_titles, lang):
    try: return Core.messaging.call_external_function('com.plexapp.agents.lastfm', 'MessageKit:ArtistSearch', kwargs = dict(artist=artist, albums=album_titles, lang=lang))
    except: return None

def find_lastfm_top_tracks(artist, lang):
    try: return Core.messaging.call_external_function('com.plexapp.agents.lastfm', 'MessageKit:ArtistTopTracks', kwargs = dict(artist=artist['name'], lang=lang))
    except: return None

def find_lastfm_similar_artists(artist, lang):
    try: return Core.messaging.call_external_function('com.plexapp.agents.lastfm', 'MessageKit:ArtistGetSimilar', kwargs = dict(artist=artist['name'], lang=lang))
    except: return None

def artist_mbid_lookup(lastfm_artist):
    try: return Core.messaging.call_external_function('com.plexapp.agents.lastfm', 'MessageKit:ArtistMbidLookup', kwargs = dict(lastfm_artist=lastfm_artist))
    except: return None

def find_lastfm_events(lastfm_artist):
    try: return Core.messaging.call_external_function('com.plexapp.agents.lastfm', 'MessageKit:ArtistGetEvents', kwargs = dict(lastfm_artist=lastfm_artist))
    except: return None
    
def find_lastfm_album(artist, album, year, lang):
    try: return Core.messaging.call_external_function('com.plexapp.agents.lastfm', 'MessageKit:AlbumSearch', kwargs = dict(artist=artist['name'], album=album, year=year, lang=lang))
    except: return None

def find_htbackdrops_artist(artist):
    try: return Core.messaging.call_external_function('com.plexapp.agents.htbackdrops', 'MessageKit:ArtistSearch', kwargs = dict(artist_name=artist))
    except: return None

def find_fanart_artist(artist, mbid):
  fanart_artist = None
  if mbid is not None:
    try:
      fanart_artist = JSON.ObjectFromURL(FANART_TV_ARTIST_URL % mbid, headers={'api-key':FANART_TV_API_KEY})
    except:
      Log('Couldn\'t fetch Fanart.tv artist.')

  return fanart_artist

def find_fanart_album_posters(artist_mbid, album_mbid, lang):
    try: return Core.messaging.call_external_function('com.plexapp.agents.fanarttv', 'MessageKit:AlbumPosters', kwargs = dict(artist_mbid=artist_mbid, album_mbid=album_mbid, lang=lang))
    except: return None


def find_htbackdrops_artist_images(artist, mbid):
    htbackdrops_artist_images = None
    if mbid is not None:
        try:
            htbackdrops_artist_images = XML.ElementFromURL(HTBACKDROPS_MBID_SEARCH_URL % mbid).xpath('//image')
        except: pass
    if htbackdrops_artist_images is None or len(htbackdrops_artist_images) == 0:
        artist_results = find_htbackdrops_artist(artist)
        if artist_results and len(artist_results) > 0 and artist_results[0]['score'] >= 98:
            try:
                htbackdrops_artist_images = XML.ElementFromURL(HTBACKDROPS_KEYWORD_SEARCH_URL % String.URLEncode(artist_results[0]['id'])).xpath('//image')
            except Exception, e:
                 Log('Error fetching artist art from HTBackdrops by artist name: ' + str(e))
    if htbackdrops_artist_images is None or len(htbackdrops_artist_images) == 0:
        Log('Couldn\'t fetch HTBackdrops artist.')
    
    return htbackdrops_artist_images;



def find_artist_posters(posters, artist, lastfm_artist, fanart_artist, htbackdrops_artist_images):

    if artist == 'Various Artists':
      return

    # Fanart.tv.
    if lastfm_artist:
      if fanart_artist and 'artistthumb' in fanart_artist:
        posters.extend([thumb['url'] for thumb in fanart_artist['artistthumb']])


    # HT Backdrops.
    if htbackdrops_artist_images is not None:
        htbackdrops_posters = []
        htbackdrops_posters.extend([image.find('id').text for image in htbackdrops_artist_images if image.find('aid').text == '5'])
        count = 0
        for poster_id in htbackdrops_posters:
          posters.append(HTBACKDROPS_FULL_URL % poster_id)
          count += 1
          if count >= 50:
            # max 50 posters
            break

    # Last.fm.
    if lastfm_artist:
      posters.extend([image['#text'] for image in lastfm_artist['image'] if len(image['#text']) > 0 and image['size'] == 'mega'])
      posters.extend([image['#text'] for image in lastfm_artist['image'] if len(image['#text']) > 0 and image['size'] == 'extralarge'])
    
    # Discogs cache.
    try:
      images = XML.ElementFromURL('https://meta.plex.tv/a/' + quote(normalize_artist_name(artist))).xpath('//image')
      posters.extend([image.get('url') for image in images if image.get('primary') == '1'])
      posters.extend([image.get('url') for image in images if image.get('primary') == '0'])
    except:
      Log('No artist result from Discogs cache')      

def find_artist_art(arts, artist, lastfm_artist, fanart_artist, htbackdrops_artist_images, artist_mbid):

    # Fanart.tv.
    if fanart_artist and 'artistbackground' in fanart_artist:
      for art in fanart_artist['artistbackground']:
        arts.append((art['url'], art['url'].replace(FANART_TV_FANART_PATH, FANART_TV_PREVIEW_PATH)))

    # HT Backdrops.
    if htbackdrops_artist_images is not None:
        htbackdrops_arts = []
        htbackdrops_arts.extend([image.find('id').text for image in htbackdrops_artist_images if image.find('aid').text == '1'])
        count = 0
        for art_id in htbackdrops_arts:
          arts.append((HTBACKDROPS_FULL_URL % art_id, HTBACKDROPS_THUMB_URL % art_id))
          count += 1
          if count >= 50:
            # max 50 art
            break
