import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Container, 
  Typography, 
  Box, 
  Grid,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  useTheme
} from '@mui/material';
import { 
  ExpandMore, 
  Phone, 
  Email, 
  Chat, 
  Support, 
  Info,
  Link as LinkIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SupportPage = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "How do I report a technical issue?",
      answer: "You can report technical issues through our contact form, by emailing support@bnn-news.com, or by calling our support line. Please provide as much detail as possible including your browser, device, and steps to reproduce the issue."
    },
    {
      question: "How can I subscribe to the newsletter?",
      answer: "You can subscribe to our newsletter by entering your email address in the subscription form located in the sidebar of our homepage. You'll receive daily updates on the latest news and stories."
    },
    {
      question: "How do I contact the editorial team?",
      answer: "For editorial inquiries, feedback, or story suggestions, please use our contact form and select 'Editorial Feedback' as the category, or email us directly at editorial@bnn-news.com."
    },
    {
      question: "What are your business hours?",
      answer: "Our support team is available Monday through Friday from 9:00 AM to 6:00 PM EST, and Saturdays from 10:00 AM to 4:00 PM EST. For urgent matters outside these hours, please leave a message and we'll respond as soon as possible."
    },
    {
      question: "How can I advertise on your platform?",
      answer: "For advertising inquiries, please contact our advertising team at ads@bnn-news.com or use our contact form and select 'Advertising' as the category. We offer various advertising options including banner ads, sponsored content, and newsletter sponsorships."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Support - BNN | Bullshit News Network</title>
        <meta name="description" content="Get support and help from BNN - Bullshit News Network. Contact our support team for assistance." />
        <meta property="og:title" content="Support - BNN | Bullshit News Network" />
        <meta property="og:description" content="Get support and help from BNN." />
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
            Support Center
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
            We're here to help. Find the support option that works best for you.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Options */}
          <Grid item xs={12} lg={8}>
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 3
                }}
              >
                Contact Support
              </Typography>

              <Grid container spacing={3}>
                {/* Phone Support */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                    <Phone sx={{ fontSize: 48, color: '#cc0000', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Phone Support
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                      +1 (555) 123-4567
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Available during business hours
                    </Typography>
                    <Chip 
                      label="Live Support" 
                      color="success" 
                      size="small" 
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      For urgent technical issues and immediate assistance
                    </Typography>
                  </Paper>
                </Grid>

                {/* Email Support */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                    <Email sx={{ fontSize: 48, color: '#cc0000', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Email Support
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                      support@bnn-news.com
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Available 24/7
                    </Typography>
                    <Chip 
                      label="24/7 Support" 
                      color="primary" 
                      size="small" 
                      sx={{ mb: 2 }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      For detailed inquiries and non-urgent issues
                    </Typography>
                  </Paper>
                </Grid>

                {/* Online Chat */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                    <Chat sx={{ fontSize: 48, color: '#cc0000', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Online Chat
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                      Live Chat Available
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Business hours only
                    </Typography>
                    <Chip 
                      label="Instant Help" 
                      color="warning" 
                      size="small" 
                      sx={{ mb: 2 }}
                    />
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#cc0000',
                        '&:hover': { backgroundColor: '#a00000' },
                        display: 'block',
                        mx: 'auto',
                        mt: 2
                      }}
                    >
                      Start Chat
                    </Button>
                  </Paper>
                </Grid>

                {/* Contact Form */}
                <Grid item xs={12} md={6}>
                  <Paper elevation={1} sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                    <Support sx={{ fontSize: 48, color: '#cc0000', mb: 2 }} />
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                      Contact Form
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 2 }}>
                      Detailed Support Request
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      For complex issues
                    </Typography>
                    <Chip 
                      label="Detailed Support" 
                      color="info" 
                      size="small" 
                      sx={{ mb: 2 }}
                    />
                    <Button
                      component={Link}
                      to="/contact"
                      variant="outlined"
                      sx={{
                        borderColor: '#cc0000',
                        color: '#cc0000',
                        '&:hover': { 
                          borderColor: '#a00000',
                          backgroundColor: 'rgba(204, 0, 0, 0.1)'
                        },
                        display: 'block',
                        mx: 'auto',
                        mt: 2
                      }}
                    >
                      Contact Us
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Paper>

            {/* FAQ Section */}
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 3
                }}
              >
                Frequently Asked Questions
              </Typography>

              {faqData.map((faq, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === `panel${index}`}
                  onChange={handleAccordionChange(`panel${index}`)}
                  sx={{ mb: 1 }}
                >
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" sx={{ lineHeight: 1.6, color: '#4a5568' }}>
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Paper>
          </Grid>

          {/* Support Information */}
          <Grid item xs={12} lg={4}>
            {/* Business Hours */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 3
                }}
              >
                Support Hours
              </Typography>

              <List>
                <ListItem>
                  <ListItemIcon>
                    <Info sx={{ color: '#cc0000' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Monday - Friday"
                    secondary="9:00 AM - 6:00 PM EST"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Info sx={{ color: '#cc0000' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Saturday"
                    secondary="10:00 AM - 4:00 PM EST"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Info sx={{ color: '#cc0000' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Sunday"
                    secondary="Closed"
                  />
                </ListItem>
              </List>
            </Paper>

            {/* Response Times */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2
                }}
              >
                Response Times
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Phone Support
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Immediate
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Online Chat
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  &lt; 5 minutes
                </Typography>
              </Box>
              
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Email Support
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  24-48 hours
                </Typography>
              </Box>
              
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Contact Form
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  24-48 hours
                </Typography>
              </Box>
            </Paper>

            {/* Quick Links */}
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2
                }}
              >
                Quick Links
              </Typography>
              
              <List>
                <ListItem component={Link} to="/contact" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemIcon>
                    <LinkIcon sx={{ color: '#cc0000' }} />
                  </ListItemIcon>
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem component={Link} to="/about" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemIcon>
                    <LinkIcon sx={{ color: '#cc0000' }} />
                  </ListItemIcon>
                  <ListItemText primary="About BNN" />
                </ListItem>
                <ListItem component={Link} to="/privacy" sx={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemIcon>
                    <LinkIcon sx={{ color: '#cc0000' }} />
                  </ListItemIcon>
                  <ListItemText primary="Privacy Policy" />
                </ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SupportPage; 