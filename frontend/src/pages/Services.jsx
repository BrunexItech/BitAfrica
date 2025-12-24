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
  Cloud as CloudIcon, Code as CodeIcon, Zap as ZapIcon,
  Cpu as CpuIcon2, Brain as BrainIcon, Rocket as RocketIcon,
  Target as TargetIcon, GitMerge, Cpu as AiProcessor
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  // Enhanced services array with AI-Optimized Cloud first and tech education
  const services = [
    {
      id: "ai-cloud-infrastructure",
      title: "AI-Optimized Cloud",
      description: "High-performance cloud infrastructure specifically designed for AI/ML workloads and big data processing. Enterprise-grade solutions with auto-scaling and intelligent resource allocation.",
      features: [
        "GPU-Accelerated Computing Clusters",
        "Distributed Training Infrastructure",
        "Real-time Model Serving",
        "Data Pipeline Orchestration",
        "Cost-Optimized Auto-scaling"
      ],
      icon: <CloudCog className="h-10 w-10" />,
      color: "from-amber-500 to-orange-500",
      gradient: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
      stats: { latency: "<10ms", scalability: "Unlimited", efficiency: "40%+" },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&auto=format",
      tech: ["NVIDIA DGX", "Kubernetes", "TensorRT", "Ray Cluster"],
      badge: "Most Popular"
    },
    {
      id: "ai-agents-enterprise",
      title: "Enterprise AI Agents",
      description: "Deploy autonomous AI agents that handle customer service, data analysis, and complex decision-making processes. Our agents learn from interactions and improve over time.",
      features: [
        "Autonomous Customer Support Systems",
        "Predictive Maintenance AI",
        "Intelligent Process Automation",
        "Real-time Market Analysis Agents",
        "Self-Optimizing Supply Chain AI"
      ],
      icon: <Bot className="h-10 w-10" />,
      color: "from-cyan-500 to-blue-500",
      gradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      stats: { efficiency: "↑300%", accuracy: "99.7%", uptime: "24/7" },
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format",
      tech: ["GPT-4 Integration", "Computer Vision", "NLP", "Reinforcement Learning"],
      badge: "Enterprise"
    },
    {
      id: "ai-education-platform",
      title: "AI Education Platform",
      description: "Comprehensive training programs and certifications in AI, machine learning, and automation for individuals and enterprise teams.",
      features: [
        "Hands-on AI Workshops",
        "Enterprise Training Programs",
        "Certification Pathways",
        "Live Project Mentorship",
        "Industry Expert Sessions"
      ],
      icon: <BrainIcon className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #db2777 100%)",
      stats: { students: "5000+", completion: "95%", satisfaction: "4.9★" },
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format",
      tech: ["Python", "TensorFlow", "ML Ops", "Cloud AI"],
      badge: "New"
    },
    {
      id: "hyperautomation-suite",
      title: "Intelligent Automation Suite",
      description: "Combine RPA, AI, and machine learning to automate complex business processes end-to-end with cognitive capabilities.",
      features: [
        "Cognitive Document Processing",
        "Smart Workflow Automation",
        "Process Mining & Discovery",
        "Self-healing Automation",
        "API Integration Ecosystems"
      ],
      icon: <Workflow className="h-10 w-10" />,
      color: "from-emerald-500 to-teal-500",
      gradient: "linear-gradient(135deg, #10b981 0%, #0d9488 100%)",
      stats: { cost: "↓60%", speed: "↑400%", errors: "↓95%" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&auto=format",
      tech: ["UiPath", "Automation Anywhere", "ML Ops", "API Gateway"]
    },
    {
      id: "custom-ai-solutions",
      title: "Custom AI Development",
      description: "Tailored AI solutions built from scratch to solve unique business challenges and create competitive advantages.",
      features: [
        "Custom ML Model Development",
        "AI-Powered Applications",
        "Data Strategy & Engineering",
        "Model Deployment & Scaling",
        "Continuous Improvement"
      ],
      icon: <AiProcessor className="h-10 w-10" />,
      color: "from-indigo-500 to-violet-500",
      gradient: "linear-gradient(135deg, #6366f1 0%, #7c3aed 100%)",
      stats: { delivery: "30 days", accuracy: "98%", support: "Lifetime" },
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop&auto=format",
      tech: ["Python", "FastAPI", "Docker", "AWS/Azure"]
    },
    {
      id: "tech-consulting",
      title: "Tech Strategy Consulting",
      description: "Expert guidance on AI adoption, digital transformation, and technology roadmap planning for sustainable growth.",
      features: [
        "AI Readiness Assessment",
        "Digital Transformation Roadmap",
        "Technology Stack Selection",
        "Team Structure Planning",
        "ROI Analysis & KPIs"
      ],
      icon: <TargetIcon className="h-10 w-10" />,
      color: "from-rose-500 to-red-500",
      gradient: "linear-gradient(135deg, #f43f5e 0%, #ef4444 100%)",
      stats: { clients: "200+", success: "98%", growth: "↑150%" },
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&auto=format",
      tech: ["Strategy", "Architecture", "Governance", "Implementation"]
    }
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
      className="pt-16 md:pt-20 min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f172a] to-[#0a0a1a] overflow-hidden relative"
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
      }}
    >
      {/* Animated Background with Mouse Interaction */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Dynamic gradient that follows mouse */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.15) 25%, transparent 50%)`,
          }}
        />
        
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2306b6d4' fill-opacity='0.3'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        
        {/* Floating particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-float-3d"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${Math.random() * 15 + 20}s`,
              filter: 'blur(1px)',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        {/* NEW: Top Subtitle Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/15 to-purple-500/15 border border-cyan-500/30 backdrop-blur-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
            <Sparkle className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-bold text-cyan-300 tracking-wider">
              INTELLIGENT SOLUTIONS ECOSYSTEM
            </span>
            <div className="h-1 w-8 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Featured Service Showcase - Interactive 3D Card */}
        <div className="mb-16 lg:mb-32">
          <div 
            className="relative overflow-hidden rounded-3xl border border-white/20 backdrop-blur-xl transform-gpu"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            }}
          >
            {/* Animated border */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-cyan-500/0 animate-shimmer opacity-50" />
            
            <div className="relative p-6 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                {/* Service Image with Parallax Effect */}
                <div className="lg:w-5/12">
                  <div className="relative rounded-2xl overflow-hidden group perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-purple-500/20 mix-blend-overlay" />
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].title}
                      className="w-full h-64 lg:h-96 object-cover transform group-hover:scale-110 transition-transform duration-1000"
                    />
                    
                    {/* Floating tech badges */}
                    <div className="absolute -top-3 -right-3 flex gap-2 flex-wrap justify-end">
                      {services[activeService].tech.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300 border border-cyan-500/50 backdrop-blur-sm animate-float shadow-lg"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Service badge */}
                    {services[activeService].badge && (
                      <div className="absolute top-4 left-4">
                        <span className="text-xs px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-300 border border-amber-500/50 backdrop-blur-sm font-bold tracking-wider shadow-lg">
                          {services[activeService].badge}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="lg:w-7/12">
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="h-16 w-16 rounded-2xl flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-transform duration-300"
                      style={{ background: services[activeService].gradient }}
                    >
                      <div className="text-white">{services[activeService].icon}</div>
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                        {services[activeService].title}
                      </h2>
                      <div className="flex flex-wrap gap-4">
                        {Object.entries(services[activeService].stats).map(([key, value], idx) => (
                          <div key={key} className="flex items-center gap-2 group/stat">
                            <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse group-hover/stat:scale-150 transition-transform" />
                            <span className="text-sm text-gray-300 capitalize">{key}:</span>
                            <span className="text-sm font-bold text-cyan-300 group-hover/stat:text-white transition-colors">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {services[activeService].features.map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group/feature"
                      >
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mr-4 group-hover/feature:scale-110 transition-transform">
                          <CheckCircle className="h-4 w-4 text-emerald-400" />
                        </div>
                        <span className="text-gray-300 group-hover/feature:text-white transition-colors text-sm md:text-base">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* KEPT: Play/Pause button only */}
                  <div className="flex justify-center">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-8 py-4 border-2 border-white/20 text-white rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 transform hover:scale-105"
                    >
                      {isPlaying ? (
                        <>
                          <span className="text-xl">⏸️</span>
                          <div className="text-left">
                            <div className="font-semibold">Pause Demo</div>
                            <div className="text-xs text-gray-400">Stop auto-rotation</div>
                          </div>
                        </>
                      ) : (
                        <>
                          <span className="text-xl">▶️</span>
                          <div className="text-left">
                            <div className="font-semibold">Play Demo</div>
                            <div className="text-xs text-gray-400">Resume auto-rotation</div>
                          </div>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Service Navigation Dots */}
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
                        ? 'w-12 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50' 
                        : 'w-2 bg-gray-700 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Services Grid - Hexagonal Layout */}
        <div className="mb-20 lg:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solution Portfolio
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive innovation and efficiency.
            </p>
          </div>
          
          {/* Hexagonal Grid Layout */}
          <div className="relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2306b6d4' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
              }} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] transform-gpu"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Holographic effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Service Image with Gradient Overlay */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    
                    {/* Service badge */}
                    {service.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-amber-500/30 to-orange-500/30 text-amber-300 border border-amber-500/50 backdrop-blur-sm font-bold">
                          {service.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div 
                        className="h-12 w-12 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300"
                        style={{ background: service.gradient }}
                      >
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white" style={{ 
                          background: service.gradient, 
                          WebkitBackgroundClip: 'text', 
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}>
                          {Object.values(service.stats)[0]}
                        </div>
                        <div className="text-xs text-gray-400 capitalize">{Object.keys(service.stats)[0]}</div>
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
                      {service.tech.length > 3 && (
                        <span className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 border border-white/10">
                          +{service.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 3D Edge Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/20 rounded-2xl transition-all duration-500 pointer-events-none" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Capabilities Showcase - Interactive Cards */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-white/5 to-transparent border border-white/20 rounded-3xl p-6 lg:p-12 backdrop-blur-xl relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 animate-gradient-shift" style={{
                background: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #10b981, #f59e0b)',
                backgroundSize: '400% 400%',
              }} />
            </div>

            <div className="text-center mb-12 relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Core Technologies
                </span> & Expertise
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Mastery across the entire AI and automation technology stack
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {[
                {
                  title: "AI & Machine Learning",
                  desc: "Advanced algorithms and neural networks",
                  icon: <BrainCircuit className="h-10 w-10" />,
                  stats: "50+ Projects",
                  color: "from-purple-500 to-pink-500",
                  tech: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI"]
                },
                {
                  title: "Cloud Infrastructure",
                  desc: "Scalable and secure cloud solutions",
                  icon: <CloudCog className="h-10 w-10" />,
                  stats: "99.9% Uptime",
                  color: "from-cyan-500 to-blue-500",
                  tech: ["AWS", "Azure", "GCP", "Kubernetes"]
                },
                {
                  title: "Automation & RPA",
                  desc: "Intelligent process automation",
                  icon: <Workflow className="h-10 w-10" />,
                  stats: "400% Efficiency",
                  color: "from-emerald-500 to-teal-500",
                  tech: ["UiPath", "Automation Anywhere", "Python", "APIs"]
                },
                {
                  title: "Tech Education",
                  desc: "Training & certification programs",
                  icon: <BrainIcon className="h-10 w-10" />,
                  stats: "95% Success Rate",
                  color: "from-amber-500 to-orange-500",
                  tech: ["Workshops", "Certifications", "Mentorship", "Labs"]
                }
              ].map((capability, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                >
                  <div className={`h-16 w-16 rounded-xl bg-gradient-to-r ${capability.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">{capability.icon}</div>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{capability.desc}</p>
                  <div className="text-sm font-medium text-cyan-300 mb-4">{capability.stats}</div>
                  <div className="flex flex-wrap gap-2">
                    {capability.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 mb-8">
            <div className="px-8 py-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-sm">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how our AI, automation, and education solutions can drive your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 font-semibold"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
          }
          33% { 
            transform: translate3d(30px, -20px, 10px) rotate(120deg) scale(1.1);
          }
          66% { 
            transform: translate3d(-20px, 10px, -10px) rotate(240deg) scale(0.9);
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
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        .animate-float-3d {
          animation: float-3d 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite linear;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-gpu {
          transform: translateZ(0);
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
};

export default Services;