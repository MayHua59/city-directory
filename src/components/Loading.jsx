"use client";

import React from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@mui/system';

// Define the keyframes for the left-to-right animation
const moveLeftToRight = keyframes`
  0% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(50px);
  }
  100% {
    transform: translateX(-50px);
  }
`;


const Loading = () => {
  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src="/images/chatting.png"
        alt="Loading..."
        sx={{
          width: 100,
          height: 100,
          animation: `${moveLeftToRight} 2s ease-in-out infinite`,
          mb: 2,
        }}
      />
      <Typography variant="h6" color="text.secondary">
        Loading... Please wait.
      </Typography>
    </Box>
  );
};

export default Loading;
