import axios from 'axios';

const api = axios.create({
  baseURL: 'your-api-base-url',
  headers: {
    'Authorization': 'Bearer mock-token'
  }
});

export default api;

