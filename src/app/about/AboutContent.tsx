'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, ShieldCheck, Handshake, Quote } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutContent() {
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
              Cerebro Workforce Solutions manages the entire hiring process on your behalf — so you spend
              zero time sifting through CVs, chasing candidates, or second-guessing decisions. We deliver
              the right people, ready to work, so you can stay focused on your business..
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="what-we-do" className="py-24 relative z-10 bg-white">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-5 lg:sticky lg:top-32 h-fit"
            >
              <motion.div variants={fadeUpVariant} className="flex flex-col gap-6">
                <div>
                  <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
                    What We Do
                  </Badge>
                  <h2 className="text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-[1.1] mb-8">
                    Every hiring need, <br />
                    <span className="text-accent underline decoration-slate-200 underline-offset-8">covered.</span>
                  </h2>
                </div>

                <p className="text-lg text-slate-500 font-medium leading-relaxed max-w-md">
                  From permanent hires to virtual teams, we deliver workforce solutions that fit your business, your budget, and your timeline.
                </p>

                <div className="pt-8">
                  <Link href="/services" className="inline-flex items-center text-accent font-black text-sm uppercase tracking-widest gap-2 hover:gap-4 transition-all">
                    View All Solutions <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            {/* Right List Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7 flex flex-col gap-4"
            >
              {[
                {
                  id: 1,
                  title: "Permanent Placement",
                  desc: "Full-time hiring for critical, function-specific roles that require deep business understanding and long-term commitment."
                },
                {
                  id: 2,
                  title: "Contract Staffing",
                  desc: "Flexible, short- to mid-term placements for project surges, coverage gaps, or specialized operational needs."
                },
                {
                  id: 3,
                  title: "Virtual Workforce",
                  desc: "Function-specific virtual professionals embedded directly into your workflows, not generic outsourcing, but purpose-built remote talent."
                },
                {
                  id: 4,
                  title: "Talent Sourcing",
                  desc: "Industry-aware candidate screening and function-specific talent identification, designed to surface professionals who genuinely fit the role."
                }
              ].map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={fadeUpVariant}
                  className={`flex flex-col md:flex-row items-center gap-8 p-10 rounded-[2.5rem] border border-slate-100 transition-all hover:translate-x-3 duration-300 group ${idx % 2 === 0 ? 'bg-white shadow-sm' : 'bg-slate-50/50 shadow-none'}`}
                >
                  <div className="w-20 h-20 shrink-0 bg-slate-900 text-white rounded-3xl flex items-center justify-center text-3xl font-black shadow-xl group-hover:bg-accent transition-colors duration-500">
                    {item.id}
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-black text-slate-900 font-heading tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed text-lg italic pr-4">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section id="mission" className="py-32 relative overflow-hidden bg-slate-900 text-white selection:bg-accent/30 selection:text-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-16 items-start"
          >
            {/* Mission Header */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-4 lg:sticky lg:top-32">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/40 text-accent bg-accent/10 mb-6">
                Our Mission
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-white leading-tight">
                Built around one promise: <span className="text-accent">confidence in every hire.</span>
              </h2>
            </motion.div>

            {/* Mission Body */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-8 flex flex-col gap-10">
              <div className="space-y-8 text-xl md:text-2xl font-medium text-slate-300 leading-relaxed italic border-l-4 border-accent pl-8">
                <p>
                  Business owners have enough on their plate. Finding the right people shouldn't add to the burden, it should be one less thing to think about.
                </p>
              </div>

              <div className="space-y-8 text-xl md:text-2xl font-medium text-slate-400 leading-relaxed">
                <p className="text-white font-bold">
                  To bridge organizations with intelligent Cerebro talent, skillful minds whose intelligence, adaptability, and functional expertise drive efficiency, accuracy, and sustainable growth.
                </p>

                <div className="pt-10 border-t border-white/10">
                  <p className="text-3xl md:text-4xl font-black font-heading text-accent tracking-tighter uppercase">
                    &ldquo;We handle the talent. <br className="md:hidden" />
                    <span className="text-white">You run the business.&rdquo;</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-32 relative overflow-hidden bg-white text-slate-900 selection:bg-accent/20 selection:text-accent border-y border-slate-50">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-16 items-start"
          >
            {/* Vision Header */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-4 lg:sticky lg:top-32">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
                Our Vision
              </Badge>
              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
                To be the workforce partner that businesses <span className="text-accent">trust completely.</span>
              </h2>
            </motion.div>

            {/* Vision Body */}
            <motion.div variants={fadeUpVariant} className="lg:col-span-8 flex flex-col gap-10">
              <div className="space-y-8 text-xl md:text-2xl font-medium text-slate-500 leading-relaxed italic border-l-4 border-accent pl-8">
                <p>
                  We envision a business world where hiring is no longer a source of uncertainty, where every professional placed is intelligent, capable, and ready to contribute from day one.
                </p>
              </div>

              <div className="space-y-8 text-xl md:text-2xl font-medium text-slate-500 leading-relaxed">
                <p className="text-slate-800 font-bold">
                  Through precision-driven talent solutions, we enable business owners and leaders to focus entirely on growth, knowing their workforce is built on the right foundation.
                </p>

                <div className="pt-10 border-t border-slate-100">
                  <p className="text-3xl md:text-4xl font-black font-heading text-slate-900 tracking-tighter uppercase italic">
                    &ldquo;Hire with confidence. <br className="md:hidden" />
                    <span className="text-accent underline decoration-slate-200 underline-offset-8">Lead with clarity.&rdquo;</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modern Values Section */}
      <section id="values" className="py-32 relative z-10 bg-slate-50 overflow-hidden">
        {/* Abstract Background Gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <motion.div variants={fadeUpVariant} className="text-center mb-20">
              <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
                Our Core Values
              </Badge>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading tracking-tight text-slate-900 mb-6">
                The principles that <br className="hidden md:block" />
                <span className="text-accent underline decoration-slate-200 underline-offset-8">drive us forward.</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 md:gap-10 w-full mb-24">
              {[
                {
                  id: "01",
                  title: "Intelligence",
                  desc: "We bring sharp thinking to every search, understanding your business deeply before we ever present a candidate.",
                  icon: Brain
                },
                {
                  id: "02",
                  title: "Integrity",
                  desc: "We do the right thing, always. Honest with clients, honest with candidates, no shortcuts, no compromises.",
                  icon: ShieldCheck
                },
                {
                  id: "03",
                  title: "Trustworthy",
                  desc: "When we say we'll deliver, we deliver. You can count on us to show up, follow through, and have your back.",
                  icon: Handshake
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUpVariant}
                    className="group relative bg-white/80 backdrop-blur-xl rounded-[2.5rem] p-10 overflow-hidden border border-white/50 shadow-lg hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 flex flex-col items-start"
                  >
                    {/* Big background number */}
                    <div className="absolute -right-4 -bottom-10 text-[180px] font-black font-heading text-slate-100/50 group-hover:text-accent/5 transition-colors duration-500 select-none pointer-events-none z-0">
                      {item.id}
                    </div>

                    <div className="relative z-10 flex flex-col h-full">
                      <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center mb-8 border border-slate-100 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-sm">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-black font-heading text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-lg text-slate-500 font-medium leading-relaxed group-hover:text-slate-600 transition-colors duration-500">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* The "Partner" Quote */}
            <motion.div variants={fadeUpVariant} className="relative max-w-5xl mx-auto w-full">
              <div className="absolute -top-12 -left-8 md:-top-16 md:-left-12 text-accent/10 z-0">
                <Quote size={120} className="transform rotate-180" />
              </div>
              <div className="bg-slate-900 rounded-[3rem] p-12 md:p-16 lg:p-20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                <p className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-relaxed font-heading tracking-tight italic">
                  &ldquo;We show up, we deliver, and we've got your back. Every hire. Every time. That's cereBRO&rdquo;
                </p>
                <div className="relative z-10 mt-10 flex items-center gap-4">
                  <div className="h-px bg-white/20 w-16" />
                  <span className="text-accent font-black uppercase tracking-widest text-sm">The Cerebro Promise</span>
                </div>
              </div>
            </motion.div>

          </motion.div>
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
