import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/studycore-logo.svg';
import './Auth.css';

const SignupPage = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup request:', form);
  };

  return (
    <div className="auth-page">
      <div className="auth-card auth-card-signup">
        <div className="auth-brand">
          <img src={logo} alt="StudyCore AI" className="auth-logo" />
          <h1>StudyCore AI</h1>
        </div>

        <h2>Create Account</h2>
        <p className="auth-subtitle">Join StudyCore AI and begin your academic journey</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row two-col">
            <label>
              First Name
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Last Name
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="primary-btn">Create Account</button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
