import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Grid, 
  Box,
  Typography
} from '@mui/material';

import CarouselSlider from '../components/news/CarouselSlider';
import TopicSection from '../components/news/TopicSection';
import Sidebar from '../components/layout/Sidebar';
import LoadingSpinner from '../components/common/LoadingSpinner';

import { fetchHomepageData } from '../store/slices/articlesSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  
  const { 
    carouselArticles, 
    featuredArticles, 
    topicSections,
    loading, 
    error 
  } = useSelector((state) => state.articles);

  const topicSectionMeta = [
    { category: 'world', title: 'World News' },
    { category: 'economy', title: 'Economy' },
    { category: 'sports', title: 'Sports' },
    { category: 'travel', title: 'Travel' },
    { category: 'culture', title: 'Culture' },
    { category: 'gossip', title: 'Gossip' },
  ];

  useEffect(() => {
    // Always dispatch on mount - Redux Toolkit will handle deduplication
    dispatch(fetchHomepageData());
  }, [dispatch]);

  if (loading && carouselArticles.length === 0) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error" sx={{ textAlign: 'center', py: 4 }}>
          Error loading content: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>FNN - Fake News Network | Latest International News</title>
        <meta name="description" content="Stay informed with the latest international news, breaking stories, and in-depth coverage from FNN - Fake News Network." />
        <meta property="og:title" content="FNN - Fake News Network" />
        <meta property="og:description" content="Latest international news and breaking stories" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Carousel Slider */}
      <CarouselSlider articles={carouselArticles} />

      {/* Main Content */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Main Content Area */}
          <Grid item xs={12} lg={9}>
            <Box>
              {/* Topic Sections */}
              {topicSectionMeta.map(({ category, title }) => (
                <TopicSection
                  key={category}
                  category={category}
                  title={title}
                  articles={topicSections[category] || []}
                />
              ))}
            </Box>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} lg={3}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Sidebar featuredArticles={featuredArticles} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HomePage; 