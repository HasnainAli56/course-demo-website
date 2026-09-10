export const CATEGORIES = [
  { id: 'all', label: 'All Courses' },
  { id: 'sap', label: 'SAP Training' },
  { id: 'data', label: 'Data & AI' },
  { id: 'dev', label: 'Web & Software Dev' },
  { id: 'testing', label: 'Software Testing' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'management', label: 'IT Management' },
];

export const COURSES = [
  {
    id: 'sap-module',
    category: 'sap',
    title: 'SAP Functional & Technical',
    subtitle: 'SAP S/4HANA | FICO | MM | ABAP',
    iconName: 'Building2',
    iconBg: 'bg-blue-50 text-blue-600',
    description: 'Master comprehensive SAP modules with hands-on live project training on real ERP server access.',
    techBadges: ['Functional & Technical', 'S/4HANA', 'Real-time Server'],
    duration: '3 Months',
    rating: 4.9,
    reviewsCount: 420,
    studentsEnrolled: '1,200+',
    avgSalary: '₹7.5 - ₹16 LPA',
    batchType: 'Weekday & Weekend',
    level: 'Beginner to Advanced',
    emi: '₹4,499/mo',
    featured: true,
    syllabus: [
      { module: 'Module 1', title: 'Introduction to Enterprise Resource Planning (ERP) & SAP Architecture' },
      { module: 'Module 2', title: 'Financial Accounting (FICO) & Management Reporting' },
      { module: 'Module 3', title: 'Materials Management (MM) & Supply Chain Configuration' },
      { module: 'Module 4', title: 'SAP ABAP Workbench & Data Dictionary Concepts' },
      { module: 'Module 5', title: 'End-to-End Real-Time Industry Case Studies & Certification Preparation' }
    ]
  },
  {
    id: 'data-analytics',
    category: 'data',
    title: 'Data Analytics Mastery',
    subtitle: 'Python | SQL | Power BI | Advanced Excel',
    iconName: 'BarChart3',
    iconBg: 'bg-emerald-50 text-emerald-600',
    description: 'Transform raw data into actionable business intelligence using top industry analytics tools.',
    techBadges: ['Python', 'SQL', 'Power BI'],
    duration: '2.5 Months',
    rating: 4.95,
    reviewsCount: 680,
    studentsEnrolled: '2,100+',
    avgSalary: '₹6.0 - ₹14 LPA',
    batchType: 'Flexible Timings',
    level: 'Beginner Friendly',
    emi: '₹3,999/mo',
    featured: true,
    syllabus: [
      { module: 'Module 1', title: 'Data Cleaning & Manipulation using Python (Pandas & NumPy)' },
      { module: 'Module 2', title: 'Relational Database Queries & Joins with SQL' },
      { module: 'Module 3', title: 'Interactive Dashboard Design in Microsoft Power BI' },
      { module: 'Module 4', title: 'Business Analytics & Advanced Statistical Analysis' },
      { module: 'Module 5', title: 'Capstone Project: E-Commerce Data Analytics Pipeline' }
    ]
  },
  {
    id: 'full-stack-dev',
    category: 'dev',
    title: 'Full Stack Development',
    subtitle: 'HTML | CSS | JavaScript | React | Node.js',
    iconName: 'Code2',
    iconBg: 'bg-indigo-50 text-indigo-600',
    description: 'Become a job-ready full stack web developer building modern scalable MERN stack web applications.',
    techBadges: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    duration: '4 Months',
    rating: 4.92,
    reviewsCount: 890,
    studentsEnrolled: '3,400+',
    avgSalary: '₹6.5 - ₹18 LPA',
    batchType: 'Fast-Track & Regular',
    level: 'All Levels',
    emi: '₹4,999/mo',
    featured: true,
    syllabus: [
      { module: 'Module 1', title: 'HTML5, CSS3, Flexbox, Tailwind CSS & Responsive Layouts' },
      { module: 'Module 2', title: 'Modern JavaScript (ES6+), Asynchronous JS & DOM APIs' },
      { module: 'Module 3', title: 'Frontend Development with React.js & Redux Toolkit' },
      { module: 'Module 4', title: 'Backend REST API Development with Node.js & Express' },
      { module: 'Module 5', title: 'Database Integration with MongoDB & Deployment on AWS' }
    ]
  },
  {
    id: 'testing-tools',
    category: 'testing',
    title: 'Testing Tools (Manual & Automation)',
    subtitle: 'Manual Testing | Selenium | Java | Cucumber BDD',
    iconName: 'Settings2',
    iconBg: 'bg-amber-50 text-amber-600',
    description: 'Master manual QA concepts along with automated web testing using Selenium WebDriver and TestNG.',
    techBadges: ['Manual & Automation', 'Selenium', 'Java', 'Cucumber'],
    duration: '3 Months',
    rating: 4.88,
    reviewsCount: 510,
    studentsEnrolled: '1,800+',
    avgSalary: '₹5.5 - ₹12 LPA',
    batchType: 'Weekend & Evening',
    level: 'Beginner Friendly',
    emi: '₹3,499/mo',
    featured: true,
    syllabus: [
      { module: 'Module 1', title: 'Software Testing Life Cycle (STLC) & Test Case Design' },
      { module: 'Module 2', title: 'Java Programming Fundamentals for Test Automation' },
      { module: 'Module 3', title: 'Selenium WebDriver Architecture & Element Locators' },
      { module: 'Module 4', title: 'Cucumber BDD Framework & TestNG Integration' },
      { module: 'Module 5', title: 'API Testing with Postman & CI/CD Pipeline Automation' }
    ]
  },
  {
    id: 'cloud-computing',
    category: 'cloud',
    title: 'Cloud Computing & DevOps',
    subtitle: 'AWS | Azure Fundamentals | Docker | Kubernetes',
    iconName: 'Cloud',
    iconBg: 'bg-sky-50 text-sky-600',
    description: 'Learn cloud architecture, server deployment, containerization, and infrastructure automation.',
    techBadges: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    duration: '3.5 Months',
    rating: 4.94,
    reviewsCount: 630,
    studentsEnrolled: '1,950+',
    avgSalary: '₹8.0 - ₹20 LPA',
    batchType: 'Weekend Batches',
    level: 'Intermediate',
    emi: '₹4,999/mo',
    featured: true,
    syllabus: [
      { module: 'Module 1', title: 'AWS Core Services (EC2, S3, RDS, VPC, IAM)' },
      { module: 'Module 2', title: 'Microsoft Azure Cloud Solutions & Storage Services' },
      { module: 'Module 3', title: 'Containerization with Docker & Container Orchestration with Kubernetes' },
      { module: 'Module 4', title: 'Continuous Integration / Continuous Deployment (CI/CD) with Jenkins' },
      { module: 'Module 5', title: 'Infrastructure as Code (IaC) with Terraform' }
    ]
  },
  {
    id: 'it-service-management',
    category: 'management',
    title: 'IT Service Management',
    subtitle: 'ITIL Foundation | Agile Scrum | ServiceNow',
    iconName: 'Layers',
    iconBg: 'bg-purple-50 text-purple-600',
    description: 'Get certified in global IT service management frameworks and enterprise ITSM workflow solutions.',
    techBadges: ['ITIL Foundation', 'Agile Scrum', 'ServiceNow'],
    duration: '2 Months',
    rating: 4.86,
    reviewsCount: 340,
    studentsEnrolled: '950+',
    avgSalary: '₹7.0 - ₹15 LPA',
    batchType: 'Fast-Track',
    level: 'Beginner to Professional',
    emi: '₹3,299/mo',
    featured: true,
    syllabus: [
      { module: 'Module 1', title: 'ITIL 4 Framework & Key Service Management Concepts' },
      { module: 'Module 2', title: 'The 34 ITIL Management Practices & Service Value System' },
      { module: 'Module 3', title: 'Agile & Scrum Methodology for IT Operations' },
      { module: 'Module 4', title: 'ServiceNow Platform Administration & Workflow Automation' },
      { module: 'Module 5', title: 'Official ITIL 4 Certification Mock Exam & Interview Prep' }
    ]
  }
];

