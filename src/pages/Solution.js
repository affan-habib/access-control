// src/components/SolutionSection.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

function SolutionSection() {
    return (
        <Box sx={{ py: 4, height: "90vh", display: "flex", alignItems: 'center', justifyContent: 'center' }}>
            <Box>
                <Typography variant="h4" align="center">
                    Discover the Solution You Need
                </Typography>
                <Typography variant="body1" align="center">
                    Our cutting-edge technology is here to solve your problems.
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{ mt: 2, mx: 'auto', display: 'block' }}>
                    Get Started
                </Button>
            </Box>
        </Box>
    );
}

export default SolutionSection;
