import { Typography, Box, Container } from '@mui/material';
import {fetchArticleDetail} from '@/lib/api';
import { ArticleDetail } from '@/sections/ArticleDetail';



export default async function ArticleDetailPage({ params }) {
  const article = await fetchArticleDetail(params.id);

  if (!article) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h5" color="error" align="center">
          No Article Found.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <ArticleDetail article={article} />
    </Container>
  );
}