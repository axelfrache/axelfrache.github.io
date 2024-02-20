import * as React from 'react';
import { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ width: 250 }}>
            <List>
                {/* Modification ici pour "Home" */}
                <ListItem button key="Home" component={RouterLink} to="/">
                    <ListItemText primary="Home" />
                </ListItem>
                {['Portfolio', 'Projects', 'Contact'].map((text, index) => (
                    <ListItem button key={text} component={RouterLink} to={`/${text.toLowerCase()}`}>
                        <ListItemText primary={text} />
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
                        <a href="https://github.com/AxelFrache" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                            @axelfrache
                        </a>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerToggle}
                        sx={{ display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {/* Modification ici pour "Home" également */}
                        <Button color="inherit" component={RouterLink} to="/">Home</Button>
                        <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
                        <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
                        <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Header;
