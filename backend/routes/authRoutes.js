const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const authMiddleware = require('../middlewares/authMiddleware');

// Register a new user (both job seeker and job giver)
router.post('/register', authController.register);

// Login
router.post('/login', authController.login);

// Forgot password
router.post('/forgot-password', authController.forgotPassword);

// Reset password
router.post('/reset-password', authController.resetPassword);

// Get current user (protected route)
router.get('/me', authMiddleware, authController.getCurrentUser);

// Update user profile (protected route)
router.put('/update-profile', authMiddleware, authController.updateProfile);

module.exports = router;