import React from 'react';
import { Layers, Clock, Users, ShieldCheck, CheckCircle2, Target } from 'lucide-react';
import { PILARS } from '../data/companyData';

export const PillarsSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Clock': return Clock;
      case 'Users': return Users;
      case 'ShieldCheck': return ShieldCheck;
      default: return Target;
    }
  };

  return (
    <section id="pillars" className="py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
      {/* Background Decorative Accent Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#0066b2]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#ED1C24]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066b2]/10 text-[#0066b2] text-xs font-black uppercase tracking-wider font-montserrat">
            <Target className="w-4 h-4 text-[#0066b2]" />
            <span>EMPAT PILAR KEUNGGULAN</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] font-sans tracking-tight uppercase leading-tight">
            4 Pilar Utama Keberhasilan Proyek Anda
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            Sebagai mitra strategis dalam pengembangan infrastruktur dan industri di Kalimantan Timur, kami berfokus pada empat pilar keunggulan utama:
          </p>
        </div>

        {/* 4 Pillars Card Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {PILARS.map((pillar, idx) => {
            const IconComp = getPillarIcon(pillar.icon);
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border-2 border-slate-200/90 hover:border-[#0066b2] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top Corner Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0066b2] via-[#0B1B3D] to-[#ED1C24] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Card Header: Icon & Pillar Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#0B1B3D] text-white flex items-center justify-center group-hover:bg-[#0066b2] group-hover:scale-110 transition-all duration-300 shadow-md">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-black text-[#ED1C24] bg-red-50 border border-red-100 px-3 py-1 rounded-full font-montserrat tracking-wider">
                      PILAR 0{idx + 1}
                    </span>
                  </div>

                  {/* Pillar Titles */}
                  <h3 className="text-base sm:text-lg font-black text-[#0B1B3D] uppercase tracking-wide group-hover:text-[#0066b2] transition-colors font-sans mb-1 leading-snug">
                    {pillar.title}
                  </h3>

                  <span className="text-xs font-extrabold text-[#ED1C24] block mb-3 font-montserrat">
                    {pillar.subtitle}
                  </span>

                  {/* Pillar Description */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                    {pillar.desc}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 font-montserrat">
                  <span>Standar Mutu K3</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
