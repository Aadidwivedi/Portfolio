import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4f4f4;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #555;
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <Title>Welcome to My Portfolio</Title>
      <Subtitle>I'm a web developer specializing in React and modern technologies.</Subtitle>
    </HeroContainer>
  );
};

export default HeroSection;
