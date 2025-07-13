import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Chip,
  Button,
  Breadcrumbs,
  Link,
  Divider
} from '@mui/material';
import { 
  ArrowBack, 
  Share, 
  BookmarkBorder, 
  NavigateNext,
  Home,
  Person,
  AccessTime
} from '@mui/icons-material';

import LoadingSpinner from '../components/common/LoadingSpinner';
import Sidebar from '../components/layout/Sidebar';
import { fetchArticleBySlug, clearCurrentArticle } from '../store/slices/articlesSlice';

const ArticlePage = () => {
  const { slug } = useParams();
  const dispatch = useDispatch();

  const { currentArticle, loading, error } = useSelector((state) => state.articles);
  const { featuredArticles } = useSelector((state) => state.articles);

  useEffect(() => {
    if (slug) {
      dispatch(fetchArticleBySlug(slug));
    }

    return () => {
      dispatch(clearCurrentArticle());
    };
  }, [dispatch, slug]);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return <LoadingSpinner message="Loading article..." />;
  }

  if (error || !currentArticle) {
    return (
      <Container>
        <Typography variant="h6" color="error" sx={{ textAlign: 'center', py: 4 }}>
          {error || 'Article not found'}
        </Typography>
      </Container>
    );
  }

  const categoryInfo = getCategoryInfo(currentArticle.category);

  return (
    <>
      <Helmet>
        <title>{`${currentArticle.title} - FNN News`}</title>
        <meta name="description" content={currentArticle.excerpt} />
        <meta property="og:title" content={currentArticle.title} />
        <meta property="og:description" content={currentArticle.excerpt} />
        <meta property="og:image" content={currentArticle.imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={currentArticle.publishedAt} />
        <meta property="article:author" content={currentArticle.author} />
        <meta property="article:section" content={categoryInfo.name} />
      </Helmet>

      <Container maxWidth="xl" sx={{ py: 4 }}>
        {/* Breadcrumbs */}
        <Breadcrumbs
          separator={<NavigateNext fontSize="small" />}
          sx={{ mb: 3 }}
        >
          <Link
            component={Link}
            to="/"
            color="inherit"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Home sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </Link>
          <Link
            component={Link}
            to={`/category/${currentArticle.category}`}
            color="inherit"
          >
            {categoryInfo.name}
          </Link>
          <Typography color="text.primary" sx={{ maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {currentArticle.title}
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          {/* Main Content */}
          <Grid item xs={12} lg={9}>
            <article>
              {/* Article Header */}
              <Box sx={{ mb: 4 }}>
                {/* Category Badge */}
                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={categoryInfo.name}
                    size="medium"
                    sx={{
                      backgroundColor: categoryInfo.color,
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.875rem'
                    }}
                  />
                </Box>

                {/* Title */}
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    lineHeight: 1.2,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '3rem' },
                    color: '#1a1a1a'
                  }}
                >
                  {currentArticle.title}
                </Typography>

                {/* Excerpt */}
                <Typography
                  variant="h5"
                  color="text.secondary"
                  sx={{
                    fontWeight: 400,
                    lineHeight: 1.4,
                    mb: 3,
                    fontSize: { xs: '1.1rem', md: '1.25rem' }
                  }}
                >
                  {currentArticle.excerpt}
                </Typography>

                {/* Meta Information */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, mb: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Person sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {currentArticle.author}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AccessTime sx={{ fontSize: 20, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      {formatDate(currentArticle.publishedAt)}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Featured Image */}
              <Box sx={{ mb: 4 }}>
                <img
                  src={currentArticle.imageUrl}
                  alt={currentArticle.imageAlt}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    maxHeight: '500px',
                    objectFit: 'cover'
                  }}
                />
              </Box>

              {/* Article Content */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1.125rem',
                    lineHeight: 1.8,
                    color: '#2d3748',
                    '& p': {
                      mb: 2
                    },
                    '& h2, & h3, & h4': {
                      fontWeight: 600,
                      color: '#1a1a1a',
                      mt: 4,
                      mb: 2
                    },
                    '& blockquote': {
                      borderLeft: '4px solid #cc0000',
                      pl: 3,
                      ml: 0,
                      fontStyle: 'italic',
                      backgroundColor: '#f8f9fa',
                      py: 2,
                      px: 3,
                      borderRadius: '0 8px 8px 0'
                    }
                  }}
                  dangerouslySetInnerHTML={{ __html: currentArticle.content }}
                />
              </Box>

              <Divider sx={{ my: 4 }} />

              {/* Article Footer */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary">
                  Views: {currentArticle.views || 0}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Last updated: {formatDate(currentArticle.updatedAt)}
                </Typography>
              </Box>
            </article>
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

export default ArticlePage; 