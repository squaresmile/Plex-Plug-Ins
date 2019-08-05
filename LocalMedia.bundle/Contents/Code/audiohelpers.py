import os
import helpers
import struct

from mutagen import File as MFile
from mutagen.flac import Picture

class AudioHelper(object):
  def __init__(self, filename):
    self.filename = filename


def AudioHelpers(filename):
  if len(filename) > 0:
    filename = helpers.unicodize(filename)
    try:
      tag = MFile(filename, None, True)
    except Exception, e:
      Log('Error getting file details for %s: %s' % (filename, e))
      return None

    if tag is not None:
      for cls in [ ID3AudioHelper, MP4AudioHelper, FLACAudioHelper, OGGAudioHelper, ASFAudioHelper ]:
        if cls.is_helper_for(type(tag).__name__):
          return cls(filename)
  return None


def parse_genres(genre):
  if genre.find(';') != -1:
    genre_list = genre.split(';')
  else:
    genre_list = genre.split('/')
    
  return genre_list


def parse_datefield_select_highest(tags, tagname, metadata_field):
  """
  Parse the date from the tags indicated by 'tagname' and compare the result to 'metadata_field'
  If the date is newer then 'metadata_field' or `metadata_field' is not set yet, return it.
  """
  year = tags.get(tagname)
  try:
    if year is not None and len(year.text) > 0:
      if len(str(year.text[0])) == 4:
        # year only, add 01-01
        available = Datetime.ParseDate(str(year.text[0]) + '-01-01').date()
      else:
        available = Datetime.ParseDate(str(year.text[0])).date()
      if metadata_field is None:
        return available
      elif (available > metadata_field):
        return available
  except Exception, e:
    Log('Exception reading  %s: %s' % (tagname, e))
  return metadata_field


def unpack_asf_image(data):
  """
  from https://git.zx2c4.com/zmusic-ng/commit/?id=f3194b59be16672dcb4b8856ef3a2f6e9161b108

  Helper function to unpack image data from a WM/Picture tag.
  The data has the following format:
  1 byte: Picture type (0-20), see ID3 APIC frame specification at http://www.id3.org/id3v2.4.0-frames
  4 bytes: Picture data length in LE format
  The image data in the given length
  """
  (type, size) = struct.unpack_from("<bi", data)
  pos = 5
  while data[pos:pos+2] != "\x00\x00":
    pos += 2
  pos += 2
  while data[pos:pos+2] != "\x00\x00":
    pos += 2
  pos += 2
  image_data = data[pos:pos+size]
  return (image_data, type)

#####################################################################################################################

class ID3AudioHelper(AudioHelper):
  @classmethod
  def is_helper_for(cls, tagType):
    return tagType in ('EasyID3', 'EasyMP3', 'EasyTrueAudio', 'ID3', 'MP3', 'TrueAudio', 'AIFF') # All of these file types use ID3 tags like MP3

  def get_album_sort_title(self):
    return self.tags.get('TSOA')
    
  def get_track_sort_title(self):
    return self.tags.get('TSOT')

  def get_track_genres(self):
    genre_list = []
    try:
      self.tags = tags = MFile(self.filename)
      genres = self.tags.get('TCON')
      if genres is not None and len(genres.text) > 0:
        for genre in genres.text:
          for sub_genre in parse_genres(genre):
            if sub_genre.strip():
              genre_list.append(sub_genre.strip())
    except Exception, e:
      Log('Exception reading TCON (genre): ' + str(e))
    return genre_list

  def get_artist_sort_title(self):
    try:
      self.tags = tags = MFile(self.filename)
      tag = self.tags.get('TSO2')
      if tag:
        return tag
    
      return self.tags.get('TSOP')
    except:
      pass
      
    return None

  def process_metadata(self, metadata):
    
    Log('Reading ID3 tags from: ' + self.filename)
    try:
      self.tags = tags = MFile(self.filename)
      Log('Found tags: ' + str(tags.keys()))
    except: 
      Log('An error occurred while attempting to read ID3 tags from ' + self.filename)
      return

    # Release Date (original_available_at)
    metadata.originally_available_at = parse_datefield_select_highest(tags, 'TDRC', metadata.originally_available_at)

    # Release Date (available_at)
    metadata.available_at = parse_datefield_select_highest(tags, 'TDRL', metadata.available_at)

    # Genres
    try:
      genres = tags.get('TCON')
      if genres is not None and len(genres.text) > 0:
        for genre in genres.text:
          for sub_genre in parse_genres(genre):
            sub_genre_stripped = sub_genre.strip()
            if sub_genre_stripped:
              if sub_genre_stripped not in metadata.genres:
                metadata.genres.add(sub_genre_stripped)
    except Exception, e:
      Log('Exception reading TCON (genre): ' + str(e))

    # Posters
    try:
      valid_posters = []
      frames = [f for f in tags if f.startswith('APIC:')]
      for frame in frames:
        if (tags[frame].mime == 'image/jpeg') or (tags[frame].mime == 'image/jpg'): ext = 'jpg'
        elif tags[frame].mime == 'image/png': ext = 'png'
        elif tags[frame].mime == 'image/gif': ext = 'gif'
        else: ext = ''
        poster_name = hashlib.md5(tags[frame].data).hexdigest()
        valid_posters.append(poster_name)
        if poster_name not in metadata.posters:
          Log('Adding embedded APIC art: ' + poster_name)
          metadata.posters[poster_name] = Proxy.Media(tags[frame].data, ext = ext)
    except Exception, e:
      Log('Exception adding posters: ' + str(e))

    return valid_posters

