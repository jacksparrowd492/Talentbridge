import axiosInstance from './axiosInstance';

export const createJob = async (jobData) => {
  try {
    const response = await axiosInstance.post('/api/jobs', jobData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getJobs = async (filters = {}) => {
  try {
    const response = await axiosInstance.get('/api/jobs', { params: filters });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getJobById = async (jobId) => {
  try {
    const response = await axiosInstance.get(`/api/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const updateJob = async (jobId, updateData) => {
  try {
    const response = await axiosInstance.put(`/api/jobs/${jobId}`, updateData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const deleteJob = async (jobId) => {
  try {
    const response = await axiosInstance.delete(`/api/jobs/${jobId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};