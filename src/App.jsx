import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
`;

const App = () => {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </AppContainer>
  );
};

export default App;
