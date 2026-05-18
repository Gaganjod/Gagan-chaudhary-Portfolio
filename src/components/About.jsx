import React, { useRef, useState } from 'react';
import { ABOUT_DATA } from '../data';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Briefcase, GraduationCap, Award, ExternalLink } from 'lucide-react';
import Magnetic from './Magnetic';

const BentoCell = ({ children, className, index, title, icon: Icon }) => {
  const cellRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]));

  const handleMouseMove = (e) => {
    const rect = cellRef.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cellRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`bg-tertiary/20 backdrop-blur-sm border border-tertiary p-10 rounded-[3rem] hover:bg-tertiary/40 transition-colors group relative perspective-2000 ${className}`}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <div className="p-4 bg-white rounded-2xl text-primary shadow-sm group-hover:scale-110 transition-transform">
            <Icon size={24} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-secondary/40">0{index + 1}</span>
        </div>
        {children}
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32 items-start">
        <div className="lg:col-span-12">
          <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Journey & Background</span>
          <h2 className="text-7xl md:text-9xl font-bold text-primary tracking-tighter leading-[0.8] mb-12">Building <br/>The Future</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:auto-rows-[minmax(300px,_auto)]">
        {/* Intro Cell */}
        <BentoCell index={0} title="Bio" icon={Award} className="lg:col-span-8">
          <h3 className="text-3xl font-bold text-primary mb-6 tracking-tight">Software Developer & Student</h3>
          <p className="text-secondary text-lg leading-relaxed font-medium">
            {ABOUT_DATA.intro}
          </p>
        </BentoCell>

        {/* Location/Focus Cell */}
        <BentoCell index={1} title="Location" icon={ExternalLink} className="lg:col-span-4">
          <div className="mt-auto space-y-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-1">Based in</span>
              <span className="text-2xl font-bold text-primary">India, Worldwide</span>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-secondary block mb-1">Core Focus</span>
              <span className="text-2xl font-bold text-primary">AI & Full-Stack</span>
            </div>
          </div>
        </BentoCell>

        {/* Experience Cell 1 */}
        <BentoCell index={2} title="Experience" icon={Briefcase} className="lg:col-span-6">
          <h3 className="text-2xl font-bold text-primary mb-4">{ABOUT_DATA.experience[0].role}</h3>
          <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-6">{ABOUT_DATA.experience[0].company}</p>
          <ul className="space-y-3 mb-8">
            {ABOUT_DATA.experience[0].details.slice(0, 2).map((detail, i) => (
              <li key={i} className="flex gap-3 text-secondary text-sm leading-relaxed">
                <span className="text-primary mt-1">•</span>
                {detail}
              </li>
            ))}
          </ul>
          <Magnetic>
            <span className="bg-primary text-white text-[9px] font-black uppercase tracking-widest px-6 py-3 rounded-full inline-block cursor-pointer">View Role</span>
          </Magnetic>
        </BentoCell>

        {/* Education Cell */}
        <BentoCell index={3} title="Education" icon={GraduationCap} className="lg:col-span-6">
          <h3 className="text-2xl font-bold text-primary mb-4">LPU Student</h3>
          <p className="text-secondary text-lg leading-relaxed font-medium mb-8">
            Currently pursuing B.Tech in CSE at Lovely Professional University.
          </p>
          <div className="flex items-center justify-between mt-auto">
             <span className="text-4xl font-bold text-primary">6.75</span>
             <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Current CGPA</span>
          </div>
        </BentoCell>

      </div>
    </section>
  );
};

export default About;
