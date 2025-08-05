import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Palette, 
  CheckCircle, 
  Users, 
  Clock, 
  Shield, 
  ArrowRight, 
  Star,
  Target,
  BarChart3,
  Calendar,
  DollarSign,
  Award,
  Globe,
  Zap,
  FileText,
  Eye,
  MessageSquare,
  TrendingUp,
  Settings,
  MapPin,
  Smartphone,
  Monitor,
  Tablet,
  MousePointer,
  Layers,
  PenTool,
  Grid,
  Palette as PaletteIcon,
  Type,
  Image,
  Play,
  ChevronRight,
  ChevronLeft,
  Briefcase,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Building2,
  Bot,
  Heart,
  Megaphone
} from 'lucide-react';

const UIUXDesign: React.FC = () => {
  const services = [
    {
      icon: MousePointer,
      title: 'User Interface Design',
      description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement',
      features: ['Wireframing & Prototyping', 'Visual Design Systems', 'Responsive Design', 'Interactive Elements']
    },
    {
      icon: Users,
      title: 'User Experience Design',
      description: 'User-centered design solutions that optimize user journeys and improve conversion rates',
      features: ['User Research', 'Information Architecture', 'Usability Testing', 'User Journey Mapping']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Design',
      description: 'Native and cross-platform mobile app designs optimized for performance and user engagement',
      features: ['iOS & Android Design', 'Mobile-First Approach', 'Touch Interactions', 'App Store Optimization']
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Modern, responsive web designs that create compelling digital experiences',
      features: ['Responsive Layouts', 'Performance Optimization', 'SEO-Friendly Design', 'Accessibility Compliance']
    },
    {
      icon: Layers,
      title: 'Design Systems',
      description: 'Comprehensive design systems that ensure consistency and scalability across platforms',
      features: ['Component Libraries', 'Style Guides', 'Design Tokens', 'Documentation']
    },
    {
      icon: Eye,
      title: 'Usability Testing',
      description: 'Comprehensive testing and optimization to ensure exceptional user experiences',
      features: ['User Testing', 'A/B Testing', 'Analytics Integration', 'Performance Monitoring']
    }
  ];

  const designProcess = [
    {
      icon: Target,
      title: 'Research & Discovery',
      description: 'Deep understanding of user needs, business goals, and market requirements',
      steps: ['User Research', 'Competitive Analysis', 'Business Requirements', 'Technical Constraints']
    },
    {
      icon: PenTool,
      title: 'Strategy & Planning',
      description: 'Strategic design planning with information architecture and user journey mapping',
      steps: ['Information Architecture', 'User Personas', 'Journey Mapping', 'Content Strategy']
    },
    {
      icon: Grid,
      title: 'Design & Prototyping',
      description: 'Creating wireframes, prototypes, and visual designs with iterative refinement',
      steps: ['Wireframing', 'Prototyping', 'Visual Design', 'Interactive Elements']
    },
    {
      icon: Eye,
      title: 'Testing & Validation',
      description: 'Comprehensive testing and validation to ensure optimal user experience',
      steps: ['Usability Testing', 'User Feedback', 'Performance Testing', 'Accessibility Audit']
    },
    {
      icon: Zap,
      title: 'Implementation & Launch',
      description: 'Seamless handoff to development teams with ongoing support and optimization',
      steps: ['Design Handoff', 'Development Support', 'Quality Assurance', 'Launch Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Optimization & Growth',
      description: 'Continuous improvement based on user feedback and performance analytics',
      steps: ['Analytics Review', 'User Feedback', 'Performance Optimization', 'Feature Iteration']
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Enhanced User Experience',
      description: 'Intuitive, user-friendly designs that improve engagement and satisfaction.',
      metrics: ['40% increase in user engagement', 'Reduced bounce rates', 'Improved conversion rates']
    },
    {
      icon: DollarSign,
      title: 'Increased Conversions',
      description: 'Optimized user journeys that drive higher conversion rates and revenue growth.',
      metrics: ['25% improvement in conversions', 'Enhanced user retention', 'Increased customer lifetime value']
    },
    {
      icon: Award,
      title: 'Brand Consistency',
      description: 'Cohesive design systems that strengthen brand identity and recognition.',
      metrics: ['Unified brand experience', 'Consistent visual language', 'Enhanced brand trust']
    },
    {
      icon: Globe,
      title: 'Accessibility & Inclusion',
      description: 'Inclusive design that ensures accessibility for all users across devices.',
      metrics: ['WCAG compliance', 'Cross-device compatibility', 'Universal design principles']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast, efficient designs that load quickly and perform seamlessly.',
      metrics: ['Improved page speed', 'Reduced loading times', 'Enhanced mobile performance']
    },
    {
      icon: Shield,
      title: 'Future-Proof Solutions',
      description: 'Scalable design systems that adapt to evolving business needs and technologies.',
      metrics: ['Scalable design systems', 'Technology adaptability', 'Long-term maintainability']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Product Manager, TechFlow',
      content: 'RemoteSeat\'s UI/UX design team transformed our platform completely. The new design increased our user engagement by 300% and improved our conversion rates by 45%. The attention to detail and user-centered approach exceeded our expectations.',
      rating: 5,
      company: 'TechFlow',
      industry: 'SaaS Platform',
      project: 'Enterprise Dashboard Redesign'
    },
    {
      name: 'Michael Chen',
      title: 'CEO, StartupXYZ',
      content: 'The mobile app design they created for us was exceptional. The user experience is intuitive, the design is beautiful, and our app store ratings improved dramatically. They truly understand mobile-first design principles.',
      rating: 5,
      company: 'StartupXYZ',
      industry: 'Mobile App',
      project: 'iOS & Android App Design'
    },
    {
      name: 'Emma Rodriguez',
      title: 'Marketing Director, E-commerce Corp',
      content: 'Their e-commerce redesign increased our sales by 60% and reduced cart abandonment by 35%. The user journey optimization and checkout process improvements were game-changers for our business.',
      rating: 5,
      company: 'E-commerce Corp',
      industry: 'E-commerce',
      project: 'E-commerce Platform Redesign'
    }
  ];

  const caseStudies = [
    {
      title: 'Enterprise SaaS Dashboard',
      company: 'TechFlow Solutions',
      challenge: 'Complex enterprise dashboard with poor usability and low user adoption rates',
      solution: 'Complete UX redesign with user research, information architecture, and intuitive interface design',
      results: ['300% increase in user engagement', '45% improvement in task completion', 'Reduced training time by 60%', 'Enhanced user satisfaction scores'],
      industry: 'SaaS'
    },
    {
      title: 'Mobile Banking App',
      company: 'Digital Bank',
      challenge: 'Outdated mobile banking app with poor user experience and security concerns',
      solution: 'Modern mobile-first design with enhanced security features and intuitive user flows',
      results: ['80% increase in mobile transactions', '50% reduction in support tickets', 'Improved app store ratings', 'Enhanced security features'],
      industry: 'Fintech'
    },
    {
      title: 'E-commerce Platform Redesign',
      company: 'RetailCorp',
      challenge: 'Poor conversion rates and high cart abandonment on e-commerce platform',
      solution: 'Comprehensive UX optimization with streamlined checkout process and enhanced product discovery',
      results: ['60% increase in sales', '35% reduction in cart abandonment', 'Improved mobile conversion', 'Enhanced product discovery'],
      industry: 'E-commerce'
    }
  ];

  const designTools = [
    { name: 'Figma', icon: Palette, description: 'Collaborative design and prototyping' },
    { name: 'Sketch', icon: PenTool, description: 'Professional design and vector graphics' },
    { name: 'Adobe XD', icon: Layers, description: 'UI/UX design and prototyping' },
    { name: 'InVision', icon: Eye, description: 'Prototyping and collaboration' },
    { name: 'Principle', icon: Play, description: 'Advanced animations and interactions' },
    { name: 'Framer', icon: Zap, description: 'Interactive prototyping and development' }
  ];

  const faqs = [
    {
      question: 'What is the difference between UI and UX design?',
      answer: 'UI (User Interface) design focuses on the visual elements and interactive components of a product, while UX (User Experience) design encompasses the entire user journey, including research, usability, and overall user satisfaction. We provide both services to create comprehensive design solutions.'
    },
    {
      question: 'How do you ensure designs are accessible and inclusive?',
      answer: 'We follow WCAG guidelines and universal design principles to ensure our designs are accessible to all users. This includes proper color contrast, keyboard navigation, screen reader compatibility, and responsive design for various devices and abilities.'
    },
    {
      question: 'What is your design process and timeline?',
      answer: 'Our design process typically takes 4-8 weeks depending on project complexity. We follow a user-centered approach: Research & Discovery (1-2 weeks), Strategy & Planning (1 week), Design & Prototyping (2-3 weeks), Testing & Validation (1 week), and Implementation support.'
    },
    {
      question: 'Do you provide ongoing design support after launch?',
      answer: 'Yes, we offer ongoing design support including analytics review, user feedback integration, performance optimization, and feature iteration. We believe in continuous improvement and long-term partnerships with our clients.'
    },
    {
      question: 'How do you handle responsive design for multiple devices?',
      answer: 'We use a mobile-first approach and create responsive designs that work seamlessly across all devices. Our designs are tested on various screen sizes and we ensure optimal performance and user experience on desktop, tablet, and mobile devices.'
    },
    {
      question: 'What design deliverables do you provide?',
      answer: 'We provide comprehensive deliverables including wireframes, high-fidelity mockups, interactive prototypes, design systems, style guides, and development-ready assets. We also provide documentation and handoff support to ensure smooth implementation.'
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
      icon: Bot,
      title: 'AI Services',
      description: 'Intelligent automation solutions for modern businesses',
      path: '/services/ai-services'
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
              <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Palette className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              UI/UX <span className="text-pink-500">Design</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Beautiful, user-centered design solutions that convert visitors into customers. 
              We create intuitive interfaces and seamless user experiences that drive engagement, 
              improve conversions, and build lasting brand connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-pink-500 text-pink-500 dark:text-pink-400 font-semibold rounded-lg hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors">
                View Portfolio
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Design Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From user research to final implementation, we provide end-to-end design solutions 
              that create exceptional user experiences and drive business results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <service.icon className="h-12 w-12 text-pink-500" />
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

      {/* Design Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Design Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A user-centered approach that ensures every design decision is backed by research and validation.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
              >
                <div className="flex justify-center mb-4">
                  <process.icon className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {process.description}
                </p>
                <ul className="space-y-2">
                  {process.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {step}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Design Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine creativity with data-driven insights to deliver designs that not only look great but also perform exceptionally.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-pink-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {benefit.description}
                </p>
                <ul className="space-y-1">
                  {benefit.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tools & Technologies
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We use industry-leading design tools and technologies to create exceptional user experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {designTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {tool.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real design projects that transformed user experiences and business outcomes.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                    <Palette className="w-5 h-5 text-white" />
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
                
                <div className="inline-flex items-center px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-xs font-medium">
                  {study.industry}
                </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Design professionals and businesses trust us to deliver exceptional user experiences.
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
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
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
                    <span className="inline-flex items-center px-2 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-200 rounded-full text-xs">
                      {testimonial.industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Get answers to common questions about our UI/UX design services.
            </p>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Join businesses that trust RemoteSeat for exceptional design solutions that drive engagement and conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors"
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

export default UIUXDesign;