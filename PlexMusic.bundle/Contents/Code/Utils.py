#
# Copyright (c) 2014 Plex Development Team. All rights reserved.
#

import unicodedata
import re


# Normalization regexes
RE_A_AN_THE = re.compile(r'^(an |a |the )|(, an |, a |, the)$')
RE_PARENS = re.compile(r'\([^\)]+\)$|\{[^\}]+\}$|\[[^\]]+ \]$')
RE_PUNCTUATION = re.compile(r'[!@#\$%\^\*\_\+=\{\}\[\]\|<>`\:\-\(\)\?/\\\&\~\,\'\']')
RE_MULTI_SPACE = re.compile(r'\s+')


def number_to_text(n):
  if n < 0:
    return 'minus ' + number_to_text(-n)
  elif n == 0:
    return ''
  elif n <= 19:
    return ('one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen')[n - 1] + ' '
  elif n <= 99:
    return ('twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety')[n / 10 - 2] + ' ' + number_to_text(n % 10)
  elif n <= 199:
    return 'one hundred ' + number_to_text(n % 100)
  elif n <= 999:
    return number_to_text(n / 100) + 'hundred ' + number_to_text(n % 100)
  elif n <= 1999:
    return 'one thousand ' + number_to_text(n % 1000)
  elif n <= 999999:
    return number_to_text(n / 1000) + 'thousand ' + number_to_text(n % 1000)
  elif n <= 1999999:
    return 'one million ' + number_to_text(n % 1000000)
  elif n <= 999999999:
    return number_to_text(n / 1000000) + 'million ' + number_to_text(n % 1000000)
  elif n <= 1999999999:
    return 'one billion ' + number_to_text(n % 1000000000)
  else:
    return number_to_text(n / 1000000000) + 'billion ' + number_to_text(n % 1000000000)


def normalize_artist_name(artist_name):
  if not isinstance(artist_name, basestring):
    return ''
  
  artist_name = artist_name.strip().lower().replace('&', 'and').strip()
  artist_name = RE_A_AN_THE.sub('', artist_name)
  tmp_artist_name = RE_PARENS.sub('', artist_name)
  artist_name = tmp_artist_name if len(tmp_artist_name.strip()) > 0 else artist_name
  tmp_artist_name = RE_PUNCTUATION.sub(' ', artist_name)
  artist_name = tmp_artist_name if len(tmp_artist_name.strip()) > 0 else artist_name
  artist_name = re.sub(r'\b\d+\b', lambda m: number_to_text(int(m.group())).replace('-', ' '), artist_name)
  
  try:
    normalized = unicodedata.normalize('NFKD', artist_name.decode('utf-8'))
  except UnicodeError:
    normalized = unicodedata.normalize('NFKD', artist_name)
  
  corrected = ''
  for i in range(len(normalized)):
    if not unicodedata.combining(normalized[i]):
      corrected += normalized[i]
  artist_name = corrected
  
  artist_name = RE_MULTI_SPACE.sub(' ', artist_name).strip()
  artist_name = artist_name.replace(' ', '_')
  
  return artist_name