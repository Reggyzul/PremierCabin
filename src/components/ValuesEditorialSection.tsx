import React from 'react';
import { Shield, Star, Leaf, Lightbulb, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

const PILLAR_ICONS = [Shield, Star, Leaf, Lightbulb, Heart];

export default function ValuesEditorialSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].values;

  const pillars = [
    { num: '01', title: t.v01Title, desc: t.v01Desc, Icon: Shield },
    { num: '02', title: t.v02Title, desc: t.v02Desc, Icon: Star },
    { num: '03', title: t.v03Title, desc: t.v03Desc, Icon: Leaf },
    { num: '04', title: t.v04Title, desc: t.v04Desc, Icon: Lightbulb },
    { num: '05', title: t.v05Title, desc: t.v05Desc, Icon: Heart },
  ];

  return (
    <section id="values" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16 sm:space-y-20">

        {/* ── HEADER ── */}
        <div className="max-w-2xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              {t.label}
            </span>
          </div>
          <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#F5F1E8] leading-[1.2] tracking-tight">
            {t.headline}
          </h2>
        </div>

        {/* ── HAIRLINE DIVIDER ── */}
        <div className="h-[1px] w-full bg-white/10" />

        {/* ── 5-COLUMN PILLAR GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0">
          {pillars.map(({ num, title, desc, Icon }, idx) => (
            <div
              key={num}
              className={`
                group relative flex flex-col gap-6 px-0 py-8
                sm:px-6 lg:px-8
                transition-colors duration-300
                ${idx < pillars.length - 1
                  ? 'border-b sm:border-b-0 border-white/10 sm:border-r lg:border-r border-white/10'
                  : ''}
                ${idx === 0 ? 'lg:pl-0' : ''}
                ${idx === pillars.length - 1 ? 'lg:pr-0' : ''}
              `}
            >
              {/* Number — large serif, gold hairline */}
              <span
                className="font-serif text-4xl sm:text-5xl font-light leading-none text-[#C9A227]/30 group-hover:text-[#C9A227]/60 transition-colors duration-400 select-none"
                aria-hidden="true"
              >
                {num}
              </span>

              {/* Icon in circle outline */}
              <div className="w-10 h-10 rounded-full border border-[#C9A227]/50 group-hover:border-[#C9A227] flex items-center justify-center transition-colors duration-300 flex-shrink-0">
                <Icon
                  className="w-4 h-4 text-[#C9A227]/70 group-hover:text-[#C9A227] transition-colors duration-300"
                  strokeWidth={1.25}
                />
              </div>

              {/* Title + Description */}
              <div className="space-y-3">
                <h3 className="font-serif font-normal text-base sm:text-lg text-[#F5F1E8] tracking-wide group-hover:text-white transition-colors duration-300">
                  {title}
                </h3>
                <p className="font-sans font-light text-xs sm:text-[13px] text-[#D8CDBB]/70 leading-relaxed group-hover:text-[#D8CDBB] transition-colors duration-300">
                  {desc}
                </p>
              </div>

              {/* Bottom gold accent line — appears on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>

        {/* ── BOTTOM HAIRLINE ── */}
        <div className="h-[1px] w-full bg-white/10" />

      </div>
    </section>
  );
}
