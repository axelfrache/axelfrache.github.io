import React from 'react';
import { styled } from '@mui/material/styles';
import {Container, Box, Typography, Button, Grid, Divider} from '@mui/material';
import avatarImage from "../assets/avatar.png";
import '../assets/fonts/fonts.css';
import {Fade, Zoom} from 'react-awesome-reveal';
import { Link } from 'react-scroll';
import {Link as RouterLink} from "react-router-dom";
import Header from "../components/Header";
import ScrollDownArrow from "../components/AnimatedDownArrow";
import '../App.css';
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SavesyncProject from "../assets/savesyncBanner.png";
import PokemonFinder from "../assets/pokemonFinderBanner.png";
import eVote from "../assets/evoteBanner.png";
import JavaIcon from "../assets/icons/javaIcon.svg";
import JavaScriptIcon from "../assets/icons/javascriptIcon.svg";
import ReactIcon from "../assets/icons/reactIcon.png";
import GitIcon from "../assets/icons/gitIcon.svg";
import FigmaIcon from "../assets/icons/figmaIcon.svg";
import PhpIcon from "../assets/icons/phpIcon.png";
import LinuxIcon from "../assets/icons/linuxIcon.png";
import DockerIcon from "../assets/icons/dockerIcon.png";
import PostmanIcon from "../assets/icons/postmanIcon.png";


const AvatarImage = styled("img")(({ theme }) => ({
    maxWidth: "100%",
    borderRadius: "50%",
    width: 200,
    height: 200,
    marginBottom: theme.spacing(-2),
}));

const HomeContent = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(1),
    textAlign: "center",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(4),
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
    { name: "Php", iconPath: PhpIcon },
    { name: "Git", iconPath: GitIcon },
    { name: "Docker", iconPath: DockerIcon },
    { name: "Figma", iconPath: FigmaIcon },
    { name: "Linux", iconPath: LinuxIcon },
    { name: "Postman", iconPath: PostmanIcon }
];

const Home = () => {
    return (
        <div>
            <Header />
            <Container maxWidth="sm" sx={{ position: 'relative', mt: 1.5}}>
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="80vh">
                    <Fade triggerOnce duration={700}>
                        <AvatarImage src={avatarImage} alt="Avatar" />
                    </Fade>
                    <HomeContent>
                        <Zoom cascade triggerOnce damping={0.6}>
                            <Typography variant="h4" gutterBottom sx={{fontFamily: 'CentraRegular'}}>
                                Hello my name is
                            </Typography>
                            <Typography variant="h2" gutterBottom sx={{fontFamily: 'CentraExtraBold', color: '#8F7F92'}}>
                                Axel Frache
                            </Typography>
                            <Typography variant="h6" sx={{fontFamily: 'CentraLight'}}>
                                Welcome to my portfolio! I'm a CS student deeply passionate about development and technology 👨‍💻
                            </Typography>
                            <Button variant="contained" sx={{ mt: 4, backgroundColor: '#8F7F92', '&:hover': { backgroundColor: '#72677E' } }}>
                                <Link to="recent-projects" smooth={true} duration={500} spy={true} exact="true" offset={-70}>
                                    Explore my Projects
                                </Link>
                            </Button>
                        </Zoom>
                    </HomeContent>
                </Box>
                <Box className="scroll-down-container" sx={{position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                    <ScrollDownArrow />
                </Box>
            </Container>

            <Container sx={{ py: 8, mt: 10, alignItems: 'center' }} maxWidth="md" id="recent-projects">
                <Fade triggerOnce>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#5E6378", fontWeight: 'bold', textAlign: 'center', fontFamily: 'CentraRegular'}}>
                        Recent projects
                    </Typography>
                    <Divider variant="left" sx={{ bgcolor:'#5E6378', my: 1, marginBottom: 4, mb: 7 }} />
                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Box sx={{ display: 'flex', height: '100%' }}>
                                    <ProjectCard project={project} />
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                    <Box display="flex" justifyContent="center" mt={4}>
                        <Button variant="contained" component={RouterLink} to="/projects" sx={{backgroundColor: '#8F7F92', '&:hover': { backgroundColor: '#72677E' } }}>
                            Show more
                        </Button>
                    </Box>
                </Fade>
            </Container>

            <Container sx={{ py: 8 }} maxWidth="md">
                <Fade triggerOnce>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#5E6378", fontWeight: 'bold', textAlign: 'center', fontFamily: 'CentraRegular'}}>
                        Skills
                    </Typography>
                    <Divider variant="left" sx={{ bgcolor:'#5E6378', my: 1, marginBottom: 4, mb: 7 }} />
                    <Zoom duration={500} triggerOnce>
                        <Grid container spacing={2} justifyContent="center">
                            {technicalSkills.map(({ name, iconPath }) => (
                                <Grid item xs={4} sm={2} md={2} mb={4} key={name} sx={{ textAlign: 'center' }}>
                                    {iconPath ? <img src={iconPath} alt={name} style={{ width: 40, height: 40 }} /> : <Typography>{name}</Typography>}
                                </Grid>
                            ))}
                        </Grid>
                    </Zoom>
                </Fade>
            </Container>

            <Footer />
        </div>
    );
};

export default Home;