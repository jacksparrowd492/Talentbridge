import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authApi from '../api/authApi'; // Import the entire authApi object

import './SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    phoneNumber: '',
    password: '',
    otp: '',
    userType: 'jobseeker'
  });
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendOTP = async (e) => {
    e.preventDefault();
    // Implement OTP sending logic here
    setOtpSent(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await authApi.login(formData); // Corrected usage
      console.log('Login successful:', response);
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className="signin-form">
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Phone Number"
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
        {otpSent && (
          <input
            type="text"
            name="otp"
            value={formData.otp}
            onChange={handleChange}
            placeholder="Enter OTP"
            required
          />
        )}
        <select
          name="userType"
          value={formData.userType}
          onChange={handleChange}
          required
        >
          <option value="jobseeker">Job Seeker</option>
          <option value="jobgiver">Job Giver</option>
        </select>
        {!otpSent && (
          <button type="button" onClick={handleSendOTP} className="otp-button">
            Send OTP
          </button>
        )}
        <button type="submit" className="signin-button">
          Sign In
        </button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <div className="additional-options">
        <Link to="/forgot-password">Forgot Password?</Link>
        <p>
          Don't have an account?{' '}
          <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
