import React from 'react';
import { motion } from 'framer-motion';
import { HERO_DATA } from '../data';
import { Code2, Terminal, Database, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-medium tracking-wide mb-4">
              {HERO_DATA.greeting}
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6">
              A passionate <br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Developer.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl">
              {HERO_DATA.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#contact" className="px-6 py-3 sm:px-8 sm:py-3 rounded-full bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:shadow-[0_0_25px_rgba(74,222,128,0.5)] font-medium">
                Contact Me
              </a>
              <a href="#projects" className="px-6 py-3 sm:px-8 sm:py-3 rounded-full bg-transparent text-white border border-white/20 hover:border-white/60 transition-all duration-300 font-medium">
                View Work
              </a>
              <a href="/gagan-cv.pdf" download="Gagan_Chaudhary_CV.pdf" className="px-6 py-3 sm:px-8 sm:py-3 rounded-full bg-transparent text-white border border-white/20 hover:text-primary hover:border-primary/50 transition-all duration-300 font-medium flex items-center gap-2">
                <Download size={18} /> Download CV
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-full flex items-center justify-center md:justify-end md:pr-10 mt-10 md:mt-0"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-primary/20 bg-black/40 backdrop-blur-3xl shadow-[0_0_50px_rgba(74,222,128,0.1)] flex items-center justify-center">
              <img src="https://github.com/identicons/gagan.png" alt="Avatar" className="w-full h-full object-cover rounded-full mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 opacity-80 hover:opacity-100 p-2" />
              
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="absolute inset-[-20px] rounded-full border border-dashed border-primary/30" />
              
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 p-3 sm:p-4 bg-black/60 backdrop-blur border border-white/5 rounded-2xl shadow-xl">
                <Code2 className="text-primary w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-8 sm:-right-12 top-1/2 p-3 sm:p-4 bg-black/60 backdrop-blur border border-white/5 rounded-2xl shadow-xl">
                <Terminal className="text-secondary w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
              <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute -bottom-6 left-6 sm:-bottom-10 sm:left-10 p-3 sm:p-4 bg-black/60 backdrop-blur border border-white/5 rounded-2xl shadow-xl">
                <Database className="text-emerald-500 w-6 h-6 sm:w-8 sm:h-8" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
