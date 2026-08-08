import React from 'react';
import { X } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { SITE_IMAGES } from '../data/assetsData';

interface SaungSareModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContactWithService?: (serviceName: string) => void;
}

export default function SaungSareModal({ isOpen, onClose, onOpenContactWithService }: SaungSareModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl my-8 text-left border border-[#D4AF37]/30">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/50 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* HERO IMAGE SHOWCASE */}
        <div className="relative h-72 sm:h-96">
          <img
            src={SITE_IMAGES.saungSareHero}
            alt="Saung Sare Master Sanctuary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1B3B2B] via-[#1B3B2B]/40 to-transparent flex items-end p-8 text-white">
            <div>
              <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Featured Pilot Project</span>
              <h2 className="text-3xl sm:text-5xl font-serif font-bold">Saung Sare</h2>
              <p className="text-[#D4AF37] font-serif italic text-lg mt-1">Solusi Hunian & Restorasi Ketenangan Jiwa</p>
            </div>
          </div>
        </div>

        {/* MODAL CONTENT */}
        <div className="p-8 space-y-6 text-[#111817]">
          <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
            <strong>Saung Sare</strong> merupakan mahakarya proyek perdana <strong>{COMPANY_DATA.name}</strong> yang mengusung konsep filosofi <i>"{COMPANY_DATA.tagline}"</i>. Proyek ini memadukan estetika arsitektur kayu tropis yang ramah lingkungan dengan pengelolaan manajemen akomodasi kelas dunia.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-gray-200">
              <h4 className="font-serif font-bold text-base text-[#1B3B2B] mb-1">Desain Menyatu Alam</h4>
              <p className="text-xs text-gray-600">Integrasi ruang terbuka hijau dan lanskap pegunungan yang menenangkan.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-gray-200">
              <h4 className="font-serif font-bold text-base text-[#1B3B2B] mb-1">Hospitality Eksklusif</h4>
              <p className="text-xs text-gray-600">Layanan akomodasi resort & villa standar bintang 5.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-gray-200">
              <h4 className="font-serif font-bold text-base text-[#1B3B2B] mb-1">Peluang Investasi</h4>
              <p className="text-xs text-gray-600">Skema kemitraan transparan dan imbal hasil ROI yang menguntungkan.</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <img src={SITE_IMAGES.saungSareHero} alt="Saung Sare Villa Exterior" className="rounded-xl h-24 w-full object-cover shadow-sm" />
            <img src={SITE_IMAGES.saungSareInterior} alt="Saung Sare Suite Room" className="rounded-xl h-24 w-full object-cover shadow-sm" />
            <img src={SITE_IMAGES.propertyDev} alt="Saung Sare Landscape Aerial View" className="rounded-xl h-24 w-full object-cover shadow-sm" />
          </div>
        </div>

      </div>
    </div>
  );
}
