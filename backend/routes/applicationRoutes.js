const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');
const authMiddleware = require('../middlewares/authMiddleware');

// Apply authentication middleware to all routes
router.use(authMiddleware);

// Create a new application
router.post('/', applicationController.createApplication);

// Get all applications for a job
router.get('/job/:jobId', applicationController.getApplicationsForJob);

// Get all applications by a user
router.get('/user', applicationController.getUserApplications);

// Update application status
router.put('/:id', applicationController.updateApplicationStatus);

// Delete an application
router.delete('/:id', applicationController.deleteApplication);

module.exports = router;