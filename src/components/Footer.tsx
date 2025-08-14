import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Code, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  TestTube, 
  BookMarked, 
  FileSpreadsheet,
  Mail,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  // Footer navigation data
  const footerLinks = {
    platform: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'Coding Practice', href: '/coding', icon: Code },
      { name: 'Exam Prep', href: '/exam-prep', icon: GraduationCap },
      { name: 'SkillUp', href: '/skillup', icon: BookOpen },
    ],
    resources: [
      { name: 'Student Notes', href: '/student-notes', icon: FileText },
      { name: 'Mock Tests', href: '/mock-test', icon: TestTube },
      { name: 'Exam Notes', href: '/student-notes', icon: BookMarked },
      { name: 'Exam Patterns', href: '/exam-patterns', icon: FileSpreadsheet },
    ],
    support: [
      { name: 'Contact Us', href: '/contact', icon: Mail },
      { name: 'Terms & Conditions', href: '/terms', icon: ExternalLink },
      { name: 'Privacy Policy', href: '/privacy', icon: ExternalLink },
      { name: 'Help Center', href: '/help', icon: ExternalLink },
    ]
  };

  return (
    <footer className="bg-[#0b1220] border-t border-slate-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-0">
                <span className="text-xl sm:text-2xl font-bold text-purple-500">Campus</span>
                <span className="text-xl sm:text-2xl font-bold text-amber-400">Prep</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 hidden sm:block">
              Your ultimate platform for coding practice, interview preparation, and academic success. 
              Empowering students worldwide with comprehensive learning resources.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 sm:hidden">
              Your ultimate platform for coding practice and interview preparation.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">CP</span>
              </div>
              <div>
                <p className="text-slate-300 text-sm font-medium">prepCampus</p>
                <p className="text-slate-500 text-xs">Your Learning Partner</p>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-3 sm:mb-4 flex items-center">
              <Code className="w-4 h-4 mr-2 text-amber-400" />
              Platform
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-slate-400 hover:text-amber-400 transition-colors duration-200 group"
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-3 sm:mb-4 flex items-center">
              <BookOpen className="w-4 h-4 mr-2 text-amber-400" />
              Resources
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-slate-400 hover:text-amber-400 transition-colors duration-200 group"
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-slate-200 font-semibold mb-3 sm:mb-4 flex items-center">
              <Mail className="w-4 h-4 mr-2 text-amber-400" />
              Support
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-slate-400 hover:text-amber-400 transition-colors duration-200 group"
                  >
                    <link.icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <div className="text-slate-500 text-sm text-center sm:text-left">
              <p>&copy; {currentYear} prepCampus. All rights reserved.</p>
              <p className="mt-1 hidden sm:block">Empowering students worldwide with quality education resources.</p>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 sm:space-x-2 bg-gradient-to-r from-purple-600 to-amber-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-purple-700 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">Back to Top</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
