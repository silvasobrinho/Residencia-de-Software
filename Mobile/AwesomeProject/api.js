import axios from 'axios';

const api = axios.create({
  baseURL: 'http://8bce5e09.ngrok.io',
});

export default api;