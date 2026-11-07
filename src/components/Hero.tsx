import { useEffect, useState } from 'react';
import profileImage from '../assets/picofme.png';
import resumePDF from '../assets/resume.pdf';
import { PROFILE, waLink } from '../lib/site';

const ICON_PROPS = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const SERVICES = [
  {
    title: 'Web Development',
    body: 'Business websites, web apps and SaaS products in React/Next.js - fast, responsive, deployed.',
    icon: (
      <svg {...ICON_PROPS}>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Meta Ads',
    body: 'Campaign setup, audience targeting and retargeting focused on lead quality.',
    icon: (
      <svg {...ICON_PROPS}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: 'Google Ads',
    body: 'Search and display campaign setup with ongoing management and optimization.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M3 3v18h18" />
        <path d="M18 17V9" />
        <path d="M13 17V5" />
        <path d="M8 17v-3" />
      </svg>
    ),
  },
  {
    title: 'Social Media Management',
    body: 'End-to-end handling of your social profiles, from content to growth.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Content & Posting Strategy',
    body: 'Content calendars and posting plans that keep your brand consistent.',
    icon: (
      <svg {...ICON_PROPS}>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'AI Chatbots & Automation',
    body: 'Chatbots and workflows that reply, qualify leads and book meetings.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M12 8V4H8" />
        <rect width="16" height="12" x="4" y="8" rx="2" />
        <path d="M2 14h2" />
        <path d="M20 14h2" />
        <path d="M15 13v2" />
        <path d="M9 13v2" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp Automation',
    body: 'Business automation and campaigns on WATI, AiSensy and Gallabox.',
    icon: (
      <svg {...ICON_PROPS}>
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    ),
  },
  {
    title: 'Lead Generation & Growth',
    body: 'Lead funnels from ads to WhatsApp that turn attention into customers.',
    icon: (
      <svg {...ICON_PROPS}>
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % PROFILE.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative overflow-hidden bg-white text-ink">
      <div className="section-shell relative pb-14 pt-28 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
              Available for freelance projects
            </p>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.4rem]">
              Websites, ads &amp; chatbots that{' '}
              <em className="font-medium italic text-accent">grow your business.</em>
            </h1>

            {/* Original rotating position-name badge */}
            <div className="mt-7 w-fit rounded-xl bg-indigo-100 px-6 py-3 shadow-lg" style={{ perspective: '600px' }}>
              <div key={roleIndex} className="role-flip text-xl font-semibold text-indigo-700 sm:text-2xl">
                {PROFILE.roles[roleIndex]}
              </div>
            </div>

            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              I&apos;m <span className="font-semibold text-ink">{PROFILE.name}</span>, based in{' '}
              {PROFILE.location}. One person for your whole online presence: I build it,
              I promote it, I automate it.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="btn-primary" onClick={() => scrollToSection('contact')}>
                Start a project
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
                onClick={() => scrollToSection('projects')}
              >
                See my work
              </button>
              <button
                onClick={() => window.open(resumePDF, '_blank')}
                className="text-sm font-semibold text-muted underline decoration-line underline-offset-4 transition-colors hover:text-ink"
              >
                Download resume
              </button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="font-medium hover:text-ink">GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="font-medium hover:text-ink">LinkedIn</a>
              <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="font-medium hover:text-ink">Instagram {PROFILE.instagramHandle}</a>
              <a href={waLink('Hi Ravi, I saw your portfolio and want to discuss a project.')} target="_blank" rel="noreferrer" className="font-medium hover:text-ink">WhatsApp</a>
            </div>
          </div>

          {/* Original photo treatment: circular framed photo, like the first portfolio */}
          <div className="relative mx-auto flex w-full max-w-xs justify-center sm:max-w-sm">
            <div className="relative">
              <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-80 md:w-80">
                <img
                  src={profileImage}
                  alt={PROFILE.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 w-max -translate-x-1/2 rounded-full border border-line bg-white px-5 py-2 text-xs font-semibold tracking-wide text-ink shadow-pop">
                {PROFILE.tagline}
              </div>
            </div>
          </div>
        </div>

        <div className="marquee mt-16 overflow-hidden" aria-label="Services">
          <div className="marquee-track flex w-max gap-4">
            {[...SERVICES, ...SERVICES].map((s, i) => {
              const dup = i >= SERVICES.length;
              return (
                <button
                  key={`${s.title}-${i}`}
                  onClick={() => scrollToSection('skills')}
                  aria-hidden={dup}
                  tabIndex={dup ? -1 : 0}
                  className={`group w-64 shrink-0 rounded-2xl border border-line bg-paper p-5 text-left transition-colors hover:border-accent/40 hover:bg-accent-soft sm:w-72 ${dup ? 'marquee-dup' : ''}`}
                >
                  <p className="flex items-center justify-between text-sm font-semibold uppercase tracking-wider text-muted">
                    <span>0{(i % SERVICES.length) + 1}</span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent transition-transform group-hover:scale-105">
                      {s.icon}
                    </span>
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
