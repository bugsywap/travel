'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ServicesContent() {
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
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-white border-b border-slate-100">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[70%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-4xl mx-auto flex flex-col items-center">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
              What We Do
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 font-heading leading-tight">
              Every hiring need, <br />
              <span className="text-accent underline decoration-slate-200 underline-offset-8">covered.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-slate-500 leading-relaxed max-w-2xl">
              From permanent hires to virtual teams, we deliver workforce solutions that fit your business, your budget, and your timeline.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Showcase */}
      <section className="py-24 bg-slate-50 relative z-10 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

        <div className="container px-6 mx-auto flex flex-col gap-32 relative z-10">
          {[
            {
              id: "01",
              title: "Permanent Placement",
              desc: "Full-time hiring for critical, function-specific roles that require deep business understanding and long-term commitment.",
              img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200",
              bullets: [
                "Culture-first candidate matching",
                "Integrated skill verification testing",
                "Post-placement support and check-ins"
              ]
            },
            {
              id: "02",
              title: "Contract Staffing",
              desc: "Flexible, short- to mid-term placements for project surges, coverage gaps, or specialized operational needs.",
              img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
              bullets: [
                "Rapid deployment of specialized talent",
                "Agile scaling for fluctuating workloads",
                "Smooth onboarding and payroll management"
              ]
            },
            {
              id: "03",
              title: "Virtual Workforce",
              desc: "Function-specific virtual professionals embedded directly into your workflows, not generic outsourcing, but purpose-built remote talent.",
              img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
              bullets: [
                "Dedicated time-zone aligned professionals",
                "Seamless integration into your internal systems",
                "Cost-effective scaling without compromising quality"
              ]
            },
            {
              id: "04",
              title: "Talent Sourcing",
              desc: "Industry-aware candidate screening and function-specific talent identification, designed to surface professionals who genuinely fit the role.",
              img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200",
              bullets: [
                "Deep-dive market mapping and passive talent networking",
                "Rigorous multi-stage vetting process",
                "Data-driven insights to refine your ideal candidate profile"
              ]
            }
          ].map((srv, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={srv.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center relative group`}
                id={srv.title.toLowerCase().split(' ')[0]}
              >
                {/* Large Background Number Effect */}
                <div className={`absolute top-1/2 ${isEven ? '-right-20' : '-left-20'} -translate-y-1/2 text-[300px] font-black font-heading text-slate-200/40 z-0 select-none pointer-events-none transition-colors duration-700 group-hover:text-accent/10 hidden lg:block`}>
                  {srv.id}
                </div>

                {/* Image Side */}
                <motion.div variants={fadeUpVariant} className="w-full lg:w-1/2 relative z-10">
                  <div className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white transition-opacity duration-700 hover:opacity-[0.98]">
                    <img src={srv.img} alt={srv.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div variants={fadeUpVariant} className="w-full lg:w-1/2 relative z-10">
                  <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
                    Solution {srv.id}
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 mb-6">
                    {srv.title}
                  </h2>
                  <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed mb-8">
                    {srv.desc}
                  </p>

                  <ul className="space-y-4 mb-10">
                     {srv.bullets.map((bullet, bIdx) => (
                       <li key={bIdx} className="flex items-start gap-4">
                         <div className="mt-1">
                           <CheckCircle2 size={24} className="text-accent" />
                         </div>
                         <span className="text-lg text-slate-700 font-medium">{bullet}</span>
                       </li>
                     ))}
                  </ul>

                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-accent text-white font-bold rounded-full transition-colors shadow-lg shadow-slate-900/20 group/btn">
                    Get Started <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Layer */}
      <section className="py-24 relative overflow-hidden bg-accent text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container relative z-10 flex flex-col items-center justify-center text-center px-6 mx-auto">
          <h2 className="mb-6 text-5xl md:text-6xl font-black tracking-tighter font-heading text-white">Ready to transform your workforce?</h2>
          <p className="mb-10 max-w-2xl text-xl text-white/90">Let's discuss how Cerebro Workforce Solutions can build your perfect team.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-accent font-bold h-14 px-10 text-lg hover:bg-slate-50 transition-all shadow-xl group hover:scale-[1.02]">
            Contact Us Today <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
