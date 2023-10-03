import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import menuItems from 'menu-items';
import { Stack } from '@mui/material';

const Header = () => {
    return (
        <div>
            <HideOnScroll>
                <AppBar sx={{ backgroundColor: 'primary.main', boxShadow: 'none' }}>
                    <Toolbar>
                        <Container
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            maxWidth="lg"
                        >
                            <Stack
                                direction="row"
                                spacing={2}
                            >

                                {menuItems.map((item, index) => (
                                    <Typography
                                        key={index}
                                        variant="p"
                                        color="black"
                                        component={Link}
                                        to={item.route}
                                        sx={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        {item.label}
                                    </Typography>
                                ))}
                            </Stack>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar />
        </div>
    );
};

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default Header;
