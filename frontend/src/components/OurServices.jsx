import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, Cpu, Brain, Code, Server, Shield, 
  Zap, Terminal, Cloud, Database, Lock, 
  Smartphone, BarChart, Workflow, Sparkles,
  ArrowRight, CheckCircle, Clock, Users,
  Rocket, Target, Palette, Network,
  MessageSquare, ShieldCheck, CpuIcon,
  Layers, FileCode, GitBranch, Monitor
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const OurServices = () => {
  const [activeService, setActiveService] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);
  const glowRef = useRef(null);
  const timelineRef = useRef(null);

  // Futuristic color palette with depth
  const colors = {
    primary: '#0066FF',
    secondary: '#8A2BE2',
    accent: '#00D4AA',
    techBlue: '#00C6FF',
    techPurple: '#9D50FF',
    neon: '#00FFAA',
    glow: '#00FFE0',
    background: '#0A0F1E',
    cardBg: 'rgba(255, 255, 255, 0.03)',
    glass: 'rgba(255, 255, 255, 0.1)'
  };

  // Advanced services data
  const services = [
    {
      id: 1,
      title: "Web Application Development",
      description: "Custom web applications built with modern frameworks, featuring real-time capabilities, progressive web apps, and microservices architecture.",
      icon: <Globe className="h-8 w-8" />,
      color: '#0066FF',
      gradient: 'linear-gradient(135deg, #0066FF, #00C6FF)',
      features: ["React/Next.js", "Real-time WebSockets", "Microservices", "PWA"],
      complexity: "Advanced",
      delivery: "4-12 weeks",
      stats: { projects: 150, satisfaction: 98 },
      tech: ["React", "Next.js", "Node.js", "GraphQL"]
    },
    {
      id: 2,
      title: "AI Agents & Automation",
      description: "Intelligent AI agents that automate complex business processes, customer interactions, and decision-making workflows.",
      icon: <Brain className="h-8 w-8" />,
      color: '#9D50FF',
      gradient: 'linear-gradient(135deg, #9D50FF, #00D4AA)',
      features: ["Autonomous Agents", "NLP Processing", "Predictive Analytics", "Workflow Automation"],
      complexity: "Enterprise",
      delivery: "6-16 weeks",
      stats: { projects: 85, satisfaction: 96 },
      tech: ["TensorFlow", "OpenAI", "LangChain", "RPA"]
    },
    {
      id: 3,
      title: "Custom Software Solutions",
      description: "End-to-end software development tailored to specific business needs, from ideation to deployment and maintenance.",
      icon: <Code className="h-8 w-8" />,
      color: '#00D4AA',
      gradient: 'linear-gradient(135deg, #00D4AA, #0066FF)',
      features: ["Full Stack Dev", "Cloud Native", "DevOps", "Continuous Integration"],
      complexity: "Custom",
      delivery: "8-24 weeks",
      stats: { projects: 200, satisfaction: 99 },
      tech: ["Docker", "Kubernetes", "AWS", "CI/CD"]
    },
    {
      id: 4,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions with auto-scaling, load balancing, and high-availability architecture for mission-critical applications.",
      icon: <Cloud className="h-8 w-8" />,
      color: '#00C6FF',
      gradient: 'linear-gradient(135deg, #00C6FF, #9D50FF)',
      features: ["AWS/Azure/GCP", "Auto-scaling", "Load Balancing", "Disaster Recovery"],
      complexity: "Advanced",
      delivery: "2-8 weeks",
      stats: { projects: 120, satisfaction: 97 },
      tech: ["AWS", "Terraform", "K8s", "Ansible"]
    },
    {
      id: 5,
      title: "Cybersecurity Solutions",
      description: "Comprehensive security solutions including penetration testing, threat monitoring, and compliance management.",
      icon: <ShieldCheck className="h-8 w-8" />,
      color: '#FF6B6B',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FFD93D)',
      features: ["Pen Testing", "Threat Detection", "Compliance", "Encryption"],
      complexity: "Expert",
      delivery: "4-12 weeks",
      stats: { projects: 65, satisfaction: 100 },
      tech: ["SIEM", "WAF", "Zero Trust", "SOC"]
    },
    {
      id: 6,
      title: "Data Analytics & BI",
      description: "Advanced analytics platforms with real-time dashboards, predictive modeling, and business intelligence insights.",
      icon: <BarChart className="h-8 w-8" />,
      color: '#6C63FF',
      gradient: 'linear-gradient(135deg, #6C63FF, #00D4AA)',
      features: ["Real-time Dashboards", "Predictive Models", "Data Warehousing", "ETL Pipelines"],
      complexity: "Advanced",
      delivery: "6-14 weeks",
      stats: { projects: 90, satisfaction: 96 },
      tech: ["Apache Spark", "Tableau", "Snowflake", "Python"]
    },
    {
      id: 7,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with seamless user experiences and offline capabilities.",
      icon: <Smartphone className="h-8 w-8" />,
      color: '#FF8E53',
      gradient: 'linear-gradient(135deg, #FF8E53, #FFD93D)',
      features: ["iOS & Android", "React Native", "Offline Sync", "Push Notifications"],
      complexity: "Intermediate",
      delivery: "6-16 weeks",
      stats: { projects: 110, satisfaction: 97 },
      tech: ["React Native", "Flutter", "Firebase", "Swift"]
    },
    {
      id: 8,
      title: "DevOps & CI/CD",
      description: "Complete DevOps pipeline implementation with automated testing, deployment, and monitoring solutions.",
      icon: <GitBranch className="h-8 w-8" />,
      color: '#00FFAA',
      gradient: 'linear-gradient(135deg, #00FFAA, #00C6FF)',
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring", "Automated Testing"],
      complexity: "Advanced",
      delivery: "4-10 weeks",
      stats: { projects: 75, satisfaction: 98 },
      tech: ["Jenkins", "GitLab", "Prometheus", "Docker"]
    }
  ];

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Advanced particle system
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const particles = [];
    const particleCount = 40;
    
    // Remove existing particles
    particlesRef.current.forEach(p => p.remove());
    particlesRef.current = [];
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        background: ${Math.random() > 0.5 ? colors.techBlue : colors.techPurple};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        opacity: ${Math.random() * 0.2 + 0.1};
        filter: blur(0.5px);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      
      section.appendChild(particle);
      particles.push(particle);
      
      // 3D floating animation
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        rotation: Math.random() * 360,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
    
    particlesRef.current = particles;
    
    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  // GSAP master timeline for animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered card animations
      const cards = cardsRef.current.filter(card => card !== null);
      
      cards.forEach((card, index) => {
        const cardContent = card.querySelector('.card-content');
        const cardGlow = card.querySelector('.card-glow');
        
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none reverse"
          },
          y: 60,
          opacity: 0,
          rotationX: -10,
          duration: 1,
          delay: index * 0.1,
          ease: "back.out(1.7)"
        });
        
        // 3D card tilt effect
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateY = (x - centerX) / 20;
          const rotateX = (centerY - y) / 20;
          
          gsap.to(cardContent, {
            rotationY: rotateY,
            rotationX: rotateX,
            duration: 0.5,
            ease: "power2.out"
          });
          
          if (cardGlow) {
            gsap.to(cardGlow, {
              x: (x - centerX) * 0.5,
              y: (y - centerY) * 0.5,
              opacity: 0.6,
              duration: 0.3
            });
          }
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(cardContent, {
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
          });
          
          if (cardGlow) {
            gsap.to(cardGlow, {
              x: 0,
              y: 0,
              opacity: 0,
              duration: 0.5
            });
          }
        });
      });
      
      // Floating tech icons animation
      const floatingIcons = document.querySelectorAll('.floating-icon');
      floatingIcons.forEach((icon, i) => {
        gsap.to(icon, {
          y: Math.random() * 30 - 15,
          x: Math.random() * 20 - 10,
          rotation: Math.random() * 20 - 10,
          duration: 3 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2
        });
      });
      
      // Background scan line
      const scanLine = document.querySelector('.scan-line');
      if (scanLine) {
        gsap.to(scanLine, {
          y: '100%',
          duration: 3,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 2
        });
      }
      
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  // Interactive glow effect
  useEffect(() => {
    if (!glowRef.current || !mousePos.x || !viewport.width) return;
    
    const glow = glowRef.current;
    const x = (mousePos.x / viewport.width) * 100;
    const y = (mousePos.y / viewport.height) * 100;
    
    gsap.to(glow, {
      x: `${x}%`,
      y: `${y}%`,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [mousePos, viewport]);

  // Holographic badge component
  const HolographicBadge = ({ text, color }) => (
    <div className="relative inline-block">
      <div className="relative px-4 py-1.5 rounded-full overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <span className="relative text-xs font-bold tracking-wider" style={{ color }}>
          {text}
        </span>
      </div>
    </div>
  );

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 lg:py-24 overflow-hidden min-h-screen"
      style={{
        background: `
          radial-gradient(circle at 20% 50%, ${colors.primary}15 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${colors.secondary}10 0%, transparent 50%),
          linear-gradient(180deg, #0A0F1E 0%, #0D1428 100%)
        `
      }}
    >
      {/* Interactive mouse glow */}
      <div 
        ref={glowRef}
        className="fixed pointer-events-none z-0"
        style={{
          width: '600px',
          height: '600px',
          background: `radial-gradient(circle, ${colors.glow}05 0%, transparent 70%)`,
          filter: 'blur(60px)',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(90deg, ${colors.techBlue}22 1px, transparent 1px),
            linear-gradient(${colors.techBlue}22 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          backgroundPosition: 'center center'
        }}
      />

      {/* Scan line effect */}
      <div 
        className="scan-line absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${colors.neon}, transparent)`,
          boxShadow: `0 0 20px ${colors.neon}`,
          opacity: 0.3
        }}
      />

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[Brain, Cpu, Code, Server, Cloud, Database].map((Icon, i) => (
          <div
            key={i}
            className="floating-icon absolute"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
              opacity: 0.1,
              filter: `drop-shadow(0 0 10px ${colors.techBlue})`
            }}
          >
            <Icon className="h-8 w-8 md:h-12 md:w-12" style={{ color: colors.techBlue }} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 rounded-2xl mb-6 md:mb-8 overflow-hidden group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-cyan-400 animate-pulse" />
            <span className="text-xs md:text-sm font-bold tracking-widest bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              ELITE SERVICES PORTFOLIO
            </span>
            <div className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-green-500 animate-ping" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 md:mb-8 tracking-tight">
            <span className="block text-white/90">Transformative</span>
            <span className="block">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Digital Solutions
              </span>
              <span className="text-white/90 ml-2 md:ml-4">🚀</span>
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-blue-100/70 max-w-3xl mx-auto leading-relaxed px-4">
            We architect digital experiences that propel businesses into the future, 
            combining cutting-edge technology with visionary design.
          </p>
        </div>

        {/* Services Grid - Updated Responsive Layout */}
        {/* CHANGED: Removed sm:grid-cols-2, now shows 1 column on mobile, 2 on md, 3 on lg, 4 on xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative group perspective-1000"
              onMouseEnter={() => {
                setHoveredCard(service.id);
                setActiveService(service);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
              }}
            >
              {/* Outer glow layer */}
              <div 
                className="card-glow absolute -inset-3 md:-inset-4 rounded-2xl md:rounded-3xl opacity-0 transition-opacity duration-500"
                style={{
                  background: service.gradient,
                  filter: 'blur(40px)'
                }}
              />
              
              {/* Main card with 3D transform */}
              <div className="card-content relative h-full transform-style-3d transition-transform duration-700">
                {/* Card border gradient */}
                <div className="absolute -inset-0.5 rounded-xl md:rounded-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl"
                    style={{ background: service.gradient }}
                  />
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl bg-white/20 backdrop-blur-sm"
                    style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude' }}
                  />
                </div>
                
                {/* Card content - Reduced height */}
                <div 
                  className="relative h-full rounded-xl md:rounded-2xl p-4 md:p-6 overflow-hidden"
                  style={{
                    background: 'rgba(10, 15, 30, 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    minHeight: '420px'
                  }}
                >
                  {/* Service icon with floating animation */}
                  <div className="relative mb-4 md:mb-6">
                    <div 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
                      style={{ background: service.gradient }}
                    >
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    
                    {/* Floating tech badges */}
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {service.tech.slice(0, 3).map((tech, idx) => (
                        <span 
                          key={idx}
                          className="text-xs font-mono px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10 hover:scale-105 transition-transform duration-300"
                          style={{ color: service.color }}
                        >
                          {tech}
                        </span>
                      ))}
                      {service.tech.length > 3 && (
                        <span 
                          className="text-xs font-mono px-1.5 py-0.5 md:px-2 md:py-1 rounded bg-white/5 border border-white/10"
                          style={{ color: service.color }}
                        >
                          +{service.tech.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service title with gradient underline */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description with hover expansion */}
                  <p className="text-blue-100/60 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed transition-all duration-500 group-hover:text-blue-100/80 line-clamp-3 group-hover:line-clamp-none">
                    {service.description}
                  </p>

                  {/* Features with animated checkmarks */}
                  <div className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center text-xs md:text-sm group/feature"
                        style={{ 
                          opacity: hoveredCard === service.id ? 1 : 0.7,
                          transition: `opacity ${0.2 + idx * 0.1}s`
                        }}
                      >
                        <div className="relative mr-2 md:mr-3">
                          <div 
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{ background: service.color, animationDelay: `${idx * 0.1}s` }}
                          />
                          <CheckCircle 
                            className="h-3 w-3 md:h-4 md:w-4 relative"
                            style={{ color: service.color }}
                          />
                        </div>
                        <span className="text-white/80 group-hover/feature:text-white transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Stats and CTA */}
                  <div className="mt-auto pt-4 md:pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="text-center">
                          <div className="text-base md:text-lg font-bold text-white">{service.stats.projects}+</div>
                          <div className="text-xs text-white/60">Projects</div>
                        </div>
                        <div className="h-6 md:h-8 w-px bg-white/20" />
                        <div className="text-center">
                          <div className="text-base md:text-lg font-bold text-white">{service.stats.satisfaction}%</div>
                          <div className="text-xs text-white/60">Satisfaction</div>
                        </div>
                      </div>
                      
                      <HolographicBadge text={service.complexity} color={service.color} />
                    </div>
                    
                    {/* Updated non-persuasive text area */}
                    <div 
                      className="w-full relative overflow-hidden rounded-lg md:rounded-xl py-2.5 md:py-3 px-3 md:px-4 transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${service.color}10, ${service.color}05)` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                      <span className="relative flex items-center justify-center text-xs md:text-sm font-medium text-white/90 italic">
                        Service Overview
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover particle effect */}
              {hoveredCard === service.id && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-float"
                      style={{
                        background: service.color,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Interactive Service Details Panel */}
        {activeService && (
          <div className="fixed inset-x-4 bottom-4 md:inset-x-auto md:right-4 md:top-1/2 md:transform md:-translate-y-1/2 z-50">
            <div 
              className="relative rounded-2xl p-4 md:p-6 backdrop-blur-2xl border border-white/20 shadow-2xl animate-slideUp"
              style={{
                background: 'rgba(10, 15, 30, 0.9)',
                maxWidth: '350px'
              }}
            >
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <h4 className="text-base md:text-lg font-bold text-white">Selected Service</h4>
                <button 
                  onClick={() => setActiveService(null)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center"
                    style={{ background: activeService.gradient }}
                  >
                    {activeService.icon}
                  </div>
                  <div>
                    <h5 className="font-bold text-white text-sm md:text-base">{activeService.title}</h5>
                    <div className="text-xs md:text-sm text-white/60">{activeService.delivery} delivery</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div className="p-2 md:p-3 rounded-lg bg-white/5">
                    <div className="text-xl md:text-2xl font-bold text-white">{activeService.stats.projects}+</div>
                    <div className="text-xs text-white/60">Successful Projects</div>
                  </div>
                  <div className="p-2 md:p-3 rounded-lg bg-white/5">
                    <div className="text-xl md:text-2xl font-bold text-white">{activeService.stats.satisfaction}%</div>
                    <div className="text-xs text-white/60">Client Satisfaction</div>
                  </div>
                </div>
                
                <div className="w-full py-2.5 md:py-3 rounded-lg md:rounded-xl font-medium text-center text-sm md:text-base text-white/80 transition-all duration-300 bg-white/5 border border-white/10">
                  Portfolio Item
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Updated CTA Section - Fixed balanced layout */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mt-20 md:mt-32">
          {/* Particle background */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 2 + 1,
                  height: Math.random() * 2 + 1,
                  background: colors.neon,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.2,
                  animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>
          
          <div 
            className="relative p-6 md:p-8 lg:p-12 text-center"
            style={{
              background: 'radial-gradient(circle at center, rgba(0, 102, 255, 0.1), transparent 70%)',
              backdropFilter: 'blur(20px)'
            }}
          >
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-4 md:mb-6">
              Our Development Philosophy
            </h3>
            
            <p className="text-sm md:text-base lg:text-xl text-blue-100/80 mb-8 md:mb-12 max-w-2xl mx-auto">
              Crafting digital solutions through innovation, precision, and forward-thinking approaches.
            </p>
            
            {/* Centered and balanced info cards */}
            <div className="flex flex-col sm:flex-row justify-center items-stretch gap-4 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Innovation Card */}
              <div className="flex-1 max-w-sm mx-auto sm:mx-0">
                <div className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 h-full">
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(135deg, #0066FF20, #00D4AA20)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/10 border border-white/20">
                        <Target className="h-6 w-6 md:h-8 md:w-8 text-cyan-400" />
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-lg md:text-xl mb-3 md:mb-4">
                      Innovation Focus
                    </h4>
                    <p className="text-sm md:text-base text-blue-100/70 flex-grow">
                      Continuously exploring emerging technologies to deliver cutting-edge solutions that drive business transformation.
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-center space-x-4">
                        <span className="text-xs md:text-sm text-cyan-400/80">AI Integration</span>
                        <span className="text-xs md:text-sm text-cyan-400/80">R&D</span>
                        <span className="text-xs md:text-sm text-cyan-400/80">Future Tech</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Card */}
              <div className="flex-1 max-w-sm mx-auto sm:mx-0">
                <div className="group relative p-6 md:p-8 rounded-xl md:rounded-2xl overflow-hidden transition-all duration-500 h-full">
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl opacity-20"
                    style={{
                      background: 'linear-gradient(135deg, #9D50FF20, #00C6FF20)'
                    }}
                  />
                  <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-center mb-4 md:mb-6">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center bg-white/10 border border-white/20">
                        <Palette className="h-6 w-6 md:h-8 md:w-8 text-purple-400" />
                      </div>
                    </div>
                    <h4 className="font-bold text-white text-lg md:text-xl mb-3 md:mb-4">
                      Quality Craftsmanship
                    </h4>
                    <p className="text-sm md:text-base text-blue-100/70 flex-grow">
                      Meticulous attention to detail in every aspect of development, ensuring robust, scalable, and maintainable solutions.
                    </p>
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <div className="flex justify-center space-x-4">
                        <span className="text-xs md:text-sm text-purple-400/80">Code Quality</span>
                        <span className="text-xs md:text-sm text-purple-400/80">Testing</span>
                        <span className="text-xs md:text-sm text-purple-400/80">Maintenance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats section */}
            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-blue-100/60">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs md:text-sm">Continuous Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  <span className="text-xs md:text-sm">Expert Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-xs md:text-sm">Best Practices</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.5; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.2); }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .animate-float {
          animation: float 2s ease-in-out infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 0.5s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-none {
          -webkit-line-clamp: unset;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #0066FF, #00D4AA);
          border-radius: 4px;
        }
        
        /* Enhanced Responsive Design */
        @media (max-width: 640px) {
          .grid-cols-4 {
            grid-template-columns: 1fr;
          }
          
          .floating-icon {
            display: none;
          }
        }
        
        @media (max-width: 768px) {
          .text-7xl {
            font-size: 2.5rem;
          }
          
          .scan-line {
            display: none;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1024px) {
          .xl\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .group:hover .line-clamp-3 {
            -webkit-line-clamp: 3;
          }
          
          .card-content {
            transform: none !important;
          }
          
          .hover\:scale-105:hover {
            transform: none;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation: none !important;
            transition: none !important;
          }
        }
        
        /* Print styles */
        @media print {
          .bg-gradient-to-r,
          .backdrop-blur-2xl,
          .animate-float,
          .scan-line {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OurServices;