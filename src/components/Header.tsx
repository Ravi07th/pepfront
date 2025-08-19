import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ChevronDown, ChevronRight, 
  Palette, BookOpen, GraduationCap, Info, LogIn, LogOut,
  Code, Target, Brain, Clock, TrendingUp, Lightbulb, Shield, Users, 
  FileText, Calculator, MessageSquare, BarChart3, Settings, HelpCircle,
  ClipboardList, BookMarked, FileSpreadsheet, Home, CodeXml, CircleUserRound, User, ArrowRight, Bell, ExternalLink,
  Database, Monitor, Building2, Trophy, Zap, Star,
  LogInIcon
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import notificationService from "../services/notificationService";
import { toast } from "sonner";

// Navigation data structure
const skillUpSubcategories = [
  {
    name: "Aptitude",
    icon: Brain,
    sub: [
      { name: "Quantitative Aptitude", href: "/quantitative-aptitude", icon: Calculator },
      { name: "Logical Reasoning", href: "/logical-reasoning", icon: Target },
      { name: "Verbal Ability", href: "/verbal-ability", icon: MessageSquare },
    ],
  },
  {
    name: "Coding",
    icon: Code,
    sub: [
      { name: "Most Asked Questions", href: "/coding/top30", icon: Star },
      { name: "TCS NQT Practice", href: "/coding/tcsnqt", icon: Target },
      { name: "Company Specific", href: "/coding", icon: Building2 },
    ],
  },
  {
    name: "Study Notes",
    icon: BookOpen,
    sub: [
      { name: "All Study Notes", href: "/student-notes", icon: FileText },
      { name: "DSA Notes", href: "/student-notes/dsa-notes", icon: BarChart3 },
      { name: "C Programming", href: "/student-notes/c-programming-notes", icon: Code },
      { name: "Python Notes", href: "/student-notes/python-notes", icon: Code },
    ],
  },
  {
    name: "Mock Tests",
    icon: ClipboardList,
    sub: [  
      { name: "All Mock Tests", href: "/mock-test", icon: ClipboardList },
      { name: "TCS NQT Tests", href: "/mock-test", icon: Target },
      { name: "Microsoft Tests", href: "/mock-test", icon: Building2 },
    ],
  },
  {
    name: "Exam Patterns",
    icon: FileSpreadsheet,
    sub: [
      { name: "All Exam Patterns", href: "/exam-patterns", icon: GraduationCap },
      { name: "TCS NQT Pattern", href: "/exam-patterns/tcs-nqt", icon: Target },
      { name: "Accenture Pattern", href: "/exam-patterns/accenture", icon: Building2 },
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
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();
  const [subDropdown, setSubDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);
  const [showNotificationDropdown, setShowNotificationDropdown] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
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

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/signin');
    }
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  // Load notifications when user is authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const loadNotifications = async () => {
        try {
          const notifications = await notificationService.getNotifications();
          const unreadCount = await notificationService.getUnreadCount();
          setNotifications(notifications);
          setNotificationCount(unreadCount);
        } catch (error) {
          console.error('Error loading notifications:', error);
        }
      };
      
      loadNotifications();
      // Refresh notifications every 30 seconds
      const interval = setInterval(loadNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [isAuthenticated, user?._id]);

  const handleNotificationClick = () => {
    if (!isAuthenticated) {
      toast.info('Please sign in to view notifications');
      navigate('/signin');
      return;
    }
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  const handleMarkAllAsRead = async () => {
    try {
      await notificationService.markAllAsRead();
      setNotificationCount(0);
      setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  const handleTestNotification = async () => {
    try {
      const result = await notificationService.createNotification({
        targetUserId: user?._id || 'test-user',
        type: 'like',
        relatedItemId: 'test-id',
        relatedItemType: 'explanation',
        message: 'Test notification - someone liked your explanation',
        questionId: '1',
        topicName: 'Quantitative Aptitude',
        questionText: 'What is 2 + 2?'
      });
      
      if (result) {
        toast.success('Test notification created!');
        // Refresh notifications
        const notifications = await notificationService.getNotifications();
        const unreadCount = await notificationService.getUnreadCount();
        setNotifications(notifications);
        setNotificationCount(unreadCount);
      } else {
        toast.error('Failed to create test notification');
      }
    } catch (error) {
      console.error('Error creating test notification:', error);
      toast.error('Error creating test notification');
    }
  };

  const handleClearAllNotifications = async () => {
    try {
      const result = await notificationService.clearAllNotifications();
      if (result) {
        toast.success('All notifications cleared!');
        setNotifications([]);
        setNotificationCount(0);
      } else {
        toast.error('Failed to clear notifications');
      }
    } catch (error) {
      console.error('Error clearing notifications:', error);
      toast.error('Error clearing notifications');
    }
  };

  const handleRefreshNotifications = async () => {
    try {
      const notifications = await notificationService.getNotifications();
      const unreadCount = await notificationService.getUnreadCount();
      setNotifications(notifications);
      setNotificationCount(unreadCount);
      toast.success('Notifications refreshed!');
    } catch (error) {
      console.error('Error refreshing notifications:', error);
      toast.error('Error refreshing notifications');
    }
  };

  const handleNotificationItemClick = (notification: any) => {
    // Mark notification as read
    const updatedNotifications = notifications.map(n => 
      n._id === notification._id ? { ...n, isRead: true } : n
    );
    setNotifications(updatedNotifications);
    localStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    
    // Navigate to the original content
    if (notification.questionId && notification.topicName) {
      // Map topic names to their correct route paths
      const topicRouteMap: { [key: string]: string } = {
        'General Aptitude': '/quantitative-aptitude/practice',
        'Quantitative Aptitude': '/quantitative-aptitude/practice',
        'Logical Reasoning': '/logical-reasoning/practice',
        'Verbal Ability': '/verbal-ability/practice',
        'Programming': '/programming/practice'
      };
      
      const baseRoute = topicRouteMap[notification.topicName];
      
      if (baseRoute) {
        // Navigate to the practice route with question ID as state
        const path = `${baseRoute}/general`;
        
        // Store the question ID and additional data in localStorage so the practice component can auto-open the modal
        localStorage.setItem('notificationQuestionId', notification.questionId);
        localStorage.setItem('notificationQuestionText', notification.questionText || '');
        localStorage.setItem('notificationRelatedItemId', notification.relatedItemId);
        localStorage.setItem('notificationType', notification.type);
        localStorage.setItem('notificationRelatedItemType', notification.relatedItemType);
        
        navigate(path);
        
        // Close notification dropdown
        setShowNotificationDropdown(false);
        
        toast.success('Navigating to the original post...');
      } else {
        console.error('Unknown topic name:', notification.topicName);
        toast.error('Unable to navigate to the original post - unknown topic');
      }
    } else {
      toast.error('Unable to navigate to the original post - missing data');
    }
  };

  // Close notification dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.notification-dropdown')) {
        setShowNotificationDropdown(false);
      }
    };

    if (showNotificationDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showNotificationDropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-[#0b1220] md:bg-[#0b1220]/95 backdrop-blur-xl border-b border-slate-800 shadow-2xl">
        <div className="px-4 sm:px-6 lg:px-8 xl:px-10">
         <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="flex items-center">
                <img src="/favicon.png" alt="PrepCampus Logo" className="h-8 sm:h-10 lg:h-12 w-auto object-contain" />
              </div>
              <div className="flex flex-col ml-2 sm:ml-3 lg:ml-4">
                <div className="flex text-white text-amber-400 font-bold items-center">
                  <h1 className="text-sm sm:text-xl lg:text-sm text-yellow-500">PrepCampus</h1>
                </div>
                <span className="text-sm text-gray-400 hidden sm:block">Your Learning Partner</span>
              </div>
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex items-center space-x-6 xl:space-x-8">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
              <Home className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden lg:inline">Home</span>
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="hidden lg:inline">SkillUp</span>
                <span className="lg:hidden">Skills</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    {skillUpSubcategories.map((category) => (
                      <div key={category.name} className="group/item">
                        <div className="mb-3 p-2 rounded-lg bg-gray-50 group-hover/item:bg-amber-50 transition-colors">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                              <category.icon className="h-3 w-3 text-white" />
                            </div>
                            <h3 className="font-semibold text-gray-900 text-xs">{category.name}</h3>
                          </div>
                        </div>
                        <div className="space-y-0.5">
                          {category.sub.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="flex items-center space-x-2 p-1.5 rounded text-xs text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-all duration-200 group/link"
                            >
                              <item.icon className="h-3 w-3 text-gray-400 group-hover/link:text-amber-500" />
                              <span>{item.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                       <span className="text-xs text-gray-500">Learning resources</span>
                       <Link 
                        to="/skillup" 
                        className="text-xs text-amber-600 hover:text-amber-700 font-medium flex items-center space-x-1"
                      >
                        <span>View All</span>
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link to="/exam-prep" className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
              <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden lg:inline">Exam Prep</span>
            </Link>
            
            <Link to="/coding" className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
              <Code className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden lg:inline">Coding</span>
            </Link>
            
            <Link to="/contact" className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
              <User className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden lg:inline">Contact</span>
            </Link>
          </div>
          
          <div className="flex flex-row-reverse items-center justify-between gap-5 space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={handleMobileMenuToggle}
                className="text-slate-200 hover:text-amber-400 transition-colors p-2 rounded-lg hover:bg-slate-800/50"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Right Side - Auth and Notifications */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
                          {/* Notification Bell - Only show for authenticated users */}
              {isAuthenticated && (
                <div className="relative notification-dropdown">
                  <button
                    onClick={handleNotificationClick}
                    className="relative p-2 text-slate-200 hover:text-amber-400 transition-colors"
                  >
                    <Bell className="h-5 w-5" />
                    {notificationCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                        {notificationCount > 99 ? '99+' : notificationCount}
                      </span>
                    )}
                  </button>
                  
                  {/* Notification Dropdown */}
                  {showNotificationDropdown && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                    <div className="p-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-gray-900">Notifications</h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={handleTestNotification}
                            className="text-sm text-green-600 hover:text-green-800"
                          >
                            Test
                          </button>
                          <button
                            onClick={handleRefreshNotifications}
                            className="text-sm text-purple-600 hover:text-purple-800"
                          >
                            Refresh
                          </button>
                          <button
                            onClick={handleClearAllNotifications}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Clear All
                          </button>
                          {notificationCount > 0 && (
                            <button
                              onClick={handleMarkAllAsRead}
                              className="text-sm text-blue-600 hover:text-blue-800"
                            >
                              Mark all as read
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {notifications.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          <Bell className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                          <p>No notifications yet</p>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          {notifications.slice(0, 10).map((notification) => (
                            <div
                              key={notification._id}
                              onClick={() => handleNotificationItemClick(notification)}
                              className={`p-3 rounded-lg cursor-pointer transition-colors hover:bg-gray-100 ${
                                notification.isRead ? 'bg-gray-50' : 'bg-blue-50'
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                <div className="flex-shrink-0">
                                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                                    <Bell className="h-4 w-4 text-white" />
                                  </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm text-gray-900 font-medium">
                                    {notification.message}
                                  </p>
                                  <p className="text-xs text-gray-500 mt-1">
                                    {new Date(notification.createdAt).toLocaleDateString()}
                                  </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                  {!notification.isRead && (
                                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                  )}
                                  <ExternalLink className="w-3 h-3 text-gray-400" />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              )}
              
              {user ? (
                <Link to="/profile" className="flex items-center space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                    {user.profilePicture ? (
                      <img 
                        src={user.profilePicture} 
                        alt={`${user.firstName} ${user.lastName}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <span className="text-white text-sm font-semibold" style={{ display: user.profilePicture ? 'none' : 'flex' }}>
                      {(user.firstName?.charAt(0) || user.lastName?.charAt(0) || 'U').toUpperCase()}
                    </span>
                  </div>
                  <span className="hidden sm:block">{[user.firstName, user.lastName].filter(Boolean).join(' ')}</span>
                </Link>
              ) : (
                <Link
                  to="/signin"
                  className="bg-gradient-to-r from-amber-500 to-rose-500 text-white px-3 sm:px-4 md:px-6 py-2 rounded-lg hover:from-amber-600 hover:to-rose-600 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {/* <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" /> */}
                  <LogInIcon />
                  <span className="hidden sm:inline">Login</span>
                  <span className="sm:hidden">Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b1220] border-t border-slate-800 shadow-2xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-6 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-3">Main Navigation</h3>
                
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-800/50"
                  onClick={closeMobileMenu}
                >
                  <Home className="h-5 w-5" />
                  <span className="font-medium">Home</span>
                </Link>
                
                <Link 
                  to="/exam-prep" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-800/50"
                  onClick={closeMobileMenu}
                >
                  <GraduationCap className="h-5 w-5" />
                  <span className="font-medium">Exam Prep</span>
                </Link>
                
                <Link 
                  to="/coding" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-800/50"
                  onClick={closeMobileMenu}
                >
                  <Code className="h-5 w-5" />
                  <span className="font-medium">Coding</span>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-800/50"
                  onClick={closeMobileMenu}
                >
                  <User className="h-5 w-5" />
                  <span className="font-medium">Contact</span>
                </Link>
              </div>

              {/* Mobile SkillUp Dropdown */}
              <div className="border-t border-slate-700 pt-6">
                <div className="mb-4">
                  <h3 className="text-slate-200 font-semibold mb-4 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    SkillUp Resources
                  </h3>
                </div>
                <div className="space-y-4">
                  {skillUpSubcategories.map((category) => (
                    <div key={category.name} className="space-y-3">
                      <div className="flex items-center space-x-2 p-3 rounded-lg bg-slate-800/30">
                        <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center">
                          <category.icon className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-slate-200 font-medium text-sm">{category.name}</h4>
                        </div>
                      </div>
                      <div className="pl-4 space-y-1">
                        {category.sub.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="flex items-center space-x-2 text-sm text-slate-400 hover:text-amber-400 transition-colors py-2 px-3 rounded-lg hover:bg-slate-800/30"
                            onClick={closeMobileMenu}
                          >
                            <item.icon className="h-3 w-3" />
                            <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Auth Section */}
              <div className="border-t border-slate-700 pt-6">
                <h3 className="text-slate-300 font-semibold text-sm uppercase tracking-wider mb-3">Account</h3>
                {user ? (
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-800/50"
                    onClick={closeMobileMenu}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {(user.firstName?.charAt(0) || user.lastName?.charAt(0) || 'U').toUpperCase()}
                      </span>
                    </div>
                    <span className="font-medium">{[user.firstName, user.lastName].filter(Boolean).join(' ')}</span>
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-3 px-3 rounded-lg hover:bg-slate-800/50"
                    onClick={closeMobileMenu}
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span className="font-medium">Sign In</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
