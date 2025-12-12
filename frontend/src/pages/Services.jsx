import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Cpu, Layers, Shield, Zap, Globe, Users, 
  Server, Database, Sparkles, ArrowRight, PlayCircle,
  Target, BarChart, Clock, CheckCircle, Video, Headphones,
  Terminal, Award, Wifi, Code, ShieldCheck, Database as DbIcon,
  Network, CloudLightning, CpuIcon, Settings, Zap as Bolt,
  MessageSquare, Calendar, TrendingUp, Users as UsersIcon,
  Building2, Smartphone, Globe as Earth, Rocket,
  ChevronRight, ChevronLeft, Maximize2, Eye, Star,
  BarChart3, Smartphone as Mobile, Cctv, Bot, BrainCircuit,
  CircuitBoard, Atom, Cpu as AiChip, Sparkle, Infinity,
  Workflow, CloudCog, Brain as AiBrain, Lock, ZapOff,
  LineChart, Network as AiNetwork, Fingerprint, Binary,
  Globe as WebIcon, Shield as SecurityIcon, GitBranch as ApiIcon,
  Smartphone as MobileIcon, Palette, Database as DataIcon,
  Cloud as CloudIcon, Code as CodeIcon, Zap as ZapIcon
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Service categories with enhanced AI focus
  const serviceCategories = [
    {
      id: "ai-agents",
      title: "AI Agents & Autonomous Systems",
      description: "Deploy intelligent agents that learn, adapt, and execute complex tasks autonomously.",
      icon: <Bot className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-600",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      tech: ["Multi-Agent Systems", "Reinforcement Learning", "Autonomous Decision Making"]
    },
    {
      id: "machine-learning",
      title: "Machine Learning Solutions",
      description: "Advanced ML models that transform data into actionable business intelligence.",
      icon: <BrainCircuit className="h-8 w-8" />,
      color: "from-purple-500 to-pink-600",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #db2777 100%)",
      tech: ["Predictive Analytics", "Neural Networks", "Deep Learning"]
    },
    {
      id: "automation",
      title: "Intelligent Automation",
      description: "End-to-end process automation powered by AI and cognitive technologies.",
      icon: <Workflow className="h-8 w-8" />,
      color: "from-emerald-500 to-teal-600",
      gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
      tech: ["RPA 2.0", "Cognitive Automation", "Workflow Optimization"]
    },
    {
      id: "cloud-ai",
      title: "AI-Powered Cloud",
      description: "Scalable cloud infrastructure optimized for AI workloads and big data processing.",
      icon: <CloudCog className="h-8 w-8" />,
      color: "from-amber-500 to-orange-600",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
      tech: ["AI-Optimized Infra", "GPU Clusters", "Distributed Computing"]
    }
  ];

  // Keep only first 4 services for single row display
  const services = [
    {
      id: "ai-agents-enterprise",
      title: "Enterprise AI Agents",
      description: "Deploy autonomous AI agents that handle customer service, data analysis, and complex decision-making processes 24/7. Our agents learn from interactions and improve over time.",
      features: [
        "Autonomous Customer Support Agents",
        "Predictive Maintenance Systems",
        "Intelligent Process Automation",
        "Real-time Market Analysis Agents",
        "Self-Optimizing Supply Chain AI"
      ],
      icon: <Bot className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-500",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      stats: { efficiency: "↑300%", accuracy: "99.7%", uptime: "24/7" },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format",
      category: "ai-agents",
      tech: ["GPT-4 Integration", "Computer Vision", "NLP", "Reinforcement Learning"]
    },
    {
      id: "deep-learning-platform",
      title: "Deep Learning Solutions",
      description: "Advanced neural network architectures for complex pattern recognition, natural language understanding, and predictive analytics.",
      features: [
        "Custom CNN/RNN Architectures",
        "Transfer Learning Implementation",
        "Real-time Inference Systems",
        "Model Optimization & Quantization",
        "AutoML Pipelines"
      ],
      icon: <BrainCircuit className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #db2777 100%)",
      stats: { performance: "↑5x", training: "80% faster", models: "1000+" },
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&auto=format",
      category: "machine-learning",
      tech: ["TensorFlow", "PyTorch", "Keras", "CUDA Optimization"]
    },
    {
      id: "hyperautomation",
      title: "Hyperautomation Suite",
      description: "Combine RPA, AI, and machine learning to automate complex business processes end-to-end.",
      features: [
        "Intelligent Document Processing",
        "Cognitive Workflow Automation",
        "Process Mining & Discovery",
        "Self-healing Automation",
        "API Integration Ecosystems"
      ],
      icon: <Workflow className="h-10 w-10" />,
      color: "from-emerald-500 to-teal-500",
      gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
      stats: { cost: "↓60%", speed: "↑400%", errors: "↓95%" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
      category: "automation",
      tech: ["UiPath", "Automation Anywhere", "ML Ops", "API Gateway"]
    },
    {
      id: "ai-cloud-infrastructure",
      title: "AI-Optimized Cloud",
      description: "High-performance cloud infrastructure specifically designed for AI/ML workloads and big data processing.",
      features: [
        "GPU-Accelerated Computing",
        "Distributed Training Clusters",
        "Model Serving Infrastructure",
        "Data Pipeline Orchestration",
        "Cost-Optimized Scaling"
      ],
      icon: <CloudCog className="h-10 w-10" />,
      color: "from-amber-500 to-orange-500",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
      stats: { latency: "<10ms", scale: "∞", savings: "45%" },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
      category: "cloud-ai",
      tech: ["NVIDIA DGX", "Kubernetes", "TensorRT", "Ray Cluster"]
    }
    // Removed the last 2 services to keep only 4
  ];

  // Additional services for infinite slider
  const additionalServices = [
    {
      id: "web-development",
      title: "Website Development",
      description: "Modern, responsive websites and web applications with cutting-edge technologies.",
      icon: <WebIcon className="h-10 w-10" />,
      color: "from-blue-500 to-indigo-500",
      gradient: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)",
      features: ["React/Next.js", "Progressive Web Apps", "E-commerce", "SEO Optimized"],
      stats: { speed: "95+ Score", mobile: "100%", seo: "Top Rankings" }
    },
    {
      id: "cyber-security",
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your digital assets and data.",
      icon: <SecurityIcon className="h-10 w-10" />,
      color: "from-emerald-500 to-green-500",
      gradient: "linear-gradient(135deg, #10b981 0%, #22c55e 100%)",
      features: ["Threat Detection", "Data Encryption", "Compliance", "24/7 Monitoring"],
      stats: { protection: "99.99%", response: "<5min", audits: "100%" }
    },
    {
      id: "api-integration",
      title: "API Integration",
      description: "Seamlessly connect your systems with robust API solutions and microservices.",
      icon: <ApiIcon className="h-10 w-10" />,
      color: "from-purple-500 to-violet-500",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      features: ["REST & GraphQL", "WebSocket APIs", "Third-party Integrations", "API Gateway"],
      stats: { uptime: "99.99%", latency: "<50ms", integrations: "100+" }
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <MobileIcon className="h-10 w-10" />,
      color: "from-pink-500 to-rose-500",
      gradient: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
      features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"],
      stats: { downloads: "50K+", rating: "4.8★", stores: "Both" }
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description: "Beautiful, intuitive user interfaces that drive engagement and conversions.",
      icon: <Palette className="h-10 w-10" />,
      color: "from-amber-500 to-yellow-500",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #eab308 100%)",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      stats: { engagement: "↑70%", conversion: "↑45%", satisfaction: "95%" }
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights and business intelligence.",
      icon: <DataIcon className="h-10 w-10" />,
      color: "from-teal-500 to-cyan-500",
      gradient: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
      features: ["Real-time Dashboards", "Predictive Analytics", "Data Visualization", "ETL Pipelines"],
      stats: { insights: "1000+/day", accuracy: "98.5%", speed: "Real-time" }
    },
    {
      id: "cloud-solutions",
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for businesses of all sizes.",
      icon: <CloudIcon className="h-10 w-10" />,
      color: "from-orange-500 to-red-500",
      gradient: "linear-gradient(135deg, #f97316 0%, #ef4444 100%)",
      features: ["AWS/Azure/GCP", "Serverless", "Containerization", "Cost Optimization"],
      stats: { savings: "40%", scale: "Auto", reliability: "99.9%" }
    },
    {
      id: "devops-solutions",
      title: "DevOps Solutions",
      description: "Streamline development and operations with automated CI/CD pipelines.",
      icon: <CodeIcon className="h-10 w-10" />,
      color: "from-indigo-500 to-blue-500",
      gradient: "linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Kubernetes"],
      stats: { deployment: "90% faster", errors: "↓80%", uptime: "99.95%" }
    }
  ];

  // Duplicate items for seamless infinite scrolling
  const infiniteServices = [...additionalServices, ...additionalServices, ...additionalServices];

  // Tech stats
  const stats = [
    { icon: <CircuitBoard className="h-6 w-6" />, value: "500+", label: "AI Models Deployed", color: "text-cyan-400" },
    { icon: <Atom className="h-6 w-6" />, value: "99.9%", label: "System Uptime", color: "text-emerald-400" },
    { icon: <AiChip className="h-6 w-6" />, value: "10x", label: "Performance Gain", color: "text-purple-400" },
    { icon: <Infinity className="h-6 w-6" />, value: "24/7", label: "AI Monitoring", color: "text-amber-400" }
  ];

  // Mouse move effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate service showcase
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, services.length]);

  return (
    <main 
      ref={containerRef}
      className="pt-20 min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f172a] to-[#0a0a1a] overflow-hidden relative"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >
      {/* Animated Background with Mouse Interaction */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient that follows mouse */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.15) 0%, rgba(139, 92, 246, 0.1) 25%, transparent 50%)`,
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-500/10 animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* Hero Section with 3D effect */}
        <div className="text-center mb-20 lg:mb-32 relative">
          {/* Decorative elements */}
          <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm mb-8 group hover:scale-105 transition-all duration-300 animate-pulse">
            <Sparkle className="h-5 w-5 text-cyan-400 animate-spin-slow" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider">AI-POWERED INNOVATION</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
              Intelligent
            </span>
            <br />
            <span className="text-white">
              Technology <span className="text-cyan-400">Solutions</span>
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed mb-12">
            We engineer AI agents, automation systems, and machine learning solutions 
            that transform businesses and redefine what's possible.
          </p>
          
          {/* Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 cursor-pointer"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className={`${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-gray-400 text-sm font-medium tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Service Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className="group px-6 py-4 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 flex items-center gap-3"
                style={{
                  background: `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)`,
                }}
              >
                <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <div className="text-white">{category.icon}</div>
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">
                    {category.title}
                  </div>
                  <div className="text-xs text-gray-400">{category.tech.length} Technologies</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Service Showcase with Glass Morphism */}
        <div className="mb-24">
          <div 
            className="relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-cyan-500/0 animate-shimmer" />
            
            <div className="relative p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Service Image with Hover Effect */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].title}
                      className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    {/* Floating tech badges */}
                    <div className="absolute -top-3 -right-3 flex gap-2">
                      {services[activeService].tech.slice(0, 2).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm animate-float"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-2xl"
                      style={{ background: services[activeService].gradient }}
                    >
                      <div className="text-white">{services[activeService].icon}</div>
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {services[activeService].title}
                      </h2>
                      <div className="flex flex-wrap gap-4">
                        {Object.entries(services[activeService].stats).map(([key, value], idx) => (
                          <div key={key} className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-sm text-gray-300 capitalize">{key}:</span>
                            <span className="text-sm font-bold text-cyan-300">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {services[activeService].features.map((feature, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center text-gray-300 group cursor-pointer transform hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        </div>
                        <span className="group-hover:text-white transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to={`/services/${services[activeService].id}`}
                      className="group px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
                      style={{
                        boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)',
                      }}
                    >
                      <span>Explore AI Capabilities</span>
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-8 py-4 border-2 border-white/20 text-white rounded-xl hover:bg-white/5 transition-all duration-300 backdrop-blur-sm"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {isPlaying ? '⏸️' : '▶️'}
                        <span>{isPlaying ? 'Pause Demo' : 'Play Demo'}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Service Navigation */}
              <div className="flex justify-center gap-3 mt-12">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveService(index);
                      setIsPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      activeService === index 
                        ? 'w-12 bg-gradient-to-r from-cyan-500 to-blue-500' 
                        : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* AI Services Grid - Now 4 cards in one row */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-4">
              <Sparkle className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-semibold text-purple-400">AI & AUTOMATION PORTFOLIO</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Next-Generation <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                AI Solutions
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Harness the power of artificial intelligence and automation to transform your business operations.
            </p>
          </div>
          
          {/* Grid with 4 columns for single row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => {
              // Find the category for this service
              const serviceCategory = serviceCategories.find(cat => cat.id === service.category);
              
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Holographic effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Service Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <div 
                        className="px-3 py-1.5 rounded-full text-xs font-medium text-white backdrop-blur-sm"
                        style={{ 
                          background: serviceCategory?.gradient || service.gradient 
                        }}
                      >
                        {serviceCategory?.title || 'AI'}
                      </div>
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="h-12 w-12 rounded-xl flex items-center justify-center shadow-lg"
                        style={{ background: service.gradient }}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white" style={{ background: service.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                          {Object.values(service.stats)[0]}
                        </div>
                        <div className="text-xs text-gray-400">{Object.keys(service.stats)[0]}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tech.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10 group-hover:border-cyan-500/30 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-white/10">
                      <Link
                        to={`/services/${service.id}`}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center group/link"
                      >
                        <span>View AI Implementation</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Capabilities Showcase */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/20 rounded-3xl p-8 lg:p-12 backdrop-blur-xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  AI Capabilities
                </span> & Expertise
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our comprehensive suite of AI and automation technologies
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Natural Language Processing",
                  desc: "Advanced text understanding and generation",
                  icon: <MessageSquare className="h-8 w-8" />,
                  stats: "98% Accuracy",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Computer Vision",
                  desc: "Image and video analysis at scale",
                  icon: <Eye className="h-8 w-8" />,
                  stats: "120 FPS Processing",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  title: "Predictive Analytics",
                  desc: "Forecast trends and behaviors",
                  icon: <TrendingUp className="h-8 w-8" />,
                  stats: "95% Forecast Accuracy",
                  color: "from-emerald-500 to-teal-500"
                },
                {
                  title: "Autonomous Agents",
                  desc: "Self-learning decision systems",
                  icon: <Bot className="h-8 w-8" />,
                  stats: "24/7 Operation",
                  color: "from-amber-500 to-orange-500"
                }
              ].map((capability, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                >
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{capability.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{capability.desc}</p>
                  <div className="text-sm font-medium text-cyan-300">{capability.stats}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NEW: Infinite Sliding Services Section */}
        <div className="relative mb-24">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mb-4">
              <Sparkle className="h-4 w-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">COMPLETE TECHNOLOGY STACK</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Digital Services
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From web development to cybersecurity, we provide end-to-end solutions for your digital transformation.
            </p>
          </div>

          {/* Sliding Background Container */}
          <div 
            className="relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-xl py-12"
            style={{
              background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 41, 59, 0.7) 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.2) 0%, transparent 50%),
                                  radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)`,
              }} />
            </div>

            {/* Infinite Slider Container */}
            <div className="relative">
              {/* First Slider Track */}
              <div 
                ref={sliderRef}
                className="flex animate-infinite-slider"
                style={{ animationDuration: '40s' }}
              >
                {infiniteServices.map((service, index) => (
                  <div
                    key={`${service.id}-${index}`}
                    className="flex-shrink-0 w-80 mx-4"
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 h-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {/* Service Icon */}
                      <div className="absolute -top-6 -right-6 opacity-20">
                        <div className="h-24 w-24 rounded-full" style={{ background: service.gradient }} />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div 
                            className="h-14 w-14 rounded-xl flex items-center justify-center shadow-lg"
                            style={{ background: service.gradient }}
                          >
                            <div className="text-white">{service.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {service.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              {Object.entries(service.stats).map(([key, value], idx) => (
                                <div key={key} className="flex items-center gap-1">
                                  <span className="text-xs text-gray-400">{key}:</span>
                                  <span className="text-xs font-bold text-cyan-300">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-white/10">
                          <button className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center group/link">
                            <span>Learn More</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Second Slider Track (Reversed for seamless effect) */}
              <div 
                className="flex animate-infinite-slider-reverse mt-8"
                style={{ animationDuration: '35s' }}
              >
                {infiniteServices.slice().reverse().map((service, index) => (
                  <div
                    key={`reverse-${service.id}-${index}`}
                    className="flex-shrink-0 w-80 mx-4"
                  >
                    <div className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 hover:scale-105 h-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                      }}
                    >
                      {/* Service Icon */}
                      <div className="absolute -top-6 -right-6 opacity-20">
                        <div className="h-24 w-24 rounded-full" style={{ background: service.gradient }} />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-6">
                          <div 
                            className="h-14 w-14 rounded-xl flex items-center justify-center shadow-lg"
                            style={{ background: service.gradient }}
                          >
                            <div className="text-white">{service.icon}</div>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                              {service.title}
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                              {Object.entries(service.stats).map(([key, value], idx) => (
                                <div key={key} className="flex items-center gap-1">
                                  <span className="text-xs text-gray-400">{key}:</span>
                                  <span className="text-xs font-bold text-purple-300">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                          {service.description}
                        </p>
                        
                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <span 
                              key={idx}
                              className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 border border-white/10"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-white/10">
                          <button className="text-purple-400 hover:text-purple-300 transition-colors font-medium flex items-center group/link">
                            <span>Learn More</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gradient Fades for Smooth Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1e293b] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1e293b] to-transparent pointer-events-none" />
          </div>

          {/* CTA below slider */}
          <div className="text-center mt-12">
            <p className="text-gray-300 text-lg mb-6">
              Need a specific solution not listed? Our experts can customize any service to fit your unique requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg group"
            >
              <MessageSquare className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
              Discuss Your Project Requirements
            </Link>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
          }
          33% { 
            transform: translateY(-30px) translateX(20px) rotate(120deg) scale(1.1);
          }
          66% { 
            transform: translateY(-15px) translateX(-15px) rotate(240deg) scale(0.9);
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes infinite-slider {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        @keyframes infinite-slider-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-float-3d {
          animation: float-3d 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .animate-infinite-slider {
          animation: infinite-slider 40s linear infinite;
          display: flex;
        }
        
        .animate-infinite-slider-reverse {
          animation: infinite-slider-reverse 35s linear infinite;
          display: flex;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
        }
      `}</style>
    </main>
  );
};

export default Services;