import React from 'react';
import { 
  Star, 
  CheckCircle2, 
  ExternalLink
} from 'lucide-react';
import { REVIEWS, SHOP_INFO } from '../data/shopData.ts';

export const ReviewsSection: React.FC = () => {
  // Show 3 punchy reviews
  const topReviews = REVIEWS.slice(0, 3);

  return (
    <section id="reviews" className="py-14 sm:py-16 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              Reviews
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
              Customer Feedback
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-zinc-300">
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span className="font-bold text-white">4.9</span>
            <span className="text-zinc-500">(180+ Reviews)</span>
          </div>
        </div>

        {/* 3 Compact Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topReviews.map((rev) => (
            <div
              key={rev.id}
              className="rounded-xl bg-black border border-zinc-800 p-5 flex flex-col justify-between space-y-3 hover:border-zinc-700 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{rev.source}</span>
                </div>

                <p className="text-xs text-zinc-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-2 border-t border-zinc-900 flex items-center justify-between text-xs">
                <span className="font-bold text-white flex items-center gap-1">
                  <span>{rev.author}</span>
                  <CheckCircle2 className="w-3 h-3 text-green-400" />
                </span>
                <span className="text-[11px] text-zinc-500">{rev.vehicle}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="mt-8 text-center text-xs text-zinc-400">
          <a
            href={SHOP_INFO.googleSearchQueryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 font-semibold underline inline-flex items-center gap-1"
          >
            <span>Read all 180+ reviews on Google</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
};
