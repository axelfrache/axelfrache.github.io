import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography, Chip, Box } from '@mui/material';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, projectUrl, technologies } = project;

    return (
        <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box sx={{ flexGrow: 1 }}> {/* This Box will push the CardActions to the bottom */}
                <CardActionArea href={projectUrl} target="_blank" rel="noopener noreferrer">
                    <CardMedia
                        component="img"
                        sx={{ height: 140 }}
                        image={imageUrl}
                        alt={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Box>
            <CardActions sx={{ flexDirection: 'column', alignItems: 'center', p: 2 }}>
                <Button size="small" color="primary" href={projectUrl} target="_blank" rel="noopener noreferrer">
                    Learn More
                </Button>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                        {technologies.map((tech, index) => (
                            <Chip key={index} label={tech} size="small" variant="outlined" sx={{ backgroundColor: '#E1C2BE', color: 'black', fontWeight: 'bold' }} />
                        ))}
                    </Box>
                </Box>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;