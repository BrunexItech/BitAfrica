import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Shield, Lock, Key, Mail, Smartphone, Fingerprint,
  Brain, Cpu, Server, Database, Cloud, Network,
  Sparkles, Zap, CheckCircle, AlertCircle, Clock,
  ChevronRight, ArrowLeft, RefreshCw, ShieldCheck,
  Eye, EyeOff, Terminal, QrCode, Scan, UserCheck,
  SmartphoneNfc, Globe, Cctv, Bot, CpuIcon,
  Send, RotateCcw, ShieldOff, ShieldHalf, ShieldPlus
} from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: Email, 2: Verification, 3: Reset, 4: Success
  const [recoveryMethod, setRecoveryMethod] = useState('email');
  const [countdown, setCountdown] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [securityLevel, setSecurityLevel] = useState(0);
  const [aiAnalysis, setAiAnalysis] = useState(null);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [countdown]);

  // AI password strength analysis
  useEffect(() => {
    if (formData.newPassword) {
      setIsLoading(true);
      setTimeout(() => {
        const strength = calculatePasswordStrength(formData.newPassword);
        setSecurityLevel(strength.score);
        setAiAnalysis(strength.analysis);
        setIsLoading(false);
      }, 800);
    }
  }, [formData.newPassword]);

  const calculatePasswordStrength = (password) => {
    let score = 0;
    const analysis = [];
    
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[a-z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    
    if (score <= 2) {
      analysis.push({ text: 'Weak - Easy to breach', color: 'text-red-400', icon: '🔴' });
    } else if (score <= 4) {
      analysis.push({ text: 'Moderate - Could be stronger', color: 'text-yellow-400', icon: '🟡' });
    } else {
      analysis.push({ text: 'Strong - AI recommended', color: 'text-emerald-400', icon: '🟢' });
    }
    
    if (!/[^A-Za-z0-9]/.test(password)) {
      analysis.push({ text: 'Add special characters', color: 'text-cyan-300', icon: '💡' });
    }
    
    if (password.length < 12) {
      analysis.push({ text: 'Use 12+ characters', color: 'text-blue-300', icon: '📏' });
    }
    
    return { score, analysis };
  };

  const recoveryMethods = [
    {
      id: 'email',
      name: 'Email Recovery',
      icon: <Mail className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Reset link sent to registered email',
      time: '2-5 minutes'
    },
    {
      id: 'sms',
      name: 'SMS Verification',
      icon: <Smartphone className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Code sent to mobile number',
      time: 'Instant'
    },
    {
      id: 'authenticator',
      name: 'Authenticator App',
      icon: <QrCode className="h-6 w-6" />,
      color: 'from-cyan-500 to-teal-500',
      description: 'Use Google/Microsoft Authenticator',
      time: '1-2 minutes'
    },
    {
      id: 'security',
      name: 'Security Questions',
      icon: <ShieldCheck className="h-6 w-6" />,
      color: 'from-emerald-500 to-green-500',
      description: 'Answer preset security questions',
      time: '3-5 minutes'
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      if (step === 1) {
        setStep(2);
        setCountdown(120); // 2 minutes countdown
      } else if (step === 2) {
        setStep(3);
      } else if (step === 3) {
        setStep(4);
      }
    }, 1500);
  };

  const handleResendCode = () => {
    setCountdown(120);
    // Trigger resend API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const securitySteps = [
    { icon: <Mail className="h-5 w-5" />, label: 'Verify Identity', status: step >= 1 ? 'complete' : 'pending' },
    { icon: <Shield className="h-5 w-5" />, label: 'Security Check', status: step >= 2 ? 'complete' : 'pending' },
    { icon: <Key className="h-5 w-5" />, label: 'Reset Password', status: step >= 3 ? 'complete' : 'pending' },
    { icon: <CheckCircle className="h-5 w-5" />, label: 'Confirmed', status: step >= 4 ? 'complete' : 'pending' }
  ];

  const aiSecurityFeatures = [
    { icon: <Brain className="h-4 w-4" />, text: 'AI Threat Detection Active', color: 'text-cyan-400' },
    { icon: <Shield className="h-4 w-4" />, text: '256-bit Encryption', color: 'text-blue-400' },
    { icon: <Cctv className="h-4 w-4" />, text: 'Real-time Monitoring', color: 'text-purple-400' },
    { icon: <Network className="h-4 w-4" />, text: 'Global Security Network', color: 'text-emerald-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1b3a] to-[#0a0a1a] overflow-hidden relative">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Cyber Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(56, 189, 248, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%),
            linear-gradient(90deg, rgba(56, 189, 248, 0.05) 1px, transparent 1px),
            linear-gradient(rgba(56, 189, 248, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100% 100%, 100% 100%, 60px 60px, 60px 60px',
          animation: 'gridPulse 10s ease-in-out infinite'
        }}></div>
        
        {/* Floating Security Icons */}
        <div className="absolute top-1/4 left-10 animate-float-3d">
          <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm flex items-center justify-center">
            <Shield className="h-8 w-8 text-cyan-400" />
          </div>
        </div>
        <div className="absolute top-1/3 right-10 animate-float-3d" style={{ animationDelay: '1s' }}>
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm flex items-center justify-center">
            <Lock className="h-6 w-6 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float-3d" style={{ animationDelay: '2s' }}>
          <div className="h-16 w-16 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm flex items-center justify-center">
            <Key className="h-8 w-8 text-emerald-400" />
          </div>
        </div>
        
        {/* Animated Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="h-96 w-96 rounded-full border border-cyan-500/10 animate-pulse-ring"></div>
          <div className="h-80 w-80 rounded-full border border-purple-500/10 animate-pulse-ring" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="text-center mb-10">
            <Link to="/login" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors mb-6">
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Login
            </Link>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-50"></div>
                <div className="relative h-16 w-16 rounded-2xl bg-gradient-to-br from-[#1a1b3a] to-[#0a0a1a] border border-cyan-500/30 flex items-center justify-center shadow-2xl">
                  <Shield className="h-10 w-10 text-cyan-400" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                  Secure Password Recovery
                </h1>
                <p className="text-lg text-cyan-200/80 mt-2">AI-Powered Security Verification</p>
              </div>
            </div>
            
            {/* AI Security Features */}
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              {aiSecurityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
                >
                  {feature.icon}
                  <span className={`text-xs font-medium ${feature.color}`}>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Panel - Recovery Progress */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1b3a]/70 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 p-8 shadow-2xl">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-10">
                {securitySteps.map((stepItem, index) => (
                  <React.Fragment key={index}>
                    <div className="flex flex-col items-center">
                      <div className={`h-14 w-14 rounded-full flex items-center justify-center border-2 ${
                        stepItem.status === 'complete'
                          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 border-transparent'
                          : step > index
                          ? 'bg-gradient-to-r from-blue-500 to-purple-500 border-transparent'
                          : 'border-cyan-500/30 bg-white/5'
                      } transition-all duration-500`}>
                        {stepItem.status === 'complete' ? (
                          <CheckCircle className="h-7 w-7 text-white" />
                        ) : step > index ? (
                          <Clock className="h-7 w-7 text-white" />
                        ) : (
                          <div className="text-cyan-400">{stepItem.icon}</div>
                        )}
                      </div>
                      <span className={`text-sm mt-3 font-medium ${
                        stepItem.status === 'complete' ? 'text-emerald-300' :
                        step > index ? 'text-blue-300' : 'text-cyan-300/70'
                      }`}>
                        {stepItem.label}
                      </span>
                    </div>
                    {index < securitySteps.length - 1 && (
                      <div className={`flex-1 h-1 mx-4 ${
                        step > index + 1 ? 'bg-gradient-to-r from-emerald-500 to-cyan-500' :
                        step === index + 1 ? 'bg-gradient-to-r from-blue-500 to-purple-500' :
                        'bg-cyan-500/20'
                      } transition-all duration-500`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Step 1: Select Recovery Method */}
              {step === 1 && (
                <div className="animate-slideIn">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-6">
                    Choose Recovery Method
                  </h2>
                  <p className="text-cyan-300/80 mb-8">
                    Select how you'd like to verify your identity and recover access
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {recoveryMethods.map((method) => (
                      <button
                        key={method.id}
                        onClick={() => setRecoveryMethod(method.id)}
                        className={`p-6 rounded-2xl border-2 transition-all duration-300 group ${
                          recoveryMethod === method.id
                            ? 'bg-gradient-to-r from-white/10 to-white/5 border-cyan-500/50 scale-[1.02] shadow-lg shadow-cyan-500/20'
                            : 'border-white/10 bg-white/5 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/10'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                            {method.icon}
                          </div>
                          <div className="text-left flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <p className="font-bold text-white">{method.name}</p>
                              <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                                {method.time}
                              </span>
                            </div>
                            <p className="text-sm text-cyan-300/70">{method.description}</p>
                            <div className="mt-3 flex items-center text-xs text-cyan-400">
                              <ShieldCheck className="h-3 w-3 mr-1" />
                              Secure verification
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {recoveryMethod === 'email' && (
                      <div className="space-y-2">
                        <label className="flex items-center text-sm font-medium text-cyan-300">
                          <Mail className="h-4 w-4 mr-2" />
                          Registered Email Address
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="relative w-full px-4 py-3 bg-white/5 border border-cyan-500/30 rounded-xl text-white placeholder-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300"
                            placeholder="Enter your registered email"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {recoveryMethod === 'sms' && (
                      <div className="space-y-2">
                        <label className="flex items-center text-sm font-medium text-cyan-300">
                          <Smartphone className="h-4 w-4 mr-2" />
                          Mobile Number
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="relative w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                            placeholder="+1 (555) 123-4567"
                            required
                          />
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
                            Verifying Identity...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-3" />
                            Send Verification Code
                            <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                          </>
                        )}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-purple-500/0 animate-shine-slow"></div>
                    </button>
                  </form>
                </div>
              )}

              {/* Step 2: Enter Verification Code */}
              {step === 2 && (
                <div className="animate-slideIn">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-6">
                    Enter Verification Code
                  </h2>
                  
                  <div className="mb-8 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                        {recoveryMethod === 'email' ? (
                          <Mail className="h-6 w-6 text-white" />
                        ) : recoveryMethod === 'sms' ? (
                          <Smartphone className="h-6 w-6 text-white" />
                        ) : (
                          <QrCode className="h-6 w-6 text-white" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-white">
                          Code sent to your {recoveryMethod === 'email' ? 'email' : recoveryMethod === 'sms' ? 'mobile' : 'authenticator app'}
                        </p>
                        <p className="text-sm text-cyan-300/70">
                          {recoveryMethod === 'email' ? formData.email : recoveryMethod === 'sms' ? formData.phone : 'Open your authenticator app'}
                        </p>
                      </div>
                    </div>
                    
                    {countdown > 0 && (
                      <div className="flex items-center text-sm text-cyan-400">
                        <Clock className="h-4 w-4 mr-2" />
                        Code expires in {Math.floor(countdown / 60)}:{String(countdown % 60).padStart(2, '0')}
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-purple-300">
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        6-digit Verification Code
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="verificationCode"
                          value={formData.verificationCode}
                          onChange={handleChange}
                          maxLength="6"
                          className="w-full px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white text-center text-2xl tracking-widest placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300"
                          placeholder="000000"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={handleResendCode}
                        disabled={countdown > 0}
                        className="flex-1 py-3 px-4 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        <RefreshCw className={`h-4 w-4 mr-2 ${countdown > 0 ? 'animate-spin' : ''}`} />
                        {countdown > 0 ? 'Resend Available Soon' : 'Resend Code'}
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                      >
                        {isLoading ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                            Verifying...
                          </>
                        ) : (
                          <>
                            Verify & Continue
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 3: Reset Password */}
              {step === 3 && (
                <div className="animate-slideIn">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-6">
                    Create New Password
                  </h2>
                  
                  {/* AI Password Strength Analysis */}
                  {aiAnalysis && (
                    <div className="mb-6 p-4 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30">
                      <div className="flex items-center mb-3">
                        <Brain className="h-5 w-5 text-cyan-400 mr-2" />
                        <span className="font-semibold text-white">AI Security Analysis</span>
                      </div>
                      <div className="space-y-2">
                        {aiAnalysis.map((item, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <span className="mr-2">{item.icon}</span>
                            <span className={item.color}>{item.text}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-500 ${
                              securityLevel <= 2 ? 'bg-gradient-to-r from-red-500 to-orange-500' :
                              securityLevel <= 4 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
                              'bg-gradient-to-r from-emerald-500 to-cyan-500'
                            }`}
                            style={{ width: `${(securityLevel / 6) * 100}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-cyan-300/70 mt-1">
                          <span>Weak</span>
                          <span>Moderate</span>
                          <span>Strong</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-emerald-300">
                        <Key className="h-4 w-4 mr-2" />
                        New Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300 pr-12"
                          placeholder="Create a strong password"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 hover:bg-emerald-500/10 rounded-lg transition-colors"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5 text-emerald-400" />
                          ) : (
                            <Eye className="h-5 w-5 text-emerald-400" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="flex items-center text-sm font-medium text-emerald-300">
                        <ShieldCheck className="h-4 w-4 mr-2" />
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-emerald-500/30 rounded-xl text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent transition-all duration-300"
                        placeholder="Re-enter your new password"
                        required
                      />
                    </div>

                    <div className="flex space-x-3">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="flex-1 py-3 px-4 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isLoading || formData.newPassword !== formData.confirmPassword}
                        className="flex-1 py-3 px-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                      >
                        {isLoading ? 'Securing...' : 'Reset Password'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Step 4: Success */}
              {step === 4 && (
                <div className="animate-slideIn text-center py-12">
                  <div className="h-32 w-32 mx-auto rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-4 border-emerald-500/30 flex items-center justify-center mb-8 animate-pulse-glow">
                    <CheckCircle className="h-20 w-20 text-emerald-400" />
                  </div>
                  
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                    Password Reset Successful!
                  </h2>
                  <p className="text-cyan-300/80 mb-8 max-w-md mx-auto">
                    Your password has been securely updated. You can now log in with your new credentials.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/login"
                      className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Key className="h-5 w-5 mr-2" />
                      Go to Login
                    </Link>
                    <Link
                      to="/"
                      className="px-8 py-3 border border-cyan-500/30 text-cyan-300 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <ArrowLeft className="h-5 w-5 mr-2" />
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Right Panel - Security Information */}
            <div className="space-y-8">
              {/* Security Status */}
              <div className="bg-gradient-to-br from-[#1a1b3a]/70 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-blue-500/20 p-6 shadow-2xl">
                <h3 className="text-lg font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                  Security Status
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Identity Verified</p>
                        <p className="text-xs text-cyan-300/70">Multi-factor completed</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center">
                        <Database className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Data Encrypted</p>
                        <p className="text-xs text-cyan-300/70">AES-256 secure</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                        <Cloud className="h-5 w-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">Session Secured</p>
                        <p className="text-xs text-cyan-300/70">HTTPS only</p>
                      </div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </div>

              {/* Security Tips */}
              <div className="bg-gradient-to-br from-[#1a1b3a]/70 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-purple-500/20 p-6 shadow-2xl">
                <h3 className="text-lg font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                  Security Tips
                </h3>
                
                <div className="space-y-3">
                  {[
                    { icon: '🔐', tip: 'Use 12+ characters with mix of letters, numbers, symbols' },
                    { icon: '🔄', tip: 'Avoid reusing passwords across different sites' },
                    { icon: '📱', tip: 'Enable two-factor authentication for extra security' },
                    { icon: '👁️', tip: 'Never share passwords or verification codes' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300">
                      <span className="text-xl mt-1">{item.icon}</span>
                      <p className="text-sm text-cyan-300/80">{item.tip}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-[#1a1b3a]/70 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 p-6 shadow-2xl">
                <h3 className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
                  Need Help?
                </h3>
                
                <div className="space-y-3">
                  <button className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 hover:border-cyan-500/50 transition-all duration-300 text-left group">
                    <div className="flex items-center">
                      <Bot className="h-5 w-5 text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-medium text-white">AI Support Assistant</p>
                        <p className="text-xs text-cyan-300/70">24/7 automated help</p>
                      </div>
                    </div>
                  </button>
                  
                  <button className="w-full p-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 text-left group">
                    <div className="flex items-center">
                      <Terminal className="h-5 w-5 text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-medium text-white">Contact Security Team</p>
                        <p className="text-xs text-cyan-300/70">Emergency support</p>
                      </div>
                    </div>
                  </button>
                  
                  <Link
                    to="/signin"
                    className="block w-full p-3 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30 hover:border-teal-500/50 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center">
                      <Key className="h-5 w-5 text-emerald-400 mr-3 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-sm font-medium text-white">Create New Account</p>
                        <p className="text-xs text-cyan-300/70">Sign up for access</p>
                      </div>
                    </div>
                  </Link>
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
            transform: translateY(-15px) translateX(5px) rotateX(3deg) rotateY(3deg); 
          }
          50% { 
            transform: translateY(-25px) translateX(-5px) rotateX(-3deg) rotateY(-3deg); 
          }
          75% { 
            transform: translateY(-10px) translateX(8px) rotateX(2deg) rotateY(2deg); 
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shine-slow {
          0% { background-position: -100% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes gridPulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(52, 211, 153, 0.3),
                        inset 0 0 30px rgba(52, 211, 153, 0.1);
          }
          50% { 
            box-shadow: 0 0 60px rgba(52, 211, 153, 0.6),
                        inset 0 0 30px rgba(52, 211, 153, 0.2);
          }
        }
        
        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
        
        .animate-shine-slow {
          background-size: 200% 100%;
          animation: shine-slow 4s linear infinite;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ForgotPassword;