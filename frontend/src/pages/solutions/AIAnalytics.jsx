import React from 'react';
import { Brain, BarChart3, TrendingUp, Shield, Zap, ChevronRight } from 'lucide-react';

const AIAnalytics = () => {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Brain className="h-10 w-10 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
            AI Analytics
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Predictive insights and intelligent analytics powered by advanced machine learning algorithms
          </p>
        </div>
        
        {/* Coming Soon Message */}
        <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-blue-500/30 rounded-2xl p-12 text-center">
          <BarChart3 className="h-16 w-16 text-blue-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">Detailed Page Coming Soon</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            We're currently developing comprehensive documentation, case studies, 
            and implementation guides for our AI Analytics solution. This page will 
            include detailed specifications, pricing, and integration options.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { icon: <TrendingUp className="h-6 w-6" />, title: 'Predictive Models', desc: 'Advanced forecasting algorithms' },
              { icon: <Shield className="h-6 w-6" />, title: 'Data Security', desc: 'Enterprise-grade protection' },
              { icon: <Zap className="h-6 w-6" />, title: 'Real-time Insights', desc: 'Instant analytics dashboard' }
            ].map((feature, index) => (
              <div key={index} className="p-6 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="text-blue-400 mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <a 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 group"
          >
            Contact Sales for Details
            <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AIAnalytics;