import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Database, Cloud, Code, Sparkles, Zap, TrendingUp, BarChart3, Network } from 'lucide-react';

const MachineLearning = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const mlServices = [
    { 
      icon: <Brain className="w-8 h-8" />, 
      title: 'Neural Networks', 
      desc: 'Advanced deep learning architectures trained on your specific datasets',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'rgba(168, 85, 247, 0.1)',
      details: 'Custom CNN, RNN, and Transformer models for complex pattern recognition'
    },
    { 
      icon: <Database className="w-8 h-8" />, 
      title: 'Data Intelligence', 
      desc: 'Automated pipelines that clean, label, and prepare training data',
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'rgba(6, 182, 212, 0.1)',
      details: 'Real-time data streaming with automatic quality validation and augmentation'
    },
    { 
      icon: <Cpu className="w-8 h-8" />, 
      title: 'Model Training', 
      desc: 'Distributed training across GPU clusters for faster iteration',
      color: 'from-orange-500 to-red-500',
      bgColor: 'rgba(249, 115, 22, 0.1)',
      details: 'Hyperparameter optimization and automated experiment tracking'
    },
    { 
      icon: <Cloud className="w-8 h-8" />, 
      title: 'Cloud Deployment', 
      desc: 'Scalable inference endpoints with automatic load balancing',
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'rgba(59, 130, 246, 0.1)',
      details: 'A/B testing, canary deployments, and performance monitoring'
    },
    { 
      icon: <BarChart3 className="w-8 h-8" />, 
      title: 'Performance Analytics', 
      desc: 'Real-time model monitoring and drift detection systems',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'rgba(16, 185, 129, 0.1)',
      details: 'Automated retraining triggers and comprehensive performance dashboards'
    },
    { 
      icon: <Network className="w-8 h-8" />, 
      title: 'Edge Computing', 
      desc: 'Optimized models for mobile and IoT device deployment',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'rgba(245, 158, 11, 0.1)',
      details: 'Model quantization and compression for resource-constrained environments'
    }
  ];

  // Auto-rotate through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % mlServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>

      <div className="relative z-10 pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                <div className="relative h-24 w-24 rounded-full bg-gradient-to-br from-gray-900 to-black border border-gray-800 flex items-center justify-center">
                  <div className="relative">
                    <Sparkles className="h-12 w-12 text-cyan-300 animate-spin-slow" />
                    <Brain className="h-8 w-8 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent animate-gradient">
                Intelligent Machine Learning
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Transforming raw data into intelligent predictions with cutting-edge AI models that 
              <span className="text-cyan-300 font-semibold"> learn, adapt, and evolve</span> with your business needs.
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { value: '99.8%', label: 'Model Accuracy' },
                { value: '≤50ms', label: 'Inference Time' },
                { value: '24/7', label: 'Uptime SLA' },
                { value: '10x', label: 'Faster Training' }
              ].map((stat, index) => (
                <div key={index} className="group">
                  <div className="px-6 py-3 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {mlServices.map((service, index) => (
              <div
                key={index}
                className={`relative group cursor-pointer transition-all duration-500 ${
                  activeCard === index ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setActiveCard(index)}
                onClick={() => setActiveCard(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                     style={{ background: `linear-gradient(135deg, ${service.bgColor}, transparent)` }}>
                </div>
                
                <div className="relative p-6 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800 group-hover:border-gray-700 transition-all duration-300 h-full">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4">
                    {service.desc}
                  </p>
                  
                  <div className={`mt-4 pt-4 border-t border-gray-800 transition-all duration-300 ${
                    activeCard === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <p className="text-sm text-gray-400">{service.details}</p>
                  </div>
                  
                  {/* Animated indicator */}
                  <div className={`absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-r ${service.color} ${
                    activeCard === index ? 'animate-ping' : ''
                  }`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Visualization */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Powered by Modern AI Stack</h2>
              <p className="text-gray-400">Integrated with leading frameworks and platforms</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {['TensorFlow', 'PyTorch', 'Scikit-learn', 'MLflow', 'Kubernetes', 'Docker', 'AWS SageMaker', 'Google AI Platform'].map((tech, index) => (
                <div key={index} className="px-4 py-2 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:scale-105">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400 group-hover:animate-pulse" />
                    <span className="text-gray-300 group-hover:text-white font-medium">{tech}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="relative mt-20">
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
              <div className="flex space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-bounce"
                       style={{ animationDelay: `${i * 0.1}s` }}>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MachineLearning;