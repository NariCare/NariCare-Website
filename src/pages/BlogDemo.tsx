import React, { useState } from 'react';
import { BlogRouter } from '../components/blog/BlogRouter';
import { blogArticles } from '../data/blogData';
import { Button } from '../components/ui/button';

// Demo page to test all blog functionality
export const BlogDemo: React.FC = () => {
  const [currentView, setCurrentView] = useState<'list' | string>('list');

  if (currentView === 'list') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Demo</h1>
            <div className="flex flex-wrap gap-2">
              <Button 
                onClick={() => setCurrentView('list')}
                className="bg-purple-600 hover:bg-purple-700"
              >
                Blog Listing Page
              </Button>
              {blogArticles.map((article) => (
                <Button
                  key={article.id}
                  variant="outline"
                  onClick={() => setCurrentView(article.id)}
                  className="text-sm"
                >
                  {article.title.substring(0, 30)}...
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Show Blog Listing */}
        <BlogRouter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button 
              onClick={() => setCurrentView('list')}
              variant="outline"
            >
              ← Back to List
            </Button>
            <h1 className="text-lg font-semibold text-gray-900">
              Viewing: {blogArticles.find(a => a.id === currentView)?.title}
            </h1>
          </div>
        </div>
      </div>
      
      {/* Show Individual Article */}
      <BlogRouter articleId={currentView} />
    </div>
  );
};