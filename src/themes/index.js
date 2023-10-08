import PropTypes from 'prop-types';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';

// ==============================|| DEFAULT THEME - MAIN  ||============================== //

export default function ThemeCustomization({ children }) {
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#000',
        light: 'rgba(45,41,41,0.71)',
        dark: 'rgba(30,29,29,0.71)',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#2a44e8',
      },
      info: {
        main: '#00f52b',
      },
      warning: {
        main: '#ff0000',
      },
      success: {
        main: '#ff6d00',
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'capitalize',
            borderRadius: '4px', // Set the default border radius to 4px
            boxShadow: 'none', // Remove the shadow
            '&:hover': {
              boxShadow: 'none',
            },
          },
        },
        defaultProps: {
          disableRipple: true, // Disable the ripple effect by default
        },
      },
      MuiTextField: {
        defaultProps: {
          size: 'small', // Set the default size to "small"
        },
        styleOverrides: {
          root: {
            width: '100%', // Set the default width to 100%
          },
        },
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}

ThemeCustomization.propTypes = {
  children: PropTypes.node,
};
