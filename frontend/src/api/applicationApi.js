import axiosInstance from './axiosInstance';

const applicationApi = {
  createApplication: async (jobId, coverLetter) => {
    try {
      const response = await axiosInstance.post('/applications', { jobId, coverLetter });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getApplicationsForJob: async (jobId) => {
    try {
      const response = await axiosInstance.get(`/applications/job/${jobId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  getUserApplications: async () => {
    try {
      const response = await axiosInstance.get('/applications/user');
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  updateApplicationStatus: async (applicationId, status) => {
    try {
      const response = await axiosInstance.put(`/applications/${applicationId}`, { status });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  },

  deleteApplication: async (applicationId) => {
    try {
      const response = await axiosInstance.delete(`/applications/${applicationId}`);
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default applicationApi;