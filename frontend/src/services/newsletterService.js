// frontend/src/services/newsletterService.js
import api from './api.js';
import API_CONFIG from '/config/apiConfig';

const newsletterService = {
  subscribe: async (email) => {
    const response = await api.post(
      API_CONFIG.ENDPOINTS.NEWSLETTER.SUBSCRIBE, 
      { email, source: 'website_footer' }
    );
    return response.data;
  }
};

export default newsletterService;