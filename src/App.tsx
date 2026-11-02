import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { ShopGallery } from './components/ShopGallery.tsx';
import { DigitalInspectionBanner } from './components/DigitalInspectionBanner.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ReviewsSection } from './components/ReviewsSection.tsx';
import { LocationAndHours } from './components/LocationAndHours.tsx';
import { FAQSection } from './components/FAQSection.tsx';
import { Footer } from './components/Footer.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { MobileBottomBar } from './components/MobileBottomBar.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingService, setBookingService] = useState<string | undefined>(undefined);
  const [bookingVehicle, setBookingVehicle] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceName?: string) => {
    setBookingService(serviceName || 'Advanced Computer Diagnostics & Check Engine');
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col antialiased selection:bg-green-500 selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
      />

      <main className="flex-1 pb-16 sm:pb-0">
        {/* Hero Section */}
        <Hero 
          onOpenBooking={handleOpenBooking}
        />

        {/* Services Catalog */}
        <ServicesSection 
          onSelectService={handleOpenBooking}
        />

        {/* Real Shop Work Photos & Bay Gallery */}
        <ShopGallery />

        {/* Digital Inspection & Transparency Workflow */}
        <DigitalInspectionBanner 
          onOpenBooking={() => handleOpenBooking('Digital Vehicle Inspection')}
        />

        {/* Why Choose MasterTech & About Our Spartanburg Shop */}
        <AboutSection />

        {/* Customer Reviews & Reputation */}
        <ReviewsSection />

        {/* Location, Interactive Map & Operating Hours */}
        <LocationAndHours />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Directory Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar />

      {/* Appointment Booking Modal */}
      <AppointmentModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialService={bookingService}
        initialVehicle={bookingVehicle}
      />
    </div>
  );
}
