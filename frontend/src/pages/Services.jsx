import React from 'react';
import { Brain, Cloud, Cpu, Layers, Shield, Zap, Globe, Users, Server, Database } from 'lucide-react';

function Services() {
  const services = [
    {
      id: "ai-consulting",
      title: "AI Consulting",
      description: "Strategic AI implementation guidance and roadmap development for enterprises seeking digital transformation through artificial intelligence.",
      features: [
        "AI Strategy Development",
        "Technology Assessment",
        "Implementation Roadmap",
        "ROI Analysis & Forecasting",
        "Team Training & Upskilling"
      ],
      icon: <Brain className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "cloud-migration",
      title: "Cloud Migration",
      description: "Seamless transition to cloud infrastructure with minimal disruption, enhanced security, and optimized performance for your business applications.",
      features: [
        "Cloud Architecture Design",
        "Data Migration Planning",
        "Security & Compliance",
        "Performance Optimization",
        "Cost Management"
      ],
      icon: <Cloud className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "digital-transformation",
      title: "Digital Transformation",
      description: "Comprehensive digital overhaul of your business processes, leveraging cutting-edge technologies to enhance efficiency and customer experience.",
      features: [
        "Process Automation",
        "Digital Workflow Design",
        "Customer Experience Enhancement",
        "Data-Driven Decision Making",
        "Legacy System Modernization"
      ],
      icon: <Cpu className="h-8 w-8" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      id: "tech-infrastructure",
      title: "Tech Infrastructure",
      description: "Robust, scalable, and secure technology infrastructure setup and management to support your business growth and digital initiatives.",
      features: [
        "Network Architecture",
        "Server & Storage Solutions",
        "Security Infrastructure",
        "Disaster Recovery",
        "Scalability Planning"
      ],
      icon: <Server className="h-8 w-8" />,
      color: "from-emerald-500 to-green-500"
    },
    {
      id: "support-maintenance",
      title: "Support & Maintenance",
      description: "24/7 technical support and proactive maintenance services to ensure optimal performance and reliability of your technology systems.",
      features: [
        "24/7 Monitoring",
        "Proactive Maintenance",
        "Incident Response",
        "Performance Tuning",
        "Regular Updates & Patches"
      ],
      icon: <Shield className="h-8 w-8" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 mb-6">
            <Layers className="h-5 w-5 text-cyan-400" />
            <span className="text-sm font-bold text-cyan-400">OUR SERVICES</span>
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Comprehensive <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">IT Solutions</span>
          </h1>
          
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We provide end-to-end technology services that drive innovation, enhance efficiency, 
            and propel your business forward in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <a
              key={service.id}
              href={`/services/${service.id}`}
              className="group block"
            >
              <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                {/* Service Icon */}
                <div className={`mb-6 p-4 rounded-xl bg-gradient-to-r ${service.color} w-fit shadow-lg`}>
                  <div className="text-white">{service.icon}</div>
                </div>
                
                {/* Service Title */}
                <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h2>
                
                {/* Service Description */}
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500 mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* View More Link */}
                <div className="mt-8 pt-6 border-t border-gray-700/50 group-hover:border-cyan-500/30 transition-colors">
                  <span className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    Learn more →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our team to discuss how our services can help achieve your business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </main>
  );
}

export default Services;