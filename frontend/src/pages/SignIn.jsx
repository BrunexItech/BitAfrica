import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, EyeOff, Mail, Lock, Brain, Sparkles, Zap, Cpu, 
  Shield, Globe, Code, Server, ChevronRight, Github, 
  Twitter, Linkedin, User, Smartphone, Key, Users, Building
} from 'lucide-react';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const floatingIcons = [
    { icon: <Brain className="h-6 w-6" />, color: "from-blue-500 to-cyan-500", top: "10%", left: "5%", delay: "0s" },
    { icon: <Cpu className="h-5 w-5" />, color: "from-purple-500 to-blue-500", top: "15%", left: "85%", delay: "0.5s" },
    { icon: <Shield className="h-5 w-5" />, color: "from-cyan-500 to-teal-500", top: "30%", left: "90%", delay: "1s" },
    { icon: <Globe className="h-5 w-5" />, color: "from-blue-500 to-indigo-500", top: "45%", left: "8%", delay: "1.5s" },
    { icon: <Code className="h-5 w-5" />, color: "from-indigo-500 to-purple-500", top: "60%", left: "92%", delay: "2s" },
    { icon: <Server className="h-5 w-5" />, color: "from-cyan-500 to-blue-500", top: "75%", left: "4%", delay: "2.5s" },
    { icon: <Zap className="h-5 w-5" />, color: "from-blue-500 to-cyan-500", top: "85%", left: "88%", delay: "3s" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f2e] via-[#111827] to-[#0a0f2e] overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
        
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(90deg, #0088ff22 1px, transparent 1px),
                          linear-gradient(#0088ff22 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'pulse-glow 4s ease-in-out infinite'
        }}></div>
        
        {/* Floating tech icons */}
        {floatingIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-r ${icon.color} animate-float`}
            style={{
              top: icon.top,
              left: icon.left,
              animationDelay: icon.delay,
              filter: 'blur(0.5px)'
            }}
          >
            <div className="h-8 w-8 flex items-center justify-center text-white">
              {icon.icon}
            </div>
          </div>
        ))}
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse-glow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block">
              <div className="relative group">
                <div className="absolute -inset-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>
                <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#1f2937] to-[#111827] shadow-2xl border border-blue-500/30 group-hover:shadow-cyan-500/20 group-hover:scale-105 transition-all duration-300 mx-auto">
                  <img 
                    src="./images/logo/bitafrica-logo.png" 
                    alt="BitAfrica AI Logo" 
                    className="h-12 w-12 object-contain p-1"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-cyan-400 font-bold text-2xl">BA</div>
                      `;
                    }}
                  />
                </div>
              </div>
            </Link>
            
            <div className="mt-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift">
                Welcome Back
              </h2>
              <p className="mt-2 text-blue-200/70">
                Sign in to your BitAfrica AI account
              </p>
            </div>
          </div>

          {/* Success Message */}
          {formSubmitted && (
            <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl animate-fadeIn">
              <div className="flex items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white mr-3">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-white">Welcome back!</p>
                  <p className="text-sm text-emerald-200/80">Redirecting to your dashboard...</p>
                </div>
              </div>
            </div>
          )}

          {/* Main Form Card */}
          <div className="bg-gradient-to-br from-[#1a2036]/80 to-[#0f172a]/90 backdrop-blur-2xl rounded-2xl shadow-2xl border border-cyan-500/20 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-cyan-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Address
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="relative w-full px-4 py-3 bg-[#0f172a]/60 border border-cyan-500/30 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your work email"
                    required
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-cyan-300">
                  <Lock className="h-4 w-4 mr-2" />
                  Password
                </label>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="relative w-full px-4 py-3 bg-[#0f172a]/60 border border-cyan-500/30 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 pr-12"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1.5 hover:bg-cyan-500/10 rounded-lg transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-cyan-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-cyan-400" />
                    )}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer group">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 rounded border-cyan-500/50 bg-[#0f172a]/60 text-cyan-500 focus:ring-cyan-500/50 focus:ring-offset-[#0f172a]"
                    />
                    <span className="ml-2 text-sm text-blue-200/70 group-hover:text-cyan-300 transition-colors">
                      Remember me
                    </span>
                  </label>
                  <button
                    type="button"
                    className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`relative w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden ${
                  isLoading ? 'cursor-wait' : ''
                }`}
              >
                <div className="relative z-10 flex items-center justify-center">
                  {isLoading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                      Authenticating...
                    </>
                  ) : (
                    <>
                      <Key className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                      Sign In to Dashboard
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
                
                {/* Animated shine effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-0 -inset-x-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shine"></div>
                </div>
              </button>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-cyan-500/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-3 bg-[#1a2036] text-blue-200/50">
                    Or continue with
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-3 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 bg-[#0f172a]/60 border border-blue-500/20 rounded-xl text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300 group"
                >
                  <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 bg-[#0f172a]/60 border border-blue-500/20 rounded-xl text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300 group"
                >
                  <Twitter className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2.5 bg-[#0f172a]/60 border border-blue-500/20 rounded-xl text-blue-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-300 group"
                >
                  <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </form>

            {/* Login Link */}
            <div className="mt-8 pt-6 border-t border-cyan-500/20">
              <div className="text-center">
                <p className="text-blue-200/70">
                  Already have an account?{' '}
                  <Link 
                    to="/login" 
                    className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group inline-flex items-center"
                  >
                    Login here
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* Additional Options */}
          <div className="mt-6 text-center">
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/signup/enterprise"
                className="block py-2.5 px-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl text-blue-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center">
                  <Building className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Enterprise Sign In
                </div>
              </Link>
              <Link
                to="/signup/partner"
                className="block py-2.5 px-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl text-purple-300 hover:border-blue-500/50 hover:text-blue-300 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center">
                  <Users className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  Partner Portal
                </div>
              </Link>
            </div>
          </div>

          {/* Security Badge */}
          <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl">
            <div className="flex items-center">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mr-3">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Enterprise-grade Security</p>
                <p className="text-xs text-blue-200/70">Your data is protected with 256-bit encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f2e] to-transparent"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 1.5s ease-in-out;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
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
      `}</style>
    </div>
  );
};

export default SignIn;