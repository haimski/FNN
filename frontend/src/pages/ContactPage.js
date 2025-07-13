import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import { Send, Email, Phone, LocationOn } from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      category: ''
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - FNN | Fake News Network</title>
        <meta name="description" content="Get in touch with FNN - Fake News Network. Contact us for inquiries, feedback, or support." />
        <meta property="og:title" content="Contact Us - FNN | Fake News Network" />
        <meta property="og:description" content="Contact FNN for inquiries, feedback, or support." />
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
            Contact Us
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
            Get in touch with our team. We're here to help with your inquiries and feedback.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} lg={8}>
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
                Send us a Message
              </Typography>

              {submitted && (
                <Alert severity="success" sx={{ mb: 3 }}>
                  Thank you for your message! We'll get back to you soon.
                </Alert>
              )}

              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Full Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel>Category</InputLabel>
                      <Select
                        name="category"
                        value={formData.category}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value="general">General Inquiry</MenuItem>
                        <MenuItem value="editorial">Editorial Feedback</MenuItem>
                        <MenuItem value="technical">Technical Support</MenuItem>
                        <MenuItem value="advertising">Advertising</MenuItem>
                        <MenuItem value="partnership">Partnership</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<Send />}
                      sx={{
                        backgroundColor: '#cc0000',
                        '&:hover': {
                          backgroundColor: '#a00000',
                        },
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        fontWeight: 600
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} lg={4}>
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 3
                }}
              >
                Get in Touch
              </Typography>

              <Box sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Email sx={{ color: '#cc0000', mr: 2 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      contact@fnn-news.com
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Phone sx={{ color: '#cc0000', mr: 2 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      +1 (555) 123-4567
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <LocationOn sx={{ color: '#cc0000', mr: 2 }} />
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Address
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      123 News Street<br />
                      Media District, NY 10001
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>

            {/* Office Hours */}
            <Paper elevation={2} sx={{ p: 4, mb: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2
                }}
              >
                Office Hours
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Monday - Friday
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  9:00 AM - 6:00 PM EST
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
                  Saturday
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  10:00 AM - 4:00 PM EST
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="text.secondary">
                  Sunday
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Closed
                </Typography>
              </Box>
            </Paper>

            {/* Response Time */}
            <Paper elevation={2} sx={{ p: 4 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: '#1a1a1a',
                  mb: 2
                }}
              >
                Response Time
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  lineHeight: 1.6,
                  color: '#4a5568'
                }}
              >
                We typically respond to inquiries within 24-48 hours during business days. 
                For urgent matters, please call us directly.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ContactPage; 