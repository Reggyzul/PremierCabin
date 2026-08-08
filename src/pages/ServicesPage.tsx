import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onOpenContactModal?: (service?: string) => void;
}

export default function ServicesPage({ onOpenContactModal }: ServicesPageProps) {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24 bg-[#0B241C] text-[#F5F1E8] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              OUR BUSINESS
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            {language === 'ID' ? 'Layanan Utama & Kemitraan' : 'Our Business & Services'}
          </h1>

          <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB] leading-relaxed">
            {language === 'ID'
              ? 'Empat pilar layanan terpadu yang memadukan keahlian properti, akomodasi hospitality, dan peluang investasi berkelanjutan.'
              : 'Four integrated service pillars combining property expertise, hospitality management, and sustainable investment opportunities.'}
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {COMPANY_DATA.services.map((svc, idx) => (
            <div
              key={svc.id}
              onClick={() => onOpenContactModal && onOpenContactModal(svc.title)}
              className="bg-white/5 border border-white/10 hover:border-[#C9A227] p-8 transition-all duration-500 flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-4">
                <span className="font-serif text-3xl text-[#C9A227] font-semibold block">0{idx + 1}</span>
                <h3 className="font-serif text-2xl text-[#F5F1E8] group-hover:text-[#C9A227] transition-colors">{svc.title}</h3>
                <p className="text-xs font-semibold text-[#C9A227] uppercase tracking-wider">{svc.subtitle}</p>
                <p className="text-xs text-[#D8CDBB] font-light leading-relaxed">{svc.description}</p>
              </div>

              <div className="pt-6 flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227]">
                <span>{language === 'ID' ? 'Konsultasi Layanan' : 'Inquire Service'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
