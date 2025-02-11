const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');
const authMiddleware = require('../middlewares/authMiddleware');

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Send a message
router.post('/', messageController.sendMessage);

// Get conversations for the current user
router.get('/conversations', messageController.getConversations);

// Get messages for a specific conversation
router.get('/conversation/:conversationId', messageController.getConversationMessages);

// Mark messages as read
router.put('/mark-read/:conversationId', messageController.markMessagesAsRead);

// Delete a message (only for the sender)
router.delete('/:messageId', messageController.deleteMessage);

module.exports = router;