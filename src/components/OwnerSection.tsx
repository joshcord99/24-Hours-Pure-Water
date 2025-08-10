import React from "react";
import "./OwnerSection.css";

const OwnerSection: React.FC = () => {
  return (
    <section className="owner-section">
      <div className="container">
        <div className="owner-content">
          <div className="owner-photo">
            <div className="photo-placeholder">
              <span className="photo-icon">👤</span>
              <p>Owner Photo</p>
            </div>
          </div>
          <div className="owner-info">
            <h2 className="owner-name">Sarah Johnson</h2>
            <h3 className="owner-title">Founder & Owner</h3>
            <p className="owner-description">
              With over 15 years of experience in water purification and
              customer service, Sarah is passionate about providing the highest
              quality alkaline and purified water to our community. Her
              commitment to excellence and customer satisfaction drives
              everything we do at 24 Hours Pure Water.
            </p>
            <div className="owner-stats">
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Service</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Quality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
