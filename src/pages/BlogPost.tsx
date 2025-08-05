import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft,
  Eye,
  Heart,
  Share2,
  Bookmark,
  Tag,
  MessageSquare,
  ThumbsUp,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Copy,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock blog post data - in a real app, this would come from an API
  const blogPost = {
    id: parseInt(id || '1'),
    title: 'The Future of Remote Construction Management: A Comprehensive Guide',
    excerpt: 'Discover how virtual construction managers are revolutionizing project oversight and delivery in the construction industry.',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        The construction industry is undergoing a digital transformation that's reshaping how projects are managed and delivered. 
        Remote construction management has emerged as a game-changing approach that leverages technology to provide real-time 
        oversight, enhanced collaboration, and improved project outcomes.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">The Evolution of Construction Management</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Traditional construction management relied heavily on physical presence and manual processes. Project managers had to 
        be on-site to monitor progress, coordinate with teams, and ensure quality standards were met. This approach, while 
        effective, was limited by geographical constraints and often led to delays and increased costs.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Key Technologies Driving Remote Management</h2>
      
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">1. Building Information Modeling (BIM)</h3>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        BIM technology has revolutionized how construction projects are planned and executed. Virtual construction managers 
        can now create detailed 3D models that provide comprehensive insights into every aspect of a project, from 
        structural elements to MEP systems.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">2. IoT Sensors and Smart Monitoring</h3>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Internet of Things (IoT) sensors embedded throughout construction sites provide real-time data on progress, 
        safety conditions, and resource utilization. This data enables remote managers to make informed decisions 
        without being physically present.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">3. Drone Technology</h3>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Drones equipped with high-resolution cameras and LiDAR sensors can capture detailed aerial imagery and 3D 
        scans of construction sites. This technology allows remote managers to conduct virtual site inspections 
        and monitor progress from anywhere in the world.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Benefits of Remote Construction Management</h2>
      
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <h4 class="font-semibold text-blue-900 dark:text-blue-100 mb-2">Cost Reduction</h4>
          <p class="text-blue-800 dark:text-blue-200">Eliminate travel costs and reduce overhead expenses while maintaining project oversight.</p>
        </div>
        <div class="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
          <h4 class="font-semibold text-green-900 dark:text-green-100 mb-2">24/7 Monitoring</h4>
          <p class="text-green-800 dark:text-green-200">Continuous project monitoring with automated alerts and real-time reporting.</p>
        </div>
        <div class="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
          <h4 class="font-semibold text-purple-900 dark:text-purple-100 mb-2">Enhanced Collaboration</h4>
          <p class="text-purple-800 dark:text-purple-200">Improved communication between stakeholders through digital platforms and tools.</p>
        </div>
        <div class="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
          <h4 class="font-semibold text-orange-900 dark:text-orange-100 mb-2">Risk Mitigation</h4>
          <p class="text-orange-800 dark:text-orange-200">Early identification of potential issues through predictive analytics and monitoring.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Implementation Strategies</h2>
      
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Phase 1: Technology Assessment</h3>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Begin by evaluating your current technology infrastructure and identifying gaps that need to be addressed. 
        This includes assessing network connectivity, hardware requirements, and software compatibility.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Phase 2: Team Training</h3>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Invest in comprehensive training programs to ensure all team members are comfortable with new technologies 
        and processes. This includes both technical training and change management initiatives.
      </p>

      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 mt-6">Phase 3: Pilot Program</h3>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        Start with a small-scale pilot program to test remote management capabilities and identify areas for 
        improvement before scaling up to larger projects.
      </p>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">Challenges and Solutions</h2>
      
      <div class="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
        <h4 class="font-semibold text-yellow-900 dark:text-yellow-100 mb-2">Challenge: Resistance to Change</h4>
        <p class="text-yellow-800 dark:text-yellow-200 mb-4">
          Many construction professionals are accustomed to traditional management methods and may resist 
          adopting new technologies.
        </p>
        <p class="text-yellow-800 dark:text-yellow-200">
          <strong>Solution:</strong> Implement comprehensive change management programs that include education, 
          training, and ongoing support to help teams adapt to new processes.
        </p>
      </div>

      <div class="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6">
        <h4 class="font-semibold text-red-900 dark:text-red-100 mb-2">Challenge: Data Security</h4>
        <p class="text-red-800 dark:text-red-200 mb-4">
          Remote management relies heavily on digital data, which can be vulnerable to security breaches 
          and cyber attacks.
        </p>
        <p class="text-red-800 dark:text-red-200">
          <strong>Solution:</strong> Implement robust cybersecurity measures, including encryption, 
          secure cloud storage, and regular security audits.
        </p>
      </div>

      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 mt-8">The Future Outlook</h2>
      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        As technology continues to advance, remote construction management will become increasingly sophisticated. 
        We can expect to see more integration of artificial intelligence, machine learning, and augmented reality 
        in construction management processes.
      </p>

      <p class="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        The construction industry is at a pivotal moment where embracing remote management capabilities can 
        provide significant competitive advantages. Companies that invest in these technologies now will be 
        well-positioned to lead the industry into the future.
      </p>
    `,
    author: 'Alex Thompson',
    authorAvatar: '/authors/alex-thompson.jpg',
    authorBio: 'Senior Construction Management Consultant with over 15 years of experience in digital transformation and remote project oversight.',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Construction',
    image: '/blog/construction-management.jpg',
    tags: ['Construction', 'Remote Work', 'Project Management', 'Technology', 'Digital Transformation'],
    views: 2847,
    likes: 156,
    shares: 89,
    comments: 23
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'AI-Powered Solutions for Modern Businesses',
      excerpt: 'Explore how artificial intelligence is transforming business operations.',
      date: 'December 12, 2024',
      category: 'Technology'
    },
    {
      id: 3,
      title: 'Designing User-Centered Digital Experiences',
      excerpt: 'Learn the principles of creating intuitive user interfaces.',
      date: 'December 10, 2024',
      category: 'Design'
    },
    {
      id: 4,
      title: 'Healthcare Staffing in the Digital Age',
      excerpt: 'How remote healthcare professionals are expanding access to care.',
      date: 'December 8, 2024',
      category: 'Healthcare'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">


      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Category and Date */}
          <div className="flex items-center gap-4 mb-6">
            <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
              {blogPost.category}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {blogPost.date}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {blogPost.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {blogPost.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{blogPost.author}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{blogPost.authorBio}</p>
            </div>
          </div>

          {/* Featured Image */}
          <div className="bg-gray-200 dark:bg-gray-700 rounded-xl h-96 mb-8 flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400 text-lg">Featured Image</span>
          </div>

          {/* Article Stats */}
          <div className="flex items-center gap-6 mb-8 text-sm text-gray-600 dark:text-gray-300">
            <span className="flex items-center">
              <Eye className="h-4 w-4 mr-1" />
              {blogPost.views.toLocaleString()} views
            </span>
            <span className="flex items-center">
              <Heart className="h-4 w-4 mr-1" />
              {blogPost.likes} likes
            </span>
            <span className="flex items-center">
              <Share2 className="h-4 w-4 mr-1" />
              {blogPost.shares} shares
            </span>
            <span className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              {blogPost.comments} comments
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full flex items-center"
              >
                <Tag className="h-3 w-3 mr-1" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        {/* Article Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
        >
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors">
              <Heart className="h-4 w-4" />
              Like
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
              <MessageSquare className="h-4 w-4" />
              Comment
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400 rounded-lg hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-colors">
              <Bookmark className="h-4 w-4" />
              Save
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-300">Share:</span>
            <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              <Facebook className="h-4 w-4" />
            </button>
            <button className="p-2 text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              <Twitter className="h-4 w-4" />
            </button>
            <button className="p-2 text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
              <Linkedin className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Mail className="h-4 w-4" />
            </button>
            <button className="p-2 text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </article>

      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gray-200 dark:bg-gray-700 h-48 flex items-center justify-center">
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
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default BlogPost; 