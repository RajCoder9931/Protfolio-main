import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">
              Bulid<span className="text-indigo-400">&Brush.com</span>
            </h2>
            <p className="text-slate-400 mt-1">Full Stack Developer</p>
          </div>
          <div className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
              <li>
                <a href="#home" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-300 hover:text-indigo-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <button onClick={scrollToTop} className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full transition-colors" aria-label="Scroll to top">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © {currentYear} Developer Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
