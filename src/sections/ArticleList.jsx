// src/sections/ArticleList.jsx

import { Typography, Box, Container } from '@mui/material';
import { ArticleCard } from '../components/ArticleCard';

export  function ArticleList({ articles }) {
  if (!articles || articles.length === 0) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" align="center" color="text.secondary">
          No articles found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </Box>
  );
}