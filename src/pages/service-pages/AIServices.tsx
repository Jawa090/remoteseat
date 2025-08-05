import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bot, 
  Brain, 
  Zap, 
  Cpu, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Globe,
  Shield,
  Building2,
  Palette,
  Heart,
  Megaphone,
  Settings,
  Target,
  BarChart3,
  DollarSign,
  Clock,
  FileText,
  Eye,
  MessageSquare,
  TrendingUp,
  Users,
  Briefcase,
  Rocket,
  Lightbulb,
  Database,
  Network,
  Code,
  Layers,
  Play,
  ChevronRight,
  ChevronLeft,
  Monitor,
  Smartphone,
  Tablet,
  Cloud,
  Lock,
  Unlock,
  RefreshCw,
  Activity,
  PieChart,
  LineChart,
  BarChart,
  Server,
  HardDrive,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  Wrench,
  Hammer,
  Ruler,
  Calculator,
  Clipboard,
  AlertTriangle,
  Info,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Medal,
  Trophy,
  Crown,
  Gem,
  Diamond,
  Sparkles,
  Sun,
  Moon,
  Star as StarIcon,
  Heart as HeartIcon,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown,
  Check,
  X,
  Plus,
  Minus,
  Percent,
  Hash,
  AtSign,
  Euro,
  Bitcoin,
  CreditCard,
  Wallet,
  PiggyBank,
  Building,
  Home,
  Car,
  Plane,
  Train,
  Bus,
  Ship,
  Bike,
  Truck,
  Ambulance,
  Telescope,
  Microscope,
  Camera,
  Video,
  Music,
  Headphones,
  Speaker,
  Mic,
  MicOff,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Bell,
  BellOff,
  BellRing,
  Timer,
  TimerOff,
  TimerReset,
  Hourglass,
  AlarmClock,
  AlarmCheck,
  AlarmMinus,
  AlarmPlus,
  Watch
} from 'lucide-react';

