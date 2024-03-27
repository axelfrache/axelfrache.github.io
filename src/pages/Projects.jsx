import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, MenuItem, useTheme } from '@mui/material';
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SavesyncProject from "../assets/savesyncBanner.png";
import PokemonFinder from "../assets/pokemonFinderBanner.png";
import eVote from "../assets/evoteBanner.png";
import VinylAvenue from "../assets/vinylavenueBanner.png";
import SpringMultipartRestAPI from "../assets/springMultipartRestApiBanner.png";

const projects = [
    {
        title: "SaveSync",
        description: "SaveSync offers a secure and reliable platform for users to back up their critical data to a remote server and retrieve it as needed, ensuring data safety and accessibility anywhere.",
        imageUrl: SavesyncProject,
        projectUrl: "https://github.com/SaveSyncProject",
        technologies: ["Java"]
    },
    {
        title: "Pokemon Finder",
        description: "Pokemon Finder is a React-based application hosted on GitHub, serves as an interactive Pokedex, allowing users to explore and discover detailed information about Pokemon through the extensive PokeAPI.",
        imageUrl: PokemonFinder,
        projectUrl: "https://github.com/axelfrache/PokemonFinder",
        technologies: ["React"]
    },
    {
        title: "eVote",
        description: "eVote is a secure voting application for businesses, developed academically with SSL encryption, ElGamal cryptography, and zero-knowledge proofs to ensure confidentiality. Built entirely in Java with JavaFX for the UI, it enhanced my skills in secure software and UI design.",
        imageUrl: eVote,
        projectUrl: "https://github.com/SAE-DACS-S4",
        technologies: ["Java"]
    },
    {
        title: "Vinyl Avenue",
        description: "Vinyl Avenue is an academic project dedicated to crafting a unique e-commerce experience for vinyl and audio equipment enthusiasts, offering a diverse product range to satisfy all musical tastes.",
        imageUrl: VinylAvenue,
        projectUrl: "https://github.com/axelfrache/VinylAvenue",
        technologies: ["PHP"]
    },
    {
        title: "Spring Multipart Rest API",
        description: "SpringMultipartRestAPI is a Spring Boot application that streamlines file upload, download, and deletion processes through a RESTful API, utilizing Spring's robust capabilities for secure and efficient multipart file handling and management.",
        imageUrl: SpringMultipartRestAPI,
        projectUrl: "https://github.com/axelfrache/SpringMultipartRestAPI",
        technologies: ["Java"]
    }

];

const Projects = () => {
    const theme = useTheme();
    const [filter, setFilter] = useState('All');
    const filteredProjects = projects.filter(project => filter === 'All' || project.technologies.includes(filter));
    const technologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{
                    color: "#5E6378",
                    fontWeight: 'bold',
                    marginBottom: theme.spacing(2),
                    borderBottom: `2px solid #5E6378`,
                    paddingBottom: theme.spacing(1),
                }}>
                    Projects
                </Typography>
                <TextField
                    select
                    label="Filter by Technology"
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{ mt: 3, mb: 4, minWidth: 200 }}
                >
                    {technologies.map((technology) => (
                        <MenuItem key={technology} value={technology}>
                            {technology}
                        </MenuItem>
                    ))}
                </TextField>
                <Grid container spacing={4}>
                    {filteredProjects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Projects;