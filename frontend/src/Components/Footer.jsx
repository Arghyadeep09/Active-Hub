// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
        <div className="footer-message">
          <p>Thank you for visiting our site!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
