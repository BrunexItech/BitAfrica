// frontend/src/components/DashboardHeader.jsx
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Bell, 
  Search, 
  Moon, 
  Sun, 
  LogOut, 
  User 
} from 'lucide-react';
import authService from '../services/authService';

const DashboardHeader = ({ 
  darkMode, 
  setDarkMode, 
  searchQuery, 
  setSearchQuery,
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState({
    name: 'Sharif',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sharif'
  });

  // Get current user from localStorage on component mount
  useEffect(() => {
    const userData = authService.getCurrentUser();
    if (userData) {
      setCurrentUser(userData);
      // Update the mock user with real name if available
      if (userData.fullName || userData.name) {
        setUser(prev => ({
          ...prev,
          name: userData.fullName || userData.name || 'User'
        }));
      }
    }
  }, []);

  // Get user display name
  const getUserDisplayName = () => {
    if (!currentUser) return user.name;
    
    // Try different possible name properties
    const name = currentUser.fullName || currentUser.name || currentUser.username || currentUser.email || user.name;
    
    // Return full name
    return name;
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await authService.logout();
      console.log('Logout successful');
    } catch (error) {
      console.log('Logout API failed, clearing local storage anyway:', error.message);
      // Even if API fails, we still clear local storage
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    } finally {
      // Force storage event to trigger updates in other components
      window.dispatchEvent(new Event('storage'));
      
      // Redirect to home page
      window.location.href = '/';
      window.location.reload(); // Force refresh to update all components
    }
  };

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Menu size={24} />
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                <div className="text-white font-bold">DL</div>
              </div>
              <span className="font-bold text-xl">DevLearn</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-4 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search topics, modules, or quizzes..."
                className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Right section - with user info and logout */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 relative"
              aria-label="Notifications"
            >
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {/* User section with welcome message and logout */}
            <div className="flex items-center space-x-2 pl-2 border-l dark:border-gray-700">
              {/* Welcome message - instead of profile image */}
              <div className="flex items-center px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 border border-blue-100 dark:border-gray-600">
                <User size={16} className="mr-2 text-blue-600 dark:text-blue-400" />
                <span className="font-medium text-sm text-gray-700 dark:text-gray-300">
                  Welcome, {getUserDisplayName()}
                </span>
              </div>
              
              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex items-center p-2 rounded-lg bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 hover:bg-gradient-to-r hover:from-red-100 hover:to-pink-100 dark:hover:from-red-800/30 dark:hover:to-pink-800/30 hover:scale-105 transition-all duration-200 group"
                aria-label="Logout"
              >
                <LogOut size={18} className="text-red-600 dark:text-red-400 group-hover:text-red-700 dark:group-hover:text-red-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile search */}
        <div className="mt-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search topics..."
              className={`w-full pl-10 pr-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;