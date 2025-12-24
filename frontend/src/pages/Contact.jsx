import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, 
  Sparkles, CheckCircle, X, Clock, Globe
} from 'lucide-react';
import contactService from '../services/contactService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [hoveredField, setHoveredField] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await contactService.submitContact(formData);
      
      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
      
    } catch (error) {
      console.error('Contact form submission error:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.response?.data) {
        if (error.response.data.error) {
          errorMessage = error.response.data.error;
        } else if (typeof error.response.data === 'object') {
          const errors = Object.values(error.response.data).flat();
          errorMessage = errors[0] || errorMessage;
        } else if (typeof error.response.data === 'string') {
          errorMessage = error.response.data;
        }
      } else if (error.message) {
        errorMessage = error.message;
      } else if (error.response?.status === 500) {
        errorMessage = 'Server error. Please try again later.';
      }
      
      setSubmitError(errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (submitError) setSubmitError('');
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            background: `radial-gradient(circle, 
              ${i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#a855f7' : '#22d3ee'}80, 
              transparent)`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 8 + 12}s`,
          }}
        />
      ))}
    </div>
  );

  const GlowingOrbs = () => (
    <>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-pulse-slow" style={{ zIndex: 0 }} />
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '1s', zIndex: 0}} />
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0f1a] to-[#0a0a0f] overflow-hidden relative">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.05) 0%, transparent 40%),
                          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.05) 0%, transparent 40%)`
        }} />
        <FloatingParticles />
        <GlowingOrbs />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-12">
        {/* Header Section - More Compact */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 border border-cyan-500/20 backdrop-blur-lg mb-4 group">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-medium bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
              CONTACT US
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 px-4">
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
              Get In Touch With Us
            </span>
          </h1>
          
          <p className="text-gray-300 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed font-light px-4">
            Reach out to us with your questions, projects, or partnership opportunities.
          </p>
        </div>

        {/* Main Content - Reduced Spacing */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Contact Information Card */}
          <div className="w-full">
            <div 
              className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-xl rounded-xl border border-cyan-500/20 p-5 sm:p-6 shadow-xl"
            >
              {/* Contact Information Header - Clear Subtitle */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Contact Information</h3>
                </div>
                <div className="h-0.5 w-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                <p className="text-gray-400 text-sm mt-2">Get in touch through any of these channels</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent hover:from-cyan-500/10 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-gray-300">Email Address</p>
                    <p className="text-white text-sm font-semibold break-words">bitafrica.ai@gmail.com</p>
                    <a 
                      href="mailto:bitafrica.ai@gmail.com" 
                      className="text-xs text-cyan-300 hover:text-white transition-colors duration-300 mt-1 block"
                    >
                      Send us an email
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent hover:from-purple-500/10 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-gray-300">Phone Number</p>
                    <p className="text-white text-sm font-semibold">+254 794 913 318</p>
                    <a 
                      href="tel:+254794913318" 
                      className="text-xs text-cyan-300 hover:text-white transition-colors duration-300 mt-1 block"
                    >
                      Call us directly
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-white/5 to-transparent hover:from-emerald-500/10 transition-all duration-300">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium text-gray-300">Our Location</p>
                    <p className="text-white text-sm font-semibold">Nairobi, Kenya</p>
                    <p className="text-xs text-gray-400 mt-1">East Africa</p>
                  </div>
                </div>
              </div>

              {/* Business Hours - More Compact */}
              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-cyan-400" />
                  <h4 className="text-sm font-semibold text-white">Business Hours</h4>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Monday - Friday</span>
                    <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Saturday</span>
                    <span className="text-white font-medium">10:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Sunday</span>
                    <span className="text-white font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Takes 2/3 width on desktop */}
          <div className="w-full lg:col-span-2">
            <div 
              className="bg-gradient-to-br from-gray-900/40 via-gray-900/30 to-gray-900/40 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl p-5 sm:p-6 lg:p-8 relative overflow-hidden h-full"
              style={{ position: 'relative', zIndex: 10 }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5"
                style={{ zIndex: 0 }}
              />
              
              {submitted ? (
                <div className="text-center py-8 relative z-10">
                  <div className="relative inline-block mb-6">
                    <div className="h-20 sm:h-24 w-20 sm:w-24 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-4 border-emerald-500/30 flex items-center justify-center mx-auto animate-pulse-glow">
                      <CheckCircle className="h-10 sm:h-12 w-10 sm:w-12 text-emerald-400" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-3">
                    Message Sent! ✨
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto px-4">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-xs text-cyan-300">
                    <Sparkles className="h-3 w-3" />
                    <span>We'll contact you soon</span>
                    <Sparkles className="h-3 w-3" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative z-10 h-full">
                    <div className="mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-400 text-sm mt-1">Fill out the form below and we'll respond promptly</p>
                    </div>
                    
                    {submitError && (
                      <div className="mb-4 p-3 rounded-lg border border-red-500/30 bg-red-500/10 animate-fade-in">
                        <div className="flex items-center gap-2 text-red-300 text-xs">
                          <X className="h-4 w-4 flex-shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('name')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-xs font-semibold text-cyan-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 bg-white/5 border border-cyan-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm text-sm"
                          placeholder="Enter your full name"
                          required
                          style={{ position: 'relative', zIndex: 20 }}
                        />
                      </div>

                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('email')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-xs font-semibold text-purple-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 bg-white/5 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm text-sm"
                          placeholder="your.email@example.com"
                          required
                          style={{ position: 'relative', zIndex: 20 }}
                        />
                      </div>

                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('message')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-xs font-semibold text-emerald-300 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-3 sm:px-4 py-2.5 bg-white/5 border border-emerald-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm resize-none text-sm"
                          placeholder="Tell us about your project or inquiry..."
                          required
                          style={{ position: 'relative', zIndex: 20 }}
                        />
                      </div>

                      <div className="pt-3">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`relative w-full py-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden ${
                            isSubmitting ? 'cursor-wait' : ''
                          }`}
                          style={{ position: 'relative', zIndex: 20 }}
                        >
                          <div className="relative z-10 flex items-center justify-center text-sm">
                            {isSubmitting ? (
                              <>
                                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-4 w-4 mr-2" />
                                Send Message
                              </>
                            )}
                          </div>
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-2">
                          We typically respond within 24 hours
                        </p>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section - More Compact */}
        <div className="mt-8 w-full">
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-xl rounded-xl border border-white/10 shadow-xl overflow-hidden">
            <div className="p-5 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">Our Location in Nairobi</h3>
                  <p className="text-gray-300 text-sm mt-1">Find us easily in the heart of the city</p>
                </div>
              </div>
              
              <div className="w-full h-48 sm:h-64 lg:h-72 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808477395861!2d36.82118931475389!3d-1.2883708359798435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d664f5b9c7%3A0x1d5f5e8a7b0b5c1a!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1648471234567!5m2!1sen!2ske"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nairobi Business Location"
                  className="rounded-lg"
                ></iframe>
              </div>
              
              <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div>
                  <p className="text-base font-semibold text-white">Nairobi, Kenya</p>
                  <p className="text-gray-300 text-sm">East Africa's technology hub</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Nairobi,Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300 text-sm"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section - Professional Mobile Design */}
        <div className="mt-8">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-xl rounded-xl p-5 sm:p-6">
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                <h4 className="text-lg font-semibold text-white text-center">Ready to start your project?</h4>
              </div>
              
              {/* Professional Contact Info Display */}
              <div className="w-full max-w-md">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  {/* Email - Mobile friendly */}
                  <a 
                    href="mailto:bitafrica.ai@gmail.com" 
                    className="group flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 w-full sm:w-auto"
                  >
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-300">Email us at</p>
                      <p className="text-white text-sm font-semibold truncate">bitafrica.ai@gmail.com</p>
                    </div>
                  </a>
                  
                  {/* Divider - Only show on desktop */}
                  <div className="hidden sm:block text-gray-500">|</div>
                  
                  {/* Phone - Mobile friendly */}
                  <a 
                    href="tel:+254794913318" 
                    className="group flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 w-full sm:w-auto"
                  >
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-gray-300">Call us at</p>
                      <p className="text-white text-sm font-semibold">+254 794 913 318</p>
                    </div>
                  </a>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm text-center mt-3 max-w-2xl">
                We're here to help you with your AI and technology needs. 
                Whether you have questions about our services or want to discuss a project, 
                feel free to reach out through any of the channels above.
              </p>
              
              {/* Quick Action Buttons for Mobile */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full max-w-xs">
                
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes particle-float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.5; }
          90% { opacity: 0.5; }
          100% { transform: translateY(-100vh) translateX(20px); opacity: 0; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 10px rgba(52, 211, 153, 0.2),
                        0 0 20px rgba(52, 211, 153, 0.1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(52, 211, 153, 0.3),
                        0 0 40px rgba(52, 211, 153, 0.2);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-particle-float {
          animation: particle-float linear infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #60a5fa, #a855f7);
          border-radius: 3px;
        }
        
        /* Mobile optimizations */
        @media (max-width: 640px) {
          .text-2xl {
            font-size: 1.75rem;
          }
          .text-3xl {
            font-size: 2rem;
          }
          .text-4xl {
            font-size: 2.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;