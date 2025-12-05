import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <div className="h-24 w-24 mx-auto bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center border-4 border-red-500/30">
            <AlertCircle className="h-12 w-12 text-red-400" />
          </div>
        </div>
        
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
        
        <p className="text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Don't worry, even our AI can't find it!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-gray-700 text-gray-300 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;