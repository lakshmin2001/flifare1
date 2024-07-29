import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './counselor.css';
import Neha from '../../assets/images/blogimages/neha.jpg';

const Counselor = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [loading, setLoading] = useState(true);
  const [thumbsUp, setThumbsUp] = useState(99);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleShowDetails = () => {
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  const handleThumbsUp = () => {
    setThumbsUp(thumbsUp + 1);
  };

  return (
    <div className="counselor">
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="skeleton-wrapper">
            <Skeleton height={30} width={200} />
            <Skeleton count={3} />
          </div>
        ))
      ) : (
        <>
          <h2>COUNSELLORS</h2>
          <div className="counselor-card" onClick={handleShowDetails}>
            <img src={Neha} alt="Neha Gupta" />
            <div className="counselor-info">
              <h3>Neha Gupta</h3>
              <p>Counselling Psychologist, Crisis Counsellor, Suicide Prevention Gatekeeper</p>
              <p>2 Years Experience</p>
              <div className="rating">
                <span onClick={handleThumbsUp}>👍 {thumbsUp}%</span>
              </div>
              <div className="languages">Hindi | English</div>
              <div className="price"><span>₹899</span></div>
            </div>
          </div>

          {showDetails && (
            <div className="modal-overlay" onClick={handleCloseDetails}>
              <div className="counselor-details" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={handleCloseDetails}>X</button>
                <div className="details-content">
                  <h3>Neha Gupta</h3>
                  <p>Counselling Psychologist, Crisis Counsellor, Suicide Prevention Gatekeeper</p>
                  <p>2 Years Experience</p>
                  <h4>Bio:</h4>
                  <p>Rekindling minds to call upon their inner strength and light their way to live life; But Better!!! M. Sc in Counselling Psychology, Grief Therapist, Family and Marital Counsellor, Queer Affirmative Therapist, Crisis Counsellor, Social & Emotional Needs Counsellor, Expressive Art Therapist. With you in your journey of becoming the most authentic self!!!</p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Counselor;
