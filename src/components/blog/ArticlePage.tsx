import React from 'react';
import { ArrowLeft, Clock, User, Tag, BookOpen } from 'lucide-react';
import { BlogArticle, getCategoryById, getRecentArticles } from '../../data/blogData';
import { ContentRenderer } from './ContentRenderer';
import { Button } from '../ui/button';
import { SEO } from '../SEO';

interface ArticlePageProps {
  article: BlogArticle;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'beginner':
      return 'bg-green-100 text-green-800';
    case 'intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'advanced':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const ArticlePage: React.FC<ArticlePageProps> = ({ article }) => {
  const category = getCategoryById(article.category);
  const recentArticles = getRecentArticles(4).filter(a => a.id !== article.id).slice(0, 3);
  const publishDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title={article.title}
        description={article.summary}
        canonical={`/blog/${article.id}`}
        type="article"
        article={article}
        image={`/image-24.png`}
      />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => window.history.back()}
            className="mb-4 text-purple-600 hover:text-purple-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>

          <div className="mb-4">
            <span
              className="inline-block px-3 py-1 rounded-full text-sm font-medium"
              style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
            >
              {category?.name}
            </span>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 [font-family:'Merriweather',Helvetica]">
            {article.title}
          </h1>

          <p className="text-xl text-gray-600 mb-6 [font-family:'Poppins',Helvetica]">
            {article.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              {article.author}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} min read
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="w-4 h-4" />
              <span className={`px-2 py-1 rounded-full text-xs ${getDifficultyColor(article.difficulty)}`}>
                {article.difficulty}
              </span>
            </div>
            <div className="text-gray-400">
              Published {publishDate}
            </div>
          </div>

          {article.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <Tag className="w-4 h-4 text-gray-400" />
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Article Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <ContentRenderer sections={article.content.sections} />
        </article>

        {/* Related Articles */}
        {recentArticles.length > 0 && (
          <aside className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 [font-family:'Merriweather',Helvetica]">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {recentArticles.map((relatedArticle) => {
                const relatedCategory = getCategoryById(relatedArticle.category);
                return (
                  <div key={relatedArticle.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="mb-3">
                      <span
                        className="inline-block px-2 py-1 rounded-full text-xs font-medium"
                        style={{ backgroundColor: `${relatedCategory?.color}20`, color: relatedCategory?.color }}
                      >
                        {relatedCategory?.name}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {relatedArticle.summary}
                    </p>
                    <a
                      href={`/blog/${relatedArticle.id}`}
                      className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                );
              })}
            </div>
          </aside>
        )}
      </main>

      {/* Call to Action */}
      <section className="bg-[#8383ed] text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4 [font-family:'Merriweather',Helvetica]">
            Need Personalized Support?
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Get expert guidance from certified lactation consultants
          </p>
          <Button 
            onClick={() => window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank')}
            className="inline-flex h-12 gap-3 px-6 py-4 bg-white text-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-gray-100"
          >
            <span className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#8383ed] text-base tracking-[0] leading-7 whitespace-nowrap">
              Contact NariCare
            </span>
          </Button>
        </div>
      </section>
    </div>
  );
};