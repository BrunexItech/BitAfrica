import React, { useState, useEffect } from 'react';
import { Brain, BarChart3, TrendingUp, Shield, Zap, ChevronRight, Activity, Database, Cpu, Cloud, Lock, Users, PieChart, RefreshCw, Download, Eye, Clock, Target } from 'lucide-react';

const AIAnalytics = () => {
  const [activeMetric, setActiveMetric] = useState('predictive');
  const [animatedValue, setAnimatedValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedValue(prev => {
        if (prev >= 99) return 0;
        return prev + 1;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  // Updated metrics data with 4 items
  const metrics = {
    predictive: {
      title: 'Predictive Accuracy',
      value: '97.3%',
      change: '+2.1%',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-400',
      data: [85, 88, 92, 94, 96, 97.3]
    },
    efficiency: {
      title: 'Processing Efficiency',
      value: '89.7%',
      change: '+5.4%',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-400',
      data: [70, 75, 80, 85, 87, 89.7]
    },
    security: {
      title: 'Security Score',
      value: '99.9%',
      change: '+0.3%',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-green-500 to-emerald-400',
      data: [98, 98.5, 99, 99.5, 99.8, 99.9]
    },
    speed: {
      title: 'Response Speed',
      value: '≤ 50ms',
      change: '+15%',
      icon: <Clock className="h-6 w-6" />,
      color: 'from-orange-500 to-amber-400',
      data: [120, 100, 85, 70, 60, 50]
    }
  };
  
  const features = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'Neural Networks',
      description: 'Deep learning models that adapt and improve over time',
      gradient: 'from-blue-500/20 to-blue-600/20',
      stat: '1.2M Parameters'
    },
    {
      icon: <Activity className="h-8 w-8" />,
      title: 'Real-time Processing',
      description: 'Live data analysis with millisecond response times',
      gradient: 'from-purple-500/20 to-pink-600/20',
      stat: '≤ 50ms Latency'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Big Data Integration',
      description: 'Seamless connection to all major data sources and warehouses',
      gradient: 'from-cyan-500/20 to-teal-600/20',
      stat: '10+ Sources'
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster insights',
      gradient: 'from-orange-500/20 to-red-600/20',
      stat: '40% Faster'
    }
  ];
  
  const useCases = [
    {
      industry: 'Financial Services',
      applications: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading'],
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'text-green-400'
    },
    {
      industry: 'Healthcare',
      applications: ['Diagnostic Support', 'Patient Risk Analysis', 'Treatment Optimization'],
      icon: <Activity className="h-6 w-6" />,
      color: 'text-blue-400'
    },
    {
      industry: 'Retail',
      applications: ['Demand Forecasting', 'Personalized Marketing', 'Inventory Optimization'],
      icon: <PieChart className="h-6 w-6" />,
      color: 'text-purple-400'
    },
    {
      industry: 'Manufacturing',
      applications: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization'],
      icon: <Cpu className="h-6 w-6" />,
      color: 'text-amber-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      <div className="relative pt-24 pb-16 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section - Mobile Responsive */}
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center justify-center h-20 w-20 md:h-24 md:w-24 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border border-blue-500/40 mb-6 md:mb-8 shadow-xl md:shadow-2xl shadow-blue-500/20">
              <Brain className="h-10 w-10 md:h-12 md:w-12 text-cyan-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
              <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-300 bg-clip-text text-transparent">
                AI Analytics
              </span>
              <span className="block text-2xl md:text-4xl mt-4 text-gray-300 font-light">
                Transforming Data Into Strategic Advantage
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Harness the power of advanced machine learning algorithms for predictive insights, 
              real-time analytics, and data-driven decision making.
            </p>
            
            {/* Animated metric badge */}
            <div className="inline-flex items-center mt-8 md:mt-10 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-blue-500/40 rounded-xl md:rounded-2xl backdrop-blur-sm">
              <div className="flex items-center">
                <div className="relative h-8 w-8 md:h-10 md:w-10 mr-2 md:mr-3">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 animate-pulse"></div>
                  <div className="absolute inset-1 rounded-full bg-gray-900 flex items-center justify-center">
                    <span className="text-white font-bold text-sm md:text-base">{animatedValue}%</span>
                  </div>
                </div>
                <span className="text-gray-300 text-sm md:text-base">Real-time accuracy across active models</span>
              </div>
            </div>
          </div>
          
          {/* Interactive Metrics Dashboard */}
          <div className="mb-16 md:mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12 px-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Live Performance Metrics
              </span>
            </h2>
            
            {/* Updated to 4 metrics - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 px-2">
              {Object.entries(metrics).map(([key, metric]) => (
                <div 
                  key={key}
                  className={`p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-sm border transition-all duration-300 cursor-pointer transform hover:-translate-y-1 md:hover:-translate-y-2 ${activeMetric === key ? 'border-blue-500/60 bg-gradient-to-br from-gray-900/80 to-gray-800/80 shadow-lg md:shadow-2xl shadow-blue-500/20' : 'border-gray-800 bg-gray-900/40 hover:border-blue-500/30'}`}
                  onClick={() => setActiveMetric(key)}
                  onMouseEnter={() => setIsHovered(key)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div>
                      <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${metric.color}/20 mb-3 md:mb-4`}>
                        <div className={`text-gradient ${metric.color.replace('from-', 'text-').replace(' to-', '-')}`}>
                          {metric.icon}
                        </div>
                      </div>
                      <h3 className="text-base md:text-xl font-bold text-white">{metric.title}</h3>
                    </div>
                    <span className="text-xs md:text-sm font-semibold px-2 md:px-3 py-1 rounded-full bg-green-900/30 text-green-400">
                      {metric.change}
                    </span>
                  </div>
                  
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">{metric.value}</div>
                      <div className="flex items-center">
                        <div className="h-2 w-20 md:w-32 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${metric.color} rounded-full transition-all duration-1000`}
                            style={{ width: `${key === 'speed' ? 100 - ((metric.data[metric.data.length - 1] / 120) * 100) : metric.data[metric.data.length - 1]}%` }}
                          ></div>
                        </div>
                        <span className="text-gray-400 text-xs md:text-sm ml-2 md:ml-3">Last 6 quarters</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Visualization for selected metric */}
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-blue-500/30 rounded-xl md:rounded-2xl p-4 md:p-8 backdrop-blur-sm mx-2">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 md:mb-8">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{metrics[activeMetric].title} Trend</h3>
                  <p className="text-gray-400 text-sm md:text-base">Quarterly performance improvement</p>
                </div>
                <div className="flex items-center text-gray-400 text-sm">
                  <div className="h-3 w-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 mr-2"></div>
                  Performance Trend
                </div>
              </div>
              
              <div className="h-48 md:h-64 flex items-end justify-between overflow-x-auto">
                {metrics[activeMetric].data.map((value, index) => (
                  <div key={index} className="flex flex-col items-center min-w-[50px] md:min-w-0">
                    <div className="text-gray-400 text-xs md:text-base mb-2">Q{index + 1}</div>
                    <div 
                      className={`w-10 md:w-16 rounded-t-lg transition-all duration-1000 ${activeMetric === 'predictive' ? 'bg-gradient-to-t from-blue-600 to-cyan-400' : activeMetric === 'efficiency' ? 'bg-gradient-to-t from-purple-600 to-pink-400' : activeMetric === 'security' ? 'bg-gradient-to-t from-green-600 to-emerald-400' : 'bg-gradient-to-t from-orange-600 to-amber-400'}`}
                      style={{ 
                        height: activeMetric === 'speed' 
                          ? `${(120 - value) * 1.5}px` 
                          : `${value * 1.5}px` 
                      }}
                    ></div>
                    <div className="text-white font-bold mt-2 text-sm md:text-base">
                      {activeMetric === 'speed' ? `${value}ms` : `${value}%`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Features Section */}
          <div className="mb-16 md:mb-20 px-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Advanced Capabilities
              </span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-800 hover:border-blue-500/40 transition-all duration-500 transform hover:-translate-y-1 md:hover:-translate-y-3 hover:shadow-lg md:hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  <div className={`inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r ${feature.gradient} mb-4 md:mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base mb-4 md:mb-6">{feature.description}</p>
                  <div className="text-xs md:text-sm font-medium text-blue-400">{feature.stat}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Use Cases Section */}
          <div className="mb-16 md:mb-20 px-2">
            <div className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Industry Applications
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">See how AI analytics transforms different sectors</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-800 hover:border-blue-500/40 transition-all duration-300"
                >
                  <div className={`inline-flex p-2 md:p-3 rounded-lg md:rounded-xl bg-gray-800/50 mb-3 md:mb-4 ${useCase.color}`}>
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{useCase.industry}</h3>
                  <ul className="space-y-2 md:space-y-3">
                    {useCase.applications.map((app, appIndex) => (
                      <li key={appIndex} className="flex items-center text-gray-400 text-sm md:text-base">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 mr-2 md:mr-3"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section - Removed buttons as requested */}
          <div className="relative overflow-hidden rounded-xl md:rounded-3xl mx-2">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-purple-600/20"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative p-6 md:p-12 text-center border border-blue-500/30 rounded-xl md:rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
              <div className="inline-flex p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6 md:mb-8">
                <BarChart3 className="h-8 w-8 md:h-12 md:w-12 text-cyan-300" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">
                Comprehensive AI Analytics Platform
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                Our platform provides comprehensive documentation, detailed case studies, 
                and integration guides for enterprise AI analytics solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
                {[
                  { icon: <Users className="h-5 w-5 md:h-6 md:w-6" />, text: '24/7 Enterprise Support' },
                  { icon: <Lock className="h-5 w-5 md:h-6 md:w-6" />, text: 'SOC 2 Type II Certified' },
                  { icon: <Cloud className="h-5 w-5 md:h-6 md:w-6" />, text: 'Cloud & On-Premise Options' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-center space-x-2 md:space-x-3 p-3 md:p-4 bg-gray-900/40 rounded-lg">
                    <div className="text-blue-400">{item.icon}</div>
                    <span className="text-gray-300 text-sm md:text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 20}s`
            }}
          ></div>
        ))}
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(5px) translateX(-5px); }
          75% { transform: translateY(-5px) translateX(-10px); }
        }
        .animate-float {
          animation: float infinite ease-in-out;
        }
        
        /* Responsive text sizes */
        @media (max-width: 640px) {
          .text-gradient {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AIAnalytics;