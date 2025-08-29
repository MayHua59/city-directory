import { Suspense } from 'react';
import { fetchArticles } from '@/lib/api';
import { Container, Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArticleFilters from '@/components/articles/ArticleFilters';
import Loading from '@/components/Loading';
import BackButton from '@/components/BackButton';



export default async function ArticlesPage() {
  const articles = await fetchArticles();

  if (!articles || articles.length === 0) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <BackButton />
        
        <Typography variant="h5" color="error" align="center">
          Failed to load articles. Please try again later.
        </Typography>
      </Container>
    );
  }

  const uniqueCategories = [
    ...new Set(
      articles.map(article => article.category?.name).filter(Boolean)
    ),
  ];

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
     <BackButton />

      <Box
        component="img"
        src="/images/shopping-cart.jfif"
        alt="Cover image"
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          borderRadius: 2,
          mb: 4,
        }}
      />

      <ArticleFilters uniqueCategories={uniqueCategories} articles={articles} />

       {/* Suspense handles client hydration fallback */}
      <Suspense fallback={<Loading />}>
        <ArticleFilters uniqueCategories={uniqueCategories} articles={articles} />
      </Suspense>
    </Container>
  );
}