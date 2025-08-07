// Test file to verify TCS NQT exam functionality
import { tcsNqtQuestions } from './data/tcsNqtQuestions';

console.log('=== TCS NQT Question Distribution Test ===');

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

console.log('\nQuestion Distribution by Section:');
Object.entries(sectionCounts).forEach(([sectionId, count]) => {
  console.log(`${sectionId}: ${count} questions`);
});

console.log('\nExpected Distribution:');
console.log('numerical-ability: 20 questions');
console.log('verbal-ability: 25 questions');
console.log('reasoning-ability: 20 questions');
console.log('advanced-quants-logical: 15 questions');

console.log('\nTotal Questions:', tcsNqtQuestions.length);
console.log('Expected Total: 80 questions');

// Check for any questions with wrong sectionId
console.log('\n=== Section ID Validation ===');
const validSectionIds = ['numerical-ability', 'verbal-ability', 'reasoning-ability', 'advanced-quants-logical'];
const invalidQuestions = tcsNqtQuestions.filter(q => !validSectionIds.includes(q.sectionId));

if (invalidQuestions.length > 0) {
  console.log('❌ Found questions with invalid sectionId:');
  invalidQuestions.forEach(q => {
    console.log(`  - ${q.id}: sectionId = "${q.sectionId}"`);
  });
} else {
  console.log('✅ All questions have valid sectionId');
}

// Check for mixed topics in sections
console.log('\n=== Topic Validation ===');
Object.entries(sectionQuestions).forEach(([sectionId, questions]) => {
  const topics = [...new Set(questions.map(q => q.topic))];
  console.log(`${sectionId}:`);
  console.log(`  Questions: ${questions.length}`);
  console.log(`  Topics: ${topics.join(', ')}`);
  
  // Check if topics match section
  const expectedTopic = sectionId === 'advanced-quants-logical' ? 'Advanced Quantitative' : 
                       sectionId === 'numerical-ability' ? 'Numerical Ability' :
                       sectionId === 'verbal-ability' ? 'Verbal Ability' :
                       sectionId === 'reasoning-ability' ? 'Reasoning Ability' : '';
  
  const hasWrongTopics = topics.some(topic => topic !== expectedTopic);
  if (hasWrongTopics) {
    console.log(`  ❌ Mixed topics found: ${topics.join(', ')}`);
  } else {
    console.log(`  ✅ All topics match section: ${expectedTopic}`);
  }
}); 