import React, { useState, useEffect } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark'); // Theme state

  // Handle theme toggle and persist in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (storedTheme) setTheme(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

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

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email format.');
      return;
    }
    // Placeholder for API call
    console.log(`Subscribed: ${email}`);
    setSubscribed(true);
    setEmail('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-12 md:px-12 transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-r from-indigo-900 to-purple-900 text-gray-300' : 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section with Animation */}
        <div className="space-y-4 animate-fade-in-up">
          <h3 className="text-xl font-bold">StudentHelper</h3>
          <p className="text-sm opacity-90">
            Your ultimate platform for coding practice, interview preparation, and academic success. Empowering students worldwide.
          </p>
          <p className="text-xs">&copy; {currentYear} StudentHelper. All rights reserved.</p>
        </div>

        {/* Quick Links with Hover Effects */}
        <div className="space-y-4 animate-fade-in-up delay-100">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/home" className="hover:underline hover:opacity-100 transition-all duration-200">Home</a></li>
            <li><a href="/questions" className="hover:underline hover:opacity-100 transition-all duration-200">Coding Questions</a></li>
            <li><a href="/practice" className="hover:underline hover:opacity-100 transition-all duration-200">Practice Arena</a></li>
            <li><a href="/blog" className="hover:underline hover:opacity-100 transition-all duration-200">Study Blog</a></li>
            <li><a href="/community" className="hover:underline hover:opacity-100 transition-all duration-200">Community Forum</a></li>
          </ul>
        </div>

        {/* Social Media with Tooltips */}
        <div className="space-y-4 animate-fade-in-up delay-200">
          <h4 className="text-lg font-semibold">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="relative group text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.297c0-.985.34-1.703 1.703-1.703h2.297v-4h-3.297c-2.297 0-3.703 1.406-3.703 3.703v1.297z"/></svg>
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded">Facebook</span>
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="relative group text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded">Twitter</span>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="relative group text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded">LinkedIn</span>
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="relative group text-gray-300 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-xs px-2 py-1 rounded">Instagram</span>
            </a>
          </div>
        </div>

        {/* Advanced Newsletter with Validation */}
        <div className="space-y-4 animate-fade-in-up delay-300">
          <h4 className="text-lg font-semibold">Newsletter</h4>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="px-4 py-2 bg-opacity-20 bg-white border border-gray-500 rounded-md focus:outline-none focus:border-white transition-colors"
              aria-label="Email for newsletter subscription"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </form>
          {error && <p className="text-sm text-red-400">{error}</p>}
          {subscribed && <p className="text-sm text-green-400">Subscription successful! Check your inbox.</p>}
        </div>
      </div>

      {/* Advanced Features: Theme Toggle & Back to Top */}
      <div className="mt-8 flex justify-between items-center max-w-7xl mx-auto text-sm">
        {/* <button
          onClick={toggleTheme}
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </button> */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-all duration-300 animate-bounce"
            aria-label="Scroll back to top"
          >
            Back to Top ↑
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;
