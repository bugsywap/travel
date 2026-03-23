import { Database, Activity, DollarSign, Hammer } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-32">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-accent hover:bg-accent-hover text-white px-4 py-1 text-sm shadow-sm border-none">Industry Sectors</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter max-w-xl font-black font-heading text-slate-900 text-left leading-tight">
                Specialized Talent <span className="text-accent underline decoration-slate-200 underline-offset-8">Across Industries.</span>
              </h2>
              <p className="text-lg md:text-xl max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-slate-500 text-left font-medium">
                We focus on high-growth sectors where technical excellence and cultural alignment are the primary engines of success.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Technology & AI */}
            <div className="relative bg-muted rounded-[2.5rem] overflow-hidden min-h-[400px] lg:h-full lg:col-span-2 p-10 flex justify-end flex-col group shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200" alt="Technology & Innovation" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <Database className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-4xl font-black text-white font-heading tracking-tight mb-4">Technology & Innovation</h3>
                <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed">
                  Elite software engineers, AI researchers, and digital architects driving the next wave of global innovation.
                </p>
              </div>
            </div>

            {/* Healthcare */}
            <div className="relative bg-muted rounded-[2.5rem] overflow-hidden min-h-[400px] aspect-square lg:aspect-auto p-10 flex justify-end flex-col group shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Healthcare Excellence" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <Activity className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-3xl font-black text-white font-heading tracking-tight mb-3">Healthcare</h3>
                <p className="text-white/80 max-w-xs text-base font-medium leading-relaxed">
                  Dedicated specialists and administrative leaders for world-class medical systems.
                </p>
              </div>
            </div>

            {/* Finance */}
            <div className="relative bg-muted rounded-[2.5rem] overflow-hidden min-h-[400px] aspect-square lg:aspect-auto p-10 flex justify-end flex-col group shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800" alt="Finance & Banking" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <DollarSign className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-3xl font-black text-white font-heading tracking-tight mb-3">Finance</h3>
                <p className="text-white/80 max-w-xs text-base font-medium leading-relaxed">
                  Quant analysts, CPAs, and investment bankers managing complexity and capital.
                </p>
              </div>
            </div>

            {/* Engineering */}
            <div className="relative bg-muted rounded-[2.5rem] overflow-hidden min-h-[400px] lg:h-full lg:col-span-2 p-10 flex justify-end flex-col group shadow-lg border border-slate-100">
              <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200" alt="Strategic Engineering" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/40 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <Hammer className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-4xl font-black text-white font-heading tracking-tight mb-4">Engineering</h3>
                <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed">
                  Visionary civil, mechanical, and structural engineers building the physical and digital infrastructure of tomorrow.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
