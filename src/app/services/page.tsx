'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Plane, Map, Briefcase, MessagesSquare, ArrowRight } from "lucide-react";

export default function Services() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-secondary selection:bg-accent/20 selection:text-accent pb-20">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#f8fafc] border-b border-slate-100">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[100px] opacity-60 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 font-heading">
              Our <span className="text-accent">Services.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              From curated group tours to highly personalized bespoke itineraries, we provide comprehensive solutions for all your travel needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 relative z-10">
        <div className="container px-6 mx-auto flex flex-col gap-24">
          
          {/* Service 1 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="grid lg:grid-cols-2 gap-12 items-center" id="tours">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px]">
              <img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=1000" alt="Tour Packages" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-accent flex items-center justify-center mb-8 shadow-sm">
                <Plane size={32} />
              </div>
              <h2 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-6">Curated Tour Packages</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Join our fully-guided, small group tour packages to the world's most breathtaking destinations. These inclusive packages cover flights, accommodations, guided tours, and select meals so you have nothing to worry about.
              </p>
              <ul className="text-slate-600 mb-10 space-y-4 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Hand-picked luxury and boutique hotels</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Expert local guides in every city</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> VIP access to popular attractions</li>
              </ul>
              <Link href="/booking?service=tours" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-full transition-all shadow-lg shadow-accent/25">
                Book a Package <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          {/* Service 2 */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="grid lg:grid-cols-2 gap-12 items-center" id="custom">
            <div className="order-2 lg:order-1">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 text-accent flex items-center justify-center mb-8 shadow-sm">
                <Map size={32} />
              </div>
              <h2 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-6">Custom Itineraries</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Prefer to travel your own way? Let us craft a bespoke itinerary tailored precisely to your schedule, interests, and budget. From honeymoon romantic escapes to thrilling adventure treks, we design trips that are entirely uniquely yours.
              </p>
              <ul className="text-slate-600 mb-10 space-y-4 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> 100% personalized travel plans</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Flexible scheduling and pacing</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-accent" /> Special requests accommodated easily</li>
              </ul>
              <Link href="/booking?service=custom" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-full transition-all shadow-lg">
                Start Custom Planning <ArrowRight size={20} />
              </Link>
            </div>
            <div className="order-1 lg:order-2 rounded-[2.5rem] overflow-hidden shadow-2xl h-[450px]">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1000" alt="Custom Itineraries" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Service 3 & 4 Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100" id="visa">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-6 shadow-sm">
                <Briefcase size={32} />
              </div>
              <h3 className="text-3xl font-black font-heading tracking-tight text-slate-900 mb-4">Visa & Documents</h3>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Navigating international travel requirements can be tedious. Our team provides expert guidance on passport renewals, travel visas, and necessary documentation to ensure a hassle-free trip.
              </p>
              <Link href="/contact" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Inquire Now <ArrowRight size={18} />
              </Link>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-slate-100" id="consult">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 text-accent flex items-center justify-center mb-6 shadow-sm">
                <MessagesSquare size={32} />
              </div>
              <h3 className="text-3xl font-black font-heading tracking-tight text-slate-900 mb-4">Travel Consultation</h3>
              <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                Not sure where to go? Need advice on travel insurance, packing, or currency? Schedule a 1-on-1 consultation with our senior travel advisors. We'll answer all your questions.
              </p>
              <Link href="/booking?service=consultation" className="text-accent font-bold flex items-center gap-2 hover:gap-3 transition-all">
                Book Consultation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
