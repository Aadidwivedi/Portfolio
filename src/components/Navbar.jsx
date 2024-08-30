import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #333;
  color: #fff;
`;

const NavLinks = styled.div`
  a {
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>Logo</div>
      <NavLinks>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;