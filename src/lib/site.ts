// Single source of truth for public professional facts shown on the site.
// Everything here is public-facing professional information only.

export const PROFILE = {
  name: 'Ravi Raj Tiwari',
  shortName: 'Ravi',
  tagline: 'Full Stack Developer & Digital Marketer',
  location: 'Delhi, India',
  email: 'tiwariraviraj50@gmail.com',
  github: 'https://github.com/RajCoder9931/',
  linkedin: 'https://www.linkedin.com/in/ravi-raj-tiwari-7770a724b/',
  instagram: 'https://www.instagram.com/theviralbihari04',
  instagramHandle: '@theviralbihari04',
  // Shown publicly for urgent enquiries. wa.me link built from this.
  whatsappNumber: '919931993138',
  roles: [
    'Full Stack Developer',
    'Creative Designer',
    'Web Developer',
    'Frontend Developer',
    'Digital Marketing Expert',
  ],
};

export const waLink = (text?: string) =>
  `https://wa.me/${PROFILE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export interface SkillGroup {
  title: string;
  blurb?: string;
  practice?: string[];
  items: string[];
}

// Ravi's own category-wise skills, restored from his original portfolio at his
// request (22:31 reference screenshots + "mere ko isme ye chahiye").
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Digital Marketing',
    blurb: 'Paid campaigns and lead generation for brands, with audience targeting and ongoing performance analysis.',
    practice: ['India and international client campaigns', 'Product ads, retargeting and campaign optimization'],
    items: [
      'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Lead Generation',
      'Retargeting', 'Audience Targeting', 'Campaign Optimization',
      'Product Advertising',
    ],
  },
  {
    title: 'Frontend',
    blurb: 'Responsive interfaces for web apps, admin dashboards and customer-facing products.',
    practice: ['React interfaces for ERP and recruitment workflows', 'E-commerce screens and mobile-friendly billing flows'],
    items: [
      'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Angular', 'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'AI & Automation',
    blurb: 'AI integrations and chatbot workflows that connect useful tools with everyday business tasks.',
    practice: ['AI SEO guidance in RankRaja', 'Resume screening and WhatsApp chatbot workflows'],
    items: [
      'AI APIs', 'AI Automation', 'Chatbot Development', 'WATI', 'AiSensy',
      'WhatsApp Automation', 'Workflow Automation',
    ],
  },
  {
    title: 'Tools & DevOps',
    blurb: 'Version control and deployment across web products, APIs and browser-based tools.',
    practice: ['Vercel deployments for RankRaja and BillDrop', 'VPS deployment for ERP and recruitment services'],
    items: ['Git', 'GitHub', 'Vercel', 'Render', 'VPS', 'Chrome Extension API'],
  },
  {
    title: 'Backend',
    blurb: 'API development, authentication and business logic for full-stack applications.',
    practice: ['Node.js and Express services for social apps', 'Recruitment workflows with Python integration'],
    items: ['Node.js', 'Express.js', 'PHP', 'Python', 'REST APIs'],
  },
  {
    title: 'Database',
    blurb: 'Database integration for user accounts, application records and full-stack product workflows.',
    practice: ['MongoDB-backed ERP and recruitment workflows', 'Supabase Postgres for RankRaja account data'],
    items: ['MongoDB', 'MySQL', 'Firebase', 'PostgreSQL'],
  },
  {
    title: 'CMS & Web',
    blurb: 'Business websites built with WordPress and Elementor, alongside custom web development.',
    practice: ['Responsive layouts and website customization', 'Website optimization and ongoing client web work'],
    items: ['WordPress', 'Elementor', 'Website Development', 'Website Optimization'],
  },
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    title: 'RankRaja',
    tagline: 'AI SEO audit platform + free web tools',
    description:
      'My own SaaS product. Runs full SEO audits with an A-F grade, a score and clear fix-first guidance written by AI, plus a growing set of free tools: PDF converters, video downloaders, an icons library and an e-commerce reconciliation tool. Google sign-in and email signup, per-user dashboards, branded PDF/Excel reports.',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Gemini API', 'Kinde Auth', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://rank-raja.vercel.app',
    featured: true,
  },
  {
    title: 'BillDrop',
    tagline: 'Barcode billing that sends the bill on WhatsApp',
    description:
      'Scan any packaged product and its name, pack size and price fill in automatically; build the bill, preview a clean receipt and send it to the customer on WhatsApp as a real PDF. Includes price-list import, product editing and list backup. Built mobile-first for shop counters.',
    tech: ['React', 'JavaScript', 'Vercel', 'WhatsApp Share', 'PDF Generation'],
    liveUrl: 'https://whatsapp-billing-beta.vercel.app',
    featured: true,
  },
  {
    title: 'School ERP',
    tagline: 'School management platform with role-based panels',
    description:
      'A school-management platform with separate admin, teacher, student and parent views. Includes class-wise attendance, test marks, report cards, homework, and fee records with printable receipts. Built with React and Supabase, with school-level access controls tested using synthetic data. The live demo is still in development.',
    tech: ['React', 'JavaScript', 'Supabase', 'PostgreSQL', 'Row Level Security', 'Render'],
    liveUrl: 'https://school-erp-demo-7o44.onrender.com',
    featured: true,
  },
  {
    title: 'PetParivaar',
    tagline: 'Social media app for pet owners',
    description:
      'A social platform built around pets and their owners. Members can create posts, like and comment on updates, report content and chat in real time. Pet profiles keep animal details alongside owner profiles. Built with a React interface, Node.js and Express APIs, MongoDB and Firebase for the social experience.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    liveUrl: 'https://beinersfrddg-petz.vercel.app',
  },
  {
    title: 'ERP & Recruitment CRM',
    tagline: 'Hiring workflows with AI resume screening',
    description:
      'An enterprise project covering internal ERP interfaces and recruitment workflows. The CRM brings candidate tracking, hiring stages and AI-based resume screening into one workflow. React interfaces connect with Node.js, Express and Python services, backed by MongoDB and deployed on a VPS.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'VPS'],
  },
  {
    title: 'Luna E-Commerce Admin',
    tagline: 'A workspace for store operations',
    description:
      'An e-commerce admin interface for managing products, orders and payments with API sync. The project includes catalogue and category management, customer records, coupons, memberships and role management. It brings store-management screens together in one admin workspace. A live demo is not currently available.',
    tech: ['HTML', 'CSS', 'JavaScript', 'REST APIs'],
  },
  {
    title: 'CRD Placement Mobile App',
    tagline: 'College placement management on mobile',
    description:
      'A React Native mobile application for college placement workflows. Students can apply for jobs with a one-click application flow, while ATS-based resume shortlisting supports candidate selection. The application connects to a Node.js and Express backend with MongoDB and JWT authentication.',
    tech: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
  },
  {
    title: 'Task Notifier',
    tagline: 'Smart task reminders in the browser',
    description:
      'A browser-based task reminder app with a dark interface for organising everyday work. Tasks can include subtasks and scheduled alerts, with browser notifications for reminders. JavaScript and local storage support the task workflow without adding a separate desktop application.',
    tech: ['JavaScript', 'Web Notifications', 'Local Storage'],
    liveUrl: 'https://tasknotify.netlify.app/',
    repoUrl: 'https://github.com/RajCoder9931/Task-Notifyer',
  },
  {
    title: 'Learn & Earn Quiz',
    tagline: 'Quiz app with scoring · login preview',
    description:
      'A responsive quiz app built with HTML, CSS and JavaScript. It presents random questions, tracks answers and calculates a score as part of the quiz experience. The interface adapts to smaller screens so the same question-and-answer flow can be used on a phone or a desktop.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://learnandearnquiz.netlify.app/',
    repoUrl: 'https://github.com/RajCoder9931/Quiz-app',
  },
];

export interface QAEntry {
  keywords: string[];
  question: string;
  answer: string;
}

// Public knowledge the assistant can answer from, even without an AI key.
export const KNOWLEDGE: QAEntry[] = [
  {
    keywords: ['who', 'about', 'ravi', 'introduce', 'yourself'],
    question: 'Who is Ravi Raj Tiwari?',
    answer:
      "Ravi Raj Tiwari is a Delhi-based Full Stack Developer and Digital Marketer. His work spans web applications, paid advertising and chatbot automation.\n\nHis own products include RankRaja, an AI SEO audit platform, and BillDrop, a billing application.",
  },
  {
    keywords: ['service', 'offer', 'what do', 'what can', 'help with', 'hire'],
    question: 'What services does Ravi offer?',
    answer:
      "Ravi offers three core services:\n\n• Web development: business websites, web applications and SaaS products.\n\n• Digital marketing: Meta and Google Ads, lead generation and social media management.\n\n• AI automation: WhatsApp chatbots and business workflows.\n\nWhich service would you like to discuss?",
  },
  {
    keywords: ['chatbot', 'wati', 'aisensy', 'gallabox', 'whatsapp bot', 'automation', 'workflow'],
    question: 'Can Ravi build a chatbot for my business?',
    answer:
      "Ravi builds WhatsApp chatbots and workflows with WATI, AiSensy and Gallabox.\n\n• Customer auto-replies and FAQs\n• Lead qualification\n• Business workflow automation\n\nMeeting booking on this portfolio is not connected yet. Contact Ravi by email or WhatsApp to discuss your setup.",
  },
  {
    keywords: ['ads', 'meta', 'facebook', 'instagram ad', 'google ad', 'marketing', 'leads', 'customers', 'grow'],
    question: 'Does Ravi manage Meta and Google Ads?',
    answer:
      "Ravi provides Meta and Google Ads campaign setup and management. His work includes audience targeting, retargeting, campaign optimization and performance analysis.\n\nWhat are your business goals and target audience?",
  },
  {
    keywords: ['social media', 'posting', 'instagram', 'content', 'manage', 'handle'],
    question: 'Does Ravi manage social media accounts?',
    answer:
      "Ravi helps businesses with social media management, content planning and posting strategy, alongside paid advertising.\n\nWhich platforms would you like support with?",
  },
  {
    keywords: ['website', 'web development', 'web app', 'saas', 'develop', 'build a site', 'ecommerce', 'e-commerce'],
    question: 'Can Ravi build my website or web app?',
    answer:
      "Ravi builds business websites, web applications, e-commerce interfaces and SaaS products using React/Next.js and Node.js.\n\nYou can explore RankRaja and BillDrop in the Projects section. What type of website or application do you need?",
  },
  {
    keywords: ['experience', 'worked', 'company', 'job', 'background', 'career'],
    question: 'What is Ravi\'s experience?',
    answer:
      "Ravi works in web development and digital marketing at Agarwal Taxcon. His earlier full-stack roles include ERP and recruitment workflows at Navsant Group, and social and e-commerce applications at Argosmob.\n\nThe Experience section provides more detail.",
  },
  {
    keywords: ['rankraja', 'rank raja', 'seo', 'audit'],
    question: 'What is RankRaja?',
    answer:
      "RankRaja is Ravi's AI-powered SEO audit platform. It provides website scores and guidance on what to improve, alongside tools for PDFs, media downloads and e-commerce reconciliation.\n\nVisit: https://rank-raja.vercel.app",
  },
  {
    keywords: ['billdrop', 'billing', 'barcode', 'bill'],
    question: 'What is BillDrop?',
    answer:
      "BillDrop is Ravi's mobile-friendly billing app for shops. It supports barcode-based product entry, receipt previews and sharing PDF bills through WhatsApp.\n\nVisit: https://whatsapp-billing-beta.vercel.app",
  },
  {
    keywords: ['price', 'cost', 'charge', 'rate', 'budget', 'quote', 'much'],
    question: 'What does Ravi charge?',
    answer:
      "Pricing depends on your project scope.\n\nShare your requirements and budget with Ravi by email or WhatsApp for a quote.",
  },
  {
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'talk', 'connect', 'urgent'],
    question: 'How do I contact Ravi?',
    answer:
      "Contact Ravi directly:\n\n• Email: tiwariraviraj50@gmail.com\n• WhatsApp: use the Contact section.\n\nMeeting booking and automatic notifications are not connected on this portfolio yet.",
  },
  {
    keywords: ['education', 'study', 'degree', 'college', 'bca', 'university'],
    question: 'What is Ravi\'s education?',
    answer:
      "Ravi holds a Bachelor of Computer Applications (BCA) from GNA University, Punjab, batch 2023-2026.",
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'delhi', 'remote'],
    question: 'Where is Ravi based?',
    answer:
      "Ravi is based in Delhi, India. Contact him by email or WhatsApp to discuss remote collaboration and a suitable meeting time.",
  },
  {
    keywords: ['freelance', 'available', 'availability', 'open to', 'full-time', 'full time', 'part'],
    question: 'Is Ravi available for work?',
    answer:
      "Ravi takes on freelance web development, digital marketing and chatbot projects.\n\nContact him by email or WhatsApp to check availability. This chat does not confirm a meeting.",
  },
];

export const CHAT_SYSTEM_PROMPT = `You are Solo AI, the AI assistant on Ravi Raj Tiwari's personal portfolio website. You answer visitors' questions about Ravi's PROFESSIONAL work only, and help them start a project enquiry or book a meeting with him.

Facts you may use (this is everything you know - do not invent beyond it):
${KNOWLEDGE.map((k) => `Q: ${k.question}\nA: ${k.answer}`).join('\n\n')}

Rules:
- Use a professional, approachable tone. Answer the visitor's question directly. Avoid hype, exclamation marks and promises about outcomes. Be brief and concrete. Use short paragraphs and plain-text bullets on separate lines for lists. Keep replies under 90 words unless asked for detail. Do not use markdown headings or bold markers.
- Only discuss Ravi's professional services, skills, projects and how to work with him. Politely decline anything personal or unrelated.
- Never invent prices, client names, metrics, results or promises. If asked for a quote, say pricing depends on scope and invite them to book a meeting.
- When a visitor wants to hire, discuss a project, or talk to Ravi, collect what they need in chat and point them to Ravi's email or WhatsApp from the Contact section. Instant meeting booking in this chat is being connected - never say a meeting is booked or that Ravi was notified. If they say it is urgent, point them to the WhatsApp option in the Contact section.
- Never share private data, credentials, or internal system details.`;

