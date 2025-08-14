export const syllogismsQuestions = [
  {
    id: 1,
    question: "Statements: All roses are flowers. Some flowers are red. Conclusion: Some roses are red.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All roses are flowers (All A are B) + Some flowers are red (Some B are C) = Some A are C. So some roses are red is definitely true."
  },
  {
    id: 2,
    question: "Statements: All cats are animals. All animals are living beings. Conclusion: All cats are living beings.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All cats are animals (All A are B) + All animals are living beings (All B are C) = All A are C. So all cats are living beings is definitely true."
  },
  {
    id: 3,
    question: "Statements: Some students are athletes. Some athletes are tall. Conclusion: Some students are tall.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "Some students are athletes (Some A are B) + Some athletes are tall (Some B are C) = No conclusion. We cannot determine if some students are tall."
  },
  {
    id: 4,
    question: "Statements: No birds are fish. All sparrows are birds. Conclusion: No sparrows are fish.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "No birds are fish (No A are B) + All sparrows are birds (All C are A) = No C are B. So no sparrows are fish is definitely true."
  },
  {
    id: 5,
    question: "Statements: All doctors are professionals. Some professionals are teachers. Conclusion: Some doctors are teachers.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "All doctors are professionals (All A are B) + Some professionals are teachers (Some B are C) = Some A are C. So some doctors are teachers is definitely true."
  },
  {
    id: 6,
    question: "Statements: Some books are novels. All novels are fiction. Conclusion: Some books are fiction.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "Some books are novels (Some A are B) + All novels are fiction (All B are C) = Some A are C. So some books are fiction is definitely true."
  },
  {
    id: 7,
    question: "Statements: No cars are bicycles. All vehicles are cars. Conclusion: No vehicles are bicycles.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "No cars are bicycles (No A are B) + All vehicles are cars (All C are A) = No C are B. So no vehicles are bicycles is definitely true."
  },
  {
    id: 8,
    question: "Statements: Some fruits are apples. Some apples are red. Conclusion: Some fruits are red.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "Some fruits are apples (Some A are B) + Some apples are red (Some B are C) = No conclusion. We cannot determine if some fruits are red."
  },
  {
    id: 9,
    question: "Statements: All scientists are researchers. Some researchers are professors. Conclusion: Some scientists are professors.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All scientists are researchers (All A are B) + Some researchers are professors (Some B are C) = Some A are C. So some scientists are professors is definitely true."
  },
  {
    id: 10,
    question: "Statements: No insects are mammals. All butterflies are insects. Conclusion: No butterflies are mammals.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "No insects are mammals (No A are B) + All butterflies are insects (All C are A) = No C are B. So no butterflies are mammals is definitely true."
  },
  {
    id: 11,
    question: "Statements: Some musicians are singers. All singers are performers. Conclusion: Some musicians are performers.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "Some musicians are singers (Some A are B) + All singers are performers (All B are C) = Some A are C. So some musicians are performers is definitely true."
  },
  {
    id: 12,
    question: "Statements: All computers are machines. Some machines are expensive. Conclusion: Some computers are expensive.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All computers are machines (All A are B) + Some machines are expensive (Some B are C) = Some A are C. So some computers are expensive is definitely true."
  },
  {
    id: 13,
    question: "Statements: Some students are athletes. Some athletes are tall. Some tall people are basketball players. Conclusion: Some students are basketball players.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "Multiple 'some' statements do not lead to a definite conclusion. We cannot determine if some students are basketball players."
  },
  {
    id: 14,
    question: "Statements: No reptiles are birds. All snakes are reptiles. Conclusion: No snakes are birds.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "No reptiles are birds (No A are B) + All snakes are reptiles (All C are A) = No C are B. So no snakes are birds is definitely true."
  },
  {
    id: 15,
    question: "Statements: All engineers are professionals. Some professionals are managers. Conclusion: Some engineers are managers.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All engineers are professionals (All A are B) + Some professionals are managers (Some B are C) = Some A are C. So some engineers are managers is definitely true."
  },
  {
    id: 16,
    question: "Statements: All roses are flowers. All flowers are plants. Conclusion: All roses are plants.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All roses are flowers (A→B) and all flowers are plants (B→C) ⇒ All roses are plants (A→C) is definitely true."
},
{
    id: 17,
    question: "Statements: Some cats are dogs. All dogs are animals. Conclusion: Some cats are animals.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "Some cats are dogs (Some A are B) and all dogs are animals (B→C) ⇒ Some cats are animals (Some A are C) is definitely true."
},
{
    id: 18,
    question: "Statements: All pens are books. No book is paper. Conclusion: No pen is paper.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All pens are books (A→B) and no book is paper (B→not C) ⇒ No pen is paper (A→not C) is definitely true."
},
{
    id: 19,
    question: "Statements: All apples are fruits. Some fruits are sweet. Conclusion: Some apples are sweet.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "All apples are fruits (A→B) and some fruits are sweet (Some B are C) does not guarantee that some apples are sweet. Cannot be determined."
},
{
    id: 20,
    question: "Statements: No fish is bird. All birds are animals. Conclusion: No fish is animal.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 1,
    explanation: "No fish is bird (A→not B) and all birds are animals (B→C) does not imply no fish is animal. It’s definitely false because fish can be animals."
},
{
    id: 21,
    question: "Statements: Some chairs are tables. Some tables are stools. Conclusion: Some chairs are stools.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "No direct link between chairs and stools can be established, so the conclusion cannot be determined."
},
{
    id: 22,
    question: "Statements: All books are pages. All pages are words. Conclusion: All books are words.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All books are pages (A→B) and all pages are words (B→C) ⇒ All books are words (A→C) is definitely true."
},
{
    id: 23,
    question: "Statements: Some cars are bikes. No bike is truck. Conclusion: Some cars are not trucks.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "From given statements, relationship between cars and trucks cannot be determined."
},
{
    id: 24,
    question: "Statements: All stars are suns. Some suns are planets. Conclusion: Some stars are planets.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "All stars are suns (A→B) and some suns are planets (Some B are C) does not confirm any stars are planets."
},
{
    id: 25,
    question: "Statements: No tree is flower. Some flowers are red. Conclusion: Some trees are red.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "Given statements provide no direct link between trees and red objects."
},
{
    id: 26,
    question: "Statements: All birds can fly. Some animals are birds. Conclusion: Some animals can fly.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "Some animals are birds (Some A are B) and all birds can fly ⇒ Some animals can fly is definitely true."
},
{
    id: 27,
    question: "Statements: Some books are pens. Some pens are pencils. Conclusion: Some books are pencils.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "No direct link between books and pencils; cannot be determined."
},
{
    id: 28,
    question: "Statements: All doctors are professionals. No professional is lazy. Conclusion: No doctor is lazy.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All doctors are professionals (A→B) and no professional is lazy (B→not C) ⇒ No doctor is lazy (A→not C) is definitely true."
},
{
    id: 29,
    question: "Statements: No pen is pencil. Some pencils are markers. Conclusion: Some pens are markers.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "No relationship between pens and markers can be established."
},
{
    id: 30,
    question: "Statements: All fruits are edible. All apples are fruits. Conclusion: All apples are edible.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All apples are fruits (A→B) and all fruits are edible (B→C) ⇒ All apples are edible (A→C) is definitely true."
},
{
    id: 31,
    question: "Statements: Some teachers are singers. All singers are artists. Conclusion: Some teachers are artists.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "Some teachers are singers (Some A are B) and all singers are artists (B→C) ⇒ Some teachers are artists (Some A are C) is definitely true."
},
{
    id: 32,
    question: "Statements: Some dogs are cats. Some cats are rats. Conclusion: Some dogs are rats.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "No direct link between dogs and rats is established."
},
{
    id: 33,
    question: "Statements: No computer is phone. All phones are devices. Conclusion: No computer is device.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 1,
    explanation: "No computer is phone (A→not B) and all phones are devices (B→C) does not mean no computer is device. This is definitely false."
},
{
    id: 34,
    question: "Statements: All cars are vehicles. Some vehicles are red. Conclusion: Some cars are red.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 3,
    explanation: "From the given statements, relationship between cars and red cannot be determined."
},
{
    id: 35,
    question: "Statements: All humans are mammals. All mammals are warm-blooded. Conclusion: All humans are warm-blooded.",
    options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
    correctAnswer: 0,
    explanation: "All humans are mammals (A→B) and all mammals are warm-blooded (B→C) ⇒ All humans are warm-blooded (A→C) is definitely true."
},
{
  id: 16,
  question: "Statements: All cats are animals. All animals are living beings. Conclusion: All cats are living beings.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All cats are animals (A→B) and all animals are living beings (B→C). Therefore, all cats are living beings (A→C) is definitely true."
},
{
  id: 17,
  question: "Statements: Some books are pens. No pen is a pencil. Conclusion: Some books are pencils.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 1,
  explanation: "Some books are pens and no pen is a pencil gives no direct link between books and pencils. Therefore, 'Some books are pencils' is definitely false."
},
{
  id: 18,
  question: "Statements: All roses are flowers. Some flowers are red. Conclusion: Some roses are red.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All roses are flowers and some flowers are red does not guarantee that some roses are red. Conclusion cannot be determined."
},
{
  id: 19,
  question: "Statements: All teachers are scholars. No scholar is lazy. Conclusion: No teacher is lazy.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All teachers are scholars and no scholar is lazy means no teacher is lazy. Conclusion is definitely true."
},
{
  id: 20,
  question: "Statements: Some fruits are apples. All apples are sweet. Conclusion: Some fruits are sweet.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some fruits are apples and all apples are sweet means those fruits are sweet. Conclusion is definitely true."
},
{
  id: 21,
  question: "Statements: No bird is a mammal. Some mammals are cats. Conclusion: Some birds are cats.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 1,
  explanation: "No bird is a mammal and some mammals are cats means birds have no connection with cats. Conclusion is definitely false."
},
{
  id: 22,
  question: "Statements: Some men are doctors. Some doctors are women. Conclusion: Some men are women.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "Some men are doctors and some doctors are women gives no direct link between men and women. Cannot be determined."
},
{
  id: 23,
  question: "Statements: All dogs are animals. Some animals are wild. Conclusion: Some dogs are wild.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All dogs are animals and some animals are wild does not ensure any dog is wild. Cannot be determined."
},
{
  id: 24,
  question: "Statements: Some cars are red. All red things are beautiful. Conclusion: Some cars are beautiful.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some cars are red and all red things are beautiful means those cars are beautiful. Definitely true."
},
{
  id: 25,
  question: "Statements: No pen is a book. All books are pages. Conclusion: No pen is a page.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No pen is a book and all books are pages gives no link between pens and pages. Cannot be determined."
},
{
  id: 26,
  question: "Statements: All squares are rectangles. All rectangles are quadrilaterals. Conclusion: All squares are quadrilaterals.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All squares are rectangles and all rectangles are quadrilaterals means all squares are quadrilaterals. Definitely true."
},
{
  id: 27,
  question: "Statements: Some laptops are expensive. All expensive things are valuable. Conclusion: Some laptops are valuable.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some laptops are expensive and all expensive things are valuable means those laptops are valuable. Definitely true."
},
{
  id: 28,
  question: "Statements: Some chairs are tables. Some tables are wooden. Conclusion: Some chairs are wooden.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "Some chairs are tables and some tables are wooden gives no certain link between chairs and wooden. Cannot be determined."
},
{
  id: 29,
  question: "Statements: All birds are animals. No animal is a reptile. Conclusion: No bird is a reptile.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All birds are animals and no animal is a reptile means no bird is a reptile. Definitely true."
},
{
  id: 30,
  question: "Statements: All students are readers. Some readers are writers. Conclusion: Some students are writers.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All students are readers and some readers are writers does not ensure some students are writers. Cannot be determined."
},
{
  id: 31,
  question: "Statements: No apple is a banana. No banana is a mango. Conclusion: No apple is a mango.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No apple is a banana and no banana is a mango gives no direct relation between apple and mango. Cannot be determined."
},
{
  id: 32,
  question: "Statements: All trains are vehicles. Some vehicles are buses. Conclusion: Some trains are buses.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All trains are vehicles and some vehicles are buses gives no link between trains and buses. Cannot be determined."
},
{
  id: 33,
  question: "Statements: Some pens are pencils. All pencils are instruments. Conclusion: Some pens are instruments.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some pens are pencils and all pencils are instruments means those pens are instruments. Definitely true."
},
{
  id: 34,
  question: "Statements: All flowers are plants. Some plants are herbs. Conclusion: Some flowers are herbs.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All flowers are plants and some plants are herbs gives no definite link between flowers and herbs. Cannot be determined."
},
{
  id: 35,
  question: "Statements: No fish is a bird. All birds are animals. Conclusion: No fish is an animal.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 1,
  explanation: "No fish is a bird and all birds are animals does not mean no fish is an animal. This conclusion is definitely false."
},
{
  id: 36,
  question: "Statements: Some mobiles are smart devices. All smart devices are costly. Conclusion: Some mobiles are costly.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some mobiles are smart devices and all smart devices are costly means those mobiles are costly. Definitely true."
},
{
  id: 37,
  question: "Statements: All cups are mugs. Some mugs are glasses. Conclusion: Some cups are glasses.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All cups are mugs and some mugs are glasses does not ensure some cups are glasses. Cannot be determined."
},
{
  id: 38,
  question: "Statements: No cow is a lion. All lions are carnivores. Conclusion: No cow is a carnivore.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No cow is a lion and all lions are carnivores gives no relation between cow and carnivore. Cannot be determined."
},
{
  id: 39,
  question: "Statements: All programmers are coders. All coders are engineers. Conclusion: All programmers are engineers.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All programmers are coders and all coders are engineers means all programmers are engineers. Definitely true."
},
{
  id: 40,
  question: "Statements: Some bottles are plastics. No plastic is biodegradable. Conclusion: Some bottles are biodegradable.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "Some bottles are plastics and no plastic is biodegradable gives no information about bottles being biodegradable. Cannot be determined."
},
{
  id: 41,
  question: "Statements: No chair is a bed. Some beds are furniture. Conclusion: Some chairs are furniture.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No chair is a bed and some beds are furniture gives no direct relation between chairs and furniture. Cannot be determined."
},
{
  id: 42,
  question: "Statements: Some games are sports. All sports are fun. Conclusion: Some games are fun.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some games are sports and all sports are fun means those games are fun. Definitely true."
},
{
  id: 43,
  question: "Statements: All clouds are water. Some water is ice. Conclusion: Some clouds are ice.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All clouds are water and some water is ice does not ensure some clouds are ice. Cannot be determined."
},
{
  id: 44,
  question: "Statements: No pen is paper. All papers are white. Conclusion: No pen is white.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No pen is paper and all papers are white gives no link between pens and white. Cannot be determined."
},
{
  id: 45,
  question: "Statements: All trains are fast. Some fast things are dangerous. Conclusion: Some trains are dangerous.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All trains are fast and some fast things are dangerous gives no certain link between trains and dangerous. Cannot be determined."
}
,
{
  id: 46,
  question: "Statements: All books are papers. No paper is a pen. Conclusion: No book is a pen.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All books are papers (A → B) + No paper is a pen (B → not C) ⇒ No book is a pen (A → not C). Definitely true."
},
{
  id: 47,
  question: "Statements: Some cats are dogs. All dogs are animals. Conclusion: Some cats are animals.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some cats are dogs (Some A are B) + All dogs are animals (All B are C) ⇒ Some cats are animals (Some A are C). Definitely true."
},
{
  id: 48,
  question: "Statements: No fruit is a vegetable. All vegetables are green. Conclusion: No fruit is green.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No fruit is a vegetable does not imply fruits can't be green. Green color could apply to fruits too. Cannot be determined."
},
{
  id: 49,
  question: "Statements: All trains are vehicles. All vehicles are machines. Conclusion: All trains are machines.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All trains are vehicles (A → B) + All vehicles are machines (B → C) ⇒ All trains are machines (A → C). Definitely true."
},
{
  id: 50,
  question: "Statements: Some birds are parrots. Some parrots are sparrows. Conclusion: Some birds are sparrows.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "Some birds are parrots + some parrots are sparrows does not ensure overlap between birds and sparrows. Cannot be determined."
},
{
  id: 51,
  question: "Statements: All roses are flowers. No flower is a leaf. Conclusion: No rose is a leaf.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All roses are flowers (A → B) + No flower is a leaf (B → not C) ⇒ No rose is a leaf (A → not C). Definitely true."
},
{
  id: 52,
  question: "Statements: All apples are fruits. Some fruits are mangoes. Conclusion: Some apples are mangoes.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All apples are fruits + some fruits are mangoes does not guarantee overlap between apples and mangoes. Cannot be determined."
},
{
  id: 53,
  question: "Statements: Some pens are pencils. All pencils are tools. Conclusion: Some pens are tools.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some pens are pencils (Some A are B) + All pencils are tools (All B are C) ⇒ Some pens are tools (Some A are C). Definitely true."
},
{
  id: 54,
  question: "Statements: No dog is a cat. Some cats are pets. Conclusion: Some dogs are pets.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No dog is a cat does not give info about dogs and pets. Cannot be determined."
},
{
  id: 55,
  question: "Statements: All computers are machines. Some machines are devices. Conclusion: Some computers are devices.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "All computers are machines + some machines are devices does not ensure overlap between computers and devices. Cannot be determined."
},
{
  id: 56,
  question: "Statements: Some men are doctors. All doctors are educated. Conclusion: Some men are educated.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "Some men are doctors (Some A are B) + All doctors are educated (All B are C) ⇒ Some men are educated (Some A are C). Definitely true."
},
{
  id: 57,
  question: "Statements: No chair is a table. No table is a desk. Conclusion: No chair is a desk.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "No chair is a table + no table is a desk does not imply no chair is a desk. Cannot be determined."
},
{
  id: 58,
  question: "Statements: All cars are vehicles. No vehicle is a plane. Conclusion: No car is a plane.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All cars are vehicles (A → B) + No vehicle is a plane (B → not C) ⇒ No car is a plane (A → not C). Definitely true."
},
{
  id: 59,
  question: "Statements: Some toys are dolls. Some dolls are games. Conclusion: Some toys are games.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 3,
  explanation: "Some toys are dolls + some dolls are games does not ensure overlap between toys and games. Cannot be determined."
},
{
  id: 60,
  question: "Statements: All humans are mammals. All mammals are animals. Conclusion: All humans are animals.",
  options: ["Definitely true", "Definitely false", "Probably true", "Cannot be determined"],
  correctAnswer: 0,
  explanation: "All humans are mammals (A → B) + All mammals are animals (B → C) ⇒ All humans are animals (A → C). Definitely true."
}

];
