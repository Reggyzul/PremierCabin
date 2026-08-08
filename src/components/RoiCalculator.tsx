import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle, Truck, HardHat, Car, Bike, ShieldCheck, PhoneCall } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (inquiryType?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [durationMonths, setDurationMonths] = useState<number>(6);
  const [unitCount, setUnitCount] = useState<number>(5);
  const [unitType, setUnitType] = useState<'heavy' | 'gesits' | 'car' | 'manpower'>('heavy');

  const unitDetails = {
    heavy: {
      name: 'Penyewaan Alat Berat (Heavy Equipment)',
      icon: Truck,
      impact: 'Garansi Performa Unit Siaga 24 Jam & Maintenance Rutin',
      desc: 'Excavator, Bulldozer, Crane & Dump Truck kondisi prima berstandar K3.',
      phase1: 'Survei Lapangan & Penentuan Spesifikasi Tonase Unit (Hari 1-2)',
      phase2: 'Mobilisasi Unit Alat Berat ke Lokasi Proyek (Hari 3-5)',
      phase3: 'Pengoperasian Tim Operator Bersertifikat SIO (Berkelanjutan)'
    },
    gesits: {
      name: 'Fleet Motor Listrik Gesits (Bontang)',
      icon: Bike,
      impact: '0% Emisi Karbon & Efisiensi Bahan Bakar Efektif',
      desc: 'Pengadaan unit sepeda motor listrik Gesits G1 & Raya untuk armada korporasi.',
      phase1: 'Konsultasi Kebutuhan Fleet & Demo Unit Gesits (Hari 1)',
      phase2: 'Pengiriman Unit & Instalasi Stasiun Pengisian Daya (Hari 2-3)',
      phase3: 'Layanan Maintenance & Garansi Resmi Dealer (Berkelanjutan)'
    },
    car: {
      name: 'Rental Mobil Operasional & Passenger 4x4',
      icon: Car,
      impact: 'Perawatan Total, Asuransi & Pilihan Driver Terlatih',
      desc: 'Toyota Innova, Avanza, Fortuner & Double Cabin 4x4 Proyek Pertambangan.',
      phase1: 'Pemilihan Jenis Unit & Opsi Sewa Harian/Bulanan (Hari 1)',
      phase2: 'Penyerahan Unit Siap Jalan & Berkas Asuransi (Hari 1-2)',
      phase3: 'Perawatan Berkala & Mobil Pengganti Siaga'
    },
    manpower: {
      name: 'Manpower Supplier & Operator Alat Berat',
      icon: HardHat,
      impact: 'Tenaga Kerja Bersertifikat K3 & Operator Lisensi SIO',
      desc: 'Operator alat berat, teknisi mekanik, dan tenaga ahli sipil berpengalaman.',
      phase1: 'Seleksi & Verifikasi Sertifikasi Kualifikasi SDM (Hari 1-3)',
      phase2: 'Induksi Keselamatan K3 & Penempatan Kerja (Hari 4-5)',
      phase3: 'Pengawasan Kinerja & Administrasi Tenaga Kerja'
    }
  };

  const currentType = unitDetails[unitType];
  const TypeIcon = currentType.icon;

  return (
    <section id="estimator" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-[#0B1B3D] text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-white text-xs font-black uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4 text-amber-400" />
            <span>KALKULATOR ESTIMASI FLEET & ALAT BERAT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight uppercase">
            Estimasi Kebutuhan Armada & Proyek Anda
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 font-medium leading-relaxed">
            Hitung perkiraan jumlah unit, durasi sewa, dan dapatkan penawaran harga terbaik dari <strong className="text-[#0B1B3D]">PT PREMIER CABIN INTERNASIONAL</strong>.
          </p>
        </div>

        {/* Main Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-xl">
          
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-base font-black text-[#0B1B3D] flex items-center gap-2 font-sans border-b border-slate-100 pb-3">
              <Calculator className="w-5 h-5 text-[#E63946]" />
              <span>1. Tentukan Parameter Kebutuhan</span>
            </h3>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                <span>Durasi Sewa / Kontrak</span>
                <span className="text-[#0B1B3D] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md font-extrabold">{durationMonths} Bulan</span>
              </div>
              <input
                type="range"
                min="1"
                max="36"
                step="1"
                value={durationMonths}
                onChange={(e) => setDurationMonths(Number(e.target.value))}
                className="w-full accent-[#E63946] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>1 Bulan</span>
                <span>12 Bulan (1 Thn)</span>
                <span>36 Bulan</span>
              </div>
            </div>

            {/* Unit Count Slider */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-2">
                <span>Perkiraan Jumlah Unit / SDM</span>
                <span className="text-[#0B1B3D] bg-red-50 border border-red-100 px-2.5 py-0.5 rounded-md font-extrabold">{unitCount} Unit</span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                step="1"
                value={unitCount}
                onChange={(e) => setUnitCount(Number(e.target.value))}
                className="w-full accent-[#E63946] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-bold mt-1">
                <span>1 Unit</span>
                <span>25 Unit</span>
                <span>50+ Unit</span>
              </div>
            </div>

            {/* Type Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Pilih Kategori Layanan
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { key: 'heavy', label: 'Alat Berat', icon: Truck },
                  { key: 'gesits', label: 'Dealer Gesits EV', icon: Bike },
                  { key: 'car', label: 'Rental Mobil 4x4', icon: Car },
                  { key: 'manpower', label: 'Manpower / Operator', icon: HardHat }
                ].map((item) => {
                  const ItemIcon = item.icon;
                  const isSelected = unitType === item.key;
                  return (
                    <button
                      key={item.key}
                      onClick={() => setUnitType(item.key as any)}
                      className={`p-3 rounded-xl border text-left text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'border-[#0B1B3D] bg-[#0B1B3D] text-white shadow-md'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <ItemIcon className={`w-4 h-4 shrink-0 ${isSelected ? 'text-[#E63946]' : 'text-[#0B1B3D]'}`} />
                      <span className="truncate">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 bg-gradient-to-br from-[#0B1B3D] via-[#162A45] to-[#0B1B3D] text-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <TypeIcon className="w-5 h-5 text-amber-400" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-200">
                    {currentType.name}
                  </span>
                </div>
                <span className="text-[10px] bg-[#E63946] text-white px-2 py-0.5 rounded font-black">
                  Armada Ready
                </span>
              </div>

              <div className="my-6 p-4 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Ringkasan Kebutuhan Proyek:
                </div>
                <div className="text-2xl font-black text-white font-sans">
                  {unitCount} Unit • {durationMonths} Bulan Sewa
                </div>
                <p className="text-xs text-slate-300 font-medium leading-relaxed pt-1 border-t border-white/10">
                  {currentType.impact}
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-3 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Tahapan Alur Mobilisasi PT PREMIER CABIN INTERNASIONAL:
                </h4>

                <div className="space-y-2 text-xs font-medium">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#E63946] text-white flex items-center justify-center font-bold text-[10px] shrink-0">1</span>
                    <span className="text-slate-200">{currentType.phase1}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[10px] shrink-0">2</span>
                    <span className="text-slate-200">{currentType.phase2}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-[10px] shrink-0">3</span>
                    <span className="text-slate-200">{currentType.phase3}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => onOpenContact(`Permintaan Penawaran Sewa ${unitCount} Unit ${currentType.name} untuk durasi ${durationMonths} bulan`)}
                className="w-full bg-[#E63946] hover:bg-[#D90429] text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Minta Penawaran Resmi PT PREMIER CABIN INTERNASIONAL</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

