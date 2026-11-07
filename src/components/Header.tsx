import React, { useEffect, useState } from 'react';
import { PROFILE } from '../lib/site';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        isScrolled ? 'border-b border-line bg-paper/95 backdrop-blur' : 'bg-white/70 backdrop-blur'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between sm:h-[4.5rem]">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-serif text-lg font-bold text-paper">
            R
          </span>
          <span className={`font-serif text-lg font-semibold tracking-tight transition-colors text-ink`}>
            {PROFILE.name}
          </span>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors text-ink-muted hover:text-accent`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors bg-ink text-paper hover:bg-accent`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
              >
                Hire me
              </a>
            </li>
          </ul>
        </nav>

        <button
          className={`rounded-lg p-2 md:hidden text-ink hover:bg-line/60`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="border-b border-line bg-paper md:hidden">
          <ul className="section-shell space-y-1 py-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2.5 text-base font-medium text-ink-soft hover:bg-line/50 hover:text-accent"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
