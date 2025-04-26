import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroSection = styled.section`
  width: 100%;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background-color: #fbfbfd;
`;

const HeroContent = styled.div`
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Heading = styled.h1`
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--foreground);
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Subheading = styled.p`
  font-size: 20px;
  max-width: 600px;
  color: var(--muted-foreground);
  line-height: 1.5;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.a`
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  text-decoration: none;
  display: inline-block;
  
  &:hover {
    background-color: #0062c3;
  }
`;

const ServicesSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: var(--muted-foreground);
  max-width: 600px;
  margin: 0 auto 50px;
  text-align: center;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const ServiceCard = styled.div`
  background: var(--background);
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
`;

const ServiceIcon = styled.div`
  font-size: 36px;
  margin-bottom: 20px;
  color: var(--primary);
`;

const ServiceTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--foreground);
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: var(--muted-foreground);
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ServiceLink = styled.a`
  color: var(--primary);
  font-weight: 500;
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '→';
    margin-left: 5px;
    transition: transform 0.3s;
  }
  
  &:hover::after {
    transform: translateX(5px);
  }
`;

const TrustSection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #f5f5f7;
`;

const TrustContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClientLogos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  margin: 40px 0;
  
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ClientLogo = styled.div`
  filter: grayscale(1);
  opacity: 0.6;
  transition: all 0.3s;
  width: 120px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    filter: grayscale(0);
    opacity: 1;
  }
  
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const TestimonialCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 20px auto 0;
`;

const TestimonialQuote = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-style: italic;
  color: var(--foreground);
  margin-bottom: 20px;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const TestimonialAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #e1e1e1;
  margin-right: 15px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialInfo = styled.div``;

const TestimonialName = styled.p`
  font-weight: 600;
  color: var(--foreground);
`;

const TestimonialPosition = styled.p`
  font-size: 14px;
  color: var(--muted-foreground);
`;

const ContactSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  background-color: white;
`;

const ContactContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 500px;
  width: 100%;
  margin-top: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  font-size: 16px;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 50px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  
  &:hover {
    background-color: #0062c3;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <Heading>Elevate Your Digital Presence with Powerful Technology Solutions</Heading>
          <Subheading>
            Partner with industry experts to develop bespoke web platforms, 
            implement intelligent AI systems, and execute flawless digital transformations
          </Subheading>
          <ButtonGroup>
            <PrimaryButton href="/contact">Transform Your Business Today →</PrimaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <ServicesSection>
        <SectionTitle>Our Expertise</SectionTitle>
        <SectionDescription>
          Enterprise-grade solutions crafted to accelerate growth and maximize operational efficiency
        </SectionDescription>
        
        <ServicesGrid>
          <ServiceCard>
            <ServiceIcon>💻</ServiceIcon>
            <ServiceTitle>Web Development</ServiceTitle>
            <ServiceDescription>
              Custom websites and web applications designed to enhance your online presence and streamline your business operations.
            </ServiceDescription>
            <ServiceLink href="/services#web-development">Learn more</ServiceLink>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>🤖</ServiceIcon>
            <ServiceTitle>AI Integration</ServiceTitle>
            <ServiceDescription>
              Implement cutting-edge AI solutions to automate processes, gain insights, and deliver personalized experiences.
            </ServiceDescription>
            <ServiceLink href="/services#ai-integration">Learn more</ServiceLink>
          </ServiceCard>
          
          <ServiceCard>
            <ServiceIcon>📱</ServiceIcon>
            <ServiceTitle>Mobile App Development</ServiceTitle>
            <ServiceDescription>
              Native and cross-platform mobile applications that deliver seamless experiences across all devices.
            </ServiceDescription>
            <ServiceLink href="/services#mobile-development">Learn more</ServiceLink>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>
      
      <TrustSection>
        <TrustContent>
          <SectionTitle>Trusted By</SectionTitle>
          <ClientLogos>
            <ClientLogo><img src="https://placehold.co/120x60?text=Client+1" alt="Client 1" /></ClientLogo>
            <ClientLogo><img src="https://placehold.co/120x60?text=Client+2" alt="Client 2" /></ClientLogo>
            <ClientLogo><img src="https://placehold.co/120x60?text=Client+3" alt="Client 3" /></ClientLogo>
            <ClientLogo><img src="https://placehold.co/120x60?text=Client+4" alt="Client 4" /></ClientLogo>
            <ClientLogo><img src="https://placehold.co/120x60?text=Client+5" alt="Client 5" /></ClientLogo>
          </ClientLogos>
          
          <TestimonialCard>
            <TestimonialQuote>
              "Working with 3 PIN transformed our business. Their expertise in web development and AI solutions helped us streamline operations and increase our online conversions by 150%."
            </TestimonialQuote>
            <TestimonialAuthor>
              <TestimonialAvatar>
                <img src="https://placehold.co/50x50?text=JD" alt="John Doe" />
              </TestimonialAvatar>
              <TestimonialInfo>
                <TestimonialName>John Doe</TestimonialName>
                <TestimonialPosition>CEO, TechCorp</TestimonialPosition>
              </TestimonialInfo>
            </TestimonialAuthor>
          </TestimonialCard>
        </TrustContent>
      </TrustSection>
      
      <ContactSection>
        <ContactContent>
          <SectionTitle>Ready to get started?</SectionTitle>
          <SectionDescription>Reach out to us for a quick consultation</SectionDescription>
          
          <ContactForm>
            <FormGroup>
              <Input type="text" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Input type="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <TextArea placeholder="How can we help you?" />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>
        </ContactContent>
      </ContactSection>
    </Container>
  );
};

export default HomePage; 