export const HIRING_PARTNERS = [
  { name: 'TCS', logoText: 'TCS', color: 'text-blue-600' },
  { name: 'Infosys', logoText: 'Infosys', color: 'text-indigo-600' },
  { name: 'Cognizant', logoText: 'Cognizant', color: 'text-cyan-600' },
  { name: 'Wipro', logoText: 'Wipro', color: 'text-purple-600' },
  { name: 'Accenture', logoText: 'Accenture', color: 'text-purple-700' },
  { name: 'Tech Mahindra', logoText: 'Tech Mahindra', color: 'text-red-600' },
  { name: 'HCL Tech', logoText: 'HCL', color: 'text-blue-700' },
  { name: 'Zoho Corporation', logoText: 'ZoHo', color: 'text-emerald-600' },
  { name: 'Capgemini', logoText: 'Capgemini', color: 'text-sky-600' },
];

export const CAREER_STEPS = [
  {
    step: '01',
    title: 'Industry Aligned Curriculum',
    desc: 'Learn up-to-date technologies curated by top IT software architects.',
    icon: 'BookOpen'
  },
  {
    step: '02',
    title: 'Real-Time Project Labs',
    desc: 'Build enterprise projects with actual server access and GitHub repositories.',
    icon: 'Laptop'
  },
  {
    step: '03',
    title: 'Resume & Mock Interviews',
    desc: '1-on-1 resume optimization, LinkedIn profile branding, and tech mock interviews.',
    icon: 'FileCheck'
  },
  {
    step: '04',
    title: 'Guaranteed Hiring Drives',
    desc: 'Get direct referral interview calls with 500+ corporate hiring partners.',
    icon: 'Briefcase'
  }
];

