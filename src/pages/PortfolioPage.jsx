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

const PortfolioSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
`;

const CaseStudyGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 80px;
`;

const CaseStudy = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 992px) {
    flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    align-items: center;
    gap: 60px;
  }
`;

const CaseStudyImage = styled.div`
  width: 100%;
  margin-bottom: 30px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  
  @media (min-width: 992px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const CaseStudyContent = styled.div`
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const CaseStudyTag = styled.span`
  display: inline-block;
  background-color: #f0f0f0;
  color: var(--primary);
  padding: 6px 12px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const CaseStudyTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const CaseStudyDescription = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted-foreground);
  margin-bottom: 24px;
`;

const CaseStudyMeta = styled.div`
  margin-bottom: 30px;
`;

const MetaItem = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const MetaLabel = styled.span`
  font-weight: 600;
  color: var(--foreground);
  width: 120px;
`;

const MetaValue = styled.span`
  color: var(--muted-foreground);
`;

const CaseStudyResults = styled.div`
  background-color: #f5f5f7;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
`;

const ResultsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--foreground);
`;

const ResultsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ResultItem = styled.li`
  padding: 8px 0;
  display: flex;
  align-items: center;
  
  &:before {
    content: '✓';
    color: var(--primary);
    margin-right: 10px;
    font-weight: bold;
  }
`;

const TestimonialQuote = styled.blockquote`
  font-style: italic;
  font-size: 16px;
  line-height: 1.8;
  color: var(--foreground);
  border-left: 3px solid var(--primary);
  padding-left: 20px;
  margin: 30px 0;
`;

const QuoteAuthor = styled.cite`
  display: block;
  font-style: normal;
  font-weight: 600;
  margin-top: 10px;
  color: var(--foreground);
`;

const CaseStudyButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--primary-foreground);
  text-decoration: none;
  border-radius: 50px;
  padding: 12px 24px;
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
  margin: 80px 0;
  
  &:last-child {
    display: none;
  }
`;

const PortfolioPage = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <PageTitle>Our Portfolio</PageTitle>
          <PageDescription>
            Explore our case studies to see how we've helped businesses solve complex problems and achieve tangible results through innovative digital solutions.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <PortfolioSection>
        <CaseStudyGrid>
          {/* Case Study 1 */}
          <div>
            <CaseStudy>
              <CaseStudyImage>
                <img src="https://placehold.co/600x400?text=E-Commerce+Platform" alt="E-Commerce Platform" />
              </CaseStudyImage>
              
              <CaseStudyContent>
                <CaseStudyTag>E-Commerce</CaseStudyTag>
                <CaseStudyTitle>Custom E-Commerce Platform for RetailPlus</CaseStudyTitle>
                <CaseStudyDescription>
                  RetailPlus, a growing fashion retailer, needed a scalable e-commerce platform to support their expanding product line and customer base while ensuring a seamless shopping experience.
                </CaseStudyDescription>
                
                <CaseStudyMeta>
                  <MetaItem>
                    <MetaLabel>Client:</MetaLabel>
                    <MetaValue>RetailPlus</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Industry:</MetaLabel>
                    <MetaValue>Fashion Retail</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Services:</MetaLabel>
                    <MetaValue>Web Development, UI/UX Design, E-commerce Integration</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Timeline:</MetaLabel>
                    <MetaValue>4 months</MetaValue>
                  </MetaItem>
                </CaseStudyMeta>
                
                <CaseStudyResults>
                  <ResultsTitle>Results Delivered</ResultsTitle>
                  <ResultsList>
                    <ResultItem>120% increase in online sales within 3 months of launch</ResultItem>
                    <ResultItem>45% improvement in conversion rate compared to previous platform</ResultItem>
                    <ResultItem>65% reduction in page load time, enhancing user experience</ResultItem>
                    <ResultItem>Seamless integration with inventory management and fulfillment systems</ResultItem>
                  </ResultsList>
                </CaseStudyResults>
                
                <TestimonialQuote>
                  "The 3 PIN team delivered beyond our expectations. Our new e-commerce platform has not only improved the shopping experience for our customers but has significantly boosted our online revenue."
                  <QuoteAuthor>— Emily Johnson, Digital Director at RetailPlus</QuoteAuthor>
                </TestimonialQuote>
                
                <CaseStudyButton href="/contact">Discuss Your Project</CaseStudyButton>
              </CaseStudyContent>
            </CaseStudy>
            <Divider />
          </div>
          
          {/* Case Study 2 */}
          <div>
            <CaseStudy reverse>
              <CaseStudyImage>
                <img src="https://placehold.co/600x400?text=AI+Chatbot" alt="AI Customer Service Chatbot" />
              </CaseStudyImage>
              
              <CaseStudyContent>
                <CaseStudyTag>AI Integration</CaseStudyTag>
                <CaseStudyTitle>AI-Powered Customer Service Chatbot for FinTech</CaseStudyTitle>
                <CaseStudyDescription>
                  A leading fintech company was facing challenges with their customer support system. They needed an intelligent solution to handle routine inquiries, freeing up their human agents to focus on complex issues.
                </CaseStudyDescription>
                
                <CaseStudyMeta>
                  <MetaItem>
                    <MetaLabel>Client:</MetaLabel>
                    <MetaValue>SecureFinance</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Industry:</MetaLabel>
                    <MetaValue>Financial Technology</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Services:</MetaLabel>
                    <MetaValue>AI Development, Natural Language Processing, Integration</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Timeline:</MetaLabel>
                    <MetaValue>3 months</MetaValue>
                  </MetaItem>
                </CaseStudyMeta>
                
                <CaseStudyResults>
                  <ResultsTitle>Results Delivered</ResultsTitle>
                  <ResultsList>
                    <ResultItem>75% of routine customer inquiries now handled by the AI chatbot</ResultItem>
                    <ResultItem>42% reduction in customer support costs</ResultItem>
                    <ResultItem>90% customer satisfaction rate with chatbot interactions</ResultItem>
                    <ResultItem>24/7 support availability without increasing staffing costs</ResultItem>
                  </ResultsList>
                </CaseStudyResults>
                
                <TestimonialQuote>
                  "The AI chatbot developed by 3 PIN has revolutionized our customer service approach. Our team can now focus on complex issues while the chatbot handles routine inquiries with impressive accuracy."
                  <QuoteAuthor>— Robert Chen, CTO at SecureFinance</QuoteAuthor>
                </TestimonialQuote>
                
                <CaseStudyButton href="/contact">Discuss Your Project</CaseStudyButton>
              </CaseStudyContent>
            </CaseStudy>
            <Divider />
          </div>
          
          {/* Case Study 3 */}
          <div>
            <CaseStudy>
              <CaseStudyImage>
                <img src="https://placehold.co/600x400?text=Mobile+App" alt="Healthcare Mobile App" />
              </CaseStudyImage>
              
              <CaseStudyContent>
                <CaseStudyTag>Mobile Development</CaseStudyTag>
                <CaseStudyTitle>Patient Engagement Mobile App for HealthFirst</CaseStudyTitle>
                <CaseStudyDescription>
                  HealthFirst, a regional healthcare provider, wanted to improve patient engagement and streamline appointment scheduling through a mobile application that would integrate with their existing systems.
                </CaseStudyDescription>
                
                <CaseStudyMeta>
                  <MetaItem>
                    <MetaLabel>Client:</MetaLabel>
                    <MetaValue>HealthFirst Medical Group</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Industry:</MetaLabel>
                    <MetaValue>Healthcare</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Services:</MetaLabel>
                    <MetaValue>Mobile App Development, UX/UI Design, Systems Integration</MetaValue>
                  </MetaItem>
                  <MetaItem>
                    <MetaLabel>Timeline:</MetaLabel>
                    <MetaValue>5 months</MetaValue>
                  </MetaItem>
                </CaseStudyMeta>
                
                <CaseStudyResults>
                  <ResultsTitle>Results Delivered</ResultsTitle>
                  <ResultsList>
                    <ResultItem>85% of patients actively using the app within 6 months of launch</ResultItem>
                    <ResultItem>30% reduction in missed appointments</ResultItem>
                    <ResultItem>68% of appointments now booked through the app</ResultItem>
                    <ResultItem>Improved patient satisfaction scores by 40%</ResultItem>
                  </ResultsList>
                </CaseStudyResults>
                
                <TestimonialQuote>
                  "3 PIN delivered a mobile app that exceeded our expectations. The intuitive interface and seamless integration with our systems have transformed how we engage with patients and manage appointments."
                  <QuoteAuthor>— Dr. Lisa Morgan, Director of Patient Services at HealthFirst</QuoteAuthor>
                </TestimonialQuote>
                
                <CaseStudyButton href="/contact">Discuss Your Project</CaseStudyButton>
              </CaseStudyContent>
            </CaseStudy>
          </div>
        </CaseStudyGrid>
      </PortfolioSection>
    </Container>
  );
};

export default PortfolioPage; 