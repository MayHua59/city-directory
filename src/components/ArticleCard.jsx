'use client';

import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const stripHtmlTags = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
};

export function ArticleCard({ article }) {
  const imageUrl = "/images/1.jfif";

  const cleanDescription = stripHtmlTags(article.description);
  const truncatedDescription = cleanDescription.substring(0, 100) + '...';

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
         height: 120, // Set a fixed height for the card
    alignItems: 'stretch',
      }}
    >
      <Box
        component="img"
        src={imageUrl}
        alt="Article Cover"
        sx={{
          width: '40%', 
          
          height: '100%',
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
          {truncatedDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}