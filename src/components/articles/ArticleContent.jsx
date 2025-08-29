'use client';

import { ArticleList } from '@/sections/ArticleList';

export default function ArticleContent({ articles }) {
  return <ArticleList articles={articles} />;
}