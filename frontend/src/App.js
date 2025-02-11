import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Home from './pages/Home';
import SignIn from './components/SignIn';
import SignUpJobSeeker from './components/SignUpJobSeeker';
import SignUpJobGiver from './components/SignUpJobGiver';
import EmployerDashboard from './pages/EmployerDashboard';
import JobSeekerDashboard from './pages/JobSeekerDashboard';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup/jobseeker" element={<SignUpJobSeeker />} />
            <Route path="/signup/jobgiver" element={<SignUpJobGiver />} />
            <Route path="/employer/dashboard" element={<EmployerDashboard />} />
            <Route path="/jobseeker/dashboard" element={<JobSeekerDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
