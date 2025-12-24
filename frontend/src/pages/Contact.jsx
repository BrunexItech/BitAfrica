import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, MessageSquare, Send, 
  Sparkles, CheckCircle, X
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
      {[...Array(12)].map((_, i) => (
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

  const GlowingOrbs = () => (
    <>
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ zIndex: 0 }} />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s', zIndex: 0}} />
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0f1a] to-[#0a0a0f] overflow-hidden relative">
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.1) 0%, transparent 40%),
                          radial-gradient(circle at 80% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 40%)`
        }} />
        <FloatingParticles />
        <GlowingOrbs />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/30 backdrop-blur-lg mb-6 group">
            <Sparkles className="h-5 w-5 text-cyan-400 animate-spin-slow" />
            <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider">
              CONTACT US
            </span>
            <Sparkles className="h-5 w-5 text-purple-400 animate-spin-slow" style={{animationDelay: '0.5s'}} />
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 px-4">
            <span className="block bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
              Get In Touch With Us
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed font-light px-4">
            Reach out to us with your questions, projects, or partnership opportunities.
          </p>
        </div>

        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="w-full">
            <div 
              className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-2xl rounded-2xl border border-cyan-500/20 p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Contact Information</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-300">Email Address</p>
                    <p className="text-white text-sm font-semibold break-words">bitafrica.ai@gmail.com</p>
                    <a 
                      href="mailto:bitafrica.ai@gmail.com" 
                      className="text-sm text-cyan-300 hover:text-white transition-colors duration-300 mt-1 block"
                    >
                      Send us an email
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-300">Phone Number</p>
                    <p className="text-white font-semibold">+254 794 913 318</p>
                    <a 
                      href="tel:+254794913318" 
                      className="text-sm text-cyan-300 hover:text-white transition-colors duration-300 mt-1 block"
                    >
                      Call us directly
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/5 to-transparent">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-300">Our Location</p>
                    <p className="text-white font-semibold">Nairobi, Kenya</p>
                    <p className="text-sm text-gray-400 mt-1">East Africa</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-lg font-semibold text-white mb-4">Business Hours</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300 text-sm">Monday - Friday</span>
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

          <div className="w-full lg:col-span-2">
            <div 
              className="bg-gradient-to-br from-gray-900/40 via-gray-900/30 to-gray-900/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden h-full"
              style={{ position: 'relative', zIndex: 10 }}
            >
              <div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-shimmer"
                style={{ backgroundSize: '200% 100%', zIndex: 0 }}
              />
              
              {submitted ? (
                <div className="text-center py-12 relative z-10">
                  <div className="relative inline-block mb-8">
                    <div className="h-24 sm:h-32 w-24 sm:w-32 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-4 border-emerald-500/30 flex items-center justify-center mx-auto animate-pulse-glow">
                      <CheckCircle className="h-12 sm:h-16 w-12 sm:w-16 text-emerald-400" />
                    </div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-400 animate-spin-slow" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent mb-4">
                    Message Sent! ✨
                  </h3>
                  <p className="text-gray-300 mb-8 max-w-md mx-auto px-4">
                    Thank you for reaching out! We've received your message and will get back to you within 24 hours.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-cyan-300">
                    <Sparkles className="h-4 w-4" />
                    <span>We'll contact you soon</span>
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
              ) : (
                <>
                  <div className="relative z-10 h-full">
                    <div className="mb-8">
                      <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-300 via-white to-purple-300 bg-clip-text text-transparent">
                        Send Us a Message
                      </h2>
                      <p className="text-gray-400 mt-2">Fill out the form below and we'll respond promptly</p>
                    </div>
                    
                    {submitError && (
                      <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/10 animate-fade-in">
                        <div className="flex items-center gap-3 text-red-300 text-sm">
                          <X className="h-5 w-5 flex-shrink-0" />
                          <span>{submitError}</span>
                        </div>
                      </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('name')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-sm font-semibold text-cyan-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-cyan-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 backdrop-blur-sm"
                          placeholder="Enter your full name"
                          required
                          style={{ position: 'relative', zIndex: 20 }}
                        />
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/20 to-transparent blur-xl transition-opacity duration-500 ${hoveredField === 'name' ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: -1 }} />
                      </div>

                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('email')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-sm font-semibold text-purple-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-purple-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                          placeholder="your.email@example.com"
                          required
                          style={{ position: 'relative', zIndex: 20 }}
                        />
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-500/20 to-transparent blur-xl transition-opacity duration-500 ${hoveredField === 'email' ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: -1 }} />
                      </div>

                      <div 
                        className="relative"
                        onMouseEnter={() => setHoveredField('message')}
                        onMouseLeave={() => setHoveredField(null)}
                      >
                        <label className="block text-sm font-semibold text-emerald-300 mb-2">
                          Your Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows="5"
                          className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-emerald-500/20 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm resize-none"
                          placeholder="Tell us about your project or inquiry..."
                          required
                          style={{ position: 'relative', zIndex: 20 }}
                        />
                        <div className={`absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-500/20 to-transparent blur-xl transition-opacity duration-500 ${hoveredField === 'message' ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: -1 }} />
                      </div>

                      <div className="pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className={`relative w-full py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group overflow-hidden ${
                            isSubmitting ? 'cursor-wait' : ''
                          }`}
                          style={{ position: 'relative', zIndex: 20 }}
                        >
                          <div className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                                Sending...
                              </>
                            ) : (
                              <>
                                <Send className="h-5 w-5 mr-3" />
                                Send Message
                              </>
                            )}
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-white/10 to-purple-500/0 animate-shimmer" />
                        </button>
                        <p className="text-center text-xs sm:text-sm text-gray-400 mt-3">
                          We typically respond within 24 hours
                          <span className="block mt-1 text-cyan-400/70 text-xs">
                            You'll receive a confirmation email after submission
                          </span>
                        </p>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 w-full">
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Our Location in Nairobi</h3>
                  <p className="text-gray-300 mt-1">Find us easily in the heart of the city</p>
                </div>
              </div>
              
              <div className="w-full h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden">
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
              
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold text-white">Nairobi, Kenya</p>
                  <p className="text-gray-300">East Africa's technology hub</p>
                </div>
                <a 
                  href="https://maps.google.com/?q=Nairobi,Kenya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity duration-300"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10 backdrop-blur-lg rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 rounded-full bg-cyan-500 animate-pulse" />
                <h4 className="text-xl font-semibold text-white">Ready to start your project?</h4>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                <a href="mailto:bitafrica.ai@gmail.com" className="text-cyan-300 hover:text-white font-semibold text-lg transition-colors duration-300">
                  bitafrica.ai@gmail.com
                </a>
                <div className="hidden sm:block text-gray-500">|</div>
                <a href="tel:+254794913318" className="text-cyan-300 hover:text-white font-semibold text-lg transition-colors duration-300">
                  +254 794 913 318
                </a>
              </div>
              
              <p className="text-gray-300 mt-4 max-w-2xl">
                We're here to help you with your AI and technology needs. 
                Whether you have questions about our services or want to discuss a project, 
                feel free to reach out through any of the channels above.
              </p>
            </div>
          </div>
        </div>
      </div>

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
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
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
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        @media (max-width: 640px) {
          .text-3xl {
            font-size: 1.875rem;
          }
          .text-4xl {
            font-size: 2.25rem;
          }
          .text-5xl {
            font-size: 2.5rem;
          }
        }
        
        ::selection {
          background: rgba(56, 189, 248, 0.3);
          color: white;
        }
        
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