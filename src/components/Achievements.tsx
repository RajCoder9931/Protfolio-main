// Achievement entries restored from Ravi's original portfolio at his explicit request.
const achievements = [
  {
    id: 1,
    title: 'Web - Wrangling Wild West',
    organization: 'PCTE University Ludhiyana',
    date: '2025',
    description: 'Validated expertise in designing distributed systems on AWS.',
    icon: '🏆',
  },
  {
    id: 2,
    title: 'Python + Django Seminar',
    organization: 'Cadd Cam Services',
    date: '2024',
    description: 'Demonstrated ability to design, build, and manage applications on Google Cloud.',
    icon: '🏅',
  },
  {
    id: 3,
    title: 'Open Source Contributor Award',
    organization: 'GitHub',
    date: '2024',
    description: 'Recognized for significant contributions to open source projects.',
    icon: '🌟',
  },
  {
    id: 4,
    title: 'National Quiz Unity in Diversity 2024',
    organization: 'Indian Gov National Commission for Minorities (NCM)',
    date: '2024',
    description: 'First place for developing an innovative healthcare solution.',
    icon: '🥇',
  },
  {
    id: 5,
    title: 'Tech Pragya (Web wizad)',
    organization: 'Gna University Phagwara',
    date: '2025',
    description: 'I secured 2nd position in the Web Wizard competition at Tech Pragya.',
    icon: '🥈',
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

        <div className="mx-auto max-w-4xl">
          {achievements.map((a, index) => (
            <div
              key={a.id}
              className={`mb-10 flex flex-col items-start gap-4 md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div
                className={`icon-tile h-16 w-16 rounded-full text-2xl ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <span aria-hidden>{a.icon}</span>
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? 'md:order-0 md:pr-8 md:text-right' : 'md:order-1 md:pl-8 md:text-left'}`}>
                <div className="card-glass p-6">
                  <h3 className="text-xl font-semibold text-ink">{a.title}</h3>
                  <p className="mt-1 font-medium text-accent">
                    {a.organization} · {a.date}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{a.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
