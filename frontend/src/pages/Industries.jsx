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
  Cpu as CpuIcon, Brain as BrainIcon
} from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("finance-banking");
  const [isHovered, setIsHovered] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const technologyStack = [
    { 
      name: "Computer Vision", 
      icon: <Eye className="h-8 w-8" />, 
      applications: 12,
      color: "from-cyan-500 to-blue-500",
      description: "Real-time visual analysis"
    },
    { 
      name: "NLP", 
      icon: <MessageSquare className="h-8 w-8" />, 
      applications: 8,
      color: "from-purple-500 to-pink-500",
      description: "Language understanding"
    },
    { 
      name: "Predictive Analytics", 
      icon: <TrendingUp className="h-8 w-8" />, 
      applications: 15,
      color: "from-orange-500 to-red-500",
      description: "Future insights"
    },
    { 
      name: "Machine Learning", 
      icon: <Cpu className="h-8 w-8" />, 
      applications: 20,
      color: "from-green-500 to-emerald-500",
      description: "Adaptive algorithms"
    },
    { 
      name: "RPA", 
      icon: <Cog className="h-8 w-8" />, 
      applications: 10,
      color: "from-yellow-500 to-amber-500",
      description: "Automated workflows"
    },
    { 
      name: "IoT Integration", 
      icon: <Wifi className="h-8 w-8" />, 
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
      icon: <Database className="h-12 w-12" />,
      color: "from-blue-700 via-cyan-500 to-emerald-400",
      bgColor: "bg-gradient-to-br from-blue-900/30 to-cyan-900/20",
      accentColor: "rgb(6, 182, 212)",
      image: "https://images.unsplash.com/photo-1616514197671-15d99ce7a6f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Quantum-Resistant Security",
        "Predictive Risk Modeling",
        "Autonomous Trading",
        "Personalized Wealth AI",
        "Blockchain Analytics"
      ],
      stats: { efficiency: "300%", accuracy: "99.8%", savings: "$2.5M" },
      gradientAngle: "45deg"
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Life-saving AI diagnostics and predictive care revolutionizing patient outcomes.",
      icon: <Brain className="h-12 w-12" />,
      color: "from-rose-700 via-pink-500 to-purple-400",
      bgColor: "bg-gradient-to-br from-rose-900/30 to-pink-900/20",
      accentColor: "rgb(236, 72, 153)",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Genomic AI Analysis",
        "Predictive Diagnostics",
        "Surgical Robotics AI",
        "Personalized Treatment",
        "Mental Health AI"
      ],
      stats: { efficiency: "45%", accuracy: "98.7%", patients: "500K+" },
      gradientAngle: "135deg"
    },
    {
      id: "retail-ecommerce",
      title: "Retail",
      description: "Hyper-personalized shopping experiences powered by behavioral AI.",
      icon: <ShoppingBag className="h-12 w-12" />,
      color: "from-amber-700 via-orange-500 to-red-400",
      bgColor: "bg-gradient-to-br from-amber-900/30 to-orange-900/20",
      accentColor: "rgb(251, 146, 60)",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Emotion Recognition",
        "Predictive Inventory",
        "AR Shopping AI",
        "Dynamic Pricing",
        "Supply Chain AI"
      ],
      stats: { sales: "65%", retention: "40%", revenue: "$8.3M" },
      gradientAngle: "225deg"
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Self-optimizing factories with AI-driven predictive maintenance.",
      icon: <CircuitBoard className="h-12 w-12" />,
      color: "from-emerald-700 via-green-500 to-teal-400",
      bgColor: "bg-gradient-to-br from-emerald-900/30 to-green-900/20",
      accentColor: "rgb(16, 185, 129)",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Predictive Maintenance",
        "Quality Control AI",
        "Autonomous Logistics",
        "Energy Optimization",
        "Digital Twin AI"
      ],
      stats: { downtime: "-70%", quality: "99.9%", output: "+85%" },
      gradientAngle: "315deg"
    },
    {
      id: "education",
      title: "Education",
      description: "Adaptive learning ecosystems that personalize education at scale.",
      icon: <GraduationCap className="h-12 w-12" />,
      color: "from-violet-700 via-purple-500 to-indigo-400",
      bgColor: "bg-gradient-to-br from-violet-900/30 to-purple-900/20",
      accentColor: "rgb(168, 85, 247)",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Learning Path AI",
        "Emotion-aware Tutoring",
        "Predictive Analytics",
        "AR Learning",
        "Administrative AI"
      ],
      stats: { engagement: "120%", performance: "35%", reach: "2M+" },
      gradientAngle: "45deg"
    },
    {
      id: "government",
      title: "Government",
      description: "Smart city AI creating sustainable and efficient public services.",
      icon: <ShieldCheck className="h-12 w-12" />,
      color: "from-indigo-700 via-blue-500 to-cyan-400",
      bgColor: "bg-gradient-to-br from-indigo-900/30 to-blue-900/20",
      accentColor: "rgb(99, 102, 241)",
      image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Urban Planning AI",
        "Public Safety AI",
        "Service Automation",
        "Traffic Optimization",
        "Resource Management"
      ],
      stats: { efficiency: "55%", response: "-60%", citizens: "10M+" },
      gradientAngle: "135deg"
    }
  ];

  const currentIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  // Animated background grid
  const BackgroundGrid = () => (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                         linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
      }} />
      {/* Animated hexagons */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-500/10 rounded-lg"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '100px',
            height: '100px',
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
    <main className="pt-20 min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 overflow-hidden">
      <BackgroundGrid />

      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(var(--accent-rgb), 0.1) 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.sin(i) * 100],
              y: [0, Math.cos(i) * 100],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section with Kinetic Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-24 relative"
        >
          {/* Animated title background */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-[20rem] font-black opacity-5 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradientShift 8s ease infinite'
              }}
            >
              AI
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/50 border border-cyan-500/30 mb-8 backdrop-blur-xl"
            >
              <div className="relative">
                <Sparkle className="h-5 w-5 text-cyan-400 animate-spin-slow" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-cyan-500/30 rounded-full"
                />
              </div>
              <span className="text-sm font-bold text-cyan-400 tracking-widest">INDUSTRY 5.0</span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-none">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                INDUSTRY
              </span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-white"
              >
                REDEFINED
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide"
            >
              We architect intelligent systems that don't just optimize—they 
              <span className="text-cyan-400 font-bold"> reimagine</span> industry fundamentals.
            </motion.p>
            
            {/* Interactive Stats with Holographic Effect */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { value: "50+", label: "Transformations", color: "cyan" },
                { value: "99.7%", label: "Accuracy Rate", color: "blue" },
                { value: "200+", label: "AI Solutions", color: "purple" },
                { value: "45%", label: "Avg. ROI", color: "pink" }
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative group"
                >
                  <div className="relative p-6 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/10 overflow-hidden">
                    {/* Holographic effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className={`text-4xl font-black bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className="text-gray-500 text-sm font-medium tracking-wider mt-2">
                        {stat.label}
                      </div>
                    </div>
                    
                    {/* Animated corner accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-cyan-500/50" />
                    <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-cyan-500/50" />
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-cyan-500/50" />
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-cyan-500/50" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Neural Network Navigation */}
        <div className="mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              {/* Neural network connections */}
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

          {/* Industry Selector - Circular Layout */}
          <div className="relative">
            <motion.div 
              className="relative mx-auto w-96 h-96 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {industries.map((industry, idx) => {
                const angle = (idx / industries.length) * 2 * Math.PI;
                const x = 48 + 40 * Math.cos(angle);
                const y = 48 + 40 * Math.sin(angle);
                
                return (
                  <motion.button
                    key={industry.id}
                    onClick={() => setActiveIndustry(industry.id)}
                    className={`absolute w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
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
                      {React.cloneElement(industry.icon, { className: 'h-8 w-8' })}
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Center Display */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                key={activeIndustry}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="text-4xl font-black text-white mb-2">
                  {currentIndustry.title}
                </div>
                <div className="text-gray-400 text-sm max-w-xs mx-auto">
                  {currentIndustry.description}
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Main Industry Showcase - Holographic Display */}
        <motion.div 
          key={activeIndustry}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mb-32"
        >
          {/* Holographic container */}
          <div className="relative rounded-3xl overflow-hidden backdrop-blur-xl"
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: `
                0 0 60px ${currentIndustry.accentColor}20,
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}
          >
            {/* Animated grid overlay */}
            <div className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(90deg, transparent 79%, ${currentIndustry.accentColor} 80%),
                  linear-gradient(0deg, transparent 79%, ${currentIndustry.accentColor} 80%)
                `,
                backgroundSize: '50px 50px'
              }}
            />

            <div className="relative p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Data Visualization */}
                <div>
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border-2 border-dashed rounded-full border-cyan-500/30"
                        />
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-black/50 to-transparent backdrop-blur-sm">
                          {currentIndustry.icon}
                        </div>
                      </div>
                      <div>
                        <h2 className="text-4xl font-black text-white">
                          {currentIndustry.title}
                          <span className="text-cyan-400 ml-2">AI</span>
                        </h2>
                        <div className="text-gray-500 font-medium tracking-wider">
                          INTELLIGENT TRANSFORMATION
                        </div>
                      </div>
                    </div>

                    {/* Animated progress rings */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {Object.entries(currentIndustry.stats).map(([key, value], idx) => (
                        <div key={key} className="text-center">
                          <div className="relative w-24 h-24 mx-auto mb-2">
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
                                stroke={`url(#ring-gradient-${idx})`}
                                strokeWidth="8"
                                strokeLinecap="round"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 0.7 }}
                                transition={{ duration: 1.5, delay: idx * 0.2 }}
                                transform="rotate(-90 50 50)"
                              />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-2xl font-black text-white">{value}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 uppercase tracking-widest">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions in hex grid */}
                  <div className="relative">
                    <div className="text-gray-400 text-sm mb-4 font-medium tracking-wider">
                      CORE SOLUTIONS
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {currentIndustry.solutions.map((solution, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05, backgroundColor: `${currentIndustry.accentColor}10` }}
                          className="p-4 rounded-xl border border-white/5 bg-black/30 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-2 w-2 rounded-full bg-cyan-500" />
                            <span className="text-white text-sm">{solution}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right - Interactive 3D Effect */}
                <div className="relative">
                  <div className="relative h-96 rounded-2xl overflow-hidden"
                    style={{
                      background: `linear-gradient(45deg, ${currentIndustry.accentColor}15, transparent)`,
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    {/* Floating data points */}
                    {[...Array(15)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          background: currentIndustry.accentColor,
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -20, 0],
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
                        className="relative w-64 h-64"
                      >
                        <div className="absolute inset-0 border-2 border-dashed rounded-full border-cyan-500/30" />
                        <div className="absolute inset-8 border-2 border-dashed rounded-full border-blue-500/30" />
                        <div className="absolute inset-16 border-2 border-dashed rounded-full border-purple-500/30" />
                        
                        {/* Pulsing center */}
                        <motion.div
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        />
                      </motion.div>
                    </div>

                    {/* Data flow lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      {[...Array(8)].map((_, i) => {
                        const angle = (i / 8) * 2 * Math.PI;
                        const x1 = 50 + 30 * Math.cos(angle);
                        const y1 = 50 + 30 * Math.sin(angle);
                        const x2 = 50 + 45 * Math.cos(angle);
                        const y2 = 50 + 45 * Math.sin(angle);
                        
                        return (
                          <motion.line
                            key={i}
                            x1={`${x1}%`}
                            y1={`${y1}%`}
                            x2={`${x2}%`}
                            y2={`${y2}%`}
                            stroke={currentIndustry.accentColor}
                            strokeWidth="1"
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              x2: [`${x2}%`, `${x2 + 5}%`, `${x2}%`]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        );
                      })}
                    </svg>
                  </div>

                  {/* Real-time metrics */}
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    {[
                      { label: "AI Processing", value: "24/7", trend: "+" },
                      { label: "Data Points", value: "2.4M", trend: "↑" },
                      { label: "Accuracy", value: "99.8%", trend: "↗" }
                    ].map((metric, idx) => (
                      <div key={idx} className="text-center p-4 rounded-xl bg-black/30 backdrop-blur-sm border border-white/5">
                        <div className="text-2xl font-black text-white">{metric.value}</div>
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

        {/* Technology Stack - Particle System */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-black/50 border border-cyan-500/30 mb-4 backdrop-blur-xl">
              <Cpu className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-400 tracking-widest">TECHNOLOGY MATRIX</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-4">
              Neural <span className="text-cyan-400">Architecture</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Advanced AI technologies powering industry transformation
            </p>
          </div>

          {/* Tech hex grid */}
          <div className="relative">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologyStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="relative group"
                >
                  {/* Hexagon shape */}
                  <div className="relative h-48"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl border border-white/10 group-hover:border-cyan-500/50 transition-colors" />
                    
                    <div className="absolute inset-0 p-6 flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-4 border border-cyan-500/20 rounded-full"
                      />
                      
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${tech.color} bg-opacity-20 mb-4`}>
                        <div className="text-white">{tech.icon}</div>
                      </div>
                      
                      <h3 className="text-white font-bold text-center mb-2">{tech.name}</h3>
                      <p className="text-gray-400 text-xs text-center mb-3">{tech.description}</p>
                      
                      <div className="text-cyan-400 text-sm font-bold">
                        {tech.applications}+ apps
                      </div>
                    </div>
                  </div>
                  
                  {/* Connection lines */}
                  {idx < technologyStack.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 right-0 w-6 h-px bg-gradient-to-r from-cyan-500/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action - Warp Drive Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-3xl overflow-hidden mb-20"
        >
          {/* Warp tunnel effect */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 rounded-full border border-cyan-500/10"
                style={{
                  scale: 1 + i * 0.1,
                  opacity: 0.1 - i * 0.005
                }}
                animate={{
                  scale: [1 + i * 0.1, 1.2 + i * 0.1, 1 + i * 0.1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>

          <div className="relative p-16 text-center backdrop-blur-xl bg-black/50">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Rocket className="h-20 w-20 text-cyan-400" />
            </motion.div>
            
            <h2 className="text-5xl font-black text-white mb-6">
              Ready for <span className="text-cyan-400">Quantum Leap</span>?
            </h2>
            
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Transform your industry with AI that thinks ahead. 
              The future is waiting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/demo"
                className="group relative px-12 py-5 rounded-2xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative text-white font-bold text-lg tracking-wider">
                  INITIATE TRANSFORMATION
                </span>
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-12 py-5 rounded-2xl border-2 border-cyan-400/50 text-cyan-400 font-bold text-lg tracking-wider hover:bg-cyan-400/10 transition-all"
              >
                CONNECT WITH AI
              </motion.a>
            </div>
            
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gray-500 text-sm mt-8 tracking-widest"
            >
              NEXT-GEN INDUSTRY INTELLIGENCE
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
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
        
        /* Custom scrollbar */
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
        
        /* Text selection */
        ::selection {
          background: rgba(6, 182, 212, 0.3);
          color: white;
        }
        
        /* Smooth transitions */
        * {
          scroll-behavior: smooth;
        }
        
        /* Defs for gradients */
        ${Object.entries(currentIndustry.stats).map((_, idx) => `
          #ring-gradient-${idx} {
            <linearGradient id="ring-gradient-${idx}" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="${currentIndustry.accentColor}" />
              <stop offset="100%" stop-color="${currentIndustry.accentColor}99" />
            </linearGradient>
          }
        `).join('')}
      `}</style>
    </main>
  );
}

export default Industries;