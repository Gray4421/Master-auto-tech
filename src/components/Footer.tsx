import React from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Award, 
  Star, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SHOP_INFO } from '../data/shopData.ts';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-black text-zinc-400 text-xs border-t border-zinc-800">
      
      {/* Upper Pre-footer Banner */}
      <div className="bg-zinc-950 py-10 px-4 sm:px-6 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase">
              Schedule Your Service at MasterTech
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300">
              151 S Forest St, Spartanburg, SC 29306 · Book online via Tekmetric or call (864) 504-6374.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${SHOP_INFO.phoneClean}`}
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-green-400" />
              <span>(864) 504-6374</span>
            </a>

            <a
              href={SHOP_INFO.tekmetricBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-lg flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-green-500/25"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online (Tekmetric)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-3">
            <Logo size="md" />
            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm mt-2">
              MasterTech Auto Repair is an independent automotive service facility located in Spartanburg, SC. 
              RepairPal Certified, CARFAX Top-Rated, and dedicated to honest diagnostics with zero aggressive upselling.
            </p>

            <div className="flex items-center gap-3 pt-2 text-zinc-400">
              <a
                href={SHOP_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors flex items-center gap-1.5"
                title="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Page</span>
              </a>

              <span aria-hidden="true" className="text-zinc-700">·</span>

              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-400 transition-colors flex items-center gap-1"
                title="Google Maps"
              >
                <MapPin className="w-3.5 h-3.5 text-green-400" />
                <span>Map & Directions</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-green-400 transition-colors">Shop Photos</a></li>
              <li><a href="#inspection" className="hover:text-green-400 transition-colors">Digital Inspection</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#reviews" className="hover:text-green-400 transition-colors">Reviews</a></li>
              <li><a href="#location" className="hover:text-green-400 transition-colors">Location & Hours</a></li>
              <li><a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Popular Repairs */}
          <div className="lg:col-span-3 space-y-2">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Common Repairs
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#services" className="hover:text-green-400 transition-colors">Check Engine Diagnostics</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Brake Pads & Rotor Service</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Synthetic Oil Maintenance</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">A/C Recharge & Leak Testing</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Struts, Shocks & Steering</a></li>
              <li><a href="#services" className="hover:text-green-400 transition-colors">Timing Belts & Engine Repair</a></li>
            </ul>
          </div>

          {/* Shop Details */}
          <div className="lg:col-span-3 space-y-2 text-xs">
            <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white">
              Shop Details
            </h4>
            <div className="space-y-1.5 text-zinc-300">
              <div>
                <span className="text-white font-semibold block">MasterTech Auto Repair</span>
                <span>151 S Forest St, Spartanburg, SC 29306</span>
              </div>
              <div>
                <span className="text-white block font-semibold">Phone: (864) 504-6374</span>
                <span className="text-zinc-500">Alt: (864) 504-9888</span>
              </div>
              <div className="text-zinc-400">
                Mon–Fri: 8:00 AM – 5:30 PM <br />
                Sat–Sun: Closed (24/7 Key Drop Box)
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="mt-10 pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} MasterTech Auto Repair LLC · Spartanburg, SC. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-400">RepairPal Certified</span>
            <span>·</span>
            <span className="text-zinc-400">CARFAX Top-Rated</span>
            <span>·</span>
            <a 
              href={SHOP_INFO.tekmetricBookingUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-400 hover:text-green-300 font-semibold"
            >
              Tekmetric Online Booking
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
