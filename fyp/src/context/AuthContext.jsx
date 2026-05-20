import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_URL = 'http://localhost:5000/api';

  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      localStorage.setItem('token', token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('token');
    }
  };

  const loadUser = async () => {
    const token = localStorage.getItem('token');
    
    console.log('loadUser - token:', token ? 'yes' : 'no');
    
    if (!token) {
      setLoading(false);
      return;
    }

    setAuthToken(token);

    try {
      const response = await axios.get(`${API_URL}/users/profile`);
      console.log('User loaded:', response.data.user);
      setUser(response.data.user);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error) {
      console.error('Load user error:', error.response?.status);
      if (error.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
      }
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, { email, password });
      const { token, user } = response.data;
      
      console.log('Login success, setting user...');
      
      setAuthToken(token);
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      
      return { success: true };
    } catch (error) {
      console.error('Login error:', error.response?.data?.message);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Login failed' 
      };
    }
  };

  const register = async (name, email, password, agreeToTerms) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, { 
        name, email, password, agreeToTerms 
      });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Registration failed' 
      };
    }
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, loadUser }}>
      {children}
    </AuthContext.Provider>
  );
};