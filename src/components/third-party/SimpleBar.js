import PropTypes from 'prop-types';
import { alpha, styled, useMediaQuery } from '@mui/material';
import { Box } from '@mui/material';
import SimpleBar from 'simplebar-react';

const RootStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
}));

const SimpleBarStyle = styled(SimpleBar)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[500], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 1,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 10,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 6,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

export default function SimpleBarScroll({ children, sx, ...other }) {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <RootStyle>
      {isMobile ? (
        <Box sx={{ overflowX: 'auto', ...sx }} {...other}>
          {children}
        </Box>
      ) : (
        <SimpleBarStyle timeout={500} clickOnTrack={false} sx={sx} {...other}>
          {children}
        </SimpleBarStyle>
      )}
    </RootStyle>
  );
}

SimpleBarScroll.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.object,
};
