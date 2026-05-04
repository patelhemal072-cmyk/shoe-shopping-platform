import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const login = async (userData: any) => {
  const response = await api.post('/users/login', userData);
  return response.data;
};

export const register = async (userData: any) => {
  const response = await api.post('/users/register', userData);
  return response.data;
};

export default api;
