'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FiSearch, FiTag, FiClock, FiExternalLink, FiLoader } from 'react-icons/fi';

interface Article {
  title: string;
  description: string;
  link: string;
  date: string;
  tags: string[];
  featured: boolean;
}

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/medium');
        if (!response.ok) {
          throw new Error('Failed to fetch articles');
        }
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError('Failed to load articles. Please try again later.');
        console.error('Error fetching articles:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const allTags = Array.from(new Set(articles.flatMap(article => article.tags)));

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || selectedTags.some(tag => article.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  if (isLoading) {
    return (
      <section className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto pt-24 flex flex-col items-center justify-center">
          <FiLoader className="w-8 h-8 text-pink-500 animate-spin mb-4" />
          <p className="text-white/60">Loading articles...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto pt-24 flex flex-col items-center justify-center">
          <p className="text-red-400 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-lg hover:bg-pink-500/30 transition-colors"
          >
            Try Again
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4 text-center sm:text-left leading-tight"
        >
          Articles & Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-white/60 mb-8 text-center sm:text-left"
        >
          Exploring data engineering, machine learning, and software development through writing
        </motion.p>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <form className="flex w-full max-w-md items-center bg-white/5 border border-white/10 rounded-lg shadow-sm px-2 py-1 mx-auto" onSubmit={e => e.preventDefault()}>
            <span className="flex items-center pl-2 pr-1 text-white/40">
              <FiSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent outline-none border-none text-white placeholder-white/40 py-1 px-2 text-base"
            />
            <button type="submit" className="ml-2 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-md hover:from-pink-600 hover:to-purple-600 transition-all text-sm shadow">
              Search
            </button>
          </form>

          <div className="flex flex-wrap gap-2 items-start justify-center mt-4">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                    : 'bg-white/5 text-white/60 hover:bg-white/10'
                }`}
              >
                <FiTag className="inline mr-1" />
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article, idx) => (
            <motion.article
              key={article.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 sm:p-8 border border-white/10 hover:border-pink-500/30 shadow transition-all duration-300 backdrop-blur-md flex flex-col"
            >
              <h2 className="text-xl font-semibold text-white mb-3 flex-grow">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition-colors flex items-center gap-2"
                >
                  {article.title}
                  <FiExternalLink className="inline ml-2" />
                </a>
              </h2>
              <p className="text-white/60 mb-4 line-clamp-3">{article.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center text-white/40 text-sm">
                  <FiClock className="mr-1.5" />
                  {article.date}
                </div>
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-full text-xs bg-purple-500/20 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/60">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
} 