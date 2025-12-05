import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Brain, Cpu, Shield, Code, Server, Zap, Sparkles,
  Mail, Lock, Eye, EyeOff, Key, Fingerprint, Smartphone,
  ShieldCheck, Globe, Database, Cloud, Terminal, CpuIcon,
  ChevronRight, Github, Twitter, Linkedin, QrCode,
  SmartphoneNfc, Scan, UserCheck, Bot, Network, Cctv
} from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    authMethod: 'password',
    twoFactorCode: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [authStep, setAuthStep] = useState(1); // 1: Credentials, 2: 2FA, 3: Biometric
  const [activeAuthMethod, setActiveAuthMethod] = useState('password');
  const [particleCount, setParticleCount] = useState([]);

  // Initialize particles
  useEffect(() => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.5 + 0.2
    }));
    setParticleCount(particles);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication flow
    setTimeout(() => {
      setIsLoading(false);
      if (activeAuthMethod === 'password') {
        setShowTwoFactor(true);
        setAuthStep(2);
      } else {
        navigate('/dashboard');
      }
    }, 1200);
  };

  const handleTwoFactorSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setAuthStep(3);
      
      // Simulate biometric verification
      setTimeout(() => {
        navigate('/dashboard');
      }, 800);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const authMethods = [
    {
      id: 'password',
      name: 'Password',
      icon: <Key className="h-5 w-5" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Traditional password authentication'
    },
    {
      id: 'biometric',
      name: 'Biometric',
      icon: <Fingerprint className="h-5 w-5" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Face ID or fingerprint'
    },
    {
      id: 'mobile',
      name: 'Mobile App',
      icon: <SmartphoneNfc className="h-5 w-5" />,
      color: 'from-cyan-500 to-teal-500',
      description: 'Push notification approval'
    },
    {
      id: 'hardware',
      name: 'Hardware Key',
      icon: <ShieldCheck className="h-5 w-5" />,
      color: 'from-orange-500 to-red-500',
      description: 'Yubikey or security key'
    }
  ];

  const aiFeatures = [
    { icon: <Brain className="h-5 w-5" />, text: 'AI Threat Detection', color: 'text-cyan-400' },
    { icon: <Shield className="h-5 w-5" />, text: 'Behavioral Analysis', color: 'text-blue-400' },
    { icon: <Network className="h-5 w-5" />, text: 'Network Security', color: 'text-purple-400' },
    { icon: <Cctv className="h-5 w-5" />, text: 'Real-time Monitoring', color: 'text-emerald-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f172a] to-[#0a0a1a] overflow-hidden relative">
      {/* Animated Particle Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#1e1b4b] to-[#0a0a1a]"></div>
        
        {/* Nebula effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/20 via-purple-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 via-indigo-900/10 to-transparent"></div>
        
        {/* Animated particles */}
        {particleCount.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.id * 0.1}s`,
              animationDuration: `${3 + particle.speed}s`
            }}
          />
        ))}
        
        {/* Animated grid lines */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
        
        {/* Floating AI icons */}
        <div className="absolute top-1/4 left-1/4 animate-float-3d">
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm flex items-center justify-center">
            <Brain className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-3d" style={{ animationDelay: '1s' }}>
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm flex items-center justify-center">
            <Cpu className="h-7 w-7 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-1/3 left-1/3 animate-float-3d" style={{ animationDelay: '2s' }}>
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
            <Shield className="h-6 w-6 text-emerald-400" />
          </div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-6xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-2xl opacity-50"></div>
                <div className="relative h-20 w-20 rounded-2xl bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] border border-cyan-500/30 flex items-center justify-center shadow-2xl">
                  <img 
                    src="./images/logo/bitafrica-logo.png" 
                    alt="BitAfrica AI" 
                    className="h-14 w-14"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">BA</div>
                      `;
                    }}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  BitAfrica AI
                </h1>
                <p className="text-lg text-cyan-200/80 mt-2">Secure AI Platform Access</p>
              </div>
            </div>
            
            {/* AI Security Features */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {aiFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
                >
                  {feature.icon}
                  <span className={`text-sm font-medium ${feature.color}`}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Panel - Authentication Steps */}
            <div className="bg-gradient-to-br from-[#1e1b4b]/60 to-[#0f172a]/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 p-8 shadow-2xl">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-10">
                {[1, 2, 3].map((step) => (
                  <React.Fragment key={step}>
                    <div className="flex flex-col items-center">
                      <div className={`h-12 w-12 rounded-full flex items-center justify-center border-2 ${
                        authStep >= step
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent'
                          : 'border-cyan-500/30 bg-white/5'
                      } transition-all duration-500`}>
                        {authStep > step ? (
                          <Sparkles className="h-6 w-6 text-white" />
                        ) : (
                          <span className={`text-lg font-bold ${
                            authStep >= step ? 'text-white' : 'text-cyan-300/50'
                          }`}>{step}</span>
                        )}
                      </div>
                      <span className={`text-xs mt-2 font-medium ${
                        authStep >= step ? 'text-cyan-300' : 'text-cyan-300/50'
                      }`}>
                        {step === 1 ? 'Credentials' : step === 2 ? '2FA' : 'Biometric'}
                      </span>
                    </div>
                    {step < 3 && (
                      <div className={`flex-1 h-0.5 mx-4 ${
                        authStep > step ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-cyan-500/20'
                      } transition-all duration-500`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step 1: Credentials */}
              {authStep === 1 && (
                <div className="animate-slideIn">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6">
                    Select Authentication Method
                  </h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {authMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setActiveAuthMethod(method.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          activeAuthMethod === method.id
                            ? 'bg-gradient-to-r from-white/10 to-white/5 border-cyan-500/50 scale-[1.02]'
                            : 'border-white/10 bg-white/5 hover:border-cyan-500/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                            {method.icon}
                          </div>
                          <div className="text-left">
                            <p className="font-semibold text-white">{method.name}</p>
                            <p className="text-xs text-cyan-300/70">{method.description}</p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Login Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-cyan-300">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="admin@bitafrica.ai"
                        required
                      />
                    </div>

                    {activeAuthMethod === 'password' && (
                      <div className="space-y-2">
                        <label className="flex items-center text-sm font-medium text-cyan-300">
                          <Lock className="h-4 w-4 mr-2" />
                          Password
                        </label>
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300 pr-12"
                            placeholder="••••••••••"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-cyan-500/10 rounded-lg transition-colors"
                          >
                            {showPassword ? (
                              <EyeOff className="h-5 w-5 text-cyan-400" />
                            ) : (
                              <Eye className="h-5 w-5 text-cyan-400" />
                            )}
                          </button>
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`relative w-full py-4 px-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden ${
                        isLoading ? 'cursor-wait' : ''
                      }`}
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        {isLoading ? (
                          <>
                            <div className="h-6 w-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                            Authenticating...
                          </>
                        ) : (
                          <>
                            <Key className="h-5 w-5 mr-3" />
                            Continue to {activeAuthMethod === 'password' ? 'Two-Factor' : 'Dashboard'}
                            <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                          </>
                        )}
                      </div>
                      
                      {/* Animated gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-purple-500/0 animate-shine-slow"></div>
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Two-Factor Authentication */}
              {authStep === 2 && (
                <div className="animate-slideIn">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                    Two-Factor Verification
                  </h2>
                  
                  <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                    <div className="flex items-center space-x-4">
                      <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        <QrCode className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">Scan QR Code</p>
                        <p className="text-sm text-cyan-300/70">Open your authenticator app to scan</p>
                      </div>
                    </div>
                    
                    {/* QR Code Placeholder */}
                    <div className="mt-6 flex justify-center">
                      <div className="h-48 w-48 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-dashed border-cyan-500/30 flex items-center justify-center">
                        <div className="text-center">
                          <Scan className="h-12 w-12 text-cyan-400/50 mx-auto mb-3" />
                          <p className="text-sm text-cyan-300/70">QR Code Display</p>
                          <p className="text-xs text-cyan-300/50 mt-1">Use Google/Microsoft Authenticator</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleTwoFactorSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-purple-300">
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        6-digit Code
                      </label>
                      <input
                        type="text"
                        name="twoFactorCode"
                        value={formData.twoFactorCode}
                        onChange={handleChange}
                        maxLength="6"
                        className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white text-center text-2xl tracking-widest placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="000000"
                        required
                      />
                      <p className="text-xs text-cyan-300/70 text-center mt-2">
                        Enter the 6-digit code from your authenticator app
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setAuthStep(1)}
                        className="py-3 px-4 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isLoading ? 'Verifying...' : 'Verify & Continue'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Biometric Verification */}
              {authStep === 3 && (
                <div className="animate-slideIn text-center py-12">
                  <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-4 border-emerald-500/30 flex items-center justify-center mb-8 animate-pulse-glow">
                    <Fingerprint className="h-20 w-20 text-emerald-400 animate-spin-slow" />
                  </div>
                  
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                    Biometric Scan Required
                  </h2>
                  <p className="text-cyan-300/80 mb-8">
                    Please use your device's biometric sensor to continue
                  </p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className="h-16 w-16 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <Fingerprint className="h-8 w-8 text-emerald-400" />
                    </button>
                    <button className="h-16 w-16 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 flex items-center justify-center hover:scale-110 transition-all duration-300">
                      <UserCheck className="h-8 w-8 text-blue-400" />
                    </button>
                  </div>
                </div>
              )}

              {/* Social Login */}
              <div className="mt-8 pt-8 border-t border-cyan-500/20">
                <p className="text-center text-cyan-300/70 mb-4">Or continue with</p>
                <div className="grid grid-cols-3 gap-3">
                  <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 group">
                    <Github className="h-5 w-5 text-white/70 group-hover:text-blue-300 mx-auto" />
                  </button>
                  <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 group">
                    <Twitter className="h-5 w-5 text-white/70 group-hover:text-cyan-300 mx-auto" />
                  </button>
                  <button className="py-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-300 group">
                    <Linkedin className="h-5 w-5 text-white/70 group-hover:text-blue-300 mx-auto" />
                  </button>
                </div>
              </div>

              {/* Sign In Link */}
              <div className="mt-8 text-center">
                <p className="text-cyan-300/70">
                  Don't have an account?{' '}
                  <Link 
                    to="/signin" 
                    className="font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group inline-flex items-center"
                  >
                    Sign In here
                    <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </p>
              </div>
            </div>

            {/* Right Panel - Stats & Info */}
            <div className="space-y-8">
              {/* Security Stats */}
              <div className="bg-gradient-to-br from-[#1e1b4b]/60 to-[#0f172a]/80 backdrop-blur-2xl rounded-3xl border border-blue-500/20 p-8 shadow-2xl">
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-6">
                  Security Dashboard
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Shield className="h-5 w-5" />, label: 'Threats Blocked', value: '12.4K', color: 'from-emerald-500 to-teal-500' },
                    { icon: <Globe className="h-5 w-5" />, label: 'Active Sessions', value: '342', color: 'from-blue-500 to-cyan-500' },
                    { icon: <Database className="h-5 w-5" />, label: 'Data Encrypted', value: '4.2TB', color: 'from-purple-500 to-pink-500' },
                    { icon: <Cloud className="h-5 w-5" />, label: 'Uptime', value: '99.99%', color: 'from-cyan-500 to-blue-500' }
                  ].map((stat, index) => (
                    <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                          {stat.icon}
                        </div>
                        <div>
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-xs text-cyan-300/70">{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gradient-to-br from-[#1e1b4b]/60 to-[#0f172a]/80 backdrop-blur-2xl rounded-3xl border border-purple-500/20 p-8 shadow-2xl">
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                  Recent Security Events
                </h3>
                
                <div className="space-y-4">
                  {[
                    { time: '2 mins ago', event: 'New login from Lagos, NG', status: 'safe', icon: '🟢' },
                    { time: '15 mins ago', event: 'API request from New York, US', status: 'safe', icon: '🟢' },
                    { time: '1 hour ago', event: 'Failed login attempt blocked', status: 'warning', icon: '🟡' },
                    { time: '3 hours ago', event: 'Security policy updated', status: 'info', icon: '🔵' }
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center space-x-3">
                        <span className="text-xl">{activity.icon}</span>
                        <div>
                          <p className="text-sm font-medium text-white">{activity.event}</p>
                          <p className="text-xs text-cyan-300/70">{activity.time}</p>
                        </div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-medium ${
                        activity.status === 'safe' ? 'bg-emerald-500/20 text-emerald-300' :
                        activity.status === 'warning' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-blue-500/20 text-blue-300'
                      }`}>
                        {activity.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#1e1b4b]/60 to-[#0f172a]/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 p-8 shadow-2xl">
                <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6">
                  Quick Actions
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/forgot-password"
                    className="p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <Key className="h-5 w-5 text-cyan-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-white">Forgot Password</p>
                  </Link>
                  <button className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 group">
                    <Terminal className="h-5 w-5 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-white">API Access</p>
                  </button>
                  <button className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-teal-500/50 transition-all duration-300 group">
                    <Bot className="h-5 w-5 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-white">AI Assistant</p>
                  </button>
                  <button className="p-4 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 hover:border-red-500/50 transition-all duration-300 group">
                    <CpuIcon className="h-5 w-5 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-sm font-medium text-white">System Status</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotateX(0) rotateY(0); 
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotateX(5deg) rotateY(5deg); 
          }
          50% { 
            transform: translateY(-10px) translateX(-10px) rotateX(-5deg) rotateY(-5deg); 
          }
          75% { 
            transform: translateY(-30px) translateX(5px) rotateX(3deg) rotateY(3deg); 
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes shine-slow {
          0% { background-position: -100% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(34, 211, 238, 0.3);
          }
          50% { 
            box-shadow: 0 0 40px rgba(34, 211, 238, 0.6);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-3d {
          animation: float-3d 6s ease-in-out infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        .animate-shine-slow {
          background-size: 200% 100%;
          animation: shine-slow 3s linear infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animate-grid-move {
          animation: gridMove 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Login;