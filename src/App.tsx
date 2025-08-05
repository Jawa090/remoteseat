import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Service Pages
import ConstructionManagement from './pages/service-pages/ConstructionManagement';
import HireEstimator from './pages/service-pages/HireEstimator';
import WebDevelopment from './pages/service-pages/WebDevelopment';
import UIUXDesign from './pages/service-pages/UIUXDesign';
import HealthcareStaffing from './pages/service-pages/HealthcareStaffing';
import AIServices from './pages/service-pages/AIServices';
import MarketingBranding from './pages/service-pages/MarketingBranding';
import CustomSolutions from './pages/service-pages/CustomSolutions';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/construction-management" element={<ConstructionManagement />} />
              <Route path="/services/hire-estimator" element={<HireEstimator />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
              <Route path="/services/healthcare-staffing" element={<HealthcareStaffing />} />
              <Route path="/services/ai-services" element={<AIServices />} />
              <Route path="/services/marketing-branding" element={<MarketingBranding />} />
              <Route path="/services/custom-solutions" element={<CustomSolutions />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;