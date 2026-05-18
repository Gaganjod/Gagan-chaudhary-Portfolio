import React, { useRef, useState, useEffect } from 'react';
import { PROJECTS_DATA } from '../data';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Magnetic from './Magnetic';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]));
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]));

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);

    // Set CSS variables for spotlight effect
    cardRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    cardRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <a 
      href={project.live} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative perspective-2000 spotlight-card"
      >
        <div className="relative aspect-video rounded-[3.5rem] overflow-hidden bg-tertiary shadow-xl transition-all duration-700 preserve-3d">
          {/* Front Face (Image) */}
          <div className="absolute inset-0 w-full h-full preserve-3d">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>

          {/* Side/Depth Reveal (Simulated with TranslateZ and Shadows) */}
          <div 
            style={{ transform: "translateZ(40px)" }}
            className="absolute inset-0 flex flex-col justify-end p-10 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
          >
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t, i) => (
                <span key={i} className="bg-white/90 backdrop-blur-md text-primary text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-2xl">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Magnetic Icon Trigger */}
          <div className="absolute top-10 right-10 z-20">
            <Magnetic>
              <div className="p-6 bg-white rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                <ArrowUpRight className="w-8 h-8 text-primary" />
              </div>
            </Magnetic>
          </div>
        </div>

        {/* Meta Data Layer */}
        <div 
          style={{ transform: "translateZ(60px)" }}
          className="mt-10 px-4 preserve-3d"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">0{index + 1} / Project</span>
            <div className="h-px flex-grow bg-tertiary"></div>
          </div>
          <h3 className="text-4xl font-bold text-primary tracking-tighter mb-4 group-hover:translate-x-4 transition-transform duration-500">
            {project.title}
          </h3>
          <p className="text-secondary leading-relaxed text-lg font-medium max-w-md">{project.description}</p>
        </div>
      </motion.div>
    </a>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 flex flex-col lg:flex-row lg:items-end justify-between gap-16"
      >
        <div className="max-w-2xl">
          <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-black mb-6 block italic">Selected Portfolio</span>
          <h2 className="text-7xl md:text-9xl font-bold text-primary tracking-tighter leading-[0.8]">Digital <br/>Innovations</h2>
        </div>
        <p className="text-secondary max-w-sm text-xl leading-relaxed font-medium pb-4">
          Merging structural integrity with cutting-edge visual experiences. Each project is a deep dive into 3D space.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
