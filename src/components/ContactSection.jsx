import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  background: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 4px;
  background: #333;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;

const ContactSection = () => {
  return (
    <ContactContainer id="contact">
      <Title>Contact Me</Title>
      <Form>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <TextArea rows="5" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default ContactSection;
