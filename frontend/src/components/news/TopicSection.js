import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Grid, 
  Button,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';

import NewsCard from './NewsCard';

const TopicSection = ({ category, articles = [], title }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const getCategoryColor = (category) => {
    const colors = {
      world: '#3b82f6',
      economy: '#10b981',
      sports: '#f59e0b',
      travel: '#8b5cf6',
      culture: '#ec4899',
      gossip: '#eab308'
    };
    return colors[category] || '#6b7280';
  };

  const getCategoryName = (category) => {
    const names = {
      world: 'World News',
      economy: 'Economy',
      sports: 'Sports',
      travel: 'Travel',
      culture: 'Culture',
      gossip: 'Gossip'
    };
    return names[category] || category;
  };

  if (articles.length === 0) {
    return null;
  }

  const featuredArticle = articles.find(article => article.featured) || articles[0];
  const otherArticles = articles.filter(article => article !== featuredArticle).slice(0, 3);

  return (
    <Box
      component="section"
      sx={{
        py: 4,
        borderBottom: '1px solid #e5e7eb',
        '&:last-child': {
          borderBottom: 'none'
        }
      }}
    >
      <Container maxWidth="xl">
        {/* Section Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 700,
                color: '#1a1a1a',
                fontSize: { xs: '1.5rem', md: '2rem' }
              }}
            >
              {title || getCategoryName(category)}
            </Typography>
            <Box
              sx={{
                width: 4,
                height: 4,
                borderRadius: '50%',
                backgroundColor: getCategoryColor(category)
              }}
            />
          </Box>

          <Button
            component={Link}
            to={`/category/${category}`}
            endIcon={<ArrowForward />}
            sx={{
              color: getCategoryColor(category),
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': {
                backgroundColor: `${getCategoryColor(category)}10`,
              }
            }}
          >
            View All
          </Button>
        </Box>

        {/* Articles Grid */}
        <Grid container spacing={3}>
          {/* Featured Article */}
          <Grid item xs={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <NewsCard 
                article={featuredArticle} 
                featured={true}
              />
            </motion.div>
          </Grid>

          {/* Other Articles */}
          <Grid item xs={12} lg={6}>
            <Grid container spacing={2}>
              {otherArticles.map((article, index) => (
                <Grid item xs={12} sm={6} key={article._id || index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <NewsCard 
                      article={article} 
                      compact={true}
                    />
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopicSection; 