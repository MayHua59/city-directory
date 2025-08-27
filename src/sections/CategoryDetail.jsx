"use client"

import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {ArticleList} from '@/sections/ArticleList';
import { useRouter } from 'next/navigation';

export function CategoryDetail({ articles }) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <IconButton onClick={handleBack} aria-label="back" sx={{ mr: 2 }}>
          <ArrowBackIosIcon />
        </IconButton>
        </Box>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'light', textAlign: 'center' }}>
          Articles in Category
        </Typography>
      
      <Box sx={{ mt: 4 }}>
        <ArticleList articles={articles} />
      </Box>
    </Container>
  );
}