#####################################################################################################################

class MP4AudioHelper(AudioHelper):
  @classmethod
  def is_helper_for(cls, tagType):
    return tagType in ['MP4','EasyMP4']

  def get_track_sort_title(self):
    try:
      tags = MFile(self.filename, easy=True)
      return tags.get('titlesort')[0]  # 'sonm'
    except:      
      return None

  def get_album_sort_title(self):
    try:
      tags = MFile(self.filename, easy=True)
      return tags.get('albumsort')[0]  # 'soal'
    except:      
      return None
        
  def get_artist_sort_title(self):
    try:
      tags = MFile(self.filename, easy=True)
      tag = tags.get('albumartistsort')  # 'soaa'
      if tag:
        return tag[0]
      return tags.get('artistsort')[0]  # 'soar'
    except:      
      return None

  def get_track_genres(self):
    genre_list = []
    try:
      tags = MFile(self.filename)
      genres = tags.get('\xa9gen')
      if genres is not None and len(genres) > 0:
        for genre in genres:
          for sub_genre in parse_genres(genre):
            if sub_genre.strip():
              genre_list.append(sub_genre.strip())
    except Exception, e:
      Log('Exception reading (genre): ' + str(e))
    return genre_list


  def process_metadata(self, metadata):

    Log('Reading MP4 tags from: ' + self.filename)
    try: 
      tags = MFile(self.filename)
      Log('Found tags: ' + str(tags.keys()))
    except: 
      Log('An error occurred while attempting to parse the MP4 file: ' + self.filename)
      return

    # Genres
    try:
      genres = tags.get('\xa9gen')
      if genres is not None and len(genres) > 0:
        for genre in genres:
          for sub_genre in parse_genres(genre):
            sub_genre_stripped = sub_genre.strip()
            if sub_genre_stripped:
              if sub_genre_stripped not in metadata.genres:
                metadata.genres.add(sub_genre_stripped)
    except Exception, e:
      Log('Exception reading \xa9gen (genre): ' + str(e))

    # Release Date
    try:
      release_date = tags.get('\xa9day')
      if release_date is not None and len(release_date) > 0:
        available = Datetime.ParseDate(release_date[0].split('T')[0]).date()
        if metadata.originally_available_at is None:
          metadata.originally_available_at = available
        elif (available > metadata.originally_available_at):
          # more then one date: use highest one
          metadata.originally_available_at = available
    except Exception, e:
      Log('Exception reading \xa9day (release date)' + str(e))

    # Posters
    valid_posters = []
    try:
      covers = tags.get('covr')
      if covers is not None and len(covers) > 0:
        for cover in covers:
          poster_name = hashlib.md5(cover).hexdigest()
          valid_posters.append(poster_name)
          if poster_name not in metadata.posters:
            Log('Adding embedded cover art: ' + poster_name)
            metadata.posters[poster_name] = Proxy.Media(cover)
    except Exception, e:
      Log('Exception adding posters: ' + str(e))

    return valid_posters

#####################################################################################################################

