import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography, Chip } from '@mui/material';

const ProjectCard = ({ project }) => {
    const { title, description, imageUrl, projectUrl, technologies } = project;

    return (
        <Card sx={{ maxWidth: 345, display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardActionArea href={projectUrl} target="_blank" rel="noopener noreferrer" sx={{ flexGrow: 1 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 140 }}
                    image={imageUrl}
                    alt={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:"CentraRegular"}}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{fontFamily:"CentraLight"}}>
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{ flexDirection: 'column', alignItems: 'center', p: 2, gap: '10px' }}>
                <Button size="small" color="primary" href={projectUrl} target="_blank" rel="noopener noreferrer">
                    Learn More
                </Button>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                    {technologies.map((tech) => (
                        <Chip key={tech} label={tech} size="small" variant="outlined" sx={{fontFamily:'RobotoRegular', backgroundColor: '#E1C2BE', color: 'black', fontWeight: 'bold' }} />
                    ))}
                </div>
            </CardActions>
        </Card>
    );
};

export default ProjectCard;