# MNC Exam Platform Routing System

## Overview
The MNC Exam Platform now uses a proper routing system with clean URLs that follow RESTful conventions.

## Routes

### Main Routes
- `/mock-test` - Main selection page with all companies and exam types
- `/mock-test/:companyId` - Instructions page for a specific company exam
- `/mock-test/:companyId/exam` - Active exam interface for a specific company

### Example URLs
- `/mock-test` - Main selection page
- `/mock-test/tcs` - TCS exam instructions
- `/mock-test/tcs/exam` - TCS exam interface

- `/mock-test/microsoft` - Microsoft exam instructions
- `/mock-test/microsoft/exam` - Microsoft exam interface

## Company IDs
The following company IDs are available:
- `tcs` - TCS NQT and Digital exams

- `cognizant` - Cognizant GENC exam
- `wipro` - Wipro mock test
- `accenture` - Accenture mock test
- `infosys` - Infosys mock test
- `microsoft` - Microsoft Azure Fundamentals (AZ-900)

## Navigation
- The platform includes a navigation bar with quick links to major companies
- Users can navigate directly to specific company exams
- Breadcrumb navigation is available throughout the exam flow

## Legacy Support
- The old `/mnc` route is still available for backward compatibility
- All existing functionality remains intact

## State Management
- Company and exam type data is passed through React Router's location state
- This ensures data persistence during navigation
- Fallback redirects handle cases where state is missing 