import React from 'react';
import { LEGALITAS_DATA, K3L_POLICIES } from '../data/companyData';
import { FileCheck, ShieldCheck, CheckCircle2, Award, FileText, Download, Leaf, ShieldAlert } from 'lucide-react';

interface InsightsSectionProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="legalitas" className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-slate-200/80">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-white text-xs font-black uppercase tracking-wider mb-3">
              <FileCheck className="w-4 h-4 text-amber-400" />
              <span>LEGALITAS & KEBIJAKAN K3L</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] font-sans tracking-tight uppercase">
              Komitmen Kepatuhan & Keselamatan Kerja
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm mt-4 md:mt-0 font-medium leading-relaxed">
            <strong className="text-[#0B1B3D]">PT PREMIER CABIN INTERNASIONAL</strong> beroperasi dengan legalitas resmi lengkap dan menempatkan keselamatan kerja (K3L) serta mutu layanan sebagai prioritas mutlak di setiap proyek.
          </p>
        </div>

        {/* Kebijakan K3L Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xs font-black text-[#ED1C24] uppercase tracking-widest mb-1">Standar Keselamatan (K3L)</h3>
            <p className="text-2xl font-black text-[#0B1B3D] font-sans">
              4 Kebijakan Utama Kualitas & Keselamatan Kerja
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {K3L_POLICIES.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-slate-200 shadow-sm hover:shadow-xl hover:border-[#E63946] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E63946] flex items-center justify-center mb-5 group-hover:bg-[#E63946] group-hover:text-white transition-colors duration-300 shadow-md">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-black text-[#0B1B3D] font-sans mb-2 group-hover:text-[#E63946] transition-colors leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B1B3D]">
                  <span className="text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Terverifikasi
                  </span>
                  <Award className="w-4 h-4 text-amber-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Legalitas Grid Cards */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xs font-black text-[#0B1B3D] uppercase tracking-widest mb-1">Dokumen Resmi</h3>
            <p className="text-2xl font-black text-[#0B1B3D] font-sans">
              Berkas Legalitas & Perizinan Berusaha PT PREMIER CABIN INTERNASIONAL
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEGALITAS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#0B1B3D] text-amber-400 flex items-center justify-center mb-4 font-black text-xs">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-black text-[#0B1B3D] font-sans mb-1 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-xs font-medium leading-relaxed">
                    {item.detail}
                  </p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Dokumen Sah & Aktif</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Big Legal Callout Banner */}
        <div className="bg-gradient-to-r from-[#0B1B3D] to-[#162A45] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border-l-8 border-[#E63946]">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#E63946] text-white flex items-center justify-center shrink-0 shadow-lg">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-xl font-black font-sans uppercase text-white">
                Butuh Dokumen Legalitas & Company Profile PDF?
              </h3>
              <p className="text-slate-200 text-xs sm:text-sm mt-1 font-medium">
                Tim administrasi kami siap mengirimkan berkas kualifikasi resmi, SIA/SIO, & sertifikat K3 PT PREMIER CABIN INTERNASIONAL.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenContact('Permintaan Dokumen Legalitas & Profile PDF')}
            className="bg-[#E63946] hover:bg-[#D90429] text-white px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Minta Dokumen Legalitas</span>
          </button>
        </div>

      </div>
    </section>
  );
};


