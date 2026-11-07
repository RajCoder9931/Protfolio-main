import { PROFILE } from '../lib/site';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink text-paper">
      <div className="section-shell py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-serif text-lg font-bold text-paper">
                R
              </span>
              <span className="font-serif text-lg font-semibold">{PROFILE.name}</span>
            </div>
            <p className="mt-2 text-sm text-paper/60">{PROFILE.tagline}</p>
          </div>

          <ul className="flex flex-wrap gap-x-7 gap-y-3 text-sm">
            <li><a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-paper/70 transition-colors hover:text-paper">GitHub</a></li>
            <li><a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-paper/70 transition-colors hover:text-paper">LinkedIn</a></li>
            <li><a href={PROFILE.instagram} target="_blank" rel="noreferrer" className="text-paper/70 transition-colors hover:text-paper">Instagram</a></li>
            <li><a href={`mailto:${PROFILE.email}`} className="text-paper/70 transition-colors hover:text-paper">Email</a></li>
          </ul>
        </div>

        <div className="mt-10 border-t border-paper/10 pt-6 text-center text-sm text-paper/50">
          © {currentYear} {PROFILE.name}. Built with React, Tailwind CSS and a custom AI assistant.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
