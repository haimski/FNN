import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  Typography,
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Search as SearchIcon,
  Close as CloseIcon 
} from '@mui/icons-material';

import { toggleMobileMenu, closeMobileMenu } from '../../store/slices/uiSlice';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const dispatch = useDispatch();
  const { mobileMenuOpen } = useSelector((state) => state.ui);
  const { categories } = useSelector((state) => state.categories);

  const navigationItems = [
    { name: 'World News', path: '/category/world' },
    { name: 'Economy', path: '/category/economy' },
    { name: 'Sports', path: '/category/sports' },
    { name: 'Travel', path: '/category/travel' },
    { name: 'Culture', path: '/category/culture' },
    { name: 'Gossip', path: '/category/gossip' },
  ];

  const handleMobileMenuToggle = () => {
    dispatch(toggleMobileMenu());
  };

  const handleMobileMenuClose = () => {
    dispatch(closeMobileMenu());
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #cc0000',
        '& .MuiToolbar-root': {
          minHeight: '64px',
          padding: { xs: '0 16px', md: '0 24px' }
        }
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 4 }}>
              <Typography
                variant="h4"
                component="div"
                sx={{
                  fontWeight: 700,
                  color: '#cc0000',
                  fontFamily: 'Georgia, serif',
                  fontSize: { xs: '1.5rem', md: '2rem' }
                }}
              >
                FNN
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: '#666666',
                  ml: 1,
                  fontSize: { xs: '0.75rem', md: '0.875rem' },
                  display: { xs: 'none', sm: 'block' }
                }}
              >
                Fake News Network
              </Typography>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', flexGrow: 1, gap: 1 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: isActive(item.path) ? '#cc0000' : '#333333',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    padding: '8px 16px',
                    borderRadius: 0,
                    borderBottom: isActive(item.path) ? '2px solid #cc0000' : '2px solid transparent',
                    '&:hover': {
                      backgroundColor: 'rgba(204, 0, 0, 0.1)',
                      color: '#cc0000',
                    }
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {/* Search Icon */}
          <IconButton
            sx={{
              color: '#333333',
              '&:hover': {
                backgroundColor: 'rgba(204, 0, 0, 0.1)',
                color: '#cc0000',
              }
            }}
          >
            <SearchIcon />
          </IconButton>

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleMobileMenuToggle}
              sx={{
                color: '#333333',
                ml: 1,
                '&:hover': {
                  backgroundColor: 'rgba(204, 0, 0, 0.1)',
                  color: '#cc0000',
                }
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: '#ffffff',
          }
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ color: '#cc0000', fontWeight: 700 }}>
              Menu
            </Typography>
            <IconButton onClick={handleMobileMenuClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>
        
        <List sx={{ pt: 0 }}>
          {navigationItems.map((item) => (
            <ListItem
              key={item.path}
              component={Link}
              to={item.path}
              onClick={handleMobileMenuClose}
              sx={{
                borderBottom: '1px solid #f0f0f0',
                '&:hover': {
                  backgroundColor: 'rgba(204, 0, 0, 0.1)',
                }
              }}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: isActive(item.path) ? '#cc0000' : '#333333',
                      fontWeight: 700,
                      fontSize: '1rem',
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header; 