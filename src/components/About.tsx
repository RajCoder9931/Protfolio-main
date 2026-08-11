
const About = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "React.js",
        "Angular",
        "Tailwind CSS",
        "Bootstrap"
      ]
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "PHP",
        "Python",
        "REST APIs"
      ]
    },
    {
      category: "Database",
      items: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "PostgreSQL"
      ]
    },
    {
      category: "AI & Automation",
      items: [
        "AI APIs",
        "AI Automation",
        "Chatbot Development",
        "WATI",
        "AiSensy",
        "WhatsApp Automation",
        "Workflow Automation"
      ]
    },
    {
      category: "Digital Marketing",
      items: [
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Lead Generation",
        "Retargeting",
        "Audience Targeting",
        "Campaign Optimization",
        "Product Advertising"
      ]
    },
    {
      category: "CMS & Web",
      items: [
        "WordPress",
        "Elementor",
        "Website Development",
        "Website Optimization"
      ]
    },
    {
      category: "Tools & DevOps",
      items: [
        "Git",
        "GitHub",
        "Vercel",
        "Render",
        "VPS",
        "Chrome Extension API"
      ]
    }
  ];
  const sortedSkills = [...skills].sort(
    (a, b) => b.items.length - a.items.length
  );

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
            Hello! I’m <strong>Ravi Raj Tiwari</strong>, a passionate{" "}
            <strong>Full Stack Developer</strong> with over 2 years of hands-on
            experience building modern, scalable, and user-centric web applications.
            I specialize in developing complete web solutions, from responsive
            frontend interfaces to robust backend systems, APIs, databases, and
            deployment. Alongside full-stack development, I also have around{" "}
            <strong>1 year of professional experience in Digital Marketing and Paid
              Advertising</strong>, giving me a broader understanding of how technology
            and marketing work together to build successful digital products.
          </p>

          <h3 className="text-xl font-semibold text-indigo-600">My Journey</h3>

          <p className="text-lg text-slate-600 text-justify">
            I started my development journey by experimenting with websites and
            learning how different technologies work together. Over time, I moved from
            building simple websites to developing complete full-stack applications.
            My experience includes working with <strong>React.js, JavaScript,
              Node.js, Express.js, MongoDB, MySQL, PHP, Tailwind CSS</strong>, and
            RESTful APIs.
          </p>

          <p className="text-lg text-slate-600 text-justify">
            I have worked on different types of real-world projects, including{" "}
            <strong>ERP systems, recruitment CRM platforms, e-commerce applications,
              social platforms, inventory management systems, AI-powered tools, and
              automation solutions</strong>. I have experience working across both
            frontend and backend development, integrating APIs, managing databases,
            implementing authentication and business logic, deploying applications,
            and optimizing systems for better performance and scalability.
          </p>

          <p className="text-lg text-slate-600 text-justify">
            Alongside development, I have gained professional experience in{" "}
            <strong>Digital Marketing and Meta Ads</strong>. I have created and
            managed advertising campaigns for multiple clients through my professional
            roles and freelance work, targeting audiences in both India and
            international markets. My experience includes{" "}
            <strong>lead generation, audience targeting, retargeting, campaign
              optimization, performance analysis, and troubleshooting Meta Ads
              issues</strong>.
          </p>

          <p className="text-lg text-slate-600 text-justify">
            I have also worked on <strong>product advertising campaigns for Meesho
              and other e-commerce platforms</strong> through freelance projects.
            Combining development with digital marketing allows me to understand a
            digital product from both technical and business perspectives — from
            building the application and its infrastructure to helping businesses
            reach their target audience and generate leads.
          </p>

          <p className="text-lg text-slate-600 text-justify">
            My current focus is on building{" "}
            <strong>AI-powered applications, automation systems, scalable web
              platforms, and intelligent digital solutions</strong>. I continuously
            explore new technologies and approaches to improve my development skills
            while creating products that are practical, efficient, and capable of
            solving real-world problems.
          </p>
        </div>


        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            My Skills
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {sortedSkills.map((skillGroup, index) => (
              <div
                key={index}
                className="group bg-white border border-slate-200 rounded-2xl p-6
                   shadow-sm hover:shadow-lg hover:-translate-y-1
                   transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h4 className="text-xl font-semibold text-indigo-600">
                    {skillGroup.category}
                  </h4>

                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full
                       bg-indigo-50 text-indigo-600"
                  >
                    {skillGroup.items.length} Skills
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-flex items-center
                         bg-slate-50
                         text-slate-700
                         px-3 py-1.5
                         rounded-full
                         text-sm
                         font-medium
                         border border-slate-200
                         hover:bg-indigo-50
                         hover:text-indigo-600
                         hover:border-indigo-200
                         transition-all duration-200"
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
