import React, { useState, useRef, useEffect } from 'react';
import {
  Globe, Send, Calendar, Clock, MapPin, User, Mail, MessageSquare,
  Sparkles, Rocket, Video, Phone, Zap, Target, Languages, Cloud,
  CheckCircle, X, Globe2, Users, Award, Shield
} from 'lucide-react';
import gsap from 'gsap';

const GetinTouch = () => {
  const [activeRegion, setActiveRegion] = useState('global');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    timezone: 'GMT',
    consultationType: 'video'
  });

  const globeRef = useRef(null);
  const formRef = useRef(null);
  const particlesRef = useRef([]);
  const successRef = useRef(null);

  // Vibrant color palette with global inspiration
  const colors = {
    primary: '#FF6B6B',    // Vibrant coral
    secondary: '#4ECDC4',   // Turquoise
    accent: '#FFD166',      // Sunshine yellow
    global: '#118AB2',      // Ocean blue
    success: '#06D6A0',     // Emerald green
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFD166, #4ECDC4)',
    background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)',
    glass: 'rgba(255, 255, 255, 0.08)'
  };

  // Global regions with flags and time zones
  const regions = [
    { id: 'africa', name: 'Africa', flag: '🌍', color: '#FFD166', timezone: 'GMT+1', peak: '9 AM - 5 PM' },
    { id: 'europe', name: 'Europe', flag: '🇪🇺', color: '#4ECDC4', timezone: 'GMT+2', peak: '8 AM - 4 PM' },
    { id: 'asia', name: 'Asia-Pacific', flag: '🌏', color: '#FF6B6B', timezone: 'GMT+8', peak: '10 AM - 7 PM' },
    { id: 'americas', name: 'Americas', flag: '🌎', color: '#118AB2', timezone: 'GMT-5', peak: '9 AM - 6 PM' },
    { id: 'global', name: 'Global 24/7', flag: '🌐', color: '#C44569', timezone: 'Multiple', peak: 'Round-the-clock' }
  ];

  // Services with icons and colors
  const services = [
    { id: 'ai', name: 'AI Solutions', icon: '🧠', color: '#FF6B6B' },
    { id: 'web', name: 'Web Development', icon: '💻', color: '#4ECDC4' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱', color: '#FFD166' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️', color: '#118AB2' },
    { id: 'cyber', name: 'Cybersecurity', icon: '🛡️', color: '#06D6A0' },
    { id: 'consult', name: 'AI Consultation', icon: '🎯', color: '#C44569' }
  ];

  // Consultation types
  const consultationTypes = [
    { id: 'video', name: 'Video Call', icon: <Video className="h-5 w-5" />, color: '#4ECDC4' },
    { id: 'phone', name: 'Phone Call', icon: <Phone className="h-5 w-5" />, color: '#FF6B6B' },
    { id: 'onsite', name: 'On-site Visit', icon: <MapPin className="h-5 w-5" />, color: '#FFD166' }
  ];

  // Time slots for scheduling
  const timeSlots = [
    { time: '09:00 - 10:00', available: true },
    { time: '10:30 - 11:30', available: true },
    { time: '12:00 - 13:00', available: false },
    { time: '14:00 - 15:00', available: true },
    { time: '15:30 - 16:30', available: true },
    { time: '17:00 - 18:00', available: true }
  ];

  // Animated globe effect
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    // Create floating continents
    const continents = ['🌍', '🌎', '🌏'];
    continents.forEach((emoji, i) => {
      const continent = document.createElement('div');
      continent.textContent = emoji;
      continent.style.cssText = `
        position: absolute;
        font-size: ${24 + i * 8}px;
        filter: drop-shadow(0 0 10px ${colors.primary});
        z-index: ${2 + i};
        opacity: 0.6;
      `;
      
      globe.appendChild(continent);
      
      // Animate around globe
      gsap.to(continent, {
        rotation: 360,
        duration: 20 + i * 5,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center"
      });
      
      gsap.to(continent, {
        x: Math.random() * 40 - 20,
        y: Math.random() * 40 - 20,
        duration: 3 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    });

    // Create connection lines
    const createConnection = (x1, y1, x2, y2, color) => {
      const line = document.createElement('div');
      line.style.cssText = `
        position: absolute;
        left: ${x1}%;
        top: ${y1}%;
        width: ${Math.sqrt(Math.pow(x2-x1, 2) + Math.pow(y2-y1, 2)) * 2}%;
        height: 2px;
        background: linear-gradient(90deg, ${color}80, transparent);
        transform-origin: 0 0;
        transform: rotate(${Math.atan2(y2-y1, x2-x1)}rad);
        z-index: 1;
      `;
      globe.appendChild(line);
      
      gsap.to(line, {
        background: `linear-gradient(90deg, ${color}, ${colors.accent}80)`,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    };

    // Create connection network
    const points = [
      { x: 30, y: 40, color: colors.primary },
      { x: 60, y: 30, color: colors.secondary },
      { x: 40, y: 60, color: colors.accent },
      { x: 70, y: 70, color: colors.global }
    ];

    points.forEach((p1, i) => {
      points.forEach((p2, j) => {
        if (i < j && Math.random() > 0.5) {
          createConnection(p1.x, p1.y, p2.x, p2.y, p1.color);
        }
      });
    });

    return () => {
      globe.innerHTML = '';
    };
  }, []);

  // Particle animation for background
  useEffect(() => {
    const particles = particlesRef.current;
    const container = formRef.current;
    
    if (!container) return;

    // Create particles
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 1}px;
        height: ${Math.random() * 4 + 1}px;
        background: ${Math.random() > 0.5 ? colors.primary : colors.secondary};
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        opacity: ${Math.random() * 0.3 + 0.1};
        filter: blur(0.5px);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      
      container.appendChild(particle);
      particles.push(particle);
      
      // Animate particles
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 10 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }

    return () => {
      particles.forEach(p => p.remove());
      particlesRef.current = [];
    };
  }, []);

  // Form submission animation
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Animate success message
    gsap.fromTo(successRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
    );
  };

  // Region selector component
  const RegionSelector = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Globe2 className="h-5 w-5 text-cyan-300" />
        <h3 className="text-lg font-bold text-white">Select Your Region</h3>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
        {regions.map(region => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region.id)}
            className={`relative group p-3 rounded-xl transition-all duration-300 ${
              activeRegion === region.id 
                ? 'scale-105 shadow-lg' 
                : 'hover:scale-102'
            }`}
            style={{
              background: activeRegion === region.id 
                ? `${region.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${activeRegion === region.id ? region.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">{region.flag}</span>
              <span className="text-sm font-medium text-white">{region.name}</span>
              <span className="text-xs opacity-60 text-white">{region.timezone}</span>
            </div>
            
            {activeRegion === region.id && (
              <div className="absolute -top-1 -right-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
                  <div className="relative bg-green-500 rounded-full p-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  // Service selector component
  const ServiceSelector = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Target className="h-5 w-5 text-cyan-300" />
        <h3 className="text-lg font-bold text-white">Select Service</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {services.map(service => (
          <button
            key={service.id}
            type="button"
            onClick={() => {
              setSelectedService(service.id);
              setFormData({...formData, service: service.name});
            }}
            className={`group relative p-4 rounded-xl transition-all duration-300 ${
              selectedService === service.id 
                ? 'scale-105 shadow-xl' 
                : 'hover:scale-102'
            }`}
            style={{
              background: selectedService === service.id 
                ? `${service.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${selectedService === service.id ? service.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <div 
                className="p-3 rounded-lg group-hover:scale-110 transition-transform"
                style={{ background: `${service.color}20` }}
              >
                <span className="text-2xl">{service.icon}</span>
              </div>
              <span className="text-sm font-medium text-white text-center">
                {service.name}
              </span>
            </div>
            
            {selectedService === service.id && (
              <div className="absolute -top-1 -right-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" />
                  <div className="relative bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-1">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  // Consultation type selector
  const ConsultationSelector = () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Video className="h-5 w-5 text-cyan-300" />
        <h3 className="text-lg font-bold text-white">Consultation Type</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {consultationTypes.map(type => (
          <button
            key={type.id}
            type="button"
            onClick={() => setFormData({...formData, consultationType: type.id})}
            className={`group p-3 rounded-xl transition-all duration-300 ${
              formData.consultationType === type.id 
                ? 'scale-105 shadow-lg' 
                : 'hover:scale-102'
            }`}
            style={{
              background: formData.consultationType === type.id 
                ? `${type.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${formData.consultationType === type.id ? type.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div 
                className="p-2 rounded-lg"
                style={{ color: type.color }}
              >
                {type.icon}
              </div>
              <span className="text-sm font-medium text-white">{type.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: colors.background }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
            filter: 'blur(60px)',
            opacity: 0.4
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}30 0%, transparent 70%)`,
            filter: 'blur(60px)',
            opacity: 0.4
          }}
        />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(90deg, ${colors.primary}20 1px, transparent 1px),
              linear-gradient(${colors.primary}20 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <Globe className="h-5 w-5 text-cyan-300 animate-spin-slow" />
            <span className="text-sm font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-widest">
              GLOBAL CONNECTIVITY HUB
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="block text-white/90">Connect Globally</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-300 bg-clip-text text-transparent">
              Free Consultation
            </span>
          </h1>
          
          <p className="text-xl text-blue-100/80 leading-relaxed">
            Book a free strategy session from anywhere in the world. Our team spans multiple time zones 
            to serve you 24/7 with cutting-edge AI solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Left Column - Interactive Globe */}
          <div className="relative">
            <div className="sticky top-24">
              {/* Animated Globe */}
              <div 
                ref={globeRef}
                className="relative w-full aspect-square rounded-full mb-8 overflow-hidden flex items-center justify-center"
                style={{
                  background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  border: '2px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 0 80px rgba(0, 198, 255, 0.3)'
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse" />
                    <Globe className="h-32 w-32 text-cyan-300 animate-spin-slow" />
                  </div>
                </div>
                
                {/* Floating cities */}
                {[
                  { emoji: '🗽', top: '20%', left: '25%', color: colors.primary },
                  { emoji: '🗼', top: '25%', left: '65%', color: colors.secondary },
                  { emoji: '🏙️', top: '60%', left: '15%', color: colors.accent },
                  { emoji: '🌆', top: '70%', left: '75%', color: colors.global }
                ].map((city, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      top: city.top,
                      left: city.left,
                      animationDelay: `${i * 0.5}s`
                    }}
                  >
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative text-3xl">{city.emoji}</span>
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="px-2 py-1 rounded bg-black/50 backdrop-blur-sm text-white">
                          Connected
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-cyan-300" />
                    <div>
                      <div className="text-2xl font-bold text-white">50+</div>
                      <div className="text-sm text-blue-100/60">Countries Served</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center gap-3">
                    <Clock className="h-8 w-8 text-cyan-300" />
                    <div>
                      <div className="text-2xl font-bold text-white">24/7</div>
                      <div className="text-sm text-blue-100/60">Support Coverage</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Timezone info */}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-cyan-300" />
                  <h3 className="font-bold text-white">Current Active Regions</h3>
                </div>
                <div className="space-y-2">
                  {regions.slice(0, -1).map(region => (
                    <div key={region.id} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <span>{region.flag}</span>
                        <span className="text-white/80">{region.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-cyan-300">{region.peak}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div 
              ref={formRef}
              className="relative rounded-3xl p-8 backdrop-blur-xl border border-white/20"
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Success message */}
              {isSubmitted ? (
                <div 
                  ref={successRef}
                  className="text-center py-12"
                >
                  <div className="relative inline-block mb-6">
                    <div className="absolute -inset-4 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-xl animate-pulse" />
                    <div className="relative p-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                      <CheckCircle className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-4">Booking Confirmed! 🎉</h3>
                  <p className="text-blue-100/80 mb-8">
                    Your free consultation has been scheduled. Our team will contact you 
                    within 24 hours with the meeting details.
                  </p>
                  
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        description: '',
                        timezone: 'GMT',
                        consultationType: 'video'
                      });
                      setSelectedService('');
                    }}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Schedule Another Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <RegionSelector />
                  
                  <ServiceSelector />
                  
                  <ConsultationSelector />
                  
                  {/* Personal Details */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <User className="h-5 w-5 text-cyan-300" />
                      <h3 className="text-lg font-bold text-white">Personal Details</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="relative group">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 group-hover:border-white/20"
                        />
                        <div className="absolute left-4 top-3.5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                          <User className="h-4 w-4 text-cyan-300" />
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Email Address"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 group-hover:border-white/20"
                        />
                        <div className="absolute left-4 top-3.5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                          <Mail className="h-4 w-4 text-cyan-300" />
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Phone Number (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 group-hover:border-white/20"
                        />
                        <div className="absolute left-4 top-3.5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                          <Phone className="h-4 w-4 text-cyan-300" />
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          placeholder="Company (Optional)"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 group-hover:border-white/20"
                        />
                        <div className="absolute left-4 top-3.5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                          <Award className="h-4 w-4 text-cyan-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-cyan-300" />
                      <h3 className="text-lg font-bold text-white">Project Details</h3>
                    </div>
                    
                    <div className="relative group">
                      <textarea
                        required
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Briefly describe your project goals, challenges, and timeline..."
                        rows="4"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none group-hover:border-white/20"
                      />
                      <div className="absolute left-4 top-3.5 opacity-60 group-focus-within:opacity-100 transition-opacity">
                        <MessageSquare className="h-4 w-4 text-cyan-300" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Time Slot Selection */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-cyan-300" />
                      <h3 className="text-lg font-bold text-white">Preferred Time Slot</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {timeSlots.map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          disabled={!slot.available}
                          className={`p-3 rounded-xl text-sm transition-all duration-300 ${
                            slot.available 
                              ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white hover:scale-102' 
                              : 'bg-white/5 opacity-40 cursor-not-allowed border border-white/5 text-white/40'
                          }`}
                        >
                          <div className="flex flex-col items-center">
                            <span>{slot.time}</span>
                            {slot.available ? (
                              <span className="text-xs text-green-400 mt-1">Available</span>
                            ) : (
                              <span className="text-xs text-red-400 mt-1">Booked</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-4 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: colors.gradient
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center justify-center text-white font-bold text-lg">
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                          Scheduling Consultation...
                        </>
                      ) : (
                        <>
                          <Rocket className="mr-3 h-5 w-5 group-hover:rotate-45 transition-transform" />
                          Book Free Consultation
                          <Send className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                        </>
                      )}
                    </span>
                  </button>
                  
                  {/* Privacy Note */}
                  <p className="text-center text-sm text-blue-100/60 flex items-center justify-center gap-2">
                    <Shield className="h-4 w-4" />
                    Your information is secure. We follow GDPR & global privacy standards.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0F0F23 0%, transparent 100%)',
          opacity: 0.8
        }}
      />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .scale-102 {
          transform: scale(1.02);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colors.gradient};
          border-radius: 3px;
        }
        
        /* Input focus styles */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .text-7xl {
            font-size: 3.5rem;
          }
          
          .grid-cols-5 {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-float,
          .animate-spin-slow,
          .animate-pulse,
          .group-hover,
          .transition-all {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GetinTouch;