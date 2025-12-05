import React from "react";
import { Cpu, Sparkles, Shield, Globe, Zap, Layers } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Neural AI Processing",
    desc: "Real-time adaptive intelligence with deep learning pipelines for autonomous decision-making.",
    icon: <Cpu className="w-9 h-9" />,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    title: "Quantum Animations",
    desc: "Fluid motion physics at 120fps with GPU-accelerated rendering and zero latency.",
    icon: <Sparkles className="w-9 h-9" />,
    gradient: "from-violet-500 to-purple-600"
  },
  {
    title: "Zero-Trust Security",
    desc: "Blockchain-verified encryption with biometric authentication and threat prediction.",
    icon: <Shield className="w-9 h-9" />,
    gradient: "from-emerald-500 to-green-600"
  },
  {
    title: "Edge Network Scaling",
    desc: "Global CDN with edge computing nodes for sub-10ms response times worldwide.",
    icon: <Globe className="w-9 h-9" />,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    title: "Hyperspeed Compute",
    desc: "WebAssembly-optimized execution with parallel processing and memory pooling.",
    icon: <Zap className="w-9 h-9" />,
    gradient: "from-rose-500 to-pink-600"
  },
  {
    title: "Microservices Mesh",
    desc: "Kubernetes-native architecture with auto-scaling and service discovery.",
    icon: <Layers className="w-9 h-9" />,
    gradient: "from-indigo-500 to-blue-700"
  },
];

const Features = () => {
  return (
    <div className="w-full py-20 px-6 md:px-12 relative overflow-hidden bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #374151 1px, transparent 1px),
                          linear-gradient(-45deg, #374151 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Animated gradient orbs - Cool gray tones */}
      <motion.div 
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl"
        animate={{ 
          x: [0, -20, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-4"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100 text-sm font-medium tracking-wide shadow-lg">
            ENTERPRISE-GRADE
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-800 bg-clip-text text-transparent tracking-tight"
        >
          Next-Gen Tech Stack
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg"
        >
          Engineered with cutting-edge protocols and quantum-ready infrastructure
        </motion.p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              ease: "easeOut"
            }}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="group p-6 bg-white rounded-2xl border border-gray-300 hover:border-gray-400 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <motion.div 
              className={`mb-5 p-3 rounded-xl bg-gradient-to-r ${item.gradient} w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-500`}
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-white">{item.icon}</div>
            </motion.div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
              {item.title}
            </h3>

            <p className="text-gray-800 leading-relaxed text-[15px]">
              {item.desc}
            </p>

            {/* Subtle gradient underline */}
            <div className={`mt-5 h-0.5 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-700 ease-out`}></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Features;