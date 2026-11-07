import { SKILL_GROUPS } from '../lib/site';

const About = () => {
  return (
    <>
      <section id="about" className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-3">About</p>
            <h2 className="section-title">About Me</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              <p>
                Hello! I’m <strong className="font-semibold text-ink">Ravi Raj Tiwari</strong>, a passionate{' '}
                <strong className="font-semibold text-ink">Full Stack Developer</strong> with over 2 years of hands-on
                experience building modern, scalable, and user-centric web applications.
                I specialize in developing complete web solutions, from responsive
                frontend interfaces to robust backend systems, APIs, databases, and
                deployment. Alongside full-stack development, I also have around{' '}
                <strong className="font-semibold text-ink">1 year of professional experience in Digital Marketing and Paid
                Advertising</strong>, giving me a broader understanding of how technology
                and marketing work together to build successful digital products.
              </p>

              <h3 className="pt-2 font-serif text-xl font-semibold text-ink">My Journey</h3>

              <p>
                I started my development journey by experimenting with websites and
                learning how different technologies work together. Over time, I moved from
                building simple websites to developing complete full-stack applications.
                My experience includes working with <strong className="font-semibold text-ink">React.js, JavaScript,
                Node.js, Express.js, MongoDB, MySQL, PHP, Tailwind CSS</strong>, and
                RESTful APIs.
              </p>

              <p>
                I have worked on different types of real-world projects, including{' '}
                <strong className="font-semibold text-ink">ERP systems, recruitment CRM platforms, e-commerce applications,
                social platforms, inventory management systems, AI-powered tools, and
                automation solutions</strong>. I have experience working across both
                frontend and backend development, integrating APIs, managing databases,
                implementing authentication and business logic, deploying applications,
                and optimizing systems for better performance and scalability.
              </p>

              <p>
                Alongside development, I have gained professional experience in{' '}
                <strong className="font-semibold text-ink">Digital Marketing and Meta Ads</strong>. I have created and
                managed advertising campaigns for multiple clients through my professional
                roles and freelance work, targeting audiences in both India and
                international markets. My experience includes{' '}
                <strong className="font-semibold text-ink">lead generation, audience targeting, retargeting, campaign
                optimization, performance analysis, and troubleshooting Meta Ads
                issues</strong>.
              </p>

              <p>
                I have also worked on <strong className="font-semibold text-ink">product advertising campaigns for Meesho
                and other e-commerce platforms</strong> through freelance projects.
                Combining development with digital marketing allows me to understand a
                digital product from both technical and business perspectives - from
                building the application and its infrastructure to helping businesses
                reach their target audience and generate leads.
              </p>

              <p>
                My current focus is on building{' '}
                <strong className="font-semibold text-ink">AI-powered applications, automation systems, scalable web
                platforms, and intelligent digital solutions</strong>. I continuously
                explore new technologies and approaches to improve my development skills
                while creating products that are practical, efficient, and capable of
                solving real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-line bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-12 max-w-3xl">
            <p className="section-eyebrow mb-3">Skills</p>
            <h2 className="section-title">My Skills</h2>
          </div>

          <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title} className="card-glass p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-ink">{group.title}</h3>
                  <span className="chip text-xs">{group.items.length} Skills</span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
