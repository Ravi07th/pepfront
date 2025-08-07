# Company Exam Patterns 2025

A comprehensive collection of exam patterns and syllabi for major companies recruiting in 2025. This module provides detailed information about recruitment processes, exam structures, eligibility criteria, and preparation strategies.

## 🏢 Supported Companies

### Indian IT Companies
- **TCS (Tata Consultancy Services)** - TCS NQT
- **Infosys** - SP and DSE
- **Wipro** - Elite NTH
- **Cognizant** - GenC
- **Capgemini** - Exceller
- **Accenture** - ASE
- **HCL** - Graduate Engineer Program
- **Tech Mahindra** - NQT

### Global Tech Companies
- **Amazon** - SDE
- **Microsoft** - SDE
- **Google** - SDE

## 📊 Features

### Exam Pattern Information
- **Total Duration**: Complete exam time allocation
- **Total Questions**: Number of questions across all sections
- **Section Breakdown**: Detailed breakdown of each exam section
- **Difficulty Levels**: Categorized by difficulty (Low, Medium, High, Very High)
- **Platform Information**: Assessment platform details

### Syllabus Details
- **Section-wise Topics**: Comprehensive topic coverage for each section
- **Time Allocation**: Time distribution for each section
- **Question Distribution**: Number of questions per section
- **Difficulty Assessment**: Section-wise difficulty levels

### Eligibility & Process
- **Eligibility Criteria**: Detailed requirements for each company
- **Selection Process**: Step-by-step recruitment process
- **Important Dates**: Key dates and deadlines (where available)
- **Preparation Tips**: Expert tips for effective preparation

## 🎯 Usage

### Basic Usage
```tsx
import { ExamPatternDisplay } from '@/components/exam_pattern';

// Display all exam patterns
<ExamPatternDisplay />
```

### Filtered Display
```tsx
// Display patterns for a specific company
<ExamPatternDisplay selectedCompany="tcs" />
```

### Detailed Syllabus View
```tsx
import { DetailedSyllabus } from '@/components/exam_pattern';

// Show detailed syllabus for a company
<DetailedSyllabus companyId="tcs" onBack={handleBack} />
```

### Data Access
```tsx
import { 
  getExamPatternByCompany,
  getAllCompanies,
  getExamPatternsByDifficulty 
} from '@/components/exam_pattern';

// Get specific company pattern
const tcsPattern = getExamPatternByCompany('tcs');

// Get all company names
const companies = getAllCompanies();

// Filter by difficulty
const highDifficultyPatterns = getExamPatternsByDifficulty('high');
```

## 🚀 Routes

### Exam Patterns Overview
- **URL**: `/exam-patterns`
- **Component**: `ExamPatternDisplay`
- **Description**: Shows all company exam patterns with filtering and search

### Detailed Syllabus
- **URL**: `/exam-patterns/:companyId`
- **Component**: `DetailedSyllabus`
- **Description**: Shows detailed syllabus for a specific company

## 📋 Data Structure

### ExamPattern Interface
```typescript
interface ExamPattern {
  companyId: string;
  companyName: string;
  examName: string;
  year: number;
  platform: string;
  totalDuration: string;
  totalQuestions: number;
  sections: ExamSection[];
  eligibility: string[];
  importantDates?: string[];
  selectionProcess: string[];
  preparationTips: string[];
}
```

### ExamSection Interface
```typescript
interface ExamSection {
  name: string;
  duration: string;
  questions: number;
  topics: string[];
  difficulty: string;
  description: string;
}
```

## 🎨 UI Components

### ExamPatternDisplay
- **Search Functionality**: Search by company name or exam name
- **Difficulty Filter**: Filter by difficulty level
- **Statistics Cards**: Quick overview of total companies, exams, sections
- **Responsive Grid**: Card-based layout for exam patterns
- **Interactive Elements**: Hover effects and action buttons

### DetailedSyllabus
- **Comprehensive Layout**: Detailed view with sidebar
- **Section Breakdown**: Detailed exam section information
- **Process Flow**: Step-by-step selection process
- **Preparation Tips**: Expert preparation advice
- **Quick Actions**: Download, mock test, and other actions

## 🔧 Customization

### Adding New Companies
1. Add new company data to `CompanyExamPatterns2025.ts`
2. Follow the existing structure and format
3. Include all required fields (sections, eligibility, etc.)

### Styling Customization
- Company colors are defined in `getCompanyColor()` function
- Difficulty colors are defined in `getDifficultyColor()` function
- Modify these functions to change color schemes

### Component Customization
- All components use shadcn/ui components
- Styling is done with Tailwind CSS
- Icons are from Lucide React

## 📱 Responsive Design

- **Mobile**: Single column layout with stacked cards
- **Tablet**: Two-column grid layout
- **Desktop**: Three-column grid with detailed sidebar

## 🎯 Key Features

### Search & Filter
- Real-time search across company names and exam names
- Difficulty-based filtering
- Company-specific filtering

### Statistics Dashboard
- Total companies count
- Total exams count
- Total sections count
- Year indicator

### Interactive Elements
- Hover effects on cards
- Action buttons for detailed views
- Navigation between overview and detailed views

## 🔄 State Management

- Uses React hooks for local state management
- URL-based routing for navigation
- Memoized filtering for performance

## 📈 Performance

- Memoized filtering with `useMemo`
- Lazy loading of detailed components
- Optimized re-renders with proper dependency arrays

## 🛠️ Development

### File Structure
```
src/components/exam_pattern/
├── CompanyExamPatterns2025.ts    # Data and interfaces
├── ExamPatternDisplay.tsx        # Overview component
├── DetailedSyllabus.tsx         # Detailed view component
├── index.ts                     # Exports
└── README.md                    # Documentation
```

### Adding New Features
1. Update the data structure in `CompanyExamPatterns2025.ts`
2. Modify components to handle new data
3. Update TypeScript interfaces if needed
4. Test with different screen sizes

## 🎨 Design System

### Color Scheme
- **Company Colors**: Each company has a unique color scheme
- **Difficulty Colors**: Red (Very High), Orange (High), Yellow (Medium), Green (Low)
- **Status Colors**: Blue (info), Green (success), Red (error)

### Typography
- **Headings**: Large, bold text for main titles
- **Body**: Regular text for descriptions
- **Captions**: Small text for metadata

### Spacing
- Consistent spacing using Tailwind's spacing scale
- Responsive padding and margins
- Proper grid gaps for layout

## 📚 Future Enhancements

### Planned Features
- **PDF Export**: Download syllabus as PDF
- **Mock Test Integration**: Direct links to mock tests
- **Progress Tracking**: Track preparation progress
- **Notifications**: Important date reminders
- **Comparison Tool**: Compare multiple companies

### Data Updates
- **Real-time Updates**: API integration for live data
- **User Contributions**: Allow users to suggest updates
- **Historical Data**: Track changes over time

## 🤝 Contributing

### Adding New Companies
1. Research the company's latest exam pattern
2. Follow the existing data structure
3. Include all required fields
4. Test the component rendering

### Updating Existing Data
1. Verify information from official sources
2. Update the data file
3. Test the changes
4. Update documentation if needed

## 📞 Support

For questions or issues:
1. Check the component documentation
2. Review the data structure
3. Test with different companies
4. Verify routing functionality

---

**Last Updated**: 2025
**Version**: 1.0.0
**Status**: Production Ready 