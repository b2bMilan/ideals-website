import React, { useState } from "react";
import './App.css'

function App() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  return (
    <>
      <div className="landing-page">
        {/* Hero Section */}
        <header className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Find Your Local Deals</h1>
              <p className="hero-subtitle">
                Discover the local deals around you, help others by sharing.
              </p>
              <button
                className="hero-button"
                disabled={isButtonDisabled}
                onClick={() => alert("Button clicked!")}
              >
                {isButtonDisabled ? "Mobile App(coming soon)" : "Get App"}
              </button>
            </div>
            <div className="hero-image-container">
              <img
                src="src/assets/Splash1.png" /* Replace with your image path */
                alt="Local Deals"
                className="hero-image"
              />
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="features-section">
          <div className="features-container">
            {/* Left Side: Image */}
            <div className="features-image">
              <img src="src/assets/Dashboard.png" alt="iDeals App Preview" />
            </div>

            {/* Right Side: Points */}
            <div className="features-content">
              <h2 className="features-title">What do you get?</h2>
              <ul className="features-list">
                <li className="feature-item">
                  <span className="feature-icon">🛍️</span>
                  <div>
                    <strong>Share Deals</strong>
                    <p>Ever-growing list of local deals shared by other users.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <span className="reward-icon">🎖️</span>
                  <div>
                    <strong>Earn Points</strong>
                    <p>Accumulate points every time you share a deal, even while supporting an existing deal.</p>
                  </div>
                </li>
                <li className="feature-item">
                  <span className="feature-icon">✨</span>
                  <div>
                    <strong>And more...</strong>
                    <p>
                      Earn points, support existing deals, help others and earn your karma.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
    </div>
    </>
  )
}

export default App
