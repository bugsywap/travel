import Link from "next/link";
import { Facebook, Twitter, Instagram, MapPin, Phone, Mail, PlaneTakeoff, ArrowRight } from "lucide-react";
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
              <div className="flex items-center justify-center w-12 h-12 bg-slate-900 text-white rounded-xl font-black text-sm tracking-widest uppercase shadow-md">
                LOGO
              </div>
              <span className="font-black text-3xl tracking-tight text-slate-900 font-heading">Horizon</span>
            </div>
            <p className="text-lg text-slate-500 mb-8 max-w-md">
              Your trusted partner in curating unforgettable travel experiences and tailor-made journeys across the world.
            </p>
            <Link href="/booking" className="inline-flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all group text-lg">
              Start Planning <ArrowRight size={20} className="group-hover:text-accent-hover" />
            </Link>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 tracking-wide uppercase text-sm mb-2">Company</h4>
              <Link href="/about" className="text-slate-500 hover:text-accent transition-colors">About Us</Link>
              <Link href="/services" className="text-slate-500 hover:text-accent transition-colors">Careers</Link>
              <Link href="/services" className="text-slate-500 hover:text-accent transition-colors">Press</Link>
              <Link href="/contact" className="text-slate-500 hover:text-accent transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-4">
              <h4 className="font-bold text-slate-900 tracking-wide uppercase text-sm mb-2">Services</h4>
              <Link href="/services#tours" className="text-slate-500 hover:text-accent transition-colors">Tour Packages</Link>
              <Link href="/services#custom" className="text-slate-500 hover:text-accent transition-colors">Custom Itineraries</Link>
              <Link href="/services#visa" className="text-slate-500 hover:text-accent transition-colors">Visa Assistance</Link>
              <Link href="/services#consult" className="text-slate-500 hover:text-accent transition-colors">Consultation</Link>
            </div>

            <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-bold text-slate-900 tracking-wide uppercase text-sm mb-2">Contact</h4>
              <div className="flex items-center gap-3 text-slate-500">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span>hello@horizontravel.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3 text-slate-500 mt-2">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <span>123 Wanderlust Ave,<br/>New York, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200/60 gap-4">
          <Link href="/" className="flex items-center gap-2 text-slate-900 opacity-50 hover:opacity-100 transition-opacity">
            <PlaneTakeoff size={24} />
            <span className="font-black text-xl tracking-tight font-heading">Horizon</span>
          </Link>
          
          <p className="text-slate-400 text-sm">&copy; {new Date().getFullYear()} Horizon Travel. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eff6ff] hover:text-accent transition-colors"><Facebook size={18} /></a>
            <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#eff6ff] hover:text-[#3b82f6] transition-colors"><Twitter size={18} /></a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-pink-50 hover:text-pink-600 transition-colors"><Instagram size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
