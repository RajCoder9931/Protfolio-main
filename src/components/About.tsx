import React from 'react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Bootstrap']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'Php']
    },
    {
      category: 'Database',
      items: ['MongoDB', 'MySQL', 'Firebase Basic']
    },
    {
      category: 'DevOps',
      items: ['Git', 'GitHub']
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        {/* About Text */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          <p className="text-lg text-slate-600 text-justify">
            Hello! I’m <strong>Ravi Raj Tiwari</strong>, a passionate Full Stack Developer with over 3 years of hands-on experience building modern, scalable, and user-centric web applications.
            My journey in development began with a simple curiosity about how websites function, which soon transformed into a deep interest in creating meaningful digital experiences that solve real-world problems.
          </p>

          <h3 className="text-xl font-semibold text-indigo-600">My Journey</h3>

          <p className="text-lg text-slate-600 text-justify">
            I started coding early in my career, experimenting with small websites and exploring how different technologies work together.
            Over time, I realized my interest wasn’t just in building websites — it was in creating complete systems that combine beautiful UI, strong backend logic, and smooth user interactions.
          </p>

          <p className="text-lg text-slate-600 text-justify">
            This curiosity pushed me to dive deeper into web technologies, data structures, API design, and full-stack architectures.
            As I grew, so did the complexity of my projects — along with my passion to build better and smarter applications.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">My Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-semibold mb-4 text-indigo-600">
                  {skillGroup.category}
                </h4>

                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm border border-slate-200 hover:border-indigo-300 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
