import React from "react";
import "./BioSection.css";

const BioSection: React.FC = () => {
  return (
    <section className="bio-section">
      <div className="container">
        <div className="bio-content">
          <div className="bio-text">
            <h2 className="bio-title">Why Choose 24 Hours Pure Water?</h2>
            <p className="bio-description">
              We are committed to providing the highest quality alkaline and
              purified water to our community. Our state-of-the-art filtration
              systems ensure that every gallon of water meets the highest
              standards of purity and quality.
            </p>

            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">💧</div>
                <h3>Alkaline Water Benefits</h3>
                <ul>
                  <li>Better hydration</li>
                  <li>Improved pH balance</li>
                  <li>Enhanced energy levels</li>
                  <li>Better digestion</li>
                </ul>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">🔬</div>
                <h3>Advanced Filtration</h3>
                <ul>
                  <li>Multi-stage purification</li>
                  <li>Removes contaminants</li>
                  <li>Adds essential minerals</li>
                  <li>Maintains optimal pH</li>
                </ul>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">⏰</div>
                <h3>24/7 Convenience</h3>
                <ul>
                  <li>Always available</li>
                  <li>Self-service machines</li>
                  <li>Multiple payment options</li>
                  <li>Clean, safe environment</li>
                </ul>
              </div>
            </div>

            <div className="cta-section">
              <h3>Ready to Experience Premium Water?</h3>
              <p>
                Visit our location today and taste the difference that quality
                makes.
              </p>
              <div className="cta-buttons">
                <a href="/contact" className="btn btn-primary">
                  Contact Us
                </a>
                <a href="/reviews" className="btn btn-secondary">
                  Read Reviews
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;
