import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building2, 
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
  HardHat,
  Truck,
  Wrench,
  Ruler,
  Calculator,
  Clipboard,
  AlertTriangle,
  Lightbulb,
  Rocket,
  Briefcase,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Palette,
  Bot,
  Heart,
  Megaphone
} from 'lucide-react';

const ConstructionManagement: React.FC = () => {
  const services = [
    {
      icon: HardHat,
      title: 'Project Planning & Scheduling',
      description: 'Comprehensive project planning with detailed scheduling, resource allocation, and timeline management',
      features: ['Critical Path Analysis', 'Resource Optimization', 'Risk Assessment', 'Milestone Tracking']
    },
    {
      icon: Calculator,
      title: 'Cost Management & Budgeting',
      description: 'Expert cost control and budget management to maximize project profitability',
      features: ['Budget Planning', 'Cost Tracking', 'Change Order Management', 'Financial Reporting']
    },
    {
      icon: Eye,
      title: 'Quality Control & Safety',
      description: 'Rigorous quality assurance and safety compliance monitoring throughout project lifecycle',
      features: ['Safety Audits', 'Quality Inspections', 'Compliance Monitoring', 'Documentation Management']
    },
    {
      icon: Users,
      title: 'Team Coordination',
      description: 'Seamless coordination between contractors, subcontractors, and stakeholders',
      features: ['Vendor Management', 'Communication Protocols', 'Progress Meetings', 'Issue Resolution']
    },
    {
      icon: FileText,
      title: 'Documentation & Reporting',
      description: 'Comprehensive project documentation and real-time reporting for stakeholders',
      features: ['Progress Reports', 'Photo Documentation', 'Change Orders', 'Final Documentation']
    },
    {
      icon: Settings,
      title: 'Technology Integration',
      description: 'Modern construction technology integration for enhanced project management',
      features: ['BIM Implementation', 'Project Management Software', 'Mobile Apps', 'Real-time Tracking']
    }
  ];

  const useCases = [
    {
      icon: Building2,
      title: 'Residential Construction',
      description: 'Single-family homes, multi-family developments, and residential complexes',
      examples: ['Custom Homes', 'Apartment Complexes', 'Townhouse Communities', 'Luxury Residences']
    },
    {
      icon: Briefcase,
      title: 'Commercial Development',
      description: 'Office buildings, retail centers, and commercial infrastructure projects',
      examples: ['Office Towers', 'Shopping Centers', 'Hotels', 'Restaurants']
    },
    {
      icon: Truck,
      title: 'Infrastructure Projects',
      description: 'Roads, bridges, utilities, and large-scale infrastructure development',
      examples: ['Highway Construction', 'Bridge Projects', 'Utility Installation', 'Public Works']
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Existing structure renovations and modernization projects',
      examples: ['Building Renovations', 'Interior Remodeling', 'Facility Upgrades', 'Historical Restoration']
    },
    {
      icon: Ruler,
      title: 'Industrial Construction',
      description: 'Manufacturing facilities, warehouses, and industrial complexes',
      examples: ['Manufacturing Plants', 'Distribution Centers', 'Processing Facilities', 'Industrial Parks']
    },
    {
      icon: Globe,
      title: 'Mixed-Use Developments',
      description: 'Complex projects combining residential, commercial, and recreational spaces',
      examples: ['Urban Centers', 'Campus Developments', 'Transit-Oriented Projects', 'Master-Planned Communities']
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Save 20-40% on project costs through efficient resource management and reduced overhead.',
      metrics: ['20-40% cost savings', 'Reduced overhead expenses', 'Optimized resource allocation']
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Accelerate project timelines with expert planning and streamlined coordination.',
      metrics: ['25% faster completion', 'Reduced delays', 'Improved scheduling']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Ensure superior project quality through rigorous oversight and compliance monitoring.',
      metrics: ['99% quality compliance', 'Reduced rework', 'Enhanced safety records']
    },
    {
      icon: Globe,
      title: 'Global Expertise',
      description: 'Access construction management expertise from around the world, 24/7.',
      metrics: ['24/7 availability', 'Multi-timezone support', 'International standards']
    },
    {
      icon: Zap,
      title: 'Technology Integration',
      description: 'Leverage cutting-edge construction technology for enhanced project management.',
      metrics: ['BIM implementation', 'Real-time tracking', 'Digital documentation']
    },
    {
      icon: Award,
      title: 'Risk Mitigation',
      description: 'Minimize project risks through proactive planning and expert oversight.',
      metrics: ['Reduced project risks', 'Better contingency planning', 'Improved stakeholder communication']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Project Assessment & Planning',
      description: 'Comprehensive analysis of project requirements, timeline, budget, and specific management needs',
      icon: Target,
      details: ['Scope definition', 'Timeline planning', 'Budget analysis', 'Risk assessment']
    },
    {
      step: '02',
      title: 'Manager Assignment & Onboarding',
      description: 'Match you with a certified construction manager with relevant industry experience and expertise',
      icon: Users,
      details: ['Expert matching', 'Certification verification', 'Experience alignment', 'Team introduction']
    },
    {
      step: '03',
      title: 'Implementation & Oversight',
      description: 'Your dedicated manager begins comprehensive oversight, coordination, and progress tracking',
      icon: Eye,
      details: ['Project monitoring', 'Team coordination', 'Progress tracking', 'Quality control']
    },
    {
      step: '04',
      title: 'Ongoing Support & Optimization',
      description: 'Continuous monitoring, reporting, and adjustments to ensure project success and efficiency',
      icon: Settings,
      details: ['Performance optimization', 'Regular reporting', 'Issue resolution', 'Success metrics']
    }
  ];

  const testimonials = [
    {
      name: 'David Thompson',
      title: 'Project Director, BuildPro Construction',
      content: 'RemoteSeat\'s construction managers saved our project timeline by 3 months and reduced costs by 35%. Their expertise in risk management and quality control is exceptional. The virtual approach didn\'t compromise quality at all.',
      rating: 5,
      company: 'BuildPro Construction',
      industry: 'Commercial Construction',
      project: 'Office Complex Development'
    },
    {
      name: 'Maria Rodriguez',
      title: 'CEO, Urban Developments Inc.',
      content: 'Working with RemoteSeat has been transformative. Their virtual construction managers bring big-project expertise to our smaller developments. We\'ve completed 5 projects with them, each under budget and ahead of schedule.',
      rating: 5,
      company: 'Urban Developments Inc.',
      industry: 'Residential Development',
      project: 'Multi-Family Complex'
    },
    {
      name: 'James Wilson',
      title: 'Operations Manager, Infrastructure Solutions',
      content: 'The technology integration and real-time reporting capabilities are game-changers. Our stakeholders have complete visibility into project progress, and the quality control processes are more thorough than traditional methods.',
      rating: 5,
      company: 'Infrastructure Solutions',
      industry: 'Infrastructure',
      project: 'Highway Extension Project'
    }
  ];

  const caseStudies = [
    {
      title: 'Commercial Office Complex',
      company: 'Metro Development Group',
      challenge: 'Complex 50,000 sq ft office complex with tight 18-month deadline and $15M budget',
      solution: 'Deployed senior construction manager with commercial development expertise and BIM implementation',
      results: ['Completed 2 months early', 'Saved $2.1M (14% under budget)', 'Zero safety incidents', '98% quality compliance'],
      industry: 'Commercial Construction'
    },
    {
      title: 'Residential Community Development',
      company: 'Sunrise Properties',
      challenge: '200-unit residential community with multiple phases and diverse stakeholder requirements',
      solution: 'Assigned dedicated project manager with residential expertise and advanced scheduling tools',
      results: ['All phases completed on time', '15% cost savings achieved', 'Enhanced community amenities', 'Improved buyer satisfaction'],
      industry: 'Residential Construction'
    },
    {
      title: 'Industrial Facility Renovation',
      company: 'Manufacturing Corp',
      challenge: 'Critical facility renovation requiring minimal production disruption and strict safety protocols',
      solution: 'Specialized manager with industrial renovation experience and safety-first approach',
      results: ['Zero production downtime', '100% safety compliance', '20% under budget', 'Enhanced facility efficiency'],
      industry: 'Industrial Construction'
    }
  ];

  const faqs = [
    {
      question: 'How do virtual construction managers ensure quality control without being on-site?',
      answer: 'Our managers use advanced technology including video conferencing, photo documentation, drone inspections, and real-time reporting. They coordinate with on-site quality control teams and implement comprehensive checklists and compliance monitoring systems.'
    },
    {
      question: 'What qualifications and certifications do your construction managers have?',
      answer: 'All our construction managers hold relevant degrees in construction management, civil engineering, or architecture. They are certified with PMP, CCM, or equivalent credentials and have 10+ years of industry experience across various project types.'
    },
    {
      question: 'Can virtual construction managers handle complex, large-scale projects?',
      answer: 'Absolutely. Our managers have experience with projects ranging from $1M to $100M+. They specialize in complex projects and use advanced project management tools to handle multiple stakeholders, tight timelines, and intricate coordination requirements.'
    },
    {
      question: 'How do you ensure effective communication with on-site teams?',
      answer: 'We establish clear communication protocols using multiple channels including video calls, project management software, mobile apps, and regular progress meetings. Our managers are available 24/7 for urgent issues and maintain detailed documentation.'
    },
    {
      question: 'What technology and tools do you use for remote construction management?',
      answer: 'We utilize cutting-edge technology including BIM software, project management platforms, mobile inspection apps, drone technology, and real-time reporting systems. This ensures comprehensive oversight and efficient project delivery.'
    },
    {
      question: 'How do you handle time zone differences and international projects?',
      answer: 'Our managers are strategically located across time zones to provide 24/7 coverage. We establish clear communication schedules and use technology to bridge time zone gaps, ensuring continuous project oversight regardless of location.'
    }
  ];

  const otherServices = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-centered design solutions that convert',
      path: '/services/ui-ux-design'
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
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                <Building2 className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Construction <span className="text-orange-500">Management</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
              Expert virtual construction managers providing comprehensive project oversight, cost control, and quality assurance. 
              From initial planning to final delivery, we ensure your construction projects are completed on time, within budget, and to the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-8 py-4 border-2 border-orange-500 text-orange-500 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-colors">
                View Case Studies
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
              Comprehensive Construction Management Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our expert construction managers provide end-to-end project oversight with advanced technology and proven methodologies.
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
                  <service.icon className="h-12 w-12 text-orange-500" />
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

      {/* Use Cases */}
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
              Project Types We Manage
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From residential developments to complex infrastructure projects, our construction managers have expertise across all project types.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-600"
              >
                <div className="flex justify-center mb-4">
                  <useCase.icon className="h-12 w-12 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 text-center">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
                  {useCase.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <li key={exampleIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Why Choose Our Construction Management?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We combine industry expertise with cutting-edge technology to deliver exceptional construction management results.
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
                  <benefit.icon className="h-12 w-12 text-orange-500" />
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

      {/* Process */}
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
              Our Construction Management Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach to ensuring your construction project success from start to finish.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-orange-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <div className="flex justify-center mb-4">
                  <step.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {step.description}
                </p>
                <ul className="space-y-1">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
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
              Real results from real construction projects managed by our expert team.
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
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mr-3">
                    <Building2 className="w-5 h-5 text-white" />
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
                
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-xs font-medium">
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
              Construction professionals trust us to deliver exceptional project management results.
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
                    <span className="inline-flex items-center px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 rounded-full text-xs">
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
              Get answers to common questions about our construction management services.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Construction Projects?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Join construction companies that trust RemoteSeat for expert project management and exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors"
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

export default ConstructionManagement;