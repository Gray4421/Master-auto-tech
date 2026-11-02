import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar,
  ExternalLink
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

interface EstimateOption {
  id: string;
  name: string;
  category: string;
  baseMin: number;
  baseMax: number;
  timeHours: string;
  description: string;
  includes: string[];
}

const ESTIMATE_SERVICES: EstimateOption[] = [
  {
    id: 'diagnostics',
    name: 'Computer Diagnostics & Check Engine Scan',
    category: 'Diagnostics',
    baseMin: 95,
    baseMax: 155,
    timeHours: '1 - 2 Hours',
    description: 'Pinpoint scan with live-data logging, sensor voltage checks, and root-cause verification.',
    includes: ['Full OBD-II and OEM module scan', 'Live sensor waveform test', 'Written tech findings report', 'Diagnostic fee credited toward repair']
  },
  {
    id: 'front-brakes',
    name: 'Front Brake Pads & Rotors Replacement',
    category: 'Brakes',
    baseMin: 220,
    baseMax: 380,
    timeHours: '1.5 - 2.5 Hours',
    description: 'Premium low-dust ceramic brake pads with precision-balanced new rotors and hardware.',
    includes: ['Premium ceramic pads (front)', 'New vented rotors (front)', 'Caliper slide pin lube & hardware', 'Brake fluid test & road test']
  },
  {
    id: 'rear-brakes',
    name: 'Rear Brake Pads & Rotors Replacement',
    category: 'Brakes',
    baseMin: 210,
    baseMax: 370,
    timeHours: '1.5 - 2.5 Hours',
    description: 'Rear friction replacement, parking brake inspection, and caliper piston reset.',
    includes: ['Premium ceramic rear pads', 'New rear rotors', 'Electronic parking brake reset (if equipped)', 'Hardware kit & road test']
  },
  {
    id: 'oil-change',
    name: 'Full Synthetic Oil Change & 21-Point Inspection',
    category: 'Maintenance',
    baseMin: 69,
    baseMax: 98,
    timeHours: '45 Minutes',
    description: 'Factory-spec full synthetic oil and premium filter to protect modern high-stress engines.',
    includes: ['Up to 5 quarts full synthetic oil', 'OEM-spec oil filter', 'Tire pressure check & adjustment', 'Digital 21-point safety inspection']
  },
  {
    id: 'ac-service',
    name: 'A/C Performance Diagnostic & Recharge',
    category: 'Climate',
    baseMin: 140,
    baseMax: 260,
    timeHours: '1 - 2 Hours',
    description: 'Deep vacuum leak test, UV dye injection, and refrigerant recovery and recharge to spec.',
    includes: ['High and low side pressure analysis', 'UV dye leak inspection', 'Evaporator and cabin vent temp test', 'Cabin pollen filter check']
  },
  {
    id: 'battery-alternator',
    name: 'Battery Replacement & Charging System Service',
    category: 'Electrical',
    baseMin: 160,
    baseMax: 290,
    timeHours: '45 - 90 Minutes',
    description: 'Heavy-duty AGM or flooded battery installation, terminal corrosion service, and alternator test.',
    includes: ['Direct-fit high-CCA battery', 'Terminal cleaning & protective sealant', 'Alternator output & diode ripple test', 'Battery registration/coding (for European/modern vehicles)']
  },
  {
    id: 'suspension-struts',
    name: 'Front Struts / Shock Absorbers Replacement',
    category: 'Suspension',
    baseMin: 390,
    baseMax: 720,
    timeHours: '2.5 - 4 Hours',
    description: 'Complete strut assemblies with new springs, mounts, and dampening cartridges.',
    includes: ['Twin strut assemblies / quick-struts', 'Strut mount & bearing plate inspection', 'Sway bar end-link check', 'Ride height & alignment check']
  },
  {
    id: 'transmission-flush',
    name: 'Transmission Fluid Exchange & Filter Service',
    category: 'Drivetrain',
    baseMin: 180,
    baseMax: 340,
    timeHours: '1.5 - 2 Hours',
    description: 'Complete transmission fluid flush using certified manufacturer-spec synthetic ATF.',
    includes: ['Full synthetic transmission fluid', 'Pan gasket & internal filter service', 'Driveshaft & axle seal inspection', 'Gear engagement road test']
  },
  {
    id: 'spark-plugs',
    name: 'Spark Plugs & Ignition Tune-Up',
    category: 'Engine',
    baseMin: 175,
    baseMax: 360,
    timeHours: '1.5 - 3 Hours',
    description: 'Iridium or platinum long-life spark plugs, coil boot inspection, and combustion check.',
    includes: ['OEM-grade Iridium/Platinum plugs', 'Ignition coil boots & dielectric grease', 'Throttle body cleaning', 'Idle relearn procedure']
  }
];

