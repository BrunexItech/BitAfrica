const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL ,
  ENDPOINTS: {
    AUTH: {
      REGISTER: '/auth/register/',
      LOGIN: '/auth/login/',
      LOGOUT: '/auth/logout/',
      REFRESH: '/auth/token/refresh/',
      RESET_PASSWORD: '/auth/reset-password/{uid}/{token}/',
      FORGOT_PASSWORD: '/auth/forgot-password/',
    },
  }
};

export default API_CONFIG;