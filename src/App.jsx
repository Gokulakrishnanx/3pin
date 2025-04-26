import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import TestimonialsPage from './pages/TestimonialsPage'
import BlogPage from './pages/BlogPage'
import FAQPage from './pages/FAQPage'
import ContactPage from './pages/ContactPage'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Footer from './components/Footer'
import styled from 'styled-components'
import './App.css'

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: var(--background);
  color: var(--foreground);
  display: flex;
  flex-direction: column;
  overflow-x: hidden; /* Prevent horizontal scrolling on mobile */
  width: 100%;
  position: relative;
  
  * {
    box-sizing: border-box;
  }
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  /* Add padding for smaller screens */
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <MainContent>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </Router>
  )
}

export default App 