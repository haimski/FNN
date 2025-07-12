import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import EditableText from '../admin/EditableText';
import EditableImage from '../admin/EditableImage';
import api from '../../utils/api';

const NewsCard = ({ article, featured = false, compact = false }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleTitleChange = async (newTitle) => {
    try {
      await api.put(`/articles/${article._id}`, { title: newTitle });
      // You might want to update the article in the Redux store here
    } catch (error) {
      console.error('Failed to update title:', error);
      throw error;
    }
  };

  const handleExcerptChange = async (newExcerpt) => {
    try {
      await api.put(`/articles/${article._id}`, { excerpt: newExcerpt });
      // You might want to update the article in the Redux store here
    } catch (error) {
      console.error('Failed to update excerpt:', error);
      throw error;
    }
  };

  const handleImageChange = async (newImageUrl) => {
    try {
      await api.put(`/articles/${article._id}`, { imageUrl: newImageUrl });
      // You might want to update the article in the Redux store here
    } catch (error) {
      console.error('Failed to update image:', error);
      throw error;
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      world: '#3b82f6',
      economy: '#10b981',
      sports: '#f59e0b',
      travel: '#8b5cf6',
      culture: '#ec4899',
      gossip: '#eab308'
    };
    return colors[category] || '#6b7280';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      return 'Today';
    } else if (diffDays === 2) {
      return 'Yesterday';
    } else if (diffDays <= 7) {
      return `${diffDays - 1} days ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: theme.shadows[8],
            transform: 'translateY(-4px)',
          }
        }}
      >
        {/* Image */}
        <EditableImage
          src={article.imageUrl}
          alt={article.imageAlt}
          onImageChange={handleImageChange}
          height={featured ? (isMobile ? 200 : 250) : (compact ? 140 : 180)}
          sx={{
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)',
            }
          }}
        />

        {/* Content */}
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            p: compact ? 2 : 3,
            position: 'relative',
          }}
        >
          {/* Clickable area for navigation (excluding edit areas) */}
          <Box
            component={Link}
            to={`/article/${article.slug}`}
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
              textDecoration: 'none',
              color: 'inherit',
              pointerEvents: 'none', // This allows clicks to pass through to edit elements
            }}
          />

          {/* Category Badge */}
          <Box sx={{ mb: 1.5 }}>
            <Chip
              label={article.category.charAt(0).toUpperCase() + article.category.slice(1)}
              size="small"
              sx={{
                backgroundColor: getCategoryColor(article.category),
                color: '#ffffff',
                fontWeight: 500,
                fontSize: '0.75rem'
              }}
            />
          </Box>

          {/* Title */}
          <EditableText
            value={article.title}
            onTextChange={handleTitleChange}
            variant={featured ? (isMobile ? 'h6' : 'h5') : (compact ? 'subtitle1' : 'h6')}
            component="h3"
            multiline={featured ? 3 : 2}
            sx={{
              fontWeight: 600,
              lineHeight: 1.3,
              mb: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: featured ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              color: '#1a1a1a',
              '&:hover': {
                color: '#cc0000',
              }
            }}
          />

          {/* Excerpt */}
          {!compact && (
            <EditableText
              value={article.excerpt}
              onTextChange={handleExcerptChange}
              variant="body2"
              color="text.secondary"
              multiline={featured ? 3 : 2}
              sx={{
                mb: 2,
                lineHeight: 1.5,
                display: '-webkit-box',
                WebkitLineClamp: featured ? 3 : 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                flexGrow: 1
              }}
            />
          )}

          {/* Meta Information */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: 'auto',
              pt: 1,
              borderTop: '1px solid #f0f0f0'
            }}
          >
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: '0.75rem',
                fontWeight: 500
              }}
            >
              {article.author}
            </Typography>
            
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                fontSize: '0.75rem'
              }}
            >
              {formatDate(article.publishedAt)}
            </Typography>
          </Box>

          {/* Featured Badge */}
          {featured && (
            <Box
              sx={{
                position: 'absolute',
                top: 12,
                right: 12,
                backgroundColor: '#cc0000',
                color: '#ffffff',
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                fontSize: '0.75rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
            >
              Featured
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsCard; 