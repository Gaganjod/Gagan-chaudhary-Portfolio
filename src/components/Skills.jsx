import React, { useRef } from 'react';
import { SKILLS_DATA } from '../data';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Terminal, Code2, Cpu, Globe, Database, Smartphone } from 'lucide-react';

const SkillCategory = ({ category, index }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const rotateX = useTransform(scrollYProgress, [0, 1], ["20deg", "-20deg"]);
  const rotateY = useTransform(scrollYProgress, [0, 1], ["-10deg", "10deg"]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={containerRef}
      style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
      className="relative perspective-2000"
    >
      <div className="bg-[#1a1a1a] rounded-[2.5rem] p-10 border border-white/5 shadow-2xl relative overflow-hidden group">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-8 border-b border-white/5 pb-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          <span className="text-[10px] text-white/20 font-mono ml-4 uppercase tracking-widest">{category.category}.sh</span>
        </div>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:scale-110 transition-transform">
              {category.category.includes('Languages') && <Code2 size={24} />}
              {category.category.includes('Frameworks') && <Globe size={24} />}
              {category.category.includes('Tools') && <Terminal size={24} />}
              {category.category.includes('Skills') && <Cpu size={24} />}
              {!['Languages', 'Frameworks', 'Tools', 'Skills'].some(key => category.category.includes(key)) && <Terminal size={24} />}
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{category.category}</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {category.items.map((skill, i) => (
              <div 
                key={i}
                className="bg-white/5 hover:bg-white/10 border border-white/5 px-5 py-3 rounded-2xl text-white/60 text-sm font-mono transition-all hover:-translate-y-1 hover:text-white"
              >
                <span className="text-[#27c93f] mr-2">$</span>
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Decorative Code Background */}
        <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-white text-8xl font-black rotate-12 pointer-events-none select-none">
          {category.category.toUpperCase()}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-end">
        <div className="lg:col-span-7">
          <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Tech Stack</span>
          <h2 className="text-7xl md:text-9xl font-bold text-primary tracking-tighter leading-[0.8]">Powering <br/>Experiences</h2>
        </div>
        <div className="lg:col-span-5 pb-4">
          <p className="text-secondary text-xl leading-relaxed font-medium">
            A developer's toolkit is more than just code. It's a spatial environment for solving complex problems.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {SKILLS_DATA.map((category, index) => (
          <SkillCategory key={index} category={category} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
