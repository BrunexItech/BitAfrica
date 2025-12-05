import React from 'react';
import { Wrench, Clock, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="h-24 w-24 mx-auto bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center border-4 border-yellow-500/30 mb-6">
          <Wrench className="h-12 w-12 text-yellow-400" />
        </div>
        
        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent mb-4">
          System Maintenance
        </h1>
        
        <div className="flex items-center justify-center text-yellow-400 mb-4">
          <Clock className="h-5 w-5 mr-2" />
          <p>We're performing scheduled maintenance</p>
        </div>
        
        <p className="text-gray-400 mb-8">
          Our platform is currently undergoing updates to improve your experience. 
          We'll be back online shortly. Thank you for your patience.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;