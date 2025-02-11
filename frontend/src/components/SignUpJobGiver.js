import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './SignUpJobGiver.css';

const SignUpJobGiver = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    companyName: '',
    sector: '',
    password: '',
    confirmPassword: '',
    location: ''
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      const response = await fetch('http://localhost:5000/api/signup/jobgiver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Corrected from `newUser` to `formData`
      });
  
      const data = await response.json();
      console.log('Response data:', data); // Log response data
  
      if (response.ok) {
        alert('User registered successfully'); // Success message
        navigate('/login/job'); // Redirect to login page
      } else {
        alert(`Error: ${data.error}`); // Error message from the server
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during registration'); // General error message
    }
  };

  return (
    <div className="signup-jobgiver-container">
      <h2>Sign Up as Job Giver</h2>
      <form onSubmit={handleSubmit} className="signup-jobgiver-form">
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Full Name" 
          required 
        />
        <input 
          type="tel" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          placeholder="Phone Number" 
          required 
        />
        <input 
          type="text" 
          name="companyName" 
          value={formData.companyName} 
          onChange={handleChange} 
          placeholder="Company Name" 
          required 
        />
        <input 
          type="text" 
          name="sector" 
          value={formData.sector} 
          onChange={handleChange} 
          placeholder="Sector" 
          required 
        />
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          placeholder="Password" 
          required 
        />
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          placeholder="Confirm Password" 
          required 
        />
        <input 
          type="text" 
          name="location" 
          value={formData.location} 
          onChange={handleChange} 
          placeholder="Location" 
          required 
        />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUpJobGiver;
