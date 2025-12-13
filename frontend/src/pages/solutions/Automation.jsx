import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Clock, Brain, ChevronRight, Play, Pause, TrendingUp, BarChart3, Cloud, Shield, Settings, RefreshCw, Activity } from 'lucide-react';

const Automation = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [automationRunning, setAutomationRunning] = useState(true);
  const [stats, setStats] = useState({
    efficiency: 87,
    uptime: 99.9,
    processes: 1247,
    savedHours: 2450
  });

  // Simulate live updating stats
  useEffect(() => {
    if (automationRunning) {
      const interval = setInterval(() => {
        setStats(prev => ({
          efficiency: Math.min(99, prev.efficiency + (Math.random() > 0.5 ? 0.1 : -0.05)),
          uptime: 99.9,
          processes: prev.processes + Math.floor(Math.random() * 3),
          savedHours: prev.savedHours + Math.floor(Math.random() * 2)
        }));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [automationRunning]);

  const features = [
    { 
      icon: <Zap className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: 'RPA Integration', 
      desc: 'Seamless robotic process automation with human-in-the-loop controls',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-500/10 to-orange-500/10',
      details: 'Connect legacy systems with modern AI workflows. Our RPA bots handle repetitive tasks while maintaining audit trails and compliance standards.'
    },
    { 
      icon: <Clock className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: '24/7 Operation', 
      desc: 'Non-stop automation with intelligent failure recovery',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-green-500/10 to-teal-500/10',
      details: 'Continuous operation with automated monitoring and alerting. Self-healing processes ensure minimal downtime even during unexpected scenarios.'
    },
    { 
      icon: <Brain className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: 'Self-Learning', 
      desc: 'Adaptive algorithms that improve with every execution',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-purple-500/10 to-pink-500/10',
      details: 'Machine learning models continuously optimize workflows based on performance data, user feedback, and changing business requirements.'
    },
    { 
      icon: <Cloud className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: 'Cloud Native', 
      desc: 'Scalable automation across hybrid cloud environments',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10',
      details: 'Deploy automation workflows across any cloud or on-premise environment with centralized management and orchestration capabilities.'
    },
    { 
      icon: <Shield className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: 'Security First', 
      desc: 'Enterprise-grade security with zero-trust architecture',
      color: 'from-red-500 to-rose-500',
      bgColor: 'bg-gradient-to-br from-red-500/10 to-rose-500/10',
      details: 'End-to-end encryption, role-based access controls, and comprehensive audit logs ensure your automation is both powerful and secure.'
    },
    { 
      icon: <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: 'Analytics Dashboard', 
      desc: 'Real-time insights and performance optimization',
      color: 'from-indigo-500 to-violet-500',
      bgColor: 'bg-gradient-to-br from-indigo-500/10 to-violet-500/10',
      details: 'Visualize automation performance, identify bottlenecks, and receive actionable recommendations for continuous improvement.'
    }
  ];

  const useCases = [
    { title: 'Customer Service', automation: 'AI-powered ticket routing and response', efficiency: '75% faster resolution' },
    { title: 'Finance', automation: 'Automated invoice processing and reconciliation', efficiency: '90% reduction in errors' },
    { title: 'HR Operations', automation: 'Resume screening and interview scheduling', efficiency: '60% time saved' },
    { title: 'IT Operations', automation: 'Infrastructure monitoring and incident response', efficiency: '99.5% uptime' },
    { title: 'Supply Chain', automation: 'Demand forecasting and inventory optimization', efficiency: '30% cost reduction' },
    { title: 'Marketing', automation: 'Personalized campaign orchestration', efficiency: '40% higher engagement' },
  ];

  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-12 md:pb-16 px-4 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 md:w-64 md:h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900/95 to-gray-900">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-purple-500/20 via-blue-500/20 to-cyan-500/20 border border-purple-500/30 mb-6 md:mb-8 shadow-lg shadow-purple-500/10">
            <Cpu className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-cyan-300" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-blue-300 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
            Intelligent Automation
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            Transform your business with self-learning automation that adapts to your workflows, 
            optimizes processes in real-time, and delivers unprecedented efficiency gains while 
            maintaining human oversight and control.
          </p>
          
          {/* Interactive Control - Responsive */}
          <div className="inline-flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-gray-900/60 backdrop-blur-sm rounded-xl md:rounded-2xl border border-gray-800/50 mb-8 md:mb-12">
            <button 
              onClick={() => setAutomationRunning(!automationRunning)}
              className={`flex items-center gap-2 md:gap-3 px-4 py-2 md:px-6 md:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${automationRunning ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-500/30' : 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/30'}`}
            >
              {automationRunning ? (
                <>
                  <Pause className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">Pause Automation</span>
                  <span className="sm:hidden">Pause</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 md:h-5 md:w-5" />
                  <span className="hidden sm:inline">Start Automation</span>
                  <span className="sm:hidden">Start</span>
                </>
              )}
            </button>
            <div className="flex items-center gap-2 text-gray-400">
              <Activity className={`h-3 w-3 md:h-4 md:w-4 ${automationRunning ? 'text-green-400 animate-pulse' : 'text-amber-400'}`} />
              <span className="text-xs md:text-sm">
                {automationRunning ? 
                  <span className="hidden sm:inline">Live Processing</span> : 
                  <span className="hidden sm:inline">Paused</span>}
                <span className="sm:hidden">{automationRunning ? 'Live' : 'Paused'}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Live Stats Dashboard - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-16 px-2">
          {Object.entries(stats).map(([key, value], index) => (
            <div key={key} className="bg-gray-900/40 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800/50 hover:border-cyan-500/30 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${index === 0 ? 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10' : 
                  index === 1 ? 'bg-gradient-to-br from-emerald-500/10 to-green-500/10' : 
                  index === 2 ? 'bg-gradient-to-br from-purple-500/10 to-pink-500/10' : 
                  'bg-gradient-to-br from-amber-500/10 to-orange-500/10'}`}>
                  {index === 0 ? <TrendingUp className="h-4 w-4 md:h-6 md:w-6 text-cyan-400" /> :
                   index === 1 ? <Clock className="h-4 w-4 md:h-6 md:w-6 text-emerald-400" /> :
                   index === 2 ? <Settings className="h-4 w-4 md:h-6 md:w-6 text-purple-400" /> :
                   <RefreshCw className="h-4 w-4 md:h-6 md:w-6 text-amber-400" />}
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-800/50 text-gray-300">
                  LIVE
                </span>
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1">
                {typeof value === 'number' && value % 1 !== 0 ? value.toFixed(1) : value}
                {key === 'efficiency' || key === 'uptime' ? '%' : ''}
              </div>
              <div className="text-xs sm:text-sm text-gray-400 capitalize">
                {key.replace(/([A-Z])/g, ' $1')}
              </div>
              <div className="mt-3 md:mt-4 h-1.5 md:h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${index === 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 
                    index === 1 ? 'bg-gradient-to-r from-emerald-500 to-green-500' : 
                    index === 2 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 
                    'bg-gradient-to-r from-amber-500 to-orange-500'}`}
                  style={{ width: `${Math.min(100, (value / (index === 2 ? 2000 : 100)) * 100)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid - Responsive */}
        <div className="mb-16 md:mb-20 px-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 md:mb-12 text-center">
            Core <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((feature, i) => (
              <div 
                key={i}
                onClick={() => setActiveFeature(i)}
                className={`p-4 md:p-6 rounded-xl md:rounded-2xl border backdrop-blur-sm cursor-pointer transition-all duration-300 ${activeFeature === i ? 
                  `ring-1 md:ring-2 ring-offset-1 md:ring-offset-2 ring-offset-gray-900 ${feature.bgColor} border-transparent transform scale-[1.02]` : 
                  'bg-gray-900/40 border-gray-800/50 hover:border-gray-700/50'}`}
              >
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div className={`p-2 md:p-3 rounded-lg md:rounded-xl ${feature.bgColor}`}>
                    <div className={`bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                      {feature.icon}
                    </div>
                  </div>
                  <ChevronRight className={`h-4 w-4 md:h-5 md:w-5 transition-transform duration-300 ${activeFeature === i ? 'text-cyan-400 rotate-90' : 'text-gray-500'}`} />
                </div>
                <h3 className={`text-lg md:text-xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm md:text-base mb-3 md:mb-4">
                  {feature.desc}
                </p>
                {activeFeature === i && (
                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-800/50 animate-fade-in">
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                      {feature.details}
                    </p>
                    <button className="mt-3 md:mt-4 text-xs md:text-sm font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 px-3 py-1.5 md:px-4 md:py-2 rounded-lg hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300">
                      Explore Integration
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section - Responsive */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 border border-gray-800/50 mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 md:mb-10">
            <div className="mb-4 sm:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                Real-World <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Applications</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base">See how AI automation transforms industries</p>
            </div>
            <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="hidden sm:inline">Active implementations</span>
              <span className="sm:hidden">Active</span>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {useCases.map((useCase, i) => (
              <div key={i} className="group bg-gray-900/30 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-800/30 hover:border-cyan-500/20 transition-all duration-300 hover:bg-gray-900/50">
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className="text-base md:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    {useCase.title}
                  </div>
                  <div className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300">
                    AI+
                  </div>
                </div>
                <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                  {useCase.automation}
                </p>
                <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                  <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
                  {useCase.efficiency}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Removed CTA Section as requested */}
      </div>
    </div>
  );
};

export default Automation;