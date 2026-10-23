import React from 'react';
import { Sparkles, Calendar, Heart, ArrowUpRight } from 'lucide-react';
import bridalImg from '../assets/images/luxury_bridal_makeover_1792733740121.jpg';

interface BridalSectionProps {
  onEnquireBridal: () => void;
}

export const BridalSection: React.FC<BridalSectionProps> = ({ onEnquireBridal }) => {
  const bridalOfferings = [
    {
      title: "Bridal Makeup",
      desc: "Waterproof HD airbrush or luminous skin sculpting designed for 18-hour radiance under ceremony lighting.",
      price: "From $280",
    },
    {
      title: "Engagement Makeup",
      desc: "Soft romantic glamour with bespoke pastel pigments, soft lash extensions, and camera-ready illumination.",
      price: "From $180",
    },
    {
      title: "Reception Makeup",
      desc: "Dramatic evening elegance with metallic accents, sculpted cheekbones, and bold celebratory contours.",
      price: "From $200",
    },
    {
      title: "Bridal Hairstyling",
      desc: "Architectural royal updos, Hollywood waves, fresh jasmine/floral anchoring, and secure dupatta/veil placement.",
      price: "From $140",
    },
    {
      title: "Saree Draping",
      desc: "Master pleat symmetry and seamless comfort pinning for Kanjeevaram silks, lehengas, and couture dupattas.",
      price: "From $50",
    },
    {
      title: "Complete Bridal Packages",
      desc: "Multi-day ceremonial care: pre-bridal skin peel, full-body polishing, bridal trial, makeup, and hair.",
      price: "From $550",
    },
  ];

  return (
    <section id="bridal-services" className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20 scroll-mt-24">
      <div className="max-w-7xl mx-auto bg-[#080808]/95 border border-[#C6A878]/30 shadow-2xl p-8 md:p-14 lg:p-20 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C6A878]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Bridal Portrait */}
          <div className="lg:col-span-5 relative">
            <div className="relative overflow-hidden bg-[#242424] border border-[#C6A878]/40 shadow-2xl group">
              <img
                src={bridalImg}
                alt="Rishaara Bridal Beauty"
                className="w-full h-[480px] sm:h-[560px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C6A878] block">
                  Haute Bridal Studio
                </span>
                <p className="text-xl font-serif text-[#FFFFFF] italic">The Timeless Bride</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Bridal Offerings */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                Bridal & Occasion Sanctuary
              </span>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight leading-[1.05]">
                YOUR MOST BEAUTIFUL MOMENT.
              </h2>

              <p className="text-base sm:text-lg font-serif italic text-[#F5F1EB]/90 leading-relaxed font-light">
                "From elegant engagement looks to unforgettable wedding-day transformations, discover personalised bridal beauty experiences crafted for your special occasions."
              </p>

              <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/75 leading-relaxed">
                Whether you envision a traditional heritage aesthetic with intricate saree pleats or an understated contemporary red-carpet finish, our bridal directors curate every nuance. In-salon luxury bridal suites and on-location destination bridal services available.
              </p>
            </div>

            {/* Offerings Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#242424]">
              {bridalOfferings.map((pkg, i) => (
                <div key={i} className="p-4 bg-[#242424]/30 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-serif font-medium text-[#FFFFFF]">{pkg.title}</h4>
                    <span className="text-[11px] font-mono text-[#C6A878]">{pkg.price}</span>
                  </div>
                  <p className="text-[11px] font-sans text-[#F5F1EB]/65 leading-relaxed">
                    {pkg.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to action */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onEnquireBridal}
                className="px-8 py-4 text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-all duration-300 flex items-center gap-2 shadow-xl shadow-[#C6A878]/10"
              >
                <span>Enquire About Bridal Services</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#F5F1EB]/60 font-sans tracking-wide">
                Complimentary Consultation Included
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
