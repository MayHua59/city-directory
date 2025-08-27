'use client';

import { useState, useEffect } from 'react';
import { Typography, Box, Container, CircularProgress } from '@mui/material';
import {ArticleList} from '@/sections/ArticleList';
import {SearchBar} from '@/components/SearchBar';
import { fetchArticles } from '@/lib/api';
import { CategoryTags } from '@/components/CategoryTags';

export default function ArticlesPage() {
  const [articles, setArticles] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      
      const articlesData = await fetchArticles();
      setArticles(articlesData);
      setLoading(false);
      if (articlesData) {
        const categories = [...new Set(articlesData.map(article => article.category?.name).filter(Boolean))];
        setUniqueCategories(categories);
      }
    };

    getArticles();
  }, []);

  const filteredArticles = articles?.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ mt: 4, textAlign: 'center' }}>
        <CircularProgress />
        <Typography variant="h5" color="text.secondary" mt={2}>
          Loading articles...
        </Typography>
      </Container>
    );
  }

  if (!articles || articles.length === 0) {
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
      <CategoryTags 
        categories={uniqueCategories} 
        onSelectCategory={handleSelectCategory} 
        selectedCategory={selectedCategory} 
      />
      <SearchBar onSearch={setSearchTerm} />
      <ArticleList articles={filteredArticles} />
    </Container>
  );
}
