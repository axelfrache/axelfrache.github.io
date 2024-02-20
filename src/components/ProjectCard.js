import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography, Chip } from '@mui/material';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, projectUrl, technologies } = project;

    return (
        <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
            <CardActions sx={{ flexDirection: 'column', alignItems: 'center', p: 2, flexGrow: 1 }}>
                <Button size="small" color="primary" href={projectUrl} target="_blank" rel="noopener noreferrer" sx={{color: '#8F7F92'}}>
                    Learn More
                </Button>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', gap: '3px', marginTop: '10px' }}>
                        {technologies.map((tech, index) => (
                            <Chip key={index} label={tech} size="small" variant="outlined" sx={{ backgroundColor: '#E1C2BE', color: 'black', fontWeight: 'bold', margin: '5px' }} />
                        ))}
                    </div>
                </div>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;
