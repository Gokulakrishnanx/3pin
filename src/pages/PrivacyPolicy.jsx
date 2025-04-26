import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
`;

const PageTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 16px;
  color: var(--foreground);
  text-align: center;
`;

const LastUpdated = styled.p`
  text-align: center;
  color: var(--muted-foreground);
  margin-bottom: 50px;
  font-size: 16px;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: var(--foreground);
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted-foreground);
  margin-bottom: 20px;
`;

const List = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  line-height: 1.8;
  color: var(--muted-foreground);
  margin-bottom: 10px;
`;

const SubSection = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
`;

const SubSectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--foreground);
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <PageTitle>Privacy Policy</PageTitle>
      <LastUpdated>Last Updated: June 1, 2023</LastUpdated>
      
      <Section>
        <Paragraph>
          At 3 PIN, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Information We Collect</SectionTitle>
        <Paragraph>
          We may collect information about you in a variety of ways. The information we may collect via the Website includes:
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>Personal Data</SubSectionTitle>
          <Paragraph>
            Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Website or when you choose to participate in various activities related to the Website. You are under no obligation to provide us with personal information of any kind, however your refusal to do so may prevent you from using certain features of the Website.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>Derivative Data</SubSectionTitle>
          <Paragraph>
            Information our servers automatically collect when you access the Website, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Website.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>Financial Data</SubSectionTitle>
          <Paragraph>
            Financial information, such as data related to your payment method (e.g. valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor and you are encouraged to review their privacy policy and contact them directly for responses to your questions.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>Cookies</SubSectionTitle>
          <Paragraph>
            We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Website to help customize the Website and improve your experience. When you access the Website, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Website.
          </Paragraph>
        </SubSection>
      </Section>
      
      <Section>
        <SectionTitle>Use of Your Information</SectionTitle>
        <Paragraph>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:
        </Paragraph>
        
        <List>
          <ListItem>Create and manage your account.</ListItem>
          <ListItem>Process your orders and manage payments.</ListItem>
          <ListItem>Email you regarding your account or order.</ListItem>
          <ListItem>Fulfill and manage purchases, orders, payments, and other transactions related to the Website.</ListItem>
          <ListItem>Monitor and analyze usage and trends to improve your experience with the Website.</ListItem>
          <ListItem>Notify you of updates to the Website.</ListItem>
          <ListItem>Resolve disputes and troubleshoot problems.</ListItem>
          <ListItem>Respond to product and customer service requests.</ListItem>
          <ListItem>Send you a newsletter or marketing communications.</ListItem>
        </List>
      </Section>
      
      <Section>
        <SectionTitle>Disclosure of Your Information</SectionTitle>
        <Paragraph>
          We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
        </Paragraph>
        
        <SubSection>
          <SubSectionTitle>By Law or to Protect Rights</SubSectionTitle>
          <Paragraph>
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>Third-Party Service Providers</SubSectionTitle>
          <Paragraph>
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>Marketing Communications</SubSectionTitle>
          <Paragraph>
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
          </Paragraph>
        </SubSection>
        
        <SubSection>
          <SubSectionTitle>Business Transfers</SubSectionTitle>
          <Paragraph>
            If we are involved in a merger, acquisition, or sale of all or a portion of our assets, you will be notified via email and/or a prominent notice on our Website of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.
          </Paragraph>
        </SubSection>
      </Section>
      
      <Section>
        <SectionTitle>Security of Your Information</SectionTitle>
        <Paragraph>
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Your Rights and Choices</SectionTitle>
        <Paragraph>
          You have certain rights regarding the personal information we collect about you. You may update your information by contacting us using the contact information provided below. You can also:
        </Paragraph>
        
        <List>
          <ListItem><strong>Opt out of receiving emails from us</strong> by clicking on the unsubscribe link in the emails.</ListItem>
          <ListItem><strong>Request access to your personal data</strong> that we hold about you.</ListItem>
          <ListItem><strong>Request correction</strong> of personal data that we hold about you.</ListItem>
          <ListItem><strong>Request deletion</strong> of your personal data.</ListItem>
          <ListItem><strong>Object to processing</strong> of your personal data.</ListItem>
          <ListItem><strong>Request restriction of processing</strong> your personal data.</ListItem>
          <ListItem><strong>Request transfer</strong> of your personal data.</ListItem>
        </List>
      </Section>
      
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          If you have questions or comments about this Privacy Policy, please contact us at:
        </Paragraph>
        
        <Paragraph>
          3 PIN<br />
          123 Business Avenue, Suite 100<br />
          New York, NY 10001<br />
          Email: privacy@3pin.com<br />
          Phone: (555) 123-4567
        </Paragraph>
      </Section>
    </Container>
  );
};

export default PrivacyPolicy; 