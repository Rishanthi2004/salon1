import React, { useState } from 'react';
import { X, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types/salon';

export const ExperienceGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeLightbox, setActiveLightbox] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Atelier' },
    { id: 'interior', label: 'Salon Interior' },
    { id: 'hair', label: 'Hair Coiffure' },
    { id: 'skin', label: 'Skincare & Spa' },
    { id: 'grooming', label: 'Men\'s Grooming' },
    { id: 'bridal', label: 'Bridal Couture' },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#242424]">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A878] font-sans">
              Visual Narrative
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light tracking-tight">
              OUR EXPERIENCE
            </h2>
          </div>

          {/* Interactive Filter Controls (Styled as clean segmented buttons per frontend-design guidelines) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#080808]/80 border border-[#242424] rounded-none">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-sans uppercase tracking-[0.12em] transition-all duration-300 ${
                  activeFilter === tab.id
                    ? 'bg-[#C6A878] text-[#080808] font-semibold'
                    : 'text-[#F5F1EB]/70 hover:text-[#FFFFFF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredItems.map((item, idx) => {
            // Asymmetrical grid column spans for editorial pacing
            const colSpan =
              idx === 0
                ? 'md:col-span-8'
                : idx === 1
                ? 'md:col-span-4'
                : idx === 2
                ? 'md:col-span-5'
                : idx === 3
                ? 'md:col-span-7'
                : 'md:col-span-12';

            const heightClass =
              idx === 0
                ? 'h-80 md:h-[440px]'
                : idx === 1
                ? 'h-80 md:h-[440px]'
                : 'h-72 md:h-96';

            return (
              <div
                key={item.id}
                onClick={() => setActiveLightbox(item)}
                className={`${colSpan} group relative overflow-hidden bg-[#242424] border border-white/10 cursor-pointer shadow-2xl`}
              >
                <div className={`w-full ${heightClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>

                {/* Subtle scrim & captions */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 p-2 bg-[#080808]/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A878]">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-[#F5F1EB] space-y-1">
                  <span className="text-[10px] uppercase font-sans tracking-[0.25em] text-[#C6A878]">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xl font-serif text-[#FFFFFF]">{item.title}</h3>
                  <p className="text-xs text-[#F5F1EB]/75 line-clamp-2 max-w-lg font-sans">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#080808]/95 backdrop-blur-lg"
          onClick={() => setActiveLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#080808] border border-[#C6A878]/30 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] overflow-hidden bg-[#242424]">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="w-full h-full max-h-[70vh] object-contain mx-auto"
              />
              <button
                onClick={() => setActiveLightbox(null)}
                className="absolute top-4 right-4 p-2 bg-[#080808]/80 text-[#F5F1EB] hover:text-[#C6A878] transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 md:p-8 bg-[#080808] space-y-2 border-t border-[#242424]">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C6A878]">
                {activeLightbox.categoryLabel}
              </span>
              <h3 className="text-2xl font-serif text-[#FFFFFF]">{activeLightbox.title}</h3>
              <p className="text-sm font-sans text-[#F5F1EB]/80 leading-relaxed max-w-2xl">
                {activeLightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
