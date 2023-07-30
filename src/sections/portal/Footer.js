import React from 'react';
import { Grid, Typography, Link, useTheme, Paper } from '@mui/material';
import darklogo from 'assets/logo-dark.png'; // Update the path as per your folder structure
import logo from 'assets/logo-text.png'; // Update the path as per your folder structure

const Footer = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    return (
        <Paper sx={{ padding: 6, my: 10, }}>
            <Grid container>
                {/* First Column */}
                <Grid item xs={12} sm={6} md={4}>
                    <img src={isDarkMode ? darklogo : logo} alt="Logo" style={{ height: '40px', marginBottom: '10px' }} />
                </Grid>

                {/* Second Column */}
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Column 2
                    </Typography>
                    <Typography variant="body1">
                        <Link href="#" sx={{ display: 'block', margin: '8px 0' }}>
                            Link 3
                        </Link>
                        <Link href="#" sx={{ display: 'block', margin: '8px 0' }}>
                            Link 4
                        </Link>
                    </Typography>
                </Grid>

                {/* Third Column */}
                <Grid item xs={12} sm={12} md={4}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Column 3
                    </Typography>
                    <Typography variant="body1">

                        <Link href="#" sx={{ display: 'block', margin: '8px 0' }}>
                            Link 5
                        </Link>
                        <Link href="#" sx={{ display: 'block', margin: '8px 0' }}>
                            Link 6
                        </Link>
                    </Typography>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default Footer;
