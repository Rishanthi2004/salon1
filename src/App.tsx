/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BackgroundVideo } from './components/BackgroundVideo';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MovingMarquee } from './components/MovingMarquee';
import { ExperienceGallery } from './components/ExperienceGallery';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentSceneId, setCurrentSceneId] = useState('atelier');
  const [preselectedCategory, setPreselectedCategory] = useState<string>('Hair Services');
  const [preselectedService, setPreselectedService] = useState<string>('Haircut & Styling');

  const scrollToBooking = (categoryName?: string, serviceName?: string) => {
    if (categoryName) setPreselectedCategory(categoryName);
    if (serviceName) setPreselectedService(serviceName);
    const bookingEl = document.getElementById('booking');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F5F1EB] selection:bg-[#C6A878] selection:text-[#080808]">
      {/* 1. Full-Screen Cinematic Background Video (Stays mounted, continuous loop) */}
      <BackgroundVideo
        currentSceneId={currentSceneId}
        onSceneChange={(id) => setCurrentSceneId(id)}
      />

      {/* Foreground Website Content Container (Allows background video to remain visible between and around sections) */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Header */}
        <Navbar onBookClick={(cat) => scrollToBooking(cat)} />

        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('#services')}
          onBookClick={() => scrollToBooking()}
        />

        {/* Moving Luxury Runway Ribbon Banner */}
        <MovingMarquee />

        {/* About Section */}
        <AboutSection
          onExploreServices={() => scrollToSection('#services')}
        />

        {/* Full Services Repertoire */}
        <ServicesSection
          onBookService={(cat, svc) => scrollToBooking(cat, svc)}
        />

        {/* Moving Luxury Runway Ribbon Banner Between Repertoire & Experience */}
        <MovingMarquee />

        {/* Visual Storytelling Gallery */}
        <ExperienceGallery />

        {/* Appointment Booking Form */}
        <BookingSection
          preselectedCategory={preselectedCategory}
          preselectedService={preselectedService}
        />

        {/* Contact & Location Section */}
        <ContactSection />

        {/* Footer */}
        <Footer
          onNavClick={(href) => scrollToSection(href)}
          onCategoryClick={(catId) => {
            if (catId === 'hair') scrollToSection('#hair-services');
            else if (catId === 'skin') scrollToSection('#skin-services');
            else if (catId === 'nails') scrollToSection('#nail-services');
            else if (catId === 'bridal') scrollToSection('#bridal-services');
            else scrollToSection('#services');
          }}
        />
      </div>
    </div>
  );
}
