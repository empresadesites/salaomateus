/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Corte masculino');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBooking = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const bookingEl = document.getElementById('agendamento');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => {
      nameInputRef.current?.focus({ preventScroll: true });
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#C9A45C] selection:text-[#080808]">
      <Header onNavigateToBooking={() => scrollToBooking()} />

      <main>
        <Hero onNavigateToBooking={() => scrollToBooking()} />
        <About />
        <Services
          onSelectServiceForBooking={(serviceName) => scrollToBooking(serviceName)}
        />
        <Gallery
          onSelectStyleForBooking={(serviceName) => scrollToBooking(serviceName)}
        />
        <Reviews />
        <BookingSection
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          nameInputRef={nameInputRef}
        />
        <LocationSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
