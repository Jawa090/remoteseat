import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              {/* Stylized Blue R Logo */}
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg transform rotate-12 shadow-lg"></div>
                <div className="absolute inset-1 bg-white rounded-md transform rotate-12 flex items-center justify-center shadow-inner">
                  <span className="text-blue-600 font-bold text-lg transform -rotate-12">R</span>
                </div>
              </div>
              
              {/* Enhanced Logo Text */}
              <div className="flex items-center">
                <span className="text-2xl font-extrabold text-white tracking-tight drop-shadow-sm">
                  REMOTE
                </span>
                <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tight drop-shadow-sm ml-1">
                  SEAT
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              On-Demand Talent & Intelligent Services for Tomorrow's Business. 
              Building the future of remote work with premium staffing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/construction-management" className="text-gray-400 hover:text-white transition-colors">Construction Management</Link></li>
              <li><Link to="/services/hire-estimator" className="text-gray-400 hover:text-white transition-colors">Hire Estimator</Link></li>
              <li><Link to="/services/web-development" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/services/ui-ux-design" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
              <li><Link to="/services/healthcare-staffing" className="text-gray-400 hover:text-white transition-colors">Healthcare Staffing</Link></li>
              <li><Link to="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">hello@remoteseat.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Global Remote First</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 RemoteSeat. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with ❤️ for the future of work
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;