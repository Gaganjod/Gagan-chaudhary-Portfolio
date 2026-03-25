import React from 'react';
import { ABOUT_DATA } from '../data';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Briefcase, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About & <span className="text-primary">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Journey Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl text-primary">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                {ABOUT_DATA.intro}
              </p>
            </motion.div>

            {/* Experience */}
            {ABOUT_DATA.experience && ABOUT_DATA.experience.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-emerald-500/20 rounded-xl text-emerald-400">
                    <Briefcase size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Experience</h3>
                </div>
                <div className="space-y-8">
                  {ABOUT_DATA.experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
                      <div className="absolute left-[-5px] top-1.5 w-3 h-3 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                      <div className="bg-black/30 p-6 rounded-2xl border border-white/5 hover:border-emerald-400/30 transition-colors">
                        <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                        <div className="text-emerald-400 font-medium mb-2">{exp.company}</div>
                        <div className="text-sm text-gray-500 bg-white/5 inline-block px-3 py-1 rounded-full mb-4">
                          {exp.duration}
                        </div>
                        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4 text-sm">
                          {exp.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, i) => (
                            <span key={i} className="text-xs text-black border border-primary/20 bg-primary px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="space-y-12">
            {/* Education Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-secondary/20 rounded-xl text-secondary">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-8">
                {ABOUT_DATA.education.map((edu, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
                    <div className="absolute left-[-5px] top-1.5 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                    <div className="bg-black/30 p-6 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors">
                      <h4 className="text-lg font-bold text-white mb-1">{edu.degree}</h4>
                      <div className="text-primary font-medium mb-2">{edu.institution}</div>
                      <div className="text-sm text-gray-500 bg-white/5 inline-block px-3 py-1 rounded-full">
                        {edu.year}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Achievements Section */}
            {ABOUT_DATA.achievements && ABOUT_DATA.achievements.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-yellow-500/20 rounded-xl text-yellow-500">
                    <Trophy size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Achievements</h3>
                </div>
                <ul className="space-y-4">
                  {ABOUT_DATA.achievements.map((ach, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-yellow-500 mr-2 font-bold">•</span>
                      <span className="text-sm md:text-base leading-relaxed">{ach}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
