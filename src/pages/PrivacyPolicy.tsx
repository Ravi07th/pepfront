import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, Users, Globe, Bell, FileText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 px-4">
      <div className="max-w-5xl mx-auto py-10 md:py-16">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-slate-800/50">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <header className="mb-8 md:mb-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Privacy Policy
              </h1>
              <p className="text-slate-300 mt-2">Your privacy is our priority</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Effective Date: 16 Aug 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4" />
              <span>Website: prepCampus</span>
            </div>
            <div className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span>Last Updated: 16 Aug 2025</span>
            </div>
          </div>
        </header>

        <div className="space-y-8 text-slate-200">
          {/* Introduction */}
          <section className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
            <h2 className="text-xl font-semibold text-blue-400 mb-3">Introduction</h2>
            <p className="text-slate-300 leading-relaxed">
              At prepCampus, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
              educational platform and services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 flex items-center space-x-2">
              <Database className="w-5 h-5" />
              <span>1. Information We Collect</span>
            </h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Name, email address, and contact information</li>
                  <li>Educational background and academic interests</li>
                  <li>Profile information and preferences</li>
                  <li>Account credentials and authentication data</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-300 mb-2">Usage Information</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Practice test results and performance analytics</li>
                  <li>Study progress and learning patterns</li>
                  <li>Feature usage and interaction data</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>2. How We Use Your Information</span>
            </h2>
            <div className="mt-4 space-y-3">
              <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-medium text-green-300 mb-2">Primary Purposes</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Provide personalized learning experiences and recommendations</li>
                  <li>Track your progress and performance in practice tests</li>
                  <li>Improve our educational content and platform features</li>
                  <li>Communicate important updates and educational resources</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 flex items-center space-x-2">
              <Lock className="w-5 h-5" />
              <span>3. Data Security & Protection</span>
            </h2>
            <div className="mt-4 bg-gradient-to-r from-green-900/20 to-blue-900/20 p-6 rounded-xl border border-green-700/30">
              <h3 className="text-lg font-medium text-green-300 mb-3">Security Measures</h3>
              <ul className="text-slate-300 space-y-1">
                <li>• SSL/TLS encryption for all data transmission</li>
                <li>• Secure authentication and access controls</li>
                <li>• Regular security audits and vulnerability assessments</li>
                <li>• Data backup and disaster recovery procedures</li>
              </ul>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>4. Your Privacy Rights</span>
            </h2>
            <div className="mt-4 space-y-4">
              <div className="bg-slate-800/30 p-4 rounded-lg border-l-4 border-purple-500">
                <h3 className="text-lg font-medium text-purple-300 mb-2">Access & Control</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 ml-4">
                  <li>Access and review your personal information</li>
                  <li>Update or correct inaccurate data</li>
                  <li>Request deletion of your account and data</li>
                  <li>Export your data in a portable format</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-xl font-semibold text-amber-400 flex items-center space-x-2">
              <Bell className="w-5 h-5" />
              <span>5. Contact Us</span>
            </h2>
            <div className="mt-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-6 rounded-xl border border-blue-700/30">
              <h3 className="text-lg font-medium text-blue-300 mb-3">Get in Touch</h3>
              <p className="text-slate-300 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="text-slate-300 space-y-1">
                <p>• Email: privacy@prepcampus.com</p>
                <p>• Contact Form: <Link to="/contact" className="text-blue-300 hover:underline">Contact Page</Link></p>
                <p>• Support: Available through our platform</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="mt-12 pt-8 border-t border-slate-700">
            <div className="text-center space-y-4">
              <p className="text-slate-400 text-sm">
                Thank you for trusting prepCampus with your educational journey.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link to="/terms" className="text-blue-300 hover:text-blue-200 hover:underline">
                  Terms of Service
                </Link>
                <span className="text-slate-600">•</span>
                <Link to="/contact" className="text-blue-300 hover:text-blue-200 hover:underline">
                  Contact Us
                </Link>
                <span className="text-slate-600">•</span>
                <Link to="/" className="text-blue-300 hover:text-blue-200 hover:underline">
                  Back to Home
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
