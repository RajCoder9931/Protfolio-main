import { SKILL_GROUPS } from '../lib/site';

const GROUP_ICONS = [
  // Development
  <svg key="dev" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>,
  // AI automation
  <svg key="ai" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </svg>,
  // Ads & social
  <svg key="ads" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>,
];

const About = () => {
  return (
    <>
      <section id="about" className="py-20 sm:py-28">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="section-eyebrow mb-3">About</p>
            <h2 className="section-title">One person for your whole online presence</h2>
            <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">
              Most businesses juggle a developer, a marketing agency and a separate tools
              person. I do all three. I build your website or web app, run your Meta and
              Google Ads with a clear posting strategy, and set up AI chatbots that answer
              customers and book meetings while you sleep.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
              I currently work as a Web Developer &amp; Digital Marketing professional at
              Agarwal Taxcon, and I build my own products on the side - RankRaja, an AI SEO
              audit platform, and BillDrop, a billing app that sends bills on WhatsApp.
              Everything I offer clients, I have first built or run for myself.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-line bg-white py-20 sm:py-28">
        <div className="section-shell">
          <div className="mb-12 max-w-3xl">
            <p className="section-eyebrow mb-3">Skills</p>
            <h2 className="section-title">What I can do for you</h2>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-3">
            {SKILL_GROUPS.map((group, gi) => (
              <div key={group.title} className="card-glass p-7">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl font-semibold text-ink">{group.title}</h3>
                  <span className="icon-tile h-10 w-10">
                    {GROUP_ICONS[gi % GROUP_ICONS.length]}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{group.blurb}</p>
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
