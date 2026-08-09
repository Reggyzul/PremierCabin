import React from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface SustainabilitySectionProps {
  onNavigatePage?: (page: 'home' | 'about' | 'saung-sare' | 'my-cabin' | 'services' | 'contact') => void;
}

export default function SustainabilitySection({ onNavigatePage }: SustainabilitySectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].sustainability;

  return (
    <section className="relative w-full h-[70vh] sm:h-[85vh] min-h-[520px] flex items-center justify-center overflow-hidden">
      {/* FULL BLEED NATURE BACKGROUND */}
      <img
        src={SITE_IMAGES.sustainabilityNature}
        alt="Tropical Forest Rainforest Canopy"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.75]"
      />

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C] via-black/40 to-[#0B241C]/80 z-10" />

      {/* EDITORIAL CONTENT */}
      <div className="relative z-20 text-center max-w-4xl px-6 space-y-6">
        <div className="space-y-2">
          <span className="block text-xs sm:text-sm font-sans font-bold tracking-[0.35em] uppercase text-[#C9A227]">
            {t.superTitle || 'MY CABIN PROSPECTUS'}
          </span>
          <span className="block text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-white/80">
            {t.label}
          </span>
        </div>

        <h2 className="font-serif font-normal text-3xl sm:text-6xl md:text-7xl text-[#F5F1E8] leading-tight tracking-tight drop-shadow-2xl">
          "{t.headline}"
        </h2>

        <p className="font-sans font-light text-xs sm:text-base text-[#D8CDBB] max-w-2xl mx-auto leading-relaxed tracking-wide drop-shadow-md">
          {t.subtext}
        </p>

        {onNavigatePage && (
          <div className="pt-4">
            <button
              onClick={() => onNavigatePage('my-cabin')}
              className="border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white hover:border-white font-sans text-xs uppercase font-bold tracking-[0.25em] px-8 py-3.5 transition-all shadow-2xl cursor-pointer"
            >
              Jelajahi My Cabin Prospectus
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
