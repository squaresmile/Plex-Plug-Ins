#
#  Plex Plug-in Framework
#  Copyright (C) 2008-2015 Plex, Inc. (James Clarke, Elan Feingold). All Rights Reserved.
#

from systemservice import SystemService

# TODO: Verify this works, remove eventually when compatibility with old Frameworks isn't an issue.
try:
  VERBOSE = Framework.constants.flags.syslog_store_service in Core.sandbox.flags
except:
  VERBOSE = hasattr(Core, 'host') and hasattr(Core.host, '_flags') and 'SystemLogVerboseStoreService' in getattr(Core.host, '_flags')

AS_URL                      = "https://plugins.plex.tv"
AS_CACHE_TIME               = 3600
ALL_PLUGINS_URL             = "%s/apps/all.json" % AS_URL
BETA_PLUGINS_URL            = "%s/apps/beta.json" % AS_URL
RECENT_PLUGINS_URL          = "%s/apps/recent.json" % AS_URL
UPDATED_PLUGINS_URL         = "%s/apps/updated.json" % AS_URL
POPULAR_PLUGINS_URL         = "%s/apps/top_downloaded.json" % AS_URL
CATEGORIES_URL              = "%s/categories.json" % AS_URL
MEDIA_TYPES_URL             = "%s/media_types.json" % AS_URL
SERVER_PLAT_HEADER          = 'X-Plex-Server-Platform'
CLIENT_PLAT_HEADER_OLD      = 'X-Plex-Client-Platform'
CLIENT_PLAT_HEADER          = 'X-Plex-Platform'
CLIENT_CAP_HEADER           = 'X-Plex-Client-Capabilities'

class PluginClass(object):
  Content       = 'content'
  Agent         = 'agent'
  System        = 'system'

class ASContainer(FactoryClass(MediaContainer)):
  art = R('store-art.png')
  title1 = L('AS_TITLE')
  noCache = True
ASContainer = Factory(ASContainer)

def sort_by_title(mc):
  def sort_func(item):
    ret = item.name.lower()
    if ret[:4] == 'the ':
      ret = ret[4:]
    return ret
  items = sorted(mc, key=sort_func)
  mc.Clear()
  mc.Extend(items)
  return mc
  
