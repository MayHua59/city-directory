

'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export function ArticleCard({ article }) {
  
  const imageUrl = "https://placehold.co/150x100/EFEFEF/999999?text=Article";

  return (
    <Card
      sx={{
        display: 'flex',
        mb: 2,
        borderRadius: 3,
        boxShadow: 2,
        backgroundColor: '#f5f5f5',
        cursor: 'pointer',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: 4,
        },
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Article Cover"
        sx={{
          width: 150,
          height: 100,
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          objectFit: 'cover',
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {article.description.substring(0, 100)}...
        </Typography>
      </CardContent>
    </Card>
  );
}