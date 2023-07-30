import React from 'react';
import { styled } from '@mui/material';

const HeroContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
});

const HeroText = styled('h1')({
    fontSize: '4rem', // 64px converted to rem
    color: '#03285A',
    textAlign: 'center',
    margin: 40,
});

const ColoredText = styled('span')({
    color: '#6BD425',
});

const Hero = () => {
    return (
        <HeroContainer>
            <HeroText>
                <ColoredText>gonoJobs</ColoredText> - Your Gateway to Thriving Careers!
            </HeroText>
        </HeroContainer>
    );
};

export default Hero;
