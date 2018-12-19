#
#  Plex Plug-in Framework
#  Copyright (C) 2008-2012 Plex, Inc. (James Clarke, Elan Feingold). All Rights Reserved.
#

from systemservice import SystemService
import datetime
import storeservice
import sys

AS_URL                      = storeservice.AS_URL
BUNDLE_ARCHIVE_URL          = "https://bundle-archive.plex.tv/%s/%s/archive/%s.zip"
BUNDLE_COMMIT_URL           = "https://bundle.plex.tv/repos/%s/%s/commits/%s"
HISTORY_KEY                 = "_StoreService:History"

IDENTIFIER_KEY              = "InstallIdentifier"
NOTES_KEY                   = "InstallNotes"
DATE_KEY                    = "InstallDate"
VERSION_KEY                 = "InstallVersion"
ACTION_KEY                  = "InstallAction"

ALL_UPDATES_COMPLETE        = "AllUpdatesComplete"
UPDATE_FAILED               = "UpdateFailed"
ALREADY_INSTALLING          = "AlreadyInstalling"


class InstallService(SystemService):
  def __init__(self, system):
    SystemService.__init__(self, system)
    Log.Debug("Starting the install service")
    
    self.installing = False
    self.stage = Core.storage.join_path(Core.storage.data_path, 'DataItems', 'Stage')
    self.inactive = Core.storage.join_path(Core.storage.data_path, 'DataItems', 'Deactivated')
    
    try:
      Core.storage.remove_tree(self.stage)
    except:
      Log.Error("Unable to remove staging root")
    Core.storage.make_dirs(self.stage)
    
    try:
      Core.storage.remove_tree(self.inactive)
    except:
      Log.Error("Unable to remove inactive root")
    Core.storage.make_dirs(self.inactive)
    
    if HISTORY_KEY in Dict:
      self.history = Dict[HISTORY_KEY]
    else:
      self.history = list()
    self.history_lock = Thread.Lock()
    
    Route.Connect('/system/appstore/apps/{identifier}/install', self.gui_install)
    Route.Connect('/system/appstore/apps/{identifier}/update', self.gui_update)
    Route.Connect('/system/appstore/apps/{identifier}/restart', self.gui_restart)
    Route.Connect('/system/appstore/apps/{identifier}/reset', self.gui_reset)
    Route.Connect('/system/appstore/apps/{identifier}/uninstall', self.gui_uninstall)
    Route.Connect('/system/appstore/updates/install', self.gui_install_all_updates)
    Route.Connect('/system/appstore/history', self.gui_update_history_menu)
    
    Route.Connect('/system/plexonline/apps/{identifier}/install', self.gui_install)
    Route.Connect('/system/plexonline/apps/{identifier}/update', self.gui_update)
    Route.Connect('/system/plexonline/apps/{identifier}/restart', self.gui_restart)
    Route.Connect('/system/plexonline/apps/{identifier}/reset', self.gui_reset)
    Route.Connect('/system/plexonline/apps/{identifier}/uninstall', self.gui_uninstall)
    Route.Connect('/system/plexonline/updates/install', self.gui_install_all_updates)
    Route.Connect('/system/plexonline/history', self.gui_update_history_menu)
    
    Route.Connect('/system/channeldirectory/history', self.gui_update_history_menu)
    Route.Connect('/system/channeldirectory/updates/install', self.gui_install_all_updates)
    
  def info_record(self, identifier, action, version=None, notes=None):
    info = dict()
    info[IDENTIFIER_KEY] = identifier
    info[DATE_KEY] = Datetime.Now()
    info[ACTION_KEY] = action
    if notes:
      info[NOTES_KEY] = notes
    if version:
      info[VERSION_KEY] = version
    return info
    
  def add_history_record(self, identifier, action, version=None, notes=None):
    info = self.info_record(identifier, action, version, notes)
    try:
      self.history_lock.acquire()
      self.history.append(info)
      Dict[HISTORY_KEY] = self.history
      Dict.Save()
    finally:
      self.history_lock.release()
    
  def setup_stage(self, identifier):
    stage_path = Core.storage.join_path(self.stage, identifier)
    Log("Setting up staging area for %s at %s" % (identifier, stage_path))
    Core.storage.remove_tree(stage_path)
    Core.storage.make_dirs(stage_path)
    return stage_path
    
  def unstage(self, identifier):
    stage_path = Core.storage.join_path(self.stage, identifier)
    Log("Unstaging files for %s (removing %s)" % (identifier, stage_path))
    Core.storage.remove_tree(stage_path)
      
  def cleanup(self, identifier):
    # Don't delete the old Framework.bundle on Windows, as it will fail because the file is in use
    if identifier == 'com.plexapp.framework' and sys.platform == 'win32':
      return
    inactive_path = Core.storage.join_path(self.inactive, identifier)
    if Core.storage.dir_exists(inactive_path):
      Log("Cleaning up after %s (removing %s)" % (identifier, inactive_path))
      Core.storage.remove_tree(inactive_path)
    
  def deactivate(self, identifier):
    if identifier in self.system.bundleservice.bundles:
      bundle = self.system.bundleservice.bundles[identifier]
      inactive_path = Core.storage.join_path(self.inactive, identifier, bundle.name)
      self.cleanup(identifier)
      Log("Deactivating an old installation of %s (moving to %s)" % (identifier, inactive_path))
      Core.storage.make_dirs(inactive_path)
      Core.storage.rename(Core.storage.join_path(self.system.bundleservice.plugins_path, bundle.name), inactive_path)
      return True
    return False

  def reactivate(self, identifier):
    try:
      if identifier in self.system.bundleservice.bundles:
        bundle = self.system.bundleservice.bundles[identifier]
        inactive_path = Core.storage.join_path(self.inactive, identifier, bundle.name)
        Log("Reactivating the old installation of %s (moving from %s)" % (identifier, inactive_path))
        Core.storage.rename(inactive_path, Core.storage.join_path(self.system.bundleservice.plugins_path, bundle.name))
        return True
    except:
      Log.Exception("Unable to reactivate the old installation of %s", identifier)
    return False    
    
  def activate(self, identifier, name, fail_count = 0):
    stage_path = Core.storage.join_path(self.stage, identifier)
    final_path = Core.storage.join_path(self.system.bundleservice.plugins_path, "%s.bundle" % name)
    
    if not Core.storage.dir_exists(stage_path):
      Log("Unable to find stage for %s" % identifier)
      return False
    if Core.storage.dir_exists(final_path):
      Log("Plugin named %s.bundle already installed at %s - removing" % (name, final_path))
      Core.storage.remove_tree(final_path)
    Log("Activating a new installation of %s" % identifier)
    try:
      Core.storage.rename(stage_path, final_path)
    except:
      Log.Exception("Unable to activate %s at %s" % (identifier, final_path))
      if fail_count < 5:
        Log.Info("Waiting 2s and trying again")
        Thread.Sleep(2)
        return self.activate(identifier, name, fail_count + 1)
      else:
        Log.Info("Too many failures - returning")
        return False
    return True
    
  def platform_needs_file(self, parts):
    os = Platform.OS
    cpu = Platform.CPU
    #return not ((len(parts) > 4 and parts[1] in ('Helpers', 'Libraries') and (parts[2] != 'Shared') and (parts[2] != os or parts[3] != cpu)) or (len(parts) > 5 and parts[1] == 'Resources' and parts[2] == 'Platforms' and (parts[3] != 'Shared') and (parts[3] != os or parts[4] != cpu)))
    
    # All files above here are needed.
    if len(parts) <= 4:
      return True
    
    # Check for platform-specific helpers or libraries
    if parts[1] in ('Helpers', 'Libraries'):
      # If the file resides in the Shared folder, or the OS and CPU matches, it is required
      if (parts[2] == 'Shared') or (parts[2] == os and parts[3] == cpu):
        return True
      else:
        return False
      
    # Check for files in Resources/Platforms (where the framework files are stored)
    if len(parts) >= 5 and parts[1] == 'Resources' and parts[2] == 'Platforms':
      # If the file resides in the Shared folder, or the OS and CPU matches, it is required
      if (parts[3] == 'Shared') or (parts[3] == os and parts[4] == cpu):
        return True
      else:
        return False
      
    # Otherwise, assume the file is required
    return True
    
    
  def install_zip(self, plugin, check_platform=True):
    identifier = plugin.identifier
    name = plugin.name

    if plugin.github_url and plugin.git_sha:
      github_org = plugin.github_url.split('/')[-2].split(':')[-1]
      github_repo = plugin.github_url.split('/')[-1].replace('.git', '')
      github_archive_url = BUNDLE_ARCHIVE_URL % (github_org, github_repo, plugin.git_sha)
    else:
      Log("Plug-in is missing github URL or SHA, not updating: %s" % identifier)
      return False

    try:
      archive = Archive.Zip(HTTP.Request(github_archive_url, cacheTime=0))
    except:
      Log("Unable to download archive for %s" % identifier)
      self.unstage(identifier)
      return False

    if archive.Test() != None:
      Log.Add("The archive of %s is invalid - unable to continue" % identifier)
      self.unstage(identifier)
      return False
    
    try:
      for archive_name in archive:
        parts = archive_name.split('/')[1:]
        
        if parts[0] == '' and len(parts) > 1:
          parts = parts[1:]
          
        if len(parts) > 1 and parts[0] == 'Contents' and len(parts[-1]) > 0 and parts[-1][0] != '.':
          stage_path = Core.storage.join_path(self.stage, identifier)
          file_path = Core.storage.join_path(stage_path, *parts)
          dir_path = Core.storage.join_path(stage_path, *parts[:-1])
          
          if check_platform and not self.platform_needs_file(parts):
            Log("Skipping %s (not required for current platform)", archive_name)

          else:
            if not Core.storage.dir_exists(dir_path):
              Core.storage.make_dirs(dir_path)
            Core.storage.save(file_path, archive[archive_name])
            Log("Extracted %s to %s for %s" % (parts[-1], dir_path, identifier))
        else:
          Log("Not extracting %s" % archive_name)

      # Add the VERSION file if needed.
      version_file_path = Core.storage.join_path(self.stage, identifier, 'Contents', 'VERSION')
      if not Core.storage.file_exists(version_file_path):
        commit_json = JSON.ObjectFromURL(BUNDLE_COMMIT_URL % (github_org, github_repo, plugin.git_sha))
        version_date = datetime.datetime.strptime(commit_json['commit']['author']['date'][:-1], '%Y-%m-%dT%H:%M:%S')
        version_str = '%s (%s)\n' % (plugin.git_sha, version_date.strftime('%a %b %d %H:%M:%S UTC %Y'))
        Core.storage.save(version_file_path, version_str)

    except:
      Log("Error extracting archive of %s" % identifier)
      Log(Plugin.Traceback())
      self.unstage(identifier)
      return False
    
    finally:
      archive.Close()
    
    self.deactivate(identifier)
    if not self.activate(identifier, name):
      Log("Unable to activate %s" % identifier)
      if not self.reactivate(identifier):
        Log.Critical("Unable to reactivate %s" % identifier)
      self.unstage(identifier)
      return False

    self.unstage(identifier)
    self.cleanup(identifier)
    
    return True
        

  def install(self, identifier, update=False):
    if identifier not in self.system.storeservice.plugins:
      Log("Plug-in %s could not be found", identifier)
      return False
    
    action_string = 'update' if update else 'installation'
    action_string_past_tense = 'updated' if update else 'installed'
    Log("Performing an %s of %s" % (action_string, identifier))
    plugin = self.system.storeservice.plugins[identifier]
    stage_path = self.setup_stage(identifier)
    
    if plugin.beta == True:
      version = 'beta'
    else:
      version = 'current'
    
    # Make sure we only perform the platform check on v2 plug-ins
    check_platform = (plugin.framework_version == "2")
    
    if not self.install_zip(plugin, check_platform):
      return False

    # Record the install/update in the history
    self.add_history_record(identifier, "Plug in %s (revision %s)" % (action_string_past_tense, plugin.git_sha))
    
    # Check whether this bundle contains services & instruct other plug-ins to reload if necessary
    self.system.bundleservice.update_bundles()
    self.check_if_service_reload_required([identifier])

    # Update the version
    self.system.bundleservice.bundles[identifier].update_version()
    
    Log("%s of %s complete" % (action_string, identifier))
    return True
    
  
  def update(self, identifier):
    if identifier in self.system.bundleservice.bundled_identifiers:
      Log('Not updating bundled plug-in with identifier: %s' % identifier)
      return True

    if identifier not in self.system.storeservice.plugins:
      Log("Plug-in %s could not be found" % identifier)
      return False

    plugin = self.system.storeservice.plugins[identifier]
    if not plugin.is_installed:
      Log("Unable to update %s because it isn't installed." % identifier)
      return False

    # We used to allow piecemeal updates from the app store, but now we re-install everything atomically from github archives, even for updates.
    return self.install(identifier, update=True)

  def restart(self, identifier):
    if identifier in self.system.bundleservice.bundles:
      bundle = self.system.bundleservice.bundles[identifier]
      plist_path = Core.storage.join_path(self.system.bundleservice.bundles[identifier].path, "Contents", "Info.plist")
      if Core.storage.file_exists(plist_path):
        Log("Restarting %s" % identifier)
        Core.storage.utime(plist_path, None)
        return True
    return False

  def reset(self, identifier):
    Log("Resetting all stored data for %s" % identifier)
    Core.storage.remove_tree(Core.storage.join_path(Core.plugin_support_path, "Data", identifier))
    Core.storage.remove_tree(Core.storage.join_path(Core.plugin_support_path, "Preferences", identifier + ".xml"))
    Core.storage.remove_tree(Core.storage.join_path(Core.plugin_support_path, "Databases", identifier + ".db"))
    return self.restart(identifier)
    
  def uninstall(self, identifier):
    Log("Attempting to uninstall %s..." % identifier)
    if not self.deactivate(identifier):
      Log("Existing installation of %s couldn't be deactivated" % identifier)
      result = False
    else:
      result = True

    self.cleanup(identifier)
    
    # Reload services
    self.reload_services_in_running_plugins()
    
    self.add_history_record(identifier, "Plug-in uninstalled")
    return result
    
  def update_available_from_feed(self, identifier, cacheTime=3600):
    try:
      bundle = self.system.bundleservice.bundles[identifier]
      if bundle.update_feed == None:
        return False
      url = bundle.update_feed + 'BundleInfo'
      info = XML.ElementFromURL(url, cacheTime=cacheTime)
      local_git_sha = bundle.git_sha
      remote_git_sha = info.xpath('//GitSha')[0].text
      return local_git_sha != remote_git_sha
      
    except:
      Log.Error("Exception getting third party update information for '%s'", identifier)
    
  def third_party_updates(self, now=False):
    update_list = []
    
    if now:
      cacheTime = 0
    else:
      cacheTime = 3600
    
    for identifier in self.system.bundleservice.bundles:
      bundle = self.system.bundleservice.bundles[identifier]
      
      # If the bundle is managed by Plex Online, ignore it
      if bundle.managed:
        continue
        
      # If the bundle has an update feed, check whether updates are required
      if bundle.update_feed != None:
        if self.update_available_from_feed(identifier, cacheTime):
          update_list.append(identifier)
          
    return update_list
    
  def install_third_party_update(self, identifier):
    bundle = self.system.bundleservice.bundles[identifier]
    if bundle.update_feed == None:
      return False
    url = bundle.update_feed + 'BundleData'
    info_url = bundle.update_feed + 'BundleInfo'
    name = bundle.name[:-7]
    
    info = XML.ElementFromURL(info_url, cacheTime=3600)
    notes = info.xpath('//ReleaseNotes')[0].text
    
    Log("Installing a third-party update of %s" % identifier)
    
    # Don't perform platform checks for now
    if self.install_zip_from_url(identifier, name, url, False):
      bundle.update_version()
      self.add_history_record(identifier, "Third party plug-in updated", notes=notes)
      Log("Installation of %s complete" % identifier)
      return True
      
    else:
      return False
    
  def install_updates(self, updates=None):
    if self.installing:
      return ALREADY_INSTALLING
    
    self.installing = True
    try:
      # If no updates were provided, get a list of all available updates
      if not updates:
        updates = self.system.storeservice.available_updates()
              
      # Check for third-party plug-in updates
      third_party_updates = self.third_party_updates()
      
      # Check for revoked plug-ins
      for identifier in self.system.storeservice.revoked_apps:
        plugin = self.system.storeservice.plugins[identifier]
        if plugin.is_installed:
          Log("Plug-in '%s' has been revoked and will be uninstalled.")
          self.uninstall(identifier)

      failed_update = False

      # Install regular plug-ins
      for identifier in updates:
        if identifier in self.system.storeservice.plugins:
          plugin = self.system.storeservice.plugins[identifier]
          if plugin.is_installed:
            if not self.update(identifier):
              failed_update = True
          else:
            if not self.install(identifier):
              failed_update = True

      # Install third-party updates
      for identifier in third_party_updates:
        if not self.install_third_party_update(identifier):
          failed_update = True

      if failed_update:
        return UPDATE_FAILED

      # Check if we need to reload services
      self.system.bundleservice.update_bundles()
      self.check_if_service_reload_required(updates)
      
      return ALL_UPDATES_COMPLETE
    
    finally:
      self.installing = False
    
  def restart_and_continue_updating(self):
    Thread.Sleep(2)

    host = Request.Headers.get('Host', '127.0.0.1:32400')
    return Redirect('http://%s/:/plugins/com.plexapp.system/restart?url=/system/appstore/updates/install' % host)
  
  def restart_self_silently(self):
    HTTP.Request('http://127.0.0.1:32400/:/plugins/com.plexapp.system/restart', immediate=True)
  
  def restart_running_plugins(self):
    Thread.Sleep(2)
    plugins_list = XML.ElementFromURL('http://127.0.0.1:32400/:/plugins', cacheTime=0)
    for plugin_el in plugins_list.xpath('//Plugin'):
      if str(plugin_el.get('state')) == '0':
        ident = str(plugin_el.get('identifier'))
        if ident != "com.plexapp.system":
          Log("Plug-in %s is currrently running with old framework code - restarting", ident)
          self.restart(ident)
          
  def check_if_service_reload_required(self, identifiers):
    """ Check the list of bundle identifiers to see if any of the bundles contain services. If they do, instruct running plug-ins to reload their service list. """
    bundles = self.system.bundleservice.bundles
    for ident in identifiers:
      if ident in bundles:
        bundle = bundles[ident]
        if bundle.has_services:
          Log("At least one bundle containing services has been updated - instructing all running plug-ins to reload.")
          self.reload_services_in_running_plugins()
          return
    Log("No bundles containing services have been updated.")
      
  
  def reload_services_in_running_plugins(self):
    """ Get the list of plug-ins from PMS, and tell any that are running to reload services """
    plugins_list = XML.ElementFromURL('http://127.0.0.1:32400/:/plugins', cacheTime=0)
    for plugin_el in plugins_list.xpath('//Plugin'):
      if str(plugin_el.get('state')) == '0':
        ident = str(plugin_el.get('identifier'))
        if ident != "com.plexapp.system":
          try:
            Log("Plug-in %s is currrently running with old service code - reloading", ident)
            HTTP.Request('http://127.0.0.1:32400/:/plugins/%s/reloadServices' % ident, cacheTime=0, immediate=True)
          except:
            Log.Error("Unable to reload services in %s", ident)
            
    # Reload system services
    Core.services.load()
    
    
  def install_updates_silently(self, updates=None):
    ret = self.install_updates(updates)

  """ Functions for interacting with the installer via the GUI """
  def update_data(self):
    self.system.bundleservice.update_bundles()
    self.system.storeservice.update(now=True)
    
  def gui_install(self, identifier):
    self.update_data()
    result = self.install(identifier)
    self.system.bundleservice.update_bundles()
    
    for x in range(15):
      try:
        HTTP.Request('http://127.0.0.1:32400/:/plugins/%s/root' % identifier, cacheTime=0).content
        break
      except:
        Log.Debug("Unable to reach %s - waiting and trying again" % identifier)
        Thread.Sleep(2)
    
    if result:
      return MessageContainer(L('AS_MSG_INSTALL_SUCCESS_T'), F('AS_MSG_INSTALL_SUCCESS_B', self.system.storeservice.plugins[identifier].name), code=0)
    else:
      plugins = self.system.storeservice.plugins
      if identifier in plugins:
        fmt = plugins[identifier].name
      else:
        fmt = identifier
      return MessageContainer(L('AS_MSG_INSTALL_FAIL_T'), F('AS_MSG_INSTALL_FAIL_B', fmt), code=1)
    
  
  def gui_update(self, identifier): 
    self.update_data()
    
    plugin = self.system.storeservice.plugins[identifier]
    plugin_name = plugin.name
    plugin_git_sha = plugin.git_sha

    if identifier not in self.system.bundleservice.bundles:
      Log("Unable to find %s bundle for updating" % identifier)
      return MessageContainer(L('AS_MSG_UPDATE_FAIL_T'), F('AS_MSG_UPDATE_FAIL_B', plugin_name))

    bundle = self.system.bundleservice.bundles[identifier]
    
    if plugin_git_sha == bundle.git_sha:
      return MessageContainer(L('AS_MSG_NO_UPDATE_T'), F('AS_MSG_NO_UPDATE_B', plugin_name))

    result = self.update(identifier)
    self.system.storeservice.update()
    if result:
      return MessageContainer(L('AS_MSG_UPDATE_SUCCESS_T'), F('AS_MSG_UPDATE_SUCCESS_B', plugin_name))
    else:
      return MessageContainer(L('AS_MSG_UPDATE_FAIL_T'), F('AS_MSG_UPDATE_FAIL_B', plugin_name))
    
    
  def gui_restart(self, identifier): 
    self.update_data()
    result = self.restart(identifier)
    self.system.storeservice.update()
    plugin = self.system.storeservice.plugins[identifier]
    if result:
      return MessageContainer(L('AS_MSG_RESTART_SUCCESS_T'), F('AS_MSG_RESTART_SUCCESS_B', plugin.name))
    else:
      return MessageContainer(L('AS_MSG_RESTART_FAIL_T'), F('AS_MSG_RESTART_FAIL_B', plugin.name))
      
  def gui_reset(self, identifier):
    self.system.bundleservice.update_bundles()
    result = self.reset(identifier)
    self.system.storeservice.update()
    plugin = self.system.storeservice.plugins[identifier]
    if result:
      return MessageContainer(L('AS_MSG_RESET_SUCCESS_T'), F('AS_MSG_RESET_SUCCESS_B', plugin.name))
    else:
      return MessageContainer(L('AS_MSG_RESET_FAIL_T'), F('AS_MSG_RESET_FAIL_B', plugin.name))
    
  def gui_uninstall(self, identifier):
    self.update_data()
    if identifier not in self.system.storeservice.plugins and identifier not in self.system.bundleservice.bundles:
      # probably an iLife channel
      raise Framework.exceptions.BadRequestException

    result = self.uninstall(identifier)
    if identifier in self.system.storeservice.plugins:
      name = self.system.storeservice.plugins[identifier].name
      self.system.storeservice.update()
    else:
      name = self.system.bundleservice.bundles[identifier].name
      self.system.bundleservice.update_bundles()
    if result:
      return MessageContainer(L('AS_MSG_UNINSTALL_SUCCESS_T'), F('AS_MSG_UNINSTALL_SUCCESS_B', name), code=0)
    else:
      return MessageContainer(L('AS_MSG_UNINSTALL_FAIL_T'), F('AS_MSG_UNINSTALL_FAIL_B', name), code=1)
      
  def gui_install_all_updates(self):
    result = self.install_updates()
      
    d = self.system.storeservice.gui_more_menu(goBack='1')
    d.noHistory=True
    if result == ALL_UPDATES_COMPLETE:
      d.code = '0'
      d.header = L('AS_MSG_UPDATE_SUCCESS_T')
      d.message = L('AS_MSG_UPDATE_ALL_SUCCESS_B')
    elif result == ALREADY_INSTALLING:
      d.code = '1'
      d.header = L('AS_MSG_ALREADY_INSTALLING_T')
      d.header = L('AS_MSG_ALREADY_INSTALLING_B')
    else:
      d.code = '2'
      d.header = L('AS_MSG_UPDATE_PROBLEM_T')
      d.message = L('AS_MSG_UPDATE_PROBLEM_B')
    return d
    
  def gui_update_history_menu(self):
    name_substitutions = self.system.storeservice.name_substitutions
    d = MediaContainer(title1=L("AS_TITLE"), title2=L("AS_HISTORY"), art=R('store-art.png'), viewGroup="Store:Info")
    try:
      self.history_lock.acquire()
      for info in self.history:
        if info[IDENTIFIER_KEY] in self.system.storeservice.plugins:
          plugin = self.system.storeservice.plugins[info[IDENTIFIER_KEY]]
          title = plugin.name if plugin.name not in name_substitutions else name_substitutions[plugin.name]
          thumb = plugin.icon
        else:
          title = info[IDENTIFIER_KEY]
          thumb = None
        item = DirectoryItem("none", title, subtitle=info[DATE_KEY].strftime("%Y-%m-%d %H:%M:%S"), thumb=thumb)
        summary = info[ACTION_KEY]
        if VERSION_KEY in info:
          summary = summary + "\n\nVersion: %s" % info[VERSION_KEY]
        if NOTES_KEY in info:
          summary = summary + "\n\nRelease notes:\n%s" % info[NOTES_KEY]
        item.summary = summary
        d.Append(item)
        
    finally:
      self.history_lock.release()
      
    d.Reverse()
    return d
      