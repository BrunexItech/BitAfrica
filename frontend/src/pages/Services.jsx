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
  BarChart3, Smartphone as Mobile, Cctv, Bot, BrainCircuit
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);

  // Service images from Unsplash
  const serviceImages = [
    "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=1200&h=800&fit=crop", // AI
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop", // Cloud
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop", // Digital
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop", // Infrastructure
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop", // Support
  ];

  const techIcons = [
    <Brain key="brain" className="h-8 w-8" />,
    <Cpu key="cpu" className="h-8 w-8" />,
    <Code key="code" className="h-8 w-8" />,
    <Server key="server" className="h-8 w-8" />,
    <Cloud key="cloud" className="h-8 w-8" />,
    <Shield key="shield" className="h-8 w-8" />,
    <Database key="db" className="h-8 w-8" />,
    <Network key="network" className="h-8 w-8" />,
  ];

  const services = [
    {
      id: "ai-consulting",
      title: "AI Consulting & Strategy",
      description: "Transform your business with intelligent AI solutions. We design and implement cutting-edge artificial intelligence strategies that drive innovation and competitive advantage.",
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "Implementation Roadmap",
        "ROI Analysis & Forecasting",
        "Team Training & Upskilling"
      ],
      icon: <Brain className="h-10 w-10" />,
      color: "from-blue-500 to-cyan-500",
      stats: { projects: "240+", success: "98%", clients: "150+" },
      image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop",
      tech: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      id: "cloud-migration",
      title: "Cloud Migration & Architecture",
      description: "Seamlessly transition to scalable cloud infrastructure. Our expert team ensures minimal disruption with enhanced security and optimized performance.",
      features: [
        "Cloud Architecture Design",
        "Data Migration Planning",
        "Security & Compliance",
        "Performance Optimization",
        "Cost Management & Monitoring"
      ],
      icon: <Cloud className="h-10 w-10" />,
      color: "from-purple-500 to-pink-500",
      stats: { migrations: "180+", uptime: "99.99%", savings: "40%" },
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
      tech: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Revolutionize your business processes with comprehensive digital overhaul. Leverage cutting-edge technologies to enhance efficiency and customer experience.",
      features: [
        "Process Automation",
        "Digital Workflow Design",
        "Customer Experience Enhancement",
        "Data-Driven Decision Making",
        "Legacy System Modernization"
      ],
      icon: <Cpu className="h-10 w-10" />,
      color: "from-amber-500 to-orange-500",
      stats: { efficiency: "65%", growth: "3.2x", satisfaction: "92%" },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tech: ["RPA", "IoT", "Blockchain", "5G Integration"]
    },
    {
      id: "tech-infrastructure",
      title: "Tech Infrastructure & DevOps",
      description: "Build robust, scalable, and secure technology infrastructure. Support your business growth with enterprise-grade solutions and DevOps practices.",
      features: [
        "Network Architecture & Design",
        "Server & Storage Solutions",
        "Security Infrastructure",
        "Disaster Recovery Planning",
        "Scalability & Performance"
      ],
      icon: <Server className="h-10 w-10" />,
      color: "from-emerald-500 to-teal-500",
      stats: { reliability: "99.9%", speed: "200%", incidents: "↓85%" },
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
      tech: ["CI/CD", "Infra as Code", "Monitoring", "Microservices"]
    },
    {
      id: "support-maintenance",
      title: "24/7 Support & Maintenance",
      description: "Ensure optimal performance with round-the-clock technical support. Proactive maintenance and rapid response for uninterrupted business operations.",
      features: [
        "24/7 System Monitoring",
        "Proactive Maintenance",
        "Rapid Incident Response",
        "Performance Optimization",
        "Regular Updates & Security Patches"
      ],
      icon: <ShieldCheck className="h-10 w-10" />,
      color: "from-indigo-500 to-blue-500",
      stats: { response: "<15min", resolution: "95%", availability: "24/7" },
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      tech: ["AI Monitoring", "Predictive Analytics", "Remote Support", "Automation"]
    }
  ];

  const stats = [
    { icon: <Target className="h-6 w-6" />, value: "98%", label: "Client Satisfaction", color: "text-emerald-400" },
    { icon: <Clock className="h-6 w-6" />, value: "24/7", label: "Support Availability", color: "text-cyan-400" },
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Projects Delivered", color: "text-blue-400" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "65%", label: "Average Efficiency Gain", color: "text-purple-400" }
  ];

  // Auto-rotate service showcase
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % services.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPlaying, services.length]);

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#111827] to-[#0a0a1a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Icons */}
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className="absolute animate-float-3d"
            style={{
              left: `${10 + index * 12}%`,
              top: `${15 + (index % 3) * 25}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${15 + index * 2}s`
            }}
          >
            <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
              <div className="text-cyan-400/30">{icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm mb-8 group hover:scale-105 transition-all duration-300 animate-pulse">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider">COMPREHENSIVE SOLUTIONS</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
              Transformative
            </span>
            <br />
            <span className="text-white">Technology Services</span>
          </h1>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            We deliver cutting-edge IT solutions that drive innovation, enhance efficiency, 
            and propel businesses forward in Africa's digital revolution.
          </p>
          
          {/* Stats Banner */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-white/10 backdrop-blur-sm"
              >
                <div className={`${stat.color} mb-2`}>{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Service Showcase */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-20">
              <img 
                src={serviceImages[activeService]} 
                alt="Service background"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                {/* Service Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden group">
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].title}
                      className="w-full h-64 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {services[activeService].tech.map((tech, idx) => (
                        <span key={idx} className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Service Details */}
                <div className="lg:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${services[activeService].color} flex items-center justify-center shadow-lg`}>
                      <div className="text-white">{services[activeService].icon}</div>
                    </div>
                    <div>
                      <h2 className="text-3xl lg:text-4xl font-bold text-white">{services[activeService].title}</h2>
                      <div className="flex items-center gap-4 mt-2">
                        {Object.entries(services[activeService].stats).map(([key, value], idx) => (
                          <div key={key} className="flex items-center gap-1">
                            <span className="text-sm text-gray-400">{key}:</span>
                            <span className="text-sm font-bold text-cyan-300">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    {services[activeService].description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {services[activeService].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 group">
                        <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 group-hover:scale-110 transition-transform" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex gap-4">
                    <Link
                      to={`/services/${services[activeService].id}`}
                      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center group"
                    >
                      Explore Service Details
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="px-6 py-3 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      {isPlaying ? '⏸️ Pause' : '▶️ Play'} Auto-view
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Service Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveService(index);
                      setIsPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeService === index 
                        ? 'w-8 bg-cyan-400' 
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* All Services Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Our Complete <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Service Portfolio</span>
              </h2>
              <p className="text-gray-400">Comprehensive solutions for every business need</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <ChevronLeft className="h-5 w-5 text-gray-400" />
              </button>
              <button className="p-2 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-cyan-500/50 transition-colors">
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/70 to-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
                      Featured
                    </span>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      <div className="text-white">{service.icon}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{Object.values(service.stats)[0]}</div>
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">
                        {tech}
                      </span>
                    ))}
                    {service.tech.length > 3 && (
                      <span className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">
                        +{service.tech.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-800/50">
                    <Link
                      to={`/services/${service.id}`}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center group/link"
                    >
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
                
                {/* Hover Effect */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Service Process */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-cyan-500/30 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                A structured approach to delivering exceptional results
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Analysis",
                  desc: "Understand your business needs and challenges",
                  icon: <Target className="h-6 w-6" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Solution Design",
                  desc: "Create tailored technology strategies",
                  icon: <Brain className="h-6 w-6" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "03",
                  title: "Implementation",
                  desc: "Deploy solutions with precision and care",
                  icon: <Code className="h-6 w-6" />,
                  color: "from-amber-500 to-orange-500"
                },
                {
                  step: "04",
                  title: "Support & Optimization",
                  desc: "Continuous improvement and maintenance",
                  icon: <Settings className="h-6 w-6" />,
                  color: "from-emerald-500 to-teal-500"
                }
              ].map((stage, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-r ${stage.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">{stage.icon}</div>
                  </div>
                  <div className="text-sm px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 mb-3 inline-block">
                    Step {stage.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-gray-400 text-sm">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 via-[#111827]/80 to-[#0a0a1a]/90"></div>
          </div>
          
          <div className="relative z-10 p-12 text-center">
            <Rocket className="h-20 w-20 text-cyan-400 mx-auto mb-6 animate-bounce-subtle" />
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Accelerate Your Digital Journey?
            </h2>
            
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses transforming with BitAfrica AI's cutting-edge solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
              >
                🚀 Schedule Free Consultation
              </Link>
              <button className="px-10 py-5 border-2 border-white/30 text-white rounded-xl hover:bg-white/5 transition-all duration-300 text-lg flex items-center justify-center">
                <Video className="h-5 w-5 mr-3" />
                Watch Client Success Stories
              </button>
            </div>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                Free Initial Assessment
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                Customized Solutions
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                Rapid Deployment
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                24/7 Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(90deg); 
          }
          50% { 
            transform: translateY(-40px) translateX(-10px) rotate(180deg); 
          }
          75% { 
            transform: translateY(-20px) translateX(5px) rotate(270deg); 
          }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-float-3d {
          animation: float-3d 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
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