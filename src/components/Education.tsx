const education = [
  {
    id: 1,
    degree: 'BCA - Bachelor of Computer Applications',
    institution: 'GNA University, Phagwara, Punjab',
    duration: '2023 – 2026',
    points: ['Dean’s list 2023', 'Top scorer in Computer Science', 'Multiple programming projects'],
  },
  {
    id: 2,
    degree: 'Class 12 - Science',
    institution: 'Masrakh College, Masrakh, Bihar',
    duration: '2020 – 2022',
    points: ['1st rank in class', 'High scores in Physics, Chemistry and Mathematics'],
  },
  {
    id: 3,
    degree: 'Class 10',
    institution: 'S.N.G High School, Rampur Atuali, Saran, Bihar',
    duration: '2019 – 2020',
    points: ['1st rank in class', 'Highest marks in Hindi and Science'],
  },
];

const Education = () => {
  return (
    <section id="education" className="border-t border-line bg-white py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-eyebrow mb-3">Education</p>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-list space-y-5">
          {education.map((edu) => (
            <article key={edu.id} className="education-entry rounded-xl border border-line bg-[#f8f9fb] p-6 shadow-card sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                <h3 className="text-lg font-semibold leading-snug text-ink">{edu.degree}</h3>
                <span className="shrink-0 text-sm font-semibold text-accent">{edu.duration}</span>
              </div>
              <p className="mt-4 text-base font-medium text-ink-soft">{edu.institution}</p>
              <p className="mt-5 text-sm font-semibold text-ink">Achievements:</p>
              <ul className="mt-2 space-y-2">
                {edu.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
