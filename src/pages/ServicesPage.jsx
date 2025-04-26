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
  padding: 60px 20px;
  background-color: #fbfbfd;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const PageDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: var(--muted-foreground);
`;

const ServicesSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
`;

const ServiceCategory = styled.div`
  margin-bottom: 100px;
  scroll-margin-top: 80px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ServiceIcon = styled.div`
  font-size: 40px;
  margin-right: 24px;
  
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const ServiceInfo = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  color: var(--foreground);
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin-bottom: 24px;
`;

const ServiceFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 24px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--foreground);
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: var(--primary);
    margin-right: 10px;
    font-weight: bold;
  }
`;

const FeatureDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted-foreground);
`;

const ServiceAudience = styled.div`
  background-color: #f5f5f7;
  border-radius: 12px;
  padding: 30px;
  margin-bottom: 30px;
`;

const AudienceTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const AudienceList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AudienceItem = styled.li`
  padding: 8px 0;
  color: var(--muted-foreground);
  font-size: 15px;
  display: flex;
  align-items: center;
  
  &:before {
    content: '•';
    color: var(--primary);
    font-size: 20px;
    margin-right: 10px;
  }
`;

const CtaButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--primary-foreground);
  text-decoration: none;
  border-radius: 50px;
  padding: 12px 28px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0062c3;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: var(--border);
  margin: 60px 0;
`;

const ServicesPage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <PageTitle>Our Services</PageTitle>
          <PageDescription>
            We provide a comprehensive suite of digital solutions to help your business thrive in today's technology-driven world. 
            From custom web development to cutting-edge AI integration, we have the expertise to bring your vision to life.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <ServicesSection>
        <ServiceCategory id="web-development">
          <ServiceHeader>
            <ServiceIcon>💻</ServiceIcon>
            <ServiceInfo>
              <ServiceTitle>Web Development</ServiceTitle>
              <ServiceDescription>
                We create custom, responsive websites and web applications that are designed to meet your business objectives, 
                enhance user experience, and drive conversions. Our development process focuses on performance, 
                scalability, and maintainability to ensure your web presence stands out from the competition.
              </ServiceDescription>
            </ServiceInfo>
          </ServiceHeader>
          
          <ServiceFeatures>
            <FeatureCard>
              <FeatureTitle>Custom Website Design</FeatureTitle>
              <FeatureDescription>
                Unique websites tailored to your brand identity and business goals, with intuitive navigation and engaging user experiences.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>E-commerce Solutions</FeatureTitle>
              <FeatureDescription>
                Robust online stores with secure payment gateways, inventory management, and customer account features.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>Web Applications</FeatureTitle>
              <FeatureDescription>
                Custom web applications that automate business processes, manage data, and provide valuable analytics.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>CMS Implementation</FeatureTitle>
              <FeatureDescription>
                User-friendly content management systems that allow you to easily update and manage your website content.
              </FeatureDescription>
            </FeatureCard>
          </ServiceFeatures>
          
          <ServiceAudience>
            <AudienceTitle>Ideal For:</AudienceTitle>
            <AudienceList>
              <AudienceItem>Startups looking to establish their online presence</AudienceItem>
              <AudienceItem>Businesses needing to modernize their outdated websites</AudienceItem>
              <AudienceItem>Companies wanting to create custom web applications</AudienceItem>
              <AudienceItem>Organizations needing e-commerce solutions</AudienceItem>
            </AudienceList>
          </ServiceAudience>
          
          <CtaButton href="/contact">Request a Quote</CtaButton>
        </ServiceCategory>
        
        <Divider />
        
        <ServiceCategory id="ai-integration">
          <ServiceHeader>
            <ServiceIcon>🤖</ServiceIcon>
            <ServiceInfo>
              <ServiceTitle>AI Integration</ServiceTitle>
              <ServiceDescription>
                Harness the power of artificial intelligence to transform your business operations, enhance customer experiences,
                and gain valuable insights from your data. Our AI solutions are designed to solve real business problems and 
                provide measurable results.
              </ServiceDescription>
            </ServiceInfo>
          </ServiceHeader>
          
          <ServiceFeatures>
            <FeatureCard>
              <FeatureTitle>Chatbots & Virtual Assistants</FeatureTitle>
              <FeatureDescription>
                Intelligent conversational interfaces that provide 24/7 customer support, answer inquiries, and guide users through processes.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>Predictive Analytics</FeatureTitle>
              <FeatureDescription>
                AI-powered analysis of your data to forecast trends, identify opportunities, and make data-driven decisions.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>Natural Language Processing</FeatureTitle>
              <FeatureDescription>
                Solutions that analyze and understand text data from customer feedback, social media, and other sources.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>Computer Vision Applications</FeatureTitle>
              <FeatureDescription>
                Systems that can analyze and interpret visual data for quality control, security, or other business applications.
              </FeatureDescription>
            </FeatureCard>
          </ServiceFeatures>
          
          <ServiceAudience>
            <AudienceTitle>Ideal For:</AudienceTitle>
            <AudienceList>
              <AudienceItem>Businesses looking to automate customer support</AudienceItem>
              <AudienceItem>Companies wanting to leverage their data for predictions</AudienceItem>
              <AudienceItem>Organizations seeking to optimize operations with AI</AudienceItem>
              <AudienceItem>Businesses needing personalized customer experiences</AudienceItem>
            </AudienceList>
          </ServiceAudience>
          
          <CtaButton href="/contact">Schedule a Demo</CtaButton>
        </ServiceCategory>
        
        <Divider />
        
        <ServiceCategory id="mobile-development">
          <ServiceHeader>
            <ServiceIcon>📱</ServiceIcon>
            <ServiceInfo>
              <ServiceTitle>Mobile App Development</ServiceTitle>
              <ServiceDescription>
                We design and develop native and cross-platform mobile applications that provide seamless user experiences
                across all devices. Our mobile solutions are built with performance, usability, and scalability in mind to
                ensure your app stands out in today's competitive market.
              </ServiceDescription>
            </ServiceInfo>
          </ServiceHeader>
          
          <ServiceFeatures>
            <FeatureCard>
              <FeatureTitle>Native iOS & Android Apps</FeatureTitle>
              <FeatureDescription>
                Platform-specific applications optimized for performance and user experience on each operating system.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>Cross-Platform Development</FeatureTitle>
              <FeatureDescription>
                Efficient solutions that work across multiple platforms from a single codebase, reducing development time and cost.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>Mobile UX/UI Design</FeatureTitle>
              <FeatureDescription>
                Intuitive, user-friendly interfaces designed specifically for mobile users, following platform guidelines and best practices.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureTitle>App Maintenance & Updates</FeatureTitle>
              <FeatureDescription>
                Ongoing support to ensure your app remains secure, up-to-date, and compatible with the latest OS versions.
              </FeatureDescription>
            </FeatureCard>
          </ServiceFeatures>
          
          <ServiceAudience>
            <AudienceTitle>Ideal For:</AudienceTitle>
            <AudienceList>
              <AudienceItem>Businesses wanting to reach customers through mobile</AudienceItem>
              <AudienceItem>Companies needing internal mobile solutions for employees</AudienceItem>
              <AudienceItem>Startups with innovative mobile app ideas</AudienceItem>
              <AudienceItem>Organizations looking to complement their web presence</AudienceItem>
            </AudienceList>
          </ServiceAudience>
          
          <CtaButton href="/contact">Discuss Your Project</CtaButton>
        </ServiceCategory>
      </ServicesSection>
    </Container>
  );
};

export default ServicesPage; 