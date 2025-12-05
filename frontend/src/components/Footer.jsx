import React, { useState, useEffect, useRef } from 'react';
import {
  Globe, Mail, Phone, MapPin, Sparkles, Brain,
  Zap, Shield, Cloud, Terminal, Cpu, Database,
  Twitter, Linkedin, Instagram, Facebook,
  Send, Users, Briefcase, FileText, Award,
  MessageSquare, Wifi, Bell, Clock
} from 'lucide-react';
import gsap from 'gsap';

const Footer = () => {
  const [activeHover, setActiveHover] = useState(null);
  const [clientTime, setClientTime] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const footerRef = useRef(null);
  const particlesRef = useRef([]);
  
  // VIBRANT COLOR PALETTE
  const colors = {
    primary: '#FF2E63',
    secondary: '#08D9D6',
    accent: '#FF9A00',
    electric: '#00FF88',
    purple: '#9D4EDD',
    background: '#0A0A0F',
    gradient: 'linear-gradient(135deg, #FF2E63, #9D4EDD, #08D9D6, #00FF88)'
  };

  // Get client's local time with smooth counting
  useEffect(() => {
    const updateClientTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      const gmtOffset = -now.getTimezoneOffset() / 60;
      const gmtSign = gmtOffset >= 0 ? '+' : '-';
      setClientTime(`${timeString} GMT${gmtSign}${Math.abs(gmtOffset)}`);
    };
    
    updateClientTime();
    const interval = setInterval(updateClientTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Floating particles
  useEffect(() => {
    const particles = [];
    const section = footerRef.current;
    
    if (!section) return;

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 2 + 1}px;
        height: ${Math.random() * 2 + 1}px;
        background: ${[colors.primary, colors.secondary, colors.electric][i % 3]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        opacity: ${Math.random() * 0.3 + 0.1};
        filter: blur(0.5px);
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 30}%;
      `;
      
      section.appendChild(particle);
      particles.push(particle);
      
      gsap.to(particle, {
        y: Math.random() * -30,
        x: Math.random() * 20 - 10,
        duration: Math.random() * 8 + 4,
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

  // Services
  const services = [
    { name: "AI Development", icon: <Brain className="h-4 w-4" />, color: colors.primary },
    { name: "Web Apps", icon: <Globe className="h-4 w-4" />, color: colors.secondary },
    { name: "Cloud Solutions", icon: <Cloud className="h-4 w-4" />, color: colors.accent },
    { name: "Cybersecurity", icon: <Shield className="h-4 w-4" />, color: colors.electric },
    { name: "Data Analytics", icon: <Database className="h-4 w-4" />, color: colors.purple },
    { name: "Mobile Apps", icon: <Terminal className="h-4 w-4" />, color: colors.primary }
  ];

  // Company links
  const companyLinks = [
    { name: "About Us", icon: <Users className="h-4 w-4" /> },
    { name: "Careers", icon: <Briefcase className="h-4 w-4" /> },
    { name: "Blog", icon: <FileText className="h-4 w-4" /> },
    { name: "Press", icon: <MessageSquare className="h-4 w-4" /> },
    { name: "Partners", icon: <Award className="h-4 w-4" /> },
    { name: "Support Center", icon: <MessageSquare className="h-4 w-4" /> }
  ];

  // Contact info
  const contactInfo = [
    { icon: <Mail className="h-5 w-5" />, text: "hello@bitafrica.ai" },
    { icon: <Phone className="h-5 w-5" />, text: "+234 1 700 0000" }
  ];

  // Social media
  const socialMedia = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, color: "#1877F2" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, color: "#1DA1F2" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, color: "#0077B5" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, color: "#E4405F" }
  ];

  // Newsletter
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    e.target.reset();
  };

  // Enhanced Global presence component with smooth GMT
  const GlobalPresence = () => (
    <div className="p-5 rounded-xl bg-white/5 border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5 text-cyan-300" />
          <h3 className="font-semibold text-white">Global Presence</h3>
        </div>
        <div className="flex items-center gap-2 text-sm text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded-lg">
          <Wifi className="h-3 w-3" />
          <span>LIVE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
          <div className="text-xl font-bold text-white mb-1">24</div>
          <div className="text-xs text-blue-100/60">Countries</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
          <div className="text-xl font-bold text-white mb-1">500+</div>
          <div className="text-xs text-blue-100/60">Clients</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
          <div className="text-xl font-bold text-white mb-1">99.9%</div>
          <div className="text-xs text-blue-100/60">Uptime</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300">
          <div className="flex flex-col items-center justify-center gap-1 mb-2">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-green-400" />
              <div className="text-md font-bold text-green-400">
                Your Local Time
              </div>
            </div>
          </div>
          <div className="text-base font-bold text-green-300 bg-black/30 px-3 py-2 rounded-lg tracking-wider transition-all duration-300 hover:bg-black/40">
            {clientTime}
          </div>
          <div className="text-xs text-green-400/70 mt-1">Live updates every second</div>
        </div>
      </div>
    </div>
  );

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden pt-12"
      style={{ background: colors.background }}
    >
      {/* Top accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: colors.gradient }}
      />
      
      {/* Background elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute bottom-20 right-10 w-48 h-48 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}15 0%, transparent 70%)`,
            filter: 'blur(30px)',
            opacity: 0.2
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-Column Layout */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Global */}
          <div className="space-y-6">
            {/* Enhanced Logo with Real Image - Larger Size */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-28 w-28 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-white/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 overflow-hidden">
                  {/* Subtle grid effect */}
                  <div className="absolute inset-0 opacity-5" style={{
                    backgroundImage: `linear-gradient(90deg, #0088ff22 1px, transparent 1px),
                                    linear-gradient(#0088ff22 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                  
                  {/* Logo - Larger size */}
                  <div className="relative z-10">
                    <img 
                      src="./images/logo/bitafrica-logo.png" 
                      alt="BitAfrica AI Logo" 
                      className="h-20 w-20 object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <div class="text-cyan-400 font-bold text-4xl tracking-tight">BA</div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  BitAfrica AI
                </h2>
                <p className="text-sm text-blue-100/60 mt-1">Pioneering Africa's AI Revolution</p>
              </div>
            </div>
            
            <GlobalPresence />
          </div>
          
          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-400" />
              Services
            </h3>
            <div className="space-y-2">
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#"
                  className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div 
                    className="p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${service.color}15` }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-blue-100/80 group-hover:text-white transition-colors text-sm">
                    {service.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-green-400" />
              Company
            </h3>
            <div className="space-y-2">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="group flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-300 hover:translate-x-1"
                >
                  <div className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 group-hover:scale-110 transition-transform">
                    <div className="text-cyan-300">
                      {link.icon}
                    </div>
                  </div>
                  <span className="text-blue-100/80 group-hover:text-white transition-colors text-sm">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-xl p-5 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <Bell className="h-5 w-5 text-cyan-300" />
                <h3 className="font-bold text-white">Stay Updated</h3>
              </div>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 hover:border-white/20"
                />
                <button
                  type="submit"
                  className="group w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <span className="text-white font-semibold">Subscribe</span>
                  <Send className="h-4 w-4 text-white group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              
              {subscribed && (
                <div className="mt-3 flex items-center justify-center gap-2 text-green-400 animate-fadeIn">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm font-semibold">Welcome aboard! 🚀</span>
                </div>
              )}
            </div>
            
            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-pink-400" />
                Contact
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                      <div className="text-cyan-300">
                        {contact.icon}
                      </div>
                    </div>
                    <span className="text-blue-100/80 group-hover:text-white transition-colors">
                      {contact.text}
                    </span>
                  </div>
                ))}
                <div className="group flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.02]">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="text-blue-100/80 text-sm group-hover:text-white">
                    Lagos, Nairobi, Cape Town, Accra
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connect With Us Section */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Connect With Us</h3>
              <div className="flex gap-3">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="group relative p-3 rounded-xl transition-all duration-300 hover:scale-110"
                    style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                    onMouseEnter={() => setActiveHover(social.name)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    <div 
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ background: social.color, filter: 'blur(8px)' }}
                    />
                    
                    <div 
                      className="relative z-10"
                      style={{ color: social.color }}
                    >
                      {social.icon}
                    </div>
                    
                    {activeHover === social.name && (
                      <div className="absolute -inset-1 rounded-xl border opacity-50"
                        style={{ borderColor: social.color }}
                      />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />
        
        {/* Copyright Section */}
        <div className="text-center py-4">
          <div className="text-sm text-blue-100/60">
            <p className="font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-6 py-3 rounded-lg inline-block">
              © 2025 BitAfrica AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .grid-cols-4 {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .h-28 {
            height: 6rem;
          }
          .w-28 {
            width: 6rem;
          }
          .h-20 {
            height: 5rem;
          }
          .w-20 {
            width: 5rem;
          }
          
          .flex-col {
            align-items: center;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeIn,
          .group-hover,
          .transition-all {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;