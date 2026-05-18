import React from 'react';
import { CONTACT_DATA } from '../data';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="bg-primary/95 backdrop-blur-xl rounded-[4rem] p-12 sm:p-24 text-white overflow-hidden relative shadow-2xl border border-white/10"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
          <div>
            <span className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-black mb-8 block">Get In Touch</span>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-12 leading-[0.9]">Let's Build <br/>Something <br/>Great.</h2>
            
            <div className="space-y-12">
              <p className="text-white/70 text-xl max-w-sm leading-relaxed font-medium">
                I'm currently available for freelance work or full-time opportunities. Feel free to reach out!
              </p>
              
              <div className="flex flex-col gap-8">
                <a href={`mailto:${CONTACT_DATA.email}`} className="text-3xl md:text-4xl font-bold hover:translate-x-6 transition-all duration-500 inline-flex items-center gap-6 group">
                  Email Me <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </a>
                <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="text-3xl md:text-4xl font-bold hover:translate-x-6 transition-all duration-500 inline-flex items-center gap-6 group">
                  LinkedIn <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 sm:p-16 border border-white/10 self-center">
            <form className="space-y-12">
              <div className="space-y-8">
                <input type="text" placeholder="Your Name" className="w-full bg-transparent border-b border-white/20 pb-5 text-2xl font-bold placeholder:text-white/20 focus:outline-none focus:border-white transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-transparent border-b border-white/20 pb-5 text-2xl font-bold placeholder:text-white/20 focus:outline-none focus:border-white transition-all" />
                <textarea rows={2} placeholder="Brief about your project" className="w-full bg-transparent border-b border-white/20 pb-5 text-2xl font-bold placeholder:text-white/20 focus:outline-none focus:border-white transition-all resize-none" />
              </div>
              <button type="button" className="w-full bg-white text-primary py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-tertiary transition-all active:scale-95 shadow-xl">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
