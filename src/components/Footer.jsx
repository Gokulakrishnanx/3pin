import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #f5f5f7;
  padding: 60px 20px 40px;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 40px 15px 30px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterColumn = styled.div`
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
  
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const FooterDescription = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin-bottom: 24px;
`;

const FooterHeading = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--foreground);
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 12px;
  
  a {
    color: var(--muted-foreground);
    text-decoration: none;
    font-size: 14px;
    transition: color 0.3s;
    display: inline-block;
    padding: 2px 0;
    
    &:hover {
      color: var(--primary);
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e5e5e5;
  color: var(--foreground);
  font-size: 18px;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  margin-bottom: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: 12px;
  font-size: 14px;
  color: var(--muted-foreground);
  
  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  color: var(--primary);
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 60px auto 0;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 40px;
  }
`;

const Copyright = styled.p`
  font-size: 14px;
  color: var(--muted-foreground);
  
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    font-size: 14px;
    color: var(--muted-foreground);
    text-decoration: none;
    
    &:hover {
      color: var(--primary);
    }
  }
  
  @media (max-width: 480px) {
    gap: 15px;
    
    a {
      font-size: 13px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>3 PIN</FooterLogo>
          <FooterDescription>
            We provide innovative web and AI solutions to help businesses grow in the digital landscape.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="#" aria-label="LinkedIn">in</SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">X</SocialIcon>
            <SocialIcon href="#" aria-label="Facebook">f</SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">ig</SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Services</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/services#web-development">Web Development</Link></FooterLink>
            <FooterLink><Link to="/services#ai-integration">AI Integration</Link></FooterLink>
            <FooterLink><Link to="/services#mobile-development">Mobile App Development</Link></FooterLink>
            <FooterLink><Link to="/services">View All Services</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLinks>
            <FooterLink><Link to="/about">About Us</Link></FooterLink>
            <FooterLink><Link to="/portfolio">Our Work</Link></FooterLink>
            <FooterLink><Link to="/testimonials">Testimonials</Link></FooterLink>
            <FooterLink><Link to="/blog">Blog</Link></FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <ContactInfo>
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              123 Tech Street, San Francisco, CA 94107
            </ContactItem>
            <ContactItem>
              <ContactIcon>📱</ContactIcon>
              (555) 123-4567
            </ContactItem>
            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              info@3pin.com
            </ContactItem>
          </ContactInfo>
          <Link to="/contact" style={{ 
            color: 'var(--primary)',
            fontWeight: 500,
            textDecoration: 'none',
            fontSize: '14px'
          }}>
            Get in Touch →
          </Link>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar>
        <Copyright>© {new Date().getFullYear()} 3 PIN. All rights reserved.</Copyright>
        <LegalLinks>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </LegalLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 