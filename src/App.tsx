/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { HeroSection } from './components/HeroSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { AmenitiesSection } from './components/AmenitiesSection.tsx';
import { TestimonialsSection } from './components/TestimonialsSection.tsx';
import { CarouselSection } from './components/CarouselSection.tsx';
import { ContactLocationSection } from './components/ContactLocationSection.tsx';
import { Footer } from './components/Footer.tsx';
import { TrialModal } from './components/TrialModal.tsx';

export default function App() {
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative selection:bg-yellow-400 selection:text-black">
      {/* Skip to Main Content Link for Keyboard Accessibility (WCAG 2.1 AA) */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
      >
        Pular para o conteúdo principal
      </a>

      {/* Institutional Accessible Header */}
      <Header onOpenTrialModal={() => setTrialModalOpen(true)} />

      {/* Main Semantic Landmark Container */}
      <main id="conteudo-principal" className="flex-1 w-full">
        {/* 1. Hero Presentation Section */}
        <HeroSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 2. Institutional About Section */}
        <AboutSection />

        {/* 3. Services & Modalities Section (with Biometrics Calculator) */}
        <ServicesSection onOpenTrialModal={() => setTrialModalOpen(true)} />

        {/* 4. Complete 13 Amenities Section */}
        <AmenitiesSection />

        {/* 5. Social Proof & Testimonials Section */}
        <TestimonialsSection />

        {/* 7. Facilities Carousel Gallery (5s Auto-rotation) */}
        <CarouselSection />

        {/* 8. Location & Contact Section (Google Maps Embed & Quick Scheduler) */}
        <ContactLocationSection />
      </main>

      {/* Institutional Semantic Footer */}
      <Footer />

      {/* Free Trial Booking Accessible Dialog */}
      <TrialModal
        isOpen={trialModalOpen}
        onClose={() => setTrialModalOpen(false)}
      />
    </div>
  );
}
