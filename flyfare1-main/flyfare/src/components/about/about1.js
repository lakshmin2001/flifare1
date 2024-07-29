import React from 'react';
import './about1.css';

const About1 = () => {
  return (
    <section className="about-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h2>Who We Are</h2>
          <div className="text-block">
            <h3>Our Mission</h3>
            <p>
              We harness the power of technology not just to connect, but to heal—to ensure that every interaction nurtures both mind and soul. We believe in the transformative magic of sharing, knowing that in each narrative lies the potential for healing and growth.
            </p>
          </div>
          <div className="text-block">
            <h3>Our Vision</h3>
            <p>
              In a world where mental well-being is often overlooked, especially in India where millions grapple with silent battles, we stand firm in our commitment to fostering positive change. Through our app and website, we've cultivated a diverse tapestry of voices, including survivors, therapists, psychologists, and everyday heroes.
            </p>
          </div>
        </div>
        <div className="image-content">
          {/* <svg
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="creative-svg"
          >
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#ff7e5f', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#feb47b', stopOpacity: 1}} />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad1)" stroke="#fff" strokeWidth="2" />
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="#fff" strokeWidth="2" />
            <text x="50" y="50" textAnchor="middle" stroke="#fff" strokeWidth="1px" dy=".3em" fontSize="12">
              Mental Health
            </text>
          </svg> */}
        </div>
      </div>
    </section>
  );
};

export default About1;
