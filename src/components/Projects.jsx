import React from 'react';
import { PROJECTS_DATA } from '../data';
import { motion } from 'framer-motion';
import { Code2 as Github, ExternalLink, FolderGit2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 hover:border-primary/30 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-xl text-primary">
                  <FolderGit2 size={32} />
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github size={24} />
                  </a>
                  <a href={project.live} className="text-gray-400 hover:text-primary transition-colors">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-3 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-sm text-secondary font-medium tracking-wide">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
