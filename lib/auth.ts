import axios from 'axios';

const API_URL = 'https://localhost:7103/'; // API URL'ini buraya ekleyin

// Login fonksiyonu
export const login = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/authenticate`, { username, password });
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

// Register fonksiyonu
export const register = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Register error:', error);
    throw error;
  }
};

// Token'ı kontrol eden fonksiyon
export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token; // Token varsa true döner, yoksa false
};

// Logout fonksiyonu
export const logout = () => {
  localStorage.removeItem('token');
};
