import React, { useState } from 'react';
import { createJob } from '../api/jobApi';
import './JobPost.css';

const JobPost = () => {
  const [jobData, setJobData] = useState({
    companyName: '',
    jobTitle: '',
    location: '',
    salary: '',
    experience: '',
    skills: '',
    description: ''
  });

  const handleChange = (e) => {
    setJobData({ ...jobData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createJob(jobData);
      alert('Job posted successfully!');
      // Reset form or redirect
    } catch (error) {
      alert('Error posting job: ' + error.message);
    }
  };

  return (
    <div className="job-post-container">
      <h2>Post a New Job</h2>
      <form onSubmit={handleSubmit} className="job-post-form">
        <input
          type="text"
          name="companyName"
          value={jobData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          name="jobTitle"
          value={jobData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          name="location"
          value={jobData.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <input
          type="text"
          name="salary"
          value={jobData.salary}
          onChange={handleChange}
          placeholder="Salary Range"
        />
        <input
          type="text"
          name="experience"
          value={jobData.experience}
          onChange={handleChange}
          placeholder="Required Experience"
        />
        <input
          type="text"
          name="skills"
          value={jobData.skills}
          onChange={handleChange}
          placeholder="Required Skills"
        />
        <textarea
          name="description"
          value={jobData.description}
          onChange={handleChange}
          placeholder="Job Description"
          required
        ></textarea>
        <button type="submit" className="submit-button">Post Job</button>
      </form>
    </div>
  );
};

export default JobPost;