import inavsysLogo from "./assets/ns-logo.webp";
import argosmobLogo from "./assets/Argosmob.jpg";
import agarwalTaxconLogo from "./assets/agarwal-taxcon-logo.jpg";

interface ExperienceItem {
  role: string;
  company: string;
  logo?: string;
  date: string;
  description: string;
  points: string[];
  tech: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Web Developer & Digital Marketing",
    company: "Agarwal Taxcon Private Limited",
    logo: agarwalTaxconLogo,
    date: "Jul 2026 – Present",
    description:
      "Working on web development, digital marketing, and paid advertising campaigns for multiple clients across India and international markets.",
    points: [
      "Developing and maintaining client websites while contributing to frontend development and website optimization.",
      "Planning, creating, and managing Meta Ads campaigns for multiple clients across different industries.",
      "Running lead generation, brand awareness, service promotion, and engagement campaigns for Indian and international audiences.",
      "Managing complete ad campaign setup including audience research, location targeting, creatives, primary text, headlines, placements, budgets, and optimization.",
      "Working on retargeting campaigns and audience optimization to improve lead quality and campaign performance.",
      "Troubleshooting and resolving Meta Ads issues related to audience targeting, retargeting, ad delivery, budget limitations, campaign configuration, and account-related problems.",
      "Monitoring campaign performance using CTR, CPL, reach, engagement, and lead quality.",
      "Working with Meta Business Suite, Facebook Ads Manager, Instagram, and other digital marketing tools.",
    ],
    tech: [
      "React.js",
      "JavaScript",
      "WordPress",
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Meta Business Suite",
      "Lead Generation",
      "Retargeting",
      "Digital Marketing",
    ],
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
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Chrome Extension API",
      "AI APIs",
      "Git",
    ],
  },

  {
    role: "Full Stack Developer & Digital Marketing",
    company: "Inavsys IT Consultant (Navsant Group)",
    logo: inavsysLogo,
    date: "Dec 2025 – May 2026",
    description:
      "Worked on ERP systems and recruitment CRM platforms while also contributing to digital marketing and paid advertising campaigns for multiple clients.",
    points: [
      "Developed and optimized frontend interfaces for ERP systems to improve usability and workflow efficiency.",
      "Collaborated on backend APIs and system architecture using Node.js and Express.js.",
      "Built a recruitment CRM platform with candidate tracking and hiring workflow management.",
      "Integrated an AI-based resume screening system for automated candidate shortlisting.",
      "Deployed and managed backend services using Python and MongoDB on VPS infrastructure.",
      "Created and managed Meta Ads campaigns for multiple clients across different industries.",
      "Worked on lead generation, brand awareness, engagement, and service promotion campaigns.",
      "Performed audience research, location targeting, campaign setup, budget management, and ad optimization.",
      "Worked on retargeting campaigns and audience optimization to improve campaign performance.",
      "Troubleshot Meta Ads issues related to targeting, campaign delivery, audience configuration, and ad performance.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "VPS",
      "Git",
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Retargeting",
    ],
  },

  {
    role: "Full Stack Developer (Intern + Contract)",
    company: "Argosmob",
    logo: argosmobLogo,
    date: "Jun 2025 – Sep 2025",
    description:
      "Contributed to building scalable web applications including social media and e-commerce platforms.",
    points: [
      "Developed a pet-centric social media platform with posts, likes, comments, and real-time chat functionality.",
      "Built and integrated RESTful APIs ensuring seamless frontend-backend communication.",
      "Designed and implemented a pet management system for user profiles.",
      "Worked on a multi-role e-commerce system for Admin, Vendor, and Sub-vendor users.",
      "Improved API performance and optimized data handling for better scalability.",
    ],
    tech: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Git",
    ],
  },

  {
    role: "Full Stack Developer",
    company: "Inventory Management System — Client Project",
    date: "Jan 2023 – Apr 2023",
    description:
      "Delivered a complete inventory and billing system for business operations.",
    points: [
      "Built modules for billing, employee management, and customer handling.",
      "Designed responsive user interfaces using HTML, CSS, and JavaScript.",
      "Developed backend functionality using PHP and MySQL with secure data handling.",
      "Delivered a stable and user-friendly system tailored to client requirements.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
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
    tech: [
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "E-commerce Advertising",
      "Product Ads",
      "Retargeting",
      "Audience Targeting",
      "Campaign Optimization",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-gray-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            My Journey
          </p>

          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl lg:text-5xl">
            Experience
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-indigo-600" />
        </div>

        {/* Experience Cards */}
        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <article
              key={`${exp.company}-${index}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="p-5 sm:p-7 lg:p-8">
                {/* Header */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  {/* Logo */}
                  {exp.logo ? (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white p-2 shadow-sm sm:h-20 sm:w-20">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl font-bold text-indigo-600 sm:h-20 sm:w-20">
                      {exp.company.charAt(0)}
                    </div>
                  )}

                  {/* Job Information */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
                      <div className="min-w-0">
                        <h3 className="break-words text-lg font-bold leading-snug text-indigo-600 sm:text-xl lg:text-2xl">
                          {exp.role}
                        </h3>

                        <p className="mt-1 text-sm font-medium text-slate-600 sm:text-base">
                          {exp.company}
                        </p>
                      </div>

                      {/* Date */}
                      <span className="w-fit shrink-0 rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-600 sm:text-sm">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-6">
                  <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-800">
                    Key Responsibilities
                  </h4>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600 sm:text-base"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                        <span className="min-w-0">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 border-t border-slate-100 pt-5">
                  <h4 className="mb-3 text-sm font-semibold text-slate-800">
                    Tech & Tools
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((technology, i) => (
                      <span
                        key={i}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 sm:text-sm"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
