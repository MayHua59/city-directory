
import React from 'react';
import { Typography, Box, Card, CardContent, Grid } from '@mui/material';
import { ArticleCard } from '@/components/ArticleCard';
import Link from 'next/link';







export function ArticleList({ articles }) {
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
        <Grid item xs={12} sm={6} md={4} key={article.id}>
          <Link href={`/articles/${article.id}`} passHref style={{ textDecoration: 'none' }}>
            <Box>
              <ArticleCard article={article} />
            </Box>
          </Link>
        </Grid>
      ))}
    </Box>
  );
}