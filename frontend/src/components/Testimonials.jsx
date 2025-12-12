import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Star, Quote, 
  Award, TrendingUp, Zap, Sparkles, 
  Heart, Shield, Globe, CheckCircle
} from 'lucide-react';
import gsap from 'gsap';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const progressBarRef = useRef(null);

  // Professional color scheme
  const colors = {
    primary: '#0066FF',
    secondary: '#8A2BE2',
    accent: '#00D4AA',
    gold: '#FFD700',
    background: 'linear-gradient(135deg, #0A192F 0%, #1E3A8A 50%, #2D1B69 100%)',
    cardBg: 'rgba(15, 23, 42, 0.95)',
    light: 'rgba(255, 255, 255, 0.95)'
  };

  // Premium testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alexandra Morgan",
      role: "CEO, FinTech Innovations",
      company: "FinTech Africa",
      rating: 5,
      content: "BitAfrica's AI solutions revolutionized our entire fraud detection system. Within 3 months, we achieved 99.7% accuracy in real-time transaction monitoring.",
      impact: "₦2.8B Saved Annually",
      industry: "FinTech",
      duration: "6 Months",
      stats: { accuracy: "99.7%", speed: "3ms", uptime: "99.99%" },
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: '#0066FF',
      achievements: ["Fraud detection accuracy increased by 45%", "Real-time monitoring implementation", "₦2.8B annual savings"]
    },
    {
      id: 2,
      name: "Kwame Osei",
      role: "CTO, AgriTech Solutions",
      company: "AgriTech Africa",
      rating: 5,
      content: "The predictive analytics platform increased our crop yields by 47% while optimizing water usage. This is truly transformative for African agriculture.",
      impact: "+47% Yield Increase",
      industry: "Agriculture",
      duration: "8 Months",
      stats: { yield: "+47%", savings: "35% Water", roi: "8.2x" },
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: '#10B981',
      achievements: ["47% increase in crop yield", "35% water usage optimization", "8.2x ROI achieved"]
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      company: "HealthBridge Africa",
      rating: 4.5,
      content: "Our predictive healthcare system now anticipates outbreaks with 92% accuracy. This technology is literally saving lives across the continent.",
      impact: "30% Cost Reduction",
      industry: "Healthcare",
      duration: "1 Year",
      stats: { accuracy: "92%", patients: "50K+", savings: "30%" },
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: '#00D4AA',
      achievements: ["92% outbreak prediction accuracy", "50,000+ patients served", "30% operational cost reduction"]
    },
    {
      id: 4,
      name: "David Chen",
      role: "Head of Smart Cities",
      company: "UrbanTech Solutions",
      rating: 5,
      content: "The smart city infrastructure handles 2.5M IoT devices with zero downtime. Traffic optimization reduced commute times by 40% city-wide.",
      impact: "40% Faster Commutes",
      industry: "Smart Cities",
      duration: "18 Months",
      stats: { devices: "2.5M", uptime: "100%", efficiency: "40%" },
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: '#8A2BE2',
      achievements: ["2.5M IoT devices managed", "Zero downtime maintained", "40% commute time reduction"]
    },
    {
      id: 5,
      name: "Fatima Zahra",
      role: "Education Director",
      company: "EduTech Connect",
      rating: 5,
      content: "Our adaptive learning platform now serves 500K+ students. Engagement increased by 300% and test scores improved by 42% across all regions.",
      impact: "500K+ Students Served",
      industry: "Education",
      duration: "10 Months",
      stats: { students: "500K+", engagement: "+300%", scores: "+42%" },
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      color: '#F59E0B',
      achievements: ["500,000+ students served", "300% engagement increase", "42% test score improvement"]
    }
  ];

  // Success metrics
  const successMetrics = [
    { value: "99%", label: "Client Satisfaction", icon: <Heart className="h-4 w-4" />, change: "+2%" },
    { value: "98%", label: "Project Success", icon: <Shield className="h-4 w-4" />, change: "+3%" },
    { value: "24/7", label: "Support Coverage", icon: <Zap className="h-4 w-4" />, change: "99.9%" },
    { value: "200+", label: "Happy Clients", icon: <Award className="h-4 w-4" />, change: "+50" }
  ];

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      const activeCard = cardsRef.current[activeIndex];
      if (activeCard) {
        gsap.fromTo(activeCard,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        );
      }

      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: '100%',
          duration: 5,
          ease: "none",
          onComplete: () => {
            if (progressBarRef.current) {
              gsap.set(progressBarRef.current, { width: '0%' });
            }
          }
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-3 w-3 sm:h-4 sm:w-4 ${i < rating ? 'fill-current' : ''}`}
          style={{ color: i < rating ? colors.gold : 'rgba(255,255,255,0.3)' }}
        />
      ))}
    </div>
  );

  // Stat badge component
  const StatBadge = ({ label, value, color }) => (
    <div 
      className="px-2 py-1.5 rounded-lg flex items-center justify-between bg-white/5 border border-white/10"
    >
      <span className="text-xs text-white/70">{label}</span>
      <span className="text-sm font-bold ml-2" style={{ color: color }}>{value}</span>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative py-12 sm:py-16 overflow-hidden"
      style={{ background: colors.background }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              background: colors.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.2 + 0.1,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4">
            <Sparkles className="h-3 w-3 text-cyan-300 sm:h-4 sm:w-4" />
            <span className="text-xs font-bold text-cyan-300 tracking-wider sm:text-sm">
              CLIENT SUCCESS STORIES
            </span>
          </div>
          
          <h2 className="text-2xl font-bold mb-3 sm:text-3xl lg:text-4xl">
            <span className="block text-white/90">Trusted by Industry</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Leaders Across Africa
            </span>
          </h2>
          
          <p className="text-sm text-blue-100/70 leading-relaxed sm:text-base">
            See how enterprises are transforming operations and achieving unprecedented results with BitAfrica AI.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 sm:mb-10">
          {successMetrics.map((metric, index) => (
            <div 
              key={index}
              className="relative bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-lg font-bold text-white">{metric.value}</div>
                <div className="p-1.5 rounded-lg bg-white/10">
                  <div className="text-cyan-300">{metric.icon}</div>
                </div>
              </div>
              <div className="text-xs text-blue-100/70 mb-1">{metric.label}</div>
              <div className="flex items-center gap-1 text-xs">
                <TrendingUp className="h-3 w-3 text-green-400" />
                <span className="text-green-400 font-semibold">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className={`transition-all duration-300 ${
                    index === activeIndex 
                      ? 'w-6 bg-gradient-to-r from-cyan-500 to-blue-500' 
                      : 'w-1.5 bg-white/30'
                  } h-1.5 rounded-full`}
                />
              ))}
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={prevTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:bg-white/10 sm:w-10 sm:h-10"
              >
                <ChevronLeft className="h-4 w-4 text-white/70 hover:text-cyan-300 sm:h-5 sm:w-5" />
              </button>
              
              <button
                onClick={nextTestimonial}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="w-8 h-8 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:bg-white/10 sm:w-10 sm:h-10"
              >
                <ChevronRight className="h-4 w-4 text-white/70 hover:text-cyan-300 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden mb-6">
            <div 
              ref={progressBarRef}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              style={{ width: '0%' }}
            />
          </div>

          {/* Active Testimonial Card - Professional Design */}
          <div ref={sliderRef} className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                ref={el => cardsRef.current[index] = el}
                className={`transition-all duration-500 ${
                  index === activeIndex 
                    ? 'opacity-100 scale-100' 
                    : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                }`}
              >
                <div 
                  className="relative rounded-xl overflow-hidden border border-white/10"
                  style={{ 
                    background: colors.cardBg,
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  <div className="p-5 sm:p-6 lg:p-8">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                      {/* Left Column - Profile & Stats */}
                      <div className="lg:w-2/5">
                        <div className="flex flex-col sm:flex-row lg:flex-col gap-5">
                          {/* Profile Section */}
                          <div className="flex sm:items-center gap-4">
                            {/* Avatar with comfortable background */}
                            <div className="relative flex-shrink-0">
                              <div className="absolute -inset-1 rounded-full opacity-20"
                                style={{ background: testimonial.color }}
                              />
                              <div 
                                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white/20"
                                style={{ 
                                  background: `${testimonial.color}20`,
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center'
                                }}
                              >
                                <img
                                  src={testimonial.avatar}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                            
                            {/* Client Info */}
                            <div>
                              <h4 className="text-lg font-bold text-white mb-1 sm:text-xl">
                                {testimonial.name}
                              </h4>
                              <div className="mb-2">
                                <StarRating rating={testimonial.rating} />
                              </div>
                              <p className="text-sm text-cyan-300 font-medium">
                                {testimonial.role}
                              </p>
                              <p className="text-xs text-white/70 mt-0.5">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>

                          {/* Key Stats */}
                          <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-3">
                              <div 
                                className="p-3 rounded-lg"
                                style={{ 
                                  background: `${testimonial.color}15`,
                                  border: `1px solid ${testimonial.color}30`
                                }}
                              >
                                <div className="text-xs text-white/70 mb-1">Industry</div>
                                <div className="text-sm font-bold text-white">{testimonial.industry}</div>
                              </div>
                              
                              <div 
                                className="p-3 rounded-lg"
                                style={{ 
                                  background: `${testimonial.color}15`,
                                  border: `1px solid ${testimonial.color}30`
                                }}
                              >
                                <div className="text-xs text-white/70 mb-1">Duration</div>
                                <div className="text-sm font-bold text-white">{testimonial.duration}</div>
                              </div>
                            </div>
                            
                            <div 
                              className="p-3 rounded-lg"
                              style={{ 
                                background: `${testimonial.color}10`,
                                border: `1px solid ${testimonial.color}20`
                              }}
                            >
                              <div className="text-xs text-white/70 mb-1">Key Impact</div>
                              <div className="text-base font-bold text-white flex items-center gap-2">
                                <Zap className="h-4 w-4" style={{ color: testimonial.color }} />
                                {testimonial.impact}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Column - Content & Achievements */}
                      <div className="lg:w-3/5">
                        {/* Quote Content */}
                        <div className="mb-6">
                          <div className="flex items-start gap-3">
                            <Quote className="h-5 w-5 text-cyan-300/50 flex-shrink-0 mt-1 sm:h-6 sm:w-6" />
                            <p className="text-sm text-white/90 leading-relaxed italic sm:text-base">
                              "{testimonial.content}"
                            </p>
                          </div>
                        </div>

                        {/* Key Achievements */}
                        <div className="mb-6">
                          <h5 className="text-sm font-bold text-white/90 mb-3 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400" />
                            Key Achievements
                          </h5>
                          <div className="space-y-2">
                            {testimonial.achievements.map((achievement, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div 
                                  className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                  style={{ background: testimonial.color }}
                                />
                                <span className="text-sm text-white/80">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Performance Stats */}
                        <div>
                          <h5 className="text-sm font-bold text-white/90 mb-3">Performance Metrics</h5>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {Object.entries(testimonial.stats).map(([key, value], idx) => (
                              <StatBadge 
                                key={idx}
                                label={key.charAt(0).toUpperCase() + key.slice(1)}
                                value={value}
                                color={testimonial.color}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Industry Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ 
                      background: `${testimonial.color}20`,
                      color: testimonial.color,
                      border: `1px solid ${testimonial.color}40`
                    }}
                  >
                    {testimonial.industry}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Counter */}
        <div className="text-center mt-8 sm:mt-10">
          <div className="inline-flex items-center gap-6 px-6 py-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-xs text-white/70">Happy Clients</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-white/70">Success Rate</div>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/70">Support</div>
            </div>
          </div>
          
          <p className="text-xs text-blue-100/60 mt-3 sm:text-sm">
            Join industry leaders transforming with BitAfrica AI solutions
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0A192F 0%, transparent 100%)',
          opacity: 0.6
        }}
      />
    </section>
  );
};

export default Testimonials;