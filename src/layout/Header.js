import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import menuData from 'menu-items';


function MenuBar() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        setSelectedMenuItem(index);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" sx={{ boxShadow: 0 }}>
                <Toolbar sx={{ bgcolor: ' #333' }}>
                    {menuData.map((menuItem, index) => (
                        <div key={index}>
                            {menuItem.submenu ? (
                                <Button
                                    color={selectedMenuItem === index ? 'info' : 'inherit'}
                                    onClick={(event) => handleMenuClick(event, index)}
                                >
                                    {menuItem.label}
                                </Button>
                            ) : (
                                <Button color="inherit" href={menuItem.link} disabled={menuItem.disabled}>
                                    {menuItem.label}
                                </Button>
                            )}
                            {menuItem.submenu && (
                                <Menu
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleMenuClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                    transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                    getContentAnchorEl={null}
                                >
                                    {menuItem.submenu.map((subItem, subIndex) => (
                                        <MenuItem key={subIndex} onClick={handleMenuClose}>
                                            {subItem.label}
                                        </MenuItem>
                                    ))}
                                </Menu>
                            )}
                        </div>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default MenuBar;
