import React from 'react';
import { Calendar, User, Tag, ArrowRight, BookOpen, TrendingUp, Code, Brain, GraduationCap, Globe } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in African Healthcare",
      excerpt: "How machine learning is transforming medical diagnostics and patient care across the continent.",
      author: "Dr. Vivian Keita",
      role: "Chief Technology Officer",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "AI Solutions",
      icon: <Brain className="h-4 w-4" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Building Scalable Fintech Solutions for African Markets",
      excerpt: "Technical architecture considerations for financial technology platforms operating in diverse African economies.",
      author: "Bruno Sharif",
      role: "Founder & CEO",
      date: "Dec 10, 2024",
      readTime: "7 min read",
      category: "Software Development",
      icon: <Code className="h-4 w-4" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 3,
      title: "Tech Education: Bridging Africa's Digital Skills Gap",
      excerpt: "Our approach to practical, industry-relevant technology training for the next generation of African developers.",
      author: "James Mbuvi",
      role: "Director of Educational Programs",
      date: "Dec 5, 2024",
      readTime: "6 min read",
      category: "Education",
      icon: <GraduationCap className="h-4 w-4" />,
      color: "from-emerald-500 to-green-500"
    },
    {
      id: 4,
      title: "Cloud Migration Strategies for African Enterprises",
      excerpt: "Best practices for transitioning legacy systems to cloud infrastructure in resource-constrained environments.",
      author: "Gilbert Mensah",
      role: "Head of Engineering Operations",
      date: "Nov 28, 2024",
      readTime: "8 min read",
      category: "Infrastructure",
      icon: <TrendingUp className="h-4 w-4" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      id: 5,
      title: "AI Ethics in African Contexts",
      excerpt: "Developing ethical frameworks for artificial intelligence deployment that respect local cultural values.",
      author: "BitAfrica AI Ethics Board",
      role: "Research Team",
      date: "Nov 20, 2024",
      readTime: "9 min read",
      category: "Research",
      icon: <BookOpen className="h-4 w-4" />,
      color: "from-violet-500 to-indigo-500"
    },
    {
      id: 6,
      title: "Expanding Our Regional Presence: New Office in Kigali",
      excerpt: "How our new Rwanda office strengthens our ability to serve Central African markets with tailored solutions.",
      author: "BitAfrica AI Leadership",
      role: "Company News",
      date: "Nov 15, 2024",
      readTime: "4 min read",
      category: "Company Updates",
      icon: <Globe className="h-4 w-4" />,
      color: "from-rose-500 to-red-500"
    }
  ];

  const categories = [
    { name: "AI Solutions", count: 12, color: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { name: "Software Development", count: 18, color: "bg-gradient-to-r from-cyan-500 to-blue-500" },
    { name: "Tech Education", count: 9, color: "bg-gradient-to-r from-emerald-500 to-green-500" },
    { name: "Industry Insights", count: 15, color: "bg-gradient-to-r from-amber-500 to-orange-500" },
    { name: "Company News", count: 7, color: "bg-gradient-to-r from-rose-500 to-red-500" }
  ];

  const featuredAuthors = [
    {
      name: "Bruno Sharif",
      role: "Founder & CEO",
      expertise: "Digital Transformation & Strategy",
      posts: 24
    },
    {
      name: "Vivian Keita",
      role: "Chief Technology Officer",
      expertise: "AI Research & Development",
      posts: 18
    },
    {
      name: "Gilbert Mensah",
      role: "Head of Engineering Operations",
      expertise: "Software Architecture & DevOps",
      posts: 15
    },
    {
      name: "James Mbuvi",
      role: "Director of Educational Programs",
      expertise: "Technology Education & Skills Development",
      posts: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4">
            <BookOpen className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-400">
              INSIGHTS & PERSPECTIVES
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            BitAfrica AI Blog
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Expert insights on AI innovation, software development, and technology education across Africa
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30">
            <div className="text-2xl font-bold text-white mb-1">60+</div>
            <div className="text-gray-400 text-sm">Articles Published</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30">
            <div className="text-2xl font-bold text-white mb-1">4</div>
            <div className="text-gray-400 text-sm">Expert Authors</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30">
            <div className="text-2xl font-bold text-white mb-1">5</div>
            <div className="text-gray-400 text-sm">Categories</div>
          </div>
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-lg p-4 text-center border border-gray-700/30">
            <div className="text-2xl font-bold text-white mb-1">2021</div>
            <div className="text-gray-400 text-sm">Since</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
            <div className="space-y-6">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Category Tag */}
                    <div className="flex-shrink-0">
                      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg ${post.color} bg-opacity-10 border border-opacity-20`}>
                        <div className={`${post.color} bg-clip-text text-transparent`}>
                          {post.icon}
                        </div>
                        <span className="text-sm font-medium text-white">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      {/* Author & Metadata */}
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <User className="h-3.5 w-3.5 text-gray-400" />
                          <span className="text-gray-300">{post.author}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">{post.role}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 text-gray-400" />
                          <span className="text-gray-400">{post.date}</span>
                        </div>
                        
                        <span className="text-gray-500">•</span>
                        
                        <span className="text-gray-400">{post.readTime}</span>
                      </div>
                      
                      {/* Read More */}
                      <div className="mt-4">
                        <button className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium">
                          <span>Read Article</span>
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Categories */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 mb-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Tag className="h-5 w-5 text-cyan-400" />
                Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-700/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${category.color}`} />
                      <span className="text-gray-300">{category.name}</span>
                    </div>
                    <span className="text-cyan-400 text-sm font-medium">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Authors */}
            <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-6 mb-6 border border-gray-700/50">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <User className="h-5 w-5 text-cyan-400" />
                Featured Authors
              </h3>
              <div className="space-y-4">
                {featuredAuthors.map((author, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-700/20 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold">
                      {author.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-white">{author.name}</h4>
                      <p className="text-gray-400 text-sm mb-1">{author.role}</p>
                      <p className="text-gray-500 text-xs">{author.expertise}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <BookOpen className="h-3 w-3 text-cyan-400" />
                        <span className="text-cyan-400 text-xs">{author.posts} articles</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest insights on AI and technology in Africa delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Subscribe to Newsletter
                </button>
              </form>
              <p className="text-gray-500 text-xs mt-3">
                No spam. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Archive Section */}
        <div className="mt-12 bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-xl p-8 border border-gray-700/50">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">From Our Archives</h2>
            <p className="text-gray-400">Popular articles from previous years</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                year: "2024",
                title: "AI Adoption Trends in African Enterprises",
                reads: "2.4k"
              },
              {
                year: "2023", 
                title: "Building Tech Ecosystems in Emerging Markets",
                reads: "3.1k"
              },
              {
                year: "2022",
                title: "The Rise of African Tech Talent",
                reads: "4.2k"
              }
            ].map((archive, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-700/20 hover:bg-gray-700/30 transition-colors">
                <div className="text-cyan-400 font-bold text-lg mb-2">{archive.year}</div>
                <h4 className="text-white font-medium mb-2">{archive.title}</h4>
                <div className="text-gray-400 text-sm">{archive.reads} reads</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;