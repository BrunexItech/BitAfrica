import React from 'react';
import { Shield, Lock, Eye, Network } from 'lucide-react';

const Cybersecurity = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 mb-6">
          <Shield className="h-10 w-10 text-cyan-400" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent mb-4">
          Cybersecurity AI
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Proactive threat detection and prevention powered by artificial intelligence
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Lock />, title: 'Real-time Protection', desc: 'Instant threat neutralization' },
            { icon: <Eye />, title: 'Behavior Analysis', desc: 'Anomaly detection' },
            { icon: <Network />, title: 'Network Security', desc: 'End-to-end encryption' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Cybersecurity;