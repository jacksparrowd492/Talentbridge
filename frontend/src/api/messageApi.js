import axiosInstance from './axiosInstance';

export const sendMessage = async (messageData) => {
  try {
    const response = await axiosInstance.post('/api/messages', messageData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getMessages = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/messages/user/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getConversation = async (user1Id, user2Id) => {
  try {
    const response = await axiosInstance.get(`/api/messages/conversation/${user1Id}/${user2Id}`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const markMessageAsRead = async (messageId) => {
  try {
    const response = await axiosInstance.patch(`/api/messages/${messageId}/read`);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};