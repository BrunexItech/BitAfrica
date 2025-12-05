import React from 'react';
import { User, Mail, Shield, Key } from 'lucide-react';

const Profile = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-4 border-blue-500/30 flex items-center justify-center mb-6">
          <User className="h-12 w-12 text-blue-400" />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
          User Profile
        </h1>
        <p className="text-gray-400 mb-8">
          Profile management coming soon. Connect your account and manage preferences.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            { icon: <Mail />, title: 'Email Settings', desc: 'Update notifications' },
            { icon: <Shield />, title: 'Security', desc: 'Password & 2FA' },
            { icon: <Key />, title: 'API Keys', desc: 'Developer access' },
            { icon: <User />, title: 'Account Info', desc: 'Personal details' }
          ].map((item, i) => (
            <div key={i} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;