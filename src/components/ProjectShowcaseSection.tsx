import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface ProjectShowcaseSectionProps {
  onOpenSaungSareModal?: () => void;
}

export default function ProjectShowcaseSection({ onOpenSaungSareModal }: ProjectShowcaseSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].projects;

  return (
    <section id="projects" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
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

          <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed">
            {t.subtext}
          </p>
        </div>

        {/* FEATURED PILOT PROJECT CARD */}
        <div
          onClick={() => onOpenSaungSareModal && onOpenSaungSareModal()}
          className="group cursor-pointer grid lg:grid-cols-12 gap-8 items-center bg-white/5 border border-white/10 hover:border-[#C9A227]/70 p-6 sm:p-10 transition-all duration-700"
        >
          {/* LARGE HORIZONTAL IMAGE (7 COLS) */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden rounded-none shadow-2xl filter brightness-95 group-hover:brightness-100 transition-all">
            <img
              src={SITE_IMAGES.saungSareHero}
              alt={t.saungTitle}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>

          {/* PROJECT DETAILS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6 lg:pl-6">
            <span className="text-[10px] font-sans font-semibold tracking-[0.25em] text-[#C9A227] uppercase block">
              CABIN DEVELOPMENT • {t.saungLocation}
            </span>

            <h3 className="font-serif font-normal text-3xl sm:text-4xl text-[#F5F1E8] group-hover:text-[#C9A227] transition-colors leading-tight">
              {t.saungTitle}
            </h3>

            <p className="font-sans font-light text-xs sm:text-sm text-[#D8CDBB] leading-relaxed">
              {t.saungDesc}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-3 border border-[#C9A227] group-hover:bg-[#C9A227] group-hover:text-[#0B241C] text-white font-sans text-[10px] uppercase tracking-[0.2em] px-7 py-3.5 transition-all duration-300">
                <span>{t.ctaExplore}</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
