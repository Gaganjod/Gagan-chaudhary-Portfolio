import React from 'react';
import { SKILLS_DATA } from '../data';
import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const Icons = [Code, Server, Wrench];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-secondary">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS_DATA.map((skillGroup, index) => {
            const Icon = Icons[index % Icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white/5 border border-white/10 hover:border-primary/50 rounded-3xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-black/50 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-black/40 border border-white/5 rounded-full text-sm text-gray-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
