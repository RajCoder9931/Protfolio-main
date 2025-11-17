import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './Experience';
 
export function App() {
  return <div className="font-sans bg-slate-50 text-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience/>
         <Projects />
        <Achievements />
        <Education />
        <Contact />
        
      </main>
      <Footer />
    </div>;
}