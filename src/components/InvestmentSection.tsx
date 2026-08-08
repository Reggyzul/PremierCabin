import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface InvestmentSectionProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function InvestmentSection({ onOpenContactModal }: InvestmentSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].investment;

  return (
    <section id="investment" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* TOP EDITORIAL SPLIT */}
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                {t.label}
              </span>
            </div>

            <h2 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-[#F5F1E8] leading-tight">
              {t.headline}
            </h2>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed">
              {t.subtext}
            </p>

            <button
              onClick={() => onOpenContactModal && onOpenContactModal('Investment & Partnership')}
              className="inline-flex items-center gap-3 border border-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B241C] text-white font-sans text-[10px] uppercase tracking-[0.2em] px-7 py-3.5 transition-all duration-300 shadow-xl cursor-pointer"
            >
              <span>{t.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* THREE INVESTMENT PILLARS ASYMMETRIC GRID */}
        <div className="grid md:grid-cols-3 gap-8 pt-8">
          
          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-4 hover:border-[#C9A227]/60 transition-all duration-500">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#C9A227] uppercase block">01</span>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">{t.pillar1Title}</h3>
            <p className="font-sans font-light text-xs sm:text-sm text-[#D8CDBB] leading-relaxed">
              {t.pillar1Desc}
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-4 hover:border-[#C9A227]/60 transition-all duration-500">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#C9A227] uppercase block">02</span>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">{t.pillar2Title}</h3>
            <p className="font-sans font-light text-xs sm:text-sm text-[#D8CDBB] leading-relaxed">
              {t.pillar2Desc}
            </p>
          </div>

          <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm space-y-4 hover:border-[#C9A227]/60 transition-all duration-500">
            <span className="text-xs font-sans font-bold tracking-[0.25em] text-[#C9A227] uppercase block">03</span>
            <h3 className="font-serif text-2xl text-[#F5F1E8]">{t.pillar3Title}</h3>
            <p className="font-sans font-light text-xs sm:text-sm text-[#D8CDBB] leading-relaxed">
              {t.pillar3Desc}
            </p>
          </div>

        </div>

        {/* ELEGANT FEATURED ARCHITECTURE IMAGE */}
        <div className="relative aspect-[21/9] max-h-[420px] overflow-hidden rounded-none shadow-2xl filter brightness-90">
          <img
            src={SITE_IMAGES.investmentArch}
            alt="Premier Cabin Sustainable Investment Architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C]/80 via-transparent to-transparent flex items-end p-8">
            <span className="font-serif text-xl sm:text-2xl text-white italic">
              "Connecting lifestyle appeal with sustainable long-term value."
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
