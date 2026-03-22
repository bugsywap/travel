"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

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
              Get in <span className="text-accent">Touch.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
              Have a question about our services or ready to book your next adventure? Reach out to our team of travel experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container px-6 mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}>
            <h2 className="text-accent text-sm tracking-widest uppercase mb-3 font-bold flex items-center gap-2"><div className="w-8 h-px bg-accent"></div> Reach Us</h2>
            <h3 className="text-4xl font-black font-heading tracking-tight text-slate-900 mb-8">Let's Talk Travel.</h3>
            
            <p className="text-lg text-slate-500 mb-12 leading-relaxed">
              Our dedicated staff is available to help you curate your dream vacation. Pick any channel that works best for you.
            </p>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-accent flex items-center justify-center shrink-0 shadow-sm">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Head Office</h4>
                  <p className="text-slate-500">123 Wanderlust Ave, Suite 456<br/>New York, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-accent flex items-center justify-center shrink-0 shadow-sm">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Phone Number</h4>
                  <p className="text-slate-500">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-accent flex items-center justify-center shrink-0 shadow-sm">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-slate-500">info@horizontravel.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 text-accent flex items-center justify-center shrink-0 shadow-sm">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-500">Mon-Fri: 9:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant} className="bg-white p-10 lg:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <h3 className="text-3xl font-black font-heading tracking-tight text-slate-900 mb-3">Send a Message</h3>
            <p className="text-slate-500 mb-8">We'll get back to you within 24 hours.</p>
            
            {status === "success" && (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-emerald-50 text-emerald-700 p-4 rounded-2xl text-center font-bold mb-8 border border-emerald-100">
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all text-slate-900 font-medium" 
                  placeholder="John Doe"
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all text-slate-900 font-medium" 
                    placeholder="john@example.com"
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all text-slate-900 font-medium" 
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4} 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-white transition-all text-slate-900 font-medium resize-none" 
                  placeholder="How can we help you?"
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-5 rounded-2xl bg-accent hover:bg-accent-hover text-white font-black text-lg shadow-lg shadow-accent/25 transition-all flex items-center justify-center gap-3 disabled:opacity-70 group" 
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : (
                  <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container px-6 mx-auto mb-20 h-[500px] relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col">
          <div className="bg-white px-8 py-4 border-b border-slate-100 flex items-center justify-between">
            <h4 className="font-bold text-slate-900">Visit Our Office</h4>
            <div className="flex items-center gap-2 text-sm text-slate-500"><MapPin size={16} className="text-accent" /> New York, NY</div>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            aria-hidden="false"
            tabIndex={0}
          ></iframe>
        </motion.div>
      </section>
    </div>
  );
}
