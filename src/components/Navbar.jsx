import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const NavContainer = styled.nav`
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 40;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none; /* Prevent text selection */
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--primary);
    opacity: 0.2;
  }
`;

const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

const Logo = styled.a`
  font-size: 22px;
  font-weight: 700;
  color: var(--foreground);
  text-decoration: none;
  letter-spacing: -0.5px;
  position: relative;
  padding: 5px 0;
  transition: color 0.2s ease, transform 0.3s ease;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    color: var(--primary);
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.active ? 'var(--primary)' : 'var(--foreground)'};
  text-decoration: none;
  padding: 5px 0;
  position: relative;
  transition: color 0.2s ease, transform 0.2s ease;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    color: var(--primary);
    transform: translateY(-2px);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s ease;
    opacity: 0.7;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const PrimaryButton = styled(Link)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease;
  animation: ${slideInFromRight} 0.5s ease-out;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: #0062c3;
    transform: translateY(-1px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    animation: ${pulse} 1s infinite;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;
  color: var(--foreground);
  padding: 5px;
  transition: color 0.2s ease, transform 0.3s ease;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    color: var(--primary);
    transform: rotate(180deg);
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: white;
  border-top: 1px solid var(--border);
  position: relative;
  user-select: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  animation: ${slideDown} 0.3s ease-out;
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)`
  font-size: 16px;
  padding: 12px 0;
  color: ${props => props.active ? 'var(--primary)' : 'var(--foreground)'};
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  transition: color 0.2s ease, padding-left 0.2s ease;
  animation: ${slideInFromRight} 0.3s ease-out;
  animation-delay: ${props => props.index * 0.1}s;
  animation-fill-mode: both;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    color: var(--primary);
    padding-left: 5px;
  }
`;

const MobilePrimaryButton = styled(Link)`
  background-color: var(--primary);
  color: var(--primary-foreground);
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 16px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: block;
  transition: background-color 0.2s ease;
  animation: ${fadeIn} 0.5s ease-out;
  animation-delay: 0.7s;
  animation-fill-mode: both;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    background-color: #0062c3;
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') {
      return true;
    }
    return location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  };
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/testimonials', label: 'Testimonials' },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: 'FAQ' },
  ];
  
  return (
    <>
      <NavContainer>
        <NavContent>
          <Logo href="/">3 PIN</Logo>
          
          <NavLinks>
            {navLinks.map((link, index) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                active={isActive(link.path)} 
                index={index}
                style={{ opacity: mounted ? 1 : 0 }}
              >
                {link.label}
              </NavLink>
            ))}
          </NavLinks>
          
          <ButtonsContainer>
            <PrimaryButton to="/contact">Contact Us</PrimaryButton>
            <MobileMenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? '✕' : '☰'}
            </MobileMenuButton>
          </ButtonsContainer>
        </NavContent>
      </NavContainer>
      
      {isMenuOpen && (
        <MobileMenu>
          {navLinks.map((link, index) => (
            <MobileNavLink 
              key={link.path} 
              to={link.path} 
              active={isActive(link.path)}
              index={index}
            >
              {link.label}
            </MobileNavLink>
          ))}
          <MobilePrimaryButton to="/contact">Contact Us</MobilePrimaryButton>
        </MobileMenu>
      )}
    </>
  );
};

export default Navbar; 