#
#  Plex Plug-in Framework
#  Copyright (C) 2008-2012 Plex, Inc. (James Clarke, Elan Feingold). All Rights Reserved.
#

from systemservice import SystemService

HELP_URL = "http://www.plexapp.com/screencasts/help9.json"
HELP_CACHE_TIME = 7200
class HelpService(SystemService):

  def __init__(self, system):
    SystemService.__init__(self, system)
    Log.Debug("Starting the help service")
    Plugin.AddViewGroup('Help_Groups', viewMode="List", mediaType="items")
    Plugin.AddViewGroup("Help_Videos", viewMode="InfoList", mediaType="items")
    Route.Connect('/system/help', self.help_root_menu)
    Route.Connect('/system/help/{group_name}', self.help_group_menu)

  def help_root_menu(self):
    help = JSON.ObjectFromURL(HELP_URL, cacheTime=HELP_CACHE_TIME)
    d = MediaContainer(
      art = R("help-art.png"),
      title1 = L("HS_TITLE"),
      viewGroup = "Help_Groups"
    )
    for group in help:
      d.Append(
        DirectoryItem(
          Route(self.help_group_menu, group_name = group["Name"]),
          group["Name"]
        )
      )
    return d
    
  def help_group_menu(self, group_name):
    help = JSON.ObjectFromURL(HELP_URL, cacheTime=HELP_CACHE_TIME)
    for group in help:
      if group_name == group["Name"]:
        d = MediaContainer(
          art = R("help-art.png"),
          title1 = L("HS_TITLE"),
          viewGroup = "Help_Videos"
        )
        for item in group["Items"]:
          d.Append(
            VideoItem(
              item["VideoUrl"],
              title = item["Title"],
              summary = item["Summary"],
              thumb = item["ThumbUrl"]
            )
          )
        return d
    