import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FEATURED_SERVICES } from '../data/salonData';

interface FeaturedSectionProps {
  onSelectFeature: (targetCategory: string) => void;
  onBookFeature: (categoryName: string) => void;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({
  onSelectFeature,
  onBookFeature,
}) => {
  return (
    <section className="relative z-10 py-24 md:py-32 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#242424]">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A878] font-sans">
              Curated Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light tracking-tight">
              FEATURED SIGNATURES
            </h2>
          </div>
          <p className="text-xs font-sans text-[#F5F1EB]/60 uppercase tracking-[0.18em] max-w-sm">
            Handpicked transformative experiences favored by our discerning clientele.
          </p>
        </div>

        {/* Photographic Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map((feat, idx) => (
            <div
              key={feat.id}
              className={`group relative bg-[#080808]/90 border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between ${
                idx === 0 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Photo Panel with Smooth Zoom */}
              <div className="relative overflow-hidden h-72 sm:h-80 w-full bg-[#242424]">
                <img
                  src={feat.image}
                  alt={feat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 bg-[#080808]/85 backdrop-blur-md px-3 py-1 border border-white/10">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                    {feat.category}
                  </span>
                </div>
              </div>

              {/* Text & Action Footer */}
              <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-serif text-[#FFFFFF] group-hover:text-[#C6A878] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/70 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#242424] flex items-center justify-between">
                  <button
                    onClick={() => onSelectFeature(feat.targetCategory)}
                    className="text-xs font-sans uppercase tracking-[0.18em] text-[#C6A878] hover:text-[#FFFFFF] transition-colors flex items-center gap-1"
                  >
                    <span>{feat.actionLabel}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onBookFeature(feat.title)}
                    className="px-4 py-2 text-[11px] font-sans uppercase tracking-[0.16em] font-medium text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-colors"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
