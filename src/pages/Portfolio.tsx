import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Calculator, 
  Code, 
  Palette, 
  Heart, 
  Bot, 
  Megaphone, 
  Settings,
  ExternalLink,
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  ArrowRight,
  Eye,
  Play,
  Pause,
  ChevronRight,
  ChevronLeft,
  Filter,
  Search,
  Grid,
  List,
  Calendar,
  Target,
  Zap,
  CheckCircle,
  Globe,
  Shield,
  Rocket,
  Lightbulb,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Cpu,
  Database,
  Cloud,
  Monitor,
  Smartphone,
  Tablet,
  Wifi,
  Lock,
  Server,
  Network,
  GitBranch,
  Code2,
  FileText,
  Image,
  Video,
  Music,
  Camera,
  Mic,
  Headphones,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Share2,
  Download,
  Upload,
  RefreshCw,
  RotateCcw,
  Maximize2,
  Minimize2,
  Move,
  Copy,
  Scissors,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List as ListIcon,
  Grid as GridIcon,
  Columns,
  Rows,
  Layout,
  Sidebar,
  Menu,
  X,
  Plus,
  Minus,
  Divide,
  Percent,
  Hash,
  AtSign,
  Euro,
  Bitcoin,
  CreditCard,
  Wallet,
  Receipt,
  Calculator as CalcIcon,
  CalendarDays,
  Timer,
  Hourglass,
  CalendarCheck,
  CalendarX,
  CalendarPlus,
  CalendarMinus,
  CalendarRange,
  CalendarClock,
  CalendarOff,
  CalendarSearch,
  CalendarHeart,
  CalendarImport,
  CalendarExport,
  CalendarSync,
  CalendarDownload,
  CalendarUpload,
  CalendarShare,
  CalendarLock,
  CalendarUnlock,
  CalendarKey,
  CalendarShield,
  CalendarAlert,
  CalendarInfo,
  CalendarQuestion,
  CalendarHelp,
  CalendarBook,
  CalendarVideo,
  CalendarHeadphones,
  CalendarCamera,
  CalendarMic,
  CalendarShare2,
  CalendarDownload2,
  CalendarUpload2,
  CalendarRefresh,
  CalendarRotate,
  CalendarMaximize,
  CalendarMinimize,
  CalendarMove,
  CalendarCopy2,
  CalendarScissors,
  CalendarType,
  CalendarBold,
  CalendarItalic,
  CalendarUnderline,
  CalendarAlignLeft,
  CalendarAlignCenter,
  CalendarAlignRight,
  CalendarList,
  CalendarGrid,
  CalendarColumns,
  CalendarRows,
  CalendarLayout,
  CalendarSidebar,
  CalendarMenu,
  CalendarX2,
  CalendarPlus2,
  CalendarMinus2,
  CalendarDivide,
  CalendarPercent,
  CalendarHash,
  CalendarAtSign,
  CalendarDollar,
  CalendarEuro,
  CalendarBitcoin,
  CalendarCreditCard,
  CalendarWallet,
  CalendarReceipt,
  CalendarCalculator
} from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Grid },
    { id: 'construction', name: 'Construction', icon: Building2 },
    { id: 'web-development', name: 'Web Development', icon: Code },
    { id: 'design', name: 'UI/UX Design', icon: Palette },
    { id: 'healthcare', name: 'Healthcare', icon: Heart },
    { id: 'ai', name: 'AI Services', icon: Bot },
    { id: 'marketing', name: 'Marketing', icon: Megaphone }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Construction Management Platform',
      category: 'construction',
      client: 'Metro Construction Co.',
      description: 'Developed a comprehensive project management system that reduced project timelines by 30% and improved cost tracking accuracy by 95%.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      results: {
        timeline: '6 months',
        team: '8 professionals',
        savings: '$2.5M',
        rating: 4.9,
        efficiency: '+30%',
        accuracy: '95%'
      },
      features: ['Real-time project tracking', 'Automated reporting', 'Resource optimization', 'Mobile app integration'],
      highlights: ['Reduced project timelines by 30%', 'Improved cost tracking accuracy by 95%', 'Enhanced team collaboration'],
      status: 'completed',
      year: 2024
    },
    {
      id: 2,
      title: 'E-commerce Platform Redesign',
      category: 'web-development',
      client: 'TechRetail Solutions',
      description: 'Complete redesign and development of an e-commerce platform that increased conversion rates by 45% and improved user engagement.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'MongoDB'],
      results: {
        timeline: '4 months',
        team: '6 professionals',
        savings: '$1.8M',
        rating: 4.8,
        conversion: '+45%',
        engagement: '+60%'
      },
      features: ['Responsive design', 'Payment integration', 'Inventory management', 'Analytics dashboard'],
      highlights: ['Increased conversion rates by 45%', 'Improved user engagement by 60%', 'Enhanced mobile experience'],
      status: 'completed',
      year: 2024
    },
    {
      id: 3,
      title: 'Healthcare Staffing Management System',
      category: 'healthcare',
      client: 'Regional Medical Center',
      description: 'Built a comprehensive staffing management system that improved scheduling efficiency by 60% and reduced administrative overhead.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Python', 'Django', 'Redis'],
      results: {
        timeline: '5 months',
        team: '10 professionals',
        savings: '$3.2M',
        rating: 4.9,
        efficiency: '+60%',
        overhead: '-40%'
      },
      features: ['Automated scheduling', 'Compliance tracking', 'Performance monitoring', 'Mobile accessibility'],
      highlights: ['Improved scheduling efficiency by 60%', 'Reduced administrative overhead by 40%', 'Enhanced compliance tracking'],
      status: 'completed',
      year: 2023
    },
    {
      id: 4,
      title: 'AI-Powered Customer Service Bot',
      category: 'ai',
      client: 'Global Retail Chain',
      description: 'Developed an intelligent chatbot that handles 70% of customer inquiries automatically, reducing response times by 80%.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'NLP', 'AWS Lambda'],
      results: {
        timeline: '3 months',
        team: '4 professionals',
        savings: '$1.5M',
        rating: 4.7,
        automation: '70%',
        response: '-80%'
      },
      features: ['Natural language processing', 'Multi-language support', 'Integration with CRM', 'Analytics dashboard'],
      highlights: ['Handles 70% of inquiries automatically', 'Reduced response times by 80%', 'Multi-language support'],
      status: 'completed',
      year: 2023
    },
    {
      id: 5,
      title: 'Brand Identity & Marketing Campaign',
      category: 'marketing',
      client: 'StartupTech Inc.',
      description: 'Complete brand identity redesign and digital marketing campaign that increased brand awareness by 200% and generated 150% more leads.',
      image: '/api/placeholder/600/400',
      technologies: ['Adobe Creative Suite', 'Google Ads', 'Social Media', 'Analytics'],
      results: {
        timeline: '2 months',
        team: '5 professionals',
        savings: '$800K',
        rating: 4.8,
        awareness: '+200%',
        leads: '+150%'
      },
      features: ['Logo design', 'Brand guidelines', 'Digital campaigns', 'Performance tracking'],
      highlights: ['Increased brand awareness by 200%', 'Generated 150% more leads', 'Enhanced brand recognition'],
      status: 'completed',
      year: 2023
    },
    {
      id: 6,
      title: 'Custom ERP System',
      category: 'web-development',
      client: 'Manufacturing Corp.',
      description: 'Developed a custom ERP system that streamlined operations across 12 departments and improved data accuracy by 90%.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Oracle'],
      results: {
        timeline: '8 months',
        team: '12 professionals',
        savings: '$4.5M',
        rating: 4.9,
        accuracy: '90%',
        departments: 12
      },
      features: ['Inventory management', 'Financial reporting', 'HR integration', 'Real-time analytics'],
      highlights: ['Streamlined operations across 12 departments', 'Improved data accuracy by 90%', 'Enhanced cross-department collaboration'],
      status: 'completed',
      year: 2023
    },
    {
      id: 7,
      title: 'Smart City IoT Platform',
      category: 'ai',
      client: 'CityTech Municipal',
      description: 'Built an IoT platform for smart city management that improved resource utilization by 35% and reduced energy consumption by 25%.',
      image: '/api/placeholder/600/400',
      technologies: ['IoT', 'Machine Learning', 'Cloud Computing', 'Data Analytics'],
      results: {
        timeline: '10 months',
        team: '15 professionals',
        savings: '$5.2M',
        rating: 4.9,
        utilization: '+35%',
        energy: '-25%'
      },
      features: ['Real-time monitoring', 'Predictive analytics', 'Automated controls', 'Mobile dashboard'],
      highlights: ['Improved resource utilization by 35%', 'Reduced energy consumption by 25%', 'Enhanced citizen services'],
      status: 'completed',
      year: 2023
    },
    {
      id: 8,
      title: 'FinTech Mobile App',
      category: 'web-development',
      client: 'DigitalBank Pro',
      description: 'Developed a secure mobile banking application that increased user adoption by 120% and improved transaction security.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Node.js', 'Blockchain', 'Biometrics'],
      results: {
        timeline: '7 months',
        team: '9 professionals',
        savings: '$2.8M',
        rating: 4.8,
        adoption: '+120%',
        security: '99.9%'
      },
      features: ['Secure transactions', 'Biometric authentication', 'Real-time notifications', 'Investment tracking'],
      highlights: ['Increased user adoption by 120%', 'Enhanced transaction security', 'Improved user experience'],
      status: 'completed',
      year: 2023
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { number: '95%', label: 'Client Satisfaction', icon: Star, color: 'from-yellow-500 to-orange-500' },
    { number: '$15M+', label: 'Client Savings', icon: DollarSign, color: 'from-blue-500 to-cyan-500' },
    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-purple-500 to-pink-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-blue-900/10 dark:via-gray-900 dark:to-purple-900/10"></div>
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-8 shadow-sm"
            >
              <Award className="w-4 h-4 mr-2" />
              Award-winning portfolio
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-8"
            >
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-16 leading-relaxed"
            >
              Discover how we've transformed businesses across industries with innovative 
              remote staffing solutions and cutting-edge technology implementations.
            </motion.p>
            
            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-1 bg-gray-50 dark:bg-gray-700 rounded-xl p-1 border border-gray-200 dark:border-gray-600">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <GridIcon className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 rounded-lg transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeFilter}-${viewMode}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" 
                : "space-y-6"
              }
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`group cursor-pointer ${
                    viewMode === 'grid' 
                      ? "bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600" 
                      : "bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-300 dark:hover:border-blue-600"
                  }`}
                  onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
                >
                  {viewMode === 'grid' ? (
                    // Grid View
                    <>
                      {/* Project Image */}
                      <div className="relative h-48 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="text-white text-center relative z-10">
                          <div className="text-3xl font-bold mb-2">{project.title.split(' ')[0]}</div>
                          <div className="text-sm opacity-90">Project Preview</div>
                        </div>
                        <div className="absolute top-4 right-4">
                          <ExternalLink className="w-5 h-5 text-white opacity-70" />
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                            {project.year}
                          </span>
                        </div>
                      </div>

                      {/* Project Content */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {project.results.rating}
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                          {project.description}
                        </p>

                        {/* Client Info */}
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Client:</span>
                          <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">{project.client}</span>
                        </div>

                        {/* Key Results */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          {Object.entries(project.results).slice(0, 4).map(([key, value]) => (
                            <div key={key} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span className="text-xs text-gray-600 dark:text-gray-400">
                                {typeof value === 'string' && value.includes('%') ? value : 
                                 typeof value === 'string' && value.includes('$') ? value :
                                 typeof value === 'string' && value.includes('+') ? value :
                                 typeof value === 'string' && value.includes('-') ? value :
                                 typeof value === 'number' ? `${value}%` : value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies */}
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                +{project.technologies.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Features Preview */}
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.slice(0, 2).map((feature) => (
                              <li key={feature} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                            {project.features.length > 2 && (
                              <li className="text-sm text-gray-500 dark:text-gray-500 flex items-center">
                                <span className="w-3 h-3 mr-2"></span>
                                +{project.features.length - 2} more features
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </>
                  ) : (
                    // List View
                    <div className="flex items-center space-x-6">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="text-white text-center">
                          <div className="text-lg font-bold">{project.title.split(' ')[0]}</div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {project.results.rating}
                            </span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400 mb-3">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                          <span>Client: {project.client}</span>
                          <span>Timeline: {project.results.timeline}</span>
                          <span>Team: {project.results.team}</span>
                          <span>Savings: {project.results.savings}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-xs font-medium">
                          {project.status}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Skills & Expertise Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We specialize in delivering exceptional results across multiple domains with cutting-edge technologies and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: 'AI & Machine Learning',
                description: 'Advanced AI solutions including chatbots, predictive analytics, and automation systems',
                skills: ['TensorFlow', 'PyTorch', 'OpenAI', 'NLP', 'Computer Vision'],
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Code,
                title: 'Full-Stack Development',
                description: 'End-to-end web and mobile applications with modern frameworks and technologies',
                skills: ['React', 'Node.js', 'Python', 'AWS', 'Docker'],
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Database,
                title: 'Data & Analytics',
                description: 'Comprehensive data solutions and business intelligence platforms',
                skills: ['PostgreSQL', 'MongoDB', 'Tableau', 'Power BI', 'Apache Spark'],
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Cloud,
                title: 'Cloud Infrastructure',
                description: 'Scalable cloud solutions and DevOps practices for modern applications',
                skills: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Terraform'],
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Monitor,
                title: 'UI/UX Design',
                description: 'Beautiful, user-centered design solutions that drive engagement and conversion',
                skills: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision', 'Prototyping'],
                color: 'from-pink-500 to-purple-500'
              },
              {
                icon: Shield,
                title: 'Security & Compliance',
                description: 'Enterprise-grade security and regulatory compliance solutions',
                skills: ['SOC 2', 'HIPAA', 'GDPR', 'ISO 27001', 'Penetration Testing'],
                color: 'from-indigo-500 to-blue-500'
              }
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4`}>
                  <skill.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Methodology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Search,
                title: 'Discovery & Planning',
                description: 'We analyze your requirements and create a comprehensive project roadmap',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: Users,
                title: 'Team Assembly',
                description: 'We handpick the perfect remote professionals for your project needs',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Rocket,
                title: 'Development & Delivery',
                description: 'Agile development with regular updates and milestone achievements',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Award,
                title: 'Quality Assurance',
                description: 'Rigorous testing and quality checks to ensure exceptional deliverables',
                color: 'from-orange-500 to-red-500'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. See how we've transformed businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                company: 'Metro Construction Co.',
                industry: 'Construction',
                result: '40% reduction in project timelines',
                description: 'Implemented comprehensive project management system with real-time tracking and automated reporting.',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Heart,
                company: 'Regional Medical Center',
                industry: 'Healthcare',
                result: '60% improvement in scheduling efficiency',
                description: 'Built staffing management system that streamlined operations and reduced administrative overhead.',
                color: 'from-green-500 to-emerald-500'
              },
              {
                icon: Bot,
                company: 'Global Retail Chain',
                industry: 'Technology',
                result: '70% of inquiries handled automatically',
                description: 'Developed AI-powered chatbot that revolutionized customer service and reduced response times.',
                color: 'from-blue-500 to-cyan-500'
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${story.color} rounded-xl flex items-center justify-center mb-4`}>
                  <story.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {story.company}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {story.industry} • {story.result}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {story.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Let's discuss how our remote staffing solutions can help you achieve your business goals 
              and create something amazing together.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
            >
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>View More Projects</span>
                <Eye className="w-5 h-5" />
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-blue-100 text-sm"
            >
              <p className="flex flex-wrap justify-center items-center gap-4">
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" />Free consultation</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" />No setup fees</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" />30-day guarantee</span>
                <span className="hidden sm:inline">•</span>
                <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-1" />24/7 support</span>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio; 