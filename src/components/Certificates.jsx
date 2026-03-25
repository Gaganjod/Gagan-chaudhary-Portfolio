import React from 'react';
import { CERTIFICATES_DATA } from '../data';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-primary">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES_DATA.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 hover:border-primary/50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(74,222,128,0.2)]"
            >
              <div className="w-full h-64 sm:h-80 overflow-hidden relative bg-black/50">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 p-2"
                />
              </div>
              <div className="p-6 bg-black/40 border-t border-white/10 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <Award className="text-secondary opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
