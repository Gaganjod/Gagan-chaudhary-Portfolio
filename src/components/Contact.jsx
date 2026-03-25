import React from 'react';
import { CONTACT_DATA } from '../data';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe as Github, Monitor as Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-10 text-lg">
              I'm currently available for freelance work or full-time opportunities. 
              If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors">
                <div className="p-4 bg-black/50 rounded-xl text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email Me</p>
                  <p className="text-white font-medium">{CONTACT_DATA.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-secondary/30 transition-colors">
                <div className="p-4 bg-black/50 rounded-xl text-secondary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Call Me</p>
                  <p className="text-white font-medium">{CONTACT_DATA.phone}</p>
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <a href={CONTACT_DATA.github} className="p-4 bg-white/5 rounded-2xl text-white hover:text-primary hover:border-primary/50 border border-white/5 transition-all">
                  <Github size={24} />
                </a>
                <a href={CONTACT_DATA.linkedin} className="p-4 bg-white/5 rounded-2xl text-white hover:text-secondary hover:border-secondary/50 border border-white/5 transition-all">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Your Name</label>
                  <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1">Your Email</label>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Subject</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all" placeholder="Project Inquiry" />
              </div>
              <div className="space-y-2">
                <label className="text-sm text-gray-400 ml-1">Message</label>
                <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none" placeholder="Hello Gagan, I would like to..." />
              </div>
              <button type="button" className="w-full bg-primary/10 text-primary border border-primary/50 hover:bg-primary hover:text-black py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(74,222,128,0.2)] hover:shadow-[0_0_25px_rgba(74,222,128,0.4)]">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
