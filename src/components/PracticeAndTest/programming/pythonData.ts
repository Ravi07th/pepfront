export const pythonQuestions = [
  {
    id: 1,
    question: "What is the output of type(lambda x: x)?",
    options: ["<class 'function'>", "<class 'lambda'>", "<class 'callable'>", "<class 'method'>"],
    correctAnswer: 0,
    explanation: "Lambdas are functions; their type is <class 'function'>.",
    difficulty: 'easy'
  },
  {
    id: 2,
    question: "Which is immutable?",
    options: ["list", "dict", "tuple", "set"],
    correctAnswer: 2,
    explanation: "tuple is immutable; list/dict/set are mutable.",
    difficulty: 'easy'
  },
  {
    id: 3,
    question: "What is the result of bool([])?",
    options: ["True", "False", "TypeError", "None"],
    correctAnswer: 1,
    explanation: "Empty containers are falsy in Python.",
    difficulty: 'easy'
  },
  {
    id: 4,
    question: "Which creates a set with one element 1?",
    options: ["{1}", "(1)", "set(1)", "[1]"],
    correctAnswer: 0,
    explanation: "{1} is a set literal with single element 1; (1) is int; set(1) invalid.",
    difficulty: 'easy'
  },
  {
    id: 5,
    question: "What is the output of 'hello'.upper()?",
    options: ["'HELLO'", "'Hello'", "'hello'", "Error"],
    correctAnswer: 0,
    explanation: "upper returns an uppercase copy.",
    difficulty: 'easy'
  },
  {
    id: 6,
    question: "Which comprehension creates a dict mapping x→x*x for x in 1..3?",
    options: [
      "{x: x*x for x in range(1,4)}",
      "[x: x*x for x in range(1,4)]",
      "(x: x*x for x in range(1,4))",
      "dict[x: x*x for x in range(1,4)]"
    ],
    correctAnswer: 0,
    explanation: "Dict comprehension uses braces with key: value.",
    difficulty: 'easy'
  },
  {
    id: 7,
    question: "Which best describes a generator?",
    options: [
      "Function returning a list",
      "Function using yield to produce a sequence lazily",
      "A class with __iter__",
      "An iterator protocol consumer"
    ],
    correctAnswer: 1,
    explanation: "Generators use yield to produce values lazily.",
    difficulty: 'medium'
  },
  {
    id: 8,
    question: "What is the value of None == 0?",
    options: ["True", "False", "TypeError", "Depends"],
    correctAnswer: 1,
    explanation: "None only equals itself; not equal to 0.",
    difficulty: 'medium'
  },
  {
    id: 9,
    question: "Which opens a file for reading in text mode?",
    options: ["open('f','rb')", "open('f','r')", "open('f','w')", "open('f','a')"],
    correctAnswer: 1,
    explanation: "'r' opens for reading text; 'rb' for binary.",
    difficulty: 'easy'
  },
  {
    id: 10,
    question: "What does list.append do?",
    options: ["Adds element at end", "Inserts at index 0", "Returns a new list", "Sorts in-place"],
    correctAnswer: 0,
    explanation: "append mutates the list by adding at end and returns None.",
    difficulty: 'easy'
  },
  {
    id: 11,
    question: "Which creates a shallow copy of a list 'a'?",
    options: ["a.copy()", "list(a)", "a[:]", "All of these"],
    correctAnswer: 3,
    explanation: "All listed ways produce a shallow copy of the list.",
    difficulty: 'easy'
  },
  {
    id: 12,
    question: "What is the output: {1,2,2,3} equals?",
    options: ["{1,2,2,3}", "{1,2,3}", "[1,2,3]", "(1,2,3)"],
    correctAnswer: 1,
    explanation: "Sets contain unique elements; duplicates are removed.",
    difficulty: 'easy'
  },
  {
    id: 13,
    question: "What does *args capture in a function signature?",
    options: ["Keyword args as dict", "Positional varargs as tuple", "List of args", "Required args"],
    correctAnswer: 1,
    explanation: "*args captures extra positional arguments as a tuple.",
    difficulty: 'medium'
  },
  {
    id: 14,
    question: "Which is NOT a valid Python data type?",
    options: ["frozenset", "bytearray", "char", "complex"],
    correctAnswer: 2,
    explanation: "Python has no 'char' type; single characters are strings.",
    difficulty: 'easy'
  },
  {
    id: 15,
    question: "What is the result of 'a' * 3?",
    options: ["Error", "'aaa'", "['a','a','a']", "None"],
    correctAnswer: 1,
    explanation: "String repetition replicates the string 3 times.",
    difficulty: 'easy'
  },
  {
    id: 16,
    question: "Which is true about dict keys?",
    options: [
      "Any object can be a key",
      "Keys must be hashable (immutable)",
      "Only strings allowed",
      "Only numbers and strings allowed"
    ],
    correctAnswer: 1,
    explanation: "Keys must be hashable; tuples are ok if members are hashable.",
    difficulty: 'medium'
  },
  {
    id: 17,
    question: "What does 'is' compare?",
    options: ["Equality of values", "Identity (same object)", "Hashes", "String repr"],
    correctAnswer: 1,
    explanation: "'is' tests object identity; '==' tests value equality.",
    difficulty: 'medium'
  },
  {
    id: 18,
    question: "Which raises a ZeroDivisionError?",
    options: ["10/0", "10//0", "10%0", "All of these"],
    correctAnswer: 3,
    explanation: "Division, floor division, and modulo by zero raise ZeroDivisionError.",
    difficulty: 'easy'
  },
  {
    id: 19,
    question: "Which file mode truncates an existing file and opens for writing?",
    options: ["'x'", "'a'", "'w'", "'r+'"],
    correctAnswer: 2,
    explanation: "'w' creates/truncates for writing.",
    difficulty: 'easy'
  },
  {
    id: 20,
    question: "What is list comprehension syntax for squares from 0..4?",
    options: ["[x*x for x in range(5)]", "(x*x for x in range(5))", "{x*x for x in range(5)}", "list(x*x for x in range(5))"],
    correctAnswer: 0,
    explanation: "[] comprehension builds a list eagerly.",
    difficulty: 'easy'
  },
  {
    id: 21,
    question: "Which decorator preserves function metadata when wrapping?",
    options: ["functools.cache", "functools.wraps", "functools.lru_cache", "inspect.wraps"],
    correctAnswer: 1,
    explanation: "functools.wraps copies metadata to the wrapper.",
    difficulty: 'medium'
  },
  {
    id: 22,
    question: "What is the output: list(map(lambda x:x+1, [1,2]))?",
    options: ["[2,3]", "[1,2]", "[1,2,3]", "Error"],
    correctAnswer: 0,
    explanation: "map applies function to each element; list constructs the list.",
    difficulty: 'easy'
  },
  {
    id: 23,
    question: "Which module provides regular expressions?",
    options: ["regex", "re", "regexp", "pattern"],
    correctAnswer: 1,
    explanation: "The 're' module handles regex in the standard library.",
    difficulty: 'easy'
  },
  {
    id: 24,
    question: "Which will import only sqrt from math?",
    options: ["import math.sqrt", "from math import sqrt", "import sqrt from math", "from sqrt import math"],
    correctAnswer: 1,
    explanation: "Use from module import name.",
    difficulty: 'easy'
  },
  {
    id: 25,
    question: "What does 'with open(...) as f' ensure?",
    options: [
      "File is automatically closed",
      "File is opened in binary",
      "File pointer at end",
      "No exceptions raised"
    ],
    correctAnswer: 0,
    explanation: "Context manager closes file even on exceptions.",
    difficulty: 'easy'
  },
  {
    id: 26,
    question: "Which is true about list vs tuple?",
    options: [
      "Both are mutable",
      "List is mutable; tuple is immutable",
      "List is immutable; tuple is mutable",
      "Both are immutable"
    ],
    correctAnswer: 1,
    explanation: "Lists mutate; tuples do not.",
    difficulty: 'easy'
  },
  {
    id: 27,
    question: "Which data structure is LIFO?",
    options: ["queue", "stack", "deque only", "heap"],
    correctAnswer: 1,
    explanation: "Stack follows Last-In-First-Out.",
    difficulty: 'easy'
  },
  {
    id: 28,
    question: "Which code sorts a list 'a' without mutation?",
    options: ["a.sort()", "sorted(a)", "a = a.sort()", "a.sorted()"],
    correctAnswer: 1,
    explanation: "sorted returns a new list; list.sort mutates and returns None.",
    difficulty: 'easy'
  },
  {
    id: 29,
    question: "What does dict.get('k', 0) return if 'k' not present?",
    options: ["KeyError", "None", "0", "False"],
    correctAnswer: 2,
    explanation: "get returns default when key is missing.",
    difficulty: 'easy'
  },
  {
    id: 30,
    question: "Which is true about list slicing a[::‑1]?",
    options: ["Reverses the list copy", "Rotates left", "Removes last element", "Mutates in place"],
    correctAnswer: 0,
    explanation: "Extended slice with step −1 returns a reversed copy.",
    difficulty: 'medium'
  },
  {
    id: 31,
    question: "Which is a correct dataclass usage?",
    options: [
      "@dataclass\nclass P: x:int; y:int",
      "class P(dataclass): x:int; y:int",
      "@dataclass()\nclass P: pass then fields later",
      "dataclass P(x:int,y:int)"
    ],
    correctAnswer: 0,
    explanation: "Decorate a class with @dataclass; annotate fields.",
    difficulty: 'medium'
  },
  {
    id: 32,
    question: "Which defines a context manager?",
    options: [
      "Class with __enter__/__exit__",
      "Function with __call__",
      "Any iterable",
      "Any generator"
    ],
    correctAnswer: 0,
    explanation: "__enter__/__exit__ implement the context-manager protocol.",
    difficulty: 'hard'
  },
  {
    id: 33,
    question: "What is the result of {'a':1}.keys() == {'a':1}.keys()?",
    options: ["True", "False", "TypeError", "Depends"],
    correctAnswer: 1,
    explanation: "dict_keys objects compare by identity; two separate dicts give False.",
    difficulty: 'hard'
  },
  {
    id: 34,
    question: "Which creates a virtual environment in Python 3?",
    options: ["python -m venv env", "pip install venv", "virtualenv only", "python venv"],
    correctAnswer: 0,
    explanation: "Built-in venv: python -m venv env.",
    difficulty: 'easy'
  },
  {
    id: 35,
    question: "Which converts list of pairs into a dict?",
    options: ["dict(list_of_pairs)", "map(dict, list_of_pairs)", "set(list_of_pairs)", "tuple(list_of_pairs)"],
    correctAnswer: 0,
    explanation: "dict constructor consumes key/value pairs.",
    difficulty: 'easy'
  },
  {
    id: 36,
    question: "What is the time complexity of membership in a set (average)?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correctAnswer: 0,
    explanation: "Hash-based sets provide average O(1) membership.",
    difficulty: 'medium'
  },
  {
    id: 37,
    question: "Which is true about GIL in CPython?",
    options: [
      "It allows true CPU-bound parallelism in threads",
      "It prevents multiple threads from executing Python bytecode simultaneously",
      "It blocks I/O",
      "It exists only in PyPy"
    ],
    correctAnswer: 1,
    explanation: "GIL allows only one thread to execute Python bytecode at a time.",
    difficulty: 'hard'
  },
  {
    id: 38,
    question: "Which library is used primarily for data analysis?",
    options: ["numpy", "pandas", "requests", "matplotlib"],
    correctAnswer: 1,
    explanation: "pandas provides high-level data structures for analysis.",
    difficulty: 'easy'
  },
  {
    id: 39,
    question: "Which is a contextlib helper to suppress exceptions?",
    options: ["contextlib.closing", "contextlib.suppress", "contextlib.redirect_stdout", "contextlib.ExitStack"],
    correctAnswer: 1,
    explanation: "contextlib.suppress(*exceptions) ignores specified exceptions.",
    difficulty: 'hard'
  },
  {
    id: 40,
    question: "What is the output of sum([[]], [])?",
    options: ["[]", "[[]]", "TypeError", "None"],
    correctAnswer: 2,
    explanation: "sum for lists uses +; start must be empty list; second arg type mismatch raises TypeError in many versions. Safer: use itertools.chain.",
    difficulty: 'hard'
  },
  {
    id: 41,
    question: "Which statement about itertools.groupby is true?",
    options: [
      "It groups globally",
      "It groups consecutive runs sharing the key",
      "It sorts then groups",
      "It removes duplicates"
    ],
    correctAnswer: 1,
    explanation: "groupby groups adjacent items with the same key; input should be sorted if needed.",
    difficulty: 'hard'
  },
  {
    id: 42,
    question: "Which is a correct async/await usage?",
    options: [
      "await in non-async function",
      "async def f(): await g()",
      "async def f(): return await await g()",
      "def f(): await g()"
    ],
    correctAnswer: 1,
    explanation: "await is only valid inside async def.",
    difficulty: 'medium'
  },
  {
    id: 43,
    question: "What is the output of ''.join(map(str, [1,2]))?",
    options: ["'12'", "'1,2'", "['1','2']", "TypeError"],
    correctAnswer: 0,
    explanation: "map converts to strings; join concatenates without separator.",
    difficulty: 'easy'
  },
  {
    id: 44,
    question: "Which operator merges two dicts (Python 3.9+)?",
    options: ["+", "|", "&", "<<"],
    correctAnswer: 1,
    explanation: "The '|' operator merges dicts into a new one.",
    difficulty: 'medium'
  },
  {
    id: 45,
    question: "Which statement about slicing is true?",
    options: [
      "a[start:stop:step] includes stop index",
      "Negative steps reverse the direction",
      "Slice assignment is not allowed",
      "Slicing always returns a view"
    ],
    correctAnswer: 1,
    explanation: "Negative steps iterate backwards; stop is exclusive; list slice returns a new list.",
    difficulty: 'medium'
  },
  {
    id: 46,
    question: "Which library is best for HTTP requests?",
    options: ["urllib.request only", "requests", "json", "pickle"],
    correctAnswer: 1,
    explanation: "requests is a popular high-level HTTP client.",
    difficulty: 'easy'
  },
  {
    id: 47,
    question: "What is the difference between is and == for small integers?",
    options: [
      "They are identical in meaning",
      "is checks identity; == checks value (CPython may intern small ints so is might appear True)",
      "== checks identity; is checks value",
      "Both check identity"
    ],
    correctAnswer: 1,
    explanation: "is compares object identity; == compares values; interning may confuse appearances.",
    difficulty: 'hard'
  },
  {
    id: 48,
    question: "Which is correct typing annotation for function f(x) returning int?",
    options: ["def f(x:int)->int:", "def f(x)->int:", "def f(int x)->int:", "def f(x:int):int"],
    correctAnswer: 0,
    explanation: "def f(x: int) -> int: is the correct syntax.",
    difficulty: 'medium'
  },
  {
    id: 49,
    question: "Which method removes and returns last list element?",
    options: ["remove", "pop", "discard", "delete"],
    correctAnswer: 1,
    explanation: "list.pop() removes and returns the last element by default.",
    difficulty: 'easy'
  },
  {
    id: 50,
    question: "Which is true about namedtuple?",
    options: [
      "Mutable and indexable",
      "Immutable and accessible by attribute",
      "Mutable but not indexable",
      "Immutable but not iterable"
    ],
    correctAnswer: 1,
    explanation: "collections.namedtuple is immutable, tuple-like, with attribute access.",
    difficulty: 'medium'
  },
  {
    id: 51,
    question: "Which exception base class catches all built-in non-exit errors?",
    options: ["BaseException", "Exception", "RuntimeError", "ValueError"],
    correctAnswer: 1,
    explanation: "Exception is the base for most built-in errors; BaseException includes SystemExit, KeyboardInterrupt, etc.",
    difficulty: 'medium'
  },
  {
    id: 52,
    question: "Which function serializes Python objects to JSON?",
    options: ["pickle.dumps", "json.dumps", "marshal.dumps", "yaml.dump"],
    correctAnswer: 1,
    explanation: "json.dumps converts to JSON string.",
    difficulty: 'easy'
  },
  {
    id: 53,
    question: "Which creates a range of 5,4,3,2?",
    options: ["range(5,1)", "range(5,1,1)", "range(5,1,-1)", "range(5,0,-2)"],
    correctAnswer: 2,
    explanation: "range(start, stop, step) with negative step decrements until stop exclusive.",
    difficulty: 'easy'
  },
  {
    id: 54,
    question: "Which library is best for numerical arrays?",
    options: ["numpy", "pandas", "csv", "math"],
    correctAnswer: 0,
    explanation: "NumPy provides N-dimensional arrays and vectorized operations.",
    difficulty: 'easy'
  },
  {
    id: 55,
    question: "Which context manager temporarily changes current working directory?",
    options: ["os.chdir", "tempfile.TemporaryDirectory", "contextlib.chdir", "No standard one"],
    correctAnswer: 3,
    explanation: "There's no built-in chdir context manager in stdlib; you can write one.",
    difficulty: 'hard'
  },
  {
    id: 56,
    question: "Which expression copies a dictionary deeply?",
    options: ["d.copy()", "copy.deepcopy(d)", "dict(d)", "{**d}"],
    correctAnswer: 1,
    explanation: "copy.deepcopy performs deep copy; others are shallow.",
    difficulty: 'medium'
  },
  {
    id: 57,
    question: "What is the walrus operator used for?",
    options: ["Assignment expressions inside larger expressions", "Pattern matching", "Lambda binding", "Async assignment"],
    correctAnswer: 0,
    explanation: "The := operator allows assignment expressions.",
    difficulty: 'medium'
  },
  {
    id: 58,
    question: "Which matches type hints for a list of integers?",
    options: ["List[int]", "list[int] (3.9+)", "typing.List[int]", "All of these depending on version"],
    correctAnswer: 3,
    explanation: "typing.List works earlier; list[int] is Python 3.9+; List requires from typing.",
    difficulty: 'medium'
  },
  {
    id: 59,
    question: "Which makes a function a context manager via decorator?",
    options: ["@contextlib.contextmanager", "@contextlib.wraps", "@functools.context", "@functools.contextmanager"],
    correctAnswer: 0,
    explanation: "contextlib.contextmanager turns a generator into a context manager.",
    difficulty: 'hard'
  },
  {
    id: 60,
    question: "What is the correct way to specify encoding when opening a text file?",
    options: [
      "open('f','r', encoding='utf-8')",
      "open('f','r', codec='utf-8')",
      "open('f','r', charset='utf-8')",
      "open('f','r', meta='utf-8')"
    ],
    correctAnswer: 0,
    explanation: "Use encoding parameter in open for text mode.",
    difficulty: 'easy'
  }
];


