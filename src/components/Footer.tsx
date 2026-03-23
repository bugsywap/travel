import Link from "next/link";
import { Linkedin, Phone, Mail, ArrowRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-24 pb-12 font-sans overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-[#eff6ff] rounded-full blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          {/* Massive Brand Callout */}
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/img/logo-transparent-hori.png"
                alt="Cerebro Workforce Solutions Logo"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-lg text-slate-500 mb-8 max-w-md">
              Connecting elite talent with world-class organizations through specialized workforce solutions and expert market insights.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all group text-lg">
              Partner With Us <ArrowRight size={20} className="group-hover:text-accent-hover" />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 tracking-wide uppercase text-sm mb-2">Company</h4>
              <Link href="/about" className="text-slate-500 hover:text-accent transition-colors">About Us</Link>
              <Link href="/inquiry" className="text-slate-500 hover:text-accent transition-colors">Inquiry</Link>
              <Link href="/services" className="text-slate-500 hover:text-accent transition-colors">Services</Link>
              <Link href="/privacy" className="text-slate-500 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link href="/contact" className="text-slate-500 hover:text-accent transition-colors">Contact</Link>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 tracking-wide uppercase text-sm mb-2">Solutions</h4>
              <Link href="/services#direct" className="text-slate-500 hover:text-accent transition-colors">Direct Hire</Link>
              <Link href="/services#executive" className="text-slate-500 hover:text-accent transition-colors">Executive Search</Link>
              <Link href="/services#staffing" className="text-slate-500 hover:text-accent transition-colors">Staffing Solutions</Link>
              <Link href="/services#consult" className="text-slate-500 hover:text-accent transition-colors">HR Consulting</Link>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-bold text-slate-900 tracking-wide uppercase text-sm mb-2">Contact</h4>
              <div className="flex items-center gap-3 text-slate-500 hover:text-accent transition-colors">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a href="mailto:hello@cerebroworkforce.com">hello@cerebroworkforce.com</a>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>+63 9456476613 / +63 9057122723</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200/60 gap-4">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img
              src="/img/logo-transparent-hori.png"
              alt="Cerebro Workforce Solutions Logo"
              className="h-8 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </Link>

          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Cerebro Workforce Solutions. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/company/cerebro-workforce" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eff6ff] hover:text-[#0077b5] transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
