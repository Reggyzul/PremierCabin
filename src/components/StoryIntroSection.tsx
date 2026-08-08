import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface StoryIntroSectionProps {
  onNavigatePage?: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
}

export default function StoryIntroSection({ onNavigatePage }: StoryIntroSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].story;

  return (
    <section id="story" className="py-20 sm:py-28 bg-[#0D2820] text-[#F5F1E8] relative overflow-hidden border-b border-white/5" style={{ minHeight: '60vh' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* SMALL LABEL */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[1px] w-8 bg-[#C9A227]" />
          <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
            {t.label}
          </span>
        </div>

        {/* EDITORIAL ASYMMETRIC GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: LARGE SERIF HEADLINE (7 COLS) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif font-normal text-3xl sm:text-5xl md:text-6xl text-[#F5F1E8] leading-[1.15] tracking-tight">
              "{t.headline}"
            </h2>
          </div>

          {/* RIGHT: PARAGRAPH + CTA (5 COLS) */}
          <div className="lg:col-span-5 space-y-8 lg:pt-4">
            <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed tracking-wide">
              {t.paragraph}
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigatePage && onNavigatePage('about')}
                className="inline-flex items-center gap-3 text-xs font-sans uppercase tracking-[0.2em] font-medium text-[#C9A227] hover:text-white transition-colors cursor-pointer group"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A227] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
