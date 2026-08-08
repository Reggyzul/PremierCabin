import React from 'react';
import { Shield, MapPin, Mail, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { HcLogo } from './HcLogo';

interface FooterProps {
  onOpenContact: (inquiryType?: string) => void;
  onOpenEstimator?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer id="kontak" className="bg-[#0B1B3D] text-white pt-12 pb-12 border-t-4 border-[#0066b2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Multi-Column Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-800 text-xs">
          
          {/* Brand & Address Column */}
          <div className="space-y-4 lg:col-span-2 pr-4">
            <div className="flex items-center gap-3">
              <HcLogo className="w-10 h-10 sm:w-11 sm:h-11" />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-wider text-white uppercase font-sans leading-tight">
                  PT. Premier Cabin Internasional
                </span>
                <span className="text-[10px] tracking-widest text-slate-400 uppercase font-bold">
                  Dedikasi dalam Solusi Infrastruktur Terpadu
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed font-medium">
              Perusahaan terkemuka di Kalimantan Timur yang melayani General Contractor, Penyewaan Alat Berat (Heavy Equipment Rental), Manpower Supplier, Dealer Resmi Motor Listrik Gesits Bontang, Sewa Mobil Operasional, dan Manufaktur Baterai EV.
            </p>

            <div className="space-y-2 text-slate-300 pt-1 font-medium">
              <a
                href="https://share.google/D6oTVFSWtZJ5trPlR"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-amber-300 transition-colors group cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="underline decoration-slate-600 underline-offset-4 group-hover:decoration-amber-300">
                  Bontang, Kalimantan Timur, Indonesia (Lihat di Google Maps)
                </span>
              </a>
              <a
                href="https://wa.me/6281254554817"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#E63946] shrink-0" />
                <span className="font-bold">+62 812-5455-4817 (WhatsApp)</span>
              </a>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E63946] shrink-0" />
                <span>contact@premiercabin.co.id / info@cvharco.co.id</span>
              </div>
            </div>
          </div>

          {/* Bidang Usaha */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-amber-400">Bidang Usaha Utama</h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><a href="#dealer-gesits" className="hover:text-white transition-colors">Dealer Bontang Gesits</a></li>
              <li><a href="#rental-mobil" className="hover:text-white transition-colors">Rental Mobil Operasional</a></li>
              <li><a href="#pabrik-baterai" className="hover:text-white transition-colors">Pabrik & Perakitan Baterai EV</a></li>
              <li><a href="#general-contractor" className="hover:text-white transition-colors">General Contractor Sipil</a></li>
              <li><a href="#heavy-equipment" className="hover:text-white transition-colors">Heavy Equipment Rental</a></li>
              <li><a href="#manpower-supplier" className="hover:text-white transition-colors">Manpower Supplier & Operator</a></li>
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black text-white uppercase tracking-wider text-amber-400">Tautan Penting</h4>
            <ul className="space-y-2 text-slate-300 font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">Premier Cabin Internasional</a></li>
              <li><a href="#legalitas" className="hover:text-white transition-colors">Legalitas & Sertifikasi K3</a></li>
              <li><a href="#galeri" className="hover:text-white transition-colors">Galeri Proyek & Unit</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Hubungi Layanan Kontak</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} PT. Premier Cabin Internasional. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Terdaftar Resmi • Standar Mutu K3 Terjamin</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

