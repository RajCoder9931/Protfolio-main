import inavsysLogo from "./assets/ns-logo.webp";
import argosmobLogo from "./assets/Argosmob.jpg";
import agarwalTaxconLogo from "./assets/agarwal-taxcon-logo.jpg"
const experiences = [
  {
    role: "Web Developer & Digital Marketing — Agarwal Taxcon Private Limited",
    company: "Agarwal Taxcon Private Limited",
    logo: agarwalTaxconLogo,
    date: "Jul 2026 – Present",
    description:
      "Working on web development, digital marketing, and paid advertising campaigns for multiple clients across India and international markets.",
    points: [
      "Developing and maintaining client websites while contributing to frontend development and website optimization.",
      "Planning, creating, and managing Meta Ads campaigns for multiple clients across different industries.",
      "Running lead generation, brand awareness, service promotion, and engagement campaigns for both Indian and international audiences.",
      "Managing complete ad campaign setup including audience research, location targeting, creatives, primary text, headlines, placements, budgets, and optimization.",
      "Working on retargeting campaigns and audience optimization to improve lead quality and campaign performance.",
      "Troubleshooting and resolving Meta Ads issues related to audience targeting, retargeting, ad delivery, budget limitations, campaign configuration, and account-related problems.",
      "Monitoring campaign performance and optimizing campaigns based on metrics such as CTR, CPL, reach, engagement, and lead quality.",
      "Working with Meta Business Suite, Facebook Ads Manager, Instagram, and other digital marketing tools for client campaigns.",
    ],
    tech:
      "React.js, JavaScript, WordPress, Meta Ads, Facebook Ads, Instagram Ads, Meta Business Suite, Lead Generation, Retargeting, Digital Marketing",
  },

  {
    role: "Independent Full Stack Developer",
    company: "Self-Employed / Personal Projects",
    date: "Jun 2026 – Present",
    description:
      "Building AI-powered applications, browser extensions, and full-stack web products while exploring automation and productivity solutions.",
    points: [
      "Developed AI-powered job application automation tools and productivity extensions.",
      "Built browser extensions using JavaScript and Chrome Extension APIs.",
      "Designed and deployed full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Integrated AI APIs for content generation, automation, and workflow optimization.",
      "Managed deployment, maintenance, and version control of multiple independent projects.",
    ],
    tech:
      "React.js, Node.js, Express.js, MongoDB, JavaScript, Chrome Extension API, AI APIs, Git",
  },

  {
    role: "Full Stack Developer & Digital Marketing — Inavsys IT Consultant (Navsant Group)",
    company: "Inavsys IT Consultant",
    logo: inavsysLogo,
    date: "Dec 2025 – May 2026",
    description:
      "Working on ERP systems and recruitment CRM platforms while also contributing to digital marketing and paid advertising campaigns for multiple clients.",
    points: [
      "Developing and optimizing frontend for ERP systems to improve usability and workflow efficiency.",
      "Collaborating on backend APIs and system architecture using Node.js and Express.js.",
      "Building a recruitment CRM platform with candidate tracking and hiring workflow management.",
      "Integrating AI-based resume screening system for automated candidate shortlisting.",
      "Deploying and managing backend services (Python + MongoDB) on VPS for high availability.",
      "Created and managed Meta Ads campaigns for multiple clients across different industries.",
      "Worked on lead generation, brand awareness, engagement, and service promotion campaigns based on client requirements.",
      "Performed audience research, location targeting, campaign setup, budget management, and ongoing ad optimization.",
      "Worked on retargeting campaigns and audience optimization to improve campaign performance and lead quality.",
      "Troubleshot and resolved Meta Ads issues related to targeting, campaign delivery, audience configuration, and ad performance.",
    ],
    tech:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Python, VPS, Git, Meta Ads, Facebook Ads, Instagram Ads, Retargeting",
  },

  {
    role: "Full Stack Developer (Intern + Contract) — Argosmob",
    company: "Argosmob",
    logo: argosmobLogo,
    date: "Jun 2025 – Sep 2025",
    description:
      "Contributed to building scalable web applications including social media and e-commerce platforms.",
    points: [
      "Developed a pet-centric social media platform with posts, likes, comments, and real-time chat functionality.",
      "Built and integrated RESTful APIs ensuring seamless frontend-backend communication.",
      "Designed and implemented a pet management system for user profiles.",
      "Worked on a multi-role e-commerce system (Admin, Vendor, Sub-vendor) with full-stack development.",
      "Improved API performance and optimized data handling for better scalability.",
    ],
    tech:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, Git",
  },

  {
    role: "Full Stack Developer — Inventory Management System (Client Project)",
    company: "Client Project",
    date: "Jan 2023 – Apr 2023",
    description:
      "Delivered a complete inventory and billing system for business operations.",
    points: [
      "Built modules for billing, employee management, and customer handling.",
      "Designed responsive UI using HTML, CSS, and JavaScript.",
      "Developed backend using PHP and MySQL with secure data handling.",
      "Delivered a stable and user-friendly system tailored to client requirements.",
    ],
    tech: "HTML, CSS, JavaScript, PHP, MySQL",
  },

  {
    role: "Freelance Digital Marketing & Paid Ads Specialist",
    company: "Freelance",
    date: "2025 – Present",
    description:
      "Managing product and performance advertising campaigns for e-commerce and online businesses across multiple platforms.",
    points: [
      "Created and managed product advertising campaigns for Meesho and other e-commerce platforms.",
      "Worked on product-focused advertising to improve visibility, traffic, and potential conversions.",
      "Managed audience targeting, retargeting, campaign optimization, and performance monitoring.",
      "Analyzed campaign performance and adjusted targeting, creatives, budgets, and placements accordingly.",
      "Built approximately 1 year of professional hands-on experience in digital marketing and paid advertising.",
    ],
    tech:
      "Meta Ads, Facebook Ads, Instagram Ads, E-commerce Advertising, Product Ads, Retargeting, Audience Targeting, Campaign Optimization",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Experience
        </h2>

        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md border hover:shadow-lg transition-all duration-300"
            >
              {/* Logo + Title */}
              <div className="flex items-center gap-4">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-15 h-15 object-contain"
                  />
                )}

                <div>
                  <h3 className="text-xl font-semibold text-indigo-600">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-slate-500">{exp.date}</p>
                </div>
              </div>

              <p className="mt-4 text-slate-700">{exp.description}</p>

              <ul className="mt-3 list-disc list-inside text-slate-600">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="mt-4">
                <span className="font-semibold">Tech Used:</span>{" "}
                <span className="text-slate-700">{exp.tech}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;