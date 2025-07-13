import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { 
  Newspaper, 
  TrendingUp, 
  People, 
  Security,
  EmojiEvents,
  Psychology
} from '@mui/icons-material';

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - FNN | Fake News Network</title>
        <meta name="description" content="Learn about FNN - Fake News Network, an experimental platform exploring the creation of fake news and alternative reality narratives." />
        <meta property="og:title" content="About Us - FNN | Fake News Network" />
        <meta property="og:description" content="Discover the story behind FNN and our mission to explore fake news creation." />
        <meta property="og:type" content="website" />
      </Helmet>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              color: '#1a1a1a',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            About FNN
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Fake News Network - An Experimental Journey into Fake News Creation
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} lg={8}>
            {/* Mission Statement */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#cc0000',
                  mb: 3
                }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#2d3748'
                }}
              >
                FNN (Fake News Network) is an experimental platform designed to demonstrate 
                how easily fake news and alternative reality narratives can be created and disseminated 
                in the digital age. Our purpose is educational and investigative - to understand the 
                mechanisms behind misinformation and to raise awareness about media literacy.
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#2d3748'
                }}
              >
                This is not a real news organization. All content on this site is fictional and 
                created for educational purposes only.
              </Typography>
            </Paper>

            {/* The Experiment */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#cc0000',
                  mb: 3
                }}
              >
                The Experiment
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#2d3748'
                }}
              >
                FNN serves as a case study in how fake news websites are constructed and operated. 
                We've implemented all the standard features of a legitimate news site:
              </Typography>
              
              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  Professional design and layout
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  Categorized content sections
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  High-quality images and graphics
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  SEO optimization and social media integration
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  Newsletter subscriptions and user engagement features
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#2d3748'
                }}
              >
                The key difference is that our content is intentionally fictional, designed to 
                demonstrate how convincing fake news can appear when properly packaged.
              </Typography>
            </Paper>

            {/* How Fake News Works */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#cc0000',
                  mb: 3
                }}
              >
                Understanding Fake News Creation
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <img
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop"
                  alt="Digital media and information flow"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    marginBottom: '20px'
                  }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#2d3748'
                }}
              >
                Fake news creation involves several key techniques that we've implemented in this experiment:
              </Typography>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a1a',
                    mb: 1
                  }}
                >
                  1. Professional Presentation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#4a5568',
                    mb: 2
                  }}
                >
                  Using high-quality design, professional typography, and credible-looking layouts 
                  to establish trust and authority.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a1a',
                    mb: 1
                  }}
                >
                  2. Emotional Manipulation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#4a5568',
                    mb: 2
                  }}
                >
                  Crafting headlines and content that trigger emotional responses, making stories 
                  more likely to be shared and believed.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a1a',
                    mb: 1
                  }}
                >
                  3. Confirmation Bias Exploitation
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#4a5568',
                    mb: 2
                  }}
                >
                  Creating content that reinforces existing beliefs and prejudices, making it 
                  more likely to be accepted without critical examination.
                </Typography>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a1a',
                    mb: 1
                  }}
                >
                  4. Social Proof and Virality
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#4a5568'
                  }}
                >
                  Implementing features that create the illusion of popularity and credibility, 
                  such as share counts, comments, and social media integration.
                </Typography>
              </Box>
            </Paper>

            {/* Educational Purpose */}
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#cc0000',
                  mb: 3
                }}
              >
                Educational Purpose
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop"
                  alt="Education and learning about media literacy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    marginBottom: '20px'
                  }}
                />
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3,
                  color: '#2d3748'
                }}
              >
                This platform serves as an educational tool to help users understand:
              </Typography>

              <Box component="ul" sx={{ pl: 3, mb: 3 }}>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  How to identify fake news and misinformation
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  The importance of media literacy and critical thinking
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  The techniques used to create convincing fake news
                </Typography>
                <Typography component="li" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 1, color: '#2d3748' }}>
                  The responsibility of verifying information before sharing
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: '#2d3748'
                }}
              >
                By experiencing how convincing fake news can be, users develop better 
                critical thinking skills and become more discerning consumers of information.
              </Typography>
            </Paper>
          </Grid>

          {/* Right Sidebar */}
          <Grid item xs={12} lg={4}>
            {/* Disclaimer */}
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#cc0000',
                  mb: 2
                }}
              >
                ⚠️ Important Disclaimer
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  color: '#4a5568'
                }}
              >
                This is an educational experiment. All content is fictional and created for 
                demonstration purposes only. Do not treat any information on this site as real news.
              </Typography>
            </Paper>

            {/* Key Facts */}
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2
                }}
              >
                Key Facts
              </Typography>
              <Box component="ul" sx={{ pl: 2 }}>
                <Typography component="li" sx={{ fontSize: '0.9rem', lineHeight: 1.6, mb: 1, color: '#4a5568' }}>
                  Founded: 2024 (Experimental)
                </Typography>
                <Typography component="li" sx={{ fontSize: '0.9rem', lineHeight: 1.6, mb: 1, color: '#4a5568' }}>
                  Purpose: Educational Research
                </Typography>
                <Typography component="li" sx={{ fontSize: '0.9rem', lineHeight: 1.6, mb: 1, color: '#4a5568' }}>
                  Content: 100% Fictional
                </Typography>
                <Typography component="li" sx={{ fontSize: '0.9rem', lineHeight: 1.6, mb: 1, color: '#4a5568' }}>
                  Status: Educational Platform
                </Typography>
              </Box>
            </Paper>

            {/* Contact Info */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  color: '#4a5568',
                  mb: 2
                }}
              >
                Questions about this experiment or media literacy education?
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  color: '#4a5568'
                }}
              >
                Email: education@fnn-experiment.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutPage; 