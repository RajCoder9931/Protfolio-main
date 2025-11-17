
import React from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      degree: 'BCA (Bachelor Computer Application)',
      institution: 'Gna University Phagwara 144401 Punjab India',
      duration: '2023 - 2026',
      description: 'I am currently pursuing a Bachelor of Computer Applications (BCA) degree at Gna University Phagwara, India. My academic journey has been marked by a commitment to excellence and a passion for technology.',
      achievements: [
        'Dean’s list 2023',
        'Top scorer in Computer Science',
        'Completed multiple programming projects',
      ]
    },
    {
      id: 2,
      degree: 'Class 10 (Secondary School)',
      institution: 'S.N.G High School Rampur Atuali 841421 Saran Bihar',
      duration: '2019 - 2020',
      description: 'I secured the 1st rank in my class during 10th standard, with the highest marks in Hindi and Science. My performance reflected a strong conceptual understanding and consistent academic excellence throughout the year.',
      achievements: [
        '1st Rank in Class',
        'Highest Marks in Hindi and Science',
      ]
    },
    {
      id: 3,
      degree: 'Class 12 (Senior Secondary Education)',
      institution: 'Masrakh College Masrakh',
      duration: '2020 - 2022',
      description: 'I completed my Class 12 in the Science stream and secured the 1st rank in my class. My strong performance in subjects like Physics, Chemistry, and Mathematics helped me achieve excellent results.',
      achievements: [
        '1st Rank in Class',
        'High scores in Physics, Chemistry, and Mathematics',
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {education.map((edu) => (
            <div key={edu.id} className="bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-indigo-600 font-medium">{edu.duration}</p>
              </div>
              <p className="text-lg mb-3">{edu.institution}</p>
              <p className="text-slate-600 mb-4">{edu.description}</p>
              {edu.achievements && (
                <div>
                  <h4 className="font-semibold mb-2">Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-600">
                    {edu.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
