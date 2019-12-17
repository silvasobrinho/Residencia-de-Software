import axios from 'axios';

const api = axios.create({
  baseURL: 'http://382aec66.ngrok.io',
});

export default api;