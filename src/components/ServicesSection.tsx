import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    <section id="services" className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Simple & Clean Editorial Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans block">
            Bespoke Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light tracking-tight">
            THE SALON REPERTOIRE
          </h2>
          <div className="w-12 h-[1px] bg-[#C6A878] mx-auto my-2" />
          <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/75 leading-relaxed text-balance">
            Select any department to view full treatment menus, personalized rituals, and rates.
          </p>
        </div>

        {/* Simple & Clean Front: 6 Category Cards (No Rates on Home Page) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const indexLabel = categoryIndexMap[cat.id] || cat.subtitle;
            const anchorId = anchorIdMap[cat.id];

            return (
              <div
                key={cat.id}
                id={anchorId}
                onClick={() => setSelectedModalCategory(cat)}
                className="group relative bg-[#080808]/90 border border-white/10 hover:border-[#C6A878] shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300 scroll-mt-28"
              >
                {/* Visual Image Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#242424]">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />

                  {/* Department Index Tag */}
                  <div className="absolute top-4 left-4 bg-[#080808]/85 backdrop-blur-md px-3 py-1 border border-white/10">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                      {indexLabel}
                    </span>
                  </div>

                  {/* Treatment count indicator */}
                  <div className="absolute bottom-3 right-4 text-[10px] font-sans uppercase tracking-wider text-white/60 bg-[#080808]/60 px-2.5 py-1 backdrop-blur-sm">
                    {cat.services.length} Treatments
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878] block">
                      {cat.subtitle}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif text-[#FFFFFF] group-hover:text-[#C6A878] transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-sans text-[#F5F1EB]/70 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  {/* Simple Touch Action */}
                  <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs font-sans">
                    <span className="uppercase tracking-[0.16em] text-[#C6A878] group-hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5 font-medium text-[11px]">
                      <span>View Details & Rates</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>

                    <span className="text-[10px] text-white/40 uppercase tracking-widest">
                      Touch to Open
                    </span>
                  </div>
                </div>
              </div>
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
