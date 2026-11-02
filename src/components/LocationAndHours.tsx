import React from 'react';
import { 
  MapPin, 
  Phone, 
  Key, 
  Navigation, 
  ExternalLink, 
  Calendar
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

export const LocationAndHours: React.FC = () => {
  const todayIndex = new Date().getDay();
  const adjustedTodayIndex = todayIndex === 0 ? 6 : todayIndex - 1;

  return (
    <section id="location" className="py-14 sm:py-16 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-green-400">
            Spartanburg Shop
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
            Location & Hours
          </h2>
          <p className="text-xs text-zinc-400 mt-1">
            151 S Forest St, Spartanburg, SC 29306 · Minutes from Downtown Spartanburg
          </p>
        </div>

        {/* 2-Column Minimalist Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Hours & Contact (Left) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Hours Table */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2 text-xs">
                <span className="font-bold text-white uppercase tracking-wider text-[11px]">Shop Hours</span>
                <span className="text-zinc-500">Eastern Time</span>
              </div>

              <div className="space-y-1">
                {SHOP_INFO.operatingHours.map((sched, idx) => {
                  const isToday = idx === adjustedTodayIndex;

                  return (
                    <div
                      key={sched.day}
                      className={`flex items-center justify-between text-xs py-1 px-2 rounded ${
                        isToday 
                          ? 'bg-zinc-900 text-green-400 font-bold' 
                          : 'text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        <span>{sched.day}</span>
                        {isToday && (
                          <span className="text-[10px] text-green-400 font-bold uppercase">
                            · Today
                          </span>
                        )}
                      </div>
                      <span className={sched.isOpen ? 'text-zinc-300' : 'text-zinc-600'}>
                        {sched.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2 border-t border-zinc-900 flex items-center gap-2 text-xs text-zinc-400">
                <Key className="w-3.5 h-3.5 text-green-400 shrink-0" />
                <span>24/7 Night Key Drop Box available by front door.</span>
              </div>
            </div>

            {/* Direct Phone & Facebook */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 space-y-1">
                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Phone</span>
                <a
                  href={`tel:${SHOP_INFO.phoneClean}`}
                  className="font-bold text-green-400 hover:underline block text-sm"
                >
                  {SHOP_INFO.phone}
                </a>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-3 space-y-1">
                <span className="text-[10px] uppercase font-bold text-zinc-500 block">Social</span>
                <a
                  href={SHOP_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-zinc-300 hover:text-green-400 flex items-center gap-1 text-xs pt-0.5"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Tekmetric Button */}
            <a
              href={SHOP_INFO.tekmetricBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 text-center text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-green-500/20"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Online (Tekmetric)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

          </div>

          {/* Map Frame (Right) */}
          <div className="lg:col-span-7 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden p-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white block">151 S Forest St</span>
                <span className="text-zinc-500 text-[11px]">Spartanburg, SC 29306</span>
              </div>
              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3 h-3 text-green-400" />
                <span>Directions</span>
              </a>
            </div>

            <div className="relative w-full h-[280px] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
              <iframe
                title="MasterTech Auto Repair Spartanburg Location"
                src="https://maps.google.com/maps?q=151+S+Forest+St,+Spartanburg,+SC+29306&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-125 brightness-90"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
