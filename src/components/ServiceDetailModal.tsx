import React, { useEffect } from 'react';
import { ArrowLeft, X, Clock, Check, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICE_CATEGORIES } from '../data/salonData';
import { ServiceCategory, ServiceItem } from '../types/salon';

interface ServiceDetailModalProps {
  category: ServiceCategory | null;
  onClose: () => void;
  onSelectCategory: (category: ServiceCategory) => void;
  onSelectServiceToBook: (categoryName: string, serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  category,
  onClose,
  onSelectCategory,
  onSelectServiceToBook,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (category) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [category, onClose]);

  if (!category) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex flex-col bg-[#080808]/95 backdrop-blur-xl overflow-y-auto animate-fade-in"
    >
      {/* 1. User-Friendly Sticky Top Navigation Bar with Prominent Back Button */}
      <div className="sticky top-0 z-20 bg-[#080808] border-b border-[#242424] px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-2xl">
        <button
          onClick={onClose}
          className="group flex items-center gap-2.5 px-4 py-2 bg-[#C6A878] hover:bg-[#d4b98c] text-[#080808] font-sans text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 shadow-md cursor-pointer"
          aria-label="Back to Home Page"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </button>

        {/* Category switcher tabs directly accessible */}
        <div className="hidden md:flex items-center gap-1 overflow-x-auto max-w-xl py-1 text-xs font-sans uppercase tracking-wider text-[#F5F1EB]/70">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 transition-colors whitespace-nowrap cursor-pointer ${
                cat.id === category.id
                  ? 'text-[#C6A878] border-b border-[#C6A878] font-medium'
                  : 'hover:text-[#FFFFFF] text-white/60'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        <button
          onClick={onClose}
          className="p-2 text-white/60 hover:text-[#C6A878] hover:bg-white/5 transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* 2. Main Page Content Container */}
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-8 py-8 md:py-12 space-y-10 flex-1">
        {/* Category Header Hero */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#18181B]/80 border border-white/10 p-6 md:p-10 shadow-2xl">
          <div className="md:col-span-5 h-56 sm:h-64 overflow-hidden border border-white/10 relative group">
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-3 left-3 bg-[#080808]/80 px-2.5 py-1 border border-white/10">
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                {category.subtitle}
              </span>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C6A878]">
                Complete Price & Treatment Menu
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#FFFFFF] font-light">
                {category.title}
              </h2>
            </div>

            <p className="text-sm font-sans text-[#F5F1EB]/80 leading-relaxed">
              {category.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-[#C6A878] pt-2 border-t border-white/10 font-sans">
              <span>{category.services.length} Treatments Available</span>
              <span>·</span>
              <span>Individual Consultations</span>
            </div>
          </div>
        </div>

        {/* Mobile Category Quick Switcher */}
        <div className="md:hidden flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#242424]">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className={`px-3 py-1.5 text-xs font-sans uppercase tracking-wider whitespace-nowrap transition-colors ${
                cat.id === category.id
                  ? 'bg-[#C6A878] text-[#080808] font-semibold'
                  : 'bg-[#242424] text-white/70'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Sub-Services Detailed Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-sans uppercase tracking-[0.2em] text-[#C6A878]">
              Available Treatments & Rates
            </h3>
            <span className="text-xs text-white/50 font-sans">Tax and consultation included</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {category.services.map((svc: ServiceItem) => (
              <div
                key={svc.id}
                className="p-6 bg-[#080808]/90 hover:bg-[#18181B] border border-white/10 hover:border-[#C6A878]/40 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group shadow-lg"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-serif text-[#FFFFFF] group-hover:text-[#C6A878] transition-colors">
                      {svc.name}
                    </h4>
                    {svc.genderTarget && svc.genderTarget !== 'unisex' && (
                      <span className="text-[10px] uppercase font-sans tracking-wider text-[#C6A878] border border-[#C6A878]/40 px-2 py-0.5">
                        {svc.genderTarget}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/75 leading-relaxed max-w-2xl">
                    {svc.description}
                  </p>

                  {svc.benefits && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs text-[#F5F1EB]/60">
                      {svc.benefits.map((b, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#C6A878]" />
                          <span>{b}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Duration, Price, and Booking Action */}
                <div className="flex md:flex-col items-end justify-between md:justify-center gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                  <div className="text-right">
                    {svc.priceEstimate && (
                      <div className="text-xl font-serif text-[#C6A878] font-semibold tabular-nums">
                        {svc.priceEstimate}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5 text-xs text-white/60 justify-end pt-0.5 font-sans">
                      <Clock className="w-3.5 h-3.5 text-[#C6A878]" />
                      <span>{svc.duration}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectServiceToBook(category.title, svc.name);
                      onClose();
                    }}
                    className="px-5 py-2.5 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-md"
                  >
                    <span>Book This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Bottom User-Friendly Return Footer */}
        <div className="pt-8 pb-12 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 bg-[#242424] hover:bg-[#C6A878] hover:text-[#080808] text-[#F5F1EB] text-xs font-sans uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <button
            onClick={() => {
              onSelectServiceToBook(category.title, category.services[0]?.name || '');
              onClose();
            }}
            className="w-full sm:w-auto px-8 py-3 bg-[#C6A878] hover:bg-[#d4b98c] text-[#080808] text-xs font-sans uppercase tracking-[0.18em] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-lg"
          >
            <span>Book Appointment for {category.title}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
