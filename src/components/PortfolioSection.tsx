import React, { useState } from 'react';
import { GALERI_ITEMS } from '../data/companyData';
import { Images, Eye } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Heavy Equipment', 'Dealer Gesits', 'Rental Mobil', 'Pabrik Baterai', 'General Contractor', 'Manpower Supplier'];

  const filteredItems = activeCategory === 'Semua'
    ? GALERI_ITEMS
    : GALERI_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E63946]/10 text-[#E63946] text-xs font-black uppercase tracking-wider mb-3">
              <Images className="w-4 h-4 text-[#E63946]" />
              <span>DOKUMENTASI & PORTOFOLIO OPERASIONAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] font-sans tracking-tight uppercase">
              Galeri Proyek & Unit PT PREMIER CABIN INTERNASIONAL
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm mt-4 md:mt-0 font-medium leading-relaxed">
            Dokumentasi langsung kesiapan armada alat berat, dealer motor listrik Gesits, lini perakitan baterai, serta proyek konstruksi di lapangan.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer uppercase tracking-wider ${
                activeCategory === cat
                  ? 'bg-[#0B1B3D] text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/30 to-transparent" />

                {/* Category Badge Top */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#E63946] text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
                    {item.category}
                  </span>
                </div>

                {/* Info Overlay Bottom */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-extrabold font-sans leading-tight">
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
