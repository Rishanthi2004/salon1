import React from 'react';

interface MovingMarqueeProps {
  variant?: 'gold' | 'dark';
  reverse?: boolean;
}

export const MovingMarquee: React.FC<MovingMarqueeProps> = ({
  variant = 'gold',
  reverse = false,
}) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`relative z-10 w-full py-3 overflow-hidden select-none shadow-xl ${
        isDark
          ? 'bg-[#080808] border-y border-[#C6A878]/30 text-[#C6A878]'
          : 'bg-[#C6A878] text-[#080808] border-y border-[#d4b98c]'
      }`}
    >
      <div
        className={`flex whitespace-nowrap ${
          reverse
            ? 'animate-[marquee_28s_linear_infinite_reverse]'
            : 'animate-[marquee_26s_linear_infinite]'
        }`}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-8 text-[11px] font-sans uppercase tracking-[0.3em] font-semibold mx-4"
          >
            <span>MASTER COIFFURE</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
            <span>MASTER BARBERING</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
            <span>DERMATOLOGICAL FACIALS</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
            <span>REGAL BRIDAL COUTURE</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
            <span>ARTISANAL NAIL CARE</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
            <span>RESTORATIVE SPA RITUALS</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
            <span>PARIS & METROPOLIS</span>
            <span className={isDark ? 'text-[#C6A878]/40' : 'text-[#080808]/40'}>★</span>
          </div>
        ))}
      </div>
    </div>
  );
};
