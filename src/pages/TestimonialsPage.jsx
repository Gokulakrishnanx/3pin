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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const QuoteIcon = styled.div`
  font-size: 36px;
  color: var(--primary);
  opacity: 0.2;
  margin-bottom: 16px;
`;

const TestimonialQuote = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--foreground);
  font-style: italic;
  margin-bottom: 24px;
  flex-grow: 1;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const AuthorAvatar = styled.div`
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

const AuthorInfo = styled.div``;

const AuthorName = styled.p`
  font-weight: 600;
  color: var(--foreground);
`;

const AuthorPosition = styled.p`
  font-size: 14px;
  color: var(--muted-foreground);
`;

const CompanyLogo = styled.div`
  height: 40px;
  margin-top: 16px;
  
  img {
    height: 100%;
    width: auto;
  }
`;

const VideoTestimonialSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px 80px;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 40px;
  color: var(--foreground);
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const VideoCard = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const VideoThumbnail = styled.div`
  position: relative;
  padding-top: 56.25%; // 16:9 aspect ratio
  background-color: #f0f0f0;
  cursor: pointer;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  background-color: var(--primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  
  &:after {
    content: "▶";
    margin-left: 4px;
  }
`;

const VideoInfo = styled.div`
  padding: 20px;
`;

const VideoTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--foreground);
`;

const ClientInfo = styled.p`
  font-size: 14px;
  color: var(--muted-foreground);
`;

const CTASection = styled.section`
  width: 100%;
  background-color: #f5f5f7;
  padding: 80px 20px;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin-bottom: 32px;
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--primary-foreground);
  text-decoration: none;
  border-radius: 50px;
  padding: 14px 32px;
  font-size: 16px;
  font-weight: 500;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0062c3;
  }
`;

const TestimonialsPage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <PageTitle>Client Testimonials</PageTitle>
          <PageDescription>
            Hear what our clients have to say about their experience working with 3 PIN and the results we've delivered.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <TestimonialsGrid>
        <TestimonialCard>
          <QuoteIcon>"</QuoteIcon>
          <TestimonialQuote>
            3 PIN has been an incredible partner for our digital transformation journey. Their team understood our business needs perfectly and delivered a solution that exceeded our expectations. The e-commerce platform they built has significantly increased our online revenue.
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>
              <img src="https://placehold.co/50x50?text=EJ" alt="Emily Johnson" />
            </AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Emily Johnson</AuthorName>
              <AuthorPosition>Digital Director, RetailPlus</AuthorPosition>
            </AuthorInfo>
          </TestimonialAuthor>
          <CompanyLogo>
            <img src="https://placehold.co/120x40?text=RetailPlus" alt="RetailPlus logo" />
          </CompanyLogo>
        </TestimonialCard>
        
        <TestimonialCard>
          <QuoteIcon>"</QuoteIcon>
          <TestimonialQuote>
            The AI chatbot developed by 3 PIN has revolutionized our customer service approach. Our team can now focus on complex issues while the chatbot handles routine inquiries with impressive accuracy. The ROI has been outstanding.
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>
              <img src="https://placehold.co/50x50?text=RC" alt="Robert Chen" />
            </AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Robert Chen</AuthorName>
              <AuthorPosition>CTO, SecureFinance</AuthorPosition>
            </AuthorInfo>
          </TestimonialAuthor>
          <CompanyLogo>
            <img src="https://placehold.co/120x40?text=SecureFinance" alt="SecureFinance logo" />
          </CompanyLogo>
        </TestimonialCard>
        
        <TestimonialCard>
          <QuoteIcon>"</QuoteIcon>
          <TestimonialQuote>
            3 PIN delivered a mobile app that exceeded our expectations. The intuitive interface and seamless integration with our systems have transformed how we engage with patients and manage appointments. Patient satisfaction scores have improved dramatically.
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>
              <img src="https://placehold.co/50x50?text=LM" alt="Dr. Lisa Morgan" />
            </AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Dr. Lisa Morgan</AuthorName>
              <AuthorPosition>Director of Patient Services, HealthFirst</AuthorPosition>
            </AuthorInfo>
          </TestimonialAuthor>
          <CompanyLogo>
            <img src="https://placehold.co/120x40?text=HealthFirst" alt="HealthFirst logo" />
          </CompanyLogo>
        </TestimonialCard>
        
        <TestimonialCard>
          <QuoteIcon>"</QuoteIcon>
          <TestimonialQuote>
            Working with 3 PIN was a game-changer for our startup. Their technical expertise and strategic guidance helped us launch a product that our users love. Their attention to detail and commitment to quality sets them apart from other agencies.
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>
              <img src="https://placehold.co/50x50?text=DK" alt="David Kim" />
            </AuthorAvatar>
            <AuthorInfo>
              <AuthorName>David Kim</AuthorName>
              <AuthorPosition>Co-Founder, TechStartup</AuthorPosition>
            </AuthorInfo>
          </TestimonialAuthor>
          <CompanyLogo>
            <img src="https://placehold.co/120x40?text=TechStartup" alt="TechStartup logo" />
          </CompanyLogo>
        </TestimonialCard>
        
        <TestimonialCard>
          <QuoteIcon>"</QuoteIcon>
          <TestimonialQuote>
            The 3 PIN team brought our vision to life with their innovative approach and technical expertise. They were responsive, collaborative, and truly invested in our success. The website they built has transformed our online presence.
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>
              <img src="https://placehold.co/50x50?text=SP" alt="Sarah Parker" />
            </AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Sarah Parker</AuthorName>
              <AuthorPosition>Marketing Director, GlobalBrand</AuthorPosition>
            </AuthorInfo>
          </TestimonialAuthor>
          <CompanyLogo>
            <img src="https://placehold.co/120x40?text=GlobalBrand" alt="GlobalBrand logo" />
          </CompanyLogo>
        </TestimonialCard>
        
        <TestimonialCard>
          <QuoteIcon>"</QuoteIcon>
          <TestimonialQuote>
            3 PIN's expertise in AI integration helped us automate our data analysis processes, saving countless hours and providing deeper insights than we ever had before. Their team was professional, knowledgeable, and a pleasure to work with.
          </TestimonialQuote>
          <TestimonialAuthor>
            <AuthorAvatar>
              <img src="https://placehold.co/50x50?text=MT" alt="Michael Torres" />
            </AuthorAvatar>
            <AuthorInfo>
              <AuthorName>Michael Torres</AuthorName>
              <AuthorPosition>Data Science Lead, AnalyticsInc</AuthorPosition>
            </AuthorInfo>
          </TestimonialAuthor>
          <CompanyLogo>
            <img src="https://placehold.co/120x40?text=AnalyticsInc" alt="AnalyticsInc logo" />
          </CompanyLogo>
        </TestimonialCard>
      </TestimonialsGrid>
      
      <VideoTestimonialSection>
        <SectionTitle>Video Testimonials</SectionTitle>
        <VideoGrid>
          <VideoCard>
            <VideoThumbnail>
              <img src="https://placehold.co/400x225?text=Testimonial+1" alt="RetailPlus Video Testimonial" />
              <PlayButton />
            </VideoThumbnail>
            <VideoInfo>
              <VideoTitle>RetailPlus Success Story</VideoTitle>
              <ClientInfo>Emily Johnson, Digital Director</ClientInfo>
            </VideoInfo>
          </VideoCard>
          
          <VideoCard>
            <VideoThumbnail>
              <img src="https://placehold.co/400x225?text=Testimonial+2" alt="SecureFinance Video Testimonial" />
              <PlayButton />
            </VideoThumbnail>
            <VideoInfo>
              <VideoTitle>AI Chatbot Implementation</VideoTitle>
              <ClientInfo>Robert Chen, CTO at SecureFinance</ClientInfo>
            </VideoInfo>
          </VideoCard>
          
          <VideoCard>
            <VideoThumbnail>
              <img src="https://placehold.co/400x225?text=Testimonial+3" alt="HealthFirst Video Testimonial" />
              <PlayButton />
            </VideoThumbnail>
            <VideoInfo>
              <VideoTitle>Healthcare App Case Study</VideoTitle>
              <ClientInfo>Dr. Lisa Morgan, HealthFirst</ClientInfo>
            </VideoInfo>
          </VideoCard>
        </VideoGrid>
      </VideoTestimonialSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to create your success story?</CTATitle>
          <CTADescription>
            Join our satisfied clients and experience the difference of working with a team dedicated to your success.
          </CTADescription>
          <CTAButton href="/contact">Get Started</CTAButton>
        </CTAContent>
      </CTASection>
    </Container>
  );
};

export default TestimonialsPage; 