class PluginInfo(Object):
  def __init__(self, system, app, beta=False):
    self.system = system
    self.identifier = app['identifier']
    self.name = app['name']
    self.description = app['description']
    self.regions = []
    self.hash = None
    self.git_sha = None
    self.framework_version = None
    
    self.revoked = 'revoked' in app and app['revoked']
    self.hidden = 'hidden' in app and app['hidden']
    self.required = 'required' in app and app['required']
    self.broken = 'broken' in app and app['broken']
    self.broken_reason = app.get('broken_reason')
    
    self.plugin_class = PluginClass.Content if 'plugin_class' not in app else app['plugin_class'].lower()
    
    if 'current_version' in app:
      for region in app['current_version']['regions']:
        self.regions.append(region['name'])
        
      platform = Platform.OS.lower() + '-' + Platform.CPU.lower()
      
      if app['current_version'].has_key('platform_checksums'):
        platform_checksums = app['current_version']['platform_checksums']
        if platform in platform_checksums:
          self.hash = platform_checksums[platform]
      
      if app['current_version'].has_key('framework_version'):
        self.framework_version = app['current_version']['framework_version']

      if app['current_version'].has_key('github_revision'):
        self.git_sha = app['current_version']['github_revision']
      
    else: 
      platform = None
    
    # Fake the version number for the framework to ensure platform-specific checks are applied  
    if self.identifier == "com.plexapp.framework":
      self.framework_version = "2"
    
    self.featured = app['featured']
    self.platform = platform
    
    if self.hash == None:
      self.hash = app['current_version_checksum']
      
    self.beta = beta
    if app['icon_url']:
      self.icon = AS_URL + app['icon_url'] if app['icon_url'][0] == '/' else app['icon_url']
    else:
      self.icon = None

    if app['fan_art_url']:
      self.art = AS_URL + app['fan_art_url']
    else:
      self.art = None

    self.github_url = app.get('github_url')    

    info = lambda key: [x['name'] for x in app.get(key, [])]

    # Read categories this plug-in should appear in
    self.categories = info('categories')
    
    # Read media types for this plug-in
    self.media_types = info('media_types')
    
    # Read compatible server platforms for this plug-in
    self.server_platforms = info('server_platforms')  
      
    # Read allowed client platforms for this plug-in
    self.client_platforms = info('client_platforms')

    # Read excluded client platforms for this plug-in (used when the above list is empty or contains a wildcard)
    self.client_platform_exclusions = info('client_platform_exclusions')
      
    # Read required client capabilities for this plug-in
    self.required_capabilities = {}
    for capability in app['capabilities']:
      cap_kind = capability['kind']
      if cap_kind not in self.required_capabilities:
        self.required_capabilities[cap_kind] = []
      self.required_capabilities[cap_kind].append(capability['name'])
      
  @property
  def is_installed(self): return self.identifier in self.system.bundleservice.bundles
    
  @property
  def is_required(self): return self.required or self.identifier in self.system.storeservice.required_app_list

  @property
  def is_system(self): return self.plugin_class == PluginClass.System or self.identifier in self.system.storeservice.system_app_list
  
  @property
  def is_hidden(self): return self.hidden or self.identifier in self.system.storeservice.hidden_app_list
  
  @property
  def is_revoked(self): return self.revoked
  
  @property
  def is_available(self):
    region = self.system.storeservice.region
    return region == None or len(self.regions) == 0 or region in self.regions
  
  @property
  def supports_current_server(self):
    return len(self.server_platforms) == 0 or Core.runtime.platform in self.server_platforms
    
  def supports_client_platform(self, client):
    # If the client is undefined, assume it's supported
    if client == None:
      return True

    # If the list of inclusive client platforms is empty or contains the wildcard character, check for exclusions.
    if len(self.client_platforms) == 0 or '*' in self.client_platforms:
      return client not in self.client_platform_exclusions

    # Otherwise, check whether the client appears in the list of inclusive client platforms.
    return client in self.client_platforms


    
  def capability_requirements_met(self, caps):
    if len(self.required_capabilities) == 0 or caps == None:
      return True
    for cap_kind in self.required_capabilities:
      if cap_kind not in caps:
        return False
      cap_names = self.required_capabilities[cap_kind]
      for cap_name in cap_names:
        if cap_name not in caps[cap_kind]:
          return False
    return True
          
  @property
  def supported(self):
    if 'X-Plex-Disable-Capability-Checking' in Request.Headers: return True
    client_platform = self.system.storeservice.current_client_platform
    client_capabilities = self.system.storeservice.current_client_capabilities
    return self.supports_current_server and (self.plugin_class == PluginClass.Agent or self.supports_client_platform(client_platform)) and self.capability_requirements_met(client_capabilities)

