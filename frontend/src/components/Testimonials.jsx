import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Star, Quote, 
  Award, TrendingUp, Zap, Sparkles, 
  Heart, Shield, Globe, Rocket
} from 'lucide-react';
import gsap from 'gsap';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef([]);
  const progressBarRef = useRef(null);

  // Premium color scheme with depth
  const colors = {
    primary: '#0066FF',
    secondary: '#8A2BE2',
    accent: '#00D4AA',
    gold: '#FFD700',
    silver: '#C0C0C0',
    background: 'linear-gradient(135deg, #0A192F 0%, #1E3A8A 50%, #2D1B69 100%)',
    glass: 'rgba(255, 255, 255, 0.08)',
    light: 'rgba(255, 255, 255, 0.9)',
    dark: '#0F172A'
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
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: '#0066FF'
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
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: '#10B981'
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
      avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: '#00D4AA'
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
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: '#8A2BE2'
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
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      color: '#F59E0B'
    }
  ];

  // Success metrics
  const successMetrics = [
    { value: "99%", label: "Client Satisfaction", icon: <Heart className="h-5 w-5" />, change: "+2%" },
    { value: "98%", label: "Project Success Rate", icon: <Shield className="h-5 w-5" />, change: "+3%" },
    { value: "24/7", label: "Support Coverage", icon: <Zap className="h-5 w-5" />, change: "99.9%" },
    { value: "200+", label: "Happy Clients", icon: <Award className="h-5 w-5" />, change: "+50" }
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
          { x: 100, opacity: 0, rotationY: 20 },
          { x: 0, opacity: 1, rotationY: 0, duration: 0.8, ease: "power3.out" }
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

      successMetrics.forEach((_, index) => {
        const metric = document.querySelector(`.metric-${index}`);
        if (metric) {
          gsap.from(metric, {
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
              trigger: metric,
              start: "top bottom-=50",
              toggleActions: "play none none reverse"
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-current' : ''}`}
          style={{ color: i < rating ? colors.gold : colors.silver }}
        />
      ))}
    </div>
  );

  // Stat badge component
  const StatBadge = ({ label, value, color }) => (
    <div 
      className="px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm"
      style={{ 
        background: `${color}20`,
        border: `1px solid ${color}40`,
        color: color
      }}
    >
      {label}: <span className="font-bold">{value}</span>
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative py-16 overflow-hidden" // Changed from py-20 to py-16
      style={{ background: colors.background }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              background: colors.primary,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
              animationDelay: `${i * 0.5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
        
        {/* Gradient orbs */}
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.primary}20 0%, transparent 70%)`,
            filter: 'blur(40px)',
            opacity: 0.3
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full"
          style={{
            background: `radial-gradient(circle, ${colors.secondary}20 0%, transparent 70%)`,
            filter: 'blur(40px)',
            opacity: 0.3
          }}
        />
      </div>

      {/* Animated grid */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, ${colors.primary}30 1px, transparent 1px),
            linear-gradient(${colors.primary}30 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 max-w-3xl mx-auto"> {/* Changed from mb-16 to mb-12 */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-4"> {/* Changed from mb-6 to mb-4 */}
            <Sparkles className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-bold text-cyan-300 tracking-wider">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4"> {/* Changed from mb-6 to mb-4 */}
            <span className="block text-white/90">Transformative Results</span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              From Real Clients
            </span>
          </h2>
          
          <p className="text-lg text-blue-100/70 leading-relaxed mt-4"> {/* Changed from text-xl and added mt-4 */}
            Discover how leading enterprises across Africa are achieving unprecedented growth 
            and innovation with BitAfrica AI solutions.
          </p>
        </div>

        {/* Success Metrics - Height Reduced */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8"> {/* Changed gap-4 to gap-3, mb-12 to mb-8 */}
          {successMetrics.map((metric, index) => (
            <div 
              key={index}
              className={`metric-${index} relative group`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-300"> {/* Changed p-5 to p-4 */}
                <div className="flex items-center justify-between mb-2"> {/* Changed mb-3 to mb-2 */}
                  <div className="text-xl font-bold text-white">{metric.value}</div> {/* Changed text-2xl to text-xl */}
                  <div className="p-1.5 rounded-lg bg-white/10"> {/* Changed p-2 to p-1.5 */}
                    <div className="text-cyan-300">{metric.icon}</div>
                  </div>
                </div>
                <div className="text-sm text-blue-100/70 mb-1">{metric.label}</div> {/* Changed mb-2 to mb-1 */}
                <div className="flex items-center gap-1 text-xs"> {/* Changed gap-2 to gap-1 */}
                  <TrendingUp className="h-3 w-3 text-green-400" />
                  <span className="text-green-400 font-semibold">{metric.change}</span>
                  <span className="text-blue-100/50">vs last year</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Testimonials Slider */}
        <div className="relative max-w-6xl mx-auto mb-12"> {/* Changed mb-16 to mb-12 */}
          {/* Navigation Controls - Height Reduced */}
          <div className="flex justify-between items-center mb-4"> {/* Changed mb-8 to mb-4 */}
            <button
              onClick={prevTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="group relative w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10" // Changed w-14 h-14 to w-12 h-12
            >
              <ChevronLeft className="h-5 w-5 text-white/70 group-hover:text-cyan-300 transition-colors" /> {/* Changed h-6 w-6 to h-5 w-5 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <div className="flex items-center gap-2"> {/* Changed gap-3 to gap-2 */}
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6 bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/30'
                  }`} // Changed sizes
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
              className="group relative w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/10" // Changed w-14 h-14 to w-12 h-12
            >
              <ChevronRight className="h-5 w-5 text-white/70 group-hover:text-cyan-300 transition-colors" /> {/* Changed h-6 w-6 to h-5 w-5 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Progress Bar - Reduced Height */}
          <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden mb-6"> {/* Changed h-1 to h-0.5, mb-8 to mb-6 */}
            <div 
              ref={progressBarRef}
              className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
              style={{ width: '0%' }}
            />
          </div>

          {/* Active Testimonial Card - Reduced Padding */}
          <div 
            ref={sliderRef}
            className="relative"
          >
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
                  className="relative rounded-2xl overflow-hidden border border-white/10"
                  style={{ 
                    background: 'rgba(15, 23, 42, 0.7)',
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Gradient border */}
                  <div className="absolute -inset-0.5 rounded-2xl opacity-30">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30" />
                  </div>

                  <div className="relative p-6 lg:p-8"> {/* Changed p-8 lg:p-10 to p-6 lg:p-8 */}
                    <div className="flex flex-col lg:flex-row gap-6 items-start"> {/* Changed gap-8 to gap-6 */}
                      {/* Left Column - Avatar & Stats */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          {/* Avatar with glow */}
                          <div 
                            className="absolute -inset-1.5 rounded-full blur opacity-30" // Changed -inset-2 to -inset-1.5
                            style={{ background: testimonial.color }}
                          />
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="relative w-20 h-20 rounded-full object-cover border-2 border-white/20" // Changed w-24 h-24 to w-20 h-20
                          />
                          
                          {/* Rating badge */}
                          <div className="absolute -bottom-1 -right-1 px-2 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"> {/* Changed sizes */}
                            <div className="flex items-center gap-0.5"> {/* Changed gap-1 to gap-0.5 */}
                              <StarRating rating={testimonial.rating} />
                              <span className="text-xs font-bold text-white ml-0.5">
                                {testimonial.rating}/5
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Quick stats - Reduced Margin */}
                        <div className="mt-4 space-y-2"> {/* Changed mt-6 to mt-4, space-y-3 to space-y-2 */}
                          {Object.entries(testimonial.stats).map(([key, value], idx) => (
                            <div key={idx} className="flex items-center justify-between">
                              <span className="text-xs text-blue-100/60 capitalize">{key}</span>
                              <span className="text-sm font-bold text-white">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Content */}
                      <div className="flex-1">
                        {/* Quote icon - Reduced Margin */}
                        <div className="mb-4"> {/* Changed mb-6 to mb-4 */}
                          <Quote className="h-6 w-6 text-cyan-300/30 mb-2" /> {/* Changed h-8 w-8 to h-6 w-6, mb-4 to mb-2 */}
                          <p className="text-lg text-white/90 leading-relaxed italic"> {/* Changed text-xl to text-lg */}
                            "{testimonial.content}"
                          </p>
                        </div>

                        {/* Client Info - Reduced Margin */}
                        <div className="mb-4"> {/* Changed mb-6 to mb-4 */}
                          <h4 className="text-xl font-bold text-white mb-1"> {/* Changed text-2xl to text-xl */}
                            {testimonial.name}
                          </h4>
                          <div className="flex items-center gap-2 mb-2"> {/* Changed gap-3 to gap-2, mb-4 to mb-2 */}
                            <span className="text-cyan-300 font-medium">{testimonial.role}</span>
                            <span className="text-white/50">•</span>
                            <span className="text-white/70">{testimonial.company}</span>
                          </div>
                        </div>

                        {/* Impact & Industry - Reduced Gap */}
                        <div className="flex flex-wrap gap-2"> {/* Changed gap-3 to gap-2 */}
                          <div 
                            className="px-3 py-1.5 rounded-lg flex items-center gap-1.5" // Changed padding
                            style={{ 
                              background: `${testimonial.color}20`,
                              border: `1px solid ${testimonial.color}40`
                            }}
                          >
                            <Zap className="h-3.5 w-3.5" style={{ color: testimonial.color }} /> {/* Changed h-4 w-4 to h-3.5 w-3.5 */}
                            <span className="font-bold text-white text-sm">{testimonial.impact}</span>
                          </div>
                          
                          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5"> {/* Changed padding */}
                            <Globe className="h-3.5 w-3.5 text-cyan-300" /> {/* Changed h-4 w-4 to h-3.5 w-3.5 */}
                            <span className="text-white/80 text-sm">{testimonial.industry}</span>
                          </div>
                          
                          <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5"> {/* Changed padding */}
                            <Award className="h-3.5 w-3.5 text-cyan-300" /> {/* Changed h-4 w-4 to h-3.5 w-3.5 */}
                            <span className="text-white/80 text-sm">{testimonial.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom stats - Reduced Margin */}
                    <div className="mt-6 pt-6 border-t border-white/10"> {/* Changed mt-8 pt-8 to mt-6 pt-6 */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3"> {/* Changed gap-4 to gap-3 */}
                        <StatBadge 
                          label="Accuracy" 
                          value={testimonial.stats.accuracy || "98%"} 
                          color={testimonial.color}
                        />
                        <StatBadge 
                          label="ROI" 
                          value={testimonial.stats.roi || "7.5x"} 
                          color={testimonial.color}
                        />
                        <StatBadge 
                          label="Uptime" 
                          value={testimonial.stats.uptime || "99.9%"} 
                          color={testimonial.color}
                        />
                        <StatBadge 
                          label="Efficiency" 
                          value={testimonial.stats.efficiency || "+40%"} 
                          color={testimonial.color}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA - Reduced Height */}
        <div className="text-center mt-8"> {/* Added mt-8 */}
          <button 
            className="group relative px-6 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105" // Changed px-8 py-4 to px-6 py-3
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #8A2BE2)'
              }}
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <span className="relative z-10 flex items-center justify-center text-white font-bold text-base"> {/* Changed text-lg to text-base */}
              <Rocket className="mr-2 h-4 w-4 group-hover:rotate-45 transition-transform" /> {/* Changed mr-3 to mr-2, h-5 w-5 to h-4 w-4 */}
              View All Case Studies
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1.5 transition-transform" /> {/* Changed ml-3 to ml-2, h-5 w-5 to h-4 w-4, translate-x-2 to translate-x-1.5 */}
            </span>
          </button>
          
          <p className="text-sm text-blue-100/60 mt-3"> {/* Changed mt-4 to mt-3 */}
            Join 200+ enterprises already transforming with BitAfrica AI
          </p>
        </div>
      </div>

      {/* Bottom gradient fade - Reduced Height */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" // Changed h-32 to h-20
        style={{
          background: 'linear-gradient(to top, #0A192F 0%, transparent 100%)',
          opacity: 0.8
        }}
      />

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        /* Smooth transitions */
        * {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
          .text-5xl {
            font-size: 3rem;
          }
          
          .grid-cols-4 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse,
          .group-hover,
          .transition-all {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;