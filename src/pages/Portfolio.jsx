import React from 'react';
import { Container, Typography, Grid, useTheme } from '@mui/material';
import ExperienceItem from "../components/ExperienceItem";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AwardCard from "../components/AwardCard";
import {Fade, Zoom} from 'react-awesome-reveal';
import JavaIcon from "../assets/icons/javaIcon.svg";
import JavaScriptIcon from "../assets/icons/javascriptIcon.svg";
import ReactIcon from "../assets/icons/reactIcon.png";
import GitIcon from "../assets/icons/gitIcon.svg";
import FigmaIcon from "../assets/icons/figmaIcon.svg";
import PhpIcon from "../assets/icons/phpIcon.png";
import LinuxIcon from "../assets/icons/linuxIcon.png";
import DockerIcon from "../assets/icons/dockerIcon.png";
import PostmanIcon from "../assets/icons/postmanIcon.png";
import CommunicativeTeammate from "../assets/certifications/CommunicativeTeammateBadge.png";
import InvestedInStudentLife from "../assets/certifications/InvestedInStudentLifeBadge.png";
import ParticipantInTheFresqueDuNumerique from "../assets/certifications/ParticipantInTheFresqueDuNumeriqueBadge.png";
import Ndi from "../assets/certifications/ndiBadge.png";

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const awards = [
    {
        imageUrl: CommunicativeTeammate,
        title: "Communicative Teammate",
        description: "This badge is awarded to a student who has played a facilitating role in the flow of information within his or her project team, and who has shown himself or herself to be a good listener and considerate towards team members, while at the same time being able to assert his or her point of view.",
        link: "https://openbadgefactory.com/v1/assertion/78832a5a249ea4766680e265c2271a78bafc2f4d.html"
    },
    {
        imageUrl: InvestedInStudentLife,
        title: "Invested in Student Life",
        description: "This badge is awarded to students who actively participate in campus activities and support UIT events.",
        link: "https://openbadgefactory.com/v1/assertion/083bec0148dee4c5fee66ca6f7209a5845b82387"
    },
    {
        imageUrl: ParticipantInTheFresqueDuNumerique,
        title: "Fresque du Numerique",
        description: "This badge certifies participation in a collective intelligence workshop at the 'Fresque du Numérique'.",
        link: "https://openbadgefactory.com/v1/assertion/aaa0765b1dd0f2077d08504bdc82454fa44421ee"
    },
    {
        imageUrl: Ndi,
        title: "Nuit de l'info 2022",
        description: "This badge certifies participation in the 2022 edition of the 'Nuit de l'Info'. My team and I were honored with a Silver Medal in the 'Mets du Green dans ton IT' challenge proposed by ARHS Group.",
        link: "https://openbadgefactory.com/v1/assertion/c3a51ca998a7e3d4d11212c8e16252e4a056a861"
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


const softSkills = [
    { name: "Teamwork" },
    { name: "Problem-solving" },
    { name: "Rigorous" },
    { name: "Methodical" },
    { name: "Independent" },
    { name: "Strong writing skills" },
    { name: "Attention to detail" },
];

const Portfolio = () => {

    const theme = useTheme();

    const headerStyle = {
        color: "#5E6378",
        fontWeight: 'bold',
        marginBottom: theme.spacing(4),
        borderBottom: `2px solid #5E6378`,
        paddingBottom: theme.spacing(1),
        fontFamily: 'CentraRegular',
    };

    return (
        <div>
            <Header />
            <Container maxWidth="md" sx={{ mt: 8, textAlign: 'justify'}}>
                {/* Section About Me */}
                <Typography variant="h4" component="h2" gutterBottom sx={headerStyle}>
                    About Me
                </Typography>
                <Typography variant="body1" paragraph sx={{fontFamily:'CentraRegular'}}>
                    Hello! I'm Axel, a third-year computer science student with a lifelong passion for technology.
                    My fascination with computing began at an early age and swiftly evolved into a pursuit of knowledge across a broad spectrum of programming languages and technologies.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontFamily:'CentraRegular'}}>
                    My journey in the world of development kicked off with VB.net, where I tackled the intricacies of chat applications using sockets.
                    This early experience sparked a desire to broaden my technical repertoire, fueling my curiosity to explore and understand a diverse range of programming languages to enhance my computer science acumen.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontFamily:'CentraRegular'}}>
                    My academic path has been complemented by a professional apprenticeship in a corporate setting, where I have been instrumental in a variety of assignments.
                    These experiences have not only broadened my technical expertise but have also ingrained in me the principles of sustainable architecture and the significance of user-driven design.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontFamily:'CentraRegular'}}>
                    Parallel to my academic pursuits, team-based projects have been a cornerstone of my educational experience.
                    They've equipped me with the ability to seamlessly integrate into various teams, adapting to new dynamics and fostering a collaborative spirit.
                    My commitment to teamwork is matched by a deep-seated enthusiasm for creating user-centric designs that simplify and enrich the user experience.
                </Typography>
                <Typography variant="body1" paragraph sx={{fontFamily:'CentraRegular'}}>
                    As I continue my professional journey, I seek to blend innovative design with robust development practices to craft solutions that make a meaningful impact.
                </Typography>
            </Container>

            <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
                <Button variant="contained" component="a" href={`${process.env.PUBLIC_URL}/assets/CV-Axel-Frache.pdf`} sx={{fontFamily: 'RobotoMedium', mt: 2, backgroundColor: '#8F7F92', '&:hover': { backgroundColor: '#72677E' }}} target="_blank" rel="noopener noreferrer">
                    View resume
                </Button>

                <Button variant="contained" component="a" href="https://www.linkedin.com/in/axel-frache" sx={{fontFamily: 'RobotoMedium', mt: 2, backgroundColor: '#8F7F92', '&:hover': { backgroundColor: '#72677E' }}} target="_blank" rel="noopener noreferrer" startIcon={<LinkedInIcon />}>
                    LinkedIn
                </Button>

                <Button variant="contained" component="a" href="https://github.com/axelfrache" sx={{fontFamily: 'RobotoMedium', mt: 2, backgroundColor: '#8F7F92', '&:hover': { backgroundColor: '#72677E' }}} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />}>
                    GitHub
                </Button>
            </Box>

            <Container maxWidth="md" sx={{ mt: 8 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={headerStyle}>
                    Work Experience
                </Typography>
                <Fade triggerOnce>
                    <ExperienceItem
                        title="Software Developer (Apprenticeship)"
                        period="09/2023 - Present"
                        company="Agysoft"
                    />
                    <ExperienceItem
                        title="Developer Assistant (Fixed-Term Contract)"
                        period="07/2023"
                        company="Agysoft"
                    />
                    <ExperienceItem
                        title="Web Development Intern"
                        period="04/2023 - 06/2023"
                        company="Agysoft"
                    />
                </Fade>
            </Container>

            <Container maxWidth="md" sx={{ mt: 8 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={headerStyle}>
                    Education
                </Typography>
                <Fade triggerOnce>
                    <ExperienceItem
                        title="Bachelor of Technology in Computer Science"
                        period="09/2021 - 07/2024"
                        company="University Institute of Technology Montpellier-Sète"
                    />
                    <ExperienceItem
                        title="Baccalaureate in Science and Technology of Industry and Sustainable Development, Digital Systems Option"
                        period="09/2018 - 07/2021"
                        company="Dhuoda High School"
                    />
                </Fade>
            </Container>
            <Container maxWidth="md" sx={{ mt: 8 }}>
                <Typography variant="h5" component="h2" gutterBottom sx={headerStyle}>
                    Awards and distinctions
                </Typography>
                <Grid container>
                    {awards.map((award, index) => (
                        <AwardCard award={award} />
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="md" sx={{ mt: 8}}>
                {/* Section Skills */}
                <Typography variant="h5" component="h2" gutterBottom sx={headerStyle}>
                    Technical Skills
                </Typography>
                <Zoom triggerOnce>
                    <Grid container spacing={2} justifyContent="center">
                        {technicalSkills.map(({ name, iconPath }) => (
                            <Grid item xs={4} sm={2} md={2} mb={4} key={name} sx={{ textAlign: 'center' }}>
                                {iconPath ? <img src={iconPath} alt={name} style={{ width: 40, height: 40 }} /> : <Typography>{name}</Typography>}
                            </Grid>
                        ))}
                    </Grid>
                </Zoom>
            </Container>
            <Container maxWidth="md" sx={{ mt: 8 }}>
                <Typography variant="h5" component="h2" sx={{ ...headerStyle, mt: 4}} gutterBottom>
                    Soft Skills
                </Typography>
                <Zoom triggerOnce>
                    <Grid container spacing={2} justifyContent="center" >
                        {softSkills.map(({ name }) => (
                            <Grid item xs={12} sm={6} md={4} key={name} sx={{ textAlign: 'center', fontFamily:'CentraRegular'}}>
                                <Typography>{name}</Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Zoom>
            </Container>
            <Footer />
        </div>
    );
};

export default Portfolio;