import React from 'react';
import { 
  CheckCircle2, 
  ExternalLink,
  Calendar,
  Smartphone,
  Eye,
  Camera
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

interface DigitalInspectionBannerProps {
  onOpenBooking: () => void;
}

export const DigitalInspectionBanner: React.FC<DigitalInspectionBannerProps> = ({ onOpenBooking }) => {
  return (
    <section id="inspection" className="py-14 sm:py-16 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Real Photo (Left) */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-black">
              <img 
                src="/assets/aistudio/104108860_679365155964929_2286738508642534658_n_c1956adf.jpg" 
                alt="MasterTech Technician running digital diagnosis" 
                className="w-full h-[320px] sm:h-[360px] object-cover object-top"
              />
            </div>
          </div>

          {/* Minimalist Message & Steps (Right) */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              Transparency
            </span>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase leading-tight">
              See What We See. <br />
              <span className="text-green-400">Photos Texted to Your Phone.</span>
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed">
              We document our findings with digital photos and technician notes sent straight to your smartphone. You see worn parts for yourself before approving any work.
            </p>

            {/* 3 Simple Minimalist Steps */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center">
              <div className="bg-black border border-zinc-800 p-3 rounded-lg space-y-1">
                <span className="text-xs font-mono font-bold text-green-400">01</span>
                <div className="text-xs font-bold text-white">Drop Off</div>
              </div>

              <div className="bg-black border border-zinc-800 p-3 rounded-lg space-y-1">
                <span className="text-xs font-mono font-bold text-green-400">02</span>
                <div className="text-xs font-bold text-white">Review Photos</div>
              </div>

              <div className="bg-black border border-zinc-800 p-3 rounded-lg space-y-1">
                <span className="text-xs font-mono font-bold text-green-400">03</span>
                <div className="text-xs font-bold text-white">You Approve</div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={SHOP_INFO.tekmetricBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-lg cursor-pointer transition-colors shadow-sm shadow-green-500/10"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Inspection on Tekmetric</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
