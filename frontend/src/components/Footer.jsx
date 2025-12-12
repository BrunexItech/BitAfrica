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

    for (let i = 0; i < 8; i++) { // Reduced particle count
      const particle = document.createElement('div');
      particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 1 + 0.5}px;
        height: ${Math.random() * 1 + 0.5}px;
        background: ${[colors.primary, colors.secondary, colors.electric][i % 3]};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1;
        opacity: ${Math.random() * 0.15 + 0.03};
        filter: blur(0.5px);
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 15}%;
      `;
      
      section.appendChild(particle);
      particles.push(particle);
      
      gsap.to(particle, {
        y: Math.random() * -15,
        x: Math.random() * 10 - 5,
        duration: Math.random() * 5 + 2,
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
    { name: "AI Development", icon: <Brain className="h-3 w-3" />, color: colors.primary },
    { name: "Web Apps", icon: <Globe className="h-3 w-3" />, color: colors.secondary },
    { name: "Cloud Solutions", icon: <Cloud className="h-3 w-3" />, color: colors.accent },
    { name: "Cybersecurity", icon: <Shield className="h-3 w-3" />, color: colors.electric },
    { name: "Data Analytics", icon: <Database className="h-3 w-3" />, color: colors.purple },
    { name: "Mobile Apps", icon: <Terminal className="h-3 w-3" />, color: colors.primary }
  ];

  // Company links
  const companyLinks = [
    { name: "About Us", icon: <Users className="h-3 w-3" /> },
    { name: "Careers", icon: <Briefcase className="h-3 w-3" /> },
    { name: "Blog", icon: <FileText className="h-3 w-3" /> },
    { name: "Press", icon: <MessageSquare className="h-3 w-3" /> },
    { name: "Partners", icon: <Award className="h-3 w-3" /> },
    { name: "Support Center", icon: <MessageSquare className="h-3 w-3" /> }
  ];

  // Contact info
  const contactInfo = [
    { icon: <Mail className="h-3.5 w-3.5" />, text: "bitafrica.ai@gmail.com" },
    { icon: <Phone className="h-3.5 w-3.5" />, text: "+254 7949 133 18" }
  ];

  // Social media
  const socialMedia = [
    { name: "Facebook", icon: <Facebook className="h-3.5 w-3.5" />, color: "#1877F2" },
    { name: "Twitter", icon: <Twitter className="h-3.5 w-3.5" />, color: "#1DA1F2" },
    { name: "LinkedIn", icon: <Linkedin className="h-3.5 w-3.5" />, color: "#0077B5" },
    { name: "Instagram", icon: <Instagram className="h-3.5 w-3.5" />, color: "#E4405F" }
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
    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Globe className="h-3.5 w-3.5 text-cyan-300" />
          <h3 className="font-semibold text-white text-[13px]">Global Presence</h3> {/* Increased from text-xs */}
        </div>
        <div className="flex items-center gap-1 text-[12px] text-cyan-300 bg-cyan-500/10 px-1.5 py-0.5 rounded">
          <Wifi className="h-2 w-2" />
          <span>LIVE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-1.5">
        <div className="text-center p-1.5 rounded bg-white/5">
          <div className="text-[15px] font-bold text-white">24</div> {/* Increased from text-sm */}
          <div className="text-[11px] text-blue-100/60">Countries</div> {/* Increased from text-[10px] */}
        </div>
        <div className="text-center p-1.5 rounded bg-white/5">
          <div className="text-[15px] font-bold text-white">500+</div> {/* Increased from text-sm */}
          <div className="text-[11px] text-blue-100/60">Clients</div> {/* Increased from text-[10px] */}
        </div>
        <div className="text-center p-1.5 rounded bg-white/5">
          <div className="text-[15px] font-bold text-white">99.9%</div> {/* Increased from text-sm */}
          <div className="text-[11px] text-blue-100/60">Uptime</div> {/* Increased from text-[10px] */}
        </div>
        <div className="text-center p-1.5 rounded bg-gradient-to-br from-cyan-500/20 to-green-500/20 border border-cyan-500/30">
          <div className="flex flex-col items-center justify-center gap-0.5">
            <div className="flex items-center gap-1">
              <Clock className="h-2.5 w-2.5 text-green-400" />
              <div className="text-[11px] font-bold text-green-400"> {/* Increased from text-[10px] */}
                Local Time
              </div>
            </div>
            <div className="text-[13px] font-bold text-green-300 tracking-tight"> {/* Increased from text-xs */}
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
      className="relative overflow-hidden pt-6 pb-3" // Reduced padding
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4"> {/* Reduced gaps */}
          
          {/* Column 1: Brand & Global - Full width on mobile, then responsive */}
          <div className="md:col-span-2 lg:col-span-1 space-y-3"> {/* Reduced spacing */}
            {/* Compact Logo */}
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-gray-900 to-black border border-white/20 overflow-hidden">
                  <img 
                    src="./images/logo/bitafrica-logo.png" 
                    alt="BitAfrica AI Logo" 
                    className="h-9 w-9 object-contain p-0.5"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-cyan-400 font-bold text-xl tracking-tight">BA</div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div>
                <h2 className="text-[18px] font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent"> {/* Increased from text-lg */}
                  BitAfrica AI
                </h2>
                <p className="text-[12px] text-blue-100/60 mt-0.5">Pioneering Africa's AI Revolution</p> {/* Increased from text-[11px] */}
              </div>
            </div>
            
            <GlobalPresence />
          </div>
          
          {/* Columns 2 & 3: Services and Company - Side by side on mobile */}
          <div className="md:col-span-1">
            <h3 className="text-[15px] font-bold text-white mb-2 flex items-center gap-1.5"> {/* Increased from text-sm */}
              <Zap className="h-3.5 w-3.5 text-yellow-400" />
              Services
            </h3>
            <div className="space-y-1">
              {services.map((service) => (
                <a
                  key={service.name}
                  href="#"
                  className="group flex items-center gap-1.5 p-1 rounded hover:bg-white/5 transition-all duration-200"
                >
                  <div 
                    className="p-1 rounded transition-transform duration-200"
                    style={{ background: `${service.color}15` }}
                  >
                    <div style={{ color: service.color }}>
                      {service.icon}
                    </div>
                  </div>
                  <span className="text-blue-100/80 text-[12px] group-hover:text-white"> {/* Increased from text-[11px] */}
                    {service.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h3 className="text-[15px] font-bold text-white mb-2 flex items-center gap-1.5"> {/* Increased from text-sm */}
              <Briefcase className="h-3.5 w-3.5 text-green-400" />
              Company
            </h3>
            <div className="space-y-1">
              {companyLinks.map((link) => (
                <a
                  key={link.name}
                  href="#"
                  className="group flex items-center gap-1.5 p-1 rounded hover:bg-white/5 transition-all duration-200"
                >
                  <div className="p-1 rounded bg-white/5">
                    <div className="text-cyan-300">
                      {link.icon}
                    </div>
                  </div>
                  <span className="text-blue-100/80 text-[12px] group-hover:text-white"> {/* Increased from text-[11px] */}
                    {link.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 4: Newsletter & Contact - Full width on mobile */}
          <div className="md:col-span-2 lg:col-span-1 space-y-3">
            {/* Compact Newsletter */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg p-2.5 border border-white/10">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Bell className="h-3.5 w-3.5 text-cyan-300" />
                <h3 className="font-bold text-white text-[15px]">Stay Updated</h3> {/* Increased from text-sm */}
              </div>
              
              <form onSubmit={handleSubscribe} className="space-y-1.5">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  className="w-full px-2.5 py-1.5 text-[13px] rounded bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500" /* Increased from text-xs */
                />
                <button
                  type="submit"
                  className="w-full py-1.5 text-[13px] rounded bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center justify-center gap-1" /* Increased from text-xs */
                >
                  <span className="text-white font-semibold">Subscribe</span>
                  <Send className="h-2.5 w-2.5 text-white" />
                </button>
              </form>
              
              {subscribed && (
                <div className="mt-1.5 flex items-center justify-center gap-1 text-green-400 text-[11px]"> {/* Increased from text-[10px] */}
                  <Sparkles className="h-2.5 w-2.5" />
                  <span>Welcome aboard! 🚀</span>
                </div>
              )}
            </div>
            
            {/* Compact Contact */}
            <div>
              <h3 className="text-[15px] font-bold text-white mb-1.5 flex items-center gap-1.5"> {/* Increased from text-sm */}
                <MessageSquare className="h-3.5 w-3.5 text-pink-400" />
                Contact
              </h3>
              <div className="space-y-1.5">
                {contactInfo.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 p-1.5 rounded bg-white/5"
                  >
                    <div className="p-1 rounded bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                      <div className="text-cyan-300">
                        {contact.icon}
                      </div>
                    </div>
                    <span className="text-blue-100/80 text-[12px]"> {/* Increased from text-[11px] */}
                      {contact.text}
                    </span>
                  </div>
                ))}
                <div className="flex items-center gap-1.5 p-1.5 rounded bg-white/5">
                  <div className="p-1 rounded bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <MapPin className="h-3.5 w-3.5 text-cyan-300" />
                  </div>
                  <span className="text-blue-100/80 text-[12px]"> {/* Increased from text-[11px] */}
                  Nairobi
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Connect With Us - MOVED UP */}
        <div className="mb-4">
          <div className="flex flex-col items-center">
            <h3 className="text-[15px] font-bold text-white mb-2 text-center">Connect With Us</h3> {/* Increased from text-sm */}
            <div className="flex gap-1.5">
              {socialMedia.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="group relative p-2 rounded transition-all duration-200 hover:scale-105"
                  style={{ background: 'rgba(255, 255, 255, 0.05)' }}
                  onMouseEnter={() => setActiveHover(social.name)}
                  onMouseLeave={() => setActiveHover(null)}
                >
                  <div 
                    className="absolute inset-0 rounded opacity-0 group-hover:opacity-30 transition-opacity duration-200"
                    style={{ background: social.color, filter: 'blur(4px)' }}
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
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3" />
        
        {/* Compact Copyright Section - Made Unique */}
        <div className="text-center py-2">
          <div className="text-[12px] text-blue-100/60">
            <p className="font-bold px-3 py-1.5 rounded inline-block relative overflow-hidden group">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
              
              {/* Animated border effect */}
              <div className="absolute inset-0 rounded border border-transparent">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
              </div>
              
              {/* Text with gradient */}
              <span className="relative z-10 bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent font-extrabold tracking-wide">
                © 2025 BitAfrica AI. All rights reserved.
              </span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 blur-sm transition-all duration-500" />
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
            gap: 1rem;
          }
          
          /* First column spans full width */
          .md\\:col-span-2 {
            grid-column: span 2;
          }
          
          /* Adjust spacing for mobile */
          .h-12 {
            height: 3rem;
          }
          .w-12 {
            width: 3rem;
          }
          .h-9 {
            height: 2.25rem;
          }
          .w-9 {
            width: 2.25rem;
          }
          
          /* Adjust font sizes for mobile */
          .text-lg {
            font-size: 1rem;
          }
          
          .text-sm {
            font-size: 0.75rem;
          }
          
          .text-xs {
            font-size: 0.65rem;
          }
          
          .text-\\[13px\\] {
            font-size: 0.8125rem;
          }
          
          .text-\\[12px\\] {
            font-size: 0.75rem;
          }
          
          .text-\\[11px\\] {
            font-size: 0.6875rem;
          }
          
          .text-\\[10px\\] {
            font-size: 0.625rem;
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