import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === 'development' ? 'http://localhost:5001/api' : '/api',
  withCredentials: true, // allow send cookie
});

export default axiosInstance;
