import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary selection:bg-primary selection:text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="bg-tertiary/20">
          <About />
        </div>
        <Skills />
        <div className="bg-tertiary/40">
          <Projects />
        </div>
        <Certificates />
        <Contact />
      </main>
      <footer className="py-20 border-t border-tertiary text-center bg-tertiary/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <span className="text-2xl font-black tracking-tighter">GAGAN.</span>
            <div className="flex gap-10">
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Instagram</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Twitter</a>
              <a href="#" className="text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors">Dribbble</a>
            </div>
          </div>
          <p className="text-secondary text-[10px] font-black uppercase tracking-[0.2em]">
            © 2026 Gagan Chaudhary. Crafted with precision.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
