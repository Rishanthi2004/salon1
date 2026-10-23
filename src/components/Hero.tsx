import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface HeroProps {
  onExploreClick: () => void;
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onBookClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-between px-6 md:px-12 lg:px-20 pt-28 pb-16 overflow-hidden"
    >
      {/* Main Content (Positioned slightly to the left with editorial presence) */}
      <div className="max-w-3xl z-10 space-y-8 animate-fade-in">
        {/* Subtle Category Kicker */}
        <div className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#C6A878]">
          <span className="w-8 h-[1px] bg-[#C6A878]" />
          <span>PREMIUM UNISEX SALON</span>
          <span className="text-[#F5F1EB]/40">·</span>
          <span className="text-[#F5F1EB]/70">PARIS & METROPOLIS</span>
        </div>

        {/* Oversized Cinematic Heading */}
        <div className="space-y-1">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-[#FFFFFF] tracking-tight leading-[0.98]">
            <span className="block hover:translate-x-1 transition-transform duration-500">YOUR BEAUTY.</span>
            <span className="block text-[#C6A878] italic font-normal hover:translate-x-1 transition-transform duration-500">
              YOUR STYLE.
            </span>
            <span className="block hover:translate-x-1 transition-transform duration-500">YOUR SIGNATURE.</span>
          </h1>
        </div>

        {/* Description Prose */}
        <p className="text-base sm:text-lg md:text-xl text-[#F5F1EB]/85 font-sans font-light leading-relaxed max-w-xl text-balance">
          Experience exceptional hair, skin, nail, and grooming services designed to bring out your finest self.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={onExploreClick}
            className="group px-7 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#F5F1EB] bg-[#080808]/70 border border-[#F5F1EB]/30 hover:border-[#C6A878] hover:text-[#C6A878] backdrop-blur-sm transition-all duration-300 flex items-center gap-3"
          >
            <span>Explore Our Services</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </button>

          <button
            onClick={onBookClick}
            className="group px-8 py-3.5 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#080808]/50"
          >
            <span>Book an Appointment</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Quiet Trust Accents */}
        <div className="pt-8 flex items-center gap-6 text-xs text-[#F5F1EB]/60 font-sans tracking-wide">
          <div>
            <span className="text-[#C6A878] font-serif text-sm mr-1">★</span> Master Stylists
          </div>
          <span className="text-white/20">/</span>
          <div>Private Suites</div>
          <span className="text-white/20">/</span>
          <div>Clean Botanical Care</div>
        </div>
      </div>

      {/* Vertical Brand Label on Desktop (Editorial Inspiration from Reference) */}
      <div className="hidden xl:flex flex-col items-center gap-6 z-10 self-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#C6A878] to-transparent" />
        <span
          className="text-[11px] font-sans uppercase tracking-[0.35em] text-[#C6A878]/80 select-none"
          style={{ writingMode: 'vertical-rl' }}
        >
          RISHAARA · HAUTE BEAUTÉ & COIFFURE
        </span>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#C6A878] via-[#C6A878]/30 to-transparent" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-6 md:left-20 z-10 flex items-center gap-3">
        <button
          onClick={onExploreClick}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-[#F5F1EB]/60 hover:text-[#C6A878] transition-colors group"
        >
          <span className="w-6 h-[1px] bg-white/20 group-hover:bg-[#C6A878] transition-colors" />
          <span>Scroll to Discover</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#C6A878]" />
        </button>
      </div>
    </section>
  );
};
