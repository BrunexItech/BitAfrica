import React, { useState } from 'react';

function Company() {
  const [activeService, setActiveService] = useState(0);

  const leadershipTeam = [
    {
      name: "Bruno Sharif",
      role: "Founder & CEO",
      bio: "Technology visionary with extensive experience in digital transformation across African markets. Leads the strategic direction of BitAfrica AI.",
      image: "https://i.ibb.co/SDW8mysy/IMG-20250419-WA0007-2.jpg",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Dr. Amina Keita",
      role: "Chief Technology Officer",
      bio: "Leading our technical research and development initiatives. Oversees AI systems and software architecture.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Kofi Mensah",
      role: "Head of Engineering Operations",
      bio: "Manages software development lifecycle and engineering teams across regional offices.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-emerald-500 to-green-500"
    },
    {
      name: "Naledi Chukwu",
      role: "Director of Educational Programs",
      bio: "Designs and implements technology education initiatives for practical, industry-relevant technical skills.",
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800&q=80",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const companyServices = [
    {
      title: "Custom Software Solutions",
      description: "We develop bespoke software applications designed to solve specific business challenges in African markets.",
      details: [
        "Enterprise application development",
        "Mobile and web platform creation",
        "Legacy system modernization",
        "Cross-platform solutions"
      ]
    },
    {
      title: "AI & Machine Learning Systems",
      description: "Our AI division creates intelligent systems that analyze data and automate processes for African business environments.",
      details: [
        "Predictive analytics platforms",
        "Natural language processing",
        "Computer vision applications",
        "Automated decision support"
      ]
    },
    {
      title: "Technology Education Services",
      description: "Through BitAfrica AI Academy, we provide comprehensive technology training programs.",
      details: [
        "Software development bootcamps",
        "AI and data science workshops",
        "Enterprise technology training",
        "Professional development"
      ]
    }
  ];

  const operationalValues = [
    {
      principle: "Contextual Innovation",
      explanation: "Technology solutions designed with deep understanding of local contexts and African market dynamics."
    },
    {
      principle: "Sustainable Development",
      explanation: "Systems built for long-term impact, prioritizing maintainability, scalability and economic viability."
    },
    {
      principle: "Collaborative Growth",
      explanation: "Partnering with clients and communities to foster ecosystems of innovation and knowledge sharing."
    }
  ];

  const regionalPresence = [
    {
      region: "East Africa Hub",
      location: "Nairobi, Kenya",
      focus: "AI Research & Development Center",
      description: "Research facility focusing on machine learning models and software innovation."
    },
    {
      region: "West Africa Operations",
      location: "Lagos, Nigeria",
      focus: "Engineering & Deployment Center",
      description: "Technical implementation hub for software development and deployment."
    },
    {
      region: "Southern Africa Branch",
      location: "Cape Town, South Africa",
      focus: "Education & Training Facility",
      description: "Learning center delivering technology education programs."
    },
    {
      region: "Central Africa Office",
      location: "Kigali, Rwanda",
      focus: "Strategic Partnerships",
      description: "Coordination center for regional collaborations and expansion."
    }
  ];

  const developmentApproach = [
    {
      phase: "Discovery & Analysis",
      description: "Understanding business context, technical requirements, and operational environment."
    },
    {
      phase: "Design & Architecture",
      description: "Designing solutions that balance functionality, scalability, and maintainability."
    },
    {
      phase: "Development & Implementation",
      description: "Building and testing solutions with continuous feedback and quality emphasis."
    },
    {
      phase: "Deployment & Support",
      description: "Managing deployment and providing comprehensive post-implementation support."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-6 sm:mb-8">
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <span className="text-cyan-300 font-medium tracking-wider text-sm sm:text-base">BITAFRICA AI</span>
              <div className="h-px w-8 sm:w-12 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 sm:mb-8 leading-tight">
              <span className="block opacity-90">Transforming</span>
              <span className="block opacity-80 mt-2 sm:mt-4">African Business</span>
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mt-2 sm:mt-4 pb-1">
                Through Technology
              </span>
            </h1>
            
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 sm:mb-12">
                We are a technology company specializing in software development, artificial intelligence solutions, and technology education services across African markets.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-start">
            <div>
              <div className="mb-10 sm:mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">
                  Our <span className="text-cyan-400">Mission</span>
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To empower African businesses and organizations with cutting-edge technological solutions that are both globally competitive and locally relevant.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We bridge the digital divide by making advanced technology accessible, understandable, and beneficial to African enterprises.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-light mb-4 sm:mb-6 text-gray-200">Our Philosophy</h3>
                <div className="space-y-4 sm:space-y-6">
                  {operationalValues.map((value, index) => (
                    <div key={index} className="relative pl-5 sm:pl-6">
                      <div className="absolute left-0 top-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-cyan-500" />
                      <h4 className="text-lg font-medium mb-1 sm:mb-2 text-cyan-300">{value.principle}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{value.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="space-y-10 sm:space-y-12">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 sm:mb-8">
                  Our <span className="text-blue-400">Services</span>
                </h2>
                
                <div className="space-y-6 sm:space-y-8">
                  {companyServices.map((service, index) => (
                    <div 
                      key={index}
                      className={`group cursor-pointer transition-all duration-300 ${
                        activeService === index ? 'opacity-100' : 'opacity-80 hover:opacity-100'
                      }`}
                      onClick={() => setActiveService(index)}
                      onMouseEnter={() => setActiveService(index)}
                    >
                      <div className={`border-l-2 pl-5 sm:pl-6 py-3 sm:py-4 transition-all duration-300 ${
                        activeService === index 
                          ? 'border-cyan-500 bg-gradient-to-r from-cyan-500/5 to-transparent' 
                          : 'border-gray-700 hover:border-cyan-400/50'
                      }`}>
                        <h3 className="text-lg sm:text-xl font-medium mb-2 sm:mb-3 text-gray-200 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                          {service.description}
                        </p>
                        <div className="space-y-1 sm:space-y-2">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50 mt-1.5 sm:mt-2 flex-shrink-0" />
                              <span className="text-xs sm:text-sm text-gray-400">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16 sm:py-20 relative bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-center">
              Our <span className="text-purple-400">Leadership Team</span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm sm:text-base">
              Experienced professionals guiding our strategic direction
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="group">
                <div className="relative mb-4 sm:mb-6">
                  {/* Circular Profile Frame */}
                  <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48">
                    {/* Outer Glow - REMOVED WHITE BORDER */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md`} />
                    
                    {/* Profile Image Container */}
                    <div className="relative rounded-full overflow-hidden bg-gray-800">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Left-aligned text content */}
                <div className="text-left px-2 sm:px-4">
                  <h3 className="text-lg sm:text-xl font-medium text-white mb-1">{member.name}</h3>
                  <div className="text-cyan-300 font-medium mb-3 text-xs sm:text-sm">{member.role}</div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Development Methodology */}
      <div className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-center">
              Our <span className="text-emerald-400">Development Approach</span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm sm:text-base">
              A structured methodology ensuring quality and alignment with business objectives
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />
            
            <div className="space-y-8 sm:space-y-12">
              {developmentApproach.map((step, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start gap-4 sm:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step Indicator */}
                  <div className="relative z-10 flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
                    <div className="absolute inset-1 sm:inset-1.5 rounded-full bg-gray-900" />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 sm:p-6 border border-gray-700/50 backdrop-blur-sm">
                      <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">{step.phase}</h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Regional Presence */}
      <div className="py-16 sm:py-20 relative bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-center">
              Regional <span className="text-amber-400">Presence</span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm sm:text-base">
              Strategically located across Africa to serve diverse markets
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {regionalPresence.map((location, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-amber-500/30 transition-all duration-300 hover:translate-y-[-2px]"
              >
                <div className="mb-3 sm:mb-4">
                  <div className="text-amber-400 text-xs sm:text-sm font-medium mb-1">{location.region}</div>
                  <div className="text-base sm:text-lg font-medium text-white">{location.location}</div>
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <div className="text-cyan-300 text-xs sm:text-sm font-medium">{location.focus}</div>
                </div>
                
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {location.description}
                </p>
                
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-700/50">
                  <div className="text-xs text-gray-500">Operational since 2021</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technology Focus */}
      <div className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 text-center">
              Technology <span className="text-blue-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-center max-w-3xl mx-auto text-sm sm:text-base">
              Core technical competencies driving our solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Software Development</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Full-stack web applications",
                  "Mobile application development",
                  "Enterprise software solutions",
                  "API development & integration",
                  "Cloud-native architectures",
                  "Microservices implementation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">AI & Data Systems</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Machine learning models",
                  "Data analytics platforms",
                  "Predictive systems",
                  "Natural language processing",
                  "Computer vision applications",
                  "Intelligent automation"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-4">Infrastructure & Platforms</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Cloud infrastructure management",
                  "DevOps & CI/CD pipelines",
                  "System architecture design",
                  "Performance optimization",
                  "Security implementation",
                  "Scalability planning"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 sm:gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span className="text-gray-300 text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
              <div className="text-cyan-400 font-medium text-sm sm:text-base">BITAFRICA AI</div>
              <div className="h-px w-8 sm:w-16 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            </div>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed mb-8 sm:mb-12 italic">
              "We believe that technology's true value is measured by its positive impact on businesses and communities."
            </p>
            
            <div className="text-gray-400">
              <div className="text-sm sm:text-base">Contact: bitafrica.ai@gmail.com</div>
              <div className="text-xs text-gray-500 mt-1 sm:mt-2">Nairobi • Lagos • Accra • Cape Town</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;