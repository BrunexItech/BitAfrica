import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, ChevronDown, Brain, Sparkles, Cpu, Shield, Code, Server, Zap, Home, Layers, Building, GraduationCap, Users, Mail, LogOut, Rocket } from 'lucide-react';
import authService from '../services/authService';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileItems, setOpenMobileItems] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();

  // Check authentication on mount and when storage changes
  useEffect(() => {
    const checkAuth = () => {
      const loggedIn = authService.isAuthenticated();
      setIsLoggedIn(loggedIn);
      if (loggedIn) {
        const userData = authService.getCurrentUser();
        setUser(userData);
      } else {
        setUser(null);
      }
    };

    checkAuth();
    
    // Listen for storage changes (e.g., login/logout from other tabs)
    const handleStorageChange = () => {
      checkAuth();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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

  // Logout function
  const handleLogout = async () => {
    try {
      await authService.logout();
      console.log('Logout successful');
    } catch (error) {
      console.log('Logout API failed, clearing local storage anyway:', error.message);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    } finally {
      setIsLoggedIn(false);
      setUser(null);
      setIsMenuOpen(false);
      
      window.dispatchEvent(new Event('storage'));
      navigate('/');
      window.location.reload();
    }
  };

  const navItems = [
    { name: "Home", href: "/", icon: <Home className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Services", href: "/services", icon: <Layers className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Industries", href: "/industries", icon: <Building className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Academy", href: "/academy", icon: <GraduationCap className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Company", href: "/company", icon: <Users className="h-3.5 w-3.5 mr-1.5" /> },
    { name: "Solutions", href: "/solutions" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-gradient-to-b from-[#111827] to-[#1f2937]/95 backdrop-blur-lg border-b border-blue-700/30 shadow-lg' 
        : 'bg-gradient-to-b from-[#111827] to-[#1f2937]/90 backdrop-blur-md border-b border-blue-700/20'
    }`}>
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-0">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link 
                  to={item.href}
                  className="flex items-center px-2.5 py-2 text-xs text-blue-100/90 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 group whitespace-nowrap"
                >
                  {item.icon && item.icon}
                  {item.name}
                </Link>
              </div>
            ))}

            {/* Conditional rendering based on login status */}
            {isLoggedIn ? (
              <>
                {/* Dashboard Link for logged-in users */}
                <Link 
                  to="/dashboard"
                  className="flex items-center ml-1 px-3 py-2 text-xs text-cyan-300 font-semibold rounded-lg border border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 group whitespace-nowrap"
                >
                  <Sparkles className="h-3 w-3 mr-1.5 group-hover:scale-110 transition-transform" />
                  Dashboard
                </Link>

                {/* Logout Button */}
                <button
                  onClick={handleLogout}
                  className="flex items-center ml-1 px-3 py-2 text-xs text-white font-semibold rounded-lg bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 hover:border-red-400 hover:bg-gradient-to-r hover:from-red-500/30 hover:to-pink-500/30 hover:scale-[1.02] transition-all duration-300 group whitespace-nowrap cursor-pointer"
                >
                  <LogOut className="h-3 w-3 mr-1.5 group-hover:scale-110 transition-transform" />
                  Logout
                </button>
              </>
            ) : (
              <>
                {/* Contact Button with space */}
                <Link 
                  to="/contact"
                  className="flex items-center ml-2 px-3 py-2 text-xs text-white font-semibold rounded-lg border border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 group whitespace-nowrap"
                >
                  <Mail className="h-3 w-3 mr-1.5 group-hover:scale-110 transition-transform" />
                  Contact
                </Link>

                {/* Get Started Button - Prominent CTA with Rocket icon */}
                <Link 
                  to="/signup"
                  className="flex items-center ml-2 px-3 py-2 text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all duration-300 shadow-md group whitespace-nowrap"
                >
                  <Rocket className="h-3 w-3 mr-1.5 group-hover:scale-110 transition-transform" />
                  Get Started
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            {isLoggedIn && (
              <div className="mr-2 text-xs text-cyan-300 font-medium">
                Account
              </div>
            )}
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

        {/* Mobile Menu */}
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
                  className="flex items-center w-full px-2 py-2.5 text-xs text-blue-100/90 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 rounded-lg font-medium transition-all duration-200 group"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && item.icon}
                  <span className="font-semibold ml-1.5">{item.name}</span>
                </Link>
              ))}

              {/* Conditional Mobile Menu Items based on login status */}
              {isLoggedIn ? (
                <>
                  {/* Dashboard for logged-in mobile users */}
                  <Link
                    to="/dashboard"
                    className="flex items-center w-full px-2 py-2.5 text-xs text-cyan-300 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-blue-500/10 rounded-lg transition-all duration-200 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Sparkles className="h-3 w-3 mr-1.5" />
                    <span>Dashboard</span>
                  </Link>

                  {/* Logout for mobile */}
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center w-full px-2 py-2.5 text-xs text-red-300 font-semibold hover:text-white hover:bg-gradient-to-r hover:from-red-500/10 hover:to-pink-500/10 rounded-lg transition-all duration-200 group text-left cursor-pointer"
                  >
                    <LogOut className="h-3 w-3 mr-1.5" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  {/* Contact for non-logged-in mobile users */}
                  <div className="px-1 py-1">
                    <Link
                      to="/contact"
                      className="flex items-center justify-center w-full px-2 py-2.5 text-xs text-white font-semibold rounded-lg border border-cyan-400/50 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-200 active:scale-95"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Mail className="h-3 w-3 mr-1.5" />
                      Contact
                    </Link>
                  </div>

                  {/* Get Started for non-logged-in mobile users */}
                  <div className="pt-1 px-1 pb-2 space-y-1 border-t border-blue-700/30">
                    <Link 
                      to="/signup"
                      className="w-full text-center text-xs bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-2.5 rounded-lg hover:shadow-lg transition-all duration-200 active:scale-95 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              )}
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
        
        @media (max-width: 640px) {
          .animate-marquee-fast {
            animation: marquee-fast 10s linear infinite;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee-fast,
          .animate-slideDown,
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