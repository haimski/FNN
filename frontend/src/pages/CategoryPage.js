import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Grid, 
  Box, 
  Typography, 
  Pagination,
  Breadcrumbs,
  Link as MuiLink,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, NavigateNext } from '@mui/icons-material';

import NewsCard from '../components/news/NewsCard';
import Sidebar from '../components/layout/Sidebar';
import LoadingSpinner from '../components/common/LoadingSpinner';

import { fetchArticlesByCategory } from '../store/slices/articlesSlice';

const CategoryPage = () => {
  const { category } = useParams();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const { categoryArticles, pagination, loading, error } = useSelector((state) => state.articles);
  const { featuredArticles } = useSelector((state) => state.articles);

  const getCategoryInfo = (category) => {
    const categories = {
      world: { name: 'World News', color: '#3b82f6' },
      economy: { name: 'Economy', color: '#10b981' },
      sports: { name: 'Sports', color: '#f59e0b' },
      travel: { name: 'Travel', color: '#8b5cf6' },
      culture: { name: 'Culture', color: '#ec4899' },
      gossip: { name: 'Gossip', color: '#eab308' }
    };
    return categories[category] || { name: category, color: '#6b7280' };
  };

  const categoryInfo = getCategoryInfo(category);

  useEffect(() => {
    dispatch(fetchArticlesByCategory({ category, page, limit: 12 }));
  }, [dispatch, category, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading && categoryArticles.length === 0) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h6" color="error" sx={{ textAlign: 'center', py: 4 }}>
          Error loading category: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${categoryInfo.name} - BNN News`}</title>
        <meta name="description" content={`Latest ${categoryInfo.name.toLowerCase()} news and stories from BNN - Bullshit News Network.`} />
        <meta property="og:title" content={`${categoryInfo.name} - BNN News`} />
        <meta property="og:description" content={`Latest ${categoryInfo.name.toLowerCase()} news and stories.`} />
      </Helmet>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs 
          separator={<NavigateNext fontSize="small" />}
          sx={{ mb: 3 }}
        >
          <MuiLink component={Link} to="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <Home sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </MuiLink>
          <Typography color="text.primary">{categoryInfo.name}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} lg={9}>
            {/* Category Header */}
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontWeight: 700,
                  color: '#1a1a1a',
                  mb: 1,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                {categoryInfo.name}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ fontSize: '1.1rem' }}
              >
                Latest {categoryInfo.name.toLowerCase()} stories and breaking news
              </Typography>
            </Box>

            {/* Articles Grid */}
            {categoryArticles.length > 0 ? (
              <>
                <Grid container spacing={3}>
                  {categoryArticles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={article._id || index}>
                      <NewsCard article={article} />
                    </Grid>
                  ))}
                </Grid>

                {/* Pagination */}
                {pagination.total > 1 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Pagination
                      count={pagination.total}
                      page={pagination.current}
                      onChange={handlePageChange}
                      color="primary"
                      size="large"
                      showFirstButton
                      showLastButton
                    />
                  </Box>
                )}
              </>
            ) : (
              <Box sx={{ textAlign: 'center', py: 8 }}>
                <Typography variant="h6" color="text.secondary">
                  No articles found in this category.
                </Typography>
              </Box>
            )}
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

export default CategoryPage; 