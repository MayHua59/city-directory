// src/app/articles/page.jsx

import { Typography, Box, Container } from '@mui/material';
import {ArticleList} from '@/sections/ArticleList';
import { fetchArticles } from '@/lib/api';

export default async function ArticlesPage() {
  const result = await fetchArticles();

  if (!result) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Failed to load articles. Please try again later.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Latest Articles
      </Typography>
      <ArticleList articles={result} />
    </Container>
  );
}