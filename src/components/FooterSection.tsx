import React from 'react';
import { MapPin, Mail, Phone, Globe } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface FooterSectionProps {
  onNavigatePage?: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenContactModal?: (service?: string) => void;
}

export default function FooterSection({ onNavigatePage, onOpenContactModal }: FooterSectionProps) {
  const { language, toggleLanguage } = useLanguage();
  const t = TRANSLATIONS[language].footer;

  return (
    <footer className="bg-[#0B241C] text-[#F5F1E8] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* TOP BRAND & NAVIGATION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10">
          
          {/* BRAND COLUMN (5 COLS) */}
          <div className="md:col-span-5 space-y-6">
            <div>
              <span className="font-serif text-2xl sm:text-3xl text-white font-semibold block">
                Premier Cabin
              </span>
              <span className="text-[9px] text-[#C9A227] tracking-[0.35em] uppercase font-sans font-medium">
                INTERNASIONAL
              </span>
            </div>

            <p className="font-sans font-light text-xs text-[#D8CDBB] leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="pt-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-xs font-sans tracking-[0.2em] text-[#C9A227] hover:text-white transition-colors cursor-pointer border border-[#C9A227]/40 px-3 py-1.5 rounded-full"
              >
                <Globe className="w-4 h-4 text-[#C9A227]" />
                <span>Language: {language === 'ID' ? 'Bahasa Indonesia (ID)' : 'English (EN)'}</span>
              </button>
            </div>
          </div>

          {/* QUICK LINKS COLUMN (3 COLS) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-sans font-semibold text-[#C9A227] uppercase tracking-[0.25em]">
              {t.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs font-sans font-light text-[#D8CDBB]">
              <li>
                <button onClick={() => onNavigatePage && onNavigatePage('home')} className="hover:text-[#C9A227] transition-colors cursor-pointer">
                  {TRANSLATIONS[language].nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage && onNavigatePage('about')} className="hover:text-[#C9A227] transition-colors cursor-pointer">
                  {TRANSLATIONS[language].nav.story}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigatePage && onNavigatePage('saung-sare')} className="hover:text-[#C9A227] transition-colors cursor-pointer">
                  {TRANSLATIONS[language].nav.projects}
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContactModal && onOpenContactModal()} className="hover:text-[#C9A227] transition-colors cursor-pointer">
                  {TRANSLATIONS[language].nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* HEADQUARTERS & CONTACT COLUMN (4 COLS) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-sans font-semibold text-[#C9A227] uppercase tracking-[0.25em]">
              {t.addressTitle}
            </h4>
            
            <div className="space-y-3 text-xs font-sans font-light text-[#D8CDBB] leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{COMPANY_DATA.address.fullAddress}</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>{COMPANY_DATA.contact.email}</span>
              </div>

              <a
                href={COMPANY_DATA.contact.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#C9A227] transition-colors group"
              >
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>{COMPANY_DATA.contact.whatsapp} (WhatsApp)</span>
              </a>

            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & HOLDING COMPANY SUBTITLE */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-[10px] sm:text-xs font-sans font-light text-white/50 gap-4">
          <p>© {new Date().getFullYear()} PT. Premier Cabin Internasional. {t.rights}</p>
          <p className="tracking-[0.2em] uppercase font-medium text-[#C9A227]">
            {t.developerSub}
          </p>
        </div>

      </div>
    </footer>
  );
}
