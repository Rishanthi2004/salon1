import React from 'react';
import { X, Clock, Sparkles, Check, ArrowRight } from 'lucide-react';
import { ServiceCategory, ServiceItem } from '../types/salon';

interface ServiceDetailModalProps {
  category: ServiceCategory | null;
  onClose: () => void;
  onSelectServiceToBook: (categoryName: string, serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  category,
  onClose,
  onSelectServiceToBook,
}) => {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#080808] border border-[#C6A878]/30 shadow-2xl text-[#F5F1EB] my-8 overflow-hidden">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 border-b border-[#242424] bg-[#242424]/30">
          <div>
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#C6A878]">
              Service Catalogue
            </span>
            <h3 className="text-2xl font-serif font-light text-[#FFFFFF]">{category.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F5F1EB]/70 hover:text-[#C6A878] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Header Split */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center border-b border-[#242424] pb-6">
            <div className="md:col-span-1 h-36 overflow-hidden border border-white/10">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <p className="text-sm font-sans text-[#F5F1EB]/80 leading-relaxed">
                {category.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-[#C6A878] pt-2">
                <span>{category.services.length} Signature Services Available</span>
                <span>·</span>
                <span>Unisex & Bespoke</span>
              </div>
            </div>
          </div>

          {/* Sub-Services List */}
          <div className="grid grid-cols-1 gap-4">
            {category.services.map((svc: ServiceItem) => (
              <div
                key={svc.id}
                className="p-5 bg-[#242424]/40 hover:bg-[#242424]/70 border border-[#242424] hover:border-[#C6A878]/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="text-lg font-serif text-[#FFFFFF] group-hover:text-[#C6A878] transition-colors">
                      {svc.name}
                    </h4>
                    {svc.genderTarget && svc.genderTarget !== 'unisex' && (
                      <span className="text-[10px] uppercase font-sans tracking-wider text-[#C6A878] border border-[#C6A878]/40 px-1.5 py-0.5">
                        {svc.genderTarget}
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-sans text-[#F5F1EB]/70 leading-relaxed">
                    {svc.description}
                  </p>
                  {svc.benefits && (
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-[11px] text-[#F5F1EB]/60">
                      {svc.benefits.map((b, i) => (
                        <span key={i} className="inline-flex items-center gap-1">
                          <Check className="w-3 h-3 text-[#C6A878]" />
                          {b}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex md:flex-col items-end justify-between md:justify-center gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-white/5">
                  <div className="text-right">
                    {svc.priceEstimate && (
                      <div className="text-base font-serif text-[#C6A878] font-medium tabular-nums">
                        {svc.priceEstimate}
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-[11px] text-[#F5F1EB]/60">
                      <Clock className="w-3 h-3" />
                      <span>{svc.duration}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      onSelectServiceToBook(category.title, svc.name);
                      onClose();
                    }}
                    className="px-4 py-2 text-[11px] font-sans uppercase tracking-[0.16em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-colors flex items-center gap-1.5 whitespace-nowrap"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Bottom Close */}
        <div className="p-4 bg-[#080808] border-t border-[#242424] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 text-xs font-sans uppercase tracking-[0.2em] text-[#F5F1EB]/70 hover:text-[#FFFFFF] transition-colors"
          >
            Close Catalogue
          </button>
        </div>
      </div>
    </div>
  );
};
