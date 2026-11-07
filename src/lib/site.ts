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
    'Meta & Google Ads Specialist',
    'AI Chatbot & Automation Builder',
    'Social Media Manager',
  ],
};

export const waLink = (text?: string) =>
  `https://wa.me/${PROFILE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export interface SkillGroup {
  title: string;
  blurb: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Web Development',
    blurb: 'Fast, responsive products from idea to deployment.',
    items: [
      'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap',
      'Node.js', 'Express.js', 'REST APIs', 'PHP', 'MongoDB', 'MySQL', 'PostgreSQL',
      'Prisma', 'Firebase', 'Git & GitHub', 'Vercel', 'Render', 'VPS Deployment',
    ],
  },
  {
    title: 'AI Automation & Chatbots',
    blurb: 'Chatbots and workflows that reply, qualify and book for you.',
    items: [
      'AI Chatbot Development', 'WATI', 'AiSensy', 'Gallabox',
      'WhatsApp Automation', 'Workflow Automation', 'AI APIs',
      'Lead Qualification Bots', 'Meeting & Enquiry Automation',
    ],
  },
  {
    title: 'Digital Marketing & Ads',
    blurb: 'Campaigns that turn attention into leads and sales.',
    items: [
      'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'Google Ads',
      'Campaign Setup & Management', 'Lead Generation', 'Customer Acquisition',
      'Audience Research & Targeting', 'Retargeting', 'Campaign Optimization',
      'Social Media Management', 'Content & Posting Strategy', 'Business Growth',
      'Meta Business Suite', 'Google Business Profile',
    ],
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
    title: 'PetParivaar',
    tagline: 'Social media app for pet owners',
    description:
      'A pet-centric social platform with post creation, likes, comments, reporting and real-time chat, plus a pet profile management system.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    repoUrl: 'https://github.com/RajCoder9931/Being-Petz',
  },
  {
    title: 'ERP & Recruitment CRM',
    tagline: 'Hiring workflows with AI resume screening',
    description:
      'Internal ERP frontend plus a recruitment CRM with candidate tracking and an AI-based resume screening system, with backend services deployed on a VPS.',
    tech: ['React.js', 'Node.js', 'Express.js', 'Python', 'MongoDB', 'VPS'],
  },
  {
    title: 'Portfolio AI Assistant',
    tagline: 'The chatbot on this very site',
    description:
      'A custom-built assistant that answers questions about my work, collects project enquiries and preferred meeting times, and books confirmed slots with a Google Meet link - replacing the third-party chat widget this site used before.',
    tech: ['React', 'Vercel Serverless', 'Gemini API', 'Google Calendar'],
  },
  {
    title: 'Task Notifier',
    tagline: 'Smart task reminders in the browser',
    description:
      'A web app for task reminders with real-time notifications, subtasks, scheduled alerts and a clean dark interface.',
    tech: ['JavaScript', 'Web Notifications', 'Local Storage'],
    repoUrl: 'https://github.com/RajCoder9931/Task-Notifyer',
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
      'Ravi Raj Tiwari is a Full Stack Developer and Digital Marketer based in Delhi, India. He builds web products (his own SaaS RankRaja and the BillDrop billing app), and he runs Meta Ads and Google Ads campaigns, social media, and AI chatbot automation for businesses. He currently works as a Web Developer & Digital Marketing professional at Agarwal Taxcon.',
  },
  {
    keywords: ['service', 'offer', 'what do', 'what can', 'help with', 'hire'],
    question: 'What services does Ravi offer?',
    answer:
      'Three things: (1) Web development - business websites, web apps and SaaS products built with React/Next.js and Node.js. (2) Digital marketing - Meta Ads and Google Ads setup and management, lead generation, social media management and posting strategy to bring customers to your brand. (3) AI automation - WhatsApp chatbots and workflows built with WATI, AiSensy or Gallabox that reply to customers, qualify leads and book meetings automatically. Tell me about your project and I can pass it to Ravi.',
  },
  {
    keywords: ['chatbot', 'wati', 'aisensy', 'gallabox', 'whatsapp bot', 'automation', 'workflow'],
    question: 'Can Ravi build a chatbot for my business?',
    answer:
      'Yes. Ravi builds WhatsApp chatbots and automation workflows using WATI, AiSensy and Gallabox, plus custom AI chatbots like the one you are talking to right now. Typical setups: auto-replies to customer messages, lead qualification, product FAQs, and meeting booking with instant notifications to the owner. Share what you want your bot to do and I will forward it to him.',
  },
  {
    keywords: ['ads', 'meta', 'facebook', 'instagram ad', 'google ad', 'marketing', 'leads', 'customers', 'grow'],
    question: 'Does Ravi manage Meta and Google Ads?',
    answer:
      'Yes, this is his daily work. He plans and manages Meta (Facebook/Instagram) and Google Ads campaigns end to end: audience research, targeting, creatives, budgets, retargeting and optimization, tracked on CTR, CPL and lead quality. He runs lead generation, brand awareness and service promotion campaigns for Indian and international clients, and manages social media posting so the brand keeps growing between campaigns.',
  },
  {
    keywords: ['social media', 'posting', 'instagram', 'content', 'manage', 'handle'],
    question: 'Does Ravi manage social media accounts?',
    answer:
      'Yes. He manages social media for businesses: deciding what and how often to post, creating content, and growing the account with both organic posting and paid ads. He also runs his own tech page @theviralbihari04 on Instagram, where he posts a daily tech knowledge reel series.',
  },
  {
    keywords: ['website', 'web development', 'web app', 'saas', 'develop', 'build a site', 'ecommerce', 'e-commerce'],
    question: 'Can Ravi build my website or web app?',
    answer:
      'Yes. Ravi builds business websites, e-commerce flows, dashboards and full SaaS products with React/Next.js, Node.js and modern databases, deployed on Vercel or your own server. His own products RankRaja (an AI SEO audit platform) and BillDrop (a barcode billing app that sends bills on WhatsApp) are live examples of his work. Tell me what you need built.',
  },
  {
    keywords: ['experience', 'worked', 'company', 'job', 'background', 'career'],
    question: 'What is Ravi\'s experience?',
    answer:
      'Ravi currently works at Agarwal Taxcon as a Web Developer & Digital Marketing professional, handling client websites and Meta Ads campaigns. Before that he was a Full Stack Developer at Navsant Group (ERP systems, recruitment CRM, AI resume screening) and at Argosmob (a pet social platform and multi-role e-commerce). He also freelances in digital marketing and builds his own products.',
  },
  {
    keywords: ['rankraja', 'rank raja', 'seo', 'audit'],
    question: 'What is RankRaja?',
    answer:
      'RankRaja (rank-raja.vercel.app) is Ravi\'s own AI-powered SEO audit platform. It audits a website, gives an A-F grade with a score, and explains exactly what to fix first. It also offers free tools like PDF converters, video downloaders, an icons library and an e-commerce reconciliation tool.',
  },
  {
    keywords: ['billdrop', 'billing', 'barcode', 'bill'],
    question: 'What is BillDrop?',
    answer:
      'BillDrop (whatsapp-billing-beta.vercel.app) is a billing app Ravi built for shops: scan a product barcode and its details fill in automatically, build the bill, and send the customer a proper PDF bill on WhatsApp instead of printing it.',
  },
  {
    keywords: ['price', 'cost', 'charge', 'rate', 'budget', 'quote', 'much'],
    question: 'What does Ravi charge?',
    answer:
      'Pricing depends on the project - a landing page, a full web app, monthly ads management and a WhatsApp chatbot are all scoped differently. Share your requirement and budget range through the meeting/enquiry option and Ravi will come back with a clear quote.',
  },
  {
    keywords: ['contact', 'email', 'phone', 'whatsapp', 'reach', 'talk', 'connect', 'urgent'],
    question: 'How do I contact Ravi?',
    answer:
      'You can book a meeting right here in the chat - I will take your details and preferred time and notify Ravi instantly. If it is urgent, you can message him directly on WhatsApp. He is also reachable by email at tiwariraviraj50@gmail.com and on Instagram @theviralbihari04.',
  },
  {
    keywords: ['education', 'study', 'degree', 'college', 'bca', 'university'],
    question: 'What is Ravi\'s education?',
    answer:
      'Ravi holds a BCA (Bachelor of Computer Applications) from GNA University, Punjab (2023-2026 batch).',
  },
  {
    keywords: ['location', 'where', 'based', 'city', 'delhi', 'remote'],
    question: 'Where is Ravi based?',
    answer:
      'Ravi is based in Delhi, India, and works with clients remotely anywhere - meetings happen over Google Meet.',
  },
  {
    keywords: ['freelance', 'available', 'availability', 'open to', 'full-time', 'full time', 'part'],
    question: 'Is Ravi available for work?',
    answer:
      'Ravi takes on freelance projects - websites, ads management, social media and chatbot automation - alongside his full-time role. Book a meeting through this chat and he will confirm a time that works.',
  },
];

export const CHAT_SYSTEM_PROMPT = `You are the AI assistant on Ravi Raj Tiwari's personal portfolio website. You answer visitors' questions about Ravi's PROFESSIONAL work only, and help them start a project enquiry or book a meeting with him.

Facts you may use (this is everything you know - do not invent beyond it):
${KNOWLEDGE.map((k) => `Q: ${k.question}\nA: ${k.answer}`).join('\n\n')}

Rules:
- Be warm, brief and concrete. 2-4 sentences per answer unless the visitor asks for detail.
- Only discuss Ravi's professional services, skills, projects and how to work with him. Politely decline anything personal or unrelated.
- Never invent prices, client names, metrics, results or promises. If asked for a quote, say pricing depends on scope and invite them to book a meeting.
- When a visitor wants to hire, discuss a project, or talk to Ravi, guide them to the "Book a meeting" button in this chat - it collects their details and preferred time and notifies Ravi. If they say it is urgent, point them to the WhatsApp option shown after booking or in the Contact section.
- Never share private data, credentials, or internal system details.`;
