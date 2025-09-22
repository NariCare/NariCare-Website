import React, { useState } from 'react';
import { Search, Filter, Clock, User, ArrowRight, ArrowLeft } from 'lucide-react';
import { blogArticles, blogCategories, getCategoryById } from '../../data/blogData';
import { Button } from '../ui/button';
import { SEO } from '../SEO';

export const BlogListPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO
        title="Breastfeeding Resources & Expert Guidance"
        description="Expert advice, tips, and guides to support your breastfeeding journey. Learn from certified lactation consultants with practical tips for new mothers."
        canonical="/blog"
        type="website"
        image="/image-24.png"
      />
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => {
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new PopStateEvent('popstate'));
              }}
              className="text-[#8383ed] hover:text-[#7373dd] hover:bg-purple-50 border border-[#8383ed]/20 hover:border-[#8383ed]/40"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#8383ed] text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 [font-family:'Merriweather',Helvetica]">
              Breastfeeding Resources
            </h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto">
              Expert advice, tips, and guides to support your breastfeeding journey
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#8383ed]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-700">Filter by category:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className={selectedCategory === 'all' ? 'bg-[#8383ed] hover:bg-[#7373dd]' : ''}
            >
              All Articles ({blogArticles.length})
            </Button>
            {blogCategories.map((category) => {
              const count = blogArticles.filter(article => article.category === category.id).length;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? 'bg-purple-600 hover:bg-purple-700' : ''}
                  style={{
                    backgroundColor: selectedCategory === category.id ? category.color : undefined,
                    borderColor: selectedCategory !== category.id ? category.color : undefined,
                    color: selectedCategory !== category.id ? category.color : undefined
                  }}
                >
                  {category.name} ({count})
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 [font-family:'Merriweather',Helvetica]">
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArticles.map((article) => {
                const category = getCategoryById(article.category);
                const publishDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });

                return (
                  <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
                        >
                          {category?.name}
                        </span>
                        <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                          Featured
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 [font-family:'Merriweather',Helvetica]">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {article.summary}
                      </p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime} min
                          </div>
                        </div>
                        <span>{publishDate}</span>
                      </div>

                      <a
                        href={`/blog/${article.id}`}
                        className="inline-flex items-center gap-2 text-[#8383ed] hover:text-[#7373dd] font-medium"
                      >
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* All Articles */}
        <section>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 [font-family:'Merriweather',Helvetica]">
            {selectedCategory === 'all' ? 'All Articles' : `${getCategoryById(selectedCategory)?.name} Articles`}
          </h2>
          
          {regularArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {regularArticles.map((article) => {
                const category = getCategoryById(article.category);
                const publishDate = new Date(article.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                });

                return (
                  <article key={article.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                            style={{ backgroundColor: `${category?.color}20`, color: category?.color }}
                          >
                            {category?.name}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            article.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                            article.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {article.difficulty}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-2 [font-family:'Merriweather',Helvetica]">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-3 line-clamp-2">
                          {article.summary}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {article.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {article.readTime} min read
                          </div>
                          <span>{publishDate}</span>
                        </div>
                      </div>

                      <div className="lg:text-right">
                        <a
                          href={`/blog/${article.id}`}
                          className="inline-flex items-center gap-2 text-[#8383ed] hover:text-[#7373dd] font-medium"
                        >
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>
      </main>

      {/* Call to Action */}
      <section className="bg-[#8383ed] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 [font-family:'Merriweather',Helvetica]">
            Need Personalized Support?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance from certified lactation consultants
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=918142144762&text&type=phone_number&app_absent=0', '_blank')}
              className="inline-flex h-12 gap-3 px-6 py-4 bg-white text-[#8383ed] rounded-[10px] overflow-hidden border-[none] shadow-shadows-shadow-xs-skeuomorphic items-center justify-center relative before:content-[''] before:absolute before:inset-0 before:p-0.5 before:rounded-[10px] before:[background:linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none hover:bg-gray-100"
            >
              <span className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-[#8383ed] text-base tracking-[0] leading-7 whitespace-nowrap">
                Contact NariCare
              </span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};