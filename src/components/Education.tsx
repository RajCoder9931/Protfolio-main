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

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {education.map((edu) => (
            <div key={edu.id} className="card-glass p-7">
              <div className="flex items-center justify-between">
                <span className="icon-tile h-11 w-11">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10L12 5 2 10l10 5 10-5z" />
                    <path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
                    <path d="M22 10v6" />
                  </svg>
                </span>
                <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  {edu.duration}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{edu.degree}</h3>
              <p className="mt-1 text-sm font-medium text-ink-muted">{edu.institution}</p>
              <ul className="mt-4 space-y-1.5">
                {edu.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
