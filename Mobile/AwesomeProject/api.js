import axios from 'axios';

const api = axios.create({
  baseURL: 'https://af5e8a33.ngrok.io',
});

export default api;