// Test file to verify TCS NQT exam functionality
import { tcsNqtQuestions } from './data/tcsNqtQuestions';


// Count questions by section
const sectionCounts: Record<string, number> = {};
const sectionQuestions: Record<string, any[]> = {};

tcsNqtQuestions.forEach(question => {
  const sectionId = question.sectionId;
  if (!sectionCounts[sectionId]) {
    sectionCounts[sectionId] = 0;
    sectionQuestions[sectionId] = [];
  }
  sectionCounts[sectionId]++;
  sectionQuestions[sectionId].push({
    id: question.id,
    questionText: question.question.substring(0, 50) + '...'
  });
});

Object.entries(sectionCounts).forEach(([sectionId, count]) => {
});

const validSectionIds = ['numerical-ability', 'verbal-ability', 'reasoning-ability', 'advanced-quants-logical'];
const invalidQuestions = tcsNqtQuestions.filter(q => !validSectionIds.includes(q.sectionId));

Object.entries(sectionQuestions).forEach(([sectionId, questions]) => {
  const topics = [...new Set(questions.map(q => q.topic))];
  
  // Check if topics match section
  const expectedTopic = sectionId === 'advanced-quants-logical' ? 'Advanced Quantitative' : 
                       sectionId === 'numerical-ability' ? 'Numerical Ability' :
                       sectionId === 'verbal-ability' ? 'Verbal Ability' :
                       sectionId === 'reasoning-ability' ? 'Reasoning Ability' : '';
  
  const hasWrongTopics = topics.some(topic => topic !== expectedTopic);
}); 