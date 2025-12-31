const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      REGISTER: '/auth/register/',
      LOGIN: '/auth/login/',
      LOGOUT: '/auth/logout/',
      REFRESH: '/auth/token/refresh/',
      RESET_PASSWORD: '/auth/reset-password/{uid}/{token}/',
      FORGOT_PASSWORD: '/auth/forgot-password/',
    },
    CONSULTATION: {
      SUBMIT: '/consultation/submit/',
    },
    CONTACT: {
      SUBMIT: '/contact/submit/',
    },
    LEARNING: {
      COURSES: '/learning/courses/',
      COURSE_DETAIL: '/learning/courses/{id}/',
      MODULES: '/learning/courses/{id}/modules/',
      QUIZ: '/learning/courses/{id}/quiz/',
      QUIZ_SUBMIT: '/learning/quiz/submit/',
      PROGRESS_UPDATE: '/learning/progress/update/',
      USER_PROGRESS: '/learning/progress/user/',
      ACHIEVEMENTS: '/learning/achievements/',
      DASHBOARD_STATS: '/learning/dashboard/stats/'
    },
    NEWSLETTER: {
      SUBSCRIBE: '/newsletter/subscribe/',  
    }
  }
};

export default API_CONFIG;