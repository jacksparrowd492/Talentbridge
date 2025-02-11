import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="TalentBridge Logo" className="logo" />
      </div>
      <h1 className="company-name">TalentBridge</h1>
      <nav className="nav-links">
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/faq" className="nav-link">FAQ</Link>
      </nav>
    </header>
  );
};

export default Header;