import React from 'react';
import { BlogListPage } from './BlogListPage';
import { ArticlePage } from './ArticlePage';
import { getArticleById } from '../../data/blogData';

interface BlogRouterProps {
  articleId?: string;
}

export const BlogRouter: React.FC<BlogRouterProps> = ({ articleId }) => {
  // If no articleId provided, show the blog listing page
  if (!articleId) {
    return <BlogListPage />;
  }

  // If articleId provided, try to find and show the article
  const article = getArticleById(articleId);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
          <a 
            href="/blog" 
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Back to Blog
          </a>
        </div>
      </div>
    );
  }

  return <ArticlePage article={article} />;
};