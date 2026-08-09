import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'saung-sare' | 'my-cabin' | 'services' | 'contact';
  setCurrentPage: (page: 'home' | 'about' | 'saung-sare' | 'my-cabin' | 'services' | 'contact') => void;
  onOpenContactModal: () => void;
}

export default function Navbar({ currentPage, setCurrentPage, onOpenContactModal }: NavbarProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].nav;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: 'home' | 'about' | 'saung-sare' | 'my-cabin' | 'services' | 'contact', sectionId?: string) => {
    setMenuOpen(false);
    setCurrentPage(page);

    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* EDITORIAL MINIMAL LUXURY HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B241C]/90 backdrop-blur-md py-4 border-b border-[#C9A227]/20 shadow-2xl'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-6'
        }`}
      >
        {/* MATHEMATICALLY CENTERED 3-COLUMN GRID */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-3 items-center">
          
          {/* LEFT COLUMN: MENU TRIGGER BUTTON */}
          <div className="flex items-center justify-start">
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2.5 text-white/90 hover:text-[#C9A227] transition-colors cursor-pointer group"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] font-medium">
                {t.menu}
              </span>
            </button>
          </div>

          {/* CENTER COLUMN: PRECISELY CENTERED BRAND TITLE LOGO */}
          <div className="flex justify-center text-center">
            <button
              onClick={() => handleNavClick('home')}
              className="text-center cursor-pointer group focus:outline-none flex flex-col items-center"
            >
              <span className="block font-serif text-lg sm:text-2xl md:text-3xl text-white tracking-wider font-semibold group-hover:text-[#C9A227] transition-colors leading-none">
                Premier Cabin
              </span>
              <span className="block text-[8px] sm:text-[9px] text-[#C9A227] uppercase tracking-[0.35em] font-sans font-medium mt-1">
                INTERNASIONAL
              </span>
            </button>
          </div>

          {/* RIGHT COLUMN: SLEEK SUBTLE CONTACT LINK (VISIBLE ON MOBILE & DESKTOP) */}
          <div className="flex items-center justify-end">
            <button
              onClick={() => onOpenContactModal()}
              className="text-[8px] sm:text-[9px] font-sans font-medium uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/90 hover:text-[#C9A227] border border-white/20 hover:border-[#C9A227] px-2 sm:px-3 py-1 transition-all duration-300 cursor-pointer"
            >
              {t.contact}
            </button>
          </div>

        </div>
      </header>

      {/* LUXURY EDITORIAL FULL-SCREEN DRAWER OVERLAY */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0B241C]/98 backdrop-blur-xl flex flex-col justify-between p-8 sm:p-16 text-white transition-opacity duration-300">
          
          {/* TOP BAR IN MENU */}
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
            <div className="text-left">
              <span className="font-serif text-xl text-white font-semibold">Premier Cabin</span>
              <span className="block text-[8px] text-[#C9A227] tracking-[0.3em] uppercase">INTERNASIONAL</span>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 text-white/80 hover:text-[#C9A227] hover:rotate-90 transition-all duration-300 cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          {/* CENTER NAVIGATION LINKS */}
          <nav className="max-w-4xl mx-auto w-full text-center space-y-6 sm:space-y-8 my-auto pt-8">
            <button
              onClick={() => handleNavClick('home')}
              className={`block mx-auto font-serif text-2xl sm:text-4xl md:text-5xl tracking-wide transition-colors ${
                currentPage === 'home' ? 'text-[#C9A227] italic font-semibold' : 'text-white/90 hover:text-[#C9A227]'
              }`}
            >
              {t.home}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`block mx-auto font-serif text-2xl sm:text-4xl md:text-5xl tracking-wide transition-colors ${
                currentPage === 'about' ? 'text-[#C9A227] italic font-semibold' : 'text-white/90 hover:text-[#C9A227]'
              }`}
            >
              {t.story}
            </button>

            <button
              onClick={() => handleNavClick('saung-sare')}
              className={`block mx-auto font-serif text-2xl sm:text-4xl md:text-5xl tracking-wide transition-colors ${
                currentPage === 'saung-sare' ? 'text-[#C9A227] italic font-semibold' : 'text-white/90 hover:text-[#C9A227]'
              }`}
            >
              {t.projects} — Saung Sare
            </button>

            <button
              onClick={() => handleNavClick('my-cabin')}
              className={`block mx-auto font-serif text-2xl sm:text-4xl md:text-5xl tracking-wide transition-colors ${
                currentPage === 'my-cabin' ? 'text-[#C9A227] italic font-semibold' : 'text-white/90 hover:text-[#C9A227]'
              }`}
            >
              My Cabin — Prospectus
            </button>

            <button
              onClick={() => handleNavClick('home', 'business')}
              className="block mx-auto font-serif text-2xl sm:text-4xl md:text-5xl text-white/90 hover:text-[#C9A227] tracking-wide transition-colors"
            >
              {t.business}
            </button>


            <div className="pt-6">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onOpenContactModal();
                }}
                className="inline-flex items-center gap-2 border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B241C] font-sans text-xs uppercase tracking-[0.25em] px-8 py-3.5 transition-all duration-300 shadow-xl cursor-pointer"
              >
                <span>{t.contact}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* BOTTOM BAR IN MENU */}
          <div className="max-w-7xl mx-auto w-full pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <p>© {new Date().getFullYear()} PT. Premier Cabin Internasional. All rights reserved.</p>
            <p className="tracking-widest uppercase text-[#C9A227]">Development by JBI World Holding Company</p>
          </div>

        </div>
      )}
    </>
  );
}
