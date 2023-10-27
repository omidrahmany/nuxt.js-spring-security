// services/api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 5000, // Adjust this value as needed
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/login/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
