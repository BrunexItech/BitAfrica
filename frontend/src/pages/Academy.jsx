import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Code2, 
  BrainCircuit, 
  Shield, 
  Rocket,
  Users,
  Target,
  Zap,
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  GraduationCap,
  Heart,
  Star,
  Cloud,
  Database,
  Smartphone,
  Award,
  Clock,
  Brain,
  Server,
  Terminal,
  Video,
  Headphones,
  MessageSquare,
  BarChart,
  Palette,
  Lock,
  ShieldCheck,
  Bot,
  ChevronRight,
  TrendingUp,
  BookOpen,
  Maximize2,
  ThumbsUp,
  Cpu,
  Layers,
  Globe,
  Wifi,
  Fingerprint,
  Gamepad2,
  Satellite,
  RadioTower,
  Microscope,
  Calendar,
  Briefcase,
  Building,
  Globe2,
  Coffee,
  TargetIcon,
  PieChart,
  Cpu as Chip
} from 'lucide-react';

const Academy = () => {
  const { scrollYProgress } = useScroll();
  const containerRef = useRef(null);
  
  // Enhanced scroll transformations
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Interactive states
  const [hoveredPath, setHoveredPath] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [enrolledCount, setEnrolledCount] = useState(12547);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTechButton, setActiveTechButton] = useState('web');
  const [displayedCode, setDisplayedCode] = useState('');
  
  // Enhanced spring animations
  const springConfig = { damping: 20, stiffness: 100 };
  const scaleSpring = useSpring(heroScale, springConfig);
  
  // Data arrays
  const successStories = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Former Teacher → Frontend Developer",
      quote: "BitAfrica AI transformed my career completely. From classroom to coding in 6 months!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      salary: "$145k",
      company: "Google",
      beforeImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Finance Analyst → AI Engineer",
      quote: "The AI bootcamp was intense but worth every moment. Got 3 job offers before graduation!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      salary: "$160k",
      company: "Microsoft",
      beforeImage: "https://images.unsplash.com/photo-1524178234883-043d5c3f3cf4?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      name: "Michael Omondi",
      role: "Student → Cybersecurity Specialist",
      quote: "From zero to hero in 6 months. Landed my dream job in Nairobi with international clients!",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      salary: "$95k",
      company: "Safaricom",
      beforeImage: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      name: "Amina Hassan",
      role: "Marketing → Full-Stack Developer",
      quote: "Never coded before. Now I build web apps for major brands across Africa!",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      salary: "$110k",
      company: "Andela",
      beforeImage: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
    }
  ];

  const techButtons = [
    { id: 'web', name: 'Web Development', icon: <Code2 className="h-5 w-5" />, color: 'from-purple-500 to-pink-500' },
    { id: 'ai', name: 'AI & ML', icon: <Brain className="h-5 w-5" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'security', name: 'Cybersecurity', icon: <Shield className="h-5 w-5" />, color: 'from-emerald-500 to-teal-500' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: <Cloud className="h-5 w-5" />, color: 'from-orange-500 to-red-500' },
    { id: 'mobile', name: 'Mobile Dev', icon: <Smartphone className="h-5 w-5" />, color: 'from-indigo-500 to-purple-500' }
  ];

  const techContent = {
    web: {
      title: "Web Development",
      description: "Build modern, responsive websites and applications",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"],
      icon: <Code2 className="h-12 w-12" />,
      color: "from-purple-500 to-pink-500",
      code: `// Modern React Component
import { useState, useEffect } from 'react';

export default function WebApp() {
  const [features, setFeatures] = useState([]);
  
  useEffect(() => {
    fetchFeatures();
  }, []);
  
  const fetchFeatures = async () => {
    const res = await fetch('/api/features');
    const data = await res.json();
    setFeatures(data);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <header className="p-6">
        <h1 className="text-4xl font-bold">Modern Web App</h1>
      </header>
      
      <main className="p-6">
        {features.map(feature => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </main>
    </div>
  );
}`
    },
    ai: {
      title: "AI & Machine Learning",
      description: "Create intelligent systems and predictive models",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Computer Vision"],
      icon: <Brain className="h-12 w-12" />,
      color: "from-blue-500 to-cyan-500",
      code: `# Neural Network Model
import tensorflow as tf
from tensorflow import keras

class AIModel:
    def __init__(self):
        self.model = self.build_model()
        
    def build_model(self):
        model = keras.Sequential([
            keras.layers.Dense(128, activation='relu'),
            keras.layers.Dropout(0.2),
            keras.layers.Dense(64, activation='relu'),
            keras.layers.Dense(10, activation='softmax')
        ])
        
        model.compile(
            optimizer='adam',
            loss='categorical_crossentropy',
            metrics=['accuracy']
        )
        return model
    
    def predict(self, input_data):
        return self.model.predict(input_data)
    
    def train(self, dataset, epochs=10):
        history = self.model.fit(
            dataset.train_data,
            dataset.train_labels,
            epochs=epochs,
            validation_split=0.2
        )
        return history`
    },
    security: {
      title: "Cybersecurity",
      description: "Protect systems and data from digital threats",
      technologies: ["Ethical Hacking", "Encryption", "Network Security", "Pen Testing"],
      icon: <ShieldCheck className="h-12 w-12" />,
      color: "from-emerald-500 to-teal-500",
      code: `// Secure Authentication System
const crypto = require('crypto');

class SecuritySystem {
    constructor() {
        this.algorithm = 'aes-256-gcm';
    }
    
    encrypt(text, key) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv(
            this.algorithm, 
            Buffer.from(key), 
            iv
        );
        
        let encrypted = cipher.update(text);
        encrypted = Buffer.concat([encrypted, cipher.final()]);
        
        return {
            iv: iv.toString('hex'),
            encryptedData: encrypted.toString('hex'),
            authTag: cipher.getAuthTag().toString('hex')
        };
    }
    
    verifyIntegrity(data, key) {
        return this.validateSignature(data, key);
    }
}`
    },
    cloud: {
      title: "Cloud & DevOps",
      description: "Deploy and manage scalable cloud infrastructure",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
      icon: <Cloud className="h-12 w-12" />,
      color: "from-orange-500 to-red-500",
      code: `# Kubernetes Deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: api
  template:
    metadata:
      labels:
        app: api
    spec:
      containers:
      - name: api
        image: myapp:latest
        ports:
        - containerPort: 8080`
    },
    mobile: {
      title: "Mobile Development",
      description: "Build native and cross-platform mobile applications",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      icon: <Smartphone className="h-12 w-12" />,
      color: "from-indigo-500 to-purple-500",
      code: `// React Native Component
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MobileApp() {
    const [user, setUser] = React.useState(null);
    
    React.useEffect(() => {
        fetchUserData();
    }, []);
    
    const fetchUserData = async () => {
        const response = await fetch('https://api.example.com/user');
        const data = await response.json();
        setUser(data);
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Back!</Text>
            {user && (
                <View style={styles.profile}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.email}>{user.email}</Text>
                </View>
            )}
        </View>
    );
}`
    }
  };

  const featuredCourses = [
    {
      id: 1,
      title: 'Full-Stack Web Development',
      category: 'web',
      icon: <Code2 className="h-8 w-8" />,
      color: 'from-purple-500 to-pink-500',
      duration: '12 Weeks',
      level: 'Beginner → Advanced',
      students: 2345,
      rating: 4.9,
      price: '$499',
      description: 'Master React, Node.js, and modern web development',
      badge: 'Most Popular'
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
      badge: 'Hot & Trending'
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
      badge: 'Certification'
    },
    {
      id: 4,
      title: 'Cloud Engineering Mastery',
      category: 'cloud',
      icon: <Cloud className="h-8 w-8" />,
      color: 'from-orange-500 to-amber-500',
      duration: '15 Weeks',
      level: 'Intermediate → Advanced',
      students: 1423,
      rating: 4.8,
      price: '$699',
      description: 'AWS, Docker, Kubernetes, and DevOps',
      badge: 'High Demand'
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '12,547+', label: 'Active Students', color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { icon: <GraduationCap className="h-6 w-6" />, value: '94%', label: 'Completion Rate', color: 'bg-gradient-to-r from-emerald-500 to-teal-500' },
    { icon: <Target className="h-6 w-6" />, value: '2,300+', label: 'Career Transitions', color: 'bg-gradient-to-r from-purple-500 to-pink-500' },
    { icon: <TrendingUp className="h-6 w-6" />, value: '$85k', label: 'Average Salary', color: 'bg-gradient-to-r from-orange-500 to-red-500' }
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Initialize displayed code
  useEffect(() => {
    setDisplayedCode(techContent.web.code);
  }, []);

  // Handle tech button click
  const handleTechClick = (techId) => {
    setActiveTechButton(techId);
    setDisplayedCode(techContent[techId].code);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEnrolledCount(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % successStories.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isPlaying, successStories.length]);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white text-gray-900 overflow-x-hidden"
    >
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-20"
        style={{ scale: scaleSpring, opacity: heroOpacity }}
      >
        <div className="absolute inset-0 overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-[800px] h-[800px] bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* Academy Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full mb-8 border border-blue-100 shadow-lg"
          >
            <Sparkles className="w-5 h-5 text-blue-600" />
            <span className="font-bold text-blue-700 tracking-wide">
              🚀 TECH TRANSFORMATION • {enrolledCount.toLocaleString()}+ TRANSFORMED
            </span>
          </motion.div>

          {/* Main Headline */}
          <div className="mb-12">
            <motion.h1 
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">
                Future
              </span>
              <br />
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-gray-900"
              >
                Builders
              </motion.span>
            </motion.h1>
            
            {/* Animated "Zero to Hero" */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200 shadow-lg my-8"
            >
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-red-100 text-red-700 rounded-xl font-bold text-lg">0</div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <ArrowRight className="w-8 h-8 text-blue-600" />
                </motion.div>
                <div className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-bold text-lg">HERO</div>
              </div>
              <span className="text-gray-700 font-semibold text-lg">in 6 Months</span>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-xl ${stat.color} shadow-md mb-4`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Tech Demo */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-200">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {techButtons.map((tech) => (
                  <motion.button
                    key={tech.id}
                    onClick={() => handleTechClick(tech.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-4 rounded-xl flex items-center gap-3 transition-all shadow-md ${
                      activeTechButton === tech.id
                        ? `bg-gradient-to-r ${tech.color} text-white`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${activeTechButton === tech.id ? 'bg-white/20' : 'bg-white'}`}>
                      {tech.icon}
                    </div>
                    <span className="font-semibold">{tech.name}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-inner">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-gray-300 font-mono">
                      {techContent[activeTechButton].title.toLowerCase().replace(/\s+/g, '_')}
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    {techContent[activeTechButton].technologies.join(' • ')}
                  </div>
                </div>
                
                <pre className="text-left font-mono text-gray-300 overflow-x-auto p-8 text-sm max-h-[280px]">
                  <code>{displayedCode}</code>
                </pre>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{techContent[activeTechButton].title}</h3>
                <p className="text-gray-600 text-lg">{techContent[activeTechButton].description}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Master In-Demand Tech Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Master <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">In-Demand Tech</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-relevant skills taught by leading experts
            </p>
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredCourses.map((course) => (
              <motion.div
                key={course.id}
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -10 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.color} shadow-lg w-fit mb-6`}>
                  {course.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{course.title}</h3>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">{course.level}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-amber-400 fill-current" />
                    <span className="text-gray-700">{course.rating} ({course.students} students)</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold text-gray-900">{course.price}</div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6-Month Transformation Journey - NEW DESIGN */}
      <section className="py-20 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent">
                6-Month Transformation
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured journey from beginner to job-ready professional
            </p>
          </motion.div>

          {/* Enhanced Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 hidden lg:block" />
            
            {/* Timeline Items */}
            <div className="space-y-12 lg:space-y-24">
              {[
                { 
                  month: "Month 1-2", 
                  title: "Foundation Building", 
                  description: "Master core programming concepts and build your first projects",
                  icon: <BookOpen className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500",
                  direction: "left"
                },
                { 
                  month: "Month 3-4", 
                  title: "Specialization", 
                  description: "Dive deep into your chosen tech stack with advanced projects",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-purple-500 to-pink-500",
                  direction: "right"
                },
                { 
                  month: "Month 5", 
                  title: "Real-World Projects", 
                  description: "Collaborate on industry projects and build your portfolio",
                  icon: <Briefcase className="w-8 h-8" />,
                  color: "from-emerald-500 to-teal-500",
                  direction: "left"
                },
                { 
                  month: "Month 6", 
                  title: "Career Launch", 
                  description: "Interview prep, networking, and job placement support",
                  icon: <Rocket className="w-8 h-8" />,
                  color: "from-orange-500 to-red-500",
                  direction: "right"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: phase.direction === "left" ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    phase.direction === "right" ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left/Right Content */}
                  <div className={`lg:w-5/12 ${phase.direction === "right" ? "lg:text-right" : ""}`}>
                    <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${phase.color} text-white mb-4`}>
                      {phase.icon}
                      <span className="font-bold">{phase.month}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{phase.title}</h3>
                    <p className="text-gray-600">{phase.description}</p>
                  </div>
                  
                  {/* Center Circle */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-xl border-4 border-white`}>
                      <div className="text-white font-bold text-xl">{index + 1}</div>
                    </div>
                  </div>
                  
                  {/* Mobile Circle */}
                  <div className="lg:hidden flex justify-center my-4">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center shadow-xl border-4 border-white`}>
                      <div className="text-white font-bold text-xl">{index + 1}</div>
                    </div>
                  </div>
                  
                  {/* Skills/Projects */}
                  <div className="lg:w-5/12">
                    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <h4 className="font-bold text-gray-900 mb-4">You'll Master:</h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          phase.month === "Month 1-2" ? ["HTML/CSS", "JavaScript", "Git"] :
                          phase.month === "Month 3-4" ? ["React/Node", "AI Models", "Security"] :
                          phase.month === "Month 5" ? ["Team Projects", "Portfolio", "Deployment"] :
                          ["Interview Skills", "Networking", "Job Search"]
                        ].flat().map((skill, i) => (
                          <span key={i} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Stats Banner */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl"
          >
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-blue-100">Completion Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">89%</div>
                <div className="text-blue-100">Job Placement</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">Student Rating</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* From Zero to Hero - NEW DESIGN */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6 border border-purple-200">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="font-bold text-purple-700">SUCCESS STORIES</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              From <span className="text-blue-600">Zero</span> to{" "}
              <span className="text-emerald-600">Hero</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real transformations from our students
            </p>
          </motion.div>

          {/* Balanced Testimonial Layout */}
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={story.afterImage}
                      alt={story.name}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="px-4 py-2 bg-emerald-500 rounded-full inline-block mb-2">
                        <span className="font-bold">AFTER</span>
                      </div>
                      <h4 className="text-2xl font-bold">{story.name}</h4>
                      <p className="text-blue-100">{story.role}</p>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl">
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-100">
                          <img
                            src={story.avatar}
                            alt={story.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{story.name}</h4>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-3">
                          <Zap className="w-4 h-4 text-blue-600" />
                          <span className="font-semibold text-blue-700">{story.role}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center text-emerald-600">
                            <span className="text-xl font-bold">{story.salary}</span>
                            <span className="text-sm ml-1">/year</span>
                          </div>
                          <div className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                            {story.company}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6 border-l-4 border-blue-500 pl-6">
                      "{story.quote}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        Transformed in 6 months
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section - Simple & Clean */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <GraduationCap className="w-16 h-16 mx-auto mb-6" />
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Build Your Future?
              </h3>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join the next generation of tech professionals shaping Africa's digital landscape
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col items-center p-4">
                  <Calendar className="w-8 h-8 mb-3" />
                  <div className="font-bold">Flexible Schedule</div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <Users className="w-8 h-8 mb-3" />
                  <div className="font-bold">Expert Mentors</div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <Briefcase className="w-8 h-8 mb-3" />
                  <div className="font-bold">Career Support</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Academy;