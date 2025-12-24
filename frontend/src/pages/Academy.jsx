import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Cpu, Brain, Code, Cloud, Shield, 
  Layers, Globe, Terminal, Database, Users,
  BookOpen, Target, Briefcase, Clock, Gift, Zap, Star, Award
} from 'lucide-react';

const Academy = () => {
  const [activeTech, setActiveTech] = useState(0);
  const [activeCourse, setActiveCourse] = useState(0);
  const [freeCourseMessage, setFreeCourseMessage] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [pulse, setPulse] = useState(true);
  
  const techIcons = [
    { icon: <Cpu className="h-8 w-8" />, color: "text-cyan-400", bg: "bg-cyan-500/10", label: "AI Systems" },
    { icon: <Brain className="h-8 w-8" />, color: "text-purple-400", bg: "bg-purple-500/10", label: "Machine Learning" },
    { icon: <Code className="h-8 w-8" />, color: "text-blue-400", bg: "bg-blue-500/10", label: "Web Development" },
    { icon: <Cloud className="h-8 w-8" />, color: "text-emerald-400", bg: "bg-emerald-500/10", label: "Cloud Computing" },
    { icon: <Shield className="h-8 w-8" />, color: "text-amber-400", bg: "bg-amber-500/10", label: "Cybersecurity" },
    { icon: <Database className="h-8 w-8" />, color: "text-pink-400", bg: "bg-pink-500/10", label: "Data Science" }
  ];

  const courses = [
    {
      id: 1,
      title: "Artificial Intelligence Fundamentals",
      description: "Master the foundations of AI and machine learning with practical projects",
      icon: <Brain className="h-10 w-10" />,
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      duration: "16 Weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Neural Networks", "Computer Vision", "Natural Language Processing", "Reinforcement Learning"]
    },
    {
      id: 2,
      title: "Full-Stack Web Development",
      description: "Build modern web applications using cutting-edge technologies",
      icon: <Code className="h-10 w-10" />,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      duration: "12 Weeks",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"]
    },
    {
      id: 3,
      title: "Cybersecurity & Ethical Hacking",
      description: "Learn to protect systems and networks from digital threats",
      icon: <Shield className="h-10 w-10" />,
      color: "text-amber-400",
      bgColor: "bg-amber-500/10",
      duration: "14 Weeks",
      level: "Advanced",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["Penetration Testing", "Network Security", "Cryptography", "Incident Response"]
    },
    {
      id: 4,
      title: "Cloud Engineering & DevOps",
      description: "Design and deploy scalable cloud infrastructure",
      icon: <Cloud className="h-10 w-10" />,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10",
      duration: "15 Weeks",
      level: "Intermediate",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      topics: ["AWS", "Docker", "Kubernetes", "CI/CD", "Infrastructure as Code"]
    }
  ];

  const learningEnvironments = [
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Collaborative Learning",
      description: "Work with peers on real-world projects in our state-of-the-art labs"
    },
    {
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Industry Projects",
      description: "Solve actual business problems from our partner companies"
    },
    {
      image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Expert Mentorship",
      description: "Learn directly from industry professionals with years of experience"
    }
  ];

  const heroImageUrl = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";

  // Free course messages to cycle through
  const freeCourseMessages = [
    "🎁 GET FREE ACCESS to introductory courses in Web Development, AI Basics, and Cybersecurity on our dashboard",
    "🚀 START LEARNING TODAY with free Python Programming and Cloud Computing modules - No credit card required",
    "⭐ EXPLORE OUR FREE LIBRARY: HTML/CSS fundamentals, Data Science basics, and Networking essentials available now",
    "💫 UNLOCK FREE COURSES in React, Node.js, and Database Management - Perfect for beginners"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTech((prev) => (prev + 1) % techIcons.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const courseInterval = setInterval(() => {
      setActiveCourse((prev) => (prev + 1) % courses.length);
    }, 4000);

    return () => clearInterval(courseInterval);
  }, []);

  // Cycle through free course messages
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % freeCourseMessages.length);
      setFreeCourseMessage(freeCourseMessages[messageIndex]);
    }, 5000);

    // Set initial message
    setFreeCourseMessage(freeCourseMessages[0]);

    return () => clearInterval(messageInterval);
  }, [messageIndex]);

  // Pulsing effect for free offer
  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulse(prev => !prev);
    }, 1500);
    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0d0f1a] to-[#0a0a0f] text-white overflow-hidden" style={{ cursor: 'default' }}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0d0f1a] to-[#0a0a0f]" />
        
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(to right, #888 1px, transparent 1px),
              linear-gradient(to bottom, #888 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
        
        {techIcons.map((tech, index) => (
          <div
            key={index}
            className={`absolute rounded-full ${tech.bg} backdrop-blur-sm border border-white/10 flex items-center justify-center transition-all duration-1000 ${
              activeTech === index ? 'opacity-100 scale-100' : 'opacity-20 scale-50'
            }`}
            style={{
              left: `${15 + (index * 15)}%`,
              top: `${20 + (Math.sin(index) * 10)}%`,
              width: `${60 + (Math.sin(index) * 20)}px`,
              height: `${60 + (Math.sin(index) * 20)}px`,
              animationDelay: `${index * 0.5}s`,
              cursor: 'default'
            }}
          >
            <div className={tech.color} style={{ cursor: 'default' }}>
              {tech.icon}
            </div>
          </div>
        ))}
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${heroImageUrl})`,
              backgroundPosition: 'center center',
              backgroundAttachment: 'fixed'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-[#0a0a0f]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/50 via-transparent to-[#0a0a0f]/50" />
        </div>

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6" style={{ cursor: 'default' }}>
            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <span className="text-sm text-cyan-300 tracking-widest uppercase" style={{ cursor: 'default' }}>TECH EDUCATION</span>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-4" style={{ cursor: 'default' }}>
            <span className="block opacity-90">TECH</span>
            <span className="block opacity-80 mt-1">EDUCATION</span>
            <span className="block opacity-70 mt-1">REIMAGINED</span>
          </h1>

          <div className="max-w-xl mx-auto">
            <p className="text-base text-gray-300/70 font-light tracking-wide" style={{ cursor: 'default' }}>
              Transforming futures through innovative learning experiences
            </p>
          </div>

          <div className="flex justify-center gap-6 mt-10">
            {techIcons.slice(0, 4).map((tech, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${activeTech === index ? 'transform -translate-y-3 opacity-100' : 'opacity-30'}`}
                style={{ cursor: 'default' }}
              >
                <div className={`p-3 rounded-xl ${tech.bg} backdrop-blur-sm border border-white/10`}>
                  <div className={tech.color}>
                    {tech.icon}
                  </div>
                </div>
                {activeTech === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSPICUOUS Free Course Information Banner */}
      <section className={`py-5 px-4 relative ${pulse ? 'bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-emerald-500/15' : 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-emerald-500/20'} border-y border-cyan-500/30 shadow-lg transition-all duration-1000`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6" style={{ cursor: 'default' }}>
            {/* Animated Gift Icon */}
            <div className={`flex items-center justify-center p-3 rounded-full ${pulse ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30' : 'bg-gradient-to-r from-cyan-500/40 to-purple-500/40'} border border-cyan-500/50 shadow-lg transition-all duration-1000`}>
              <Gift className="h-6 w-6 text-white animate-bounce" />
            </div>
            
            {/* Zap Icon */}
            <div className="hidden md:flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30">
              <Zap className="h-5 w-5 text-amber-400 animate-pulse" />
            </div>
            
            {/* Main Message */}
            <div className="text-center md:text-left flex-1">
              <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4" style={{ cursor: 'default' }}>
                <h3 className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-300 via-white to-emerald-300 bg-clip-text text-transparent" style={{ cursor: 'default' }}>
                  FREE LEARNING OPPORTUNITY
                </h3>
                <div className="hidden md:flex items-center gap-2" style={{ cursor: 'default' }}>
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                  <Star className="h-4 w-4 text-amber-400 fill-current" />
                </div>
              </div>
              <p className="text-white text-sm md:text-base font-medium mt-1 md:mt-2 animate-pulse" style={{ cursor: 'default' }}>
                {freeCourseMessage}
              </p>
            </div>
            
            {/* Award Icon */}
            <div className="hidden md:flex items-center justify-center p-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30">
              <Award className="h-5 w-5 text-emerald-400" />
            </div>
          </div>
          
          {/* Mobile-only Star Rating */}
          <div className="flex justify-center gap-1 mt-2 md:hidden" style={{ cursor: 'default' }}>
            <Star className="h-3 w-3 text-amber-400 fill-current" />
            <Star className="h-3 w-3 text-amber-400 fill-current" />
            <Star className="h-3 w-3 text-amber-400 fill-current" />
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4" style={{ cursor: 'default' }}>
              <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <BookOpen className="h-5 w-5 text-cyan-400/70" />
              <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-3" style={{ cursor: 'default' }}>
              Specialized Programs
            </h2>
            <p className="text-base text-gray-300/60 max-w-lg mx-auto font-light" style={{ cursor: 'default' }}>
              Comprehensive courses designed for the modern tech landscape
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`group relative overflow-hidden rounded-xl border border-white/10 backdrop-blur-sm transition-all duration-500 ${activeCourse === index ? 'bg-white/5' : 'bg-white/2'}`}
                onMouseEnter={() => setActiveCourse(index)}
                style={{ cursor: 'default' }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ cursor: 'default' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start gap-3 mb-4" style={{ cursor: 'default' }}>
                    <div className={`p-3 rounded-lg ${course.bgColor}`}>
                      <div className={course.color}>
                        {course.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-light mb-1" style={{ cursor: 'default' }}>{course.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400" style={{ cursor: 'default' }}>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          {course.level}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300/70 text-sm mb-4 font-light leading-relaxed" style={{ cursor: 'default' }}>
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-2" style={{ cursor: 'default' }}>
                    {course.topics.map((topic, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10 text-gray-300/60"
                        style={{ cursor: 'default' }}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Learning Methodology */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4" style={{ cursor: 'default' }}>
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                <Users className="h-5 w-5 text-purple-400/70" />
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-3" style={{ cursor: 'default' }}>
                Learning Environment
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {learningEnvironments.map((env, index) => (
                <div key={index} className="group" style={{ cursor: 'default' }}>
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={env.image}
                      alt={env.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ cursor: 'default' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  </div>
                  <h4 className="text-lg font-light mb-2" style={{ cursor: 'default' }}>{env.title}</h4>
                  <p className="text-gray-300/60 text-sm font-light" style={{ cursor: 'default' }}>{env.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4" style={{ cursor: 'default' }}>
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
                <Layers className="h-5 w-5 text-emerald-400/70" />
                <div className="h-px w-8 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-light tracking-tight mb-3" style={{ cursor: 'default' }}>
                Technologies
              </h3>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: <Brain className="h-6 w-6" />, name: "AI/ML", color: "text-purple-400" },
                { icon: <Code className="h-6 w-6" />, name: "Web", color: "text-blue-400" },
                { icon: <Cloud className="h-6 w-6" />, name: "Cloud", color: "text-emerald-400" },
                { icon: <Shield className="h-6 w-6" />, name: "Security", color: "text-amber-400" },
                { icon: <Database className="h-6 w-6" />, name: "Data", color: "text-pink-400" }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center p-4 bg-white/2 rounded-lg border border-white/10 backdrop-blur-sm hover:bg-white/5 transition-all duration-300"
                  style={{ cursor: 'default' }}
                >
                  <div className={`mb-2 ${tech.color} transition-transform duration-300 group-hover:scale-110`}>
                    {tech.icon}
                  </div>
                  <div className="text-xs text-gray-300/70 tracking-wide" style={{ cursor: 'default' }}>{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-12 px-4 relative">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Terminal className="h-10 w-10 text-cyan-400/50 mx-auto mb-4" />
            <div className="text-base font-light text-gray-300/70 italic text-center leading-relaxed" style={{ cursor: 'default' }}>
              "The future belongs to those who learn, adapt, and innovate."
            </div>
          </div>

          <div className="flex items-center justify-center gap-3 mb-4" style={{ cursor: 'default' }}>
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <Layers className="h-3 w-3 text-cyan-400/30" />
            <div className="h-px w-8 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
          </div>

          <div className="text-xs text-gray-400/40 tracking-widest uppercase text-center" style={{ cursor: 'default' }}>
            BITAFRICA AI ACADEMY • EST. 2020
          </div>
        </div>
      </section>

      {/* Dynamic Background Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 30}px`,
              height: `${Math.random() * 80 + 30}px`,
              background: `radial-gradient(circle, 
                ${i % 3 === 0 ? 'rgba(56, 189, 248, 0.02)' : 
                  i % 3 === 1 ? 'rgba(168, 85, 247, 0.02)' : 
                  'rgba(34, 211, 238, 0.02)'}, 
                transparent)`,
              animationDuration: `${Math.random() * 15 + 8}s`,
              animationDelay: `${Math.random() * 5}s`,
              cursor: 'default'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Academy;