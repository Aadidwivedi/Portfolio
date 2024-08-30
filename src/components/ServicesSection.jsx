import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  padding: 4rem 2rem;
  background: #f9f9f9;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const ServiceCard = styled.div`
  display: inline-block;
  width: 30%;
  padding: 1rem;
  margin: 1rem;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ServicesSection = () => {
  return (
    <ServicesContainer id="services">
      <Title>My Services</Title>
      <ServiceCard>
        <ServiceTitle>Web Development</ServiceTitle>
        <ServiceDescription>Creating responsive and modern websites using React and styled-components.</ServiceDescription>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>UI/UX Design</ServiceTitle>
        <ServiceDescription>Designing intuitive and engaging user interfaces for better user experience.</ServiceDescription>
      </ServiceCard>
      <ServiceCard>
        <ServiceTitle>Consulting</ServiceTitle>
        <ServiceDescription>Providing expert advice on web technologies and project strategy.</ServiceDescription>
      </ServiceCard>
    </ServicesContainer>
  );
};

export default ServicesSection;
