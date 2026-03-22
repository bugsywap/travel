import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Feature() {
  return (
    <div className="w-full py-20 lg:py-32 bg-slate-50">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-accent hover:bg-accent-hover text-white px-4 py-1 text-sm shadow-sm border-none">Destinations</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter max-w-xl font-black font-heading text-slate-900 text-left">
                Explore Our Top Locations
              </h2>
              <p className="text-lg md:text-xl max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-slate-500 text-left">
                From serene beaches to ancient temples, discover the world's most breathtaking destinations curated exclusively for you.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Large Card 1 */}
            <div className="relative bg-muted rounded-[2rem] overflow-hidden min-h-[350px] lg:h-full lg:col-span-2 p-8 flex justify-end flex-col group shadow-lg">
              <img src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80&w=1200" alt="Santorini" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <MapPin className="w-8 h-8 text-white mb-3" />
                <h3 className="text-3xl font-black text-white font-heading tracking-tight mb-2">Santorini, Greece</h3>
                <p className="text-white/80 max-w-md text-lg">
                  Experience breathtaking sunsets and iconic white architecture overlooking the brilliant blue Aegean sea.
                </p>
              </div>
            </div>

            {/* Small Card 1 */}
            <div className="relative bg-muted rounded-[2rem] overflow-hidden min-h-[350px] aspect-square lg:aspect-auto p-8 flex justify-end flex-col group shadow-lg">
              <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800" alt="Bali" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <MapPin className="w-8 h-8 text-white mb-3" />
                <h3 className="text-2xl font-black text-white font-heading tracking-tight mb-2">Bali, Indonesia</h3>
                <p className="text-white/80 max-w-xs text-base">
                  Discover lush landscapes, sacred temples, and serene beaches in a tropical paradise.
                </p>
              </div>
            </div>

            {/* Small Card 2 */}
            <div className="relative bg-muted rounded-[2rem] overflow-hidden min-h-[350px] aspect-square lg:aspect-auto p-8 flex justify-end flex-col group shadow-lg">
              <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=600" alt="Kyoto" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <MapPin className="w-8 h-8 text-white mb-3" />
                <h3 className="text-2xl font-black text-white font-heading tracking-tight mb-2">Kyoto, Japan</h3>
                <p className="text-white/80 max-w-xs text-base">
                  Immerse yourself in ancient traditions, stunning bamboo forests, and tranquil Zen gardens.
                </p>
              </div>
            </div>

            {/* Large Card 2 */}
            <div className="relative bg-muted rounded-[2rem] overflow-hidden min-h-[350px] lg:h-full lg:col-span-2 p-8 flex justify-end flex-col group shadow-lg">
              <img src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80&w=1200" alt="Swiss Alps" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent z-10" />
              <div className="relative z-20 flex flex-col">
                <MapPin className="w-8 h-8 text-white mb-3" />
                <h3 className="text-3xl font-black text-white font-heading tracking-tight mb-2">Swiss Alps</h3>
                <p className="text-white/80 max-w-md text-lg">
                  World-class skiing, picturesque mountain resorts, and the unmatched beauty of absolute wilderness.
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
