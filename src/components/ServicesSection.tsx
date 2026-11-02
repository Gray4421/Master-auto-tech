import React, { useState } from 'react';
import { 
  Calendar,
  ExternalLink,
  Wrench,
  Cpu,
  Disc,
  Flame,
  Wind,
  Droplet
} from 'lucide-react';
import { SERVICES, ServiceItem, SHOP_INFO } from '../data/shopData.ts';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'diagnostics', label: 'Diagnostics' },
    { id: 'brakes', label: 'Brakes' },
    { id: 'engine', label: 'Engine' },
    { id: 'climate', label: 'A/C' },
    { id: 'maintenance', label: 'Maintenance' },
  ];

  const filteredServices = SERVICES.filter(s => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'diagnostics') return s.category === 'diagnostics' || s.category === 'electrical';
    if (activeCategory === 'brakes') return s.category === 'brakes';
    if (activeCategory === 'engine') return s.category === 'engine';
    if (activeCategory === 'climate') return s.category === 'climate';
    if (activeCategory === 'maintenance') return s.category === 'maintenance';
    return true;
  });

  return (
    <section id="services" className="py-14 sm:py-16 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header - Minimalist */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-green-400">
              Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
              Automotive Repair & Diagnostics
            </h2>
          </div>

          <div className="text-xs text-zinc-400">
            Domestic, Asian & European Vehicles
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-green-500 text-black'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Minimalist Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-xl bg-black border border-zinc-800 p-5 flex flex-col justify-between space-y-4 hover:border-zinc-700 transition-all"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="uppercase font-bold tracking-wider text-green-400 text-[11px]">
                    {service.category}
                  </span>
                  <span className="text-zinc-500 text-[11px]">{service.estimatedHours}</span>
                </div>

                <h3 className="text-base font-display font-bold text-white leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action */}
              <div className="pt-3 border-t border-zinc-900 flex items-center justify-between">
                <span className="text-xs font-semibold text-zinc-300">
                  {service.estimateRange}
                </span>

                <a
                  href={SHOP_INFO.tekmetricBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-md flex items-center gap-1 transition-all cursor-pointer shadow-sm shadow-green-500/10"
                >
                  <Calendar className="w-3 h-3" />
                  <span>Book</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
