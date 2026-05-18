import React from 'react';
import { CERTIFICATES_DATA } from '../data';
import { motion } from 'framer-motion';
import { Award, ArrowUpRight } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center md:text-left"
      >
        <span className="text-secondary uppercase tracking-[0.3em] text-[10px] font-black mb-4 block">Recognition</span>
        <h2 className="text-5xl md:text-7xl font-bold text-primary tracking-tighter">Certifications</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        {CERTIFICATES_DATA.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="group relative"
          >
            <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-tertiary mb-8 shadow-sm group-hover:shadow-2xl transition-all duration-700">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="w-full h-full object-contain grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 p-8"
              />
              <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700"></div>
              <div className="absolute bottom-8 right-8 p-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 shadow-xl">
                <ArrowUpRight className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <div className="flex items-center justify-between px-4">
              <h3 className="text-2xl font-bold text-primary tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                {cert.title}
              </h3>
              <Award className="text-secondary/30 group-hover:text-primary transition-colors duration-500 w-6 h-6" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
