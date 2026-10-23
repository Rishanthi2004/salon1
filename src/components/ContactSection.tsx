import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, MessageCircle, ExternalLink, Navigation } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/5 scroll-mt-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#242424]">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C6A878] font-sans">
              Concierge & Location
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight">
              LET'S CREATE YOUR LOOK.
            </h2>
          </div>
          <p className="text-xs font-sans text-[#F5F1EB]/60 uppercase tracking-[0.18em]">
            VISIT OUR SUITES OR CONNECT WITH OUR DESK
          </p>
        </div>

        {/* Contact Info + Maps Embed Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4 p-5 bg-[#080808]/90 border border-white/10 hover:border-[#C6A878]/40 transition-colors">
                <div className="p-3 bg-[#242424] text-[#C6A878]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                    Telephone & Bookings
                  </span>
                  <a
                    href={`tel:${SALON_INFO.phoneRaw}`}
                    className="block text-lg font-serif text-[#FFFFFF] hover:text-[#C6A878] transition-colors"
                  >
                    {SALON_INFO.phone}
                  </a>
                  <p className="text-[11px] text-white/50">Direct lines open 9:00 AM – 9:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-5 bg-[#080808]/90 border border-white/10 hover:border-[#C6A878]/40 transition-colors">
                <div className="p-3 bg-[#242424] text-[#C6A878]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                    Email Inquiries
                  </span>
                  <a
                    href={`mailto:${SALON_INFO.email}`}
                    className="block text-base font-serif text-[#FFFFFF] hover:text-[#C6A878] transition-colors"
                  >
                    {SALON_INFO.email}
                  </a>
                  <p className="text-[11px] text-white/50">For collaborations, bridal inquiries & press</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-5 bg-[#080808]/90 border border-white/10 hover:border-[#C6A878]/40 transition-colors">
                <div className="p-3 bg-[#242424] text-[#C6A878]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                    Atelier Location
                  </span>
                  <p className="text-sm font-serif text-[#FFFFFF] leading-snug">
                    {SALON_INFO.address}
                  </p>
                  <p className="text-xs text-white/60 font-sans">{SALON_INFO.city}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-5 bg-[#080808]/90 border border-white/10 hover:border-[#C6A878]/40 transition-colors">
                <div className="p-3 bg-[#242424] text-[#C6A878]">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C6A878]">
                    Opening Hours
                  </span>
                  <p className="text-sm font-serif text-[#FFFFFF]">
                    {SALON_INFO.hours}
                  </p>
                  <p className="text-[11px] text-white/50">Valet parking & private entrance available</p>
                </div>
              </div>
            </div>

            {/* Instant Actions (WhatsApp & Instagram) */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#242424]">
              <a
                href={`https://wa.me/${SALON_INFO.phoneRaw}?text=Hello%20Rishaara%20Salon!%20I%20would%20like%20to%20inquire%20about%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-5 py-3.5 bg-[#C6A878] hover:bg-[#d4b98c] text-[#080808] text-xs font-sans uppercase tracking-[0.16em] font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#242424] hover:bg-white/10 border border-white/10 text-[#F5F1EB] text-xs font-sans uppercase tracking-[0.16em] flex items-center gap-2 transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C6A878]" />
                <span>{SALON_INFO.instagram}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Placeholder with Styled Interactive Luxury Card */}
          <div className="lg:col-span-7 bg-[#080808]/90 border border-white/10 overflow-hidden shadow-2xl flex flex-col justify-between min-h-[440px]">
            {/* Map Canvas / Visualized Map View */}
            <div className="relative w-full h-80 sm:h-96 bg-[#18181B] overflow-hidden flex items-center justify-center">
              {/* Map Graphic Simulation (High-contrast Dark Luxury Map Aesthetic) */}
              <div className="absolute inset-0 bg-[#121214] opacity-90">
                <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Stylized Boulevard Lines */}
                  <path d="M -50 150 Q 200 120 450 250 T 900 200" fill="none" stroke="#C6A878" strokeWidth="3" opacity="0.6" />
                  <path d="M 250 -50 L 250 500" fill="none" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.4" />
                  <path d="M 500 -50 L 500 500" fill="none" stroke="#FFFFFF" strokeWidth="1" opacity="0.3" />
                </svg>
              </div>

              {/* Pin Callout */}
              <div className="relative z-10 flex flex-col items-center animate-bounce">
                <div className="bg-[#080808] border border-[#C6A878] p-3 text-center shadow-2xl">
                  <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#C6A878] block">
                    Rishaara Atelier
                  </span>
                  <p className="text-xs font-serif text-[#FFFFFF] font-medium">88 Grand Pavilion Promenade</p>
                </div>
                <div className="w-3 h-3 bg-[#C6A878] rotate-45 -mt-1.5 shadow-lg" />
              </div>

              {/* Overlay note */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-sans text-white/70 bg-[#080808]/80 backdrop-blur-md px-4 py-2 border border-white/10">
                <span>Google Maps Platform Integration Ready</span>
                <span className="text-[#C6A878] font-mono">GPS: 40.7614° N, 73.9776° W</span>
              </div>
            </div>

            {/* Directions & Navigation Bar */}
            <div className="p-6 md:p-8 bg-[#242424]/30 border-t border-[#242424] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <h4 className="text-sm font-serif text-[#FFFFFF]">Arriving by Private Car or Transit</h4>
                <p className="text-xs text-[#F5F1EB]/70 font-sans">
                  Valet attendant stationed at the Grand Pavilion Porte-Cochère.
                </p>
              </div>

              <a
                href={SALON_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-sans uppercase tracking-[0.16em] text-[#C6A878] border border-[#C6A878]/60 hover:bg-[#C6A878] hover:text-[#080808] transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
