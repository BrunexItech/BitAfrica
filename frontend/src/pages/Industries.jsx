import React, { useState, useEffect } from 'react';
import { 
  Building, Heart, ShoppingBag, Factory, GraduationCap, Shield, 
  DollarSign, Stethoscope, Store, Users, Target, BarChart, Rocket,
  Sparkles, Zap, Cpu, Brain, CircuitBoard, Database, Cloud, 
  Globe, Lock, Wifi, Server, BarChart3, TrendingUp, ChevronRight,
  ShieldCheck, Scale, Clock, Wrench, Cog, Users as Team,
  Eye, MessageSquare // Import the missing icons
} from 'lucide-react';
import { motion } from 'framer-motion';

function Industries() {
  const [activeIndustry, setActiveIndustry] = useState("finance-banking");
  const [isHovered, setIsHovered] = useState(null);

  // Technology Stack data
  const technologyStack = [
    { name: "Computer Vision", icon: <Eye className="h-6 w-6" />, applications: 12 },
    { name: "Natural Language Processing", icon: <MessageSquare className="h-6 w-6" />, applications: 8 },
    { name: "Predictive Analytics", icon: <TrendingUp className="h-6 w-6" />, applications: 15 },
    { name: "Machine Learning", icon: <Cpu className="h-6 w-6" />, applications: 20 },
    { name: "Robotic Process Automation", icon: <Cog className="h-6 w-6" />, applications: 10 },
    { name: "IoT Integration", icon: <Wifi className="h-6 w-6" />, applications: 7 }
  ];

  const industries = [
    {
      id: "finance-banking",
      title: "Finance & Banking",
      description: "Revolutionizing financial services with AI-powered fraud detection, algorithmic trading, and personalized banking experiences that increase efficiency by 300%.",
      icon: <Database className="h-10 w-10" />,
      color: "from-blue-600 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/20 to-cyan-500/10",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Fraud Detection Systems",
        "Risk Assessment AI",
        "Algorithmic Trading",
        "Personalized Banking",
        "Regulatory Compliance"
      ],
      stats: { efficiency: "300%", accuracy: "99.8%", savings: "$2.5M/yr" },
      featured: true
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Transforming patient care with AI diagnostics, predictive analytics, and personalized treatment plans that improve outcomes by 45%.",
      icon: <Brain className="h-10 w-10" />,
      color: "from-rose-600 to-pink-500",
      bgColor: "bg-gradient-to-br from-rose-500/20 to-pink-500/10",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Medical Imaging Analysis",
        "Patient Risk Prediction",
        "Drug Discovery AI",
        "Health Data Analytics",
        "Telemedicine Solutions"
      ],
      stats: { efficiency: "45%", accuracy: "98.7%", patients: "500K+" }
    },
    {
      id: "retail-ecommerce",
      title: "Retail & E-commerce",
      description: "Elevating shopping experiences with AI personalization, inventory optimization, and predictive analytics that boost sales by 65%.",
      icon: <ShoppingBag className="h-10 w-10" />,
      color: "from-amber-600 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/20 to-orange-500/10",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Personalized Recommendations",
        "Inventory Optimization",
        "Demand Forecasting",
        "Customer Behavior Analysis",
        "Supply Chain AI"
      ],
      stats: { sales: "65%", retention: "40%", revenue: "$8.3M" }
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Optimizing production with predictive maintenance, quality control AI, and smart factory solutions that reduce downtime by 70%.",
      icon: <CircuitBoard className="h-10 w-10" />,
      color: "from-emerald-600 to-green-500",
      bgColor: "bg-gradient-to-br from-emerald-500/20 to-green-500/10",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Predictive Maintenance",
        "Quality Control AI",
        "Supply Chain Optimization",
        "Smart Factory Solutions",
        "Production Line Automation"
      ],
      stats: { downtime: "-70%", quality: "99.9%", output: "+85%" }
    },
    {
      id: "education",
      title: "Education",
      description: "Personalizing learning with adaptive platforms, intelligent tutoring, and educational analytics that improve engagement by 120%.",
      icon: <GraduationCap className="h-10 w-10" />,
      color: "from-purple-600 to-indigo-500",
      bgColor: "bg-gradient-to-br from-purple-500/20 to-indigo-500/10",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Personalized Learning",
        "Intelligent Tutoring",
        "Educational Analytics",
        "Administrative Automation",
        "Virtual Classrooms"
      ],
      stats: { engagement: "120%", performance: "35%", reach: "2M+" }
    },
    {
      id: "government",
      title: "Government",
      description: "Modernizing public services with smart city solutions, administrative automation, and citizen service AI that improve efficiency by 55%.",
      icon: <ShieldCheck className="h-10 w-10" />,
      color: "from-indigo-600 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-500/20 to-blue-500/10",
      image: "https://images.unsplash.com/photo-1534531173927-aeb928d54385?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      solutions: [
        "Smart City Solutions",
        "Public Safety Systems",
        "Administrative Automation",
        "Citizen Service AI",
        "Infrastructure Monitoring"
      ],
      stats: { efficiency: "55%", response: "-60%", citizens: "10M+" }
    }
  ];

  const caseStudies = [
    {
      industry: "Banking",
      client: "AfriBank Group",
      challenge: "High fraud rates and manual processes",
      solution: "AI-powered fraud detection system",
      results: "Reduced fraud by 92% and processing time by 70%"
    },
    {
      industry: "Healthcare",
      client: "MediCare Africa",
      challenge: "Limited diagnostic capabilities in rural areas",
      solution: "AI diagnostic platform with mobile integration",
      results: "Improved diagnostic accuracy by 45% in remote clinics"
    },
    {
      industry: "Retail",
      client: "MarketPlace Africa",
      challenge: "Inventory inefficiencies and customer churn",
      solution: "AI-powered inventory and recommendation system",
      results: "Increased sales by 65% and reduced stockouts by 85%"
    }
  ];

  const currentIndustry = industries.find(ind => ind.id === activeIndustry) || industries[0];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Hero Section with Floating Elements */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 mb-6 backdrop-blur-sm">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">INDUSTRY-TRANSFORMING AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              AI-Powered Industry
            </span>
            <br />
            <span className="text-white">Revolution</span>
          </h1>
          
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            We create industry-specific AI solutions that don't just adapt to your business—
            they completely transform it. Experience the future of intelligent operations.
          </p>
          
          {/* Interactive Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="relative group">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-2xl border border-cyan-500/30 backdrop-blur-sm">
                <div className="text-4xl font-bold text-cyan-400">50+</div>
                <div className="text-gray-400 text-sm">Industry Leaders</div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <div className="text-4xl font-bold text-purple-400">200+</div>
                <div className="text-gray-400 text-sm">AI Solutions</div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
            </div>
            <div className="relative group">
              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/20 p-6 rounded-2xl border border-emerald-500/30 backdrop-blur-sm">
                <div className="text-4xl font-bold text-emerald-400">99.7%</div>
                <div className="text-gray-400 text-sm">Satisfaction Rate</div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
            </div>
          </div>
        </motion.div>

        {/* Interactive Industry Selector */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setActiveIndustry(industry.id)}
                onMouseEnter={() => setIsHovered(industry.id)}
                onMouseLeave={() => setIsHovered(null)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeIndustry === industry.id
                    ? `bg-gradient-to-r ${industry.color} text-white shadow-lg transform scale-105`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800/80'
                }`}
              >
                {industry.title}
              </button>
            ))}
          </div>

          {/* Featured Industry Showcase */}
          <motion.div 
            key={activeIndustry}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-gray-800/50 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm"
          >
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={currentIndustry.image}
                alt={currentIndustry.title}
                className="w-full h-full object-cover opacity-20"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${currentIndustry.color} opacity-10`} />
            </div>
            
            <div className="relative z-10 p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Left Content */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${currentIndustry.color} shadow-xl`}>
                      {currentIndustry.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{currentIndustry.title}</h2>
                      <p className="text-gray-400">Industry Transformation Leader</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                    {currentIndustry.description}
                  </p>
                  
                  {/* Solutions Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {currentIndustry.solutions.map((solution, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-gray-800/30 p-3 rounded-xl border border-gray-700/50">
                        <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${currentIndustry.color}`} />
                        <span className="text-gray-300 text-sm">{solution}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-6">
                    {Object.entries(currentIndustry.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r ${currentIndustry.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Right Visual */}
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${currentIndustry.color} rounded-3xl blur-2xl opacity-20`} />
                  <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-gray-800">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-white">Live AI Impact</h3>
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-green-400 text-sm">Active</span>
                      </div>
                    </div>
                    
                    {/* Animated Progress Bars */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Operational Efficiency</span>
                          <span>+{currentIndustry.stats.efficiency}</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className={`h-full rounded-full bg-gradient-to-r ${currentIndustry.color}`}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between text-sm text-gray-400 mb-1">
                          <span>Accuracy Improvement</span>
                          <span>+{currentIndustry.stats.accuracy}</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '90%' }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className={`h-full rounded-full bg-gradient-to-r ${currentIndustry.color}`}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Case Study Preview */}
                    <div className="mt-8 pt-6 border-t border-gray-800">
                      <div className="text-gray-400 text-sm mb-2">Recent Success Story</div>
                      <div className="text-white font-medium">
                        {currentIndustry.title} sector client achieved {Object.values(currentIndustry.stats)[0]} improvement
                      </div>
                      <a href="#" className="text-cyan-400 text-sm inline-flex items-center gap-1 mt-2">
                        View Case Study <ChevronRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* All Industries Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Explore All <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Industries</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <motion.div
                key={industry.id}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative overflow-hidden rounded-2xl border border-gray-800/50 ${industry.bgColor} backdrop-blur-sm`}
              >
                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative p-6">
                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${industry.color}`}>
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white">{industry.title}</h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {industry.description}
                  </p>
                  
                  {/* Solutions Preview */}
                  <div className="mb-4">
                    {industry.solutions.slice(0, 3).map((solution, idx) => (
                      <div key={idx} className="flex items-center gap-2 mb-1">
                        <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${industry.color}`} />
                        <span className="text-gray-400 text-sm">{solution}</span>
                      </div>
                    ))}
                    {industry.solutions.length > 3 && (
                      <div className="text-cyan-400 text-sm mt-2">+{industry.solutions.length - 3} more solutions</div>
                    )}
                  </div>
                  
                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800/50">
                    <span className="text-sm text-gray-400">{industry.stats.efficiency} avg. improvement</span>
                    <button className="text-cyan-400 text-sm font-medium inline-flex items-center gap-1 group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Technology</span> Stack
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800/50 text-center backdrop-blur-sm"
              >
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">{tech.icon}</div>
                </div>
                <h3 className="text-white font-bold mb-2">{tech.name}</h3>
                <div className="text-cyan-400 text-sm">{tech.applications}+ applications</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Stories Carousel */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Success Stories</span> Across Industries
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl p-6 border border-gray-800/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20">
                    <TrendingUp className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-sm text-cyan-400 font-bold">{study.industry}</div>
                    <div className="text-white font-bold">{study.client}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Challenge</div>
                    <div className="text-gray-300">{study.challenge}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Solution</div>
                    <div className="text-gray-300">{study.solution}</div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Results</div>
                    <div className="text-green-400 font-bold">{study.results}</div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <a href="#" className="text-cyan-400 text-sm inline-flex items-center gap-1">
                    Read Full Case Study
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 backdrop-blur-sm"
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative p-12 text-center">
            <Rocket className="h-16 w-16 text-cyan-400 mx-auto mb-6 animate-bounce" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo and see how our AI solutions can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/demo"
                className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
              >
                Schedule a Demo
                <Sparkles className="ml-3 h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 border-2 border-cyan-400/50 text-cyan-400 font-bold rounded-xl hover:bg-cyan-400/10 transition-all duration-300"
              >
                Talk to an Expert
                <Team className="ml-3 h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </main>
  );
}

export default Industries;