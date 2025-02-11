import React, { useState, useEffect } from 'react';
import { getJobs } from '../api/jobApi';
import JobPost from '../components/JobPost';
import './EmployerDashboard.css';

const EmployerDashboard = () => {
  const [postedJobs, setPostedJobs] = useState([]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const jobs = await getJobs({ employerId: 'currentEmployerId' }); // Replace with actual employer ID
      setPostedJobs(jobs);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    }
  };

  return (
    <div className="employer-dashboard">
      <h1>Employer Dashboard</h1>
      <JobPost onJobPosted={fetchJobs} />
      <div className="posted-jobs">
        <h2>Your Posted Jobs</h2>
        {postedJobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.jobTitle}</h3>
            <p>{job.description}</p>
            <p>Applications: {job.applicationsCount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;