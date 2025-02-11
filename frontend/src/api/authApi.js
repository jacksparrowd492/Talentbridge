import axiosInstance from './axiosInstance';

const authApi = {
  register: async (userData) => {
    try {
      const response = await axiosInstance.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  login: async (credentials) => {
    try {
      const response = await axiosInstance.post('/auth/login', credentials);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  forgotPassword: async (email) => {
    try {
      const response = await axiosInstance.post('/auth/forgot-password', { email });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  resetPassword: async (token, newPassword) => {
    try {
      const response = await axiosInstance.post('/auth/reset-password', { token, newPassword });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await axiosInstance.get('/auth/me');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  updateProfile: async (userData) => {
    try {
      const response = await axiosInstance.put('/auth/update-profile', userData);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default authApi;