'use client';

import { Typography, Box, Button } from '@mui/material';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: 4,
        backgroundColor: 'background.default'
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to your Next.js and MUI App!
      </Typography>
      <Typography variant="body1" paragraph>
        This is a simple example of a page using Material UI components.
      </Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Click Me
      </Button>
    </Box>
  );
}