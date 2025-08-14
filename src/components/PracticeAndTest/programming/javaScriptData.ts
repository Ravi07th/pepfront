export const javascriptQuestions = [
  {
    id: 1,
    question: "What is the result of typeof null in JavaScript?",
    options: ["'null'", "'object'", "'undefined'", "'number'"],
    correctAnswer: 1,
    explanation: "Due to a historical bug, typeof null returns 'object'.",
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Which statement about 'let' and 'var' is true?",
    options: [
      "Both are function-scoped",
      "let is block-scoped; var is function-scoped",
      "var is block-scoped; let is function-scoped",
      "Both are block-scoped"
    ],
    correctAnswer: 1,
    explanation: "let is block-scoped while var is function-scoped.",
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "What does '===' check that '==' does not?",
    options: ["Value only", "Reference only", "Value and type", "Nothing extra"],
    correctAnswer: 2,
    explanation: "=== checks both value and type; == performs coercion.",
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Which best describes a closure?",
    options: [
      "A function bound to 'this'",
      "A function with access to its lexical scope even after the outer function has returned",
      "A function that cannot access outer variables",
      "A function compiled at runtime"
    ],
    correctAnswer: 1,
    explanation: "Closures capture the lexical environment and retain access after the outer call ends.",
    difficulty: 'medium'
  },
  {
    id: 5,
    question: "What is the output: console.log([1,2,3].map(x=>x*2))?",
    options: ["[2,4,6]", "[1,2,3]", "[3,6,9]", "Error"],
    correctAnswer: 0,
    explanation: "Array.map applies the function to each element, returning a new array [2,4,6].",
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "What does Array.prototype.reduce do?",
    options: [
      "Filters items by a predicate",
      "Transforms items to a new array",
      "Aggregates items into a single value",
      "Sorts items in-place"
    ],
    correctAnswer: 2,
    explanation: "reduce accumulates array elements to a single value using a reducer function.",
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "What is the value of NaN === NaN?",
    options: ["true", "false", "undefined", "TypeError"],
    correctAnswer: 1,
    explanation: "NaN is not equal to anything, including itself; use Number.isNaN to test.",
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "Which method adds elements to the end of an array and returns the new length?",
    options: ["push", "pop", "unshift", "concat"],
    correctAnswer: 0,
    explanation: "push appends to the end and returns the new length.",
    difficulty: 'easy'
  },
  {
    id: 9,
    question: "What does the 'this' keyword refer to in a regular function called as obj.fn()?",
    options: ["Global object", "undefined always", "The object before the dot (obj)", "The function itself"],
    correctAnswer: 2,
    explanation: "In a normal call obj.fn(), this is bound to obj (non-strict rules may vary).",
    difficulty: 'medium'
  },
  {
    id: 10,
    question: "Which feature prevents re-declaration in the same scope and has TDZ (temporal dead zone)?",
    options: ["var", "let", "function", "with"],
    correctAnswer: 1,
    explanation: "let and const have TDZ; let cannot be re-declared in the same scope.",
    difficulty: 'medium'
  },
  {
    id: 11,
    question: "What is the output: typeof undefined?",
    options: ["'object'", "'undefined'", "'null'", "'string'"],
    correctAnswer: 1,
    explanation: "typeof undefined returns 'undefined'.",
    difficulty: 'easy'
  },
  {
    id: 12,
    question: "Which statement about arrow functions is true?",
    options: [
      "They have their own 'this'",
      "They do not have their own 'this' and use lexical 'this'",
      "They must always return a value",
      "They are constructors"
    ],
    correctAnswer: 1,
    explanation: "Arrow functions capture 'this' lexically and cannot be used as constructors.",
    difficulty: 'medium'
  },
  {
    id: 13,
    question: "Which method creates a shallow copy merge of arrays?",
    options: ["push", "splice", "concat", "forEach"],
    correctAnswer: 2,
    explanation: "concat merges arrays and returns a new array (shallow).",
    difficulty: 'easy'
  },
  {
    id: 14,
    question: "What is the result of [...new Set([1,2,2,3])]?",
    options: ["[1,2,2,3]", "[1,2,3]", "[2,3]", "Error"],
    correctAnswer: 1,
    explanation: "Set removes duplicates; spread reconstructs the array as [1,2,3].",
    difficulty: 'easy'
  },
  {
    id: 15,
    question: "Which is NOT a primitive type in JS?",
    options: ["symbol", "bigint", "function", "boolean"],
    correctAnswer: 2,
    explanation: "function is not a primitive; primitives include string, number, bigint, boolean, symbol, undefined, null.",
    difficulty: 'easy'
  },
  {
    id: 16,
    question: "What does Object.freeze(obj) do?",
    options: [
      "Prevents adding/removing properties but allows value changes",
      "Makes the object fully immutable (no add/remove/update)",
      "Only prevents deletion",
      "Only prevents addition"
    ],
    correctAnswer: 1,
    explanation: "freeze prevents adding, removing, and changing existing properties (shallow).",
    difficulty: 'medium'
  },
  {
    id: 17,
    question: "Which is true about 'prototype' in JS?",
    options: [
      "Every object has a 'prototype' property",
      "Functions have 'prototype' used for instances created via 'new'",
      "Arrays do not use prototypes",
      "Classes do not use prototypes"
    ],
    correctAnswer: 1,
    explanation: "Only functions (constructor functions) have 'prototype' property for instance chains; objects have [[Prototype]].",
    difficulty: 'medium'
  },
  {
    id: 18,
    question: "What does 'use strict' change about 'this' in functions called without an object context?",
    options: [
      "this becomes the global object",
      "this is undefined",
      "this is the function",
      "this is window only in Node"
    ],
    correctAnswer: 1,
    explanation: "In strict mode, a plain function call has this = undefined.",
    difficulty: 'medium'
  },
  {
    id: 19,
    question: "Which Promise method runs regardless of resolve/reject?",
    options: ["then", "catch", "finally", "all"],
    correctAnswer: 2,
    explanation: "finally is called after settle (resolve or reject).",
    difficulty: 'easy'
  },
  {
    id: 20,
    question: "What is the output: await Promise.resolve(5)?",
    options: ["Promise<5>", "5", "undefined", "Error"],
    correctAnswer: 1,
    explanation: "await unwraps fulfilled promises and yields the value 5.",
    difficulty: 'easy'
  },
  {
    id: 21,
    question: "Which describes the event loop order?",
    options: [
      "macrotasks before microtasks",
      "microtasks before macrotasks",
      "random",
      "only macrotasks exist"
    ],
    correctAnswer: 1,
    explanation: "Microtasks (e.g., promise callbacks) run before the next macrotask.",
    difficulty: 'hard'
  },
  {
    id: 22,
    question: "What does the nullish coalescing operator (??) do?",
    options: [
      "Returns right operand if left is falsy",
      "Returns right operand if left is null or undefined",
      "Coerces both to string",
      "Performs bitwise OR"
    ],
    correctAnswer: 1,
    explanation: "?? yields the right operand only when left is null or undefined.",
    difficulty: 'medium'
  },
  {
    id: 23,
    question: "What does optional chaining (obj?.a?.b) prevent?",
    options: [
      "ReferenceError",
      "TypeError when accessing properties of null/undefined",
      "SyntaxError",
      "RangeError"
    ],
    correctAnswer: 1,
    explanation: "It short-circuits to undefined when a part is null/undefined, avoiding TypeError.",
    difficulty: 'medium'
  },
  {
    id: 24,
    question: "What is true about JSON.stringify({a:1, b: undefined})?",
    options: [
      "Includes undefined as null",
      "Drops keys with undefined values",
      "Throws",
      "Converts to 'undefined' string"
    ],
    correctAnswer: 1,
    explanation: "JSON drops undefined values in objects.",
    difficulty: 'medium'
  },
  {
    id: 25,
    question: "Which copies an object shallowly?",
    options: ["Object.assign({}, obj)", "JSON.parse(JSON.stringify(obj))", "structuredClone(obj)", "obj"],
    correctAnswer: 0,
    explanation: "Object.assign creates a shallow copy (top-level only).",
    difficulty: 'medium'
  },
  {
    id: 26,
    question: "Which statement about 'Array.prototype.sort()' is correct?",
    options: [
      "It is stable and non-mutating",
      "It is unstable and non-mutating",
      "It is stable (since ES2019) and mutates the array",
      "It is unstable and mutates the array"
    ],
    correctAnswer: 2,
    explanation: "Modern engines implement stable sort; sort mutates in-place.",
    difficulty: 'hard'
  },
  {
    id: 27,
    question: "What is the correct way to create a Symbol?",
    options: ["new Symbol()", "Symbol('desc')", "Symbol.create()", "symbol()"],
    correctAnswer: 1,
    explanation: "Call Symbol as a function: Symbol(description).",
    difficulty: 'easy'
  },
  {
    id: 28,
    question: "Which is NOT true about Map?",
    options: [
      "Preserves insertion order",
      "Allows keys of any type",
      "Has O(1) guaranteed lookup for all engines",
      "Has size property"
    ],
    correctAnswer: 2,
    explanation: "Map aims for average O(1), but not guaranteed for all scenarios; other statements are true.",
    difficulty: 'hard'
  },
  {
    id: 29,
    question: "Which produces a deep clone reliably for structured data (where supported)?",
    options: ["structuredClone(obj)", "Object.assign({}, obj)", "Object.create(obj)", "obj.constructor(obj)"],
    correctAnswer: 0,
    explanation: "structuredClone performs deep cloning for structured data where available.",
    difficulty: 'medium'
  },
  {
    id: 30,
    question: "What is the output: Number.isNaN('NaN')?",
    options: ["true", "false", "TypeError", "undefined"],
    correctAnswer: 1,
    explanation: "Number.isNaN does not coerce; string 'NaN' is not NaN.",
    difficulty: 'medium'
  },
  {
    id: 31,
    question: "Which of these creates an iterator?",
    options: ["function* gen(){}", "() => {}", "class C{}", "Promise.resolve()"],
    correctAnswer: 0,
    explanation: "Generator functions return generator objects which are iterators/iterables.",
    difficulty: 'medium'
  },
  {
    id: 32,
    question: "Which regex matches a 3-digit number?",
    options: ["/\\d{3}/", "/[0-9]{2}/", "/\\d{3}?/", "/^\\d{4}$/"],
    correctAnswer: 0,
    explanation: "\\d{3} matches any 3 digits in sequence.",
    difficulty: 'easy'
  },
  {
    id: 33,
    question: "What does 'Object.seal' do?",
    options: [
      "Disallows add/remove/update",
      "Disallows add/remove; allows update",
      "Disallows add; allows remove/update",
      "Allows add/remove/update"
    ],
    correctAnswer: 1,
    explanation: "seal prevents adding or deleting properties; existing values can still change.",
    difficulty: 'medium'
  },
  {
    id: 34,
    question: "Which statement about hoisting is true?",
    options: [
      "let and const are hoisted and initialized to undefined",
      "var and function declarations are hoisted; let/const exist in TDZ until initialized",
      "Only function declarations hoist",
      "Nothing is hoisted in JS"
    ],
    correctAnswer: 1,
    explanation: "var/function declarations hoist; let/const are hoisted but uninitialized (TDZ).",
    difficulty: 'hard'
  },
  {
    id: 35,
    question: "What will Boolean([]) evaluate to?",
    options: ["false", "true", "TypeError", "undefined"],
    correctAnswer: 1,
    explanation: "All objects (including empty arrays) are truthy.",
    difficulty: 'easy'
  },
  {
    id: 36,
    question: "Which creates an immutable binding but not an immutable value?",
    options: ["const obj = {}", "Object.freeze(obj)", "let x = 1", "Object.seal(obj)"] ,
    correctAnswer: 0,
    explanation: "const prevents rebinding, but the object can still be mutated unless frozen.",
    difficulty: 'medium'
  },
  {
    id: 37,
    question: "Which API converts a value to a different type explicitly?",
    options: ["parseInt", "==", "===", "typeof"],
    correctAnswer: 0,
    explanation: "parseInt converts string to integer; == can coerce implicitly, not explicitly.",
    difficulty: 'easy'
  },
  {
    id: 38,
    question: "What is true about Date objects?",
    options: [
      "Months are 1-based",
      "Date is immutable",
      "getMonth returns 0–11",
      "toISOString returns local time"
    ],
    correctAnswer: 2,
    explanation: "getMonth returns 0 for January through 11 for December.",
    difficulty: 'medium'
  },
  {
    id: 39,
    question: "What does Array.from do when given an iterable?",
    options: [
      "Clones the array in-place",
      "Creates a new array from the iterable",
      "Sorts the iterable",
      "Mutates the iterable"
    ],
    correctAnswer: 1,
    explanation: "Array.from constructs a new array from an iterable or array-like.",
    difficulty: 'easy'
  },
  {
    id: 40,
    question: "Which line correctly destructures with defaults: const {a=1,b=2} = obj?",
    options: [
      "const {a:1,b:2} = obj",
      "const {a=1,b=2} = obj",
      "const a=1,b=2=obj",
      "const {a,b} = {1,2}"
    ],
    correctAnswer: 1,
    explanation: "Default values use = in object pattern: {a=1,b=2}.",
    difficulty: 'easy'
  },
  {
    id: 41,
    question: "Which will deep-freeze nested objects?",
    options: ["Object.freeze (once)", "Recursive freeze", "Object.seal", "Object.preventExtensions"],
    correctAnswer: 1,
    explanation: "Deep freeze requires recursively freezing nested objects.",
    difficulty: 'hard'
  },
  {
    id: 42,
    question: "What is the output: [...'💯'].length?",
    options: ["1", "2", "3", "Depends on engine"],
    correctAnswer: 0,
    explanation: "Spread iterates by code points; emoji '💯' is one code point ⇒ length 1.",
    difficulty: 'hard'
  },
  {
    id: 43,
    question: "Which best defines a 'pure function'?",
    options: [
      "No side effects and same output for same input",
      "Uses this",
      "Is async",
      "Returns a Promise"
    ],
    correctAnswer: 0,
    explanation: "Purity implies referential transparency and no side effects.",
    difficulty: 'medium'
  },
  {
    id: 44,
    question: "What does Promise.allSettled return?",
    options: [
      "Array of fulfilled values",
      "Array of {status, value|reason}",
      "First fulfilled value",
      "First rejected reason"
    ],
    correctAnswer: 1,
    explanation: "allSettled returns status objects for each input promise.",
    difficulty: 'medium'
  },
  {
    id: 45,
    question: "Which statement about try...catch is true?",
    options: [
      "catch only catches sync errors thrown before it",
      "catch handles both sync and async errors in any task",
      "catch never executes in strict mode",
      "catch must rethrow"
    ],
    correctAnswer: 0,
    explanation: "Native catch captures synchronous throws; async errors need promise catch/await.",
    difficulty: 'hard'
  },
  {
    id: 46,
    question: "Which output: +'010' === 10?",
    options: ["true", "false", "TypeError", "NaN"],
    correctAnswer: 0,
    explanation: "Unary plus converts string to number; +'010' is 10.",
    difficulty: 'medium'
  },
  {
    id: 47,
    question: "Which statement about BigInt is true?",
    options: [
      "BigInt can be mixed with Number in arithmetic without issues",
      "BigInt supports arbitrary precision integers",
      "JSON.stringify preserves BigInt",
      "Math.max works with BigInt"
    ],
    correctAnswer: 1,
    explanation: "BigInt represents arbitrary-precision integers; mixing with Number throws.",
    difficulty: 'hard'
  },
  {
    id: 48,
    question: "Which creates a private field in a class?",
    options: ["this._x", "#x", "private x;", "Symbol('x')"],
    correctAnswer: 1,
    explanation: "ECMAScript private fields use #name syntax.",
    difficulty: 'medium'
  },
  {
    id: 49,
    question: "Which module syntax is correct for named import?",
    options: ["const m = require('x')", "import x from 'x'", "import { x } from 'x'", "module.import('x')"],
    correctAnswer: 2,
    explanation: "ESM named import uses braces: import { x } from 'x'.",
    difficulty: 'easy'
  },
  {
    id: 50,
    question: "What is 'debouncing' primarily used for?",
    options: [
      "Ensuring a function runs at most once per interval",
      "Ensuring a function runs at the end of a burst of calls",
      "Scheduling a function on the next tick",
      "Batching microtasks"
    ],
    correctAnswer: 1,
    explanation: "Debounce delays execution until no calls occur for a specified time.",
    difficulty: 'hard'
  },
  {
    id: 51,
    question: "What is 'throttling' primarily used for?",
    options: [
      "Ensuring a function runs at the end of burst",
      "Ensuring a function runs at most once per interval",
      "Batching DOM updates",
      "Ensuring function runs immediately and then never again"
    ],
    correctAnswer: 1,
    explanation: "Throttle limits execution to once per time window.",
    difficulty: 'hard'
  },
  {
    id: 52,
    question: "Which collections preserve insertion order for key iteration?",
    options: ["Object and Map", "Object only", "Map only", "Set only"],
    correctAnswer: 0,
    explanation: "Modern JS objects preserve insertion order for string keys; Map also preserves order.",
    difficulty: 'hard'
  },
  {
    id: 53,
    question: "Which string method returns an array of substrings split by a regex?",
    options: ["slice", "split", "substr", "substring"],
    correctAnswer: 1,
    explanation: "split takes a string or regex separator and returns an array.",
    difficulty: 'easy'
  },
  {
    id: 54,
    question: "What is the result: Math.min() with no arguments?",
    options: ["0", "Infinity", "-Infinity", "NaN"],
    correctAnswer: 1,
    explanation: "Math.min() returns Infinity when called without arguments.",
    difficulty: 'medium'
  },
  {
    id: 55,
    question: "Which is a safe way to test if a property exists on an object (own or inherited)?",
    options: ["obj.prop !== undefined", "'prop' in obj", "obj.hasOwnProperty('prop')", "Object.keys(obj).includes('prop')"],
    correctAnswer: 1,
    explanation: "'prop' in obj checks both own and prototype properties.",
    difficulty: 'medium'
  },
  {
    id: 56,
    question: "What is the output: [].push(1,2).toString()?",
    options: ["'1,2'", "'2'", "TypeError", "'1'"],
    correctAnswer: 2,
    explanation: "push returns the new length (2). toString() on 2 is '2'.",
    difficulty: 'hard'
  },
  {
    id: 57,
    question: "Which statement about 'for...in' vs 'for...of' is true?",
    options: [
      "for...in iterates values, for...of iterates keys",
      "for...in iterates enumerable keys, for...of iterates values of iterables",
      "Both iterate values",
      "Both iterate keys"
    ],
    correctAnswer: 1,
    explanation: "for...in: enumerable keys; for...of: iterable values.",
    difficulty: 'medium'
  },
  {
    id: 58,
    question: "Which is a correct way to catch an async error?",
    options: [
      "try { asyncFn() } catch(e){}",
      "asyncFn().catch(e=>{})",
      "await asyncFn(); // no try",
      "Promise.resolve(asyncFn())"
    ],
    correctAnswer: 1,
    explanation: "Use promise catch or try/await/catch pattern.",
    difficulty: 'medium'
  },
  {
    id: 59,
    question: "Which array method flattens nested arrays one level?",
    options: ["flat", "flatten", "reduce", "join"],
    correctAnswer: 0,
    explanation: "Array.prototype.flat(1) flattens one level by default.",
    difficulty: 'easy'
  },
  {
    id: 60,
    question: "Which is true about Intl.DateTimeFormat?",
    options: [
      "It mutates Date objects",
      "It formats dates according to locale without mutating Date",
      "It parses date strings",
      "It changes timezone of Date"
    ],
    correctAnswer: 1,
    explanation: "Intl.DateTimeFormat formats for display; it doesn't mutate or parse.",
    difficulty: 'hard'
  }
];


