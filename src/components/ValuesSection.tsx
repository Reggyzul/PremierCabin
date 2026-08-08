import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Lightbulb, Globe, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ValuesSection() {
  const valuesList = [
    {
      num: '01',
      title: 'Profesional',
      subtitle: 'Standar Eksekusi Papan Atas',
      icon: <Award className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Dikelola secara profesional oleh jajaran direksi, praktisi properti, dan eksekutif hospitality berdedikasi tinggi dengan rekam jejak teruji.'
    },
    {
      num: '02',
      title: 'Terpercaya',
      subtitle: 'Legalitas & Tata Kelola Transparan',
      icon: <ShieldCheck className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Menjamin kepastian hukum perizinan, sertifikasi hak properti, transparansi laporan dividen investasi, dan kepatuhan penuh pada tata kelola.'
    },
    {
      num: '03',
      title: 'Inovatif',
      subtitle: 'Arsitektur Hijau & Smart Cabin',
      icon: <Lightbulb className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Menerapkan inovasi arsitektur kayu tropis yang ramah lingkungan ("Mulih Ka Alam") dipadukan dengan efisiensi teknologi smart cabin terkini.'
    },
    {
      num: '04',
      title: 'Berorientasi Global',
      subtitle: 'Standar & Jaringan Internasional',
      icon: <Globe className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Memiliki standar estetika, kualitas layanan akomodasi, serta jangkauan jaringan pemasaran dan reservasi berkelas internasional.'
    },
    {
      num: '05',
      title: 'Pelayanan Prima',
      subtitle: 'White-Glove Hospitality 24/7',
      icon: <HeartHandshake className="w-7 h-7 text-[#C5A059]" />,
      desc: 'Menghadirkan pelayanan concierge ramah, responsif, dan siap melayani setiap kebutuhan pemilik properti maupun tamu resor selama 24 jam.'
    }
  ];

  return (
    <section id="values" className="py-20 sm:py-28 bg-[#051A14] text-white relative overflow-hidden border-b border-[#C5A059]/20">
      
      {/* Background Accent Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3" id="values-heading">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#F4EFE6] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>WHY CHOOSE US — 5 PILAR UTAMA</span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase leading-tight">
            Nilai Utama <span className="text-[#C5A059]">Keunggulan Perusahaan</span>
          </h2>

          <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            Prinsip pilar fondasi PT. Premier Cabin Internasional yang menjamin mutu properti dan kepuasan layanan bagi klien & investor.
          </p>
        </div>

        {/* 5 PILAR UTAMA GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {valuesList.map((val, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              key={val.num}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-[#C5A059]/60 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-display font-black text-2xl text-[#C5A059] opacity-80">
                    {val.num}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-[#051A14] border border-[#C5A059]/30 group-hover:scale-110 transition-transform">
                    {val.icon}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-black text-xl text-white group-hover:text-[#C5A059] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-[11px] text-[#C5A059] font-bold mt-0.5">
                    {val.subtitle}
                  </p>
                </div>

                <p className="font-sans text-xs text-slate-300 leading-relaxed font-medium">
                  {val.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 mt-4 flex items-center gap-1.5 text-[10px] font-bold text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Verified Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