const AIServices: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'AI Chatbots & Virtual Assistants',
      description: 'Advanced conversational AI with natural language processing and context awareness',
      features: ['Natural Language Processing (NLP)', 'Multi-language Support (50+ languages)', 'Context-Aware Conversations', 'Integration with CRM/ERP Systems', 'Sentiment Analysis', 'Voice Recognition & Synthesis']
    },
    {
      icon: Brain,
      title: 'Machine Learning & Deep Learning',
      description: 'Custom ML/DL models for predictive analytics, pattern recognition, and intelligent decision-making',
      features: ['Supervised & Unsupervised Learning', 'Neural Networks & Deep Learning', 'Computer Vision & Image Recognition', 'Natural Language Processing', 'Predictive Analytics', 'Anomaly Detection']
    },
    {
      icon: Zap,
      title: 'Intelligent Process Automation (RPA)',
      description: 'End-to-end automation solutions using AI to streamline business processes',
      features: ['Workflow Automation', 'Document Processing & OCR', 'Data Extraction & Validation', 'Process Mining & Optimization', 'Error Detection & Prevention', 'Scalable Automation Architecture']
    },
    {
      icon: Database,
      title: 'Big Data Analytics & AI',
      description: 'Advanced analytics solutions for large-scale data processing and insights',
      features: ['Real-time Data Processing', 'Data Lake & Warehouse Solutions', 'Advanced Analytics & BI', 'Predictive Modeling', 'Data Visualization', 'Real-time Dashboards']
    },
    {
      icon: Eye,
      title: 'Computer Vision & Image AI',
      description: 'Advanced image and video analysis using deep learning and computer vision',
      features: ['Object Detection & Recognition', 'Facial Recognition & Biometrics', 'Medical Image Analysis', 'Quality Control & Inspection', 'Video Analytics', 'AR/VR Integration']
    },
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Advanced text analysis, language understanding, and content generation',
      features: ['Text Classification & Sentiment Analysis', 'Named Entity Recognition (NER)', 'Language Translation & Localization', 'Content Generation & Summarization', 'Question Answering Systems', 'Document Intelligence']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics & Forecasting',
      description: 'AI-powered forecasting and predictive modeling for business intelligence',
      features: ['Time Series Forecasting', 'Demand Prediction', 'Risk Assessment & Modeling', 'Customer Behavior Analysis', 'Market Trend Analysis', 'Financial Modeling']
    },
    {
      icon: Shield,
      title: 'AI Security & Fraud Detection',
      description: 'Intelligent security solutions using AI for threat detection and prevention',
      features: ['Anomaly Detection', 'Fraud Prevention Systems', 'Cybersecurity AI', 'Behavioral Analysis', 'Threat Intelligence', 'Compliance Monitoring']
    }
  ];

  const aiTechnologies = [
    {
      category: 'Machine Learning Frameworks',
      technologies: [
        { name: 'TensorFlow', icon: Brain, description: 'Open-source ML framework by Google' },
        { name: 'PyTorch', icon: Brain, description: 'Facebook\'s deep learning framework' },
        { name: 'Scikit-learn', icon: Brain, description: 'Python ML library for data mining' },
        { name: 'Keras', icon: Brain, description: 'High-level neural networks API' },
        { name: 'XGBoost', icon: Brain, description: 'Gradient boosting framework' },
        { name: 'LightGBM', icon: Brain, description: 'Microsoft\'s gradient boosting framework' }
      ]
    },
    {
      category: 'Natural Language Processing',
      technologies: [
        { name: 'BERT', icon: MessageSquare, description: 'Google\'s bidirectional transformer' },
        { name: 'GPT Models', icon: MessageSquare, description: 'OpenAI\'s language models' },
        { name: 'SpaCy', icon: MessageSquare, description: 'Industrial-strength NLP library' },
        { name: 'NLTK', icon: MessageSquare, description: 'Natural Language Toolkit' },
        { name: 'Transformers', icon: MessageSquare, description: 'Hugging Face NLP library' },
        { name: 'Word2Vec', icon: MessageSquare, description: 'Word embedding models' }
      ]
    },
    {
      category: 'Computer Vision',
      technologies: [
        { name: 'OpenCV', icon: Eye, description: 'Computer vision library' },
        { name: 'YOLO', icon: Eye, description: 'Real-time object detection' },
        { name: 'ResNet', icon: Eye, description: 'Deep residual learning' },
        { name: 'VGG', icon: Eye, description: 'Visual geometry group networks' },
        { name: 'Inception', icon: Eye, description: 'Google\'s CNN architecture' },
        { name: 'Mask R-CNN', icon: Eye, description: 'Instance segmentation' }
      ]
    },
    {
      category: 'Big Data & Analytics',
      technologies: [
        { name: 'Apache Spark', icon: Database, description: 'Unified analytics engine' },
        { name: 'Hadoop', icon: Database, description: 'Distributed processing framework' },
        { name: 'Kafka', icon: Database, description: 'Real-time streaming platform' },
        { name: 'Elasticsearch', icon: Database, description: 'Search and analytics engine' },
        { name: 'MongoDB', icon: Database, description: 'NoSQL document database' },
        { name: 'Redis', icon: Database, description: 'In-memory data structure store' }
      ]
    },
    {
      category: 'Cloud AI Platforms',
      technologies: [
        { name: 'AWS SageMaker', icon: Cloud, description: 'Amazon\'s ML platform' },
        { name: 'Azure ML', icon: Cloud, description: 'Microsoft\'s ML service' },
        { name: 'Google AI Platform', icon: Cloud, description: 'Google Cloud ML' },
        { name: 'IBM Watson', icon: Cloud, description: 'IBM\'s AI platform' },
        { name: 'Databricks', icon: Cloud, description: 'Unified analytics platform' },
        { name: 'Snowflake', icon: Cloud, description: 'Cloud data platform' }
      ]
    },
    {
      category: 'AI Development Tools',
      technologies: [
        { name: 'Jupyter Notebooks', icon: Code, description: 'Interactive computing environment' },
        { name: 'MLflow', icon: Code, description: 'ML lifecycle management' },
        { name: 'Kubeflow', icon: Code, description: 'ML toolkit for Kubernetes' },
        { name: 'DVC', icon: Code, description: 'Data version control' },
        { name: 'Weights & Biases', icon: Code, description: 'ML experiment tracking' },
        { name: 'MLOps Tools', icon: Code, description: 'ML operations automation' }
      ]
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and streamline operations for maximum productivity.',
      metrics: ['60% reduction in manual tasks', '24/7 automated processing', 'Real-time decision making']
    },
    {
      icon: Brain,
      title: 'Data-Driven Insights',
      description: 'Leverage AI to extract meaningful insights from your business data.',
      metrics: ['95% accuracy in predictions', 'Real-time analytics', 'Advanced pattern recognition']
    },
    {
      icon: Shield,
      title: 'Scalable Solutions',
      description: 'AI solutions that grow with your business and adapt to changing needs.',
      metrics: ['Cloud-native architecture', 'Auto-scaling capabilities', 'Multi-tenant support']
    },
    {
      icon: Award,
      title: 'Competitive Advantage',
      description: 'Stay ahead of the competition with cutting-edge AI technologies.',
      metrics: ['First-mover advantage', 'Innovation leadership', 'Market differentiation']
    },
    {
      icon: DollarSign,
      title: 'Cost Optimization',
      description: 'Reduce operational costs through intelligent automation and optimization.',
      metrics: ['40% cost reduction', 'ROI improvement', 'Resource optimization']
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'AI solutions that work across multiple languages and regions.',
      metrics: ['Multi-language support', 'Global deployment', 'Cultural adaptation']
    }
  ];

  const caseStudies = [
    {
      title: 'E-commerce AI Recommendation Engine',
      company: 'RetailTech Solutions',
      challenge: 'Low conversion rates and poor product recommendations affecting sales',
      solution: 'Implemented advanced ML recommendation system with real-time user behavior analysis',
      results: ['45% increase in conversion rates', '60% improvement in average order value', 'Reduced cart abandonment by 35%', 'Personalized product suggestions'],
      industry: 'E-commerce',
      technologies: ['TensorFlow', 'Apache Spark', 'Redis', 'Python']
    },
    {
      title: 'Healthcare Diagnostic AI System',
      company: 'MedTech Innovations',
      challenge: 'Manual medical image analysis causing delays and inconsistencies',
      solution: 'Developed computer vision AI system for automated medical image analysis',
      results: ['90% accuracy in disease detection', '80% reduction in analysis time', 'Improved diagnostic consistency', 'Enhanced patient outcomes'],
      industry: 'Healthcare',
      technologies: ['PyTorch', 'OpenCV', 'ResNet', 'Medical Imaging APIs']
    },
    {
      title: 'Financial Fraud Detection Platform',
      company: 'SecureBank Corp',
      challenge: 'Increasing fraud attempts and manual detection inefficiencies',
      solution: 'Built real-time AI fraud detection system with behavioral analysis',
      results: ['95% fraud detection accuracy', 'Real-time transaction monitoring', 'Reduced false positives by 70%', 'Enhanced security compliance'],
      industry: 'Fintech',
      technologies: ['Scikit-learn', 'Apache Kafka', 'Elasticsearch', 'Anomaly Detection']
    },
    {
      title: 'Manufacturing Quality Control AI',
      company: 'SmartManufacturing Inc',
      challenge: 'Manual quality inspection causing production delays and defects',
      solution: 'Implemented computer vision AI for automated quality control',
      results: ['99.5% defect detection rate', '50% reduction in inspection time', 'Zero defect escapes', 'Improved production efficiency'],
      industry: 'Manufacturing',
      technologies: ['YOLO', 'OpenCV', 'TensorFlow', 'IoT Integration']
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'CTO, TechFlow Solutions',
      content: 'RemoteSeat\'s AI services transformed our customer support operations completely. Their advanced NLP chatbot handles 85% of inquiries automatically with 95% customer satisfaction. The implementation was seamless and the ROI was immediate.',
      rating: 5,
      company: 'TechFlow Solutions',
      industry: 'SaaS Platform',
      project: 'AI-Powered Customer Support'
    },
    {
      name: 'Michael Chen',
      title: 'CEO, DataInsight Corp',
      content: 'The machine learning solutions provided by RemoteSeat delivered actionable insights that increased our revenue by 40%. Their predictive analytics models helped us identify market trends before competitors, giving us a significant competitive advantage.',
      rating: 5,
      company: 'DataInsight Corp',
      industry: 'Data Analytics',
      project: 'Predictive Analytics Platform'
    },
    {
      name: 'Emma Rodriguez',
      title: 'Operations Director, InnovateCorp',
      content: 'Their process automation solutions saved us 200+ hours per month and reduced operational costs by 35%. The AI-powered workflow optimization was game-changing for our business efficiency.',
      rating: 5,
      company: 'InnovateCorp',
      industry: 'Manufacturing',
      project: 'Intelligent Process Automation'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and identify AI opportunities.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive AI strategy tailored to your goals.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Build and deploy AI solutions with ongoing support.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously improve and optimize AI performance.'
    }
  ];

  const otherServices = [
    {
      icon: Building2,
      title: 'Construction Management',
      description: 'Expert virtual construction managers for seamless project oversight',
      path: '/services/construction-management'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered design solutions that convert',
      path: '/services/ui-ux-design'
    },
    {
      icon: Heart,
      title: 'Healthcare Staffing',
      description: 'Qualified healthcare professionals for virtual care',
      path: '/services/healthcare-staffing'
    },
    {
      icon: Megaphone,
      title: 'Marketing & Branding',
      description: 'Creative marketing solutions that drive growth',
      path: '/services/marketing-branding'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored services to meet your unique business needs',
      path: '/services/custom-solutions'
    }
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
            <div className="flex justify-center mb-6">
              <Bot className="h-16 w-16 text-blue-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Agentic <span className="text-blue-500">AI Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Intelligent automation solutions that transform your business operations and drive growth through cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our AI Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive AI solutions designed to automate, optimize, and transform your business operations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
              >
                <div className="flex justify-center mb-4">
                  <service.icon className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our AI Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven expertise to deliver AI solutions that drive real business value.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A systematic approach to implementing AI solutions that deliver measurable results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
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

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Businesses trust us to deliver AI solutions that drive real results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.title}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Explore Our Other Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive range of remote workforce solutions.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link
                  to={service.path}
                  className="block p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join forward-thinking businesses that are already leveraging AI to transform their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServices; 