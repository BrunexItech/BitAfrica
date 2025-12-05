import React from 'react';
import { Users, Trophy, Briefcase, Handshake, Newspaper, Globe, Award, Users as TeamIcon, Target, Heart } from 'lucide-react';

function Company() {
  const companySections = [
    {
      id: "about-us",
      title: "About Us",
      description: "Learn about our mission, vision, and journey in revolutionizing African technology through artificial intelligence.",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      linkText: "Our Story →",
      stats: [
        { label: "Founded", value: "2020" },
        { label: "Countries", value: "10+" },
        { label: "Team Members", value: "50+" }
      ]
    },
    {
      id: "leadership",
      title: "Leadership",
      description: "Meet our visionary leaders and experienced executives who are driving innovation across Africa.",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      linkText: "Meet Our Team →",
      stats: [
        { label: "Executives", value: "8" },
        { label: "Avg. Experience", value: "15+ yrs" },
        { label: "Nationalities", value: "12+" }
      ]
    },
    {
      id: "careers",
      title: "Careers",
      description: "Join our mission to transform Africa through technology. Explore exciting opportunities in AI and innovation.",
      icon: <Briefcase className="h-8 w-8" />,
      color: "from-emerald-500 to-green-500",
      linkText: "View Openings →",
      stats: [
        { label: "Open Positions", value: "15+" },
        { label: "Remote Roles", value: "Yes" },
        { label: "Benefits", value: "Premium" }
      ]
    },
    {
      id: "partners",
      title: "Partners",
      description: "Discover our strategic partnerships and collaborations with leading technology companies worldwide.",
      icon: <Handshake className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500",
      linkText: "Our Network →",
      stats: [
        { label: "Global Partners", value: "25+" },
        { label: "African Partners", value: "40+" },
        { label: "Joint Projects", value: "100+" }
      ]
    },
    {
      id: "newsroom",
      title: "Newsroom",
      description: "Latest company news, press releases, media coverage, and announcements about our innovations.",
      icon: <Newspaper className="h-8 w-8" />,
      color: "from-indigo-500 to-blue-500",
      linkText: "Latest News →",
      stats: [
        { label: "Press Releases", value: "50+" },
        { label: "Media Features", value: "100+" },
        { label: "Awards", value: "15+" }
      ]
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI solutions",
      icon: <Target className="h-6 w-6" />,
      color: "text-cyan-400"
    },
    {
      title: "Excellence",
      description: "Delivering world-class quality in everything we do",
      icon: <Award className="h-6 w-6" />,
      color: "text-blue-400"
    },
    {
      title: "Collaboration",
      description: "Building strong partnerships for shared success",
      icon: <TeamIcon className="h-6 w-6" />,
      color: "text-purple-400"
    },
    {
      title: "Impact",
      description: "Creating meaningful change across Africa",
      icon: <Heart className="h-6 w-6" />,
      color: "text-pink-400"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
            <Users className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">ABOUT BITAFRICA AI</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Pioneering Africa's <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Revolution</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
            We're on a mission to democratize artificial intelligence across Africa, 
            making advanced technology accessible and impactful for businesses and communities.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-gray-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-400">2020</div>
              <div className="text-sm text-gray-400">Founded</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-400">AI Experts</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-400">100+</div>
              <div className="text-sm text-gray-400">Projects</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-cyan-400">10+</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
          </div>
        </div>

        {/* Company Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {companySections.map((section) => (
            <a
              key={section.id}
              href={`/company/${section.id}`}
              className="group block"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                {/* Section Icon */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${section.color} w-fit shadow-lg`}>
                  <div className="text-white">{section.icon}</div>
                </div>
                
                {/* Section Title */}
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {section.title}
                </h2>
                
                {/* Section Description */}
                <p className="text-gray-400 mb-6">
                  {section.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {section.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                {/* View More Link */}
                <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-cyan-500/30 transition-colors">
                  <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {section.linkText}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Core Values</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${value.color.replace('text-', 'from-')}/10 w-fit`}>
                  <div className={value.color}>{value.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to partner with us, join our team, or learn more about our mission, 
            we'd love to connect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/company/careers"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Careers
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Company;