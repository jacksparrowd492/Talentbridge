import React, { useState } from 'react';
import { getJobs } from '../api/jobApi';
import './JobSearch.css';

const JobSearch = () => {
  const [searchCriteria, setSearchCriteria] = useState({
    jobType: '',
    location: '',
    salary: '',
    experience: '',
    skills: ''
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchCriteria({ ...searchCriteria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const jobs = await getJobs(searchCriteria);
      setSearchResults(jobs);
    } catch (error) {
      console.error('Error searching jobs:', error);
      alert('Error searching jobs. Please try again.');
    }
  };

  return (
    <div className="job-search-container">
      <h2>Find Your Next Opportunity</h2>
      <form onSubmit={handleSubmit} className="job-search-form">
        <input
          type="text"
          name="jobType"
          value={searchCriteria.jobType}
          onChange={handleChange}
          placeholder="Job Type"
        />
        <input
          type="text"
          name="location"
          value={searchCriteria.location}
          onChange={handleChange}
          placeholder="Location"
        />
        <input
          type="text"
          name="salary"
          value={searchCriteria.salary}
          onChange={handleChange}
          placeholder="Expected Salary"
        />
        <input
          type="text"
          name="experience"
          value={searchCriteria.experience}
          onChange={handleChange}
          placeholder="Experience Level"
        />
        <input
          type="text"
          name="skills"
          value={searchCriteria.skills}
          onChange={handleChange}
          placeholder="Skills"
        />
        <button type="submit" className="search-button">Search Jobs</button>
      </form>

      <div className="search-results">
        {searchResults.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.jobTitle}</h3>
            <p>{job.companyName}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearch;