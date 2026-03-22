'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star, Plane, Compass, Globe, ArrowRight, Check } from 'lucide-react';
import Card from '@/components/Card';
import { Feature } from '@/components/ui/feature-section-with-bento-grid';
import './page.css';

export default function Home() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-secondary selection:bg-accent/20 selection:text-accent">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] flex items-center pt-32 pb-20 overflow-hidden bg-[#f8fafc]">
        {/* Soft background aesthetic for Hero */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50 rounded-full blur-[120px] opacity-70 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] opacity-60 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="container px-6 mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            
            {/* Left Column: Text */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6 border border-accent/20 shadow-sm backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse"></span>
                Voted #1 Travel Agency 2026
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-slate-900 leading-[1.1] mb-6 font-heading">
                Explore The <br />
                <span className="text-accent">Unseen World.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-lg leading-relaxed">
                Discover handpicked destinations, luxury stays, and exclusive experiences curated just for you. Your ultimate journey begins here.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/booking" className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent text-white font-bold hover:bg-accent-hover transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2 group text-lg">
                  Start Planning <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/services" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-slate-700 font-bold hover:bg-slate-50 transition-all border border-slate-200 shadow-sm flex items-center justify-center text-lg">
                  Explore Destinations
                </Link>
              </div>
              
              <div className="mt-12 flex items-center gap-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                <div className="flex items-center gap-2"><Check size={16} className="text-accent" /> Custom Itineraries</div>
                <div className="flex items-center gap-2"><Check size={16} className="text-accent" /> 24/7 Support</div>
              </div>
            </motion.div>

            {/* Right Column: Dynamic Overlapping Image Grid */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative h-[600px] w-full hidden lg:block"
            >
              <div className="absolute top-0 right-0 w-[45%] h-[55%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 hover:z-30 transition-all duration-500 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800" alt="Paris" className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-[20%] left-0 w-[55%] h-[45%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-20 hover:z-30 transition-all duration-500 hover:scale-105">
                <img src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&q=80&w=800" alt="Beach" className="w-full h-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-[15%] w-[60%] h-[50%] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white z-10 hover:z-30 transition-all duration-500 hover:scale-105 bg-slate-100">
                <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800" alt="Travel Landscape" className="w-full h-full object-cover" />
              </div>
              
              {/* Floating Glass UI Element */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 bg-white/70 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl z-40 flex items-center gap-4"
              >
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden"><img src="https://i.pravatar.cc/100?img=1" alt="User" /></div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden"><img src="https://i.pravatar.cc/100?img=2" alt="User" /></div>
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white shadow-sm overflow-hidden"><img src="https://i.pravatar.cc/100?img=3" alt="User" /></div>
                </div>
                <div>
                  <div className="flex text-amber-400 text-sm">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <p className="text-xs font-bold text-slate-800">4.9/5 from 3k+ reviews</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-32 relative z-10 bg-white border-b border-slate-100">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <h2 className="text-accent text-sm tracking-widest uppercase mb-3 font-bold flex items-center gap-2"><div className="w-8 h-px bg-accent"></div> Why Choose Us</h2>
              <h3 className="section-title text-4xl md:text-5xl mb-0 font-heading tracking-tight text-slate-900">Expertise & Trust.</h3>
            </div>
            <p className="text-slate-500 max-w-md text-lg">We take the stress out of travel planning so you can focus on making memories. Here is what we offer.</p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUpVariant} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-8">
                <Compass size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Tailored Itineraries</h3>
              <p className="text-slate-500 leading-relaxed">Custom travel plans designed specifically for your preferences, budget, and travel style.</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-8">
                <Globe size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">Flexible Booking</h3>
              <p className="text-slate-500 leading-relaxed">Enjoy peace of mind with our flexible booking options and free cancellation on select packages.</p>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent mb-8">
                <Plane size={32} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-slate-900">24/7 Support</h3>
              <p className="text-slate-500 leading-relaxed">Our dedicated travel experts are always on call to assist you before, during, and after your trip.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO DESTINATIONS SECTION */}
      <Feature />

      {/* 4. TESTIMONIALS SECTION */}
      <section className="py-32 relative z-10 bg-white">
        <div className="container px-6 mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
            className="text-center mb-16"
          >
            <h2 className="text-accent text-sm tracking-widest uppercase mb-3 font-bold font-sans">Reviews</h2>
            <h3 className="section-title text-4xl md:text-5xl font-heading tracking-tight text-slate-900">What Our Clients Say.</h3>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUpVariant} className="bg-slate-50 p-10 rounded-[2rem] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border border-slate-100/50">
              <div className="opacity-70 mb-6"><MapPin size={24} className="text-accent"/></div>
              <p className="italic mb-8 text-slate-600 text-lg">"Horizon Travel planned the perfect honeymoon for us. Everything from the flights to the private tours was seamless. Highly recommended!"</p>
              <h4 className="font-bold text-slate-900 font-heading tracking-tight text-lg">- Sarah & James T.</h4>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-slate-50 p-10 rounded-[2rem] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border border-slate-100/50">
              <div className="opacity-70 mb-6"><MapPin size={24} className="text-accent"/></div>
              <p className="italic mb-8 text-slate-600 text-lg">"I wanted a solo backpacking trip through Europe but didn't know where to start. They created a custom itinerary that was exactly what I dreamed of."</p>
              <h4 className="font-bold text-slate-900 font-heading tracking-tight text-lg">- Michael R.</h4>
            </motion.div>
            
            <motion.div variants={fadeUpVariant} className="bg-slate-50 p-10 rounded-[2rem] shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all border border-slate-100/50">
              <div className="opacity-70 mb-6"><MapPin size={24} className="text-accent"/></div>
              <p className="italic mb-8 text-slate-600 text-lg">"Professional, responsive, and incredibly knowledgeable. We've booked three family vacations with them and they never disappoint."</p>
              <h4 className="font-bold text-slate-900 font-heading tracking-tight text-lg">- The Garcia Family</h4>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. NEW CTA SECTION (EMERALD) */}
      <section className="py-24 relative overflow-hidden bg-accent text-white border-t border-accent-hover">
        {/* Soft geometric accent patterns */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-900/20 rounded-full blur-[60px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="container relative z-10 flex flex-col items-center justify-center h-full px-6 mx-auto text-center"
        >
          <h2 className="mb-6 text-white text-5xl md:text-7xl font-black tracking-tighter font-heading">Ready to Explore?</h2>
          <p className="mb-10 max-w-2xl text-xl text-white/90">Contact our experts today and get a free consultation for your next big adventure.</p>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white text-accent font-bold h-14 px-10 text-lg hover:bg-slate-50 transition-all focus:ring-4 focus:ring-slate-200 shadow-lg group">
            Start Your Journey <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
