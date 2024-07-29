import React from 'react';
import './ContentSection.css';

const ContentSection = () => {
  return (
    <>
      <header className="header-down">
        <section className="section anonymity">
          <div className="icon-wrapper">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="#9e74e2" strokeWidth="2"/>
              <path d="M15 15C15 14 14 13 12 13C10 13 9 14 9 15" stroke="#9e74e2" strokeWidth="2"/>
            </svg>
          </div>
          <h2>ANONYMITY, SECURITY AND SAFETY</h2>
          <p>Your identity remains safeguarded as you open up about your deepest struggles.</p>
        </section>

        <section className="section professionals">
          <div className="icon-wrapper">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="7" r="3" stroke="#9e74e2" strokeWidth="2"/>
              <path d="M12 14C8.69 14 6 16.69 6 20" stroke="#9e74e2" strokeWidth="2"/>
            </svg>
          </div>
          <h2>SEASONED PROFESSIONALS AT YOUR FINGERTIPS</h2>
          <p>Engage in insightful conversations with experienced psychologists and empathetic individuals who genuinely care.</p>
        </section>

        <section className="section support">
          <div className="icon-wrapper">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 12H4" stroke="#9e74e2" strokeWidth="2"/>
              <path d="M12 4L4 12L12 20L20 12L12 4Z" stroke="#9e74e2" strokeWidth="2"/>
            </svg>
          </div>
          <h2>AROUND-THE-CLOCK SUPPORT</h2>
          <p>Day or night, you're never alone. Our dedicated team ensures continuous support.</p>
        </section>

        <section className="section express">
          <div className="icon-wrapper">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 12L22 12" stroke="#9e74e2" strokeWidth="2"/>
              <path d="M12 2L12 22" stroke="#9e74e2" strokeWidth="2"/>
            </svg>
          </div>
          <h2>LIBERATION TO EXPRESS</h2>
          <p>Feel free to articulate your challenges without reservation, knowing that here, your voice matters.</p>
        </section>

        <section className="section empower">
          <div className="icon-wrapper">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21V15" stroke="#9e74e2" strokeWidth="2"/>
              <path d="M9 18L12 15L15 18" stroke="#9e74e2" strokeWidth="2"/>
              <path d="M12 3V12" stroke="#9e74e2" strokeWidth="2"/>
            </svg>
          </div>
          <h2>EMPOWER THROUGH SUPPORT</h2>
          <p>Beyond seeking solace, you also have the opportunity to extend a helping hand to others traversing similar paths.</p>
        </section>
      </header>
    </>
  );
};

export default ContentSection;
