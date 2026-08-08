import React from 'react';
import { CLIENT_LOGOS } from '../data/companyData';
import { Building2, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ClientTicker: React.FC = () => {
  // Duplicate for seamless infinite loop
  const duplicatedClients = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-12 bg-[#051026] text-white border-b border-slate-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E63946] text-white flex items-center justify-center font-black text-xs">
              HC
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 block">
                KEMITRAAN STRATEGIS & KORPORASI
              </span>
              <h3 className="text-base font-black text-white uppercase font-sans">
                Dipercaya Oleh Mitra Industri & Instansi Terkemuka
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kualifikasi Penyedia & Kontraktor Terverifikasi</span>
          </div>
        </div>
      </div>

      {/* Infinite Smooth Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#051026] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#051026] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-6 py-2">
          {duplicatedClients.map((client, idx) => (
            <div
              key={idx}
              className="shrink-0 w-64 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10 hover:border-[#E63946] hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="w-8 h-8 rounded-lg bg-[#0B1B3D] text-amber-400 flex items-center justify-center font-bold text-xs group-hover:bg-[#E63946] group-hover:text-white transition-colors">
                  <Building2 className="w-4 h-4" />
                </div>
                <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30">
                  {client.tier}
                </span>
              </div>
              <h4 className="text-sm font-black text-white group-hover:text-amber-400 transition-colors font-sans truncate">
                {client.name}
              </h4>
              <p className="text-[11px] text-slate-400 font-medium">{client.sector}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
