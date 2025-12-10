import axios from 'axios';
import API_CONFIG from '/config/apiConfig';

const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// ... rest of the interceptor code remains the same

export default api;