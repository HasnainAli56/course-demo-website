import json
import re

dsa_data = {
    "id": "dsa-algo",
    "category": "dev",
    "title": "Data Structures and Algorithms Training",
    "subtitle": "Master Data Structures, Algorithms, Problem Solving and Coding Through Hands-On Practice",
    "iconName": "Code2",
    "iconBg": "bg-emerald-50 text-emerald-600",
    "description": "Build strong programming and problem-solving skills with comprehensive Data Structures and Algorithms Training designed for beginners, students, aspiring software developers and working professionals.\n\nLearn how to organize data efficiently, analyze algorithm performance, solve programming problems, optimize solutions and approach technical coding challenges with confidence. The course covers fundamental and advanced data structures, algorithms, complexity analysis, problem-solving techniques, coding practice and real-world applications.\n\nWhether you are learning DSA for software development, technical interviews, competitive programming or strengthening your programming fundamentals, this course provides a structured learning path from basic concepts to advanced problem solving.",
    "techBadges": [
        "DSA",
        "Problem Solving",
        "Complexity Analysis",
        "Java / Python / C++",
        "Interview Prep"
    ],
    "duration": "8 Months",
    "rating": 4.98,
    "reviewsCount": 1250,
    "studentsEnrolled": "3,800+",
    "avgSalary": "₹8.0 - ₹25 LPA",
    "batchType": "Next Cohort: 07th Sep - 13th Sep 2026",
    "level": "All Levels",
    "emi": "₹3,999/mo",
    "featured": True,
    "jobGuarantee": False,
    "introductionOverview": [
        "Build strong programming and problem-solving skills with comprehensive Data Structures and Algorithms Training designed for beginners, students, aspiring software developers and working professionals.",
        "Learn how to organize data efficiently, analyze algorithm performance, solve programming problems, optimize solutions and approach technical coding challenges with confidence. The course covers fundamental and advanced data structures, algorithms, complexity analysis, problem-solving techniques, coding practice and real-world applications.",
        "Whether you are learning DSA for software development, technical interviews, competitive programming or strengthening your programming fundamentals, this course provides a structured learning path from basic concepts to advanced problem solving."
    ],
    "courseOverview": {
        "title": "Course Overview",
        "subtitle": "Data Structures and Algorithms (DSA) are fundamental concepts in computer science and software development. They help programmers organize information efficiently and design solutions that are faster, scalable and easier to maintain.",
        "paragraphs": [
            "This DSA course focuses not only on learning definitions and theoretical concepts but also on applying them through coding exercises and problem-solving practice.",
            "You will learn how to:"
        ],
        "items": [
            "Understand different data structures",
            "Select the appropriate data structure for a problem",
            "Analyze algorithm efficiency",
            "Write optimized code",
            "Solve programming problems systematically",
            "Understand time and space complexity",
            "Implement searching and sorting algorithms",
            "Work with trees, graphs and heaps",
            "Solve recursion and backtracking problems",
            "Understand greedy algorithms",
            "Apply dynamic programming techniques",
            "Improve coding and logical reasoning skills",
            "Prepare for technical coding interviews"
        ],
        "outro": "The curriculum progresses from programming fundamentals to advanced algorithmic problem solving."
    },
    "whatIsCourse": {
        "title": "What Are Data Structures and Algorithms?",
        "paragraphs": [
            "A data structure is a way of organizing and storing data so that it can be accessed and processed efficiently.",
            "An algorithm is a sequence of steps used to solve a particular problem.",
            "Understanding both data structures and algorithms enables developers to build efficient software and solve complex computational problems."
        ],
        "dataStructures": [
            "Arrays",
            "Strings",
            "Linked Lists",
            "Stacks",
            "Queues",
            "Hash Tables",
            "Trees",
            "Heaps",
            "Graphs"
        ],
        "algorithms": [
            "Searching algorithms",
            "Sorting algorithms",
            "Traversal algorithms",
            "Graph algorithms",
            "Greedy algorithms",
            "Divide-and-conquer algorithms",
            "Backtracking algorithms",
            "Dynamic programming"
        ]
    },
    "whyLearn": {
        "title": "Why Learn Data Structures and Algorithms?",
        "intro": "DSA is one of the most important foundations for anyone pursuing a career in software development.",
        "reasons": [
            {
                "title": "Build Strong Programming Fundamentals",
                "description": "DSA teaches you how to think about programming problems rather than simply writing code that works."
            },
            {
                "title": "Improve Problem-Solving Skills",
                "description": "You learn to break large problems into smaller and manageable components."
            },
            {
                "title": "Write Efficient Programs",
                "description": "Two programs can produce the same result while having completely different performance characteristics. DSA helps you understand how to improve efficiency."
            },
            {
                "title": "Prepare for Technical Interviews",
                "description": "Many software-development interviews include coding problems involving arrays, strings, linked lists, trees, graphs, recursion and dynamic programming."
            },
            {
                "title": "Understand Algorithm Complexity",
                "description": "You learn how to evaluate the performance of algorithms using concepts such as Big O notation, Time complexity, Space complexity, Best-case complexity, Average-case complexity, and Worst-case complexity."
            },
            {
                "title": "Improve Coding Confidence",
                "description": "Consistent problem-solving practice helps you become more comfortable approaching unfamiliar programming problems."
            }
        ]
    },
    "courseHighlights": {
        "title": "Data Structures and Algorithms Course Highlights",
        "intro": "The course can include:",
        "highlights": [
            "Beginner-friendly programming fundamentals",
            "Complete DSA curriculum",
            "Data structure implementation",
            "Algorithm implementation",
            "Problem-solving exercises",
            "Coding challenges",
            "Complexity analysis",
            "Searching and sorting",
            "Recursion",
            "Trees",
            "Graphs",
            "Hashing",
            "Heaps",
            "Greedy algorithms",
            "Dynamic programming",
            "Backtracking",
            "Real-world programming scenarios",
            "Project-based learning",
            "Technical interview preparation",
            "Coding interview practice",
            "Resume and portfolio guidance",
            "Structured learning roadmap"
        ]
    },
    "problemSolvingFramework": {
        "title": "DSA Problem-Solving Framework",
        "intro": "Learning DSA is not simply about memorizing algorithms. A structured problem-solving approach is more valuable.",
        "steps": [
            {
                "step": "Step 1",
                "title": "Understand the Problem",
                "desc": "Identify input, output, constraints, and expected behavior."
            },
            {
                "step": "Step 2",
                "title": "Identify the Pattern",
                "desc": "Determine whether the problem resembles two pointers, sliding window, binary search, hashing, recursion, tree traversal, graph traversal, greedy, or dynamic programming."
            },
            {
                "step": "Step 3",
                "title": "Develop a Solution",
                "desc": "Write the approach before writing the complete code."
            },
            {
                "step": "Step 4",
                "title": "Analyze Complexity",
                "desc": "Determine time complexity and space complexity."
            },
            {
                "step": "Step 5",
                "title": "Implement",
                "desc": "Convert the algorithm into clean and readable code."
            },
            {
                "step": "Step 6",
                "title": "Test",
                "desc": "Test normal cases, edge cases, empty input, large input, duplicate values, and boundary conditions."
            },
            {
                "step": "Step 7",
                "title": "Optimize",
                "desc": "Look for ways to improve performance or simplify the implementation."
            }
        ]
    },
    "handsOnTraining": {
        "title": "Hands-On DSA Training",
        "intro": "A practical DSA training course should involve significantly more than watching lessons.",
        "subIntro": "Hands-on practice can include:",
        "items": [
            "Coding exercises",
            "Topic-wise problems",
            "Algorithm implementation",
            "Debugging exercises",
            "Complexity analysis",
            "Pattern-based problem solving",
            "Challenge problems",
            "Mini projects",
            "Mock coding interviews",
            "Timed coding practice"
        ],
        "outro": "Learners should progressively move from simple problems to intermediate and advanced challenges."
    },
    "codingPracticeLevels": {
        "title": "DSA Coding Practice",
        "intro": "Regular coding practice helps reinforce concepts.",
        "levels": [
            {
                "title": "Beginner Level",
                "topics": [
                    "Basic arrays",
                    "Strings",
                    "Loops",
                    "Searching",
                    "Simple sorting",
                    "Basic recursion"
                ]
            },
            {
                "title": "Intermediate Level",
                "topics": [
                    "Linked lists",
                    "Stacks",
                    "Queues",
                    "Hashing",
                    "Trees",
                    "Binary search",
                    "Recursion and backtracking"
                ]
            },
            {
                "title": "Advanced Level",
                "topics": [
                    "Graphs",
                    "Dynamic programming",
                    "Advanced trees",
                    "Greedy algorithms",
                    "Complex graph problems",
                    "Optimization problems"
                ]
            }
        ]
    },
    "projects": {
        "title": "DSA Projects",
        "intro": "Projects help learners understand how data structures and algorithms can be applied beyond isolated coding questions.",
        "projectList": [
            {
                "title": "Project 1: Contact Management System",
                "concepts": ["Arrays", "Linked lists", "Searching", "Sorting", "Hashing"]
            },
            {
                "title": "Project 2: Task Management System",
                "concepts": ["Queues", "Priority queues", "Hashing", "Sorting"]
            },
            {
                "title": "Project 3: Student Record System",
                "concepts": ["Arrays", "Searching", "Sorting", "Hash maps"]
            },
            {
                "title": "Project 4: Route Finding Application",
                "concepts": ["Graphs", "BFS", "DFS", "Shortest-path algorithms"]
            },
            {
                "title": "Project 5: Recommendation or Ranking System",
                "concepts": ["Heaps", "Hashing", "Sorting", "Graph relationships"]
            }
        ],
        "outro": "Projects can be adapted according to the learner's programming language and skill level."
    },
    "languageImplementations": {
        "title": "DSA Language Implementation Options",
        "languages": [
            {
                "name": "DSA With Java",
                "desc": "Java is widely used for programming education and software development.",
                "topics": [
                    "Arrays",
                    "ArrayList",
                    "LinkedList",
                    "HashMap",
                    "HashSet",
                    "Stack concepts",
                    "Queue implementations",
                    "PriorityQueue",
                    "Trees",
                    "Graphs",
                    "Recursion",
                    "Dynamic programming"
                ],
                "outro": "Learners can practice implementing data structures manually as well as understanding commonly used Java collections."
            },
            {
                "name": "DSA With Python",
                "desc": "Python provides concise syntax that allows learners to focus on problem-solving logic.",
                "topics": [
                    "Lists",
                    "Tuples",
                    "Dictionaries",
                    "Sets",
                    "Functions",
                    "Recursion",
                    "Sorting",
                    "Searching",
                    "Trees",
                    "Graphs",
                    "Dynamic programming"
                ],
                "outro": "Python-based DSA practice can be particularly useful for learners who want to quickly prototype algorithmic solutions."
            },
            {
                "name": "DSA With C++",
                "desc": "C++ is commonly used for competitive programming and algorithmic problem solving.",
                "topics": [
                    "Arrays",
                    "Vectors",
                    "Strings",
                    "STL containers",
                    "Maps",
                    "Sets",
                    "Stacks",
                    "Queues",
                    "Priority queues",
                    "Trees",
                    "Graphs",
                    "Algorithms",
                    "Recursion",
                    "Dynamic programming"
                ]
            }
        ]
    },
    "learningOutcomes": {
        "title": "Learning Outcomes",
        "intro": "After completing the course, learners should be able to:",
        "outcomes": [
            "Understand fundamental data structures",
            "Implement common data structures",
            "Understand algorithm design",
            "Analyze algorithm complexity",
            "Select appropriate data structures",
            "Implement searching algorithms",
            "Implement sorting algorithms",
            "Solve recursion problems",
            "Work with trees",
            "Work with graphs",
            "Apply hashing techniques",
            "Understand greedy algorithms",
            "Solve backtracking problems",
            "Apply dynamic programming",
            "Improve code efficiency",
            "Approach coding problems systematically",
            "Prepare for technical coding assessments"
        ]
    },
    "whoCanLearn": {
        "title": "Who Can Learn DSA?",
        "intro": "This Data Structures and Algorithms Course can be useful for:",
        "audiences": [
            {
                "role": "Students",
                "desc": "Students who want to strengthen programming fundamentals and prepare for software-development opportunities."
            },
            {
                "role": "Beginners",
                "desc": "Beginners can start with programming fundamentals before progressing toward advanced DSA topics."
            },
            {
                "role": "Computer Science Learners",
                "desc": "Learners studying computer science or related disciplines can use DSA to strengthen their understanding of computational problem solving."
            },
            {
                "role": "Aspiring Software Developers",
                "desc": "DSA provides a foundation for solving programming problems encountered during software development and technical interviews."
            },
            {
                "role": "Working Professionals",
                "desc": "Software professionals can use DSA practice to improve problem-solving ability and prepare for coding assessments."
            },
            {
                "role": "Career Switchers",
                "desc": "People transitioning toward software-development roles can use DSA as part of their technical learning roadmap."
            }
        ]
    },
    "prerequisites": {
        "title": "Prerequisites",
        "paragraphs": [
            "Advanced programming experience is not mandatory to begin a beginner-friendly DSA course."
        ],
        "recommended": [
            "Basic programming knowledge",
            "Understanding of variables",
            "Conditional statements",
            "Loops",
            "Functions",
            "Basic debugging",
            "Logical thinking"
        ],
        "languages": [
            "Java",
            "Python",
            "C++",
            "JavaScript"
        ],
        "outro": "The exact prerequisites can depend on the course level."
    },
    "progressionPaths": {
        "beginners": {
            "title": "DSA for Beginners",
            "path": "Programming Basics → Arrays → Strings → Linked Lists → Stacks → Queues → Hashing → Recursion → Searching → Sorting → Trees → Graphs → Greedy → Backtracking → Dynamic Programming",
            "outro": "This progression helps learners build concepts step by step."
        },
        "workingProfessionals": {
            "title": "DSA for Working Professionals",
            "focus": [
                "Problem-solving efficiency",
                "Advanced data structures",
                "Algorithm optimization",
                "Coding interview preparation",
                "Pattern recognition",
                "Complexity analysis",
                "Mock interviews",
                "Real-world algorithmic applications"
            ],
            "outro": "A structured practice plan can make learning more manageable alongside professional responsibilities."
        },
        "technicalInterviews": {
            "title": "DSA for Technical Interviews",
            "intro": "Technical interviews frequently evaluate more than syntax. Interviewers may assess:",
            "assessments": [
                "Logical reasoning",
                "Problem decomposition",
                "Data structure selection",
                "Algorithm design",
                "Code quality",
                "Complexity analysis",
                "Edge-case handling",
                "Communication"
            ],
            "outro": "DSA training can therefore include interview-oriented practice in addition to curriculum-based learning."
        }
    },
    "interviewPreparation": {
        "title": "DSA Interview Preparation",
        "categories": [
            {
                "name": "Arrays",
                "problems": ["Two Sum", "Maximum subarray", "Array rotation", "Duplicate detection"]
            },
            {
                "name": "Strings",
                "problems": ["Palindrome", "Anagram", "Character frequency", "Substring problems"]
            },
            {
                "name": "Linked Lists",
                "problems": ["Reverse linked list", "Cycle detection", "Merge lists"]
            },
            {
                "name": "Trees",
                "problems": ["Tree traversal", "Height", "Binary Search Tree operations"]
            },
            {
                "name": "Graphs",
                "problems": ["BFS", "DFS", "Shortest path"]
            },
            {
                "name": "Dynamic Programming",
                "problems": ["Knapsack", "Coin change", "Subsequence problems", "Grid problems"]
            }
        ],
        "outro": "The objective should be to understand the underlying problem-solving patterns rather than memorize individual solutions.",
        "mockInterviews": "A practical DSA program can include mock interviews to help learners practice reading a coding problem, asking clarifying questions, explaining their approach, writing code, testing the solution, discussing complexity, and handling interviewer feedback."
    },
    "careerOpportunities": {
        "title": "Career Opportunities After Learning DSA",
        "intro": "DSA is a foundational skill rather than a standalone job role. It can support preparation for roles such as:",
        "roles": [
            "Software Developer",
            "Software Engineer",
            "Backend Developer",
            "Full Stack Developer",
            "Application Developer",
            "Python Developer",
            "Java Developer",
            "C++ Developer",
            "Algorithm Developer",
            "Competitive Programmer",
            "Software Development Engineer",
            "Technical Engineering roles"
        ],
        "outro": "Actual job requirements vary by organization and role."
    },
    "careerRoadmap": {
        "title": "DSA Career Roadmap",
        "steps": [
            { "step": "Stage 1", "title": "Programming Fundamentals" },
            { "step": "Stage 2", "title": "Basic Data Structures" },
            { "step": "Stage 3", "title": "Searching and Sorting" },
            { "step": "Stage 4", "title": "Recursion and Problem Solving" },
            { "step": "Stage 5", "title": "Trees and Heaps" },
            { "step": "Stage 6", "title": "Graph Algorithms" },
            { "step": "Stage 7", "title": "Greedy and Backtracking" },
            { "step": "Stage 8", "title": "Dynamic Programming" },
            { "step": "Stage 9", "title": "Advanced Problem Solving" },
            { "step": "Stage 10", "title": "Coding Interview Preparation" },
            { "step": "Stage 11", "title": "Projects and Portfolio" }
        ],
        "outro": "This roadmap allows learners to gradually progress from fundamental concepts to advanced algorithmic problem solving."
    },
    "learningMethodology": {
        "title": "Learning Methodology",
        "intro": "A strong DSA learning methodology should combine multiple learning formats.",
        "steps": [
            { "title": "Concept Explanation", "desc": "Understand the theory behind each data structure and algorithm." },
            { "title": "Visual Learning", "desc": "Use diagrams and step-by-step examples to understand how algorithms operate." },
            { "title": "Code Implementation", "desc": "Implement the concept using a programming language." },
            { "title": "Problem Solving", "desc": "Solve multiple problems based on the concept." },
            { "title": "Complexity Analysis", "desc": "Analyze time and space requirements." },
            { "title": "Debugging", "desc": "Identify and correct errors." },
            { "title": "Optimization", "desc": "Compare multiple approaches and improve inefficient solutions." },
            { "title": "Revision", "desc": "Regularly revisit previously learned concepts." },
            { "title": "Assessment", "desc": "Use coding challenges and tests to measure progress." }
        ]
    },
    "deliveryFormats": {
        "online": {
            "title": "Online DSA Training",
            "intro": "Online learning can provide flexibility through:",
            "items": [
                "Live instructor-led sessions",
                "Recorded lessons",
                "Coding exercises",
                "Digital learning resources",
                "Assignments",
                "Practice problems",
                "Doubt-solving sessions",
                "Assessments",
                "Mock interviews"
            ]
        },
        "classroom": {
            "title": "Classroom DSA Training",
            "intro": "Classroom-based learning can provide:",
            "items": [
                "Direct instructor interaction",
                "Live coding demonstrations",
                "Immediate doubt clarification",
                "Group problem-solving",
                "Coding exercises",
                "Practical assignments",
                "Interactive discussions"
            ]
        }
    },
    "courseDuration": {
        "title": "DSA Course Duration",
        "paragraphs": [
            "The duration of a DSA course depends on curriculum depth, learner's programming background, number of practical sessions, number of coding problems, project requirements, interview preparation, and learning format.",
            "Instead of focusing only on the number of training hours, learners should evaluate the depth of the syllabus, amount of practice and learning support provided."
        ]
    },
    "assignmentsAndPortfolio": {
        "assignments": {
            "title": "Assignments and Assessments",
            "intro": "Regular assessments can help learners identify areas that require improvement.",
            "items": [
                "Topic-wise quizzes",
                "Coding assignments",
                "Algorithm implementation exercises",
                "Debugging tasks",
                "Complexity-analysis questions",
                "Timed coding challenges",
                "Mini projects",
                "Mock interviews"
            ]
        },
        "portfolio": {
            "title": "Resume and Portfolio Guidance",
            "intro": "DSA knowledge can be supported by demonstrating practical programming ability through a portfolio.",
            "items": [
                "GitHub repositories",
                "Coding projects",
                "Algorithm implementations",
                "Programming projects",
                "Problem-solving solutions",
                "Technical documentation"
            ],
            "outro": "Learners should describe projects based on what they actually built and the technologies they used."
        }
    },
    "practiceRoutine": {
        "title": "How to Build a DSA Practice Routine",
        "intro": "Consistency is more important than solving a large number of problems in a single day.",
        "schedule": [
            {
                "frequency": "Daily",
                "tasks": [
                    "Review one concept",
                    "Solve a few problems",
                    "Analyze complexity",
                    "Review mistakes"
                ]
            },
            {
                "frequency": "Weekly",
                "tasks": [
                    "Revise previously learned topics",
                    "Attempt mixed-topic problems",
                    "Solve at least one challenging problem",
                    "Review coding patterns"
                ]
            },
            {
                "frequency": "Monthly",
                "tasks": [
                    "Take a coding assessment",
                    "Attempt a mock interview",
                    "Identify weak areas",
                    "Update the learning plan"
                ]
            }
        ]
    },
    "commonMistakes": {
        "title": "Common Mistakes While Learning DSA",
        "intro": "Learners often face challenges such as:",
        "mistakes": [
            {
                "title": "Memorizing Solutions",
                "desc": "Memorizing code without understanding the pattern makes it difficult to solve variations."
            },
            {
                "title": "Ignoring Complexity",
                "desc": "A solution that works for a small input may become inefficient for large inputs."
            },
            {
                "title": "Skipping Fundamentals",
                "desc": "Advanced topics become difficult when arrays, recursion and basic algorithms are not well understood."
            },
            {
                "title": "Not Practicing",
                "desc": "Watching tutorials alone does not develop problem-solving skills."
            },
            {
                "title": "Avoiding Difficult Problems",
                "desc": "Challenging problems are useful for developing deeper algorithmic thinking."
            },
            {
                "title": "Not Reviewing Mistakes",
                "desc": "Understanding why a solution failed is an important part of learning."
            }
        ]
    },
    "howToChooseCourse": {
        "title": "How to Choose the Right DSA Course",
        "intro": "Before enrolling in a DSA training program, consider:",
        "criteria": [
            "Complete curriculum",
            "Programming-language options",
            "Beginner-to-advanced progression",
            "Hands-on coding practice",
            "Number and quality of exercises",
            "Project-based learning",
            "Interview preparation",
            "Instructor support",
            "Assignments and assessments",
            "Learning resources",
            "Course flexibility",
            "Practical problem-solving opportunities"
        ],
        "outro": "A course should provide enough practice to apply concepts rather than focusing exclusively on theory."
    },
    "faqSection": {
        "title": "Frequently Asked Questions",
        "faqs": [
            {
                "question": "What is Data Structures and Algorithms Training?",
                "answer": "Data Structures and Algorithms Training teaches learners how to organize data, design algorithms, analyze performance and solve programming problems efficiently."
            },
            {
                "question": "Is DSA difficult for beginners?",
                "answer": "DSA can initially seem challenging because it requires logical thinking and consistent practice. A structured progression from programming basics to advanced topics can make the learning process easier."
            },
            {
                "question": "Can I learn DSA without advanced programming knowledge?",
                "answer": "Yes. Beginners can start with programming fundamentals and gradually move into data structures and algorithms."
            },
            {
                "question": "Which programming language is best for DSA?",
                "answer": "Java, Python and C++ are commonly used for DSA practice. The best choice depends on your goals, existing knowledge and target role."
            },
            {
                "question": "How long does it take to learn DSA?",
                "answer": "The learning time varies depending on programming experience, curriculum depth and practice frequency. Building strong DSA skills generally requires consistent practice over an extended period."
            },
            {
                "question": "Is DSA useful for software developers?",
                "answer": "Yes. DSA helps developers understand efficient data organization, algorithm design and computational problem solving."
            },
            {
                "question": "Is DSA required for coding interviews?",
                "answer": "Many technical interviews include data structures and algorithmic problem solving, although requirements vary by company and role."
            },
            {
                "question": "Can non-computer-science students learn DSA?",
                "answer": "Yes. Anyone with basic programming knowledge and an interest in problem solving can learn DSA."
            },
            {
                "question": "Does DSA help with competitive programming?",
                "answer": "Yes. Competitive programming relies heavily on algorithms, data structures, complexity analysis and problem-solving techniques."
            },
            {
                "question": "Should I learn DSA before development?",
                "answer": "You do not necessarily need to master DSA before beginning software development. Many learners benefit from developing programming and development skills alongside DSA."
            },
            {
                "question": "Is DSA only about coding interviews?",
                "answer": "No. DSA is a fundamental computer-science skill that also supports software design, optimization, computational thinking and efficient programming."
            },
            {
                "question": "Does the course include practical coding?",
                "answer": "A hands-on DSA course should include coding exercises, algorithm implementation, problem-solving practice and projects rather than only theoretical explanations."
            },
            {
                "question": "Can working professionals learn DSA?",
                "answer": "Yes. Working professionals can follow a structured learning schedule and focus on topics relevant to their career goals."
            },
            {
                "question": "Is there a DSA certification?",
                "answer": "There is no single universal certification that represents DSA proficiency across the software industry. Some training providers may issue a course-completion certificate, while external platforms may offer their own assessments or certificates."
            }
        ]
    },
    "callToAction": {
        "title": "Start Building Strong Programming and Problem-Solving Skills",
        "paragraphs": [
            "Develop a strong foundation in Data Structures and Algorithms through structured learning, coding practice, algorithm implementation and real-world problem solving.",
            "Whether your goal is to strengthen programming fundamentals, improve coding skills, prepare for technical interviews or advance toward software-development roles, a structured DSA learning path can help you build the skills required to approach programming problems more effectively.",
            "Start learning Data Structures and Algorithms and turn programming concepts into practical problem-solving skills."
        ],
        "ready": "Explore the course curriculum, practical learning approach, programming-language options and learning support available for the Data Structures and Algorithms Training program.",
        "url": "https://yourdomain.com/data-structures-and-algorithms-training/"
    },
    "seoMeta": {
        "metaTitle": "Data Structures and Algorithms Training",
        "metaDescription": "Learn Data Structures and Algorithms through hands-on coding, problem solving, algorithms, complexity analysis, projects and interview preparation.",
        "h1": "Data Structures and Algorithms Training"
    }
}

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    content = f.read()

target_id = '"id": "dsa-algo"'
start_idx = content.find(target_id)
if start_idx == -1:
    print("ERROR: Target ID not found!")
    exit(1)

brace_idx = content.rfind('{', 0, start_idx)

depth = 0
end_idx = -1
for i in range(brace_idx, len(content)):
    if content[i] == '{':
        depth += 1
    elif content[i] == '}':
        depth -= 1
        if depth == 0:
            end_idx = i
            break

if end_idx == -1:
    print("ERROR: Could not find closing brace for object!")
    exit(1)

formatted_json = json.dumps(dsa_data, indent=4, ensure_ascii=False)
new_content = content[:brace_idx] + formatted_json + content[end_idx+1:]

with open('src/data/courses.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS: dsa-algo successfully updated in courses.js")
