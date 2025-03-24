import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const backgroundImage = '/assets/images/background_image.jpg';

// Styled Components
const HomeContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${backgroundImage}) no-repeat center center/cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  // Overlay to brighten the background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1); /* Light overlay for brightness */
    backdrop-filter: brightness(1.2) saturate(1.3); /* Enhance image */
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  z-index: 2;
  text-align: center;
  color: #fff;
  padding: 40px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.15); /* Soft transparent background */
  backdrop-filter: blur(10px); /* Frosted glass effect */
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  max-width: 80%;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 30px;
    max-width: 90%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: linear-gradient(135deg, rgb(50, 83, 136), rgb(6, 80, 114));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  margin: 0 auto 2rem;
  max-width: 600px;
  line-height: 1.6;
  text-align: center;
  color: rgb(71, 88, 122);

  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 90%;
  }
`;

const GetStartedButton = styled(motion.button)`
  padding: 12px 40px;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  background: linear-gradient(135deg, rgb(56, 100, 130), rgb(138, 81, 162));
  color: #fff;
  cursor: pointer;
  transition: 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: linear-gradient(135deg, rgb(138, 81, 162), rgb(56, 100, 130)); /* Reverse gradient */
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }
`;

// Home Component
const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <HeroContent
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <HeroTitle as={motion.h1} initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }}>
          Welcome to Samvaad
        </HeroTitle>
        <HeroDescription>
          Connect with friends, share moments, and experience seamless communication in a vibrant, modern way.
        </HeroDescription>
        <GetStartedButton onClick={() => navigate('/login')} whileHover={{ scale: 1.1 }}>
          Get Started
        </GetStartedButton>
      </HeroContent>
    </HomeContainer>
  );
};

export default Home;
