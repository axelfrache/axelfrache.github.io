import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText, Link, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Portfolio', path: '/portfolio' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact', path: '/contact' },
];

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => setDrawerOpen(!drawerOpen);

    const drawerContent = (
        <Box onClick={toggleDrawer} sx={{ width: 250, fontFamily: 'CentraRegular' }}>
            <List>
                {navLinks.map(({ title, path }) => (
                    <ListItem button key={title} component={RouterLink} to={path}>
                        <ListItemText primary={title} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#5E6378' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link component={RouterLink} to="/" sx={{ textDecoration: 'none', color: 'white'}}>
                            @axelfrache
                        </Link>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={toggleDrawer}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block', fontFamily: 'CentraRegular' } }}>
                        {navLinks.map(({ title, path }) => (
                            <Button key={title} color="inherit" component={RouterLink} to={path}>
                                {title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                {drawerContent}
            </Drawer>
        </Box>
    );
};

export default Header;