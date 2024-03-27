import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled, useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const bounceAnimation = keyframes`
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
`;

const AnimatedDownArrow = styled(ArrowDownwardIcon)(({ theme }) => ({
    color: '#2F4858',
    fontSize: '2.5rem',
    animation: `${bounceAnimation} 2s infinite`,
    cursor: 'pointer',
    bottom: '80px',
    marginTop : '40px',
    [theme.breakpoints.down('sm')]: {
        bottom: '200px',
    },
}));

export default function ScrollDownArrow() {
    const theme = useTheme();

    return <AnimatedDownArrow theme={theme} />;
}