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
import { FeaturedSection } from './components/FeaturedSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ExperienceGallery } from './components/ExperienceGallery';
import { BridalSection } from './components/BridalSection';
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

        {/* About Section */}
        <AboutSection
          onExploreServices={() => scrollToSection('#services')}
        />

        {/* Featured Signature Services */}
        <FeaturedSection
          onSelectFeature={(target) => {
            if (target === 'hair') scrollToSection('#hair-services');
            else if (target === 'skin') scrollToSection('#skin-services');
            else if (target === 'nails') scrollToSection('#nail-services');
            else if (target === 'grooming') scrollToSection('#hair-services');
            else if (target === 'bridal') scrollToSection('#bridal-services');
            else scrollToSection('#services');
          }}
          onBookFeature={(title) => scrollToBooking(title)}
        />

        {/* Full Services Repertoire */}
        <ServicesSection
          onBookService={(cat, svc) => scrollToBooking(cat, svc)}
        />

        {/* Why Choose Rishaara Salon */}
        <WhyChooseSection />

        {/* Dedicated Bridal Beauty Section */}
        <BridalSection
          onEnquireBridal={() => scrollToBooking('Bridal & Occasion Beauty', 'Bridal Makeup')}
        />

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
