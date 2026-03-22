'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Send, Users, Briefcase } from 'lucide-react';

export default function InquiryContent() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent pb-20 pt-40">
      <div className="container px-6 mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 font-heading leading-tight">
            Start Your <span className="text-accent underline decoration-slate-200 underline-offset-8">Inquiry.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Whether you are looking to hire world-class talent or seeking your next major career milestone, we are here to facilitate the transition.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* For Businesses */}
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl group hover:shadow-2xl transition-all cursor-pointer">
            <div className="w-16 h-16 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-colors">
              <Briefcase className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black font-heading text-slate-900 mb-4">For Businesses</h2>
            <p className="text-lg text-slate-500 mb-8 font-medium">Request a consultation for executive search, direct hire, or scalable contract staffing solutions.</p>
            <div className="inline-flex items-center gap-2 text-accent font-black group-hover:gap-4 transition-all">
              Business Inquiry Form <Send className="w-5 h-5" />
            </div>
          </motion.div>

          {/* For Candidates */}
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="bg-slate-900 p-12 rounded-[3.5rem] shadow-xl group hover:shadow-2xl transition-all cursor-pointer text-white">
            <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-accent transition-colors">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black font-heading mb-4 text-white">For Candidates</h2>
            <p className="text-lg text-white/80 mb-8 font-medium">Submit your credentials to join our elite network and receive specialized career matchmaking.</p>
            <div className="inline-flex items-center gap-2 text-white font-black group-hover:gap-4 transition-all">
              Join Elite Network <Send className="w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
