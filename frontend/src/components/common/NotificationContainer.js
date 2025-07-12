import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar, Alert, Box } from '@mui/material';
import { removeNotification } from '../../store/slices/uiSlice';

const NotificationContainer = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.ui.notifications);

  const handleClose = (id) => {
    dispatch(removeNotification(id));
  };

  return (
    <Box>
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open={true}
          autoHideDuration={notification.duration || 6000}
          onClose={() => handleClose(notification.id)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            onClose={() => handleClose(notification.id)}
            severity={notification.type || 'info'}
            variant="filled"
            sx={{ width: '100%' }}
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </Box>
  );
};

export default NotificationContainer; 