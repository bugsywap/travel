'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';

export default function BookingPage() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent pb-20 pt-40">
      <div className="container px-6 mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 font-heading">
            Book an <span className="text-accent underline decoration-slate-200 underline-offset-8">Appointment.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            Schedule a strategic consultation with our recruitment experts to discuss your hiring needs or career trajectory.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Booking Info */}
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
              <h2 className="text-2xl font-black font-heading text-slate-900 mb-6">Why Meet With Us?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Direct Expertise</h3>
                    <p className="text-slate-500 leading-relaxed">Speak directly with sector-specific consultants who understand your industry's nuances.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg">Tailored Strategy</h3>
                    <p className="text-slate-500 leading-relaxed">Get a customized recruitment or career roadmap designed specifically for your goals.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Placeholder / Scheduler Interface Placeholder */}
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="lg:col-span-7">
            <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center text-center">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              
              <div className="w-24 h-24 rounded-full bg-slate-50 flex items-center justify-center mb-8 border border-slate-100">
                <Calendar className="w-10 h-10 text-slate-300" />
              </div>
              
              <h3 className="text-3xl font-black text-slate-900 mb-4 font-heading tracking-tight">Scheduler Coming Soon</h3>
              <p className="text-slate-500 mb-10 max-w-md font-medium">We are currently integrating with our scheduling partner. In the meantime, please use our inquiry form to request a meeting.</p>
              
              <button className="px-10 py-5 bg-accent hover:bg-accent-hover text-white font-black rounded-full transition-all shadow-xl shadow-accent/20 flex items-center gap-2 group text-lg">
                Go to Inquiry <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
