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

  // Animated background grid
  const BackgroundGrid = () => (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-10 sm:opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '30px 30px',
        maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
      }} />
      {/* Animated hexagons */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-500/10 rounded-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '60px',
            height: '60px',
            rotate: '30deg'
          }}
          animate={{
            rotate: [30, 390],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );

  return (
    <main className="pt-16 sm:pt-20 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-x-hidden">
      <BackgroundGrid />

      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 sm:w-64 sm:h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 50],
              y: [0, Math.cos(i) * 50],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Hero Section - Made More Compact */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 sm:mb-24 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black/50 border border-cyan-500/30 mb-6 sm:mb-8 backdrop-blur-xl"
          >
            <div className="relative">
              <Sparkle className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 animate-spin-slow" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wider sm:tracking-widest">INDUSTRY TRANSFORMATION</span>
          </motion.div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white mb-4 sm:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-POWERED
            </span>
            <br />
            <span className="text-white text-3xl sm:text-5xl md:text-6xl">SOLUTIONS</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4"
          >
            Transforming industries with intelligent AI systems that learn, adapt, and optimize in real-time.
          </motion.p>
          
          {/* Interactive Stats - Made Responsive */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 px-4">
            {[
              { value: "50+", label: "Industries", color: "cyan" },
              { value: "99.7%", label: "Accuracy", color: "blue" },
              { value: "200+", label: "Solutions", color: "purple" },
              { value: "45%", label: "Avg. ROI", color: "pink" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 overflow-hidden min-w-[100px] sm:min-w-[120px]">
                  <div className="relative">
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider mt-1 sm:mt-2">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile-Friendly Industry Navigation */}
        <div className="mb-12 sm:mb-20 relative">
          {/* Mobile horizontal scroll for industry buttons */}
          <div className="lg:hidden overflow-x-auto pb-4 mb-8 px-4">
            <div className="flex gap-3 min-w-max">
              {industries.slice(0, 6).map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(industry.id)}
                  className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                    activeIndustry === industry.id
                      ? `bg-gradient-to-r ${industry.color} text-white shadow-lg`
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/80'
                  }`}
                >
                  {industry.title}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Circular Navigation */}
          <div className="hidden lg:block relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <motion.path
                  d="M10,50 Q50,10 90,50 Q50,90 10,50"
                  stroke="url(#gradient)"
                  strokeWidth="0.5"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative">
              <motion.div 
                className="relative mx-auto w-64 h-64 sm:w-96 sm:h-96 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                {industries.slice(0, 6).map((industry, idx) => {
                  const angle = (idx / 6) * 2 * Math.PI;
                  const x = 48 + 35 * Math.cos(angle);
                  const y = 48 + 35 * Math.sin(angle);
                  
                  return (
                    <motion.button
                      key={industry.id}
                      onClick={() => setActiveIndustry(industry.id)}
                      className={`absolute w-14 h-14 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        activeIndustry === industry.id
                          ? 'scale-125 shadow-2xl'
                          : 'scale-100'
                      }`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: `translate(-50%, -50%)`,
                        background: activeIndustry === industry.id 
                          ? `linear-gradient(135deg, ${industry.accentColor}20, ${industry.accentColor}40)`
                          : 'rgba(0, 0, 0, 0.3)',
                        border: activeIndustry === industry.id
                          ? `2px solid ${industry.accentColor}`
                          : '1px solid rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)'
                      }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      <div className={`${activeIndustry === industry.id ? 'text-white' : 'text-gray-400'}`}>
                        {React.cloneElement(industry.icon, { className: 'h-6 w-6 sm:h-8 sm:w-8' })}
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  key={activeIndustry}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center px-4"
                >
                  <div className="text-2xl sm:text-4xl font-black text-white mb-2">
                    {currentIndustry.title}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm max-w-xs mx-auto">
                    {currentIndustry.description}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Industry Showcase - Made Responsive */}
        <motion.div 
          key={activeIndustry}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-16 sm:mb-32"
        >
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-xl mx-2 sm:mx-0"
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 0 40px ${currentIndustry.accentColor}20,
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            <div className="relative p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left - Data Visualization */}
                <div>
                  <div className="mb-6 sm:mb-8">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed rounded-full border-cyan-500/30"
                        />
                        <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-black/50 to-transparent backdrop-blur-sm">
                          {currentIndustry.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                          {currentIndustry.title}
                          <span className="text-cyan-400 ml-2">AI</span>
                        </h2>
                        <div className="text-gray-500 text-xs sm:text-sm font-medium tracking-wider">
                          INTELLIGENT TRANSFORMATION
                        </div>
                      </div>
                    </div>

                    {/* Animated progress rings - Made Responsive */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      {Object.entries(currentIndustry.stats).map(([key, value], idx) => (
                        <div key={key} className="text-center">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-2">
                            <svg className="w-full h-full" viewBox="0 0 100 100">
                              <circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke="rgba(255,255,255,0.1)"
                                strokeWidth="8"
                              />
                              <motion.circle
                                cx="50"
                                cy="50"
                                r="40"
                                fill="none"
                                stroke={currentIndustry.accentColor}
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 0.7 }}
                                transition={{ duration: 1.5, delay: idx * 0.2 }}
                                transform="rotate(-90 50 50)"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-lg sm:text-xl md:text-2xl font-black text-white">{value}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions Grid - Made Responsive */}
                  <div className="relative">
                    <div className="text-gray-400 text-xs sm:text-sm font-medium tracking-wider mb-3 sm:mb-4">
                      CORE SOLUTIONS
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {currentIndustry.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: `${currentIndustry.accentColor}10` }}
                          className="p-3 sm:p-4 rounded-lg sm:rounded-xl border border-white/5 bg-black/30 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="h-2 w-2 rounded-full bg-cyan-500" />
                            <span className="text-white text-sm">{solution}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Interactive 3D Effect - Made Responsive */}
                <div className="relative mt-8 lg:mt-0">
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(45deg, ${currentIndustry.accentColor}15, transparent)`,
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Floating data points */}
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
                        style={{
                          background: currentIndustry.accentColor,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.2, 1, 0.2],
                        }}
                        transition={{
                          duration: 2 + Math.random(),
                          repeat: Infinity,
                          delay: Math.random() * 2,
                        }}
                      />
                    ))}

                    {/* Central visualization */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        animate={{ 
                          rotateY: [0, 180, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 20, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="relative w-48 h-48 sm:w-64 sm:h-64"
                      >
                        <div className="absolute inset-0 border-2 border-dashed rounded-full border-cyan-500/30" />
                        <div className="absolute inset-6 sm:inset-8 border-2 border-dashed rounded-full border-blue-500/30" />
                        <div className="absolute inset-12 sm:inset-16 border-2 border-dashed rounded-full border-purple-500/30" />
                        
                        {/* Pulsing center */}
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-16 sm:inset-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Real-time metrics - Made Responsive */}
                  <div className="mt-4 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-4">
                    {[
                      { label: "AI Processing", value: "24/7", trend: "+" },
                      { label: "Data Points", value: "2.4M", trend: "↑" },
                      { label: "Accuracy", value: "99.8%", trend: "↗" }
                    ].map((metric, idx) => (
                      <div key={idx} className="text-center p-3 sm:p-4 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-sm border border-white/5">
                        <div className="text-lg sm:text-xl md:text-2xl font-black text-white">{metric.value}</div>
                        <div className="text-xs text-gray-500 mt-1">{metric.label}</div>
                        <div className="text-green-400 text-xs mt-1">{metric.trend} Live</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Transformation Stories Section - New Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-16 sm:mb-32"
        >
          {/* Background with subtle animation */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-purple-500/5" />
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-32 h-32 rounded-full blur-3xl"
                style={{
                  background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-white/10 bg-black/40">
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-black/50 border border-cyan-500/30 mb-4 backdrop-blur-xl">
                <Activity className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wider">AI TRANSFORMATION IMPACT</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
                How <span className="text-cyan-400">AI</span> Transforms Industries
              </h2>
              
              <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                Real-world applications of artificial intelligence driving measurable business outcomes across sectors
              </p>
            </div>

            {/* AI Impact Stories Grid */}
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
                  <div className="relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 overflow-hidden h-full">
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      {/* Industry badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-4">
                        <div className="h-2 w-2 rounded-full bg-cyan-500" />
                        <span className="text-xs font-bold text-cyan-400">{story.industry}</span>
                      </div>
                      
                      {/* Achievement */}
                      <h3 className="text-white font-bold text-sm sm:text-base mb-3 leading-relaxed">
                        {story.achievement}
                      </h3>
                      
                      {/* Technology used */}
                      <div className="mb-4">
                        <div className="text-gray-500 text-xs mb-2">TECHNOLOGY STACK</div>
                        <div className="text-cyan-400 text-xs font-medium">{story.technology}</div>
                      </div>
                      
                      {/* Timeline */}
                      <div className="pt-3 border-t border-white/10">
                        <div className="text-gray-500 text-xs">IMPLEMENTATION</div>
                        <div className="text-gray-300 text-sm font-medium">{story.timeline}</div>
                      </div>
                    </div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan-500/30" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-cyan-500/30" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-cyan-500/30" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan-500/30" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Process Visualization */}
            <div className="mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">The AI Transformation Process</h3>
                <p className="text-gray-400 text-sm sm:text-base">From data to actionable intelligence</p>
              </div>
              
              <div className="relative">
                {/* Process steps - Responsive layout */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { step: "01", title: "Data Analysis", desc: "Pattern recognition", icon: <Database className="h-5 w-5" /> },
                    { step: "02", title: "AI Modeling", desc: "Algorithm training", icon: <Brain className="h-5 w-5" /> },
                    { step: "03", title: "Integration", desc: "System deployment", icon: <CircuitBoard className="h-5 w-5" /> },
                    { step: "04", title: "Optimization", desc: "Continuous learning", icon: <TrendingUp className="h-5 w-5" /> }
                  ].map((process, idx) => (
                    <div key={idx} className="text-center">
                      <div className="relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-3">
                        <div className="text-cyan-400">{process.icon}</div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-black border border-cyan-500/50 flex items-center justify-center">
                          <span className="text-xs font-bold text-cyan-400">{process.step}</span>
                        </div>
                      </div>
                      <div className="text-white font-bold text-sm sm:text-base">{process.title}</div>
                      <div className="text-gray-500 text-xs mt-1">{process.desc}</div>
                    </div>
                  ))}
                </div>
                
                {/* Connecting lines for desktop */}
                <div className="hidden sm:block absolute top-6 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 -z-10" />
                <div className="hidden sm:block absolute top-6 left-2/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 -z-10" />
                <div className="hidden sm:block absolute top-6 left-3/4 right-1/4 h-0.5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 -z-10" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack - Made Responsive */}
        <div className="mb-16 sm:mb-32">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-black/50 border border-cyan-500/30 mb-4 backdrop-blur-xl">
              <Cpu className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
              <span className="text-xs sm:text-sm font-bold text-cyan-400 tracking-wider">TECHNOLOGY MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
              Neural <span className="text-cyan-400">Architecture</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Advanced AI technologies powering industry transformation
            </p>
          </div>

          {/* Tech hex grid - Made Responsive */}
          <div className="relative px-2 sm:px-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {technologyStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="relative group"
                >
                  {/* Hexagon shape */}
                  <div className="relative h-40 sm:h-48"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/50 transition-colors" />
                    
                    <div className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-3 sm:inset-4 border border-cyan-500/20 rounded-full"
                      />
                      
                      <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${tech.color} bg-opacity-20 mb-3 sm:mb-4`}>
                        <div className="text-white">{tech.icon}</div>
                      </div>
                      
                      <h3 className="text-white font-bold text-center text-sm sm:text-base mb-1 sm:mb-2">{tech.name}</h3>
                      <p className="text-gray-400 text-xs text-center mb-2 sm:mb-3">{tech.description}</p>
                      
                      <div className="text-cyan-400 text-xs sm:text-sm font-bold">
                        {tech.applications}+ applications
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* All Industries Overview - Grid Layout */}
        <div className="mb-16 sm:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 sm:mb-4">
              Industry <span className="text-cyan-400">Solutions</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Comprehensive AI solutions tailored to specific industry challenges
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
                <div className="relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-white/10 overflow-hidden h-full">
                  {/* Hover gradient effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${industry.color} bg-opacity-20`}>
                        <div className="text-white">{React.cloneElement(industry.icon, { className: 'h-5 w-5 sm:h-6 sm:w-6' })}</div>
                      </div>
                      <h3 className="text-white font-bold text-lg sm:text-xl">{industry.title}</h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {industry.description}
                    </p>
                    
                    {/* Stats Preview */}
                    <div className="flex items-center gap-4 mb-4">
                      {Object.entries(industry.stats).slice(0, 2).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg sm:text-xl font-bold text-white">{value}</div>
                          <div className="text-gray-500 text-xs capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                    
                    {/* Solutions Preview */}
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-gray-500 text-xs mb-2">KEY SOLUTIONS</div>
                      <div className="flex flex-wrap gap-1.5">
                        {industry.solutions.slice(0, 3).map((solution, idx) => (
                          <span key={idx} className="px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs">
                            {solution}
                          </span>
                        ))}
                      </div>
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
          50% { transform: translateY(-10px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
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
        
        /* Custom scrollbar */
        @media (min-width: 640px) {
          ::-webkit-scrollbar {
            width: 10px;
          }
          
          ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.3);
          }
          
          ::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #06b6d4, #3b82f6);
            border-radius: 5px;
          }
          
          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          }
        }
        
        /* Text selection */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
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