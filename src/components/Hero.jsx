import React, { useRef } from 'react';
import { HERO_DATA } from '../data';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Magnetic from './Magnetic';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Parallax values
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  // Mouse 3D rotation for the headshot
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], ["15deg", "-15deg"]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], ["-15deg", "15deg"]));

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      ref={targetRef}
      id="home" 
      className="min-h-[120vh] flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-white perspective-2000"
    >
      {/* Dynamic Background Spotlight */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(34,34,34,0.05),transparent_70%)]"></div>

      <div className="max-w-7xl w-full relative z-10 text-center">
        {/* Centered Content */}
        <motion.div 
          style={{ y: textY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center preserve-3d"
        >

          <div className="relative text-center">
            <span className="text-secondary uppercase tracking-[0.4em] text-[10px] font-black mb-6 block">Creative Developer / 2026</span>
            <h1 className="text-7xl sm:text-8xl md:text-[13rem] font-bold leading-[0.8] tracking-tighter text-primary mb-12">
              <span className="block italic font-light text-secondary/20">Hello,</span>
              I'm Gagan
            </h1>
            
            <div className="space-y-10 flex flex-col items-center">
              <div className="flex items-center gap-6">
                <div className="h-px w-20 bg-primary/10"></div>
                <p className="text-xl md:text-4xl font-bold text-secondary tracking-tight">
                  {HERO_DATA.titles[0]}
                </p>
                <div className="h-px w-20 bg-primary/10"></div>
              </div>
              <p className="text-secondary max-w-2xl leading-relaxed text-2xl font-medium mx-auto">
                {HERO_DATA.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Kinetic Typography Background Layer */}
      <motion.div 
        style={{ y: bgTextY }}
        className="absolute bottom-0 left-0 text-[35rem] font-black leading-none text-primary opacity-[0.02] pointer-events-none select-none -mb-48 -ml-32 whitespace-nowrap"
      >
        CHAUDHARY GAGAN
      </motion.div>
    </section>
  );
};

export default Hero;
