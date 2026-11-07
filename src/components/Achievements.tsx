const achievements = [
  {
    id: 1,
    title: '3rd Prize - Web-Wrangling Wild West Hackathon',
    organization: 'PCTE, Ludhiana',
    date: 'Mar 2025',
    description: 'Secured 3rd prize for web development and problem-solving under competitive conditions.',
  },
  {
    id: 2,
    title: '2nd Prize - Web Wizard Competition',
    organization: 'Tech-Pragya 2025, GNA University',
    date: '2025',
    description: 'Won 2nd position for frontend and web development skills.',
  },
  {
    id: 3,
    title: 'Python + Django Seminar',
    organization: 'Cadd Cam Services',
    date: '2024',
    description: 'Completed seminar training on Python and Django web development.',
  },
  {
    id: 4,
    title: 'National Quiz - Unity in Diversity 2024',
    organization: 'National Commission for Minorities (NCM), Govt. of India',
    date: '2024',
    description: 'Participated in the national-level Unity in Diversity quiz.',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 max-w-3xl">
          <p className="section-eyebrow mb-3">Achievements</p>
          <h2 className="section-title">Recognition</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {achievements.map((a) => (
            <div key={a.id} className="card p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base font-semibold leading-snug text-ink sm:text-lg">{a.title}</h3>
                <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  {a.date}
                </span>
              </div>
              <p className="mt-1.5 text-sm font-medium text-ink-muted">{a.organization}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
