import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <h1>StudyCore AI</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login" className="login-btn">Login</Link></li>
            <li><Link to="/signup" className="signup-btn">Sign Up</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to StudyCore AI</h1>
          <p>Your Ultimate Platform for Academic Excellence</p>
          <p className="hero-subtitle">
            Access comprehensive study materials, previous year question papers, 
            specimen papers, and more - all powered by AI
          </p>
          <div className="hero-buttons">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="placeholder-image">📚</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose StudyCore AI?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Comprehensive Materials</h3>
            <p>Access all study materials for Grade 9-12 across ICSE, CBSE, ISC, and State Boards</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📄</div>
            <h3>Question Papers</h3>
            <p>Previous year papers and specimen papers to help you prepare effectively</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🤖</div>
            <h3>AI-Powered Search</h3>
            <p>Smart search and recommendations to find exactly what you need</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>Easy Access</h3>
            <p>Access materials anytime, anywhere on any device</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Verified Materials</h3>
            <p>All materials are verified and curated by expert educators</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Private</h3>
            <p>Your data is secure with enterprise-grade encryption</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How StudyCore AI Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Sign Up</h3>
            <p>Create your account and verify your details</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Select Your Board & Class</h3>
            <p>Choose your educational board and class</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Browse Materials</h3>
            <p>Access comprehensive study materials and papers</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Study & Excel</h3>
            <p>Use AI assistance to learn and prepare effectively</p>
          </div>
        </div>
      </section>

      {/* Developers Section */}
      <section className="developers-section">
        <h2>Meet Our Developers</h2>
        <p className="section-subtitle">Built with dedication by expert developers</p>
        <div className="developers-grid">
          <div className="developer-card">
            <div className="developer-avatar">👨‍💼</div>
            <h3>Vijay</h3>
            <p className="developer-title">Full Stack Developer & Lead Architect</p>
            <p className="developer-description">
              Vijay leads the technical architecture and development of StudyCore AI, 
              ensuring scalability and reliability across the platform.
            </p>
            <p className="developer-email">📧 mallruvijaysundhar@gmail.com</p>
          </div>
          <div className="developer-card">
            <div className="developer-avatar">👨‍💻</div>
            <h3>Venkat</h3>
            <p className="developer-title">Backend & AI Integration Specialist</p>
            <p className="developer-description">
              Venkat focuses on backend infrastructure and AI integration, 
              making StudyCore AI smarter and more efficient.
            </p>
            <p className="developer-email">Developer Access Provided</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Benefits for Students</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>Complete Study Materials</h4>
              <p>All textbooks, notes, and reference materials in one place</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>Previous Year Papers</h4>
              <p>Practice with authentic exam papers from multiple years</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>Specimen Papers</h4>
              <p>Learn the exam pattern with official specimen papers</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>AI Recommendations</h4>
              <p>Get personalized study recommendations based on your needs</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>Progress Tracking</h4>
              <p>Monitor your learning progress with detailed analytics</p>
            </div>
          </div>
          <div className="benefit-item">
            <span className="benefit-icon">✓</span>
            <div>
              <h4>Expert Support</h4>
              <p>Get help from our community of educators and students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Achieve Academic Excellence?</h2>
        <p>Join thousands of students using StudyCore AI to ace their exams</p>
        <div className="cta-buttons">
          <Link to="/signup" className="btn btn-primary-large">Start Your Journey</Link>
          <Link to="/contact" className="btn btn-secondary-large">Contact Us</Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>StudyCore AI</h4>
            <p>Your ultimate platform for academic excellence</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Developers</h4>
            <p>Vijay & Venkat</p>
            <p>Email: mallruvijaysundhar@gmail.com</p>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 StudyCore AI. All rights reserved. Developed by Vijay & Venkat</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
