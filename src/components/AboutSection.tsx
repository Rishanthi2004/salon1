import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Award, ShieldCheck, HeartHandshake, Feather } from 'lucide-react';
import heroSalonImg from '../assets/images/hero_salon_interior_1792733736627.jpg';
import hairStylingImg from '../assets/images/hair_transformation_1792733737985.jpg';

interface AboutSectionProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreServices }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    {
      id: '01',
      title: 'Professional Experts',
      desc: 'Internationally certified hair sculptors, estheticians, and master barbers.',
      highlight: 'Certified Master Stylists & Colorists',
      icon: Award,
    },
    {
      id: '02',
      title: 'Personalised Treatments',
      desc: 'Custom diagnostic consultations before any shear cut, color blend, or facial.',
      highlight: 'Tailored Facial & Scalp Diagnosis',
      icon: Feather,
    },
    {
      id: '03',
      title: 'Premium Products',
      desc: 'Formulations free from harsh sulfates, toxic formaldehyde, and aggressive chemicals.',
      highlight: '100% Clean European Botanicals',
      icon: ShieldCheck,
    },
    {
      id: '04',
      title: 'Exceptional Care',
      desc: 'Dedicated private booths, artisanal refreshments, and serene acoustic calm.',
      highlight: 'Private Acoustic Suites & Valet',
      icon: HeartHandshake,
    },
  ];

  // Dynamic parallax offset based on scroll position
  const parallaxOffset = (scrollY * 0.08) % 40;

  return (
    <section id="about" className="relative z-10 py-24 md:py-36 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-14">
        {/* Editorial Section Header with Animated Rotating Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10 relative">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A878] animate-ping" />
              The Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight">
              A NEW STANDARD OF BEAUTY
            </h2>
          </div>

          {/* Rotating Circular Luxury Emblem */}
          <div className="hidden sm:flex items-center gap-4">
            <div
              className="relative w-24 h-24 flex items-center justify-center pointer-events-none select-none transition-transform duration-200"
              style={{ transform: `rotate(${scrollY * 0.15}deg)` }}
            >
              <svg className="w-full h-full animate-[spin_32s_linear_infinite]" viewBox="0 0 100 100">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[7.5px] uppercase tracking-[0.28em] fill-[#C6A878] font-sans font-medium">
                  <textPath href="#circlePath">
                    · RISHAARA SALON · HAUTE BEAUTÉ · EST. 2024 ·
                  </textPath>
                </text>
              </svg>
              <div className="absolute w-7 h-7 rounded-full bg-[#080808] border border-[#C6A878]/60 flex items-center justify-center text-[#C6A878] text-[9px] font-serif font-bold">
                R
              </div>
            </div>

            <p className="text-xs font-sans tracking-[0.2em] text-[#F5F1EB]/50 uppercase hidden lg:block">
              UNISEX SANCTUARY
            </p>
          </div>
        </div>

        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <p className="text-lg sm:text-xl font-serif text-[#F5F1EB] leading-relaxed font-light">
                "At Rishaara Salon, beauty is a personal experience tailored with precision, expertise, and bespoke care."
              </p>
            </div>

            {/* Alternating Warm Ivory Block with Interactive Hover Pillars */}
            <div className="bg-[#F5F1EB] text-[#080808] p-8 md:p-10 shadow-2xl relative border-l-2 border-[#C6A878]">
              <div className="border-b border-[#080808]/15 pb-4 mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-sans tracking-[0.25em] uppercase font-semibold text-[#080808] block">
                    The Four Pillars of Rishaara
                  </span>
                  <span className="text-[10px] text-[#080808]/60 font-sans">Hover to reveal hallmark guarantee</span>
                </div>
                <span className="text-xs text-[#C6A878] font-serif font-bold">★ ★ ★ ★</span>
              </div>

              {/* 4 Pillars with Interactive Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  const isSelected = activePillarIndex === idx;

                  return (
                    <div
                      key={p.id}
                      onMouseEnter={() => setActivePillarIndex(idx)}
                      className={`p-3.5 transition-all duration-300 cursor-pointer border rounded-sm ${
                        isSelected
                          ? 'bg-[#080808] text-[#F5F1EB] border-[#080808] shadow-lg translate-y-[-2px]'
                          : 'bg-white/60 hover:bg-white text-[#080808] border-[#080808]/10'
                      }`}
                    >
                      <div className="flex items-center justify-between pb-1.5">
                        <span className={`text-[11px] font-mono font-semibold ${isSelected ? 'text-[#C6A878]' : 'text-[#080808]/50'}`}>
                          {p.id}
                        </span>
                        <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#C6A878]' : 'text-[#080808]/40'}`} />
                      </div>

                      <h4 className={`text-sm font-serif font-semibold ${isSelected ? 'text-[#FFFFFF]' : 'text-[#080808]'}`}>
                        {p.title}
                      </h4>

                      <p className={`text-[11px] font-sans leading-relaxed pt-1 ${isSelected ? 'text-white/75' : 'text-[#080808]/75'}`}>
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[#080808]/10 flex items-center justify-between">
                <button
                  onClick={onExploreServices}
                  className="text-xs font-sans uppercase tracking-[0.18em] font-semibold text-[#080808] hover:text-[#C6A878] transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore The Full Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Two Overlapping Editorial Photos with Parallax Depth */}
          <div className="lg:col-span-6 relative pt-4 lg:pt-0">
            {/* Primary Large Image */}
            <div className="relative overflow-hidden bg-[#242424] shadow-2xl border border-white/10 group">
              <img
                src={heroSalonImg}
                alt="Rishaara Luxury Salon Interior"
                className="w-full h-[400px] sm:h-[460px] object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute top-5 right-5 bg-[#080808]/90 border border-[#C6A878]/50 px-3.5 py-1.5 backdrop-blur-md shadow-xl">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#C6A878] block">
                  Active Hallmark
                </span>
                <span className="text-xs font-serif text-[#FFFFFF]">
                  {pillars[activePillarIndex].highlight}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-[#F5F1EB] flex justify-between items-end">
                <div>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C6A878]">
                    Spatial Architecture
                  </span>
                  <p className="text-lg font-serif">The Main Styling Atelier</p>
                </div>
                <span className="text-xs font-mono text-white/60">01 / 02</span>
              </div>
            </div>

            {/* Secondary Overlapping Image with Smooth Parallax */}
            <div
              className="mt-6 sm:mt-0 sm:absolute sm:-bottom-10 sm:-left-10 sm:w-64 md:w-72 bg-[#080808] p-2 shadow-2xl border border-[#C6A878]/40 transition-transform duration-300 ease-out will-change-transform group"
              style={{
                transform: `translateY(${parallaxOffset}px)`,
              }}
            >
              <div className="overflow-hidden relative">
                <img
                  src={hairStylingImg}
                  alt="Precision Stylist at work"
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-3 text-[11px] font-sans">
                <span className="text-[#C6A878] uppercase tracking-wider block text-[9px]">Artistry in Action</span>
                <span className="text-[#F5F1EB] font-serif text-sm">Bespoke Thermal Sculpting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
