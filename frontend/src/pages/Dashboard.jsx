import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Brain, Cpu, Database, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <div className="h-20 w-20 mx-auto bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center border border-blue-500/30">
            <Shield className="h-10 w-10 text-blue-400" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent mb-4">
          Dashboard Coming Soon
        </h1>
        
        <p className="text-gray-400 mb-8">
          Our AI-powered dashboard is currently being enhanced with new features. 
          You'll soon have access to advanced analytics, monitoring, and management tools.
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          {[
            { icon: <Brain className="h-5 w-5" />, label: 'AI Analytics', color: 'from-blue-500/10 to-cyan-500/10' },
            { icon: <Cpu className="h-5 w-5" />, label: 'Automation', color: 'from-purple-500/10 to-blue-500/10' },
            { icon: <Database className="h-5 w-5" />, label: 'Data Insights', color: 'from-cyan-500/10 to-teal-500/10' },
            { icon: <Settings className="h-5 w-5" />, label: 'Settings', color: 'from-indigo-500/10 to-purple-500/10' }
          ].map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-xl bg-gradient-to-r ${item.color} border border-white/10`}
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="text-blue-300">{item.icon}</div>
                <span className="text-sm font-medium text-white">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300"
          >
            Return Home
          </Link>
          
          <Link
            to="/login"
            className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Switch Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;