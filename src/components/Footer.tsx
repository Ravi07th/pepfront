import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  Code, 
  GraduationCap, 
  BookOpen, 
  FileText, 
  ClipboardList, 
  BookMarked, 
  FileSpreadsheet,
  Mail,
  ArrowUp,
  ExternalLink,
  ArrowRight,
  Users,
  Target,
  Trophy,
  Star,
  Heart,
  Zap,
  Shield,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

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

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log('Newsletter signup:', email);
    setEmail('');
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
      { name: 'Mock Tests', href: '/mock-test', icon: ClipboardList },
      { name: 'Exam Notes', href: '/student-notes', icon: BookMarked },
      { name: 'Exam Patterns', href: '/exam-patterns', icon: FileSpreadsheet },
    ],
    support: [
      { name: 'Contact Us', href: '/contact', icon: Mail },
      { name: 'Terms & Conditions', href: '/terms', icon: ExternalLink },
      { name: 'Privacy Policy', href: '/privacy', icon: ExternalLink }
      // { name: 'Help Center', href: '/help', icon: ExternalLink },
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: ExternalLink },
    { name: 'Twitter', href: '#', icon: ExternalLink },
    { name: 'YouTube', href: '#', icon: ExternalLink },
    { name: 'Instagram', href: '#', icon: ExternalLink },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        
        {/* Top Section - Brand & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/mylogo.png" 
                alt="prepCampus Logo" 
                className="w-20 h-12 rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold text-yellow-500">PrepCampus</h3>
                <p className="text-gray-400 text-sm">Your Learning Partner</p>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed max-w-md">
              Your ultimate platform for coding practice, interview preparation, and academic success.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-4 text-gray-400 text-xs">
              <div className="flex items-center space-x-1">
                <Target className="h-3 w-3 text-amber-400" />
                <span>5000+ Questions</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3 w-3 text-blue-400" />
                <span>50K+ Students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="h-3 w-3 text-yellow-400" />
                <span>95% Success</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-2">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Stay Updated</h3>
              <p className="text-gray-400 text-sm">Get latest updates on new features and exam patterns.</p>
            </div>
            
            <form onSubmit={handleNewsletterSignup} className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm"
                >
                  Subscribe
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </form>

            {/* Social Links */}
            {/* <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-amber-400 transition-all duration-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div> */}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-2 border-t border-gray-800">
          
          {/* Platform Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center text-sm">
              <Code className="w-4 h-4 mr-2 text-amber-400" />
              Platform
            </h4>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200 group text-sm"
                  >
                    <link.icon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center text-sm">
              <BookOpen className="w-4 h-4 mr-2 text-amber-400" />
              Resources
            </h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200 group text-sm"
                  >
                    <link.icon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center text-sm">
              <Mail className="w-4 h-4 mr-2 text-amber-400" />
              Support
            </h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="flex items-center text-gray-400 hover:text-amber-400 transition-colors duration-200 group text-sm"
                  >
                    <link.icon className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            
            {/* Copyright & Info */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs">
                &copy; {currentYear} prepCampus. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Made with <Heart className="inline h-3 w-3 text-red-500" /> for students worldwide
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center space-x-4 text-gray-400 text-xs">
              <div className="flex items-center space-x-1">
                <Shield className="h-3 w-3 text-green-400" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Globe className="h-3 w-3 text-blue-400" />
                <span>Global</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3 text-yellow-400" />
                <span>24/7</span>
              </div>
            </div>

            {/* Back to Top Button */}
            {showBackToTop && (
              <button
                onClick={scrollToTop}
                className="flex items-center space-x-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-3 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-xs"
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-3 h-3" />
                <span className="font-medium">Top</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
