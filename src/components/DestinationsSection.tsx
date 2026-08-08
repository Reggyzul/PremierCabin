import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface DestinationsSectionProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function DestinationsSection({ onOpenContactModal }: DestinationsSectionProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].destinations;

  const destinationTiles = [
    {
      name: t.d1Name,
      desc: t.d1Desc,
      image: SITE_IMAGES.destWestJava,
    },
    {
      name: t.d2Name,
      desc: t.d2Desc,
      image: SITE_IMAGES.destBali,
    },
    {
      name: t.d3Name,
      desc: t.d3Desc,
      image: SITE_IMAGES.destCentralJava,
    },
  ];

  return (
    <section id="destinations" className="py-24 sm:py-36 bg-[#0B241C] text-[#F5F1E8] relative overflow-hidden border-b border-white/5">
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
        </div>

        {/* DESTINATION TILES GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {destinationTiles.map((dest, idx) => (
            <div
              key={idx}
              onClick={() => onOpenContactModal && onOpenContactModal(`Destination Discussion: ${dest.name}`)}
              className="group cursor-pointer relative aspect-[4/5] overflow-hidden rounded-none shadow-2xl filter brightness-95 hover:brightness-100 transition-all duration-700 border border-white/10"
            >
              {/* IMAGE */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-between p-8">
                <div className="flex justify-end">
                  <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-[#C9A227] group-hover:text-[#C9A227] transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-3xl text-white group-hover:text-[#C9A227] transition-colors">
                    {dest.name}
                  </h3>
                  <p className="font-sans font-light text-xs text-[#D8CDBB] leading-relaxed">
                    {dest.desc}
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
