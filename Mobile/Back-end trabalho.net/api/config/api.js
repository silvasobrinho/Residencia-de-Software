import axios from 'axios';

const api = axios.create({
  baseURL: ' http://55ba2504.ngrok.io',
});

export default api;