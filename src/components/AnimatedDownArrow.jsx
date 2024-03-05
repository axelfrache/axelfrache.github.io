import React from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { styled, useTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';

const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-20px); }
  60% { transform: translateY(-10px); }
`;

const AnimatedDownArrow = styled(ArrowDownwardIcon)(({ theme }) => ({
    color: '#2F4858',
    fontSize: '2.5rem',
    animation: `${bounceAnimation} 2s infinite`,
    cursor: 'pointer',
    marginTop: theme.spacing(2),
}));

export default function ScrollDownArrow() {
    const theme = useTheme();

    return <AnimatedDownArrow theme={theme} />;
}