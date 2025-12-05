import React from 'react';
import { Code, Terminal, GitBranch, Cpu } from 'lucide-react';

const DevSolutions = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">
          <Code className="h-10 w-10 text-indigo-400" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-4">
          Dev Solutions
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
          AI-powered development tools and frameworks for modern software engineering
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Terminal />, title: 'AI Code Assistant', desc: 'Smart code completion' },
            { icon: <GitBranch />, title: 'Auto DevOps', desc: 'CI/CD automation' },
            { icon: <Cpu />, title: 'Performance AI', desc: 'Optimization algorithms' }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-indigo-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default DevSolutions;