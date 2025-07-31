// trendingData.ts
import logo from "../assets/images/tcs.jpg";
export type TrendingExam = {
  id: string;
  title: string;
  description: string;
  logo: string;
};

export const trendingExams: TrendingExam[] = [
  {
    id: "tcs",
    title: "TCS NQT Mock Test",
    description: "Attempt the latest TCS NQT pattern mock exam under real conditions.",
    logo: logo, // replace with your actual TCS logo path or imported image
  },
  {
    id: "student",
    title: "Student Special Exam",
    description: "Take a comprehensive test built especially for college students, with personalized feedback.",
    logo: logo, // replace with your actual student logo path or imported image
  },
  {
    id: "wipro",
    title: "Wipro Placement Test",
    description: "Get ready for Wipro recruitment with authentic practice tests and exam environment.",
    logo: logo, // replace with your actual Wipro logo path or imported image
  },
];
