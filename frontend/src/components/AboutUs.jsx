import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import { 
  MapPin, Target, Zap, Globe, Users, Award,
  TrendingUp, Shield, Heart, Sparkles, ArrowRight,
  Cpu, Cloud, Database, Rocket, Brain, UserPlus, X
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  const values = [
    {
      icon: <Target className="h-5 w-5" />,
      title: "Innovation-First AI",
      description: "Proprietary neural networks optimized for African markets",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Zero-Trust Security",
      description: "End-to-end encrypted AI pipelines with audit trails",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Community-Led Growth",
      description: "100+ local developers in our open-source ecosystem",
      color: "from-orange-500 to-amber-600"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Global AI Standards",
      description: "Compliant with ISO/IEC 23053 framework",
      color: "from-emerald-500 to-green-600"
    }
  ];

  const teamStats = [
    { value: "50+", label: "AI Experts", icon: <Brain className="h-4 w-4" /> },
    { value: "10+", label: "Countries", icon: <MapPin className="h-4 w-4" /> },
    { value: "100+", label: "Projects", icon: <Rocket className="h-4 w-4" /> },
    { value: "24/7", label: "Support", icon: <Zap className="h-4 w-4" /> }
  ];

  const techFocus = [
    { name: "Edge ML", icon: <Cpu className="h-4 w-4" />, color: "bg-gradient-to-br from-cyan-500 to-blue-600" },
    { name: "Cloud AI", icon: <Cloud className="h-4 w-4" />, color: "bg-gradient-to-br from-violet-500 to-purple-600" },
    { name: "Vector DB", icon: <Database className="h-4 w-4" />, color: "bg-gradient-to-br from-emerald-500 to-green-600" },
    { name: "IoT AI", icon: <Globe className="h-4 w-4" />, color: "bg-gradient-to-br from-orange-500 to-amber-600" }
  ];

  const achievements = [
    { icon: <Award className="h-4 w-4" />, title: "AI Excellence Award", year: "2024", gradient: "from-amber-400 to-yellow-500" },
    { icon: <TrendingUp className="h-4 w-4" />, title: "180% Growth", year: "2023", gradient: "from-emerald-400 to-green-500" },
    { icon: <Shield className="h-4 w-4" />, title: "ISO 27001", year: "Certified", gradient: "from-blue-400 to-cyan-500" },
    { icon: <Users className="h-4 w-4" />, title: "Dev Community", year: "5K+", gradient: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      
      {/* Sign Up Popup Modal */}
      {showSignupPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowSignupPopup(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            className="relative w-full max-w-md bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 md:p-8 border border-gray-700/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignupPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/80 transition-colors duration-200"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <UserPlus className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                Join Our Engineering Team
              </h3>
              
              <p className="text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Sign Up to join our team
              </p>
              
              <p className="text-gray-300 text-sm mb-6">
                Please sign up with your email to join our elite engineering team and start collaborating on cutting-edge AI projects.
              </p>
              
              <div className="flex gap-3 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowSignupPopup(false)}
                  className="px-6 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-white font-medium text-sm transition-colors duration-200"
                >
                  Close
                </motion.button>
                <Link to="/signup">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowSignupPopup(false)} // Close popup when clicking sign up
                    className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm transition-all duration-200"
                  >
                    Sign Up Now
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Dynamic gradient orbs - Dark mode optimized */}
      <motion.div 
        className="absolute top-10 md:top-20 right-4 md:right-10 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-cyan-900/30 to-blue-800/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-16 md:-bottom-20 -left-16 md:-left-20 w-48 h-48 md:w-80 md:h-80 bg-gradient-to-r from-purple-900/25 to-pink-800/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                          linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 shadow-sm mb-4 md:mb-6"
          >
            <MapPin className="h-3 w-3 md:h-3.5 md:w-3.5 text-cyan-400" />
            <span className="text-xs font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              MADE IN AFRICA, FOR THE WORLD
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2"
          >
            <span className="text-gray-100">Pioneering Africa's</span>{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              AI Revolution
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4"
          >
            Building enterprise-grade AI infrastructure with African context and global scalability.
          </motion.p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/70 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-100">Our Genesis</h3>
              </div>

              <div className="space-y-2 md:space-y-3 text-gray-300 text-xs sm:text-sm">
                <p>
                  Founded in 2020 with a vision to bridge Africa's AI infrastructure gap. 
                  We're now Africa's leading AI innovation hub with 10+ regional hubs.
                </p>
                <p>
                  Our proprietary neural networks process 50TB+ of African language data daily, 
                  powering solutions across agriculture, fintech, and healthcare.
                </p>
              </div>

              {/* Achievements */}
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-gray-700/30">
                <h4 className="text-xs md:text-sm font-bold mb-3 md:mb-4 text-gray-100">Enterprise Milestones</h4>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {achievements.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ scale: 1.03 }}
                      className="group p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className={`p-1.5 md:p-2 rounded-lg ${item.gradient} bg-gradient-to-br`}>
                          {React.cloneElement(item.icon, { className: "h-3 w-3 md:h-4 md:w-4 text-white" })}
                        </div>
                        <div>
                          <div className="text-xs md:text-sm font-semibold text-gray-100">{item.title}</div>
                          <div className="text-xs text-gray-400">{item.year}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Team Stats */}
            <div className="grid grid-cols-2 gap-2 md:gap-3">
              {teamStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-gray-800/60 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 border border-gray-700/40 hover:border-gray-600/50 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-1 md:mb-2">
                    <div className="text-lg md:text-xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="p-1 md:p-1.5 rounded-lg bg-gradient-to-br from-blue-900/30 to-cyan-900/20 group-hover:scale-110 transition-transform duration-300">
                      {React.cloneElement(stat.icon, { className: "h-3 w-3 md:h-4 md:w-4 text-blue-400" })}
                    </div>
                  </div>
                  <div className="text-xs font-semibold text-gray-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/70 backdrop-blur-xl rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="p-2 md:p-2.5 rounded-lg md:rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg">
                  <Heart className="h-4 w-4 md:h-5 md:w-5 text-white" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-100">Our Mission</h3>
              </div>

              <p className="text-xs sm:text-sm text-gray-300 mb-4 md:mb-6 leading-relaxed">
                To democratize enterprise AI across Africa, providing scalable infrastructure 
                that processes African data with 99.9% accuracy and sub-100ms latency.
              </p>

              {/* Values */}
              <div className="space-y-2 md:space-y-3">
                {values.map((value, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-start gap-2 md:gap-3 p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r from-gray-800/40 via-gray-800/30 to-gray-800/20 border border-gray-700/40 hover:border-gray-600/50 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div 
                      className={`p-2 md:p-2.5 rounded-lg bg-gradient-to-br ${value.color} group-hover:scale-105 transition-transform duration-300`}
                    >
                      {React.cloneElement(value.icon, { className: "h-3 w-3 md:h-4 md:w-4 text-white" })}
                    </div>
                    <div>
                      <h4 className="text-xs md:text-sm font-bold text-gray-100 mb-0.5 md:mb-1">{value.title}</h4>
                      <p className="text-xs text-gray-400">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tech Focus */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-base md:text-lg font-bold mb-3 md:mb-4 text-gray-100">AI Stack</h3>
              <div className="grid grid-cols-2 gap-2 md:gap-3">
                {techFocus.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="group flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-md md:rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/40 hover:border-gray-600/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`p-1.5 md:p-2 rounded ${tech.color} group-hover:scale-105 transition-transform duration-300`}>
                      {React.cloneElement(tech.icon, { className: "h-3 w-3 md:h-4 md:w-4 text-white" })}
                    </div>
                    <span className="text-xs md:text-sm font-semibold text-gray-200">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3 md:mt-4 pt-2 md:pt-3 border-t border-gray-700/30">
                Scalable AI infrastructure processing 10M+ requests daily with 99.95% uptime.
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto px-2"
        >
          <div className="relative p-0.5 rounded-xl md:rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600">
            <div className="bg-gray-800/95 backdrop-blur-xl rounded-lg md:rounded-xl p-6 md:p-8 border border-gray-700/50">
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-100">
                Build With Africa's AI Leader
              </h3>
              <p className="text-gray-300 text-xs md:text-sm mb-4 md:mb-6">
                Partner with 50+ enterprises already scaling with our AI infrastructure.
              </p>
              <div className="flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowSignupPopup(true)}
                  className="group relative px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl md:rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800" />
                  <span className="relative z-10 flex items-center justify-center text-white font-semibold text-sm md:text-base">
                    Join Our Engineering Team
                    <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;