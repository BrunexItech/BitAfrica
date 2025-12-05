import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, Globe, 
  Brain, Cpu, Shield, Database, Users, Clock,
  Zap, Sparkles, CheckCircle, ArrowRight, Bot,
  Video, Calendar, Headphones, Code, Cloud, Network,
  Smartphone, Tablet, Laptop, Server, Wifi
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    inquiryType: 'general',
    message: '',
    urgency: 'normal',
    subscribe: true
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const inquiryTypes = [
    { id: 'sales', name: 'Sales Inquiry', icon: <Users className="h-4 w-4" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'support', name: 'Technical Support', icon: <Headphones className="h-4 w-4" />, color: 'from-purple-500 to-pink-500' },
    { id: 'partnership', name: 'Partnership', icon: <Globe className="h-4 w-4" />, color: 'from-cyan-500 to-teal-500' },
    { id: 'careers', name: 'Careers', icon: <Code className="h-4 w-4" />, color: 'from-emerald-500 to-green-500' }
  ];

  const urgencyLevels = [
    { id: 'low', name: 'Low Priority', color: 'text-gray-400', bg: 'bg-gray-500/20' },
    { id: 'normal', name: 'Normal', color: 'text-blue-400', bg: 'bg-blue-500/20' },
    { id: 'high', name: 'High Priority', color: 'text-orange-400', bg: 'bg-orange-500/20' },
    { id: 'urgent', name: 'Urgent', color: 'text-red-400', bg: 'bg-red-500/20' }
  ];

  const aiFeatures = [
    { icon: <Brain className="h-5 w-5" />, title: 'AI Response System', desc: 'Instant smart replies' },
    { icon: <Shield className="h-5 w-5" />, title: 'Secure Communication', desc: 'End-to-end encrypted' },
    { icon: <Clock className="h-5 w-5" />, title: '24/7 Availability', desc: 'Always here to help' },
    { icon: <Bot className="h-5 w-5" />, title: 'AI Assistant', desc: 'Smart query routing' }
  ];

  const techIcons = [
    <Brain key="brain" className="h-6 w-6" />,
    <Cpu key="cpu" className="h-6 w-6" />,
    <Database key="db" className="h-6 w-6" />,
    <Cloud key="cloud" className="h-6 w-6" />,
    <Network key="network" className="h-6 w-6" />,
    <Server key="server" className="h-6 w-6" />,
    <Laptop key="laptop" className="h-6 w-6" />,
    <Tablet key="tablet" className="h-6 w-6" />,
    <Smartphone key="phone" className="h-6 w-6" />,
    <Wifi key="wifi" className="h-6 w-6" />
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#111827] to-[#0a0a1a] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-10 animate-float-3d">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 flex items-center justify-center">
            <Brain className="h-6 w-6 text-blue-400" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float-3d" style={{ animationDelay: '1s' }}>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 flex items-center justify-center">
            <Cpu className="h-5 w-5 text-purple-400" />
          </div>
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float-3d" style={{ animationDelay: '2s' }}>
          <div className="h-14 w-14 rounded-xl bg-gradient-to-r from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 flex items-center justify-center">
            <Database className="h-7 w-7 text-cyan-400" />
          </div>
        </div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(90deg, #0088ff22 1px, transparent 1px),
                          linear-gradient(#0088ff22 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8 group hover:scale-105 transition-all duration-300">
            <Sparkles className="h-5 w-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-bold text-cyan-400 tracking-wider">CONNECT WITH INNOVATION</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
              Let's Build
            </span>
            <br />
            <span className="text-white">The Future Together</span>
          </h1>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Your vision meets our expertise. Connect with Africa's leading AI innovators 
            to transform possibilities into reality.
          </p>
          
          {/* AI Features Banner */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 backdrop-blur-sm"
              >
                <div className="text-cyan-400">{feature.icon}</div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">{feature.title}</p>
                  <p className="text-xs text-cyan-300/70">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-2xl bg-gray-900/50 border border-gray-800 p-1 backdrop-blur-sm">
            {['contact', 'schedule', 'support'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab === 'contact' ? 'Contact Form' : 
                 tab === 'schedule' ? 'Schedule Call' : 'Live Support'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Panel - Contact Info & Stats */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-gray-900/80 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-blue-500/20 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-6">
                Connect Directly
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="h-6 w-6" />,
                    title: 'Email',
                    details: ['contact@bitafrica-ai.com', 'sales@bitafrica-ai.com'],
                    color: 'from-blue-500 to-cyan-500',
                    tag: 'Response within 2 hours'
                  },
                  {
                    icon: <Phone className="h-6 w-6" />,
                    title: 'Phone',
                    details: ['+254 700 123 456', '+1 (555) 123-4567'],
                    color: 'from-purple-500 to-pink-500',
                    tag: '24/7 Support Line'
                  },
                  {
                    icon: <MapPin className="h-6 w-6" />,
                    title: 'Global Offices',
                    details: ['Nairobi, Kenya', 'Cape Town, SA', 'Lagos, Nigeria'],
                    color: 'from-emerald-500 to-teal-500',
                    tag: 'Across Africa'
                  },
                  {
                    icon: <Video className="h-6 w-6" />,
                    title: 'Video Call',
                    details: ['Book a demo', 'Technical consultation'],
                    color: 'from-orange-500 to-red-500',
                    tag: 'Calendar link below'
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-bold text-white">{item.title}</h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">
                            {item.tag}
                          </span>
                        </div>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-gray-300 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time Stats */}
            <div className="bg-gradient-to-br from-gray-900/80 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-purple-500/20 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-6">
                Our Response Time
              </h2>
              
              <div className="space-y-4">
                {[
                  { label: 'Initial Response', time: '< 2 hours', percent: '95%', color: 'bg-emerald-500' },
                  { label: 'Technical Support', time: '< 30 minutes', percent: '90%', color: 'bg-cyan-500' },
                  { label: 'Sales Inquiry', time: '< 1 hour', percent: '98%', color: 'bg-blue-500' },
                  { label: 'Emergency Support', time: '< 15 minutes', percent: '100%', color: 'bg-purple-500' }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{stat.label}</span>
                      <span className="text-white font-semibold">{stat.time}</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${stat.color} transition-all duration-1000`}
                        style={{ width: stat.percent }}
                      />
                    </div>
                    <div className="text-right text-xs text-gray-400">{stat.percent} success rate</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Panel - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900/80 to-[#0a0a1a]/80 backdrop-blur-2xl rounded-3xl border border-cyan-500/20 p-8 lg:p-12 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-4 border-emerald-500/30 flex items-center justify-center mb-8 animate-pulse-glow">
                    <CheckCircle className="h-12 w-12 text-emerald-400" />
                  </div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Our AI system has received your inquiry. You'll receive a confirmation email 
                    within minutes, and our team will contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                      Send Your Inquiry
                    </h2>
                    <div className="flex items-center text-sm text-cyan-400">
                      <Zap className="h-4 w-4 mr-2 animate-pulse" />
                      AI-Powered Routing
                    </div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Inquiry Type Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-cyan-300 mb-4">
                        What can we help you with?
                      </label>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                        {inquiryTypes.map((type) => (
                          <label
                            key={type.id}
                            className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 group ${
                              formData.inquiryType === type.id
                                ? 'bg-gradient-to-r from-white/10 to-white/5 border-cyan-500/50 scale-[1.02] shadow-lg'
                                : 'border-white/10 bg-white/5 hover:border-cyan-500/30'
                            }`}
                          >
                            <input
                              type="radio"
                              name="inquiryType"
                              value={type.id}
                              checked={formData.inquiryType === type.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${type.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                              {type.icon}
                            </div>
                            <span className="text-sm font-medium text-white">{type.name}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Urgency Selection */}
                    <div>
                      <label className="block text-sm font-semibold text-cyan-300 mb-4">
                        How urgent is your inquiry?
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {urgencyLevels.map((level) => (
                          <label
                            key={level.id}
                            className={`px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                              formData.urgency === level.id
                                ? `${level.bg} ${level.color} ring-2 ring-current/30`
                                : 'bg-gray-800 text-gray-400 hover:text-white'
                            }`}
                          >
                            <input
                              type="radio"
                              name="urgency"
                              value={level.id}
                              checked={formData.urgency === level.id}
                              onChange={handleChange}
                              className="sr-only"
                            />
                            {level.name}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Form Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      
                      <div className="md:col-span-2">
                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300"
                          placeholder="Enter company name"
                          required
                        />
                      </div>
                    </div>

                    {/* Message Area */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-300 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 resize-none"
                        placeholder="Describe your project, inquiry, or challenge in detail..."
                        required
                      />
                    </div>

                    {/* Submit Area */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-gray-800">
                      <label className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          name="subscribe"
                          checked={formData.subscribe}
                          onChange={handleChange}
                          className="h-4 w-4 rounded border-gray-600 bg-white/5 text-cyan-500 focus:ring-cyan-500/50"
                        />
                        <span className="ml-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                          Subscribe to AI insights & updates
                        </span>
                      </label>
                      
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden ${
                          isSubmitting ? 'cursor-wait' : ''
                        }`}
                      >
                        <div className="relative z-10 flex items-center justify-center">
                          {isSubmitting ? (
                            <>
                              <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                              Processing with AI...
                            </>
                          ) : (
                            <>
                              <Send className="h-5 w-5 mr-3" />
                              Send Intelligent Inquiry
                              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                            </>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-purple-500/0 animate-shine-slow"></div>
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-6 px-8 py-6 rounded-3xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-sm">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Need Immediate Assistance?</h3>
              <p className="text-gray-300">Our AI support assistant is available 24/7</p>
            </div>
            <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center whitespace-nowrap">
              <Bot className="h-5 w-5 mr-2" />
              Start AI Chat
            </button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes float-3d {
          0%, 100% { transform: translateY(0) translateX(0) rotateX(0) rotateY(0); }
          25% { transform: translateY(-10px) translateX(5px) rotateX(3deg) rotateY(3deg); }
          50% { transform: translateY(-20px) translateX(-5px) rotateX(-3deg) rotateY(-3deg); }
          75% { transform: translateY(-15px) translateX(3px) rotateX(2deg) rotateY(2deg); }
        }
        
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 60px 60px; }
        }
        
        @keyframes shine-slow {
          0% { background-position: -100% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(52, 211, 153, 0.3);
          }
          50% { 
            box-shadow: 0 0 60px rgba(52, 211, 153, 0.6);
          }
        }
        
        .animate-float-3d {
          animation: float-3d 8s ease-in-out infinite;
        }
        
        .animate-shine-slow {
          background-size: 200% 100%;
          animation: shine-slow 3s linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
};

export default Contact;