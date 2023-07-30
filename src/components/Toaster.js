// Toaster.js
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { clearMessage } from 'store/reducers/toastSlice';

const Toaster = () => {
  const { type, message } = useSelector((state) => state.toast);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(clearMessage());
  };

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={type === 'success' ? 'success' : 'error'}
      >
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default Toaster;
