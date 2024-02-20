import React from 'react';
import { Container, Typography, Avatar, Card, CardContent, Grid, Box, IconButton } from '@mui/material';
import Header from "../components/Header";
import Footer from "../components/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import avatarImage from "../assets/avatar.png";

const Contact = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="md" sx={{ mt: 8, display: 'flex', justifyContent: 'center' }}>
                <Card sx={{ width: '100%', maxWidth: 600, textAlign: 'center', overflow: 'hidden', py: 5 }}>
                    <Box sx={{ position: 'relative', display: 'inline-flex', justifyContent: 'center', width: '100%' }}>
                        <Avatar src={avatarImage} alt="Axel" sx={{ width: 160, height: 160, border: '4px solid white' }} />
                    </Box>
                    <CardContent>
                        <Typography variant="h4" sx={{ my: 2 }}>
                            Axel Frache
                        </Typography>
                        <Grid container justifyContent="center" spacing={2}>
                            <Grid item>
                                <IconButton aria-label="email" href="mailto:axelfrache@gmail.com" color="#8F7F92">
                                    <EmailIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="linkedin" href="https://www.linkedin.com/in/axel-frache" target="_blank" color="#8F7F92">
                                    <LinkedInIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="github" href="https://github.com/axelfrache" target="_blank" color="#8F7F92">
                                    <GitHubIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Typography variant="h6" sx={{ mt: 3 }}>
                            Contact me to discuss potential projects or exchange views on current technological trends !
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <Footer />
        </div>
    );
};

export default Contact;
