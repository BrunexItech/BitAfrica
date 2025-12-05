import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Brain, Sparkles, Cpu, Globe, Shield, Code, Palette, Zap, Home, Briefcase, BookOpen, Users, Mail, FileText, Building, Server, Layers, GraduationCap } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const [openMobileItems, setOpenMobileItems] = useState({});
  const mobileMenuRef = useRef(null);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fix: Enable scrolling in mobile menu
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent body scrolling when menu is open
      document.body.style.overflow = 'hidden';
      // Allow scrolling within the mobile menu
      if (mobileMenuRef.current) {
        mobileMenuRef.current.style.overflowY = 'auto';
        mobileMenuRef.current.style.maxHeight = 'calc(100vh - 80px)';
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const toggleMobileItem = (itemName) => {
    setOpenMobileItems(prev => ({
      ...prev,
      [itemName]: !prev[itemName]
    }));
  };

  // Updated solutions array - removed Smart Cities and UI/UX Design
  const solutions = [
    { icon: <Brain className="h-5 w-5" />, name: "AI Analytics", desc: "Predictive insights for businesses", color: "from-blue-500 to-cyan-500", href: "/solutions/ai-analytics" },
    { icon: <Cpu className="h-5 w-5" />, name: "Automation", desc: "Streamline operations with AI", color: "from-purple-500 to-blue-500", href: "/solutions/automation" },
    { icon: <Shield className="h-5 w-5" />, name: "Cybersecurity", desc: "AI-powered threat detection", color: "from-cyan-500 to-teal-500", href: "/solutions/cybersecurity" },
    { icon: <Code className="h-5 w-5" />, name: "Dev Solutions", desc: "AI-driven development", color: "from-indigo-500 to-purple-500", href: "/solutions/dev-solutions" },
    { icon: <Server className="h-5 w-5" />, name: "Machine Learning", desc: "Custom ML models & deployment", color: "from-cyan-500 to-blue-500", href: "/solutions/machine-learning" },
    { icon: <Zap className="h-5 w-5" />, name: "Cloud AI", desc: "Scalable AI infrastructure", color: "from-blue-500 to-cyan-500", href: "/solutions/cloud-ai" },
  ];

  // Updated navigation items with NO SUBMENUS for Services, Industries, Company
  const navItems = [
    { 
      name: "Home", 
      href: "/", 
      icon: <Home className="h-4 w-4 mr-2" />
    },
    { 
      name: "Services", 
      href: "/services", 
      icon: <Layers className="h-4 w-4 mr-2" />
      // NO SUBMENU - removed dropdown
    },
    { 
      name: "Industries", 
      href: "/industries", 
      icon: <Building className="h-4 w-4 mr-2" />
      // NO SUBMENU - removed dropdown
    },
    { 
      name: "Academy", 
      href: "/academy", 
      icon: <GraduationCap className="h-4 w-4 mr-2" />
      // NO SUBMENU - removed dropdown
    },
    { 
      name: "Company", 
      href: "/company", 
      icon: <Users className="h-4 w-4 mr-2" />
      // NO SUBMENU - removed dropdown
    },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-[#111827] to-[#1f2937]/95 backdrop-blur-lg border-b border-blue-700/30 shadow-xl' 
        : 'bg-gradient-to-b from-[#111827] to-[#1f2937]/90 backdrop-blur-md border-b border-blue-700/20'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - EXACTLY AS BEFORE */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-lg border border-blue-500/30 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `linear-gradient(90deg, #0088ff22 1px, transparent 1px),
                                  linear-gradient(#0088ff22 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
                
                <div className="relative z-10">
                  <img 
                    src="./images/logo/bitafrica-logo.png" 
                    alt="BitAfrica AI Logo" 
                    className="h-10 w-10 object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-blue-400 font-bold text-xl tracking-tight">BA</div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="ml-1">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent tracking-tight">
                BitAfrica AI
              </h1>
              
              <div className="overflow-hidden h-5 mt-0.5">
                <p className="text-xs text-blue-400/80 font-medium tracking-wide whitespace-nowrap animate-marquee-fast">
                  Powered by AI • Transforming Africa 
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - PROFESSIONAL SPACING */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.href}
                  className="flex items-center px-3.5 py-2.5 text-blue-100/90 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 group whitespace-nowrap"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </div>
            ))}
            
            {/* Solutions Dropdown - PROFESSIONAL SPACING (KEEP THIS DROPDOWN) */}
            <div 
              className="relative group"
              onMouseEnter={() => setHoveredSolution(0)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <Link 
                to="/solutions"
                className="flex items-center px-4 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg group ml-2 whitespace-nowrap"
              >
                <Sparkles className="h-4 w-4 mr-2 animate-pulse" />
                Solutions
                <ChevronDown className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              {/* Mega Dropdown with 6 items (removed Smart Cities and UI/UX Design) */}
              <div className="absolute right-0 mt-2 w-[680px] bg-[#1f2937]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform -translate-y-4 group-hover:translate-y-0 overflow-hidden z-50">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {solutions.map((solution, index) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className={`flex items-center p-3 rounded-xl transition-all duration-300 group/item transform hover:scale-[1.02] ${
                          hoveredSolution === index 
                            ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 scale-[1.02]' 
                            : 'hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-cyan-500/5'
                        }`}
                        onMouseEnter={() => setHoveredSolution(index)}
                        style={{ 
                          transitionDelay: `${index * 30}ms`,
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <div className={`h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r ${solution.color} text-white shadow-lg group-hover/item:shadow-xl transition-all duration-300`}>
                          {solution.icon}
                        </div>
                        <div className="ml-3 flex-1 min-w-0">
                          <p className="font-bold text-white text-sm">{solution.name}</p>
                          <p className="text-xs text-blue-200/70 truncate">{solution.desc}</p>
                        </div>
                        <ChevronDown className="ml-2 h-4 w-4 text-cyan-300/50 transform -rotate-90 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                  
                  {/* Preview section - COMPACT */}
                  {hoveredSolution !== null && (
                    <div className="mt-4 p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-cyan-500/30 animate-fadeIn">
                      <div className="flex items-center">
                        <div className={`h-8 w-8 flex items-center justify-center rounded-lg bg-gradient-to-r ${solutions[hoveredSolution]?.color} text-white mr-3`}>
                          {solutions[hoveredSolution]?.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-white text-sm">Explore {solutions[hoveredSolution]?.name}</p>
                          <p className="text-xs text-blue-200/70 truncate">Click to see detailed capabilities and case studies</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Us Button - PROFESSIONAL SPACING */}
            <Link 
              to="/contact"
              className="flex items-center px-4 py-2.5 ml-2 text-white font-semibold rounded-xl border-2 border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400 hover:scale-105 transition-all duration-300 group whitespace-nowrap"
            >
              <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              Contact
            </Link>
          </nav>

          {/* Desktop CTA - OPTIMIZED */}
          <div className="hidden lg:flex items-center space-x-3 ml-2">
            <Link 
              to="/signin"
              className="relative px-4 py-2.5 text-blue-200 hover:text-white font-medium group overflow-hidden rounded-lg whitespace-nowrap"
            >
              <span className="relative z-10">Sign In</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </div>

          {/* Mobile Menu Button - EXACT HAMBURGER AS BEFORE */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2.5 rounded-lg bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              {/* EXACT HAMBURGER ICON FROM YOUR ORIGINAL CODE */}
              <div className="w-6 h-6 flex flex-col items-center justify-center space-y-1.5">
                <span className={`block h-0.5 w-5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-0.5 w-5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-5 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Professional Mobile Menu - SCROLLABLE & PROPER SPACING */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="lg:hidden border-t border-blue-700/30 py-2 animate-slideDown bg-[#1f2937]/95 backdrop-blur-xl overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 80px)' }}
          >
            <div className="space-y-0 px-2">
              {/* Home link */}
              <Link
                to="/"
                className="flex items-center w-full px-3 py-3 text-blue-100/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 rounded-lg font-medium transition-all duration-200 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="h-4 w-4 mr-2" />
                <span className="font-semibold">Home</span>
              </Link>
              
              {/* All main navigation items are now simple links (no dropdowns) */}
              {navItems.slice(1).map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center w-full px-3 py-3 text-blue-100/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 rounded-lg font-medium transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {item.icon}
                    <span className="font-semibold ml-2">{item.name}</span>
                  </div>
                </Link>
              ))}
              
              {/* Mobile Solutions Accordion - WITH 6 ITEMS (KEEP THIS DROPDOWN) */}
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleMobileItem('solutions')}
                  className="flex items-center justify-between w-full px-3 py-3 text-blue-100/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 rounded-lg font-medium transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    <span className="font-semibold">Solutions</span>
                  </div>
                  <ChevronDown className={`h-4 w-4 text-cyan-400/50 transition-transform duration-300 ${
                    openMobileItems['solutions'] ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openMobileItems['solutions'] && (
                  <div className="ml-6 mt-1.5 space-y-1.5 animate-slideDown">
                    <div className="grid grid-cols-2 gap-2">
                      {solutions.map((solution, index) => (
                        <Link
                          key={solution.name}
                          to={solution.href}
                          className="flex flex-col items-center p-2.5 bg-gradient-to-b from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20 hover:border-cyan-500/40 hover:scale-105 transition-all duration-200 group/solution"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className={`h-9 w-9 flex items-center justify-center rounded-lg bg-gradient-to-r ${solution.color} text-white shadow-lg group-hover/solution:shadow-xl mb-1.5 transition-all duration-300`}>
                            {solution.icon}
                          </div>
                          <span className="text-xs font-bold text-white text-center">{solution.name}</span>
                          <span className="text-[10px] text-blue-200/70 text-center mt-0.5">{solution.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Contact in Mobile Menu */}
              <div className="px-2 py-2">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full px-3 py-3 text-white font-semibold rounded-xl border-2 border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-200 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-2 px-2 pb-3 space-y-2 border-t border-blue-700/30">
                <Link 
                  to="/signin"
                  className="w-full text-center text-cyan-400 font-semibold py-3 border-2 border-cyan-400/50 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-200 active:scale-95 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="flex items-center justify-center">
                    Sign In
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @keyframes marquee-fast {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        
        .animate-marquee-fast {
          animation: marquee-fast 15s linear infinite;
          animation-delay: 0s;
          animation-iteration-count: infinite;
        }
        
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
            max-height: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            max-height: 1000px;
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
          overflow: hidden;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        /* Mobile responsiveness */
        @media (max-width: 640px) {
          .animate-marquee-fast {
            animation: marquee-fast 10s linear infinite;
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-fast,
          .animate-slideDown,
          .animate-fadeIn,
          .group:hover {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;