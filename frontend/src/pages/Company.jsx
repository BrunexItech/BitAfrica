import React from 'react';
import { 
  Sparkles, Zap, Brain, Cpu, Globe, Users, Award, 
  Target, Heart, TrendingUp, Rocket, ChevronRight,
  Star, CheckCircle, Lightbulb, Palette, Diamond,
  Waves, Mountain, Sunrise, Wind, Map, Compass,
  Hexagon, Infinity, Cloud, Shield, Lock
} from 'lucide-react';

function Company() {
  const visionaryTeam = [
    {
      name: "Bruno Sharif",
      title: "CEO & Visionary Founder",
      role: "Chief Executive Officer",
      bio: "Architect of Africa's AI renaissance. Fusing quantum intuition with pan-African vision to build the continent's first trillion-dollar tech ecosystem.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-amber-500 via-orange-500 to-rose-600",
      pattern: "african-geometric-1",
      expertise: ["Quantum Strategy", "Tech Sovereignty", "Afro-Futurism"],
      signature: "We don't predict the future—we architect it."
    },
    {
      name: "Amina Diallo",
      title: "AI Architect & Quantum Pioneer",
      role: "Chief Technology Officer",
      bio: "Weaving quantum algorithms with ancestral computation patterns. Building AI that speaks the language of African complexity.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-purple-500 via-violet-600 to-indigo-700",
      pattern: "quantum-wave",
      expertise: ["Neuro-Symbolic AI", "Quantum Ethics", "Pattern Languages"],
      signature: "The future is patterned, not programmed."
    },
    {
      name: "Chijioke Okonkwo",
      title: "Data Alchemist & ML Virtuoso",
      role: "Chief Data Scientist",
      bio: "Transforming data streams into digital gold. His algorithms understand African contexts deeper than any human ever could.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-emerald-500 via-teal-600 to-cyan-700",
      pattern: "data-river",
      expertise: ["Contextual AI", "Data Storytelling", "Predictive Wisdom"],
      signature: "Data without context is noise. Context without data is guesswork."
    },
    {
      name: "Fatoumata Bâ",
      title: "Innovation Catalyst & Ecosystem Builder",
      role: "Chief Innovation Officer",
      bio: "Building innovation ecosystems that grow organically like baobab trees—rooted in tradition, reaching for the stars.",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80",
      color: "from-rose-500 via-pink-600 to-fuchsia-700",
      pattern: "ecosystem-network",
      expertise: ["Community Intelligence", "Growth Patterns", "Synergy Design"],
      signature: "Innovation is community work."
    }
  ];

  const corePillars = [
    {
      title: "Afro-Futurist AI",
      description: "AI designed from African perspectives, for African challenges",
      icon: <Compass className="h-10 w-10" />,
      color: "bg-gradient-to-br from-amber-500/20 to-orange-600/20",
      border: "border-amber-500/30",
      gradient: "from-amber-500 to-orange-600",
      pattern: "diamond-grid"
    },
    {
      title: "Quantum Readiness",
      description: "Preparing Africa for the quantum computing revolution",
      icon: <Hexagon className="h-10 w-10" />,
      color: "bg-gradient-to-br from-purple-500/20 to-indigo-600/20",
      border: "border-purple-500/30",
      gradient: "from-purple-500 to-indigo-600",
      pattern: "quantum-dots"
    },
    {
      title: "Ecosystem Intelligence",
      description: "AI systems that understand complex African ecosystems",
      icon: <Globe className="h-10 w-10" />,
      color: "bg-gradient-to-br from-emerald-500/20 to-teal-600/20",
      border: "border-emerald-500/30",
      gradient: "from-emerald-500 to-teal-600",
      pattern: "ecosystem-web"
    },
    {
      title: "Ethical Sovereignty",
      description: "AI governance rooted in African ethics and values",
      icon: <Shield className="h-10 w-10" />,
      color: "bg-gradient-to-br from-rose-500/20 to-pink-600/20",
      border: "border-rose-500/30",
      gradient: "from-rose-500 to-pink-600",
      pattern: "protective-grid"
    }
  ];

  const innovationLabs = [
    {
      name: "Quantum Kinship Lab",
      focus: "Human-AI symbiosis",
      location: "Kigali Innovation City",
      icon: <Brain className="h-8 w-8" />,
      color: "from-violet-600 to-purple-700",
      projects: ["Neural Harmony", "Collective Intelligence", "Digital Ancestry"]
    },
    {
      name: "Data River Institute",
      focus: "Flow-based AI",
      location: "Lagos Tech Delta",
      icon: <Waves className="h-8 w-8" />,
      color: "from-cyan-600 to-blue-700",
      projects: ["Predictive Currents", "Context Streams", "Wisdom Floodplains"]
    },
    {
      name: "Pattern Foundry",
      focus: "African design systems",
      location: "Cairo Nexus",
      icon: <Palette className="h-8 w-8" />,
      color: "from-amber-600 to-orange-700",
      projects: ["Geometric Intelligence", "Symbol Recognition", "Cultural Patterns"]
    }
  ];

  const achievements = [
    { 
      number: "54", 
      label: "AI Archetypes Created", 
      icon: <Sparkles className="h-6 w-6" />,
      detail: "Unique African AI models"
    },
    { 
      number: "1.2K+", 
      label: "Quantum Minds Trained", 
      icon: <Brain className="h-6 w-6" />,
      detail: "Across 8 innovation hubs"
    },
    { 
      number: "∞", 
      label: "Potential Unlocked", 
      icon: <Infinity className="h-6 w-6" />,
      detail: "Boundless innovation"
    },
    { 
      number: "42", 
      label: "Ecosystems Nurtured", 
      icon: <Globe className="h-6 w-6" />,
      detail: "Growing across Africa"
    }
  ];

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        
        {/* African Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Section - Ultra Modern */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Animated Title */}
          <div className="relative mb-12">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-md"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-md"></div>
            
            <h1 className="relative text-6xl md:text-8xl font-black text-white mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent animate-gradient-x">
                ARCHITECTING
              </span>
              <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                AFRICA'S
              </span>
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-x-reverse">
                QUANTUM FUTURE
              </span>
            </h1>
          </div>

          {/* Mission Statement */}
          <div className="relative max-w-3xl mb-16">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 via-transparent to-purple-500/10 rounded-2xl blur-xl"></div>
            <p className="relative text-2xl text-gray-300 leading-relaxed font-light">
              We are not building artificial intelligence. We are cultivating 
              <span className="font-bold text-amber-300"> organic intelligence </span>
              — AI systems that grow from African soil, speak our languages, 
              understand our rhythms, and amplify our collective genius.
            </p>
          </div>

          {/* Founder Spotlight */}
          <div className="relative mb-20">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-600/5 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-gray-800 p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Founder Image */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl blur-lg"></div>
                  <div className="relative w-48 h-48 rounded-2xl overflow-hidden border-4 border-gray-900">
                    <img 
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000&q=80"
                      alt="Bruno Sharif"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Founder Message */}
                <div className="flex-1">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="w-2 h-8 bg-gradient-to-b from-amber-500 to-orange-600 rounded-full"></div>
                    <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">
                      Visionary Leadership
                    </span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Bruno Sharif
                    <span className="block text-lg text-amber-300 font-normal mt-1">
                      CEO & Visionary Founder
                    </span>
                  </h2>
                  
                  <blockquote className="text-xl text-gray-300 italic mb-6 border-l-4 border-amber-500 pl-6">
                    "We are not catching up with the future. We are creating a new one—one where Africa doesn't just participate in the AI revolution, but leads it with wisdom, ethics, and innovation that the world has never seen."
                  </blockquote>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-gray-400">Explore the vision →</div>
                    <button className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300">
                      <span>Quantum Manifesto</span>
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {achievements.map((item, index) => (
              <div 
                key={index}
                className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.02]"
              >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 to-black/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.icon.props.className.includes('Sparkles') ? 'from-amber-500/20 to-orange-600/20' : 
                      item.icon.props.className.includes('Brain') ? 'from-purple-500/20 to-indigo-600/20' :
                      item.icon.props.className.includes('Infinity') ? 'from-cyan-500/20 to-blue-600/20' : 'from-emerald-500/20 to-teal-600/20'}`}
                    >
                      <div className={`text-${item.icon.props.className.includes('Sparkles') ? 'amber' : 
                        item.icon.props.className.includes('Brain') ? 'purple' :
                        item.icon.props.className.includes('Infinity') ? 'cyan' : 'emerald'}-400`}>
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                    {item.number}
                  </div>
                  <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                  <div className="text-xs text-gray-500">{item.detail}</div>
                  
                  {/* Hover effect line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars - Interactive */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">
                Our Foundations
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              The <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Four Pillars
              </span> of Our Revolution
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {corePillars.map((pillar, index) => (
              <div 
                key={index}
                className="group relative"
              >
                {/* 3D Card Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-gray-900 to-black rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className={`relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border ${pillar.border} hover:border-${pillar.gradient.split(' ')[1]}/50 transition-all duration-500 group-hover:translate-y-[-8px]`}>
                  {/* Icon Container */}
                  <div className={`mb-8 p-4 rounded-2xl ${pillar.color} w-fit`}>
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg`}>
                      {pillar.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {pillar.description}
                  </p>
                  
                  {/* Interactive Element */}
                  <button className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-amber-400 transition-colors">
                    <span>Explore Pillar</span>
                    <div className="w-4 h-4 rounded-full border border-gray-600 group-hover:border-amber-400 flex items-center justify-center">
                      <ChevronRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </button>
                  
                  {/* Pattern Background */}
                  <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 group-hover:opacity-20 transition-opacity">
                    <div className="w-full h-full" style={{
                      backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visionary Team - Cinematic */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-amber-400 uppercase">
                The Visionaries
              </span>
              <Sparkles className="h-5 w-5 text-amber-400 animate-pulse" />
            </div>
            
            <h2 className="text-6xl font-bold text-white mb-8">
              Meet the <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent animate-gradient-x">
                Architects
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collective of quantum thinkers, pattern recognizers, and future architects shaping Africa's AI destiny
            </p>
          </div>
          
          {/* Team Grid - Asymmetrical Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionaryTeam.map((member, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  marginTop: index % 2 === 0 ? '0' : '2rem'
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-4 bg-gradient-to-br ${member.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-700`}></div>
                
                <div className="relative bg-gray-900/70 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-800 group-hover:border-amber-500/50 transition-all duration-500">
                  {/* Member Image with Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent`}></div>
                    
                    {/* Role Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-gray-700">
                        <span className="text-sm font-bold text-white">{member.role}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-amber-400 mb-4 font-medium">{member.title}</p>
                    
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {member.bio}
                    </p>
                    
                    {/* Signature */}
                    <div className="pt-6 border-t border-gray-800">
                      <div className="text-xs text-gray-500 mb-2">Signature Insight</div>
                      <p className="text-sm text-amber-300/80 italic">"{member.signature}"</p>
                    </div>
                    
                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {member.expertise.map((skill, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs font-medium rounded-full border border-gray-700 group-hover:border-amber-500/50 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col items-center gap-6">
              <div className="text-lg text-gray-400">
                Ready to join the architects?
              </div>
              <button className="group relative px-12 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
                <span className="relative flex items-center gap-3">
                  <span>Become a Visionary</span>
                  <Rocket className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Labs - Interactive Map */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Map className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-bold tracking-widest text-cyan-400 uppercase">
                Innovation Network
              </span>
              <Map className="h-5 w-5 text-cyan-400" />
            </div>
            
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Quantum Labs
              </span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {innovationLabs.map((lab, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-900 to-black rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/50 transition-all duration-500">
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${lab.color} bg-opacity-10`}>
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${lab.color} text-white`}>
                        {lab.icon}
                      </div>
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full bg-gray-800 text-gray-400">
                      {lab.location}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {lab.name}
                  </h3>
                  <p className="text-gray-400 mb-6">{lab.focus}</p>
                  
                  <div className="space-y-3">
                    {lab.projects.map((project, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-500"></div>
                        <span className="text-sm text-gray-300">{project}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Connection Lines */}
                  <div className="absolute top-1/2 right-0 w-16 h-0.5 bg-gray-800 group-hover:bg-gradient-to-r from-gray-800 to-cyan-500 transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Manifesto */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="container mx-auto max-w-4xl text-center">
          {/* Animated Orb */}
          <div className="relative w-32 h-32 mx-auto mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-black rounded-full"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-12 bg-black rounded-full flex items-center justify-center">
              <Infinity className="h-8 w-8 text-amber-400" />
            </div>
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-8">
            The Future is <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-300 bg-clip-text text-transparent animate-gradient-x">
              Patterned
            </span>
          </h2>
          
          <p className="text-2xl text-gray-300 mb-12 leading-relaxed">
            We see patterns where others see chaos. We find rhythms in randomness. 
            We are building the first truly African AI—not by imitation, but by 
            <span className="font-bold text-amber-300"> invention</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-10 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-full hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-500">
              <span className="flex items-center gap-3">
                Join the Pattern
                <ChevronRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
            <button className="px-10 py-4 bg-transparent text-white font-bold rounded-full border-2 border-gray-700 hover:border-amber-500 hover:text-amber-400 transition-all duration-500">
              Read Our Manifesto
            </button>
          </div>
          
          {/* Contact Coordinates */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-amber-400 font-bold mb-4">QUANTUM COORDINATES</div>
              <div className="space-y-2 text-gray-400">
                <div>• Nairobi Neural Nexus</div>
                <div>• Lagos Logic Lattice</div>
                <div>• Accra Algorithm Arc</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-cyan-400 font-bold mb-4">FREQUENCY CHANNELS</div>
              <div className="space-y-2 text-gray-400">
                <div>• resonance@bitafrica.ai</div>
                <div>• +254 700 888 999</div>
                <div>• Quantum Signal Network</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-gray-900/30 backdrop-blur-sm border border-gray-800">
              <div className="text-sm text-purple-400 font-bold mb-4">PATTERN RECOGNITION</div>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Twitter</a>
                <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors">Quantum</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-x-reverse {
          background-size: 200% auto;
          animation: gradient-x-reverse 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #111;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #f59e0b, #ea580c);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #fbbf24, #f97316);
        }
      `}</style>
    </main>
  );
}

export default Company;