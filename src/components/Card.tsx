import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
  link?: string;
  linkText?: string;
  className?: string;
}

export default function Card({ 
  title, 
  description, 
  image, 
  icon, 
  link, 
  linkText = "Explore",
  className = "" 
}: CardProps) {
  return (
    <div className={`group relative bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${className} h-full flex flex-col`}>
      {image && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-[2rem]">
          <div className="absolute inset-0 bg-slate-900/10 z-10 transition-opacity group-hover:opacity-0" />
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
          />
        </div>
      )}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-4">
          {icon && <div className="p-3 bg-white/60 rounded-xl text-accent shadow-sm">{icon}</div>}
        </div>
        <h3 className="text-xl font-bold text-slate-900 font-heading mb-3">{title}</h3>
        <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{description}</p>
        
        {link && (
          <Link href={link} className="inline-flex items-center gap-2 text-accent font-bold group-hover:gap-3 transition-all mt-auto w-max py-2 px-4 bg-white/50 rounded-full hover:bg-white text-sm">
            {linkText} <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </div>
  );
}
