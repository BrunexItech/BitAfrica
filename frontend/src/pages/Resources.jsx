import React from 'react';
import { FileText, BookOpen, Code, Video, Users, Download, Calendar, Book, FileCode, Newspaper } from 'lucide-react';

function Resources() {
  const resourceSections = [
    {
      id: "whitepapers",
      title: "Whitepapers",
      description: "In-depth research papers and technical reports on AI trends, implementations, and industry insights.",
      icon: <FileText className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      linkText: "Browse Whitepapers →",
      items: [
        { title: "AI in African Markets: 2024 Report", downloads: "1,245" },
        { title: "Blockchain & AI Integration Guide", downloads: "892" },
        { title: "Cloud Migration Best Practices", downloads: "1,567" },
        { title: "Ethical AI Framework", downloads: "743" }
      ]
    },
    {
      id: "blog",
      title: "Blog",
      description: "Latest articles, case studies, and thought leadership on artificial intelligence and technology.",
      icon: <BookOpen className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      linkText: "Read Our Blog →",
      items: [
        { title: "The Future of AI in Africa", date: "Mar 15, 2024" },
        { title: "Case Study: Banking Sector Transformation", date: "Feb 28, 2024" },
        { title: "5 AI Trends to Watch in 2024", date: "Jan 20, 2024" },
        { title: "Interview with Our Lead Data Scientist", date: "Dec 10, 2023" }
      ]
    },
    {
      id: "documentation",
      title: "Documentation",
      description: "Comprehensive technical documentation, user guides, and implementation resources.",
      icon: <Code className="h-8 w-8" />,
      color: "from-emerald-500 to-green-500",
      linkText: "View Documentation →",
      items: [
        { title: "API Integration Guide", version: "v2.4" },
        { title: "SDK Quick Start", version: "v1.8" },
        { title: "Deployment Manual", version: "v3.1" },
        { title: "Troubleshooting Handbook", version: "v2.0" }
      ]
    },
    {
      id: "webinars",
      title: "Webinars",
      description: "Live and recorded training sessions, workshops, and expert-led educational content.",
      icon: <Video className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500",
      linkText: "Join Webinars →",
      items: [
        { title: "AI Implementation Workshop", date: "April 10, 2024" },
        { title: "Cloud Security Best Practices", date: "March 25, 2024" },
        { title: "ML Model Deployment", date: "Feb 15, 2024" },
        { title: "Q&A with AI Experts", date: "Jan 30, 2024" }
      ]
    },
    {
      id: "api-reference",
      title: "API Reference",
      description: "Complete API documentation, endpoints, authentication, and integration examples.",
      icon: <FileCode className="h-8 w-8" />,
      color: "from-indigo-500 to-blue-500",
      linkText: "API Docs →",
      items: [
        { title: "REST API Endpoints", methods: "GET, POST, PUT, DELETE" },
        { title: "Authentication", methods: "JWT, OAuth 2.0" },
        { title: "WebSocket API", methods: "Real-time" },
        { title: "Webhooks", methods: "Event-driven" }
      ]
    }
  ];

  const latestUpdates = [
    {
      type: "Whitepaper",
      title: "AI Ethics Framework for African Businesses",
      date: "March 1, 2024",
      icon: <Download className="h-5 w-5" />,
      color: "bg-blue-500/20"
    },
    {
      type: "Blog Post",
      title: "How AI is Transforming Agriculture in East Africa",
      date: "February 20, 2024",
      icon: <Newspaper className="h-5 w-5" />,
      color: "bg-purple-500/20"
    },
    {
      type: "Webinar",
      title: "Live Demo: Building AI-Powered Chatbots",
      date: "April 5, 2024",
      icon: <Calendar className="h-5 w-5" />,
      color: "bg-amber-500/20"
    },
    {
      type: "Documentation",
      title: "New SDK Release v2.1 Available",
      date: "February 10, 2024",
      icon: <Book className="h-5 w-5" />,
      color: "bg-emerald-500/20"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
            <BookOpen className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">KNOWLEDGE CENTER</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Resources & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Documentation</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Access our comprehensive library of technical resources, research papers, 
            and educational content to accelerate your AI journey.
          </p>
        </div>

        {/* Resource Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {resourceSections.map((section) => (
            <a
              key={section.id}
              href={`/resources/${section.id}`}
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
                
                {/* Items List */}
                <div className="space-y-3 mb-6">
                  {section.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-gray-900/50 rounded-lg hover:bg-gray-800 transition-colors">
                      <span className="text-gray-300 text-sm truncate">{item.title}</span>
                      <span className="text-xs text-gray-500 px-2 py-1 bg-gray-800 rounded">
                        {item.downloads || item.date || item.version || item.methods}
                      </span>
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

        {/* Latest Updates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Latest <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Updates</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestUpdates.map((update, index) => (
              <a
                key={index}
                href="#"
                className="group"
              >
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 h-full">
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-lg ${update.color}`}>
                      <div className="text-cyan-400">{update.icon}</div>
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-cyan-400">{update.type}</span>
                      <h3 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-300 transition-colors">
                        {update.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2">{update.date}</p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 max-w-xl">
                Subscribe to our newsletter for the latest resources, updates, 
                and insights delivered directly to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 min-w-64"
              />
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resources;