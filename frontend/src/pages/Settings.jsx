import React from 'react';
import { Settings as SettingsIcon, Bell, Globe, Database } from 'lucide-react';

const Settings = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-4 border-purple-500/30 flex items-center justify-center mb-6">
          <SettingsIcon className="h-12 w-12 text-purple-400" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
          System Settings
        </h1>
        <p className="text-gray-400 mb-8">
          Advanced configuration and preferences for your BitAfrica AI experience.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { icon: <Bell />, title: 'Notifications', desc: 'Alerts & updates' },
            { icon: <Globe />, title: 'Regional', desc: 'Language & timezone' },
            { icon: <Database />, title: 'Data', desc: 'Storage & backups' },
            { icon: <SettingsIcon />, title: 'Advanced', desc: 'System preferences' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;