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

const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--foreground);
`;

const TextContent = styled.div`
  margin-bottom: 40px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted-foreground);
  margin-bottom: 20px;
`;

const MissionSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin: 50px 0;
`;

const MissionCard = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const MissionTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const ValuesList = styled.ul`
  margin: 20px 0;
  padding-left: 20px;
`;

const ValueItem = styled.li`
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 12px;
  color: var(--muted-foreground);
`;

const TeamSection = styled.div`
  margin: 50px 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamMemberImage = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin: 0 auto 20px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TeamMemberName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--foreground);
`;

const TeamMemberPosition = styled.p`
  font-size: 16px;
  color: var(--primary);
  margin-bottom: 12px;
`;

const TeamMemberBio = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: var(--muted-foreground);
`;

const USPSection = styled.div`
  margin: 60px 0;
  background-color: #f5f5f7;
  border-radius: 12px;
  padding: 40px;
`;

const USPGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 30px;
`;

const USPItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const USPIcon = styled.div`
  font-size: 32px;
  margin-bottom: 16px;
  color: var(--primary);
`;

const USPTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--foreground);
`;

const USPDescription = styled.p`
  font-size: 15px;
  line-height: 1.6;
  color: var(--muted-foreground);
`;

const AboutPage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <PageTitle>About Us</PageTitle>
          <PageDescription>
            Learn about our journey, our mission, and the dedicated team behind 3 PIN's innovative solutions.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <Section>
        <SectionTitle>Our Story</SectionTitle>
        <TextContent>
          <Paragraph>
            Founded in 2018, 3 PIN began with a simple vision: to create technology solutions that genuinely solve real-world problems for businesses of all sizes. Our founders, with over 20 years of combined experience in web development and artificial intelligence, recognized a gap in the market for integrated solutions that combined both disciplines.
          </Paragraph>
          <Paragraph>
            What started as a small team of passionate developers has grown into a full-service digital agency, serving clients across industries from healthcare to e-commerce, finance to education. Throughout our journey, we've maintained our core commitment to quality, innovation, and client satisfaction.
          </Paragraph>
          <Paragraph>
            Today, 3 PIN is recognized as a leader in creating seamless digital experiences that leverage the latest technologies while remaining focused on practical business outcomes and measurable results.
          </Paragraph>
        </TextContent>
        
        <MissionSection>
          <MissionCard>
            <MissionTitle>Our Mission</MissionTitle>
            <Paragraph>
              To empower businesses through innovative digital solutions that drive growth, enhance efficiency, and create exceptional user experiences.
            </Paragraph>
          </MissionCard>
          
          <MissionCard>
            <MissionTitle>Our Vision</MissionTitle>
            <Paragraph>
              To be the premier partner for businesses seeking digital transformation, recognized for our technical excellence, creative approach, and measurable impact on our clients' success.
            </Paragraph>
          </MissionCard>
          
          <MissionCard>
            <MissionTitle>Our Values</MissionTitle>
            <ValuesList>
              <ValueItem><strong>Innovation:</strong> We constantly explore new technologies and approaches.</ValueItem>
              <ValueItem><strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.</ValueItem>
              <ValueItem><strong>Integrity:</strong> We build relationships based on honesty, transparency, and respect.</ValueItem>
              <ValueItem><strong>Client-Focus:</strong> We measure our success by our clients' success.</ValueItem>
            </ValuesList>
          </MissionCard>
        </MissionSection>
        
        <TeamSection>
          <SectionTitle>Meet the Team</SectionTitle>
          <Paragraph>
            Our diverse team of experts brings together a wealth of experience and passion for creating exceptional digital solutions.
          </Paragraph>
          
          <TeamGrid>
            <TeamMember>
              <TeamMemberImage>
                <img src="https://placehold.co/180x180?text=JD" alt="John Doe" />
              </TeamMemberImage>
              <TeamMemberName>John Doe</TeamMemberName>
              <TeamMemberPosition>Founder & CEO</TeamMemberPosition>
              <TeamMemberBio>
                With over 15 years of experience in software development and business strategy, John leads our vision and growth.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>
                <img src="https://placehold.co/180x180?text=JS" alt="Jane Smith" />
              </TeamMemberImage>
              <TeamMemberName>Jane Smith</TeamMemberName>
              <TeamMemberPosition>CTO</TeamMemberPosition>
              <TeamMemberBio>
                Jane oversees our technical strategy and ensures we stay at the cutting edge of web and AI technologies.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>
                <img src="https://placehold.co/180x180?text=MJ" alt="Michael Johnson" />
              </TeamMemberImage>
              <TeamMemberName>Michael Johnson</TeamMemberName>
              <TeamMemberPosition>Lead Designer</TeamMemberPosition>
              <TeamMemberBio>
                Michael brings his artistic vision and user experience expertise to create beautiful, functional interfaces.
              </TeamMemberBio>
            </TeamMember>
            
            <TeamMember>
              <TeamMemberImage>
                <img src="https://placehold.co/180x180?text=SW" alt="Sarah Wilson" />
              </TeamMemberImage>
              <TeamMemberName>Sarah Wilson</TeamMemberName>
              <TeamMemberPosition>AI Specialist</TeamMemberPosition>
              <TeamMemberBio>
                Sarah leads our AI integration projects with her deep knowledge of machine learning and data science.
              </TeamMemberBio>
            </TeamMember>
          </TeamGrid>
        </TeamSection>
        
        <USPSection>
          <SectionTitle>Why Choose Us</SectionTitle>
          <Paragraph>
            Here's what sets us apart and makes us the partner of choice for businesses seeking digital excellence:
          </Paragraph>
          
          <USPGrid>
            <USPItem>
              <USPIcon>🔍</USPIcon>
              <USPTitle>Deep Technical Expertise</USPTitle>
              <USPDescription>
                Our team includes specialists in the latest web technologies, AI frameworks, and digital strategy.
              </USPDescription>
            </USPItem>
            
            <USPItem>
              <USPIcon>🎯</USPIcon>
              <USPTitle>Results-Driven Approach</USPTitle>
              <USPDescription>
                We focus on measurable outcomes, with clear KPIs and performance metrics for every project.
              </USPDescription>
            </USPItem>
            
            <USPItem>
              <USPIcon>🔄</USPIcon>
              <USPTitle>Agile Methodology</USPTitle>
              <USPDescription>
                Our iterative development process ensures flexibility, speed, and continuous improvement.
              </USPDescription>
            </USPItem>
            
            <USPItem>
              <USPIcon>🤝</USPIcon>
              <USPTitle>Collaborative Partnership</USPTitle>
              <USPDescription>
                We work closely with our clients, becoming an extension of their team rather than just a vendor.
              </USPDescription>
            </USPItem>
          </USPGrid>
        </USPSection>
      </Section>
    </Container>
  );
};

export default AboutPage; 