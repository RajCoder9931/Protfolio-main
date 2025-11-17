import React, { useEffect, useState } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  const menuItems = [
    'home',
    'about',
    'projects',
    'experience', // <-- Added here
    'achievements',
    'education',
    'contact'
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center m-[10px]">
        <a
          href="#home"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
          onClick={e => {
            e.preventDefault();
            scrollToSection('home');
          }}
        >
          Bulid<span className="text-slate-800">&Brush.com</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map(item => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-slate-600 hover:text-indigo-600 transition-colors capitalize"
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-600 hover:text-indigo-600 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <ul className="py-2 px-4">
            {menuItems.map(item => (
              <li key={item} className="py-2">
                <a
                  href={`#${item}`}
                  className="block text-slate-600 hover:text-indigo-600 transition-colors capitalize"
                  onClick={e => {
                    e.preventDefault();
                    scrollToSection(item);
                  }}
                >
                  {item}
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
