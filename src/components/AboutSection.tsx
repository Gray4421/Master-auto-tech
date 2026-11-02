import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  HeartHandshake, 
  Key, 
  Phone
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-16 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Content (Left) */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              About MasterTech
            </span>

            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase leading-tight">
              Honest Auto Repair in Spartanburg
            </h2>

            <p className="text-sm text-zinc-300 leading-relaxed max-w-xl">
              Located at 151 S Forest St. Our ASE Master Technicians provide dealer-grade diagnostics and repairs for domestic, Asian, and European vehicles with zero sales pressure.
            </p>

            {/* 4 Minimal Pillars */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-lg space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-green-400" />
                  <span>No Sales Pressure</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  We show our findings and let you decide.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-lg space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                  <span>24 Mo / 24k Mi Warranty</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Nationwide warranty protection.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-lg space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-400" />
                  <span>RepairPal & CARFAX</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Independently certified & top-rated.
                </p>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-lg space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <Key className="w-4 h-4 text-green-400" />
                  <span>24/7 Night Drop Box</span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  Drop off keys early or on weekends.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs text-zinc-400">
              Have a question? Call our front desk at <a href={`tel:${SHOP_INFO.phoneClean}`} className="text-green-400 font-bold hover:underline">(864) 504-6374</a>
            </div>

          </div>

          {/* Photo (Right) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <img 
                src="/assets/aistudio/gurage_website_7547cb8f.jpg" 
                alt="MasterTech Technician servicing brake assembly" 
                className="w-full h-[300px] sm:h-[340px] object-cover object-center"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
