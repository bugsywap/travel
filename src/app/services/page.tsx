'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users2, Target, Briefcase, BarChart4, ArrowRight } from "lucide-react";

export default function Services() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent pb-20">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-slate-100">
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 font-heading">
              Our <span className="text-accent underline decoration-slate-200 underline-offset-8">Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              We provide comprehensive workforce strategies, from high-level executive search to agile contract staffing solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 relative z-10">
        <div className="container px-6 mx-auto flex flex-col gap-24">
          
          {/* Service 1: Executive Search */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="grid lg:grid-cols-2 gap-12 items-center" id="executive">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px]">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000" alt="Executive Search" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-white text-accent flex items-center justify-center mb-8 shadow-sm border border-slate-100">
                <Target size={32} />
              </div>
              <h2 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-6 font-heading">Executive Search</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Finding high-level leadership requires more than a job posting. We use a strategic, research-driven approach to identify and attract top-tier executives who can lead your organization into the future.
              </p>
              <ul className="text-slate-600 mb-10 space-y-4 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Discreet and confidential sourcing</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Comprehensive leadership vetting</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Multi-round behavioral assessment</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-full transition-all shadow-lg shadow-accent/25">
                Hire Leaders <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Service 2: Direct Hire */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="grid lg:grid-cols-2 gap-12 items-center" id="direct">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 rounded-2xl bg-white text-accent flex items-center justify-center mb-8 shadow-sm border border-slate-100">
                <Users2 size={32} />
              </div>
              <h2 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-6 font-heading">Direct Hire Placement</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Build your permanent foundation with high-quality permanent staff. We manage the entire recruitment lifecycle, from initial scouting to final negotiations, ensuring you only see the most qualified candidates.
              </p>
              <ul className="text-slate-600 mb-10 space-y-4 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Culture-first candidate matching</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Integrated skill verification testing</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Post-placement support and check-ins</li>
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg">
                View Solutions <ArrowRight size={20} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px]">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1000" alt="Recruitment Solutions" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Service 3 & 4 Grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300" id="staffing">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-6 shadow-sm">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-black font-heading tracking-tight text-slate-900 mb-4 font-heading">Contract Staffing</h3>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Scale your team up or down based on project demands. We provide skilled contract professionals across all our specialty sectors to help you maintain operational agility.
              </p>
              <Link href="/contact" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Request Contract Talent <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100" id="consult">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-6 shadow-sm">
                <BarChart4 size={32} />
              </div>
              <h3 className="text-3xl font-black font-heading tracking-tight text-slate-900 mb-4 font-heading">Workforce Consulting</h3>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Optimize your hiring internally. We offer strategic HR consulting, including salary benchmarking, talent mapping, and retention strategy development.
              </p>
              <Link href="/contact" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Get Strategic Insight <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
