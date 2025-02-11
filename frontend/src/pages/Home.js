import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to TalentBridge</h1>
      <p>Connecting talent with opportunities</p>
      <div className="cta-buttons">
        <Link to="/signup/jobseeker" className="cta-button">Find a Job</Link>
        <Link to="/signup/jobgiver" className="cta-button">Post a Job</Link>
      </div>
    </div>
  );
};

export default Home;