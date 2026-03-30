import inavsysLogo from "./assets/ns-logo.webp";
import argosmobLogo from "./assets/Argosmob.jpg";

const experiences = [
  {
    role: "Full Stack Developer — Inavsys IT Consultant (Navsant Group)",
    company: "Inavsys IT Consultant",
    logo: inavsysLogo,
    date: "Dec 2025 – Present",
    description:
      "Working on ERP systems and recruitment CRM platforms, contributing to full-stack development and system design.",
    points: [
      "Developing and optimizing frontend for ERP systems to improve usability and workflow efficiency.",
      "Collaborating on backend APIs and system architecture using Node.js and Express.js.",
      "Building a recruitment CRM platform with candidate tracking and hiring workflow management.",
      "Integrating AI-based resume screening system for automated candidate shortlisting.",
      "Deploying and managing backend services (Python + MongoDB) on VPS for high availability.",
    ],
    tech:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Python, VPS, Git",
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
                    className="w-12 h-12 object-contain"
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