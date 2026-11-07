import { PROFILE, waLink } from '../lib/site';

const EXPLORE = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Achievements', '#achievements'],
  ['Contact', '#contact'],
];

const SERVICES = [
  'Web Development',
  'Meta & Google Ads',
  'Social Media Management',
  'AI Chatbots & Automation',
  'WhatsApp Automation (WATI, AiSensy, Gallabox)',
];

const SOCIALS = [
  {
    label: 'GitHub',
    href: PROFILE.github,
    icon: (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 015.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.35.77 1.05.77 2.12v3.15c0 .3.21.67.8.55A11.51 11.51 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: PROFILE.linkedin,
    icon: (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: PROFILE.instagram,
    icon: (
      <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="section-shell py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-serif text-lg font-bold text-paper">
                R
              </span>
              <span className="font-serif text-lg font-semibold">
                <span className="text-indigo-400">Ravi</span> Raj Tiwari
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/60">
              {PROFILE.tagline} based in {PROFILE.location}. I build your website, run your
              ads and automate your customer chats.
            </p>
            <div className="mt-5 flex gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-paper/15 text-paper/70 transition-colors hover:border-accent hover:bg-accent hover:text-paper"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {EXPLORE.map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-paper/70 transition-colors hover:text-paper">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">Services</p>
            <ul className="mt-4 space-y-2.5 text-sm text-paper/70">
              {SERVICES.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">Get in touch</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="break-all text-paper/70 transition-colors hover:text-paper">
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a href={waLink('Hi Ravi, I saw your portfolio and want to discuss a project.')} target="_blank" rel="noreferrer" className="text-paper/70 transition-colors hover:text-paper">
                  WhatsApp (urgent enquiries)
                </a>
              </li>
              <li className="text-paper/70">Instagram {PROFILE.instagramHandle}</li>
            </ul>
            <a
              href="#contact"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-paper transition-colors hover:bg-accent-dark"
            >
              Start a project
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-paper/10 pt-6 text-sm text-paper/50 sm:flex-row">
          <p>© {currentYear} {PROFILE.name}. All rights reserved.</p>
          <p>Built with React, Tailwind CSS and Solo AI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
