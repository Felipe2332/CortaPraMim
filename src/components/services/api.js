import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cortapramim.azurewebsites.net/api'
});

export default api;
