import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  Send 
} from 'lucide-react';
import { SHOP_INFO } from '../data/shopData.ts';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialVehicle?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialVehicle
}) => {
  const [viewMode, setViewMode] = useState<'tekmetric' | 'callback'>('tekmetric');
  const [callbackSubmitted, setCallbackSubmitted] = useState(false);
  const [callbackData, setCallbackData] = useState({
    name: '',
    phone: '',
    vehicle: initialVehicle || '',
    service: initialService || ''
  });

  useEffect(() => {
    if (initialService) setCallbackData(prev => ({ ...prev, service: initialService }));
    if (initialVehicle) setCallbackData(prev => ({ ...prev, vehicle: initialVehicle }));
  }, [initialService, initialVehicle]);

  if (!isOpen) return null;

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callbackData.name || !callbackData.phone) return;
    setCallbackSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-black border border-zinc-800 rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header with Official Logo */}
        <div className="bg-zinc-950 px-4 sm:px-6 py-3 sm:py-4 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="bg-black rounded p-0.5 shrink-0 flex items-center">
              <img 
                src="/assets/aistudio/mastertech_logo_black_bg.png" 
                alt="MasterTech Auto Repair" 
                className="h-8 sm:h-9 w-auto object-contain block"
              />
            </div>
            <div>
              <h3 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                Schedule Service
              </h3>
              <p className="text-[10px] sm:text-[11px] text-zinc-400">
                151 S Forest St, Spartanburg, SC
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex border-b border-zinc-800 bg-zinc-950 text-xs">
          <button
            type="button"
            onClick={() => setViewMode('tekmetric')}
            className={`flex-1 py-3 px-4 font-bold uppercase tracking-wider transition-colors cursor-pointer text-center ${
              viewMode === 'tekmetric' 
                ? 'bg-black text-white border-b-2 border-green-500' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Tekmetric Live Booking
          </button>
          <button
            type="button"
            onClick={() => setViewMode('callback')}
            className={`flex-1 py-3 px-4 font-bold uppercase tracking-wider transition-colors cursor-pointer text-center ${
              viewMode === 'callback' 
                ? 'bg-black text-white border-b-2 border-green-500' 
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Request Shop Callback
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto">
          {viewMode === 'tekmetric' ? (
            <div className="space-y-6 text-center">
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-zinc-900 border border-green-500/40 text-green-400 rounded-xl flex items-center justify-center mx-auto">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-display font-bold text-white uppercase">
                  Official Tekmetric Live Booking
                </h4>
                <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Book your appointment directly into our shop calendar via Tekmetric. 
                  Choose your preferred date, drop-off time, and specify your vehicle issue with real-time confirmation.
                </p>
              </div>

              {/* Vehicle / Service pre-fill indicator if selected */}
              {(callbackData.vehicle || callbackData.service) && (
                <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 text-left text-xs space-y-1">
                  <div className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                    Selected on Website:
                  </div>
                  {callbackData.vehicle && (
                    <div className="text-zinc-300">
                      Vehicle: <span className="text-white font-semibold">{callbackData.vehicle}</span>
                    </div>
                  )}
                  {callbackData.service && (
                    <div className="text-zinc-300">
                      Service: <span className="text-white font-semibold">{callbackData.service}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Direct Tekmetric CTA Button */}
              <div className="space-y-3 pt-2">
                <a
                  href={SHOP_INFO.tekmetricBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 text-center text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-lg flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-green-500/25"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Open Tekmetric Booking Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <div className="text-[11px] text-zinc-400">
                  Opens Tekmetric's secure reservation system for MasterTech Auto Repair (Spartanburg).
                </div>
              </div>

              {/* Quick Contact Alternative */}
              <div className="pt-4 border-t border-zinc-800 text-xs text-zinc-400 flex items-center justify-between">
                <span>Prefer to call directly?</span>
                <a 
                  href={`tel:${SHOP_INFO.phoneClean}`}
                  className="text-green-400 font-bold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>(864) 504-6374</span>
                </a>
              </div>

            </div>
          ) : (
            /* Callback Form */
            <div>
              {callbackSubmitted ? (
                <div className="text-center py-6 space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-green-400 mx-auto" />
                  <h4 className="text-base font-bold text-white uppercase">
                    Callback Request Received
                  </h4>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Our service desk will call <span className="text-white font-semibold">{callbackData.phone}</span> shortly during shop hours to coordinate your vehicle appointment.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-4 px-5 py-2 text-xs font-bold uppercase text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-lg cursor-pointer transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-3.5">
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white uppercase">
                      Have Our Shop Call You
                    </h4>
                    <p className="text-xs text-zinc-400">
                      Leave your details and we'll call you to coordinate scheduling.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={callbackData.name}
                        onChange={(e) => setCallbackData({ ...callbackData, name: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(864) 555-0123"
                        value={callbackData.phone}
                        onChange={(e) => setCallbackData({ ...callbackData, phone: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                        Vehicle (Year/Make/Model)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 2018 Ford F-150"
                        value={callbackData.vehicle}
                        onChange={(e) => setCallbackData({ ...callbackData, vehicle: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-zinc-400 uppercase mb-1">
                        Service Needed
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Brakes, Check Engine, Oil"
                        value={callbackData.service}
                        onChange={(e) => setCallbackData({ ...callbackData, service: e.target.value })}
                        className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-green-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-black uppercase tracking-wider text-black bg-green-500 hover:bg-green-400 rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm shadow-green-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Request</span>
                  </button>
                </form>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
