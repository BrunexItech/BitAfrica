import React from 'react';
import { Building, Heart, ShoppingBag, Factory, GraduationCap, Shield, DollarSign, Stethoscope, Store, Users, Target, BarChart, Rocket } from 'lucide-react';

function Industries() {
  const industries = [
    {
      id: "finance-banking",
      title: "Finance & Banking",
      description: "AI-powered solutions for fraud detection, risk assessment, algorithmic trading, and personalized banking experiences.",
      icon: <DollarSign className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500",
      solutions: [
        "Fraud Detection Systems",
        "Risk Assessment AI",
        "Algorithmic Trading",
        "Personalized Banking",
        "Regulatory Compliance"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Medical diagnostics, patient care optimization, drug discovery, and healthcare data analytics powered by artificial intelligence.",
      icon: <Heart className="h-8 w-8" />,
      color: "from-rose-500 to-pink-500",
      solutions: [
        "Medical Imaging Analysis",
        "Patient Risk Prediction",
        "Drug Discovery AI",
        "Health Data Analytics",
        "Telemedicine Solutions"
      ]
    },
    {
      id: "retail-ecommerce",
      title: "Retail & E-commerce",
      description: "Personalized shopping experiences, inventory optimization, demand forecasting, and customer behavior analysis.",
      icon: <ShoppingBag className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500",
      solutions: [
        "Personalized Recommendations",
        "Inventory Optimization",
        "Demand Forecasting",
        "Customer Behavior Analysis",
        "Supply Chain AI"
      ]
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Predictive maintenance, quality control automation, supply chain optimization, and smart factory implementation.",
      icon: <Factory className="h-8 w-8" />,
      color: "from-emerald-500 to-green-500",
      solutions: [
        "Predictive Maintenance",
        "Quality Control AI",
        "Supply Chain Optimization",
        "Smart Factory Solutions",
        "Production Line Automation"
      ]
    },
    {
      id: "education",
      title: "Education",
      description: "Personalized learning platforms, intelligent tutoring systems, educational analytics, and administrative automation.",
      icon: <GraduationCap className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-500",
      solutions: [
        "Personalized Learning",
        "Intelligent Tutoring",
        "Educational Analytics",
        "Administrative Automation",
        "Virtual Classrooms"
      ]
    },
    {
      id: "government",
      title: "Government",
      description: "Smart city solutions, public safety systems, administrative automation, and citizen service optimization.",
      icon: <Shield className="h-8 w-8" />,
      color: "from-indigo-500 to-blue-500",
      solutions: [
        "Smart City Solutions",
        "Public Safety Systems",
        "Administrative Automation",
        "Citizen Service AI",
        "Infrastructure Monitoring"
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
            <Building className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">INDUSTRIES WE SERVE</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Industry-Specific <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI Solutions</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We deliver customized artificial intelligence solutions tailored to the unique challenges 
            and opportunities of your specific industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry) => (
            <a
              key={industry.id}
              href={`/industries/${industry.id}`}
              className="group block"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                {/* Industry Icon */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${industry.color} w-fit shadow-lg`}>
                  <div className="text-white">{industry.icon}</div>
                </div>
                
                {/* Industry Title */}
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {industry.title}
                </h2>
                
                {/* Industry Description */}
                <p className="text-gray-400 mb-6">
                  {industry.description}
                </p>
                
                {/* Solutions List */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">KEY SOLUTIONS</h3>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, idx) => (
                      <li key={idx} className="text-gray-300 text-sm">
                        • {solution}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* View More Link */}
                <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-cyan-500/30 transition-colors">
                  <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    Explore Industry Solutions →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300">Industry Partners</div>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">100+</div>
            <div className="text-gray-300">Successful Projects</div>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Coverage</div>
          </div>
          <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700/50 text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">99.5%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Custom Solutions for Your Industry?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team of industry experts can develop tailored AI solutions to address your specific business challenges.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </main>
  );
}

export default Industries;