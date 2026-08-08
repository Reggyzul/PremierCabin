import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export default function VisionMissionSection() {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].visionMission;

  const missionList = [t.m1, t.m2, t.m3, t.m4];

  return (
    <section className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        
        {/* EDITORIAL SPLIT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: VISION (6 COLS) */}
          <div className="lg:col-span-6 space-y-6 lg:border-r border-white/10 lg:pr-12">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                {t.visionLabel}
              </span>
            </div>

            <h3 className="font-serif font-normal text-2xl sm:text-4xl text-[#F5F1E8] leading-relaxed italic">
              "{t.visionTitle}"
            </h3>
          </div>

          {/* RIGHT: MISSION (6 COLS) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C9A227]" />
              <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                {t.missionLabel}
              </span>
            </div>

            <ul className="space-y-6 text-xs sm:text-sm font-sans font-light text-[#D8CDBB]">
              {missionList.map((m, idx) => (
                <li key={idx} className="flex items-start gap-4 border-b border-white/10 pb-4">
                  <span className="font-serif text-[#C9A227] font-semibold text-lg">
                    0{idx + 1}
                  </span>
                  <span className="leading-relaxed">{m}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}
