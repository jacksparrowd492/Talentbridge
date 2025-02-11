import React, { useState, useEffect } from 'react';
import { getJobs } from '../api/jobApi';
import JobSearch from '../components/JobSearch';
import './JobSeekerDashboard.css';

const JobSeekerDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    fetchAppliedJobs();
  }, []);

  const fetchAppliedJobs = async () => {
    try {
      // Replace with actual API call to get applied jobs
      const jobs = await getJobs({ applicantId: 'currentApplicantId' });
      setAppliedJobs(jobs);
    } catch (error) {
      console.error('Error fetching applied jobs:', error);
    }
  };

  return (
    <div className="jobseeker-dashboard">
      <h1>Job Seeker Dashboard</h1>
      <JobSearch />
      <div className="applied-jobs">
        <h2>Your Applied Jobs</h2>
        {appliedJobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <p>Status: {job.applicationStatus}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerDashboard;