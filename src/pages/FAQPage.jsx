import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(var(--primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s ease-out;
`;

const HeroSection = styled.section`
  width: 100%;
  padding: 60px 20px;
  background-color: #fbfbfd;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
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
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 3px;
    background-color: var(--primary);
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 120px;
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const PageDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: var(--muted-foreground);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const FaqSection = styled.section`
  width: 100%;
  max-width: 900px;
  padding: 80px 20px;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const FaqCategories = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 10px;
  animation: ${fadeIn} 0.5s ease-out;
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
    gap: 8px;
  }
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--primary-foreground)' : 'var(--foreground)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${props => props.active ? pulse : 'none'} 2s infinite;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.1)'};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease-out;
    opacity: 0;
  }
  
  &:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
    transition: transform 0.2s ease-out, opacity 0.3s ease-out;
  }
  
  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const expandCollapse = keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  }
  100% {
    transform: scaleY(1);
    opacity: 1;
  }
`;

const FaqItem = styled.div`
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
  
  ${props => props.isOpen && `
    border-color: var(--primary);
    background-color: rgba(var(--primary-rgb), 0.02);
  `}
`;

const FaqQuestion = styled.div`
  padding: 20px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  z-index: 1;
  overflow: hidden;
  transition: background-color 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.isOpen ? 'linear-gradient(to right, rgba(var(--primary-rgb), 0.1), transparent)' : 'white'};
    transform: scaleX(${props => props.isOpen ? 1 : 0});
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    color: var(--foreground);
    margin: 0;
    transition: color 0.3s ease;
    
    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
  
  ${props => props.isOpen && `
    h3 {
      color: var(--primary);
    }
  `}
  
  span {
    font-size: 24px;
    color: var(--primary);
    transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    transition: transform 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

const FaqAnswer = styled.div`
  padding: ${props => props.isOpen ? '0 20px 20px' : '0 20px'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), padding 0.3s ease;
  
  p {
    font-size: 16px;
    line-height: 1.8;
    color: var(--muted-foreground);
    margin: 0;
    transform-origin: top;
    animation: ${props => props.isOpen ? expandCollapse : 'none'} 0.3s forwards;
  }
`;

const ContactSection = styled.div`
  width: 100%;
  background-color: #f5f5f7;
  padding: 60px 20px;
  text-align: center;
  border-radius: 12px;
  margin-top: 60px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.7s ease-out;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary), #9c27b0, #2196f3, var(--primary));
    background-size: 200% 100%;
    animation: ${shimmer} 6s infinite linear;
  }
  
  @media (max-width: 768px) {
    padding: 40px 15px;
    margin-top: 40px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const ContactDescription = styled.p`
  font-size: 18px;
  color: var(--muted-foreground);
  margin-bottom: 24px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const buttonPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.6);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(var(--primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0);
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: var(--primary-foreground);
  text-decoration: none;
  padding: 12px 24px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${buttonPulse} 2s infinite;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background-color: #0062c3;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.5s ease-out;
    opacity: 0;
  }
  
  &:active::after {
    transform: translate(-50%, -50%) scale(2);
    opacity: 1;
    transition: transform 0.2s ease-out, opacity 0.3s ease-out;
  }
`;

const SearchWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto 40px;
  position: relative;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    margin: 0 auto 30px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 16px 20px 16px 50px;
  border-radius: 50px;
  border: 1px solid var(--border);
  font-size: 16px;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 5px 15px rgba(var(--primary-rgb), 0.15);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--muted-foreground);
  font-size: 20px;
  transition: color 0.3s ease;
  
  ${SearchInput}:focus + & {
    color: var(--primary);
  }
`;

const FloatingInfo = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: var(--primary);
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
  animation: ${pulse} 2s infinite;
  
  &:hover {
    transform: scale(1.1) rotate(10deg);
  }
  
  &::before {
    content: "?";
    font-size: 30px;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 20px;
    right: 20px;
    
    &::before {
      font-size: 24px;
    }
  }
`;

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFaqs, setOpenFaqs] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  
  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setShowSearchResults(false);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    let results = [];
    
    Object.keys(faqData).forEach(category => {
      const matchingFaqs = faqData[category].filter(faq => 
        faq.question.toLowerCase().includes(query) || 
        faq.answer.toLowerCase().includes(query)
      );
      
      results = [...results, ...matchingFaqs];
    });
    
    setSearchResults(results);
    setShowSearchResults(true);
  }, [searchQuery]);
  
  const faqCategories = [
    { id: 'general', name: 'General' },
    { id: 'services', name: 'Our Services' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'technical', name: 'Technical' },
    { id: 'support', name: 'Support' }
  ];
  
  const faqData = {
    general: [
      {
        id: 'general-1',
        question: 'What is 3 PIN?',
        answer: '3 PIN is a digital agency specializing in web development, AI integration, and digital transformation services. We help businesses of all sizes leverage technology to achieve their goals and improve their online presence.'
      },
      {
        id: 'general-2',
        question: 'How long has 3 PIN been in business?',
        answer: '3 PIN was founded in 2018 and has been providing high-quality digital solutions to clients across various industries for over 5 years.'
      },
      {
        id: 'general-3',
        question: 'Do you work with clients internationally?',
        answer: 'Yes, we work with clients from all over the world. Our team has experience collaborating with businesses from North America, Europe, Asia, and Australia.'
      }
    ],
    services: [
      {
        id: 'services-1',
        question: 'What services does 3 PIN offer?',
        answer: 'We offer a comprehensive range of digital services including web development, mobile app development, AI integration, UI/UX design, e-commerce solutions, and digital strategy consulting.'
      },
      {
        id: 'services-2',
        question: 'Can you help with existing websites or do you only build new ones?',
        answer: 'We work on both new projects and existing websites. Our team can help optimize, redesign, or add new features to your current website, or build a completely new solution from scratch.'
      },
      {
        id: 'services-3',
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer maintenance packages for all our projects. These include regular updates, security patches, performance optimization, and technical support to ensure your digital assets remain secure and up-to-date.'
      }
    ],
    pricing: [
      {
        id: 'pricing-1',
        question: 'How much does a website or application development project cost?',
        answer: 'Project costs vary based on the complexity, features, and scope. We provide custom quotes after understanding your specific requirements. Contact us for a free consultation and estimate.'
      },
      {
        id: 'pricing-2',
        question: 'Do you offer any payment plans?',
        answer: 'Yes, for larger projects we typically structure payments in milestones. This usually includes an initial deposit, payments at key project milestones, and a final payment upon completion.'
      },
      {
        id: 'pricing-3',
        question: 'Is there a minimum project budget you work with?',
        answer: 'While we don\'t have a strict minimum, our projects typically start at $5,000 for basic websites and increase based on complexity and features required.'
      }
    ],
    technical: [
      {
        id: 'technical-1',
        question: 'What technologies do you work with?',
        answer: 'We work with a wide range of technologies including React, Angular, Vue.js, Node.js, Python, Django, Laravel, WordPress, and various AI frameworks. We select the best technology stack based on your specific project needs.'
      },
      {
        id: 'technical-2',
        question: 'How do you handle website hosting and domain registration?',
        answer: 'We can manage the entire process of domain registration and hosting setup, or work with your existing providers. We recommend and set up appropriate hosting solutions based on your website\'s needs and traffic expectations.'
      },
      {
        id: 'technical-3',
        question: 'Do your websites work on mobile devices?',
        answer: 'Absolutely. All our websites are built with a mobile-first approach, ensuring they are fully responsive and provide an excellent user experience across all devices and screen sizes.'
      }
    ],
    support: [
      {
        id: 'support-1',
        question: 'What kind of support do you offer after project completion?',
        answer: 'We offer various support options, from ad-hoc assistance to comprehensive maintenance packages. Our support includes bug fixes, security updates, feature enhancements, and technical guidance.'
      },
      {
        id: 'support-2',
        question: 'How quickly do you respond to support requests?',
        answer: 'For clients on our maintenance plans, we typically respond to critical issues within 4-8 hours and regular support requests within 24-48 business hours.'
      },
      {
        id: 'support-3',
        question: 'Do you provide training for using the website or application?',
        answer: 'Yes, we provide comprehensive training sessions to ensure you and your team can effectively manage and update your website or application. We also provide documentation for future reference.'
      }
    ]
  };
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    setShowSearchResults(false);
  };
  
  const handleScrollToContact = () => {
    document.querySelector('#contact-section').scrollIntoView({ 
      behavior: 'smooth'
    });
  };
  
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <PageTitle>Frequently Asked Questions</PageTitle>
          <PageDescription>
            Find answers to common questions about our services, process, and support. Can't find what you're looking for? Contact us directly for more information.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <FaqSection>
        <SearchWrapper>
          <SearchInput 
            type="text" 
            placeholder="Search for questions or keywords..." 
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <SearchIcon>🔍</SearchIcon>
        </SearchWrapper>
        
        {!showSearchResults && (
          <FaqCategories>
            {faqCategories.map(category => (
              <CategoryButton 
                key={category.id} 
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </FaqCategories>
        )}
        
        <FaqList>
          {showSearchResults ? (
            searchResults.length > 0 ? (
              <>
                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0 }}>Search Results ({searchResults.length})</h3>
                  <button 
                    onClick={clearSearch}
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: 'var(--primary)', 
                      cursor: 'pointer',
                      fontSize: '14px',
                      textDecoration: 'underline'
                    }}
                  >
                    Clear Search
                  </button>
                </div>
                {searchResults.map((faq, index) => (
                  <FaqItem key={faq.id} index={index} isOpen={openFaqs[faq.id]}>
                    <FaqQuestion 
                      onClick={() => toggleFaq(faq.id)}
                      isOpen={openFaqs[faq.id]}
                    >
                      <h3>{faq.question}</h3>
                      <span>+</span>
                    </FaqQuestion>
                    <FaqAnswer isOpen={openFaqs[faq.id]}>
                      <p>{faq.answer}</p>
                    </FaqAnswer>
                  </FaqItem>
                ))}
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '30px 0' }}>
                <p>No results found for "{searchQuery}". Please try a different search term.</p>
                <button 
                  onClick={clearSearch}
                  style={{ 
                    background: 'var(--primary)', 
                    color: 'white', 
                    border: 'none', 
                    padding: '10px 20px', 
                    borderRadius: '50px',
                    marginTop: '10px',
                    cursor: 'pointer'
                  }}
                >
                  Clear Search
                </button>
              </div>
            )
          ) : (
            faqData[activeCategory].map((faq, index) => (
              <FaqItem key={faq.id} index={index} isOpen={openFaqs[faq.id]}>
                <FaqQuestion 
                  onClick={() => toggleFaq(faq.id)}
                  isOpen={openFaqs[faq.id]}
                >
                  <h3>{faq.question}</h3>
                  <span>+</span>
                </FaqQuestion>
                <FaqAnswer isOpen={openFaqs[faq.id]}>
                  <p>{faq.answer}</p>
                </FaqAnswer>
              </FaqItem>
            ))
          )}
        </FaqList>
        
        <ContactSection id="contact-section">
          <ContactTitle>Still have questions?</ContactTitle>
          <ContactDescription>
            If you couldn't find the answer to your question, our team is here to help. Get in touch with us for personalized assistance.
          </ContactDescription>
          <ContactButton href="/contact">Contact Us</ContactButton>
        </ContactSection>
      </FaqSection>
      
      <FloatingInfo onClick={handleScrollToContact} />
    </Container>
  );
};

export default FAQPage; 