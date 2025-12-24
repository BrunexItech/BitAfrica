import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, Zap, Globe, Users, Rocket, Brain,
  ArrowRight, Code, GraduationCap, X
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6 md:px-8 select-none">
      
      {/* Background grid pattern */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                          linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

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
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-md bg-gray-800 rounded-xl p-6 border border-gray-700 select-text"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowSignupPopup(false)}
              className="absolute top-4 right-4 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 cursor-pointer"
            >
              <X className="h-4 w-4 text-gray-300" />
            </button>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                Join Our Engineering Team
              </h3>
              
              <p className="text-gray-300 text-sm mb-6">
                Sign up to join our team of developers, AI specialists, and educators.
              </p>
              
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => setShowSignupPopup(false)}
                  className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 text-white text-sm cursor-pointer"
                >
                  Close
                </button>
                <Link to="/signup">
                  <button
                    onClick={() => setShowSignupPopup(false)}
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm cursor-pointer"
                  >
                    Sign Up Now
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <div className="relative max-w-4xl mx-auto select-none">
        {/* Header */}
        <div className="text-center mb-16 select-none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 select-none">
            <Zap className="h-3 w-3 text-cyan-400" />
            <span className="text-xs font-medium text-cyan-400 select-none">
              INNOVATION • AI • EDUCATION
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 select-none">
            Transforming Africa's Digital Future
          </h1>

          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto select-none">
            Bridging the digital divide through cutting-edge technology solutions and education.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16 select-none">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-lg select-none">
            <div className="flex items-center gap-4 mb-8 select-none">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-600 select-none">
                <Target className="h-5 w-5 text-white select-none" />
              </div>
              <h2 className="text-2xl font-bold text-white select-none">Our Mission</h2>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed select-none">
              To empower African businesses and individuals with world-class software development, 
              artificial intelligence solutions, and accessible tech education that drives sustainable 
              growth and innovation across the continent.
            </p>
            
            <div className="space-y-4 select-none">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 select-none">
                <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 flex-shrink-0 select-none">
                  <Code className="h-5 w-5 text-blue-400 select-none" />
                </div>
                <div className="select-none">
                  <h3 className="font-semibold text-gray-100 text-lg mb-1 select-none">Software Development</h3>
                  <p className="text-gray-400 select-none">Enterprise-grade applications and digital solutions built with modern technologies.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 select-none">
                <div className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 flex-shrink-0 select-none">
                  <Brain className="h-5 w-5 text-purple-400 select-none" />
                </div>
                <div className="select-none">
                  <h3 className="font-semibold text-gray-100 text-lg mb-1 select-none">AI & Machine Learning</h3>
                  <p className="text-gray-400 select-none">Intelligent systems and automation solutions powered by cutting-edge AI research.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 select-none">
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex-shrink-0 select-none">
                  <GraduationCap className="h-5 w-5 text-emerald-400 select-none" />
                </div>
                <div className="select-none">
                  <h3 className="font-semibold text-gray-100 text-lg mb-1 select-none">Tech Education</h3>
                  <p className="text-gray-400 select-none">Comprehensive skills development and talent empowerment programs for the next generation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="mb-16 select-none">
          <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-700/50 shadow-lg select-none">
            <div className="flex items-center gap-4 mb-8 select-none">
              <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 select-none">
                <Globe className="h-5 w-5 text-white select-none" />
              </div>
              <h2 className="text-2xl font-bold text-white select-none">Our Vision</h2>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed select-none">
              To establish Africa as a global leader in technology innovation by creating an ecosystem 
              where cutting-edge software, intelligent AI systems, and quality tech education work 
              together to solve local challenges with global impact.
            </p>
            
            <div className="space-y-6 select-none">
              <div className="p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 select-none">
                <div className="text-3xl font-bold text-cyan-400 mb-2 select-none">50+</div>
                <h3 className="font-semibold text-white text-xl mb-2 select-none">Enterprise Partners</h3>
                <p className="text-gray-400 text-base select-none">
                  Leading businesses across Africa are scaling with our AI infrastructure and innovative software solutions, driving digital transformation across industries.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 select-none">
                <div className="text-3xl font-bold text-purple-400 mb-2 select-none">1000+</div>
                <h3 className="font-semibold text-white text-xl mb-2 select-none">Trained Developers</h3>
                <p className="text-gray-400 text-base select-none">
                  Through our comprehensive education programs, we're empowering the next generation of African tech talent with practical skills and industry-relevant knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Build With Africa's AI Leader Section */}
        <div className="select-none">
          <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-xl p-8 md:p-10 border border-cyan-500/30 shadow-xl select-none">
            <div className="text-center mb-8 select-none">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 select-none">
                Build With Africa's AI Leader
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-6 select-none">
                Partner with 50+ enterprises already scaling with our AI infrastructure and innovative solutions.
              </p>
            </div>

            <div className="text-center">
              <button
                onClick={() => setShowSignupPopup(true)}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg hover:opacity-90 transition-all hover:scale-[1.02] cursor-pointer select-none"
              >
                <span className="select-none">Join Our Engineering Team</span>
                <ArrowRight className="h-5 w-5 select-none" />
              </button>
              
              <p className="text-gray-400 text-sm mt-6 select-none">
                Software Development • AI Solutions • Tech Education • Digital Innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;