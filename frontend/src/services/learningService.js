import api from './api.js';
import API_CONFIG from '/config/apiConfig';

const learningService = {
  // Get all courses with user progress
  getCourses: async () => {
    const response = await api.get('/learning/courses/');
    return response.data;
  },

  // Get specific course details
  getCourse: async (courseId) => {
    const response = await api.get(`/learning/courses/${courseId}/`);
    return response.data;
  },

  // Get modules for a course
  getModules: async (courseId) => {
    const response = await api.get(`/learning/courses/${courseId}/modules/`);
    return response.data;
  },

  // Get quiz questions for a course
  getQuizQuestions: async (courseId) => {
    const response = await api.get(`/learning/courses/${courseId}/quiz/`);
    return response.data;
  },

  // Submit quiz answers
  submitQuiz: async (courseId, answers) => {
    const response = await api.post('/learning/quiz/submit/', {
      course_id: courseId,
      answers: answers
    });
    return response.data;
  },

  // Update module progress
  updateProgress: async (courseId, moduleId, completed = true) => {
    const response = await api.post('/learning/progress/update/', {
      course_id: courseId,
      module_id: moduleId,
      completed: completed
    });
    return response.data;
  },

  // Get user progress
  getUserProgress: async () => {
    const response = await api.get('/learning/progress/user/');
    return response.data;
  },

  // Get user achievements
  getAchievements: async () => {
    const response = await api.get('/learning/achievements/');
    return response.data;
  },

  // Get dashboard statistics
  getDashboardStats: async () => {
    const response = await api.get('/learning/dashboard/stats/');
    return response.data;
  }
};

export default learningService;