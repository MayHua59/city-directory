
import { Typography, Box, Container } from '@mui/material';
import { CategoryCard } from '@/components/CategoryCard';
import Link from 'next/link';

export function CategoryList({ categories }) {
  if (!categories || categories.length === 0) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography variant="h5" align="center" color="text.secondary">
          No categories found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      {categories.map((category) => (
        <Link 
          key={category.id} 
          href={`/categories/${category.id}`} 
          passHref
          style={{ textDecoration: 'none' }}
        >
          <CategoryCard category={category} />
        </Link>
      ))}
    </Box>
  );
}