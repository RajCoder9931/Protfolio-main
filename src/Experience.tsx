import React from "react";

const experiences = [
  {
    role: "Full Stack Developer — Argosmob",
    date: "Aug 2024 – Sep 2024",
    description:
      "Worked as a Full Stack Developer where I contributed to building a pet-focused social media platform.",
    points: [
      "Developed core features like post creation, reporting, and user interaction.",
      "Implemented real-time chat and live updates using Firebase.",
      "Integrated REST APIs between frontend and backend.",
      "Built a Pet Management System for user-created pet profiles.",
    ],
    tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase",
  },
  {
    role: "Backend Developer — Argosmob (Internship)",
    date: "Jun 2024 – Aug 2024",
    description:
      "Completed a backend development internship focusing on scalable E-commerce architecture.",
    points: [
      "Developed role-based E-commerce panels (Admin, Vendor, Sub-Vendor, Super-Vendor).",
      "Created and optimized REST APIs for products, orders, and user management.",
      "Improved backend logic for smooth integration with React frontend.",
      "Worked closely with the team to enhance system performance.",
    ],
    tech: "Node.js, Express.js, MongoDB, JWT, Firebase, Git, Postman",
  },
  {
    role: "Full Stack Developer — Inventory Management System (Client Project)",
    date: "Jan 2023 – Apr 2023",
    description:
      "Delivered a complete inventory and billing system for a client’s business operations.",
    points: [
      "Built modules for billing, employee management, customer handling.",
      "Designed the interface using HTML, CSS, and JavaScript.",
      "Developed backend using PHP & MySQL with secure data storage.",
      "Delivered a stable, user-friendly system tailored to the client’s needs.",
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
              <h3 className="text-2xl font-semibold text-indigo-600">
                {exp.role}
              </h3>
              <p className="text-sm text-slate-500">{exp.date}</p>

              <p className="mt-3 text-slate-700">{exp.description}</p>

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
