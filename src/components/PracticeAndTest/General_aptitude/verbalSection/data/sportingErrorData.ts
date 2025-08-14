import { VerbalQuestion } from "../types";

export const sportingErrorQuestions: VerbalQuestion[] = [
  {
    id: 'se-1',
    topicId: 'spotting-errors',
    question: "Find the error: The team have won the championship.",
    options: [
      'The team have won the championship.',
      'The team has won the championship.',
      'The team had won the championship.',
      'The team is won the championship.'
    ],
    correctAnswer: 1,
    explanation: "'Team' is a collective noun and should take singular verb 'has'.",
    difficulty: 'medium'
  },
  {
    id: 'se-2',
    topicId: 'spotting-errors',
    question: "Identify the error: Neither John nor his friends is coming.",
    options: [
      'Neither John nor his friends is coming.',
      'Neither John nor his friends are coming.',
      'Neither John or his friends are coming.',
      'Neither John nor his friends coming.'
    ],
    correctAnswer: 1,
    explanation: "With 'neither...nor', the verb agrees with the nearest subject (friends - plural).",
    difficulty: 'medium'
  },
  {
    id: 'se-3',
    topicId: 'spotting-errors',
    question: "Find the error: She don't like coffee.",
    options: [
      'She don\'t like coffee.',
      'She doesn\'t like coffee.',
      'She not like coffee.',
      'She didn\'t like coffee.'
    ],
    correctAnswer: 1,
    explanation: "Third person singular 'she' requires 'doesn\'t' not 'don\'t'.",
    difficulty: 'easy'
  }
  ,
  {
    id: 'se-4',
    topicId: 'spotting-errors',
    question: "Find the correct sentence:",
    options: [
      'Each of the students have submitted the assignment.',
      'Each of the students has submitted the assignment.',
      'Each of the student have submitted the assignment.',
      'Each of the students are submitted the assignment.'
    ],
    correctAnswer: 1,
    explanation: "'Each' takes a singular verb: 'has submitted'.",
    difficulty: 'easy'
  },
  {
    id: 'se-5',
    topicId: 'spotting-errors',
    question: 'Identify the correct option:',
    options: [
      'Neither the manager nor the employees was informed.',
      'Neither the manager nor the employees were informed.',
      'Neither the manager nor the employees be informed.',
      'Neither the manager nor the employees is inform.'
    ],
    correctAnswer: 1,
    explanation: "Verb agrees with the nearer plural subject 'employees': 'were informed'.",
    difficulty: 'medium'
  },
  {
    id: 'se-6',
    topicId: 'spotting-errors',
    question: 'Spot the error:',
    options: [
      'She is good at playing the piano.',
      'She is good in playing the piano.',
      'She is good on playing the piano.',
      'She is good by playing the piano.'
    ],
    correctAnswer: 0,
    explanation: "Correct preposition is 'good at'.",
    difficulty: 'easy'
  },
  {
    id: 'se-7',
    topicId: 'spotting-errors',
    question: 'Choose the grammatically correct sentence:',
    options: [
      'He, as well as his friends, are arriving today.',
      'He, as well as his friends, is arriving today.',
      'He as well as his friends, are arriving today.',
      'He as well as his friends is arriving today.'
    ],
    correctAnswer: 1,
    explanation: "With 'as well as', the verb agrees with the first subject 'He': 'is arriving'.",
    difficulty: 'medium'
  },
  {
    id: 'se-8',
    topicId: 'spotting-errors',
    question: 'Find the correct usage:',
    options: [
      'The informations were not accurate.',
      'The information were not accurate.',
      'The information was not accurate.',
      'Informations was not accurate.'
    ],
    correctAnswer: 2,
    explanation: "'Information' is uncountable; use singular verb: 'was'.",
    difficulty: 'easy'
  },
  {
    id: 'se-9',
    topicId: 'spotting-errors',
    question: 'Choose the correct sentence:',
    options: [
      'One of my friend is coming.',
      'One of my friends is coming.',
      'One of my friends are coming.',
      'One of my friend are coming.'
    ],
    correctAnswer: 1,
    explanation: "Use plural noun after 'one of' and singular verb: 'friends is'.",
    difficulty: 'easy'
  },
  {
    id: 'se-10',
    topicId: 'spotting-errors',
    question: 'Identify the correct option:',
    options: [
      'Either the teachers or the principal have approved it.',
      'Either the teachers or the principal has approved it.',
      'Either the teachers or the principal are approved it.',
      'Either the teachers or the principal were approving it.'
    ],
    correctAnswer: 1,
    explanation: "Verb agrees with the nearer subject 'principal' (singular): 'has approved'.",
    difficulty: 'medium'
  },
  {
    id: 'se-11',
    topicId: 'spotting-errors',
    question: 'Spot the error in subject-verb agreement:',
    options: [
      'Mathematics are my favorite subject.',
      'Mathematics is my favorite subject.',
      'Mathematics were my favorite subject.',
      'Mathematics have been my favorite subject.'
    ],
    correctAnswer: 1,
    explanation: "'Mathematics' is singular in meaning here: 'is'.",
    difficulty: 'easy'
  },
  {
    id: 'se-12',
    topicId: 'spotting-errors',
    question: 'Choose the grammatically correct sentence:',
    options: [
      'The number of applicants are increasing.',
      'The number of applicants is increasing.',
      'A number of applicants is increasing.',
      'A number of applicants increases.'
    ],
    correctAnswer: 1,
    explanation: "'The number of' takes singular verb: 'is increasing'.",
    difficulty: 'medium'
  },
  {
    id: 'se-13',
    topicId: 'spotting-errors',
    question: 'Pick the correct sentence:',
    options: [
      'A number of students is absent today.',
      'A number of students are absent today.',
      'The number of students are absent today.',
      'A numbers of students are absent today.'
    ],
    correctAnswer: 1,
    explanation: "'A number of' takes plural verb: 'are absent'.",
    difficulty: 'medium'
  },
  {
    id: 'se-14',
    topicId: 'spotting-errors',
    question: 'Find the correct preposition:',
    options: [
      'She is married with a doctor.',
      'She is married to a doctor.',
      'She is married by a doctor.',
      'She is married at a doctor.'
    ],
    correctAnswer: 1,
    explanation: "Correct collocation is 'married to'.",
    difficulty: 'easy'
  },
  {
    id: 'se-15',
    topicId: 'spotting-errors',
    question: 'Choose the correct pronoun usage:',
    options: [
      'Between you and I, this is risky.',
      'Between you and me, this is risky.',
      'Between I and you, this is risky.',
      'Between me and you, this is risky.'
    ],
    correctAnswer: 1,
    explanation: "After preposition 'between', use object pronouns: 'you and me'.",
    difficulty: 'easy'
  },
  {
    id: 'se-16',
    topicId: 'spotting-errors',
    question: 'Find the correct comparative structure:',
    options: [
      'She is more taller than her sister.',
      'She is taller than her sister.',
      'She is most tall than her sister.',
      'She is taller from her sister.'
    ],
    correctAnswer: 1,
    explanation: "Use 'taller', not 'more taller'.",
    difficulty: 'easy'
  },
  {
    id: 'se-17',
    topicId: 'spotting-errors',
    question: 'Identify the correct sentence:',
    options: [
      'Each boy and each girl were given a prize.',
      'Each boy and each girl was given a prize.',
      'Each boy and each girl are given a prize.',
      'Each boy and each girl have given a prize.'
    ],
    correctAnswer: 1,
    explanation: "'Each' before both subjects keeps verb singular: 'was given'.",
    difficulty: 'medium'
  },
  {
    id: 'se-18',
    topicId: 'spotting-errors',
    question: 'Choose the correct article usage:',
    options: [
      'He is the university student.',
      'He is an university student.',
      'He is a university student.',
      'He is university student.'
    ],
    correctAnswer: 2,
    explanation: "'University' begins with /juː/ sound; use 'a university student'.",
    difficulty: 'easy'
  },
  {
    id: 'se-19',
    topicId: 'spotting-errors',
    question: 'Pick the correct tense:',
    options: [
      'I have seen him yesterday.',
      'I saw him yesterday.',
      'I had seen him yesterday.',
      'I am seeing him yesterday.'
    ],
    correctAnswer: 1,
    explanation: "Past time adverb 'yesterday' takes simple past: 'saw'.",
    difficulty: 'easy'
  },
  {
    id: 'se-20',
    topicId: 'spotting-errors',
    question: 'Find the correct parallelism:',
    options: [
      'She likes reading, to swim, and jogging.',
      'She likes to read, swimming, and to jog.',
      'She likes reading, swimming, and jogging.',
      'She likes to reading, swimming, and jogging.'
    ],
    correctAnswer: 2,
    explanation: "Maintain parallel gerund forms: reading, swimming, jogging.",
    difficulty: 'medium'
  },
  {
    id: 'se-21',
    topicId: 'spotting-errors',
    question: 'Spot the correct placement of modifier:',
    options: [
      'Walking down the street, the flowers looked beautiful.',
      'Walking down the street, I saw beautiful flowers.',
      'Walking down the street, there were beautiful flowers.',
      'Walking down the street, beautiful flowers were seen by me.'
    ],
    correctAnswer: 1,
    explanation: "The modifier should describe the subject 'I', not 'flowers'.",
    difficulty: 'hard'
  },
  {
    id: 'se-22',
    topicId: 'spotting-errors',
    question: 'Choose the correct conditional:',
    options: [
      'If I will see him, I will tell you.',
      'If I see him, I will tell you.',
      'If I saw him, I will tell you.',
      'If I have seen him, I will tell you.'
    ],
    correctAnswer: 1,
    explanation: "First conditional uses present simple in the if-clause: 'If I see...'.",
    difficulty: 'medium'
  },
  {
    id: 'se-23',
    topicId: 'spotting-errors',
    question: 'Find the correct relative pronoun:',
    options: [
      'The man which I met was kind.',
      'The man whom I met was kind.',
      'The man who I met was kind.',
      'The man that I met was kindly.'
    ],
    correctAnswer: 1,
    explanation: "Object of the verb takes 'whom' in formal usage (also 'who' informally).",
    difficulty: 'hard'
  },
  {
    id: 'se-24',
    topicId: 'spotting-errors',
    question: 'Choose the correct verb form:',
    options: [
      'He suggested to go home early.',
      'He suggested going home early.',
      'He suggested to going home early.',
      'He suggested go home early.'
    ],
    correctAnswer: 1,
    explanation: "'Suggest' is followed by a gerund: 'suggested going'.",
    difficulty: 'medium'
  },
  {
    id: 'se-25',
    topicId: 'spotting-errors',
    question: 'Pick the correct collocation:',
    options: [
      'He discussed about the plan.',
      'He discussed the plan.',
      'He discussed on the plan.',
      'He discussed for the plan.'
    ],
    correctAnswer: 1,
    explanation: "'Discuss' does not take a preposition: 'discussed the plan'.",
    difficulty: 'easy'
  },
  {
    id: 'se-26',
    topicId: 'spotting-errors',
    question: 'Identify the correct comparative idiom:',
    options: [
      'No sooner I reached than it started raining.',
      'No sooner had I reached than it started raining.',
      'No sooner I had reached then it started raining.',
      'No sooner had I reached then it started raining.'
    ],
    correctAnswer: 1,
    explanation: "Correct structure: 'No sooner had I... than ...'.",
    difficulty: 'hard'
  },
  {
    id: 'se-27',
    topicId: 'spotting-errors',
    question: 'Choose the correct preposition:',
    options: [
      'He is addicted with sweets.',
      'He is addicted to sweets.',
      'He is addicted for sweets.',
      'He is addicted in sweets.'
    ],
    correctAnswer: 1,
    explanation: "'Addicted to' is the correct phrase.",
    difficulty: 'easy'
  },
  {
    id: 'se-28',
    topicId: 'spotting-errors',
    question: 'Pick the grammatically correct sentence:',
    options: [
      'Scissors is on the table.',
      'Scissors are on the table.',
      'The scissor are on the table.',
      'A scissors are on the table.'
    ],
    correctAnswer: 1,
    explanation: "'Scissors' is plural in form: 'are on the table'.",
    difficulty: 'medium'
  },
  {
    id: 'se-29',
    topicId: 'spotting-errors',
    question: 'Find the correct sentence using fewer/less:',
    options: [
      'There are less people here today.',
      'There are fewer people here today.',
      'There is fewer people here today.',
      'There is less people here today.'
    ],
    correctAnswer: 1,
    explanation: "Use 'fewer' with countable nouns: 'fewer people'.",
    difficulty: 'easy'
  },
  {
    id: 'se-30',
    topicId: 'spotting-errors',
    question: 'Choose the correct usage of articles:',
    options: [
      'He is an honest man.',
      'He is a honest man.',
      'He is the honest man (in general).',
      'He is honest man.'
    ],
    correctAnswer: 0,
    explanation: "Words starting with silent 'h' take 'an': 'an honest man'.",
    difficulty: 'easy'
  },
  {
    id: 'se-31',
    topicId: 'spotting-errors',
    question: 'Pick the correct tense usage:',
    options: [
      'By next year, I complete the course.',
      'By next year, I will have completed the course.',
      'By next year, I will completed the course.',
      'By next year, I am completed the course.'
    ],
    correctAnswer: 1,
    explanation: "Future perfect: 'will have completed'.",
    difficulty: 'hard'
  },
  {
    id: 'se-32',
    topicId: 'spotting-errors',
    question: 'Find the correct inversion after "Hardly":',
    options: [
      'Hardly I had arrived when the phone rang.',
      'Hardly had I arrived when the phone rang.',
      'Hardly had I arrived than the phone rang.',
      'Hardly I arrived when the phone rang.'
    ],
    correctAnswer: 1,
    explanation: "After 'Hardly', use inversion and 'when': 'Hardly had I arrived when...'.",
    difficulty: 'hard'
  },
  {
    id: 'se-33',
    topicId: 'spotting-errors',
    question: 'Choose the correct adverb form:',
    options: [
      'She sings beautiful.',
      'She sings beautifully.',
      'She sings more beautiful.',
      'She sings most beautifully than him.'
    ],
    correctAnswer: 1,
    explanation: "Use adverb 'beautifully' to modify verb 'sings'.",
    difficulty: 'easy'
  },
  {
    id: 'se-34',
    topicId: 'spotting-errors',
    question: 'Identify the correct sentence:',
    options: [
      'The jury is divided in their opinion.',
      'The jury are divided in their opinion.',
      'The jury has divided in their opinion.',
      'The jury were dividing in their opinion.'
    ],
    correctAnswer: 1,
    explanation: "Collective noun used as individuals takes plural verb: 'are divided'.",
    difficulty: 'medium'
  },
  {
    id: 'se-35',
    topicId: 'spotting-errors',
    question: 'Pick the correct idiom:',
    options: [
      'He insisted to go.',
      'He insisted on going.',
      'He insisted for going.',
      'He insisted at going.'
    ],
    correctAnswer: 1,
    explanation: "Correct phrase: 'insist on' + gerund.",
    difficulty: 'easy'
  },
  {
    id: 'se-36',
    topicId: 'spotting-errors',
    question: 'Choose the correct sequence of tenses:',
    options: [
      'He said that he will come tomorrow.',
      'He said that he would come the next day.',
      'He says that he would come tomorrow.',
      'He says that he will came tomorrow.'
    ],
    correctAnswer: 1,
    explanation: "Reported speech: 'said... would come the next day'.",
    difficulty: 'hard'
  },
  {
    id: 'se-37',
    topicId: 'spotting-errors',
    question: 'Find the correct preposition:',
    options: [
      'She is different than her sister.',
      'She is different from her sister.',
      'She is different with her sister.',
      'She is different to her sister.'
    ],
    correctAnswer: 1,
    explanation: "Standard usage: 'different from'.",
    difficulty: 'easy'
  },
  {
    id: 'se-38',
    topicId: 'spotting-errors',
    question: 'Pick the correct sentence:',
    options: [
      'Neither of the answers are correct.',
      'Neither of the answers is correct.',
      'Neither of the answer is correct.',
      'Neither of answers are correct.'
    ],
    correctAnswer: 1,
    explanation: "'Neither' takes singular verb: 'is correct'.",
    difficulty: 'medium'
  },
  {
    id: 'se-39',
    topicId: 'spotting-errors',
    question: 'Identify the correct usage:',
    options: [
      'He is senior than me.',
      'He is senior to me.',
      'He is more senior than me.',
      'He is senior from me.'
    ],
    correctAnswer: 1,
    explanation: "Use 'senior to', not 'senior than'.",
    difficulty: 'easy'
  },
  {
    id: 'se-40',
    topicId: 'spotting-errors',
    question: 'Choose the correct article:',
    options: [
      'She is a MBA graduate.',
      'She is an MBA graduate.',
      'She is the MBA graduate (in general).',
      'She is MBA graduate.'
    ],
    correctAnswer: 1,
    explanation: "MBA begins with vowel sound /ɛm/; use 'an'.",
    difficulty: 'easy'
  },
  {
    id: 'se-41',
    topicId: 'spotting-errors',
    question: 'Pick the correct concord:',
    options: [
      'Ten kilometers are a long distance.',
      'Ten kilometers is a long distance.',
      'Ten kilometer is a long distance.',
      'Ten kilometers is long distances.'
    ],
    correctAnswer: 1,
    explanation: "Distances treated as a unit take singular verb: 'is'.",
    difficulty: 'medium'
  },
  {
    id: 'se-42',
    topicId: 'spotting-errors',
    question: 'Identify the correct relative clause:',
    options: [
      'This is the same book that I lost.',
      'This is the same book which I lost.',
      'This is the same book as I lost.',
      'This is the same book whom I lost.'
    ],
    correctAnswer: 2,
    explanation: "With 'the same', use 'as': 'the same book as'.",
    difficulty: 'hard'
  },
  {
    id: 'se-43',
    topicId: 'spotting-errors',
    question: 'Choose the correct usage:',
    options: [
      'She denied to go.',
      'She denied going.',
      'She denied for going.',
      'She denied at going.'
    ],
    correctAnswer: 1,
    explanation: "'Deny' is followed by a gerund: 'denied going'.",
    difficulty: 'medium'
  },
  {
    id: 'se-44',
    topicId: 'spotting-errors',
    question: 'Find the correct verb pattern:',
    options: [
      'He prevented me to go.',
      'He prevented me from going.',
      'He prevented me from to go.',
      'He prevented me at going.'
    ],
    correctAnswer: 1,
    explanation: "'Prevent someone from doing' is correct.",
    difficulty: 'easy'
  },
  {
    id: 'se-45',
    topicId: 'spotting-errors',
    question: 'Pick the correct sentence:',
    options: [
      'Each of them know the answer.',
      'Each of them knows the answer.',
      'Each of they knows the answer.',
      'Each of them knowed the answer.'
    ],
    correctAnswer: 1,
    explanation: "'Each' requires singular verb: 'knows'.",
    difficulty: 'easy'
  },
  {
    id: 'se-46',
    topicId: 'spotting-errors',
    question: 'Choose the correct conjunction usage:',
    options: [
      'Hardly had we reached than the show began.',
      'Hardly had we reached when the show began.',
      'Hardly we had reached when the show began.',
      'Hardly we reached than the show began.'
    ],
    correctAnswer: 1,
    explanation: "Use 'Hardly... when', not 'than'.",
    difficulty: 'hard'
  },
  {
    id: 'se-47',
    topicId: 'spotting-errors',
    question: 'Identify the correct sentence:',
    options: [
      'She is one of the best player in the team.',
      'She is one of the best players in the team.',
      'She is one of the best players of the team is.',
      'She is one of best players in the team.'
    ],
    correctAnswer: 1,
    explanation: "Use plural noun after 'one of the best': 'players'.",
    difficulty: 'medium'
  },
  {
    id: 'se-48',
    topicId: 'spotting-errors',
    question: 'Choose the correct conditional past:',
    options: [
      'If I knew it, I would have told you.',
      'If I had known it, I would have told you.',
      'If I have known it, I would tell you.',
      'If I would know it, I would have told you.'
    ],
    correctAnswer: 1,
    explanation: "Third conditional: 'If I had known..., I would have told...'.",
    difficulty: 'hard'
  },
  {
    id: 'se-49',
    topicId: 'spotting-errors',
    question: 'Pick the correct usage of fewer/less:',
    options: [
      'We need less bottles for the event.',
      'We need fewer bottles for the event.',
      'We need lesser bottles for the event.',
      'We need few bottles for the event (comparative).'
    ],
    correctAnswer: 1,
    explanation: "Use 'fewer' with countable 'bottles'.",
    difficulty: 'easy'
  },
  {
    id: 'se-50',
    topicId: 'spotting-errors',
    question: 'Identify the correct passive construction:',
    options: [
      'The work will be completed by tomorrow.',
      'The work will completed by tomorrow.',
      'The work will be complete by tomorrow.',
      'The work will be completing by tomorrow.'
    ],
    correctAnswer: 0,
    explanation: "Future passive: 'will be completed'.",
    difficulty: 'medium'
  },
  {
    id: 'se-51',
    topicId: 'spotting-errors',
    question: 'Choose the correct conjunction pair:',
    options: [
      'Either you must apologize or leave.',
      'Either you must apologize nor leave.',
      'Either you must apologize and leave or.',
      'Either you must apologize but leave.'
    ],
    correctAnswer: 0,
    explanation: "Correlative conjunctions: 'Either...or...'.",
    difficulty: 'easy'
  },
  {
    id: 'se-52',
    topicId: 'spotting-errors',
    question: 'Identify the correct tense form:',
    options: [
      'I prefer tea than coffee.',
      'I prefer tea to coffee.',
      'I prefer tea over than coffee.',
      'I prefer tea by coffee.'
    ],
    correctAnswer: 1,
    explanation: "Use 'prefer A to B'.",
    difficulty: 'easy'
  },
  {
    id: 'se-53',
    topicId: 'spotting-errors',
    question: 'Choose the correct form:',
    options: [
      'He is capable to do it.',
      'He is capable of doing it.',
      'He is capable for do it.',
      'He is capable in doing it.'
    ],
    correctAnswer: 1,
    explanation: "Correct phrase: 'capable of' + gerund.",
    difficulty: 'medium'
  },
  {
    id: 'se-54',
    topicId: 'spotting-errors',
    question: 'Identify the correct expression:',
    options: [
      'He availed the opportunity.',
      'He availed himself of the opportunity.',
      'He availed of the opportunity.',
      'He availed himself the opportunity.'
    ],
    correctAnswer: 1,
    explanation: "Correct idiom: 'avail oneself of'.",
    difficulty: 'hard'
  },
  {
    id: 'se-55',
    topicId: 'spotting-errors',
    question: 'Choose the correct tag question:',
    options: [
      "Let's go, shall we?",
      "Let's go, will we?",
      "Let's go, do we?",
      "Let's go, aren't we?"
    ],
    correctAnswer: 0,
    explanation: "Tag after 'let's' is 'shall we?'.",
    difficulty: 'medium'
  },
  {
    id: 'se-56',
    topicId: 'spotting-errors',
    question: 'Pick the correct sentence with parallel structure:',
    options: [
      'The job requires intelligence, patience, and to work hard.',
      'The job requires being intelligent, patience, and hard work.',
      'The job requires intelligence, patience, and hard work.',
      'The job requires to be intelligent, patience, and working hard.'
    ],
    correctAnswer: 2,
    explanation: "Keep nouns parallel: intelligence, patience, hard work.",
    difficulty: 'medium'
  },
  {
    id: 'se-57',
    topicId: 'spotting-errors',
    question: 'Choose the correct word order:',
    options: [
      'She seldom ever makes mistakes.',
      'She hardly ever makes mistakes.',
      'She hardly never makes mistakes.',
      'She rarely never makes mistakes.'
    ],
    correctAnswer: 1,
    explanation: "Use 'hardly ever'; avoid double negatives like 'hardly never'.",
    difficulty: 'easy'
  },
  {
    id: 'se-58',
    topicId: 'spotting-errors',
    question: 'Identify the correct quantifier:',
    options: [
      'Much people were present at the event.',
      'Many people were present at the event.',
      'Much peoples were present at the event.',
      'Many peoples were present at the event.'
    ],
    correctAnswer: 1,
    explanation: "Use 'many' with countable plural 'people'.",
    difficulty: 'easy'
  },
  {
    id: 'se-59',
    topicId: 'spotting-errors',
    question: 'Choose the correct comparative structure:',
    options: [
      'This is more preferable.',
      'This is preferable.',
      'This is most preferable.',
      'This is very preferable.'
    ],
    correctAnswer: 1,
    explanation: "'Preferable' does not take 'more/most' in this context.",
    difficulty: 'hard'
  },
  {
    id: 'se-60',
    topicId: 'spotting-errors',
    question: 'Pick the correct expression:',
    options: [
      'He is good in English.',
      'He is good at English.',
      'He is good with English.',
      'He is good by English.'
    ],
    correctAnswer: 1,
    explanation: "Correct phrase: 'good at'.",
    difficulty: 'easy'
  },
  {
    id: 'se-61',
    topicId: 'spotting-errors',
    question: 'Choose the correct usage:',
    options: [
      'He said me the truth.',
      'He told me the truth.',
      'He told to me the truth.',
      'He said to me the truth.'
    ],
    correctAnswer: 1,
    explanation: "'Tell someone something' is correct; 'say' needs 'to' + clause.",
    difficulty: 'medium'
  }
];
