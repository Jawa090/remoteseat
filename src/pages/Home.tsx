import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Building2, 
  Palette, 
  Bot, 
  Heart, 
  Megaphone, 
  Settings, 
  Star, 
  Users, 
  CheckCircle, 
  Globe, 
  Shield, 
  Clock,
  TrendingUp,
  Award,
  Zap,
  Target,
  Briefcase,
  Calendar,
  DollarSign,
  BarChart3,
  Lightbulb,
  Rocket,
  Eye,
  MessageSquare,
  FileText,
  Play,
  ChevronRight,
  ChevronLeft,
  ShoppingBag,
  Search,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Database,
  Cloud,
  Lock,
  Wifi,
  Monitor,
  Smartphone,
  Tablet,
  Code,
  GitBranch,
  Server,
  Network,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  TrendingDown,
  AlertCircle,
  Info,
  HelpCircle,
  BookOpen,
  Video,
  Headphones,
  Camera,
  Mic,
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
  List,
  Grid,
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
  Calculator,
  CalendarDays,
  Timer,
  Hourglass
} from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Construction Management',
      description: 'Expert virtual construction managers for seamless project oversight',
      path: '/services/construction-management',
      color: 'from-orange-500 to-red-500',
      features: ['Project Planning', 'Cost Control', 'Quality Assurance', 'Timeline Management']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered design solutions that convert',
      path: '/services/ui-ux-design',
      color: 'from-pink-500 to-purple-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
      icon: Bot,
      title: 'Agentic AI Services',
      description: 'Intelligent automation solutions for modern businesses',
      path: '/services/ai-services',
      color: 'from-blue-500 to-cyan-500',
      features: ['Chatbots', 'Process Automation', 'Machine Learning', 'Data Analytics']
    },
    {
      icon: Heart,
      title: 'Healthcare Staffing',
      description: 'Qualified healthcare professionals for virtual care',
      path: '/services/healthcare-staffing',
      color: 'from-green-500 to-emerald-500',
      features: ['Virtual Nurses', 'Medical Assistants', 'Telehealth Support', 'HIPAA Compliance']
    },
    {
      icon: Megaphone,
      title: 'Marketing & Branding',
      description: 'Creative marketing solutions that drive growth',
      path: '/services/marketing-branding',
      color: 'from-yellow-500 to-orange-500',
      features: ['Digital Marketing', 'Brand Identity', 'Content Strategy', 'Growth Marketing']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored services to meet your unique business needs',
      path: '/services/custom-solutions',
      color: 'from-purple-500 to-indigo-500',
      features: ['Custom Development', 'System Integration', 'Process Optimization', 'Strategic Consulting']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Expert Professionals', icon: Users },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Clock },
    { number: '40%', label: 'Cost Savings', icon: DollarSign },
    { number: '15+', label: 'Industries Served', icon: Briefcase }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, BuildTech Solutions',
      content: 'RemoteSeat transformed our construction project management. Their virtual managers delivered exceptional results, saving us 40% on operational costs while maintaining the highest quality standards.',
      rating: 5,
      company: 'BuildTech Solutions',
      industry: 'Construction'
    },
    {
      name: 'Michael Chen',
      title: 'CTO, HealthFirst',
      content: 'The healthcare staffing solutions provided by RemoteSeat are outstanding. Professional, reliable, and perfectly matched to our needs. They helped us scale our telehealth operations seamlessly.',
      rating: 5,
      company: 'HealthFirst',
      industry: 'Healthcare'
    },
    {
      name: 'Emma Rodriguez',
      title: 'Marketing Director, TechFlow',
      content: 'Their UI/UX design team created an incredible user experience for our platform. The attention to detail and creativity exceeded expectations, resulting in a 300% increase in user engagement.',
      rating: 5,
      company: 'TechFlow',
      industry: 'Technology'
    },
    {
      name: 'David Thompson',
      title: 'Operations Manager, InnovateCorp',
      content: 'RemoteSeat\'s AI services revolutionized our customer support. Their chatbot handles 80% of inquiries automatically, allowing our team to focus on complex cases.',
      rating: 5,
      company: 'InnovateCorp',
      industry: 'Technology'
    },
    {
      name: 'Lisa Wang',
      title: 'Founder, StartupXYZ',
      content: 'The custom development team at RemoteSeat built a solution that perfectly addressed our unique business challenges. The results exceeded our expectations and helped us scale rapidly.',
      rating: 5,
      company: 'StartupXYZ',
      industry: 'Startup'
    },
    {
      name: 'Robert Martinez',
      title: 'VP Marketing, GlobalSoft',
      content: 'Their marketing and branding services transformed our brand presence. We saw a 250% increase in lead generation and significantly improved brand recognition.',
      rating: 5,
      company: 'GlobalSoft',
      industry: 'Software'
    }
  ];

  const trustedLogos = [
    'TechFlow', 'BuildTech', 'HealthFirst', 'InnovateCorp', 'GlobalSoft', 'NextGen', 'StartupXYZ', 'Enterprise Solutions'
  ];

  const features = [
    {
      icon: Globe,
      title: 'Global Talent Pool',
      description: 'Access top professionals from around the world with diverse expertise and cultural insights'
    },
    {
      icon: Shield,
      title: 'Vetted Professionals',
      description: 'Rigorous screening and verification process ensures quality, reliability, and security'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock assistance and support for seamless operations across time zones'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful project deliveries with measurable business outcomes'
    },
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Quick onboarding and deployment to meet urgent business needs and deadlines'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Comprehensive quality control processes to ensure exceptional deliverables'
    }
  ];

  const caseStudies = [
    {
      title: 'Construction Management Transformation',
      company: 'BuildTech Solutions',
      challenge: 'Complex multi-site construction project with tight deadlines and budget constraints',
      solution: 'Deployed virtual construction managers with specialized expertise in project planning and cost control',
      results: ['40% reduction in operational costs', '25% faster project completion', 'Improved quality control processes'],
      industry: 'Construction'
    },
    {
      title: 'Healthcare Staffing Revolution',
      company: 'HealthFirst',
      challenge: 'Rapid scaling of telehealth services during increased demand',
      solution: 'Provided qualified healthcare professionals with telehealth expertise and HIPAA compliance',
      results: ['80% increase in patient capacity', 'Improved patient satisfaction scores', 'Reduced wait times by 60%'],
      industry: 'Healthcare'
    },
    {
      title: 'AI-Powered Customer Support',
      company: 'InnovateCorp',
      challenge: 'Overwhelmed customer support team with repetitive inquiries',
      solution: 'Implemented intelligent chatbot and process automation solutions',
      results: ['80% of inquiries handled automatically', '50% reduction in response time', 'Improved customer satisfaction'],
      industry: 'Technology'
    }
  ];

  const industries = [
    { name: 'Construction', icon: Building2, count: '50+ projects' },
    { name: 'Healthcare', icon: Heart, count: '30+ clients' },
    { name: 'Technology', icon: Bot, count: '100+ solutions' },
    { name: 'Finance', icon: DollarSign, count: '25+ partnerships' },
    { name: 'Education', icon: Users, count: '40+ institutions' },
    { name: 'Retail', icon: ShoppingBag, count: '35+ brands' }
  ];

  const howItWorks = [
    {
      icon: Search,
      title: '1. Define Your Needs',
      description: 'Tell us about your project requirements, timeline, and budget. Our experts will analyze your needs and recommend the best solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: '2. Match with Talent',
      description: 'We\'ll connect you with pre-vetted professionals who match your specific requirements and industry expertise.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: '3. Quality Assurance',
      description: 'Our rigorous screening process ensures you get top-tier talent with proven track records and relevant experience.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Rocket,
      title: '4. Launch & Scale',
      description: 'Start working immediately with your remote team. We provide ongoing support to ensure project success and scalability.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const technologyStack = [
    {
      icon: Cpu,
      title: 'AI & Machine Learning',
      description: 'Advanced AI solutions for automation and intelligent decision-making',
      tools: ['TensorFlow', 'PyTorch', 'OpenAI', 'Custom Models']
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies',
      tools: ['React', 'Node.js', 'Python', 'AWS', 'Docker']
    },
    {
      icon: Database,
      title: 'Data & Analytics',
      description: 'Comprehensive data solutions and business intelligence',
      tools: ['PostgreSQL', 'MongoDB', 'Tableau', 'Power BI']
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern applications',
      tools: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes']
    },
    {
      icon: Monitor,
      title: 'Design & UX',
      description: 'Beautiful, user-centered design solutions',
      tools: ['Figma', 'Adobe Creative Suite', 'Sketch', 'InVision']
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance',
      tools: ['SOC 2', 'HIPAA', 'GDPR', 'ISO 27001']
    }
  ];



  const benefits = [
    {
      icon: TrendingUp,
      title: 'Cost Efficiency',
      description: 'Save up to 60% on operational costs compared to traditional hiring',
      metric: '60% savings'
    },
    {
      icon: Clock,
      title: 'Time to Market',
      description: 'Deploy teams in days, not months, to accelerate your projects',
      metric: '5x faster'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Tap into talent pools from around the world with diverse expertise',
      metric: '150+ countries'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Reduced hiring risks with pre-vetted professionals and flexible contracts',
      metric: '99% success rate'
    },
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Scale your team up or down based on project requirements',
      metric: 'Flexible scaling'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous screening ensures top-tier talent and consistent delivery',
      metric: '4.9/5 rating'
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our experts',
      contact: '+1 (555) 123-4567',
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your requirements',
      contact: 'hello@remoteseat.com',
      action: 'Send Email'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Get instant support',
      contact: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Schedule an in-person meeting',
      contact: 'San Francisco, CA',
      action: 'Book Meeting'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4 mr-2" />
              Trusted by 500+ companies worldwide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
              RemoteSeat: <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">On-Demand Talent</span> & Intelligent Services for Tomorrow's Business
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Scale your business with premium remote professionals across construction, design, healthcare, AI, and more. 
              We connect you with world-class talent to drive growth, innovation, and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                No setup fees
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Flexible contracts
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                24/7 support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <stat.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 mb-2">
              Trusted by innovative companies worldwide
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="relative overflow-hidden">
            <div className="flex space-x-6 animate-scroll">
              {/* First set of logos */}
              {trustedLogos.map((logo, index) => (
                <motion.div
                  key={`first-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group flex-shrink-0"
                >
                  <div className="w-48 h-32 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                      {logo}
                    </h4>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {trustedLogos.map((logo, index) => (
                <motion.div
                  key={`second-${index}`}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group flex-shrink-0"
                >
                  <div className="w-48 h-32 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group-hover:border-blue-300 dark:group-hover:border-blue-600 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                      {logo}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>500+ successful partnerships</span>
              <span className="text-gray-300 dark:text-gray-600">•</span>
              <span>98% client satisfaction rate</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Remote Workforce Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From construction management to AI automation, we provide expert remote talent 
              across multiple industries to help your business thrive and scale efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Link to={service.path} className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, providing tailored solutions for diverse business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {industry.count}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose RemoteSeat?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're committed to delivering exceptional remote talent solutions that drive real business results and operational excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real clients. See how RemoteSeat has transformed businesses across industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{study.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{study.company}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Challenge:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Solution:</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{study.solution}</p>
                  
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Results:</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium">
                  {study.industry}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what industry leaders say about working with RemoteSeat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {testimonial.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {testimonial.company}
                    </span>
                    <span className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-xs">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our streamlined process makes it easy to find and onboard the perfect remote talent for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
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

      {/* Technology Stack Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver exceptional results across all our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologyStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {tech.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose RemoteSeat?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the advantages that make us the preferred choice for remote talent solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {benefit.description}
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                  {benefit.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Methods Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your journey with RemoteSeat? Choose your preferred way to connect with us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {method.description}
                </p>
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                  {method.contact}
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of companies that trust RemoteSeat for their remote staffing needs. 
              Let's discuss how we can help you achieve your business goals and scale efficiently.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="mt-8 text-blue-100 text-sm">
              <p>✓ No setup fees • ✓ Flexible contracts • ✓ 24/7 support • ✓ 30-day satisfaction guarantee</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;