# MNC Exam Platform

A comprehensive mock test platform for multinational company (MNC) recruitment exams, built with React and TypeScript.

## Features

### 🏢 Supported Companies
- **TCS (Tata Consultancy Services)**
  - TCS NQT (National Qualifier Test)
  - TCS Digital

- **Cognizant**
  - Cognizant GenC (GenC)
  - Cognizant GenC Elevate

### 🎯 Key Features
- **Company Selection**: Choose from multiple MNCs and their exam types
- **Realistic Exam Interface**: Full-screen exam mode with timer
- **Question Navigation**: Easy navigation between questions with status indicators
- **Mark for Review**: Mark questions for later review
- **Comprehensive Results**: Detailed performance analysis with section-wise breakdown
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript Support**: Full type safety throughout the application
- **Descriptive URLs**: Clean, SEO-friendly routing with exam type IDs

### 📊 Exam Features
- **Timer**: Countdown timer with warnings
- **Question Status**: Visual indicators for answered, marked, and current questions
- **Progress Tracking**: Real-time progress updates
- **Section Management**: Multi-section exams with automatic progression
- **Results Analytics**: Detailed performance insights and analytics

## Routing System

The platform uses descriptive URLs that include both company and exam type identifiers:

### URL Structure
- **Main Selection**: `/mock-test`
- **Exam Instructions**: `/mock-test/{companyId}-{examTypeId}`
- **Active Exam**: `/mock-test/{companyId}-{examTypeId}/exam`

### Example URLs
- TCS NQT: `/mock-test/tcs-nqt`

- Cognizant GenC: `/mock-test/cognizant-genc`
- Microsoft Azure: `/mock-test/microsoft-azure-fundamentals`

### Navigation
- Quick navigation links in the header automatically include the first exam type for each company
- Direct URL access is supported for all exam types
- Backward compatibility maintained with legacy `/mnc` route

## Installation & Usage

### Basic Integration

```tsx
import { MNCExamPlatform } from './components/MNCExam';

function App() {
  return (
    <div className="App">
      <MNCExamPlatform />
    </div>
  );
}
```

### With Navigation

```tsx
import { MNCExamPlatform } from './components/MNCExam';

function App() {
  const [showExam, setShowExam] = useState(false);

  return (
    <div className="App">
      {showExam ? (
        <MNCExamPlatform onBackToMain={() => setShowExam(false)} />
      ) : (
        <button onClick={() => setShowExam(true)}>
          Start MNC Mock Tests
        </button>
      )}
    </div>
  );
}
```

## Component Structure

```
MNCExam/
├── types.ts                    # TypeScript interfaces
├── data/
│   ├── companies.ts           # Company and exam type definitions
│   └── questions.ts           # Question bank for all exams
├── MNCExamPlatform.tsx        # Main orchestrator component
├── MNCExamSelection.tsx       # Company selection with routing
├── MNCExamInstructions.tsx    # Instructions with routing
├── MNCExamInterface.tsx       # Exam interface with routing
├── MNCExamNavigation.tsx      # Navigation with descriptive links
├── CompanySelection.tsx        # Company and exam type selection
├── ExamInstructions.tsx        # Pre-exam instructions
├── ExamInterface.tsx          # Main exam interface
├── QuestionPanel.tsx          # Question display and navigation
├── Timer.tsx                  # Countdown timer component
├── ResultsPage.tsx            # Post-exam results and analytics
└── index.ts                   # Export file
```

## Data Structure

### Company Configuration
```typescript
interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  color: string;
  examTypes: ExamType[];
}
```

### Exam Type Configuration
```typescript
interface ExamType {
  id: string;
  name: string;
  description: string;
  sections: ExamSection[];
}
```

### Question Structure
```typescript
interface Question {
  id: string;
  sectionId: string;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation?: string;
  questionType: 'single-choice' | 'multiple-choice' | 'true-false' | 'drag-drop';
  dragDropItems?: string[];
}
```

## Customization

### Adding New Companies

1. Add company data to `data/companies.ts`:
```typescript
{
  id: 'new-company',
  name: 'New Company',
  logo: '/images/new-company.png',
  description: 'Company description',
  color: '#FF0000',
  examTypes: [
    {
      id: 'exam-type',
      name: 'Exam Name',
      description: 'Exam description',
      sections: [
        {
          id: 'section-1',
          name: 'Section Name',
          description: 'Section description',
          questionCount: 25,
          duration: 60,
          topics: ['Topic 1', 'Topic 2']
        }
      ]
    }
  ]
}
```

2. Add questions to `data/questions.ts`:
```typescript
export const newCompanyQuestions: Question[] = [
  {
    id: 'question-1',
    sectionId: 'section-1',
    question: 'Your question here?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 0,
    explanation: 'Explanation for the answer',
    questionType: 'single-choice'
  }
];
```

3. Update the `getQuestionsByCompanyAndExam` function:
```typescript
case 'new-company-exam-type':
  return newCompanyQuestions;
```

### Styling Customization

The platform uses Tailwind CSS for styling. You can customize:

- Company colors in `data/companies.ts`
- Component styling in individual component files
- Global styles in your main CSS file

### Adding New Features

The modular structure makes it easy to add new features:

1. **New Question Types**: Extend the `Question` interface
2. **Additional Analytics**: Modify `ResultsPage.tsx`
3. **Custom Timers**: Update `Timer.tsx`
4. **New Navigation**: Enhance `QuestionPanel.tsx`

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

- Questions are loaded dynamically based on company/exam selection
- Timer updates every second (can be optimized if needed)
- Large question banks should be paginated or lazy-loaded
- Images are optimized with fallback placeholders

## Security Features

- Fullscreen mode for exam integrity
- No browser back button during exam
- Timer-based auto-submission
- Progress saving (can be extended to localStorage)

## Contributing

1. Follow the existing TypeScript patterns
2. Add proper type definitions for new features
3. Maintain responsive design principles
4. Test across different screen sizes
5. Add comprehensive error handling

## License

This project is part of the student test platform and follows the same licensing terms. 