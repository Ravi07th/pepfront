import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Mail,
  Clock,
  MessageCircle,
  BookOpen,
  Target,
  Code,
  CheckCircle,
  Send,
  Loader2,
  Award,
  Zap,
  Shield,
  Headphones,
  Globe,
  Smartphone,
  X,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import emailService from "@/services/emailService";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const result = await emailService.sendEmail(formData);
      
      if (result.success) {
        setSubmitStatus('success');
        toast.success(result.message);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          category: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      toast.error('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };


  const openWhatsAppChat = () => {
    const message = encodeURIComponent(`Hi, I need help with PrepCampus platform. Can you please assist me?`);
    const whatsappLink = `https://wa.me/919477105023?text=${message}`;
    window.open(whatsappLink, '_blank');
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Let's <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our platform? Need help with exam preparation? 
            We're here to help you succeed in your placement journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm shadow-2xl h-fit">
              <CardHeader className="border-b border-slate-700/50">
                <CardTitle className="flex items-center text-white">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mr-3">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  Send us a Message
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Fill out the form below and we'll respond within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 sm:p-8">
                {submitStatus === 'success' && (
                  <Alert className="mb-6 border-green-500/20 bg-green-500/10">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <AlertDescription className="text-green-300">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </AlertDescription>
                  </Alert>
                )}
                
                {submitStatus === 'error' && (
                  <Alert className="mb-6 border-red-500/20 bg-red-500/10">
                    <AlertDescription className="text-red-300">
                      Sorry, there was an error sending your message. Please try again.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-gray-300 font-medium">Full Name *</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-gray-300 font-medium">Email Address *</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-gray-300 font-medium">Phone Number</Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-gray-300 font-medium">Inquiry Category *</Label>
                      <Select onValueChange={(value) => handleInputChange('category', value)} required>
                        <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white focus:border-blue-500 focus:ring-blue-500">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 text-white border-slate-700">
                          <SelectItem value="practice-tests">Practice Tests</SelectItem>
                          <SelectItem value="placement-prep">Placement Preparation</SelectItem>
                          <SelectItem value="course-inquiry">Question Error</SelectItem>
                          <SelectItem value="technical-support">Technical Support</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300 font-medium">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your inquiry"
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300 font-medium">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            {/* Contact Details */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardHeader className="border-b border-slate-700/50 pb-4">
                <CardTitle className="text-white flex items-center text-lg">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 mr-3">
                    <Headphones className="h-5 w-5 text-white" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-3">
                {/* WhatsApp Support */}
                <div className="flex items-center p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm">WhatsApp Support</p>
                    <p className="text-xs text-gray-300">+91 9477105023</p>
                    <p className="text-xs text-gray-400">Mon-Fri, 9AM-6PM IST</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-shrink-0 bg-green-500/10 border-green-500/30 text-green-400 hover:bg-green-500/20 text-xs"
                    onClick={openWhatsAppChat}
                  >
                    <svg className="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Chat
                  </Button>
                </div>

                {/* Email Support */}
                <div className="flex items-center p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mr-3">
                    <Mail className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm">Email Support</p>
                    <p className="text-xs text-gray-300">prepcampus.info@gmail.com</p>
                    <p className="text-xs text-gray-400">24/7 Support Available</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-shrink-0 bg-yellow-500/10 border-yellow-500/30 text-yellow-400 hover:bg-yellow-500/20 text-xs"
                    onClick={() => {
                      try {
                        const mailtoLink = `mailto:prepcampus.info@gmail.com?subject=Support Request&body=Hello PrepCampus Team,%0D%0A%0D%0AI need assistance with the following:%0D%0A%0D%0A[Please describe your issue here]%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`;
                        const emailWindow = window.open(mailtoLink, '_blank');
                        
                        // Fallback if mailto doesn't work
                        setTimeout(() => {
                          if (!emailWindow || emailWindow.closed) {
                            // Copy email to clipboard as fallback
                            navigator.clipboard.writeText('prepcampus.info@gmail.com').then(() => {
                              toast.success('Email address copied to clipboard! Please open your email client and paste the address.');
                            }).catch(() => {
                              toast.info('Email: prepcampus.info@gmail.com - Please copy this address and send us an email.');
                            });
                          }
                        }, 1000);
                      } catch (error) {
                        console.error('Error opening email client:', error);
                        toast.info('Email: prepcampus.info@gmail.com - Please copy this address and send us an email.');
                      }
                    }}
                  >
                    <Mail className="mr-1 h-3 w-3" />
                    Email
                  </Button>
                </div>

                {/* Job Updates WhatsApp Channel */}
                <div className="flex items-center p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm">Job Updates Channel</p>
                    <p className="text-xs text-gray-300">Daily job updates & study material</p>
                    <p className="text-xs text-gray-400">Internships | Govt/Private Jobs | Notes | PDFs</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-shrink-0 bg-blue-500/10 border-blue-500/30 text-blue-400 hover:bg-blue-500/20 text-xs"
                    onClick={() => {
                      window.open('https://whatsapp.com/channel/0029VbAdTG54inopdREZd81r', '_blank');
                    }}
                  >
                    <svg className="mr-1 h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Join
                  </Button>
                </div>

                {/* Business Hours */}
                <div className="flex items-center p-3 rounded-lg bg-slate-700/30 border border-slate-600/30 hover:bg-slate-700/50 transition-colors">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-blue-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-white text-sm">Business Hours</p>
                    <p className="text-xs text-gray-300">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Help */}
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm shadow-2xl">
              <CardHeader className="border-b border-slate-700/50 pb-4">
                <CardTitle className="text-white flex items-center text-lg">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 mr-3">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  Quick Help
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm">
                  Common topics our team can help with
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 leading-relaxed">Tips and strategies to crack campus drives & off-campus opportunities.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 leading-relaxed">Guidance on solving quantitative, logical, and verbal ability questions.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 leading-relaxed">Assistance with test-taking strategies and performance improvement.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-300 leading-relaxed">HR and technical interview tips, common questions, and best practices.</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Support Options */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comprehensive <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Support</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We provide everything you need to crack your dream placement with confidence
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Practice Tests</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Sharpen your skills with mock tests for aptitude, coding, and reasoning – just like the real exams
                </p>
                <Button variant="outline" size="sm" className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white">
                  <a href="/quantitative-aptitude">Start Now</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500 mb-4 group-hover:scale-110 transition-transform">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Coding Challenges</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Solve problems from beginner to advanced levels and improve your coding for placements
                </p>
                <Button variant="outline" size="sm" className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
                  <a href="/coding">Start Coding</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl group sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center">
                <div className="mx-auto p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Interview Prep</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Get ready for HR & technical interviews with curated questions and expert tips
                </p>
                <Button variant="outline" size="sm" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white">
                  <a href="/exam-prep">Start Preparing</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Trusted Platform</h3>
              <p className="text-gray-400 text-sm">Used by 50,000+ students</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center justify-center mb-3">
                <Zap className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Fast Response</h3>
              <p className="text-gray-400 text-sm">24-hour response time</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center justify-center mb-3">
                <Globe className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-400 text-sm">Support worldwide</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/30">
              <div className="flex items-center justify-center mb-3">
                <Smartphone className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Mobile Friendly</h3>
              <p className="text-gray-400 text-sm">Access anywhere</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
