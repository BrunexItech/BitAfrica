const API_CONFIG = {
  BASE_URL: 'http://127.0.0.1:8000/api',
  ENDPOINTS: {
    AUTH: {
      REGISTER: '/auth/register/',
      LOGIN: '/auth/login/',
      LOGOUT: '/auth/logout/',
      REFRESH: '/auth/token/refresh/',
    },
    // Will add more endpoints later
  }
};

export default API_CONFIG;