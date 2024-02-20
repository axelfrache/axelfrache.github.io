import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const HighlightedName = styled("span")(({ theme }) => ({
    fontWeight: 700,
    color: '#8F7F92',
    marginRight: theme.spacing(1),
}));

const ExperienceItem = ({ title, period, company }) => {
    return (
        <Paper variant="outlined" sx={{ p: 2, mb: 2, borderLeft: '5px solid #8F7F92', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <Typography variant="h6" component="div">
                <HighlightedName>{title}</HighlightedName>
            </Typography>
            <Typography color="textSecondary">{period}</Typography>
            <Typography color="textSecondary">{company}</Typography>
        </Paper>
    );
};

export default ExperienceItem;
