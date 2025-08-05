import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  Palette, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  Globe,
  Zap,
  Building2,
  Bot,
  Heart,
  Settings
} from 'lucide-react';

const MarketingBranding: React.FC = () => {
  const services = [
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence',
      features: ['SEO optimization', 'Social media management', 'Content marketing']
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand identity design including logos, colors, and guidelines',
      features: ['Logo design', 'Brand guidelines', 'Visual identity']
    },
    {
      icon: TrendingUp,
      title: 'Growth Marketing',
      description: 'Data-driven marketing strategies to accelerate business growth',
      features: ['Conversion optimization', 'A/B testing', 'Analytics tracking']
    },
    {
      icon: Target,
      title: 'Marketing Strategy',
      description: 'Strategic marketing planning and campaign development',
      features: ['Market research', 'Campaign planning', 'Performance analysis']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Increased Visibility',
      description: 'Boost your brand awareness and reach your target audience effectively.'
    },
    {
      icon: TrendingUp,
      title: 'Higher Conversions',
      description: 'Optimize your marketing funnel to convert more prospects into customers.'
    },
    {
      icon: Award,
      title: 'Brand Recognition',
      description: 'Build a strong, memorable brand that resonates with your audience.'
    },
    {
      icon: Zap,
      title: 'Measurable Results',
      description: 'Track and measure the success of your marketing campaigns with detailed analytics.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'Marketing Director, TechFlow',
      content: 'RemoteSeat\'s marketing services transformed our brand presence. Our social media engagement increased by 300% in just 3 months.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'CEO, InnovateCorp',
      content: 'Their brand identity work was exceptional. The new logo and guidelines perfectly captured our company\'s vision and values.',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      title: 'Founder, StartupXYZ',
      content: 'The growth marketing strategies from RemoteSeat helped us scale from 0 to 10,000 customers in under a year.',
      rating: 5
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We research your market, competitors, and target audience to understand your unique position.'
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'Develop a comprehensive marketing and branding strategy tailored to your goals.'
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Implement campaigns and create brand assets with ongoing optimization.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously analyze performance and refine strategies for maximum impact.'
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
              <Megaphone className="h-16 w-16 text-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Marketing & <span className="text-yellow-500">Branding</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Creative marketing solutions and strategic branding that drive growth and build lasting brand recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="inline-flex items-center px-6 py-3 border-2 border-yellow-600 text-yellow-600 dark:text-yellow-400 font-semibold rounded-lg hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors">
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
              Our Marketing & Branding Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive marketing and branding solutions designed to elevate your brand and drive business growth.
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
                  <service.icon className="h-12 w-12 text-yellow-500" />
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
              Why Choose Our Marketing & Branding Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We combine creativity with data-driven strategies to deliver marketing solutions that generate real results.
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
                className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl"
              >
                <div className="flex justify-center mb-4">
                  <benefit.icon className="h-12 w-12 text-yellow-500" />
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
              Our Marketing Process
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A strategic approach to creating impactful marketing campaigns and building strong brands.
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
                <div className="bg-yellow-500 text-white rounded-full w-16 h-16 flex items-center justify-center text-xl font-bold mx-auto mb-4">
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
              Businesses trust us to deliver marketing solutions that drive real growth.
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Join businesses that trust us to deliver marketing solutions that drive real growth and brand recognition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-600 transition-colors"
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

export default MarketingBranding; 