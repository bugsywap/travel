'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function About() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-slate-100">
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 font-heading">
              About <span className="text-accent underline decoration-slate-200 underline-offset-8">Cerebro.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              We are dedicated to human capital excellence. Cerebro Workforce Solutions bridges the gap between visionary companies and elite professional talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h2 className="text-accent text-sm tracking-widest uppercase mb-3 font-bold flex items-center gap-2"><div className="w-8 h-px bg-accent"></div> Our Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 mb-8">Talent with Intention.</h3>
            
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              Founded in 2018, Cerebro was born from a simple realization: the recruitment process is often too transactional. We believe that a successful hire is more than just matching a resume to a job description; it's about aligning goals, culture, and long-term ambition.
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Today, we serve as a strategic partner to high-growth tech firms, leading healthcare systems, and top-tier financial institutions, providing the human intelligence that drives organizational success.
            </p>

            <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-accent mb-2">500+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Candidates Placed</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-accent mb-2">120+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Partner Companies</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-accent mb-2">98%</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Retention Rate</p>
            </motion.div>
            <motion.div variants={fadeUpVariant} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm text-center">
              <div className="text-4xl font-black text-accent mb-2">12+</div>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Global Markets</p>
            </motion.div>
          </motion.div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="rounded-[3rem] overflow-hidden shadow-2xl h-[650px]">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000" alt="Cerebro Team Collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative z-10 border-y border-slate-100">
        <div className="container px-6 mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 mb-6">Our Core Commitment</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We don't just fill seats; we build foundations for future industry leaders through careful selection and strategic partnership.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 shadow-sm border border-accent/20">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Deep Sector Focus</h3>
              <p className="text-slate-500 leading-relaxed text-lg">Our recruiters are industry experts who speak the same language as your hiring managers and candidates.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 shadow-sm border border-accent/20">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Hyper-Personalized Matching</h3>
              <p className="text-slate-500 leading-relaxed text-lg">We move beyond keywords to understand core values, soft skills, and long-term career trajectories.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 shadow-sm border border-accent/20">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Scale at Speed</h3>
              <p className="text-slate-500 leading-relaxed text-lg">Our extensive network allows us to source and verify high-quality candidates in record-breaking timelines.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-accent text-white border-t border-accent-hover">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="container relative z-10 flex flex-col items-center justify-center h-full px-6 mx-auto text-center">
          <h2 className="mb-6 text-white text-5xl md:text-6xl font-black tracking-tighter font-heading">Elevate Your Career with Us</h2>
          <p className="mb-10 max-w-2xl text-lg md:text-xl text-white/90">Join our network of elite professionals and find your next transformative career opportunity.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-accent font-bold h-14 px-10 text-lg hover:bg-slate-50 transition-all shadow-lg group">
            Apply Now <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
