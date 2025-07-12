import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  TextField, 
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  useTheme,
  useMediaQuery,
  Alert
} from '@mui/material';
import { 
  Email, 
  Send,
  TrendingUp,
  Rocket,
  Star
} from '@mui/icons-material';
import { motion } from 'framer-motion';

import NewsCard from '../news/NewsCard';

const Sidebar = ({ featuredArticles = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Please enter a valid email');
      return;
    }

    try {
      // In a real app, you would call the API here
      // await axios.post('/api/newsletter/subscribe', { email });
      
      setIsSubscribed(true);
      setEmail('');
      setEmailError('');
    } catch (error) {
      setEmailError('Something went wrong. Please try again.');
    }
  };

  if (isMobile) {
    return null; // Hide sidebar on mobile
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 320 }}>
      {/* Featured News */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Star sx={{ color: '#cc0000', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Featured News
            </Typography>
          </Box>
          
          <List sx={{ p: 0 }}>
            {featuredArticles.slice(0, 3).map((article, index) => (
              <React.Fragment key={article._id || index}>
                <ListItem sx={{ px: 0, py: 1 }}>
                  <ListItemText
                    primary={
                      <Link
                        to={`/article/${article.slug}`}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 500,
                            lineHeight: 1.4,
                            cursor: 'pointer',
                            '&:hover': {
                              color: '#cc0000',
                            }
                          }}
                        >
                          {article.title}
                        </Typography>
                      </Link>
                    }
                    secondary={
                      <Typography variant="caption" color="text.secondary">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </Typography>
                    }
                  />
                </ListItem>
                {index < 2 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Email sx={{ color: '#cc0000', mr: 1 }} />
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Newsletter
            </Typography>
          </Box>
          
          {isSubscribed ? (
            <Alert severity="success" sx={{ mb: 2 }}>
              Successfully subscribed to our newsletter!
            </Alert>
          ) : (
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Stay updated with the latest news and exclusive content.
            </Typography>
          )}

          <form onSubmit={handleNewsletterSubmit}>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              error={!!emailError}
              helperText={emailError}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              startIcon={<Send />}
              sx={{
                backgroundColor: '#cc0000',
                '&:hover': {
                  backgroundColor: '#a00000',
                }
              }}
            >
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Trip to Mars Ad */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <Card
          sx={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#ffffff',
            cursor: 'pointer',
            '&:hover': {
              boxShadow: theme.shadows[8],
            }
          }}
        >
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <Rocket sx={{ fontSize: 48, mb: 2, color: '#ffffff' }} />
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
              Trip to Mars
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Book your once-in-a-lifetime journey to the Red Planet. 
              Limited seats available!
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ffffff',
                color: '#667eea',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                }
              }}
            >
              Book Now
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
};

export default Sidebar; 