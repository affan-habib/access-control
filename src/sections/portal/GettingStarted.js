import React from 'react';
import { Grid, Paper, Typography, Card, CardContent, Avatar } from '@mui/material';
import { blue } from '@mui/material/colors';
import portalImage from 'assets/images/portal/mockup.jpg';

const StepCard = ({ stepNumber, title, description }) => {
    return (
        <Card
            sx={{
                '&:hover': { boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' },
                display: 'flex',
                alignItems: 'center',
                padding: '10px',
            }}
        >
            <Avatar sx={{ bgcolor: 'primary.main', margin: '20px' }}>{stepNumber}</Avatar>
            <CardContent>
                <Typography variant="h4">{title}</Typography>
                <Typography>{description}</Typography>
            </CardContent>
        </Card>
    );
};

const GettingStarted = () => {
    return (
        <Grid container spacing={6} sx={{ mb: 12 }} alignItems='center'>
            {/* Image Section */}
            <Grid item xs={12} md={5}>
                <Paper elevation={3} style={{ padding: '20px' }}>
                    {/* Placeholder image */}
                    <img
                        src={portalImage}
                        alt="Placeholder"
                        style={{ width: '100%' }}
                    />
                </Paper>
            </Grid>
            {/* Steps Section */}
            <Grid item xs={12} md={7}>
                <Typography variant='h3' mb={4}>How it Works</Typography>
                <Typography mb={2} variant='body1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <StepCard
                            stepNumber={1}
                            title="Your first step"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StepCard
                            stepNumber={2}
                            title="Another step"
                            description="Curabitur blandit tempus porttitor. Etiam porta sem malesuada magna mollis euismod."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <StepCard
                            stepNumber={3}
                            title="Final step"
                            description="Vestibulum id ligula porta felis euismod semper. Donec sed odio dui."
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default GettingStarted;
