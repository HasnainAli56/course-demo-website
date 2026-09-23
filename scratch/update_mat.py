import json
import re

mat_data = {
    "id": "mobile-app-testing",
    "category": "testing",
    "title": "Mobile Application Testing Training",
    "subtitle": "Mobile Application Testing Course – Online & Classroom Training",
    "iconName": "CheckSquare",
    "iconBg": "bg-sky-50 text-sky-600",
    "description": "Build practical mobile testing skills with TECHMASTER Mobile Application Testing Training, designed for freshers, manual testers, QA engineers, software testers, automation testers, and working IT professionals.\n\nOur Mobile Application Testing Course focuses on mobile testing fundamentals, Android testing, iOS testing, functional testing, UI testing, compatibility testing, mobile automation testing, Appium fundamentals, defect management, real-time testing scenarios, and interview preparation.\n\nWhether you are starting your career in software testing or looking to expand your existing QA skills, TECHMASTER provides a structured learning path to help you understand mobile application testing concepts and practice real-world testing scenarios.",
    "techBadges": [
        "Android Testing",
        "iOS Testing",
        "Functional Testing",
        "Appium Fundamentals",
        "Compatibility Testing",
        "Defect Management"
    ],
    "duration": "8 Months",
    "rating": 4.88,
    "reviewsCount": 790,
    "studentsEnrolled": "2,100+",
    "avgSalary": "₹5.5 - ₹14 LPA",
    "batchType": "Next Cohort: 07th Sep - 13th Sep 2026",
    "level": "All Levels",
    "emi": "₹3,499/mo",
    "featured": False,
    "jobGuarantee": False,
    "introductionOverview": [
        "Build practical mobile testing skills with TECHMASTER Mobile Application Testing Training, designed for freshers, manual testers, QA engineers, software testers, automation testers, and working IT professionals.",
        "Our Mobile Application Testing Course focuses on mobile testing fundamentals, Android testing, iOS testing, functional testing, UI testing, compatibility testing, mobile automation testing, Appium fundamentals, defect management, real-time testing scenarios, and interview preparation.",
        "Whether you are starting your career in software testing or looking to expand your existing QA skills, TECHMASTER provides a structured learning path to help you understand mobile application testing concepts and practice real-world testing scenarios."
    ],
    "handsOnTraining": {
        "title": "Learn Mobile Application Testing Through Practical Training",
        "subtitle": "Through instructor-led sessions, demonstrations, hands-on exercises, and project-based learning, you will learn how to:",
        "items": [
            "Understand mobile application testing fundamentals.",
            "Test Android and iOS applications.",
            "Perform functional testing of mobile applications.",
            "Validate mobile application UI and usability.",
            "Perform device and operating system compatibility testing.",
            "Test application installation, upgrades, and uninstallation.",
            "Validate mobile application permissions and notifications.",
            "Perform interruption and recovery testing.",
            "Understand mobile network and connectivity testing.",
            "Identify, document, and report application defects.",
            "Understand mobile automation testing fundamentals.",
            "Learn Appium automation concepts.",
            "Execute test cases and analyze test results.",
            "Work on practical mobile application testing scenarios.",
            "Prepare for mobile testing and QA interviews."
        ]
    },
    "whatIsCourse": {
        "title": "What Is Mobile Application Testing?",
        "paragraphs": [
            "Mobile Application Testing is the process of evaluating mobile applications to verify their functionality, usability, compatibility, and reliability across supported devices and operating systems.",
            "It helps identify defects that may affect application performance, user experience, navigation, or expected functionality.",
            "Mobile application testing may involve:"
        ],
        "scope": [
            "Android smartphones and tablets.",
            "iPhones and iPads.",
            "Different operating system versions.",
            "Different screen sizes and resolutions.",
            "Physical devices.",
            "Emulators and simulators.",
            "Different network and connectivity conditions."
        ],
        "outro": "Mobile application testing includes functional testing, UI testing, compatibility testing, installation testing, interruption testing, regression testing, and mobile automation testing."
    },
    "whyLearn": {
        "title": "Why Learn Mobile Application Testing?",
        "intro": "Mobile applications are widely used across industries such as banking, e-commerce, healthcare, education, transportation, and entertainment.",
        "subIntro": "Testing these applications requires an understanding of different devices, operating systems, screen sizes, connectivity conditions, and user interactions. By learning mobile application testing with TECHMASTER, you can develop practical knowledge of:",
        "items": [
            "Android application testing.",
            "iOS application testing.",
            "Functional and regression testing.",
            "UI and usability testing.",
            "Device compatibility testing.",
            "Installation and upgrade testing.",
            "Mobile interruption testing.",
            "Network and connectivity testing.",
            "Mobile defect management.",
            "Mobile automation testing.",
            "Appium fundamentals.",
            "Test execution and reporting.",
            "Real-world testing scenarios."
        ]
    },
    "courseHighlights": {
        "title": "TECHMASTER Mobile Application Testing Training – Course Highlights",
        "highlights": [
            {
                "title": "Practical Mobile Testing Training",
                "description": "Learn mobile testing concepts through demonstrations, hands-on exercises, and application-based testing scenarios."
            },
            {
                "title": "Android & iOS Application Testing",
                "description": "Understand testing approaches for Android and iOS applications, including device compatibility, operating system versions, and application behavior."
            },
            {
                "title": "Functional Testing",
                "description": "Learn how to validate mobile application features, workflows, inputs, outputs, and expected results."
            },
            {
                "title": "UI & Usability Testing",
                "description": "Understand how to evaluate application layouts, navigation, screen orientation, user interactions, and usability."
            },
            {
                "title": "Compatibility Testing",
                "description": "Learn how to test mobile applications across different devices, screen sizes, resolutions, and operating system versions."
            },
            {
                "title": "Mobile Automation Testing",
                "description": "Understand mobile automation fundamentals and how automated testing can support repeatable testing activities."
            },
            {
                "title": "Appium Fundamentals",
                "description": "Explore Appium architecture, mobile automation workflows, element identification, and test execution concepts."
            },
            {
                "title": "Defect Management",
                "description": "Learn how to identify, document, report, track, and retest defects found during mobile application testing."
            },
            {
                "title": "Real-World Project Training",
                "description": "Practice mobile testing scenarios based on common business applications and user workflows."
            },
            {
                "title": "Interview Preparation",
                "description": "Prepare for mobile application testing, manual testing, QA, and mobile automation testing interviews."
            }
        ]
    },
    "curriculum": {
        "title": "Mobile Application Testing Course Curriculum",
        "modules": [
            {
                "module": "Module 1",
                "title": "Introduction to Mobile Application Testing",
                "topics": [
                    "Introduction to software testing.",
                    "What is mobile application testing?",
                    "Importance and objectives of mobile testing.",
                    "Mobile application testing lifecycle.",
                    "Mobile application testing challenges.",
                    "Mobile application architecture overview.",
                    "Types of mobile applications.",
                    "Native, web, and hybrid applications.",
                    "Android vs iOS testing.",
                    "Mobile testing vs web application testing.",
                    "Mobile testing terminology.",
                    "Introduction to mobile testing tools."
                ]
            },
            {
                "module": "Module 2",
                "title": "Mobile Testing Environment & Setup",
                "topics": [
                    "Introduction to the mobile testing environment.",
                    "Understanding Android and iOS devices.",
                    "Physical devices vs emulators and simulators.",
                    "Android emulator fundamentals.",
                    "iOS simulator fundamentals.",
                    "Device configuration.",
                    "Operating system versions.",
                    "Screen sizes and resolutions.",
                    "Device connectivity.",
                    "Application installation and launch.",
                    "Application permissions.",
                    "Test environment preparation.",
                    "Managing test devices.",
                    "Mobile testing environment challenges."
                ]
            },
            {
                "module": "Module 3",
                "title": "Mobile Application Testing Types",
                "topics": [
                    "Functional testing.",
                    "UI testing.",
                    "Usability testing.",
                    "Compatibility testing.",
                    "Installation testing.",
                    "Upgrade testing.",
                    "Regression testing.",
                    "Smoke testing.",
                    "Sanity testing.",
                    "Exploratory testing.",
                    "Localization testing.",
                    "Accessibility testing fundamentals.",
                    "Interruption testing.",
                    "Network testing.",
                    "Performance testing concepts.",
                    "Security testing fundamentals.",
                    "Positive and negative testing.",
                    "End-to-end mobile application testing."
                ]
            },
            {
                "module": "Module 4",
                "title": "Android Application Testing",
                "topics": [
                    "Introduction to Android application testing.",
                    "Android application architecture overview.",
                    "Android operating system versions.",
                    "Android device compatibility.",
                    "Application installation and uninstallation.",
                    "Application launch and background behavior.",
                    "Android UI validation.",
                    "Screen orientation testing.",
                    "Touch gestures and navigation.",
                    "Android permissions testing.",
                    "Notifications testing.",
                    "Incoming calls and message interruptions.",
                    "Network connectivity testing.",
                    "Android application upgrade testing.",
                    "Android regression testing.",
                    "Common Android testing challenges."
                ]
            },
            {
                "module": "Module 5",
                "title": "iOS Application Testing",
                "topics": [
                    "Introduction to iOS application testing.",
                    "iOS application architecture overview.",
                    "iOS devices and operating system versions.",
                    "iPhone and iPad testing considerations.",
                    "Application installation and launch.",
                    "UI and navigation testing.",
                    "Screen orientation testing.",
                    "Touch gestures and user interactions.",
                    "Permissions and notifications testing.",
                    "Background and foreground behavior.",
                    "Network connectivity testing.",
                    "Interruption testing.",
                    "Application update testing.",
                    "Device compatibility testing.",
                    "iOS regression testing.",
                    "Common iOS testing challenges."
                ]
            },
            {
                "module": "Module 6",
                "title": "Mobile Functional Testing",
                "topics": [
                    "Functional testing fundamentals.",
                    "Understanding mobile application requirements.",
                    "Requirement analysis.",
                    "Identifying test scenarios.",
                    "Writing mobile test cases.",
                    "Test data preparation.",
                    "Positive and negative test scenarios.",
                    "Input field validation.",
                    "Form validation.",
                    "Login and authentication testing.",
                    "Registration workflow testing.",
                    "Search functionality testing.",
                    "Navigation and menu testing.",
                    "Data validation.",
                    "Transaction workflow testing.",
                    "Error message validation.",
                    "Session management testing.",
                    "End-to-end functional testing.",
                    "Test execution and result documentation."
                ]
            },
            {
                "module": "Module 7",
                "title": "Mobile UI, Usability & Compatibility Testing",
                "topics": [
                    "Mobile UI testing fundamentals.",
                    "Layout and alignment validation.",
                    "Screen size and resolution testing.",
                    "Screen orientation testing.",
                    "Font and text visibility.",
                    "Button and touch target validation.",
                    "Navigation and gesture testing.",
                    "Scrolling behavior.",
                    "Responsive layout testing.",
                    "Usability testing fundamentals.",
                    "Accessibility testing concepts.",
                    "Device compatibility testing.",
                    "Operating system compatibility.",
                    "Browser and WebView testing concepts.",
                    "Different device configurations.",
                    "Identifying UI inconsistencies.",
                    "Documenting usability and compatibility defects."
                ]
            },
            {
                "module": "Module 8",
                "title": "Mobile Installation, Upgrade & Interruption Testing",
                "topics": [
                    "Application installation testing.",
                    "Fresh installation testing.",
                    "Application uninstallation.",
                    "Application upgrade testing.",
                    "Data retention after upgrades.",
                    "Application launch and closure.",
                    "Background and foreground transitions.",
                    "Incoming call interruptions.",
                    "SMS and notification interruptions.",
                    "Battery and charging interruptions.",
                    "Network disconnection scenarios.",
                    "Wi-Fi to mobile data switching.",
                    "Application recovery after interruption.",
                    "Session recovery testing.",
                    "Data consistency validation.",
                    "Crash and restart behavior."
                ]
            },
            {
                "module": "Module 9",
                "title": "Mobile Network & Connectivity Testing",
                "topics": [
                    "Introduction to mobile network testing.",
                    "Wi-Fi connectivity testing.",
                    "Mobile data testing.",
                    "Network switching scenarios.",
                    "Offline mode testing.",
                    "Airplane mode testing.",
                    "Weak network conditions.",
                    "Network disconnection and reconnection.",
                    "Application behavior during connectivity loss.",
                    "Request timeout validation.",
                    "Data synchronization testing.",
                    "Network-dependent functionality.",
                    "Error handling during network failures.",
                    "Recovery after connectivity restoration.",
                    "Network-related defect reporting."
                ]
            },
            {
                "module": "Module 10",
                "title": "Mobile Defect Management & Test Documentation",
                "topics": [
                    "Introduction to defect management.",
                    "Identifying mobile application defects.",
                    "Defect lifecycle.",
                    "Defect severity and priority.",
                    "Writing effective bug reports.",
                    "Steps to reproduce defects.",
                    "Expected vs actual results.",
                    "Capturing screenshots and recordings.",
                    "Device and OS information in defect reports.",
                    "Logs and supporting evidence.",
                    "Defect tracking.",
                    "Retesting and regression testing.",
                    "Test execution reports.",
                    "Test summary reports.",
                    "Test case documentation.",
                    "Test scenario documentation.",
                    "Mobile testing deliverables.",
                    "Communicating defects with development teams."
                ]
            },
            {
                "module": "Module 11",
                "title": "Mobile Testing Tools & Debugging Fundamentals",
                "topics": [
                    "Introduction to mobile testing tools.",
                    "Overview of Android testing tools.",
                    "Android Debug Bridge (ADB) fundamentals.",
                    "Device connection and identification.",
                    "Installing and launching applications.",
                    "Understanding application logs.",
                    "Logcat fundamentals.",
                    "Introduction to Xcode and iOS Simulator.",
                    "Device and simulator testing considerations.",
                    "Capturing screenshots and recordings.",
                    "Basic mobile application debugging concepts.",
                    "Understanding crash information.",
                    "Identifying common application issues.",
                    "Test execution and evidence collection."
                ]
            },
            {
                "module": "Module 12",
                "title": "Mobile Automation Testing Fundamentals",
                "topics": [
                    "Introduction to mobile automation testing.",
                    "Manual testing vs automation testing.",
                    "Benefits and limitations of mobile automation.",
                    "Identifying automation test candidates.",
                    "Mobile automation testing lifecycle.",
                    "Introduction to mobile automation tools.",
                    "Mobile automation architecture.",
                    "Understanding automation test scripts.",
                    "Locators and element identification.",
                    "UI element interactions.",
                    "Handling mobile gestures.",
                    "Synchronization concepts.",
                    "Test data management.",
                    "Automation execution.",
                    "Automation reporting.",
                    "Debugging automation failures.",
                    "Mobile automation maintenance."
                ]
            },
            {
                "module": "Module 13",
                "title": "Appium Mobile Automation Testing",
                "topics": [
                    "Introduction to Appium.",
                    "Appium architecture.",
                    "Appium components and terminology.",
                    "Appium setup concepts.",
                    "Client-server architecture.",
                    "Appium automation workflow.",
                    "Desired capabilities and session configuration concepts.",
                    "Understanding mobile application elements.",
                    "Locators and element identification.",
                    "Finding UI elements.",
                    "Performing click and input actions.",
                    "Handling mobile gestures.",
                    "Working with Android applications.",
                    "iOS automation concepts.",
                    "Synchronization and wait strategies.",
                    "Test script execution.",
                    "Automation test validation.",
                    "Debugging automation failures.",
                    "Appium test reporting concepts.",
                    "Maintaining mobile automation scripts.",
                    "Appium limitations and considerations."
                ]
            },
            {
                "module": "Module 14",
                "title": "Mobile API Testing Fundamentals",
                "topics": [
                    "Introduction to API testing.",
                    "Role of APIs in mobile applications.",
                    "Client-server communication fundamentals.",
                    "Understanding HTTP requests and responses.",
                    "GET, POST, PUT, PATCH, and DELETE methods.",
                    "HTTP status codes.",
                    "Request headers and parameters.",
                    "JSON response validation.",
                    "Authentication concepts.",
                    "Positive and negative API scenarios.",
                    "API testing for mobile application workflows.",
                    "Validating data exchanged between applications and servers.",
                    "Error response validation.",
                    "API and mobile UI testing relationship.",
                    "Introduction to API testing tools."
                ]
            },
            {
                "module": "Module 15",
                "title": "Mobile Performance & Security Testing Fundamentals",
                "topics": [
                    "Introduction to mobile performance testing.",
                    "Mobile application response time.",
                    "Application launch time.",
                    "Resource utilization concepts.",
                    "CPU and memory usage fundamentals.",
                    "Battery consumption considerations.",
                    "Network performance considerations.",
                    "Performance testing scenarios.",
                    "Understanding performance bottlenecks.",
                    "Introduction to mobile security testing.",
                    "Authentication and authorization testing concepts.",
                    "Session handling.",
                    "Permission validation.",
                    "Sensitive data handling fundamentals.",
                    "Secure communication concepts.",
                    "Input validation.",
                    "Security-related defect identification.",
                    "Mobile performance and security testing limitations."
                ]
            },
            {
                "module": "Module 16",
                "title": "Real-Time Mobile Application Testing Project",
                "topics": [
                    "Work on a practical mobile application testing project covering:",
                    "Application understanding.",
                    "Requirement analysis.",
                    "Identifying functional requirements.",
                    "Preparing a test plan.",
                    "Identifying test scenarios.",
                    "Creating test cases.",
                    "Preparing test data.",
                    "Setting up the test environment.",
                    "Android application testing.",
                    "iOS testing considerations.",
                    "Functional testing.",
                    "UI and usability testing.",
                    "Compatibility testing.",
                    "Installation and upgrade testing.",
                    "Interruption testing.",
                    "Network testing.",
                    "Defect identification and reporting.",
                    "Test execution.",
                    "Retesting and regression testing.",
                    "Mobile automation testing concepts.",
                    "Appium automation exercises.",
                    "Test result analysis.",
                    "Project documentation.",
                    "Project explanation."
                ]
            }
        ]
    },
    "syllabus": [
        {
            "module": "Module 1",
            "title": "Introduction to Mobile Application Testing",
            "topics": [
                "Introduction to software testing.",
                "What is mobile application testing?",
                "Importance and objectives of mobile testing.",
                "Mobile application testing lifecycle.",
                "Mobile application testing challenges.",
                "Mobile application architecture overview.",
                "Types of mobile applications.",
                "Native, web, and hybrid applications.",
                "Android vs iOS testing.",
                "Mobile testing vs web application testing.",
                "Mobile testing terminology.",
                "Introduction to mobile testing tools."
            ]
        },
        {
            "module": "Module 2",
            "title": "Mobile Testing Environment & Setup",
            "topics": [
                "Introduction to the mobile testing environment.",
                "Understanding Android and iOS devices.",
                "Physical devices vs emulators and simulators.",
                "Android emulator fundamentals.",
                "iOS simulator fundamentals.",
                "Device configuration.",
                "Operating system versions.",
                "Screen sizes and resolutions.",
                "Device connectivity.",
                "Application installation and launch.",
                "Application permissions.",
                "Test environment preparation.",
                "Managing test devices.",
                "Mobile testing environment challenges."
            ]
        },
        {
            "module": "Module 3",
            "title": "Mobile Application Testing Types",
            "topics": [
                "Functional testing.",
                "UI testing.",
                "Usability testing.",
                "Compatibility testing.",
                "Installation testing.",
                "Upgrade testing.",
                "Regression testing.",
                "Smoke testing.",
                "Sanity testing.",
                "Exploratory testing.",
                "Localization testing.",
                "Accessibility testing fundamentals.",
                "Interruption testing.",
                "Network testing.",
                "Performance testing concepts.",
                "Security testing fundamentals.",
                "Positive and negative testing.",
                "End-to-end mobile application testing."
            ]
        },
        {
            "module": "Module 4",
            "title": "Android Application Testing",
            "topics": [
                "Introduction to Android application testing.",
                "Android application architecture overview.",
                "Android operating system versions.",
                "Android device compatibility.",
                "Application installation and uninstallation.",
                "Application launch and background behavior.",
                "Android UI validation.",
                "Screen orientation testing.",
                "Touch gestures and navigation.",
                "Android permissions testing.",
                "Notifications testing.",
                "Incoming calls and message interruptions.",
                "Network connectivity testing.",
                "Android application upgrade testing.",
                "Android regression testing.",
                "Common Android testing challenges."
            ]
        },
        {
            "module": "Module 5",
            "title": "iOS Application Testing",
            "topics": [
                "Introduction to iOS application testing.",
                "iOS application architecture overview.",
                "iOS devices and operating system versions.",
                "iPhone and iPad testing considerations.",
                "Application installation and launch.",
                "UI and navigation testing.",
                "Screen orientation testing.",
                "Touch gestures and user interactions.",
                "Permissions and notifications testing.",
                "Background and foreground behavior.",
                "Network connectivity testing.",
                "Interruption testing.",
                "Application update testing.",
                "Device compatibility testing.",
                "iOS regression testing.",
                "Common iOS testing challenges."
            ]
        },
        {
            "module": "Module 6",
            "title": "Mobile Functional Testing",
            "topics": [
                "Functional testing fundamentals.",
                "Understanding mobile application requirements.",
                "Requirement analysis.",
                "Identifying test scenarios.",
                "Writing mobile test cases.",
                "Test data preparation.",
                "Positive and negative test scenarios.",
                "Input field validation.",
                "Form validation.",
                "Login and authentication testing.",
                "Registration workflow testing.",
                "Search functionality testing.",
                "Navigation and menu testing.",
                "Data validation.",
                "Transaction workflow testing.",
                "Error message validation.",
                "Session management testing.",
                "End-to-end functional testing.",
                "Test execution and result documentation."
            ]
        },
        {
            "module": "Module 7",
            "title": "Mobile UI, Usability & Compatibility Testing",
            "topics": [
                "Mobile UI testing fundamentals.",
                "Layout and alignment validation.",
                "Screen size and resolution testing.",
                "Screen orientation testing.",
                "Font and text visibility.",
                "Button and touch target validation.",
                "Navigation and gesture testing.",
                "Scrolling behavior.",
                "Responsive layout testing.",
                "Usability testing fundamentals.",
                "Accessibility testing concepts.",
                "Device compatibility testing.",
                "Operating system compatibility.",
                "Browser and WebView testing concepts.",
                "Different device configurations.",
                "Identifying UI inconsistencies.",
                "Documenting usability and compatibility defects."
            ]
        },
        {
            "module": "Module 8",
            "title": "Mobile Installation, Upgrade & Interruption Testing",
            "topics": [
                "Application installation testing.",
                "Fresh installation testing.",
                "Application uninstallation.",
                "Application upgrade testing.",
                "Data retention after upgrades.",
                "Application launch and closure.",
                "Background and foreground transitions.",
                "Incoming call interruptions.",
                "SMS and notification interruptions.",
                "Battery and charging interruptions.",
                "Network disconnection scenarios.",
                "Wi-Fi to mobile data switching.",
                "Application recovery after interruption.",
                "Session recovery testing.",
                "Data consistency validation.",
                "Crash and restart behavior."
            ]
        },
        {
            "module": "Module 9",
            "title": "Mobile Network & Connectivity Testing",
            "topics": [
                "Introduction to mobile network testing.",
                "Wi-Fi connectivity testing.",
                "Mobile data testing.",
                "Network switching scenarios.",
                "Offline mode testing.",
                "Airplane mode testing.",
                "Weak network conditions.",
                "Network disconnection and reconnection.",
                "Application behavior during connectivity loss.",
                "Request timeout validation.",
                "Data synchronization testing.",
                "Network-dependent functionality.",
                "Error handling during network failures.",
                "Recovery after connectivity restoration.",
                "Network-related defect reporting."
            ]
        },
        {
            "module": "Module 10",
            "title": "Mobile Defect Management & Test Documentation",
            "topics": [
                "Introduction to defect management.",
                "Identifying mobile application defects.",
                "Defect lifecycle.",
                "Defect severity and priority.",
                "Writing effective bug reports.",
                "Steps to reproduce defects.",
                "Expected vs actual results.",
                "Capturing screenshots and recordings.",
                "Device and OS information in defect reports.",
                "Logs and supporting evidence.",
                "Defect tracking.",
                "Retesting and regression testing.",
                "Test execution reports.",
                "Test summary reports.",
                "Test case documentation.",
                "Test scenario documentation.",
                "Mobile testing deliverables.",
                "Communicating defects with development teams."
            ]
        },
        {
            "module": "Module 11",
            "title": "Mobile Testing Tools & Debugging Fundamentals",
            "topics": [
                "Introduction to mobile testing tools.",
                "Overview of Android testing tools.",
                "Android Debug Bridge (ADB) fundamentals.",
                "Device connection and identification.",
                "Installing and launching applications.",
                "Understanding application logs.",
                "Logcat fundamentals.",
                "Introduction to Xcode and iOS Simulator.",
                "Device and simulator testing considerations.",
                "Capturing screenshots and recordings.",
                "Basic mobile application debugging concepts.",
                "Understanding crash information.",
                "Identifying common application issues.",
                "Test execution and evidence collection."
            ]
        },
        {
            "module": "Module 12",
            "title": "Mobile Automation Testing Fundamentals",
            "topics": [
                "Introduction to mobile automation testing.",
                "Manual testing vs automation testing.",
                "Benefits and limitations of mobile automation.",
                "Identifying automation test candidates.",
                "Mobile automation testing lifecycle.",
                "Introduction to mobile automation tools.",
                "Mobile automation architecture.",
                "Understanding automation test scripts.",
                "Locators and element identification.",
                "UI element interactions.",
                "Handling mobile gestures.",
                "Synchronization concepts.",
                "Test data management.",
                "Automation execution.",
                "Automation reporting.",
                "Debugging automation failures.",
                "Mobile automation maintenance."
            ]
        },
        {
            "module": "Module 13",
            "title": "Appium Mobile Automation Testing",
            "topics": [
                "Introduction to Appium.",
                "Appium architecture.",
                "Appium components and terminology.",
                "Appium setup concepts.",
                "Client-server architecture.",
                "Appium automation workflow.",
                "Desired capabilities and session configuration concepts.",
                "Understanding mobile application elements.",
                "Locators and element identification.",
                "Finding UI elements.",
                "Performing click and input actions.",
                "Handling mobile gestures.",
                "Working with Android applications.",
                "iOS automation concepts.",
                "Synchronization and wait strategies.",
                "Test script execution.",
                "Automation test validation.",
                "Debugging automation failures.",
                "Appium test reporting concepts.",
                "Maintaining mobile automation scripts.",
                "Appium limitations and considerations."
            ]
        },
        {
            "module": "Module 14",
            "title": "Mobile API Testing Fundamentals",
            "topics": [
                "Introduction to API testing.",
                "Role of APIs in mobile applications.",
                "Client-server communication fundamentals.",
                "Understanding HTTP requests and responses.",
                "GET, POST, PUT, PATCH, and DELETE methods.",
                "HTTP status codes.",
                "Request headers and parameters.",
                "JSON response validation.",
                "Authentication concepts.",
                "Positive and negative API scenarios.",
                "API testing for mobile application workflows.",
                "Validating data exchanged between applications and servers.",
                "Error response validation.",
                "API and mobile UI testing relationship.",
                "Introduction to API testing tools."
            ]
        },
        {
            "module": "Module 15",
            "title": "Mobile Performance & Security Testing Fundamentals",
            "topics": [
                "Introduction to mobile performance testing.",
                "Mobile application response time.",
                "Application launch time.",
                "Resource utilization concepts.",
                "CPU and memory usage fundamentals.",
                "Battery consumption considerations.",
                "Network performance considerations.",
                "Performance testing scenarios.",
                "Understanding performance bottlenecks.",
                "Introduction to mobile security testing.",
                "Authentication and authorization testing concepts.",
                "Session handling.",
                "Permission validation.",
                "Sensitive data handling fundamentals.",
                "Secure communication concepts.",
                "Input validation.",
                "Security-related defect identification.",
                "Mobile performance and security testing limitations."
            ]
        },
        {
            "module": "Module 16",
            "title": "Real-Time Mobile Application Testing Project",
            "topics": [
                "Work on a practical mobile application testing project covering:",
                "Application understanding.",
                "Requirement analysis.",
                "Identifying functional requirements.",
                "Preparing a test plan.",
                "Identifying test scenarios.",
                "Creating test cases.",
                "Preparing test data.",
                "Setting up the test environment.",
                "Android application testing.",
                "iOS testing considerations.",
                "Functional testing.",
                "UI and usability testing.",
                "Compatibility testing.",
                "Installation and upgrade testing.",
                "Interruption testing.",
                "Network testing.",
                "Defect identification and reporting.",
                "Test execution.",
                "Retesting and regression testing.",
                "Mobile automation testing concepts.",
                "Appium automation exercises.",
                "Test result analysis.",
                "Project documentation.",
                "Project explanation."
            ]
        }
    ],
    "handsOnPractice": {
        "title": "Hands-On Mobile Application Testing Training",
        "intro": "At TECHMASTER, the course emphasizes practical implementation to help learners understand how mobile application testing works in real testing environments.",
        "subIntro": "You will practice:",
        "items": [
            "Understanding mobile application requirements.",
            "Preparing mobile test scenarios.",
            "Creating and executing test cases.",
            "Testing Android applications.",
            "Understanding iOS testing workflows.",
            "Performing functional testing.",
            "Validating mobile application UI.",
            "Testing different devices and screen sizes.",
            "Performing installation and upgrade testing.",
            "Testing interruptions and recovery.",
            "Validating network-dependent functionality.",
            "Identifying and reporting defects.",
            "Capturing screenshots and test evidence.",
            "Performing regression testing.",
            "Understanding mobile automation testing.",
            "Practicing Appium fundamentals.",
            "Executing test scenarios.",
            "Analyzing test results.",
            "Preparing project documentation."
        ],
        "outro": "Our objective is to help learners progress from understanding mobile testing concepts to executing practical mobile application testing scenarios."
    },
    "projectScenarios": {
        "title": "Real-World Mobile Application Testing Project Scenarios",
        "intro": "Practical scenarios may include testing the following application workflows.",
        "categories": [
            {
                "title": "Login & Authentication",
                "items": [
                    "Valid login.",
                    "Invalid login credentials.",
                    "Empty username and password.",
                    "Password validation.",
                    "Error message validation.",
                    "Forgot password workflow.",
                    "Session timeout.",
                    "Logout functionality.",
                    "Authentication behavior during network interruption."
                ]
            },
            {
                "title": "E-Commerce Mobile Application",
                "items": [
                    "User registration.",
                    "Login and logout.",
                    "Product search.",
                    "Product filtering.",
                    "Product selection.",
                    "Add to cart.",
                    "Cart quantity updates.",
                    "Wishlist functionality.",
                    "Checkout workflow.",
                    "Address validation.",
                    "Payment workflow testing.",
                    "Order confirmation.",
                    "Order history validation."
                ]
            },
            {
                "title": "Banking & Financial Application",
                "items": [
                    "User authentication.",
                    "Account information validation.",
                    "Balance display.",
                    "Transaction history.",
                    "Fund transfer workflow.",
                    "Beneficiary management.",
                    "Input validation.",
                    "Session timeout.",
                    "Transaction confirmation.",
                    "Error handling during network interruptions."
                ]
            },
            {
                "title": "Food Delivery Application",
                "items": [
                    "User registration and login.",
                    "Location permission testing.",
                    "Restaurant search.",
                    "Menu browsing.",
                    "Item selection.",
                    "Cart management.",
                    "Address selection.",
                    "Order placement.",
                    "Payment workflow.",
                    "Order status tracking.",
                    "Push notification validation.",
                    "Cancellation workflow."
                ]
            },
            {
                "title": "Business & Enterprise Mobile Application",
                "items": [
                    "User authentication.",
                    "Employee information validation.",
                    "Data entry.",
                    "Search and filtering.",
                    "Record creation and updates.",
                    "Workflow validation.",
                    "Data synchronization.",
                    "Offline functionality.",
                    "Notification testing.",
                    "Role-based access testing.",
                    "End-to-end regression testing."
                ]
            }
        ]
    },
    "whoCanLearn": {
        "title": "Who Can Learn Mobile Application Testing?",
        "intro": "This Mobile Application Testing Course at TECHMASTER is suitable for:",
        "audience": [
            "Freshers.",
            "Manual Testers.",
            "Software Testers.",
            "QA Engineers.",
            "Quality Assurance Professionals.",
            "Automation Testers.",
            "Mobile Application Testers.",
            "Test Analysts.",
            "Web Application Testers.",
            "IT Professionals.",
            "Career Switchers.",
            "Professionals looking to move into mobile testing.",
            "Professionals interested in mobile automation testing."
        ]
    },
    "prerequisites": {
        "title": "Mobile Application Testing Course Prerequisites",
        "paragraphs": [
            "Basic knowledge of software testing is helpful.",
            "Programming knowledge is beneficial for learners interested in mobile automation testing, but advanced programming knowledge is not required to begin learning manual mobile testing fundamentals."
        ],
        "items": [
            "Software testing fundamentals.",
            "Manual testing concepts.",
            "Test cases and test scenarios.",
            "Defect management.",
            "Web or mobile applications.",
            "Basic computer operations."
        ],
        "outro": "Learners who want to progress into Appium automation can benefit from developing programming and scripting fundamentals alongside the course."
    },
    "certification": {
        "title": "Mobile Application Testing Certification & Guidance",
        "paragraphs": [
            "TECHMASTER provides structured learning and practical guidance to help learners develop mobile application testing skills.",
            "Certification-related preparation can be included where applicable, along with concept revision, mobile testing practical exercises, scenario-based questions, test case preparation, defect reporting exercises, mobile automation discussions, practice assessments, project explanation, and interview preparation.",
            "Learners should verify the current availability and requirements of any external certification examination before planning their certification."
        ]
    },
    "careerOpportunities": {
        "title": "Career Opportunities After Mobile Application Testing Training",
        "intro": "Developing mobile application testing skills can support career paths such as:",
        "roles": [
            "Mobile Application Tester.",
            "Mobile QA Engineer.",
            "Software Test Engineer.",
            "Manual Test Engineer.",
            "Mobile Testing Engineer.",
            "QA Analyst.",
            "Functional Test Engineer.",
            "Android Application Tester.",
            "iOS Application Tester.",
            "Mobile Automation Tester.",
            "Appium Automation Tester.",
            "Test Automation Engineer.",
            "Quality Assurance Analyst."
        ],
        "outro": "Mobile testing skills can also complement broader knowledge of web testing, API testing, automation frameworks, regression testing, and software quality assurance. Career opportunities depend on individual skills, practical experience, employer requirements, and available openings."
    },
    "careerRoadmap": {
        "title": "Mobile Application Testing Career Roadmap",
        "steps": [
            { "step": "Step 1", "title": "Learn Software Testing Fundamentals", "desc": "Understand testing principles, test cases, test scenarios, defect management, and test execution." },
            { "step": "Step 2", "title": "Understand Mobile Applications", "desc": "Learn about native, web, and hybrid applications and understand the differences between Android and iOS environments." },
            { "step": "Step 3", "title": "Learn Mobile Testing Fundamentals", "desc": "Understand mobile testing types, testing challenges, device configurations, and mobile application testing workflows." },
            { "step": "Step 4", "title": "Develop Manual Mobile Testing Skills", "desc": "Practice functional testing, UI testing, compatibility testing, installation testing, and interruption testing." },
            { "step": "Step 5", "title": "Learn Mobile Test Documentation", "desc": "Develop skills in test case creation, defect reporting, test execution, retesting, and regression testing." },
            { "step": "Step 6", "title": "Explore Mobile Testing Tools", "desc": "Understand mobile testing environments, emulators, simulators, debugging fundamentals, and relevant testing tools." },
            { "step": "Step 7", "title": "Learn Mobile Automation Fundamentals", "desc": "Understand automation testing concepts, automation candidates, element identification, synchronization, and test execution." },
            { "step": "Step 8", "title": "Develop Appium Skills", "desc": "Learn Appium architecture, automation workflows, locators, mobile interactions, and script execution." },
            { "step": "Step 9", "title": "Work on Practical Projects", "desc": "Apply mobile testing concepts to real-world application workflows and document testing activities." },
            { "step": "Step 10", "title": "Prepare for Interviews", "desc": "Practice mobile testing questions, scenario-based discussions, defect analysis, and project explanations." }
        ]
    },
    "skillsDeveloped": {
        "title": "Skills You Can Develop",
        "intro": "After completing the TECHMASTER Mobile Application Testing Course, learners can develop skills in:",
        "skills": [
            "Mobile Application Testing.",
            "Android Application Testing.",
            "iOS Application Testing.",
            "Manual Testing.",
            "Functional Testing.",
            "UI Testing.",
            "Usability Testing.",
            "Compatibility Testing.",
            "Installation Testing.",
            "Upgrade Testing.",
            "Interruption Testing.",
            "Network Testing.",
            "Regression Testing.",
            "Test Case Design.",
            "Test Scenario Preparation.",
            "Defect Management.",
            "Test Documentation.",
            "Mobile Testing Tools.",
            "Android Debugging Fundamentals.",
            "Mobile Automation Testing.",
            "Appium Fundamentals.",
            "Mobile API Testing Fundamentals.",
            "Performance Testing Concepts.",
            "Security Testing Fundamentals.",
            "Test Execution and Reporting."
        ]
    },
    "deliveryFormats": {
        "online": {
            "title": "Mobile Application Testing Online Training",
            "intro": "Our Mobile Application Testing Online Training is designed for learners who prefer structured online learning.",
            "items": [
                "Live instructor-led sessions.",
                "Practical demonstrations.",
                "Hands-on exercises.",
                "Mobile testing practice.",
                "Android testing concepts.",
                "iOS testing concepts.",
                "Functional testing exercises.",
                "Mobile testing tool demonstrations.",
                "Mobile automation fundamentals.",
                "Appium practice.",
                "Real-world testing scenarios.",
                "Project-based learning.",
                "Interview preparation."
            ],
            "outro": "Online training provides a flexible learning format for students and working professionals who prefer to learn remotely."
        },
        "classroom": {
            "title": "Mobile Application Testing Classroom Training",
            "intro": "TECHMASTER classroom training provides an interactive learning environment where learners can participate in demonstrations, practical exercises, discussions, and project activities.",
            "items": [
                "Mobile testing concept explanations.",
                "Live demonstrations.",
                "Test case preparation.",
                "Android application testing.",
                "iOS testing concepts.",
                "Functional testing exercises.",
                "Device compatibility testing.",
                "Defect reporting.",
                "Mobile testing tools.",
                "Automation testing fundamentals.",
                "Appium demonstrations.",
                "Project implementation.",
                "Interview preparation."
            ]
        }
    },
    "targetAudiencePaths": {
        "freshers": {
            "title": "Mobile Application Testing Training for Freshers",
            "path": "Software Testing Fundamentals → Mobile Application Fundamentals → Android & iOS Testing → Functional Testing → UI & Compatibility Testing → Test Documentation → Mobile Testing Tools → Automation Fundamentals → Appium → Project → Interview Preparation",
            "outro": "The focus is on developing a testing foundation and gradually progressing into practical mobile testing concepts."
        },
        "manualTesters": {
            "title": "Mobile Application Testing Training for Manual Testers",
            "intro": "Manual testers can use mobile application testing training to expand their existing testing knowledge into mobile environments.",
            "items": [
                "Mobile testing fundamentals.",
                "Android and iOS application testing.",
                "Functional testing.",
                "UI and usability testing.",
                "Device compatibility testing.",
                "Installation and upgrade testing.",
                "Interruption testing.",
                "Network testing.",
                "Mobile defect management.",
                "Test documentation.",
                "Regression testing.",
                "Mobile automation fundamentals.",
                "Appium concepts.",
                "Real-world mobile testing projects."
            ]
        },
        "workingProfessionals": {
            "title": "Mobile Application Testing Training for Working Professionals",
            "intro": "Working professionals can strengthen their existing QA skills by developing practical mobile application testing knowledge.",
            "items": [
                "Mobile application testing methodologies.",
                "Android and iOS testing considerations.",
                "Functional and regression testing.",
                "UI and compatibility testing.",
                "Mobile test case design.",
                "Device and operating system coverage.",
                "Mobile testing tools.",
                "Defect analysis and reporting.",
                "Mobile automation fundamentals.",
                "Appium automation concepts.",
                "Project-based testing workflows.",
                "Mobile QA interview preparation."
            ]
        }
    },
    "whyHandsOnMatters": {
        "title": "Why Hands-On Mobile Testing Training Matters",
        "paragraphs": [
            "Mobile application testing involves more than validating whether an application works under normal conditions.",
            "Testers must also consider device compatibility, operating system versions, screen sizes, network connectivity, interruptions, application permissions, and different user interactions.",
            "Practical training helps learners understand how to identify test scenarios from requirements, create meaningful test cases, execute tests across different mobile conditions, identify functional and UI defects, validate application behavior during interruptions, test connectivity-dependent workflows, document defects with clear reproduction steps, perform retesting and regression testing, understand mobile automation concepts, and analyze and communicate test results.",
            "This practical approach helps connect software testing fundamentals with real-world mobile application quality assurance."
        ]
    },
    "interviewPrep": {
        "title": "Mobile Application Testing Interview Preparation",
        "intro": "Interview preparation can include questions and discussions around:",
        "topics": [
            "Mobile application testing fundamentals.",
            "Native vs web vs hybrid applications.",
            "Android vs iOS testing.",
            "Mobile testing challenges.",
            "Functional testing.",
            "UI and usability testing.",
            "Compatibility testing.",
            "Installation and upgrade testing.",
            "Interruption testing.",
            "Network testing.",
            "Regression testing.",
            "Test case design.",
            "Defect lifecycle.",
            "Severity vs priority.",
            "Mobile testing tools.",
            "Emulators vs physical devices.",
            "Android debugging fundamentals.",
            "Mobile automation testing.",
            "Appium architecture.",
            "Locators and element identification.",
            "Synchronization.",
            "Test execution and reporting.",
            "Real-world mobile testing scenarios."
        ],
        "outro": "Learners should also be prepared to explain their test cases, testing approach, defect reports, device coverage, project scenarios, and automation implementation where applicable."
    },
    "projectAndResume": {
        "title": "Mobile Application Testing Project & Resume Preparation",
        "intro": "A practical mobile application testing project can help learners demonstrate familiarity with:",
        "items": [
            "Mobile application testing.",
            "Android and iOS testing concepts.",
            "Functional testing.",
            "UI and compatibility testing.",
            "Test case preparation.",
            "Test execution.",
            "Defect reporting.",
            "Regression testing.",
            "Mobile testing tools.",
            "Mobile automation fundamentals.",
            "Appium concepts.",
            "Project documentation.",
            "Test result analysis."
        ],
        "outro": "Project-based learning can provide useful material for technical discussions, resumes, and interviews. Learners should accurately describe their project contributions and distinguish training exercises from professional work experience."
    },
    "learningMethodology": {
        "title": "Mobile Application Testing Learning Methodology",
        "path": "Understand → Demonstrate → Practice → Test → Analyze → Explain",
        "steps": [
            { "title": "Understand", "desc": "Learn mobile application testing, software testing, Android and iOS concepts, and testing methodologies." },
            { "title": "Demonstrate", "desc": "Observe practical mobile testing workflows, test execution, and defect identification." },
            { "title": "Practice", "desc": "Create test scenarios, prepare test cases, execute tests, and document defects." },
            { "title": "Test", "desc": "Apply testing techniques to mobile application workflows and different device conditions." },
            { "title": "Analyze", "desc": "Review test results, investigate failures, perform retesting, and understand regression testing." },
            { "title": "Explain", "desc": "Learn to explain your testing approach, test cases, defects, project scenarios, and automation concepts during interviews." }
        ]
    },
    "trainingDuration": {
        "title": "Mobile Application Testing Course Duration",
        "paragraphs": [
            "The course duration can be structured according to the training plan, learner experience, and depth of practical project coverage.",
            "The focus is on completing the required concepts and practical exercises rather than learning concepts only for a fixed schedule."
        ]
    },
    "courseFeatures": {
        "title": "TECHMASTER Mobile Application Testing Course Features",
        "features": [
            "Mobile Testing Fundamentals",
            "Android Application Testing",
            "iOS Application Testing",
            "Functional Testing",
            "UI & Usability Testing",
            "Compatibility Testing",
            "Installation & Upgrade Testing",
            "Interruption Testing",
            "Network & Connectivity Testing",
            "Regression Testing",
            "Mobile Testing Tools",
            "Defect Management",
            "Test Case Design",
            "Mobile Automation Fundamentals",
            "Appium Concepts",
            "API Testing Fundamentals",
            "Performance Testing Concepts",
            "Security Testing Fundamentals",
            "Real-World Project Scenarios",
            "Hands-On Exercises",
            "Interview Preparation"
        ]
    },
    "faqSection": {
        "title": "Frequently Asked Questions",
        "faqs": [
            {
                "question": "What is Mobile Application Testing Training?",
                "answer": "Mobile Application Testing Training is a structured program focused on testing mobile applications across different devices and operating systems. It covers functional testing, UI testing, compatibility testing, defect management, mobile testing tools, automation fundamentals, and practical projects."
            },
            {
                "question": "What is mobile application testing?",
                "answer": "Mobile application testing is the process of evaluating mobile applications to verify their functionality, usability, compatibility, and reliability across supported devices and operating systems."
            },
            {
                "question": "What are the different types of mobile applications?",
                "answer": "The three commonly discussed categories are Native applications, Mobile web applications, and Hybrid applications. Each category has different testing considerations depending on its architecture and supported platforms."
            },
            {
                "question": "What is the difference between Android and iOS testing?",
                "answer": "Android and iOS testing involve validating application functionality and user experience within their respective operating systems. Testing considerations may include device availability, OS versions, application permissions, navigation behavior, and platform-specific interactions."
            },
            {
                "question": "Do I need programming knowledge to learn mobile application testing?",
                "answer": "Advanced programming knowledge is not mandatory to begin learning manual mobile application testing. Programming and scripting knowledge can be beneficial when progressing into mobile automation testing."
            },
            {
                "question": "Is this a Mobile Application Testing Course Online?",
                "answer": "Yes. TECHMASTER offers a structured mobile application testing learning path that can be delivered online, covering mobile testing fundamentals, Android and iOS testing concepts, functional testing, compatibility testing, testing tools, automation fundamentals, and practical projects."
            },
            {
                "question": "Can freshers learn mobile application testing?",
                "answer": "Yes. Freshers can begin with software testing fundamentals before progressing into mobile application testing, test case preparation, defect reporting, and practical testing exercises."
            },
            {
                "question": "Can manual testers learn mobile application testing?",
                "answer": "Yes. Manual testers can build on their existing testing knowledge by learning mobile-specific testing scenarios, device compatibility, interruptions, connectivity testing, and mobile application workflows."
            },
            {
                "question": "What is Appium in mobile testing?",
                "answer": "Appium is a mobile application automation tool used to automate supported mobile application interactions. Learning Appium fundamentals can help testers understand mobile automation workflows and automated test execution."
            },
            {
                "question": "Will I learn Android and iOS testing?",
                "answer": "The curriculum covers Android application testing and iOS testing concepts, including functional testing, UI validation, compatibility considerations, and platform-specific testing workflows."
            },
            {
                "question": "Will I work on a mobile testing project?",
                "answer": "The course curriculum includes practical mobile application testing project scenarios covering requirement analysis, test case preparation, functional testing, compatibility testing, defect reporting, regression testing, and project documentation."
            },
            {
                "question": "What skills will I learn?",
                "answer": "You can develop skills in mobile application testing, Android testing, iOS testing, functional testing, UI testing, compatibility testing, test case design, defect management, mobile testing tools, automation fundamentals, and Appium concepts."
            },
            {
                "question": "What career opportunities are available after mobile testing training?",
                "answer": "Relevant job roles may include Mobile Application Tester, Mobile QA Engineer, Software Test Engineer, QA Analyst, Mobile Automation Tester, and Appium Automation Tester. Actual opportunities depend on experience, technical skills, employer requirements, and available openings."
            }
        ]
    },
    "learningRoadmap": [
        "Start with Software Testing Fundamentals",
        "Understand Mobile Application Fundamentals",
        "Learn Android & iOS Testing Concepts",
        "Master Mobile Functional Testing",
        "Practice UI, Usability & Compatibility Testing",
        "Learn Installation, Upgrade & Interruption Testing",
        "Understand Network & Connectivity Testing",
        "Develop Test Case Design & Defect Management Skills",
        "Explore Mobile Testing Tools",
        "Learn Mobile Automation Fundamentals",
        "Understand Appium Automation Concepts",
        "Work on a Practical Mobile Application Testing Project",
        "Prepare for Mobile Testing Interviews",
        "Build Your Mobile QA & Testing Career"
    ],
    "callToAction": {
        "title": "Start Your Mobile Application Testing Journey with TECHMASTER",
        "paragraphs": [
            "Build practical mobile application testing skills through structured training, hands-on exercises, Android and iOS testing concepts, real-world scenarios, mobile automation fundamentals, and project-based learning.",
            "Whether you are a fresher, manual tester, QA professional, or working IT professional, TECHMASTER Mobile Application Testing Training provides a structured learning path toward practical mobile quality assurance skills."
        ],
        "motto": "Learn Mobile Testing. Practice Real Scenarios. Develop QA Skills. Build Your Testing Career."
    }
}

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    content = f.read()

target_id = '"id": "mobile-app-testing"'
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

formatted_json = json.dumps(mat_data, indent=4, ensure_ascii=False)
new_content = content[:brace_idx] + formatted_json + content[end_idx+1:]

with open('src/data/courses.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS: mobile-app-testing successfully updated in courses.js")
