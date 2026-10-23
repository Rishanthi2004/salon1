import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  onBookClick: (category?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#242424]/80 py-3.5 shadow-2xl'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            className="text-xl md:text-2xl font-serif tracking-[0.22em] text-[#F5F1EB] hover:text-[#C6A878] transition-colors whitespace-nowrap shrink-0 font-medium uppercase"
          >
            {SALON_INFO.brandName}
          </a>

          {/* Zone 2: 4–5 core concise single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-sans uppercase tracking-[0.18em] text-[#F5F1EB]/80">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 transition-colors hover:text-[#C6A878] whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C6A878] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onBookClick()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-sans uppercase tracking-[0.16em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-all duration-300 rounded-none shadow-sm hover:shadow-[#C6A878]/20 whitespace-nowrap shrink-0"
            >
              <span>Book Appointment</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F1EB] hover:text-[#C6A878] transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between p-8 pt-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-6">
          <p className="text-[11px] font-sans tracking-[0.25em] uppercase text-[#C6A878]">
            Navigation Atelier
          </p>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-2xl font-serif tracking-wider text-[#F5F1EB] hover:text-[#C6A878] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#242424] space-y-4">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="w-full py-3.5 text-center text-xs font-sans uppercase tracking-[0.2em] font-semibold text-[#080808] bg-[#C6A878] hover:bg-[#d4b98c] transition-colors"
          >
            Book An Appointment
          </button>
          <div className="text-[11px] text-[#F5F1EB]/60 space-y-1">
            <p>{SALON_INFO.hours}</p>
            <p>{SALON_INFO.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};
