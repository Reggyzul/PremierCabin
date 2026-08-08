import React from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function CabinExperienceSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].cabinExperience;

  return (
    <section id="cabins" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              {t.label}
            </span>
          </div>

          <h2 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-[#F5F1E8] leading-tight">
            {t.headline}
          </h2>

          <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed max-w-2xl">
            {t.subtext}
          </p>
        </div>

        {/* ASYMMETRIC OVERLAPPING IMAGE COLLAGE */}
        <div className="grid lg:grid-cols-12 gap-8 items-center pt-6">
          
          {/* IMAGE 1: MAIN EXTERIOR (7 COLS) */}
          <div className="lg:col-span-7 relative group">
            <div className="aspect-[4/3] overflow-hidden rounded-none shadow-2xl filter brightness-95 group-hover:brightness-100 transition-all duration-700">
              <img
                src={SITE_IMAGES.cabinExterior}
                alt="Luxury Timber Cabin Exterior Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            <div className="absolute bottom-4 left-4 bg-[#0B241C]/90 backdrop-blur-md px-4 py-2 text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A227] border border-[#C9A227]/30">
              {t.exteriorTitle}
            </div>
          </div>

          {/* RIGHT COLUMN: INTERIOR & MORNING (5 COLS - OVERLAPPING ASYMMETRIC STACK) */}
          <div className="lg:col-span-5 space-y-8 lg:-ml-12 lg:z-10 pt-4 lg:pt-0">
            
            {/* IMAGE 2: INTERIOR */}
            <div className="relative group shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden rounded-none filter brightness-95 group-hover:brightness-100 transition-all duration-700 border border-white/10">
                <img
                  src={SITE_IMAGES.cabinInterior}
                  alt="Premier Suite Luxury Interior View"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-[#0B241C]/90 backdrop-blur-md px-3 py-1.5 text-[9px] font-sans uppercase tracking-[0.2em] text-white border border-white/20">
                {t.interiorTitle}
              </div>
            </div>

            {/* IMAGE 3: MORNING ATMOSPHERE */}
            <div className="relative group shadow-2xl hidden sm:block">
              <div className="aspect-[16/9] overflow-hidden rounded-none filter brightness-95 group-hover:brightness-100 transition-all duration-700 border border-white/10">
                <img
                  src={SITE_IMAGES.cabinMorning}
                  alt="Pine Forest Morning Mist Landscape"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="absolute bottom-3 left-3 bg-[#0B241C]/90 backdrop-blur-md px-3 py-1.5 text-[9px] font-sans uppercase tracking-[0.2em] text-[#C9A227] border border-[#C9A227]/30">
                {t.morningTitle}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