export const FAQS = [
  {
    question: 'Is placement assistance guaranteed after course completion?',
    answer: 'Yes! We offer 100% placement support including dedicated interview drives, resume rebuilding, mock technical interviews, and direct referrals to our 500+ corporate hiring partners until you get placed.'
  },
  {
    question: 'Are classes available in both online and offline modes?',
    answer: 'Absolutely. We offer offline classroom sessions in our high-tech labs (Anna Salai, Velachery, OMR, Bangalore) as well as live interactive online classes with recorded sessions and instructor support.'
  },
  {
    question: 'Can non-IT graduates or beginners join these software courses?',
    answer: 'Yes! Over 45% of our successful candidates come from non-IT backgrounds (Mechanical, Civil, B.Com, Arts). All our courses start from ground zero with fundamental logic building.'
  },
  {
    question: 'What happens if I miss a live training class?',
    answer: 'No worries! All live classes are recorded in HD and uploaded to your student LMS portal within 2 hours. You can also attend backup classes with other ongoing batches.'
  },
  {
    question: 'Do you provide recognized course completion certificates?',
    answer: 'Yes, you will receive an ISO 9001:2015 certified course completion certificate along with global vendor certification guidance (SAP, AWS, ISTQB, Oracle).'
  },
  {
    question: 'Are easy monthly installment (EMI) fee options available?',
    answer: 'Yes, we provide 0% interest EMI options with no upfront burden so you can learn comfortably while managing your budget.'
  }
];

export const BRANCH_LOCATIONS = [
  {
    city: 'Chennai',
    name: 'Anna Salai (Head Office)',
    address: 'No. 123, Anna Salai, Near Thousand Lights Metro, Chennai – 600 002',
    phone: '+91 98765 43210',
    timing: 'Mon - Sun: 8:00 AM - 9:00 PM'
  },
  {
    city: 'Chennai',
    name: 'Velachery Campus',
    address: 'Plot 45, 100 Feet Bypass Road, Opposite Phoenix Mall, Velachery, Chennai – 600 042',
    phone: '+91 98765 43211',
    timing: 'Mon - Sun: 8:00 AM - 9:00 PM'
  },
  {
    city: 'Chennai',
    name: 'OMR IT Corridor',
    address: 'IT Highway Road, Near Tidal Park, Thoraipakkam, OMR, Chennai – 600 096',
    phone: '+91 98765 43212',
    timing: 'Mon - Sun: 8:00 AM - 8:30 PM'
  },
  {
    city: 'Bangalore',
    name: 'BTM Layout Campus',
    address: 'Outer Ring Road, 2nd Stage, BTM Layout, Bangalore – 560 076',
    phone: '+91 98765 43213',
    timing: 'Mon - Sun: 8:00 AM - 9:00 PM'
  }
];

export const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Priya S',
    role: 'Data Analyst',
    company: 'Leading MNC, Chennai',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    comment: 'iCLP gave me the right guidance and very practical training. I am now working as a Data Analyst at ₹7.2 LPA!',
    rating: 5,
    course: 'Data Analytics Mastery'
  },
  {
    id: 't2',
    name: 'Arun K',
    role: 'SAP Consultant',
    company: 'Tech Mahindra, Bangalore',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop',
    comment: 'The trainers are knowledgeable and very supportive. The placement support really helped me land my dream SAP role.',
    rating: 5,
    course: 'SAP Functional & Technical'
  },
  {
    id: 't3',
    name: 'Divya R',
    role: 'Software Tester',
    company: 'Cognizant, Chennai',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    comment: 'Great learning experience with practical exposure. Highly recommended for anyone starting their career in IT!',
    rating: 5,
    course: 'Testing Tools (Selenium)'
  }
];

export const HIGHLIGHT_STATS = [
  { value: '10+', label: 'Years of Excellence', icon: 'GraduationCap' },
  { value: '5,000+', label: 'Students Trained', icon: 'Users' },
  { value: '500+', label: 'Hiring Partners', icon: 'Briefcase' },
  { value: '90%', label: 'Placement Success', icon: 'TrendingUp' },
];
