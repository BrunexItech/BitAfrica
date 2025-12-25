import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, Star, Sparkles
} from 'lucide-react';
import gsap from 'gsap';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  // Simple testimonials data with only essential info
  const testimonials = [
    {
      id: 1,
      name: "Gladys Osei",
      role: "CEO, FinTech Innovations",
      message: "BitAfrica's AI solutions revolutionized our entire fraud detection system. Truly transformative.",
      avatar: "https://i.ibb.co/bM12Hd2m/Screenshot-2025-12-25-15-54-24-60-f598e1360c96b5a5aa16536c303cff92-2.jpg",
      color: '#0066FF'
    },
    {
      id: 2,
      name: "Alexandra Morgan",
      role: "CTO, AgriTech Solutions",
      message: "The predictive analytics platform increased our crop yields by 47%. Game-changing technology.",
      avatar: "https://i.ibb.co/mVy2Rc29/Screenshot-2025-12-25-16-03-13-69-f598e1360c96b5a5aa16536c303cff92-2.jpg",
      color: '#10B981'
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      role: "Medical Director",
      message: "Our predictive healthcare system now anticipates outbreaks with 92% accuracy. Saving lives.",
      avatar: "https://i.ibb.co/9mdCN5ch/Screenshot-2025-12-25-16-05-33-33-f598e1360c96b5a5aa16536c303cff92-2.jpg",
      color: '#00D4AA'
    },
    {
      id: 4,
      name: "Fatima Zara",
      role: "Head of Smart Cities",
      message: "The smart city infrastructure handles 2.5M IoT devices with zero downtime. Impressive reliability.",
      avatar: "https://i.ibb.co/1t9qnpY0/Screenshot-2025-12-25-15-44-30-56-f598e1360c96b5a5aa16536c303cff92-2.jpg",
      color: '#8A2BE2'
    },
    {
      id: 5,
      name: "Clinton Albright",
      role: "Education Director",
      message: "Our adaptive learning platform serves 500K+ students. Engagement increased by 300%.",
      avatar: "https://i.ibb.co/d0vtx2qB/Screenshot-2025-12-25-15-59-22-65-f598e1360c96b5a5aa16536c303cff92-3.jpg",
      color: '#F59E0B'
    }
  ];

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // GSAP animations for simple fade
  useEffect(() => {
    const ctx = gsap.context(() => {
      const activeCard = cardsRef.current[activeIndex];
      if (activeCard) {
        gsap.fromTo(activeCard,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeIndex]);

  // Star rating component
  const StarRating = ({ rating }) => (
    <div className="flex gap-1 justify-center md:justify-start">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 text-amber-400"
          fill={i < rating ? "currentColor" : "none"}
        />
      ))}
    </div>
  );

  return (
    <section 
      ref={containerRef}
      className="relative py-16 px-4 sm:px-6 md:px-8 overflow-hidden select-none"
    >
      {/* Background from previous component */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                          linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header with nice radius and background */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-full max-w-md mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-8 py-4 border border-cyan-500/30 shadow-xl">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-cyan-400" />
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  CLIENT SUCCESS STORIES
                </span>
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
            </div>
          </div>

          <p className="text-gray-300 text-lg mt-6 max-w-2xl mx-auto">
            See what industry leaders say about working with us
          </p>
        </div>

        {/* Simple Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 cursor-pointer ${
                    index === activeIndex 
                      ? 'w-8 bg-gradient-to-r from-cyan-500 to-blue-500' 
                      : 'w-2 bg-white/30'
                  } h-2 rounded-full`}
                />
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:bg-gray-700/50 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5 text-gray-300 hover:text-cyan-300" />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:bg-gray-700/50 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5 text-gray-300 hover:text-cyan-300" />
              </button>
            </div>
          </div>

          {/* Active Testimonial Card - Simple Design */}
          <div className="relative">
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
                <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-xl">
                  <div className="flex flex-col items-center gap-6 md:gap-8">
                    {/* Profile Picture - FIXED: Proper centering on mobile */}
                    <div className="flex flex-col items-center w-full">
                      <div className="relative inline-flex justify-center items-center">
                        {/* FIXED: Gradient background with proper mobile sizing */}
                        <div className="absolute -inset-2 md:-inset-2 rounded-full opacity-20 bg-gradient-to-r from-cyan-500 to-blue-500 scale-110 md:scale-100" />
                        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-gray-600/50">
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Name and Role - Always centered */}
                      <div className="text-center mt-4">
                        <div className="mb-3">
                          <StarRating rating={5} />
                        </div>
                        
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                          {testimonial.name}
                        </h3>
                        
                        <p className="text-cyan-400 font-medium text-sm md:text-base">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Message - Full width, properly centered */}
                    <div className="w-full text-center">
                      <div className="relative">
                        <div className="absolute -left-4 md:-left-8 top-0 text-cyan-400/30 text-4xl md:text-5xl">"</div>
                        <p className="text-gray-300 text-base md:text-lg italic leading-relaxed px-6 md:px-4">
                          {testimonial.message}
                        </p>
                        <div className="absolute -right-4 md:-right-4 bottom-0 text-cyan-400/30 text-4xl md:text-5xl">"</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple Counter */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-6 md:gap-8 px-6 md:px-8 py-4 rounded-xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Enterprise Partners</div>
            </div>
            <div className="h-8 md:h-10 w-px bg-gray-600/50" />
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white">98%</div>
              <div className="text-xs md:text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Add custom CSS to ensure proper centering on all devices */}
      <style jsx>{`
        /* Ensure profile picture container is properly centered */
        .relative.inline-flex {
          display: inline-flex !important;
          justify-content: center !important;
          align-items: center !important;
        }
        
        /* Fix for mobile gradient shadow */
        @media (max-width: 767px) {
          .absolute.-inset-2 {
            /* Reduced inset for mobile to prevent overflow */
            top: -0.5rem;
            right: -0.5rem;
            bottom: -0.5rem;
            left: -0.5rem;
          }
          
          /* Ensure the profile picture container doesn't cause horizontal scroll */
          .flex.flex-col.items-center.w-full {
            overflow: hidden;
          }
        }
        
        /* Fix gradient positioning for all screen sizes */
        .absolute.-inset-2.rounded-full {
          position: absolute;
          border-radius: 9999px;
          z-index: -1;
        }
        
        /* Make sure the gradient doesn't interfere with layout */
        .relative.inline-flex > .absolute {
          pointer-events: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;