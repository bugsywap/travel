'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function ContactContent() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

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
                <h3 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-6">Let's Talk Talent.</h3>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed font-medium">
                  Our specialized recruitment consultants are available to help you build your elite workforce or curate your dream career path.
                </p>
              </div>

              <div className="grid gap-4">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">Head Office</h4>
                    <p className="text-slate-500 font-medium">123 Professional Way, Suite 789<br/>New York, NY 10001</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">Direct Line</h4>
                    <p className="text-slate-500 font-medium">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">Email Inquiry</h4>
                    <p className="text-slate-500 font-medium">solutions@cerebroworkforce.com</p>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm flex items-start gap-6 group hover:shadow-md transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-accent/5 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 mb-1 font-heading text-lg">Business Hours</h4>
                    <p className="text-slate-500 font-medium whitespace-nowrap">Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
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

                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Company / Role</label>
                      <input type="text" placeholder="E.g. Acme Tech / Senior Developer" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone</label>
                      <input type="tel" placeholder="+1 (555) 000-0000" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea rows={4} placeholder="How can we help your business grow?" className="bg-slate-50 border-none rounded-2xl p-5 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-accent transition-all font-medium resize-none" required></textarea>
                  </div>

                  <button 
                    disabled={formState !== 'idle'} 
                    className="w-full bg-accent hover:bg-accent-hover text-white font-black py-6 rounded-2xl transition-all shadow-lg shadow-accent/20 flex items-center justify-center gap-2 group text-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formState === 'idle' && <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                    {formState === 'submitting' && <span className="flex items-center gap-2"><div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</span>}
                    {formState === 'success' && <span>Message Sent Successfully!</span>}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container px-6 mx-auto pt-10">
        <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[450px] border border-slate-100 grayscale hover:grayscale-0 transition-all duration-700">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976373946229!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1684333200000!5m2!1sen!2sus" 
            title="Office Location"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