class FLACAudioHelper(AudioHelper):
  @classmethod
  def is_helper_for(cls, tagType):
    return tagType in ['FLAC']

  def process_metadata(self, metadata):

    Log('Reading FLAC tags from: ' + self.filename)
    try: 
      tags = MFile(self.filename)
      Log('Found tags: ' + str(tags.keys()))
    except:
      Log('An error occurred while attempting to parse the FLAC file: ' + self.filename)
      return

    # Genres
    try:
      genres = tags.get('genre')
      if genres is not None and len(genres) > 0:
        metadata.genres.clear()
        for genre in genres:
          for sub_genre in parse_genres(genre):
            if sub_genre.strip():
              metadata.genres.add(sub_genre.strip())
    except Exception, e:
      Log('Exception reading genre: ' + str(e))

    # Release Date
    try:
      release_date = tags.get('date')
      if release_date is not None and len(release_date) > 0:
        metadata.originally_available_at = Datetime.ParseDate(release_date[0])
    except Exception, e:
      Log('Exception reading release date' + str(e))

    # Posters
    valid_posters = []
    try:
      covers = tags.pictures
      if covers is not None and len(covers) > 0:
        for cover in covers:
          poster_name = hashlib.md5(cover.data).hexdigest()
          valid_posters.append(poster_name)
          if poster_name not in metadata.posters:
            Log('Adding embedded cover art: ' + poster_name)
            metadata.posters[poster_name] = Proxy.Media(cover.data)
    except Exception, e:
      Log('Exception adding posters: ' + str(e))

    return valid_posters

#####################################################################################################################

class OGGAudioHelper(AudioHelper):
  @classmethod
  def is_helper_for(cls, tagType):
    return tagType in ['OggVorbis', 'OggOpus']

  def process_metadata(self, metadata):

    Log('Reading OGG tags from: ' + self.filename)
    try: 
      tags = MFile(self.filename)
      Log('Found tags: ' + str(tags.keys()))
    except:
      Log('An error occured while attempting to parse the OGG file: ' + self.filename)
      return

    # Genres
    try:
      genres = tags.get('genre')
      if genres is not None and len(genres) > 0:
        metadata.genres.clear()
        for genre in genres:
          for sub_genre in parse_genres(genre):
            if sub_genre.strip():
              metadata.genres.add(sub_genre.strip())
    except Exception, e:
      Log('Exception reading genre: ' + str(e))

    # Release Date
    try:
      release_date = tags.get('date')
      if release_date is not None and len(release_date) > 0:
        metadata.originally_available_at = Datetime.ParseDate(release_date[0])
    except Exception, e:
      Log('Exception reading release date' + str(e))

    # Posters
    valid_posters = []
    try:
      covers = tags.get('metadata_block_picture')
      if covers is not None and len(covers) > 0:
        for cover in covers:
          poster = Picture(base64.standard_b64decode(cover))
          poster_name = hashlib.md5(poster.data).hexdigest()
          valid_posters.append(poster_name)
          if poster_name not in metadata.posters:
            Log('Adding embedded cover art: ' + poster_name)
            metadata.posters[poster_name] = Proxy.Media(poster.data)
    except Exception, e:
      Log('Exception adding posters: ' + str(e))

    return valid_posters

#####################################################################################################################

class ASFAudioHelper(AudioHelper):
  @classmethod
  def is_helper_for(cls, tagType):
    return tagType in ['ASF']

  def get_track_genres(self):
    genre_list = []
    try:
      tags = MFile(self.filename)
      genres = tags.get('WM/Genre')
      if genres is not None and len(genres) > 0:
        for genre in genres:
          for sub_genre in parse_genres(genre.value):
            if sub_genre.strip():
              genre_list.append(sub_genre.strip())
    except Exception, e:
      Log('Exception reading (genre): ' + str(e))
    return genre_list

  def process_metadata(self, metadata):

    Log('Reading ASF tags from: ' + self.filename)
    try: 
      tags = MFile(self.filename)
      Log('Found tags: ' + str(tags.keys()))
    except:
      Log('An error occured while attempting to parse the ASF file: ' + self.filename)
      return

    # Genres
    try:
      genres = tags.get('WM/Genre')
      if genres is not None and len(genres) > 0:
        metadata.genres.clear()
        for genre in genres:
          for sub_genre in parse_genres(genre.value):
            if sub_genre.strip():
              metadata.genres.add(sub_genre.strip())
    except Exception, e:
      Log('Exception reading genre: ' + str(e))

    # Release Date
    try:
      release_date = tags.get('WM/Year')
      if release_date is not None and len(release_date) > 0:
        release_date_value = release_date[0].value
        # year only, add 01-01
        metadata.originally_available_at = Datetime.ParseDate(release_date_value + '-01-01').date()
    except Exception, e:
      Log('Exception reading release date' + str(e))

    # Posters
    valid_posters = []
    try:
      covers = tags.get('WM/Picture')
      if covers is not None and len(covers) > 0:
        for cover in covers:
          (poster, type) = unpack_asf_image(cover.value)
          if type == 3: # Only cover images
            poster_name = hashlib.md5(poster).hexdigest()
            valid_posters.append(poster_name)
            if poster_name not in metadata.posters:
              Log('Adding embedded cover art: ' + poster_name)
              metadata.posters[poster_name] = Proxy.Media(poster)
    except Exception, e:
      Log('Exception adding posters: ' + str(e))

    return valid_posters