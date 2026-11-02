import React from 'react';
import { ExternalLink } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

export const ShopGallery: React.FC = () => {
  const photos = [
    {
      src: "/assets/aistudio/104108860_679365155964929_2286738508642534658_n_c1956adf.jpg",
      title: "Computer Diagnostics & Live Data",
      category: "Diagnostics"
    },
    {
      src: "/assets/aistudio/car_engen_67d8da96.jpg",
      title: "Engine Swaps & Heavy Overhauls",
      category: "Powertrain"
    },
    {
      src: "/assets/aistudio/gurage_website_7547cb8f.jpg",
      title: "Brake Assemblies & Suspension",
      category: "Brakes & Chassis"
    }
  ];

  return (
    <section id="gallery" className="py-14 sm:py-16 bg-black border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              Inside Our Shop
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
              Real Work at 151 S Forest St
            </h2>
          </div>

          <a
            href={SHOP_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-zinc-400 hover:text-green-400 flex items-center gap-1 transition-colors"
          >
            <span>Facebook Page</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* 3 Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {photos.map((item, idx) => (
            <div 
              key={idx}
              className="rounded-xl overflow-hidden bg-zinc-950 border border-zinc-800 group hover:border-zinc-700 transition-all"
            >
              <div className="relative h-60 overflow-hidden bg-zinc-900">
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="font-bold text-white text-sm drop-shadow">{item.title}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-black/80 px-2 py-0.5 rounded border border-zinc-800">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
