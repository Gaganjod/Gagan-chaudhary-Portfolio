import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-secondary/10 py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#" className="text-2xl font-black tracking-tighter text-primary">
              GAGAN.
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center space-x-10">
              {NAV_LINKS.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-secondary hover:text-primary transition-colors duration-300 text-xs font-bold uppercase tracking-widest"
                >
                  {link}
                </motion.a>
              ))}
            </div>
            
            <motion.a 
              href="/CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-primary text-white px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-secondary transition-all active:scale-95 shadow-lg"
            >
              Resume <Download size={14} />
            </motion.a>
          </div>

          <div className="md:hidden flex items-center gap-6">
            <a href="/CV.pdf" target="_blank" className="text-primary"><Download size={20} /></a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary hover:text-secondary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>


      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-secondary/10 overflow-hidden"
          >
            <div className="px-4 pt-8 pb-12 space-y-8 text-center">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-primary block text-3xl font-black tracking-tighter uppercase"
                >
                  {link}
                </a>
              ))}
              <div className="pt-8 border-t border-secondary/10">
                <a 
                  href="/CV.pdf" 
                  target="_blank"
                  className="inline-flex items-center gap-4 bg-primary text-white px-10 py-5 rounded-full text-xs font-black uppercase tracking-widest"
                >
                  Download Resume <Download size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
