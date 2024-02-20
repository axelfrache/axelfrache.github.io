import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, MenuItem } from '@mui/material';
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

// Importez les images des projets
import SavesyncProject from "../assets/savesyncBanner.png"; // Assurez-vous que le chemin est correct
import PokemonFinder from "../assets/pokemonFinderBanner.png"; // Assurez-vous que le chemin est correct
import eVote from "../assets/evoteBanner.png";
import {useTheme} from "@mui/material/styles"; // Assurez-vous que le chemin est correct

// Définition des projets
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
        description: "Pokemon Finder is a React-based application hosted on GitHub, serves as an interactive Pokédex, allowing users to explore and discover detailed information about Pokémon through the extensive PokéAPI.",
        imageUrl: PokemonFinder,
        projectUrl: "https://github.com/axelfrache/PokemonFinder",
        technologies: ["ReactJS"]
    },
    {
        title: "eVote",
        description: "eVote is a secure voting application for businesses, developed academically with SSL encryption, ElGamal cryptography, and zero-knowledge proofs to ensure confidentiality. Built entirely in Java with JavaFX for the UI, it enhanced my skills in secure software and UI design.",
        imageUrl: eVote,
        projectUrl: "https://github.com/SAE-DACS-S4",
        technologies: ["Java"]
    }
];

const Projects = () => {

    const theme = useTheme();

    const headerStyle = {
        color: "#5E6378",
        fontWeight: 'bold',
        marginBottom: theme.spacing(2),
        borderBottom: `2px solid #5E6378`,
        paddingBottom: theme.spacing(1),
    };

    const [filter, setFilter] = useState('All');

    // Filtre les projets en fonction de la technologie sélectionnée
    const filteredProjects = projects.filter(project => filter === 'All' || project.technologies.includes(filter));

    // Récupère la liste unique de toutes les technologies pour le filtre
    const technologies = ['All', ...new Set(projects.flatMap(project => project.technologies))];

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 8 }}>
                <Typography variant="h4" component="h2" gutterBottom sx={headerStyle}>
                    Projects
                </Typography>
                <TextField
                    select
                    label="Filter by Technology"
                    value={filter}
                    onChange={handleFilterChange}
                    sx={{mt:3, mb: 4, minWidth: 200 }}
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