import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link as MuiLink,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  YouTube,
  LinkedIn 
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const footerSections = [
    {
      title: 'Topics',
      links: [
        { name: 'World News', path: '/category/world' },
        { name: 'Economy', path: '/category/economy' },
        { name: 'Sports', path: '/category/sports' },
        { name: 'Travel', path: '/category/travel' },
        { name: 'Culture', path: '/category/culture' },
        { name: 'Gossip', path: '/category/gossip' },
      ]
    },
    {
      title: 'General',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
        { name: 'Support', path: '/support' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'My Profile', path: '/about' },
        { name: 'Login', path: '/login' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: YouTube, url: '#', label: 'YouTube' },
    { icon: LinkedIn, url: '#', label: 'LinkedIn' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a1a1a',
        color: '#ffffff',
        py: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 2 }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: '#cc0000',
                  fontFamily: 'Georgia, serif',
                  mb: 1
                }}
              >
                BNN
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#cccccc',
                  mb: 2
                }}
              >
                Bullshit News Network - Your trusted source for the most unbelievable news stories from around the world.
              </Typography>
            </Box>
            
            {/* Social Media Links */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <MuiLink
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#cccccc',
                    '&:hover': {
                      color: '#cc0000',
                    }
                  }}
                >
                  <social.icon />
                </MuiLink>
              ))}
            </Box>
          </Grid>

          {/* Navigation Links */}
          {footerSections.map((section) => (
            <Grid item xs={12} sm={6} md={4} key={section.title}>
              <Typography
                variant="h6"
                sx={{
                  color: '#ffffff',
                  fontWeight: 600,
                  mb: 2,
                  fontSize: '1rem'
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {section.links.map((link) => (
                  <MuiLink
                    key={link.name}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: '#cccccc',
                      textDecoration: 'none',
                      fontSize: '0.875rem',
                      '&:hover': {
                        color: '#cc0000',
                        textDecoration: 'underline',
                      }
                    }}
                  >
                    {link.name}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 3, borderColor: '#333333' }} />

        {/* Bottom Section */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 2 : 0
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#999999',
              fontSize: '0.75rem'
            }}
          >
            © {new Date().getFullYear()} BNN - Bullshit News Network. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <MuiLink
              href="#"
              sx={{
                color: '#999999',
                fontSize: '0.75rem',
                textDecoration: 'none',
                '&:hover': {
                  color: '#cc0000',
                  textDecoration: 'underline',
                }
              }}
            >
              Terms of Service
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#999999',
                fontSize: '0.75rem',
                textDecoration: 'none',
                '&:hover': {
                  color: '#cc0000',
                  textDecoration: 'underline',
                }
              }}
            >
              Cookie Policy
            </MuiLink>
            <MuiLink
              href="#"
              sx={{
                color: '#999999',
                fontSize: '0.75rem',
                textDecoration: 'none',
                '&:hover': {
                  color: '#cc0000',
                  textDecoration: 'underline',
                }
              }}
            >
              Accessibility
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 