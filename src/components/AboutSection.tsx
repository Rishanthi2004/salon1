import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Award, ShieldCheck, HeartHandshake, Feather, Play } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import heroSalonImg from '../assets/images/hero_salon_interior_1792733736627.jpg';
import hairStylingImg from '../assets/images/hair_transformation_1792733737985.jpg';

interface AboutSectionProps {
  onExploreServices: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreServices }) => {
  const [scrollY, setScrollY] = useState(0);
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const rightColRef = useRef<HTMLDivElement>(null);

  // Scroll parallax for continuous fluid depth
  const { scrollYProgress } = useScroll({
    target: rightColRef,
    offset: ['start end', 'end start'],
  });

  const rawParallax = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const smoothParallax = useSpring(rawParallax, { stiffness: 90, damping: 18 });

  const rawPrimaryParallax = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const smoothPrimaryParallax = useSpring(rawPrimaryParallax, { stiffness: 90, damping: 18 });

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

  return (
    <section id="about" className="relative z-10 py-16 sm:py-24 md:py-36 px-4 sm:px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-14">
        {/* Editorial Section Header with Animated Rotating Stamp */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 sm:pb-12 border-b border-white/10 relative">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A878] font-sans flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C6A878] animate-ping" />
              The Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-[#FFFFFF] font-light tracking-tight">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-8">
            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-xl font-serif text-[#F5F1EB] leading-relaxed font-light">
                "At Rishaara Salon, beauty is a personal experience tailored with precision, expertise, and bespoke care."
              </p>
            </div>

            {/* Alternating Warm Ivory Block with Compact 2-Column Pillars on Mobile */}
            <div className="bg-[#F5F1EB] text-[#080808] p-4 sm:p-8 md:p-10 shadow-2xl relative border-l-2 border-[#C6A878] rounded-xs">
              <div className="border-b border-[#080808]/15 pb-2.5 mb-4 sm:pb-4 sm:mb-6 flex items-center justify-between">
                <div>
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.22em] sm:tracking-[0.25em] uppercase font-semibold text-[#080808] block">
                    The Four Pillars of Rishaara
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#080808]/60 font-sans">Hover to reveal hallmark guarantee</span>
                </div>
                <span className="text-xs text-[#C6A878] font-serif font-bold">★ ★ ★ ★</span>
              </div>

              {/* 4 Pillars with 2-Column Responsive Layout */}
              <div className="grid grid-cols-2 gap-2.5 sm:gap-5">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  const isSelected = activePillarIndex === idx;

                  return (
                    <div
                      key={p.id}
                      onMouseEnter={() => setActivePillarIndex(idx)}
                      onClick={() => setActivePillarIndex(idx)}
                      className={`p-2.5 sm:p-3.5 transition-all duration-300 cursor-pointer border rounded-sm flex flex-col justify-between ${
                        isSelected
                          ? 'bg-[#080808] text-[#F5F1EB] border-[#080808] shadow-lg translate-y-[-2px]'
                          : 'bg-white/60 hover:bg-white text-[#080808] border-[#080808]/10'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between pb-1">
                          <span className={`text-[10px] sm:text-[11px] font-mono font-semibold ${isSelected ? 'text-[#C6A878]' : 'text-[#080808]/50'}`}>
                            {p.id}
                          </span>
                          <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${isSelected ? 'text-[#C6A878]' : 'text-[#080808]/40'}`} />
                        </div>

                        <h4 className={`text-xs sm:text-sm font-serif font-semibold leading-snug line-clamp-1 sm:line-clamp-none ${isSelected ? 'text-[#FFFFFF]' : 'text-[#080808]'}`}>
                          {p.title}
                        </h4>
                      </div>

                      <p className={`text-[9.5px] sm:text-[11px] font-sans leading-snug pt-1 line-clamp-3 sm:line-clamp-none ${isSelected ? 'text-white/75' : 'text-[#080808]/75'}`}>
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-[#080808]/10 flex items-center justify-between">
                <button
                  onClick={onExploreServices}
                  className="text-[10.5px] sm:text-xs font-sans uppercase tracking-[0.14em] sm:tracking-[0.18em] font-semibold text-[#080808] hover:text-[#C6A878] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Explore The Full Portfolio</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Two Overlapping Editorial Photos with Parallax Depth */}
          <div ref={rightColRef} className="lg:col-span-6 relative pt-4 lg:pt-0">
            {/* Primary Large Image with Animated Scroll Entrance & Settling */}
            <motion.div
              initial={{ opacity: 0, x: 70, y: 50, scale: 0.94 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                  type: 'spring',
                  stiffness: 50,
                  damping: 15,
                  mass: 0.9,
                  delay: 0.05,
                },
              }}
              viewport={{ once: false, amount: 0.2 }}
              style={{
                y: smoothPrimaryParallax,
              }}
              className="relative overflow-hidden bg-[#242424] shadow-2xl border border-white/10 group will-change-transform"
            >
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
            </motion.div>

            {/* Secondary Overlapping Image Card with Animated Video Reel and Scroll Entrance Settling */}
            <motion.div
              initial={{ opacity: 0, x: -90, y: 75, scale: 0.88, rotate: -4 }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                transition: {
                  type: 'spring',
                  stiffness: 55,
                  damping: 14,
                  mass: 0.85,
                  delay: 0.15,
                },
              }}
              viewport={{ once: false, amount: 0.25 }}
              style={{
                y: smoothParallax,
              }}
              className="mt-6 sm:mt-0 sm:absolute sm:-bottom-10 sm:-left-10 sm:w-68 md:w-80 bg-[#080808] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] border border-[#C6A878]/50 will-change-transform group z-20 rounded-xs"
            >
              {/* Golden Ambient Glow Behind Card */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#C6A878]/30 via-[#E2D2B0]/20 to-transparent blur-xl -z-10 animate-[goldGlow_5s_ease-in-out_infinite] pointer-events-none" />

              <div className="overflow-hidden relative bg-[#121212]">
                {/* Video Reel Badge: Live 4K Indicator */}
                <div className="absolute top-2.5 left-2.5 z-30 flex items-center gap-1.5 px-2.5 py-1 bg-black/85 backdrop-blur-md rounded-full border border-[#C6A878]/40 shadow-lg pointer-events-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E5484D] opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E5484D]" />
                  </span>
                  <span className="text-[8.5px] font-mono tracking-widest text-[#F5F1EB] uppercase font-semibold">
                    REEL · LIVE 4K
                  </span>
                </div>

                {/* Animated Audio/Motion Equalizer Visualizer */}
                <div className="absolute top-2.5 right-2.5 z-30 flex items-end gap-[3px] h-3.5 px-2 py-1 bg-black/75 backdrop-blur-md rounded border border-white/10 pointer-events-none">
                  <span className="w-[2px] bg-[#C6A878] rounded-full animate-[audioBar_1.1s_ease-in-out_infinite]" />
                  <span className="w-[2px] bg-[#C6A878] rounded-full animate-[audioBar_0.7s_ease-in-out_infinite_0.2s]" />
                  <span className="w-[2px] bg-[#C6A878] rounded-full animate-[audioBar_1.4s_ease-in-out_infinite_0.4s]" />
                  <span className="w-[2px] bg-[#C6A878] rounded-full animate-[audioBar_0.9s_ease-in-out_infinite_0.1s]" />
                </div>

                {/* Center Play Icon on Hover */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="w-10 h-10 rounded-full bg-black/60 border border-[#C6A878]/70 backdrop-blur-sm flex items-center justify-center text-[#C6A878] group-hover:scale-110 group-hover:border-[#F5E6CC] transition-all duration-300 shadow-xl">
                    <Play className="w-3.5 h-3.5 fill-[#C6A878] translate-x-0.5" />
                  </div>
                </div>

                {/* Moving Cinematic Video Image with Ken Burns Zoom & Subtle Pan */}
                <img
                  src={hairStylingImg}
                  alt="Precision Stylist at work"
                  className="w-full h-48 sm:h-56 object-cover animate-[kenBurns_12s_ease-in-out_infinite] group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Video Playback Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/20 overflow-hidden z-20 pointer-events-none">
                  <div className="h-full bg-gradient-to-r from-[#C6A878] via-[#F5E6CC] to-[#C6A878] animate-[videoProgress_7s_linear_infinite]" />
                </div>
              </div>

              {/* Card Meta & Video Duration Info */}
              <div className="p-3 text-[11px] font-sans flex items-center justify-between">
                <div>
                  <span className="text-[#C6A878] uppercase tracking-[0.2em] block text-[9px] font-medium">
                    Artistry in Action
                  </span>
                  <span className="text-[#F5F1EB] font-serif text-sm font-light">
                    Bespoke Thermal Sculpting
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#C6A878]/80 text-[10px] font-mono">
                  <span>00:18</span>
                  <span className="text-white/40">/</span>
                  <span className="text-white/40">00:45</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
