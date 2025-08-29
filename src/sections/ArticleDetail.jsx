"use client";

import React, { useState } from 'react';
import { Typography, Box, Paper, Chip, Avatar, Grid, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';

const stripHtmlTags = (html) => {
  if (!html) return '';
  return html.replace(/<[^>]*>?/gm, '');
};

export const ArticleDetail = ({ article }) => {
  const cleanDescription = stripHtmlTags(article.description);
const [isFavorite, setIsFavorite] = useState(false);
 const handleBack = () => {
    window.history.back();
  };
   const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    //  add logic here to save the favorite status to a database or local storage
  };
  return (
    <Box>
       {/* Top action bar with back and favorite icons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={handleBack} aria-label="back">
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton onClick={handleToggleFavorite} aria-label="favorite">
          {isFavorite ? <StarIcon sx={{ color: 'gold' }} /> : <StarBorderIcon />}
        </IconButton>
      </Box>
      {/* Thumbnail or cover image */}
      {article.thumbnail && (
        <Box
          component="img"
          src={'/images/shopping-cart.jfif'}
          alt={article.title}
          sx={{
            width: '100%',
            height: { xs: 200, sm: 300, md: 400 },
            objectFit: 'cover',
            borderRadius: 2,
            mb: 3,
          }}
        />
      )}

      <Paper sx={{ p: 3, borderRadius: 2, boxShadow: 2 }}>
        {/* Article title */}
        <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
          {article.title}
        </Typography>

        {/* Category tag */}
        {article.category && (
<Link href={`/categories/${article.category.id}`} passHref>
<Chip 
  label={article.category.name} 
  color="primary" 
  variant="outlined" 
  sx={{ 
    mb: 2, 
    mt:2,
    cursor: 'pointer',
    fontWeight: 'bold',
    
    background: 'linear-gradient(90deg, #e3e6f3 0%, #f0f4f8 100%)',
    transition: 'background 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s',
    '&:hover': {
      backgroundColor: 'primary.main',
      color: '#000',
      borderColor: 'primary.main',
      boxShadow: '0 4px 16px rgba(60,72,88,0.18)',
    }
  }}
/>
</Link>
        )}

        {/* Article description */}
          <Typography 
          variant="body1" 
          sx={{ 
            whiteSpace: 'pre-line',
            lineHeight: 1.6, 
            letterSpacing: '0.5px' 
          }}
        >
          {cleanDescription}
        </Typography>
        
        {/* Contact Data */}
        {article.contact_data && article.contact_data.length > 0 && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
              ဆက်သွယ်ရန် အချက်အလက်
            </Typography>
            <Grid container spacing={2}>
              {article.contact_data.map((contact) => (
                <Grid item xs={12} sm={6} key={contact.id}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                     
                      {contact.contact_type?.title.charAt(0)}
                    </Avatar>
                    <Typography variant="body2">
                      {contact.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
};


