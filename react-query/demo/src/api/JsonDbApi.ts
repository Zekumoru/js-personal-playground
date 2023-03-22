import axios from 'axios';

const JsonDbApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default JsonDbApi;
