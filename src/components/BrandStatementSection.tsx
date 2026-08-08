import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function BrandStatementSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].brandStatement;

  return (
    <section className="py-28 sm:py-40 bg-[#0B241C] text-[#F5F1E8] relative text-center overflow-hidden border-b border-white/5">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        
        {/* GOLD LINE ACCENT */}
        <div className="w-12 h-[1px] bg-[#C9A227] mx-auto" />

        {/* HEADLINE */}
        <h2 className="font-serif font-normal text-3xl sm:text-6xl md:text-7xl text-[#F5F1E8] leading-tight tracking-tight italic">
          {t.line1} <br />
          <span className="not-italic text-[#C9A227]">{t.line2}</span>
        </h2>

        {/* SUBTITLE */}
        <span className="inline-block text-[10px] sm:text-xs font-sans font-semibold tracking-[0.35em] uppercase text-white/60 pt-4">
          {t.sub}
        </span>

      </div>
    </section>
  );
}
