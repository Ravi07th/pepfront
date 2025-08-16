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
- `/mock-test/tcs-nqt` - TCS NQT exam instructions
- `/mock-test/tcs-nqt/exam` - TCS NQT exam interface
- `/mock-test/cognizant-genc` - Cognizant GenC exam instructions
- `/mock-test/cognizant-genc/exam` - Cognizant GenC exam interface
- `/mock-test/wipro-mock-test` - Wipro mock test instructions
- `/mock-test/wipro-mock-test/exam` - Wipro mock test interface
- `/mock-test/accenture-mock-test` - Accenture mock test instructions
- `/mock-test/accenture-mock-test/exam` - Accenture mock test interface
- `/mock-test/infosys-online-aptitude-test` - Infosys online aptitude test instructions
- `/mock-test/infosys-online-aptitude-test/exam` - Infosys online aptitude test interface
- `/mock-test/microsoft-azure-fundamentals` - Microsoft Azure Fundamentals exam instructions
- `/mock-test/microsoft-azure-fundamentals/exam` - Microsoft Azure Fundamentals exam interface
- `/mock-test/hcl-online-screening` - HCL online screening instructions
- `/mock-test/hcl-online-screening/exam` - HCL online screening interface
- `/mock-test/capgemini-online-assessment` - Capgemini online assessment instructions
- `/mock-test/capgemini-online-assessment/exam` - Capgemini online assessment interface

## Company IDs
The following company IDs are available:
- `tcs-nqt` - TCS NQT exam
- `cognizant-genc` - Cognizant GENC exam
- `wipro-mock-test` - Wipro mock test
- `accenture-mock-test` - Accenture mock test
- `infosys-online-aptitude-test` - Infosys mock test
- `microsoft-azure-fundamentals` - Microsoft Azure Fundamentals (AZ-900)
- `hcl-online-screening` - HCL online screening
- `capgemini-online-assessment` - Capgemini online assessment

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

## Retake Functionality
- The retake exam button navigates users back to the introduction page for the specific company exam
- This allows users to restart the exam from the beginning
- The routing system handles both direct URL access and state-based navigation
- All company exams support the retake functionality with proper routing 