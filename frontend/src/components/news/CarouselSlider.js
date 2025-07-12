import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Box, 
  Typography, 
  IconButton, 
  Container,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  ChevronLeft, 
  ChevronRight,
  PlayArrow,
  Pause
} from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselSlider = ({ articles = [] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying || articles.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % articles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, articles.length]);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % articles.length);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  if (articles.length === 0) {
    return (
      <Box
        sx={{
          height: { xs: '300px', md: '500px' },
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h6" color="text.secondary">
          Loading headlines...
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '300px', md: '500px' },
        overflow: 'hidden',
        backgroundColor: '#000',
        mb: 4
      }}
    >
      <Container maxWidth="xl" sx={{ height: '100%', position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{ height: '100%' }}
          >
            <Box
              sx={{
                position: 'relative',
                height: '100%',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${articles[currentSlide]?.imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'flex-end',
                color: '#ffffff'
              }}
            >
              {/* Content Overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  p: { xs: 2, md: 4 },
                  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))'
                }}
              >
                <Link 
                  to={`/article/${articles[currentSlide]?.slug}`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <Typography
                    variant={isMobile ? 'h5' : 'h3'}
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      lineHeight: 1.2,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#cc0000',
                        transition: 'color 0.3s ease'
                      }
                    }}
                  >
                    {articles[currentSlide]?.title}
                  </Typography>
                </Link>
                
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    opacity: 0.9,
                    lineHeight: 1.5,
                    maxWidth: '600px'
                  }}
                >
                  {articles[currentSlide]?.excerpt}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {articles[currentSlide]?.author}
                  </Typography>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    {new Date(articles[currentSlide]?.publishedAt).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <IconButton
          onClick={handlePrevious}
          sx={{
            position: 'absolute',
            left: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }
          }}
        >
          <ChevronLeft />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            right: 16,
            top: '50%',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }
          }}
        >
          <ChevronRight />
        </IconButton>

        {/* Play/Pause Button */}
        <IconButton
          onClick={togglePlayPause}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }
          }}
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Dots Indicator */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 16,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 1
          }}
        >
          {articles.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? '#cc0000' : 'rgba(255, 255, 255, 0.5)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: index === currentSlide ? '#cc0000' : 'rgba(255, 255, 255, 0.7)',
                }
              }}
            />
          ))}
        </Box>

        {/* Slide Counter */}
        <Box
          sx={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#ffffff',
            px: 2,
            py: 0.5,
            borderRadius: 1,
            fontSize: '0.875rem'
          }}
        >
          {currentSlide + 1} / {articles.length}
        </Box>
      </Container>
    </Box>
  );
};

export default CarouselSlider; 