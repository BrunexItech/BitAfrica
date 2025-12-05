import React from 'react';
import { Users, Trophy, Briefcase, Handshake, Newspaper, Globe, Award, Users as TeamIcon, Target, Heart, Sparkles, Zap, Cpu, Brain, Code, Rocket, ChevronRight, Star, CheckCircle, Lightbulb, Palette, TrendingUp } from 'lucide-react';

function Company() {
  const companySections = [
    {
      id: "about-us",
      title: "About Us",
      description: "Learn about our mission, vision, and journey in revolutionizing African technology through artificial intelligence.",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-600 to-cyan-500",
      linkText: "Our Story",
      stats: [
        { label: "Founded", value: "2020" },
        { label: "Countries", value: "10+" },
        { label: "Team Members", value: "50+" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "leadership",
      title: "Leadership",
      description: "Meet our visionary leaders and experienced executives who are driving innovation across Africa.",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-purple-600 to-pink-500",
      linkText: "Meet Our Team",
      stats: [
        { label: "Executives", value: "8" },
        { label: "Avg. Experience", value: "15+ yrs" },
        { label: "Nationalities", value: "12+" }
      ],
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: "careers",
      title: "Careers",
      description: "Join our mission to transform Africa through technology. Explore exciting opportunities in AI and innovation.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-emerald-600 to-green-500",
      linkText: "View Openings",
      stats: [
        { label: "Open Positions", value: "15+" },
        { label: "Remote Roles", value: "Yes" },
        { label: "Benefits", value: "Premium" }
      ],
      image: "https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "partners",
      title: "Partners",
      description: "Discover our strategic partnerships and collaborations with leading technology companies worldwide.",
      icon: <Handshake className="h-8 w-8" />,
      color: "from-amber-600 to-orange-500",
      linkText: "Our Network",
      stats: [
        { label: "Global Partners", value: "25+" },
        { label: "African Partners", value: "40+" },
        { label: "Joint Projects", value: "100+" }
      ],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: "newsroom",
      title: "Newsroom",
      description: "Latest company news, press releases, media coverage, and announcements about our innovations.",
      icon: <Newspaper className="h-8 w-8" />,
      color: "from-indigo-600 to-blue-500",
      linkText: "Latest News",
      stats: [
        { label: "Press Releases", value: "50+" },
        { label: "Media Features", value: "100+" },
        { label: "Awards", value: "15+" }
      ],
      image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI solutions",
      icon: <Zap className="h-8 w-8" />,
      color: "bg-gradient-to-r from-cyan-600 to-blue-600",
      bgColor: "bg-cyan-50"
    },
    {
      title: "Excellence",
      description: "Delivering world-class quality in everything we do",
      icon: <Award className="h-8 w-8" />,
      color: "bg-gradient-to-r from-blue-600 to-indigo-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Collaboration",
      description: "Building strong partnerships for shared success",
      icon: <TeamIcon className="h-8 w-8" />,
      color: "bg-gradient-to-r from-purple-600 to-pink-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Impact",
      description: "Creating meaningful change across Africa",
      icon: <Heart className="h-8 w-8" />,
      color: "bg-gradient-to-r from-pink-600 to-rose-600",
      bgColor: "bg-pink-50"
    }
  ];

  const teamMembers = [
    {
      name: "Kwame Nkrumah",
      title: "CEO & Visionary Founder",
      role: "Chief Executive Officer",
      bio: "Pioneering Africa's AI revolution with 20+ years in tech innovation and entrepreneurship. Led BitAfrica from concept to continental leader.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-blue-600 to-cyan-500",
      expertise: ["AI Strategy", "Tech Entrepreneurship", "African Markets"]
    },
    {
      name: "Amina Diallo",
      title: "AI Architect & Quantum Pioneer",
      role: "Chief Technology Officer",
      bio: "Leading quantum computing research and advanced AI systems development. PhD in Computer Science from MIT.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-purple-600 to-pink-500",
      expertise: ["Machine Learning", "Quantum Computing", "System Architecture"]
    },
    {
      name: "Chijioke Okonkwo",
      title: "Data Alchemist & ML Virtuoso",
      role: "Chief Data Scientist",
      bio: "Transforming raw data into gold with sophisticated machine learning algorithms. Former Google AI researcher.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-emerald-600 to-green-500",
      expertise: ["Data Science", "Deep Learning", "Predictive Analytics"]
    },
    {
      name: "Fatoumata Bâ",
      title: "Innovation Catalyst & Ecosystem Builder",
      role: "Chief Innovation Officer",
      bio: "Building Africa's tech ecosystem through strategic partnerships and innovation hubs across 15 countries.",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-amber-600 to-orange-500",
      expertise: ["Business Development", "Partnerships", "Startup Ecosystems"]
    },
    {
      name: "Tariq Hassan",
      title: "Digital Transformation Maestro",
      role: "Chief Operations Officer",
      bio: "Streamlining operations across 10+ African countries with AI-powered solutions for maximum efficiency.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005-128?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-indigo-600 to-blue-500",
      expertise: ["Operations", "Process Optimization", "Scaling"]
    },
    {
      name: "Naledi Molefe",
      title: "Human-Tech Synergy Specialist",
      role: "Chief People Officer",
      bio: "Building Africa's most talented tech team with focus on diversity, inclusion, and talent development.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-rose-600 to-pink-500",
      expertise: ["Talent Acquisition", "Culture Building", "Employee Experience"]
    }
  ];

  const whatWeDo = [
    {
      title: "AI Solutions Development",
      description: "Building custom AI solutions tailored for African businesses and challenges",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: <Brain className="h-10 w-10" />,
      color: "bg-gradient-to-r from-blue-600 to-cyan-500"
    },
    {
      title: "Tech Talent Development",
      description: "Training the next generation of African AI experts through intensive bootcamps",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      icon: <Users className="h-10 w-10" />,
      color: "bg-gradient-to-r from-purple-600 to-pink-500"
    },
    {
      title: "Research & Innovation",
      description: "Pushing boundaries in AI research specific to African needs and contexts",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      icon: <Lightbulb className="h-10 w-10" />,
      color: "bg-gradient-to-r from-amber-600 to-orange-500"
    }
  ];

  const achievements = [
    { number: "50+", label: "AI Solutions Deployed", icon: <CheckCircle className="h-6 w-6" /> },
    { number: "1000+", label: "Developers Trained", icon: <Users className="h-6 w-6" /> },
    { number: "15", label: "Countries Served", icon: <Globe className="h-6 w-6" /> },
    { number: "25+", label: "Industry Awards", icon: <Star className="h-6 w-6" /> }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-16 sm:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-200 mb-6">
                <Sparkles className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">PIONEERING AFRICA'S AI FUTURE</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Empowering Africa with <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Artificial Intelligence</span>
              </h1>
              
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're democratizing artificial intelligence across Africa, making advanced technology 
                accessible and impactful for businesses, governments, and communities. Join us in shaping 
                the continent's digital future.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <a
                  href="/company/careers"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  Join Our Mission
                  <ChevronRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl border-2 border-gray-300 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500 border border-gray-300">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
                  alt="BitAfrica AI Innovation Center"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Achievement Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-300 animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-50">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-blue-700">300%</div>
                    <div className="text-sm text-gray-600">Growth YoY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-300 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl ${achievement.icon.props.className.includes('CheckCircle') ? 'bg-green-50 text-green-600' : 
                  achievement.icon.props.className.includes('Users') ? 'bg-blue-50 text-blue-600' :
                  achievement.icon.props.className.includes('Globe') ? 'bg-cyan-50 text-cyan-600' : 'bg-amber-50 text-amber-600'}`}
                >
                  {achievement.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{achievement.number}</div>
              <div className="text-sm text-gray-700">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* What We Do Section */}
      <div className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                What We Do
              </span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Transforming Africa's technological landscape through innovative AI solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeDo.map((item, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 right-4 p-3 rounded-xl text-white ${item.color} shadow-lg`}>
                    {item.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-700 mb-6">{item.description}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800"
                  >
                    Learn more
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Team Section - Clean and Visible */}
      <div className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Visionary Team</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The brilliant minds shaping Africa's AI future with passion, expertise, and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Team Member Image - Clean and Fully Visible */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Role Badge - Clean Design */}
                  <div className={`absolute bottom-4 left-4 px-4 py-2 rounded-full bg-gradient-to-r ${member.color} text-white text-sm font-bold shadow-lg`}>
                    {member.role}
                  </div>
                </div>
                
                {/* Team Member Info */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-semibold mb-3">{member.title}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {member.expertise.map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full border border-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social/Contact - Clean Design */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Connect with {member.name.split(' ')[0]}</span>
                      <div className="flex gap-2">
                        <a href="#" className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4zM9 17.34H6.67v-7.13H9zM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23zm9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84 1.5 1.5 0 0 0-.08.54v4.09h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13v4.21z"/>
                          </svg>
                        </a>
                        <a href="#" className="p-2 rounded-lg bg-cyan-50 text-cyan-600 hover:bg-cyan-100 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Team Button */}
          <div className="text-center mt-12">
            <a
              href="/team"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
            >
              View Full Team
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Company Sections Grid */}
      <div className="py-16 sm:py-24 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companySections.map((section) => (
              <div
                key={section.id}
                className="group bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Section Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={section.image}
                    alt={section.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${section.color} text-white shadow-lg`}>
                    {section.icon}
                  </div>
                </div>
                
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {section.title}
                  </h2>
                  
                  <p className="text-gray-700 mb-6">
                    {section.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {section.stats.map((stat, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-blue-700">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* View More Link */}
                  <a 
                    href={`/company/${section.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800"
                  >
                    {section.linkText}
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 sm:py-24 bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">Core Values</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The principles that guide everything we do at BitAfrica AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-300 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >
                <div className={`mb-6 p-4 rounded-xl ${value.bgColor} w-fit`}>
                  <div className={`p-3 rounded-lg ${value.color} text-white`}>
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="py-16 sm:py-24 bg-gradient-to-r from-blue-700 to-cyan-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-16 w-16 text-white mx-auto mb-8" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Shape Africa's AI Future?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join us in building a smarter, more innovative Africa through artificial intelligence
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/company/careers"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-blue-700 font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 shadow-lg"
            >
              Explore Careers
              <Rocket className="ml-3 h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-300"
            >
              Start Partnership
              <Handshake className="ml-3 h-5 w-5" />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-white text-sm font-semibold mb-2">📍 Headquarters</div>
              <div className="text-blue-100">Nairobi, Kenya</div>
              <div className="text-blue-100">Accra, Ghana</div>
              <div className="text-blue-100">Lagos, Nigeria</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-white text-sm font-semibold mb-2">📧 Contact</div>
              <div className="text-blue-100">hello@bitafrica.ai</div>
              <div className="text-blue-100">+254 700 123 456</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-white text-sm font-semibold mb-2">🌍 Follow Us</div>
              <div className="flex gap-4 justify-center">
                <a href="#" className="text-white hover:text-cyan-200 transition-colors">LinkedIn</a>
                <a href="#" className="text-white hover:text-cyan-200 transition-colors">Twitter</a>
                <a href="#" className="text-white hover:text-cyan-200 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}

export default Company;