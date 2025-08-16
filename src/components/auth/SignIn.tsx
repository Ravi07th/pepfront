import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Eye, EyeOff, Mail, Lock, Loader2, Sparkles, ArrowRight, Shield, Zap, GraduationCap } from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const { login, handleGoogleSuccess, isAuthenticated, isLoading, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  // Removed auto-clear on every render to avoid instantly clearing server errors

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      await login(formData.email, formData.password);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    // Also clear server error while typing
    clearError();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-600/20 to-gray-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-400/10 to-gray-500/10 rounded-full blur-2xl animate-bounce delay-700"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-full blur-2xl animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Enhanced Header Section with PrepCampus Branding */}
        <div className="text-center mb-2">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-2xl shadow-2xl mb-6 p-2">
            <img 
              src="/images/mylogo.png" 
              alt="PrepCampus Logo" 
              className="w-20 h-15 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent mb-3">
            <span className="text-orange-500">PrepCampus</span>
          </h1>
        </div>

        {/* Enhanced Main Card */}
        <Card className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-200">
                  Email Address
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                  </div>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`pl-10 pr-4 py-3 border-2 transition-all duration-300 ${
                      validationErrors.email 
                        ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                        : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                    } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                    disabled={isLoading}
                  />
                </div>
                {validationErrors.email && (
                  <p className="text-sm text-red-400 flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    {validationErrors.email}
                  </p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-semibold text-gray-200">
                  Password
                </Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`pl-10 pr-12 py-3 border-2 transition-all duration-300 ${
                      validationErrors.password 
                        ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                        : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                    } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                    disabled={isLoading}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              {validationErrors.password && (
                  <p className="text-sm text-red-400 flex items-center">
                    <Shield className="h-4 w-4 mr-1" />
                    {validationErrors.password}
                  </p>
                )}

              {/* Server-side auth error near password */}
              {!validationErrors.password && error && (
                <p className="text-sm text-red-400 mt-1" role="alert" aria-live="assertive">
                  {error}
                </p>
              )}
              </div>

              {/* Forgot Password Link */}
              <div className="flex items-center justify-end">
                <Link
                  to="/forgot-password"
                  className="text-sm text-gray-400 hover:text-gray-300 hover:underline font-medium transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Enhanced Submit Button */}
              <Button
                type="submit"
                className="w-full bg-blue-500 hover:via-gray-500 hover:to-gray-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Sign In
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Enhanced Google Sign-In */}
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-gray-900/50 text-gray-300 font-medium">Or continue with</span>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      handleGoogleSuccess(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Google Login Failed');
                    }}
                    theme="filled_black"
                    size="large"
                    text="signin_with"
                    shape="rectangular"
                    logo_alignment="left"
                    width="100%"
                    useOneTap={false}
                  />
                </div>
              </div>

              {/* Enhanced Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center  text-sm">
                  <span className="px-4 bg-gray-900/50 text-blue-500 font-medium">New to PrepCampus?</span>
                </div>
              </div>

              {/* Enhanced Sign Up Link */}
              <div className="text-center">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800/30 transition-all duration-300 group"
                >
                  <span>Create your account</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our{' '}
            <Link to="/terms" className="text-gray-300 hover:text-gray-200 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-gray-300 hover:text-gray-200 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
