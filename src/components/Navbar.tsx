import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  ChevronRight, 
  Star,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo.tsx';
import { SHOP_INFO } from '../data/shopData.ts';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const spartanburgTimeStr = now.toLocaleString("en-US", { timeZone: "America/New_York" });
        const spartanburgDate = new Date(spartanburgTimeStr);
        const day = spartanburgDate.getDay();
        const hour = spartanburgDate.getHours();
        const minute = spartanburgDate.getMinutes();
        const totalMinutes = hour * 60 + minute;

        // Mon-Fri: 8:00 AM (480) to 5:30 PM (1050)
        const isWeekday = day >= 1 && day <= 5;
        const isOpenHours = totalMinutes >= 480 && totalMinutes < 1050;

        setIsOpenNow(isWeekday && isOpenHours);
      } catch {
        const now = new Date();
        const day = now.getDay();
        const hour = now.getHours();
        setIsOpenNow(day >= 1 && day <= 5 && hour >= 8 && hour < 17);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Shop Photos', href: '#gallery' },
    { label: 'Inspection', href: '#inspection' },
    { label: 'About', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location & Hours', href: '#location' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Utility Bar - Clean and single-line on mobile */}
      <div className="bg-black border-b border-zinc-800 text-[11px] sm:text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 text-zinc-400">
          
          {/* Status & Address */}
          <div className="flex items-center gap-1.5 sm:gap-2 truncate">
            <span className={`w-2 h-2 rounded-full shrink-0 ${isOpenNow ? 'bg-green-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className="font-semibold text-zinc-200 shrink-0">
              {isOpenNow ? 'Open Now' : 'Closed'}
            </span>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span className="truncate">151 S Forest St, Spartanburg</span>
          </div>

          {/* Quick Call Link */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-1 text-zinc-300">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="font-bold text-white">{SHOP_INFO.rating}</span>
            </div>

            <a 
              href={`tel:${SHOP_INFO.phoneClean}`}
              className="font-bold text-green-400 hover:text-green-300 transition-colors flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>(864) 504-6374</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Nav Bar */}
      <nav className={`bg-black/95 backdrop-blur-md border-b border-zinc-800 transition-all duration-150 ${scrolled ? 'py-1.5 sm:py-2' : 'py-2 sm:py-2.5'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center justify-between">
          
          {/* Logo on solid black */}
          <a href="#" className="flex items-center">
            <Logo size="sm" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-300 hover:text-green-400 hover:bg-zinc-900 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#services"
              className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-900 border border-zinc-800 rounded-lg transition-colors cursor-pointer"
            >
              Services
            </a>

            <a
              href={SHOP_INFO.tekmetricBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-lg shadow-sm shadow-green-500/20 flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Online (Tekmetric)</span>
              <ExternalLink className="w-3 h-3 opacity-90" />
            </a>
          </div>

          {/* Mobile Actions: Hamburger and Quick Book */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={SHOP_INFO.tekmetricBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-black uppercase tracking-wider text-black bg-green-500 active:bg-green-400 rounded-md shadow-sm"
            >
              Book Online
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-900 active:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800 bg-black px-4 pt-3 pb-6 space-y-3">
            <div className="grid grid-cols-2 gap-2 pb-2">
              <a
                href={SHOP_INFO.tekmetricBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 px-3 text-center text-xs font-black uppercase tracking-wider text-black bg-green-500 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4" />
                Book (Tekmetric)
              </a>
              <a
                href={`tel:${SHOP_INFO.phoneClean}`}
                className="w-full py-2.5 px-3 text-center text-xs font-bold uppercase tracking-wider text-zinc-200 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-green-400" />
                Call (864) 504-6374
              </a>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-zinc-300 hover:text-green-400 hover:bg-zinc-900 active:bg-zinc-800 rounded-md"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-600" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-800 text-xs text-zinc-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-green-400" />
                <span>151 S Forest St, Spartanburg, SC 29306</span>
              </div>
              <a 
                href={SHOP_INFO.facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1.5 text-green-400 pt-1"
              >
                <span>Visit Facebook Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
