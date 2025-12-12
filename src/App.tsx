import React, { useEffect } from 'react';
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
  useEffect(() => {
    fetch("https://hook.eu1.make.com/9z1gyb1b7ygjyp2vcnh6vepqhx35uyvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || "Direct",
        page: window.location.href,
        language: navigator.language,
      }),
    }).catch(err => console.error("Tracking error:", err));
  }, []);

  return (
    <div className="font-sans bg-slate-50 text-slate-800">
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
    </div>
  );
}
