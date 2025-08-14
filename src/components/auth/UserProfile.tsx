import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { User, Mail, Phone, Calendar, Edit, Save, X, Loader2, Camera, GraduationCap, Shield, ArrowLeft } from 'lucide-react';

const UserProfile: React.FC = () => {
  const { user, updateUser, updateProfilePicture, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    phone: user?.phone || '',
    gender: user?.gender || '',
    dateOfBirth: user?.dateOfBirth ? user.dateOfBirth.split('T')[0] : '',
    college: (user as any)?.college || '',
    degree: (user as any)?.degree || '',
  });

  // Update form data when user changes
  React.useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        phone: user.phone || '',
        gender: user.gender || '',
        dateOfBirth: user.dateOfBirth ? user.dateOfBirth.split('T')[0] : '',
        college: (user as any)?.college || '',
        degree: (user as any)?.degree || '',
      });
    }
  }, [user]);
  const [uploading, setUploading] = useState(false);

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Names are read-only, so no validation needed

    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be exactly 10 digits';
    }
    if (formData.college && formData.college.length > 120) {
      errors.college = 'College name cannot exceed 120 characters';
    }
    if (formData.degree && formData.degree.length > 80) {
      errors.degree = 'Degree cannot exceed 80 characters';
    }

    if (formData.dateOfBirth) {
      const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
      if (age < 13 || age > 100) {
        errors.dateOfBirth = 'Age must be between 13 and 100 years';
      }
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setError('');
    setMessage('');

    try {
      // Only send editable fields (exclude firstName and lastName)
      const editableData = {
        phone: formData.phone,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        college: formData.college,
        degree: formData.degree,
      };
      
      await updateUser(editableData);
      setMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (err: any) {
      setError(`Failed to update profile: ${err.message || 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCancel = () => {
    setFormData({
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      phone: user?.phone || '',
      gender: user?.gender || '',
      dateOfBirth: user?.dateOfBirth ? user.dateOfBirth.split('T')[0] : '',
      college: (user as any)?.college || '',
      degree: (user as any)?.degree || '',
    });
    setValidationErrors({});
    setIsEditing(false);
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Please sign in to view your profile</h2>
          <Button onClick={() => window.location.href = '/signin'} className="bg-blue-600 hover:bg-blue-700">
            Sign In
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-600/20 to-gray-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-gray-400/10 to-gray-500/10 rounded-full blur-2xl animate-bounce delay-700"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-full blur-2xl animate-bounce delay-300"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
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
            User Profile
          </h2>
          
          
        </div>

        {/* Enhanced Main Card */}
        <Card className="backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
          <CardHeader className="pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl font-bold text-white">Profile</CardTitle>
                <CardDescription className="text-gray-300">
                  Manage your account information and preferences
                </CardDescription>
              </div>
                             <div className="flex flex-col sm:flex-row gap-2">
                 {!isEditing && (
                   <Button 
                     onClick={() => setIsEditing(true)} 
                     variant="outline"
                     className="border-gray-600 text-gray-200 hover:bg-gray-800/30 hover:border-gray-500"
                   >
                     <Edit className="mr-2 h-4 w-4" />
                     Edit Profile
                   </Button>
                 )}
               </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {error && (
              <Alert className="border-red-400 bg-red-900/20 text-red-400">
                <Shield className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {message && (
              <Alert className="border-green-400 bg-green-900/20 text-green-400">
                <Shield className="h-4 w-4" />
                <AlertDescription>{message}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-6">
              {/* Enhanced Profile Picture Section */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative">
                  <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-gray-500/30 shadow-xl">
                    <AvatarImage src={user.profilePicture} alt={user.firstName} />
                    <AvatarFallback className="text-2xl sm:text-3xl bg-gradient-to-br from-gray-600 to-gray-700 text-white">
                      {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  {isEditing && (
                    <div className="absolute -bottom-2 -right-2">
                      <label className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-600 bg-gray-800/30 hover:bg-gray-700/30 cursor-pointer text-gray-200 hover:text-white transition-all duration-200">
                        <Camera className="h-4 w-4" />
                        <span className="text-sm font-medium">Change</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = async () => {
                              try {
                                setUploading(true);
                                await updateProfilePicture(reader.result as string);
                              } finally {
                                setUploading(false);
                              }
                            };
                            reader.readAsDataURL(file);
                          }}
                        />
                      </label>
                      {uploading && (
                        <div className="text-xs text-gray-400 mt-1 text-center">Uploading...</div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {user.firstName} {user.lastName}
                  </h3>
                  <p className="text-gray-300 mb-3">{user.email}</p>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      user.isEmailVerified 
                        ? 'bg-green-900/30 text-green-300 border border-green-500/30' 
                        : 'bg-yellow-900/30 text-yellow-300 border border-yellow-500/30'
                    }`}>
                      {user.isEmailVerified ? 'Email Verified' : 'Email Not Verified'}
                    </span>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      user.role === 'admin' 
                        ? 'bg-purple-900/30 text-purple-300 border border-purple-500/30' 
                        : 'bg-gray-900/30 text-gray-300 border border-gray-500/30'
                    }`}>
                      {user.role === 'admin' ? 'Admin' : 'Student'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Enhanced Profile Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                                 {/* Name Fields Row - Read Only */}
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="space-y-2">
                     <Label htmlFor="firstName" className="text-sm font-semibold text-gray-200">
                       First Name
                     </Label>
                     <div className="relative group">
                       <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                       <Input
                         id="firstName"
                         name="firstName"
                         type="text"
                         value={formData.firstName}
                         className="pl-10 border-2 border-gray-600 bg-gray-800/30 rounded-xl backdrop-blur-sm text-gray-300"
                         disabled
                       />
                     </div>
                     <p className="text-sm text-gray-400">Name cannot be changed</p>
                   </div>

                   <div className="space-y-2">
                     <Label htmlFor="lastName" className="text-sm font-semibold text-gray-200">
                       Last Name
                     </Label>
                     <div className="relative group">
                       <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                       <Input
                         id="lastName"
                         name="lastName"
                         type="text"
                         value={formData.lastName}
                         className="pl-10 border-2 border-gray-600 bg-gray-800/30 rounded-xl backdrop-blur-sm text-gray-300"
                         disabled
                       />
                     </div>
                     <p className="text-sm text-gray-400">Name cannot be changed</p>
                   </div>
                 </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-200">
                    Email
                  </Label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gray-300 transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      value={user.email}
                      className="pl-10 border-2 border-gray-600 bg-gray-800/30 rounded-xl backdrop-blur-sm text-gray-300"
                      disabled
                    />
                  </div>
                  <p className="text-sm text-gray-400">Email cannot be changed</p>
                </div>

                {/* Phone and Gender Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`pl-10 border-2 transition-all duration-300 ${
                          validationErrors.phone 
                            ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                            : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                        } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                        disabled={!isEditing || isLoading}
                      />
                    </div>
                    {validationErrors.phone && (
                      <p className="text-sm text-red-400 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        {validationErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="gender" className="text-sm font-semibold text-gray-200">
                      Gender
                    </Label>
                    <Select
                      value={formData.gender}
                      onValueChange={(value) => handleSelectChange('gender', value)}
                      disabled={!isEditing || isLoading}
                    >
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
                        <SelectItem value="prefer-not-to-say" className="hover:bg-gray-700">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                    {validationErrors.gender && (
                      <p className="text-sm text-red-400 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        {validationErrors.gender}
                      </p>
                    )}
                  </div>
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
                      className={`pl-10 border-2 transition-all duration-300 ${
                        validationErrors.dateOfBirth 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white`}
                      disabled={!isEditing || isLoading}
                    />
                  </div>
                  {validationErrors.dateOfBirth && (
                    <p className="text-sm text-red-400 flex items-center">
                      <Shield className="h-4 w-4 mr-1" />
                      {validationErrors.dateOfBirth}
                    </p>
                  )}
                </div>

                {/* Academic Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="college" className="text-sm font-semibold text-gray-200">
                      College
                    </Label>
                    <Input
                      id="college"
                      name="college"
                      type="text"
                      placeholder="Enter your college"
                      value={formData.college}
                      onChange={handleInputChange}
                      className={`border-2 transition-all duration-300 ${
                        validationErrors.college 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                      disabled={!isEditing || isLoading}
                    />
                    {validationErrors.college && (
                      <p className="text-sm text-red-400 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        {validationErrors.college}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="degree" className="text-sm font-semibold text-gray-200">
                      Degree
                    </Label>
                    <Input
                      id="degree"
                      name="degree"
                      type="text"
                      placeholder="Enter your degree"
                      value={formData.degree}
                      onChange={handleInputChange}
                      className={`border-2 transition-all duration-300 ${
                        validationErrors.degree 
                          ? 'border-red-400 focus:border-red-500 bg-red-900/20' 
                          : 'border-gray-600 focus:border-gray-500 hover:border-gray-500 bg-gray-800/30'
                      } rounded-xl backdrop-blur-sm text-white placeholder-gray-400`}
                      disabled={!isEditing || isLoading}
                    />
                    {validationErrors.degree && (
                      <p className="text-sm text-red-400 flex items-center">
                        <Shield className="h-4 w-4 mr-1" />
                        {validationErrors.degree}
                      </p>
                    )}
                  </div>
                </div>

                                 {/* Enhanced Actions */}
                 <div className="border-t border-gray-700 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                   <div className="text-sm text-gray-400 text-center sm:text-left">
                     Keep your academic profile updated for better recommendations.
                   </div>
                   <div className="flex flex-col sm:flex-row gap-3">
                     {isEditing ? (
                       <>
                         <Button 
                           type="button" 
                           onClick={handleCancel} 
                           variant="outline"
                           className="border-gray-600 text-gray-200 hover:bg-gray-800/30 hover:border-gray-500"
                         >
                           <X className="mr-2 h-4 w-4" />
                           Cancel
                         </Button>
                         <Button 
                           type="button" 
                           onClick={handleSubmit} 
                           disabled={isLoading}
                           className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-800 hover:from-gray-600 hover:via-gray-500 hover:to-gray-700"
                         >
                           {isLoading ? (
                             <>
                               <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                               Saving...
                             </>
                           ) : (
                             <>
                               <Save className="mr-2 h-4 w-4" />
                               Save Changes
                             </>
                           )}
                         </Button>
                       </>
                     ) : (
                       <>
                         <Button 
                           type="button" 
                           variant="outline"
                           onClick={() => navigate('/')}
                           className="border-gray-600 text-gray-200 hover:bg-gray-800/30 hover:border-gray-500"
                         >
                           <ArrowLeft className="mr-2 h-4 w-4" />
                           Back to Home
                         </Button>
                         <Button 
                           type="button" 
                           variant="destructive" 
                           onClick={() => { logout(); navigate('/'); }}
                           className="bg-red-600 hover:bg-red-700"
                         >
                           Sign Out
                         </Button>
                       </>
                     )}
                   </div>
                 </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserProfile;
