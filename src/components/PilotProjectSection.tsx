import React from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';

interface PilotProjectSectionProps {
  onOpenSaungSareModal?: () => void;
}

export default function PilotProjectSection({ onOpenSaungSareModal }: PilotProjectSectionProps) {
  return (
    <section id="pilot-project" className="py-24 bg-[#1B3B2B] text-white relative overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Featured Pilot Project</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2">Saung Sare</h2>
            <p className="text-[#D4AF37] font-serif italic text-lg mt-1">Solusi Hunian & Restorasi Ketenangan Jiwa</p>
          </div>
          <p className="text-gray-300 max-w-md mt-4 md:mt-0 text-sm">
            Eksplorasi proyek unggulan berbasis arsitektur ramah lingkungan yang mengusung semangat filosofi <i>"{COMPANY_DATA.tagline}"</i>.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group">
            <div
              className="h-48 rounded-xl bg-cover bg-center mb-6 group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${SITE_IMAGES.saungSareHero}')` }}
            />
            <h3 className="font-serif font-bold text-xl text-[#D4AF37] mb-2">Desain Menyatu Alam</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Pengembangan kawasan akomodasi dan cabin dengan konsep integrasi ruang terbuka hijau yang asri dan tenang.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group">
            <div
              className="h-48 rounded-xl bg-cover bg-center mb-6 group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${SITE_IMAGES.saungSareInterior}')` }}
            />
            <h3 className="font-serif font-bold text-xl text-[#D4AF37] mb-2">Hospitality Eksklusif</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Layanan akomodasi resort & villa yang dirancang untuk memberikan standar kenyamanan gaya hidup modern.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#D4AF37]/50 transition-all group">
            <div
              className="h-48 rounded-xl bg-cover bg-center mb-6 group-hover:scale-105 transition-transform duration-300"
              style={{ backgroundImage: `url('${SITE_IMAGES.investmentHQ}')` }}
            />
            <h3 className="font-serif font-bold text-xl text-[#D4AF37] mb-2">Peluang Investasi</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Skema kepemilikan dan kerjasama transparan yang memberikan return menguntungkan bagi para investor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
