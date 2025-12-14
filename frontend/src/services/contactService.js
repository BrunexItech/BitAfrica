// frontend/src/services/contactService.js
import api from './api.js';
import API_CONFIG from '/config/apiConfig';

const contactService = {
  submitContact: async (formData) => {
    const response = await api.post(
      API_CONFIG.ENDPOINTS.CONTACT.SUBMIT, 
      formData
    );
    return response.data;
  }
};

export default contactService;