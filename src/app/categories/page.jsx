
import { Typography, Box, Container } from '@mui/material';
import {CategoryList} from '@/sections/CategoryList';
import { fetchCategories } from '@/lib/api';

export default async function CategoriesPage() {
  const categories = await fetchCategories();

  if (!categories) {
    
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          Failed to load categories. Please try again later.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontWeight: 'bold' }}>
        Category Listing
      </Typography>
      <CategoryList categories={categories} />
    </Container>
  );
}