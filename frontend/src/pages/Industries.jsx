import React, { useState, useEffect } from 'react';
import { 
  Building, Heart, ShoppingBag, Factory, GraduationCap, Shield, 
  DollarSign, Stethoscope, Store, Users, Target, BarChart, Rocket,
  Sparkles, Zap, Cpu, Brain, CircuitBoard, Database, Cloud, 
  Globe, Lock, Wifi, Server, BarChart3, TrendingUp, ChevronRight,
  ShieldCheck, Scale, Clock, Wrench, Cog, Users as Team,
  Eye, MessageSquare, Hexagon, Layers, Grid3X3, Sparkle,
  ArrowRight, Trophy, Target as TargetIcon, PieChart,
  BarChart2, TrendingUp as TrendingUpIcon, Zap as ZapIcon,
  Cpu as CpuIcon, Brain as BrainIcon, Globe as GlobeIcon,
  Activity, CloudLightning, Cpu as CPUIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("finance-banking");
  const [isHovered, setIsHovered] = useState(null);
  const [rotation, setRotation] = useState(0);

  const technologyStack = [
    { 
      name: "Computer Vision", 
      icon: <Eye className="h-6 w-6 sm:h-8 sm:w-8" />, 
      applications: 12,
      color: "from-cyan-500 to-blue-500",
      description: "Real-time visual analysis"
    },
    { 
      name: "NLP", 
      icon: <MessageSquare className="h-6 w-6 sm:h-8 sm:w-8" />, 
      applications: 8,
      color: "from-purple-500 to-pink-500",
      description: "Language understanding"
    },
    { 
      name: "Predictive Analytics", 
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />, 
      applications: 15,
      color: "from-orange-500 to-red-500",
      description: "Future insights"
    },
    { 
      name: "Machine Learning", 
      icon: <Cpu className="h-6 w-6 sm:h-8 sm:w-8" />, 
      applications: 20,
      color: "from-green-500 to-emerald-500",
      description: "Adaptive algorithms"
    },
    { 
      name: "RPA", 
      icon: <Cog className="h-6 w-6 sm:h-8 sm:w-8" />, 
      applications: 10,
      color: "from-yellow-500 to-amber-500",
      description: "Automated workflows"
    },
    { 
      name: "IoT Integration", 
      icon: <Wifi className="h-6 w-6 sm:h-8 sm:w-8" />, 
      applications: 7,
      color: "from-indigo-500 to-violet-500",
      description: "Connected systems"
    }
  ];

  const industries = [
    {
      id: "finance-banking",
      title: "Finance",
      description: "AI-powered financial intelligence transforming legacy systems into predictive engines.",
      icon: <Database className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-blue-700 via-cyan-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-blue-900/30 to-cyan-900/20",
      accentColor: "rgb(6, 182, 212)",
      image: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Fraud Detection AI",
        "Risk Assessment",
        "Algorithmic Trading",
        "Personalized Banking",
        "Regulatory Compliance"
      ],
      stats: { efficiency: "300%", accuracy: "99.8%", savings: "$2.5M" },
      gradientAngle: "45deg"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Life-saving AI diagnostics and predictive care revolutionizing patient outcomes.",
      icon: <Brain className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-rose-700 via-pink-500 to-purple-400",
      bgColor: "bg-gradient-to-br from-rose-900/30 to-pink-900/20",
      accentColor: "rgb(236, 72, 153)",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Medical Imaging Analysis",
        "Patient Risk Prediction",
        "Drug Discovery AI",
        "Personalized Treatment",
        "Health Data Analytics"
      ],
      stats: { efficiency: "45%", accuracy: "98.7%", patients: "500K+" },
      gradientAngle: "135deg"
    },
    {
      id: "retail-ecommerce",
      title: "Retail",
      description: "Hyper-personalized shopping experiences powered by behavioral AI.",
      icon: <ShoppingBag className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-amber-700 via-orange-500 to-red-400",
      bgColor: "bg-gradient-to-br from-amber-900/30 to-orange-900/20",
      accentColor: "rgb(251, 146, 60)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Personalized Recommendations",
        "Inventory Optimization",
        "Demand Forecasting",
        "Customer Behavior Analysis",
        "Supply Chain AI"
      ],
      stats: { sales: "65%", retention: "40%", revenue: "$8.3M" },
      gradientAngle: "225deg"
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Self-optimizing factories with AI-driven predictive maintenance.",
      icon: <CircuitBoard className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-emerald-700 via-green-500 to-teal-400",
      bgColor: "bg-gradient-to-br from-emerald-900/30 to-green-900/20",
      accentColor: "rgb(16, 185, 129)",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Predictive Maintenance",
        "Quality Control AI",
        "Autonomous Logistics",
        "Energy Optimization",
        "Production Automation"
      ],
      stats: { downtime: "-70%", quality: "99.9%", output: "+85%" },
      gradientAngle: "315deg"
    },
    {
      id: "education",
      title: "Education",
      description: "Adaptive learning ecosystems that personalize education at scale.",
      icon: <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-violet-700 via-purple-500 to-indigo-400",
      bgColor: "bg-gradient-to-br from-violet-900/30 to-purple-900/20",
      accentColor: "rgb(168, 85, 247)",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Personalized Learning",
        "Intelligent Tutoring",
        "Educational Analytics",
        "Administrative Automation",
        "Virtual Classrooms"
      ],
      stats: { engagement: "120%", performance: "35%", reach: "2M+" },
      gradientAngle: "45deg"
    },
    {
      id: "government",
      title: "Government",
      description: "Smart city AI creating sustainable and efficient public services.",
      icon: <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-indigo-700 via-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-indigo-900/30 to-blue-900/20",
      accentColor: "rgb(99, 102, 241)",
      image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Smart City Solutions",
        "Public Safety AI",
        "Service Automation",
        "Traffic Optimization",
        "Resource Management"
      ],
      stats: { efficiency: "55%", response: "-60%", citizens: "10M+" },
      gradientAngle: "135deg"
    },
    {
      id: "energy",
      title: "Energy",
      description: "AI-optimized power grids and renewable energy management systems.",
      icon: <Zap className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-yellow-600 via-amber-500 to-orange-400",
      bgColor: "bg-gradient-to-br from-yellow-900/30 to-amber-900/20",
      accentColor: "rgb(245, 158, 11)",
      solutions: [
        "Grid Optimization",
        "Predictive Maintenance",
        "Energy Trading AI",
        "Renewable Integration",
        "Consumption Analytics"
      ],
      stats: { efficiency: "40%", savings: "$1.2M", capacity: "+60%" }
    },
    {
      id: "transportation",
      title: "Transportation",
      description: "Intelligent logistics and autonomous transportation networks.",
      icon: <GlobeIcon className="h-10 w-10 sm:h-12 sm:w-12" />,
      color: "from-teal-600 via-emerald-500 to-green-400",
      bgColor: "bg-gradient-to-br from-teal-900/30 to-emerald-900/20",
      accentColor: "rgb(20, 184, 166)",
      solutions: [
        "Route Optimization",
        "Autonomous Vehicles",
        "Fleet Management",
        "Supply Chain AI",
        "Traffic Prediction"
      ],
      stats: { efficiency: "50%", costs: "-35%", delivery: "+70%" }
    }
  ];

  const currentIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  // AI Impact Stories Data
  const aiImpactStories = [
    {
      industry: "Finance",
      achievement: "Reduced fraudulent transactions by 92% using real-time AI monitoring",
      technology: "Machine Learning + Computer Vision",
      timeline: "6 months implementation"
    },
    {
      industry: "Healthcare",
      achievement: "Improved diagnostic accuracy by 45% with AI-assisted imaging analysis",
      technology: "Deep Learning + Predictive Analytics",
      timeline: "8 months deployment"
    },
    {
      industry: "Manufacturing",
      achievement: "Increased production efficiency by 85% through predictive maintenance",
      technology: "IoT + AI Analytics",
      timeline: "4 months integration"
    },
    {
      industry: "Retail",
      achievement: "Boosted customer retention by 40% with personalized AI recommendations",
      technology: "NLP + Behavioral AI",
      timeline: "3 months rollout"
    }
  ];

  // Animate rotation for floating elements
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animated background grid
  const BackgroundGrid = () => (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-10 sm:opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
      }} />
      
      {/* Animated hexagons with cleaner animation */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-500/5 rounded-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '80px',
            height: '80px',
          }}
          animate={{
            rotate: rotation,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <main className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-x-hidden">
      <BackgroundGrid />

      {/* Decorative floating elements with cleaner animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 sm:w-64 sm:h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(${i === 0 ? '6, 182, 212' : i === 1 ? '139, 92, 246' : i === 2 ? '16, 185, 129' : '251, 146, 60'}, 0.05) 0%, transparent 70%)`,
              left: `${20 + i * 20}%`,
              top: `${10 + i * 25}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 40],
              y: [0, Math.cos(i) * 40],
            }}
            transition={{
              duration: 15 + i * 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Hero Section - Clean and Modern */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 sm:mb-20 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/30 border border-cyan-500/30 mb-6 sm:mb-8 backdrop-blur-xl"
          >
            <div className="relative">
              <Sparkle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-cyan-300 tracking-wider">INDUSTRY TRANSFORMATION</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="text-white">Industry</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Solutions
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Advanced AI and automation solutions tailored for industry-specific challenges and transformation.
          </motion.p>
        </motion.div>

        {/* Mobile Categories - Fixed for better visibility and organization */}
        <div className="lg:hidden mb-10">
          {/* Section header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-cyan-500/30 mb-3">
              <span className="text-xs font-medium text-cyan-400">SELECT INDUSTRY</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto px-4">
              Tap on an industry to view AI solutions
            </p>
          </div>

          {/* 2x4 Grid for categories with better spacing */}
          <div className="grid grid-cols-4 gap-3 px-2 mb-4">
            {industries.slice(0, 8).map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                className={`
                  relative flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl 
                  transition-all duration-300 min-h-[100px]
                  ${activeIndustry === industry.id
                    ? 'scale-105 shadow-lg'
                    : 'opacity-90 hover:opacity-100 hover:scale-[1.02]'
                  }
                `}
                style={{
                  background: activeIndustry === industry.id 
                    ? `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))`
                    : 'rgba(0, 0, 0, 0.4)',
                  border: activeIndustry === industry.id
                    ? `2px solid ${industry.accentColor}`
                    : '1px solid rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {/* Active indicator */}
                {activeIndustry === industry.id && (
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                )}

                {/* Icon with better visibility */}
                <div className={`
                  p-3 rounded-lg mb-2 transition-all duration-300
                  ${activeIndustry === industry.id 
                    ? `bg-gradient-to-br ${industry.color} shadow-lg`
                    : 'bg-black/60'
                  }
                `}>
                  <div className={`${activeIndustry === industry.id ? 'text-white' : 'text-cyan-400'}`}>
                    {React.cloneElement(industry.icon, { 
                      className: 'h-6 w-6 sm:h-7 sm:w-7'
                    })}
                  </div>
                </div>

                {/* Category name */}
                <span className={`text-xs font-semibold text-center leading-tight ${
                  activeIndustry === industry.id ? 'text-white' : 'text-gray-300'
                }`}>
                  {industry.title}
                </span>

                {/* Subtle active indicator line */}
                {activeIndustry === industry.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Elegant Navigation */}
        <div className="hidden lg:block">
          <div className="relative mb-12">
            <div className="flex justify-center gap-2 mb-8">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
              <div className="h-0.5 w-24 bg-gradient-to-r from-cyan-500/50 to-blue-500/50"></div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-blue-500/50 to-transparent"></div>
            </div>

            <div className="grid grid-cols-4 gap-6 relative">
              {industries.slice(0, 4).map((industry, idx) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-6 rounded-2xl transition-all duration-500 ${
                    activeIndustry === industry.id
                      ? 'scale-105 shadow-2xl'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    background: activeIndustry === industry.id 
                      ? `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
                      : 'rgba(0, 0, 0, 0.3)',
                    border: activeIndustry === industry.id
                      ? `2px solid ${industry.accentColor}`
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${industry.color} bg-opacity-20`}>
                        <div className="text-white">{industry.icon}</div>
                      </div>
                      {activeIndustry === industry.id && (
                        <motion.div
                          className="absolute -inset-1 rounded-2xl border-2 border-transparent"
                          style={{ borderImage: `linear-gradient(45deg, ${industry.accentColor}, transparent) 1` }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 ${
                        activeIndustry === industry.id ? 'text-white' : 'text-gray-300'
                      }`}>
                        {industry.title}
                      </h3>
                      <p className="text-gray-500 text-sm text-center">
                        AI Solutions
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Second row for remaining industries */}
            <div className="grid grid-cols-4 gap-6 mt-6">
              {industries.slice(4, 8).map((industry) => (
                <motion.button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative p-6 rounded-2xl transition-all duration-500 ${
                    activeIndustry === industry.id
                      ? 'scale-105 shadow-2xl'
                      : 'opacity-80 hover:opacity-100'
                  }`}
                  style={{
                    background: activeIndustry === industry.id 
                      ? `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`
                      : 'rgba(0, 0, 0, 0.3)',
                    border: activeIndustry === industry.id
                      ? `2px solid ${industry.accentColor}`
                      : '1px solid rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${industry.color} bg-opacity-20`}>
                      <div className="text-white">{industry.icon}</div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold mb-2 ${
                        activeIndustry === industry.id ? 'text-white' : 'text-gray-300'
                      }`}>
                        {industry.title}
                      </h3>
                      <p className="text-gray-500 text-sm text-center">
                        AI Solutions
                      </p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Industry Showcase - Clean Design */}
        <motion.div 
          key={activeIndustry}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 sm:mb-32"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl mx-2 sm:mx-0"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Subtle accent line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
            
            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Industry Details */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border border-dashed rounded-full border-cyan-500/30"
                      />
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-black/50 to-transparent backdrop-blur-sm">
                        {currentIndustry.icon}
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        {currentIndustry.title}
                        <span className="text-cyan-400 ml-2">AI</span>
                      </h2>
                      <div className="text-gray-500 text-sm font-medium tracking-wider">
                        INTELLIGENT SOLUTIONS
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {currentIndustry.description}
                  </p>

                  {/* Clean Stats Display */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {Object.entries(currentIndustry.stats).map(([key, value], idx) => (
                      <div key={key} className="text-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
                        <div className="text-gray-500 text-xs uppercase tracking-wider">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Solutions List */}
                  <div className="space-y-3">
                    <div className="text-gray-400 text-sm font-medium tracking-wider mb-2">
                      KEY SOLUTIONS
                    </div>
                    {currentIndustry.solutions.map((solution, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-colors group"
                      >
                        <div className="h-2 w-2 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
                        <span className="text-white text-sm group-hover:text-cyan-300 transition-colors">{solution}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right - Interactive Visualization */}
                <div className="relative mt-8 lg:mt-0">
                  <div className="relative h-64 sm:h-72 md:h-80 rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(139, 92, 246, 0.1))',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 20% 20%, ${currentIndustry.accentColor} 0%, transparent 20%),
                                          radial-gradient(circle at 80% 80%, ${currentIndustry.accentColor} 0%, transparent 20%)`
                      }} />
                    </div>

                    {/* Central orb animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          rotate: 360,
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 15, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="relative w-48 h-48 sm:w-56 sm:h-56"
                      >
                        <div className="absolute inset-0 border border-cyan-500/30 rounded-full" />
                        <div className="absolute inset-6 sm:inset-8 border border-blue-500/30 rounded-full" />
                        <div className="absolute inset-12 sm:inset-16 border border-purple-500/30 rounded-full" />
                        
                        {/* Pulsing center */}
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-16 sm:inset-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-80"
                          style={{
                            boxShadow: `0 0 60px ${currentIndustry.accentColor}40`
                          }}
                        />
                      </motion.div>
                    </div>

                    {/* Floating data points */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          background: currentIndustry.accentColor,
                          left: `${20 + (i % 4) * 20}%`,
                          top: `${20 + Math.floor(i / 4) * 20}%`,
                          filter: 'blur(1px)'
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.4, 0.8, 0.4],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {["AI Integration", "Real-time Analytics", "Cloud Native", "Automated Workflows"].map((tech, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-full bg-black/50 border border-white/10 text-cyan-400 text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Transformation Stories - Clean Design */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 sm:mb-32"
        >
          <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/10"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
            }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-black/30 border border-cyan-500/30 mb-4 backdrop-blur-xl">
                <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                <span className="text-xs sm:text-sm font-medium text-cyan-300 tracking-wider">SUCCESS STORIES</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Real <span className="text-cyan-400">Impact</span> Stories
              </h2>
              
              <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
                How AI is delivering measurable results across different sectors
              </p>
            </div>

            {/* Impact Stories Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {aiImpactStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden h-full hover:border-cyan-500/30 transition-colors">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Industry badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                        <span className="text-xs font-medium text-cyan-400">{story.industry}</span>
                      </div>
                      
                      {/* Achievement */}
                      <h3 className="text-white font-semibold text-sm sm:text-base mb-3 leading-relaxed">
                        {story.achievement}
                      </h3>
                      
                      {/* Technology and Timeline */}
                      <div className="pt-3 border-t border-white/10">
                        <div className="text-gray-500 text-xs mb-1">TECHNOLOGY</div>
                        <div className="text-cyan-400 text-sm font-medium mb-3">{story.technology}</div>
                        <div className="text-gray-500 text-xs">TIMELINE</div>
                        <div className="text-gray-300 text-sm">{story.timeline}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technology Stack - Clean Grid */}
        <div className="mb-16 sm:mb-32">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-black/30 border border-cyan-500/30 mb-4 backdrop-blur-xl">
              <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <span className="text-xs sm:text-sm font-medium text-cyan-300 tracking-wider">TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Core <span className="text-cyan-400">Technologies</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Advanced technologies powering industry transformation
            </p>
          </div>

          {/* Clean Tech Grid */}
          <div className="relative px-2 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
              {technologyStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative"
                >
                  <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 h-full hover:border-cyan-500/30 transition-colors">
                    {/* Tech Icon */}
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${tech.color} bg-opacity-20 mb-4 mx-auto w-fit`}>
                      <div className="text-white">{tech.icon}</div>
                    </div>
                    
                    {/* Tech Info */}
                    <h3 className="text-white font-bold text-center text-sm sm:text-base mb-2">{tech.name}</h3>
                    <p className="text-gray-400 text-xs text-center mb-3">{tech.description}</p>
                    
                    <div className="text-center">
                      <div className="text-cyan-400 text-xs sm:text-sm font-bold">
                        {tech.applications}+ Applications
                      </div>
                    </div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* All Industries Overview - Clean Grid */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              All <span className="text-cyan-400">Industries</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Comprehensive AI solutions across every sector
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                <div className="relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden h-full hover:border-cyan-500/30 transition-colors">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${industry.color} bg-opacity-20`}>
                      <div className="text-white">{React.cloneElement(industry.icon, { className: 'h-5 w-5 sm:h-6 sm:w-6' })}</div>
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl">{industry.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {industry.description}
                  </p>
                  
                  {/* Solutions Preview */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-gray-500 text-xs mb-2">KEY SOLUTIONS</div>
                    <div className="flex flex-wrap gap-1.5">
                      {industry.solutions.slice(0, 2).map((solution, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                          {solution}
                        </span>
                      ))}
                      <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs">
                        +{industry.solutions.length - 2}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
        
        /* Hide scrollbar for horizontal scroll on mobile */
        .overflow-x-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        
        /* Smooth transitions */
        * {
          scroll-behavior: smooth;
        }
      `}</style>
    </main>
  );
}

export default Industries;