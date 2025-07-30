export interface Company {
  id: string;
  name: string;
  // link: string;
  fullName: string;
  type: string;
  logo?: string;
  primaryColor: string;
  sections: {
    overview: OverviewSection;
    syllabus: SyllabusSection;
    tests: TestSection;
  };
}

export interface OverviewSection {
  title: string;
  description: string;
  highlights: string[];
  examPattern: {
    platform?: string;
    duration?: string;
    rounds?: number;
    difficulty?: string;
  };
  eligibility: string[];
  keyPoints: string[];
}

export interface SyllabusSection {
  title: string;
  description: string;
  topics: SyllabusTopic[];
  preparation: string[];
}

export interface SyllabusTopic {
  section: string;
  duration?: string;
  topics: string[];
  difficulty?: string;
}

export interface TestSection {
  title: string;
  description: string;
  mockTests: MockTest[];
  practiceTests: PracticeTest[];
}

export interface MockTest {
  name: string;
  duration: string;
  questions: number;
  difficulty: string;
  topics: string[];
}

export interface PracticeTest {
  name: string;
  questions: number;
  topics: string[];
}

export interface NavigationItem {
  id: string;
  label: string;
  icon?: string;
  hasDropdown?: boolean;
  children?: NavigationItem[];
}