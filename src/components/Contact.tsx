import { PROFILE, waLink } from '../lib/site';

const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow mb-3">Contact</p>
            <h2 className="section-title">Let’s build something for your business</h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink-muted sm:text-lg">
              The fastest way is the chat assistant in the bottom-right corner - tell it what
              you need and ask about services or projects. Meeting booking is being connected.
              For a meeting request, email or WhatsApp me directly:
            </p>

            <ul className="mt-8 space-y-4">
              <li>
                <a href={`mailto:${PROFILE.email}`} className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-accent shadow-card">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">Email</span>
                    <span className="font-medium text-ink group-hover:text-accent">{PROFILE.email}</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={waLink('Hi Ravi, I saw your portfolio and want to discuss a project.')} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-accent shadow-card">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.84L3 20l1.34-3.35A7.7 7.7 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">WhatsApp (urgent)</span>
                    <span className="font-medium text-ink group-hover:text-accent">Chat directly with me</span>
                  </span>
                </a>
              </li>
              <li>
                <a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="group flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-white text-accent shadow-card">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-ink-muted">Instagram</span>
                    <span className="font-medium text-ink group-hover:text-accent">{PROFILE.instagramHandle}</span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div className="card h-fit p-7 sm:p-9">
            <h3 className="font-serif text-2xl font-semibold text-ink">How working together starts</h3>
            <ol className="mt-6 space-y-5">
              {[
                ['Tell me your goal', 'A website, more leads from ads, social media growth, or a chatbot - in your own words.'],
                ['Get a clear plan', 'We discuss the approach, scope, timeline and price before work starts.'],
                ['Review the work', 'Check previews and share feedback as the project takes shape.'],
              ].map(([title, body], i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent font-serif text-sm font-semibold text-paper">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <button
              className="btn-primary mt-8 w-full"
              onClick={() => window.dispatchEvent(new CustomEvent('open-portfolio-chat', { detail: { booking: true } }))}
            >
              Ask about a project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
