import React, { useState, useEffect } from 'react';
import { NaricareLanding } from './screens/NaricareLanding/NaricareLanding';
import { BlogDemo } from './pages/BlogDemo';
import { BlogRouter } from './components/blog/BlogRouter';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<{page: 'home' | 'blog'; articleId?: string}>({page: 'home'});

  // Simple routing based on URL hash and path
  useEffect(() => {
    const handleRouteChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      
      if (hash === '#blog' || path === '/blog') {
        setCurrentRoute({page: 'blog'});
      } else if (path.startsWith('/blog/')) {
        const articleId = path.replace('/blog/', '');
        setCurrentRoute({page: 'blog', articleId});
      } else {
        setCurrentRoute({page: 'home'});
      }
    };

    // Check initial route
    handleRouteChange();

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  if (currentRoute.page === 'blog') {
    if (currentRoute.articleId) {
      return <BlogRouter articleId={currentRoute.articleId} />;
    }
    return <BlogRouter />;
  }

  return <NaricareLanding />;
};