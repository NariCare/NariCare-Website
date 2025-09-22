import React from 'react';
import { BlogRouter } from '../components/blog/BlogRouter';

interface BlogArticlePageProps {
  articleId: string;
}

// This would be used for individual article pages (/blog/[articleId])
export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({ articleId }) => {
  return <BlogRouter articleId={articleId} />;
};