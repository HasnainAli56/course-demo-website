import json
import re

sel_data = {
    "id": "selenium-certification",
    "category": "testing",
    "title": "Best Selenium Certification Course",
    "subtitle": "Selenium Certification Course – Online & Classroom Training",
    "iconName": "CheckSquare",
    "iconBg": "bg-emerald-50 text-emerald-600",
    "description": "Upgrade your software testing skills with the TECHMASTER Selenium Certification Course, designed for freshers, manual testers, QA engineers, automation testers, and working IT professionals who want to develop practical automation testing skills.\n\nOur Selenium Automation Testing Training covers Selenium WebDriver, Java programming fundamentals, automation framework development, TestNG, Maven, XPath, web element handling, test execution, debugging, and real-time automation testing projects.\n\nWhether you are beginning your automation testing journey or looking to enhance your existing QA skills, TECHMASTER provides a structured learning path covering Selenium fundamentals, practical exercises, automation frameworks, and project-based learning.",
    "techBadges": [
        "Selenium WebDriver",
        "Java for Automation",
        "TestNG",
        "Maven",
        "Page Object Model",
        "XPath & CSS Selectors"
    ],
    "duration": "8 Months",
    "rating": 4.92,
    "reviewsCount": 1650,
    "studentsEnrolled": "4,500+",
    "avgSalary": "₹6.0 - ₹16 LPA",
    "batchType": "Next Cohort: 07th Sep - 13th Sep 2026",
    "level": "All Levels",
    "emi": "₹3,899/mo",
    "featured": True,
    "jobGuarantee": False,
    "introductionOverview": [
        "Upgrade your software testing skills with the TECHMASTER Selenium Certification Course, designed for freshers, manual testers, QA engineers, automation testers, and working IT professionals who want to develop practical automation testing skills.",
        "Our Selenium Automation Testing Training covers Selenium WebDriver, Java programming fundamentals, automation framework development, TestNG, Maven, XPath, web element handling, test execution, debugging, and real-time automation testing projects.",
        "Whether you are beginning your automation testing journey or looking to enhance your existing QA skills, TECHMASTER provides a structured learning path covering Selenium fundamentals, practical exercises, automation frameworks, and project-based learning."
    ],
    "handsOnTraining": {
        "title": "Learn Selenium Automation Testing Through Practical Training",
        "subtitle": "Through instructor-led sessions, demonstrations, hands-on exercises, and project-based learning, you will learn how to:",
        "items": [
            "Understand software testing and automation testing fundamentals.",
            "Learn Selenium architecture and its components.",
            "Work with Selenium WebDriver.",
            "Understand Java programming concepts required for automation.",
            "Identify web elements using different locator strategies.",
            "Handle dynamic web elements.",
            "Automate browser interactions and web application workflows.",
            "Work with dropdowns, alerts, frames, windows, and web tables.",
            "Implement synchronization using waits.",
            "Develop automated test scripts using TestNG.",
            "Understand data-driven testing concepts.",
            "Build reusable automation testing frameworks.",
            "Integrate Selenium with Maven.",
            "Execute automated test cases and analyze results.",
            "Understand reporting and debugging techniques.",
            "Work on real-world Selenium automation projects.",
            "Prepare for Selenium automation testing interviews."
        ]
    },
    "whatIsCourse": {
        "title": "What Is Selenium Automation Testing?",
        "paragraphs": [
            "Selenium is an open-source suite of tools used to automate web browsers. Selenium WebDriver enables testers and developers to interact with web applications programmatically and automate browser-based testing activities.",
            "Selenium automation testing helps validate web application functionality by executing automated test scripts against supported browsers.",
            "It is commonly used for automating repetitive test scenarios, supporting regression testing, and validating web application workflows.",
            "Selenium automation testing may involve:"
        ],
        "scope": [
            "Browser automation.",
            "Web element identification.",
            "Automated form submission.",
            "Login and authentication workflow testing.",
            "Navigation and link validation.",
            "Dropdown and checkbox interactions.",
            "Handling alerts, frames, and browser windows.",
            "Dynamic web element handling.",
            "Synchronization and wait strategies.",
            "Test execution and reporting.",
            "Regression testing.",
            "Automation framework development."
        ],
        "outro": "The Selenium Certification Training at TECHMASTER introduces learners to these concepts through structured lessons and practical exercises."
    },
    "whyLearn": {
        "title": "Why Learn Selenium Automation Testing?",
        "intro": "Selenium is widely used in web application testing, and automation skills can complement manual testing and broader quality assurance knowledge.",
        "subIntro": "Learning Selenium can help you understand how to automate repetitive browser-based test cases and build maintainable automated testing solutions. Through Selenium automation testing training, you can develop knowledge of:",
        "items": [
            "Selenium WebDriver.",
            "Java programming for test automation.",
            "Browser automation.",
            "XPath and CSS selectors.",
            "Web element interactions.",
            "Dynamic element handling.",
            "Synchronization techniques.",
            "TestNG testing framework.",
            "Maven build management.",
            "Data-driven testing.",
            "Page Object Model.",
            "Automation framework development.",
            "Test execution and reporting.",
            "Regression testing.",
            "Debugging automation scripts.",
            "Real-world automation testing workflows."
        ]
    },
    "courseHighlights": {
        "title": "TECHMASTER Selenium Certification Course – Course Highlights",
        "highlights": [
            {
                "title": "Practical Selenium WebDriver Training",
                "description": "Learn Selenium WebDriver concepts through demonstrations, hands-on exercises, and browser automation scenarios."
            },
            {
                "title": "Java for Selenium Automation",
                "description": "Understand the Java programming fundamentals needed to create, execute, and maintain Selenium automation scripts."
            },
            {
                "title": "Web Element Identification",
                "description": "Learn to locate web elements using ID, name, class name, tag name, link text, partial link text, XPath, and CSS selectors."
            },
            {
                "title": "Advanced WebDriver Interactions",
                "description": "Practice handling dropdowns, alerts, frames, windows, browser navigation, web tables, and dynamic elements."
            },
            {
                "title": "TestNG Framework",
                "description": "Understand how to organize, execute, and manage automated test cases using TestNG."
            },
            {
                "title": "Automation Framework Development",
                "description": "Learn framework concepts such as reusable methods, page objects, configuration management, test data handling, and reporting."
            },
            {
                "title": "Maven Integration",
                "description": "Understand project dependencies, build configuration, and test execution using Maven."
            },
            {
                "title": "Data-Driven Testing",
                "description": "Learn how to separate test data from automation scripts and understand data-driven testing approaches."
            },
            {
                "title": "Real-World Project Training",
                "description": "Apply Selenium concepts to practical web application testing workflows and automation project scenarios."
            },
            {
                "title": "Interview Preparation",
                "description": "Prepare for Selenium WebDriver, Java, TestNG, automation framework, and QA interview discussions."
            }
        ]
    },
    "curriculum": {
        "title": "Selenium Automation Testing Course Curriculum",
        "modules": [
            {
                "module": "Module 1",
                "title": "Introduction to Software Testing & Automation",
                "topics": [
                    "Introduction to software testing.",
                    "Objectives of software testing.",
                    "Software testing lifecycle.",
                    "Software development lifecycle.",
                    "Manual testing fundamentals.",
                    "Automation testing fundamentals.",
                    "Manual testing vs automation testing.",
                    "Benefits and limitations of automation testing.",
                    "Identifying suitable automation test cases.",
                    "Automation testing challenges.",
                    "Introduction to Selenium.",
                    "Selenium history and evolution.",
                    "Selenium components and tools.",
                    "Selenium WebDriver overview.",
                    "Selenium use cases.",
                    "Selenium limitations and considerations."
                ]
            },
            {
                "module": "Module 2",
                "title": "Java Programming Fundamentals for Selenium",
                "topics": [
                    "Introduction to Java.",
                    "Java development environment setup.",
                    "Java syntax and structure.",
                    "Variables and data types.",
                    "Operators and expressions.",
                    "Conditional statements.",
                    "Loops and iteration.",
                    "Arrays.",
                    "Strings and string manipulation.",
                    "Methods and method parameters.",
                    "Classes and objects.",
                    "Constructors.",
                    "Inheritance.",
                    "Polymorphism.",
                    "Encapsulation.",
                    "Abstraction.",
                    "Interfaces.",
                    "Exception handling.",
                    "Collections framework fundamentals.",
                    "Lists, sets, and maps.",
                    "Static and non-static members.",
                    "Packages and access modifiers.",
                    "Java concepts used in Selenium automation."
                ]
            },
            {
                "module": "Module 3",
                "title": "Selenium WebDriver Fundamentals",
                "topics": [
                    "Introduction to Selenium WebDriver.",
                    "Selenium WebDriver architecture.",
                    "Selenium components.",
                    "WebDriver communication concepts.",
                    "Browser drivers and browser configuration.",
                    "Setting up Selenium WebDriver.",
                    "Creating a Selenium automation project.",
                    "Launching supported browsers.",
                    "Opening web applications.",
                    "Browser navigation commands.",
                    "Browser window management.",
                    "Maximizing and minimizing browser windows.",
                    "Getting page titles and URLs.",
                    "Refreshing browser pages.",
                    "Browser session management.",
                    "Closing and quitting browsers.",
                    "Writing and executing basic Selenium scripts."
                ]
            },
            {
                "module": "Module 4",
                "title": "Locators & Web Element Identification",
                "topics": [
                    "Introduction to web elements.",
                    "Understanding the DOM.",
                    "Locating elements using ID.",
                    "Locating elements using name.",
                    "Locating elements using class name.",
                    "Locating elements using tag name.",
                    "Locating elements using link text.",
                    "Locating elements using partial link text.",
                    "Understanding XPath.",
                    "Absolute XPath.",
                    "Relative XPath.",
                    "XPath functions.",
                    "XPath axes.",
                    "Dynamic XPath creation.",
                    "CSS selectors.",
                    "CSS selector syntax.",
                    "Identifying elements using attributes.",
                    "Handling multiple matching elements.",
                    "Finding elements using findElement.",
                    "Finding multiple elements using findElements.",
                    "Common locator errors.",
                    "Locator debugging techniques.",
                    "Choosing suitable locator strategies."
                ]
            },
            {
                "module": "Module 5",
                "title": "Web Element Interactions",
                "topics": [
                    "Understanding WebElement.",
                    "Clicking buttons and links.",
                    "Entering text into input fields.",
                    "Clearing input fields.",
                    "Retrieving text from elements.",
                    "Retrieving element attributes.",
                    "Checking element visibility.",
                    "Checking whether elements are enabled.",
                    "Checking checkbox and radio button selection.",
                    "Selecting and deselecting checkboxes.",
                    "Handling buttons and input controls.",
                    "Working with text areas.",
                    "Validating web element properties.",
                    "Handling common interaction exceptions.",
                    "Implementing reusable interaction methods."
                ]
            },
            {
                "module": "Module 6",
                "title": "Handling Dropdowns, Alerts, Frames & Windows",
                "topics": [
                    "Understanding dropdown elements.",
                    "Handling standard HTML dropdowns.",
                    "Using the Selenium Select class.",
                    "Selecting options by visible text.",
                    "Selecting options by value.",
                    "Selecting options by index.",
                    "Handling multi-select dropdowns.",
                    "Handling JavaScript alerts.",
                    "Accepting and dismissing alerts.",
                    "Retrieving alert text.",
                    "Handling confirmation alerts.",
                    "Handling prompt alerts.",
                    "Understanding frames and iframes.",
                    "Switching between frames.",
                    "Switching back to the parent frame.",
                    "Switching to the default content.",
                    "Handling multiple browser windows.",
                    "Working with window handles.",
                    "Switching between tabs and windows.",
                    "Handling browser pop-ups where supported.",
                    "Common challenges in window and frame handling."
                ]
            },
            {
                "module": "Module 7",
                "title": "Synchronization & Wait Strategies",
                "topics": [
                    "Introduction to synchronization in Selenium.",
                    "Why synchronization is required.",
                    "Understanding page loading behavior.",
                    "Implicit waits.",
                    "Explicit waits.",
                    "Fluent waits.",
                    "Expected Conditions.",
                    "Waiting for element visibility.",
                    "Waiting for element clickability.",
                    "Waiting for elements to become available.",
                    "Handling dynamic web elements.",
                    "Managing AJAX-related timing challenges.",
                    "Avoiding unnecessary hard-coded delays.",
                    "Understanding stale element reference exceptions.",
                    "Handling timeout exceptions.",
                    "Synchronization best practices."
                ]
            },
            {
                "module": "Module 8",
                "title": "Advanced Selenium WebDriver Concepts",
                "topics": [
                    "Handling dynamic web elements.",
                    "Working with dynamic attributes.",
                    "Handling frequently changing DOM structures.",
                    "Web table automation.",
                    "Extracting data from web tables.",
                    "Handling pagination.",
                    "Mouse actions.",
                    "Keyboard actions.",
                    "Using the Actions class.",
                    "Double-click operations.",
                    "Right-click operations.",
                    "Mouse hover.",
                    "Drag-and-drop interactions.",
                    "Keyboard event handling.",
                    "Scrolling web pages.",
                    "JavaScript execution fundamentals.",
                    "Taking screenshots.",
                    "Uploading files.",
                    "Download handling considerations.",
                    "Handling browser navigation scenarios.",
                    "Working with cookies.",
                    "Handling common WebDriver exceptions.",
                    "Debugging failed interactions."
                ]
            },
            {
                "module": "Module 9",
                "title": "TestNG Framework",
                "topics": [
                    "Introduction to TestNG.",
                    "TestNG architecture and features.",
                    "Installing and configuring TestNG.",
                    "Creating TestNG test classes.",
                    "Understanding TestNG annotations.",
                    "@Test annotation.",
                    "@BeforeMethod and @AfterMethod.",
                    "@BeforeClass and @AfterClass.",
                    "@BeforeSuite and @AfterSuite.",
                    "Test execution sequence.",
                    "Test priorities.",
                    "Test dependencies.",
                    "Grouping test cases.",
                    "Assertions in TestNG.",
                    "Hard assertions and soft assertions.",
                    "Parameterization.",
                    "Data providers.",
                    "TestNG XML configuration.",
                    "Test suite execution.",
                    "Parallel execution concepts.",
                    "Test execution reports.",
                    "Handling test failures.",
                    "Rerunning failed test cases."
                ]
            },
            {
                "module": "Module 10",
                "title": "Maven Integration with Selenium",
                "topics": [
                    "Introduction to Apache Maven.",
                    "Maven project structure.",
                    "Understanding the Project Object Model.",
                    "Creating a Maven project.",
                    "Understanding the pom.xml file.",
                    "Adding Selenium dependencies.",
                    "Adding TestNG dependencies.",
                    "Managing project dependencies.",
                    "Maven lifecycle fundamentals.",
                    "Maven build commands.",
                    "Executing Selenium tests through Maven.",
                    "Integrating TestNG with Maven.",
                    "Managing dependency versions.",
                    "Understanding build failures.",
                    "Maven project troubleshooting.",
                    "Organizing automation project files."
                ]
            },
            {
                "module": "Module 11",
                "title": "Data-Driven Testing",
                "topics": [
                    "Introduction to data-driven testing.",
                    "Benefits of separating test data from scripts.",
                    "Test data management fundamentals.",
                    "Parameterization in TestNG.",
                    "Using TestNG DataProviders.",
                    "Reading data from external sources.",
                    "Excel-based test data concepts.",
                    "CSV-based test data concepts.",
                    "Properties files.",
                    "Configuration management.",
                    "Handling multiple test data sets.",
                    "Positive and negative data scenarios.",
                    "Reusable test data utilities.",
                    "Data-driven test execution.",
                    "Managing test data dependencies."
                ]
            },
            {
                "module": "Module 12",
                "title": "Selenium Automation Framework Development",
                "topics": [
                    "Introduction to automation frameworks.",
                    "Why automation frameworks are required.",
                    "Types of automation frameworks.",
                    "Linear scripting framework.",
                    "Modular framework.",
                    "Data-driven framework.",
                    "Keyword-driven framework.",
                    "Hybrid framework concepts.",
                    "Framework architecture.",
                    "Project folder structure.",
                    "Reusable methods and utilities.",
                    "Browser configuration management.",
                    "Test data management.",
                    "Configuration file handling.",
                    "Common utility classes.",
                    "Base test class concepts.",
                    "Test execution management.",
                    "Exception handling in frameworks.",
                    "Logging fundamentals.",
                    "Framework maintenance considerations."
                ]
            },
            {
                "module": "Module 13",
                "title": "Page Object Model (POM)",
                "topics": [
                    "Introduction to Page Object Model.",
                    "Importance of maintainable automation scripts.",
                    "POM design principles.",
                    "Creating page classes.",
                    "Identifying page elements.",
                    "Creating reusable page methods.",
                    "Separating test logic from page logic.",
                    "Page Factory fundamentals.",
                    "Understanding @FindBy.",
                    "Initializing page elements.",
                    "Managing page objects.",
                    "Implementing page navigation.",
                    "Reusing page components.",
                    "Integrating POM with TestNG.",
                    "POM framework structure.",
                    "Maintaining page objects when applications change.",
                    "POM best practices."
                ]
            },
            {
                "module": "Module 14",
                "title": "Automation Reporting & Logging",
                "topics": [
                    "Introduction to automation reporting.",
                    "Importance of test reports.",
                    "Understanding TestNG reports.",
                    "Capturing test execution status.",
                    "Recording passed and failed test cases.",
                    "Capturing screenshots for failures.",
                    "Logging fundamentals.",
                    "Understanding logging levels.",
                    "Integrating logging into automation scripts.",
                    "Reporting framework concepts.",
                    "Extent Reports fundamentals, where included.",
                    "Attaching screenshots to reports.",
                    "Reporting test execution details.",
                    "Analyzing failed test cases.",
                    "Preparing test summary reports."
                ]
            },
            {
                "module": "Module 15",
                "title": "Git, CI/CD & Continuous Testing Fundamentals",
                "topics": [
                    "Introduction to version control.",
                    "Git fundamentals.",
                    "Understanding repositories.",
                    "Creating and cloning repositories.",
                    "Adding and committing changes.",
                    "Branching fundamentals.",
                    "Pushing and pulling changes.",
                    "Understanding merge conflicts.",
                    "Managing automation code.",
                    "Introduction to continuous integration.",
                    "CI/CD fundamentals.",
                    "Introduction to Jenkins.",
                    "Understanding build pipelines.",
                    "Configuring automation execution concepts.",
                    "Running Selenium tests through a CI pipeline.",
                    "Scheduling automated test execution.",
                    "Understanding build and test reports.",
                    "Continuous testing concepts.",
                    "Common CI automation challenges."
                ]
            },
            {
                "module": "Module 16",
                "title": "Selenium Grid & Cross-Browser Testing",
                "topics": [
                    "Introduction to cross-browser testing.",
                    "Importance of browser compatibility testing.",
                    "Understanding browser differences.",
                    "Cross-browser testing strategies.",
                    "Browser and operating system combinations.",
                    "Introduction to Selenium Grid.",
                    "Selenium Grid architecture.",
                    "Hub and node concepts in applicable Grid versions.",
                    "Remote WebDriver fundamentals.",
                    "Remote browser execution.",
                    "Parallel testing concepts.",
                    "Distributed test execution.",
                    "Browser configuration.",
                    "Test execution across browser environments.",
                    "Analyzing browser-specific failures.",
                    "Selenium Grid use cases and limitations."
                ]
            },
            {
                "module": "Module 17",
                "title": "Real-Time Selenium Automation Testing Project",
                "topics": [
                    "Work on a practical web application automation project covering:",
                    "Understanding application requirements.",
                    "Requirement analysis.",
                    "Identifying automation test scenarios.",
                    "Preparing test cases.",
                    "Selecting suitable automation candidates.",
                    "Creating a Selenium WebDriver project.",
                    "Configuring the browser environment.",
                    "Identifying web elements.",
                    "Developing reusable automation methods.",
                    "Automating login and authentication workflows.",
                    "Automating form submissions.",
                    "Automating search and navigation.",
                    "Handling dropdowns, alerts, frames, and windows.",
                    "Implementing synchronization strategies.",
                    "Validating expected results.",
                    "Integrating TestNG.",
                    "Managing test data.",
                    "Implementing Page Object Model concepts.",
                    "Executing regression test cases.",
                    "Capturing screenshots and logs.",
                    "Generating test reports.",
                    "Debugging automation failures.",
                    "Organizing project files.",
                    "Documenting test execution results.",
                    "Explaining the project and automation approach."
                ]
            }
        ]
    },
    "syllabus": [
        {
            "module": "Module 1",
            "title": "Introduction to Software Testing & Automation",
            "topics": [
                "Introduction to software testing.",
                "Objectives of software testing.",
                "Software testing lifecycle.",
                "Software development lifecycle.",
                "Manual testing fundamentals.",
                "Automation testing fundamentals.",
                "Manual testing vs automation testing.",
                "Benefits and limitations of automation testing.",
                "Identifying suitable automation test cases.",
                "Automation testing challenges.",
                "Introduction to Selenium.",
                "Selenium history and evolution.",
                "Selenium components and tools.",
                "Selenium WebDriver overview.",
                "Selenium use cases.",
                "Selenium limitations and considerations."
            ]
        },
        {
            "module": "Module 2",
            "title": "Java Programming Fundamentals for Selenium",
            "topics": [
                "Introduction to Java.",
                "Java development environment setup.",
                "Java syntax and structure.",
                "Variables and data types.",
                "Operators and expressions.",
                "Conditional statements.",
                "Loops and iteration.",
                "Arrays.",
                "Strings and string manipulation.",
                "Methods and method parameters.",
                "Classes and objects.",
                "Constructors.",
                "Inheritance.",
                "Polymorphism.",
                "Encapsulation.",
                "Abstraction.",
                "Interfaces.",
                "Exception handling.",
                "Collections framework fundamentals.",
                "Lists, sets, and maps.",
                "Static and non-static members.",
                "Packages and access modifiers.",
                "Java concepts used in Selenium automation."
            ]
        },
        {
            "module": "Module 3",
            "title": "Selenium WebDriver Fundamentals",
            "topics": [
                "Introduction to Selenium WebDriver.",
                "Selenium WebDriver architecture.",
                "Selenium components.",
                "WebDriver communication concepts.",
                "Browser drivers and browser configuration.",
                "Setting up Selenium WebDriver.",
                "Creating a Selenium automation project.",
                "Launching supported browsers.",
                "Opening web applications.",
                "Browser navigation commands.",
                "Browser window management.",
                "Maximizing and minimizing browser windows.",
                "Getting page titles and URLs.",
                "Refreshing browser pages.",
                "Browser session management.",
                "Closing and quitting browsers.",
                "Writing and executing basic Selenium scripts."
            ]
        },
        {
            "module": "Module 4",
            "title": "Locators & Web Element Identification",
            "topics": [
                "Introduction to web elements.",
                "Understanding the DOM.",
                "Locating elements using ID.",
                "Locating elements using name.",
                "Locating elements using class name.",
                "Locating elements using tag name.",
                "Locating elements using link text.",
                "Locating elements using partial link text.",
                "Understanding XPath.",
                "Absolute XPath.",
                "Relative XPath.",
                "XPath functions.",
                "XPath axes.",
                "Dynamic XPath creation.",
                "CSS selectors.",
                "CSS selector syntax.",
                "Identifying elements using attributes.",
                "Handling multiple matching elements.",
                "Finding elements using findElement.",
                "Finding multiple elements using findElements.",
                "Common locator errors.",
                "Locator debugging techniques.",
                "Choosing suitable locator strategies."
            ]
        },
        {
            "module": "Module 5",
            "title": "Web Element Interactions",
            "topics": [
                "Understanding WebElement.",
                "Clicking buttons and links.",
                "Entering text into input fields.",
                "Clearing input fields.",
                "Retrieving text from elements.",
                "Retrieving element attributes.",
                "Checking element visibility.",
                "Checking whether elements are enabled.",
                "Checking checkbox and radio button selection.",
                "Selecting and deselecting checkboxes.",
                "Handling buttons and input controls.",
                "Working with text areas.",
                "Validating web element properties.",
                "Handling common interaction exceptions.",
                "Implementing reusable interaction methods."
            ]
        },
        {
            "module": "Module 6",
            "title": "Handling Dropdowns, Alerts, Frames & Windows",
            "topics": [
                "Understanding dropdown elements.",
                "Handling standard HTML dropdowns.",
                "Using the Selenium Select class.",
                "Selecting options by visible text.",
                "Selecting options by value.",
                "Selecting options by index.",
                "Handling multi-select dropdowns.",
                "Handling JavaScript alerts.",
                "Accepting and dismissing alerts.",
                "Retrieving alert text.",
                "Handling confirmation alerts.",
                "Handling prompt alerts.",
                "Understanding frames and iframes.",
                "Switching between frames.",
                "Switching back to the parent frame.",
                "Switching to the default content.",
                "Handling multiple browser windows.",
                "Working with window handles.",
                "Switching between tabs and windows.",
                "Handling browser pop-ups where supported.",
                "Common challenges in window and frame handling."
            ]
        },
        {
            "module": "Module 7",
            "title": "Synchronization & Wait Strategies",
            "topics": [
                "Introduction to synchronization in Selenium.",
                "Why synchronization is required.",
                "Understanding page loading behavior.",
                "Implicit waits.",
                "Explicit waits.",
                "Fluent waits.",
                "Expected Conditions.",
                "Waiting for element visibility.",
                "Waiting for element clickability.",
                "Waiting for elements to become available.",
                "Handling dynamic web elements.",
                "Managing AJAX-related timing challenges.",
                "Avoiding unnecessary hard-coded delays.",
                "Understanding stale element reference exceptions.",
                "Handling timeout exceptions.",
                "Synchronization best practices."
            ]
        },
        {
            "module": "Module 8",
            "title": "Advanced Selenium WebDriver Concepts",
            "topics": [
                "Handling dynamic web elements.",
                "Working with dynamic attributes.",
                "Handling frequently changing DOM structures.",
                "Web table automation.",
                "Extracting data from web tables.",
                "Handling pagination.",
                "Mouse actions.",
                "Keyboard actions.",
                "Using the Actions class.",
                "Double-click operations.",
                "Right-click operations.",
                "Mouse hover.",
                "Drag-and-drop interactions.",
                "Keyboard event handling.",
                "Scrolling web pages.",
                "JavaScript execution fundamentals.",
                "Taking screenshots.",
                "Uploading files.",
                "Download handling considerations.",
                "Handling browser navigation scenarios.",
                "Working with cookies.",
                "Handling common WebDriver exceptions.",
                "Debugging failed interactions."
            ]
        },
        {
            "module": "Module 9",
            "title": "TestNG Framework",
            "topics": [
                "Introduction to TestNG.",
                "TestNG architecture and features.",
                "Installing and configuring TestNG.",
                "Creating TestNG test classes.",
                "Understanding TestNG annotations.",
                "@Test annotation.",
                "@BeforeMethod and @AfterMethod.",
                "@BeforeClass and @AfterClass.",
                "@BeforeSuite and @AfterSuite.",
                "Test execution sequence.",
                "Test priorities.",
                "Test dependencies.",
                "Grouping test cases.",
                "Assertions in TestNG.",
                "Hard assertions and soft assertions.",
                "Parameterization.",
                "Data providers.",
                "TestNG XML configuration.",
                "Test suite execution.",
                "Parallel execution concepts.",
                "Test execution reports.",
                "Handling test failures.",
                "Rerunning failed test cases."
            ]
        },
        {
            "module": "Module 10",
            "title": "Maven Integration with Selenium",
            "topics": [
                "Introduction to Apache Maven.",
                "Maven project structure.",
                "Understanding the Project Object Model.",
                "Creating a Maven project.",
                "Understanding the pom.xml file.",
                "Adding Selenium dependencies.",
                "Adding TestNG dependencies.",
                "Managing project dependencies.",
                "Maven lifecycle fundamentals.",
                "Maven build commands.",
                "Executing Selenium tests through Maven.",
                "Integrating TestNG with Maven.",
                "Managing dependency versions.",
                "Understanding build failures.",
                "Maven project troubleshooting.",
                "Organizing automation project files."
            ]
        },
        {
            "module": "Module 11",
            "title": "Data-Driven Testing",
            "topics": [
                "Introduction to data-driven testing.",
                "Benefits of separating test data from scripts.",
                "Test data management fundamentals.",
                "Parameterization in TestNG.",
                "Using TestNG DataProviders.",
                "Reading data from external sources.",
                "Excel-based test data concepts.",
                "CSV-based test data concepts.",
                "Properties files.",
                "Configuration management.",
                "Handling multiple test data sets.",
                "Positive and negative data scenarios.",
                "Reusable test data utilities.",
                "Data-driven test execution.",
                "Managing test data dependencies."
            ]
        },
        {
            "module": "Module 12",
            "title": "Selenium Automation Framework Development",
            "topics": [
                "Introduction to automation frameworks.",
                "Why automation frameworks are required.",
                "Types of automation frameworks.",
                "Linear scripting framework.",
                "Modular framework.",
                "Data-driven framework.",
                "Keyword-driven framework.",
                "Hybrid framework concepts.",
                "Framework architecture.",
                "Project folder structure.",
                "Reusable methods and utilities.",
                "Browser configuration management.",
                "Test data management.",
                "Configuration file handling.",
                "Common utility classes.",
                "Base test class concepts.",
                "Test execution management.",
                "Exception handling in frameworks.",
                "Logging fundamentals.",
                "Framework maintenance considerations."
            ]
        },
        {
            "module": "Module 13",
            "title": "Page Object Model (POM)",
            "topics": [
                "Introduction to Page Object Model.",
                "Importance of maintainable automation scripts.",
                "POM design principles.",
                "Creating page classes.",
                "Identifying page elements.",
                "Creating reusable page methods.",
                "Separating test logic from page logic.",
                "Page Factory fundamentals.",
                "Understanding @FindBy.",
                "Initializing page elements.",
                "Managing page objects.",
                "Implementing page navigation.",
                "Reusing page components.",
                "Integrating POM with TestNG.",
                "POM framework structure.",
                "Maintaining page objects when applications change.",
                "POM best practices."
            ]
        },
        {
            "module": "Module 14",
            "title": "Automation Reporting & Logging",
            "topics": [
                "Introduction to automation reporting.",
                "Importance of test reports.",
                "Understanding TestNG reports.",
                "Capturing test execution status.",
                "Recording passed and failed test cases.",
                "Capturing screenshots for failures.",
                "Logging fundamentals.",
                "Understanding logging levels.",
                "Integrating logging into automation scripts.",
                "Reporting framework concepts.",
                "Extent Reports fundamentals, where included.",
                "Attaching screenshots to reports.",
                "Reporting test execution details.",
                "Analyzing failed test cases.",
                "Preparing test summary reports."
            ]
        },
        {
            "module": "Module 15",
            "title": "Git, CI/CD & Continuous Testing Fundamentals",
            "topics": [
                "Introduction to version control.",
                "Git fundamentals.",
                "Understanding repositories.",
                "Creating and cloning repositories.",
                "Adding and committing changes.",
                "Branching fundamentals.",
                "Pushing and pulling changes.",
                "Understanding merge conflicts.",
                "Managing automation code.",
                "Introduction to continuous integration.",
                "CI/CD fundamentals.",
                "Introduction to Jenkins.",
                "Understanding build pipelines.",
                "Configuring automation execution concepts.",
                "Running Selenium tests through a CI pipeline.",
                "Scheduling automated test execution.",
                "Understanding build and test reports.",
                "Continuous testing concepts.",
                "Common CI automation challenges."
            ]
        },
        {
            "module": "Module 16",
            "title": "Selenium Grid & Cross-Browser Testing",
            "topics": [
                "Introduction to cross-browser testing.",
                "Importance of browser compatibility testing.",
                "Understanding browser differences.",
                "Cross-browser testing strategies.",
                "Browser and operating system combinations.",
                "Introduction to Selenium Grid.",
                "Selenium Grid architecture.",
                "Hub and node concepts in applicable Grid versions.",
                "Remote WebDriver fundamentals.",
                "Remote browser execution.",
                "Parallel testing concepts.",
                "Distributed test execution.",
                "Browser configuration.",
                "Test execution across browser environments.",
                "Analyzing browser-specific failures.",
                "Selenium Grid use cases and limitations."
            ]
        },
        {
            "module": "Module 17",
            "title": "Real-Time Selenium Automation Testing Project",
            "topics": [
                "Work on a practical web application automation project covering:",
                "Understanding application requirements.",
                "Requirement analysis.",
                "Identifying automation test scenarios.",
                "Preparing test cases.",
                "Selecting suitable automation candidates.",
                "Creating a Selenium WebDriver project.",
                "Configuring the browser environment.",
                "Identifying web elements.",
                "Developing reusable automation methods.",
                "Automating login and authentication workflows.",
                "Automating form submissions.",
                "Automating search and navigation.",
                "Handling dropdowns, alerts, frames, and windows.",
                "Implementing synchronization strategies.",
                "Validating expected results.",
                "Integrating TestNG.",
                "Managing test data.",
                "Implementing Page Object Model concepts.",
                "Executing regression test cases.",
                "Capturing screenshots and logs.",
                "Generating test reports.",
                "Debugging automation failures.",
                "Organizing project files.",
                "Documenting test execution results.",
                "Explaining the project and automation approach."
            ]
        }
    ],
    "handsOnPractice": {
        "title": "Hands-On Selenium Automation Testing Training",
        "intro": "At TECHMASTER, the course emphasizes practical implementation to help learners understand how Selenium automation testing is applied to web applications.",
        "subIntro": "You will practice:",
        "items": [
            "Creating Selenium WebDriver scripts.",
            "Launching and controlling browsers.",
            "Identifying web elements using XPath and CSS selectors.",
            "Automating forms and user interactions.",
            "Handling dropdowns, alerts, frames, and windows.",
            "Working with dynamic web elements.",
            "Implementing implicit and explicit waits.",
            "Handling common Selenium exceptions.",
            "Automating web application workflows.",
            "Creating and executing TestNG test cases.",
            "Managing test data.",
            "Developing reusable automation methods.",
            "Understanding Page Object Model.",
            "Integrating Selenium with Maven.",
            "Generating test execution reports.",
            "Debugging failed automation scripts.",
            "Practicing cross-browser testing concepts.",
            "Working on practical automation project scenarios."
        ],
        "outro": "The objective is to help learners progress from basic browser automation to developing structured and maintainable Selenium test scripts."
    },
    "projectScenarios": {
        "title": "Real-World Selenium Automation Project Scenarios",
        "intro": "Practical exercises may include automating common web application workflows.",
        "projects": [
            {
                "title": "Project 1: E-Commerce Web Application Testing",
                "functionalAreas": [
                    "User registration.",
                    "Login and logout.",
                    "Product search.",
                    "Product filtering.",
                    "Product selection.",
                    "Add-to-cart functionality.",
                    "Cart quantity updates.",
                    "Wishlist functionality.",
                    "Checkout workflow.",
                    "Address validation.",
                    "Order summary validation.",
                    "Order confirmation.",
                    "Order history."
                ],
                "automationActivities": [
                    "Identify elements using XPath and CSS selectors.",
                    "Automate login and registration forms.",
                    "Validate product search results.",
                    "Automate cart interactions.",
                    "Handle dropdowns and dynamic elements.",
                    "Implement explicit waits.",
                    "Validate expected results using assertions.",
                    "Execute test cases using TestNG.",
                    "Capture screenshots for failed tests.",
                    "Generate test execution reports."
                ]
            },
            {
                "title": "Project 2: Banking Web Application Testing",
                "functionalAreas": [
                    "Login and authentication.",
                    "Account information.",
                    "Transaction history.",
                    "Beneficiary management.",
                    "Fund transfer workflow.",
                    "Form validation.",
                    "Session timeout.",
                    "Error message validation.",
                    "Logout functionality."
                ],
                "automationActivities": [
                    "Automate authentication workflows.",
                    "Validate form inputs.",
                    "Handle dynamic web elements.",
                    "Automate supported navigation flows.",
                    "Validate displayed information.",
                    "Implement assertions.",
                    "Execute regression test cases.",
                    "Analyze failed test scenarios."
                ],
                "notice": "Use a suitable test or sandbox environment. Do not perform automation against real financial transactions without explicit authorization."
            },
            {
                "title": "Project 3: Employee Management System",
                "functionalAreas": [
                    "Employee login.",
                    "Employee record creation.",
                    "Employee information updates.",
                    "Search and filtering.",
                    "Department selection.",
                    "Form validation.",
                    "Role-based navigation.",
                    "Record deletion in a test environment.",
                    "Data validation."
                ],
                "automationActivities": [
                    "Automate employee forms.",
                    "Handle dropdowns and web tables.",
                    "Validate data displayed in records.",
                    "Implement reusable page methods.",
                    "Apply Page Object Model concepts.",
                    "Execute test suites using TestNG.",
                    "Maintain test data.",
                    "Generate test reports."
                ]
            }
        ]
    },
    "whoCanLearn": {
        "title": "Who Can Learn Selenium Automation Testing?",
        "intro": "The TECHMASTER Selenium Certification Course is suitable for:",
        "audience": [
            "Freshers interested in software testing.",
            "Manual Testers.",
            "Software Test Engineers.",
            "QA Engineers.",
            "Quality Assurance Professionals.",
            "Automation Testers.",
            "Test Analysts.",
            "Web Application Testers.",
            "IT Professionals.",
            "Professionals interested in test automation.",
            "Career Switchers.",
            "Working professionals looking to expand their testing skills."
        ]
    },
    "prerequisites": {
        "title": "Selenium Certification Course Prerequisites",
        "paragraphs": [
            "Basic knowledge of computers and web applications is helpful.",
            "Prior software testing experience is beneficial but not mandatory for learners beginning with the fundamentals."
        ],
        "items": [
            "Basic computer operations.",
            "Understanding of websites and web applications.",
            "Basic software testing concepts.",
            "Familiarity with manual testing.",
            "Basic programming knowledge, if available."
        ],
        "outro": "The course includes Java programming fundamentals relevant to Selenium automation, allowing learners to build their programming knowledge progressively."
    },
    "certification": {
        "title": "Selenium Certification & Training Guidance",
        "paragraphs": [
            "TECHMASTER provides structured training and practical guidance to help learners develop Selenium automation testing skills.",
            "The course can include Selenium concept explanations, Java programming exercises, WebDriver practical sessions, TestNG exercises, automation framework concepts, scenario-based practice, practical assessments, project implementation, interview preparation, and certification-related learning guidance, where applicable.",
            "Certification clarification: Completing a TECHMASTER training course is not automatically equivalent to earning an independent Selenium or third-party certification. Any external certification depends on the relevant provider's current examination and eligibility requirements."
        ]
    },
    "careerOpportunities": {
        "title": "Career Opportunities After Selenium Training",
        "intro": "Selenium automation testing skills may be relevant to roles such as:",
        "roles": [
            "Selenium Automation Tester.",
            "Automation Test Engineer.",
            "Software Test Engineer.",
            "QA Automation Engineer.",
            "Quality Assurance Engineer.",
            "Test Automation Engineer.",
            "Software QA Analyst.",
            "Web Application Tester.",
            "Automation QA Analyst.",
            "SDET – Software Development Engineer in Test."
        ],
        "outro": "Selenium skills can also complement knowledge of Java, API testing, CI/CD, performance testing, and broader software quality assurance practices. Career opportunities depend on individual skills, practical experience, employer requirements, and available openings."
    },
    "careerRoadmap": {
        "title": "Selenium Automation Testing Career Roadmap",
        "steps": [
            { "step": "Step 1", "title": "Understand Software Testing Fundamentals", "desc": "Learn software testing principles, test cases, test scenarios, defect management, and the software testing lifecycle." },
            { "step": "Step 2", "title": "Learn Java Programming Fundamentals", "desc": "Develop a foundation in Java syntax, variables, operators, conditions, loops, methods, classes, objects, and exception handling." },
            { "step": "Step 3", "title": "Learn Selenium WebDriver", "desc": "Understand Selenium architecture, browser automation, WebDriver commands, and browser session management." },
            { "step": "Step 4", "title": "Master Web Element Identification", "desc": "Practice XPath, CSS selectors, element attributes, and dynamic element identification." },
            { "step": "Step 5", "title": "Develop Automation Scripting Skills", "desc": "Automate forms, navigation, dropdowns, alerts, frames, windows, and other web application interactions." },
            { "step": "Step 6", "title": "Learn Synchronization Techniques", "desc": "Understand implicit waits, explicit waits, fluent waits, and approaches to handling dynamic web elements." },
            { "step": "Step 7", "title": "Work with TestNG and Maven", "desc": "Learn test execution, assertions, annotations, parameterization, project dependencies, and build management." },
            { "step": "Step 8", "title": "Understand Automation Frameworks", "desc": "Explore reusable components, data-driven testing, Page Object Model, configuration management, and reporting." },
            { "step": "Step 9", "title": "Practice Real-World Projects", "desc": "Apply Selenium concepts to practical web application workflows and develop project documentation." },
            { "step": "Step 10", "title": "Explore CI/CD and Cross-Browser Testing", "desc": "Understand version control, continuous integration, Selenium Grid concepts, and cross-browser automation." },
            { "step": "Step 11", "title": "Prepare for Interviews", "desc": "Practice Selenium interview questions, Java concepts, framework discussions, debugging scenarios, and project explanations." }
        ]
    },
    "skillsDeveloped": {
        "title": "Skills You Can Develop",
        "intro": "After completing the TECHMASTER Selenium Automation Testing Course, learners can develop knowledge and practical skills in:",
        "skills": [
            "Software Testing Fundamentals.",
            "Automation Testing Fundamentals.",
            "Java Programming for Selenium.",
            "Selenium WebDriver.",
            "Browser Automation.",
            "XPath.",
            "CSS Selectors.",
            "Web Element Identification.",
            "Dynamic Element Handling.",
            "Dropdown Handling.",
            "Alert Handling.",
            "Frame and Window Handling.",
            "Mouse and Keyboard Actions.",
            "Synchronization Techniques.",
            "TestNG.",
            "Maven.",
            "Data-Driven Testing.",
            "Page Object Model.",
            "Automation Framework Fundamentals.",
            "Test Execution and Reporting.",
            "Logging and Debugging.",
            "Git Fundamentals.",
            "CI/CD Fundamentals.",
            "Selenium Grid Concepts.",
            "Cross-Browser Testing.",
            "Regression Testing.",
            "Automation Project Development."
        ]
    },
    "deliveryFormats": {
        "online": {
            "title": "Selenium Online Training",
            "intro": "Our Selenium Online Training is designed for learners who prefer a structured remote learning format.",
            "items": [
                "Instructor-led sessions.",
                "Live demonstrations.",
                "Java programming exercises.",
                "Selenium WebDriver practical sessions.",
                "Browser automation exercises.",
                "XPath and CSS selector practice.",
                "TestNG implementation.",
                "Maven integration concepts.",
                "Automation framework development.",
                "Project-based learning.",
                "Practical assessments.",
                "Interview preparation."
            ],
            "outro": "Online training provides a flexible learning format for students and working professionals who prefer to learn remotely."
        },
        "classroom": {
            "title": "Selenium Classroom Training",
            "intro": "TECHMASTER classroom training provides an interactive environment for learners to participate in demonstrations, practical exercises, discussions, and project activities.",
            "items": [
                "Java programming fundamentals.",
                "Selenium WebDriver concepts.",
                "Browser automation.",
                "Web element identification.",
                "Advanced WebDriver interactions.",
                "TestNG framework.",
                "Maven integration.",
                "Automation framework development.",
                "Test execution and reporting.",
                "Real-world project exercises.",
                "Interview preparation."
            ]
        }
    },
    "targetAudiencePaths": {
        "freshers": {
            "title": "Selenium Training for Freshers",
            "path": "Software Testing Fundamentals → Java Programming → Selenium WebDriver → Locators → Web Element Interactions → Synchronization → TestNG → Maven → Page Object Model → Automation Frameworks → Practical Project → Interview Preparation",
            "outro": "This approach helps learners gradually develop programming and automation testing skills."
        },
        "manualTesters": {
            "title": "Selenium Training for Manual Testers",
            "intro": "Manual testers can use Selenium training to expand their existing QA knowledge into browser automation.",
            "items": [
                "Identifying suitable automation test cases.",
                "Understanding Selenium WebDriver.",
                "Learning Java fundamentals for automation.",
                "Automating repetitive test scenarios.",
                "Working with XPath and CSS selectors.",
                "Handling dynamic web elements.",
                "Implementing synchronization strategies.",
                "Using TestNG for test execution.",
                "Understanding automation frameworks.",
                "Applying Page Object Model.",
                "Executing regression test cases.",
                "Developing practical automation projects."
            ]
        },
        "workingProfessionals": {
            "title": "Selenium Training for Working Professionals",
            "intro": "Working professionals can strengthen their existing testing skills by learning browser automation and framework concepts.",
            "items": [
                "Selenium WebDriver architecture.",
                "Java-based automation scripting.",
                "Dynamic web element handling.",
                "TestNG and Maven integration.",
                "Data-driven testing.",
                "Page Object Model.",
                "Automation framework structure.",
                "Cross-browser testing.",
                "Selenium Grid fundamentals.",
                "CI/CD concepts.",
                "Automation debugging.",
                "Test execution reporting.",
                "Practical project implementation."
            ]
        }
    },
    "whyHandsOnMatters": {
        "title": "Why Hands-On Selenium Training Matters",
        "paragraphs": [
            "Learning Selenium involves more than understanding WebDriver commands.",
            "Automation testers must also understand application behavior, locator strategies, synchronization, framework design, test data management, debugging, and test maintenance.",
            "Practical training helps learners understand how to convert manual test scenarios into automation scripts, identify stable and maintainable locators, automate repetitive web application workflows, handle dynamic elements and synchronization challenges, organize scripts using reusable methods, implement assertions and validations, execute test suites using TestNG, manage dependencies through Maven, understand Page Object Model, analyze failures and debug scripts, document test execution results, and maintain automation scripts as applications change.",
            "This practical approach connects Selenium concepts with real-world web application automation testing activities."
        ]
    },
    "interviewPrep": {
        "title": "Selenium Certification Course Interview Preparation",
        "intro": "Interview preparation can include questions and discussions covering:",
        "categories": [
            {
                "name": "Selenium Fundamentals",
                "questions": [
                    "What is Selenium?",
                    "What are the components of Selenium?",
                    "What is Selenium WebDriver?",
                    "Explain Selenium WebDriver architecture.",
                    "What are the advantages and limitations of Selenium?",
                    "What types of applications can Selenium automate?"
                ]
            },
            {
                "name": "Java Programming",
                "questions": [
                    "Explain object-oriented programming concepts.",
                    "What is the difference between a class and an object?",
                    "What is inheritance?",
                    "What is polymorphism?",
                    "What is an interface?",
                    "Explain exception handling.",
                    "What is the difference between a List, Set, and Map?"
                ]
            },
            {
                "name": "Locators & WebDriver",
                "questions": [
                    "What are the different locator strategies?",
                    "What is the difference between XPath and CSS selectors?",
                    "What is the difference between findElement and findElements?",
                    "How do you handle dynamic web elements?",
                    "How do you handle dropdowns?",
                    "How do you switch between frames?",
                    "How do you handle multiple browser windows?",
                    "What are implicit and explicit waits?"
                ]
            },
            {
                "name": "TestNG & Frameworks",
                "questions": [
                    "What is TestNG?",
                    "Explain commonly used TestNG annotations.",
                    "What are assertions?",
                    "What is a DataProvider?",
                    "What is Maven?",
                    "What is Page Object Model?",
                    "What is a data-driven framework?",
                    "How do you organize reusable automation methods?",
                    "How do you generate test reports?"
                ]
            },
            {
                "name": "Practical Automation Scenarios",
                "questions": [
                    "How would you automate a login page?",
                    "How would you handle a dynamically changing element?",
                    "How would you capture a screenshot when a test fails?",
                    "How would you validate search results?",
                    "How would you automate a web table?",
                    "How would you handle synchronization issues?",
                    "How would you debug a failing automation script?",
                    "How would you organize a regression test suite?"
                ]
            }
        ],
        "outro": "Learners should also be prepared to explain their automation scripts, framework structure, locator choices, test data strategy, debugging approach, and project contributions."
    },
    "projectAndResume": {
        "title": "Selenium Automation Project & Resume Preparation",
        "intro": "A practical Selenium project can help learners demonstrate familiarity with:",
        "items": [
            "Selenium WebDriver.",
            "Java automation scripting.",
            "Browser-based test execution.",
            "Web element identification.",
            "Test case automation.",
            "TestNG.",
            "Maven.",
            "Page Object Model.",
            "Automation framework concepts.",
            "Test data management.",
            "Regression testing.",
            "Reporting and logging.",
            "Debugging automation failures.",
            "Project documentation."
        ],
        "outro": "Project-based learning can provide useful material for resumes and technical discussions. Learners should accurately describe their project contributions and distinguish training exercises from professional work experience."
    },
    "learningMethodology": {
        "title": "TECHMASTER Selenium Training Methodology",
        "path": "Understand → Demonstrate → Practice → Automate → Validate → Explain",
        "steps": [
            { "title": "Understand", "desc": "Learn software testing, Java programming, Selenium concepts, and automation testing principles." },
            { "title": "Demonstrate", "desc": "Observe browser automation workflows, WebDriver interactions, and framework implementation examples." },
            { "title": "Practice", "desc": "Write automation scripts, identify web elements, execute test cases, and troubleshoot errors." },
            { "title": "Automate", "desc": "Apply Selenium techniques to automate practical web application workflows." },
            { "title": "Validate", "desc": "Use assertions, test execution results, and reports to evaluate application behavior." },
            { "title": "Explain", "desc": "Develop the ability to explain automation scripts, framework structure, testing strategies, and project scenarios during interviews." }
        ]
    },
    "trainingDuration": {
        "title": "Selenium Certification Course Duration",
        "paragraphs": [
            "The course duration can be structured according to the training plan, learner experience, and depth of practical project coverage.",
            "The schedule should be finalized according to the actual batch structure and training delivery plan."
        ]
    },
    "courseFeatures": {
        "title": "TECHMASTER Selenium Certification Course Features",
        "features": [
            "Selenium WebDriver Training",
            "Java Programming Fundamentals",
            "Browser Automation",
            "XPath & CSS Selectors",
            "Web Element Interactions",
            "Dynamic Element Handling",
            "Synchronization Techniques",
            "TestNG Framework",
            "Maven Integration",
            "Data-Driven Testing",
            "Page Object Model",
            "Automation Framework Development",
            "Test Execution & Reporting",
            "Logging & Debugging",
            "Cross-Browser Testing",
            "Selenium Grid Fundamentals",
            "Git & CI/CD Fundamentals",
            "Practical Automation Exercises",
            "Real-World Project Scenarios",
            "Interview Preparation"
        ]
    },
    "faqSection": {
        "title": "Frequently Asked Questions",
        "faqs": [
            {
                "question": "What is a Selenium Certification Course?",
                "answer": "A Selenium Certification Course is a training program designed to help learners develop browser automation testing skills using Selenium WebDriver and related technologies. TECHMASTER's course covers Selenium fundamentals, Java programming, test execution, automation frameworks, practical exercises, and project-based learning."
            },
            {
                "question": "What is Selenium used for?",
                "answer": "Selenium is used to automate web browsers and perform browser-based testing activities. Selenium WebDriver enables automated interactions with web applications, including clicking elements, entering data, navigating pages, and validating application behavior."
            },
            {
                "question": "Is Selenium suitable for beginners?",
                "answer": "Yes. Beginners can start with software testing and Java programming fundamentals before progressing into Selenium WebDriver and automation framework concepts."
            },
            {
                "question": "Do I need Java knowledge to learn Selenium?",
                "answer": "Java knowledge is useful for Java-based Selenium automation. The course includes Java fundamentals to help learners understand the programming concepts required to write automation scripts."
            },
            {
                "question": "Can manual testers learn Selenium?",
                "answer": "Yes. Manual testers can build on their existing testing knowledge by learning automation scripting, WebDriver commands, locators, synchronization, and framework development."
            },
            {
                "question": "What is Selenium WebDriver?",
                "answer": "Selenium WebDriver is a tool that allows automated scripts to control supported web browsers and interact with web applications."
            },
            {
                "question": "What is TestNG in Selenium?",
                "answer": "TestNG is a testing framework that helps organize and execute automated tests. It provides features such as annotations, assertions, grouping, parameterization, and test reporting."
            },
            {
                "question": "What is Maven used for in Selenium?",
                "answer": "Maven is a build and dependency management tool. It can help manage Selenium project dependencies and support automated test execution."
            },
            {
                "question": "What is Page Object Model?",
                "answer": "Page Object Model is a design pattern used to organize automation code by separating web page elements and interactions from test logic. It can improve code reuse and maintainability."
            },
            {
                "question": "Will I learn automation framework development?",
                "answer": "The curriculum covers automation framework fundamentals, reusable methods, configuration management, data-driven testing, Page Object Model, test execution, and reporting."
            },
            {
                "question": "Will I work on a practical Selenium project?",
                "answer": "The course includes practical project scenarios involving web application workflows, test case automation, WebDriver interactions, TestNG, framework concepts, and test reporting."
            },
            {
                "question": "Can Selenium be used for mobile application testing?",
                "answer": "Selenium WebDriver primarily focuses on web browser automation. Mobile browser and application testing may require additional tools and platform-specific approaches. Appium, for example, is commonly used for mobile application automation."
            },
            {
                "question": "What career opportunities are available after Selenium training?",
                "answer": "Relevant roles may include Selenium Automation Tester, Automation Test Engineer, QA Automation Engineer, Software Test Engineer, and SDET. Actual opportunities depend on skills, experience, employer requirements, and available openings."
            },
            {
                "question": "Does completing this course provide an official Selenium certification?",
                "answer": "Course completion and external certification are separate. Any third-party certification depends on the relevant certification provider's current offerings, examination requirements, and eligibility criteria."
            },
            {
                "question": "Is Selenium training available online?",
                "answer": "The course can be delivered in an online training format, with instructor-led learning, practical demonstrations, automation exercises, project activities, and interview preparation, according to the confirmed batch schedule."
            }
        ]
    },
    "learningRoadmap": [
        "Start with Software Testing Fundamentals",
        "Learn Java Programming Fundamentals",
        "Understand Selenium WebDriver Architecture",
        "Master XPath & CSS Selectors",
        "Practice Web Element Interactions",
        "Learn Dynamic Elements & Synchronization",
        "Work with Alerts, Frames, Windows & Dropdowns",
        "Develop TestNG Automation Scripts",
        "Understand Maven Integration",
        "Learn Data-Driven Testing",
        "Implement Page Object Model",
        "Explore Automation Framework Development",
        "Practice Reporting, Logging & Debugging",
        "Understand Cross-Browser Testing & CI/CD Concepts",
        "Complete a Practical Selenium Automation Project",
        "Prepare for Selenium Automation Testing Interviews",
        "Develop Your Automation Testing Career"
    ],
    "callToAction": {
        "title": "Start Your Selenium Automation Testing Journey with TECHMASTER",
        "paragraphs": [
            "Develop practical automation testing skills through structured training, Java programming fundamentals, Selenium WebDriver, TestNG, Maven, automation framework concepts, and real-world web application testing scenarios.",
            "Whether you are a fresher, manual tester, QA professional, or working IT professional, the TECHMASTER Selenium Certification Course offers a structured learning path to help you build your browser automation testing knowledge."
        ],
        "motto": "Learn Selenium. Automate Web Applications. Practice Real Scenarios. Build Your Automation Testing Skills.",
        "tagline": "TECHMASTER | Selenium Automation Testing | Practical Learning | Project Guidance | Interview Preparation"
    }
}

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    content = f.read()

target_id = '"id": "selenium-certification"'
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

formatted_json = json.dumps(sel_data, indent=4, ensure_ascii=False)
new_content = content[:brace_idx] + formatted_json + content[end_idx+1:]

with open('src/data/courses.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS: selenium-certification successfully updated in courses.js")
