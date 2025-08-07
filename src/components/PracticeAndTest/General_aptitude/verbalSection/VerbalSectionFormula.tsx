import React from 'react';
import { BookOpen, Link, CheckCircle, Puzzle, MessageSquare, FileText, BookMarked } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import FormulaPage from '../common/FormulaPage';

interface Formula {
  title: string;
  description: string;
  examples: string[];
}

interface TopicFormulas {
  [key: string]: Formula[];
}

const VerbalSectionFormula: React.FC = () => {
  const navigate = useNavigate();

  const formulas: TopicFormulas = {
    'reading-comprehension': [
      {
        title: 'Skimming and Scanning',
        description: 'Quick reading techniques to find main ideas and specific information.',
        examples: [
          'Read the first and last sentences of each paragraph for main ideas',
          'Look for keywords and phrases that answer specific questions',
          'Pay attention to topic sentences and concluding statements',
          'Use context clues to understand unfamiliar words'
        ]
      },
      {
        title: 'Main Idea Identification',
        description: 'Techniques to identify the central theme or main point of a passage.',
        examples: [
          'Look for repeated words or concepts throughout the passage',
          'Identify the author\'s purpose and tone',
          'Find the thesis statement or topic sentence',
          'Consider what the passage is trying to convey overall'
        ]
      },
      {
        title: 'Inference and Deduction',
        description: 'Drawing conclusions based on information provided in the text.',
        examples: [
          'Use evidence from the text to support your conclusions',
          'Consider what is implied but not directly stated',
          'Look for cause-and-effect relationships',
          'Pay attention to author\'s tone and word choice'
        ]
      }
    ],
    'sentence-completion': [
      {
        title: 'Context Clues',
        description: 'Using surrounding words to understand the meaning of unknown words.',
        examples: [
          'Look for synonyms or antonyms in the sentence',
          'Use the overall context to determine word meaning',
          'Consider the tone and style of the passage',
          'Identify grammatical patterns and structures'
        ]
      },
      {
        title: 'Logical Flow',
        description: 'Understanding how sentences connect and flow logically.',
        examples: [
          'Look for transition words (however, therefore, moreover)',
          'Identify cause-and-effect relationships',
          'Consider the chronological order of events',
          'Pay attention to parallel structure and consistency'
        ]
      },
      {
        title: 'Grammar and Syntax',
        description: 'Understanding sentence structure and grammatical rules.',
        examples: [
          'Ensure subject-verb agreement',
          'Check for proper tense consistency',
          'Look for parallel structure in lists',
          'Verify pronoun-antecedent agreement'
        ]
      }
    ],
    'error-identification': [
      {
        title: 'Common Grammar Errors',
        description: 'Identifying and correcting frequent grammatical mistakes.',
        examples: [
          'Subject-verb agreement errors',
          'Incorrect verb tense usage',
          'Misplaced modifiers and dangling participles',
          'Incorrect pronoun usage and reference'
        ]
      },
      {
        title: 'Punctuation Rules',
        description: 'Understanding proper punctuation usage in sentences.',
        examples: [
          'Comma usage for lists and clauses',
          'Semicolon and colon usage',
          'Apostrophe placement for possessives',
          'Quotation mark rules for dialogue'
        ]
      },
      {
        title: 'Word Choice and Usage',
        description: 'Selecting appropriate words and avoiding common usage errors.',
        examples: [
          'Confusing similar words (affect/effect, their/there)',
          'Using the correct form of words (advice/advise)',
          'Avoiding redundancy and wordiness',
          'Choosing precise and clear language'
        ]
      }
    ],
    'para-jumbles': [
      {
        title: 'Logical Sequence',
        description: 'Arranging sentences in a logical and coherent order.',
        examples: [
          'Look for topic sentences that introduce main ideas',
          'Identify supporting details that follow main points',
          'Find concluding sentences that summarize or wrap up',
          'Consider chronological order for time-based events'
        ]
      },
      {
        title: 'Transition Words',
        description: 'Using connecting words to show relationships between sentences.',
        examples: [
          'First, second, third for sequential order',
          'However, moreover, furthermore for contrast/addition',
          'Therefore, thus, consequently for cause and effect',
          'In conclusion, finally, to summarize for endings'
        ]
      },
      {
        title: 'Context and Coherence',
        description: 'Ensuring sentences flow naturally and maintain meaning.',
        examples: [
          'Check that pronouns have clear antecedents',
          'Ensure consistent tense and voice throughout',
          'Look for repeated keywords that connect ideas',
          'Verify that each sentence builds on the previous one'
        ]
      }
    ],
    'vocabulary': [
      {
        title: 'Context Clues',
        description: 'Using surrounding information to understand word meanings.',
        examples: [
          'Look for definitions within the sentence',
          'Identify synonyms or antonyms nearby',
          'Use examples or illustrations provided',
          'Consider the overall tone and context'
        ]
      },
      {
        title: 'Word Roots and Affixes',
        description: 'Understanding word parts to determine meanings.',
        examples: [
          'Learn common prefixes (un-, re-, pre-, anti-)',
          'Study suffixes (-tion, -ment, -able, -ous)',
          'Recognize Greek and Latin roots',
          'Understand how affixes change word meaning'
        ]
      },
      {
        title: 'Synonyms and Antonyms',
        description: 'Using word relationships to expand vocabulary.',
        examples: [
          'Learn word families and related terms',
          'Study opposite meanings for contrast',
          'Understand subtle differences between similar words',
          'Practice using words in different contexts'
        ]
      }
    ],
    'sentence-improvement': [
      {
        title: 'Clarity and Conciseness',
        description: 'Making sentences clear, concise, and effective.',
        examples: [
          'Eliminate unnecessary words and redundancy',
          'Use active voice instead of passive voice',
          'Choose specific words over vague ones',
          'Break up long, complex sentences'
        ]
      },
      {
        title: 'Parallel Structure',
        description: 'Maintaining consistent grammatical structure in lists.',
        examples: [
          'Use the same grammatical form for all items',
          'Ensure consistent verb tense throughout',
          'Match parts of speech in parallel elements',
          'Maintain logical order and flow'
        ]
      },
      {
        title: 'Modifier Placement',
        description: 'Positioning descriptive words and phrases correctly.',
        examples: [
          'Place modifiers close to the words they describe',
          'Avoid dangling and misplaced modifiers',
          'Ensure modifiers clearly refer to intended words',
          'Use commas to set off nonessential modifiers'
        ]
      }
    ],
    'grammar-usage': [
      {
        title: 'Parts of Speech',
        description: 'Understanding the function of different word types.',
        examples: [
          'Nouns: names of people, places, things, ideas',
          'Verbs: actions, states of being, helping verbs',
          'Adjectives: describe nouns and pronouns',
          'Adverbs: modify verbs, adjectives, other adverbs'
        ]
      },
      {
        title: 'Sentence Structure',
        description: 'Understanding how sentences are constructed.',
        examples: [
          'Simple sentences: one independent clause',
          'Compound sentences: two independent clauses joined',
          'Complex sentences: independent + dependent clause',
          'Compound-complex: multiple clauses of both types'
        ]
      },
      {
        title: 'Agreement Rules',
        description: 'Ensuring grammatical consistency in sentences.',
        examples: [
          'Subject-verb agreement in number and person',
          'Pronoun-antecedent agreement in number and gender',
          'Tense consistency throughout the sentence',
          'Voice consistency (active or passive)'
        ]
      }
    ]
  };

  const getTopicTitle = (topic: string): string => {
    const topicMap: { [key: string]: string } = {
      'reading-comprehension': 'Reading Comprehension',
      'sentence-completion': 'Sentence Completion',
      'error-identification': 'Error Identification & Correction',
      'para-jumbles': 'Para Jumbles',
      'vocabulary': 'Vocabulary-based Questions',
      'sentence-improvement': 'Sentence Improvement',
      'grammar-usage': 'Grammar Usage'
    };
    
    return topicMap[topic] || 'Verbal Topic';
  };

  const getTopicIcon = (topic: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'reading-comprehension': <BookOpen className="text-blue-600" />,
      'sentence-completion': <Link className="text-green-600" />,
      'error-identification': <CheckCircle className="text-purple-600" />,
      'para-jumbles': <Puzzle className="text-orange-600" />,
      'vocabulary': <MessageSquare className="text-red-600" />,
      'sentence-improvement': <FileText className="text-indigo-600" />,
      'grammar-usage': <BookMarked className="text-teal-600" />
    };
    
    return iconMap[topic] || <BookOpen className="text-blue-600" />;
  };

  const handleStartPractice = (topic: string) => {
    navigate(`/verbal-ability/practice/${topic}`);
  };

  const handleGoBack = () => {
    navigate('/verbal-ability');
  };

  return (
    <FormulaPage
      formulas={formulas}
      getTopicTitle={getTopicTitle}
      getTopicIcon={getTopicIcon}
      onStartPractice={handleStartPractice}
      onGoBack={handleGoBack}
      sectionName="Verbal Ability"
    />
  );
};

export default VerbalSectionFormula; 