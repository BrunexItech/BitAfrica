// frontend/src/services/consultationService.js
import api from './api.js';
import API_CONFIG from '/config/apiConfig';

const consultationService = {
  submitConsultation: async (formData) => {
    // Map frontend form fields to backend expected fields
    const submissionData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || '',
      company: formData.company || '',
      service: formData.service,
      description: formData.description,
      region: formData.region || 'global',
      consultation_type: formData.consultationType || 'video',
      timezone: formData.timezone || 'GMT'
    };
    
    const response = await api.post(
      API_CONFIG.ENDPOINTS.CONSULTATION.SUBMIT, 
      submissionData
    );
    return response.data;
  }
};

export default consultationService;