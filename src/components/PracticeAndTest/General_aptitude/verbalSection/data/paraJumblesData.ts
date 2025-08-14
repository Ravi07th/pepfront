import { VerbalQuestion } from "../types";

export const paraJumblesQuestions: VerbalQuestion[] = [
  {
    id: 'pj-1',
    topicId: 'para-jumbles',
    question: "Arrange the sentences in correct order: 1) The sun was setting. 2) Birds were returning to their nests. 3) The day was coming to an end. 4) The sky turned orange.",
    options: [
      '1-4-2-3',
      '4-1-2-3',
      '1-2-4-3',
      '3-1-4-2'
    ],
    correctAnswer: 0,
    explanation: "The logical sequence is: sun setting (1) → sky turning orange (4) → birds returning (2) → day ending (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-2',
    topicId: 'para-jumbles',
    question: "Arrange: 1) He opened the door. 2) The phone was ringing. 3) He answered the call. 4) He walked to the phone.",
    options: [
      '2-1-4-3',
      '1-2-4-3',
      '2-4-1-3',
      '1-4-2-3'
    ],
    correctAnswer: 0,
    explanation: "The sequence is: phone ringing (2) → opening door (1) → walking to phone (4) → answering call (3).",
    difficulty: 'easy'
  },
  {
    id: 'pj-3',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The rain stopped. 2) The clouds cleared. 3) The sun appeared. 4) A rainbow formed.",
    options: [
      '1-2-3-4',
      '2-1-3-4',
      '1-3-2-4',
      '2-3-1-4'
    ],
    correctAnswer: 0,
    explanation: "The logical sequence is: rain stopping (1) → clouds clearing (2) → sun appearing (3) → rainbow forming (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-4',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The alarm rang. 2) She brushed her teeth. 3) She woke up. 4) She left for work.",
    options: [
      '3-1-2-4', // Correct
      '1-3-4-2',
      '2-1-3-4',
      '1-2-3-4'
    ],
    correctAnswer: 0,
    explanation: "Logical sequence: waking up (3) → alarm ringing (1) → brushing teeth (2) → leaving for work (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-5',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The chef chopped vegetables. 2) The oven was preheated. 3) The dish was served. 4) The meal was cooked.",
    options: [
      '1-4-2-3',
      '2-1-4-3', // Correct
      '3-2-1-4',
      '4-1-3-2'
    ],
    correctAnswer: 1,
    explanation: "Preheating oven (2) → chopping veggies (1) → cooking (4) → serving (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-6',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The audience applauded. 2) The performer bowed. 3) The concert ended. 4) The lights dimmed.",
    options: [
      '3-4-1-2',
      '4-3-1-2', // Correct
      '2-1-4-3',
      '1-2-3-4'
    ],
    correctAnswer: 1,
    explanation: "Lights dimming (4) → concert ending (3) → applause (1) → bowing (2).",
    difficulty: 'hard'
  },
  {
    id: 'pj-7',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The package was delivered. 2) The order was placed. 3) The customer unboxed it. 4) The item was shipped.",
    options: [
      '2-4-1-3', // Correct
      '1-3-4-2',
      '4-2-3-1',
      '3-1-2-4'
    ],
    correctAnswer: 0,
    explanation: "Order placed (2) → item shipped (4) → delivery (1) → unboxing (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-8',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The leaves turned yellow. 2) The temperature dropped. 3) The birds migrated. 4) Autumn arrived.",
    options: [
      '4-2-1-3', // Correct
      '1-3-4-2',
      '2-4-3-1',
      '3-1-2-4'
    ],
    correctAnswer: 0,
    explanation: "Autumn arrival (4) → temperature drop (2) → leaves yellowing (1) → bird migration (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-9',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The software crashed. 2) The programmer debugged the code. 3) The user reported a bug. 4) The update was released.",
    options: [
      '1-3-2-4', // Correct
      '3-1-4-2',
      '2-4-1-3',
      '4-2-3-1'
    ],
    correctAnswer: 0,
    explanation: "Crash (1) → bug report (3) → debugging (2) → update release (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-10',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The team celebrated. 2) The match was won. 3) The players trained. 4) The tournament began.",
    options: [
      '4-3-2-1', // Correct
      '3-2-4-1',
      '2-1-3-4',
      '1-4-3-2'
    ],
    correctAnswer: 0,
    explanation: "Tournament start (4) → training (3) → winning (2) → celebration (1).",
    difficulty: 'easy'
  },
  {
    id: 'pj-11',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The artist sketched the outline. 2) The painting was exhibited. 3) The colors were filled. 4) The canvas was prepared.",
    options: [
      '4-1-3-2', // Correct
      '1-3-4-2',
      '2-4-1-3',
      '3-1-2-4'
    ],
    correctAnswer: 0,
    explanation: "Canvas prep (4) → sketching (1) → coloring (3) → exhibition (2).",
    difficulty: 'medium'
  },
  {
    id: 'pj-12',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The flight was booked. 2) The passport was checked. 3) The luggage was packed. 4) The boarding pass was issued.",
    options: [
      '1-3-2-4', // Correct
      '3-1-4-2',
      '2-4-1-3',
      '4-2-3-1'
    ],
    correctAnswer: 0,
    explanation: "Booking (1) → packing (3) → passport check (2) → boarding pass (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-13',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The hypothesis was tested. 2) The data was analyzed. 3) The experiment was designed. 4) The results were published.",
    options: [
      '3-1-2-4', // Correct
      '1-3-4-2',
      '2-4-3-1',
      '4-2-1-3'
    ],
    correctAnswer: 0,
    explanation: "Design (3) → testing (1) → analysis (2) → publication (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-14',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The cake was baked. 2) The ingredients were mixed. 3) The oven was preheated. 4) The frosting was added.",
    options: [
      '2-1-3-4',
      '3-2-1-4', // Correct (index 1)
      '1-4-2-3',
      '4-3-1-2'
    ],
    correctAnswer: 1,
    explanation: "Preheat oven (3) → mix ingredients (2) → bake (1) → add frosting (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-15',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The email was sent. 2) The report was drafted. 3) The data was collected. 4) The feedback was received.",
    options: [
      '1-3-2-4',
      '3-2-1-4', // Correct (index 1)
      '2-4-3-1',
      '4-1-2-3'
    ],
    correctAnswer: 1,
    explanation: "Collect data (3) → draft report (2) → send email (1) → receive feedback (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-16',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The movie started. 2) The tickets were booked. 3) The snacks were bought. 4) The credits rolled.",
    options: [
      '1-3-2-4',
      '2-3-1-4', // Correct (index 1)
      '3-1-4-2',
      '4-2-1-3'
    ],
    correctAnswer: 1,
    explanation: "Book tickets (2) → buy snacks (3) → movie starts (1) → credits roll (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-17',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The plant wilted. 2) The soil dried. 3) The rain stopped. 4) The leaves fell.",
    options: [
      '3-2-1-4', // Correct (index 0)
      '1-4-2-3',
      '2-1-3-4',
      '4-3-1-2'
    ],
    correctAnswer: 0,
    explanation: "Rain stops (3) → soil dries (2) → plant wilts (1) → leaves fall (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-18',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The keys were lost. 2) The locksmith arrived. 3) The door was locked. 4) The spare key was used.",
    options: [
      '1-3-2-4', // Correct (index 0)
      '3-1-4-2',
      '2-4-1-3',
      '4-2-3-1'
    ],
    correctAnswer: 0,
    explanation: "Keys lost (1) → door locked (3) → locksmith arrives (2) → spare key used (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-19',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The speech was written. 2) The audience clapped. 3) The speaker practiced. 4) The event began.",
    options: [
      '4-1-3-2', // Correct (index 0)
      '1-3-4-2',
      '3-2-1-4',
      '2-4-1-3'
    ],
    correctAnswer: 0,
    explanation: "Write speech (1) → practice (3) → event starts (4) → audience claps (2).",
    difficulty: 'medium'
  },
  {
    id: 'pj-20',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The battery died. 2) The charger was plugged in. 3) The phone was used. 4) The screen turned off.",
    options: [
      '3-1-4-2', // Correct (index 0)
      '1-4-2-3',
      '2-3-1-4',
      '4-2-3-1'
    ],
    correctAnswer: 0,
    explanation: "Use phone (3) → battery dies (1) → screen off (4) → plug charger (2).",
    difficulty: 'easy'
  },
  {
    id: 'pj-21',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The flight was delayed. 2) The passengers boarded. 3) The luggage was loaded. 4) The runway was cleared.",
    options: [
      '1-3-4-2', // Correct (index 0)
      '3-2-1-4',
      '2-4-1-3',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Flight delayed (1) → luggage loaded (3) → runway cleared (4) → boarding (2).",
    difficulty: 'hard'
  },
  {
    id: 'pj-22',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The concert was announced. 2) The tickets sold out. 3) The band performed. 4) The venue was booked.",
    options: [
      '1-4-2-3', // Correct (index 0)
      '4-2-1-3',
      '2-3-4-1',
      '3-1-4-2'
    ],
    correctAnswer: 0,
    explanation: "Announcement (1) → venue booking (4) → tickets sell out (2) → performance (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-23',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The error was fixed. 2) The bug was reported. 3) The code was reviewed. 4) The update was deployed.",
    options: [
      '2-3-1-4', // Correct (index 0)
      '3-1-4-2',
      '1-4-2-3',
      '4-2-3-1'
    ],
    correctAnswer: 0,
    explanation: "Bug report (2) → code review (3) → fix error (1) → deploy update (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-24',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The coffee was brewed. 2) The beans were ground. 3) The water boiled. 4) The cup was filled.",
    options: [
      '3-2-1-4', // Correct (index 0)
      '2-3-1-4',
      '1-4-2-3',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Boil water (3) → grind beans (2) → brew coffee (1) → fill cup (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-25',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The letter was posted. 2) The envelope was sealed. 3) The address was written. 4) The stamp was affixed.",
    options: [
      '3-2-4-1', // Correct (index 0)
      '2-4-3-1',
      '1-3-2-4',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Write address (3) → seal envelope (2) → affix stamp (4) → post letter (1).",
    difficulty: 'medium'
  },
  {
    id: 'pj-26',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The lights flickered. 2) The storm began. 3) The power went out. 4) The generator started.",
    options: [
      '2-1-3-4', // Correct (index 0)
      '1-3-2-4',
      '3-4-2-1',
      '4-2-1-3'
    ],
    correctAnswer: 0,
    explanation: "Storm starts (2) → lights flicker (1) → power outage (3) → generator starts (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-27',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The recipe was followed. 2) The groceries were bought. 3) The meal was cooked. 4) The table was set.",
    options: [
      '2-1-3-4', // Correct (index 0)
      '1-3-4-2',
      '3-4-2-1',
      '4-2-1-3'
    ],
    correctAnswer: 0,
    explanation: "Buy groceries (2) → follow recipe (1) → cook meal (3) → set table (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-28',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The car was washed. 2) The soap was applied. 3) The water was sprayed. 4) The tires were polished.",
    options: [
      '3-2-1-4', // Correct (index 0)
      '2-3-1-4',
      '1-4-2-3',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Spray water (3) → apply soap (2) → wash car (1) → polish tires (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-29',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The painting was admired. 2) The artist signed it. 3) The gallery opened. 4) The exhibit was hung.",
    options: [
      '3-4-2-1', // Correct (index 0)
      '4-2-3-1',
      '2-1-4-3',
      '1-3-2-4'
    ],
    correctAnswer: 0,
    explanation: "Gallery opens (3) → exhibit hung (4) → artist signs (2) → painting admired (1).",
    difficulty: 'hard'
  },
  {
    id: 'pj-30',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The alarm was set. 2) The clothes were laid out. 3) The bedtime story was read. 4) The lights were turned off.",
    options: [
      '3-4-1-2', // Correct (index 0)
      '1-2-3-4',
      '2-3-4-1',
      '4-1-2-3'
    ],
    correctAnswer: 0,
    explanation: "Read story (3) → lights off (4) → set alarm (1) → lay out clothes (2).",
    difficulty: 'easy'
  },
  {
    id: 'pj-31',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The interview was scheduled. 2) The résumé was submitted. 3) The offer was accepted. 4) The questions were rehearsed.",
    options: [
      '2-1-4-3', // Correct (index 0)
      '1-4-2-3',
      '3-2-1-4',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Submit résumé (2) → schedule interview (1) → rehearse (4) → accept offer (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-32',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The seeds were planted. 2) The flowers bloomed. 3) The soil was tilled. 4) The garden was watered.",
    options: [
      '3-1-4-2', // Correct (index 0)
      '1-4-3-2',
      '2-3-4-1',
      '4-2-1-3'
    ],
    correctAnswer: 0,
    explanation: "Till soil (3) → plant seeds (1) → water garden (4) → flowers bloom (2).",
    difficulty: 'easy'
  },
  {
    id: 'pj-33',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The password was reset. 2) The account was hacked. 3) The security alert was received. 4) Two-factor authentication was enabled.",
    options: [
      '2-3-1-4', // Correct (index 0)
      '3-2-4-1',
      '1-4-2-3',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Account hacked (2) → security alert (3) → reset password (1) → enable 2FA (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-34',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The dog barked. 2) The doorbell rang. 3) The owner opened the door. 4) The package was delivered.",
    options: [
      '1-3-2-4',
      '2-1-3-4', // Correct (index 1)
      '3-4-1-2',
      '4-2-1-3'
    ],
    correctAnswer: 1,
    explanation: "Doorbell rings (2) → dog barks (1) → owner opens door (3) → package delivered (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-35',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The ice melted. 2) The sun shone brightly. 3) The child drank the lemonade. 4) The glass was filled.",
    options: [
      '3-1-2-4',
      '2-1-4-3', // Correct (index 1)
      '1-4-3-2',
      '4-2-1-3'
    ],
    correctAnswer: 1,
    explanation: "Sun shines (2) → ice melts (1) → glass filled (4) → child drinks (3).",
    difficulty: 'easy'
  },
  {
    id: 'pj-36',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The meeting started. 2) The agenda was shared. 3) The notes were taken. 4) The decisions were finalized.",
    options: [
      '1-2-4-3',
      '2-1-3-4', // Correct (index 1)
      '3-4-1-2',
      '4-1-2-3'
    ],
    correctAnswer: 1,
    explanation: "Agenda shared (2) → meeting starts (1) → notes taken (3) → decisions finalized (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-37',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The car was repaired. 2) The mechanic diagnosed the issue. 3) The parts were replaced. 4) The bill was paid.",
    options: [
      '1-3-2-4',
      '2-3-1-4', // Correct (index 1)
      '3-4-2-1',
      '4-2-1-3'
    ],
    correctAnswer: 1,
    explanation: "Diagnose issue (2) → replace parts (3) → repair car (1) → pay bill (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-38',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The campfire was lit. 2) The wood was gathered. 3) The marshmallows were roasted. 4) The fire was extinguished.",
    options: [
      '1-2-3-4',
      '2-1-3-4', // Correct (index 1)
      '3-4-1-2',
      '4-1-2-3'
    ],
    correctAnswer: 1,
    explanation: "Gather wood (2) → light fire (1) → roast marshmallows (3) → extinguish fire (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-39',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The novel was published. 2) The manuscript was edited. 3) The draft was written. 4) The reviews came in.",
    options: [
      '3-2-1-4', // Correct (index 2)
      '1-4-2-3',
      '2-3-4-1',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Write draft (3) → edit manuscript (2) → publish novel (1) → receive reviews (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-40',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The patient recovered. 2) The medicine was administered. 3) The symptoms worsened. 4) The doctor was called.",
    options: [
       // Correct (index 2)
      '1-2-4-3',
      '2-3-1-4',
      '3-4-2-1',
      '4-3-2-1'
    ],
    correctAnswer: 2,
    explanation: "Symptoms worsen (3) → call doctor (4) → administer medicine (2) → patient recovers (1).",
    difficulty: 'hard'
  },
  {
    id: 'pj-41',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The guests arrived. 2) The invitations were sent. 3) The cake was cut. 4) The decorations were hung.",
    options: [
       // Correct (index 2)
      '1-3-4-2',
      '4-1-2-3',
      '2-4-1-3',
      '3-2-4-1'
    ],
    correctAnswer: 2,
    explanation: "Send invites (2) → hang decorations (4) → guests arrive (1) → cut cake (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-42',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The laptop crashed. 2) The files were saved. 3) The work was completed. 4) The system was rebooted.",
    options: [
      '3-2-1-4', // Correct (index 2)
      '1-4-2-3',
      '2-3-4-1',
      '4-1-3-2'
    ],
    correctAnswer: 0,
    explanation: "Complete work (3) → save files (2) → laptop crashes (1) → reboot system (4).",
    difficulty: 'hard'
  },
  {
    id: 'pj-43',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The song was recorded. 2) The lyrics were written. 3) The melody was composed. 4) The album was released.",
    options: [
       // Correct (index 2)
      '1-4-2-3',
      '3-2-4-1',
      '4-1-3-2',
      '2-3-1-4',
    ],
    correctAnswer: 3,
    explanation: "Write lyrics (2) → compose melody (3) → record song (1) → release album (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-44',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The athlete stretched. 2) The race began. 3) The warm-up was done. 4) The medal was won.",
    options: [
       // Correct (index 2)
      '1-3-2-4',
      '2-4-1-3',
      '3-1-4-2',
      '4-2-3-1',
    ],
    correctAnswer: 2,
    explanation: "Warm up (3) → stretch (1) → race begins (2) → win medal (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-45',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The leaves were raked. 2) The trees shed leaves. 3) The compost was made. 4) The yard was cleaned.",
    options: [
       // Correct (index 2)
      '1-4-2-3',
      '4-3-2-1',
      '3-2-1-4','2-1-4-3',
    ],
    correctAnswer: 3,
    explanation: "Trees shed (2) → rake leaves (1) → clean yard (4) → make compost (3).",
    difficulty: 'medium'
  },
  {
    id: 'pj-46',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The password was reset. 2) The account was locked. 3) The login attempts failed. 4) The security email was sent.",
    options: [
       // Correct (index 2)
      '1-4-2-3',
      '2-3-1-4',
      '4-1-3-2',
      '3-2-4-1',  
    ],
    correctAnswer: 3,
    explanation: "Failed logins (3) → account locked (2) → security email sent (4) → password reset (1).",
    difficulty: 'hard'
  },
  {
    id: 'pj-47',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The paint dried. 2) The walls were prepped. 3) The color was chosen. 4) The brushes were cleaned.",
    options: [
       // Correct (index 2)
      '1-4-2-3',
      '2-3-4-1',
      '3-2-1-4',
      '4-1-3-2'
    ],
    correctAnswer: 2,
    explanation: "Choose color (3) → prep walls (2) → paint dries (1) → clean brushes (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-48',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The flight landed. 2) The luggage was claimed. 3) The boarding pass was scanned. 4) The taxi was hailed.",
    options: [
       // Correct (index 2)
      '1-2-4-3',
      '2-4-3-1',
      '4-3-1-2',
      '3-1-2-4'
    ],
    correctAnswer: 3,
    explanation: "Scan boarding pass (3) → flight lands (1) → claim luggage (2) → hail taxi (4).",
    difficulty: 'easy'
  },
  {
    id: 'pj-49',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The notification popped up. 2) The phone was charged. 3) The app was installed. 4) The update was downloaded.",
    options: [
      '3-4-1-2', // Correct (index 2)
      '1-2-4-3',
      '4-3-2-1',
      '2-1-3-4'
    ],
    correctAnswer: 0,
    explanation: "Install app (3) → download update (4) → notification pops (1) → charge phone (2).",
    difficulty: 'medium'
  },
  {
    id: 'pj-50',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The lights were dimmed. 2) The movie played. 3) The tickets were checked. 4) The trailers ended.",
    options: [
      '3-1-4-2', // Correct (index 2)
      '1-4-2-3',
      '4-2-3-1',
      '2-3-1-4'
    ],
    correctAnswer: 0,
    explanation: "Check tickets (3) → dim lights (1) → trailers end (4) → movie plays (2).",
    difficulty: 'easy'
  },
  {
    id: 'pj-51',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The ingredients were measured. 2) The oven beeped. 3) The recipe was followed. 4) The cookies cooled.",
    options: [
      '1-3-2-4', // Correct (index 2)
      '2-4-1-3',
      '3-1-4-2',
      '4-2-3-1'
    ],
    correctAnswer: 0,
    explanation: "Measure ingredients (1) → follow recipe (3) → oven beeps (2) → cookies cool (4).",
    difficulty: 'medium'
  },
  {
    id: 'pj-52',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The alarm sounded. 2) The firetruck arrived. 3) The smoke detector activated. 4) The flames spread.",
    options: [
      '3-1-4-2', // Correct (index 2)
      '1-2-4-3',
      '4-3-2-1',
      '2-4-1-3'
    ],
    correctAnswer: 0,
    explanation: "Detector activates (3) → alarm sounds (1) → flames spread (4) → firetruck arrives (2).",
    difficulty: 'hard'
  },
  {
    id: 'pj-53',
    topicId: 'para-jumbles',
    question: "Arrange: 1) The contract was signed. 2) The terms were negotiated. 3) The handshake happened. 4) The deal was celebrated.",
    options: [
       // Correct (index 2)
      '1-4-2-3',
      '3-2-4-1',
      '4-1-3-2',
      '2-3-1-4'
    ],
    correctAnswer: 3,
    explanation: "Negotiate terms (2) → handshake (3) → sign contract (1) → celebrate deal (4).",
    difficulty: 'medium'
  },
  
    {
      id: 'pj-54',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The printer jammed. 2) The document was queued. 3) The paper was reloaded. 4) The printing resumed.",
      options: [
        '1-3-2-4',
        '2-1-3-4', // Correct (index 1)
        '3-4-1-2',
        '4-2-1-3'
      ],
      correctAnswer: 1,
      explanation: "Document queued (2) → printer jams (1) → reload paper (3) → printing resumes (4).",
      difficulty: 'easy'
    },
    {
      id: 'pj-55',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The seedling sprouted. 2) The seed was planted. 3) The soil was watered. 4) The leaves grew.",
      options: [
         // Correct (index 2)
        '1-4-2-3',
        '3-2-4-1',
        '2-3-1-4',
        '4-1-3-2',
        
      ],
      correctAnswer: 2,
      explanation: "Plant seed (2) → water soil (3) → seedling sprouts (1) → leaves grow (4).",
      difficulty: 'easy'
    },
    {
      id: 'pj-56',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The error message appeared. 2) The code was debugged. 3) The program crashed. 4) The fix was deployed.",
      options: [
         // Correct (index 2)
        '3-4-1-2',
        '2-1-4-3',
        '1-3-2-4',
        '4-2-3-1'
      ],
      correctAnswer: 2,
      explanation: "Error appears (1) → program crashes (3) → debug code (2) → deploy fix (4).",
      difficulty: 'hard'
    },
    {
      id: 'pj-57',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The pizza was delivered. 2) The order was placed. 3) The toppings were chosen. 4) The oven was preheated.",
      options: [
         // Correct (index 2)
        '1-4-2-3',
        '2-3-1-4',
        '3-2-4-1',
        '4-1-3-2'
      ],
      correctAnswer: 2,
      explanation: "Choose toppings (3) → place order (2) → preheat oven (4) → pizza delivered (1).",
      difficulty: 'medium'
    },
    {
      id: 'pj-58',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The concert ended. 2) The band played an encore. 3) The crowd cheered. 4) The lights came on.",
      options: [
        '1-3-2-4',
        '2-3-1-4', // Correct (index 1)
        '3-4-1-2',
        '4-2-3-1'
      ],
      correctAnswer: 1,
      explanation: "Band plays encore (2) → crowd cheers (3) → concert ends (1) → lights on (4).",
      difficulty: 'medium'
    },
    {
      id: 'pj-59',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The battery was charged. 2) The phone died. 3) The charger was found. 4) The power outlet was used.",
      options: [
         // Correct (index 2)
        '1-4-2-3',
        '3-2-1-4',
        '2-3-4-1',
        '4-1-3-2'
      ],
      correctAnswer: 2,
      explanation: "Phone dies (2) → find charger (3) → use outlet (4) → charge battery (1).",
      difficulty: 'easy'
    },
    {
      id: 'pj-60',
      topicId: 'para-jumbles',
      question: "Arrange: 1) The suitcase was packed. 2) The flight was boarded. 3) The hotel was booked. 4) The passport was checked.",
      options: [
        '3-1-4-2', // Correct (index 2)
        '1-4-3-2',
        '4-2-3-1',
        '2-3-1-4'
      ],
      correctAnswer: 0,
      explanation: "Book hotel (3) → pack suitcase (1) → check passport (4) → board flight (2).",
      difficulty: 'medium'
    }
];
