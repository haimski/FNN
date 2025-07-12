import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  TextField,
  Button,
  IconButton
} from '@mui/material';
import { Edit as EditIcon, Save as SaveIcon, Cancel as CancelIcon } from '@mui/icons-material';

const EditableText = ({ 
  value, 
  onTextChange, 
  variant = 'body1',
  component = 'span',
  multiline = false,
  rows = 1,
  sx = {},
  placeholder = '',
  color = 'text.primary'
}) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [loading, setLoading] = useState(false);

  const handleEditClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isAuthenticated) {
      setIsEditing(true);
      setEditValue(value);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await onTextChange(editValue);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save text:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    }
  };

  if (!isAuthenticated) {
    return (
      <Box component={component} variant={variant} sx={{ ...sx, color, pointerEvents: 'auto', cursor: 'default' }}>
        {value}
      </Box>
    );
  }

  if (isEditing) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, ...sx }}>
        <TextField
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyPress={handleKeyPress}
          multiline={multiline}
          rows={rows}
          placeholder={placeholder}
          variant="outlined"
          size="small"
          fullWidth
          autoFocus
        />
        <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end' }}>
          <IconButton
            onClick={handleSave}
            disabled={loading}
            size="small"
            sx={{ 
              backgroundColor: '#cc0000',
              color: 'white',
              width: '36px',
              height: '36px',
              '&:hover': { backgroundColor: '#a00000' }
            }}
          >
            <SaveIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={handleCancel}
            disabled={loading}
            size="small"
            sx={{ 
              backgroundColor: '#666',
              color: 'white',
              width: '36px',
              height: '36px',
              '&:hover': { backgroundColor: '#444' }
            }}
          >
            <CancelIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        cursor: 'pointer',
        '&:hover': {
          '& .edit-icon': {
            opacity: 1
          }
        },
        ...sx
      }}
      onClick={handleEditClick}
    >
      <Box component={component} variant={variant} sx={{ color }}>
        {value}
      </Box>
      <IconButton
        className="edit-icon"
        size="small"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleEditClick(e);
        }}
        sx={{
          position: 'absolute',
          top: -8,
          right: -8,
          backgroundColor: '#cc0000',
          color: 'white',
          opacity: 0,
          transition: 'opacity 0.2s',
          zIndex: 10, // Higher z-index to receive clicks
          '&:hover': {
            backgroundColor: '#a00000'
          }
        }}
      >
        <EditIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default EditableText; 