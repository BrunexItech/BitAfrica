import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cpu, Shield, Code, Server, Zap, Sparkles,
  GraduationCap, BookOpen, Clock, Users, Target, Award,
  ChevronRight, PlayCircle, Star, TrendingUp, DollarSign,
  Globe, Smartphone, Database, Cloud, Network, Terminal,
  Laptop, Smartphone as Mobile, Tablet, Eye, CheckCircle,
  Video, Headphones, Calendar, MessageSquare, Rocket,
  BarChart, Palette, Gamepad2, Lock, Wifi, ShieldCheck,
  Fingerprint, Bot, Cctv, BrainCircuit, Microscope,
  Globe as Earth, Satellite, RadioTower, CpuIcon,
  ArrowRight, ArrowLeft, Maximize2, ThumbsUp, Award as AwardIcon,
  Target as TargetIcon, Users as UsersIcon, Globe as GlobeIcon
} from 'lucide-react';

const Academy = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [enrolledCount, setEnrolledCount] = useState(12547);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);

  const testimonialImages = [
    "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=1200&h=800&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop&crop=faces"
  ];

  const classroomImages = [
    "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop"
  ];

  const techImages = [
    "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=800&fit=crop"
  ];

  const graduationImages = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&h=800&fit=crop",
    "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=1200&h=800&fit=crop"
  ];

  // Auto-slide testimonials
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % graduationImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying, graduationImages.length]);

  // Animated student counter
  useEffect(() => {
    const interval = setInterval(() => {
      setEnrolledCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const courseCategories = [
    { id: 'all', name: 'All Courses', icon: <Sparkles className="h-5 w-5" />, count: 24, color: 'from-cyan-500 to-blue-500', image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" },
    { id: 'web', name: 'Web Development', icon: <Code className="h-5 w-5" />, count: 6, color: 'from-purple-500 to-pink-500', image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop" },
    { id: 'ai', name: 'AI & Machine Learning', icon: <Brain className="h-5 w-5" />, count: 8, color: 'from-blue-500 to-cyan-500', image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=300&fit=crop" },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" />, count: 4, color: 'from-emerald-500 to-teal-500', image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop" },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="h-5 w-5" />, count: 3, color: 'from-orange-500 to-red-500', image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop" },
    { id: 'mobile', name: 'Mobile Development', icon: <Mobile className="h-5 w-5" />, count: 3, color: 'from-indigo-500 to-purple-500', image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop" }
  ];

  const featuredCourses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      category: 'web',
      icon: <Code className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      duration: '12 Weeks',
      level: 'Beginner → Advanced',
      students: 2345,
      rating: 4.9,
      price: '$499',
      description: 'Master React, Node.js, and modern web development',
      badge: 'Most Popular',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'AI & Machine Learning Bootcamp',
      category: 'ai',
      icon: <Brain className="h-8 w-8" />,
      color: 'from-blue-500 to-cyan-500',
      duration: '16 Weeks',
      level: 'Intermediate → Advanced',
      students: 1890,
      rating: 4.8,
      price: '$899',
      description: 'Build and deploy intelligent AI systems',
      badge: 'Hot & Trending',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Cybersecurity Professional',
      category: 'security',
      icon: <ShieldCheck className="h-8 w-8" />,
      color: 'from-emerald-500 to-teal-500',
      duration: '14 Weeks',
      level: 'All Levels',
      students: 1567,
      rating: 4.7,
      price: '$749',
      description: 'Ethical hacking and security mastery',
      badge: 'Certification',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Cloud Engineering & DevOps',
      category: 'cloud',
      icon: <Cloud className="h-8 w-8" />,
      color: 'from-orange-500 to-red-500',
      duration: '10 Weeks',
      level: 'Intermediate',
      students: 1289,
      rating: 4.6,
      price: '$649',
      description: 'AWS, Docker, Kubernetes mastery',
      badge: 'High Demand',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Mobile App Development',
      category: 'mobile',
      icon: <Mobile className="h-8 w-8" />,
      color: 'from-indigo-500 to-purple-500',
      duration: '11 Weeks',
      level: 'Beginner → Intermediate',
      students: 1987,
      rating: 4.8,
      price: '$549',
      description: 'React Native & Flutter mastery',
      badge: 'Job Ready',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Data Science & Analytics',
      category: 'ai',
      icon: <BarChart className="h-8 w-8" />,
      color: 'from-cyan-500 to-blue-500',
      duration: '13 Weeks',
      level: 'Intermediate → Advanced',
      students: 1456,
      rating: 4.7,
      price: '$799',
      description: 'Python, Pandas, ML algorithms',
      badge: 'AI-Powered',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '12,547+', label: 'Active Students', color: 'text-blue-400', image: classroomImages[0] },
    { icon: <GraduationCap className="h-6 w-6" />, value: '94%', label: 'Completion Rate', color: 'text-emerald-400', image: graduationImages[1] },
    { icon: <Target className="h-6 w-6" />, value: '2,300+', label: 'Career Transitions', color: 'text-purple-400', image: testimonialImages[2] },
    { icon: <DollarSign className="h-6 w-6" />, value: '$85k', label: 'Average Salary Boost', color: 'text-cyan-400', image: techImages[3] }
  ];

  const learningFeatures = [
    { 
      icon: <Video className="h-6 w-6" />, 
      title: 'Live Interactive Classes', 
      desc: 'Real-time learning with experts',
      image: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&h=300&fit=crop'
    },
    { 
      icon: <Headphones className="h-6 w-6" />, 
      title: '1:1 Mentorship', 
      desc: 'Personalized guidance',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&h=300&fit=crop'
    },
    { 
      icon: <Terminal className="h-6 w-6" />, 
      title: 'Hands-on Projects', 
      desc: 'Build real-world applications',
      image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?w=400&h=300&fit=crop'
    },
    { 
      icon: <Award className="h-6 w-6" />, 
      title: 'Industry Certifications', 
      desc: 'Globally recognized credentials',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Former Teacher → Frontend Developer',
      quote: 'BitAfrica Academy transformed my career completely. From classroom to coding in 6 months!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      salary: '$145k',
      company: 'Google',
      image: graduationImages[0]
    },
    {
      name: 'Sarah Chen',
      role: 'Finance Analyst → AI Engineer',
      quote: 'The AI bootcamp was intense but worth every moment. Got 3 job offers before graduation!',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      salary: '$160k',
      company: 'Microsoft',
      image: testimonialImages[1]
    },
    {
      name: 'Michael Omondi',
      role: 'Student → Cybersecurity Specialist',
      quote: 'From zero to hero in 6 months. Landed my dream job in Nairobi with international clients!',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face',
      salary: '$95k',
      company: 'Safaricom',
      image: classroomImages[2]
    },
    {
      name: 'Amina Hassan',
      role: 'Marketing → Full-Stack Developer',
      quote: 'Never coded before. Now I build web apps for major brands across Africa!',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face',
      salary: '$110k',
      company: 'Andela',
      image: graduationImages[3]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a1a] via-[#111827] to-[#0a0a1a] overflow-hidden">
      {/* Hero Section with Background Video/Image */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&h=1080&fit=crop"
            alt="Tech classroom background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a]/90 via-[#111827]/80 to-[#0a0a1a]/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Content */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-8 group hover:scale-105 transition-all duration-300 animate-pulse">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-bold text-cyan-400 tracking-wider">FUTURE TECH EDUCATION</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent animate-gradient-shift">
                Launch Your Tech Career
              </span>
              <br />
              <span className="text-white">With Africa's #1 Coding Academy</span>
            </h1>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Join thousands who transformed their lives. Learn from industry experts, 
              build real projects, and land your dream tech job in months, not years.
            </p>
            
            {/* Stats with Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-white/10 backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <img 
                        src={stat.image} 
                        alt="" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative">
                      <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center group animate-bounce-subtle">
                <PlayCircle className="h-5 w-5 mr-3" />
                Start Free Trial (7 Days)
                <ChevronRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-300 flex items-center justify-center group">
                <Video className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                Watch Success Stories
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Categories Gallery */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-10">
            Explore <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">In-Demand Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courseCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] ${
                  activeCategory === category.id
                    ? 'border-cyan-500/50 scale-[1.02] shadow-2xl shadow-cyan-500/20'
                    : 'border-white/10 hover:border-cyan-500/30'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`h-10 w-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{category.name}</h3>
                      <p className="text-sm text-cyan-300">{category.count} Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Courses with Images */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                Top <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Rated Courses</span>
              </h2>
              <p className="text-gray-400">Hand-picked by industry experts</p>
            </div>
            <Link to="/courses" className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center group">
              View All 24 Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="group bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Course Image */}
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
                      {course.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold text-white">{course.title}</h3>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`h-12 w-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                      <div className="text-white">{course.icon}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">{course.price}</div>
                      <div className="text-sm text-gray-400">or $99/month</div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{course.description}</p>
                  
                  {/* Course Meta */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">{course.level}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-gray-300">{course.students.toLocaleString()}+</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Star className="h-4 w-4 text-yellow-400 mr-2 fill-current" />
                      <span className="text-gray-300">{course.rating}/5.0</span>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 group">
                    Enroll Now - Start Today
                    <ChevronRight className="inline ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Experience Gallery */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-cyan-500/30 rounded-3xl p-8 lg:p-12 overflow-hidden">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                The <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Learning Experience</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                See what makes BitAfrica Academy different from traditional learning
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {learningFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <div className="text-cyan-400">{feature.icon}</div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Slider */}
      <div className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-white mb-12">
            Graduate <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          
          <div className="relative">
            {/* Testimonial Images Slider */}
            <div className="relative h-96 rounded-3xl overflow-hidden mb-8">
              <img 
                src={graduationImages[currentSlide]} 
                alt="Graduate success story"
                className="w-full h-full object-cover transition-opacity duration-1000"
                key={currentSlide}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Slide Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {graduationImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsPlaying(false);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'w-8 bg-cyan-400' 
                        : 'w-2 bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm"
              >
                {isPlaying ? '⏸️' : '▶️'}
              </button>
            </div>
            
            {/* Testimonial Content */}
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl bg-gradient-to-br from-gray-900/70 to-gray-800/50 border border-white/10 transition-all duration-500 ${
                    index === currentSlide ? 'scale-105 border-cyan-500/50' : 'opacity-70'
                  }`}
                >
                  <div className="flex items-start mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="h-14 w-14 rounded-full border-2 border-cyan-500/50"
                    />
                    <div className="ml-4">
                      <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <div className="flex items-center mt-1">
                        <div className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
                          {testimonial.company}
                        </div>
                        <div className="ml-2 flex items-center text-emerald-400 text-sm">
                          <DollarSign className="h-3 w-3 mr-1" />
                          {testimonial.salary}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 italic text-lg">"{testimonial.quote}"</p>
                  <div className="flex items-center justify-between">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <ThumbsUp className="h-5 w-5 text-cyan-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA with Conference Image */}
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30">
            {/* Background Conference Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
                alt="Tech conference"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a]/90 via-[#111827]/80 to-[#0a0a1a]/90"></div>
            </div>
            
            <div className="relative z-10 p-12 text-center">
              <Rocket className="h-20 w-20 text-cyan-400 mx-auto mb-6 animate-bounce-subtle" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Join Africa's Tech Revolution?
              </h2>
              
              <div className="flex items-center justify-center mb-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&${i}`}
                      alt="Student"
                      className="h-12 w-12 rounded-full border-2 border-cyan-500/50"
                    />
                  ))}
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center border-2 border-cyan-500/50">
                    <span className="text-white font-bold">+{Math.floor(enrolledCount / 1000)}K</span>
                  </div>
                </div>
                <div className="ml-4 text-left">
                  <div className="text-2xl font-bold text-cyan-300">{enrolledCount.toLocaleString()}</div>
                  <div className="text-gray-300 text-sm">Students Transformed</div>
                </div>
              </div>
              
              <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto">
                Don't just watch the tech revolution—lead it. Start your journey today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
                  🚀 Start Your Free Trial
                </button>
                <button className="px-10 py-5 border-2 border-white/30 text-white rounded-xl hover:bg-white/5 transition-all duration-300 text-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 mr-3" />
                  Book Career Consultation
                </button>
              </div>
              
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-gray-400">
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  7-Day Free Trial
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  30-Day Money Back
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-emerald-400 mr-2" />
                  Job Placement Support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }
        
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Academy;