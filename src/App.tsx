import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Experience from './Experience';

export function App() {
  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
