import React, { useState, useEffect } from 'react';
import { Code, Terminal, GitBranch, Cpu, Sparkles, Zap, Cloud, Shield, Cpu as Brain, GitMerge, Database, Server, Lock, Globe, BarChart } from 'lucide-react';

const DevSolutions = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <Terminal className="h-8 w-8" />,
      title: 'Neural Code Assistant',
      desc: 'Context-aware AI that understands your entire codebase, offering intelligent completions and refactoring suggestions in real-time.',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-cyan-900/20 to-blue-900/20',
      details: 'Trained on billions of code samples, our assistant predicts your next move with 94% accuracy.'
    },
    {
      icon: <GitMerge className="h-8 w-8" />,
      title: 'Autonomous DevOps',
      desc: 'Self-healing CI/CD pipelines that automatically optimize workflows and prevent deployment failures.',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-900/20 to-teal-900/20',
      details: 'Reduces deployment failures by 87% through predictive analysis and automated rollback systems.'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Cognitive Optimization',
      desc: 'AI-driven performance profiling that identifies and resolves bottlenecks before they impact users.',
      color: 'from-violet-500 to-purple-500',
      bgColor: 'bg-gradient-to-br from-violet-900/20 to-purple-900/20',
      details: 'Improves application performance by up to 300% with intelligent resource allocation.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Intelligent Security',
      desc: 'Proactive vulnerability detection using machine learning to identify threats before exploitation.',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-900/20 to-orange-900/20',
      details: 'Real-time scanning of 50,000+ vulnerability patterns with 99.9% detection accuracy.'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Deployment AI',
      desc: 'Automatic geo-distribution that places your services optimally across global cloud regions.',
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-rose-900/20 to-pink-900/20',
      details: 'Reduces global latency by 65% through intelligent CDN routing and edge computing.'
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Predictive Analytics',
      desc: 'ML-powered insights that forecast system loads and automatically scale resources.',
      color: 'from-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-indigo-900/20 to-blue-900/20',
      details: 'Predicts traffic patterns with 92% accuracy, optimizing costs while maintaining performance.'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.3s ease-out',
                filter: 'blur(40px)'
              }}
            />
          ))}
        </div>
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgb(100 116 139 / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgb(100 116 139 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm mb-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl animate-pulse" />
              <Code className="relative h-12 w-12 text-cyan-400" />
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Dev Solutions
            </span>
            <span className="block text-2xl sm:text-3xl mt-4 text-slate-300 font-normal">
              AI-Powered Development Ecosystem
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of software engineering with our intelligent platform that learns, adapts, 
            and evolves alongside your development process. Harness the power of machine learning to transform 
            how you build, deploy, and scale applications.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {[
              { value: '98%', label: 'Code Accuracy' },
              { value: '5x', label: 'Faster Dev' },
              { value: '99.9%', label: 'Uptime' },
              { value: '87%', label: 'Cost Reduction' }
            ].map((stat, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive feature showcase */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
            <span className="relative">
              <Sparkles className="absolute -left-10 top-1/2 transform -translate-y-1/2 h-6 w-6 text-cyan-400" />
              Intelligent Features
              <Sparkles className="absolute -right-10 top-1/2 transform -translate-y-1/2 h-6 w-6 text-cyan-400" />
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature selector */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full p-6 rounded-xl text-left transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-gradient-to-r from-slate-800/80 to-slate-900/80 border-l-4 border-cyan-500 transform scale-105 shadow-2xl' 
                      : 'bg-slate-800/30 border border-slate-700/50 hover:bg-slate-800/50'
                  } backdrop-blur-sm`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                      <div className={feature.color.replace('from-', 'text-').split(' ')[0]}>
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-200">{feature.title}</h3>
                      <p className="text-slate-400 mt-1">{feature.desc}</p>
                    </div>
                    {activeFeature === index && (
                      <div className="ml-auto">
                        <Zap className="h-5 w-5 text-cyan-400 animate-pulse" />
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
            
            {/* Feature preview */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl blur-3xl" />
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl ${features[activeFeature].bgColor}`}>
                    <div className={features[activeFeature].color.replace('from-', 'text-').split(' ')[0]}>
                      {features[activeFeature].icon}
                    </div>
                  </div>
                  <div className="text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-cyan-900/30 to-blue-900/30 text-cyan-400 border border-cyan-500/30">
                    AI-Powered
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-200 mb-4">
                  {features[activeFeature].title}
                </h3>
                
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  {features[activeFeature].details}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Efficiency Boost</span>
                    <span className="text-cyan-400 font-bold">+65-300%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${features[activeFeature].color}`}
                      style={{ width: `${70 + Math.random() * 30}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-slate-400">Accuracy Rate</span>
                    <span className="text-emerald-400 font-bold">94-99.9%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500"
                      style={{ width: `${94 + Math.random() * 6}%` }}
                    />
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="flex items-center space-x-2 text-sm text-slate-400">
                    <Cloud className="h-4 w-4" />
                    <span>Real-time processing • Machine Learning • Predictive Analytics • Automated Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology stack */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-center text-slate-200 mb-8">
            Powered by Advanced Technologies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: 'TensorFlow', color: 'from-orange-500 to-amber-500' },
              { name: 'Kubernetes', color: 'from-blue-500 to-cyan-500' },
              { name: 'WebAssembly', color: 'from-purple-500 to-violet-500' },
              { name: 'GraphQL', color: 'from-pink-500 to-rose-500' }
            ].map((tech, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl bg-slate-800/50 text-center border border-slate-700/50 hover:border-slate-600/50 transition-colors"
              >
                <div className={`text-lg font-bold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`}>
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevSolutions;