import { VerbalQuestion } from "../types";

export const activepassiveVoiceQuestions: VerbalQuestion[] = [
  {
    id: 'ap-1',
    topicId: 'active-passive-voice',
    question: "Change to passive voice: The teacher explained the lesson.",
    options: [
      'The lesson was explained by the teacher.',
      'The lesson explained by the teacher.',
      'The teacher was explained the lesson.',
      'The lesson is explained by the teacher.'
    ],
    correctAnswer: 0,
    explanation: "In passive voice, the object becomes the subject and 'was' + past participle is used.",
    difficulty: 'medium'
  },
  {
    id: 'ap-2',
    topicId: 'active-passive-voice',
    question: "Change to active voice: The book was written by the author.",
    options: [
      'The author wrote the book.',
      'The author was written the book.',
      'The book wrote the author.',
      'The author is writing the book.'
    ],
    correctAnswer: 0,
    explanation: "In active voice, the subject performs the action directly.",
    difficulty: 'easy'
  },
  {
    id: 'ap-3',
    topicId: 'active-passive-voice',
    question: "Identify the voice: The letter has been sent by John.",
    options: ['Active voice', 'Passive voice', 'Both', 'Neither'],
    correctAnswer: 1,
    explanation: "This is passive voice as the subject receives the action.",
    difficulty: 'medium'
  },{
    "id": "ap-4",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The chef prepared a delicious meal.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 0,
    "explanation": "This is active voice as the subject performs the action.",
    "difficulty": "easy"
},
{
    "id": "ap-5",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The report will be submitted by the manager.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 1,
    "explanation": "This is passive voice as the subject receives the action.",
    "difficulty": "easy"
},
{
    "id": "ap-6",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The students are solving difficult problems.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 0,
    "explanation": "This is active voice as the subject performs the action.",
    "difficulty": "easy"
},
{
    "id": "ap-7",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The novel was written by a famous author.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 1,
    "explanation": "This is passive voice as the subject receives the action.",
    "difficulty": "easy"
},
{
    "id": "ap-8",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The committee has approved the new policy.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 0,
    "explanation": "This is active voice as the subject performs the action.",
    "difficulty": "medium"
},
{
    "id": "ap-9",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The documents were being verified by the officer.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 1,
    "explanation": "This is passive voice as the subject receives the action.",
    "difficulty": "medium"
},
{
    "id": "ap-10",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The storm damaged several houses.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 0,
    "explanation": "This is active voice as the subject performs the action.",
    "difficulty": "easy"
},
{
    "id": "ap-11",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: All tickets had been sold before the concert.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 1,
    "explanation": "This is passive voice as the subject receives the action.",
    "difficulty": "medium"
},
{
    "id": "ap-12",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The teacher praised the students.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 0,
    "explanation": "This is active voice as the subject performs the action.",
    "difficulty": "easy"
},
{
    "id": "ap-13",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The decision will be announced tomorrow.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 1,
    "explanation": "This is passive voice as the subject receives the action.",
    "difficulty": "medium"
},
{
    "id": "ap-14",
    "topicId": "active-passive-voice",
    "question": "Identify the voice: The company launched a new product.",
    "options": ["Active voice", "Passive voice", "Both", "Neither"],
    "correctAnswer": 0,
    "explanation": "This is active voice as the subject performs the action.",
    "difficulty": "easy"
},

  {
    id: "ap-15",
    topicId: "active-passive-voice",
    question: "Choose the correct passive form: 'The chef prepared a delicious cake.'",
    options: [
      "The chef prepares a delicious cake.",          // Index 0 (Incorrect)
      "A delicious cake was prepared by the chef.",  // Index 1 (Correct)
      "The chef was prepared a delicious cake.",    // Index 2 (Incorrect)
      "A delicious cake is prepared by the chef."    // Index 3 (Incorrect)
    ],
    correctAnswer: 1,  // Correct option is now at index 1
    explanation: "Object ('a delicious cake') becomes subject. Verb changes to past participle + 'was'. Original subject follows 'by'.",
    difficulty: "medium"
  },
  {
    id: "ap-16",
    topicId: "active-passive-voice",
    question: "Convert to passive: 'They will announce the results tomorrow.'",
    options: [
      "The results are announced tomorrow.",       // Index 0 (Incorrect)
      "Tomorrow they will announce the results.",  // Index 1 (Incorrect)
      "The results will be announced tomorrow.",   // Index 2 (Correct)
      "The results will announce tomorrow."        // Index 3 (Incorrect)
    ],
    correctAnswer: 2,  // Correct option is now at index 2
    explanation: "Object ('the results') becomes subject. Future tense ('will announce') → 'will be announced'.",
    difficulty: "easy"
  },
  {
    id: "ap-16",
    topicId: "active-passive-voice",
    question: "Passive form of 'Someone stole my wallet.'",
    options: [
      "My wallet is stolen by someone.",          // Index 0 (Incorrect)
      "Someone was stolen my wallet.",            // Index 1 (Incorrect)
      "My wallet has been stolen by someone.",    // Index 2 (Incorrect)
      "My wallet was stolen by someone."          // Index 3 (Correct)
    ],
    correctAnswer: 3,  // Correct option is now at index 3
    explanation: "Object ('my wallet') becomes subject. Past indefinite ('stole') → 'was stolen'. Agent ('someone') is optional.",
    difficulty: "medium"
  },
  {
    id: "ap-17",
    topicId: "active-passive-voice",
    question: "Convert to passive: 'The students are performing a play.'",
    options: [
      "A play is being performed by the students.",  // Index 0 (Correct)
      "The students are being performed a play.",    // Index 1 (Incorrect)
      "A play was performed by the students.",       // Index 2 (Incorrect)
      "A play has been performed by the students."   // Index 3 (Incorrect)
    ],
    correctAnswer: 0,  // Correct option is now at index 0
    explanation: "Present continuous ('are performing') → 'is being performed'. Object ('a play') becomes subject.",
    difficulty: "medium"
  },
  {
    id: "ap-18",
    topicId: "active-passive-voice",
    question: "Passive form of 'The storm damaged several houses.'",
    options: [
      "Several houses are damaged by the storm.",     // Index 0 (Incorrect)
      "The storm was damaged by several houses.",     // Index 1 (Incorrect)
      "Several houses were damaged by the storm.",    // Index 2 (Correct)
      "Several houses had been damaged by the storm." // Index 3 (Incorrect)
    ],
    correctAnswer: 2,  // Correct option is now at index 2
    explanation: "Past simple ('damaged') → 'were damaged'. Object ('several houses') becomes subject.",
    difficulty: "easy"
  },
  {
    id: "ap-19",
    topicId: "active-passive-voice",
    question: "Choose the passive voice: 'The company will launch a new product next month.'",
    options: [
      "The company will be launched a new product next month.",     // Index 0 (Incorrect)
      "Next month a new product will launch by the company.",       // Index 1 (Incorrect)
      "A new product is launched by the company next month.",       // Index 2 (Incorrect)
      "A new product will be launched by the company next month."   // Index 3 (Correct)
    ],
    correctAnswer: 3,  // Correct option is now at index 3
    explanation: "Future simple ('will launch') → 'will be launched'. Object ('a new product') becomes subject.",
    difficulty: "medium"
  },
  {
    id: "ap-20",
    topicId: "active-passive-voice",
    question: "Passive form of 'Someone has eaten the last cookie.'",
    options: [
      "Someone has been eaten the last cookie.",      // Index 0 (Incorrect)
      "The last cookie is eaten by someone.",          // Index 1 (Incorrect)
      "The last cookie has been eaten by someone.",    // Index 2 (Correct)
      "The last cookie was eaten by someone."          // Index 3 (Incorrect)
    ],
    correctAnswer: 2,  // Correct option is now at index 2
    explanation: "Present perfect ('has eaten') → 'has been eaten'. Agent ('someone') is optional.",
    difficulty: "hard"
  },
   
    {
      id: "ap-21",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'The teacher gave us homework.'",
      options: [
        "Homework was given to us by the teacher.",  // Index 0 (correct)
        "We were given homework by the teacher.",     // Index 1 (also correct)
        "The teacher was given homework by us.",      // Index 2 (incorrect)
        "Homework is given to us by the teacher."     // Index 3 (incorrect)
      ],
      correctAnswer: 0, // First correct variant
      explanation: "Direct object ('homework') becomes subject. Past simple ('gave') → 'was given'.",
      difficulty: "medium"
    },
    {
      id: "ap-22",
      topicId: "active-passive-voice",
      question: "Passive form of 'The dog chased the cat.'",
      options: [
        "The cat is chased by the dog.",              // Index 0 (incorrect)
        "The dog was chased by the cat.",             // Index 1 (incorrect)
        "The cat was chased by the dog.",             // Index 2 (correct)
        "The cat has been chased by the dog."         // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Past simple ('chased') → 'was chased'. Object ('the cat') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-23",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'They are building a new bridge.'",
      options: [
        "A new bridge was built by them.",            // Index 0 (incorrect)
        "They are being built a new bridge.",         // Index 1 (incorrect)
        "A new bridge is being built by them.",       // Index 2 (correct)
        "A new bridge has been built by them."        // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Present continuous ('are building') → 'is being built'. Object ('a new bridge') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-24",
      topicId: "active-passive-voice",
      question: "Passive form of 'The scientist discovered a new planet.'",
      options: [
        "A new planet is discovered by the scientist.",   // Index 0 (incorrect)
        "The scientist was discovered by a new planet.",  // Index 1 (incorrect)
        "A new planet had been discovered by the scientist.", // Index 2 (incorrect)
        "A new planet was discovered by the scientist."   // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Past simple ('discovered') → 'was discovered'. Object ('a new planet') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-25",
      topicId: "active-passive-voice",
      question: "Choose the passive voice: 'The manager will review all applications.'",
      options: [
        "All applications are reviewed by the manager.",      // Index 0 (incorrect)
        "The manager will be reviewed by all applications.",  // Index 1 (incorrect)
        "All applications have been reviewed by the manager.", // Index 2 (incorrect)
        "All applications will be reviewed by the manager."   // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Future simple ('will review') → 'will be reviewed'. Object ('all applications') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-26",
      topicId: "active-passive-voice",
      question: "Passive form of 'The children broke the window.'",
      options: [
        "The window is broken by the children.",      // Index 0 (incorrect)
        "The children were broken by the window.",    // Index 1 (incorrect)
        "The window had been broken by the children.", // Index 2 (incorrect)
        "The window was broken by the children."      // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Past simple ('broke') → 'was broken'. Object ('the window') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-27",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'The chef is cooking a special dish.'",
      options: [
        "A special dish was cooked by the chef.",     // Index 0 (incorrect)
        "The chef is being cooked a special dish.",   // Index 1 (incorrect)
        "A special dish has been cooked by the chef.", // Index 2 (incorrect)
        "A special dish is being cooked by the chef." // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Present continuous ('is cooking') → 'is being cooked'. Object ('a special dish') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-28",
      topicId: "active-passive-voice",
      question: "Passive form of 'The police arrested the suspect.'",
      options: [
        "The suspect is arrested by the police.",     // Index 0 (incorrect)
        "The police were arrested by the suspect.",   // Index 1 (incorrect)
        "The suspect had been arrested by the police.", // Index 2 (incorrect)
        "The suspect was arrested by the police."     // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Past simple ('arrested') → 'was arrested'. Object ('the suspect') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-29",
      topicId: "active-passive-voice",
      question: "Choose the passive voice: 'The team will complete the project by Friday.'",
      options: [
        "The project is completed by the team by Friday.",      // Index 0 (incorrect)
        "The team will be completed by the project by Friday.", // Index 1 (incorrect)
        "The project has been completed by the team by Friday.", // Index 2 (incorrect)
        "The project will be completed by the team by Friday." // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Future simple ('will complete') → 'will be completed'. Object ('the project') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-30",
      topicId: "active-passive-voice",
      question: "Passive form of 'The artist painted a beautiful portrait.'",
      options: [
        "A beautiful portrait is painted by the artist.",      // Index 0 (incorrect)
        "The artist was painted by a beautiful portrait.",     // Index 1 (incorrect)
        "A beautiful portrait had been painted by the artist.", // Index 2 (incorrect)
        "A beautiful portrait was painted by the artist."      // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Past simple ('painted') → 'was painted'. Object ('a beautiful portrait') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-31",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'The committee has approved the proposal.'",
      options: [
        "The proposal was approved by the committee.",      // Index 0 (incorrect)
        "The committee has been approved by the proposal.", // Index 1 (incorrect)
        "The proposal is approved by the committee.",      // Index 2 (incorrect)
        "The proposal has been approved by the committee." // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Present perfect ('has approved') → 'has been approved'. Object ('the proposal') becomes subject.",
      difficulty: "hard"
    },
    {
      id: "ap-32",
      topicId: "active-passive-voice",
      question: "Passive form of 'The storm will damage the crops.'",
      options: [
        "The crops are damaged by the storm.",        // Index 0 (incorrect)
        "The storm will be damaged by the crops.",    // Index 1 (incorrect)
        "The crops will be damaged by the storm.",    // Index 2 (correct)
        "The crops had been damaged by the storm."    // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Future simple ('will damage') → 'will be damaged'. Object ('the crops') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-33",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'Someone must finish this report today.'",
      options: [
        "This report must be finished by someone today.",  // Index 0 (correct)
        "Someone must be finished this report today.",     // Index 1 (incorrect)
        "This report is finished by someone today.",       // Index 2 (incorrect)
        "This report had to be finished by someone today." // Index 3 (incorrect)
      ],
      correctAnswer: 0,
      explanation: "Modal ('must finish') → 'must be finished'. Object ('this report') becomes subject.",
      difficulty: "hard"
    },
    {
      id: "ap-34",
      topicId: "active-passive-voice",
      question: "Passive form of 'The students have written the essays.'",
      options: [
        "The essays were written by the students.",      // Index 0 (incorrect)
        "The students have been written by the essays.", // Index 1 (incorrect)
        "The essays have been written by the students.", // Index 2 (correct)
        "The essays are written by the students."       // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Present perfect ('have written') → 'have been written'. Object ('the essays') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-35",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'The company is developing a new app.'",
      options: [
        "A new app was developed by the company.",      // Index 0 (incorrect)
        "The company is being developed a new app.",     // Index 1 (incorrect)
        "A new app has been developed by the company.",  // Index 2 (incorrect)
        "A new app is being developed by the company."  // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Present continuous ('is developing') → 'is being developed'. Object ('a new app') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-36",
      topicId: "active-passive-voice",
      question: "Passive form of 'The judge will announce the verdict soon.'",
      options: [
        "The verdict is announced by the judge soon.",      // Index 0 (incorrect)
        "The judge will be announced by the verdict soon.", // Index 1 (incorrect)
        "The verdict will be announced by the judge soon.", // Index 2 (correct)
        "The verdict has been announced by the judge soon." // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Future simple ('will announce') → 'will be announced'. Object ('the verdict') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-37",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'The gardener waters the plants every morning.'",
      options: [
        "The plants were watered by the gardener every morning.",  // Index 0 (incorrect)
        "The plants are watered by the gardener every morning.",   // Index 1 (correct)
        "The gardener is watered by the plants every morning.",    // Index 2 (incorrect)
        "The plants have been watered by the gardener every morning." // Index 3 (incorrect)
      ],
      correctAnswer: 1,
      explanation: "Present simple ('waters') → 'are watered'. Object ('the plants') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-38",
      topicId: "active-passive-voice",
      question: "Passive form of 'The author wrote this novel in 2020.'",
      options: [
        "This novel is written by the author in 2020.",      // Index 0 (incorrect)
        "The author was written by this novel in 2020.",      // Index 1 (incorrect)
        "This novel was written by the author in 2020.",      // Index 2 (correct)
        "This novel had been written by the author in 2020."  // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Past simple ('wrote') → 'was written'. Object ('this novel') becomes subject.",
      difficulty: "easy"
    },
    {
      id: "ap-39",
      topicId: "active-passive-voice",
      question: "Convert to passive: 'The committee is considering the proposal.'",
      options: [
        "The proposal was considered by the committee.",      // Index 0 (incorrect)
        "The committee is being considered by the proposal.", // Index 1 (incorrect)
        "The proposal is being considered by the committee.", // Index 2 (correct)
        "The proposal has been considered by the committee."  // Index 3 (incorrect)
      ],
      correctAnswer: 2,
      explanation: "Present continuous ('is considering') → 'is being considered'. Object ('the proposal') becomes subject.",
      difficulty: "medium"
    },
    {
      id: "ap-40",
      topicId: "active-passive-voice",
      question: "Passive form of 'The technician fixed the computer.'",
      options: [
        "The computer is fixed by the technician.",      // Index 0 (incorrect)
        "The technician was fixed by the computer.",     // Index 1 (incorrect)
        "The computer had been fixed by the technician.", // Index 2 (incorrect)
        "The computer was fixed by the technician."      // Index 3 (correct)
      ],
      correctAnswer: 3,
      explanation: "Past simple ('fixed') → 'was fixed'. Object ('the computer') becomes subject.",
      difficulty: "easy"
    },
  
      {
        id: "ap-41",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The secretary typed the letters.'",
        options: [
          "The letters were typed by the secretary.",  // Index 0 (correct)
          "The secretary was typed by the letters.",   // Index 1 (incorrect)
          "The letters are typed by the secretary.",   // Index 2 (incorrect)
          "The letters had been typed by the secretary." // Index 3 (incorrect)
        ],
        correctAnswer: 0,
        explanation: "Past simple ('typed') → 'were typed'. Object ('the letters') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-42",
        topicId: "active-passive-voice",
        question: "Passive form of 'The company will release a new product.'",
        options: [
          "A new product is released by the company.",       // Index 0 (incorrect)
          "The company will be released by a new product.", // Index 1 (incorrect)
          "A new product will be released by the company.", // Index 2 (correct)
          "A new product was released by the company."      // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Future simple ('will release') → 'will be released'. Object ('a new product') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-43",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'Someone has cleaned the room.'",
        options: [
          "The room was cleaned by someone.",      // Index 0 (incorrect)
          "Someone has been cleaned by the room.", // Index 1 (incorrect)
          "The room has been cleaned by someone.", // Index 2 (correct)
          "The room is cleaned by someone."        // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present perfect ('has cleaned') → 'has been cleaned'. Object ('the room') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-44",
        topicId: "active-passive-voice",
        question: "Passive form of 'The teacher is explaining the lesson.'",
        options: [
          "The lesson was explained by the teacher.",    // Index 0 (incorrect)
          "The teacher is being explained by the lesson.", // Index 1 (incorrect)
          "The lesson is being explained by the teacher.", // Index 2 (correct)
          "The lesson has been explained by the teacher." // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present continuous ('is explaining') → 'is being explained'. Object ('the lesson') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-45",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The storm destroyed several houses.'",
        options: [
          "Several houses were destroyed by the storm.", // Index 0 (correct)
          "The storm was destroyed by several houses.",  // Index 1 (incorrect)
          "Several houses are destroyed by the storm.",  // Index 2 (incorrect)
          "Several houses had been destroyed by the storm." // Index 3 (incorrect)
        ],
        correctAnswer: 0,
        explanation: "Past simple ('destroyed') → 'were destroyed'. Object ('several houses') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-46",
        topicId: "active-passive-voice",
        question: "Passive form of 'The committee will review the applications.'",
        options: [
          "The applications are reviewed by the committee.",      // Index 0 (incorrect)
          "The committee will be reviewed by the applications.", // Index 1 (incorrect)
          "The applications will be reviewed by the committee.", // Index 2 (correct)
          "The applications were reviewed by the committee."      // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Future simple ('will review') → 'will be reviewed'. Object ('the applications') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-47",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The chef has prepared the meal.'",
        options: [
          "The meal was prepared by the chef.",      // Index 0 (incorrect)
          "The chef has been prepared by the meal.", // Index 1 (incorrect)
          "The meal has been prepared by the chef.", // Index 2 (correct)
          "The meal is prepared by the chef."        // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present perfect ('has prepared') → 'has been prepared'. Object ('the meal') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-48",
        topicId: "active-passive-voice",
        question: "Passive form of 'The workers are building the bridge.'",
        options: [
          "The bridge was built by the workers.",    // Index 0 (incorrect)
          "The workers are being built by the bridge.", // Index 1 (incorrect)
          "The bridge is being built by the workers.", // Index 2 (correct)
          "The bridge has been built by the workers." // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present continuous ('are building') → 'is being built'. Object ('the bridge') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-49",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The police caught the thief.'",
        options: [
          "The thief was caught by the police.", // Index 0 (correct)
          "The police were caught by the thief.", // Index 1 (incorrect)
          "The thief is caught by the police.",   // Index 2 (incorrect)
          "The thief had been caught by the police." // Index 3 (incorrect)
        ],
        correctAnswer: 0,
        explanation: "Past simple ('caught') → 'was caught'. Object ('the thief') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-50",
        topicId: "active-passive-voice",
        question: "Passive form of 'The students will perform the play.'",
        options: [
          "The play is performed by the students.",      // Index 0 (incorrect)
          "The students will be performed by the play.", // Index 1 (incorrect)
          "The play will be performed by the students.", // Index 2 (correct)
          "The play was performed by the students."      // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Future simple ('will perform') → 'will be performed'. Object ('the play') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-51",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The company has launched a new campaign.'",
        options: [
          "A new campaign was launched by the company.",      // Index 0 (incorrect)
          "The company has been launched by a new campaign.", // Index 1 (incorrect)
          "A new campaign has been launched by the company.", // Index 2 (correct)
          "A new campaign is launched by the company."        // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present perfect ('has launched') → 'has been launched'. Object ('a new campaign') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-52",
        topicId: "active-passive-voice",
        question: "Passive form of 'The gardener waters the plants daily.'",
        options: [
          "The plants were watered by the gardener daily.",  // Index 0 (incorrect)
          "The gardener is watered by the plants daily.",    // Index 1 (incorrect)
          "The plants are watered by the gardener daily.",   // Index 2 (correct)
          "The plants have been watered by the gardener daily." // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present simple ('waters') → 'are watered'. Object ('the plants') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-53",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The team completed the project ahead of schedule.'",
        options: [
          "The project was completed by the team ahead of schedule.", // Index 0 (correct)
          "The team was completed by the project ahead of schedule.", // Index 1 (incorrect)
          "The project is completed by the team ahead of schedule.",  // Index 2 (incorrect)
          "The project had been completed by the team ahead of schedule." // Index 3 (incorrect)
        ],
        correctAnswer: 0,
        explanation: "Past simple ('completed') → 'was completed'. Object ('the project') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-54",
        topicId: "active-passive-voice",
        question: "Passive form of 'The author wrote this book in 1995.'",
        options: [
          "This book is written by the author in 1995.",      // Index 0 (incorrect)
          "The author was written by this book in 1995.",      // Index 1 (incorrect)
          "This book was written by the author in 1995.",      // Index 2 (correct)
          "This book had been written by the author in 1995."  // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Past simple ('wrote') → 'was written'. Object ('this book') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-55",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The committee is discussing the proposal.'",
        options: [
          "The proposal was discussed by the committee.",      // Index 0 (incorrect)
          "The committee is being discussed by the proposal.", // Index 1 (incorrect)
          "The proposal is being discussed by the committee.", // Index 2 (correct)
          "The proposal has been discussed by the committee."  // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present continuous ('is discussing') → 'is being discussed'. Object ('the proposal') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-56",
        topicId: "active-passive-voice",
        question: "Passive form of 'The technician fixed my computer.'",
        options: [
          "My computer is fixed by the technician.",      // Index 0 (incorrect)
          "The technician was fixed by my computer.",     // Index 1 (incorrect)
          "My computer had been fixed by the technician.", // Index 2 (incorrect)
          "My computer was fixed by the technician."      // Index 3 (correct)
        ],
        correctAnswer: 3,
        explanation: "Past simple ('fixed') → 'was fixed'. Object ('my computer') becomes subject.",
        difficulty: "easy"
      },
      {
        id: "ap-57",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The company will deliver the goods tomorrow.'",
        options: [
          "The goods are delivered by the company tomorrow.",      // Index 0 (incorrect)
          "The company will be delivered by the goods tomorrow.", // Index 1 (incorrect)
          "The goods will be delivered by the company tomorrow.", // Index 2 (correct)
          "The goods were delivered by the company tomorrow."      // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Future simple ('will deliver') → 'will be delivered'. Object ('the goods') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-58",
        topicId: "active-passive-voice",
        question: "Passive form of 'The students have submitted their assignments.'",
        options: [
          "Their assignments were submitted by the students.",      // Index 0 (incorrect)
          "The students have been submitted by their assignments.", // Index 1 (incorrect)
          "Their assignments have been submitted by the students.", // Index 2 (correct)
          "Their assignments are submitted by the students."       // Index 3 (incorrect)
        ],
        correctAnswer: 2,
        explanation: "Present perfect ('have submitted') → 'have been submitted'. Object ('their assignments') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-59",
        topicId: "active-passive-voice",
        question: "Convert to passive: 'The chef is preparing a special dinner.'",
        options: [
          "A special dinner was prepared by the chef.",     // Index 0 (incorrect)
          "The chef is being prepared by a special dinner.", // Index 1 (incorrect)
          "A special dinner has been prepared by the chef.", // Index 2 (incorrect)
          "A special dinner is being prepared by the chef." // Index 3 (correct)
        ],
        correctAnswer: 3,
        explanation: "Present continuous ('is preparing') → 'is being prepared'. Object ('a special dinner') becomes subject.",
        difficulty: "medium"
      },
      {
        id: "ap-60",
        topicId: "active-passive-voice",
        question: "Passive form of 'The storm damaged the power lines.'",
        options: [
          "The power lines are damaged by the storm.",     // Index 0 (incorrect)
          "The storm was damaged by the power lines.",     // Index 1 (incorrect)
          "The power lines had been damaged by the storm.", // Index 2 (incorrect)
          "The power lines were damaged by the storm."      // Index 3 (correct)
        ],
        correctAnswer: 3,
        explanation: "Past simple ('damaged') → 'were damaged'. Object ('the power lines') becomes subject.",
        difficulty: "easy"
      }
      

];
