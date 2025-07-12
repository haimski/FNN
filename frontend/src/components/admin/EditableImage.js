import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  IconButton,
  Alert
} from '@mui/material';
import { Edit as EditIcon, Close as CloseIcon } from '@mui/icons-material';
import api from '../../utils/api';

const EditableImage = ({ 
  src, 
  alt, 
  onImageChange, 
  sx = {}, 
  height = 200,
  width = '100%',
  articleSlug = null // Add articleSlug prop for navigation
}) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [uploadFile, setUploadFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      setEditModalOpen(true);
      setImageUrl('');
      setUploadFile(null);
      setError('');
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadFile(file);
      setImageUrl('');
    }
  };

  const handleUrlChange = (e) => {
    setImageUrl(e.target.value);
    setUploadFile(null);
  };

  const handleSave = async () => {
    setLoading(true);
    setError('');

    try {
      let newImageUrl = '';

      if (uploadFile) {
        // Upload file
        const formData = new FormData();
        formData.append('image', uploadFile);
        
        const response = await api.post('/upload/image', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        
        newImageUrl = response.data.imageUrl;
      } else if (imageUrl) {
        // Set URL
        const response = await api.post('/upload/image-url', { imageUrl });
        newImageUrl = response.data.imageUrl;
      } else {
        setError('Please provide either a file or URL');
        setLoading(false);
        return;
      }

      onImageChange(newImageUrl);
      setEditModalOpen(false);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update image');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setEditModalOpen(false);
    setImageUrl('');
    setUploadFile(null);
    setError('');
  };

  return (
    <>
      <Box
        sx={{
          position: 'relative',
          cursor: isAuthenticated ? 'pointer' : 'default',
          '&:hover': isAuthenticated ? {
            '& .edit-overlay': {
              opacity: 1
            }
          } : {},
          zIndex: isAuthenticated ? 5 : 1, // Lower z-index for anonymous users
          ...sx
        }}
        onClick={isAuthenticated ? handleImageClick : undefined}
      >
        {!isAuthenticated && articleSlug ? (
          <Link to={`/article/${articleSlug}`} style={{ textDecoration: 'none' }}>
            <img
              src={src}
              alt={alt}
              style={{
                width: width,
                height: height,
                objectFit: 'cover',
                borderRadius: '8px'
              }}
            />
          </Link>
        ) : (
          <img
            src={src}
            alt={alt}
            style={{
              width: width,
              height: height,
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
        )}
        
        {isAuthenticated && (
          <Box
            className="edit-overlay"
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0,
              transition: 'opacity 0.2s',
              borderRadius: '8px',
              zIndex: 10, // Higher z-index to receive clicks
            }}
          >
            <EditIcon sx={{ color: 'white', fontSize: 24 }} />
          </Box>
        )}
      </Box>

      <Dialog 
        open={editModalOpen} 
        onClose={handleCancel}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <Typography variant="h6">Edit Image</Typography>
          <IconButton onClick={handleCancel} size="small">
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Upload Image File
            </Typography>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ marginBottom: '16px' }}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Or Enter Image URL
            </Typography>
            <TextField
              fullWidth
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={handleUrlChange}
              variant="outlined"
            />
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            variant="contained"
            disabled={loading || (!uploadFile && !imageUrl)}
            sx={{
              backgroundColor: '#cc0000',
              '&:hover': { backgroundColor: '#a00000' }
            }}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditableImage; 