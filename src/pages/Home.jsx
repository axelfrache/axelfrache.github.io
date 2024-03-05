import React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Box, Typography, Button, Grid } from '@mui/material';
import TransitionImage from "../assets/transitionImage.png";
import avatarImage from "../assets/avatar.png";
import '../assets/fonts/fonts.css';
import {Bounce, Fade, Zoom} from 'react-awesome-reveal';
import Header from "../components/Header";
import ScrollDownArrow from "../components/AnimatedDownArrow";
import '../App.css';
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SavesyncProject from "../assets/savesyncBanner.png";
import PokemonFinder from "../assets/pokemonFinderBanner.png";
import eVote from "../assets/evoteBanner.png";
import FullWidthBanner from "../components/FullWidthBanner";
import JavaIcon from "../assets/icons/javaIcon.svg";
import JavaScriptIcon from "../assets/icons/javascriptIcon.svg";
import ReactIcon from "../assets/icons/reactIcon.png";
import GitIcon from "../assets/icons/gitIcon.svg";
import FigmaIcon from "../assets/icons/figmaIcon.svg";
import PhpIcon from "../assets/icons/phpIcon.png";
import LinuxIcon from "../assets/icons/linuxIcon.png";
import PostmanIcon from "../assets/icons/postmanIcon.png";

const AvatarImage = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    borderRadius: "50%",
    width: 200,
    height: 200,
    border: `4px solid ${theme.palette.background.paper}`,
    marginBottom: theme.spacing(-2),
}));

const HomeContent = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(1),
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
        description: "Pokemon Finder is a React-based application hosted on GitHub, serves as an interactive Pokedex, allowing users to explore and discover detailed information about Pokemon through the extensive PokeAPI.",
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

const technicalSkills = [
    { name: "Java", iconPath: JavaIcon },
    { name: "JavaScript", iconPath: JavaScriptIcon },
    { name: "React", iconPath: ReactIcon },
    { name: "Git", iconPath: GitIcon },
    { name: "Figma", iconPath: FigmaIcon },
    { name: "Php", iconPath: PhpIcon },
    { name: "Linux", iconPath: LinuxIcon },
    { name: "Postman", iconPath: PostmanIcon }
];

const Home = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="sm">
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="90vh">
                    <Fade triggerOnce duration={700}>
                        <AvatarImage src={avatarImage} alt="Avatar" />
                    </Fade>
                    <HomeContent>
                        <Zoom cascade triggerOnce damping={0.6}>
                            <Typography variant="h4" gutterBottom sx={{fontFamily: 'CentraRegular'}}>
                                Hello, my name is
                            </Typography>
                            <Typography variant="h2" gutterBottom sx={{fontFamily: 'CentraExtraBold', color: '#8F7F92'}}>
                                Axel Frache
                            </Typography>
                            <Typography variant="h6" sx={{fontFamily: 'CentraLight'}}>
                                Welcome to my portfolio! I'm a CS student deeply passionate about development and technology 👨‍💻
                            </Typography>
                            <Button variant="contained" sx={{ mt: 2, backgroundColor: '#8F7F92', '&:hover': { backgroundColor: '#72677E' } }}>
                                Explore my Projects
                            </Button>

                        </Zoom>


                    </HomeContent>
                    <ScrollDownArrow />
                </Box>
            </Container>

            <Container sx={{ py: 8, mt: 10 }} maxWidth="md">
                <Fade>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#5E6378", fontWeight: 'bold', marginBottom: 4, textAlign: 'center', mb: 7, fontFamily: 'CentraRegular'}}>
                        Recent projects
                    </Typography>
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Box sx={{ display: 'flex', height: '100%' }}>
                                    <ProjectCard project={project} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            </Container>

            <Container sx={{ py: 8 }} maxWidth="md">
                <Fade>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#5E6378", fontWeight: 'bold', marginBottom: 4, textAlign: 'center', mb: 7, fontFamily: 'CentraRegular'}}>
                        Skills
                    </Typography>
                    <Grid container spacing={2} justifyContent="center">
                        {technicalSkills.map(({ name, iconPath }) => (
                            <Grid item xs={4} sm={2} md={2} mb={4} key={name} sx={{ textAlign: 'center' }}>
                                {iconPath ? <img src={iconPath} alt={name} style={{ width: 40, height: 40 }} /> : <Typography>{name}</Typography>}
                            </Grid>
                        ))}
                    </Grid>
                </Fade>
            </Container>

            <Footer />
        </div>
    );
};

export default Home;