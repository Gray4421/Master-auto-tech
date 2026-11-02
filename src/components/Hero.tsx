import React from 'react';
import { 
  Calendar, 
  Phone, 
  Star, 
  ExternalLink,
  CheckCircle2,
  MapPin
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <div className="relative bg-black border-b border-zinc-800">
      
      {/* Background with real shop photo wash */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src="/assets/aistudio/car_engen_67d8da96.jpg" 
          alt="MasterTech Shop" 
          className="w-full h-full object-cover object-center opacity-10 filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-black/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-center">
          
          {/* Main Statement (Left) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            
            {/* Quick Unboxed Meta */}
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-zinc-400 flex-wrap">
              <span className="text-green-400 uppercase tracking-wider font-bold">Spartanburg, SC</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-zinc-300">151 S Forest St</span>
              <span aria-hidden="true" className="text-zinc-700">·</span>
              <span className="text-amber-400 font-bold flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                4.9 Stars (180+ Reviews)
              </span>
            </div>

            {/* Punchy Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-display font-black tracking-tight text-white uppercase leading-[1.1] sm:leading-[1.05]">
              Accurate Diagnostics. <br />
              <span className="text-green-400">Certified Mechanics.</span> <br />
              Zero Sales Pressure.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Spartanburg's premier RepairPal Certified & CARFAX Top-Rated service shop. We pinpoint problems accurately and text you transparent photos before turning a wrench.
            </p>

            {/* 4 Minimal Trust Bullets */}
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300 pt-1">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 shrink-0" />
                <span className="truncate sm:overflow-visible">24-Mo / 24k-Mi Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 shrink-0" />
                <span className="truncate sm:overflow-visible">RepairPal & CARFAX</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 shrink-0" />
                <span className="truncate sm:overflow-visible">Digital Inspection Photos</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400 shrink-0" />
                <span className="truncate sm:overflow-visible">24/7 Night Drop Box</span>
              </div>
            </div>

            {/* Action Buttons - Stack on mobile, flex on desktop */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={SHOP_INFO.tekmetricBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 active:bg-green-600 rounded-lg shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Book Online (Tekmetric)</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>

              <a
                href={`tel:${SHOP_INFO.phoneClean}`}
                className="w-full sm:w-auto px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-800 border border-zinc-800 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-green-400 shrink-0" />
                <span>Call (864) 504-6374</span>
              </a>
            </div>

          </div>

          {/* Real Photo Card (Right) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 relative shadow-xl">
              <div className="h-56 sm:h-72 w-full overflow-hidden relative">
                <img 
                  src="/assets/aistudio/104108860_679365155964929_2286738508642534658_n_c1956adf.jpg" 
                  alt="MasterTech Technician diagnosing vehicle" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Official Logo on Black Badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/95 border border-zinc-800 px-2.5 py-1 rounded-lg flex items-center gap-2 shadow-md">
                  <img 
                    src="/assets/aistudio/mastertech_logo_black_bg.png" 
                    alt="MasterTech Logo" 
                    className="h-5 sm:h-6 w-auto object-contain block"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-400">
                    Live Shop Bay
                  </span>
                </div>
              </div>

              <div className="p-3 bg-zinc-950 flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">MasterTech Auto Repair</span>
                  <span className="text-zinc-500 text-[11px]">151 S Forest St · Spartanburg, SC</span>
                </div>
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 font-semibold hover:underline flex items-center gap-1 text-[11px] shrink-0"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Directions</span>
                </a>
              </div>
            </div>

            {/* Quick 2-photo preview */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg overflow-hidden border border-zinc-800 h-16 sm:h-20 bg-zinc-950">
                <img 
                  src="/assets/aistudio/car_engen_67d8da96.jpg" 
                  alt="Engine work" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden border border-zinc-800 h-16 sm:h-20 bg-zinc-950">
                <img 
                  src="/assets/aistudio/gurage_website_7547cb8f.jpg" 
                  alt="Brake service" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
