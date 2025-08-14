import { VerbalQuestion } from "../types";

export const sentenceCompletionQuestions: VerbalQuestion[] = [
  {
    id: 'sc-1',
    topicId: 'sentence-completion',
    question: "Complete: The new policy was implemented to _____ efficiency.",
    options: ['increase', 'decrease', 'maintain', 'ignore'],
    correctAnswer: 0,
    explanation: "The context suggests positive outcomes, so 'increase' is most appropriate.",
    difficulty: 'easy'
  },
  {
    id: 'sc-2',
    topicId: 'sentence-completion',
    question: "Choose the word: The research findings _____ the hypothesis.",
    options: ['contradict', 'support', 'ignore', 'complicate'],
    correctAnswer: 1,
    explanation: "The context suggests a positive relationship, so 'support' is appropriate.",
    difficulty: 'medium'
  },
  {
    id: 'sc-3',
    topicId: 'sentence-completion',
    question: "Fill in the blank: The company's success _____ from its innovative approach.",
    options: ['resulted', 'arose', 'stemmed', 'emerged'],
    correctAnswer: 2,
    explanation: "'Stemmed' is the most appropriate word as it indicates origin or source.",
    difficulty: 'medium'
  },
  {
    id: 'sc-4',
    topicId: 'sentence-completion',
    question: 'Despite initial setbacks, the team remained _____ and eventually achieved success.',
    options: ['resilient', 'indifferent', 'disorganized', 'hostile'],
    correctAnswer: 0,
    explanation: "'Resilient' fits the positive outcome after setbacks.",
    difficulty: 'easy'
  },
  {
    id: 'sc-5',
    topicId: 'sentence-completion',
    question: "The professor's explanation was so _____ that even complex ideas seemed simple.",
    options: ['lucid', 'tentative', 'vague', 'contradictory'],
    correctAnswer: 0,
    explanation: "'Lucid' means clear and easy to understand.",
    difficulty: 'easy'
  },
  {
    id: 'sc-6',
    topicId: 'sentence-completion',
    question: 'To conserve battery life, you should _____ the screen brightness.',
    options: ['reduce', 'ignore', 'increase', 'maximize'],
    correctAnswer: 0,
    explanation: "Lowering brightness saves battery, so 'reduce' is correct.",
    difficulty: 'easy'
  },
  {
    id: 'sc-7',
    topicId: 'sentence-completion',
    question: 'The committee reached a _____ decision after hours of debate.',
    options: ['hasty', 'unanimous', 'arbitrary', 'divisive'],
    correctAnswer: 1,
    explanation: "A decision reached together by all is 'unanimous'.",
    difficulty: 'medium'
  },
  {
    id: 'sc-8',
    topicId: 'sentence-completion',
    question: 'Her remarks were so _____ that they offended several attendees.',
    options: ['conciliatory', 'tactless', 'measured', 'diplomatic'],
    correctAnswer: 1,
    explanation: "'Tactless' means insensitive or likely to offend.",
    difficulty: 'medium'
  },
  {
    id: 'sc-9',
    topicId: 'sentence-completion',
    question: 'The software update aims to _____ performance and fix security vulnerabilities.',
    options: ['degrade', 'hamper', 'enhance', 'obscure'],
    correctAnswer: 2,
    explanation: "Updates typically 'enhance' performance.",
    difficulty: 'easy'
  },
  {
    id: 'sc-10',
    topicId: 'sentence-completion',
    question: 'He invested in a _____ portfolio to minimize risk.',
    options: ['volatile', 'concentrated', 'diversified', 'speculative'],
    correctAnswer: 2,
    explanation: "A 'diversified' portfolio spreads risk.",
    difficulty: 'easy'
  },
  {
    id: 'sc-11',
    topicId: 'sentence-completion',
    question: "The witness's account was _____ by video evidence.",
    options: ['disputed', 'corroborated', 'undermined', 'precluded'],
    correctAnswer: 1,
    explanation: "'Corroborated' means confirmed or supported by evidence.",
    difficulty: 'medium'
  },
  {
    id: 'sc-12',
    topicId: 'sentence-completion',
    question: 'Because the instructions were _____, the assembly took longer than expected.',
    options: ['ambiguous', 'precise', 'concise', 'explicit'],
    correctAnswer: 0,
    explanation: "'Ambiguous' instructions cause confusion and delays.",
    difficulty: 'medium'
  },
  {
    id: 'sc-13',
    topicId: 'sentence-completion',
    question: "The museum's new exhibit offers a _____ view of ancient civilizations.",
    options: ['superficial', 'comprehensive', 'narrow', 'distorted'],
    correctAnswer: 1,
    explanation: "'Comprehensive' means thorough and wide-ranging.",
    difficulty: 'medium'
  },
  {
    id: 'sc-14',
    topicId: 'sentence-completion',
    question: 'He spoke with such _____ that everyone paid attention.',
    options: ['apathy', 'eloquence', 'hesitation', 'monotony'],
    correctAnswer: 1,
    explanation: "'Eloquence' refers to persuasive, expressive speech.",
    difficulty: 'easy'
  },
  {
    id: 'sc-15',
    topicId: 'sentence-completion',
    question: "The medication may cause drowsiness; do not _____ heavy machinery.",
    options: ['assemble', 'operate', 'purchase', 'observe'],
    correctAnswer: 1,
    explanation: "Safety warnings advise not to 'operate' machinery when drowsy.",
    difficulty: 'easy'
  },
  {
    id: 'sc-16',
    topicId: 'sentence-completion',
    question: 'To meet the deadline, we must _____ our efforts.',
    options: ['dilute', 'redouble', 'postpone', 'abandon'],
    correctAnswer: 1,
    explanation: "'Redouble' means to increase efforts significantly.",
    difficulty: 'medium'
  },
  {
    id: 'sc-17',
    topicId: 'sentence-completion',
    question: 'Her analysis was praised for its _____ and clarity.',
    options: ['opacity', 'rigor', 'bias', 'brevity'],
    correctAnswer: 1,
    explanation: "'Rigor' and clarity together indicate strong analytical quality.",
    difficulty: 'medium'
  },
  {
    id: 'sc-18',
    topicId: 'sentence-completion',
    question: "The startup's rapid growth was _____ by increasing demand.",
    options: ['impeded', 'fueled', 'hampered', 'stifled'],
    correctAnswer: 1,
    explanation: "Growth propelled by demand is 'fueled'.",
    difficulty: 'easy'
  },
  {
    id: 'sc-19',
    topicId: 'sentence-completion',
    question: "The judge's ruling set a _____ for future cases.",
    options: ['precedent', 'prelude', 'postscript', 'digression'],
    correctAnswer: 0,
    explanation: "A 'precedent' is a prior ruling guiding future decisions.",
    difficulty: 'medium'
  },
  {
    id: 'sc-20',
    topicId: 'sentence-completion',
    question: 'Even minor errors can _____ the credibility of the report.',
    options: ['bolster', 'erode', 'vindicate', 'cement'],
    correctAnswer: 1,
    explanation: "Errors weaken credibility; 'erode' fits best.",
    difficulty: 'easy'
  },
  {
    id: 'sc-21',
    topicId: 'sentence-completion',
    question: 'The scientist remained _____ until sufficient data was collected.',
    options: ['dogmatic', 'skeptical', 'credulous', 'impulsive'],
    correctAnswer: 1,
    explanation: "A careful scientist is 'skeptical' without adequate data.",
    difficulty: 'medium'
  },
  {
    id: 'sc-22',
    topicId: 'sentence-completion',
    question: 'The policy was criticized for disproportionately _____ low-income communities.',
    options: ['benefiting', 'affecting', 'isolating', 'penalizing'],
    correctAnswer: 3,
    explanation: "The criticism implies harm; 'penalizing' fits the context.",
    difficulty: 'hard'
  },
  {
    id: 'sc-23',
    topicId: 'sentence-completion',
    question: 'By offering refunds, the company tried to _____ customer dissatisfaction.',
    options: ['amplify', 'mitigate', 'provoke', 'justify'],
    correctAnswer: 1,
    explanation: "Refunds are intended to 'mitigate' dissatisfaction.",
    difficulty: 'easy'
  },
  {
    id: 'sc-24',
    topicId: 'sentence-completion',
    question: "The CEO's remarks were refreshingly _____, addressing both successes and failures.",
    options: ['cryptic', 'candid', 'ornate', 'irrelevant'],
    correctAnswer: 1,
    explanation: "'Candid' means open and honest, fitting the context.",
    difficulty: 'medium'
  },
  {
    id: 'sc-25',
    topicId: 'sentence-completion',
    question: 'We need a _____ approach that focuses on workable solutions, not theory.',
    options: ['dogmatic', 'pragmatic', 'romantic', 'idealized'],
    correctAnswer: 1,
    explanation: "A practical, workable approach is 'pragmatic'.",
    difficulty: 'easy'
  },
  {
    id: 'sc-26',
    topicId: 'sentence-completion',
    question: 'The new subway line was designed to _____ traffic congestion downtown.',
    options: ['alleviate', 'aggravate', 'exacerbate', 'perpetuate'],
    correctAnswer: 0,
    explanation: "Such projects aim to 'alleviate' congestion.",
    difficulty: 'easy'
  },
  {
    id: 'sc-27',
    topicId: 'sentence-completion',
    question: 'Smartphones have become _____, seen in the hands of people everywhere.',
    options: ['arcane', 'ubiquitous', 'obsolete', 'parochial'],
    correctAnswer: 1,
    explanation: "'Ubiquitous' means present everywhere.",
    difficulty: 'easy'
  },
  {
    id: 'sc-28',
    topicId: 'sentence-completion',
    question: 'Her design shows _____ attention to detail and balance.',
    options: ['perfunctory', 'meticulous', 'cursory', 'haphazard'],
    correctAnswer: 1,
    explanation: "'Meticulous' fits careful attention to detail.",
    difficulty: 'medium'
  },
  {
    id: 'sc-29',
    topicId: 'sentence-completion',
    question: 'Cherry-picked statistics can _____ the strength of an otherwise solid argument.',
    options: ['bolster', 'undermine', 'corroborate', 'validate'],
    correctAnswer: 1,
    explanation: "Cherry-picking weakens or 'undermines' arguments.",
    difficulty: 'medium'
  },
  {
    id: 'sc-30',
    topicId: 'sentence-completion',
    question: 'The documentary served as a _____ for social change.',
    options: ['catalyst', 'hindrance', 'anachronism', 'digression'],
    correctAnswer: 0,
    explanation: "A 'catalyst' accelerates change.",
    difficulty: 'easy'
  },
  {
    id: 'sc-31',
    topicId: 'sentence-completion',
    question: 'Mediation helped the two parties _____ their differences.',
    options: ['reconcile', 'inflame', 'obfuscate', 'exacerbate'],
    correctAnswer: 0,
    explanation: "Mediation aims to 'reconcile' differences.",
    difficulty: 'easy'
  },
  {
    id: 'sc-32',
    topicId: 'sentence-completion',
    question: 'Ignoring early warnings may _____ the problem rather than solve it.',
    options: ['ameliorate', 'exacerbate', 'resolve', 'dissipate'],
    correctAnswer: 1,
    explanation: "To make a problem worse is to 'exacerbate' it.",
    difficulty: 'medium'
  },
  {
    id: 'sc-33',
    topicId: 'sentence-completion',
    question: 'Many experts consider floppy disks _____ in the modern era.',
    options: ['innovative', 'ubiquitous', 'obsolete', 'invaluable'],
    correctAnswer: 2,
    explanation: "They are 'obsolete', no longer used.",
    difficulty: 'easy'
  },
  {
    id: 'sc-34',
    topicId: 'sentence-completion',
    question: 'The company invested heavily in the _____ market for electric aircraft.',
    options: ['nascent', 'retrograde', 'declining', 'stagnant'],
    correctAnswer: 0,
    explanation: "'Nascent' means emerging or in early stages.",
    difficulty: 'medium'
  },
  {
    id: 'sc-35',
    topicId: 'sentence-completion',
    question: 'Because the memo was _____, employees interpreted it in different ways.',
    options: ['unequivocal', 'ambiguous', 'explicit', 'definitive'],
    correctAnswer: 1,
    explanation: "'Ambiguous' means open to multiple interpretations.",
    difficulty: 'medium'
  },
  {
    id: 'sc-36',
    topicId: 'sentence-completion',
    question: 'Finding the cure was a _____ stroke of luck during routine testing.',
    options: ['premeditated', 'fortuitous', 'calculated', 'intentional'],
    correctAnswer: 1,
    explanation: "'Fortuitous' means happening by chance, often beneficial.",
    difficulty: 'hard'
  },
  {
    id: 'sc-37',
    topicId: 'sentence-completion',
    question: 'New safety laws impose _____ standards on manufacturers.',
    options: ['lax', 'stringent', 'arbitrary', 'speculative'],
    correctAnswer: 1,
    explanation: "'Stringent' means strict and precise.",
    difficulty: 'easy'
  },
  {
    id: 'sc-38',
    topicId: 'sentence-completion',
    question: 'We decided to _____ the decision until more data was available.',
    options: ['expedite', 'defer', 'finalize', 'discard'],
    correctAnswer: 1,
    explanation: "To postpone a decision is to 'defer' it.",
    difficulty: 'easy'
  },
  {
    id: 'sc-39',
    topicId: 'sentence-completion',
    question: 'Engineers proposed a _____ solution that performed well under stress.',
    options: ['fragile', 'robust', 'makeshift', 'tentative'],
    correctAnswer: 1,
    explanation: "'Robust' indicates strength and reliability.",
    difficulty: 'medium'
  },
  {
    id: 'sc-40',
    topicId: 'sentence-completion',
    question: 'Because our plans are still _____, details may change.',
    options: ['immutable', 'tentative', 'obsolete', 'categorical'],
    correctAnswer: 1,
    explanation: "'Tentative' means not yet finalized.",
    difficulty: 'easy'
  },
  {
    id: 'sc-41',
    topicId: 'sentence-completion',
    question: 'Please provide a _____ summary that captures the key points.',
    options: ['verbose', 'succinct', 'rambling', 'circuitous'],
    correctAnswer: 1,
    explanation: "'Succinct' means brief and to the point.",
    difficulty: 'easy'
  },
  {
    id: 'sc-42',
    topicId: 'sentence-completion',
    question: 'After discussion, there was clear _____ among all members.',
    options: ['consensus', 'discord', 'apathy', 'variance'],
    correctAnswer: 0,
    explanation: "'Consensus' means general agreement.",
    difficulty: 'medium'
  },
  {
    id: 'sc-43',
    topicId: 'sentence-completion',
    question: 'Investing in startups carries an _____ risk.',
    options: ['inherent', 'illusory', 'negligible', 'fabricated'],
    correctAnswer: 0,
    explanation: "'Inherent' means intrinsic or built-in.",
    difficulty: 'medium'
  },
  {
    id: 'sc-44',
    topicId: 'sentence-completion',
    question: 'After years of success, the team grew _____ and stopped innovating.',
    options: ['complacent', 'vigilant', 'anxious', 'ardent'],
    correctAnswer: 0,
    explanation: "'Complacent' means self-satisfied and uncritical.",
    difficulty: 'hard'
  },
  {
    id: 'sc-45',
    topicId: 'sentence-completion',
    question: 'Insurance is one way to _____ financial risks.',
    options: ['mitigate', 'magnify', 'incur', 'ignore'],
    correctAnswer: 0,
    explanation: "Insurance reduces or 'mitigates' risk.",
    difficulty: 'easy'
  },
  {
    id: 'sc-46',
    topicId: 'sentence-completion',
    question: 'Young artists often _____ the masters to develop their own style.',
    options: ['dismiss', 'emulate', 'deride', 'impugn'],
    correctAnswer: 1,
    explanation: "To model oneself after another is to 'emulate'.",
    difficulty: 'medium'
  },
  {
    id: 'sc-47',
    topicId: 'sentence-completion',
    question: 'The technician had to _____ the wiring error before power could be restored.',
    options: ['rectify', 'replicate', 'conceal', 'complicate'],
    correctAnswer: 0,
    explanation: "To fix an error is to 'rectify' it.",
    difficulty: 'easy'
  },
  {
    id: 'sc-48',
    topicId: 'sentence-completion',
    question: 'Open office layouts are intended to _____ collaboration among teams.',
    options: ['stifle', 'foster', 'impede', 'disincentivize'],
    correctAnswer: 1,
    explanation: "They are meant to 'foster' collaboration.",
    difficulty: 'easy'
  },
  {
    id: 'sc-49',
    topicId: 'sentence-completion',
    question: 'Lack of resources can _____ progress on the project.',
    options: ['facilitate', 'impede', 'accelerate', 'expedite'],
    correctAnswer: 1,
    explanation: "Insufficient resources 'impede' progress.",
    difficulty: 'medium'
  },
  {
    id: 'sc-50',
    topicId: 'sentence-completion',
    question: 'Social media helps organizations _____ important updates quickly.',
    options: ['hoard', 'disseminate', 'suppress', 'obfuscate'],
    correctAnswer: 1,
    explanation: "To spread information widely is to 'disseminate' it.",
    difficulty: 'easy'
  },
  {
    id: 'sc-51',
    topicId: 'sentence-completion',
    question: 'Leaders must be able to _____ their vision clearly.',
    options: ['stammer', 'articulate', 'mumble', 'obscure'],
    correctAnswer: 1,
    explanation: "To express clearly is to 'articulate'.",
    difficulty: 'easy'
  },
  {
    id: 'sc-52',
    topicId: 'sentence-completion',
    question: 'Early successes helped _____ the team’s confidence.',
    options: ['erode', 'bolster', 'diminish', 'qualify'],
    correctAnswer: 1,
    explanation: "Successes 'bolster' confidence.",
    difficulty: 'easy'
  },
  {
    id: 'sc-53',
    topicId: 'sentence-completion',
    question: 'Lack of evidence may _____ the possibility of a conviction.',
    options: ['entail', 'preclude', 'trigger', 'ensure'],
    correctAnswer: 1,
    explanation: "To make something impossible is to 'preclude' it.",
    difficulty: 'hard'
  },
  {
    id: 'sc-54',
    topicId: 'sentence-completion',
    question: 'Several experts came forward to _____ the false claims.',
    options: ['propagate', 'refute', 'corroborate', 'endorse'],
    correctAnswer: 1,
    explanation: "To disprove a claim is to 'refute' it.",
    difficulty: 'medium'
  },
  {
    id: 'sc-55',
    topicId: 'sentence-completion',
    question: 'The regulator can _____ the clause to justify intervention.',
    options: ['invoke', 'evade', 'dilute', 'waive'],
    correctAnswer: 0,
    explanation: "To call upon a rule is to 'invoke' it.",
    difficulty: 'hard'
  },
  {
    id: 'sc-56',
    topicId: 'sentence-completion',
    question: 'Visible patrols are used to _____ petty crime in the area.',
    options: ['incite', 'deter', 'absolve', 'abet'],
    correctAnswer: 1,
    explanation: "Patrols aim to 'deter' crime (discourage it).",
    difficulty: 'medium'
  },
  {
    id: 'sc-57',
    topicId: 'sentence-completion',
    question: 'Exhausted and outmatched, they chose to _____ to the opposing demands.',
    options: ['rebel', 'acquiesce', 'denounce', 'protest'],
    correctAnswer: 1,
    explanation: "'Acquiesce' means to accept reluctantly without protest.",
    difficulty: 'hard'
  },
  {
    id: 'sc-58',
    topicId: 'sentence-completion',
    question: 'New policies were introduced to _____ working conditions for interns.',
    options: ['ameliorate', 'exacerbate', 'obfuscate', 'implicate'],
    correctAnswer: 0,
    explanation: "To improve conditions is to 'ameliorate' them.",
    difficulty: 'medium'
  },
  {
    id: 'sc-59',
    topicId: 'sentence-completion',
    question: 'The surge in popularity turned out to be _____, fading within weeks.',
    options: ['ephemeral', 'enduring', 'perpetual', 'perennial'],
    correctAnswer: 0,
    explanation: "'Ephemeral' means short-lived.",
    difficulty: 'easy'
  },
  {
    id: 'sc-60',
    topicId: 'sentence-completion',
    question: 'Her silence was taken as _____ approval of the plan.',
    options: ['overt', 'tacit', 'vehement', 'explicit'],
    correctAnswer: 1,
    explanation: "'Tacit' means understood without being stated.",
    difficulty: 'hard'
  },
  {
    id: 'sc-61',
    topicId: 'sentence-completion',
    question: 'The auditor was praised for his _____ honesty and fairness.',
    options: ['dubious', 'scrupulous', 'perfunctory', 'capricious'],
    correctAnswer: 1,
    explanation: "'Scrupulous' means exacting and morally upright.",
    difficulty: 'medium'
  },
  {
    id: 'sc-62',
    topicId: 'sentence-completion',
    question: 'The report was criticized for its _____ reasoning and lack of clarity.',
    options: ['lucid', 'convoluted', 'succinct', 'systematic'],
    correctAnswer: 1,
    explanation: "'Convoluted' means complex and hard to follow.",
    difficulty: 'medium'
  },
  {
    id: 'sc-63',
    topicId: 'sentence-completion',
    question: 'The mansion showcased _____ consumption with lavish décor.',
    options: ['modest', 'conspicuous', 'austere', 'ascetic'],
    correctAnswer: 1,
    explanation: "'Conspicuous consumption' refers to showy display of wealth.",
    difficulty: 'hard'
  },
  {
    id: 'sc-64',
    topicId: 'sentence-completion',
    question: 'Due to infrastructure issues, the area experiences _____ power outages.',
    options: ['chronic', 'sporadic', 'unceasing', 'perpetual'],
    correctAnswer: 1,
    explanation: "'Sporadic' means occurring at irregular intervals.",
    difficulty: 'easy'
  },
  {
    id: 'sc-65',
    topicId: 'sentence-completion',
    question: 'Her _____ talent for music was evident from a young age.',
    options: ['acquired', 'innate', 'contrived', 'affected'],
    correctAnswer: 1,
    explanation: "'Innate' means inborn or natural.",
    difficulty: 'easy'
  },
  {
    id: 'sc-66',
    topicId: 'sentence-completion',
    question: 'The chess grandmaster is known for his _____ memory and foresight.',
    options: ['prodigious', 'meager', 'tenuous', 'paltry'],
    correctAnswer: 0,
    explanation: "'Prodigious' means remarkably great or impressive.",
    difficulty: 'medium'
  },
  {
    id: 'sc-67',
    topicId: 'sentence-completion',
    question: 'Facing budget cuts, the department adopted a _____ approach to spending.',
    options: ['lavish', 'parsimonious', 'profligate', 'wasteful'],
    correctAnswer: 1,
    explanation: "'Parsimonious' means frugal or stingy.",
    difficulty: 'hard'
  },
  {
    id: 'sc-68',
    topicId: 'sentence-completion',
    question: 'An _____ observer, she noticed details others overlooked.',
    options: ['obtuse', 'astute', 'myopic', 'credulous'],
    correctAnswer: 1,
    explanation: "'Astute' means perceptive and shrewd.",
    difficulty: 'medium'
  },
  {
    id: 'sc-69',
    topicId: 'sentence-completion',
    question: 'When pressed for specifics, the spokesperson began to _____.',
    options: ['concede', 'equivocate', 'confide', 'capitulate'],
    correctAnswer: 1,
    explanation: "'Equivocate' means to speak ambiguously to avoid commitment.",
    difficulty: 'hard'
  },
  {
    id: 'sc-70',
    topicId: 'sentence-completion',
    question: 'Please omit _____ details that do not aid understanding.',
    options: ['salient', 'superfluous', 'pertinent', 'relevant'],
    correctAnswer: 1,
    explanation: "'Superfluous' means unnecessary or excessive.",
    difficulty: 'easy'
  },
  {
    id: 'sc-71',
    topicId: 'sentence-completion',
    question: 'The coach’s speech helped _____ the team before the final.',
    options: ['demoralize', 'galvanize', 'placate', 'alienate'],
    correctAnswer: 1,
    explanation: "To rouse into action is to 'galvanize'.",
    difficulty: 'medium'
  }
];