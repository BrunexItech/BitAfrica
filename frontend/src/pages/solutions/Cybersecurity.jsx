import React, { useState, useEffect } from 'react';
import { 
  Shield, Lock, Eye, Network, Zap, Cpu, Globe, 
  AlertTriangle, CheckCircle, Server, Cloud, Code 
} from 'lucide-react';

const Cybersecurity = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [threatDetected, setThreatDetected] = useState(false);
  const [protectionActive, setProtectionActive] = useState(true);
  
  const features = [
    { 
      icon: <Zap className="h-8 w-8" />, 
      title: 'Real-time Threat Detection', 
      desc: 'AI-powered systems continuously monitor network traffic, identifying and neutralizing threats within milliseconds.',
      color: 'from-blue-500 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-blue-900/30 to-cyan-900/20',
      stat: '99.9%',
      statDesc: 'Threat detection accuracy'
    },
    { 
      icon: <Cpu className="h-8 w-8" />, 
      title: 'Predictive Analytics', 
      desc: 'Machine learning algorithms predict and prevent attacks before they occur by analyzing behavioral patterns.',
      color: 'from-purple-500 to-pink-400',
      bgColor: 'bg-gradient-to-br from-purple-900/30 to-pink-900/20',
      stat: '85%',
      statDesc: 'Attack prevention rate'
    },
    { 
      icon: <Globe className="h-8 w-8" />, 
      title: 'Global Threat Intelligence', 
      desc: 'Cross-referencing data from millions of endpoints worldwide to identify emerging global threats.',
      color: 'from-emerald-500 to-teal-400',
      bgColor: 'bg-gradient-to-br from-emerald-900/30 to-teal-900/20',
      stat: '2M+',
      statDesc: 'Threats analyzed daily'
    }
  ];

  const threats = [
    "Phishing attempt detected",
    "DDoS attack prevented",
    "Malware signature updated",
    "Zero-day vulnerability patched",
    "Data breach prevented"
  ];

  const stats = [
    { value: '24/7', label: 'Monitoring', icon: <Eye className="h-5 w-5" /> },
    { value: '10ms', label: 'Response Time', icon: <Zap className="h-5 w-5" /> },
    { value: '256-bit', label: 'Encryption', icon: <Lock className="h-5 w-5" /> },
    { value: '99.99%', label: 'Uptime', icon: <Server className="h-5 w-5" /> }
  ];

  // Array of icon components for floating background
  const floatingIcons = [Shield, Lock, Network, Code, Cloud];

  useEffect(() => {
    const interval = setInterval(() => {
      setThreatDetected(true);
      setTimeout(() => setThreatDetected(false), 2000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Network Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[linear-gradient(90deg,transparent_24px,rgba(59,130,246,0.1)_25px,transparent_26px),linear-gradient(transparent_24px,rgba(59,130,246,0.1)_25px,transparent_26px)] bg-[size:50px_50px]"></div>
        </div>
      </div>

      {/* Floating Security Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const IconComponent = floatingIcons[i % 5];
          return (
            <div
              key={i}
              className="absolute text-cyan-400/10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: 0.1 + Math.random() * 0.2,
                animation: 'float 6s ease-in-out infinite'
              }}
            >
              <IconComponent className="h-8 w-8" />
            </div>
          );
        })}
      </div>

      <div className="relative pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/40 mb-6 shadow-lg shadow-cyan-500/20 animate-pulse-slow">
            <Shield className="h-12 w-12 text-cyan-300" />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
              Advanced Cybersecurity
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-light text-gray-300 mt-4 block">
              AI-Powered Threat Protection
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Revolutionizing digital security with self-learning AI that adapts, predicts, 
            and neutralizes threats in real-time across your entire infrastructure.
          </p>
          
          {/* Security Status Indicator */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 mb-8">
            <div className={`h-3 w-3 rounded-full animate-pulse ${protectionActive ? 'bg-emerald-400' : 'bg-red-400'}`}></div>
            <span className="text-gray-300 font-medium">
              {protectionActive ? 'All Systems Protected' : 'Security Alert'}
            </span>
            <CheckCircle className="h-5 w-5 text-emerald-400" />
          </div>
        </div>

        {/* Threat Alert Animation */}
        {threatDetected && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <div className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-red-900/40 to-orange-900/40 backdrop-blur-sm rounded-lg border border-red-500/30 shadow-lg">
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
              <div>
                <p className="text-white font-medium">Threat Neutralized</p>
                <p className="text-red-300 text-sm">{threats[Math.floor(Math.random() * threats.length)]}</p>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-500 cursor-pointer hover:scale-[1.02] ${activeFeature === index ? 'ring-2 ring-cyan-500/50' : ''}`}
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.4) 0%, rgba(15, 23, 42, 0.6) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}
              onMouseEnter={() => setActiveFeature(index)}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`inline-flex items-center justify-center h-16 w-16 rounded-xl bg-gradient-to-r ${feature.color} mb-6`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{feature.desc}</p>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                    {feature.stat}
                  </div>
                  <div className="text-sm text-gray-400">{feature.statDesc}</div>
                </div>
                <div className="h-2 w-24 rounded-full overflow-hidden bg-gray-800">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${feature.color} transition-all duration-1000`}
                    style={{ 
                      width: feature.stat.includes('%') 
                        ? feature.stat.replace('%', '') + '%' 
                        : '100%' 
                    }}
                  ></div>
                </div>
              </div>
              
              {/* Hover Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.color} opacity-0 hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Live Stats Dashboard */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all duration-300 hover:bg-gray-900/50"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.4) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(59, 130, 246, 0.1)'
              }}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-900/30 to-blue-900/30">
                  <div className="text-cyan-400">{stat.icon}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Security Visualization */}
        <div className="relative rounded-2xl overflow-hidden p-8 mb-16">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-cyan-900/10 via-blue-900/10 to-purple-900/10"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
            }}
          ></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Live Security Network</h2>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-4xl h-64">
                {/* Network Lines Animation */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-0.5 bg-gradient-to-r from-cyan-500/20 to-transparent"
                      style={{
                        top: `${(i + 1) * 20}%`,
                        left: '0%',
                        width: '100%',
                        animation: `network-line 3s linear infinite ${i * 0.5}s`
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Data Nodes */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"
                    style={{
                      left: `${Math.random() * 90 + 5}%`,
                      top: `${Math.random() * 90 + 5}%`,
                      animationDelay: `${Math.random() * 2}s`,
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
                    }}
                  ></div>
                ))}
              </div>
              
              <div className="mt-8 text-center max-w-2xl">
                <p className="text-gray-300">
                  Our AI system continuously monitors <span className="text-cyan-300 font-medium">45,000+</span> global endpoints, 
                  analyzing <span className="text-blue-300 font-medium">2.3TB</span> of security data per hour to provide unparalleled protection.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Protection Layers */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Multi-Layered Defense System</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Firewall Intelligence', 'Endpoint Protection', 'Cloud Security', 'Encryption', 'Access Control', 'Threat Hunting'].map((layer, index) => (
              <div
                key={index}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all hover:border-cyan-500/30 hover:scale-105"
              >
                <span className="text-gray-300 font-medium">{layer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes network-line {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
        
        @keyframes slide-in {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Cybersecurity;