import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash, 
  FaCheck, 
  FaGlobe,
  FaShieldAlt,
  FaSignInAlt,
  FaArrowRight,
  FaGraduationCap,
  FaBookOpen
} from 'react-icons/fa';
import authService from '../services/authService';

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    currency: 'USD',
    acceptTerms: false,
    marketingEmails: true
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Currencies including crypto options
  const currencies = [
    { value: 'USD', label: 'US Dollar (USD)', symbol: '$' },
    { value: 'EUR', label: 'Euro (EUR)', symbol: '€' },
    { value: 'GBP', label: 'British Pound (GBP)', symbol: '£' },
    { value: 'BTC', label: 'Bitcoin (BTC)', symbol: '₿' },
    { value: 'ETH', label: 'Ethereum (ETH)', symbol: 'Ξ' },
    { value: 'NGN', label: 'Nigerian Naira (NGN)', symbol: '₦' },
    { value: 'KES', label: 'Kenyan Shilling (KES)', symbol: 'KSh' },
    { value: 'ZAR', label: 'South African Rand (ZAR)', symbol: 'R' },
  ];

  // Password strength calculator
  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    return strength;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (name === 'password') {
      setPasswordStrength(calculatePasswordStrength(value));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 2) {
      newErrors.password = 'Password is too weak';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the terms and conditions';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      try {
        const userData = {
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          currency: formData.currency,
          marketingEmails: formData.marketingEmails,
          acceptTerms: formData.acceptTerms
        };
        
        const response = await authService.register(userData);
        authService.storeTokens(response);
        
        navigate('/signin', { 
          state: { 
            message: 'Registration successful! Please log in.',
            success: true
          }
        });
        
      } catch (error) {
        console.error('Registration error:', error);
        
        if (error.response?.data) {
          const backendErrors = error.response.data;
          setErrors({
            submit: 'Registration failed. Please check your details.',
            ...backendErrors
          });
        } else {
          setErrors({ submit: 'Registration failed. Please try again.' });
        }
      } finally {
        setIsLoading(false);
      }
    }
  };

  const getStrengthColor = (strength) => {
    switch(strength) {
      case 1: return 'bg-red-500';
      case 2: return 'bg-orange-500';
      case 3: return 'bg-yellow-500';
      case 4: return 'bg-green-500';
      default: return 'bg-gray-700';
    }
  };

  const getStrengthText = (strength) => {
    switch(strength) {
      case 1: return 'Very Weak';
      case 2: return 'Weak';
      case 3: return 'Good';
      case 4: return 'Strong';
      default: return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Logo/Brand */}
        <div className="text-center mb-8 select-none">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                BitAfrica AI
              </h1>
            </div>
          </Link>
          <p className="text-gray-400 mt-2">Start your tech learning journey</p>
        </div>

        {/* Sign Up Card */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 md:p-8 shadow-2xl">
          
          {/* PROMINENT LOGIN OPTION - STACKED VERTICALLY */}
          <div className="mb-8 p-5 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/30">
            {/* First Row: Text Content */}
            <div className="flex items-center space-x-3 mb-4 select-none">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <FaSignInAlt className="text-blue-400 text-lg" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Already enrolled?</h3>
                <p className="text-gray-300 text-sm">Access your courses & continue learning</p>
              </div>
            </div>
            
            {/* Second Row: Login Button */}
            <Link 
              to="/signin"
              className="group flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.03] shadow-lg shadow-blue-500/20 w-full cursor-pointer"
            >
              <FaSignInAlt className="mr-2 group-hover:scale-110 transition-transform" />
              Login to Account
              <FaArrowRight className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Sign Up Form Section */}
          <div className="mb-8 select-none">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center">
              <FaGraduationCap className="text-blue-400 mr-3" />
              Create New Account
            </h2>
            <p className="text-gray-400">Join thousands mastering tech skills</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 select-none">
                <div className="flex items-center space-x-2">
                  <FaUser className="text-blue-400" />
                  <span>Full Name</span>
                </div>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-700'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-400 select-none">{errors.fullName}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 select-none">
                <div className="flex items-center space-x-2">
                  <FaEnvelope className="text-blue-400" />
                  <span>Email Address</span>
                </div>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-gray-900/50 border ${
                  errors.email ? 'border-red-500' : 'border-gray-700'
                } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400 select-none">{errors.email}</p>
              )}
            </div>

            {/* Currency Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 select-none">
                <div className="flex items-center space-x-2">
                  <FaGlobe className="text-blue-400" />
                  <span>Preferred Currency</span>
                </div>
              </label>
              <select
                name="currency"
                value={formData.currency}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none cursor-pointer"
              >
                {currencies.map(currency => (
                  <option key={currency.value} value={currency.value} className="bg-gray-800">
                    {currency.label}
                  </option>
                ))}
              </select>
              <p className="mt-2 text-sm text-gray-400 select-none">
                This will be your default currency for payments
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 select-none">
                <div className="flex items-center space-x-2">
                  <FaLock className="text-blue-400" />
                  <span>Password</span>
                </div>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pr-12 bg-gray-900/50 border ${
                    errors.password ? 'border-red-500' : 'border-gray-700'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              
              {/* Password Strength Indicator */}
              {formData.password && (
                <div className="mt-3 select-none">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">Password strength:</span>
                    <span className={`font-medium ${
                      passwordStrength === 1 ? 'text-red-400' :
                      passwordStrength === 2 ? 'text-orange-400' :
                      passwordStrength === 3 ? 'text-yellow-400' :
                      passwordStrength === 4 ? 'text-green-400' : 'text-gray-400'
                    }`}>
                      {getStrengthText(passwordStrength)}
                    </span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${getStrengthColor(passwordStrength)} transition-all duration-300`}
                      style={{ width: `${(passwordStrength / 4) * 100}%` }}
                    ></div>
                  </div>
                  <ul className="mt-2 text-xs text-gray-400 space-y-1">
                    <li className={`flex items-center ${formData.password.length >= 8 ? 'text-green-400' : ''}`}>
                      <FaCheck className={`mr-2 ${formData.password.length >= 8 ? 'text-green-400' : 'text-gray-600'}`} />
                      At least 8 characters
                    </li>
                    <li className={`flex items-center ${/[A-Z]/.test(formData.password) ? 'text-green-400' : ''}`}>
                      <FaCheck className={`mr-2 ${/[A-Z]/.test(formData.password) ? 'text-green-400' : 'text-gray-600'}`} />
                      One uppercase letter
                    </li>
                    <li className={`flex items-center ${/[0-9]/.test(formData.password) ? 'text-green-400' : ''}`}>
                      <FaCheck className={`mr-2 ${/[0-9]/.test(formData.password) ? 'text-green-400' : 'text-gray-600'}`} />
                      One number
                    </li>
                    <li className={`flex items-center ${/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-400' : ''}`}>
                      <FaCheck className={`mr-2 ${/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-400' : 'text-gray-600'}`} />
                      One special character
                    </li>
                  </ul>
                </div>
              )}
              {errors.password && (
                <p className="mt-1 text-sm text-red-400 select-none">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2 select-none">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 pr-12 bg-gray-900/50 border ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-700'
                  } rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-text`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-400 select-none">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms and Marketing */}
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="acceptTerms"
                  id="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-5 w-5 text-blue-500 bg-gray-900 border-gray-700 rounded focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
                />
                <label htmlFor="acceptTerms" className="text-sm text-gray-300 select-none cursor-pointer">
                  I agree to the{' '}
                  <Link to="/terms" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              {errors.acceptTerms && (
                <p className="text-sm text-red-400 select-none">{errors.acceptTerms}</p>
              )}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  name="marketingEmails"
                  id="marketingEmails"
                  checked={formData.marketingEmails}
                  onChange={handleChange}
                  className="mt-1 mr-3 h-5 w-5 text-blue-500 bg-gray-900 border-gray-700 rounded focus:ring-blue-500 focus:ring-offset-gray-900 cursor-pointer"
                />
                <label htmlFor="marketingEmails" className="text-sm text-gray-300 select-none cursor-pointer">
                  Receive updates about new features, market insights, and cryptocurrency news
                </label>
              </div>
            </div>

            {/* Security Note */}
            <div className="bg-blue-900/20 border border-blue-800/30 rounded-xl p-4 select-none">
              <div className="flex items-start space-x-3">
                <FaShieldAlt className="text-blue-400 text-lg mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">Security First</h4>
                  <p className="text-xs text-blue-300">
                    Your data is encrypted with bank-level security. We never store your passwords in plain text.
                  </p>
                </div>
              </div>
            </div>

            {/* Error display for submit errors */}
            {errors.submit && (
              <div className="bg-red-900/30 border border-red-700/50 rounded-xl p-4 select-none">
                <p className="text-red-300 text-center">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                <span className="flex items-center justify-center space-x-2">
                  <FaBookOpen />
                  <span>Start Learning Journey</span>
                </span>
              )}
            </button>

            {/* Additional Login Reminder */}
            <div className="text-center pt-4 border-t border-gray-700/50 select-none">
              <p className="text-gray-400">
                Already enrolled?{' '}
                <Link 
                  to="/signin" 
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors inline-flex items-center cursor-pointer"
                >
                  Login here
                  <FaArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-gray-500 text-sm mt-8 select-none">
          By signing up, you join a community of tech learners and developers.
        </p>
      </div>
    </div>
  );
};

export default SignUp;