import * as React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import avatarImage from "../assets/avatar.png";
import Header from "../components/Header";
import ScrollDownArrow from "../components/AnimatedDownArrow";
import '../App.css';
import Footer from "../components/Footer";
import {Grid} from "@mui/material";
import ProjectCard from "../components/ProjectCard";

import SavesyncProject from "../assets/savesyncBanner.png";
import PokemonFinder from "../assets/pokemonFinderBanner.png";
import eVote from "../assets/evoteBanner.png";

const AvatarImage = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    borderRadius: "50%",
    width: 200,
    height: 200,
    border: `4px solid ${theme.palette.background.paper}`,
    marginBottom: theme.spacing(-2),
}));

const HomeContent = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(2),
    textAlign: "center",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
}));

const HighlightedName = styled("span")(({ theme }) => ({
    fontWeight: 700,
    color: '#8F7F92',
    marginRight: theme.spacing(1),
}));

const projects = [
    {
        title: "SaveSync",
        description: "SaveSync offers a secure and reliable platform for users to back up their critical data to a remote server and retrieve it as needed, ensuring data safety and accessibility anywhere.",
        imageUrl: SavesyncProject,
        projectUrl: "https://github.com/SaveSyncProject",
        technologies: ["Java", "JavaFX", "Docker", "OpenLDAP"]
    },
    {
        title: "Pokemon Finder",
        description: "Pokemon Finder is a React-based application hosted on GitHub, serves as an interactive Pokédex, allowing users to explore and discover detailed information about Pokémon through the extensive PokéAPI.",
        imageUrl: PokemonFinder,
        projectUrl: "https://github.com/axelfrache/PokemonFinder",
        technologies: ["Javascript", "React"]
    },
    {
        title: "eVote",
        description: "eVote is a secure voting application for businesses, developed academically with SSL encryption, ElGamal cryptography, and zero-knowledge proofs to ensure confidentiality. Built entirely in Java with JavaFX for the UI, it enhanced my skills in secure software and UI design.",
        imageUrl: eVote,
        projectUrl: "https://github.com/SAE-DACS-S4",
        technologies: ["Java", "JavaFX","Docker", "MySQL"]
    }
];

const Home = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="90vh"
                >
                    <AvatarImage src={avatarImage} alt="Avatar" />
                    <HomeContent>
                        <Typography variant="h4" gutterBottom>
                            Hey, I'm <HighlightedName>Axel</HighlightedName>!
                        </Typography>
                        <Typography variant="h6">
                            Welcome to my portfolio! I'm a CS student deeply passionate about
                            development and technology 👨‍💻
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                mt: 2,
                                backgroundColor: '#8F7F92',
                                '&:hover': {
                                    backgroundColor: '#72677E',
                                },
                            }}
                        >
                            Explore my Projects
                        </Button>


                    </HomeContent>
                    <ScrollDownArrow />
                </Box>
            </Container>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Box sx={{ display: 'flex', height: '100%' }}>
                                <ProjectCard project={project} />
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
};

export default Home;