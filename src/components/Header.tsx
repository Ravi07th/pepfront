import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Palette, BookOpen, GraduationCap, Info, LogIn, LogOut,
  ChevronDown, ChevronRight, Code, ClipboardList, FileText,
  Menu, X, Home, Users, Target, TestTube, BookMarked, FileSpreadsheet, CircleUserRound, CodeXml
} from 'lucide-react';

// Navigation data structure
const skillUpSubcategories = [
  {
    name: "Aptitude",
    icon: ClipboardList,
    sub: [
      { name: "Quants", href: "/quantitative-aptitude" },
      { name: "Logical Reasoning", href: "/logical-reasoning" },
      { name: "Verbal Ability", href: "/verbal-ability" },
    ],
  },
  {
    name: "Coding",
    icon: Code,
    sub: [
      { name: "C++", href: "/skillup/coding/cpp" },
      { name: "Java", href: "/skillup/coding/java" },
      { name: "Python", href: "/skillup/coding/python" },
    ],
  },
  {
    name: "Student Notes",
    icon: FileText,
    sub: [
      { name: "TCS NQT", href: "/skillup/notes/tcsnqt" },
      { name: "Accenture", href: "/skillup/notes/accenture" },
      { name: "Infosys", href: "/skillup/notes/infosys" },
    ],
  },
  {
    name: "Mock Test",
    icon: TestTube,
    sub: [  
      { name: "All Mock Tests", href: "/mock-test" },
      { name: "TCS NQT", href: "/mock-test" },
      { name: "Microsoft", href: "/mock-test" },
      { name: "Hcl", href: "/mock-test" },

    ],
  },
  {
    name: "Exam Notes",
    icon: BookMarked,
    sub: [
      { name: "All Notes", href: "/student-notes" },
      { name: "DBMS", href: "/student-notes" },
      { name: "OS", href: "/student-notes" },
      { name: "C language", href: "/student-notes" }
    ],
  },
  {
    name: "Exam Syllabus",
    icon: FileSpreadsheet,
    sub: [
      { name: "All Exam Patterns", href: "/exam-patterns" },
      { name: "TCS NQT", href: "/exam-patterns/accenture" },
      { name: "Accenture", href: "/exam-patterns/accenture" },
      { name: "Amazon", href: "/exam-patterns/amazon" },
      { name: "Google", href: "/exam-patterns/google" },
    ],
  },
];

const navLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "SkillUp", href: "/skillup", icon: BookOpen, dropdown: skillUpSubcategories },
  { name: 'Exam Prep', href: '/exam-prep', icon: GraduationCap },
  { name: 'Coding', href: '/coding', icon: CodeXml },
  { name: 'Contact', href: '/contact', icon: CircleUserRound  },
];

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [subDropdown, setSubDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 p-3 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <Palette className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  StudentHelper
                </span>
                <span className="text-xs text-gray-500 font-medium">Your Learning Partner</span>
              </div>
            </Link>
          </div>
          
          {/* Middle - Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => {
              if (!link.dropdown) {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                      isActiveLink(link.href) 
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 font-semibold shadow-md' 
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{link.name}</span>
                  </Link>
                );
              }

              // Dropdown navigation
              return (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseLeave={() => setSubDropdown(null)}
                >
                  <button className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActiveLink(link.href) 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 font-semibold shadow-md' 
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}>
                    <link.icon className="h-5 w-5" />
                    <span className="font-medium">{link.name}</span>
                    <ChevronDown className="h-4 w-4 transform transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Enhanced Dropdown Menu */}
                  <div className="absolute left-0 mt-3 w-72 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:scale-100 scale-95">
                    <div className="p-2">
                      {link.dropdown.map(subcat => (
                        <div
                          key={subcat.name}
                          className="relative"
                          onMouseEnter={() => setSubDropdown(subcat.name)}
                        >
                          <button className="flex items-center w-full px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-200">
                            <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mr-3">
                              <subcat.icon className="h-4 w-4 text-gray-600" />
                            </div>
                            <span className="font-medium">{subcat.name}</span>
                            <ChevronRight
                              className={`ml-auto h-4 w-4 transform transition-transform duration-200
                                ${subDropdown === subcat.name ? 'rotate-90' : ''}
                              `}
                            />
                          </button>

                          {/* Enhanced Submenu */}
                          <div
                            className={`absolute top-0 left-full w-56 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl shadow-2xl z-50
                            transition-all duration-300 transform
                            ${subDropdown === subcat.name ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}
                            `}
                          >
                            <div className="p-2">
                              {subcat.sub.map(child => (
                                <Link
                                  key={child.name}
                                  to={child.href}
                                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 rounded-xl transition-all duration-200 font-medium"
                                  onClick={closeMobileMenu}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Auth Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:via-purple-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                {isLoggedIn ? (
                  <>
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </>
                ) : (
                  <>
                    <LogIn className="h-5 w-5" />
                    <span>Sign In</span>
                  </>
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={handleMobileMenuToggle}
                className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-blue-600 transition-all duration-300"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-xl">
              {navLinks.map(link => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActiveLink(link.href)
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-md'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    <div className="p-2 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span>{link.name}</span>
                  </Link>
                );
              })}
              
              {/* Enhanced Mobile Auth Button */}
              <button
                onClick={() => {
                  setIsLoggedIn(!isLoggedIn);
                  closeMobileMenu();
                }}
                className="flex items-center space-x-3 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  {isLoggedIn ? (
                    <LogOut className="h-5 w-5" />
                  ) : (
                    <LogIn className="h-5 w-5" />
                  )}
                </div>
                <span>{isLoggedIn ? 'Logout' : 'Sign In'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
