import React from 'react';
import { Brain, Cpu, Shield, Globe, Code, Server, Palette, Zap, Sparkles, Target, BarChart, Lock, Cloud, Layout, Database, Rocket } from 'lucide-react';

function Solutions() {
  const solutions = [
    {
      id: "ai-analytics",
      title: "AI Analytics",
      description: "Advanced predictive analytics and business intelligence powered by machine learning algorithms.",
      icon: <Brain className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Predictive Modeling",
        "Real-time Analytics",
        "Business Intelligence",
        "Data Visualization",
        "Insight Generation"
      ],
      useCases: [
        "Sales Forecasting",
        "Customer Behavior Analysis",
        "Market Trend Prediction",
        "Risk Assessment"
      ]
    },
    {
      id: "automation",
      title: "Automation",
      description: "Intelligent process automation solutions to streamline operations and reduce manual workload.",
      icon: <Cpu className="h-8 w-8" />,
      color: "from-purple-500 to-blue-500",
      features: [
        "RPA Implementation",
        "Workflow Automation",
        "Document Processing",
        "Task Scheduling",
        "Exception Handling"
      ],
      useCases: [
        "Invoice Processing",
        "Customer Service Automation",
        "Report Generation",
        "Data Entry Automation"
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      description: "AI-powered threat detection and prevention systems for enterprise-grade security.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-cyan-500 to-teal-500",
      features: [
        "Threat Detection",
        "Anomaly Detection",
        "Security Monitoring",
        "Incident Response",
        "Vulnerability Assessment"
      ],
      useCases: [
        "Network Security",
        "Fraud Detection",
        "Compliance Monitoring",
        "Data Protection"
      ]
    },
    {
      id: "smart-cities",
      title: "Smart Cities",
      description: "Urban intelligence solutions for efficient city management and citizen services.",
      icon: <Globe className="h-8 w-8" />,
      color: "from-blue-500 to-indigo-500",
      features: [
        "IoT Integration",
        "Traffic Management",
        "Resource Optimization",
        "Public Safety",
        "Citizen Engagement"
      ],
      useCases: [
        "Traffic Flow Optimization",
        "Waste Management",
        "Energy Consumption",
        "Public Transportation"
      ]
    },
    {
      id: "dev-solutions",
      title: "Dev Solutions",
      description: "AI-driven development tools and platforms for modern software engineering.",
      icon: <Code className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Code Generation",
        "Testing Automation",
        "Debugging Assistance",
        "Performance Optimization",
        "Deployment Automation"
      ],
      useCases: [
        "Automated Testing",
        "Code Review",
        "CI/CD Pipeline",
        "Performance Monitoring"
      ]
    },
    {
      id: "machine-learning",
      title: "Machine Learning",
      description: "Custom ML model development, training, and deployment for specific business needs.",
      icon: <Server className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Model Development",
        "Data Training",
        "Model Deployment",
        "Performance Tuning",
        "A/B Testing"
      ],
      useCases: [
        "Image Recognition",
        "Natural Language Processing",
        "Recommendation Systems",
        "Predictive Maintenance"
      ]
    },
    {
      id: "uiux-design",
      title: "UI/UX Design",
      description: "Intelligent user interfaces and experience design powered by behavioral analytics.",
      icon: <Palette className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing",
        "Accessibility Design"
      ],
      useCases: [
        "Dashboard Design",
        "Mobile App UX",
        "E-commerce Interfaces",
        "Enterprise Software"
      ]
    },
    {
      id: "cloud-ai",
      title: "Cloud AI",
      description: "Scalable AI infrastructure and services on cloud platforms for enterprise applications.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Cloud Infrastructure",
        "Scalable Computing",
        "Data Storage",
        "API Management",
        "Cost Optimization"
      ],
      useCases: [
        "AI Model Hosting",
        "Big Data Processing",
        "Real-time Analytics",
        "Multi-cloud Strategy"
      ]
    }
  ];

  const solutionCategories = [
    {
      title: "By Industry",
      items: ["Healthcare AI", "Financial Tech", "Retail Solutions", "Manufacturing AI", "Education Tech"],
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "By Technology",
      items: ["Computer Vision", "NLP", "Predictive Analytics", "RPA", "IoT AI"],
      icon: <BarChart className="h-6 w-6" />
    },
    {
      title: "By Scale",
      items: ["Startup Solutions", "SMB Packages", "Enterprise Suite", "Government Scale", "Custom Solutions"],
      icon: <Rocket className="h-6 w-6" />
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
            <Sparkles className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">AI SOLUTIONS</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Innovative <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Solutions</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Comprehensive artificial intelligence solutions designed to solve complex business challenges 
            and drive digital transformation across industries.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution) => (
            <a
              key={solution.id}
              href={`/solutions/${solution.id}`}
              className="group block"
            >
              <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                {/* Solution Icon */}
                <div className={`mb-5 p-3 rounded-xl bg-gradient-to-r ${solution.color} w-fit shadow-lg`}>
                  <div className="text-white">{solution.icon}</div>
                </div>
                
                {/* Solution Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {solution.title}
                </h2>
                
                {/* Solution Description */}
                <p className="text-gray-400 text-sm mb-4">
                  {solution.description}
                </p>
                
                {/* Features */}
                <div className="mb-4">
                  <h3 className="text-xs font-semibold text-cyan-400 mb-2">KEY FEATURES</h3>
                  <ul className="space-y-1">
                    {solution.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-gray-300 text-xs">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* View More Link */}
                <div className="mt-6 pt-4 border-t border-gray-700/50 group-hover:border-cyan-500/30 transition-colors">
                  <span className="text-cyan-400 font-semibold text-sm group-hover:text-cyan-300 transition-colors">
                    Explore Solution →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Solution Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Browse by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Category</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {solutionCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <div className="text-cyan-400">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 hover:text-cyan-300 transition-colors cursor-pointer">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Preview */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">
              Success <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Stories</span>
            </h2>
            <a href="/case-studies" className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
              View All Case Studies →
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-cyan-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Banking Sector</h3>
              <p className="text-gray-300 text-sm mb-4">
                Reduced fraud by 85% using our AI Analytics solution.
              </p>
              <span className="text-cyan-400 text-sm font-semibold">Read Case Study</span>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Healthcare Provider</h3>
              <p className="text-gray-300 text-sm mb-4">
                Improved patient diagnosis accuracy by 40% with ML models.
              </p>
              <span className="text-purple-400 text-sm font-semibold">Read Case Study</span>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 p-6 rounded-xl border border-emerald-500/20">
              <h3 className="text-xl font-bold text-white mb-2">Manufacturing Firm</h3>
              <p className="text-gray-300 text-sm mb-4">
                Increased production efficiency by 30% through automation.
              </p>
              <span className="text-emerald-400 text-sm font-semibold">Read Case Study</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Implement AI Solutions?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of AI experts can help you identify the right solutions and implement them successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Request a Demo
            </a>
            <a
              href="/solutions"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:scale-105 transition-all duration-300"
            >
              Browse All Solutions
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Solutions;