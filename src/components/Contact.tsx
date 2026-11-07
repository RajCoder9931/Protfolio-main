import { PROFILE, waLink } from '../lib/site';

const CHANNELS = [
  {
    label: 'Email',
    value: PROFILE.email,
    href: `mailto:${PROFILE.email}`,
    external: false,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp (urgent)',
    value: 'Chat directly with me',
    href: waLink('Hi Ravi, I saw your portfolio and want to discuss a project.'),
    external: true,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.84L3 20l1.34-3.35A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: PROFILE.instagramHandle,
    href: PROFILE.instagram,
    external: true,
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const STEPS = [
  ['Tell me your goal', 'A website, more leads from ads, social media growth, or a chatbot - in your own words.'],
  ['Get a clear plan', 'We discuss the approach, scope, timeline and price before work starts.'],
  ['Review the work', 'Check previews and share feedback as the project takes shape.'],
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent-dark via-accent to-[#1B6B3C] p-8 text-paper shadow-pop sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-white/5 blur-2xl" />

          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-paper/70">Contact</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
                Let’s build something for your business
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/80 sm:text-lg">
                The fastest way is Solo AI, the assistant in the bottom-right corner - tell it
                what you need. Meeting booking is being connected; for a meeting request,
                email or WhatsApp me directly.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3 text-sm font-semibold text-accent-dark transition-transform hover:scale-[1.03]"
                  onClick={() => window.dispatchEvent(new CustomEvent('open-portfolio-chat', { detail: { booking: true } }))}
                >
                  Ask about a project
                </button>
                <a
                  href={waLink('Hi Ravi, urgent enquiry from your portfolio.')}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/40 px-6 py-3 text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
                >
                  WhatsApp me
                </a>
              </div>
            </div>

            <div className="space-y-3.5">
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/25 bg-white/10 p-4 backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-paper text-accent shadow-card">
                    {c.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-paper/70">{c.label}</span>
                    <span className="block truncate font-medium text-paper">{c.value}</span>
                  </span>
                  <span className="ml-auto text-paper/60 transition-transform group-hover:translate-x-1">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {STEPS.map(([title, body], i) => (
            <div key={i} className="card-glass p-6">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-serif text-sm font-semibold text-paper">
                {i + 1}
              </span>
              <p className="mt-4 font-semibold text-ink">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
