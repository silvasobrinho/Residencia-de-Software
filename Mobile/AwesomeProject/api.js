import axios from 'axios';

const api = axios.create({
  baseURL: 'https://314515fa.ngrok.io',
});

export default api;