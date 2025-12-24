import React, { useState, useEffect } from 'react';
import { 
  Sparkles, Brain, Cpu, Globe, Users, Award, 
  Target, Heart, TrendingUp, ChevronRight, Star, 
  CheckCircle, Lightbulb, Palette, Diamond, Waves, 
  Map, Compass, Hexagon, Infinity, Shield, Lock,
  Zap, GitBranch, Cog, Network, CircuitBoard,
  Layers, Code, Database, Cloud, Cpu as AI,
  BarChart, PieChart, LineChart, Activity, Building,
  BookOpen, Shield as ShieldIcon
} from 'lucide-react';

function Company() {
  const [activeYear, setActiveYear] = useState(2020);
  
  const visionaryTeam = [
    {
      name: "Bruno Sharif",
      title: "CEO & Visionary Founder",
      role: "Chief Executive Officer",
      bio: "Architect of Africa's AI renaissance. Pioneering contextual AI systems that understand African nuances and drive continent-wide transformation.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-amber-500 via-orange-500 to-rose-500",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500",
      expertise: ["AI Strategy", "Tech Leadership", "African Innovation"],
      signature: "AI should speak our languages, understand our rhythms.",
      position: "top-left"
    },
    {
      name: "Amina Diallo",
      title: "AI Systems Architect",
      role: "Chief Technology Officer",
      bio: "Building Africa's most sophisticated AI infrastructure. Designed scalable neural networks that process 10x more contextual data.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-purple-500 via-violet-500 to-indigo-500",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
      expertise: ["Neural Networks", "System Architecture", "ML Ops"],
      signature: "Infrastructure that grows with Africa's ambitions.",
      position: "top-right"
    },
    {
      name: "Chijioke Okonkwo",
      title: "Data Intelligence Pioneer",
      role: "Chief Data Scientist",
      bio: "Transforming Africa's data landscape into actionable intelligence. Created algorithms that understand 50+ African languages.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-emerald-500 to-cyan-500",
      expertise: ["Data Science", "Natural Language", "Predictive Models"],
      signature: "Data tells stories. We listen to Africa's story.",
      position: "bottom-left"
    },
    {
      name: "Fatoumata Bâ",
      title: "Innovation Ecosystem Builder",
      role: "Chief Innovation Officer",
      bio: "Connecting 100+ African startups with AI capabilities. Building the continent's largest AI talent pipeline.",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-rose-500 via-pink-500 to-fuchsia-500",
      gradient: "bg-gradient-to-br from-rose-500 to-fuchsia-500",
      expertise: ["Ecosystem Growth", "Talent Development", "Strategic Partnerships"],
      signature: "Innovation grows where community thrives.",
      position: "bottom-right"
    }
  ];

  const aiJourney = {
    2020: {
      title: "The Genesis",
      description: "Founded with a vision to democratize AI across Africa. Started with 3 engineers and a dream.",
      achievements: ["First AI Model", "Initial Funding", "Team of 5"],
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      metrics: { models: 1, team: 5, countries: 1 }
    },
    2021: {
      title: "First Breakthrough",
      description: "Developed Africa's first multilingual AI model. Expanded to 3 countries.",
      achievements: ["Multilingual AI", "3 Country Expansion", "Series A Funding"],
      icon: <Globe className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      metrics: { models: 5, team: 25, countries: 3 }
    },
    2022: {
      title: "Scale & Impact",
      description: "Launched AI solutions for agriculture and healthcare. Reached 100,000 users.",
      achievements: ["Agri-AI Launch", "Health AI Solutions", "100K Users"],
      icon: <Target className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      metrics: { models: 15, team: 50, countries: 8 }
    },
    2023: {
      title: "AI Ecosystem",
      description: "Built Africa's largest AI developer community. Partnered with 50+ organizations.",
      achievements: ["Dev Community", "50+ Partners", "Pan-African Reach"],
      icon: <Network className="h-8 w-8" />,
      color: "from-orange-500 to-amber-500",
      metrics: { models: 30, team: 100, countries: 12 }
    },
    2024: {
      title: "The AI Revolution",
      description: "Leading Africa's AI transformation. Deploying AI in 15+ countries with 500K+ users.",
      achievements: ["Market Leadership", "500K+ Users", "15 Countries"],
      icon: <Zap className="h-8 w-8" />,
      color: "from-red-500 to-rose-500",
      metrics: { models: 50, team: 150, countries: 15 }
    }
  };

  const aiSolutions = [
    {
      title: "Contextual Intelligence",
      description: "AI systems that understand African contexts, languages, and cultural nuances",
      icon: <Brain className="h-10 w-10" />,
      gradient: "from-blue-500 to-cyan-500",
      pattern: "neural",
      stats: ["50+ Languages", "95% Accuracy", "Real-time Processing"],
      shape: "hexagon"
    },
    {
      title: "Predictive Ecosystems",
      description: "AI-driven predictions for agriculture, climate, and economic planning",
      icon: <BarChart className="h-10 w-10" />,
      gradient: "from-purple-500 to-pink-500",
      pattern: "waves",
      stats: ["10M+ Predictions", "87% Success Rate", "15 Sectors"],
      shape: "circle"
    },
    {
      title: "Intelligent Automation",
      description: "Automating complex processes with AI that learns African workflows",
      icon: <Cog className="h-10 w-10" />,
      gradient: "from-green-500 to-emerald-500",
      pattern: "circuit",
      stats: ["500+ Processes", "70% Efficiency Gain", "24/7 Operation"],
      shape: "triangle"
    },
    {
      title: "Data Renaissance",
      description: "Transforming Africa's data into intelligent insights and opportunities",
      icon: <Database className="h-10 w-10" />,
      gradient: "from-orange-500 to-amber-500",
      pattern: "grid",
      stats: ["1B+ Data Points", "Real-time Analytics", "50+ Data Sources"],
      shape: "square"
    }
  ];

  const innovationHubs = [
    {
      name: "Neural Nexus Nairobi",
      focus: "AI Research & Development",
      icon: <CircuitBoard className="h-8 w-8" />,
      location: "Kenya",
      projects: 12,
      color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Data Delta Lagos",
      focus: "Big Data & Analytics",
      icon: <LineChart className="h-8 w-8" />,
      location: "Nigeria",
      projects: 18,
      color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "AI Arc Accra",
      focus: "AI Applications & Deployment",
      icon: <Cpu className="h-8 w-8" />,
      location: "Ghana",
      projects: 15,
      color: "bg-gradient-to-br from-green-500/20 to-emerald-500/20",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Innovation Sphere Cape Town",
      focus: "AI Ethics & Governance",
      icon: <ShieldIcon className="h-8 w-8" />,
      location: "South Africa",
      projects: 9,
      color: "bg-gradient-to-br from-orange-500/20 to-amber-500/20",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

  const achievements = [
    { 
      number: "50+", 
      label: "AI Models", 
      icon: <Brain className="h-6 w-6" />,
      growth: "+400%",
      color: "blue"
    },
    { 
      number: "150+", 
      label: "AI Experts", 
      icon: <Users className="h-6 w-6" />,
      growth: "+800%",
      color: "purple"
    },
    { 
      number: "15", 
      label: "Countries", 
      icon: <Globe className="h-6 w-6" />,
      growth: "+1400%",
      color: "green"
    },
    { 
      number: "500K+", 
      label: "Users Impacted", 
      icon: <Heart className="h-6 w-6" />,
      growth: "+900%",
      color: "red"
    }
  ];

  const companyInfoCards = [
    {
      title: "AI Ethics & Responsibility",
      description: "We've established Africa's first AI ethics framework, ensuring all our systems are transparent, accountable, and aligned with African values.",
      icon: <Shield className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      stats: "Ethical AI Framework"
    },
    {
      title: "Talent Development",
      description: "Over 5,000 African developers trained in AI technologies through our continent-wide education initiatives and partnerships.",
      icon: <BookOpen className="h-8 w-8" />,
      gradient: "from-purple-500 to-pink-500",
      stats: "5K+ Developers Trained"
    },
    {
      title: "Research Excellence",
      description: "Published 50+ research papers in top AI conferences and contributed to 15 open-source AI projects benefiting the global community.",
      icon: <Lightbulb className="h-8 w-8" />,
      gradient: "from-green-500 to-emerald-500",
      stats: "50+ Research Papers"
    },
    {
      title: "Infrastructure Scale",
      description: "Built Africa's largest AI computing infrastructure with 10,000+ GPUs powering our continent-wide AI solutions.",
      icon: <Building className="h-8 w-8" />,
      gradient: "from-orange-500 to-amber-500",
      stats: "10K+ GPU Cluster"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Neural Network Animation */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="neural-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="currentColor" className="text-blue-500/20">
                  <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="20" cy="20" r="1.5" fill="currentColor" className="text-purple-500/20">
                  <animate attributeName="r" values="1.5;3;1.5" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <circle cx="80" cy="80" r="2.5" fill="currentColor" className="text-green-500/20">
                  <animate attributeName="r" values="2.5;5;2.5" dur="4s" repeatCount="indefinite" />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#neural-pattern)" />
          </svg>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/3 w-24 h-24 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Animated Title with Neural Connections */}
          <div className="relative mb-12 text-center">
            <div className="inline-block relative">
              {/* Connection Dots */}
              <div className="absolute -top-4 -left-4 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
              <div className="absolute -top-4 -right-4 w-3 h-3 bg-purple-500 rounded-full animate-ping delay-300"></div>
              <div className="absolute -bottom-4 -left-8 w-3 h-3 bg-green-500 rounded-full animate-ping delay-500"></div>
              <div className="absolute -bottom-4 -right-8 w-3 h-3 bg-orange-500 rounded-full animate-ping delay-700"></div>
              
              <h1 className="relative text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter">
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
                  AFRICA
                </span>
                <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                  AI
                </span>
                <span className="block bg-gradient-to-r from-emerald-400 via-green-300 to-emerald-400 bg-clip-text text-transparent animate-gradient-x-reverse">
                  REVOLUTION
                </span>
              </h1>
            </div>
            
            {/* Connection Lines */}
            <div className="absolute top-1/4 left-1/4 w-1 h-24 bg-gradient-to-b from-blue-500/50 to-transparent transform -rotate-45"></div>
            <div className="absolute top-1/4 right-1/4 w-1 h-24 bg-gradient-to-b from-purple-500/50 to-transparent transform rotate-45"></div>
          </div>

          {/* Founder Spotlight - Diamond Design */}
          <div className="relative mb-20">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Diamond Image Container */}
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform rotate-45"></div>
                <div className="absolute inset-2 bg-gray-900 transform rotate-45 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80"
                    alt="Bruno Sharif"
                    className="w-full h-full object-cover object-top transform -rotate-45 scale-125"
                  />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
              </div>
              
              {/* Founder Info */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">
                    Visionary Leadership
                  </span>
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                </div>
                
                <h2 className="text-4xl font-bold text-white mb-4">
                  Bruno Sharif
                  <span className="block text-xl text-amber-300 font-normal mt-2">
                    CEO & Founder
                  </span>
                </h2>
                
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  "We're not just building AI in Africa. We're building African AI—systems that understand our context, 
                  speak our languages, and solve our unique challenges. This is more than technology; 
                  it's a renaissance of African innovation."
                </p>
                
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <TrendingUp className="h-4 w-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">AI Impact</div>
                      <div className="text-lg font-bold text-white">15 Countries</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Users className="h-4 w-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Team Growth</div>
                      <div className="text-lg font-bold text-white">150+ Experts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Journey Timeline - Interactive 3D */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                Our Evolution
              </span>
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From vision to continental impact. Watch our story unfold.
            </p>
          </div>
          
          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline Bar */}
            <div className="relative h-2 bg-gray-800 rounded-full mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"></div>
              
              {/* Year Markers */}
              {Object.keys(aiJourney).map((year, index) => {
                const percentage = ((index) / (Object.keys(aiJourney).length - 1)) * 100;
                return (
                  <button
                    key={year}
                    onClick={() => setActiveYear(parseInt(year))}
                    className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                      activeYear === parseInt(year) 
                        ? 'scale-125 bg-white shadow-xl shadow-blue-500/50' 
                        : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                    style={{ left: `${percentage}%` }}
                  >
                    <span className={`text-sm font-bold ${
                      activeYear === parseInt(year) ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                      {year}
                    </span>
                  </button>
                );
              })}
            </div>
            
            {/* Active Year Display - 3D Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden">
                <div className="p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
                    {/* Metrics Visualization */}
                    <div className="lg:w-1/3">
                      <div className={`p-4 md:p-6 rounded-2xl bg-gradient-to-br ${aiJourney[activeYear].color} bg-opacity-20 mb-6`}>
                        <div className="flex items-center justify-between mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${aiJourney[activeYear].color} text-white`}>
                            {aiJourney[activeYear].icon}
                          </div>
                          <div className="text-xl md:text-2xl font-bold text-white">{activeYear}</div>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{aiJourney[activeYear].title}</h3>
                        <p className="text-gray-300 text-sm md:text-base">{aiJourney[activeYear].description}</p>
                      </div>
                      
                      {/* Animated Metrics - Centered for mobile */}
                      <div className="grid grid-cols-3 gap-3 md:gap-4 justify-items-center">
                        {Object.entries(aiJourney[activeYear].metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-xl md:text-2xl font-bold text-white mb-1">{value}</div>
                            <div className="text-xs text-gray-400 uppercase">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Achievements List */}
                    <div className="lg:w-2/3">
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-white mb-4 text-center md:text-left">Key Achievements</h4>
                        <div className="space-y-3">
                          {aiJourney[activeYear].achievements.map((achievement, idx) => (
                            <div 
                              key={idx}
                              className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-blue-500/50 transition-colors mx-auto md:mx-0 max-w-md md:max-w-none"
                            >
                              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                              <span className="text-gray-300 text-sm md:text-base">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Progress Visualization */}
                      <div className="mt-6 md:mt-8">
                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                          <span>Progress</span>
                          <span>{((activeYear - 2020) / 4 * 100).toFixed(0)}%</span>
                        </div>
                        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full transition-all duration-1000"
                            style={{ width: `${((activeYear - 2020) / 4 * 100)}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Solutions - Geometric Cards */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-6">
              <Brain className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
              <span className="text-sm font-bold tracking-widest text-blue-400 uppercase">
                Our AI Solutions
              </span>
              <Brain className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 px-2">
              Building <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Intelligent Africa
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto px-2">
              Advanced AI solutions designed specifically for African contexts and challenges
            </p>
          </div>
          
          {/* Geometric Solution Cards - Improved for mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2 sm:px-0">
            {aiSolutions.map((solution, index) => (
              <div 
                key={index}
                className="group perspective-1000 mx-auto w-full max-w-sm sm:max-w-none"
              >
                <div className="relative transform-style-3d transition-transform duration-700 group-hover:rotate-y-180 h-80">
                  {/* Front of Card */}
                  <div className={`absolute inset-0 backface-hidden rounded-2xl overflow-hidden ${
                    solution.shape === 'hexagon' ? 'clip-hexagon' :
                    solution.shape === 'circle' ? 'rounded-full' :
                    solution.shape === 'triangle' ? 'clip-triangle' :
                    'rounded-2xl'
                  }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient} opacity-20`}></div>
                    <div className="relative p-6 md:p-8 h-full flex flex-col justify-between">
                      <div>
                        <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-xl bg-gradient-to-br ${solution.gradient} w-fit`}>
                          {solution.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3">{solution.title}</h3>
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">{solution.description}</p>
                      </div>
                      <div className="mt-4 md:mt-6">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>Learn more</span>
                          <ChevronRight className="h-3 w-3 md:h-4 md:w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of Card - Stats */}
                  <div className={`absolute inset-0 backface-hidden rotate-y-180 ${
                    solution.shape === 'hexagon' ? 'clip-hexagon' :
                    solution.shape === 'circle' ? 'rounded-full' :
                    solution.shape === 'triangle' ? 'clip-triangle' :
                    'rounded-2xl'
                  } bg-gray-900 border border-gray-800 p-6 md:p-8`}>
                    <div className="h-full flex flex-col justify-center">
                      <h4 className="text-lg font-bold text-white mb-6 text-center">Performance Metrics</h4>
                      <div className="space-y-3 md:space-y-4">
                        {solution.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-lg md:text-2xl font-bold text-white">{stat}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Team - Staggered Grid with Diagonal Connections */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-6">
              <Users className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
              <span className="text-sm font-bold tracking-widest text-purple-400 uppercase">
                The Architects
              </span>
              <Users className="h-5 w-5 md:h-6 md:w-6 text-purple-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Visionary Team
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
              The brilliant minds architecting Africa's AI future
            </p>
          </div>
          
          {/* Staggered Team Grid */}
          <div className="relative">
            {/* Background Connection Lines */}
            <div className="absolute inset-0 hidden md:block">
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform rotate-45"></div>
              <div className="absolute top-1/4 right-1/4 w-1/2 h-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform -rotate-45"></div>
              <div className="absolute bottom-1/4 left-1/4 w-1/2 h-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform -rotate-45"></div>
              <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 transform rotate-45"></div>
            </div>
            
            {/* Team Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              {visionaryTeam.map((member, index) => (
                <div 
                  key={index}
                  className={`group relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
                >
                  {/* Glow Effect */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className="relative bg-gray-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 group-hover:border-purple-500/50 transition-all duration-500 p-6">
                    <div className="flex flex-col md:flex-row items-center gap-6">
                      {/* Member Image */}
                      <div className="relative w-32 h-32 flex-shrink-0">
                        <div className={`absolute inset-0 ${member.gradient} rounded-full transform rotate-0`}></div>
                        <div className="absolute inset-2 bg-gray-900 rounded-full overflow-hidden">
                          <img 
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        {/* Floating Icon */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full border border-gray-700 flex items-center justify-center">
                          <div className={`w-6 h-6 rounded-full ${member.gradient} flex items-center justify-center`}>
                            {index === 0 && <Brain className="h-3 w-3 text-white" />}
                            {index === 1 && <Cpu className="h-3 w-3 text-white" />}
                            {index === 2 && <Database className="h-3 w-3 text-white" />}
                            {index === 3 && <Network className="h-3 w-3 text-white" />}
                          </div>
                        </div>
                      </div>
                      
                      {/* Member Info - Always Visible */}
                      <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-sm text-purple-400 mb-3 font-medium">{member.title}</p>
                        <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                        
                        {/* Expertise Tags */}
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {member.expertise.map((skill, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700 group-hover:border-purple-500/50 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Connection Line Animation */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent group-hover:w-3/4 transition-all duration-700"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Team Stats - Improved for mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16 md:mt-32 justify-items-center">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-500 group w-full max-w-xs md:max-w-none"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 md:p-3 rounded-xl ${
                    achievement.color === 'blue' ? 'bg-blue-500/20 text-blue-400' :
                    achievement.color === 'purple' ? 'bg-purple-500/20 text-purple-400' :
                    achievement.color === 'green' ? 'bg-green-500/20 text-green-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {achievement.icon}
                  </div>
                  <div className="text-xs md:text-sm font-bold text-green-400">{achievement.growth}</div>
                </div>
                
                <div className="text-2xl md:text-3xl font-bold text-white mb-1 text-center">{achievement.number}</div>
                <div className="text-sm text-gray-400 text-center">{achievement.label}</div>
                
                {/* Growing Bar */}
                <div className="mt-4 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${
                      achievement.color === 'blue' ? 'bg-blue-500' :
                      achievement.color === 'purple' ? 'bg-purple-500' :
                      achievement.color === 'green' ? 'bg-green-500' :
                      'bg-red-500'
                    } rounded-full group-hover:w-full transition-all duration-1000`}
                    style={{ width: '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Hubs - Interactive Map */}
      <section className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 md:gap-4 mb-6">
              <Map className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
              <span className="text-sm font-bold tracking-widest text-green-400 uppercase">
                Our Presence
              </span>
              <Map className="h-5 w-5 md:h-6 md:w-6 text-green-400" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Innovation Hubs
              </span>
            </h2>
            <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto">
              Strategic centers driving AI innovation across the continent
            </p>
          </div>
          
          {/* Interactive Hub Cards - Now 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {innovationHubs.map((hub, index) => (
              <div 
                key={index}
                className="group relative mx-auto w-full max-w-sm sm:max-w-none"
              >
                {/* Hover Effect Background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-900 to-black rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* Hub Card */}
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-800 group-hover:border-green-500/50 transition-all duration-500 h-full">
                  {/* Icon and Projects */}
                  <div className="flex items-start justify-between mb-6 md:mb-8">
                    <div className={`p-3 md:p-4 rounded-2xl ${hub.color}`}>
                      <div className={`p-2 md:p-3 rounded-xl bg-gradient-to-br ${hub.gradient} text-white`}>
                        {hub.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl md:text-3xl font-bold text-white">{hub.projects}</div>
                      <div className="text-xs md:text-sm text-gray-400">Active Projects</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-green-300 transition-colors">
                    {hub.name}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base mb-6">{hub.focus}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-sm text-gray-300">{hub.location}</span>
                    </div>
                    <div className="text-sm text-gray-500 group-hover:text-green-400 transition-colors">
                      View Details →
                    </div>
                  </div>
                  
                  {/* Connection Line Animation */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent group-hover:w-3/4 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="relative py-16 md:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animated AI Brain */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 md:mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute inset-4 bg-gray-900 rounded-full flex items-center justify-center">
              <Brain className="h-12 w-12 md:h-16 md:w-16 text-blue-400 animate-pulse" />
            </div>
            {/* Orbiting Elements */}
            <div className="absolute top-0 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-orbit">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-0 left-1/2 w-3 h-3 md:w-4 md:h-4 bg-green-500 rounded-full transform -translate-x-1/2 translate-y-1/2 animate-orbit-reverse">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 px-2">
            Shaping <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-gradient-x">
              Africa's Future
            </span>
          </h2>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto px-2">
            We're building more than AI systems. We're architecting Africa's digital nervous system—intelligent, 
            responsive, and uniquely African.
          </p>
          
          {/* Company Information Cards - 4 cards total */}
          <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
            {companyInfoCards.map((card, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800 hover:border-blue-500/30 transition-all duration-500 group"
              >
                <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${card.gradient} bg-opacity-20 w-fit`}>
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${card.gradient} text-white`}>
                    {card.icon}
                  </div>
                </div>
                
                <div className="text-sm font-bold text-blue-400 mb-2">{card.stats}</div>
                <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.description}</p>
                
                {/* Hover effect line */}
                <div className="mt-4 h-0.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information - Updated */}
          <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-blue-400 font-bold mb-4">OPERATIONAL HUBS</div>
              <div className="space-y-2 text-gray-400">
                <div>• Nairobi AI Center</div>
                <div>• Lagos Data Lab</div>
                <div>• Accra Innovation Hub</div>
                <div>• Cape Town Ethics Center</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-purple-400 font-bold mb-4">CONTACT INFORMATION</div>
              <div className="space-y-2 text-gray-400">
                <div>• hello@africa-ai.com</div>
                <div>• +254 700 123 456</div>
                <div>• AI Research Portal</div>
                <div>• Partnership Inquiries</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-green-400 font-bold mb-4">OUR COMMITMENT</div>
              <div className="space-y-2 text-gray-400">
                <div>• Ethical AI Development</div>
                <div>• Talent Empowerment</div>
                <div>• Open Research</div>
                <div>• Continental Impact</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(45px) rotate(-360deg); }
        }
        
        @keyframes orbit-reverse {
          0% { transform: translate(-50%, 50%) rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: translate(-50%, 50%) rotate(-360deg) translateX(45px) rotate(360deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-x-reverse {
          background-size: 200% auto;
          animation: gradient-x-reverse 3s ease infinite;
        }
        
        .animate-orbit {
          animation: orbit 6s linear infinite;
        }
        
        .animate-orbit-reverse {
          animation: orbit-reverse 6s linear infinite;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        
        .clip-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .clip-hexagon, .clip-triangle {
            clip-path: none;
            border-radius: 1rem;
          }
          
          .perspective-1000 {
            perspective: none;
          }
          
          .transform-style-3d {
            transform-style: flat;
          }
          
          .group-hover\:rotate-y-180 {
            transform: none !important;
          }
          
          .backface-hidden {
            position: relative;
            backface-visibility: visible;
          }
          
          .rotate-y-180 {
            display: none;
          }
          
          /* Mobile-specific adjustments for better text visibility */
          .text-balance {
            text-wrap: balance;
          }
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #111827;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #06b6d4);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #60a5fa, #22d3ee);
        }
      `}</style>
    </main>
  );
}

export default Company;