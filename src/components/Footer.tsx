import React, { useState } from 'react';
import { ArrowUp, Instagram, Facebook, Share2 } from 'lucide-react';
import { SALON_INFO, SERVICE_CATEGORIES } from '../data/salonData';
import { LegalModal } from './LegalModals';

interface FooterProps {
  onNavClick: (href: string) => void;
  onCategoryClick: (categoryId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onCategoryClick }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="relative z-10 bg-[#080808] border-t border-[#242424] text-[#F5F1EB] pt-20 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Top Brand & Links Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 items-start">
            {/* Brand Column (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="#home"
                className="text-2xl sm:text-3xl font-serif tracking-[0.25em] text-[#FFFFFF] hover:text-[#C6A878] transition-colors block uppercase"
              >
                {SALON_INFO.brandName}
              </a>
              <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/70 leading-relaxed max-w-sm">
                A sanctuary of haute coiffure, dermatological skin therapy, and celebratory bridal artistry for men and women.
              </p>
              <div className="pt-2 flex items-center gap-4 text-[#F5F1EB]/70">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A878] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C6A878] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <span className="text-xs text-white/40 font-sans tracking-wide">
                  @rishaarasalon
                </span>
              </div>
            </div>

            {/* Quick Navigation (Span 2) */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C6A878]">
                Atelier
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-[#F5F1EB]/75">
                {['Home', 'About', 'Services', 'Bridal', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => onNavClick(`#${item.toLowerCase()}`)}
                      className="hover:text-[#C6A878] transition-colors text-left"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Categories (Span 3) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C6A878]">
                Repertoire
              </h4>
              <ul className="space-y-2.5 text-xs font-sans text-[#F5F1EB]/75">
                {SERVICE_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <button
                      onClick={() => onCategoryClick(cat.id)}
                      className="hover:text-[#C6A878] transition-colors text-left"
                    >
                      {cat.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Placeholders (Span 3) */}
            <div className="lg:col-span-3 space-y-4 text-xs font-sans text-[#F5F1EB]/75">
              <h4 className="text-[11px] font-sans uppercase tracking-[0.25em] text-[#C6A878]">
                Concierge Desk
              </h4>
              <p className="leading-relaxed">
                {SALON_INFO.address}<br />
                {SALON_INFO.city}
              </p>
              <p className="font-mono text-[#F5F1EB]">
                {SALON_INFO.phone}
              </p>
              <p className="text-[#C6A878]">
                {SALON_INFO.email}
              </p>
              <p className="text-[11px] text-white/50">
                {SALON_INFO.hours}
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright, Legal & Back to Top */}
          <div className="pt-8 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-white/50 font-sans">
            <div className="flex flex-wrap items-center gap-6">
              <span>© {new Date().getFullYear()} {SALON_INFO.brandName}. All rights reserved.</span>
              <button
                onClick={() => setLegalModalType('privacy')}
                className="hover:text-[#C6A878] transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => setLegalModalType('terms')}
                className="hover:text-[#C6A878] transition-colors"
              >
                Terms & Conditions
              </button>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C6A878] hover:text-[#FFFFFF] transition-colors group"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Policy Modal */}
      <LegalModal type={legalModalType} onClose={() => setLegalModalType(null)} />
    </>
  );
};
