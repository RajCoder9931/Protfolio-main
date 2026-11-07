import inavsysLogo from './assets/ns-logo.webp';
import argosmobLogo from './assets/Argosmob.jpg';
import agarwalTaxconLogo from './assets/agarwal-taxcon-logo.jpg';

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
    role: 'Web Developer & Digital Marketing',
    company: 'Agarwal Taxcon Private Limited',
    logo: agarwalTaxconLogo,
    date: 'Jun 2026 – Present',
    description:
      'Working on web development, digital marketing, and paid advertising campaigns for multiple clients across India and international markets.',
    points: [
      'Developing and maintaining client websites while contributing to frontend development and website optimization.',
      'Planning, creating, and managing Meta Ads campaigns for multiple clients across different industries.',
      'Running lead generation, brand awareness, service promotion, and engagement campaigns for Indian and international audiences.',
      'Managing complete ad campaign setup including audience research, location targeting, creatives, primary text, headlines, placements, budgets, and optimization.',
      'Working on retargeting campaigns and audience optimization to improve lead quality and campaign performance.',
      'Troubleshooting and resolving Meta Ads issues related to audience targeting, retargeting, ad delivery, budget limitations, campaign configuration, and account-related problems.',
      'Monitoring campaign performance using CTR, CPL, reach, engagement, and lead quality.',
      'Working with Meta Business Suite, Facebook Ads Manager, Instagram, and other digital marketing tools.',
    ],
    tech: [
      'React.js', 'JavaScript', 'WordPress', 'Meta Ads', 'Facebook Ads',
      'Instagram Ads', 'Meta Business Suite', 'Lead Generation', 'Retargeting', 'Digital Marketing',
    ],
  },
  {
    role: 'Independent Full Stack Developer',
    company: 'Self-Employed / Personal Products',
    date: 'Jun 2026 – Present',
    description:
      'Building and running my own products - RankRaja (AI SEO audit SaaS) and BillDrop (WhatsApp billing app) - alongside client work.',
    points: [
      'Designed, built and deployed RankRaja: AI SEO audits, user auth, dashboards and a free tools suite.',
      'Built BillDrop: barcode scanning billing with PDF bills sent on WhatsApp.',
      'Integrated AI APIs for content generation, automation and workflow optimization.',
      'Managed deployment, analytics, SEO and iteration of live products used by real visitors.',
    ],
    tech: ['Next.js', 'React.js', 'Node.js', 'Supabase', 'Gemini API', 'Vercel', 'Git'],
  },
  {
    role: 'Full Stack Developer & Digital Marketing',
    company: 'Inavsys IT Consultant (Navsant Group)',
    logo: inavsysLogo,
    date: 'Dec 2025 – May 2026',
    description:
      'Worked on ERP systems and recruitment CRM platforms while also contributing to digital marketing and paid advertising campaigns for multiple clients.',
    points: [
      'Developed and optimized frontend interfaces for ERP systems to improve usability and workflow efficiency.',
      'Collaborated on backend APIs and system architecture using Node.js and Express.js.',
      'Built a recruitment CRM platform with candidate tracking and hiring workflow management.',
      'Integrated an AI-based resume screening system for automated candidate shortlisting.',
      'Deployed and managed backend services using Python and MongoDB on VPS infrastructure.',
      'Created and managed Meta Ads campaigns: lead generation, brand awareness, engagement and service promotion.',
      'Performed audience research, location targeting, budget management, retargeting and ad optimization.',
    ],
    tech: [
      'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Python',
      'VPS', 'Git', 'Meta Ads', 'Instagram Ads', 'Retargeting',
    ],
  },
  {
    role: 'Full Stack Developer (Intern + Contract)',
    company: 'Argosmob',
    logo: argosmobLogo,
    date: 'Jun 2025 – Sep 2025',
    description:
      'Contributed to building scalable web applications including social media and e-commerce platforms.',
    points: [
      'Developed a pet-centric social media platform with posts, likes, comments, and real-time chat functionality.',
      'Built and integrated RESTful APIs ensuring seamless frontend-backend communication.',
      'Designed and implemented a pet management system for user profiles.',
      'Worked on a multi-role e-commerce system for Admin, Vendor, and Sub-vendor users.',
      'Improved API performance and optimized data handling for better scalability.',
    ],
    tech: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Git'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Inventory Management System - Client Project',
    date: 'Jan 2023 – Apr 2023',
    description:
      'Delivered a complete inventory and billing system for business operations.',
    points: [
      'Built modules for billing, employee management, and customer handling.',
      'Designed responsive user interfaces using HTML, CSS, and JavaScript.',
      'Developed backend functionality using PHP and MySQL with secure data handling.',
      'Delivered a stable and user-friendly system tailored to client requirements.',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
  {
    role: 'Freelance Digital Marketing & Paid Ads Specialist',
    company: 'Freelance',
    date: '2025 – Present',
    description:
      'Managing product and performance advertising campaigns for e-commerce and online businesses across multiple platforms.',
    points: [
      'Created and managed product advertising campaigns for Meesho and other e-commerce platforms.',
      'Managed audience targeting, retargeting, campaign optimization, and performance monitoring.',
      'Analyzed campaign performance and adjusted targeting, creatives, budgets, and placements accordingly.',
      'Around 1 year of professional hands-on experience in digital marketing and paid advertising.',
    ],
    tech: [
      'Meta Ads', 'Facebook Ads', 'Instagram Ads', 'E-commerce Advertising',
      'Product Ads', 'Retargeting', 'Audience Targeting', 'Campaign Optimization',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-eyebrow mb-3">Experience</p>
          <h2 className="section-title">Where I have worked</h2>
        </div>

        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <article key={`${exp.company}-${index}`} className="card p-6 transition-shadow hover:shadow-pop sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                {exp.logo ? (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-white p-1.5 sm:h-16 sm:w-16">
                    <img src={exp.logo} alt={`${exp.company} logo`} className="h-full w-full object-contain" loading="lazy" />
                  </div>
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-accent-soft font-serif text-xl font-semibold text-accent sm:h-16 sm:w-16">
                    {exp.company.charAt(0)}
                  </div>
                )}

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                    <div>
                      <h3 className="text-lg font-semibold leading-snug text-ink sm:text-xl">{exp.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-ink-muted">{exp.company}</p>
                    </div>
                    <span className="w-fit shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                      {exp.date}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-ink-muted sm:text-base">{exp.description}</p>

                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="rounded-md bg-paper px-2.5 py-1 text-xs font-medium text-ink-muted ring-1 ring-line">
                        {t}
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