const MAKES = [
  'Toyota', 'Ford', 'Chevrolet', 'Honda', 'Nissan', 'Jeep', 'GMC', 'Subaru',
  'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Hyundai', 'Kia', 'Lexus',
  'Acura', 'Dodge', 'Ram', 'Mazda', 'Tesla', 'Other'
];

interface EstimateCalculatorProps {
  onBookWithEstimate: (serviceName: string, vehicleInfo: string) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({ onBookWithEstimate }) => {
  const [year, setYear] = useState('2018');
  const [make, setMake] = useState('Toyota');
  const [model, setModel] = useState('');
  const [mileage, setMileage] = useState('75,000 - 100,000');
  const [selectedServiceId, setSelectedServiceId] = useState('front-brakes');

  const selectedService = useMemo(() => {
    return ESTIMATE_SERVICES.find(s => s.id === selectedServiceId) || ESTIMATE_SERVICES[0];
  }, [selectedServiceId]);

  const makeMultiplier = useMemo(() => {
    const euroMakes = ['BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen'];
    if (euroMakes.includes(make)) return 1.25;
    return 1.0;
  }, [make]);

  const minPrice = Math.round(selectedService.baseMin * makeMultiplier);
  const maxPrice = Math.round(selectedService.baseMax * makeMultiplier);

  const vehicleSummary = `${year} ${make} ${model ? model.trim() : 'Vehicle'}`;

  return (
    <section id="estimator" className="py-16 sm:py-20 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header - Clean Typography */}
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-red-500">
            Fair Pricing & Turnaround
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight uppercase">
            Repair Cost Estimator
          </h2>
          <p className="text-sm text-slate-300">
            Select your vehicle and service below to see estimated pricing and labor times at our 151 S Forest St location. 
            All repairs are backed by our 24-Month / 24,000-Mile warranty.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form (Left) */}
          <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                1. Vehicle Details
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Domestic, Asian, and European imports serviced.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Year
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  {Array.from({ length: 27 }, (_, i) => 2026 - i).map((y) => (
                    <option key={y} value={y.toString()}>{y}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Make
                </label>
                <select
                  value={make}
                  onChange={(e) => setMake(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
                >
                  {MAKES.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                  Model (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Camry, F-150"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5 uppercase tracking-wider">
                Odometer Mileage Bracket
              </label>
              <select
                value={mileage}
                onChange={(e) => setMileage(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="Under 50,000">Under 50,000 miles</option>
                <option value="50,000 - 75,000">50,000 - 75,000 miles</option>
                <option value="75,000 - 100,000">75,000 - 100,000 miles</option>
                <option value="100,000 - 150,000">100,000 - 150,000 miles</option>
                <option value="Over 150,000">Over 150,000 miles</option>
              </select>
            </div>

            <div className="pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
                2. Select Service
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
                {ESTIMATE_SERVICES.map((serv) => {
                  const isSelected = serv.id === selectedServiceId;
                  return (
                    <button
                      key={serv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(serv.id)}
                      className={`text-left p-3 rounded-lg border text-xs transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-red-950/40 border-red-600 text-white' 
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-xs mb-1 line-clamp-1">{serv.name}</div>
                      <div className="text-[11px] text-slate-400">{serv.category}</div>
                      <div className="font-bold text-red-400 mt-1">
                        ${Math.round(serv.baseMin * makeMultiplier)} – ${Math.round(serv.baseMax * makeMultiplier)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Summary Box (Right) */}
          <div className="lg:col-span-5 bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6">
            <div>
              <div className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Summary
              </div>
              <div className="text-lg font-display font-bold text-white mt-1">
                {vehicleSummary}
              </div>
              <div className="text-xs font-semibold text-red-400 mt-0.5">
                {selectedService.name}
              </div>
            </div>

            {/* Price Range Display */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-1">
              <div className="text-xs text-slate-400 uppercase font-semibold">
                Estimated Parts & Labor
              </div>
              <div className="text-3xl font-display font-black text-white">
                ${minPrice} – ${maxPrice}
              </div>
              <p className="text-xs text-slate-400 pt-1 leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            {/* Turnaround & Warranty */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                <span className="text-slate-400 block text-[11px]">Turnaround Time</span>
                <span className="text-white font-bold">{selectedService.timeHours}</span>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-3">
                <span className="text-slate-400 block text-[11px]">Warranty</span>
                <span className="text-white font-bold">24 Mo / 24,000 Mi</span>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Included:
              </div>
              {selectedService.includes.map((inc, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>{inc}</span>
                </div>
              ))}
            </div>

            {/* Tekmetric Booking Actions */}
            <div className="pt-2 space-y-2.5">
              <a
                href={SHOP_INFO.tekmetricBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-center text-xs font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-700 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book This on Tekmetric</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={() => onBookWithEstimate(selectedService.name, vehicleSummary)}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Or Request Callback from Chris
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
