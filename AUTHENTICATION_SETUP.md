# Authentication Setup Guide

This guide explains how to set up and use the authentication features in the Student Exam Platform.

## Features Added

### 🔐 Authentication Components
- **SignIn**: Modern login form with validation
- **SignUp**: Comprehensive registration form
- **ForgotPassword**: Password reset functionality
- **UserProfile**: Profile management and editing

### 🛡️ Security Features
- JWT token-based authentication
- Form validation with real-time feedback
- Password strength requirements
- Account protection mechanisms
- Secure token storage

## Setup Instructions

### 1. Backend Setup

1. **Navigate to Backend directory**
   ```bash
   cd Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   - Update `config.env` with your settings:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/student_exam_db
   JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
   JWT_EXPIRE=7d
   NODE_ENV=development
   ```

4. **Start MongoDB**
   ```bash
   # Start MongoDB service
   mongod
   ```

5. **Start the backend server**
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd studentSite-master
   ```

2. **Install dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Start the frontend development server**
   ```bash
   npm run dev
   ```

## Usage

### Authentication Flow

1. **Registration** (`/signup`)
   - Fill in required fields (name, email, password)
   - Optional fields: phone, gender, date of birth
   - Password must meet security requirements
   - Automatic login after successful registration

2. **Login** (`/signin`)
   - Enter email and password
   - Forgot password link available
   - Redirects to home page after successful login

3. **Profile Management** (`/profile`)
   - View and edit profile information
   - Update personal details
   - Change password
   - Sign out functionality

4. **Password Reset** (`/forgot-password`)
   - Enter email address
   - Receive reset link (email implementation needed)
   - Reset password with secure token

### API Integration

The frontend is configured to communicate with the backend at:
```
http://localhost:5000/api
```

### Authentication Context

The `AuthContext` provides:
- User state management
- Login/logout functions
- Token management
- Profile updates
- Error handling

## Routes Added

| Route | Component | Description |
|-------|-----------|-------------|
| `/signin` | SignIn | Login page |
| `/signup` | SignUp | Registration page |
| `/forgot-password` | ForgotPassword | Password reset |
| `/profile` | UserProfile | User profile management |

## Security Features

### Password Requirements
- Minimum 6 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

### Form Validation
- Real-time validation feedback
- Client-side validation
- Server-side validation
- Error message display

### Token Management
- Automatic token storage in localStorage
- Token refresh capability
- Secure token transmission
- Automatic logout on token expiration

## Component Details

### SignIn Component
- Modern UI with gradient background
- Email and password validation
- Show/hide password toggle
- Loading states
- Error handling
- Responsive design

### SignUp Component
- Comprehensive registration form
- Real-time validation
- Password strength indicator
- Optional fields support
- Gender selection dropdown
- Date of birth picker

### UserProfile Component
- Profile information display
- Edit mode toggle
- Form validation
- Avatar display
- Account status indicators
- Danger zone for logout

### ForgotPassword Component
- Simple email input
- Success/error messaging
- Loading states
- Back to login link

## Styling

All components use:
- Tailwind CSS for styling
- Shadcn/ui components
- Lucide React icons
- Responsive design
- Consistent color scheme
- Modern gradient backgrounds

## Error Handling

### Client-side Errors
- Form validation errors
- Network errors
- Authentication errors
- User-friendly error messages

### Server-side Errors
- API error responses
- Validation failures
- Authentication failures
- Database errors

## Testing

### Manual Testing
1. **Registration**
   - Test with valid data
   - Test with invalid data
   - Test password requirements
   - Test email validation

2. **Login**
   - Test with correct credentials
   - Test with incorrect credentials
   - Test account lockout
   - Test forgot password

3. **Profile Management**
   - Test profile viewing
   - Test profile editing
   - Test form validation
   - Test logout

### API Testing
```bash
# Test registration
curl -X POST http://localhost:5000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"firstName":"Test","lastName":"User","email":"test@example.com","password":"TestPass123","confirmPassword":"TestPass123"}'

# Test login
curl -X POST http://localhost:5000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"TestPass123"}'
```

## Troubleshooting

### Common Issues

1. **Backend Connection Error**
   - Ensure backend is running on port 5000
   - Check MongoDB connection
   - Verify environment variables

2. **CORS Errors**
   - Backend CORS is configured for localhost:5173
   - Check browser console for CORS issues

3. **Token Issues**
   - Check localStorage for token
   - Verify token format
   - Check token expiration

4. **Form Validation**
   - Check browser console for validation errors
   - Verify input formats
   - Test with different browsers

### Development Tips

1. **Environment Variables**
   - Update API_BASE_URL in AuthContext if needed
   - Check backend config.env settings

2. **Database**
   - Ensure MongoDB is running
   - Check database connection string
   - Verify database permissions

3. **Network**
   - Check firewall settings
   - Verify port availability
   - Test network connectivity

## Future Enhancements

### Planned Features
- Email verification
- Two-factor authentication
- Social login integration
- Profile picture upload
- Advanced user roles
- Session management
- Audit logging

### Security Improvements
- HTTPS enforcement
- CSRF protection
- Rate limiting on frontend
- Input sanitization
- XSS protection

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review backend logs
3. Check browser console
4. Verify API responses
5. Test with different browsers

## Contributing

When adding new authentication features:
1. Follow the existing component patterns
2. Add proper validation
3. Include error handling
4. Test thoroughly
5. Update documentation
