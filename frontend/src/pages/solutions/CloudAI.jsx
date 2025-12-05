import React from 'react';
import { Cloud, Zap, Server, Globe } from 'lucide-react';

const CloudAI = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
          <Cloud className="h-10 w-10 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
          Cloud AI
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Scalable AI infrastructure with global deployment and enterprise reliability
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: 'Auto-scaling', desc: 'Dynamic resource allocation' },
            { icon: <Server />, title: 'High Availability', desc: '99.99% uptime SLA' },
            { icon: <Globe />, title: 'Global CDN', desc: 'Worldwide deployment' }
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
export default CloudAI;