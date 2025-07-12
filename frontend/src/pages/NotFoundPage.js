import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Container, 
  Box, 
  Typography, 
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Home, Search, ArrowBack } from '@mui/icons-material';
import { Helmet } from 'react-helmet-async';

const NotFoundPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Helmet>
        <title>Page Not Found - BNN News</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh',
            textAlign: 'center',
            py: 8
          }}
        >
          {/* 404 Number */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '8rem', md: '12rem' },
              fontWeight: 700,
              color: '#cc0000',
              lineHeight: 1,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            404
          </Typography>

          {/* Main Message */}
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 600,
              color: '#1a1a1a',
              mb: 2,
              fontSize: { xs: '1.5rem', md: '2rem' }
            }}
          >
            Oops! Page Not Found
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: '1.1rem',
              mb: 4,
              maxWidth: 500,
              lineHeight: 1.6
            }}
          >
            The page you're looking for seems to have wandered off into the realm of fictional news. 
            Don't worry, even our most unbelievable stories are more real than this page!
          </Typography>

          {/* Action Buttons */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: 2,
              mb: 4
            }}
          >
            <Button
              component={Link}
              to="/"
              variant="contained"
              size="large"
              startIcon={<Home />}
              sx={{
                backgroundColor: '#cc0000',
                '&:hover': {
                  backgroundColor: '#a00000',
                },
                px: 4,
                py: 1.5
              }}
            >
              Go Home
            </Button>

            <Button
              variant="outlined"
              size="large"
              startIcon={<ArrowBack />}
              onClick={() => window.history.back()}
              sx={{
                borderColor: '#cc0000',
                color: '#cc0000',
                '&:hover': {
                  borderColor: '#a00000',
                  backgroundColor: 'rgba(204, 0, 0, 0.1)',
                },
                px: 4,
                py: 1.5
              }}
            >
              Go Back
            </Button>
          </Box>

          {/* Search Suggestion */}
          <Box
            sx={{
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              p: 3,
              maxWidth: 400,
              width: '100%'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                mb: 1,
                color: '#1a1a1a'
              }}
            >
              Looking for something specific?
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 2 }}
            >
              Try browsing our categories or use the search function to find what you're looking for.
            </Typography>
            <Button
              component={Link}
              to="/"
              variant="text"
              startIcon={<Search />}
              sx={{
                color: '#cc0000',
                '&:hover': {
                  backgroundColor: 'rgba(204, 0, 0, 0.1)',
                }
              }}
            >
              Browse Categories
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default NotFoundPage; 