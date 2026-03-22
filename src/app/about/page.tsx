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

  return (
    <div className="min-h-screen bg-secondary selection:bg-accent/20 selection:text-accent">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#f8fafc] border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 font-heading">
              About <span className="text-accent">Horizon.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Your journey begins with us. Discover who we are and what drives our passion for curating unforgettable travel experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative z-10 bg-white">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h2 className="text-accent text-sm tracking-widest uppercase mb-3 font-bold flex items-center gap-2"><div className="w-8 h-px bg-accent"></div> Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 mb-8">Decades of Discovery.</h3>
            
            <p className="text-lg text-slate-500 mb-6 leading-relaxed">
              Founded in 2010, Horizon Travel started with a simple vision: to make the world accessible to everyone. We believe that traveling is more than just visiting new places; it's about experiencing different cultures, meeting new people, and stepping out of your comfort zone.
            </p>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Over the past decade, we have grown from a small local agency into a globally recognized travel partner, helping thousands of clients curate their dream vacations, honeymoons, and corporate retreats.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-5xl font-black text-accent mb-2 font-heading">10k+</h4>
                <p className="font-bold text-slate-700 text-lg">Happy Travelers</p>
              </div>
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
                <h4 className="text-5xl font-black text-accent mb-2 font-heading">50+</h4>
                <p className="font-bold text-slate-700 text-lg">Countries Visted</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="rounded-[3rem] overflow-hidden shadow-2xl h-[650px]">
            <img src="https://images.unsplash.com/photo-1522083165195-344cbdf9a452?auto=format&fit=crop&q=80&w=1000" alt="Our Team" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative z-10 bg-slate-50 border-y border-slate-100">
        <div className="container px-6 mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 mb-6">Why Choose Us</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">We are committed to providing the absolute best travel experience from the moment you contact us until you return home safely.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-accent flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Expert Knowledge</h3>
              <p className="text-slate-500 leading-relaxed text-lg">Our travel advisors have firsthand experience in the destinations we offer, guaranteeing insider advice.</p>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-accent flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Personalized Approach</h3>
              <p className="text-slate-500 leading-relaxed text-lg">We don't do cookie-cutter. Every itinerary is customized to your exact physical and budgetary requirements.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-emerald-50 text-accent flex items-center justify-center mb-6 shadow-sm border border-emerald-100">
                <CheckCircle2 size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 font-heading">Global Network</h3>
              <p className="text-slate-500 leading-relaxed text-lg">We have stellar partnerships with top hotels, airlines, and local guides worldwide to give you exclusive perks.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden bg-accent text-white border-t border-accent-hover">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="container relative z-10 flex flex-col items-center justify-center h-full px-6 mx-auto text-center">
          <h2 className="mb-6 text-white text-5xl md:text-6xl font-black tracking-tighter font-heading">Let's Create Your Next Memory</h2>
          <p className="mb-10 max-w-2xl text-lg md:text-xl text-white/90">Get in touch with our agents today and start planning your perfect getaway.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-accent font-bold h-14 px-10 text-lg hover:bg-slate-50 transition-all shadow-lg group">
            Get in Touch <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
