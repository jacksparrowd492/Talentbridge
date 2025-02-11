import React, { useState } from 'react';
import authApi from '../api/authApi';
import './SignUpJobSeeker.css'; // Moved this import to the top

const { register } = authApi;

const SignUpJobSeeker = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    skills: '',
    age: '',
    phone: '',
    email: '',
    university: '',
    password: '',
    confirmPassword: '',
    address: ''
  });
  const [resume, setResume] = useState(null);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    // Add more validation rules here
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => formDataToSend.append(key, formData[key]));
      formDataToSend.append('resume', resume);

      await register(formDataToSend);
      alert('Registration successful!');
      // Redirect to login page or dashboard
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signup-jobseeker-container">
      <h2>Sign Up as Job Seeker</h2>
      <form onSubmit={handleSubmit} className="signup-jobseeker-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required />
        <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Desired Role" required />
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} placeholder="Skills" required />
        <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="university" value={formData.university} onChange={handleChange} placeholder="University" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password" required />
        <textarea name="address" value={formData.address} onChange={handleChange} placeholder="Address" required></textarea>
        <div className="file-input">
          <label htmlFor="resume">Upload Resume:</label>
          <input type="file" id="resume" onChange={handleFileChange} accept=".pdf,.doc,.docx" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUpJobSeeker;
