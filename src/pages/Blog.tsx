import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  Search,
  Filter,
  Tag,
  Eye,
  Heart,
  Share2,
  Bookmark
} from 'lucide-react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Remote Construction Management',
      excerpt: 'Discover how virtual construction managers are revolutionizing project oversight and delivery in the construction industry.',
      author: 'Alex Thompson',
      date: 'December 15, 2024',
      readTime: '8 min read',
      category: 'Construction',
      image: '/blog/construction-management.jpg',
      tags: ['Construction', 'Remote Work', 'Project Management'],
      featured: true,
      views: 2847,
      likes: 156,
      shares: 89
    },
    {
      id: 2,
      title: 'AI-Powered Solutions for Modern Businesses',
      excerpt: 'Explore how artificial intelligence is transforming business operations and creating new opportunities for growth.',
      author: 'David Chen',
      date: 'December 12, 2024',
      readTime: '7 min read',
      category: 'Technology',
      image: '/blog/ai-solutions.jpg',
      tags: ['AI', 'Technology', 'Innovation'],
      views: 2156,
      likes: 134,
      shares: 67
    },
    {
      id: 3,
      title: 'Designing User-Centered Digital Experiences',
      excerpt: 'Learn the principles of creating intuitive and engaging user interfaces that drive conversion and satisfaction.',
      author: 'Sarah Williams',
      date: 'December 10, 2024',
      readTime: '6 min read',
      category: 'Design',
      image: '/blog/ui-ux-design.jpg',
      tags: ['UI/UX', 'Design', 'User Experience'],
      views: 1892,
      likes: 98,
      shares: 45
    },
    {
      id: 4,
      title: 'Healthcare Staffing in the Digital Age',
      excerpt: 'How remote healthcare professionals are expanding access to quality care and improving patient outcomes.',
      author: 'Maria Rodriguez',
      date: 'December 8, 2024',
      readTime: '4 min read',
      category: 'Healthcare',
      image: '/blog/healthcare-staffing.jpg',
      tags: ['Healthcare', 'Staffing', 'Remote Care'],
      views: 1654,
      likes: 87,
      shares: 34
    },
    {
      id: 5,
      title: 'Marketing Strategies for the Remote Era',
      excerpt: 'Effective marketing approaches that leverage remote talent and digital platforms for maximum impact.',
      author: 'Emma Rodriguez',
      date: 'December 5, 2024',
      readTime: '8 min read',
      category: 'Marketing',
      image: '/blog/marketing-strategies.jpg',
      tags: ['Marketing', 'Digital', 'Strategy'],
      views: 1423,
      likes: 76,
      shares: 28
    },
    {
      id: 6,
      title: 'Building Custom Solutions for Unique Business Needs',
      excerpt: 'How tailored remote workforce solutions can address specific challenges and drive business success.',
      author: 'Michael Chen',
      date: 'December 3, 2024',
      readTime: '6 min read',
      category: 'Solutions',
      image: '/blog/custom-solutions.jpg',
      tags: ['Custom Solutions', 'Business', 'Innovation'],
      views: 1234,
      likes: 65,
      shares: 23
    }
  ];

  const categories = [
    'All',
    'Construction',
    'Technology',
    'Design',
    'Healthcare',
    'Marketing',
    'Solutions'
  ];

  const popularTags = [
    'Remote Work',
    'AI',
    'Technology',
    'Design',
    'Healthcare',
    'Marketing',
    'Innovation',
    'Project Management'
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="text-blue-600 dark:text-blue-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Insights, trends, and expert perspectives on remote workforce solutions and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white w-full sm:w-80"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Article
            </h2>
          </motion.div>
          
          {blogPosts.filter(post => post.featured).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {post.title}
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                      <span className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      Read Full Article
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-64 flex items-center justify-center">
                  <span className="text-gray-500 dark:text-gray-400">Featured Image</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Categories and Filters */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row gap-8"
          >
            {/* Categories */}
            <div className="lg:w-1/4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      category === 'All' 
                        ? 'bg-blue-600 text-white' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Blog Posts */}
            <div className="lg:w-3/4">
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.filter(post => !post.featured).map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="bg-gray-200 dark:bg-gray-600 h-48 flex items-center justify-center">
                      <span className="text-gray-500 dark:text-gray-400">Blog Image</span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                          <span className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </span>
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-yellow-500 transition-colors">
                            <Bookmark className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Engagement Stats */}
                      <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <span className="flex items-center">
                          <Eye className="h-3 w-3 mr-1" />
                          {post.views?.toLocaleString() || '0'} views
                        </span>
                        <span className="flex items-center">
                          <Heart className="h-3 w-3 mr-1" />
                          {post.likes || '0'} likes
                        </span>
                        <span className="flex items-center">
                          <Share2 className="h-3 w-3 mr-1" />
                          {post.shares || '0'} shares
                        </span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center w-full justify-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                      >
                        Read Full Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Popular Tags
            </h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {popularTags.map((tag, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                <Tag className="inline h-4 w-4 mr-1" />
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Subscribe to our newsletter for the latest insights on remote workforce solutions and industry trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog; 