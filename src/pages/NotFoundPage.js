import React from 'react';
import Typography from '@mui/material/Typography';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '20vh' }}>
      <Typography variant="h1" color="textPrimary">
        404
      </Typography>
      <Typography variant="h5" color="textSecondary">
        Page not found
      </Typography>
    </div>
  );
};

export default NotFoundPage;
