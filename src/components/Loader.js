import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingComponent = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CircularProgress sx={{ color: 'primary.main' }} />
    </div>
  );
};

export default LoadingComponent;
