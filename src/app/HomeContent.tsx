'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, BarChart, Target, Building, Globe, Search, CheckCircle2, ChevronRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function HomeContent() {
  const [activeTalentTab, setActiveTab] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const talentData = [
    {
      title: "Analytics & Finance",
      shortDesc: "Analytical and operational core business talent.",
      bullets: [
        "Supply Chain & Logistics Analysts",
        "Demand & Inventory Planners",
        "Financial Analysts & FP&A Professionals",
        "Cost & Management Accountants",
        "Business & Operations Analysts"
      ],
      icon: <BarChart size={28} />,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Executive Support",
      shortDesc: "High-level roles requiring discretion and structure.",
      bullets: [
        "Executive Assistants (C-suite & Senior Leadership)",
        "Operations & Business Support Assistants",
        "Finance & Administrative Support Professionals"
      ],
      icon: <Briefcase size={28} />,
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
    },
    {
      title: "Virtual Talent",
      shortDesc: "Embedded function-specific virtual professionals.",
      bullets: [
        "Virtual Assistants (Finance, Ops, Data)",
        "Virtual Executive Assistants",
        "Virtual Engineers (Data, Systems, ERP)",
        "Virtual Healthcare Assistants"
      ],
      icon: <Globe size={28} />,
      img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1200"
    }
  ];

  return (
    <main className="min-h-screen font-sans overflow-x-hidden bg-white text-slate-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Copy */}
            <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="lg:col-span-6 flex flex-col items-start gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-full shadow-sm text-sm font-bold text-accent">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                Your Workforce Partner For Modern Businesses
              </div>

              <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05] font-heading">
                We take hiring off your plate <span className="text-accent underline decoration-slate-200 underline-offset-4 decoration-4">completely.</span>
              </h1>

              <p className="text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg font-medium">
                We manage the entire process—delivering the right people, vetted and ready to work—so you can stay focused on scaling your business.
              </p>

              <div className="flex flex-wrap gap-4 w-full sm:w-auto mt-4">
                <Link href="/contact" className="w-full sm:w-auto px-8 py-5 bg-accent hover:bg-accent-hover text-white font-black rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                  Hire Top Talent <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-5 bg-white border border-slate-200 text-slate-900 font-bold rounded-full transition-all hover:bg-slate-50 shadow-sm flex items-center justify-center text-lg">
                  Explore Solutions
                </Link>
              </div>
              
              <div className="mt-8 flex items-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest flex-wrap">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-accent"/> Vetted Professionals</span>
                <span className="hidden sm:inline w-1.5 h-1.5 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5"><CheckCircle2 size={16} className="text-accent"/> End-to-End Search</span>
              </div>
            </motion.div>

            {/* Right Visuals */}
            <div className="lg:col-span-6 relative h-[600px] hidden lg:block">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute right-0 top-[5%] w-[85%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-50 z-10"
              >
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" alt="Team Collaboration" className="w-full h-full object-cover" />
              </motion.div>

              {/* Floating Widgets */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-[15%] left-[5%] bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white"><Target size={24} /></div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Precision Match</p>
                  <p className="text-xs text-slate-500 font-bold">100% Function-Aware</p>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }} 
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-[10%] left-[0%] bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 flex items-center gap-4"
              >
                <div className="flex -space-x-4">
                   <img src="https://i.pravatar.cc/100?img=1" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="avatar" />
                   <img src="https://i.pravatar.cc/100?img=2" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="avatar" />
                   <img src="https://i.pravatar.cc/100?img=3" className="w-12 h-12 rounded-full border-4 border-white shadow-sm" alt="avatar" />
                </div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase tracking-widest">Elite Roster</p>
                  <p className="text-xs text-slate-500 font-bold">Ready to interview</p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES */}
      <section className="py-24 relative bg-slate-50 border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge className="mb-4 bg-accent/5 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">Our Expertise</Badge>
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
              Premium Workforce <span className="text-accent underline decoration-slate-300 underline-offset-4 decoration-4">Solutions.</span>
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              { icon: <Building size={28} />, title: "Permanent", desc: "Full-time hiring for critical, function-specific roles." },
              { icon: <Briefcase size={28} />, title: "Contract", desc: "Flexible, mid-term placements for project surges." },
              { icon: <Globe size={28} />, title: "Virtual", desc: "Embedded remote professionals built for your workflows." },
              { icon: <Search size={28} />, title: "Sourcing", desc: "Industry-aware screening for genuine role fit." }
            ].map((svc, i) => (
              <motion.div key={i} variants={fadeUpVariant} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all group lg:hover:-translate-y-2 block">
                <div className="w-14 h-14 rounded-2xl bg-accent/5 shadow-sm text-accent flex items-center justify-center mb-6 border border-accent/10 group-hover:bg-accent group-hover:text-white transition-colors">
                  {svc.icon}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">{svc.title}</h3>
                <p className="text-base text-slate-500 font-medium leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. INTERACTIVE DEEP DIVE */}
      <section className="py-24 relative bg-white overflow-hidden border-b border-slate-100">
        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight font-heading leading-tight mb-4 text-slate-900">
              Elite professionals across <span className="text-accent underline decoration-slate-200 underline-offset-4 decoration-4">key functions.</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">Select an area of expertise to see our deep specialization.</p>
          </div>

          <div className="max-w-6xl mx-auto flex flex-col items-center">
            
            {/* 1. Mobile Dropdown (< md) */}
            <div className="w-full block md:hidden mb-8 relative z-30">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full bg-white border-2 border-slate-200 rounded-2xl p-5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:border-accent outline-none hover:border-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center">
                    {React.cloneElement(talentData[activeTalentTab].icon as React.ReactElement<any>, { size: 20 })}
                  </div>
                  <span className="font-black text-slate-900 text-lg">{talentData[activeTalentTab].title}</span>
                </div>
                <div className={`transition-transform duration-300 text-accent bg-accent/10 p-1.5 rounded-lg border border-accent/20 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              
              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-[calc(100%+0.5rem)] left-0 w-full bg-white border-2 border-slate-200 shadow-2xl rounded-2xl overflow-hidden z-50 flex flex-col origin-top"
                  >
                    {talentData.map((tab, idx) => (
                      <button 
                        key={idx}
                        onClick={() => { setActiveTab(idx); setIsMobileMenuOpen(false); }}
                        className={`flex items-center gap-4 p-5 text-left transition-colors border-b border-slate-100 last:border-0 hover:bg-slate-50 relative`}
                      >
                         {activeTalentTab === idx && <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent" />}
                         <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeTalentTab === idx ? 'bg-accent text-white' : 'bg-slate-100 text-slate-400'}`}>
                           {React.cloneElement(tab.icon as React.ReactElement<any>, { size: 20 })}
                         </div>
                         <div>
                           <span className={`block font-black text-lg ${activeTalentTab === idx ? 'text-slate-900' : 'text-slate-600'}`}>{tab.title}</span>
                         </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 2. Desktop & Tablet Pill Tabs (md+) */}
            <div className="hidden md:flex bg-slate-100/80 backdrop-blur-md p-2 rounded-[2rem] mb-12 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)] border border-slate-200/60 relative z-20 w-fit mx-auto overflow-x-auto hide-scrollbar">
              {talentData.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`relative flex items-center gap-3 px-8 py-4 transition-all duration-500 font-bold whitespace-nowrap outline-none rounded-2xl flex-shrink-0`}
                >
                  {/* Sliding Background */}
                  {activeTalentTab === idx && (
                    <motion.div
                      layoutId="activePillTab"
                      className="absolute inset-0 bg-white shadow-md border border-slate-200/50 rounded-2xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <div className={`relative z-10 transition-colors duration-500 flex-shrink-0 ${activeTalentTab === idx ? "text-accent" : "text-slate-400 group-hover:text-slate-600"}`}>
                    {React.cloneElement(tab.icon as React.ReactElement<any>, { size: 22 })}
                  </div>
                  <span className={`relative z-10 text-base lg:text-lg tracking-wide transition-colors duration-500 ${activeTalentTab === idx ? 'text-accent' : 'text-slate-500 group-hover:text-slate-700'}`}>{tab.title}</span>
                </button>
              ))}
            </div>

            {/* Content Display (Full Width below tabs) */}
            <div className="w-full bg-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative z-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTalentTab}
                  initial={{ opacity: 0, scale: 0.98, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -15 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex flex-col lg:flex-row h-full min-h-[450px]"
                >
                  {/* Image Side */}
                  <div className="w-full lg:w-1/2 relative overflow-hidden bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-100 min-h-[250px] sm:min-h-[350px] lg:min-h-full">
                    <img src={talentData[activeTalentTab].img} alt={talentData[activeTalentTab].title} className="w-full h-full object-cover opacity-90 lg:hover:scale-105 transition-transform duration-[2s]" />
                    {/* Inner Gradient for blending */}
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white w-[101%]" />
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
                    <h4 className="text-3xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 mb-4">{talentData[activeTalentTab].title} Roles</h4>
                    <p className="text-lg text-slate-500 mb-8 font-medium border-b border-slate-100 pb-8 leading-relaxed">{talentData[activeTalentTab].shortDesc}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                      {talentData[activeTalentTab].bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-4 relative group">
                           <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:bg-accent transition-all text-accent group-hover:text-white border border-accent/10 group-hover:border-accent">
                             <CheckCircle2 size={16} />
                           </div>
                           <span className="text-slate-700 text-base font-bold leading-relaxed mt-0.5">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SERVE */}
      <section className="py-24 relative bg-slate-50 border-b border-slate-100 z-10">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
             <Badge className="mb-4 bg-accent/5 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">Industries We Serve</Badge>
            <h2 className="text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-tight">
              Specialized expertise for complex markets.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Manufacturing", img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
              { title: "Operations", img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" },
              { title: "Retail & FMCG", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" },
              { title: "Technology", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" },
              { title: "Enterprise", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
              { title: "Startups", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col cursor-pointer">
                <div className="h-56 overflow-hidden relative">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 text-center bg-white flex-grow flex items-center justify-center">
                  <h3 className="text-2xl font-black font-heading text-slate-900 tracking-tight uppercase group-hover:text-accent transition-colors">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AUTHORITY & TRUST (Z-Pattern) */}
      <section className="py-24 relative bg-white overflow-hidden">
        <div className="container px-6 mx-auto max-w-7xl">
          <div className="text-center mb-20 lg:mb-24">
            <Badge className="mb-4 bg-accent/5 text-accent border border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">The Cerebro Advantage</Badge>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-heading leading-tight mb-6">
              A partner that works <span className="text-accent underline decoration-slate-300 underline-offset-4 decoration-4">as hard as you do.</span>
            </h2>
            <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              We aren't a general staffing firm. We place professionals who deeply understand the function they support.
            </p>
          </div>

          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-24 items-center">
            {/* Visual */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="w-full lg:col-span-6 order-1 relative h-[450px] md:h-[500px] lg:h-[600px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border-4 border-slate-50">
               <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Process" className="w-full h-full object-cover lg:hover:scale-105 transition-transform duration-[2s]" />
               {/* Base Darkening Overlay */}
               <div className="absolute inset-0 bg-slate-900/40" />
               {/* Aggressive Bottom Gradient for text contrast */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
               <div className="absolute bottom-8 lg:bottom-10 left-6 lg:left-10 right-6 lg:right-10">
                 <p className="text-white text-[1.35rem] md:text-3xl font-black font-heading leading-snug italic block border-l-4 border-accent pl-5 md:pl-6">
                   "We prioritize the right fit over speed. Every placement is intentional."
                 </p>
               </div>
            </motion.div>
            
            {/* Features */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="w-full lg:col-span-6 order-2 flex flex-col gap-6 lg:gap-12">
              {[
                { icon: <Target size={28} />, title: "Precision Focusing", desc: "We focus exclusively on roles requiring intelligence and functional depth, ensuring true alignment." },
                { icon: <Search size={28} />, title: "Function-Aware Screening", desc: "Candidates are evaluated for real business understanding and capability, not just resume keywords." },
                { icon: <Users size={28} />, title: "Intelligence-First Hiring", desc: "Skills, mindset, and adaptability are evaluated at the core of every rigorous assessment we perform." }
              ].map((adv, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start bg-slate-50 sm:bg-white lg:bg-transparent p-8 lg:p-0 rounded-[2rem] lg:rounded-none border border-slate-100 lg:border-transparent shadow-sm lg:shadow-none hover:shadow-xl lg:hover:shadow-none transition-all group hover:-translate-y-1 lg:hover:-translate-y-0">
                  <div className="mt-1 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-accent lg:bg-accent/5 lg:border border-accent/10 text-white lg:text-accent shadow-lg lg:shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 lg:group-hover:scale-100 transition-transform duration-500">{adv.icon}</div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight font-heading group-hover:text-accent transition-colors">{adv.title}</h3>
                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{adv.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* 6. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-slate-50 text-center border-t border-slate-100">
        
        <div className="container relative z-10 px-6 mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-8 font-heading leading-[1.1] text-slate-900">
              Ready to Build Your Elite Workforce?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-500 mb-12 font-medium max-w-2xl leading-relaxed">
              Partner with Cerebro Workforce Solutions and find the professionals who will intuitively drive your business forward.
            </p>
            <Link href="/contact" className="px-12 py-6 bg-accent hover:bg-accent-hover text-white font-black rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 text-xl">
              Start Hiring Now <ArrowRight size={24} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
