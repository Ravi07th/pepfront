import { VerbalQuestion } from "../types";

export const tenseSubjectVerbAgreementQuestions: VerbalQuestion[] = [
  {
    id: 'tsv-1',
    topicId: 'tense-subject-verb-agreement',
    question: "Choose the correct form: The children _____ in the park.",
    options: ['plays', 'play', 'playing', 'played'],
    correctAnswer: 1,
    explanation: "Plural subject 'children' requires plural verb 'play'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-2',
    topicId: 'tense-subject-verb-agreement',
    question: "Select the correct tense: She _____ to the store yesterday.",
    options: ['go', 'goes', 'went', 'going'],
    correctAnswer: 2,
    explanation: "Past time 'yesterday' requires past tense 'went'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-3',
    topicId: 'tense-subject-verb-agreement',
    question: "Choose the correct form: Each of the students _____ a book.",
    options: ['have', 'has', 'having', 'had'],
    correctAnswer: 1,
    explanation: "'Each' is singular and requires singular verb 'has'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-4',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in the blank: Either of the answers _____ correct.',
    options: ['is', 'are', 'was', 'be'],
    correctAnswer: 0,
    explanation: "'Either' takes a singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-5',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose the correct form: The committee _____ meeting right now.',
    options: ['is', 'are', 'has', 'have'],
    correctAnswer: 0,
    explanation: "Collective noun used as a unit takes singular verb: 'is meeting'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-6',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select the correct verb: Physics _____ interesting.',
    options: ['is', 'are', 'has', 'was'],
    correctAnswer: 0,
    explanation: "Subject names like 'Physics' take singular verb when treated as a field of study.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-7',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose the correct verb: The data _____ inconclusive.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "Formal usage treats 'data' as plural: 'are'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-8',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: A number of students _____ absent today.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "'A number of' takes plural verb: 'are'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-9',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: The number of students _____ increasing.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "'The number of' takes singular verb: 'is increasing'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-10',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose the verb: Neither the teacher nor the students _____ ready.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "With 'neither...nor', the verb agrees with the nearest subject 'students' (plural).",
    difficulty: 'medium'
  },
  {
    id: 'tsv-11',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select the correct form: Bread and butter _____ my favorite breakfast.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "As a single dish, the compound subject takes singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-12',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: More than one student _____ late.',
    options: ['were', 'are', 'was', 'have been'],
    correctAnswer: 2,
    explanation: "'More than one' takes singular verb: 'was'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-13',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: Many a man _____ tried and failed.',
    options: ['have', 'has', 'are', 'was'],
    correctAnswer: 1,
    explanation: "'Many a' takes singular verb: 'has tried'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-14',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: Ten dollars _____ a small amount.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "Amounts of money used as a unit take singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-15',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: Twenty miles _____ a long distance to run.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "Distances as a unit take singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-16',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: Each of the players _____ awarded a medal.',
    options: ['were', 'are', 'was', 'have been'],
    correctAnswer: 2,
    explanation: "'Each' takes singular verb: 'was awarded'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-17',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: None of the information _____ useful.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: "'Information' is uncountable; use singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-18',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: None of the players _____ available.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 1,
    explanation: "With countable plural, 'none' commonly takes plural verb: 'are'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-19',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: There _____ a pen and two books on the table.',
    options: ['is', 'are', 'has', 'have'],
    correctAnswer: 1,
    explanation: "Verb agrees with the real subject 'a pen and two books' (plural): 'are'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-20',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: There _____ a cat under the table.',
    options: ['is', 'are', 'has', 'were'],
    correctAnswer: 0,
    explanation: "Singular subject requires 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-21',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: Here _____ the keys you lost.',
    options: ['is', 'are', 'comes', 'has'],
    correctAnswer: 1,
    explanation: "Verb agrees with plural 'keys': 'are'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-22',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: A pair of trousers _____ on the chair.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "'A pair of' makes the subject singular: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-23',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: Trousers _____ too tight.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "'Trousers' is plural in form: 'are'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-24',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: The police _____ investigating the case.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "'Police' is plural in usage: 'are investigating'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-25',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: The jury _____ divided in their opinion.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "When acting as individuals, collective nouns take plural verb: 'are divided'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-26',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: The team _____ playing well today.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "Team as a unit takes singular: 'is playing'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-27',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: Either my parents or my brother _____ coming.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: "Agree with the nearer subject 'brother' (singular): 'is'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-28',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: Either my brother or my parents _____ coming.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 1,
    explanation: "Agree with the nearer subject 'parents' (plural): 'are'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-29',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: Time and tide _____ for no man.',
    options: ['wait', 'waits', 'has waited', 'is waiting'],
    correctAnswer: 0,
    explanation: "Compound plural subject takes plural verb: 'wait'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-30',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: Rice and curry _____ served for lunch.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "As a single dish, the combination takes singular: 'is served'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-31',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: One of the students _____ absent.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "'One of' + plural noun takes singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-32',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: One of the students who _____ absent is Rahul.',
    options: ['is', 'are', 'has', 'was'],
    correctAnswer: 1,
    explanation: "Relative clause 'who' refers to 'students' (plural): 'who are absent'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-33',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: This is one of the best books that _____ ever been written.',
    options: ['has', 'have', 'is', 'was'],
    correctAnswer: 1,
    explanation: "'That' refers to 'books' (plural): 'have been written'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-34',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: The quality of the goods _____ improved.',
    options: ['have', 'has', 'are', 'is'],
    correctAnswer: 1,
    explanation: "Head noun 'quality' is singular: 'has improved'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-35',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: The goods _____ in transit.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "'Goods' is plural in usage: 'are'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-36',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: More than one question _____ left unanswered.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "'More than one' takes singular verb: 'is'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-37',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: No news _____ good news.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "'News' is singular in form here: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-38',
    topicId: 'tense-subject-verb-agreement',
    question: 'Select: The news _____ confirmed yesterday.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 2,
    explanation: "Past singular: 'was confirmed'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-39',
    topicId: 'tense-subject-verb-agreement',
    question: 'Fill in: His trousers _____ torn.',
    options: ['is', 'are', 'was', 'has been'],
    correctAnswer: 1,
    explanation: "'Trousers' takes plural verb: 'are torn'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-40',
    topicId: 'tense-subject-verb-agreement',
    question: 'Choose: Mathematics _____ one of her strengths.',
    options: ['is', 'are', 'were', 'have been'],
    correctAnswer: 0,
    explanation: "Academic subjects take singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-41',
    topicId: 'tense-subject-verb-agreement',
    question: 'When she _____, we will start dinner.',
    options: ['arrives', 'will arrive', 'arrived', 'has arrived'],
    correctAnswer: 0,
    explanation: "Use present simple in time clauses for future reference: 'arrives'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-42',
    topicId: 'tense-subject-verb-agreement',
    question: 'If it _____ tomorrow, the match will be canceled.',
    options: ['rains', 'will rain', 'rained', 'has rained'],
    correctAnswer: 0,
    explanation: "First conditional: present simple in if-clause: 'rains'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-43',
    topicId: 'tense-subject-verb-agreement',
    question: 'If I _____ rich, I would travel the world.',
    options: ['were', 'was', 'am', 'had been'],
    correctAnswer: 0,
    explanation: "Second conditional uses past subjunctive 'were' with 'I'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-44',
    topicId: 'tense-subject-verb-agreement',
    question: 'If they _____ earlier, they would have caught the train.',
    options: ['had left', 'left', 'have left', 'were leaving'],
    correctAnswer: 0,
    explanation: "Third conditional: 'had left'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-45',
    topicId: 'tense-subject-verb-agreement',
    question: 'I _____ here since 2019.',
    options: ['live', 'am living', 'have lived', 'had lived'],
    correctAnswer: 2,
    explanation: "Use present perfect with 'since': 'have lived'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-46',
    topicId: 'tense-subject-verb-agreement',
    question: 'She _____ for two hours.',
    options: ['studied', 'has studied', 'has been studying', 'had been studying'],
    correctAnswer: 2,
    explanation: "Ongoing duration up to now: present perfect continuous 'has been studying'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-47',
    topicId: 'tense-subject-verb-agreement',
    question: 'By the time we arrived, the film _____.',
    options: ['had started', 'started', 'has started', 'was starting'],
    correctAnswer: 0,
    explanation: "Past perfect for action completed before another past action.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-48',
    topicId: 'tense-subject-verb-agreement',
    question: 'By next July, I _____ my degree.',
    options: ['will have completed', 'will complete', 'complete', 'completed'],
    correctAnswer: 0,
    explanation: "Future perfect: 'will have completed'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-49',
    topicId: 'tense-subject-verb-agreement',
    question: 'He _____ to smoke, but he quit last year.',
    options: ['used', 'use', 'is used', 'was used'],
    correctAnswer: 0,
    explanation: "Habit in the past: 'used to smoke' (use base 'used').",
    difficulty: 'easy'
  },
  {
    id: 'tsv-50',
    topicId: 'tense-subject-verb-agreement',
    question: 'It is high time we _____.',
    options: ['left', 'leave', 'had left', 'have left'],
    correctAnswer: 0,
    explanation: "After 'It is high time', use past simple: 'left'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-51',
    topicId: 'tense-subject-verb-agreement',
    question: 'I suggest that he _____ earlier.',
    options: ['leaves', 'leave', 'left', 'has left'],
    correctAnswer: 1,
    explanation: "Subjunctive after 'suggest' uses base form: 'leave'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-52',
    topicId: 'tense-subject-verb-agreement',
    question: 'She insisted that he _____ there on time.',
    options: ['is', 'was', 'be', 'being'],
    correctAnswer: 2,
    explanation: "Mandative subjunctive uses base 'be'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-53',
    topicId: 'tense-subject-verb-agreement',
    question: 'If only I _____ more careful!',
    options: ['had been', 'were', 'was', 'have been'],
    correctAnswer: 0,
    explanation: "Expressing regret about past: 'had been'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-54',
    topicId: 'tense-subject-verb-agreement',
    question: 'I wish I _____ taller.',
    options: ['were', 'was', 'am', 'had been'],
    correctAnswer: 0,
    explanation: "Unreal present: use 'were' with all persons.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-55',
    topicId: 'tense-subject-verb-agreement',
    question: 'He said he _____ the letter the previous day.',
    options: ['had posted', 'posted', 'has posted', 'was posting'],
    correctAnswer: 0,
    explanation: "Backshift in reported speech: past perfect 'had posted'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-56',
    topicId: 'tense-subject-verb-agreement',
    question: 'She said she _____ busy the next day.',
    options: ['will be', 'was', 'would be', 'is'],
    correctAnswer: 2,
    explanation: "Future in the past in reported speech: 'would be'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-57',
    topicId: 'tense-subject-verb-agreement',
    question: 'Neither of the options _____ suitable.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 0,
    explanation: "Standard exam rule: 'neither' takes singular verb: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'tsv-58',
    topicId: 'tense-subject-verb-agreement',
    question: 'Either of these roads _____ to the station.',
    options: ['lead', 'leads', 'is leading', 'have led'],
    correctAnswer: 1,
    explanation: "'Either' with singular noun takes singular verb: 'leads'.",
    difficulty: 'medium'
  },
  {
    id: 'tsv-59',
    topicId: 'tense-subject-verb-agreement',
    question: 'Ten percent of the students _____ absent.',
    options: ['is', 'are', 'was', 'were'],
    correctAnswer: 1,
    explanation: "Percentage of a plural count noun takes plural verb: 'are'.",
    difficulty: 'hard'
  },
  {
    id: 'tsv-60',
    topicId: 'tense-subject-verb-agreement',
    question: 'Ten percent of the water _____ evaporated.',
    options: ['have', 'has', 'are', 'were'],
    correctAnswer: 1,
    explanation: "Uncountable noun 'water' takes singular verb: 'has'.",
    difficulty: 'medium'
  }
];
