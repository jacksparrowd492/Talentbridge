const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');
const authMiddleware = require('../middlewares/authMiddleware');

// Public routes
router.get('/', jobController.getAllJobs);
router.get('/:id', jobController.getJobById);

// Protected routes (require authentication)
router.use(authMiddleware);

// Create a new job (only for job givers)
router.post('/', jobController.createJob);

// Update a job (only for job givers who own the job)
router.put('/:id', jobController.updateJob);

// Delete a job (only for job givers who own the job)
router.delete('/:id', jobController.deleteJob);

// Get jobs posted by the authenticated job giver
router.get('/my-jobs', jobController.getMyJobs);

// Search for jobs
router.get('/search', jobController.searchJobs);

module.exports = router;