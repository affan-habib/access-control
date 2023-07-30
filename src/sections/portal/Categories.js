import React from 'react';
import { Card, Typography, Box, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import HomeIcon from '@mui/icons-material/Home';

const useStyles = makeStyles({
    card: {
        display: 'flex',
        padding: '15px',
        alignItems: 'center',
        '&:hover': {
            '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
            cursor: 'pointer',
        },
    },
    iconContainer: {
        width: '90px',
        height: '90px',
        backgroundColor: 'rgba(175, 252, 65, 0.1)',
        borderRadius: '10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontSize: '64px', // Adjust the icon size as needed
        color: '#6BD425', // Use the specified icon color
    },
    textContainer: {
        marginLeft: '20px',
    },
});

const RoundedCard = ({ heading, subheading, }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.card}>
            <Box className={classes.iconContainer}>
                <HomeIcon fontSize="large" sx={{ fontSize: "64px", color: "primary.main" }} />
            </Box>
            <Box className={classes.textContainer}>
                <Typography variant="h4" className={classes.heading} gutterBottom>
                    {heading}
                </Typography>
                <Typography variant="body1" sx={{ color: 'secondary.main' }}>
                    {subheading}
                </Typography>
            </Box>
        </Paper>
    );
};

export default RoundedCard;
