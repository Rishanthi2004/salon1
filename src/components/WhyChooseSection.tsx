import React from 'react';
import { WHY_CHOOSE_PILLARS } from '../data/salonData';

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20 border-t border-white/5 bg-[#080808]/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans block">
            The Rishaara Difference
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight leading-[1.05]">
            BEAUTY, CRAFTED AROUND YOU.
          </h2>
          <p className="text-sm sm:text-base font-sans text-[#F5F1EB]/70 leading-relaxed text-balance pt-2">
            We approach salon care not as an assembly line, but as an intimate ritual of precision, hygiene, and contemporary elegance.
          </p>
        </div>

        {/* 6 Editorial Benefit Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {WHY_CHOOSE_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="group space-y-4 pt-6 border-t border-[#242424] hover:border-[#C6A878] transition-colors duration-500"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-serif text-[#C6A878] font-light">
                  {pillar.number}
                </span>
                <span className="w-8 h-[1px] bg-white/10 group-hover:bg-[#C6A878] transition-colors" />
              </div>

              <h3 className="text-xl font-serif text-[#FFFFFF] group-hover:text-[#C6A878] transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm font-sans text-[#F5F1EB]/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
