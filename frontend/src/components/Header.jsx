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
      document.body.style.overflow = 'hidden';
      if (mobileMenuRef.current) {
        mobileMenuRef.current.style.overflowY = 'auto';
        mobileMenuRef.current.style.maxHeight = 'calc(100vh - 70px)';
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

  const solutions = [
    { icon: <Brain className="h-4 w-4" />, name: "AI Analytics", desc: "Predictive insights", color: "from-blue-500 to-cyan-500", href: "/solutions/ai-analytics" },
    { icon: <Cpu className="h-4 w-4" />, name: "Automation", desc: "Streamline operations", color: "from-purple-500 to-blue-500", href: "/solutions/automation" },
    { icon: <Shield className="h-4 w-4" />, name: "Cybersecurity", desc: "Threat detection", color: "from-cyan-500 to-teal-500", href: "/solutions/cybersecurity" },
    { icon: <Code className="h-4 w-4" />, name: "Dev Solutions", desc: "AI development", color: "from-indigo-500 to-purple-500", href: "/solutions/dev-solutions" },
    { icon: <Server className="h-4 w-4" />, name: "Machine Learning", desc: "ML models", color: "from-cyan-500 to-blue-500", href: "/solutions/machine-learning" },
    { icon: <Zap className="h-4 w-4" />, name: "Cloud AI", desc: "Scalable AI", color: "from-blue-500 to-cyan-500", href: "/solutions/cloud-ai" },
  ];

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Services", href: "/services", icon: <Layers className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Industries", href: "/industries", icon: <Building className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Academy", href: "/academy", icon: <GraduationCap className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Company", href: "/company", icon: <Users className="h-3.5 w-3.5 mr-1.5" /> },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-[#111827] to-[#1f2937]/95 backdrop-blur-lg border-b border-blue-700/30 shadow-lg' 
        : 'bg-gradient-to-b from-[#111827] to-[#1f2937]/90 backdrop-blur-md border-b border-blue-700/20'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - UNCHANGED */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>
              
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-lg border border-blue-500/30 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `linear-gradient(90deg, #0088ff22 1px, transparent 1px),
                                  linear-gradient(#0088ff22 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}></div>
                
                <div className="relative z-10">
                  <img 
                    src="./images/logo/bitafrica-logo.png" 
                    alt="BitAfrica AI Logo" 
                    className="h-8 w-8 object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-blue-400 font-bold text-lg tracking-tight">BA</div>
                      `;
                    }}
                  />
                </div>
              </div>
            </div>
            
            <div className="ml-1">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent tracking-tight">
                BitAfrica AI
              </h1>
              
              <div className="overflow-hidden h-4 mt-0.5">
                <p className="text-xs text-blue-400/80 font-medium tracking-wide whitespace-nowrap animate-marquee-fast">
                  Powered by AI • Transforming Africa 
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - REDUCED SPACING */}
          <nav className="hidden lg:flex items-center space-x-0">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.href}
                  className="flex items-center px-2.5 py-2 text-sm text-blue-100/90 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 group whitespace-nowrap"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </div>
            ))}
            
            {/* Solutions Dropdown - COMPACT */}
            <div 
              className="relative group ml-1"
              onMouseEnter={() => setHoveredSolution(0)}
              onMouseLeave={() => setHoveredSolution(null)}
            >
              <Link 
                to="/solutions"
                className="flex items-center px-3 py-2 text-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 shadow-md group whitespace-nowrap"
              >
                <Sparkles className="h-3.5 w-3.5 mr-1.5 animate-pulse" />
                Solutions
                <ChevronDown className="ml-1 h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
              </Link>
              
              <div className="absolute right-0 mt-1 w-[600px] bg-[#1f2937]/95 backdrop-blur-xl rounded-xl shadow-xl border border-blue-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
                <div className="p-3">
                  <div className="grid grid-cols-2 gap-2">
                    {solutions.map((solution, index) => (
                      <Link
                        key={solution.name}
                        to={solution.href}
                        className={`flex items-center p-2 rounded-lg transition-all duration-200 group/item ${
                          hoveredSolution === index 
                            ? 'bg-gradient-to-r from-blue-500/10 to-cyan-500/10 scale-[1.02]' 
                            : 'hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-cyan-500/5'
                        }`}
                        onMouseEnter={() => setHoveredSolution(index)}
                      >
                        <div className={`h-8 w-8 flex items-center justify-center rounded-md bg-gradient-to-r ${solution.color} text-white shadow-md group-hover/item:shadow-lg transition-all duration-300`}>
                          {solution.icon}
                        </div>
                        <div className="ml-2 flex-1 min-w-0">
                          <p className="font-bold text-white text-xs">{solution.name}</p>
                          <p className="text-xs text-blue-200/70 truncate">{solution.desc}</p>
                        </div>
                        <ChevronDown className="ml-1 h-3 w-3 text-cyan-300/50 transform -rotate-90 opacity-0 group-hover/item:opacity-100 transition-opacity flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                  
                  {hoveredSolution !== null && (
                    <div className="mt-2 p-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-cyan-500/30 animate-fadeIn">
                      <div className="flex items-center">
                        <div className={`h-6 w-6 flex items-center justify-center rounded-md bg-gradient-to-r ${solutions[hoveredSolution]?.color} text-white mr-2`}>
                          {solutions[hoveredSolution]?.icon}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-white text-xs">Explore {solutions[hoveredSolution]?.name}</p>
                          <p className="text-xs text-blue-200/70 truncate">Click for details</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Contact Button - COMPACT */}
            <Link 
              to="/contact"
              className="flex items-center px-3 py-2 ml-1 text-sm text-white font-semibold rounded-lg border border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 group whitespace-nowrap"
            >
              <Mail className="h-3.5 w-3.5 mr-1.5 group-hover:scale-110 transition-transform" />
              Contact
            </Link>

            {/* Sign Up Button - COMPACT */}
            <Link 
              to="/signup"
              className="flex items-center ml-1 px-3 py-2 text-sm text-blue-200 hover:text-white font-medium group overflow-hidden rounded-lg whitespace-nowrap"
            >
              <span className="relative z-10">Sign Up</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </Link>
          </nav>

          {/* Mobile Menu Button - COMPACT */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative p-2 rounded-lg bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              aria-label="Toggle menu"
            >
              <div className="w-5 h-5 flex flex-col items-center justify-center space-y-1">
                <span className={`block h-0.5 w-4 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                <span className={`block h-0.5 w-4 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-4 bg-cyan-400 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - COMPACT */}
        {isMenuOpen && (
          <div 
            ref={mobileMenuRef}
            className="lg:hidden border-t border-blue-700/30 py-1 animate-slideDown bg-[#1f2937]/95 backdrop-blur-xl overflow-y-auto"
            style={{ maxHeight: 'calc(100vh - 64px)' }}
          >
            <div className="space-y-0 px-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center w-full px-2 py-2.5 text-sm text-blue-100/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 rounded-lg font-medium transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="font-semibold ml-1.5">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Solutions */}
              <div className="overflow-hidden">
                <button
                  onClick={() => toggleMobileItem('solutions')}
                  className="flex items-center justify-between w-full px-2 py-2.5 text-sm text-blue-100/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 rounded-lg font-medium transition-all duration-200 group"
                >
                  <div className="flex items-center">
                    <Sparkles className="h-3.5 w-3.5 mr-1.5" />
                    <span className="font-semibold">Solutions</span>
                  </div>
                  <ChevronDown className={`h-3.5 w-3.5 text-cyan-400/50 transition-transform duration-300 ${
                    openMobileItems['solutions'] ? 'rotate-180' : ''
                  }`} />
                </button>
                
                {openMobileItems['solutions'] && (
                  <div className="ml-4 mt-1 space-y-1 animate-slideDown">
                    <div className="grid grid-cols-2 gap-1.5">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          to={solution.href}
                          className="flex flex-col items-center p-2 bg-gradient-to-b from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20 hover:border-cyan-500/40 hover:scale-[1.02] transition-all duration-200 group/solution"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className={`h-7 w-7 flex items-center justify-center rounded-md bg-gradient-to-r ${solution.color} text-white shadow-md group-hover/solution:shadow-lg mb-1 transition-all duration-300`}>
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
              
              {/* Contact Mobile */}
              <div className="px-1 py-1">
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full px-2 py-2.5 text-sm text-white font-semibold rounded-lg border border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-200 active:scale-95"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Mail className="h-3.5 w-3.5 mr-1.5" />
                  Contact
                </Link>
              </div>

              {/* Mobile CTA */}
              <div className="pt-1 px-1 pb-2 space-y-1 border-t border-blue-700/30">
                <Link 
                  to="/signup"
                  className="w-full text-center text-sm text-cyan-400 font-semibold py-2.5 border border-cyan-400/50 rounded-lg hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 transition-all duration-200 active:scale-95 block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
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
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-marquee-fast {
            animation: marquee-fast 10s linear infinite;
          }
        }
        
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