import React from "react";
import "./PricingCards.css";

const PricingCards: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">Our Water Dispensing Machines</h2>
        <div className="machine-container">
          <div className="water-dispenser">
            {/* Left Section - Alkaline Water */}
            <div className="dispenser-section alkaline">
              <div className="section-sign">
                <div className="sign-background">
                  <div className="sign-content">
                    <div className="water-type">ALKALINE WATER</div>
                    <div className="price-info">
                      <span className="dollar-amount">$1.25</span>
                      <span className="price-text">per gallon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dispensing-compartment">
                <div className="compartment-window">
                  <div className="window-frame"></div>
                  <div className="dispensing-mechanism">
                    <div className="nozzle"></div>
                    <div className="condensation">
                      <div className="water-drop"></div>
                      <div className="water-drop"></div>
                      <div className="water-drop"></div>
                    </div>
                  </div>
                  <div className="jug">
                    <div className="jug-body"></div>
                    <div className="jug-handle"></div>
                    <div className="jug-spout"></div>
                  </div>
                  <div className="bottle-handle">
                    <div className="handle-grip"></div>
                    <div className="handle-text">PULL TO OPEN</div>
                  </div>
                  <div className="window-frame">
                    <div className="window-glass"></div>
                  </div>
                </div>
              </div>

              <div className="section-instructions">
                <p>USE CLEAN, SANITIZED CONTAINERS</p>
                <p>UTILISER DES CONTENANTS PROPRES ET STÉRILISÉS</p>
                <p>USE ENVASES LIMPIOS, E HIGIENICOS</p>
              </div>
            </div>

            {/* Central Control Panel */}
            <div className="control-panel">
              <div className="panel-top"></div>

              <div className="income">
                <div className="digital-display">
                  <div className="display-screen">0.00</div>
                </div>
                <div className="premium-quality-text">Premium quality</div>
                <div className="payment-row">
                  <div className="coin-return-container">
                    <div className="coin-return-text">COIN RETURN</div>
                    <button className="coin-return-btn"></button>
                  </div>
                  <div className="payment-slots">
                    <div className="coin-slot">
                      <div className="slot-label">DEPOSIT COINS</div>
                      <div className="coin-slot-hole"></div>
                    </div>
                    <div className="bill-slot">
                      <div className="bill-icon">💵</div>
                      <div className="bill-slot-hole"></div>
                    </div>
                  </div>
                </div>
                <div className="red-light red-light-left"></div>
                <div className="red-light red-light-right"></div>
              </div>

              <div className="gallon-buttons">
                <div className="button-row">
                  <button className="gallon-btn">
                    <span className="button-number">1</span>
                    <span className="button-label">ALKALINE</span>
                  </button>
                  <button className="gallon-btn">
                    <span className="button-number">1</span>
                    <span className="button-label">PURIFIED</span>
                  </button>
                </div>
                <div className="button-row">
                  <button className="gallon-btn">
                    <span className="button-number">2</span>
                    <span className="button-label">ALKALINE</span>
                  </button>
                  <button className="gallon-btn">
                    <span className="button-number">2</span>
                    <span className="button-label">PURIFIED</span>
                  </button>
                </div>
                <div className="button-row">
                  <button className="gallon-btn">
                    <span className="button-number">3</span>
                    <span className="button-label">ALKALINE</span>
                  </button>
                  <button className="gallon-btn">
                    <span className="button-number">3</span>
                    <span className="button-label">PURIFIED</span>
                  </button>
                </div>
                <div className="button-row">
                  <button className="gallon-btn">
                    <span className="button-number">5</span>
                    <span className="button-label">ALKALINE</span>
                  </button>
                  <button className="gallon-btn">
                    <span className="button-number">5</span>
                    <span className="button-label">PURIFIED</span>
                  </button>
                </div>
              </div>

              <div className="bottom-slot">
                <div className="dispense-tray">
                  <div className="dispense-hole"></div>
                </div>
              </div>
            </div>

            {/* Right Section - Purified Water */}
            <div className="dispenser-section purified">
              <div className="section-sign">
                <div className="sign-background">
                  <div className="sign-content">
                    <div className="water-type">PURIFIED WATER</div>
                    <div className="price-info">
                      <span className="dollar-amount">$0.40</span>
                      <span className="price-text">per gallon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dispensing-compartment">
                <div className="compartment-window">
                  <div className="window-frame"></div>
                  <div className="dispensing-mechanism">
                    <div className="nozzle"></div>
                    <div className="condensation">
                      <div className="water-drop"></div>
                      <div className="water-drop"></div>
                      <div className="water-drop"></div>
                    </div>
                  </div>
                  <div className="jug">
                    <div className="jug-body"></div>
                    <div className="jug-handle"></div>
                    <div className="jug-spout"></div>
                  </div>
                  <div className="bottle-handle bottle-handle-purified">
                    <div className="handle-grip"></div>
                    <div className="handle-text">PULL TO OPEN</div>
                  </div>
                  <div className="window-frame">
                    <div className="window-glass"></div>
                  </div>
                </div>
              </div>

              <div className="section-instructions">
                <p>USE CLEAN, SANITIZED CONTAINERS</p>
                <p>UTILISER DES CONTENANTS PROPRES ET STÉRILISÉS</p>
                <p>USE ENVASES LIMPIOS, E HIGIENICOS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-note">
          <p>Use clean, sanitized containers for best results</p>
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
