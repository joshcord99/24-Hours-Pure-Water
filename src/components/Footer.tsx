import React from "react";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">24 Hours Pure Water</h3>
            <p className="footer-description">
              Providing premium quality alkaline and purified water 24/7 to our
              community.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>Emergency: (626) 759-2656</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Our Services</h4>
            <ul className="footer-links">
              <li>Alkaline Water</li>
              <li>Purified Water</li>
              <li>24/7 Self-Service</li>
              <li>Bulk Discounts</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Important Notes</h4>
            <div className="footer-notes">
              <p>Use clean, sanitized containers</p>
              <p>Machines not for change</p>
              <p>Premium quality guaranteed</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 24 Hours Pure Water. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
