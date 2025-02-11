import React, { useState, useEffect } from 'react';
import { sendMessage, getConversation } from '../api/messageApi';
import './Message.css';

const Message = ({ userId, companyId }) => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);

  useEffect(() => {
    fetchConversation();
  }, [userId, companyId]);

  const fetchConversation = async () => {
    try {
      const messages = await getConversation(userId, companyId);
      setConversation(messages);
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      await sendMessage({
        senderId: userId,
        receiverId: companyId,
        content: message
      });
      setMessage('');
      fetchConversation();
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="message-container">
      <h2>Message Company</h2>
      <div className="conversation">
        {conversation.map((msg, index) => (
          <div key={index} className={`message ${msg.senderId === userId ? 'sent' : 'received'}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Message;