class StoreService(SystemService):
  
  def __init__(self, system):
    SystemService.__init__(self, system)
    Log.Debug("Starting the store service")
    
    Plugin.AddViewGroup('Store:Info', 'InfoList', 'items')
    Plugin.AddViewGroup('Store:List', 'List', 'items')
    
    #TODO: Add this to the store server so we don't have to update the System bundle to change it
    appGroups = JSON.ObjectFromString(Resource.Load('AppGroups.json'))
    self.system_app_list = appGroups['System']
    self.required_app_list = appGroups['Required']
    self.hidden_app_list = appGroups['Hidden']
    self.ignored_dev_apps = appGroups['IgnoreDevMode']
    self.updater_scheduled = False
    self.update_lock = Thread.Lock()
    self.geo_region = None
    self.name_substitutions = JSON.ObjectFromString(Resource.Load('NameSubstitutions.json'))
    
    self.media_icons = {
      'Photos'    : 'Camera.png',
      'Video'     : 'TV.png',
      'Music'     : 'CD.png'
    }
    
    self.plugins = {}
    
    # TODO: Remove the old path when appropriate
    Route.Connect('/system/appstore', self.gui_main_menu)
    Route.Connect('/system/appstore/more', self.gui_more_menu)
    Route.Connect('/system/appstore/apps', self.gui_all_available_menu)
    Route.Connect('/system/appstore/installed', self.gui_installed_menu)
    Route.Connect('/system/appstore/featured', self.gui_featured_menu)
    Route.Connect('/system/appstore/new', self.gui_new_menu)
    Route.Connect('/system/appstore/popular', self.gui_popular_menu)
    Route.Connect('/system/appstore/updated', self.gui_updated_menu)
    Route.Connect('/system/appstore/international', self.gui_international_menu)
    Route.Connect('/system/appstore/apps/{identifier}', self.gui_app_popup)
    Route.Connect('/system/appstore/categories', self.gui_categories_menu)
    Route.Connect('/system/appstore/categories/{name}', self.gui_category_menu)
    Route.Connect('/system/appstore/types', self.gui_types_menu)
    Route.Connect('/system/appstore/types/{name}', self.gui_type_menu)
    Route.Connect('/system/appstore/updates', self.gui_show_updates_menu)
    
    Route.Connect('/system/plexonline', self.gui_main_menu)
    Route.Connect('/system/plexonline/more', self.gui_more_menu)
    Route.Connect('/system/plexonline/apps', self.gui_all_available_menu)
    Route.Connect('/system/plexonline/installed', self.gui_installed_menu)
    Route.Connect('/system/plexonline/featured', self.gui_featured_menu)
    Route.Connect('/system/plexonline/new', self.gui_new_menu)
    Route.Connect('/system/plexonline/popular', self.gui_popular_menu)
    Route.Connect('/system/plexonline/updated', self.gui_updated_menu)
    Route.Connect('/system/plexonline/international', self.gui_international_menu)
    Route.Connect('/system/plexonline/agents', self.gui_agents_menu)
    Route.Connect('/system/plexonline/apps/{identifier}', self.gui_app_popup)
    Route.Connect('/system/plexonline/categories', self.gui_categories_menu)
    Route.Connect('/system/plexonline/categories/{name}', self.gui_category_menu)
    Route.Connect('/system/plexonline/types', self.gui_types_menu)
    Route.Connect('/system/plexonline/types/{name}', self.gui_type_menu)
    Route.Connect('/system/plexonline/updates', self.gui_show_updates_menu)
    
    Route.Connect('/system/channeldirectory', self.gui_channel_directory)
    Route.Connect('/system/channeldirectory/updates', self.gui_list_updates)
    
    Core.messaging.expose_function(self.is_channel_broken, '_StoreService:IsChannelBroken')
    
    Core.runtime.create_thread(self.start)
    
  def is_channel_broken(self, identifier):
    plugin = self.plugins.get(identifier)
    if plugin:
      return plugin.broken, plugin.broken_reason
    else:
      return False, None
    
  @property
  def required_apps(self):
    result = list()
    for identifier in self.plugins:
      if self.plugins[identifier].is_required:
        result.append(identifier)
    return result
  
  @property
  def system_apps(self):
    result = list()
    for identifier in self.plugins:
      if self.plugins[identifier].is_system:
        result.append(identifier)
    return result

  @property
  def hidden_apps(self):
    result = list()
    for identifier in self.plugins:
      if self.plugins[identifier].is_hidden:
        result.append(identifier)
    return result
  
  @property
  def revoked_apps(self):
    result = list()
    for identifier in self.plugins:
      if self.plugins[identifier].is_revoked:
        result.append(identifier)
    return result
    
  @property
  def region(self):
    # Region is set to autodetect...
    if Prefs['PO_RGN'] == 'PO_RGN_AUTO':
      
      # If we haven't perfomed geolocation yet, get the country now, returning None if it fails
      if self.geo_region == None:
        try:
          self.geo_region = Locale.Geolocation
          Log.Info('Geolocated region: %s', self.geo_region)
        except:
          self.geo_region = None
          Log.Error("Failed to perform geolocation")
      return self.geo_region
    
    # No region defined
    elif Prefs['PO_RGN'] == 'PO_RGN_NONE':
      return None
      
    # Otherwise, we have a user-selected region
    else:
      return Prefs['PO_RGN'][7:]
      
  def start(self):
    self.update(now=True)
    self.start_auto_updater()
    Log.Debug("Started the store service")
      
  def start_auto_updater(self):
    no_updates_path = Core.storage.join_path(Core.app_support_path, 'NoAutomaticUpdates')
    if Core.storage.file_exists(no_updates_path) or self.updater_scheduled: return
    self.updater_scheduled = True
    Log("Starting automatic update thread")
    Thread.CreateTimer(60, self.auto_update_thread)
    
  @property
  def auto_update_interval(self):
    return Util.RandomInt(CACHE_1HOUR * 4, CACHE_1HOUR * 8)
    
  @property
  def auto_update_postpone_time(self):
    return 600
    
  def auto_update_thread(self):
    if self.system.installservice.installing:
      return
    
    # Don't update if the agents are busy, we could break things by restarting
    if len(self.system.agentservice.pending_updates) > 0 or len(self.system.agentservice.processing_updates) > 0 or self.system.agentservice.searching:
      Log("The agent service is busy - postponing automatic update check")
      Thread.CreateTimer(self.auto_update_postpone_time, self.auto_update_thread)
      return
      
    try:
      Log("Starting automatic update check")
      updates = self.available_updates()
      if len(updates) > 0:
        Log("Starting automatic update installation")
        self.system.installservice.install_updates_silently(updates)
      else:
        Log("All plug-ins are up to date")
    finally:
      Thread.CreateTimer(self.auto_update_interval, self.auto_update_thread)
    
  @property
  def current_client_platform(self):
    if Request.Headers == None:
      return None

    if CLIENT_PLAT_HEADER in Request.Headers:
      return Request.Headers[CLIENT_PLAT_HEADER]

    elif CLIENT_PLAT_HEADER_OLD in Request.Headers:
      return Request.Headers[CLIENT_PLAT_HEADER_OLD]
      
    else:
      return None
      
  @property
  def current_client_capabilities(self):
    if Request.Headers == None or CLIENT_CAP_HEADER not in Request.Headers:
      return None
    cap_header = Request.Headers[CLIENT_CAP_HEADER]
    cap_parts = cap_header.split(';')
    ret = {}
    for cap_part in cap_parts:
      cap_name, cap_values = cap_part.split('=')
      ret[cap_name] = cap_values.split(',')
    return ret
    
  def update(self, now=False):
    self.update_lock.acquire()
    current_plugins = self.plugins.keys()
    try:
      if now: cacheTime = 0
      else: cacheTime = AS_CACHE_TIME
      
      # Create a query string containing platform information
      for x in range(10):
        if Platform.MachineIdentifier == None:
          Thread.Sleep(0.5)
        else:
          break
          
      qs = '?frameworkVersion=%s' % Core.version

      try:
        qs += '&machineIdentifier=%s' % Platform.MachineIdentifier
      except:
        Log.Exception("Exception adding machine identifier to query string")
      
      try:
        qs += '&os=%s' % Platform.OS
      except:
        Log.Exception("Exception adding OS to query string")
      
      try:
        qs += '&osVersion=%s' % String.Quote(Platform.OSVersion)
      except:
        Log.Exception("Exception adding OS version string to query string")
      
      try:
        qs += '&cpu=%s' % Platform.CPU
      except:
        Log.Exception("Exception adding CPU to query string")
      
      try:
        qs += '&serverVersion=%s' % Platform.ServerVersion
      except:
        Log.Exception("Exception adding server version to query string")
      
      try:
        qs += '&systemRevision=%s' % self.system.revision
      except:
        Log.Exception("Exception adding system revision to query string")
      

      appDict = JSON.ObjectFromURL(ALL_PLUGINS_URL + qs, cacheTime=cacheTime)
      beta_identifiers = []
      
      # If the user has opted in, download the beta feed
      betaAppDict = {}
      try:
        if Prefs['DEV_MODE'] == True:
          Log("Loading beta plugins from store.")
          betaAppDict = JSON.ObjectFromURL(BETA_PLUGINS_URL, cacheTime=cacheTime)
        else:
          Log("No beta plugins.")
      except:
        pass
        
      # Add the beta plug-ins first
      for item in betaAppDict:
        try:

          app = item['app']
          identifier = app['identifier']

          # Skip bundled plug-ins.
          if identifier in self.system.bundleservice.bundled_identifiers:
            continue

          log_msg = None
          if identifier not in current_plugins:
            log_msg = "Added new beta plug-in '%s' (class: %s)"
          else:
            if self.plugins[identifier].beta == False:
              log_msg = "Updated information for plug-in '%s' (class: %s) to a beta version"
            current_plugins.remove(identifier)
          plugin_info = PluginInfo(self.system, app, beta=True)
          if log_msg and VERBOSE:
            Log.Debug(log_msg, identifier, plugin_info.plugin_class)
          self.plugins[identifier] = plugin_info
          beta_identifiers.append(identifier)
        except:
          Core.log_except(None, 'Failed to construct a plug-in information object for %s', app['identifier'])
      
      # Add stable plug-ins unless a beta version already exists
      for item in appDict:
        try:

          app = item['app']
          identifier = app['identifier']

          # Skip bundled plug-ins.
          if identifier in self.system.bundleservice.bundled_identifiers:
            continue

          if identifier not in beta_identifiers:
            log_msg = None
            if identifier not in current_plugins:
              log_msg = "Added new plug-in '%s' (class: %s)"
            elif self.plugins[identifier].beta == True:
              log_msg = "Updated information for plug-in '%s' (class: %s) to a stable version"
            plugin_info = PluginInfo(self.system, app)
            if log_msg and VERBOSE:
              Log.Debug(log_msg, identifier, plugin_info.plugin_class)
            self.plugins[identifier] = plugin_info
          if identifier in current_plugins:
            current_plugins.remove(identifier)
        except:
          Core.log_except(None, 'Failed to construct a plug-in information object for %s', app['identifier'])
      
      for identifier in current_plugins:
        del self.plugins[identifier]
        
    except:
      Log("Failed to fetch Plex Online data - the store probably won't work")
      Core.log_except(None, "Error info")
    finally:
      self.update_lock.release()
      
  def available_updates(self, now=False):
    self.system.bundleservice.update_bundles()
    self.update(now)
    updates = []
    for identifier in self.plugins:
      plugin = self.plugins[identifier]
      if not plugin.is_installed and plugin.is_required:
        Log("Required plug-in '%s' [%s] isn't installed." % (plugin.name, identifier))
        updates.append(identifier)
      elif plugin.is_installed:
        bundle = self.system.bundleservice.bundles[identifier]
        if bundle.ignore:
          Log("'%s' plug-in [%s] is currently being ignored", plugin.name, plugin.identifier)
        elif bundle.git_sha != plugin.git_sha:
          Log("'%s' plug-in [%s] has an update available  (%s => %s)" % (plugin.name, identifier, bundle.git_sha, plugin.git_sha))
          updates.append(identifier)
        else:
          Log("'%s' plug-in [%s] is up to date (%s)", plugin.name, plugin.identifier, bundle.git_sha)
    return updates


  # Constructs a container of plug-ins based on a given lambda function
  def gui_lambda_menu(self, f, title1=None, title2=None, sort=True, check_availability=True):
    self.system.bundleservice.update_bundles()
    d = ASContainer(viewGroup="Store:Info")
    if title1: d.title1 = title1
    if title2: d.title2 = title2
    self.update()
    for identifier in self.plugins:
      plugin = self.plugins[identifier]
      if f(plugin):
        self.gui_append_app_item(d, plugin, check_availability=check_availability)
    if sort:
      return sort_by_title(d)
    else:
      return d
    
  # Constructs a container of plug-ins based on the JSON-formatted content at a given URL
  def gui_json_menu(self, url, title2=None, sort=False):
    self.system.bundleservice.update_bundles()
    self.update()
    appDict = JSON.ObjectFromURL(url, cacheTime=AS_CACHE_TIME)
    d = ASContainer(viewGroup="Store:Info", title2=title2)
    for item in appDict:
      if item['app']['identifier'] in self.plugins:
        self.gui_append_app_item(d, self.plugins[item['app']['identifier']])
      #else:
        #print "%s not in self.plugins" % item['app']['identifier']
    if sort:
      return sort_by_title(d)
    else:
      return d
    
  # Appends an item for the given plug-in to the given directory
  def gui_append_app_item(self, d, plugin, check_availability=True):
    if plugin.is_hidden or plugin.is_required or not plugin.supported or (check_availability and not plugin.is_available): return
    d.Append(PopupDirectoryItem(
      Route(self.gui_app_popup, identifier=plugin.identifier),
      title = plugin.name if plugin.name not in self.name_substitutions else self.name_substitutions[plugin.name],
      installed = plugin.is_installed,
      summary = plugin.description,
      thumb = plugin.icon,
    ))
  
  def gui_app_popup(self, identifier):
    self.system.bundleservice.update_bundles()
    self.update()
    d = ASContainer()
    plugin = self.plugins[identifier]
    if not plugin.is_installed:
      d.Append(DirectoryItem(Route(self.system.installservice.gui_install, identifier=identifier), L('AS_MENU_INSTALL')))
    else:
      d.Append(DirectoryItem(Route(self.system.installservice.gui_update, identifier=identifier), L('AS_MENU_UPDATE')))
      d.Append(DirectoryItem(Route(self.system.installservice.gui_restart, identifier=identifier), L('AS_MENU_RESTART')))
      d.Append(DirectoryItem(Route(self.system.installservice.gui_reset, identifier=identifier), L('AS_MENU_RESET')))
      d.Append(DirectoryItem(Route(self.system.installservice.gui_uninstall, identifier=identifier), L('AS_MENU_UNINSTALL')))
    return d
    
  def gui_main_menu(self):
    d = ASContainer()
    d.Append(DirectoryItem(Route(self.gui_featured_menu), L('AS_MENU_FEATURED'), thumb=S('Favorite.png')))
    d.Append(DirectoryItem(Route(self.gui_new_menu), L('AS_MENU_NEW'), thumb=S('NewStuff.png')))
    d.Append(DirectoryItem(Route(self.gui_popular_menu), L('AS_MENU_POPULAR'), thumb=S('Popular.png')))
    d.Append(DirectoryItem(Route(self.gui_updated_menu), L('AS_MENU_UPDATED'), thumb=S('Recent.png')))
    d.Append(DirectoryItem(Route(self.gui_categories_menu), L('AS_MENU_CATEGORIES'), thumb=S('Book1.png')))
    d.Append(DirectoryItem(Route(self.gui_types_menu), L('AS_MENU_TYPES'), thumb=S('Book2.png')))
    d.Append(DirectoryItem(Route(self.gui_more_menu), L('AS_MENU_MORE'), thumb=S('More.png')))
    return d
 
  def gui_more_menu(self, goBack='0'):
    d = ASContainer(replaceParent=(goBack == '1'))
    d.Append(DirectoryItem(Route(self.gui_all_available_menu), L('AS_MENU_AVAILABLE'), thumb=S('FlagGreen.png')))
    d.Append(DirectoryItem(Route(self.gui_international_menu), L('AS_MENU_INTERNATIONAL'), thumb=S('World.png')))
    d.Append(DirectoryItem(Route(self.gui_agents_menu), L('AS_MENU_AGENTS'), thumb=S('Bundle.png')))
    d.Append(DirectoryItem(Route(self.gui_installed_menu), L('AS_MENU_INSTALLED'), thumb=S('Favorite.png')))
    d.Append(DirectoryItem(Route(self.gui_show_updates_menu), L('AS_MENU_SHOW_UPDATES'), thumb=S('Network.png')))
    d.Append(DirectoryItem(Route(self.system.installservice.gui_update_history_menu), L('AS_VIEW_HISTORY'), thumb=S('History.png')))
    d.Append(PrefsItem(L('AS_MENU_PREFS'), thumb=S('Gear.png')))
    return d
    
  def gui_all_available_menu(self):
    return self.gui_lambda_menu(lambda x: True, title2=L('AS_MENU_AVAILABLE'))

  def gui_installed_menu(self):   
    return self.gui_lambda_menu(lambda x: x.is_installed, title2=L('AS_MENU_INSTALLED'))
    
  def gui_agents_menu(self):
    return self.gui_lambda_menu(lambda x: x.plugin_class == PluginClass.Agent, title2=L('AS_MENU_AGENTS'))
    
  def gui_international_menu(self):
    return self.gui_lambda_menu(lambda x: len(x.regions) > 0 and self.region not in x.regions, check_availability=False, title2=L('AS_MENU_INTERNATIONAL'))
  
  def gui_featured_menu(self): return self.gui_lambda_menu(lambda x: x.featured, title2=L('AS_MENU_FEATURED'))
  
  def gui_new_menu(self): return self.gui_json_menu(RECENT_PLUGINS_URL, title2=L('AS_MENU_NEW'))
  
  def gui_updated_menu(self): return self.gui_json_menu(UPDATED_PLUGINS_URL, title2=L('AS_MENU_UPDATED'))

  def gui_popular_menu(self): return self.gui_json_menu(POPULAR_PLUGINS_URL, title2=L('AS_MENU_POPULAR'))  
  
  def gui_categories_menu(self):
    d = ASContainer(title2=L('AS_MENU_CATEGORIES'))
    cat_list = JSON.ObjectFromURL(CATEGORIES_URL, cacheTime=AS_CACHE_TIME)
    for cat in cat_list['categories']:
      d.Append(DirectoryItem(Route(self.gui_category_menu, name=cat['name']), title=cat['name'], thumb=S('Book1.png')))
    return sort_by_title(d)

  def gui_category_menu(self, name): return self.gui_lambda_menu(lambda x: name in x.categories and x.plugin_class == PluginClass.Content, title1=L('AS_MENU_CATEGORIES'), title2=name)
  
  def gui_types_menu(self):
    d = ASContainer(title2=L('AS_MENU_TYPES'))
    type_list = JSON.ObjectFromURL(MEDIA_TYPES_URL, cacheTime=AS_CACHE_TIME)
    for mtype in type_list['media_types']:
      if mtype['name'] in self.media_icons:
        thumb = S(self.media_icons[mtype['name']])
      else:
        thumb = None
      d.Append(DirectoryItem(Route(self.gui_type_menu, name=mtype['name']), title=mtype['name'], thumb=thumb))
    return d

  def gui_type_menu(self, name, plugin_class = PluginClass.Content): return self.gui_lambda_menu(lambda x: name in x.media_types and x.plugin_class == plugin_class, title1=L('AS_MENU_TYPES'), title2=name)
    
  def gui_show_updates_menu(self):
    if self.system.installservice.installing:
      return MessageContainer(L('AS_MSG_ALREADY_INSTALLING_T'), L('AS_MSG_ALREADY_INSTALLING_B'))
      
    self.update()
    
    updates = self.available_updates(now=True)
    third_party_updates = self.system.installservice.third_party_updates(now=True)
    
    if len(updates) == 0 and len(third_party_updates) == 0:
      return MessageContainer(L('AS_MSG_NO_UPDATES_T'), L('AS_MSG_NO_UPDATES_B'))
    
    update_summary = ""
    bundles = self.system.bundleservice.bundles
    
    for identifier in updates:
      update_summary += self.plugins[identifier].name + "\n"
    
    for identifier in third_party_updates:
      bundle = bundles[identifier]
      update_summary += bundle.name[:-7] + "\n"
      
    d = ASContainer(noHistory=True, viewGroup="Store:Info")
    count = len(updates) + len(third_party_updates)
    if count == 1:
      key = 'AS_MSG_NUM_UPDATE'
    else:
      key = 'AS_MSG_NUM_UPDATES'
    subtitle = F(key, count)
    d.Append(DirectoryItem(Route(self.system.installservice.gui_install_all_updates), title=L('AS_MENU_INSTALL_UPDATES'), subtitle=subtitle, summary=update_summary, thumb=S('FlagGreen.png')))
    d.Append(DirectoryItem(Route(self.gui_more_menu, goBack='1'), title=L('AS_MENU_CANCEL'), subtitle=subtitle, summary=L('AS_MSG_CANCEL_UPDATE_WARNING'), thumb=S('FlagRed.png')))

    return d
    
  def gui_channel_directory(self):
    d = ASContainer(title1=L("Channel Directory"), viewGroup='Store:List')
    d.Append(DirectoryItem(Route(self.gui_featured_menu), L('AS_MENU_FEATURED'), thumb=S('Favorite.png')))
    d.Append(DirectoryItem(Route(self.gui_new_menu), L('AS_MENU_NEW'), thumb=S('NewStuff.png')))
    d.Append(DirectoryItem(Route(self.gui_popular_menu), L('AS_MENU_POPULAR'), thumb=S('Popular.png')))
    d.Append(DirectoryItem(Route(self.gui_updated_menu), L('AS_MENU_UPDATED'), thumb=S('Recent.png')))
    d.Append(DirectoryItem(Route(self.gui_categories_menu), L('AS_MENU_CATEGORIES'), thumb=S('Book1.png')))
    d.Append(DirectoryItem(Route(self.gui_types_menu), L('AS_MENU_TYPES'), thumb=S('Book2.png')))
    d.Append(DirectoryItem(Route(self.gui_international_menu), L('Region-Restricted Channels'), thumb=S('World.png')))
    d.Append(DirectoryItem(Route(self.gui_agents_menu), L('AS_MENU_AGENTS'), thumb=S('Bundle.png')))
    return d
    
  def gui_list_updates(self):
    self.system.bundleservice.update_bundles()
    self.update()
    updates = self.available_updates(now=True)
    third_party_updates = self.system.installservice.third_party_updates(now=True)
    
    d = ASContainer()
    for identifier in updates:
      plugin = self.plugins[identifier]
      d.Append(DirectoryItem(Route(self.system.installservice.gui_update, identifier=identifier), title=plugin.name, thumb=plugin.icon))
    
    bundles = self.system.bundleservice.bundles
    for identifier in third_party_updates:
      bundle =bundles[identifier]
      d.Append(DirectoryItem(Route(self.system.installservice.gui_update, identifier=identifier, title=bundle.name[:-7])))
    
    return d
    
    
