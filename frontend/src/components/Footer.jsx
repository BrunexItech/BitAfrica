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

    for (let i = 0; i < 12; i++) {
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 1.5 + 0.5}px;
        height: ${Math.random() * 1.5 + 0.5}px;
        background: ${[colors.primary, colors.secondary, colors.electric][i % 3]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        opacity: ${Math.random() * 0.2 + 0.05};
        filter: blur(0.5px);
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 20}%;
      `;
      
      section.appendChild(particle);
      particles.push(particle);
      
      gsap.to(particle, {
        y: Math.random() * -20,
        x: Math.random() * 15 - 7.5,
        duration: Math.random() * 6 + 3,
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
    { name: "AI Development", icon: <Brain className="h-3.5 w-3.5" />, color: colors.primary },
    { name: "Web Apps", icon: <Globe className="h-3.5 w-3.5" />, color: colors.secondary },
    { name: "Cloud Solutions", icon: <Cloud className="h-3.5 w-3.5" />, color: colors.accent },
    { name: "Cybersecurity", icon: <Shield className="h-3.5 w-3.5" />, color: colors.electric },
    { name: "Data Analytics", icon: <Database className="h-3.5 w-3.5" />, color: colors.purple },
    { name: "Mobile Apps", icon: <Terminal className="h-3.5 w-3.5" />, color: colors.primary }
  ];

  // Company links
  const companyLinks = [
    { name: "About Us", icon: <Users className="h-3.5 w-3.5" /> },
    { name: "Careers", icon: <Briefcase className="h-3.5 w-3.5" /> },
    { name: "Blog", icon: <FileText className="h-3.5 w-3.5" /> },
    { name: "Press", icon: <MessageSquare className="h-3.5 w-3.5" /> },
    { name: "Partners", icon: <Award className="h-3.5 w-3.5" /> },
    { name: "Support Center", icon: <MessageSquare className="h-3.5 w-3.5" /> }
  ];

  // Contact info
  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: "hello@bitafrica.ai" },
    { icon: <Phone className="h-4 w-4" />, text: "+254 7949 133 18" }
  ];

  // Social media
  const socialMedia = [
    { name: "Facebook", icon: <Facebook className="h-4 w-4" />, color: "#1877F2" },
    { name: "Twitter", icon: <Twitter className="h-4 w-4" />, color: "#1DA1F2" },
    { name: "LinkedIn", icon: <Linkedin className="h-4 w-4" />, color: "#0077B5" },
    { name: "Instagram", icon: <Instagram className="h-4 w-4" />, color: "#E4405F" }
  ];

  // Newsletter
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
    e.target.reset();
  };

  // Compact Global presence component
  const GlobalPresence = () => (
    <div className="p-3 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Globe className="h-4 w-4 text-cyan-300" />
          <h3 className="font-semibold text-white text-sm">Global Presence</h3>
        </div>
        <div className="flex items-center gap-1 text-xs text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded">
          <Wifi className="h-2.5 w-2.5" />
          <span>LIVE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-2">
        <div className="text-center p-2 rounded-lg bg-white/5">
          <div className="text-base font-bold text-white">24</div>
          <div className="text-xs text-blue-100/60">Countries</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/5">
          <div className="text-base font-bold text-white">500+</div>
          <div className="text-xs text-blue-100/60">Clients</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-white/5">
          <div className="text-base font-bold text-white">99.9%</div>
          <div className="text-xs text-blue-100/60">Uptime</div>
        </div>
        <div className="text-center p-2 rounded-lg bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
          <div className="flex flex-col items-center justify-center gap-0.5">
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3 text-green-400" />
              <div className="text-xs font-bold text-green-400">
                Local Time
              </div>
            </div>
            <div className="text-sm font-bold text-green-300 tracking-tight">
              {clientTime.split(' ')[0]} {clientTime.split(' ')[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <footer 
      ref={footerRef}
      className="relative overflow-hidden pt-8"
      style={{ background: colors.background }}
    >
      {/* Top accent line */}
      <div 
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: colors.gradient }}
      />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          
          {/* Column 1: Brand & Global - Full width on mobile, then responsive */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            {/* Compact Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="h-16 w-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-900 to-black border border-white/20 overflow-hidden">
                  <img 
                    src="./images/logo/bitafrica-logo.png" 
                    alt="BitAfrica AI Logo" 
                    className="h-12 w-12 object-contain p-0.5"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-cyan-400 font-bold text-2xl tracking-tight">BA</div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  BitAfrica AI
                </h2>
                <p className="text-xs text-blue-100/60 mt-0.5">Pioneering Africa's AI Revolution</p>
              </div>
            </div>
            
            <GlobalPresence />
          </div>
          
          {/* Columns 2 & 3: Services and Company - Side by side on mobile */}
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Zap className="h-4 w-4 text-yellow-400" />
              Services
            </h3>
            <div className="space-y-1.5">
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#"
                  className="group flex items-center gap-2 p-1.5 rounded-md hover:bg-white/5 transition-all duration-200"
                >
                  <div 
                    className="p-1 rounded-md transition-transform duration-200"
                    style={{ background: `${service.color}15` }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-blue-100/80 text-xs group-hover:text-white">
                    {service.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
              <Briefcase className="h-4 w-4 text-green-400" />
              Company
            </h3>
            <div className="space-y-1.5">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="group flex items-center gap-2 p-1.5 rounded-md hover:bg-white/5 transition-all duration-200"
                >
                  <div className="p-1 rounded-md bg-white/5">
                    <div className="text-cyan-300">
                      {link.icon}
                    </div>
                  </div>
                  <span className="text-blue-100/80 text-xs group-hover:text-white">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 4: Newsletter & Contact - Full width on mobile */}
          <div className="md:col-span-2 lg:col-span-1 space-y-4">
            {/* Compact Newsletter */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-3 border border-white/10">
              <div className="flex items-center gap-1.5 mb-2">
                <Bell className="h-4 w-4 text-cyan-300" />
                <h3 className="font-bold text-white text-sm">Stay Updated</h3>
              </div>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="w-full py-2 text-sm rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-1"
                >
                  <span className="text-white font-semibold">Subscribe</span>
                  <Send className="h-3 w-3 text-white" />
                </button>
              </form>
              
              {subscribed && (
                <div className="mt-2 flex items-center justify-center gap-1 text-green-400 text-xs">
                  <Sparkles className="h-3 w-3" />
                  <span>Welcome aboard! 🚀</span>
                </div>
              )}
            </div>
            
            {/* Compact Contact */}
            <div>
              <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-pink-400" />
                Contact
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 rounded-lg bg-white/5"
                  >
                    <div className="p-1.5 rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <div className="text-cyan-300">
                        {contact.icon}
                      </div>
                    </div>
                    <span className="text-blue-100/80 text-xs">
                      {contact.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-2 p-2 rounded-lg bg-white/5">
                  <div className="p-1.5 rounded-md bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <MapPin className="h-4 w-4 text-cyan-300" />
                  </div>
                  <span className="text-blue-100/80 text-xs">
                  Nairobi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connect With Us */}
        <div className="mb-6">
          <div className="flex flex-col items-center">
            <h3 className="text-base font-bold text-white mb-3 text-center">Connect With Us</h3>
            <div className="flex gap-2">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group relative p-2.5 rounded-lg transition-all duration-200 hover:scale-110"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  onMouseEnter={() => setActiveHover(social.name)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-200"
                    style={{ background: social.color, filter: 'blur(6px)' }}
                  />
                  
                  <div 
                    className="relative z-10"
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
        
        {/* Compact Copyright Section */}
        <div className="text-center py-3">
          <div className="text-xs text-blue-100/60">
            <p className="font-medium bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-4 py-2 rounded-md inline-block">
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
        
        /* Responsive Grid Layout */
        @media (max-width: 768px) {
          /* Mobile: Services and Company side by side */
          .grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 1.5rem;
          }
          
          /* First column spans full width */
          .md\\:col-span-2 {
            grid-column: span 2;
          }
          
          /* Adjust spacing for mobile */
          .h-16 {
            height: 3.5rem;
          }
          .w-16 {
            width: 3.5rem;
          }
          .h-12 {
            height: 2.5rem;
          }
          .w-12 {
            width: 2.5rem;
          }
        }
        
        /* Tablet: Adjust layout */
        @media (min-width: 769px) and (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
          
          .md\\:col-span-2 {
            grid-column: span 2;
          }
          
          .lg\\:col-span-1 {
            grid-column: span 1;
          }
        }
        
        /* Desktop: Original 4-column layout */
        @media (min-width: 1025px) {
          .grid {
            grid-template-columns: repeat(4, 1fr);
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