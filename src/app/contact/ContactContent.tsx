'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send, Linkedin } from 'lucide-react';

export default function ContactContent() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent pb-20">
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 overflow-hidden border-b border-slate-100">
        <div className="container px-6 mx-auto relative z-10 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-slate-900 mb-6 font-heading leading-tight">
              Get in <span className="text-accent underline decoration-slate-200 underline-offset-8">Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium">
              Have a question about our workforce solutions or ready to find your next career move? Reach out to our team of recruitment experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="lg:col-span-5 flex flex-col gap-8">
              <div>
                <h2 className="text-accent text-sm tracking-widest uppercase mb-3 font-black flex items-center gap-2">
                  <div className="w-8 h-px bg-accent"></div> Recruitment Desk
                </h2>
                <h3 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-6">Ready to simplify your hiring?</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                  Tell us what you need — and let Cerebro handle the rest. Whether it&#39;s one critical role or an entire team, we&#39;ll find the right people and deliver them ready to work.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">Email</h4>
                    <a href="mailto:hello@cerebroworkforce.com" className="text-slate-500 font-medium hover:text-accent transition-colors">hello@cerebroworkforce.com</a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Linkedin size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">LinkedIn</h4>
                    <a href="https://linkedin.com/company/cerebro-workforce" target="_blank" rel="noopener noreferrer" className="text-slate-500 font-medium hover:text-accent transition-colors truncate block max-w-[250px] sm:max-w-[300px] md:max-w-none">
                      linkedin.com/company/cerebro-workforce
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">Number</h4>
                    <p className="text-slate-500 font-medium">+63 9456476613 / +63 9057122723</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="lg:col-span-7">
              <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />

                <h3 className="text-3xl font-black text-slate-900 mb-2 font-heading tracking-tight">Send a Message</h3>
                <p className="text-slate-500 mb-10 font-medium">We'll get back to you within 24 hours.</p>

                <form className="space-y-6" action="https://formsubmit.co/hello@cerebroworkforce.com" method="POST">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New Inquiry from Cerebro Website" />
                  <input type="hidden" name="_template" value="box" />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" name="name" placeholder="John Doe" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Company / Role</label>
                      <input type="text" name="company_role" placeholder="E.g. Acme Tech / Senior Developer" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" name="email" placeholder="john@example.com" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                      <input type="tel" name="phone" placeholder="+1 (555) 000-0000" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea name="message" rows={4} placeholder="How can we help your business grow?" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium resize-none" required></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-black py-6 rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group text-xl"
                  >
                    Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}
