import api from './api.js';
import API_CONFIG from '/config/apiConfig';

const authService = {
  register: async (userData) => {
    const response = await api.post(API_CONFIG.ENDPOINTS.AUTH.REGISTER, userData);
    return response.data;
  },
  
  login: async (credentials) => {
    const response = await api.post(API_CONFIG.ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data;
  },
  
  logout: async () => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (refreshToken) {
      await api.post(API_CONFIG.ENDPOINTS.AUTH.LOGOUT, {
        refresh: refreshToken
      });
    }
    // Clear local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },
  
  // Store tokens after successful login/register
  storeTokens: (data) => {
    if (data.access) localStorage.setItem('access_token', data.access);
    if (data.refresh) localStorage.setItem('refresh_token', data.refresh);
    if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
  },
  
  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('access_token');
  },
  
  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  }
};

export default authService;