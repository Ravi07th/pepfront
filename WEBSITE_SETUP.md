# Student Exam Website Setup Guide

## Quick Start

### Option 1: Using the Batch File (Windows)
1. Double-click `start-dev.bat` in the project root
2. The website will start automatically
3. Open your browser and go to `http://localhost:8080` (or `http://localhost:8081` if 8080 is busy)

### Option 2: Using Command Line
1. Open a terminal/command prompt in the project directory
2. Run: `npm install` (if you haven't already)
3. Run: `npm run dev`
4. Open your browser and go to the URL shown in the terminal

## Features Fixed and Improved

### ✅ Website Issues Fixed
- **Routing Issue**: Fixed the PDF viewer route from `/pdf-viewer` to `/pdf-viewer/:noteId`
- **Development Server**: Website now starts successfully on port 8080/8081
- **Dependencies**: All required packages are properly installed

### ✅ Responsive Design Improvements

#### Mock Test Page (`/test`)
- **Mobile Layout**: Improved grid layout for mobile devices (1 column on mobile, 2 on tablet, 3-4 on desktop)
- **Responsive Typography**: Text sizes scale appropriately across devices
- **Touch-Friendly**: Larger touch targets and better spacing on mobile
- **Flexible Cards**: Cards adapt to different screen sizes
- **Improved Stats Section**: 2-column grid on mobile, 4-column on desktop

#### Student Notes Page (`/student-notes`)
- **Mobile Navigation**: Better mobile layout for search and filters
- **Responsive Grid**: Cards stack properly on mobile devices
- **Touch Optimization**: Improved button sizes and spacing
- **Flexible Content**: Content adapts to screen size

#### PDF Viewer Page (`/pdf-viewer/:noteId`)
- **Mobile Header**: Responsive header layout with stacked controls on mobile
- **Touch Controls**: Larger buttons and better spacing for mobile
- **Flexible Navigation**: Page navigation adapts to screen size
- **Responsive PDF Container**: Better height management on mobile

## Available Routes

- **Home**: `/`
- **Mock Tests**: `/test`
- **Student Notes**: `/student-notes`
- **PDF Viewer**: `/pdf-viewer/:noteId`
- **Exam Prep**: `/exam-prep`
- **Contact**: `/contact`
- **Sign In**: `/signin`
- **Sign Up**: `/signup`

## Technical Details

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Routing**: React Router DOM
- **Development Server**: Runs on port 8080 (or 8081 if busy)

## Troubleshooting

### If the website doesn't start:
1. Make sure you're in the correct directory (`studentSite-master`)
2. Run `npm install` to install dependencies
3. Check if port 8080 is available, if not, the server will automatically use 8081
4. Look for any error messages in the terminal

### If you see routing errors:
- The PDF viewer route has been fixed to use the correct parameter format
- All routes should now work properly

### For mobile responsiveness:
- The website is now fully responsive and works well on all device sizes
- Test on different screen sizes to see the improvements
