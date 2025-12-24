import React, { useState, useRef, useEffect } from 'react';
import {
  Globe, Send, Calendar, Clock, MapPin, User, Mail, MessageSquare,
  Sparkles, Rocket, Video, Phone, Zap, Target, Languages, Cloud,
  CheckCircle, X, Globe2, Users, Award, Shield
} from 'lucide-react';
import gsap from 'gsap';
import consultationService from '../services/consultationService';

const GetinTouch = () => {
  const [activeRegion, setActiveRegion] = useState('global');
  const [selectedService, setSelectedService] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: '',
    timezone: 'GMT',
    consultationType: 'video',
    region: 'global'
  });

  const globeRef = useRef(null);
  const formRef = useRef(null);
  const particlesRef = useRef([]);
  const successRef = useRef(null);
  const errorRef = useRef(null);

  const colors = {
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFD166',
    global: '#118AB2',
    success: '#06D6A0',
    error: '#EF4444',
    gradient: 'linear-gradient(135deg, #FF6B6B, #FFD166, #4ECDC4)',
    background: 'linear-gradient(135deg, #0F0F23 0%, #1A1A2E 50%, #16213E 100%)',
    glass: 'rgba(255, 255, 255, 0.08)'
  };

  const regions = [
    { id: 'africa', name: 'Africa', flag: '🌍', color: '#FFD166', timezone: 'GMT+1', peak: '9 AM - 5 PM' },
    { id: 'europe', name: 'Europe', flag: '🇪🇺', color: '#4ECDC4', timezone: 'GMT+2', peak: '8 AM - 4 PM' },
    { id: 'asia', name: 'Asia-Pacific', flag: '🌏', color: '#FF6B6B', timezone: 'GMT+8', peak: '10 AM - 7 PM' },
    { id: 'americas', name: 'Americas', flag: '🌎', color: '#118AB2', timezone: 'GMT-5', peak: '9 AM - 6 PM' },
    { id: 'global', name: 'Global 24/7', flag: '🌐', color: '#C44569', timezone: 'Multiple', peak: 'Round-the-clock' }
  ];

  const services = [
    { id: 'ai', name: 'AI Solutions', icon: '🧠', color: '#FF6B6B' },
    { id: 'web', name: 'Web Development', icon: '💻', color: '#4ECDC4' },
    { id: 'mobile', name: 'Mobile Apps', icon: '📱', color: '#FFD166' },
    { id: 'cloud', name: 'Cloud Services', icon: '☁️', color: '#118AB2' },
    { id: 'cyber', name: 'Cybersecurity', icon: '🛡️', color: '#06D6A0' },
    { id: 'consult', name: 'AI Consultation', icon: '🎯', color: '#C44569' }
  ];

  const consultationTypes = [
    { id: 'video', name: 'Video Call', icon: <Video className="h-4 w-4" />, color: '#4ECDC4' },
    { id: 'phone', name: 'Phone Call', icon: <Phone className="h-4 w-4" />, color: '#FF6B6B' },
    { id: 'onsite', name: 'On-site Visit', icon: <MapPin className="h-4 w-4" />, color: '#FFD166' }
  ];

  const timeSlots = [
    { time: '09:00 - 10:00', available: true },
    { time: '10:30 - 11:30', available: true },
    { time: '12:00 - 13:00', available: false },
    { time: '14:00 - 15:00', available: true },
    { time: '15:30 - 16:30', available: true },
    { time: '17:00 - 18:00', available: true }
  ];

  useEffect(() => {
    const globe = globeRef.current;
    if (!globe) return;

    return () => {
      globe.innerHTML = '';
    };
  }, []);

  useEffect(() => {
    const particles = particlesRef.current;
    const container = formRef.current;
    
    if (!container) return;

    return () => {
      particles.forEach(p => p.remove());
      particlesRef.current = [];
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!formData.name || !formData.email || !formData.service || !formData.description) {
      setSubmitError('Please fill in all required fields.');
      setIsSubmitting(false);
      
      if (errorRef.current) {
        gsap.fromTo(errorRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
      return;
    }

    try {
      const submissionData = {
        ...formData,
        region: activeRegion,
        consultation_type: formData.consultationType
      };

      await consultationService.submitConsultation(submissionData);
      
      setIsSubmitting(false);
      setIsSubmitted(true);

      gsap.fromTo(successRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );
      
    } catch (error) {
      let errorMessage = 'Failed to submit consultation request. Please try again.';
      
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
      }
      
      setSubmitError(errorMessage);
      setIsSubmitting(false);
      
      if (errorRef.current) {
        gsap.fromTo(errorRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
        );
      }
    }
  };

  const RegionSelector = () => (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2">
        <Globe2 className="h-4 w-4 text-cyan-300" />
        <h3 className="text-sm font-bold text-white">Select Your Region</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {regions.map(region => (
          <button
            key={region.id}
            type="button"
            onClick={() => {
              setActiveRegion(region.id);
              setFormData({...formData, region: region.id, timezone: region.timezone});
            }}
            className={`relative group px-3 py-2 rounded-lg transition-all duration-200 flex-1 min-w-[120px] ${
              activeRegion === region.id 
                ? 'scale-105 shadow-md' 
                : 'hover:scale-[1.02]'
            }`}
            style={{
              background: activeRegion === region.id 
                ? `${region.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${activeRegion === region.id ? region.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl">{region.flag}</span>
              <span className="text-xs font-medium text-white">{region.name}</span>
              <span className="text-[10px] opacity-60 text-white">{region.timezone}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const ServiceSelector = () => (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2">
        <Target className="h-4 w-4 text-cyan-300" />
        <h3 className="text-sm font-bold text-white">Select Service</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {services.map(service => (
          <button
            key={service.id}
            type="button"
            onClick={() => {
              setSelectedService(service.id);
              setFormData({...formData, service: service.name});
            }}
            className={`group relative px-3 py-3 rounded-lg transition-all duration-200 flex-1 min-w-[130px] ${
              selectedService === service.id 
                ? 'scale-105 shadow-md' 
                : 'hover:scale-[1.02]'
            }`}
            style={{
              background: selectedService === service.id 
                ? `${service.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${selectedService === service.id ? service.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-2">
              <div 
                className="p-2 rounded-md group-hover:scale-110 transition-transform"
                style={{ background: `${service.color}20` }}
              >
                <span className="text-xl">{service.icon}</span>
              </div>
              <span className="text-xs font-medium text-white text-center">
                {service.name}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  const ConsultationSelector = () => (
    <div className="space-y-3 mb-6">
      <div className="flex items-center gap-2">
        <Video className="h-4 w-4 text-cyan-300" />
        <h3 className="text-sm font-bold text-white">Consultation Type</h3>
      </div>
      <div className="flex gap-2">
        {consultationTypes.map(type => (
          <button
            key={type.id}
            type="button"
            onClick={() => setFormData({...formData, consultationType: type.id})}
            className={`group px-3 py-2 rounded-lg transition-all duration-200 flex-1 ${
              formData.consultationType === type.id 
                ? 'scale-105 shadow-md' 
                : 'hover:scale-[1.02]'
            }`}
            style={{
              background: formData.consultationType === type.id 
                ? `${type.color}20` 
                : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${formData.consultationType === type.id ? type.color : 'rgba(255, 255, 255, 0.1)'}`
            }}
          >
            <div className="flex flex-col items-center gap-1">
              <div 
                className="p-1.5 rounded-md"
                style={{ color: type.color }}
              >
                {type.icon}
              </div>
              <span className="text-xs font-medium text-white">{type.name}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative py-8 md:py-12 overflow-hidden select-none" style={{ background: colors.background }}>
      <div className="w-full px-4 sm:px-6 md:px-8 relative z-10 mx-auto">
        {/* Header with slightly larger text */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 mb-5">
            <Globe className="h-4 w-4 text-cyan-100" />
            <span className="text-xs font-bold text-cyan-300 tracking-widest">
              GLOBAL CONNECTIVITY HUB
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="block text-white/90 text-2xl md:text-3xl mb-1">Connect Globally</span>
          <span className="block bg-gradient-to-r from-cyan-300 via-pink-400 to-yellow-300 bg-clip-text text-transparent text-3xl md:text-4xl">
            Free Consultation
          </span>
        </h1>
          
          <p className="text-base text-blue-100/80 leading-relaxed max-w-2xl mx-auto">
            Book a free strategy session from anywhere in the world.
          </p>
        </div>

        {/* Single Column Layout */}
        <div className="w-full">
          {/* Globe Section Only - Stats removed */}
          <div className="mb-8">
            <div className="relative w-full flex justify-center">
              <div className="relative">
                <div 
                  ref={globeRef}
                  className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden flex items-center justify-center mx-auto"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 0 20px rgba(0, 198, 255, 0.2)'
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="h-16 w-16 md:h-20 md:w-20 text-cyan-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full">
            <div 
              ref={formRef}
              className="relative rounded-xl p-5 md:p-6 backdrop-blur-xl border border-white/20 w-full"
              style={{
                background: 'rgba(15, 23, 42, 0.7)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              {/* Success message */}
              {isSubmitted ? (
                <div 
                  ref={successRef}
                  className="text-center py-6"
                >
                  <div className="relative inline-block mb-4">
                    <div className="relative p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500">
                      <CheckCircle className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">Consultation Request Sent! 🎉</h3>
                  <p className="text-blue-100/80 text-sm mb-6">
                    Your free consultation request has been submitted successfully.
                    We'll contact you within 24-48 hours.
                  </p>
                  
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        description: '',
                        timezone: 'GMT',
                        consultationType: 'video',
                        region: 'global'
                      });
                      setSelectedService('');
                      setActiveRegion('global');
                      setSubmitError('');
                    }}
                    className="px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 w-full">
                  <RegionSelector />
                  
                  <ServiceSelector />
                  
                  <ConsultationSelector />
                  
                  {/* Error message */}
                  {submitError && (
                    <div 
                      ref={errorRef}
                      className="p-3 rounded-lg border border-red-500/30 bg-red-500/10"
                    >
                      <div className="flex items-center gap-2 text-red-300 text-sm">
                        <X className="h-4 w-4 flex-shrink-0" />
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}
                  
                  {/* Personal Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-cyan-300" />
                      <h3 className="text-sm font-bold text-white">Personal Details</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-cyan-300 opacity-60" />
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({...formData, name: e.target.value});
                            if (submitError) setSubmitError('');
                          }}
                          placeholder="Your Name *"
                          className="w-full pl-10 pr-3 py-3 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-cyan-300 opacity-60" />
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({...formData, email: e.target.value});
                            if (submitError) setSubmitError('');
                          }}
                          placeholder="Email Address *"
                          className="w-full pl-10 pr-3 py-3 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-cyan-300 opacity-60" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({...formData, phone: e.target.value});
                            if (submitError) setSubmitError('');
                          }}
                          placeholder="Phone (Optional)"
                          className="w-full pl-10 pr-3 py-3 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                        />
                      </div>
                      
                      <div className="relative">
                        <Award className="absolute left-3 top-3 h-4 w-4 text-cyan-300 opacity-60" />
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => {
                            setFormData({...formData, company: e.target.value});
                            if (submitError) setSubmitError('');
                          }}
                          placeholder="Company (Optional)"
                          className="w-full pl-10 pr-3 py-3 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Description */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-cyan-300" />
                      <h3 className="text-sm font-bold text-white">Project Details</h3>
                    </div>
                    
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-cyan-300 opacity-60" />
                      <textarea
                        required
                        value={formData.description}
                        onChange={(e) => {
                          setFormData({...formData, description: e.target.value});
                          if (submitError) setSubmitError('');
                        }}
                        placeholder="Briefly describe your project... *"
                        rows="4"
                        className="w-full pl-10 pr-3 py-3 text-sm rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>
                  
                  {/* Time Slot Selection */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-cyan-300" />
                      <h3 className="text-sm font-bold text-white">Preferred Time (Optional)</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {timeSlots.map((slot, i) => (
                        <button
                          key={i}
                          type="button"
                          disabled={!slot.available}
                          className={`p-2 rounded-lg text-sm transition-all duration-200 ${
                            slot.available 
                              ? 'bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-500/50 text-white' 
                              : 'bg-white/5 opacity-40 cursor-not-allowed border border-white/5 text-white/40'
                          }`}
                        >
                          <div className="flex flex-col items-center">
                            <span className="text-xs">{slot.time}</span>
                            {slot.available ? (
                              <span className="text-[10px] text-green-400 mt-1">Available</span>
                            ) : (
                              <span className="text-[10px] text-red-400 mt-1">Booked</span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full py-3.5 rounded-xl overflow-hidden transition-all duration-500 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background: colors.gradient
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center text-white font-bold text-sm md:text-base">
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Rocket className="mr-2 h-4 w-4" />
                          Submit Consultation Request
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </span>
                  </button>
                  
                  {/* Privacy Note */}
                  <div className="text-center space-y-2">
                    <p className="text-xs text-blue-100/60 flex items-center justify-center gap-2">
                      <Shield className="h-3 w-3" />
                      Your information is secure. We follow GDPR & global privacy standards.
                    </p>
                    
                    <p className="text-xs text-cyan-300/70">
                      You'll receive a confirmation email after submission.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetinTouch;