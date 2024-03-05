import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Divider, Box } from '@mui/material';

const AwardCard = ({ award }) => {
    const { imageUrl, title, description, link } = award;

    const cardStyles = {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        mb: 2,
        overflow: 'hidden',
    };

    const mediaStyles = {
        width: 170,
        height: 170,
        objectFit: 'contain',
        margin: '16px',
    };

    const contentStyles = {
        flex: '1',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    };

    const handleClick = () => {
        window.open(link, '_blank');
    };

    return (
        <Card sx={cardStyles} onClick={handleClick}>
            <CardActionArea sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                <CardMedia
                    component="img"
                    sx={mediaStyles}
                    image={imageUrl}
                    alt={title}
                />
                <CardContent sx={contentStyles}>
                    <Box>
                        <Typography gutterBottom variant="h5" component="div" sx={{ fontSize: { xs: '1.5rem', sm: '2rem' }, fontFamily: 'CentraRegular' }}>
                            {title}
                        </Typography>
                        <Divider variant="left" sx={{ bgcolor:'#5E6378', my: 1 }} />
                        <Typography variant="subtitle1" component="p" sx={{ fontSize: { xs: '0.875rem', sm: '1rem', fontFamily: 'CentraRegular'} }}>
                            <b>Description:</b> {description}
                        </Typography>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default AwardCard;