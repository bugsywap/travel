'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, BarChart, UserPlus, Target } from 'lucide-react';
import { Feature } from "@/components/ui/feature-section-with-bento-grid";
import Link from 'next/link';

export default function HomeContent() {
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
    <main className="min-h-screen selection:bg-accent/20 selection:text-accent overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-100 rounded-full shadow-sm text-sm font-semibold text-slate-600">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Voted #1 Recruitment Agency 2026
              </div>

              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-tight font-heading">
                Bridging <br />
                <span className="block mt-2 text-accent underline decoration-slate-200 underline-offset-8">
                  Professionals.
                </span>
              </h1>

              <p className="text-lg text-slate-500 leading-relaxed max-w-lg font-medium">
                Cerebro Workforce Solutions connects elite talent with world-class organizations. We specialize in finding the perfect fit for specialized industry sectors.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/booking" className="px-8 py-5 bg-accent hover:bg-accent-hover text-white font-black rounded-full transition-all shadow-xl shadow-accent/20 flex items-center gap-2 group text-lg">
                  Book Appointment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="px-8 py-5 bg-white border border-slate-100 text-slate-900 font-bold rounded-full transition-all hover:bg-slate-50 shadow-md text-lg">
                  Explore Solutions
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-6">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900">5,000+</span>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Placements</span>
                </div>
                <div className="h-10 w-px bg-slate-200" />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-slate-900">98%</span>
                  <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">Success Rate</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Images Area */}
            <div className="relative h-[650px] w-full hidden lg:block">
              {/* Overlapping Rounded Cards with Professional Imagery */}
              <div className="absolute top-[20%] left-0 w-[55%] h-[45%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-20 hover:z-30 transition-all duration-500 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Collaboration" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-[15%] w-[60%] h-[50%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 hover:z-30 transition-all duration-500 hover:scale-105 bg-slate-100">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Professional Meeting" className="w-full h-full object-cover" />
              </div>

              {/* Floating Glass UI Element */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-[50%] right-0 translate-y-[-50%] p-6 bg-white/70 backdrop-blur-xl border border-white/40 rounded-[2rem] shadow-2xl z-40 max-w-[280px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Candidate" />
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2.5 h-2.5 bg-yellow-400 rounded-full" />)}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">4.9/5 from 3k+ Hiring Managers</span>
                  </div>
                </div>
                <h4 className="font-heading font-black text-slate-800 text-lg leading-tight">Helping you find the perfect elite match in days.</h4>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section (Formerly Specialty Sectors) */}
      <section id="services-grid" className="py-24 relative">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Our Expertise</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 leading-[1.1]">Premier Workforce <span className="text-accent underline decoration-slate-200 underline-offset-8">Solutions.</span></h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-2 text-lg font-medium leading-relaxed">
              We provide tailored recruitment strategies designed to match your organization with world-class professional talent.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Executive Search</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Strategic leadership acquisition for c-suite and high-impact roles.</p>
              <Link href="/services#executive" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <UserPlus size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Direct Hire</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Building permanent foundations with fully-vetted professional talent.</p>
              <Link href="/services#direct" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Briefcase size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Contract Staffing</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Scale your operations with agile, specialized contract professionals.</p>
              <Link href="/services#staffing" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <BarChart size={28} />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">HR Consulting</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Strategic insights into salary benchmarks and talent mapping.</p>
              <Link href="/services#consult" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Expertise Section (Restored) */}
      <section id="sectors" className="py-24 relative bg-slate-50/50">
        <div className="container px-6 mx-auto">
          <Feature />
        </div>
      </section>

      {/* Feature Section (Recruitment Methodology) */}
      <section className="py-24">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* For Candidates */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="bg-slate-900 p-12 rounded-[3.5rem] shadow-xl group hover:shadow-2xl transition-all cursor-pointer text-white">
              <div className="w-16 h-16 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-accent transition-colors">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-black font-heading mb-4 text-white">For Candidates</h3>
              <p className="text-lg text-white/80 mb-8 font-medium">Submit your credentials to join our elite network and receive specialized career matchmaking.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-8 shadow-sm">
                <BarChart size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 font-heading tracking-tight">Market Intelligence</h3>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">We provide businesses with deep insights into salary benchmarks, talent availability, and hiring trends.</p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col items-start hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-8 shadow-sm">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 font-heading tracking-tight">Scalable Solutions</h3>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">Whether you're a startup or an enterprise, our hiring solutions scale with your business's dynamic needs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-accent text-white selection:bg-white/20">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="container relative z-10 px-6 mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 font-heading leading-tight text-white">Ready to Build Your <br />Elite Workforce?</h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-2xl font-medium text-white">Partner with Cerebro Workforce Solutions and find the professionals who will drive your business forward.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/contact" className="px-12 py-6 bg-white text-accent font-black rounded-full hover:bg-slate-50 transition-all shadow-2xl text-xl flex items-center gap-2">
                Hiring Now <UserPlus size={24} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
