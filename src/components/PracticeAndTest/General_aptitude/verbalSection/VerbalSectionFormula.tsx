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
    'spotting-error': [
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
    'idioms-phrases': [
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
    'tenses-subject-verb-agreement': [
      {
        title: 'Verb Tenses',
        description: 'Understanding and using correct verb tenses.',
        examples: [
          'Present Simple: for habits, facts, and general truths',
          'Present Continuous: for actions happening now',
          'Past Simple: for completed actions in the past',
          'Past Continuous: for actions in progress in the past',
          'Present Perfect: for actions completed recently or with present relevance',
          'Future Simple: for predictions and planned actions'
        ]
      },
      {
        title: 'Subject-Verb Agreement',
        description: 'Ensuring verbs match their subjects in number and person.',
        examples: [
          'Singular subjects take singular verbs (he runs)',
          'Plural subjects take plural verbs (they run)',
          'Collective nouns can be singular or plural depending on context',
          'Compound subjects joined by "and" take plural verbs',
          'Compound subjects joined by "or" or "nor" match the nearest subject'
        ]
      },
      {
        title: 'Common Agreement Errors',
        description: 'Frequent mistakes to avoid in subject-verb agreement.',
        examples: [
          'Intervening phrases don\'t affect agreement (The book on the table is mine)',
          'Indefinite pronouns like "everyone" take singular verbs',
          'Fractions and percentages agree with the noun they modify',
          'Titles and names take singular verbs even if they end in -s'
        ]
      }
    ],
    'active-passive-voice': [
      {
        title: 'Active Voice',
        description: 'When the subject performs the action.',
        examples: [
          'The cat chased the mouse (subject: cat, action: chased)',
          'She wrote the letter (subject: she, action: wrote)',
          'They built the house (subject: they, action: built)',
          'Active voice is usually more direct and engaging'
        ]
      },
      {
        title: 'Passive Voice',
        description: 'When the subject receives the action.',
        examples: [
          'The mouse was chased by the cat (subject: mouse, receives action)',
          'The letter was written by her (subject: letter, receives action)',
          'The house was built by them (subject: house, receives action)',
          'Passive voice emphasizes the result rather than the doer'
        ]
      },
      {
        title: 'When to Use Each',
        description: 'Choosing between active and passive voice.',
        examples: [
          'Use active voice for clarity and directness',
          'Use passive voice when the doer is unknown or unimportant',
          'Use passive voice in scientific writing to emphasize results',
          'Avoid passive voice when you want to emphasize who did the action'
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
      'tenses-subject-verb-agreement': 'Tenses, Subject and Verb Agreement',
      'spotting-error': 'Spotting Error',
      'para-jumbles': 'Para Jumbles',
      'idioms-phrases': 'Idioms and Phrases',
      'sentence-completion': 'Sentence Completion',
      'active-passive-voice': 'Active and Passive Voice'
    };
    
    return topicMap[topic] || 'Verbal Topic';
  };

  const getTopicIcon = (topic: string): React.ReactNode => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'reading-comprehension': <BookOpen className="text-blue-600" />,
      'tenses-subject-verb-agreement': <Link className="text-green-600" />,
      'spotting-error': <CheckCircle className="text-purple-600" />,
      'para-jumbles': <Puzzle className="text-orange-600" />,
      'idioms-phrases': <MessageSquare className="text-red-600" />,
      'sentence-completion': <FileText className="text-indigo-600" />,
      'active-passive-voice': <BookMarked className="text-teal-600" />
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