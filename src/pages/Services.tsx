import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Calculator, Code, Palette, Heart, Bot, Megaphone, Settings } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: 'Construction Management',
      description: 'Expert virtual construction managers to oversee your projects from initial design review to completion. Streamline operations, reduce costs, and ensure quality delivery.',
      path: '/services/construction-management',
      color: 'from-orange-500 to-red-500',
      features: ['Project Planning', 'Quality Control', 'Risk Management', 'Timeline Optimization']
    },
    {
      icon: Calculator,
      title: 'Hire Estimator',
      description: 'Accurate construction cost estimation services with detailed breakdowns. Our certified estimators ensure your projects stay on budget from start to finish.',
      path: '/services/hire-estimator',
      color: 'from-green-500 to-teal-500',
      features: ['Cost Analysis', 'Material Estimation', 'Labor Calculations', 'Bid Preparation']
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack web development services from concept to deployment. Modern, scalable solutions built with the latest technologies and best practices.',
      path: '/services/web-development',
      color: 'from-blue-500 to-indigo-500',
      features: ['Frontend Development', 'Backend Systems', 'Database Design', 'API Integration']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that combine aesthetics with functionality. Create engaging experiences that convert visitors into customers.',
      path: '/services/ui-ux-design',
      color: 'from-pink-500 to-purple-500',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
    },
    {
      icon: Heart,
      title: 'Healthcare Virtual Staffing',
      description: 'Qualified healthcare professionals for telemedicine, administrative support, and patient care coordination. Expand your healthcare services virtually.',
      path: '/services/healthcare-staffing',
      color: 'from-red-500 to-pink-500',
      features: ['Telemedicine Support', 'Medical Administration', 'Patient Coordination', 'Compliance Management']
    },
    {
      icon: Bot,
      title: 'Agentic AI Services',
      description: 'Intelligent automation solutions powered by AI agents. Streamline workflows, enhance decision-making, and unlock new possibilities for your business.',
      path: '/services/ai-services',
      color: 'from-cyan-500 to-blue-500',
      features: ['Process Automation', 'AI Integration', 'Machine Learning', 'Data Analytics']
    },
    {
      icon: Megaphone,
      title: 'Marketing & Branding',
      description: 'Creative marketing solutions that drive growth and build brand recognition. From strategy to execution, we help you reach your target audience effectively.',
      path: '/services/marketing-branding',
      color: 'from-yellow-500 to-orange-500',
      features: ['Brand Strategy', 'Digital Marketing', 'Content Creation', 'Campaign Management']
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored services designed to meet your unique business requirements. Whatever your challenge, we have the expertise to deliver custom solutions.',
      path: '/services/custom-solutions',
      color: 'from-purple-500 to-indigo-500',
      features: ['Consultation', 'Custom Development', 'Integration Services', 'Ongoing Support']
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive remote staffing solutions across multiple industries. 
              Scale your business with expert professionals who deliver results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Link to={service.path} className="block">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 group-hover:border-blue-200 dark:group-hover:border-blue-700">
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200 flex-shrink-0`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-2 gap-2 mb-6">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                          <span className="font-medium">Learn more</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
              Don't See What You Need?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We offer custom solutions tailored to your specific business requirements. 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Get Custom Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services/custom-solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Custom Solutions
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;