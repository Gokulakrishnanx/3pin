import React, { useState } from 'react';
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

const BlogSection = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 80px 20px;
  
  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const BlogCard = styled.div`
  background-color: white;
  border-radius: 12px;
  border: 1px solid var(--border);
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: ${fadeIn} 0.5s ease-out;
  animation-fill-mode: both;
  animation-delay: ${props => props.index * 0.1}s;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  &:hover img {
    transform: scale(1.1);
    filter: brightness(1.1);
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

const BlogImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f0f0f0;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s ease, filter 0.8s ease;
  }
`;

const BlogContent = styled.div`
  padding: 24px;
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 0;
    background-color: var(--primary);
    transition: height 0.3s ease;
    z-index: -1;
  }
  
  ${BlogCard}:hover &::before {
    height: 100%;
  }
`;

const BlogCategory = styled.span`
  display: inline-block;
  font-size: 14px;
  color: var(--primary);
  margin-bottom: 12px;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  ${BlogCard}:hover &::after {
    width: 100%;
  }
`;

const BlogTitle = styled.h2`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--foreground);
  transition: color 0.3s ease;
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ${BlogCard}:hover & {
    color: var(--primary);
  }
`;

const BlogExcerpt = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--muted-foreground);
  margin-bottom: 20px;
  transition: color 0.3s ease;
`;

const BlogMeta = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: var(--muted-foreground);
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  ${BlogCard}:hover & {
    opacity: 1;
  }
`;

const BlogAuthor = styled.span`
  margin-right: 16px;
  font-weight: 500;
`;

const BlogDate = styled.span``;

// Category filter animation
const CategorySection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.5s ease-out;
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const CategoryButton = styled.button`
  background-color: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--foreground)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
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
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const NoResultsMessage = styled.div`
  text-align: center;
  padding: 40px 0;
  color: var(--muted-foreground);
  font-size: 18px;
  animation: ${fadeIn} 0.5s ease-out;
`;

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'ai', name: 'AI & Marketing' },
    { id: 'accessibility', name: 'Accessibility' },
    { id: 'pwa', name: 'PWA' },
    { id: 'data-privacy', name: 'Data Privacy' },
    { id: 'performance', name: 'Performance' }
  ];
  
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2023",
      category: "Web Development",
      categoryId: "web-development",
      excerpt: "Explore the emerging technologies and methodologies shaping the future of web development, from WebAssembly to Edge Computing.",
      image: "https://placehold.co/400x200?text=Web+Dev+Trends",
      author: "John Doe",
      date: "May 12, 2023"
    },
    {
      id: 2,
      title: "How AI is Transforming Digital Marketing Strategies",
      category: "AI & Marketing",
      categoryId: "ai",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing campaigns and helping businesses achieve better ROI.",
      image: "https://placehold.co/400x200?text=AI+Marketing",
      author: "Sarah Parker",
      date: "April 28, 2023"
    },
    {
      id: 3,
      title: "Building Accessible Web Applications: A Comprehensive Guide",
      category: "Accessibility",
      categoryId: "accessibility",
      excerpt: "Learn the essential practices and tools for creating web applications that are accessible to all users, regardless of ability.",
      image: "https://placehold.co/400x200?text=Accessibility",
      author: "Michael Torres",
      date: "April 15, 2023"
    },
    {
      id: 4,
      title: "The Rise of Progressive Web Apps: Benefits and Implementation",
      category: "PWA",
      categoryId: "pwa",
      excerpt: "Explore how Progressive Web Apps are changing the landscape of mobile web experiences and how you can implement them.",
      image: "https://placehold.co/400x200?text=PWA",
      author: "Emily Johnson",
      date: "March 30, 2023"
    },
    {
      id: 5,
      title: "Data Privacy in the Age of AI: Challenges and Solutions",
      category: "Data Privacy",
      categoryId: "data-privacy",
      excerpt: "Examine the complex data privacy challenges that arise with AI implementation and the emerging solutions to address them.",
      image: "https://placehold.co/400x200?text=Data+Privacy",
      author: "Robert Chen",
      date: "March 17, 2023"
    },
    {
      id: 6,
      title: "Optimizing Web Performance: Strategies for Speed and Efficiency",
      category: "Performance",
      categoryId: "performance",
      excerpt: "Learn practical techniques to improve your website's loading speed, performance metrics, and overall user experience.",
      image: "https://placehold.co/400x200?text=Web+Performance",
      author: "Lisa Morgan",
      date: "March 3, 2023"
    }
  ];
  
  const filteredPosts = activeCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.categoryId === activeCategory);

  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <PageTitle>Our Blog</PageTitle>
          <PageDescription>
            Insights, updates, and expertise from our team on web development, AI integration, and digital transformation.
          </PageDescription>
        </HeroContent>
      </HeroSection>
      
      <BlogSection>
        <CategorySection>
          {categories.map(category => (
            <CategoryButton 
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategorySection>
        
        {filteredPosts.length > 0 ? (
          <BlogGrid>
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} index={index}>
                <BlogImage>
                  <img src={post.image} alt={post.title} />
                </BlogImage>
                <BlogContent>
                  <BlogCategory>{post.category}</BlogCategory>
                  <BlogTitle>
                    <a href={`/blog/${post.id}`}>{post.title}</a>
                  </BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <BlogMeta>
                    <BlogAuthor>By {post.author}</BlogAuthor>
                    <BlogDate>{post.date}</BlogDate>
                  </BlogMeta>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        ) : (
          <NoResultsMessage>
            No posts found in this category. Check back soon for new content!
          </NoResultsMessage>
        )}
      </BlogSection>
    </Container>
  );
};

export default BlogPage; 