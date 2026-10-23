import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SERVICE_CATEGORIES } from '../data/salonData';
import { ServiceCategory } from '../types/salon';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onBookService: (categoryName: string, serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [selectedModalCategory, setSelectedModalCategory] = useState<ServiceCategory | null>(null);

  const categoryIndexMap: Record<string, string> = {
    hair: '01 · Coiffure Atelier',
    skin: '02 · Esthétique Sanctuary',
    nails: '03 · Haute Manicure',
    body: '04 · Body Restorative',
    grooming: '05 · The Gentleman\'s Suite',
    bridal: '06 · Regal Bridal Studio',
  };

  const anchorIdMap: Record<string, string> = {
    hair: 'hair-services',
    skin: 'skin-services',
    nails: 'nail-services',
    bridal: 'bridal-services',
  };

  return (
    <section id="services" className="relative z-10 py-16 md:py-24 px-3 sm:px-6 md:px-12 lg:px-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
        {/* Simple & Clean Editorial Section Header with Motion Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto space-y-3 px-3"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans block">
            Bespoke Services
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light tracking-tight">
            THE SALON REPERTOIRE
          </h2>
          <div className="w-12 h-[1px] bg-[#C6A878] mx-auto my-2" />
          <p className="text-[11px] sm:text-sm font-sans text-[#F5F1EB]/75 leading-relaxed text-balance">
            Select any department to view full treatment menus, personalized rituals, and rates.
          </p>
        </motion.div>

        {/* 6 Category Cards: 2 Columns on Mobile, 3 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {SERVICE_CATEGORIES.map((cat, idx) => {
            const indexLabel = categoryIndexMap[cat.id] || cat.subtitle;
            const anchorId = anchorIdMap[cat.id];

            return (
              <motion.div
                key={cat.id}
                id={anchorId}
                onClick={() => setSelectedModalCategory(cat)}
                initial={{ opacity: 0, y: 50, scale: 0.94 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 55,
                    damping: 14,
                    mass: 0.85,
                    delay: (idx % 2) * 0.1,
                  },
                }}
                viewport={{ once: false, amount: 0.15 }}
                className="group relative bg-[#080808]/90 border border-white/10 hover:border-[#C6A878] shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-colors duration-300 scroll-mt-28 will-change-transform"
              >
                {/* Visual Image Header with Cinematic Zoom Reveal */}
                <div className="relative h-36 sm:h-56 md:h-64 w-full overflow-hidden bg-[#242424]">
                  <motion.img
                    src={cat.image}
                    alt={cat.title}
                    initial={{ scale: 1.15 }}
                    whileInView={{
                      scale: 1,
                      transition: { duration: 1.1, ease: [0.25, 1, 0.5, 1] },
                    }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-85 pointer-events-none" />

                  {/* Department Index Tag */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-[#080808]/85 backdrop-blur-md px-2 py-0.5 sm:px-3 sm:py-1 border border-white/10 pointer-events-none">
                    <span className="text-[8.5px] sm:text-[10px] font-sans uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#C6A878]">
                      {indexLabel}
                    </span>
                  </div>

                  {/* Treatment count indicator */}
                  <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-4 text-[8.5px] sm:text-[10px] font-sans uppercase tracking-wider text-white/70 bg-[#080808]/70 px-2 py-0.5 sm:px-2.5 sm:py-1 backdrop-blur-sm pointer-events-none">
                    {cat.services.length} Treats
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-3 sm:p-6 space-y-2 sm:space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-[8.5px] sm:text-[10px] font-sans uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#C6A878] block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-sm sm:text-xl md:text-2xl font-serif text-[#FFFFFF] group-hover:text-[#C6A878] transition-colors line-clamp-1">
                      {cat.title}
                    </h3>
                    <p className="text-[10.5px] sm:text-xs font-sans text-[#F5F1EB]/70 leading-relaxed line-clamp-2 hidden sm:block">
                      {cat.description}
                    </p>
                  </div>

                  {/* Simple Touch Action */}
                  <div className="pt-2 sm:pt-3 border-t border-[#242424] flex items-center justify-between text-xs font-sans">
                    <span className="uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#C6A878] group-hover:text-[#FFFFFF] transition-colors flex items-center gap-1 font-medium text-[9.5px] sm:text-[11px]">
                      <span>Rates</span>
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <span className="text-[8.5px] sm:text-[10px] text-white/40 uppercase tracking-widest hidden xs:inline">
                      Touch
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Dedicated Details Page with Prominent User-Friendly "Back to Home" Navigation */}
      <ServiceDetailModal
        category={selectedModalCategory}
        onClose={() => setSelectedModalCategory(null)}
        onSelectCategory={(cat) => setSelectedModalCategory(cat)}
        onSelectServiceToBook={(cat, svc) => {
          setSelectedModalCategory(null);
          onBookService(cat, svc);
        }}
      />
    </section>
  );
};
