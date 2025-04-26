import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 60px 15px;
  }
  
  @media (max-width: 480px) {
    padding: 40px 15px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 16px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
  max-width: 700px;
  margin: 0 auto 60px;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  @media (max-width: 480px) {
    gap: 30px;
  }
`;

const ContactForm = styled.form`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 30px;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
  
  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
  
  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 15px;
    min-height: 120px;
  }
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 28px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 12px 20px;
    font-size: 15px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const InfoCard = styled.div`
  background: #f9f9f9;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  
  @media (max-width: 480px) {
    padding: 20px;
    gap: 12px;
  }
`;

const InfoIcon = styled.div`
  font-size: 24px;
  color: #3498db;
  
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
`;

const InfoText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Map = styled.div`
  margin-top: 30px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  background: #f0f0f0;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  
  @media (max-width: 768px) {
    height: 250px;
  }
  
  @media (max-width: 480px) {
    height: 200px;
    margin-top: 20px;
  }
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Description>
        Have questions or need assistance? We're here to help. Fill out the form below or use the contact information provided.
      </Description>
      
      <ContentWrapper>
        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea 
              id="message" 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
        
        <ContactInfo>
          <InfoCard>
            <InfoIcon>📞</InfoIcon>
            <InfoContent>
              <InfoTitle>Phone</InfoTitle>
              <InfoText>+1 (555) 123-4567</InfoText>
              <InfoText>Monday-Friday, 9am-5pm EST</InfoText>
            </InfoContent>
          </InfoCard>
          
          <InfoCard>
            <InfoIcon>✉️</InfoIcon>
            <InfoContent>
              <InfoTitle>Email</InfoTitle>
              <InfoText>support@3pin.com</InfoText>
              <InfoText>sales@3pin.com</InfoText>
            </InfoContent>
          </InfoCard>
          
          <InfoCard>
            <InfoIcon>📍</InfoIcon>
            <InfoContent>
              <InfoTitle>Office</InfoTitle>
              <InfoText>123 Business Avenue, Suite 100</InfoText>
              <InfoText>New York, NY 10001</InfoText>
            </InfoContent>
          </InfoCard>
          
          <Map>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215689262603!2d-73.98823492426876!3d40.74844097138802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9ac1f1f7f%3A0x7e33ff05491b61!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1718117230044!5m2!1sen!2sus" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </Map>
        </ContactInfo>
      </ContentWrapper>
    </Container>
  );
};

export default ContactPage; 