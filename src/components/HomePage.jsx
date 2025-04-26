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
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
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

const PrimaryButton = styled.button`
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0062c3;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: 50px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const FeaturesSection = styled.section`
  width: 100%;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeaturesSectionHeading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  max-width: 800px;
`;

const FeaturesSectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const FeaturesSectionSubtitle = styled.p`
  font-size: 18px;
  color: var(--muted-foreground);
  max-width: 600px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const FeatureCard = styled.div`
  background: var(--background);
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--foreground);
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  color: var(--muted-foreground);
  line-height: 1.6;
`;

const CTASection = styled.section`
  width: 100%;
  background-color: var(--secondary);
  padding: 80px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTAContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: var(--foreground);
`;

const CTADescription = styled.p`
  font-size: 18px;
  color: var(--muted-foreground);
  max-width: 500px;
`;

const HomePage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <Heading>Welcome to 3 PIN</Heading>
          <Subheading>
            Innovative solutions designed with simplicity and elegance in mind.
          </Subheading>
          <ButtonGroup>
            <PrimaryButton>Learn More</PrimaryButton>
            <SecondaryButton>Watch Video</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
      </HeroSection>
      
      <FeaturesSection>
        <FeaturesSectionHeading>
          <FeaturesSectionTitle>Features</FeaturesSectionTitle>
          <FeaturesSectionSubtitle>
            Designed for a seamless experience with incredible attention to detail.
          </FeaturesSectionSubtitle>
        </FeaturesSectionHeading>
        
        <FeaturesGrid>
          <FeatureCard>
            <FeatureTitle>Seamless Experience</FeatureTitle>
            <FeatureDescription>
              Our products are designed to work together, creating a seamless experience across all your devices.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>Innovative Technology</FeatureTitle>
            <FeatureDescription>
              Cutting-edge technology that pushes boundaries while maintaining intuitive usability.
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureTitle>Premium Quality</FeatureTitle>
            <FeatureDescription>
              Meticulously crafted with premium materials and attention to every detail.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to get started?</CTATitle>
          <CTADescription>
            Join thousands of satisfied customers using our products every day.
          </CTADescription>
          <PrimaryButton>Get Started</PrimaryButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default HomePage; 