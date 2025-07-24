import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { FormField } from './components/ui/form';

const Index1 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  const codeExamples = [
    "Beautiful UI Components",
    "TypeScript Ready",
    "Tailwind CSS Powered",
    "Production Ready"
  ];

  useEffect(() => {
    const typeText = () => {
      const fullText = codeExamples[currentFeatureIndex];
      let currentLength = 0;
      
      const interval = setInterval(() => {
        setTypedText(fullText.substring(0, currentLength + 1));
        currentLength++;
        
        if (currentLength > fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentFeatureIndex((prev) => (prev + 1) % codeExamples.length);
          }, 2000);
        }
      }, 100);
      
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [currentFeatureIndex]);


  const features = [
    {
      icon: RectangleHorizontal ,
      // https://img.icons8.com/nolan/96/toggle-on.png,
      title: 'Buttons',
      description: ' A clickable element that performs an action or triggers a function.'
    },
    {
      icon: Menu,
      title: 'Navbar',
      description: 'A horizontal navigation bar that helps users easily access different sections of a website.'
    },
    {
      icon: IdCard,
      title: 'Cards',
      description: 'A UI component that displays selected products for purchase in e-commerce platforms.',
    },
    {
      icon: SquareChartGantt,
      title: 'Form',
      description: ' A collection of input fields used to collect user data and submit it to a system.'
    },
    {
      icon: CircleUser,
      title: 'Avatar',
      description: 'A small image or icon representing a user’s identity or profile.'
    },
    {
      icon: Star,
      title: 'Rating',
      description: ' A UI component that allows users to give feedback by selecting a value, often represented by stars or numbers.'
    }
  ];

  const stats = [
    { number: '500+', label: 'UI Components', icon: Package },
    { number: '100K+', label: 'Happy Developers', icon: Users },
    { number: '50+', label: 'Design Patterns', icon: Lightbulb },
    { number: '99.9%', label: 'Uptime', icon: Gauge }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Frontend Developer",
      company: "TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face",
      content: "UIMATERIAL PRO has completely transformed our development workflow. The components are beautifully designed and incredibly easy to customize.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Product Manager",
      company: "StartupXYZ", 
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      content: "We shipped our product 40% faster using these components. The quality and attention to detail is outstanding.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "UI/UX Designer",
      company: "DesignStudio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face",
      content: "As a designer, I appreciate how these components maintain perfect design consistency while being highly flexible.",
      rating: 5
    }
  ];

  const useCases = [
    {
      title: "E-commerce Platforms",
      description: "Build stunning online stores with our shopping cart, navbar, icons, register page and checkout components.",
      icon: ShoppingCart,
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      features: ["Product catalogs", "Shopping carts", "Payment forms", "User accounts"]
    },
    {
      title: "SaaS Dashboards",
      description: "Create professional admin panels and analytics dashboards with our data visualization components.",
      icon: BarChart3,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      features: ["Charts & graphs", "Data tables", "Metrics cards", "Navigation"]
    },
    {
      title: "Landing Pages",
      description: "Design conversion-focused landing pages with our hero sections, testimonials, and CTA components.",
      icon: Rocket,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      features: ["Hero sections", "Feature blocks", "Testimonials", "Contact forms"]
    }
  ];

  const techStack = [
    { name: "React 18", icon: "⚛️", description: "Latest React features" },
    { name: "TypeScript", icon: "🔷", description: "Type-safe development" },
    { name: "Tailwind CSS", icon: "🎨", description: "Utility-first styling" },
    { name: "Radix UI", icon: "🧩", description: "Accessible primitives" },
    { name: "Vite", icon: "⚡", description: "Lightning fast builds" },
    { name: "ESLint", icon: "🔍", description: "Code quality tools" }
  ];

  return (
    <div className="min-h-screen bg-black">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-black via-gray-900 to-black via-primary/5 to-secondary/10 py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 animate-fade-in">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-medium">500+ Premium UI Components</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl text-white font-bold mb-6 animate-fade-in">
                Build Beautiful
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text  text-5xl text-transparent">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed animate-slide-up">
                Professional React components built with TypeScript, Tailwind CSS, and modern design principles. 
                Copy, paste, and customize to build stunning applications faster than ever.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
                <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-primary">
                  <Play className="h-5 w-5" />
                  <Link to="/uiComponents" ><span>Get Started Free</span></Link>
                  
                  <ArrowRight className="h-5 w-5" />
                </button>
                <button className="inline-flex items-center space-x-2 glass-effect px-8 py-4 rounded-lg hover:bg-muted transition-all duration-200">
                  <Code className="h-5 w-5" />
                  <span>View Components</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12 animate-fade-in">
                <div className="flex items-center space-x-5">
                  <div className="flex space-x-1">
                    {[1].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                    ))}
                  </div>
                  <span className="text-lg text-white text-muted-foreground">100K+ developers trust us</span>
                </div>
                {/* <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">4.9/5 rating</span>
                </div> */}
              </div>
            </div>

            {/* Right Column - Interactive Demo */}
            <div className="relative bg-white-200 animate-fade-in">
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border p-8 shadow-card">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">component-preview.tsx</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <code className="text-sm text-primary">
                      import &#123; Button &#125; from '@/components/ui/button'
                    </code>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <code className="text-sm">
                      &lt;Button variant="primary" size="lg"&gt;<br/>
                      &nbsp;&nbsp;Get Started<br/>
                      &lt;/Button&gt;
                    </code>
                  </div>
                  <div className="flex justify-center pt-4">
                    <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors animate-float">
                      Live Preview
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-primary/20 backdrop-blur-sm rounded-full p-4 animate-float">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary/20 backdrop-blur-sm rounded-full p-4 animate-float" style={{ animationDelay: '1s' }}>
                <Shield className="h-6 w-6 text-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-gray-500  px-4 bg-muted/10">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-white  text-muted-foreground mb-8 uppercase tracking-wider">
           Support in Modern Technologies
          </h3>
          <div className="grid grid-cols-2 space-x-8 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {techStack.map((tech, index) => (
              <div key={index} className="group flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-card transition-colors duration-200">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {tech.icon}
                </div>
                <div className="text-2xl text-blue-900  font-medium">{tech.name}</div>
                <div className="text-xl text-muted-foreground text-center">{tech.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl text-white font-bold md:text-4xl font-bold mb-4">
              Everything You Need to Build Faster
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional-grade components designed for modern web applications with developer experience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
                >
                  <div className=" flex justify-space-between  space-x-5 bg-primary/10 p-3 rounded-lg h-12 w-fit mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-primary" />
                    {/* <img src={feature.icon} alt={feature.title} className="h-6 w-6 text-primary" /> */}
                  
                  <h3 className="text-xl text-blue-500 font-semibold mb-2">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
           </div>
        </section>
        <div className='flex justify-center'>
          <button className="inline-flex items-center space-x-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-200 transform hover:scale-105 shadow-primary">
                  <Play className="h-5 w-6" />
                  <span>Get Started Free</span>
                  <ArrowRight className="h-5 w-5" />
          </button>
          </div>
       

      {/* Use Cases Section */}
      <section className="mt-10   px-4">
        <div className="max-w-7xl  mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl text-white  md:text-5xl font-bold mb-6">
              Perfect for Any Project
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From startups to enterprise, our components power applications across every industry and use case.
            </p>
          </div>

          <div className="grid  lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="group relative bg-card rounded-2xl border-2 border-blue-500 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-card">
                  <div className="aspect-video  overflow-hidden">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title}
                      className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 bg-gray-800 ">
                    <div className="flex  items-center space-x-3 mb-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl text-white font-semibold">{useCase.title}</h3>
                    </div>
                    <p className="text-muted-foreground  mb-6">{useCase.description}</p>
                    <div className="space-y-2 bg-gray-800">
                      {useCase.features.map((feature, idx) => (
                        <div key={idx} className="flex bg-gray-800 items-center text-green-800 space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm  text-blue-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card">
                    <div className="bg-primary/10 p-4 rounded-full w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Loved by Developers Worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of developers who have transformed their workflow with our components.
            </p>
          </div>

          <div className="relative">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12 shadow-card">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <Quote className="h-12 w-12 text-primary/20 mx-auto mb-6" />
                
                <blockquote className="text-2xl md:text-3xl font-medium mb-8 max-w-4xl mx-auto leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <div className="text-center">
                  <div className="font-semibold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => prev === 0 ? testimonials.length - 1 : prev - 1)}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     
    </div>
  );
};

export default Index1;