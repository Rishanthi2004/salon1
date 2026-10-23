import React, { useState } from 'react';
import { X, Maximize2, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../data/salonData';
import { GalleryItem } from '../types/salon';

export const ExperienceGallery: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
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
    <section id="experience" className="relative z-10 py-20 md:py-32 px-3 sm:px-6 md:px-12 lg:px-20 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#242424] px-1 sm:px-0">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A878] font-sans flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A878] animate-ping" />
              Visual Narrative
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light tracking-tight">
              OUR EXPERIENCE
            </h2>
          </div>

          {/* Toggle / Quick Status */}
          <div className="flex items-center gap-3">
            {isGalleryOpen ? (
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-sans uppercase tracking-[0.16em] border border-[#C6A878]/60 text-[#C6A878] hover:bg-[#C6A878] hover:text-[#080808] transition-all duration-300"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            ) : (
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-white/50">
                Atelier Vault · Tap To Open
              </span>
            )}
          </div>
        </div>

        {/* Center Interactive Portal When Closed */}
        <AnimatePresence mode="wait">
          {!isGalleryOpen ? (
            <motion.div
              key="closed-portal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="py-4 sm:py-6 flex flex-col items-center justify-center px-1"
            >
              {/* Luxury Interactive Centerpiece Card */}
              <div
                onClick={() => setIsGalleryOpen(true)}
                className="relative w-full max-w-2xl min-h-[270px] sm:min-h-[340px] rounded-sm border border-[#C6A878]/40 hover:border-[#C6A878] bg-[#0c0c0c]/90 backdrop-blur-xl p-6 sm:p-12 flex flex-col items-center justify-center text-center cursor-pointer group shadow-[0_20px_60px_rgba(0,0,0,0.85)] hover:shadow-[0_25px_70px_rgba(198,168,120,0.25)] transition-all duration-500 overflow-hidden"
              >
                {/* Ambient Golden Halo Glow */}
                <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-r from-[#C6A878]/25 via-[#F5E6CC]/15 to-transparent blur-3xl -z-10 pointer-events-none group-hover:scale-115 transition-transform duration-700 animate-pulse" />

                {/* Subtle Blurred Background Gallery Preview */}
                <div className="absolute inset-0 opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none overflow-hidden">
                  <img
                    src={GALLERY_ITEMS[0].image}
                    alt="Gallery Preview"
                    className="w-full h-full object-cover filter blur-[3px] scale-105 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/75 to-[#080808]/50" />
                </div>

                {/* Central Interactive Monogram Emblem */}
                <div className="relative z-10 flex flex-col items-center space-y-4 sm:space-y-5">
                  <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-[#080808] border-2 border-[#C6A878] flex items-center justify-center shadow-[0_0_35px_rgba(198,168,120,0.5)] group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(198,168,120,0.8)] transition-all duration-500">
                    <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-[#C6A878] animate-pulse" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C6A878] animate-ping" />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5 max-w-lg">
                    <span className="text-[9px] sm:text-[11px] font-sans uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#C6A878] font-semibold block">
                      Haute Beauté Archive
                    </span>
                    <h3 className="text-xl sm:text-3xl md:text-4xl font-serif text-[#FFFFFF] group-hover:text-[#F5E6CC] transition-colors font-light">
                      UNVEIL OUR EXPERIENCE
                    </h3>
                    <p className="text-[11px] sm:text-sm font-sans text-[#F5F1EB]/70 leading-relaxed pt-1">
                      Explore the visual narrative of salon craftsmanship, transformative artistry, and tranquil atelier suites.
                    </p>
                  </div>

                  {/* Primary Touch to Open Button */}
                  <div className="pt-1 sm:pt-2">
                    <div className="inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-8 py-3 sm:py-3.5 bg-[#C6A878] text-[#080808] text-[11px] sm:text-xs font-sans uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold group-hover:bg-[#d8be92] shadow-lg group-hover:shadow-[#C6A878]/30 transition-all duration-300">
                      <span>Touch To Open Gallery</span>
                      <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
                    </div>
                  </div>

                  <span className="text-[9px] sm:text-[10px] font-mono text-[#C6A878]/70 tracking-widest uppercase">
                    · 6 Curated Exhibits Inside ·
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="opened-gallery"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8 sm:space-y-12"
            >
              {/* Filter Tabs Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-2 bg-[#080808]/80 border border-[#242424]">
                <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                  {filterTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`px-2.5 py-1 sm:px-3.5 sm:py-1.5 text-[10.5px] sm:text-xs font-sans uppercase tracking-[0.12em] sm:tracking-[0.14em] transition-all duration-300 ${
                        activeFilter === tab.id
                          ? 'bg-[#C6A878] text-[#080808] font-semibold'
                          : 'text-[#F5F1EB]/70 hover:text-[#FFFFFF]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setIsGalleryOpen(false)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-sans uppercase tracking-[0.16em] text-[#C6A878] hover:text-[#FFFFFF] transition-colors pr-2"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                  <span>Fold Gallery</span>
                </button>
              </div>

              {/* 2 Columns on Mobile, Asymmetrical Editorial on Desktop */}
              <div className="grid grid-cols-2 md:grid-cols-12 gap-3 sm:gap-6 md:gap-8">
                {filteredItems.map((item, idx) => {
                  const colSpan =
                    idx === 0
                      ? 'col-span-1 md:col-span-8'
                      : idx === 1
                      ? 'col-span-1 md:col-span-4'
                      : idx === 2
                      ? 'col-span-1 md:col-span-5'
                      : idx === 3
                      ? 'col-span-1 md:col-span-7'
                      : idx === 4
                      ? 'col-span-1 md:col-span-6'
                      : 'col-span-1 md:col-span-6';

                  const heightClass =
                    idx === 0
                      ? 'h-44 sm:h-80 md:h-[440px]'
                      : idx === 1
                      ? 'h-44 sm:h-80 md:h-[440px]'
                      : 'h-40 sm:h-72 md:h-96';

                  return (
                    <motion.div
                      key={item.id}
                      onClick={() => setActiveLightbox(item)}
                      initial={{ opacity: 0, y: 40, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 55,
                        damping: 14,
                        delay: idx * 0.08,
                      }}
                      className={`${colSpan} group relative overflow-hidden bg-[#242424] border border-white/10 cursor-pointer shadow-2xl will-change-transform`}
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

                      <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-[#080808]/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity text-[#C6A878]">
                        <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 text-[#F5F1EB] space-y-0.5 sm:space-y-1">
                        <span className="text-[8.5px] sm:text-[10px] uppercase font-sans tracking-[0.2em] sm:tracking-[0.25em] text-[#C6A878]">
                          {item.categoryLabel}
                        </span>
                        <h3 className="text-xs sm:text-xl font-serif text-[#FFFFFF] line-clamp-1">{item.title}</h3>
                        <p className="text-xs text-[#F5F1EB]/75 line-clamp-2 max-w-lg font-sans hidden sm:block">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Close Button to Tuck it Back */}
              <div className="pt-6 flex justify-center">
                <button
                  onClick={() => {
                    setIsGalleryOpen(false);
                    const el = document.querySelector('#experience');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-[#080808] border border-[#C6A878] text-[#C6A878] hover:bg-[#C6A878] hover:text-[#080808] text-xs font-sans uppercase tracking-[0.2em] font-semibold transition-all duration-300 shadow-xl"
                >
                  <ChevronUp className="w-4 h-4" />
                  <span>Close Experience Gallery</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
