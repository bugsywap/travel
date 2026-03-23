'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Briefcase, BarChart, UserPlus, Target, Building, Globe, Search, CheckCircle2 } from 'lucide-react';
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
                Intelligent Workforce Solutions for Modern Businesses
              </div>

              <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 leading-tight font-heading">
                We take hiring off your plate <br />
                <span className="block mt-2 text-accent underline decoration-slate-200 underline-offset-8">
                  completely..
                </span>
              </h1>

              <p className="text-md text-slate-500 leading-relaxed max-w-lg font-medium">
                Cerebro Workforce Solutions manages the entire hiring process on your behalf, so you spend
                zero time sifting through CVs, chasing candidates, or second-guessing decisions. We deliver
                the right people, ready to work, so you can stay focused on your business.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                <Link href="/booking" className="px-8 py-5 bg-accent hover:bg-accent-hover text-white font-black rounded-full transition-all shadow-xl shadow-accent/20 flex items-center gap-2 group text-lg">
                  Book Appointment <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="px-8 py-5 bg-white border border-slate-100 text-slate-900 font-bold rounded-full transition-all hover:bg-slate-50 shadow-md text-lg">
                  Explore Solutions
                </Link>
              </div>
            </motion.div>

            {/* Hero Images Area */}
            <div className="relative h-[650px] w-full hidden lg:block">
              {/* Overlapping Rounded Cards with Professional Imagery */}
              <div className="absolute top-[20%] left-0 w-[55%] h-[45%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-20 hover:z-30 transition-shadow duration-500">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Collaboration" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-[15%] w-[60%] h-[50%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 hover:z-30 transition-shadow duration-500 bg-slate-100">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" alt="Professional Meeting" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Core Services Section */}
      <section id="services-grid" className="py-24 relative">
        <div className="container px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">Our Expertise</Badge>
              <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 leading-[1.1]">Premier Workforce <span className="text-accent underline decoration-slate-200 underline-offset-8">Solutions.</span></h2>
            </div>
            <p className="text-slate-500 max-w-sm mb-2 text-lg font-medium leading-relaxed">
              From permanent hires to virtual teams, we deliver workforce solutions that fit your business, your budget, and your timeline.
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
                <Building size={28} />
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Permanent Placement</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Full-time hiring for critical, function-specific roles that require deep business understanding and long-term commitment.</p>
              <Link href="/services#permanent" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Briefcase size={28} />
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Contract Staffing</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Flexible, short- to mid-term placements for project surges, coverage gaps, or specialized operational needs.</p>
              <Link href="/services#contract" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Globe size={28} />
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Virtual Workforce</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Function-specific virtual professionals embedded directly into your workflows, not generic outsourcing, but purpose-built remote talent.</p>
              <Link href="/services#virtual" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group lg:hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                <Search size={28} />
              </div>
              <h3 className="text-xl lg:text-2xl font-black text-slate-900 mb-3 font-heading tracking-tight">Talent Sourcing</h3>
              <p className="text-slate-500 font-medium leading-relaxed mb-6">Industry-aware candidate screening and function-specific talent identification, designed to surface professionals who genuinely fit the role.</p>
              <Link href="/services#sourcing" className="text-accent font-black text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                Learn More <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Bento Grid Section - Light Mode Layout */}
      <section id="industries" className="py-24 relative bg-white border-y border-slate-100 z-10 overflow-hidden">
        {/* Subtle glowing abstract backgrounds */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-7xl mx-auto"
          >
            <motion.div variants={fadeUpVariant} className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
              <div className="max-w-2xl">
                <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6 backdrop-blur-sm">
                  Industries We Serve
                </Badge>
                <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-slate-900 leading-[1.1]">
                  Specialized expertise for <span className="text-accent underline decoration-slate-200 underline-offset-8">complex markets.</span>
                </h2>
              </div>
              <p className="text-slate-500 max-w-sm mb-2 text-lg font-medium leading-relaxed">
                We support organizations across a wide range of industries, delivering tailored workforce solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeUpVariant} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[660px]">
              {[
                {
                  title: "Manufacturing & Industrial",
                  desc: "Operations, process improvement, and productivity professionals for complex production environments.",
                  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
                  span: "md:col-span-2 lg:col-span-2",
                  maxWidth: "max-w-md"
                },
                {
                  title: "Operations",
                  desc: "End-to-end operations talent including analysts, planners, coordinators, and process specialists.",
                  img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
                  span: "md:col-span-1 lg:col-span-1",
                  maxWidth: "max-w-xs"
                },
                {
                  title: "Retail & FMCG",
                  desc: "Demand planning, category analytics, and operational support for fast-moving consumer businesses.",
                  img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
                  span: "md:col-span-1 lg:col-span-1",
                  maxWidth: "max-w-xs"
                },
                {
                  title: "Technology & SaaS",
                  desc: "IT and data professionals who understand the dynamics of high-growth tech environments.",
                  img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
                  span: "md:col-span-1 lg:col-span-1",
                  maxWidth: "max-w-xs"
                },
                {
                  title: "Mid-sized Enterprises",
                  desc: "Experienced professionals who understand corporate structure and can integrate quickly into existing teams.",
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
                  span: "md:col-span-1 lg:col-span-1",
                  maxWidth: "max-w-xs"
                },
                {
                  title: "Growing Startups",
                  desc: "Agile professionals who can build processes from scratch and scale operations alongside rapid growth.",
                  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200",
                  span: "md:col-span-2 lg:col-span-2",
                  maxWidth: "max-w-md"
                }
              ].map((item, index) => (
                <div key={index} className={`relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-xl transition-shadow duration-500 ${item.span} flex flex-col justify-end p-8 md:p-10 lg:min-h-[320px] group`}>
                  {/* Full Container Image Background */}
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover" />
                  
                  {/* Navy Blue Overlay (Uniform over whole container) */}
                  <div className="absolute inset-0 bg-slate-900/80" />
                  
                  {/* Content (Static, Always Visible, white text) */}
                  <div className={`relative z-10 ${item.maxWidth}`}>
                    <h3 className="text-2xl font-black font-heading text-white mb-3 tracking-tight">{item.title}</h3>
                    <p className="text-slate-200 text-sm md:text-base font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Specialized Talent Areas Section */}
      <section className="py-24 relative bg-white border-b border-slate-100 overflow-hidden text-slate-900">
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[70%] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
              Our Specialized Talent Areas
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 font-heading leading-tight mb-6">
              Elite professionals across <br /><span className="text-accent underline decoration-slate-200 underline-offset-8">key business functions.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                title: "Analytics, Finance & Operations Talent",
                desc: "We specialize in professionals who work at the analytical and operational core of businesses:",
                bullets: [
                  "Supply Chain & Logistics Analysts",
                  "Demand & Inventory Planners",
                  "Financial Analysts & FP&A Professionals",
                  "Cost & Management Accountants",
                  "Business & Operations Analysts",
                  "Process Improvement & Strategy Analysts"
                ],
                icon: <BarChart size={32} />
              },
              {
                title: "Executive & Business Support Professionals",
                desc: "High-level support roles that require discretion, structure, and business understanding:",
                bullets: [
                  "Executive Assistants (C-suite & Senior Leadership)",
                  "Operations & Business Support Assistants",
                  "Finance & Administrative Support Professionals"
                ],
                icon: <Briefcase size={32} />
              },
              {
                title: "Virtual & Remote Talent Solutions",
                desc: "Function-specific virtual professionals embedded into your workflows \u2014 not generic outsourcing:",
                bullets: [
                  "Virtual Assistants (Finance, Operations, Data, Supply Chain)",
                  "Virtual Executive Assistants",
                  "Virtual Engineers (Data, Systems, Process, ERP)",
                  "Virtual Healthcare Assistants (Non-clinical administrative & data support)"
                ],
                icon: <Globe size={32} />
              }
            ].map((area, index) => (
              <motion.div 
                key={index} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={fadeUpVariant}
                className="bg-slate-50 p-10 lg:p-12 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:border-accent/30 transition-all duration-500 group flex flex-col"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-accent shadow-sm flex items-center justify-center mb-8 border border-slate-100 group-hover:-translate-y-2 group-hover:shadow-md transition-all duration-300">
                  {area.icon}
                </div>
                <h3 className="text-2xl font-black font-heading text-slate-900 tracking-tight leading-snug mb-4">
                  {area.title}
                </h3>
                <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                  {area.desc}
                </p>
                <div className="mt-auto">
                  <ul className="space-y-4">
                    {area.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                        <span className="text-slate-700 font-medium text-sm leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are (Redesigned & Repositioned) Light Theme */}
      <section id="who-we-are" className="py-24 relative overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-100">
        {/* Background Decorative Blur */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col gap-10"
            >
              <motion.div variants={fadeUpVariant}>
                <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-6">
                  Who We Are
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-[1.05]">
                  We handle hiring.<br />
                  <span className="text-accent underline decoration-slate-200 underline-offset-8">You handle business.</span>
                </h2>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="space-y-6 text-md font-medium text-slate-500 leading-relaxed">
                <p>
                  Cerebro Workforce Solutions is a recruitment and workforce partner that takes the burden of hiring completely off your hands, so you and your team can focus on what you do best.
                </p>
                <p>
                  We learn your business, identify exactly what each role needs, and manage the entire process from sourcing to shortlist. By the time a candidate reaches your desk, they have already been vetted, assessed, and confirmed to be the right fit.
                </p>
                <p>
                  Local or international, permanent or virtual, we build workforce solutions that work around your business, not the other way around.
                </p>
              </motion.div>

              {/* Offer Card - Light Glassmorphism style */}
              <motion.div
                variants={fadeUpVariant}
                className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-xs font-black uppercase tracking-widest text-accent mb-4 block">Our Promise</span>
                <p className="text-2xl md:text-3xl font-black text-slate-900 font-heading tracking-tight leading-snug">
                  &ldquo;Peace of mind, so you never have to worry about your next hire again.&rdquo;
                </p>
              </motion.div>

              <motion.div variants={fadeUpVariant} className="pt-8 border-t border-slate-200">
                <p className="text-md text-slate-500 leading-relaxed mb-6 font-medium">
                  When you work with Cerebro, you gain a partner who understands your business, takes ownership of the hiring process, and only brings people to the table who are genuinely ready to contribute.
                </p>
                <p className="text-2xl font-black font-heading text-accent tracking-tight uppercase">
                  We handle the talent. <br className="md:hidden" />
                  <span className="text-slate-900">You run the business.</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Right Visual Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[700px] w-full rounded-[4rem] overflow-hidden shadow-2xl border-4 border-white group">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                  alt="Professional Team Collaboration"
                  className="w-full h-full object-cover transition-opacity duration-700 hover:opacity-90"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section className="py-24 lg:py-32 relative bg-white overflow-hidden border-b border-slate-100">
        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left Column - Sticky Content */}
            <motion.div 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once: true, margin: "-100px" }} 
              variants={fadeUpVariant}
              className="lg:col-span-5 lg:sticky lg:top-32"
            >
              <Badge variant="outline" className="px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.3em] border-accent/20 text-accent bg-accent/5 mb-8 inline-block shadow-sm">
                Why Choose Cerebro Workforce Solutions
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-black font-heading tracking-tight text-slate-900 leading-[1.1] mb-8">
                A partner that works <span className="text-accent underline decoration-slate-200 underline-offset-8">as hard as you do.</span>
              </h2>
              
              <div className="space-y-6 text-lg font-medium text-slate-500 leading-relaxed">
                <p>
                  We don't just send CVs. We invest time in understanding your business &mdash; your goals, your team, and what each role truly demands &mdash; so that every person we place is set up to succeed from day one.
                </p>
                <p>
                  When you work with Cerebro, you gain a recruitment partner who takes full ownership of the process and delivers results you can rely on.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Feature List */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {[
                {
                  title: "Specialization Over Volume",
                  desc: "We focus exclusively on roles that require intelligence, precision, and functional depth."
                },
                {
                  title: "Function-Aware Screening",
                  desc: "Candidates are evaluated for real business understanding \u2014 not just resume keywords."
                },
                {
                  title: "Intelligence-First Hiring",
                  desc: "Skills, mindset, and adaptability are at the core of every assessment."
                },
                {
                  title: "Tailored Workforce Solutions",
                  desc: "Whether on-site, remote, or virtual \u2014 we build solutions around your operations."
                },
                {
                  title: "Quality-Driven Approach",
                  desc: "We prioritize the right fit over speed. Every placement is intentional."
                }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-slate-50 border border-slate-100 p-8 rounded-[2rem] hover:shadow-lg hover:border-accent/20 transition-shadow duration-300 group flex gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-accent shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black font-heading text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* Callout Box */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-6 bg-accent/5 border border-accent/20 p-8 rounded-[2rem] relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl transition-transform duration-700" />
                <p className="text-xl font-black text-slate-900 font-heading leading-snug relative z-10 italic">
                  "We are not a general staffing or low-cost outsourcing firm. We place professionals who understand the function they support."
                </p>
              </motion.div>
            </div>
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
