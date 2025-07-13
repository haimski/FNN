import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Typography, 
  Box, 
  Paper,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';

const PrivacyPage = () => {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>Privacy Policy - FNN | Fake News Network</title>
        <meta name="description" content="FNN Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta property="og:title" content="Privacy Policy - FNN | Fake News Network" />
        <meta property="og:description" content="FNN Privacy Policy - Learn how we collect, use, and protect your personal information." />
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
            Privacy Policy
          </Typography>
          <Typography
            variant="h5"
            color="text.secondary"
            sx={{
              fontWeight: 400,
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </Typography>
        </Box>

        <Paper elevation={2} sx={{ p: 4 }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              color: '#2d3748',
              mb: 4
            }}
          >
            At FNN (Fake News Network), we are committed to protecting your privacy and ensuring 
            the security of your personal information. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website.
          </Typography>

          {/* Information We Collect */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Information We Collect
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 2
              }}
            >
              Personal Information
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              We may collect personal information that you voluntarily provide to us when you:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Subscribe to our newsletter
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Contact us through our contact form
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Participate in surveys or promotions
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Create an account on our website
              </Typography>
            </Box>

            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 2
              }}
            >
              Automatically Collected Information
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              When you visit our website, we automatically collect certain information about your device, including:
            </Typography>
            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                IP address and location data
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Browser type and version
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Operating system
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Pages visited and time spent on each page
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Referring website
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* How We Use Your Information */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              How We Use Your Information
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              We use the information we collect for various purposes, including:
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Providing and maintaining our website services
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Sending newsletters and updates to subscribers
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Responding to your inquiries and support requests
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Analyzing website usage and improving user experience
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Detecting and preventing fraud or abuse
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Complying with legal obligations
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Information Sharing */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Information Sharing and Disclosure
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                With service providers who assist us in operating our website and providing services
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                When required by law or to protect our rights and safety
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                In connection with a business transfer or merger
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                With your explicit consent
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Cookies and Tracking */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Cookies and Tracking Technologies
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              We use cookies and similar tracking technologies to enhance your browsing experience 
              and analyze website traffic. These technologies help us:
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Remember your preferences and settings
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Analyze website usage and performance
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Provide personalized content and advertisements
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Improve website functionality and security
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568'
              }}
            >
              You can control cookie settings through your browser preferences. However, disabling 
              cookies may affect the functionality of our website.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Data Security */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Data Security
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or destruction. 
              These measures include:
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Encryption of data in transit and at rest
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Regular security assessments and updates
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Access controls and authentication measures
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                Employee training on data protection
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Your Rights */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Your Rights and Choices
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              You have certain rights regarding your personal information, including:
            </Typography>

            <Box component="ul" sx={{ pl: 3, mb: 3 }}>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                The right to access and review your personal information
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                The right to correct inaccurate information
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                The right to delete your personal information
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                The right to opt-out of marketing communications
              </Typography>
              <Typography component="li" sx={{ fontSize: '1rem', lineHeight: 1.7, mb: 1, color: '#4a5568' }}>
                The right to data portability
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568'
              }}
            >
              To exercise these rights, please contact us using the information provided below.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Contact Information */}
          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Contact Us
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568',
                mb: 3
              }}
            >
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </Typography>

            <Box sx={{ pl: 3 }}>
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.7, color: '#4a5568', mb: 1 }}>
                Email: privacy@fnn-news.com
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.7, color: '#4a5568', mb: 1 }}>
                Phone: +1 (555) 123-4567
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: 1.7, color: '#4a5568' }}>
                Address: 123 News Street, Media District, NY 10001
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          {/* Changes to Policy */}
          <Box>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                color: '#1a1a1a',
                mb: 3
              }}
            >
              Changes to This Privacy Policy
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: '1rem',
                lineHeight: 1.7,
                color: '#4a5568'
              }}
            >
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or for other operational, legal, or regulatory reasons. We will notify you of any 
              material changes by posting the new Privacy Policy on this page and updating the 
              "Last updated" date. We encourage you to review this Privacy Policy periodically 
              to stay informed about how we protect your information.
            </Typography>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default PrivacyPage; 