import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: '#5E6378' }}>
                <Toolbar>
                    {}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="https://github.com/AxelFrache" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
                            @axelfrache
                        </a>
                    </Typography>
                    <Button color="inherit" component={RouterLink} to="/">Home</Button>
                    <Button color="inherit" component={RouterLink} to="/portfolio">Portfolio</Button>
                    <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
                    <Button color="inherit" component={RouterLink} to="/contact">Contact</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
