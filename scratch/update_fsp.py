import json
import re

fsp_data = {
    "id": "fullstack-python",
    "category": "dev",
    "title": "Full Stack Development with Python Training",
    "subtitle": "Learn Full Stack Web Development with Python Through Practical, Project-Based Training",
    "iconName": "Code2",
    "iconBg": "bg-cyan-50 text-cyan-600",
    "description": "Build modern, responsive, and scalable web applications with Full Stack Development with Python Training designed to help learners develop skills across both frontend and backend technologies.\n\nThis comprehensive course covers the complete web development lifecycle, starting from programming fundamentals and frontend development to Python backend development, databases, APIs, authentication, deployment, Git, testing, and real-world application development.\n\nInstead of focusing only on theoretical concepts, the course emphasizes hands-on coding, practical exercises, real-world projects, debugging, API development, database integration, and application deployment.\n\nWhether you are a beginner starting your programming journey, a graduate preparing for a software development career, or an aspiring developer looking to upgrade your technical skills, learning full stack development with Python can provide a structured pathway toward building complete web applications.",
    "techBadges": [
        "HTML / CSS",
        "JavaScript",
        "Python",
        "Django",
        "Flask",
        "REST APIs",
        "SQL",
        "Git & GitHub"
    ],
    "duration": "8 Months",
    "rating": 4.95,
    "reviewsCount": 1420,
    "studentsEnrolled": "4,200+",
    "avgSalary": "₹6.0 - ₹18 LPA",
    "batchType": "Next Cohort: 07th Sep - 13th Sep 2026",
    "level": "All Levels",
    "emi": "₹3,799/mo",
    "featured": True,
    "jobGuarantee": False,
    "introductionOverview": [
        "Build modern, responsive, and scalable web applications with Full Stack Development with Python Training designed to help learners develop skills across both frontend and backend technologies.",
        "This comprehensive course covers the complete web development lifecycle, starting from programming fundamentals and frontend development to Python backend development, databases, APIs, authentication, deployment, Git, testing, and real-world application development.",
        "Instead of focusing only on theoretical concepts, the course emphasizes hands-on coding, practical exercises, real-world projects, debugging, API development, database integration, and application deployment.",
        "Whether you are a beginner starting your programming journey, a graduate preparing for a software development career, or an aspiring developer looking to upgrade your technical skills, learning full stack development with Python can provide a structured pathway toward building complete web applications."
    ],
    "whatIsCourse": {
        "title": "What Is Full Stack Development with Python?",
        "paragraphs": [
            "Full Stack Development refers to the development of both the frontend and backend components of a web application.",
            "The frontend is the part of an application that users interact with, while the backend manages application logic, databases, authentication, APIs, server-side processing, and communication between different components.",
            "Python is widely used for backend and web application development because of its readable syntax, extensive libraries, developer ecosystem, and frameworks such as Django and Flask.",
            "A Full Stack Development with Python course typically combines:"
        ],
        "technologies": [
            "HTML",
            "CSS",
            "JavaScript",
            "Responsive Web Design",
            "Frontend development",
            "Python programming",
            "Object-Oriented Programming",
            "Django",
            "Flask",
            "REST APIs",
            "SQL",
            "Database Management",
            "Git and GitHub",
            "Authentication and Authorization",
            "Testing and Debugging",
            "Deployment",
            "Real-world projects"
        ],
        "outro": "By learning these technologies together, students can understand how different layers of a web application work together."
    },
    "whyLearn": {
        "title": "Why Learn Full Stack Development with Python?",
        "intro": "Modern software applications require developers who understand more than a single technology.",
        "subIntro": "A frontend developer may build the user interface, while a backend developer may create APIs and database logic. A full stack developer understands how these components connect to create a complete application.",
        "benefits": [
            {
                "title": "Learn Frontend and Backend Development",
                "description": "You can develop skills across the complete application stack instead of limiting your learning to a single layer."
            },
            {
                "title": "Python Is Beginner-Friendly",
                "description": "Python has a relatively simple and readable syntax, making it suitable for people who are new to programming."
            },
            {
                "title": "Build Complete Applications",
                "description": "The course enables learners to move from creating simple webpages to developing applications with frontend interfaces, backend logic, databases, APIs, authentication, and deployment."
            },
            {
                "title": "Develop Practical Coding Skills",
                "description": "Hands-on exercises help learners understand how programming concepts are applied in actual software projects."
            },
            {
                "title": "Work With Popular Web Technologies",
                "description": "The curriculum introduces learners to technologies commonly used in modern web development environments."
            },
            {
                "title": "Create a Professional Portfolio",
                "description": "Real-world projects can demonstrate practical development skills when applying for internships, freelance opportunities, or software development positions."
            }
        ]
    },
    "courseHighlights": {
        "title": "Full Stack Development with Python Course Highlights",
        "intro": "The course is structured to provide a complete learning path from fundamentals to application development.",
        "highlights": [
            "Complete Full Stack Development curriculum",
            "Python programming from fundamentals to advanced concepts",
            "HTML and CSS",
            "JavaScript fundamentals",
            "Responsive web development",
            "Frontend development concepts",
            "Django framework",
            "Flask framework",
            "Database management",
            "SQL programming",
            "REST API development",
            "CRUD application development",
            "Authentication and authorization",
            "Git and GitHub",
            "Debugging and testing",
            "Application deployment concepts",
            "Real-world project development",
            "Coding exercises",
            "Practical assignments",
            "Portfolio development",
            "Interview preparation"
        ]
    },
    "curriculum": {
        "title": "Full Stack Development with Python Course Curriculum",
        "modules": [
            {
                "module": "Module 1",
                "title": "Introduction to Web Development",
                "topics": [
                    "What is web development?",
                    "Frontend vs backend development",
                    "Full stack development architecture",
                    "Client-server architecture",
                    "How websites and web applications work",
                    "Web browsers and web servers",
                    "HTTP and HTTPS",
                    "Request and response cycle",
                    "Static vs dynamic websites",
                    "Introduction to web application architecture",
                    "Development environments",
                    "Code editors and developer tools"
                ]
            },
            {
                "module": "Module 2",
                "title": "HTML – Building Web Pages",
                "topics": [
                    "HTML fundamentals",
                    "HTML document structure",
                    "Headings and paragraphs",
                    "Links",
                    "Images",
                    "Lists",
                    "Tables",
                    "Forms",
                    "Input elements",
                    "Buttons",
                    "Semantic HTML",
                    "HTML5 elements",
                    "Audio and video",
                    "iframe",
                    "Form validation",
                    "Accessibility basics"
                ]
            },
            {
                "module": "Module 3",
                "title": "CSS – Styling and Responsive Web Design",
                "topics": [
                    "CSS fundamentals",
                    "Selectors",
                    "Properties and values",
                    "Colors",
                    "Fonts",
                    "Text styling",
                    "Box model",
                    "Margins and padding",
                    "Borders",
                    "Display properties",
                    "Positioning",
                    "Flexbox",
                    "CSS Grid",
                    "Responsive design",
                    "Media queries",
                    "Navigation bars",
                    "Cards",
                    "Forms",
                    "Buttons",
                    "Website layouts",
                    "Responsive webpages"
                ]
            },
            {
                "module": "Module 4",
                "title": "JavaScript Fundamentals",
                "topics": [
                    "JavaScript introduction",
                    "Variables",
                    "Data types",
                    "Operators",
                    "Conditional statements",
                    "Loops",
                    "Functions",
                    "Arrays",
                    "Objects",
                    "Strings",
                    "Scope",
                    "Events",
                    "DOM manipulation",
                    "Form handling",
                    "Browser APIs",
                    "Error handling",
                    "JavaScript debugging",
                    "Modern JavaScript concepts"
                ]
            },
            {
                "module": "Module 5",
                "title": "Advanced JavaScript and Frontend Concepts",
                "topics": [
                    "ES6+ features",
                    "Arrow functions",
                    "Destructuring",
                    "Spread and rest operators",
                    "Modules",
                    "Promises",
                    "Async and await",
                    "Fetch API",
                    "JSON",
                    "API integration",
                    "Local storage",
                    "Session storage",
                    "Dynamic interfaces",
                    "Client-side validation",
                    "Error handling",
                    "Frontend application structure"
                ]
            },
            {
                "module": "Module 6",
                "title": "Introduction to Python Programming",
                "topics": [
                    "Python installation",
                    "Python syntax",
                    "Variables",
                    "Data types",
                    "Operators",
                    "Strings",
                    "Lists",
                    "Tuples",
                    "Sets",
                    "Dictionaries",
                    "Conditional statements",
                    "Loops",
                    "Functions",
                    "Modules",
                    "Packages",
                    "Exception handling",
                    "File handling",
                    "Input and output",
                    "Python coding practices"
                ]
            },
            {
                "module": "Module 7",
                "title": "Advanced Python Programming",
                "topics": [
                    "Object-Oriented Programming",
                    "Classes and objects",
                    "Constructors",
                    "Inheritance",
                    "Polymorphism",
                    "Encapsulation",
                    "Abstraction",
                    "Iterators",
                    "Generators",
                    "Decorators",
                    "Lambda functions",
                    "List comprehensions",
                    "Dictionary comprehensions",
                    "Regular expressions",
                    "Exception handling",
                    "Working with files",
                    "Virtual environments",
                    "Python modules and packages"
                ]
            },
            {
                "module": "Module 8",
                "title": "Python for Web Development",
                "topics": [
                    "Python web development concepts",
                    "Server-side programming",
                    "Routing",
                    "Request handling",
                    "Response handling",
                    "Templates",
                    "Forms",
                    "Sessions",
                    "Cookies",
                    "Application structure",
                    "Configuration",
                    "Environment variables",
                    "Backend validation",
                    "Error handling"
                ]
            },
            {
                "module": "Module 9",
                "title": "Django Framework",
                "topics": [
                    "Introduction to Django",
                    "Django installation",
                    "Project creation",
                    "Application creation",
                    "Django project structure",
                    "URL routing",
                    "Views",
                    "Templates",
                    "Template inheritance",
                    "Static files",
                    "Forms",
                    "Models",
                    "Django ORM",
                    "Migrations",
                    "Admin panel",
                    "Authentication",
                    "Authorization",
                    "Sessions",
                    "Middleware",
                    "Application configuration",
                    "Error handling"
                ]
            },
            {
                "module": "Module 10",
                "title": "Django ORM and Database Integration",
                "topics": [
                    "Database fundamentals",
                    "Relational databases",
                    "Tables",
                    "Records",
                    "Primary keys",
                    "Foreign keys",
                    "Relationships",
                    "SQL fundamentals",
                    "CRUD operations",
                    "Django ORM",
                    "QuerySets",
                    "Model relationships",
                    "Database migrations",
                    "Data validation",
                    "Database optimization concepts"
                ]
            },
            {
                "module": "Module 11",
                "title": "SQL and Database Management",
                "topics": [
                    "SQL fundamentals",
                    "Creating databases",
                    "Creating tables",
                    "INSERT",
                    "SELECT",
                    "UPDATE",
                    "DELETE",
                    "WHERE conditions",
                    "Sorting",
                    "Filtering",
                    "Aggregate functions",
                    "GROUP BY",
                    "HAVING",
                    "Joins",
                    "Subqueries",
                    "Constraints",
                    "Indexes",
                    "Database relationships",
                    "Transactions",
                    "Basic database optimization"
                ]
            },
            {
                "module": "Module 12",
                "title": "Flask Framework",
                "topics": [
                    "Introduction to Flask",
                    "Flask installation",
                    "Application structure",
                    "Routing",
                    "Views",
                    "Templates",
                    "Forms",
                    "Request handling",
                    "Response handling",
                    "Sessions",
                    "Cookies",
                    "Database integration",
                    "REST APIs",
                    "Error handling",
                    "Configuration",
                    "Application deployment concepts"
                ]
            },
            {
                "module": "Module 13",
                "title": "REST API Development",
                "topics": [
                    "What is an API?",
                    "REST architecture",
                    "HTTP methods",
                    "GET",
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE",
                    "HTTP status codes",
                    "JSON",
                    "Request parameters",
                    "Request bodies",
                    "Authentication",
                    "API validation",
                    "API error handling",
                    "CRUD APIs",
                    "API testing",
                    "Frontend and backend communication"
                ]
            },
            {
                "module": "Module 14",
                "title": "Authentication and Authorization",
                "topics": [
                    "User registration",
                    "Login systems",
                    "Logout",
                    "Password handling",
                    "Sessions",
                    "Cookies",
                    "Authentication",
                    "Authorization",
                    "Role-based access",
                    "Protected routes",
                    "Form validation",
                    "Basic web security concepts",
                    "API authentication concepts"
                ]
            },
            {
                "module": "Module 15",
                "title": "Git and GitHub",
                "topics": [
                    "Introduction to Git",
                    "Git installation",
                    "Git repositories",
                    "git init",
                    "git clone",
                    "git add",
                    "git commit",
                    "git status",
                    "git log",
                    "Branches",
                    "Merging",
                    "Conflict resolution",
                    "Remote repositories",
                    "GitHub",
                    "Pull and push operations",
                    "Repository management",
                    "Collaboration workflows"
                ]
            },
            {
                "module": "Module 16",
                "title": "Testing and Debugging",
                "topics": [
                    "Debugging fundamentals",
                    "Common programming errors",
                    "Python debugging",
                    "Browser developer tools",
                    "Backend debugging",
                    "Logging",
                    "Unit testing concepts",
                    "Test cases",
                    "API testing",
                    "Validation",
                    "Error handling",
                    "Application troubleshooting"
                ]
            },
            {
                "module": "Module 17",
                "title": "Deployment and Application Hosting",
                "topics": [
                    "Deployment fundamentals",
                    "Production environments",
                    "Environment variables",
                    "Application configuration",
                    "Static files",
                    "Database configuration",
                    "Domain concepts",
                    "Server concepts",
                    "Deployment workflows",
                    "Application monitoring basics",
                    "Production debugging concepts",
                    "Deployment best practices"
                ]
            },
            {
                "module": "Module 18",
                "title": "Real-World Full Stack Projects",
                "topics": [
                    "Work on practical applications that combine frontend, backend, databases, APIs, authentication, and deployment concepts:",
                    "E-Commerce Application",
                    "Employee Management System",
                    "Learning Management System",
                    "Job Portal",
                    "Expense Management Application"
                ]
            }
        ]
    },
    "syllabus": [
        {
            "module": "Module 1",
            "title": "Introduction to Web Development",
            "topics": [
                "What is web development?",
                "Frontend vs backend development",
                "Full stack development architecture",
                "Client-server architecture",
                "How websites and web applications work",
                "Web browsers and web servers",
                "HTTP and HTTPS",
                "Request and response cycle",
                "Static vs dynamic websites",
                "Introduction to web application architecture",
                "Development environments",
                "Code editors and developer tools"
            ]
        },
        {
            "module": "Module 2",
            "title": "HTML – Building Web Pages",
            "topics": [
                "HTML fundamentals",
                "HTML document structure",
                "Headings and paragraphs",
                "Links",
                "Images",
                "Lists",
                "Tables",
                "Forms",
                "Input elements",
                "Buttons",
                "Semantic HTML",
                "HTML5 elements",
                "Audio and video",
                "iframe",
                "Form validation",
                "Accessibility basics"
            ]
        },
        {
            "module": "Module 3",
            "title": "CSS – Styling and Responsive Web Design",
            "topics": [
                "CSS fundamentals",
                "Selectors",
                "Properties and values",
                "Colors",
                "Fonts",
                "Text styling",
                "Box model",
                "Margins and padding",
                "Borders",
                "Display properties",
                "Positioning",
                "Flexbox",
                "CSS Grid",
                "Responsive design",
                "Media queries",
                "Navigation bars",
                "Cards",
                "Forms",
                "Buttons",
                "Website layouts",
                "Responsive webpages"
            ]
        },
        {
            "module": "Module 4",
            "title": "JavaScript Fundamentals",
            "topics": [
                "JavaScript introduction",
                "Variables",
                "Data types",
                "Operators",
                "Conditional statements",
                "Loops",
                "Functions",
                "Arrays",
                "Objects",
                "Strings",
                "Scope",
                "Events",
                "DOM manipulation",
                "Form handling",
                "Browser APIs",
                "Error handling",
                "JavaScript debugging",
                "Modern JavaScript concepts"
            ]
        },
        {
            "module": "Module 5",
            "title": "Advanced JavaScript and Frontend Concepts",
            "topics": [
                "ES6+ features",
                "Arrow functions",
                "Destructuring",
                "Spread and rest operators",
                "Modules",
                "Promises",
                "Async and await",
                "Fetch API",
                "JSON",
                "API integration",
                "Local storage",
                "Session storage",
                "Dynamic interfaces",
                "Client-side validation",
                "Error handling",
                "Frontend application structure"
            ]
        },
        {
            "module": "Module 6",
            "title": "Introduction to Python Programming",
            "topics": [
                "Python installation",
                "Python syntax",
                "Variables",
                "Data types",
                "Operators",
                "Strings",
                "Lists",
                "Tuples",
                "Sets",
                "Dictionaries",
                "Conditional statements",
                "Loops",
                "Functions",
                "Modules",
                "Packages",
                "Exception handling",
                "File handling",
                "Input and output",
                "Python coding practices"
            ]
        },
        {
            "module": "Module 7",
            "title": "Advanced Python Programming",
            "topics": [
                "Object-Oriented Programming",
                "Classes and objects",
                "Constructors",
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Abstraction",
                "Iterators",
                "Generators",
                "Decorators",
                "Lambda functions",
                "List comprehensions",
                "Dictionary comprehensions",
                "Regular expressions",
                "Exception handling",
                "Working with files",
                "Virtual environments",
                "Python modules and packages"
            ]
        },
        {
            "module": "Module 8",
            "title": "Python for Web Development",
            "topics": [
                "Python web development concepts",
                "Server-side programming",
                "Routing",
                "Request handling",
                "Response handling",
                "Templates",
                "Forms",
                "Sessions",
                "Cookies",
                "Application structure",
                "Configuration",
                "Environment variables",
                "Backend validation",
                "Error handling"
            ]
        },
        {
            "module": "Module 9",
            "title": "Django Framework",
            "topics": [
                "Introduction to Django",
                "Django installation",
                "Project creation",
                "Application creation",
                "Django project structure",
                "URL routing",
                "Views",
                "Templates",
                "Template inheritance",
                "Static files",
                "Forms",
                "Models",
                "Django ORM",
                "Migrations",
                "Admin panel",
                "Authentication",
                "Authorization",
                "Sessions",
                "Middleware",
                "Application configuration",
                "Error handling"
            ]
        },
        {
            "module": "Module 10",
            "title": "Django ORM and Database Integration",
            "topics": [
                "Database fundamentals",
                "Relational databases",
                "Tables",
                "Records",
                "Primary keys",
                "Foreign keys",
                "Relationships",
                "SQL fundamentals",
                "CRUD operations",
                "Django ORM",
                "QuerySets",
                "Model relationships",
                "Database migrations",
                "Data validation",
                "Database optimization concepts"
            ]
        },
        {
            "module": "Module 11",
            "title": "SQL and Database Management",
            "topics": [
                "SQL fundamentals",
                "Creating databases",
                "Creating tables",
                "INSERT",
                "SELECT",
                "UPDATE",
                "DELETE",
                "WHERE conditions",
                "Sorting",
                "Filtering",
                "Aggregate functions",
                "GROUP BY",
                "HAVING",
                "Joins",
                "Subqueries",
                "Constraints",
                "Indexes",
                "Database relationships",
                "Transactions",
                "Basic database optimization"
            ]
        },
        {
            "module": "Module 12",
            "title": "Flask Framework",
            "topics": [
                "Introduction to Flask",
                "Flask installation",
                "Application structure",
                "Routing",
                "Views",
                "Templates",
                "Forms",
                "Request handling",
                "Response handling",
                "Sessions",
                "Cookies",
                "Database integration",
                "REST APIs",
                "Error handling",
                "Configuration",
                "Application deployment concepts"
            ]
        },
        {
            "module": "Module 13",
            "title": "REST API Development",
            "topics": [
                "What is an API?",
                "REST architecture",
                "HTTP methods",
                "GET",
                "POST",
                "PUT",
                "PATCH",
                "DELETE",
                "HTTP status codes",
                "JSON",
                "Request parameters",
                "Request bodies",
                "Authentication",
                "API validation",
                "API error handling",
                "CRUD APIs",
                "API testing",
                "Frontend and backend communication"
            ]
        },
        {
            "module": "Module 14",
            "title": "Authentication and Authorization",
            "topics": [
                "User registration",
                "Login systems",
                "Logout",
                "Password handling",
                "Sessions",
                "Cookies",
                "Authentication",
                "Authorization",
                "Role-based access",
                "Protected routes",
                "Form validation",
                "Basic web security concepts",
                "API authentication concepts"
            ]
        },
        {
            "module": "Module 15",
            "title": "Git and GitHub",
            "topics": [
                "Introduction to Git",
                "Git installation",
                "Git repositories",
                "git init",
                "git clone",
                "git add",
                "git commit",
                "git status",
                "git log",
                "Branches",
                "Merging",
                "Conflict resolution",
                "Remote repositories",
                "GitHub",
                "Pull and push operations",
                "Repository management",
                "Collaboration workflows"
            ]
        },
        {
            "module": "Module 16",
            "title": "Testing and Debugging",
            "topics": [
                "Debugging fundamentals",
                "Common programming errors",
                "Python debugging",
                "Browser developer tools",
                "Backend debugging",
                "Logging",
                "Unit testing concepts",
                "Test cases",
                "API testing",
                "Validation",
                "Error handling",
                "Application troubleshooting"
            ]
        },
        {
            "module": "Module 17",
            "title": "Deployment and Application Hosting",
            "topics": [
                "Deployment fundamentals",
                "Production environments",
                "Environment variables",
                "Application configuration",
                "Static files",
                "Database configuration",
                "Domain concepts",
                "Server concepts",
                "Deployment workflows",
                "Application monitoring basics",
                "Production debugging concepts",
                "Deployment best practices"
            ]
        },
        {
            "module": "Module 18",
            "title": "Real-World Full Stack Projects",
            "topics": [
                "E-Commerce Application",
                "Employee Management System",
                "Learning Management System",
                "Job Portal",
                "Expense Management Application"
            ]
        }
    ],
    "projects": {
        "title": "Real-World Full Stack Projects",
        "intro": "Learners can work on practical applications that combine frontend, backend, databases, APIs, authentication, and deployment concepts.",
        "projectList": [
            {
                "title": "1. E-Commerce Application",
                "features": [
                    "User registration",
                    "Login",
                    "Product catalog",
                    "Product search",
                    "Product details",
                    "Shopping cart",
                    "Order management",
                    "Database integration",
                    "Admin functionality"
                ]
            },
            {
                "title": "2. Employee Management System",
                "features": [
                    "Employee registration",
                    "Employee profiles",
                    "Department management",
                    "Search",
                    "Update and delete functionality",
                    "Authentication",
                    "Database integration",
                    "Admin access"
                ]
            },
            {
                "title": "3. Learning Management System",
                "features": [
                    "User registration",
                    "Login",
                    "Course listing",
                    "Course details",
                    "User dashboard",
                    "Content management",
                    "Progress tracking",
                    "Database integration"
                ]
            },
            {
                "title": "4. Job Portal",
                "features": [
                    "User registration",
                    "Employer accounts",
                    "Job posting",
                    "Job search",
                    "Job applications",
                    "Candidate profiles",
                    "Database management",
                    "Authentication"
                ]
            },
            {
                "title": "5. Expense Management Application",
                "features": [
                    "User accounts",
                    "Expense categories",
                    "Expense records",
                    "Income tracking",
                    "Reports",
                    "Filtering",
                    "Database integration",
                    "Dashboard"
                ]
            }
        ]
    },
    "handsOnTraining": {
        "title": "Hands-On Full Stack Development Training",
        "intro": "Practical learning is an important component of the course. Instead of learning programming concepts only through theory, learners work on coding exercises and application-building activities.",
        "subIntro": "Hands-on sessions can include:",
        "items": [
            "Writing Python programs",
            "Building webpages",
            "Creating responsive layouts",
            "Developing JavaScript functionality",
            "Creating Django applications",
            "Developing Flask applications",
            "Designing databases",
            "Writing SQL queries",
            "Creating REST APIs",
            "Connecting APIs with frontend applications",
            "Implementing authentication",
            "Debugging applications",
            "Using Git and GitHub",
            "Building complete projects",
            "Preparing applications for deployment"
        ],
        "outro": "This approach helps learners understand how individual technologies work together within a complete application."
    },
    "learningRoadmap": [
        { "step": "Step 1", "title": "Learn Programming Fundamentals", "desc": "Start with Python fundamentals and develop logical thinking through coding exercises." },
        { "step": "Step 2", "title": "Learn HTML and CSS", "desc": "Understand webpage structure, styling, layouts, and responsive design." },
        { "step": "Step 3", "title": "Learn JavaScript", "desc": "Add interactivity and understand browser-side programming." },
        { "step": "Step 4", "title": "Learn Databases and SQL", "desc": "Understand how applications store, retrieve, update, and manage information." },
        { "step": "Step 5", "title": "Learn Python Web Frameworks", "desc": "Move into Django and Flask to understand server-side application development." },
        { "step": "Step 6", "title": "Learn REST APIs", "desc": "Understand communication between frontend and backend applications." },
        { "step": "Step 7", "title": "Learn Authentication", "desc": "Build secure user registration and login functionality." },
        { "step": "Step 8", "title": "Learn Git and GitHub", "desc": "Practice version control and project management." },
        { "step": "Step 9", "title": "Build Real-World Projects", "desc": "Combine frontend, backend, database, and API technologies." },
        { "step": "Step 10", "title": "Learn Deployment Concepts", "desc": "Understand how applications are prepared and deployed to production environments." },
        { "step": "Step 11", "title": "Build a Portfolio", "desc": "Document your projects and technical skills." },
        { "step": "Step 12", "title": "Prepare for Developer Interviews", "desc": "Practice coding, technical concepts, project discussions, and common interview questions." }
    ],
    "whoCanLearn": {
        "title": "Who Can Learn Full Stack Development with Python?",
        "intro": "The course can be suitable for a wide range of learners.",
        "audiences": [
            {
                "title": "Students",
                "desc": "Students who want to develop software development skills can learn programming and web application development through a structured curriculum."
            },
            {
                "title": "Fresh Graduates",
                "desc": "Graduates can use full stack development skills to build projects and develop a technical portfolio."
            },
            {
                "title": "Beginners",
                "desc": "People without extensive programming experience can begin with Python fundamentals before progressing into web development."
            },
            {
                "title": "Working Professionals",
                "desc": "Professionals looking to expand their software development knowledge can learn frontend, backend, database, and API development concepts."
            },
            {
                "title": "Career Switchers",
                "desc": "Learners from non-programming backgrounds can use a structured learning path to develop foundational software development skills."
            },
            {
                "title": "Freelancers and Aspiring Entrepreneurs",
                "desc": "People interested in building websites and web applications can learn how frontend and backend components work together."
            }
        ]
    },
    "prerequisites": {
        "title": "Prerequisites for Full Stack Development with Python",
        "intro": "The course can be started by beginners with basic computer knowledge.",
        "recommended": [
            "Basic computer knowledge",
            "Basic understanding of internet usage",
            "Logical thinking",
            "Willingness to learn programming",
            "Interest in software development"
        ],
        "outro": "Prior professional programming experience is not necessarily required for a beginner-level learning path. A willingness to practice coding regularly is important because full stack development involves learning multiple technologies and applying them through projects."
    },
    "skillsDeveloped": [
        "Python programming",
        "Web development",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive design",
        "Django",
        "Flask",
        "REST APIs",
        "SQL",
        "Database management",
        "CRUD operations",
        "Authentication",
        "Backend development",
        "Frontend development",
        "Git",
        "GitHub",
        "Debugging",
        "Testing",
        "Application deployment concepts",
        "Project development"
    ],
    "careerOpportunities": {
        "title": "Career Opportunities After Full Stack Development Training",
        "intro": "Full stack development skills can be applied across different software development roles.",
        "roles": [
            {
                "title": "Python Developer",
                "desc": "Python developers work with Python-based applications, automation, backend systems, APIs, and web frameworks."
            },
            {
                "title": "Full Stack Developer",
                "desc": "Full stack developers work across frontend and backend components of web applications."
            },
            {
                "title": "Backend Developer",
                "desc": "Backend developers focus on server-side programming, databases, APIs, application logic, and integrations."
            },
            {
                "title": "Python Django Developer",
                "desc": "Django developers use the Django framework to develop Python-based web applications."
            },
            {
                "title": "Flask Developer",
                "desc": "Flask developers build lightweight Python web applications and APIs."
            },
            {
                "title": "Web Developer",
                "desc": "Web developers work on websites and web applications using frontend and backend technologies."
            },
            {
                "title": "Software Developer",
                "desc": "Full stack development skills can also provide a foundation for broader software development roles."
            },
            {
                "title": "Junior Python Developer",
                "desc": "Learners beginning their professional journey may explore entry-level Python development positions where the required skills match their knowledge and project experience."
            }
        ]
    },
    "interviewPrep": {
        "title": "Full Stack Developer Interview Preparation",
        "intro": "Technical knowledge is only one part of preparing for software development opportunities.",
        "topics": [
            "Python programming questions",
            "Object-Oriented Programming",
            "HTML questions",
            "CSS concepts",
            "JavaScript questions",
            "SQL queries",
            "Database concepts",
            "Django questions",
            "Flask concepts",
            "REST API questions",
            "Authentication concepts",
            "Git and GitHub",
            "Debugging scenarios",
            "Project-related questions",
            "Coding exercises",
            "Problem-solving questions"
        ],
        "outro": "Project-based interview preparation is particularly useful because candidates may be asked to explain the applications they have developed."
    },
    "portfolioProjects": {
        "title": "Full Stack Development Projects for Portfolio",
        "intro": "A portfolio can help demonstrate practical development skills. Instead of listing technologies alone, candidates can showcase complete applications and explain:",
        "items": [
            "The purpose of the project",
            "Technologies used",
            "Frontend architecture",
            "Backend architecture",
            "Database structure",
            "APIs developed",
            "Authentication process",
            "Challenges encountered",
            "Solutions implemented",
            "Testing approach",
            "Deployment process"
        ],
        "outro": "A strong portfolio can contain multiple projects demonstrating different technical concepts."
    },
    "whyProjectBased": {
        "title": "Why Project-Based Learning Matters",
        "paragraphs": [
            "Reading programming concepts can help develop theoretical understanding, but building applications provides opportunities to apply those concepts.",
            "For example, learning Python functions is different from using Python functions inside a Django application.",
            "Similarly, learning SQL commands independently is different from connecting a database to an application and performing CRUD operations through a backend system.",
            "Project-based learning brings multiple concepts together."
        ],
        "flow": "Frontend → API → Backend → Database → Authentication → Testing → Deployment",
        "outro": "Understanding this complete flow is one of the important goals of full stack development learning."
    },
    "understandingStack": {
        "title": "Frontend + Backend + Database: Understanding the Complete Stack",
        "intro": "A typical full stack application can be understood through three major layers.",
        "layers": [
            {
                "name": "Frontend",
                "desc": "The frontend is responsible for the user interface. Common technologies include HTML, CSS, JavaScript."
            },
            {
                "name": "Backend",
                "desc": "The backend handles application logic and server-side processing. Python can be used with frameworks such as Django, Flask."
            },
            {
                "name": "Database",
                "desc": "The database stores application information. Developers may work with relational database systems and SQL to manage application data."
            },
            {
                "name": "API Layer",
                "desc": "APIs provide communication between frontend applications and backend systems."
            }
        ],
        "outro": "Understanding these layers helps developers troubleshoot applications and understand how data flows through a system."
    },
    "faqSection": {
        "title": "Full Stack Development with Python Course FAQs",
        "faqs": [
            {
                "question": "What is Full Stack Development with Python?",
                "answer": "Full Stack Development with Python is a learning program that combines frontend technologies such as HTML, CSS, and JavaScript with Python-based backend development, databases, APIs, authentication, testing, Git, and deployment concepts."
            },
            {
                "question": "Is Full Stack Development with Python suitable for beginners?",
                "answer": "Yes. Beginners can start with programming fundamentals and progressively learn frontend, backend, database, and project development concepts."
            },
            {
                "question": "Do I need programming experience before learning Python full stack development?",
                "answer": "Professional programming experience is not required for a beginner-oriented course. Basic computer knowledge, logical thinking, and consistent coding practice are helpful."
            },
            {
                "question": "What programming language is used in this course?",
                "answer": "Python is the primary backend programming language. Frontend development also involves HTML, CSS, and JavaScript."
            },
            {
                "question": "Which Python frameworks are covered?",
                "answer": "The curriculum can include Django and Flask, allowing learners to understand different approaches to Python web development."
            },
            {
                "question": "Will I learn frontend development?",
                "answer": "Yes. The curriculum covers HTML, CSS, JavaScript, responsive design, DOM concepts, frontend functionality, and communication with backend APIs."
            },
            {
                "question": "Will I learn database management?",
                "answer": "Yes. Database concepts and SQL are included, along with database integration using Python web frameworks."
            },
            {
                "question": "Will I learn REST API development?",
                "answer": "Yes. The curriculum covers REST concepts, HTTP methods, JSON, CRUD APIs, API validation, authentication concepts, and frontend-backend communication."
            },
            {
                "question": "Is Git and GitHub included?",
                "answer": "Yes. Git and GitHub concepts are included to introduce version control and project management workflows."
            },
            {
                "question": "Will I work on real-world projects?",
                "answer": "The learning path emphasizes project-based development. Projects can combine frontend, backend, database, APIs, authentication, and other full stack concepts."
            },
            {
                "question": "Can I become a Full Stack Developer after completing the course?",
                "answer": "The course can provide a foundation in the technologies and concepts used in full stack development. Professional readiness also depends on continued practice, project experience, problem-solving ability, interview preparation, and the requirements of individual employers."
            },
            {
                "question": "Is Python good for web development?",
                "answer": "Python is widely used for backend and web development. Frameworks such as Django and Flask provide tools for building web applications and APIs."
            },
            {
                "question": "What is the difference between frontend and backend development?",
                "answer": "Frontend development focuses primarily on the user interface and browser-side functionality. Backend development focuses on server-side logic, databases, APIs, authentication, and application processing."
            },
            {
                "question": "What is Django?",
                "answer": "Django is a Python web framework designed to help developers build web applications using Python."
            },
            {
                "question": "What is Flask?",
                "answer": "Flask is a lightweight Python web framework commonly used for web applications and APIs."
            },
            {
                "question": "What database skills should a Full Stack Developer know?",
                "answer": "A developer should understand fundamental database concepts, SQL, tables, relationships, CRUD operations, queries, and application-database integration."
            },
            {
                "question": "How long does it take to learn full stack development?",
                "answer": "The learning duration depends on the curriculum, prior programming knowledge, study time, practice frequency, and project complexity. Consistent hands-on practice is important because full stack development covers multiple technologies."
            }
        ]
    },
    "practicalProgram": {
        "title": "Why Choose a Practical Full Stack Development Learning Program?",
        "intro": "A structured learning program can help learners progress through the technology stack in a logical sequence.",
        "subIntro": "Rather than attempting to learn multiple technologies simultaneously, learners can build their knowledge step by step:",
        "path": "Programming → Frontend → JavaScript → Database → Python Backend → Frameworks → APIs → Authentication → Git → Projects → Deployment",
        "outro": "This progression helps learners understand the relationship between different parts of a web application. The focus should not only be on completing modules but also on developing the ability to build, troubleshoot, modify, and explain applications."
    },
    "trainingApproach": {
        "title": "Full Stack Development Training Approach",
        "steps": [
            { "title": "Concept Explanation", "desc": "Understand the purpose and functionality of each technology." },
            { "title": "Coding Practice", "desc": "Write programs and solve programming exercises." },
            { "title": "Practical Assignments", "desc": "Apply concepts through individual tasks." },
            { "title": "Application Development", "desc": "Build features that combine multiple technologies." },
            { "title": "Debugging", "desc": "Identify and resolve programming and application errors." },
            { "title": "Project Work", "desc": "Develop complete applications from planning through implementation." },
            { "title": "Code Review", "desc": "Understand coding practices and identify opportunities for improvement." },
            { "title": "Interview Preparation", "desc": "Review technical concepts and practice project-based questions." }
        ]
    },
    "careerFoundation": {
        "title": "Build Your Full Stack Development Career Foundation",
        "paragraphs": [
            "Full stack development brings together multiple areas of software engineering.",
            "Learning Python provides a strong programming foundation, while HTML, CSS, and JavaScript introduce frontend development. Django and Flask extend Python into web application development, while SQL provides database knowledge.",
            "REST APIs connect application components, Git supports version control, and deployment concepts introduce the transition from development to production.",
            "Together, these technologies provide a broad foundation for understanding modern web application development."
        ]
    },
    "callToAction": {
        "title": "Start Learning Full Stack Development with Python",
        "paragraphs": [
            "If your goal is to learn how complete web applications are designed and developed, a structured Full Stack Development with Python course can help you progress from programming fundamentals to practical application development.",
            "Learn Python, frontend technologies, backend frameworks, databases, APIs, authentication, Git, testing, and project development through a structured learning path.",
            "Start your Full Stack Development with Python learning journey today and build the technical foundation needed to develop modern web applications."
        ],
        "motto": "Build. Practice. Create. Develop.",
        "enquire": "Enquire Now - Get course details, curriculum information, learning options, and project-related information."
    },
    "seoMeta": {
        "metaTitle": "Full Stack Development with Python Course | Training & Projects",
        "metaDescription": "Learn Full Stack Development with Python through practical training covering HTML, CSS, JavaScript, Python, Django, Flask, SQL, APIs, Git, databases, and real-world projects.",
        "h1": "Full Stack Development with Python Training",
        "seoPageTitle": "Full Stack Development with Python Course – Learn Python, Django, Flask, JavaScript & Web Development",
        "suggestedUrl": "/full-stack-development-with-python"
    }
}

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    content = f.read()

target_id = '"id": "fullstack-python"'
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

formatted_json = json.dumps(fsp_data, indent=4, ensure_ascii=False)
new_content = content[:brace_idx] + formatted_json + content[end_idx+1:]

with open('src/data/courses.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS: fullstack-python successfully updated in courses.js")
