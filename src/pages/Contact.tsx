import React from "react";
import "./Contact.css";

const MapComponent: React.FC = () => {
  const address = "1431 W Redondo Beach Blvd, Gardena, CA 90247";
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}`;

  return (
    <div className="map-container">
      <iframe
        title="Location Map"
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
      ></iframe>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Get in touch with us for any questions or concerns about our water
            services.
          </p>
        </div>
      </div>

      <div className="map-section">
        <div className="container">
          <h2 className="map-title">Find Us on the Map</h2>
          <div className="map-wrapper">
            <MapComponent />
          </div>
        </div>
      </div>

      <div className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>Emergency Contact</h3>
                    <p>(310) 532-1962</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">⏰</div>
                  <div className="info-content">
                    <h3>Hours of Operation</h3>
                    <p>
                      <strong>Self-Service:</strong> 24/7
                    </p>
                    <p>
                      <strong>In-Store Hours:</strong>
                    </p>
                    <p>Sunday: Closed</p>
                    <p>Mon - Sat: 9:30 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">💧</div>
                  <div className="info-content">
                    <h3>Services</h3>
                    <p>Alkaline Water: $1.25/gallon</p>
                    <p>Purified Water: $0.40/gallon</p>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>Our Location</h3>
                    <p className="address">1431 W Redondo Beach Blvd</p>
                    <p className="city-state">Gardena, CA 90247</p>
                    <p className="country">United States</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
