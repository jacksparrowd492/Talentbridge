const Application = require('../models/Application');
const Job = require('../models/Job');

// Create a new application
exports.createApplication = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { resume, coverLetter } = req.body;

    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const application = new Application({
      job: jobId,
      applicant: req.user.id,
      resume,
      coverLetter,
    });

    await application.save();

    res.status(201).json({ message: 'Application submitted successfully', application });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting application', error: error.message });
  }
};

// Get all applications for a job (for employers)
exports.getJobApplications = async (req, res) => {
  try {
    const { jobId } = req.params;
    const applications = await Application.find({ job: jobId }).populate('applicant', 'name email');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error: error.message });
  }
};

// Get all applications by a user (for job seekers)
exports.getUserApplications = async (req, res) => {
  try {
    const applications = await Application.find({ applicant: req.user.id }).populate('job', 'title company');
    res.json(applications);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching applications', error: error.message });
  }
};

// Update application status (for employers)
exports.updateApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params;
    const { status } = req.body;

    const application = await Application.findByIdAndUpdate(
      applicationId,
      { status },
      { new: true }
    );

    if (!application) {
      return res.status(404).json({ message: 'Application not found' });
    }

    res.json({ message: 'Application status updated', application });
  } catch (error) {
    res.status(500).json({ message: 'Error updating application status', error: error.message });
  }
};