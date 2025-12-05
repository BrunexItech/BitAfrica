import React from 'react';
import { Server, Brain, Database, TrendingUp } from 'lucide-react';

const MachineLearning = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
          <Server className="h-10 w-10 text-cyan-400" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
          Machine Learning
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          Custom ML models, training pipelines, and scalable deployment infrastructure
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Brain />, title: 'Custom Models', desc: 'Tailored ML algorithms' },
            { icon: <Database />, title: 'Data Pipelines', desc: 'Automated training data' },
            { icon: <TrendingUp />, title: 'Scalable Deployment', desc: 'Cloud infrastructure' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MachineLearning;