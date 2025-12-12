import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Shield, CheckCircle, XCircle, Send, ArrowLeft } from 'lucide-react';
import api from '../services/api';
import API_CONFIG from '/config/apiConfig';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    try {
      // Use the API config for the endpoint
      const response = await api.post(
        API_CONFIG.ENDPOINTS.AUTH.FORGOT_PASSWORD,
        { email }
      );

      if (response.status === 200) {
        setMessage(response.data.message || 'Password reset email sent successfully');
        // Clear form
        setEmail('');
      } else {
        setError(response.data.error || 'Failed to send reset email');
      }
    } catch (err) {
      if (err.response?.data) {
        setError(err.response.data.error || err.response.data.detail || 'Failed to send reset email');
      } else {
        setError('Network error. Please try again.');
      }
      console.error('Forgot password error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Logo/Brand */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                BitAfrica
              </h1>
            </div>
          </Link>
          <p className="text-gray-400 mt-2">Reset your password</p>
        </div>

        {/* Forgot Password Card */}
        <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <Link 
                to="/signin" 
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Login
              </Link>
            </div>
            
            <div className="text-center mb-6">
              <div className="h-16 w-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
              <p className="text-gray-400">
                Enter your email address and we'll send you instructions to reset your password.
              </p>
            </div>
          </div>

          {/* Success Message */}
          {message && (
            <div className="mb-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-xl">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-emerald-400 mr-3" />
                <div>
                  <p className="text-emerald-300">{message}</p>
                  <p className="text-sm text-emerald-200/80 mt-1">
                    Check your email for the password reset link.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl">
              <div className="flex items-center">
                <XCircle className="h-5 w-5 text-red-400 mr-3" />
                <p className="text-red-300">{error}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <div className="flex items-center space-x-2">
                  <Mail className="text-blue-400" />
                  <span>Email Address</span>
                </div>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your email address"
                required
              />
              <p className="mt-2 text-sm text-gray-400">
                Enter the email address associated with your account.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 shadow-lg shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Sending Instructions...
                </span>
              ) : (
                <span className="flex items-center justify-center">
                  <Send className="h-5 w-5 mr-2" />
                  Send Reset Instructions
                </span>
              )}
            </button>

            {/* Back to Login */}
            <div className="text-center pt-4 border-t border-gray-700/50">
              <p className="text-gray-400">
                Remember your password?{' '}
                <Link 
                  to="/signin" 
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                >
                  Back to Login
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Security Note */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 border border-blue-500/20 rounded-xl">
          <div className="flex items-center">
            <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 mr-3">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-white">Secure Password Reset</p>
              <p className="text-xs text-blue-200/70">
                Reset links expire in 24 hours for your security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;