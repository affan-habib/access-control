import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { ThemeProvider as StyledEngineProvider } from '@mui/system'; // Import StyledEngineProvider if you need it

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000', // Set the primary color to black
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '4px', // Set the default border radius to 4px
            boxShadow: 'none', // Remove the shadow
            '&:hover': {
              boxShadow: 'none', // Remove the shadow on hover
            },
          },
        },
        defaultProps: {
          disableRipple: true, // Disable the ripple effect by default
        },
      },
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node,
};
