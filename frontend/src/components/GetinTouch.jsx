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
    { id: 'video', name: 'Video Call', icon: <Video className="h-4 w-4" />, color: '#4ECDC4' },
    { id: 'phone', name: 'Phone Call', icon: <Phone className="h-4 w-4" />, color: '#FF6B6B' },
    { id: 'onsite', name: 'On-site Visit', icon: <MapPin className="h-4 w-4" />, color: '#FFD166' }
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
        font-size: ${20 + i * 6}px;
        filter: drop-shadow(0 0 8px ${colors.primary});
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
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        background: ${Math.random() > 0.5 ? colors.primary : colors.secondary};
        border-radius: 50%;
        pointer-events: none;
        z-index: 0;
        opacity: ${Math.random() * 0.2 + 0.05};
        filter: blur(0.5px);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      
      container.appendChild(particle);
      particles.push(particle);
      
      // Animate particles
      gsap.to(particle, {
        x: Math.random() * 80 - 40,
        y: Math.random() * 80 - 40,
        duration: Math.random() * 8 + 8,
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
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2">
        <Globe2 className="h-4 w-4 text-cyan-300" />
        <h3 className="text-base font-bold text-white">Select Your Region</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
        {regions.map(region => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region.id)}
            className={`relative group p-2 rounded-lg transition-all duration-200 ${
              activeRegion === region.id 
                ? 'scale-105 shadow-md' 
                : 'hover:scale-[1.02]'
            }`}
            style={{
              background: activeRegion === region.id 
                ? `${region.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${activeRegion === region.id ? region.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl">{region.flag}</span>
              <span className="text-xs font-medium text-white">{region.name}</span>
              <span className="text-[10px] opacity-60 text-white">{region.timezone}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // Service selector component
  const ServiceSelector = () => (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2">
        <Target className="h-4 w-4 text-cyan-300" />
        <h3 className="text-base font-bold text-white">Select Service</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {services.map(service => (
          <button
            key={service.id}
            type="button"
            onClick={() => {
              setSelectedService(service.id);
              setFormData({...formData, service: service.name});
            }}
            className={`group relative p-3 rounded-lg transition-all duration-200 ${
              selectedService === service.id 
                ? 'scale-105 shadow-md' 
                : 'hover:scale-[1.02]'
            }`}
            style={{
              background: selectedService === service.id 
                ? `${service.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${selectedService === service.id ? service.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div 
                className="p-2 rounded-md group-hover:scale-110 transition-transform"
                style={{ background: `${service.color}20` }}
              >
                <span className="text-xl">{service.icon}</span>
              </div>
              <span className="text-xs font-medium text-white text-center">
                {service.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  // Consultation type selector
  const ConsultationSelector = () => (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2">
        <Video className="h-4 w-4 text-cyan-300" />
        <h3 className="text-base font-bold text-white">Consultation Type</h3>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {consultationTypes.map(type => (
          <button
            key={type.id}
            type="button"
            onClick={() => setFormData({...formData, consultationType: type.id})}
            className={`group p-2 rounded-lg transition-all duration-200 ${
              formData.consultationType === type.id 
                ? 'scale-105 shadow-md' 
                : 'hover:scale-[1.02]'
            }`}
            style={{
              background: formData.consultationType === type.id 
                ? `${type.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${formData.consultationType === type.id ? type.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <div 
                className="p-1.5 rounded-md"
                style={{ color: type.color }}
              >
                {type.icon}
              </div>
              <span className="text-xs font-medium text-white">{type.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-8 md:py-12 overflow-hidden" style={{ background: colors.background }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div 
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}30 0%, transparent 70%)`,
            filter: 'blur(40px)',
            opacity: 0.3
          }}
        />
        <div 
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}30 0%, transparent 70%)`,
            filter: 'blur(40px)',
            opacity: 0.3
          }}
        />
      </div>

      <div className="w-full px-3 sm:px-5 lg:px-6 xl:px-8 relative z-10 mx-auto">
        {/* Header - Compact with better mobile centering */}
        <div className="text-center mb-8 max-w-4xl mx-auto px-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <Globe className="h-4 w-4 text-cyan-300 animate-spin-slow" />
            <span className="text-xs font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent tracking-widest">
              GLOBAL CONNECTIVITY HUB
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-1">
            <span className="block text-white/90 text-xl sm:text-2xl md:text-3xl">Connect Globally</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-300 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl mt-1">
              Free Consultation
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-blue-100/80 leading-relaxed max-w-2xl mx-auto px-2">
            Book a free strategy session from anywhere in the world.
          </p>
        </div>

        <div className="w-full">
          <div className="grid lg:grid-cols-5 gap-4 md:gap-5 lg:gap-6">
            {/* Left Column - Interactive Globe - Hidden on mobile, takes 2/5 on desktop */}
            <div className="hidden lg:block lg:col-span-2 relative w-full">
              <div className="sticky top-20 w-full">
                {/* Animated Globe */}
                <div 
                  ref={globeRef}
                  className="relative w-full aspect-square rounded-full mb-4 overflow-hidden flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 0 40px rgba(0, 198, 255, 0.2)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-md" />
                      <Globe className="h-20 w-20 text-cyan-300 animate-spin-slow" />
                    </div>
                  </div>
                </div>

                {/* Compact Stats */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-cyan-300" />
                      <div>
                        <div className="text-base font-bold text-white">50+</div>
                        <div className="text-xs text-blue-100/60">Countries</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-cyan-300" />
                      <div>
                        <div className="text-base font-bold text-white">24/7</div>
                        <div className="text-xs text-blue-100/60">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form - Takes 3/5 on desktop, full width on mobile */}
            <div className="lg:col-span-3 relative w-full">
              <div 
                ref={formRef}
                className="relative rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 backdrop-blur-xl border border-white/20 w-full"
                style={{
                  background: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                {/* Success message */}
                {isSubmitted ? (
                  <div 
                    ref={successRef}
                    className="text-center py-6"
                  >
                    <div className="relative inline-block mb-3">
                      <div className="relative p-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                        <CheckCircle className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Booking Confirmed! 🎉</h3>
                    <p className="text-blue-100/80 text-xs sm:text-sm mb-4">
                      Your free consultation has been scheduled.
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
                      className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all duration-300"
                    >
                      Schedule Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full">
                    <RegionSelector />
                    
                    <ServiceSelector />
                    
                    <ConsultationSelector />
                    
                    {/* Personal Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-cyan-300" />
                        <h3 className="text-sm sm:text-base font-bold text-white">Personal Details</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                        <div className="relative">
                          <User className="absolute left-2 top-2.5 sm:left-3 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-cyan-300 opacity-60" />
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="Your Name"
                            className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                          />
                        </div>
                        
                        <div className="relative">
                          <Mail className="absolute left-2 top-2.5 sm:left-3 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-cyan-300 opacity-60" />
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="Email Address"
                            className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                          />
                        </div>
                        
                        <div className="relative">
                          <Phone className="absolute left-2 top-2.5 sm:left-3 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-cyan-300 opacity-60" />
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="Phone (Optional)"
                            className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                          />
                        </div>
                        
                        <div className="relative">
                          <Award className="absolute left-2 top-2.5 sm:left-3 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-cyan-300 opacity-60" />
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({...formData, company: e.target.value})}
                            placeholder="Company (Optional)"
                            className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Project Description */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-cyan-300" />
                        <h3 className="text-sm sm:text-base font-bold text-white">Project Details</h3>
                      </div>
                      
                      <div className="relative">
                        <MessageSquare className="absolute left-2 top-2.5 sm:left-3 sm:top-3 h-3 w-3 sm:h-4 sm:w-4 text-cyan-300 opacity-60" />
                        <textarea
                          required
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          placeholder="Briefly describe your project..."
                          rows="3"
                          className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-2 sm:py-2.5 text-xs sm:text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>
                    
                    {/* Time Slot Selection */}
                    <div className="space-y-2 sm:space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-cyan-300" />
                        <h3 className="text-sm sm:text-base font-bold text-white">Preferred Time</h3>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                        {timeSlots.slice(0, 4).map((slot, i) => (
                          <button
                            key={i}
                            type="button"
                            disabled={!slot.available}
                            className={`p-1.5 sm:p-2 rounded-lg text-xs transition-all duration-200 ${
                              slot.available 
                                ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white' 
                                : 'bg-white/5 opacity-40 cursor-not-allowed border border-white/5 text-white/40'
                            }`}
                          >
                            <div className="flex flex-col items-center">
                              <span className="text-xs">{slot.time}</span>
                              {slot.available ? (
                                <span className="text-[10px] text-green-400 mt-0.5">✓ Available</span>
                              ) : (
                                <span className="text-[10px] text-red-400 mt-0.5">✗ Booked</span>
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
                      className="group relative w-full py-2.5 sm:py-3 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        background: colors.gradient
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center text-white font-bold text-xs sm:text-sm md:text-base">
                        {isSubmitting ? (
                          <>
                            <div className="h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1.5 sm:mr-2" />
                            Scheduling...
                          </>
                        ) : (
                          <>
                            <Rocket className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Book Free Consultation
                            <Send className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                          </>
                        )}
                      </span>
                    </button>
                    
                    {/* Privacy Note */}
                    <p className="text-center text-xs text-blue-100/60 flex items-center justify-center gap-1.5 sm:gap-2">
                      <Shield className="h-3 w-3" />
                      Your information is secure. We follow GDPR & global privacy standards.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 4px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colors.gradient};
          border-radius: 2px;
        }
        
        /* Input focus styles */
        input:focus, textarea:focus {
          box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
        }
        
        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .grid-cols-5 {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
          }
          
          .p-6 {
            padding: 1rem;
          }
          
          input, textarea {
            font-size: 14px;
          }
          
          /* Ensure proper text visibility on mobile */
          input::placeholder,
          textarea::placeholder {
            font-size: 13px;
          }
        }
        
        @media (max-width: 480px) {
          .text-4xl {
            font-size: 1.75rem;
          }
          
          .text-3xl {
            font-size: 1.5rem;
          }
          
          .text-2xl {
            font-size: 1.25rem;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-spin-slow,
          .group-hover,
          .transition-all {
            animation: none !important;
            transition: none !important;
          }
        }
        
        /* Ensure content is centered on mobile */
        @media (max-width: 768px) {
          section > div {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          .relative.z-10 {
            width: 100%;
            max-width: 100%;
          }
          
          .max-w-4xl {
            width: 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default GetinTouch;