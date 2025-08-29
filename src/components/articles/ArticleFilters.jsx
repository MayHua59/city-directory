'use client';

import { useState } from 'react';
import { CategoryTags } from '@/components/CategoryTags';
import { SearchBar } from '@/components/SearchBar';
import ArticleContent from './ArticleContent';

export default function ArticleFilters({ uniqueCategories, articles }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || article.category?.name === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleSelectCategory = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  return (
    <>
      <CategoryTags
        categories={uniqueCategories}
        onSelectCategory={handleSelectCategory}
        selectedCategory={selectedCategory}
      />
      <SearchBar onSearch={setSearchTerm} />
      <ArticleContent articles={filteredArticles} />
    </>
  );
}
