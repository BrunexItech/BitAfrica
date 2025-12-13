import React, { useState, useEffect } from 'react';
import { Cloud, Zap, Server, Globe, Cpu, Database, Shield, Brain, Network, Lock, CloudLightning, BarChart3 } from 'lucide-react';

const CloudAI = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [particlePositions, setParticlePositions] = useState([]);

  // Generate floating particles
  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2
    }));
    setParticlePositions(particles);
  }, []);

  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Intelligent Scaling',
      desc: 'AI-driven resource optimization that predicts and adapts to workload patterns in real-time',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'rgba(168, 85, 247, 0.1)'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Lightning Processing',
      desc: 'GPU-accelerated AI inference with sub-millisecond latency for real-time applications',
      color: 'from-cyan-400 to-blue-500',
      bgColor: 'rgba(6, 182, 212, 0.1)'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Global Neural Network',
      desc: 'Distributed AI models across 200+ edge locations for localized, low-latency intelligence',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'rgba(16, 185, 129, 0.1)'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'AI-First Security',
      desc: 'Self-learning threat detection and automated response systems protecting your data 24/7',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'rgba(251, 191, 36, 0.1)'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Smart Data Lakes',
      desc: 'Auto-indexed, query-optimized storage with built-in data quality and governance AI',
      color: 'from-violet-400 to-indigo-500',
      bgColor: 'rgba(139, 92, 246, 0.1)'
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: 'Federated Learning',
      desc: 'Train AI models across distributed data sources without compromising privacy or security',
      color: 'from-rose-400 to-red-500',
      bgColor: 'rgba(244, 63, 94, 0.1)'
    }
  ];

  const stats = [
    { value: '99.99%', label: 'Uptime SLA' },
    { value: '<5ms', label: 'Edge Latency' },
    { value: '200+', label: 'Global Regions' },
    { value: 'Zero', label: 'Data Breaches' }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950/50 to-purple-950/30">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-300/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${3 + particle.speed}s ease-in-out infinite`
            }}
          />
        ))}
        
        {/* Background gradient orbs */}
        <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative pt-24 pb-32 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Animated Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center h-24 w-24 rounded-3xl bg-gradient-to-br from-blue-500/30 to-cyan-400/30 border border-blue-400/50 shadow-2xl shadow-blue-500/20 mb-8 animate-pulse-slow">
              <Cloud className="h-12 w-12 text-cyan-300" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient">
                Cloud AI Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-10">
              Experience the next generation of intelligent cloud infrastructure where 
              <span className="text-cyan-300 font-semibold"> artificial intelligence </span>
              meets limitless scalability. Our self-optimizing systems learn, adapt, and evolve with your business needs.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-cyan-400/30 transition-all duration-300 hover:scale-105"
                >
                  <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${index % 2 === 0 ? 'from-cyan-300 to-blue-400' : 'from-purple-300 to-pink-400'} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-400 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 ${
                  activeCard === index 
                    ? 'scale-105 shadow-2xl' 
                    : 'hover:scale-[1.02]'
                }`}
                style={{ 
                  backgroundColor: activeCard === index ? feature.bgColor : 'rgba(255, 255, 255, 0.03)',
                  border: activeCard === index 
                    ? '2px solid rgba(255, 255, 255, 0.2)' 
                    : '1px solid rgba(255, 255, 255, 0.1)'
                }}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                {/* Card glow effect */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    {feature.title}
                    {activeCard === index && (
                      <span className="inline-flex h-2 w-2 bg-cyan-400 rounded-full animate-pulse" />
                    )}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.desc}
                  </p>
                  
                  {/* Hover line indicator */}
                  <div className={`absolute -bottom-4 left-0 h-1 bg-gradient-to-r ${feature.color} rounded-full transition-all duration-300 ${
                    activeCard === index ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Demo Section */}
          <div className="max-w-6xl mx-auto p-8 rounded-3xl bg-gradient-to-br from-gray-900/50 to-blue-900/30 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-4">
                  <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                    Real-time AI Workload Simulation
                  </span>
                </h3>
                <p className="text-gray-300 mb-6">
                  Watch how our Cloud AI platform dynamically allocates resources across global data centers in response to simulated traffic patterns. The system intelligently scales while maintaining optimal performance.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Active Processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
                    <span>Idle Resources</span>
                  </div>
                </div>
              </div>
              
              {/* Animated Resource Allocation Visualization */}
              <div className="flex-1">
                <div className="grid grid-cols-3 gap-4">
                  {['NA', 'EU', 'AP'].map((region, i) => (
                    <div key={region} className="text-center">
                      <div className="text-sm text-gray-400 mb-2">{region}</div>
                      <div className="h-48 rounded-xl bg-gray-900/50 border border-gray-800 p-2">
                        <div className="h-full flex flex-col justify-end">
                          <div 
                            className="w-full rounded-lg bg-gradient-to-t from-cyan-500/60 to-blue-500/40 transition-all duration-1000"
                            style={{ 
                              height: `${40 + (Math.sin(Date.now()/1000 + i) * 20 + 20)}%` 
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-20 text-center">
            <h4 className="text-2xl text-gray-400 mb-8">Powered by Cutting-Edge Technology</h4>
            <div className="flex flex-wrap justify-center gap-8">
              {['TensorFlow', 'Kubernetes', 'PyTorch', 'Apache Spark', 'Docker', 'NVIDIA CUDA'].map((tech, i) => (
                <div 
                  key={tech}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-800 text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 6s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default CloudAI;