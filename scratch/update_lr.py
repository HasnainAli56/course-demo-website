import json
import re

lr_data = {
    "id": "loadrunner-course",
    "category": "testing",
    "title": "Best LoadRunner Course – Performance Testing Training at TECHMASTER",
    "subtitle": "Master Performance Testing with LoadRunner",
    "iconName": "CheckSquare",
    "iconBg": "bg-purple-50 text-purple-600",
    "description": "Looking for the best LoadRunner course to develop your performance testing skills? TECHMASTER offers practical, career-focused LoadRunner training designed to help learners understand performance testing concepts, create test scripts, execute load tests, and analyse application performance.\n\nOur LoadRunner course focuses on building practical knowledge of performance testing workflows, including scripting, workload modelling, test execution, monitoring, and result analysis. Through guided exercises and project-based learning, learners can develop the skills required to work with performance testing scenarios in real-world environments.\n\nWhether you are a fresher, manual tester, automation tester, or working IT professional, this course can help you build a foundation in performance testing using LoadRunner.",
    "techBadges": [
        "LoadRunner",
        "VuGen Scripting",
        "Controller",
        "Analysis",
        "Performance Testing",
        "Workload Modelling"
    ],
    "duration": "8 Months",
    "rating": 4.87,
    "reviewsCount": 650,
    "studentsEnrolled": "1,800+",
    "avgSalary": "₹6.0 - ₹15 LPA",
    "batchType": "Next Cohort: 07th Sep - 13th Sep 2026",
    "level": "All Levels",
    "emi": "₹3,599/mo",
    "featured": False,
    "jobGuarantee": False,
    "introductionOverview": [
        "Looking for the best LoadRunner course to develop your performance testing skills? TECHMASTER offers practical, career-focused LoadRunner training designed to help learners understand performance testing concepts, create test scripts, execute load tests, and analyse application performance.",
        "Our LoadRunner course focuses on building practical knowledge of performance testing workflows, including scripting, workload modelling, test execution, monitoring, and result analysis. Through guided exercises and project-based learning, learners can develop the skills required to work with performance testing scenarios in real-world environments.",
        "Whether you are a fresher, manual tester, automation tester, or working IT professional, this course can help you build a foundation in performance testing using LoadRunner."
    ],
    "whyChooseUs": {
        "title": "Why Choose TECHMASTER for LoadRunner Training?",
        "reasons": [
            "Structured LoadRunner course curriculum",
            "Practical, hands-on learning approach",
            "Training focused on performance testing concepts and workflows",
            "Guided exercises and project-based practice",
            "Learn scripting, load generation, and performance analysis",
            "Suitable for beginners and experienced testing professionals",
            "Online training options for flexible learning",
            "Guidance from experienced trainers",
            "Support with interview preparation and resume development",
            "Career guidance and placement assistance, subject to relevant opportunities"
        ]
    },
    "curriculum": {
        "title": "LoadRunner Course Syllabus",
        "modules": [
            {
                "module": "Module 1",
                "title": "Introduction to Performance Testing",
                "topics": [
                    "Introduction to software performance testing",
                    "Importance of performance testing in software development",
                    "Functional testing vs. performance testing",
                    "Types of performance testing",
                    "Load, stress, endurance, and spike testing",
                    "Performance testing life cycle",
                    "Introduction to LoadRunner and its role in performance testing"
                ]
            },
            {
                "module": "Module 2",
                "title": "LoadRunner Architecture and Components",
                "topics": [
                    "Overview of LoadRunner architecture",
                    "Introduction to VuGen",
                    "Introduction to Controller and test execution components",
                    "Load generators and their purpose",
                    "Analysis tools and performance reports",
                    "Understanding the performance testing workflow",
                    "Overview of test scenarios and virtual users"
                ]
            },
            {
                "module": "Module 3",
                "title": "Virtual User Generator (VuGen)",
                "topics": [
                    "Introduction to VuGen",
                    "Creating and managing scripts",
                    "Understanding script structure",
                    "Recording user actions",
                    "Introduction to supported application protocols",
                    "Understanding generated script code",
                    "Running and validating scripts",
                    "Common scripting issues and troubleshooting"
                ]
            },
            {
                "module": "Module 4",
                "title": "Recording and Script Development",
                "topics": [
                    "Recording application workflows",
                    "Understanding recording options",
                    "Identifying important user transactions",
                    "Working with recorded scripts",
                    "Editing and enhancing scripts",
                    "Managing script sections and functions",
                    "Validating scripts through replay",
                    "Debugging common script errors"
                ]
            },
            {
                "module": "Module 5",
                "title": "Correlation and Parameterization",
                "topics": [
                    "Introduction to correlation",
                    "Understanding dynamic values in application responses",
                    "Identifying values that require correlation",
                    "Manual correlation concepts",
                    "Automatic correlation overview",
                    "Introduction to parameterization",
                    "Using parameters to create realistic test data",
                    "Working with parameter files and data sources",
                    "Improving script reusability"
                ]
            },
            {
                "module": "Module 6",
                "title": "Transactions, Rendezvous, and Think Time",
                "topics": [
                    "Introduction to transactions",
                    "Adding transaction start and end points",
                    "Measuring transaction response time",
                    "Understanding rendezvous points",
                    "Using think time in scripts",
                    "Managing pacing between iterations",
                    "Creating realistic user behaviour",
                    "Validating transaction measurements"
                ]
            },
            {
                "module": "Module 7",
                "title": "Advanced Scripting Concepts",
                "topics": [
                    "Working with script functions",
                    "Conditional statements and loops",
                    "Managing script execution flow",
                    "Handling dynamic application behaviour",
                    "Working with checkpoints and validations",
                    "Managing errors and script failures",
                    "Script debugging techniques",
                    "Improving script maintainability"
                ]
            },
            {
                "module": "Module 8",
                "title": "LoadRunner Controller and Scenario Design",
                "topics": [
                    "Introduction to Controller",
                    "Creating performance test scenarios",
                    "Adding virtual users and scripts",
                    "Configuring load generators",
                    "Defining workload distribution",
                    "Scheduling scenario execution",
                    "Configuring ramp-up and ramp-down",
                    "Understanding scenario run settings",
                    "Executing and monitoring test scenarios"
                ]
            },
            {
                "module": "Module 9",
                "title": "Workload Modelling and Load Profiles",
                "topics": [
                    "Understanding workload modelling",
                    "Designing user load profiles",
                    "Defining virtual user groups",
                    "Configuring user distribution",
                    "Understanding concurrent users",
                    "Creating realistic business workloads",
                    "Establishing test objectives and workload assumptions",
                    "Preparing scenarios for different performance test types"
                ]
            },
            {
                "module": "Module 10",
                "title": "Performance Test Execution",
                "topics": [
                    "Preparing scripts for execution",
                    "Validating test scenarios",
                    "Running load tests",
                    "Monitoring virtual user activity",
                    "Understanding execution status",
                    "Identifying errors during test runs",
                    "Managing test execution issues",
                    "Maintaining test execution records"
                ]
            },
            {
                "module": "Module 11",
                "title": "Monitoring and Performance Metrics",
                "topics": [
                    "Introduction to performance monitoring",
                    "Understanding response time",
                    "Throughput and transaction rate",
                    "Hits per second and related measurements",
                    "CPU and memory utilisation",
                    "Monitoring application and system resources",
                    "Identifying performance bottlenecks",
                    "Understanding the relationship between workload and system behaviour"
                ]
            },
            {
                "module": "Module 12",
                "title": "LoadRunner Analysis",
                "topics": [
                    "Introduction to Analysis",
                    "Opening and reviewing test results",
                    "Understanding performance graphs",
                    "Analysing transaction response times",
                    "Reviewing throughput and hit-rate graphs",
                    "Identifying errors and failed transactions",
                    "Comparing performance test results",
                    "Preparing performance test reports",
                    "Communicating findings and recommendations"
                ]
            },
            {
                "module": "Module 13",
                "title": "Performance Testing Best Practices",
                "topics": [
                    "Defining performance testing objectives",
                    "Preparing test data and environments",
                    "Designing realistic workloads",
                    "Validating scripts before execution",
                    "Identifying bottlenecks systematically",
                    "Maintaining repeatable test conditions",
                    "Documenting test results",
                    "Communicating performance issues to development teams"
                ]
            },
            {
                "module": "Module 14",
                "title": "Troubleshooting and Common Issues",
                "topics": [
                    "Common VuGen scripting issues",
                    "Correlation-related failures",
                    "Parameter and test-data issues",
                    "Virtual user execution errors",
                    "Load generator connectivity issues",
                    "Scenario configuration problems",
                    "Understanding failed transactions",
                    "Approaches to investigating performance test failures"
                ]
            },
            {
                "module": "Module 15",
                "title": "Real-Time Project and Practical Exercises",
                "topics": [
                    "Understanding application performance requirements",
                    "Identifying business-critical user journeys",
                    "Recording and enhancing scripts",
                    "Preparing test data and workload profiles",
                    "Designing and executing load test scenarios",
                    "Monitoring test execution",
                    "Analysing results and identifying bottlenecks",
                    "Preparing a performance testing summary report"
                ]
            }
        ]
    },
    "syllabus": [
        {
            "module": "Module 1",
            "title": "Introduction to Performance Testing",
            "topics": [
                "Introduction to software performance testing",
                "Importance of performance testing in software development",
                "Functional testing vs. performance testing",
                "Types of performance testing",
                "Load, stress, endurance, and spike testing",
                "Performance testing life cycle",
                "Introduction to LoadRunner and its role in performance testing"
            ]
        },
        {
            "module": "Module 2",
            "title": "LoadRunner Architecture and Components",
            "topics": [
                "Overview of LoadRunner architecture",
                "Introduction to VuGen",
                "Introduction to Controller and test execution components",
                "Load generators and their purpose",
                "Analysis tools and performance reports",
                "Understanding the performance testing workflow",
                "Overview of test scenarios and virtual users"
            ]
        },
        {
            "module": "Module 3",
            "title": "Virtual User Generator (VuGen)",
            "topics": [
                "Introduction to VuGen",
                "Creating and managing scripts",
                "Understanding script structure",
                "Recording user actions",
                "Introduction to supported application protocols",
                "Understanding generated script code",
                "Running and validating scripts",
                "Common scripting issues and troubleshooting"
            ]
        },
        {
            "module": "Module 4",
            "title": "Recording and Script Development",
            "topics": [
                "Recording application workflows",
                "Understanding recording options",
                "Identifying important user transactions",
                "Working with recorded scripts",
                "Editing and enhancing scripts",
                "Managing script sections and functions",
                "Validating scripts through replay",
                "Debugging common script errors"
            ]
        },
        {
            "module": "Module 5",
            "title": "Correlation and Parameterization",
            "topics": [
                "Introduction to correlation",
                "Understanding dynamic values in application responses",
                "Identifying values that require correlation",
                "Manual correlation concepts",
                "Automatic correlation overview",
                "Introduction to parameterization",
                "Using parameters to create realistic test data",
                "Working with parameter files and data sources",
                "Improving script reusability"
            ]
        },
        {
            "module": "Module 6",
            "title": "Transactions, Rendezvous, and Think Time",
            "topics": [
                "Introduction to transactions",
                "Adding transaction start and end points",
                "Measuring transaction response time",
                "Understanding rendezvous points",
                "Using think time in scripts",
                "Managing pacing between iterations",
                "Creating realistic user behaviour",
                "Validating transaction measurements"
            ]
        },
        {
            "module": "Module 7",
            "title": "Advanced Scripting Concepts",
            "topics": [
                "Working with script functions",
                "Conditional statements and loops",
                "Managing script execution flow",
                "Handling dynamic application behaviour",
                "Working with checkpoints and validations",
                "Managing errors and script failures",
                "Script debugging techniques",
                "Improving script maintainability"
            ]
        },
        {
            "module": "Module 8",
            "title": "LoadRunner Controller and Scenario Design",
            "topics": [
                "Introduction to Controller",
                "Creating performance test scenarios",
                "Adding virtual users and scripts",
                "Configuring load generators",
                "Defining workload distribution",
                "Scheduling scenario execution",
                "Configuring ramp-up and ramp-down",
                "Understanding scenario run settings",
                "Executing and monitoring test scenarios"
            ]
        },
        {
            "module": "Module 9",
            "title": "Workload Modelling and Load Profiles",
            "topics": [
                "Understanding workload modelling",
                "Designing user load profiles",
                "Defining virtual user groups",
                "Configuring user distribution",
                "Understanding concurrent users",
                "Creating realistic business workloads",
                "Establishing test objectives and workload assumptions",
                "Preparing scenarios for different performance test types"
            ]
        },
        {
            "module": "Module 10",
            "title": "Performance Test Execution",
            "topics": [
                "Preparing scripts for execution",
                "Validating test scenarios",
                "Running load tests",
                "Monitoring virtual user activity",
                "Understanding execution status",
                "Identifying errors during test runs",
                "Managing test execution issues",
                "Maintaining test execution records"
            ]
        },
        {
            "module": "Module 11",
            "title": "Monitoring and Performance Metrics",
            "topics": [
                "Introduction to performance monitoring",
                "Understanding response time",
                "Throughput and transaction rate",
                "Hits per second and related measurements",
                "CPU and memory utilisation",
                "Monitoring application and system resources",
                "Identifying performance bottlenecks",
                "Understanding the relationship between workload and system behaviour"
            ]
        },
        {
            "module": "Module 12",
            "title": "LoadRunner Analysis",
            "topics": [
                "Introduction to Analysis",
                "Opening and reviewing test results",
                "Understanding performance graphs",
                "Analysing transaction response times",
                "Reviewing throughput and hit-rate graphs",
                "Identifying errors and failed transactions",
                "Comparing performance test results",
                "Preparing performance test reports",
                "Communicating findings and recommendations"
            ]
        },
        {
            "module": "Module 13",
            "title": "Performance Testing Best Practices",
            "topics": [
                "Defining performance testing objectives",
                "Preparing test data and environments",
                "Designing realistic workloads",
                "Validating scripts before execution",
                "Identifying bottlenecks systematically",
                "Maintaining repeatable test conditions",
                "Documenting test results",
                "Communicating performance issues to development teams"
            ]
        },
        {
            "module": "Module 14",
            "title": "Troubleshooting and Common Issues",
            "topics": [
                "Common VuGen scripting issues",
                "Correlation-related failures",
                "Parameter and test-data issues",
                "Virtual user execution errors",
                "Load generator connectivity issues",
                "Scenario configuration problems",
                "Understanding failed transactions",
                "Approaches to investigating performance test failures"
            ]
        },
        {
            "module": "Module 15",
            "title": "Real-Time Project and Practical Exercises",
            "topics": [
                "Understanding application performance requirements",
                "Identifying business-critical user journeys",
                "Recording and enhancing scripts",
                "Preparing test data and workload profiles",
                "Designing and executing load test scenarios",
                "Monitoring test execution",
                "Analysing results and identifying bottlenecks",
                "Preparing a performance testing summary report"
            ]
        }
    ],
    "handsOnPractice": {
        "title": "Hands-On LoadRunner Training",
        "intro": "TECHMASTER’s LoadRunner training emphasises practical learning to help participants understand how performance tests are designed, executed, and analysed.",
        "subIntro": "During the course, learners can practise:",
        "items": [
            "Recording and enhancing scripts",
            "Working with correlation and parameterization",
            "Creating transactions and managing think time",
            "Designing scenarios using virtual users",
            "Configuring workloads and test schedules",
            "Executing load tests and monitoring results",
            "Analysing performance metrics and reports",
            "Investigating common scripting and execution issues"
        ],
        "outro": "Practical exercises and project activities help learners connect performance testing concepts with application testing scenarios."
    },
    "projectScenarios": {
        "title": "Real-Time Project Scenarios",
        "intro": "The course can include guided practice around scenarios such as:",
        "projects": [
            {
                "title": "E-Commerce Application",
                "activities": [
                    "Simulating users browsing products",
                    "Testing search and product selection workflows",
                    "Modelling concurrent users during checkout",
                    "Reviewing response times under load"
                ]
            },
            {
                "title": "Banking Application",
                "activities": [
                    "Modelling common user transactions",
                    "Simulating concurrent access to application functions",
                    "Monitoring transaction performance",
                    "Reviewing errors and performance test results"
                ]
            },
            {
                "title": "Enterprise Web Application",
                "activities": [
                    "Recording frequently used business workflows",
                    "Preparing realistic workload profiles",
                    "Executing performance tests",
                    "Analysing results and documenting observations"
                ]
            }
        ],
        "outro": "Project scenarios and practical activities may vary depending on the training plan and available environment."
    },
    "whoCanLearn": {
        "title": "Who Can Join the LoadRunner Course?",
        "intro": "This course may be suitable for:",
        "audience": [
            "Freshers interested in software testing",
            "Manual testers looking to learn performance testing",
            "Automation testers expanding their testing skill set",
            "QA engineers interested in load and performance testing",
            "Software testing professionals seeking LoadRunner knowledge",
            "IT professionals planning to move into performance testing roles"
        ]
    },
    "prerequisites": {
        "title": "Prerequisites",
        "items": [
            "Basic understanding of software testing is helpful.",
            "Familiarity with web applications and client-server concepts can be useful.",
            "Programming knowledge may help with scripting, but the required level depends on the selected training plan.",
            "Beginners can start with the fundamentals of performance testing."
        ]
    },
    "certification": {
        "title": "LoadRunner Certification Guidance",
        "paragraphs": [
            "The course is designed to help learners develop practical knowledge of LoadRunner and performance testing.",
            "TECHMASTER can provide course-completion documentation according to its training process. Any external or vendor certification is separate and depends on the relevant certification provider’s requirements and examination process."
        ]
    },
    "careerOpportunities": {
        "title": "Career Opportunities After LoadRunner Training",
        "intro": "LoadRunner and performance testing knowledge may be relevant to roles such as:",
        "roles": [
            "Performance Test Engineer",
            "Load Testing Engineer",
            "Performance Testing Analyst",
            "QA Engineer – Performance Testing",
            "Software Test Engineer",
            "Non-Functional Testing Engineer"
        ],
        "outro": "Job requirements vary by employer, experience level, and the technologies used in the project."
    },
    "skillsDeveloped": {
        "title": "Skills You Can Develop",
        "intro": "By completing the training and practical exercises, learners can work toward developing skills in:",
        "skills": [
            "Performance testing fundamentals",
            "LoadRunner scripting with VuGen",
            "Correlation and parameterization",
            "Transaction and workload configuration",
            "Load test scenario creation",
            "Performance test execution",
            "Monitoring and metrics interpretation",
            "Performance result analysis",
            "Troubleshooting and reporting"
        ]
    },
    "targetAudiencePaths": {
        "freshers": {
            "title": "LoadRunner Training for Freshers",
            "desc": "Freshers can begin by learning software testing fundamentals and gradually progress to performance testing concepts and LoadRunner workflows. The learning path can include script recording, script enhancement, scenario creation, test execution, and result analysis. Practical exercises help learners become familiar with the activities involved in performance testing projects."
        },
        "workingProfessionals": {
            "title": "LoadRunner Training for Working Professionals",
            "desc": "Working professionals can use the course to strengthen their understanding of performance testing and expand their testing skill set. Training topics may be tailored to experience and learning goals, including advanced scripting concepts, workload modelling, test execution, monitoring, troubleshooting, and performance report analysis."
        }
    },
    "trainingMethodology": {
        "title": "Training Methodology",
        "intro": "TECHMASTER’s training approach may include:",
        "steps": [
            "Performance testing fundamentals",
            "LoadRunner tool introduction",
            "Guided demonstrations",
            "Practical scripting exercises",
            "Scenario design and execution",
            "Performance monitoring and analysis",
            "Project-based practice",
            "Interview preparation and career guidance"
        ]
    },
    "courseFeatures": {
        "title": "Course Features",
        "features": [
            "Online training options",
            "Structured course syllabus",
            "Practical exercises and guided demonstrations",
            "Performance testing project scenarios",
            "Script development and troubleshooting practice",
            "Test execution and analysis activities",
            "Interview preparation support",
            "Resume guidance",
            "Career and placement assistance, subject to relevant openings and eligibility"
        ]
    },
    "faqSection": {
        "title": "Frequently Asked Questions",
        "faqs": [
            {
                "question": "1. What is LoadRunner?",
                "answer": "LoadRunner is a performance testing tool used to evaluate how applications behave under workloads and to help identify performance-related issues."
            },
            {
                "question": "2. Who can learn LoadRunner?",
                "answer": "Freshers, manual testers, automation testers, QA engineers, and other IT professionals interested in performance testing can consider learning LoadRunner."
            },
            {
                "question": "3. Is programming knowledge required?",
                "answer": "Programming knowledge can be helpful, particularly for scripting and script enhancement. The level of programming required depends on the protocols and course topics covered."
            },
            {
                "question": "4. What will I learn in the LoadRunner course?",
                "answer": "Topics may include performance testing fundamentals, VuGen scripting, correlation, parameterization, Controller scenarios, workload modelling, test execution, monitoring, and Analysis."
            },
            {
                "question": "5. Does the course include practical training?",
                "answer": "The training plan can include guided exercises and project-based practice. Confirm the exact hands-on environment and activities with TECHMASTER before enrolling."
            },
            {
                "question": "6. Can freshers join the course?",
                "answer": "Yes. Beginners can start with performance testing fundamentals and progress to LoadRunner concepts and practical exercises."
            },
            {
                "question": "7. Does TECHMASTER provide certification?",
                "answer": "Course-completion documentation may be provided according to TECHMASTER’s training process. External vendor certification, where applicable, is subject to the certification provider’s requirements."
            },
            {
                "question": "8. Is placement assistance available?",
                "answer": "Career guidance and placement assistance may be available, subject to relevant openings, eligibility, and the organisation’s placement-support process. Employment is not guaranteed."
            },
            {
                "question": "9. Can working professionals attend?",
                "answer": "Training options can be discussed with TECHMASTER to determine a suitable schedule for working professionals."
            },
            {
                "question": "10. How do I enrol?",
                "answer": "Contact TECHMASTER to enquire about the current batch schedule, course duration, fees, training mode, and enrolment process."
            }
        ]
    },
    "callToAction": {
        "title": "Start Your LoadRunner Learning Journey with TECHMASTER",
        "paragraphs": [
            "Build your understanding of performance testing through structured LoadRunner training, practical exercises, and project-based learning.",
            "Whether you are beginning your software testing journey or expanding your existing QA skills, TECHMASTER can help you explore the concepts and workflows used in performance testing.",
            "Enquire today to learn about the LoadRunner course syllabus, upcoming batches, fees, and training options."
        ]
    }
}

with open('src/data/courses.js', 'r', encoding='utf-8') as f:
    content = f.read()

target_id = '"id": "loadrunner-course"'
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

formatted_json = json.dumps(lr_data, indent=4, ensure_ascii=False)
new_content = content[:brace_idx] + formatted_json + content[end_idx+1:]

with open('src/data/courses.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS: loadrunner-course successfully updated in courses.js")
