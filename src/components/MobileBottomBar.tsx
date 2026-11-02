import React from 'react';
import { Phone, Calendar, Navigation, ExternalLink } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-t border-zinc-800 p-2.5 flex items-center gap-2 safe-area-pb shadow-[0_-4px_20px_rgba(0,0,0,0.8)]">
      {/* Call Shop Button */}
      <a
        href={`tel:${SHOP_INFO.phoneClean}`}
        className="flex-1 py-2.5 px-3 bg-zinc-900 active:bg-zinc-800 border border-zinc-700/80 rounded-lg text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
      >
        <Phone className="w-3.5 h-3.5 text-green-400 shrink-0" />
        <span>Call Shop</span>
      </a>

      {/* Primary Tekmetric Booking Button */}
      <a
        href={SHOP_INFO.tekmetricBookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-[1.6] py-2.5 px-3 bg-green-500 active:bg-green-400 text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-md shadow-green-500/20 flex items-center justify-center gap-1.5 transition-colors"
      >
        <Calendar className="w-3.5 h-3.5 shrink-0" />
        <span>Book Online</span>
        <ExternalLink className="w-3 h-3 opacity-90 shrink-0" />
      </a>

      {/* Directions Shortcut */}
      <a
        href={SHOP_INFO.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-zinc-900 active:bg-zinc-800 border border-zinc-800 rounded-lg text-green-400 flex items-center justify-center shrink-0"
        title="Get Directions"
        aria-label="Get Directions"
      >
        <Navigation className="w-4 h-4" />
      </a>
    </div>
  );
};
