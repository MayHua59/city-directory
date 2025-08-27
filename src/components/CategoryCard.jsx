
'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';


export function CategoryCard({ category }) {
  
  const imageUrl = "/images/chatting.png";
  
  return (
    <Card
      sx={{
        width: '100%',
        mb: 2,
        borderRadius: 3,
        borderColor: '#000000',
        border: 1,
        boxShadow: 2,
        backgroundColor: '#fff',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
        },
      }}
    >
      <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Left side: Category Name */}
        <Typography variant="body1" component="p" sx={{ fontWeight: 'bold' }}>
          {category.name}
        </Typography>
        
        {/* Right side: Placeholder Image/Icon */}
        <Box
          component="img"
          src={imageUrl}
          alt="Category Icon"
          sx={{
            width: 50,
            height: 50,
            borderRadius: 2,
            ml: 2,
          }}
        />
      </CardContent>
    </Card>
  );
}