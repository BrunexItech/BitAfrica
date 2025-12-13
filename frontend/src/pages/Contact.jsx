import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, 
  Sparkles, CheckCircle, ArrowRight, Bot,
  Zap, Brain, Shield, Clock, Star, Rocket,
  MessageCircle, PhoneCall, Video, Calendar,
  Globe, Users, Code, Cloud, Cpu
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    interest: 'ai',
    priority: 'normal'
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [hoveredField, setHoveredField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate magical submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      // Reset after celebration
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '', interest: 'ai', priority: 'normal' });
      }, 4000);
    }, 1800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Magical floating particles
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            background: `radial-gradient(circle, 
              ${i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#22d3ee'}80, 
              transparent)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 15}s`,
          }}
        />
      ))}
    </div>
  );

  // Glowing orbs
  const GlowingOrbs = () => (
    <>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-blue-500/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}} />
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0f1a] to-[#0a0a0f] overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 40%),
                          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%)`
        }} />
        <FloatingParticles />
        <GlowingOrbs />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        {/* Magical Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-lg mb-8 group hover:scale-105 transition-transform duration-300">
            <Sparkles className="h-5 w-5 text-cyan-400 animate-spin-slow" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
              MAGICAL CONNECTION AWAITS
            </span>
            <Sparkles className="h-5 w-5 text-purple-400 animate-spin-slow" style={{animationDelay: '0.5s'}} />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
              Speak to the Future
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            Your words transform into digital magic. Share your vision and watch 
            as <span className="text-cyan-300 font-semibold">AI weaves possibilities</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Magical Contact Cards */}
          <div className="space-y-8">
            {/* Floating Contact Card */}
            <div 
              className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 p-8 shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-500 group"
              style={{
                transformStyle: 'preserve-3d',
                transform: 'perspective(1000px) rotateX(2deg)'
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Instant Magic</h3>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-5 w-5" />,
                    title: 'Email Portal',
                    detail: 'reply@ai-magic.com',
                    gradient: 'from-cyan-500 to-blue-500',
                    action: 'Send Spell'
                  },
                  {
                    icon: <PhoneCall className="h-5 w-5" />,
                    title: 'Voice Channel',
                    detail: '+1 (555) 888-9999',
                    gradient: 'from-purple-500 to-pink-500',
                    action: 'Cast Call'
                  },
                  {
                    icon: <Video className="h-5 w-5" />,
                    title: 'Crystal Call',
                    detail: 'Book visual session',
                    gradient: 'from-orange-500 to-red-500',
                    action: 'Scry Now'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent hover:from-white/10 transition-all duration-300 group/item"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center group-hover/item:rotate-12 transition-transform`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-300">{item.title}</p>
                        <p className="text-white font-semibold">{item.detail}</p>
                      </div>
                    </div>
                    <button className="text-xs px-3 py-1.5 rounded-lg bg-gradient-to-r from-white/10 to-white/5 text-cyan-300 hover:text-white hover:from-cyan-500/20 transition-all duration-300">
                      {item.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Assistant Preview */}
            <div className="bg-gradient-to-br from-gray-900/40 to-purple-900/20 backdrop-blur-2xl rounded-2xl border border-purple-500/20 p-8 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full animate-ping" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI Guardian</h3>
                  <p className="text-sm text-purple-300">Always Awake</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: <Shield className="h-4 w-4" />, text: 'Encrypted whispers', color: 'text-cyan-400' },
                  { icon: <Clock className="h-4 w-4" />, text: '24/7 starlight watch', color: 'text-emerald-400' },
                  { icon: <Zap className="h-4 w-4" />, text: 'Lightning responses', color: 'text-yellow-400' },
                  { icon: <Cloud className="h-4 w-4" />, text: 'Cloud memory', color: 'text-blue-400' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-gradient-to-br from-white/5 to-transparent ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="text-sm text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-6 px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 hover:text-white hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 flex items-center justify-center gap-2">
                <Bot className="h-4 w-4" />
                Summon Assistant
              </button>
            </div>
          </div>

          {/* Center - Magical Form */}
          <div className="lg:col-span-2">
            <div 
              className="bg-gradient-to-br from-gray-900/40 via-gray-900/30 to-gray-900/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-8 lg:p-12 relative overflow-hidden"
              style={{
                backgroundImage: `radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.1) 0%, transparent 50%)`
              }}
            >
              {/* Form Glow Effect */}
              <div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-shimmer"
                style={{ backgroundSize: '200% 100%' }}
              />
              
              {submitted ? (
                <div className="text-center py-12 relative z-10">
                  <div className="relative inline-block mb-8">
                    <div className="h-32 w-32 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-4 border-emerald-500/30 flex items-center justify-center mx-auto animate-pulse-glow">
                      <CheckCircle className="h-16 w-16 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin-slow" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                    Message Enchanted! ✨
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto">
                    Your words have been woven into the digital tapestry. 
                    Expect magical responses within moments.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                    <span>Spell cast successfully</span>
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                          Weave Your Message
                        </h2>
                        <p className="text-gray-400 mt-2">Each field is a spell component</p>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
                        <Star className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm text-cyan-300">AI-Enhanced</span>
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Name Field with Magic */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('name')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-sm font-semibold text-cyan-300 mb-3 flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          Your Identity
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                          placeholder="Whisper your name..."
                          required
                        />
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 to-transparent blur-xl transition-opacity duration-500 ${hoveredField === 'name' ? 'opacity-100' : 'opacity-0'}`} />
                      </div>

                      {/* Email Field */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('email')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-sm font-semibold text-purple-300 mb-3 flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Digital Echo
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-6 py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                          placeholder="your@magic.domain"
                          required
                        />
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-transparent blur-xl transition-opacity duration-500 ${hoveredField === 'email' ? 'opacity-100' : 'opacity-0'}`} />
                      </div>

                      {/* Interest Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-blue-300 mb-3">
                          Your Quest
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {[
                            { value: 'ai', label: 'AI Magic', icon: <Brain className="h-4 w-4" />, color: 'from-cyan-500 to-blue-500' },
                            { value: 'web', label: 'Web Spells', icon: <Globe className="h-4 w-4" />, color: 'from-purple-500 to-pink-500' },
                            { value: 'mobile', label: 'Mobile Charms', icon: <Phone className="h-4 w-4" />, color: 'from-orange-500 to-red-500' },
                            { value: 'data', label: 'Data Alchemy', icon: <Cpu className="h-4 w-4" />, color: 'from-emerald-500 to-teal-500' }
                          ].map((item) => (
                            <label
                              key={item.value}
                              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                                formData.interest === item.value
                                  ? `bg-gradient-to-r ${item.color}/20 border-${item.color.split('-')[1]}-500/50 scale-[1.02]`
                                  : 'border-white/10 bg-white/5 hover:border-white/20'
                              }`}
                            >
                              <input
                                type="radio"
                                name="interest"
                                value={item.value}
                                checked={formData.interest === item.value}
                                onChange={handleChange}
                                className="sr-only"
                              />
                              <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                {item.icon}
                              </div>
                              <span className="text-sm font-medium text-white">{item.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Message Field */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('message')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-sm font-semibold text-emerald-300 mb-3 flex items-center gap-2">
                          <MessageSquare className="h-4 w-4" />
                          Your Incantation
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-6 py-4 bg-white/5 border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                          placeholder="Weave your thoughts here... Let the magic flow through your words..."
                          required
                        />
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-transparent blur-xl transition-opacity duration-500 ${hoveredField === 'message' ? 'opacity-100' : 'opacity-0'}`} />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-6 border-t border-white/10">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`relative w-full py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden ${
                            isSubmitting ? 'cursor-wait' : ''
                          }`}
                        >
                          <div className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                Casting Your Spell...
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                                Enchant Message
                                <Rocket className="ml-3 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                              </>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-purple-500/0 animate-shimmer" />
                        </button>
                        <p className="text-center text-sm text-gray-400 mt-4">
                          Each submission charges our magical servers ⚡
                        </p>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Magical Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-lg">
            <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-gray-300">Ready for magical collaboration?</span>
            <button className="text-cyan-300 hover:text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Explore More Spells
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes particle-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(52, 211, 153, 0.3),
                        0 0 40px rgba(52, 211, 153, 0.2);
          }
          50% { 
            box-shadow: 0 0 40px rgba(52, 211, 153, 0.5),
                        0 0 80px rgba(52, 211, 153, 0.3);
          }
        }
        
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        /* Smooth scrolling and selection */
        ::selection {
          background: rgba(56, 189, 248, 0.3);
          color: white;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #60a5fa, #a855f7);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Contact;