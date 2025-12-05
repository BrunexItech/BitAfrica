import React from 'react';
import { Cpu, Zap, Clock, Brain } from 'lucide-react';

const Automation = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-6">
          <Cpu className="h-10 w-10 text-purple-400" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent mb-4">
          AI Automation
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Intelligent process automation that learns, adapts, and optimizes your workflows
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Zap />, title: 'RPA Integration', desc: 'Robotic Process Automation' },
            { icon: <Clock />, title: '24/7 Operation', desc: 'Non-stop automation' },
            { icon: <Brain />, title: 'Self-Learning', desc: 'Adaptive algorithms' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Automation;