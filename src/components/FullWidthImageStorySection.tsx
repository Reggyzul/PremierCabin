import React from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function FullWidthImageStorySection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].fullWidthStory;

  return (
    <section className="relative w-full h-[65vh] sm:h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* FULL BLEED CINEMATIC PHOTOGRAPH */}
      <img
        src={SITE_IMAGES.fullWidthStory}
        alt="Premier Cabin - Living With The Land"
        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.85]"
      />
      
      {/* VIGNETTE GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/70 z-10" />

      {/* OVERLAY EDITORIAL TYPOGRAPHY */}
      <div className="relative z-20 text-center max-w-4xl px-6 space-y-4">
        <span className="inline-block text-[10px] sm:text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#C9A227]">
          {t.label}
        </span>

        <h3 className="font-serif font-normal text-2xl sm:text-5xl md:text-6xl text-[#F5F1E8] leading-tight tracking-tight drop-shadow-2xl break-words">
          "{t.headline}"
        </h3>
      </div>
    </section>
  );
}
