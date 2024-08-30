import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
`;

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <Title>About Me</Title>
      <Paragraph>
        I am a passionate web developer with experience in building responsive and modern websites. 
        My expertise lies in React, styled-components, and creating seamless user experiences.
      </Paragraph>
    </AboutContainer>
  );
};

export default AboutSection;
