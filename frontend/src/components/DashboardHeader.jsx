// frontend/src/components/DashboardHeader.jsx
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Moon, 
  Sun, 
  LogOut, 
  User,
  X,
  ChevronRight
} from 'lucide-react';
import authService from '../services/authService';

const DashboardHeader = ({ 
  darkMode, 
  setDarkMode, 
  mobileMenuOpen,
  setMobileMenuOpen
}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [mobileUserMenuOpen, setMobileUserMenuOpen] = useState(false);

  // Get current user from localStorage on component mount
  useEffect(() => {
    const userData = authService.getCurrentUser();
    if (userData) {
      setCurrentUser(userData);
    }
  }, []);

  // Close mobile user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileUserMenuOpen && !event.target.closest('.mobile-user-menu')) {
        setMobileUserMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileUserMenuOpen]);

  // Get user's first name only
  const getUserFirstName = () => {
    if (!currentUser) return 'Learner';
    
    // Try to get first name in order of preference
    if (currentUser.first_name && currentUser.first_name.trim()) {
      return currentUser.first_name;
    }
    
    // If no first_name, extract from fullName
    if (currentUser.fullName && currentUser.fullName.trim()) {
      return currentUser.fullName.split(' ')[0];
    }
    
    // If no name properties, extract from email
    if (currentUser.email) {
      return currentUser.email.split('@')[0];
    }
    
    return 'Learner';
  };

  // Get user full name for tooltips
  const getUserFullName = () => {
    if (!currentUser) return 'Guest User';
    
    if (currentUser.first_name && currentUser.last_name) {
      return `${currentUser.first_name} ${currentUser.last_name}`;
    }
    if (currentUser.fullName) {
      return currentUser.fullName;
    }
    return currentUser.email || 'User';
  };

  // Get user initials for avatar
  const getUserInitials = () => {
    const name = getUserFullName();
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.log('Logout API failed, clearing local storage:', error.message);
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      localStorage.removeItem('user');
    } finally {
      window.dispatchEvent(new Event('storage'));
      window.location.href = '/';
    }
  };

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} shadow-sm select-none`} style={{ userSelect: 'none' }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left section - Logo only */}
          <div className="flex items-center space-x-2 select-none" style={{ userSelect: 'none' }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center select-none" style={{ userSelect: 'none' }}>
              <div className="text-white font-bold text-sm select-none" style={{ userSelect: 'none' }}>DL</div>
            </div>
            <span className={`font-bold text-xl select-none ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ userSelect: 'none' }}>DevLearn</span>
          </div>

          {/* Right section - Desktop controls */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors hidden md:block select-none ${darkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100 text-gray-700'}`}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              style={{ userSelect: 'none' }}
            >
              {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
            </button>

            {/* Desktop User section */}
            <div className="hidden md:flex items-center space-x-3 select-none" style={{ userSelect: 'none' }}>
              {/* Welcome message with first name only */}
              <div 
                className={`flex items-center px-4 py-2 rounded-lg border select-none ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100'}`}
                style={{ userSelect: 'none' }}
                title={`Welcome back, ${getUserFullName()}`}
              >
                <User size={18} className={`mr-3 flex-shrink-0 select-none ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} style={{ userSelect: 'none' }} />
                <div className="select-none" style={{ userSelect: 'none' }}>
                  <div className={`text-xs select-none ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} style={{ userSelect: 'none' }}>Welcome back</div>
                  <div className={`font-semibold truncate max-w-[150px] select-none ${darkMode ? 'text-gray-200' : 'text-gray-800'}`} style={{ userSelect: 'none' }}>
                    {getUserFirstName()}
                  </div>
                </div>
              </div>
              
              {/* Desktop Logout button */}
              <button
                onClick={handleLogout}
                className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 group select-none ${darkMode ? 'bg-red-900/20 border-red-700 hover:bg-red-800/30' : 'bg-gradient-to-r from-red-50 to-pink-50 border-red-200 hover:from-red-100 hover:to-pink-100'}`}
                aria-label="Logout"
                style={{ userSelect: 'none' }}
              >
                <LogOut size={18} className={`mr-2 group-hover:text-red-700 dark:group-hover:text-red-300 select-none ${darkMode ? 'text-red-400' : 'text-red-600'}`} style={{ userSelect: 'none' }} />
                <span className={`font-medium hidden lg:inline select-none ${darkMode ? 'text-red-300' : 'text-red-700'}`} style={{ userSelect: 'none' }}>Logout</span>
              </button>
            </div>

            {/* Mobile controls - Right side */}
            <div className="flex items-center space-x-2 md:hidden select-none" style={{ userSelect: 'none' }}>
              {/* Dark mode toggle - Mobile */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors select-none ${darkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100 text-gray-700'}`}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                style={{ userSelect: 'none' }}
              >
                {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
              </button>

              {/* Mobile user menu toggle - Hamburger on right */}
              <div className="mobile-user-menu relative select-none" style={{ userSelect: 'none' }}>
                <button
                  onClick={() => setMobileUserMenuOpen(!mobileUserMenuOpen)}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-colors select-none ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                  aria-label="User menu"
                  style={{ userSelect: 'none' }}
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium text-sm select-none" style={{ userSelect: 'none' }}>
                    {getUserInitials()}
                  </div>
                  <Menu size={20} className={`transition-transform ${mobileUserMenuOpen ? 'rotate-90' : ''} select-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ userSelect: 'none' }} />
                </button>

                {/* Mobile user dropdown */}
                {mobileUserMenuOpen && (
                  <div className={`absolute right-0 mt-2 w-64 rounded-lg shadow-lg border py-2 z-50 select-none ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`} style={{ userSelect: 'none' }}>
                    {/* User info */}
                    <div className={`px-4 py-3 border-b select-none ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} style={{ userSelect: 'none' }}>
                      <div className="flex items-center space-x-3 select-none" style={{ userSelect: 'none' }}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium select-none" style={{ userSelect: 'none' }}>
                          {getUserInitials()}
                        </div>
                        <div className="flex-1 min-w-0 select-none" style={{ userSelect: 'none' }}>
                          <div className={`font-semibold truncate select-none ${darkMode ? 'text-white' : 'text-gray-900'}`} style={{ userSelect: 'none' }}>
                            {getUserFullName()}
                          </div>
                          <div className={`text-sm truncate select-none ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} style={{ userSelect: 'none' }}>
                            {currentUser?.email || 'No email'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* User menu items */}
                    <div className="py-2 select-none" style={{ userSelect: 'none' }}>
                      <div className={`px-4 py-3 text-sm select-none ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} style={{ userSelect: 'none' }}>
                        <div className="flex items-center justify-between select-none" style={{ userSelect: 'none' }}>
                          <span className="select-none" style={{ userSelect: 'none' }}>Account Status</span>
                          <span className={`px-2 py-1 text-xs rounded-full select-none ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`} style={{ userSelect: 'none' }}>
                            Active
                          </span>
                        </div>
                      </div>

                      <div className={`border-t mt-2 pt-2 select-none ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} style={{ userSelect: 'none' }}>
                        <button
                          onClick={handleLogout}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors select-none ${darkMode ? 'text-red-400 hover:bg-red-900/20' : 'text-red-600 hover:bg-red-50'}`}
                          style={{ userSelect: 'none' }}
                        >
                          <div className="flex items-center select-none" style={{ userSelect: 'none' }}>
                            <LogOut size={18} className="mr-3 select-none" style={{ userSelect: 'none' }} />
                            <span className="font-medium select-none" style={{ userSelect: 'none' }}>Logout</span>
                          </div>
                          <ChevronRight size={16} className="select-none" style={{ userSelect: 'none' }} />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* REMOVED: Mobile welcome bar with user info */}
      </div>
    </header>
  );
};

export default DashboardHeader;