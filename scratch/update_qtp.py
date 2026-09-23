import json
import re

qtp_data = {
    "id": "qtp-uft-training",
    "category": "testing",
    "title": "Best QTP / UFT Training",
    "subtitle": "Best QTP / UFT Training – Online Course",
    "iconName": "CheckSquare",
    "iconBg": "bg-emerald-50 text-emerald-600",
    "description": "Build practical test automation skills with our Best QTP / UFT Training designed for freshers, manual testers, QA professionals, automation testers, and working IT professionals.\n\nThis training focuses on QTP/UFT automation, functional testing, VBScript, object identification, checkpoints, test synchronization, parameterization, data-driven testing, reusable components, automation frameworks, test execution, reporting, real-world projects, and interview preparation.\n\nWhether you are looking to move from manual testing to automation or strengthen your existing automation skills, this QTP / UFT Course Online provides a structured learning path from automation fundamentals to real-world project implementation.",
    "techBadges": [
        "QTP",
        "UFT",
        "VBScript",
        "Object Repository",
        "Checkpoints",
        "Frameworks"
    ],
    "duration": "8 Months",
    "rating": 4.89,
    "reviewsCount": 820,
    "studentsEnrolled": "2,400+",
    "avgSalary": "₹6.0 - ₹15 LPA",
    "batchType": "Next Cohort: 07th Sep - 13th Sep 2026",
    "level": "All Levels",
    "emi": "₹3,699/mo",
    "featured": False,
    "jobGuarantee": False,
    "introductionOverview": [
        "Build practical test automation skills with our Best QTP / UFT Training designed for freshers, manual testers, QA professionals, automation testers, and working IT professionals.",
        "This training focuses on QTP/UFT automation, functional testing, VBScript, object identification, checkpoints, test synchronization, parameterization, data-driven testing, reusable components, automation frameworks, test execution, reporting, real-world projects, and interview preparation.",
        "Whether you are looking to move from manual testing to automation or strengthen your existing automation skills, this QTP / UFT Course Online provides a structured learning path from automation fundamentals to real-world project implementation."
    ],
    "handsOnTraining": {
        "title": "Learn QTP / UFT Through Practical Training",
        "subtitle": "Through demonstrations, hands-on exercises, and project-based learning, you will learn how to:",
        "items": [
            "Understand QTP/UFT fundamentals",
            "Understand functional test automation",
            "Work with UFT's automation environment",
            "Create and manage automated Test Cases",
            "Identify application objects",
            "Work with Object Repository",
            "Create checkpoints",
            "Use VBScript for automation",
            "Parameterize test cases",
            "Perform data-driven testing",
            "Handle synchronization",
            "Create reusable test components",
            "Work with descriptive programming concepts",
            "Automate web applications",
            "Execute and analyze automated tests",
            "Generate and understand test results",
            "Build automation framework concepts",
            "Work on real-world automation scenarios",
            "Prepare for QTP/UFT interviews"
        ]
    },
    "whatIsCourse": {
        "title": "What Is QTP / UFT?",
        "paragraphs": [
            "QTP (QuickTest Professional) and UFT (Unified Functional Testing) are associated with functional test automation for software applications.",
            "UFT is used to automate functional and regression testing scenarios and can help testers automate application workflows, validate expected results, and execute repeatable test scenarios.",
            "QTP/UFT automation typically involves concepts such as object identification, Object Repository, checkpoints, test parameters, VBScript, synchronization, reusable components, and test execution.",
            "This makes QTP/UFT training relevant for testers looking to develop practical functional automation skills."
        ]
    },
    "whyLearn": {
        "title": "Why Learn QTP / UFT Automation?",
        "intro": "Test automation helps organizations execute repeatable functional and regression scenarios efficiently.",
        "subIntro": "Learning QTP/UFT can help testers develop practical skills in:",
        "items": [
            "Functional test automation",
            "Regression testing",
            "Object identification",
            "Object Repository",
            "VBScript",
            "Checkpoints",
            "Parameterization",
            "Data-driven testing",
            "Synchronization",
            "Reusable test components",
            "Descriptive programming",
            "Test execution",
            "Automation framework concepts",
            "Test result analysis"
        ]
    },
    "courseHighlights": {
        "title": "Best QTP / UFT Training – Course Highlights",
        "highlights": [
            {
                "title": "Practical UFT Training",
                "description": "Learn QTP/UFT concepts through practical demonstrations and hands-on exercises rather than focusing only on theory."
            },
            {
                "title": "Functional Test Automation",
                "description": "Understand how functional test scenarios can be converted into automated tests."
            },
            {
                "title": "VBScript for Automation",
                "description": "Learn the VBScript concepts required to create and maintain QTP/UFT automation scripts."
            },
            {
                "title": "Object Identification",
                "description": "Understand how UFT identifies application objects and how testers can work with object properties."
            },
            {
                "title": "Object Repository",
                "description": "Learn how to create, manage, organize, and maintain objects used in automated tests."
            },
            {
                "title": "Checkpoints & Validation",
                "description": "Learn how checkpoints can be used to validate expected application behavior and results."
            },
            {
                "title": "Data-Driven Testing",
                "description": "Understand how test data can be separated from test logic and used across multiple test scenarios."
            },
            {
                "title": "Reusable Components",
                "description": "Learn approaches for creating reusable automation components and reducing duplicate test logic."
            },
            {
                "title": "Framework Concepts",
                "description": "Understand how UFT automation can be organized into maintainable and scalable test structures."
            },
            {
                "title": "Real-World Projects",
                "description": "Practice automation scenarios based on common web and business application workflows."
            },
            {
                "title": "Interview Preparation",
                "description": "Prepare for QTP/UFT, automation testing, VBScript, and functional testing interviews."
            }
        ]
    },
    "curriculum": {
        "title": "QTP / UFT Training – Course Curriculum",
        "modules": [
            {
                "module": "Module 1",
                "title": "Introduction to QTP / UFT",
                "topics": [
                    "What is QTP?",
                    "What is UFT?",
                    "Evolution from QTP to UFT",
                    "Introduction to functional automation",
                    "Automation testing fundamentals",
                    "Functional testing vs automation testing",
                    "Regression automation",
                    "UFT automation overview",
                    "UFT terminology",
                    "Automation testing lifecycle"
                ]
            },
            {
                "module": "Module 2",
                "title": "UFT Environment & Test Structure",
                "topics": [
                    "UFT installation concepts",
                    "UFT workspace",
                    "UFT interface",
                    "Test creation",
                    "Test structure",
                    "Actions",
                    "Test flow",
                    "Test execution",
                    "Test results",
                    "Managing automation assets",
                    "UFT best practices"
                ]
            },
            {
                "module": "Module 3",
                "title": "Object Identification & Object Repository",
                "topics": [
                    "Application objects",
                    "Object identification",
                    "Object properties",
                    "Object Repository concepts",
                    "Local Object Repository",
                    "Shared Object Repository",
                    "Adding objects",
                    "Object properties",
                    "Object identification challenges",
                    "Managing objects",
                    "Object Repository best practices"
                ]
            },
            {
                "module": "Module 4",
                "title": "UFT Recording & Playback",
                "topics": [
                    "Recording concepts",
                    "Recording test steps",
                    "Playback",
                    "Understanding generated steps",
                    "Editing recorded steps",
                    "Recording web applications",
                    "Recording application workflows",
                    "Limitations of recording",
                    "When to use recording",
                    "Improving recorded scripts"
                ]
            },
            {
                "module": "Module 5",
                "title": "VBScript Fundamentals for UFT",
                "topics": [
                    "Introduction to VBScript",
                    "Variables",
                    "Data types",
                    "Operators",
                    "Conditional statements",
                    "Loops",
                    "Functions",
                    "Procedures",
                    "Arrays",
                    "String handling",
                    "Date and time functions",
                    "Error handling",
                    "VBScript concepts required for UFT automation"
                ]
            },
            {
                "module": "Module 6",
                "title": "UFT Checkpoints & Validation",
                "topics": [
                    "What are checkpoints?",
                    "Standard checkpoints",
                    "Text checkpoints",
                    "Bitmap checkpoints",
                    "Database checkpoints",
                    "XML checkpoints",
                    "File checkpoints",
                    "Checkpoint parameters",
                    "Expected vs actual results",
                    "Validation strategies"
                ]
            },
            {
                "module": "Module 7",
                "title": "Parameterization & Data-Driven Testing",
                "topics": [
                    "Parameterization concepts",
                    "Test parameters",
                    "Action parameters",
                    "Environment parameters",
                    "Data tables",
                    "Global DataTable",
                    "Local DataTable",
                    "Data-driven testing",
                    "Multiple test iterations",
                    "External test data",
                    "Reusable test data"
                ]
            },
            {
                "module": "Module 8",
                "title": "Synchronization & Error Handling",
                "topics": [
                    "Synchronization concepts",
                    "Wait statements",
                    "Object synchronization",
                    "Synchronization challenges",
                    "Dynamic applications",
                    "Handling timing issues",
                    "Recovery concepts",
                    "Error handling",
                    "Runtime errors",
                    "Automation stability"
                ]
            },
            {
                "module": "Module 9",
                "title": "Descriptive Programming",
                "topics": [
                    "What is descriptive programming?",
                    "Static descriptive programming",
                    "Dynamic descriptive programming",
                    "Property-based identification",
                    "Creating objects dynamically",
                    "Descriptive programming syntax",
                    "When to use descriptive programming",
                    "Object identification without traditional repository approaches",
                    "Advantages and limitations"
                ]
            },
            {
                "module": "Module 10",
                "title": "Advanced UFT Automation",
                "topics": [
                    "Reusable Actions",
                    "Function libraries",
                    "User-defined functions",
                    "Reusable components",
                    "Environment variables",
                    "Dynamic objects",
                    "Dynamic test data",
                    "Regular expressions",
                    "Advanced VBScript concepts",
                    "Automation maintenance",
                    "Script optimization"
                ]
            },
            {
                "module": "Module 11",
                "title": "Web Application Automation",
                "topics": [
                    "Web automation fundamentals",
                    "Browser automation",
                    "Web objects",
                    "Web controls",
                    "Forms",
                    "Links",
                    "Tables",
                    "Frames",
                    "Web page validation",
                    "Dynamic web objects",
                    "Web application synchronization",
                    "End-to-end web automation"
                ]
            },
            {
                "module": "Module 12",
                "title": "Automation Framework Concepts",
                "topics": [
                    "Automation framework fundamentals",
                    "Framework architecture",
                    "Linear framework",
                    "Modular framework",
                    "Data-driven framework",
                    "Keyword-driven concepts",
                    "Hybrid framework concepts",
                    "Reusable functions",
                    "Function libraries",
                    "Test data management",
                    "Reporting",
                    "Framework maintenance"
                ]
            },
            {
                "module": "Module 13",
                "title": "Test Execution, Reporting & Debugging",
                "topics": [
                    "Test execution",
                    "Test run settings",
                    "Debugging automation scripts",
                    "Breakpoints",
                    "Step-by-step execution",
                    "Error analysis",
                    "Test results",
                    "Execution reports",
                    "Failed test analysis",
                    "Troubleshooting",
                    "Automation maintenance"
                ]
            },
            {
                "module": "Module 14",
                "title": "Real-Time QTP / UFT Automation Project",
                "topics": [
                    "Work on a practical UFT automation project covering:",
                    "Application understanding",
                    "Requirement analysis",
                    "Test scenario identification",
                    "Test case creation",
                    "Object identification",
                    "Object Repository",
                    "Test automation",
                    "VBScript implementation",
                    "Checkpoints",
                    "Parameterization",
                    "Data-driven testing",
                    "Synchronization",
                    "Reusable components",
                    "Framework organization",
                    "Test execution",
                    "Result analysis",
                    "Debugging",
                    "Project documentation",
                    "Project explanation"
                ]
            }
        ]
    },
    "syllabus": [
        {
            "module": "Module 1",
            "title": "Introduction to QTP / UFT",
            "topics": [
                "What is QTP?",
                "What is UFT?",
                "Evolution from QTP to UFT",
                "Introduction to functional automation",
                "Automation testing fundamentals",
                "Functional testing vs automation testing",
                "Regression automation",
                "UFT automation overview",
                "UFT terminology",
                "Automation testing lifecycle"
            ]
        },
        {
            "module": "Module 2",
            "title": "UFT Environment & Test Structure",
            "topics": [
                "UFT installation concepts",
                "UFT workspace",
                "UFT interface",
                "Test creation",
                "Test structure",
                "Actions",
                "Test flow",
                "Test execution",
                "Test results",
                "Managing automation assets",
                "UFT best practices"
            ]
        },
        {
            "module": "Module 3",
            "title": "Object Identification & Object Repository",
            "topics": [
                "Application objects",
                "Object identification",
                "Object properties",
                "Object Repository concepts",
                "Local Object Repository",
                "Shared Object Repository",
                "Adding objects",
                "Object properties",
                "Object identification challenges",
                "Managing objects",
                "Object Repository best practices"
            ]
        },
        {
            "module": "Module 4",
            "title": "UFT Recording & Playback",
            "topics": [
                "Recording concepts",
                "Recording test steps",
                "Playback",
                "Understanding generated steps",
                "Editing recorded steps",
                "Recording web applications",
                "Recording application workflows",
                "Limitations of recording",
                "When to use recording",
                "Improving recorded scripts"
            ]
        },
        {
            "module": "Module 5",
            "title": "VBScript Fundamentals for UFT",
            "topics": [
                "Introduction to VBScript",
                "Variables",
                "Data types",
                "Operators",
                "Conditional statements",
                "Loops",
                "Functions",
                "Procedures",
                "Arrays",
                "String handling",
                "Date and time functions",
                "Error handling",
                "VBScript concepts required for UFT automation"
            ]
        },
        {
            "module": "Module 6",
            "title": "UFT Checkpoints & Validation",
            "topics": [
                "What are checkpoints?",
                "Standard checkpoints",
                "Text checkpoints",
                "Bitmap checkpoints",
                "Database checkpoints",
                "XML checkpoints",
                "File checkpoints",
                "Checkpoint parameters",
                "Expected vs actual results",
                "Validation strategies"
            ]
        },
        {
            "module": "Module 7",
            "title": "Parameterization & Data-Driven Testing",
            "topics": [
                "Parameterization concepts",
                "Test parameters",
                "Action parameters",
                "Environment parameters",
                "Data tables",
                "Global DataTable",
                "Local DataTable",
                "Data-driven testing",
                "Multiple test iterations",
                "External test data",
                "Reusable test data"
            ]
        },
        {
            "module": "Module 8",
            "title": "Synchronization & Error Handling",
            "topics": [
                "Synchronization concepts",
                "Wait statements",
                "Object synchronization",
                "Synchronization challenges",
                "Dynamic applications",
                "Handling timing issues",
                "Recovery concepts",
                "Error handling",
                "Runtime errors",
                "Automation stability"
            ]
        },
        {
            "module": "Module 9",
            "title": "Descriptive Programming",
            "topics": [
                "What is descriptive programming?",
                "Static descriptive programming",
                "Dynamic descriptive programming",
                "Property-based identification",
                "Creating objects dynamically",
                "Descriptive programming syntax",
                "When to use descriptive programming",
                "Object identification without traditional repository approaches",
                "Advantages and limitations"
            ]
        },
        {
            "module": "Module 10",
            "title": "Advanced UFT Automation",
            "topics": [
                "Reusable Actions",
                "Function libraries",
                "User-defined functions",
                "Reusable components",
                "Environment variables",
                "Dynamic objects",
                "Dynamic test data",
                "Regular expressions",
                "Advanced VBScript concepts",
                "Automation maintenance",
                "Script optimization"
            ]
        },
        {
            "module": "Module 11",
            "title": "Web Application Automation",
            "topics": [
                "Web automation fundamentals",
                "Browser automation",
                "Web objects",
                "Web controls",
                "Forms",
                "Links",
                "Tables",
                "Frames",
                "Web page validation",
                "Dynamic web objects",
                "Web application synchronization",
                "End-to-end web automation"
            ]
        },
        {
            "module": "Module 12",
            "title": "Automation Framework Concepts",
            "topics": [
                "Automation framework fundamentals",
                "Framework architecture",
                "Linear framework",
                "Modular framework",
                "Data-driven framework",
                "Keyword-driven concepts",
                "Hybrid framework concepts",
                "Reusable functions",
                "Function libraries",
                "Test data management",
                "Reporting",
                "Framework maintenance"
            ]
        },
        {
            "module": "Module 13",
            "title": "Test Execution, Reporting & Debugging",
            "topics": [
                "Test execution",
                "Test run settings",
                "Debugging automation scripts",
                "Breakpoints",
                "Step-by-step execution",
                "Error analysis",
                "Test results",
                "Execution reports",
                "Failed test analysis",
                "Troubleshooting",
                "Automation maintenance"
            ]
        },
        {
            "module": "Module 14",
            "title": "Real-Time QTP / UFT Automation Project",
            "topics": [
                "Work on a practical UFT automation project covering:",
                "Application understanding",
                "Requirement analysis",
                "Test scenario identification",
                "Test case creation",
                "Object identification",
                "Object Repository",
                "Test automation",
                "VBScript implementation",
                "Checkpoints",
                "Parameterization",
                "Data-driven testing",
                "Synchronization",
                "Reusable components",
                "Framework organization",
                "Test execution",
                "Result analysis",
                "Debugging",
                "Project documentation",
                "Project explanation"
            ]
        }
    ],
    "handsOnPractice": {
        "title": "Hands-On QTP / UFT Automation Training",
        "intro": "The course emphasizes practical implementation so learners can understand how UFT automation works in real testing environments.",
        "subIntro": "You will practice:",
        "items": [
            "Creating automated test cases",
            "Recording application workflows",
            "Identifying application objects",
            "Managing Object Repository",
            "Writing VBScript",
            "Creating checkpoints",
            "Parameterizing test cases",
            "Implementing data-driven testing",
            "Handling synchronization",
            "Working with dynamic objects",
            "Using descriptive programming",
            "Creating reusable functions",
            "Creating reusable Actions",
            "Building framework components",
            "Executing automated tests",
            "Debugging failures",
            "Analyzing test results"
        ],
        "outro": "The objective is to move from understanding UFT concepts to building and executing practical functional automation tests."
    },
    "projectScenarios": {
        "title": "Real-World QTP / UFT Automation Project Scenarios",
        "intro": "Practical scenarios may include testing:",
        "categories": [
            {
                "title": "Login & Authentication",
                "items": [
                    "Valid login",
                    "Invalid login",
                    "Empty credentials",
                    "Password validation",
                    "Error message validation",
                    "Session validation"
                ]
            },
            {
                "title": "User Management",
                "items": [
                    "Create user",
                    "Search user",
                    "Update user",
                    "Delete user",
                    "Validate user information"
                ]
            },
            {
                "title": "E-Commerce Application",
                "items": [
                    "Login",
                    "Product search",
                    "Product selection",
                    "Add to cart",
                    "Checkout",
                    "Payment workflow",
                    "Order confirmation"
                ]
            },
            {
                "title": "Business Application",
                "items": [
                    "Data entry",
                    "Search",
                    "Transaction processing",
                    "Workflow validation",
                    "Business rule validation",
                    "End-to-end regression testing"
                ]
            }
        ]
    },
    "whoCanLearn": {
        "title": "Who Can Learn QTP / UFT Training?",
        "intro": "This QTP / UFT Training is suitable for:",
        "audience": [
            "Freshers",
            "Manual Testers",
            "QA Engineers",
            "Software Testers",
            "Automation Testers",
            "QA Professionals",
            "Functional Testers",
            "Test Analysts",
            "Working IT Professionals",
            "Career Switchers",
            "Professionals looking to learn UFT automation"
        ]
    },
    "prerequisites": {
        "title": "Prerequisites",
        "items": [
            "Basic knowledge of software testing is helpful.",
            "Programming knowledge is beneficial but not mandatory to begin the structured training.",
            "The course introduces the VBScript concepts required for QTP/UFT automation.",
            "A basic understanding of software testing, functional testing, test cases, defect management, and web applications can be useful."
        ]
    },
    "certification": {
        "title": "QTP / UFT Certification & Guidance",
        "paragraphs": [
            "The training provides structured learning and practical guidance to help learners develop QTP/UFT automation skills.",
            "Certification-related preparation can be included where applicable, along with concept revision, practical exercises, scenario-based questions, automation discussions, practice assessments, and interview preparation.",
            "Learners should verify current vendor certification availability and requirements before planning a certification examination."
        ]
    },
    "careerOpportunities": {
        "title": "Career Opportunities After QTP / UFT Training",
        "intro": "Developing QTP/UFT automation skills can support career paths such as:",
        "roles": [
            "UFT Automation Tester",
            "QTP Automation Tester",
            "Automation Test Engineer",
            "QA Automation Engineer",
            "Software Test Engineer",
            "Functional Automation Tester",
            "QA Engineer",
            "Test Automation Engineer",
            "Automation Test Analyst",
            "Software QA Analyst"
        ],
        "outro": "QTP/UFT skills can also complement broader knowledge of manual testing, API testing, regression testing, CI/CD, and other automation technologies."
    },
    "careerRoadmap": {
        "title": "QTP / UFT Automation Career Roadmap",
        "steps": [
            {
                "step": "Step 1",
                "title": "Learn Software Testing",
                "desc": "Understand testing fundamentals, test scenarios, test cases, defects, and test execution."
            },
            {
                "step": "Step 2",
                "title": "Learn Automation Fundamentals",
                "desc": "Understand the purpose of functional automation and regression automation."
            },
            {
                "step": "Step 3",
                "title": "Learn UFT",
                "desc": "Understand the UFT environment, test structure, and automation workflow."
            },
            {
                "step": "Step 4",
                "title": "Learn Object Identification",
                "desc": "Understand application objects, properties, and Object Repository."
            },
            {
                "step": "Step 5",
                "title": "Learn VBScript",
                "desc": "Develop the scripting knowledge required to create and maintain automation scripts."
            },
            {
                "step": "Step 6",
                "title": "Build Automated Tests",
                "desc": "Create automated test cases using UFT."
            },
            {
                "step": "Step 7",
                "title": "Implement Advanced Concepts",
                "desc": "Learn checkpoints, parameterization, data-driven testing, synchronization, and descriptive programming."
            },
            {
                "step": "Step 8",
                "title": "Learn Framework Concepts",
                "desc": "Understand modular, data-driven, keyword-driven, and hybrid automation approaches."
            },
            {
                "step": "Step 9",
                "title": "Work on Projects",
                "desc": "Build practical UFT automation scenarios using real-world workflows."
            },
            {
                "step": "Step 10",
                "title": "Prepare for Interviews",
                "desc": "Practice QTP/UFT, VBScript, automation framework, and project-related interview questions."
            }
        ]
    },
    "skillsDeveloped": {
        "title": "Skills You Can Develop",
        "intro": "After completing the Best QTP / UFT Training, learners can develop skills in:",
        "skills": [
            "QTP",
            "UFT",
            "Functional Test Automation",
            "Regression Testing",
            "VBScript",
            "Object Identification",
            "Object Repository",
            "Checkpoints",
            "Parameterization",
            "Data-Driven Testing",
            "Synchronization",
            "Descriptive Programming",
            "Reusable Actions",
            "Function Libraries",
            "Web Automation",
            "Dynamic Objects",
            "Automation Framework Concepts",
            "Debugging",
            "Test Execution",
            "Test Reporting"
        ]
    },
    "onlineTraining": {
        "title": "QTP / UFT Online Training",
        "intro": "Our QTP / UFT Online Training is designed for learners who prefer structured online learning.",
        "items": [
            "Live instructor-led sessions",
            "Practical demonstrations",
            "Hands-on exercises",
            "UFT automation practice",
            "VBScript exercises",
            "Real-world scenarios",
            "Project-based learning",
            "Interview preparation"
        ]
    },
    "classroomTraining": {
        "title": "QTP / UFT Classroom Training",
        "intro": "Classroom training provides an interactive learning environment where learners can participate in demonstrations, practical exercises, discussions, and project activities.",
        "items": [
            "Concept explanation",
            "Live demonstrations",
            "UFT exercises",
            "Object identification",
            "Script development",
            "Test execution",
            "Project implementation",
            "Interview preparation"
        ]
    },
    "trainingForFreshers": {
        "title": "QTP / UFT Training for Freshers",
        "path": "Testing Fundamentals → Automation Fundamentals → UFT → Object Repository → VBScript → Checkpoints → Data-Driven Testing → Framework → Project → Interview Preparation",
        "outro": "The focus is on building a strong testing foundation before progressing into advanced automation concepts."
    },
    "trainingForManualTesters": {
        "title": "QTP / UFT Training for Manual Testers",
        "intro": "Manual testers can use UFT training to expand their existing functional testing skills into automation.",
        "items": [
            "Functional testing",
            "Automation fundamentals",
            "UFT environment",
            "Object identification",
            "Object Repository",
            "VBScript",
            "Checkpoints",
            "Parameterization",
            "Data-driven testing",
            "Regression automation",
            "Framework concepts",
            "Real-world automation projects"
        ]
    },
    "trainingForWorkingProfessionals": {
        "title": "QTP / UFT Training for Working Professionals",
        "intro": "Working professionals can strengthen their existing QA skills by developing practical UFT automation knowledge.",
        "items": [
            "Functional test automation",
            "Regression automation",
            "Object identification",
            "VBScript",
            "Data-driven testing",
            "Reusable automation",
            "Framework concepts",
            "Web automation",
            "Test execution",
            "Reporting",
            "Real-world UFT projects"
        ]
    },
    "whyHandsOnMatters": {
        "title": "Why Hands-On UFT Training Matters",
        "paragraphs": [
            "UFT automation is best understood through practical implementation.",
            "Instead of only learning concepts, learners should practice identifying objects, creating TestCases, working with Object Repository, writing VBScript, implementing checkpoints, parameterizing tests, executing automation, analyzing failures, and maintaining reusable components.",
            "This practical approach helps connect functional testing concepts with real-world automation implementation."
        ]
    },
    "interviewPrep": {
        "title": "QTP / UFT Interview Preparation",
        "intro": "Interview preparation can include questions and discussions around:",
        "topics": [
            "QTP/UFT fundamentals",
            "Functional automation",
            "Object identification",
            "Object Repository",
            "Local vs shared Object Repository",
            "VBScript",
            "Checkpoints",
            "Parameterization",
            "Data-driven testing",
            "Synchronization",
            "Descriptive programming",
            "Reusable Actions",
            "Function libraries",
            "Dynamic objects",
            "Framework concepts",
            "Debugging",
            "Test execution",
            "Real-world project scenarios"
        ],
        "outro": "Learners should also be prepared to explain their UFT project, automation framework, object identification approach, test data strategy, and automation implementation."
    },
    "projectAndResume": {
        "title": "QTP / UFT Project & Resume Preparation",
        "intro": "A practical UFT automation project can help learners demonstrate experience with:",
        "items": [
            "UFT",
            "QTP",
            "Functional automation",
            "VBScript",
            "Object Repository",
            "Checkpoints",
            "Parameterization",
            "Data-driven testing",
            "Reusable components",
            "Framework concepts",
            "Web automation",
            "Test execution",
            "Reporting"
        ],
        "outro": "Project-based learning can provide useful material for technical discussions, resumes, and interviews."
    },
    "learningMethodology": {
        "title": "QTP / UFT Learning Methodology",
        "path": "Understand → Demonstrate → Practice → Automate → Execute → Explain",
        "steps": [
            {
                "title": "Understand",
                "desc": "Learn software testing, automation, UFT, and VBScript concepts."
            },
            {
                "title": "Demonstrate",
                "desc": "Observe practical UFT automation implementation."
            },
            {
                "title": "Practice",
                "desc": "Create objects, TestCases, checkpoints, and automation scripts."
            },
            {
                "title": "Automate",
                "desc": "Convert functional test scenarios into automated UFT tests."
            },
            {
                "title": "Execute",
                "desc": "Run automated tests and analyze execution results."
            },
            {
                "title": "Explain",
                "desc": "Learn to explain your automation framework, project, test design, and implementation during interviews."
            }
        ]
    },
    "trainingDuration": {
        "title": "QTP / UFT Training Duration",
        "paragraphs": [
            "The course duration can be structured according to the training plan, learner experience, and depth of hands-on project coverage.",
            "The focus is on completing the required concepts, practical automation exercises, project implementation, and interview preparation rather than learning concepts only for a fixed schedule."
        ]
    },
    "courseFeatures": {
        "title": "Best QTP / UFT Training – Course Features",
        "features": [
            "QTP / UFT Fundamentals",
            "Functional Test Automation",
            "UFT Environment",
            "Object Identification",
            "Object Repository",
            "Recording & Playback",
            "VBScript",
            "Checkpoints",
            "Parameterization",
            "Data-Driven Testing",
            "Synchronization",
            "Descriptive Programming",
            "Reusable Actions",
            "Function Libraries",
            "Web Automation",
            "Automation Framework Concepts",
            "Debugging & Reporting",
            "Real-World Project",
            "Hands-On Exercises",
            "Interview Preparation"
        ]
    },
    "faqSection": {
        "title": "Frequently Asked Questions",
        "faqs": [
            {
                "question": "What is QTP / UFT Training?",
                "answer": "QTP/UFT Training is a structured program focused on functional test automation using UFT, including object identification, Object Repository, VBScript, checkpoints, parameterization, data-driven testing, reusable components, and framework concepts."
            },
            {
                "question": "What is QTP?",
                "answer": "QTP stands for QuickTest Professional and is associated with functional test automation. UFT is the later unified product name associated with this automation technology."
            },
            {
                "question": "What is UFT used for?",
                "answer": "UFT is used for functional and regression test automation, helping testers automate repeatable application workflows and validate expected results."
            },
            {
                "question": "Do I need programming knowledge to learn UFT?",
                "answer": "Advanced programming knowledge is not mandatory to begin. However, learning VBScript concepts is useful for developing and maintaining UFT automation scripts."
            },
            {
                "question": "Is this a QTP / UFT Course Online?",
                "answer": "Yes. The course can be delivered as a QTP / UFT Course Online, covering UFT fundamentals, object identification, VBScript, checkpoints, data-driven testing, framework concepts, projects, and interview preparation."
            },
            {
                "question": "What is Object Repository in UFT?",
                "answer": "Object Repository is used to store and manage the application objects and their identification properties used by automated tests."
            },
            {
                "question": "What are checkpoints in UFT?",
                "answer": "Checkpoints are used to validate expected application data, properties, or behavior against actual results during automated test execution."
            },
            {
                "question": "Can freshers learn QTP/UFT?",
                "answer": "Yes. Freshers can begin with software testing and automation fundamentals before progressing into UFT, VBScript, object identification, and practical automation."
            },
            {
                "question": "Can manual testers learn UFT?",
                "answer": "Yes. Manual testing experience provides a useful foundation for understanding functional test scenarios and converting suitable scenarios into automated tests."
            },
            {
                "question": "Is VBScript required for UFT automation?",
                "answer": "VBScript knowledge is useful for creating functions, handling test logic, working with dynamic data, and developing maintainable UFT automation."
            },
            {
                "question": "Will I work on a real-world UFT project?",
                "answer": "The training includes a practical automation project covering application understanding, object identification, TestCases, VBScript, checkpoints, parameterization, framework concepts, execution, debugging, and reporting."
            },
            {
                "question": "What skills will I learn?",
                "answer": "You can develop skills in QTP/UFT, functional automation, VBScript, Object Repository, checkpoints, parameterization, data-driven testing, synchronization, descriptive programming, reusable components, web automation, and framework concepts."
            }
        ]
    },
    "learningRoadmap": [
        "Start with Software Testing Fundamentals",
        "Learn Automation Testing Fundamentals",
        "Understand QTP / UFT",
        "Learn UFT Environment & Test Structure",
        "Master Object Identification & Object Repository",
        "Learn VBScript for Automation",
        "Create Automated Test Cases",
        "Implement Checkpoints & Validation",
        "Learn Parameterization & Data-Driven Testing",
        "Handle Synchronization & Dynamic Objects",
        "Learn Descriptive Programming",
        "Build Reusable Automation Components",
        "Understand Automation Frameworks",
        "Work on a Real-World UFT Automation Project",
        "Prepare for UFT Interviews",
        "Build Your Test Automation Career"
    ],
    "callToAction": {
        "title": "Start Your QTP / UFT Automation Journey",
        "paragraphs": [
            "Build practical QTP/UFT automation skills through structured training, hands-on exercises, real-world scenarios, VBScript practice, framework concepts, and project-based learning.",
            "Whether you are a fresher, manual tester, QA professional, or working IT professional, this Best QTP / UFT Training provides a structured path toward practical functional test automation skills."
        ],
        "motto": "Learn UFT. Master Functional Automation. Practice VBScript. Build Real Projects. Advance Your Testing Career."
    }
}

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Locate the object boundary for "id": "qtp-uft-training"
target_id = '"id": "qtp-uft-training"'
start_idx = content.find(target_id)
if start_idx == -1:
    print("ERROR: Target ID not found!")
    exit(1)

# Backtrack to the opening brace '{'
brace_idx = content.rfind('{', 0, start_idx)

# Find the closing brace '}' for this object
# We count balanced braces starting from brace_idx
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

# Format qtp_data to formatted JSON string
formatted_json = json.dumps(qtp_data, indent=4, ensure_ascii=False)

# Replace the old object with formatted_json
new_content = content[:brace_idx] + formatted_json + content[end_idx+1:]

with open('src/data/courses.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS: qtp-uft-training successfully updated in courses.js")
