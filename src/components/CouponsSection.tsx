import React, { useState } from 'react';
import { 
  Tag, 
  Calendar, 
  Check, 
  Copy, 
  Clock, 
  ExternalLink,
  Phone
} from 'lucide-react';
import { SPECIAL_OFFERS, SpecialOffer, SHOP_INFO } from '../data/shopData.ts';

interface CouponsSectionProps {
  onClaimCoupon: (couponCode: string, couponTitle: string) => void;
}

export const CouponsSection: React.FC<CouponsSectionProps> = ({ onClaimCoupon }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  return (
    <section id="specials" className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - Minimalist */}
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            Active Shop Discounts
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            Coupons & Specials
          </h2>
          <p className="text-sm text-slate-300">
            Show these digital coupons on your smartphone at our 151 S Forest St location or mention them when scheduling online via Tekmetric.
          </p>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIAL_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div
                key={offer.id}
                className="rounded-xl bg-slate-950 border border-slate-800 p-5 flex flex-col justify-between space-y-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">
                    {offer.expiry}
                  </span>
                  <span className="font-mono font-bold text-red-400 bg-red-950/60 px-2 py-0.5 rounded border border-red-800/60 text-[11px]">
                    {offer.code}
                  </span>
                </div>

                {/* Body */}
                <div className="space-y-1.5">
                  <div className="text-2xl font-display font-black text-white">
                    {offer.discount}
                  </div>
                  <h3 className="text-sm font-bold text-slate-200">
                    {offer.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {offer.description}
                  </p>
                  <p className="text-[10px] text-slate-500 italic pt-1">
                    {offer.terms}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-800/80 space-y-2">
                  <a
                    href={SHOP_INFO.tekmetricBookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 px-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Claim on Tekmetric</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <button
                    onClick={() => handleCopy(offer.code)}
                    className="w-full py-1.5 px-3 text-center text-[11px] font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Code Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fleet Banner */}
        <div className="mt-10 bg-slate-950 border border-slate-800 rounded-xl p-5 text-xs text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="font-bold text-white text-sm">Spartanburg Commercial Fleet Services</div>
            <div className="text-slate-400 text-xs">Priority maintenance scheduling for local delivery vans and work fleets.</div>
          </div>
          <a
            href={`tel:${SHOP_INFO.phoneClean}`}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900 border border-slate-800 rounded-lg transition-colors whitespace-nowrap"
          >
            Call Fleet Desk: (864) 504-6374
          </a>
        </div>

      </div>
    </section>
  );
};
