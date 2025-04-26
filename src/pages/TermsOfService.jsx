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

const TermsOfService = () => {
  return (
    <Container>
      <PageTitle>Terms of Service</PageTitle>
      <LastUpdated>Last Updated: June 1, 2023</LastUpdated>
      
      <Section>
        <Paragraph>
          Welcome to 3 PIN. Please read these Terms of Service ("Terms", "Terms of Service") carefully before using our website or services operated by 3 PIN.
        </Paragraph>
        
        <Paragraph>
          Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
        </Paragraph>
        
        <Paragraph>
          <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.</strong>
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Use of the Service</SectionTitle>
        <Paragraph>
          You are responsible for making all arrangements necessary for you to have access to our services. You are also responsible for ensuring that all persons who access our services through your internet connection are aware of these Terms and that they comply with them.
        </Paragraph>
        
        <Paragraph>
          We reserve the right to withdraw or amend the service we provide without notice. We will not be liable if for any reason our services are unavailable at any time or for any period.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Accounts</SectionTitle>
        <Paragraph>
          When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
        </Paragraph>
        
        <Paragraph>
          You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
        </Paragraph>
        
        <Paragraph>
          You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Intellectual Property</SectionTitle>
        <Paragraph>
          The Service and its original content, features, and functionality are and will remain the exclusive property of 3 PIN and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of 3 PIN.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>User Content</SectionTitle>
        <Paragraph>
          Our Service may allow you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.
        </Paragraph>
        
        <Paragraph>
          By posting content to the Service, you grant us the right to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service. You retain any and all of your rights to any content you submit, post or display on or through the Service and you are responsible for protecting those rights.
        </Paragraph>
        
        <Paragraph>
          You represent and warrant that: (i) the content is yours or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Prohibited Uses</SectionTitle>
        <Paragraph>
          You may use our Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
        </Paragraph>
        
        <List>
          <ListItem>In any way that violates any applicable national or international law or regulation.</ListItem>
          <ListItem>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</ListItem>
          <ListItem>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</ListItem>
          <ListItem>To impersonate or attempt to impersonate 3 PIN, a 3 PIN employee, another user, or any other person or entity.</ListItem>
          <ListItem>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful.</ListItem>
          <ListItem>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm 3 PIN or users of the Service or expose them to liability.</ListItem>
        </List>
      </Section>
      
      <Section>
        <SectionTitle>Termination</SectionTitle>
        <Paragraph>
          We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </Paragraph>
        
        <Paragraph>
          Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Limitation of Liability</SectionTitle>
        <Paragraph>
          In no event shall 3 PIN, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Disclaimer</SectionTitle>
        <Paragraph>
          Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
        </Paragraph>
        
        <Paragraph>
          3 PIN, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the Service will meet your requirements.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Governing Law</SectionTitle>
        <Paragraph>
          These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
        </Paragraph>
        
        <Paragraph>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Changes to These Terms</SectionTitle>
        <Paragraph>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </Paragraph>
        
        <Paragraph>
          By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <Paragraph>
          If you have any questions about these Terms, please contact us:
        </Paragraph>
        
        <Paragraph>
          3 PIN<br />
          123 Business Avenue, Suite 100<br />
          New York, NY 10001<br />
          Email: legal@3pin.com<br />
          Phone: (555) 123-4567
        </Paragraph>
      </Section>
    </Container>
  );
};

export default TermsOfService; 