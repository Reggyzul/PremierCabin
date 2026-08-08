import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface CoreBusinessSectionProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function CoreBusinessSection({ onOpenContactModal }: CoreBusinessSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].coreBusiness;

  const businessList = [
    {
      data: t.p01,
      image: SITE_IMAGES.propertyDev,
    },
    {
      data: t.p02,
      image: SITE_IMAGES.hospitalityMgmt,
    },
    {
      data: t.p03,
      image: SITE_IMAGES.investmentHQ,
    },
    {
      data: t.p04,
      image: SITE_IMAGES.travelLifestyle,
    },
  ];

  return (
    <section id="business" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* SECTION HEADER */}
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
        </div>

        {/* FOUR COLUMNS ASYMMETRIC GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-stretch">
          {businessList.map((item) => (
            <div
              key={item.data.num}
              onClick={() => onOpenContactModal && onOpenContactModal(item.data.title)}
              className="group cursor-pointer flex flex-col justify-between space-y-6 pt-4 border-t border-white/15 hover:border-[#C9A227] transition-all duration-500"
            >
              <div className="space-y-6">
                {/* NUMBER & ARROW */}
                <div className="flex items-center justify-between">
                  <span className="font-serif text-2xl text-[#C9A227] font-semibold">
                    {item.data.num}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/50 group-hover:text-[#C9A227] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>

                {/* ELEGANT PHOTOGRAPH */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-none filter brightness-90 group-hover:brightness-100 transition-all duration-500">
                  <img
                    src={item.image}
                    alt={`Premier Cabin Internasional - ${item.data.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* TITLE & DESCRIPTION */}
                <div className="space-y-2">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F5F1E8] group-hover:text-[#C9A227] transition-colors leading-tight">
                    {item.data.title}
                  </h3>
                  <p className="font-sans font-light text-xs text-[#D8CDBB] leading-relaxed">
                    {item.data.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
