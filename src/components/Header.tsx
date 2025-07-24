import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu,
  X,
  Palette, 
  Code, 
  Copy, 
  Star, 
  Users, 
  Download,
  ArrowRight,
  MousePointer,
  Layout,
  Navigation,
  ShoppingCart,
  Zap,
  CheckCircle,
  Globe,
  Smartphone,
  Layers,
  Sparkles,
  BookOpen,
  GraduationCap,
  Info,
  LogIn,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Facebook,
  Github,
  Linkedin,
  Play,
  Shield,
  Rocket,
  Award,
  Heart,
  Monitor,
  Tablet,
  Clock,
  TrendingUp,
  Building2,
  FileCode,
  Paintbrush,
  Database,
  Settings,
  Cloud,
  Search,
  MessageSquare,
  Quote,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Package,
  Lightbulb,
  Target,
  Gauge,
  Coffee,
  Eye,
  ThumbsUp,
  BarChart3,
  RectangleHorizontal, 
  IdCard,
  SquareChartGantt,
  AlignVerticalSpaceAround,
  CircleUser
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

   const navLinks = [
     { name: 'Docs', href: '/docs', icon: BookOpen },
     { name: 'UI Material', href: '/uiComponents', icon: Palette },
     {name: 'Exam Prep', href:'/examPrep ',icon: Palette},
     { name: 'Study', href: '/study', icon: GraduationCap },
     { name: 'About', href: '/about', icon: Info },
   ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-r from-primary to-primary/80 p-2 rounded-lg">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                    {/* <Link to='\uiComponent'>UIMATERIAL PRO</Link> */}
                  </span>
                </div>
    
                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  {navLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <Icon className="h-4 w-4" />
                        <span>{link.name}</span>
                      </Link>
                    );
                  })}
                  
                  {/* Sign In/Logout Button */}
                  <button
                    onClick={() => setIsLoggedIn(!isLoggedIn)}
                    className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200"
                  >
                    {isLoggedIn ? (
                      <>
                        <LogOut className="h-4 w-4" />
                        <span>Logout</span>
                      </>
                    ) : (
                      <>
                        <LogIn className="h-4 w-4" />
                        <span>Sign In</span>
                      </>
                    )}
                  </button>
                </div>
    
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
    
              {/* Mobile Navigation */}
              {isMenuOpen && (
                <div className="md:hidden py-4 border-t border-border">
                  <div className="space-y-4">
                    {navLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="flex items-center space-x-3 text-muted-foreground hover:text-primary py-2 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Icon className="h-4 w-4" />
                          <span>{link.name}</span>
                        </Link>
                      );
                    })}
                    <button
                      onClick={() => {
                        setIsLoggedIn(!isLoggedIn);
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 text-primary py-2 w-full"
                    >
                      {isLoggedIn ? (
                        <>
                          <LogOut className="h-4 w-4" />
                          <span>Logout</span>
                        </>
                      ) : (
                        <>
                          <LogIn className="h-4 w-4" />
                          <span>Sign In</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>
  );
};

export default Header;