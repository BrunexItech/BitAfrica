import React, { useState } from "react";
import { 
  Bot, Zap, Brain, Sparkles, 
  Shield, Globe, TrendingUp, Clock,
  Search, Rocket, RefreshCw, Cpu
} from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const automationFeatures = [
    {
      id: 1,
      title: "AI Autonomous Agents",
      description: "Intelligent agents that work independently 24/7, learning from interactions and optimizing workflows automatically.",
      icon: <Bot className="w-6 h-6 md:w-8 md:h-8" />,
      color: "#6366F1",
      stats: "Self-learning, 99.8% accuracy",
      benefits: ["24/7 operation", "Zero supervision", "Continuous optimization"]
    },
    {
      id: 2,
      title: "Smart Process Automation",
      description: "Automate complex business processes with AI that understands context and makes intelligent decisions.",
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      color: "#10B981",
      stats: "85% faster workflows",
      benefits: ["End-to-end automation", "Context aware", "Real-time decisions"]
    }
  ];

  const performanceStats = [
    { value: "500K+", label: "Daily Automated Tasks", icon: <Clock className="w-4 h-4 md:w-5 md:h-5" />, color: "#6366F1" },
    { value: "99.8%", label: "Automation Accuracy", icon: <Shield className="w-4 h-4 md:w-5 md:h-5" />, color: "#10B981" },
    { value: "24/7", label: "Operational Uptime", icon: <Globe className="w-4 h-4 md:w-5 md:h-5" />, color: "#F59E0B" },
    { value: "85%", label: "Process Efficiency Gain", icon: <TrendingUp className="w-4 h-4 md:w-5 md:h-5" />, color: "#8B5CF6" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Process Analysis",
      description: "AI analyzes workflows to identify automation opportunities",
      icon: <Search className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      step: "02",
      title: "Agent Deployment",
      description: "Specialized AI agents are deployed to handle specific tasks",
      icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      step: "03",
      title: "Continuous Learning",
      description: "Agents learn from each interaction to improve performance",
      icon: <RefreshCw className="w-5 h-5 md:w-6 md:h-6" />
    },
    {
      step: "04",
      title: "Autonomous Operation",
      description: "Agents work independently, reporting insights and results",
      icon: <Cpu className="w-5 h-5 md:w-6 md:h-6" />
    }
  ];

  return (
    <div className="w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-purple-50">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle gradient circles */}
        <div className="absolute top-20 left-4 sm:left-10 w-40 h-40 sm:w-64 sm:h-64 bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 right-4 sm:right-10 w-40 h-40 sm:w-64 sm:h-64 bg-purple-100 rounded-full blur-3xl opacity-40" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(to right, #6366F1 1px, transparent 1px),
                          linear-gradient(to bottom, #6366F1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-14"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4 sm:mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-bold tracking-wider">
              INTELLIGENT AUTOMATION
            </span>
          </motion.div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            <span className="block">AI Agents That</span>
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Work For You 24/7
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-2">
            Deploy intelligent automation agents that learn, adapt, and execute tasks autonomously, 
            transforming how your business operates.
          </p>
        </motion.div>

        {/* Performance Stats - Circular Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12"
        >
          {performanceStats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="p-2 sm:p-3 rounded-full mb-2 sm:mb-3 md:mb-4"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                {stat.icon}
              </div>
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center">{stat.value}</div>
              <div className="text-xs text-gray-600 text-center mt-1 sm:mt-2 px-1 sm:px-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid - Now with 2 cards balanced */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8 lg:gap-12 mb-12 sm:mb-14 md:mb-16">
          {automationFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredCard(feature.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="bg-white rounded-3xl md:rounded-full aspect-square md:aspect-square flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 shadow-xl border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative group w-full md:w-1/2 max-w-md mx-auto md:max-w-none"
            >
              {/* Circular gradient border on hover */}
              <div 
                className="absolute -inset-1 rounded-3xl md:rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(45deg, ${feature.color}20, ${feature.color}05)`
                }}
              />
              
              <div className="relative z-10 text-center px-2 sm:px-4">
                {/* Icon */}
                <div 
                  className="p-3 sm:p-4 md:p-5 rounded-full w-fit mx-auto mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    color: feature.color
                  }}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 md:mb-8">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-block px-4 py-2 rounded-full text-sm sm:text-base font-medium mb-4 sm:mb-6 md:mb-8"
                  style={{ 
                    backgroundColor: `${feature.color}15`,
                    color: feature.color,
                    border: `1px solid ${feature.color}30`
                  }}
                >
                  {feature.stats}
                </div>

                {/* Benefits List */}
                <div className="space-y-2 sm:space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base justify-center">
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: feature.color }}
                      />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-14 md:mb-16"
        >
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              How AI Automation Works
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              Our intelligent agents follow a four-step process to deliver seamless automation
            </p>
          </div>

          {/* Process Steps - Circular Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full aspect-square p-4 sm:p-5 md:p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex flex-col items-center justify-center h-full text-center px-1 sm:px-2">
                  {/* Step Number */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="p-2 sm:p-3 rounded-full bg-white/20 mb-3 sm:mb-4">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3">{step.title}</h4>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm md:text-base text-blue-100 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final Stats Section - Circular Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg border border-gray-100"
        >
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
              Proven Results
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Join thousands of businesses already benefiting from AI automation
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { value: "5,000+", label: "Businesses Automated", color: "#6366F1" },
              { value: "98%", label: "Customer Satisfaction", color: "#10B981" },
              { value: "10M+", label: "Daily AI Decisions", color: "#F59E0B" },
              { value: "3.2x", label: "Average ROI", color: "#8B5CF6" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex flex-col items-center justify-center mx-auto mb-3 sm:mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${stat.color}15, white)`,
                    border: `2px solid ${stat.color}30`
                  }}
                >
                  <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">{stat.value}</div>
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;