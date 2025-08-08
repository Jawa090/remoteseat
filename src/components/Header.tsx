import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  ChevronDown,
  Building2,
  Calculator,
  Code,
  Palette,
  Heart,
  Bot,
  Megaphone,
  Settings,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { 
      name: 'Construction Management', 
      path: '/services/construction-management',
      icon: Building2,
      description: 'Expert virtual construction managers',
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Hire Estimator', 
      path: '/services/hire-estimator',
      icon: Calculator,
      description: 'Professional cost estimation services',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Web Development', 
      path: '/services/web-development',
      icon: Code,
      description: 'Modern web applications & websites',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'UI/UX Design', 
      path: '/services/ui-ux-design',
      icon: Palette,
      description: 'Beautiful, user-centered design',
      color: 'from-pink-500 to-purple-500'
    },
    { 
      name: 'Healthcare Staffing', 
      path: '/services/healthcare-staffing',
      icon: Heart,
      description: 'Qualified healthcare professionals',
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Services', 
      path: '/services/ai-services',
      icon: Bot,
      description: 'Intelligent automation solutions',
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'Marketing & Branding', 
      path: '/services/marketing-branding',
      icon: Megaphone,
      description: 'Creative marketing solutions',
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Custom Solutions', 
      path: '/services/custom-solutions',
      icon: Settings,
      description: 'Tailored business solutions',
      color: 'from-purple-500 to-pink-500'
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-1">
            {/* Rlogo.png Image */}
            <img src="/Rlogo.png" alt="RemoteSeat Logo" className="h-8 w-auto ml-2" />
            
            {/* Enhanced Logo Text */}
            <div className="flex items-center">
              <span className="text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight drop-shadow-sm">
                REMOTE
              </span>
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight drop-shadow-sm ml-1">
                SEAT
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            
            <div
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[600px] bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="group p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-200"
                          >
                            <div className="flex items-center mb-2">
                              <div className={`w-8 h-8 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-2`}>
                                <service.icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-sm">
                                  {service.name}
                                </h4>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {service.description}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center text-blue-600 dark:text-blue-400 text-xs font-medium group-hover:translate-x-1 transition-transform">
                              Learn More
                              <ArrowRight className="ml-1 w-3 h-3" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* View All Services */}
                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <Link
                          to="/services"
                          className="flex items-center justify-center w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          <span>View All Services</span>
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/about'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/portfolio'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/blog'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                location.pathname === '/contact'
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Contact
            </Link>
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started
            </Link>
          </nav>

          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services Section */}
              <div className="space-y-3">
                <span className="block text-gray-500 dark:text-gray-400 text-sm font-medium">Services</span>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="flex items-center pl-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className={`w-6 h-6 bg-gradient-to-r ${service.color} rounded flex items-center justify-center mr-3`}>
                      <service.icon className="w-3 h-3 text-white" />
                    </div>
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <Link
                to="/about"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/blog"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;