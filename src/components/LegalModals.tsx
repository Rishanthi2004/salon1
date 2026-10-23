import React from 'react';
import { X } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080808]/90 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#080808] border border-[#C6A878]/30 shadow-2xl text-[#F5F1EB] my-8 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#242424] bg-[#242424]/30">
          <div>
            <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#C6A878]">
              Salon Legal & Policies
            </span>
            <h3 className="text-xl font-serif text-[#FFFFFF]">
              {type === 'privacy' ? 'Privacy & Guest Confidentiality' : 'Terms of Service & Etiquette'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-[#C6A878] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-xs font-sans text-[#F5F1EB]/80 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                At {SALON_INFO.brandName}, we uphold the strictest confidentiality regarding our clientele's personal records, beauty consultations, and contact preferences.
              </p>
              <h4 className="text-sm font-serif text-[#FFFFFF] pt-2">1. Information We Collect</h4>
              <p>
                We collect your name, phone number, appointment schedule preferences, and optional diagnostic notes strictly for booking allocation and service customisation.
              </p>
              <h4 className="text-sm font-serif text-[#FFFFFF] pt-2">2. Confidentiality & No Third-Party Resale</h4>
              <p>
                Your contact details are never rented, sold, or shared with external advertising networks. Communication is limited to concierge appointment confirmations and salon updates upon your consent.
              </p>
              <h4 className="text-sm font-serif text-[#FFFFFF] pt-2">3. Data Retention</h4>
              <p>
                You may request complete removal of your guest profile or consultation notes at any time by emailing {SALON_INFO.email}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to {SALON_INFO.brandName}. By booking with our salon atelier, you acknowledge and agree to our house standards designed to guarantee pristine tranquility for all guests.
              </p>
              <h4 className="text-sm font-serif text-[#FFFFFF] pt-2">1. Booking & Punctuality</h4>
              <p>
                We recommend arriving 10 minutes prior to your allocated treatment to enjoy our welcome botanical tea and complete any required skin or scalp assessment.
              </p>
              <h4 className="text-sm font-serif text-[#FFFFFF] pt-2">2. Cancellations & Rescheduling</h4>
              <p>
                We kindly ask for a minimum of 24 hours notice for standard treatments, and 72 hours for bridal suites or multi-service packages, allowing us to reallocate our master specialists.
              </p>
              <h4 className="text-sm font-serif text-[#FFFFFF] pt-2">3. Hygiene & Safety Standards</h4>
              <p>
                All metal tools undergo medical-grade autoclave sterilization. Towels and wraps are strictly single-guest sanitized. Please inform your stylist of any sensitivities or allergies prior to treatment.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#242424]/20 border-t border-[#242424] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-sans uppercase tracking-[0.16em] bg-[#C6A878] text-[#080808] font-semibold hover:bg-[#d4b98c] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
