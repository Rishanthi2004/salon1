import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroSalonImg from '../assets/images/hero_salon_interior_1792733736627.jpg';
import hairStylingImg from '../assets/images/hair_transformation_1792733737985.jpg';

interface AboutSectionProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreServices }) => {
  return (
    <section id="about" className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-14 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A878] font-sans">
              The Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light mt-2 tracking-tight">
              A NEW STANDARD OF BEAUTY
            </h2>
          </div>
          <p className="text-xs font-sans tracking-[0.2em] text-[#F5F1EB]/50 uppercase">
            EST. 2024 · UNISEX ATELIER
          </p>
        </div>

        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-14 items-start">
          {/* Left Column: Editorial Text & Warm Ivory Feature Card */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl font-serif text-[#F5F1EB] leading-relaxed font-light">
                "At Rishaara Salon, beauty is a personal experience. Our team combines professional expertise, contemporary techniques, and attention to detail to deliver personalised hair, skin, nail, and grooming services for men and women."
              </p>
              <p className="text-sm font-sans text-[#F5F1EB]/70 leading-relaxed max-w-xl">
                Founded with a conviction that salon craft should elevate both appearance and inner tranquility, Rishaara merges Parisian hairdressing traditions with modern dermatological skincare. Every guest steps into an architecturally balanced sanctuary tailored to individual silhouette, texture, and expression.
              </p>
            </div>

            {/* Alternating Warm Ivory Block with Supporting Highlights */}
            <div className="bg-[#F5F1EB] text-[#080808] p-8 md:p-10 shadow-2xl relative">
              <div className="border-b border-[#080808]/15 pb-4 mb-6 flex items-center justify-between">
                <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-semibold text-[#080808]">
                  The Four Pillars of Rishaara
                </span>
                <span className="text-xs text-[#C6A878] font-serif font-bold">★ ★ ★ ★</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <h4 className="text-base font-serif font-semibold text-[#080808]">
                    Professional Experts
                  </h4>
                  <p className="text-xs text-[#080808]/75 leading-relaxed">
                    Internationally certified hair sculptors, estheticians, and master barbers.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-serif font-semibold text-[#080808]">
                    Personalised Treatments
                  </h4>
                  <p className="text-xs text-[#080808]/75 leading-relaxed">
                    Custom diagnostic consultations before any shear cut, color blend, or facial.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-serif font-semibold text-[#080808]">
                    Premium Products
                  </h4>
                  <p className="text-xs text-[#080808]/75 leading-relaxed">
                    Formulations free from harsh sulfates, toxic formaldehyde, and aggressive chemicals.
                  </p>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-serif font-semibold text-[#080808]">
                    Exceptional Care
                  </h4>
                  <p className="text-xs text-[#080808]/75 leading-relaxed">
                    Dedicated private booths, artisanal refreshments, and serene acoustic calm.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#080808]/10 flex items-center justify-between">
                <button
                  onClick={onExploreServices}
                  className="text-xs font-sans uppercase tracking-[0.18em] font-semibold text-[#080808] hover:text-[#C6A878] transition-colors flex items-center gap-2"
                >
                  <span>Explore The Full Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Overlapping Editorial Images */}
          <div className="lg:col-span-6 relative">
            {/* Primary Large Image */}
            <div className="relative overflow-hidden bg-[#242424] shadow-2xl border border-white/10 group">
              <img
                src={heroSalonImg}
                alt="Rishaara Luxury Salon Interior"
                className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-[#F5F1EB] flex justify-between items-end">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A878]">
                    Spatial Architecture
                  </span>
                  <p className="text-lg font-serif">The Main Styling Atelier</p>
                </div>
                <span className="text-xs font-mono text-white/60">01 / 02</span>
              </div>
            </div>

            {/* Secondary Overlapping Image */}
            <div className="mt-6 sm:mt-0 sm:absolute sm:-bottom-12 sm:-left-12 sm:w-64 md:w-72 bg-[#080808] p-2 shadow-2xl border border-[#C6A878]/30 group">
              <div className="overflow-hidden">
                <img
                  src={hairStylingImg}
                  alt="Precision Stylist at work"
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-[11px] font-sans">
                <span className="text-[#C6A878] uppercase tracking-wider block text-[9px]">Artistry in Action</span>
                <span className="text-[#F5F1EB] font-serif text-sm">Bespoke Thermal Sculpting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
