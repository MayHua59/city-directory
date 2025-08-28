"use client"

import React from 'react';
import { Button, Box } from '@mui/material';
import Link from 'next/link';


export function SeeAllButton({ route, name }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 3 }}>
      <Link href={route} passHref>
        <Button 
  variant="outlined" 
  size="large"
  sx={{
    borderRadius: 8,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    color: '#000',
    borderColor: '#000',
    fontWeight: 'bold',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
      borderColor: '#000',
      color: '#000',
      
    }
  }}
>
  {name}
</Button>
      </Link>
    </Box>
  );
}
