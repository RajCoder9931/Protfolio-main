const Achievements = () => {
  const achievements = [{
    id: 1,
    title: 'Web - Wrangling Wild West',
    organization: 'PCTE University Ludhiyana',
    date: '2025',
    description: 'Validated expertise in designing distributed systems on AWS.',
    icon: '🏆'
  }, {
    id: 2,
    title: 'Python + Django Seminar',
    organization: 'Cadd Cam Services',
    date: '2024',
    description: 'Demonstrated ability to design, build, and manage applications on Google Cloud.',
    icon: '🏅'
  }, {
    id: 3,
    title: 'Open Source Contributor Award',
    organization: 'GitHub',
    date: '2024',
    description: 'Recognized for significant contributions to open source projects.',
    icon: '🌟'
  }, {
    id: 4,
    title: 'National Quiz Unity in Diversity 2024',
    organization: 'Indian Gov National Commission for Minorities (NCM)',
    date: '2024',
    description: 'First place for developing an innovative healthcare solution.',
    icon: '🥇'
  },
  {
    id: 5,
    title: 'Tech Pragya (Web wizad)',
    organization: 'Gna University Phagwara',
    date: '2025',
    description: 'I secured 2nd position in the Web Wizard competition at Tech Pragya.',
    icon: '🥈'
  }
];
  return <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Achievements</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {achievements.map((achievement, index) => <div key={achievement.id} className={`flex flex-col md:flex-row items-start md:items-center gap-4 mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
              <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                {achievement.icon}
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:order-0' : 'md:pl-8 md:text-left md:order-1'}`}>
                <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-indigo-600 font-medium mb-2">
                    {achievement.organization} • {achievement.date}
                  </p>
                  <p className="text-slate-600">{achievement.description}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Achievements;