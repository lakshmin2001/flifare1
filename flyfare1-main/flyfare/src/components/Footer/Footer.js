import React from 'react';
import styled from 'styled-components';
import FooterImage from '../../assets/images/image3.png';

const FooterWrapper = styled.footer`
  background: linear-gradient(to right, #ffe0e8, #e0e8ff); /* Gradient background for a soft look */
  padding: 50px 20px;
  text-align: center;
  font-family: "Nanum Gothic", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  margin: 0 5%;
  color: #333;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const QuoteSection = styled.div`
  margin-bottom: 30px;

  h3 {
    font-size: 34px;
    margin-bottom: 10px;
    font-family: "Edu QLD Beginner", cursive;
    color: #4a4a4a; /* Slightly lighter text color */
  }

  p {
    font-size: 20px;
    font-style: italic;
    color: #6a6a6a; /* Slightly lighter text color */
  }

  @media (max-width: 767px) {
    h3 {
      font-size: 30px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

const ImageContent = styled.div`
  max-width: 400px;

  img {
    max-width: 100%;
    border-radius: 10px; /* Rounded corners for the image */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Soft shadow for depth */
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

const MessageSection = styled.div`
  margin-bottom: 30px;
  width: 70%;
  margin: auto;
  line-height: 2.5rem;

  p {
    font-size: 20px;
    color: #333;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <QuoteSection>
          <h3>“Recovery is not one and done. It's a lifelong journey that takes place one day, one step at a time.”</h3>
          <p>- Steve Jobs, Mental Health & Adaptations.</p>
        </QuoteSection>

        <ImageContent>
          <img src={FooterImage} alt="Mental Health Illustration" aria-label="Mental Health Illustration" />
        </ImageContent>
      </FooterContent>

      <MessageSection>
        <p>
          Join us on this journey of resilience and renewal, as together, we weave a tapestry of support and compassion. At One Life Healthcare, your well-being is not just our priority; it's our collective mission.
        </p>
      </MessageSection>
    </FooterWrapper>
  );
};

export default Footer;
