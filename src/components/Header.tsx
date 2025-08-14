import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Menu, X, ChevronDown, ChevronRight, 
  Palette, BookOpen, GraduationCap, Info, LogIn, LogOut,
  Code, Target, Brain, Clock, TrendingUp, Lightbulb, Shield, Users, 
  FileText, Calculator, MessageSquare, BarChart3, Settings, HelpCircle,
  ClipboardList, TestTube, BookMarked, FileSpreadsheet, Home, CodeXml, CircleUserRound, User, ArrowRight, Bell, ExternalLink
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import notificationService from "../services/notificationService";
import { toast } from "sonner";

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
          console.log('Loading notifications for user:', user?._id);
          const notifications = await notificationService.getNotifications();
          const unreadCount = await notificationService.getUnreadCount();
          console.log('Loaded notifications:', notifications);
          console.log('Unread count:', unreadCount);
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
    console.log('Notification clicked:', notification);
    
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
        console.log('Navigating to:', path, 'with question ID:', notification.questionId);
        
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
    <nav className="sticky top-0 z-50 bg-[#0b1220]/95 backdrop-blur-xl border-b border-slate-800 shadow-lg">
        <div className="px-4 sm:px-6 md:px-8 lg:px-10">
         <div className="flex justify-between space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10 items-center h-16 sm:h-18 md:h-20">
          {/* Left Side - Logo and Brand */}
          <div className="flex items-center ">
            <Link to="/" className="flex items-center  group">
              
              <div className="flex items-center">
                <img src="/favicon.png" alt="PrepCampus Logo" className="h-7 sm:h-16 md:h-15 w-auto object-contain" />
              </div>
              
                <div className="flex flex-col ml-2 sm:ml-3 md:ml-4">
                 <div className="flex text-white  text-amber-400 font-bold items-center space-x-0">
                   <h1>PrepCampus</h1>
                   {/* <span className="text-lg sm:text-xl text-purple-500">Campus</span><span className="text-lg sm:text-xl font-bold text-amber-400">Prep</span> */}
                 </div>
                
                <span className="text-xs text-gray-400 hidden sm:block">prepCampus Your Learning Partner</span>
              </div>
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="hidden md:flex text-base sm:text-lg md:text-xl items-center space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12">
            <Link to="/" className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
              <Home className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden lg:inline">Home</span>
            </Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 sm:space-x-2 text-slate-200 hover:text-amber-400 transition-colors">
                <span className="hidden lg:inline">SkillUp</span>
                <span className="lg:hidden">Skills</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute text-xl top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {skillUpSubcategories.map((category) => (
                      <div key={category.name}>
                        <div className="mb-3">
                          <h3 className="font-semibold text-gray-900">{category.name}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.sub.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block text-sm text-gray-700 hover:text-amber-500 transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
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

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-slate-200 hover:text-amber-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Right Side - Auth */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Notification Bell - Only show for authenticated users */}
            {user && (
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
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Sign In</span>
                <span className="sm:hidden">Login</span>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0b1220] border-t border-slate-800 shadow-lg z-50">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                
                <Link 
                  to="/exam-prep" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Exam Prep</span>
                </Link>
                
                <Link 
                  to="/coding" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  <Code className="h-5 w-5" />
                  <span>Coding</span>
                </Link>
                
                <Link 
                  to="/contact" 
                  className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-2"
                  onClick={closeMobileMenu}
                >
                  <User className="h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </div>

              {/* Mobile SkillUp Dropdown */}
              <div className="border-t border-slate-700 pt-4">
                <div className="mb-3">
                  <h3 className="text-slate-200 font-semibold mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    SkillUp
                  </h3>
                </div>
                <div className="space-y-2 pl-4">
                  {skillUpSubcategories.map((category) => (
                    <div key={category.name} className="space-y-2">
                      <h4 className="text-slate-300 font-medium text-sm">{category.name}</h4>
                      <div className="pl-4 space-y-1">
                        {category.sub.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block text-sm text-slate-400 hover:text-amber-400 transition-colors py-1"
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Auth Section */}
              <div className="border-t border-slate-700 pt-4">
                {user ? (
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold">
                        {(user.firstName?.charAt(0) || user.lastName?.charAt(0) || 'U').toUpperCase()}
                      </span>
                    </div>
                    <span>{[user.firstName, user.lastName].filter(Boolean).join(' ')}</span>
                  </Link>
                ) : (
                  <Link
                    to="/signin"
                    className="flex items-center space-x-3 text-slate-200 hover:text-amber-400 transition-colors py-2"
                    onClick={closeMobileMenu}
                  >
                    <ArrowRight className="h-4 w-4" />
                    <span>Sign In</span>
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
