'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default function PrivacyContent() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen selection:bg-accent/20 selection:text-accent pb-20 pt-40">
      <div className="container px-6 mx-auto">
        <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 mb-6 font-heading">
            Privacy <span className="text-accent underline decoration-slate-200 underline-offset-8">Policy.</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-medium">
            At Cerebro Workforce Solutions, we are committed to protecting your personal data and ensuring transparency in how we handle information.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="space-y-12 relative z-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                  <Shield size={20} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 font-heading">Information We Collect</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, when you participate in activities on our website (such as submitting a resume or inquiry form) or otherwise when you contact us.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                  <Eye size={20} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 font-heading">How We Use Your Data</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                We process your information for purposes based on legitimate business interests, the fulfillment of our services to you, compliance with our legal obligations, and/or your consent. This includes matching candidates with job opportunities and facilitating business partnerships.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                  <Lock size={20} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 font-heading">Data Security</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure.
              </p>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center font-bold">
                  <FileText size={20} />
                </div>
                <h2 className="text-2xl font-black text-slate-900 font-heading">Changes to This Policy</h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium">
                We may update this privacy notice from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible.
              </p>
            </section>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center text-slate-400 text-sm font-bold">
            <span>Last Updated: March 23, 2026</span>
            <span>&copy; Cerebro Workforce Solutions</span>
          </div>
        </div>
      </div>
    </div>
  );
}
