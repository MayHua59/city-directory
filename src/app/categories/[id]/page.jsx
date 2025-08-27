import { Container, Typography, CircularProgress, Box } from '@mui/material';
import {CategoryDetail} from '@/sections/CategoryDetail';
import { fetchArticlesByCategory } from '@/lib/api';


export default async function CategoryDetailPage({ params }) {
    const { id } = params;
  const articles = await fetchArticlesByCategory(id);

  if (!articles) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Failed to load articles for this category. Please try again later.
        </Typography>
      </Container>
    );
  }
  
  return (
    <CategoryDetail articles={articles} />
  );
}