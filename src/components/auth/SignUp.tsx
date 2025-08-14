import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Eye, EyeOff, Mail, Lock, Loader2, Sparkles, ArrowRight, Shield, Zap, 
  User, Phone, Calendar, Users, CheckCircle, XCircle, GraduationCap 
} from 'lucide-react';
import { GoogleLogin } from '@react-oauth/google';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

const SignUp: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleGoogleSuccess, isAuthenticated, isLoading, error, clearError } = useAuth();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    gender: '',
    dateOfBirth: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    clearError();
  }, [clearError]);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (formData.firstName.length < 2) {
      errors.firstName = 'First name must be at least 2 characters';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 2) {
      errors.lastName = 'Last name must be at least 2 characters';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      errors.password = 'Password must contain uppercase, lowercase, and number';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid 10-digit phone number';
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
      await register(formData);
    } catch (err) {
      console.error('Registration error:', err);
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

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear validation error when user makes a selection
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    clearError();
  };

  const getPasswordStrength = () => {
    const password = formData.password;
    if (!password) return { strength: 0, color: 'bg-gray-200', text: '' };
    
    let score = 0;
    if (password.length >= 8) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    const strengthMap = {
      1: { color: 'bg-red-500', text: 'Weak' },
      2: { color: 'bg-orange-500', text: 'Fair' },
      3: { color: 'bg-yellow-500', text: 'Good' },
      4: { color: 'bg-blue-500', text: 'Strong' },
      5: { color: 'bg-green-500', text: 'Very Strong' }
    };

    return { strength: score, ...strengthMap[score as keyof typeof strengthMap] };
  };

  const passwordStrength = getPasswordStrength();

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

      <div className="relative z-10 w-full max-w-2xl">
        {/* Enhanced Header Section with PrepCampus Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 rounded-2xl shadow-2xl mb-6 p-2">
            <img 
              src="/images/mylogo.png" 
              alt="PrepCampus Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 bg-clip-text text-transparent mb-3">
            PrepCampus
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-2">
            Join Our Community
          </h2>
          <p className="text-gray-300 text-lg">
            Start your journey to success with PrepCampus
          </p>
          <div className="flex items-center justify-center mt-4 space-x-2">
            <GraduationCap className="h-5 w-5 text-gray-400" />
            <span className="text-sm text-gray-400">Your Gateway to Success</span>
          </div>
        </div>

        {/* Enhanced Main Card */}
        <Card className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* First Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-semibold text-gray-200">
                    First Name
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`pl-10 pr-4 py-3 border-2 transition-all duration-300 ${
                        validationErrors.firstName 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                      disabled={isLoading}
                    />
                  </div>
                  {validationErrors.firstName && (
                    <p className="text-sm text-red-400 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      {validationErrors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-semibold text-gray-200">
                    Last Name
                  </Label>
                  <div className="relative group">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`pl-10 pr-4 py-3 border-2 transition-all duration-300 ${
                        validationErrors.lastName 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                      disabled={isLoading}
                    />
                  </div>
                  {validationErrors.lastName && (
                    <p className="text-sm text-red-400 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      {validationErrors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-200">
                  Email Address
                </Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
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

              {/* Password Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-semibold text-gray-200">
                    Password
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
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
                </div>

                {/* Confirm Password Field */}
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-semibold text-gray-200">
                    Confirm Password
                  </Label>
                  <div className="relative group">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className={`pl-10 pr-12 py-3 border-2 transition-all duration-300 ${
                        validationErrors.confirmPassword 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                      disabled={isLoading}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-300 transition-colors"
                      disabled={isLoading}
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                  {validationErrors.confirmPassword && (
                    <p className="text-sm text-red-400 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      {validationErrors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Fields Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-200">
                    Phone Number
                  </Label>
                  <div className="relative group">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`pl-10 pr-4 py-3 border-2 transition-all duration-300 ${
                        validationErrors.phone 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                      disabled={isLoading}
                    />
                  </div>
                  {validationErrors.phone && (
                    <p className="text-sm text-red-400 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      {validationErrors.phone}
                    </p>
                  )}
                </div>

                {/* Gender Field */}
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm font-semibold text-gray-200">
                    Gender
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => handleSelectChange('gender', value)}>
                    <SelectTrigger className={`border-2 transition-all duration-300 ${
                      validationErrors.gender 
                        ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                        : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                    } rounded-xl backdrop-blur-sm text-white`}>
                      <SelectValue placeholder="Select gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600 text-white">
                      <SelectItem value="male" className="hover:bg-gray-700">Male</SelectItem>
                      <SelectItem value="female" className="hover:bg-gray-700">Female</SelectItem>
                      <SelectItem value="other" className="hover:bg-gray-700">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date of Birth Field */}
                <div className="space-y-2">
                  <Label htmlFor="dateOfBirth" className="text-sm font-semibold text-gray-200">
                    Date of Birth
                  </Label>
                  <div className="relative group">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="dateOfBirth"
                      name="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      className="pl-10 pr-4 py-3 border-2 border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30 rounded-xl backdrop-blur-sm text-white"
                      disabled={isLoading}
                    />
                  </div>
                </div>
              </div>

              {/* Server-side error */}
              {error && (
                <Alert className="border-red-400 bg-red-900/20 text-red-400">
                  <Shield className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              {/* Enhanced Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 group"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Create Account
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
                    text="signup_with"
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
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-gray-900/50 text-gray-300 font-medium">Already have an account?</span>
                </div>
              </div>

              {/* Enhanced Sign In Link */}
              <div className="text-center">
                <Link
                  to="/signin"
                  className="inline-flex items-center justify-center w-full px-6 py-3 border-2 border-gray-600 text-gray-200 font-semibold rounded-xl hover:border-gray-500 hover:bg-gray-800/30 transition-all duration-300 group"
                >
                  <span>Sign in to your account</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Enhanced Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-gray-300 hover:text-gray-200 hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-gray-300 hover:text-gray-200 hover:underline">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
