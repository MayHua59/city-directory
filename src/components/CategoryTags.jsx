import React from 'react';
import { Box, Chip } from '@mui/material';

export const CategoryTags = ({ categories, onSelectCategory, selectedCategory }) => {
  return (
    <Box sx={{ display: 'flex', overflowX: 'auto', gap: 1, my: 2, py: 1, '&::-webkit-scrollbar': { display: 'none' }, msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          onClick={() => onSelectCategory(category)}
          color={selectedCategory === category ? 'primary' : 'default'}
          sx={{ minWidth: { xs: 100, md: 400 },
          height: 48, // Increase the height of the chip
            fontSize: '1rem',
         }}
          
        />
      ))}
    </Box>
  );
};

