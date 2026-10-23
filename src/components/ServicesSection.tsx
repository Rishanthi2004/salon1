import React, { useState } from 'react';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/salonData';
import { ServiceCategory } from '../types/salon';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onBookService: (categoryName: string, serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [selectedModalCategory, setSelectedModalCategory] = useState<ServiceCategory | null>(null);

  // Group or identify categories
  const hairCat = SERVICE_CATEGORIES.find((c) => c.id === 'hair')!;
  const skinCat = SERVICE_CATEGORIES.find((c) => c.id === 'skin')!;
  const nailsCat = SERVICE_CATEGORIES.find((c) => c.id === 'nails')!;
  const bodyCat = SERVICE_CATEGORIES.find((c) => c.id === 'body')!;
  const groomingCat = SERVICE_CATEGORIES.find((c) => c.id === 'grooming')!;
  const bridalCat = SERVICE_CATEGORIES.find((c) => c.id === 'bridal')!;

  return (
    <section id="services" className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Master Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans block">
            Bespoke Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight">
            THE SALON REPERTOIRE
          </h2>
          <div className="w-16 h-[1px] bg-[#C6A878] mx-auto my-4" />
          <p className="text-sm sm:text-base font-sans text-[#F5F1EB]/75 leading-relaxed text-balance">
            Six specialised departments engineered for contemporary grooming, architectural coiffure, dermatological care, and celebratory grandeur.
          </p>
        </div>

        {/* ============================================================ */}
        {/* A. HAIR SERVICES (Two-Column Layout: Left Large Image, Right Editorial Dark) */}
        {/* ============================================================ */}
        <div id="hair-services" className="scroll-mt-28 bg-[#080808]/90 border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full overflow-hidden group">
              <img
                src={hairCat.image}
                alt="Rishaara Hair Styling & Cutting"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent lg:hidden" />
              <div className="absolute top-6 left-6 bg-[#080808]/80 backdrop-blur-md px-3 py-1 border border-[#C6A878]/30">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C6A878]">
                  01 · Coiffure
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A878] font-sans">
                  {hairCat.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#FFFFFF] font-light">
                  {hairCat.title}
                </h3>
                <p className="text-sm font-sans text-[#F5F1EB]/80 leading-relaxed max-w-xl">
                  {hairCat.description}
                </p>
              </div>

              {/* Sub-services list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#242424]">
                {hairCat.services.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A878] mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-serif text-[#F5F1EB]">{item.name}</h4>
                      <p className="text-[11px] text-[#F5F1EB]/60">{item.duration} · {item.priceEstimate}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#242424] flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedModalCategory(hairCat)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] text-[#C6A878] border border-[#C6A878]/60 hover:bg-[#C6A878] hover:text-[#080808] transition-all flex items-center gap-2"
                >
                  <span>Explore Hair Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onBookService(hairCat.title)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] text-[#F5F1EB] bg-[#242424] hover:bg-white/10 transition-colors"
                >
                  Book Hair Service
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* B. SKIN CARE & FACIALS (Alternating Warm Ivory Editorial Block) */}
        {/* ============================================================ */}
        <div id="skin-services" className="scroll-mt-28 bg-[#F5F1EB] text-[#080808] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#080808]/70 font-sans">
                  {skinCat.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#080808] font-medium">
                  {skinCat.title}
                </h3>
                <p className="text-sm font-sans text-[#080808]/80 leading-relaxed max-w-xl">
                  {skinCat.description}
                </p>
              </div>

              {/* Sub-services list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#080808]/15">
                {skinCat.services.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#080808] mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-serif font-semibold text-[#080808]">{item.name}</h4>
                      <p className="text-[11px] text-[#080808]/70">{item.duration} · {item.priceEstimate}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#080808]/15 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedModalCategory(skinCat)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] text-[#080808] border border-[#080808] hover:bg-[#080808] hover:text-[#F5F1EB] transition-all flex items-center gap-2"
                >
                  <span>Explore Skin Treatments</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onBookService(skinCat.title)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#F5F1EB] bg-[#080808] hover:bg-[#242424] transition-colors"
                >
                  Book Facial
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full overflow-hidden order-1 lg:order-2 group">
              <img
                src={skinCat.image}
                alt="Rishaara Skin Care & Facials"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-6 right-6 bg-[#080808]/80 backdrop-blur-md px-3 py-1 border border-[#C6A878]/30">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C6A878]">
                  02 · Esthétique
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* C & D: MANICURE, PEDICURE & NAILS + BODY CARE & SPA (Split Two-Col Grid) */}
        {/* ============================================================ */}
        <div id="nail-services" className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* C. NAILS */}
          <div className="bg-[#080808]/90 border border-white/10 p-8 md:p-12 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A878] font-sans">
                  03 · Hand & Foot Therapy
                </span>
                <span className="text-[10px] text-white/40 uppercase">Unisex & Gel Art</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FFFFFF] font-light">
                {nailsCat.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/75 leading-relaxed">
                {nailsCat.description}
              </p>
            </div>

            <div className="space-y-2.5 py-4 border-y border-[#242424]">
              {nailsCat.services.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs py-1">
                  <span className="font-serif text-[#F5F1EB]">{item.name}</span>
                  <span className="text-white/60 font-mono text-[11px]">{item.priceEstimate}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setSelectedModalCategory(nailsCat)}
                className="text-xs font-sans uppercase tracking-[0.18em] text-[#C6A878] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
              >
                <span>View All Nail Services</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onBookService(nailsCat.title)}
                className="px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] bg-[#242424] hover:bg-[#C6A878] hover:text-[#080808] transition-colors"
              >
                Book Nails
              </button>
            </div>
          </div>

          {/* D. BODY CARE & SPA */}
          <div className="bg-[#080808]/90 border border-white/10 p-8 md:p-12 flex flex-col justify-between space-y-6 shadow-2xl">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A878] font-sans">
                  04 · Body Restorative
                </span>
                <span className="text-[10px] text-white/40 uppercase">Aromatherapeutic</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-[#FFFFFF] font-light">
                {bodyCat.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/75 leading-relaxed">
                {bodyCat.description}
              </p>
            </div>

            <div className="space-y-2.5 py-4 border-y border-[#242424]">
              {bodyCat.services.slice(0, 5).map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs py-1">
                  <span className="font-serif text-[#F5F1EB]">{item.name}</span>
                  <span className="text-white/60 font-mono text-[11px]">{item.priceEstimate}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={() => setSelectedModalCategory(bodyCat)}
                className="text-xs font-sans uppercase tracking-[0.18em] text-[#C6A878] hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
              >
                <span>View Body & Spa Menu</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onBookService(bodyCat.title)}
                className="px-4 py-2 text-xs font-sans uppercase tracking-[0.16em] bg-[#242424] hover:bg-[#C6A878] hover:text-[#080808] transition-colors"
              >
                Book Spa
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* E. MEN'S GROOMING (Atmospheric Dark Wood & Charcoal Feature) */}
        {/* ============================================================ */}
        <div className="bg-[#080808]/90 border border-white/10 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full overflow-hidden group">
              <img
                src={groomingCat.image}
                alt="Men's Grooming Lounge"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute top-6 left-6 bg-[#080808]/80 backdrop-blur-md px-3 py-1 border border-[#C6A878]/30">
                <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-[#C6A878]">
                  05 · The Gentleman's Suite
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A878] font-sans">
                  {groomingCat.subtitle}
                </span>
                <h3 className="text-3xl sm:text-4xl font-serif text-[#FFFFFF] font-light">
                  {groomingCat.title}
                </h3>
                <p className="text-sm font-sans text-[#F5F1EB]/80 leading-relaxed max-w-xl">
                  {groomingCat.description}
                </p>
              </div>

              {/* Sub-services list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-[#242424]">
                {groomingCat.services.map((item) => (
                  <div key={item.id} className="flex items-start gap-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A878] mt-2 shrink-0" />
                    <div>
                      <h4 className="text-sm font-serif text-[#F5F1EB]">{item.name}</h4>
                      <p className="text-[11px] text-[#F5F1EB]/60">{item.duration} · {item.priceEstimate}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-[#242424] flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedModalCategory(groomingCat)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] text-[#C6A878] border border-[#C6A878]/60 hover:bg-[#C6A878] hover:text-[#080808] transition-all flex items-center gap-2"
                >
                  <span>Explore Grooming Menu</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onBookService(groomingCat.title)}
                  className="px-6 py-3 text-xs font-sans uppercase tracking-[0.2em] text-[#F5F1EB] bg-[#242424] hover:bg-white/10 transition-colors"
                >
                  Book Barber Session
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Note: F. BRIDAL & OCCASION BEAUTY has its own dedicated grand section below (#bridal-services), as required by prompt Section 10! */}
      </div>

      {/* Detail Modal Component */}
      <ServiceDetailModal
        category={selectedModalCategory}
        onClose={() => setSelectedModalCategory(null)}
        onSelectServiceToBook={(cat, svc) => {
          setSelectedModalCategory(null);
          onBookService(cat, svc);
        }}
      />
    </section>
  );
};
