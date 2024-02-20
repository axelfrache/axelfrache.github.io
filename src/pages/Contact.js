import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Link } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Header from "../components/Header";

const Contact = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Implement the email sending functionality here.
        // This could be a POST request to a backend service or using a service like EmailJS.
        alert('Form submitted. Implement the email sending functionality.');
    };

    return (
        <div>
        <Header />
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>Contact Me</Typography>
            <Typography paragraph>
                Feel free to reach out to me via email or connect with me on LinkedIn and GitHub.
            </Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item>
                    <Link href="https://www.linkedin.com/in/axel-frache" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon color="primary" sx={{ fontSize: 40 }} />
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="https://github.com/axelfrache" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon color="action" sx={{ fontSize: 40 }} />
                    </Link>
                </Grid>
            </Grid>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formValues.email}
                    onChange={handleChange}
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Message"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    margin="normal"
                    multiline
                    rows={4}
                />
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    sx={{ mt: 3 }}
                >
                    Send
                </Button>
            </form>
        </Container>
        </div>
    );
};

export default Contact;
