import React, { useState, useEffect } from 'react';
import { Bike, Zap, CheckCircle2, ArrowRight, Phone, Car, Bus, Users, BatteryCharging, Cpu, Recycle, Award } from 'lucide-react';
import dealerGesitsImg from '../assets/dealer_gesits_bontang.png';
import rentalMobilFleetImg from '../assets/rental_mobil_fleet.png';
import ecoEarthImg from '../assets/3d_eco_earth.png';
import pekerjaanKonstruksiImg from '../assets/pekerjaan_konstruksi.png';

interface BidangUsahaPageProps {
  onOpenContact: (inquiryType?: string) => void;
  onNavigateHome: () => void;
  initialTab?: string;
}

export const BidangUsahaPage: React.FC<BidangUsahaPageProps> = ({ onOpenContact, onNavigateHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'dealer-gesits');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
    window.scrollTo(0, 0);
  }, [initialTab]);

  const subNavItems = [
    { id: 'dealer-gesits', label: 'Dealer Bontang Gesits' },
    { id: 'rental-mobil', label: 'Rental Mobil Operasional' },
    { id: 'pabrik-baterai', label: 'Pabrik & Perakitan Baterai EV' },
  ];

  const scrollToSubSection = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">

      {/* 1. Header Hero Page Banner */}
      <div className="relative bg-[#0B1B3D] border-b border-slate-800 py-7 sm:py-9 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none scale-105"
          style={{
            backgroundImage: `url(${pekerjaanKonstruksiImg})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/95 via-[#D90429]/50 to-[#0B1B3D]/95 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans tracking-tight mb-2 drop-shadow-sm">
            {activeTab === 'dealer-gesits'
              ? 'Dealer Bontang Gesits'
              : activeTab === 'rental-mobil'
              ? 'Rental Mobil Operasional'
              : activeTab === 'pabrik-baterai'
              ? 'Pabrik & Perakitan Baterai EV'
              : 'Bidang Usaha'}
          </h1>
          <nav className="flex items-center justify-center space-x-2 text-xs font-bold text-slate-300 font-montserrat">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <span className="text-slate-400">&gt;</span>
            <span className="text-amber-400 uppercase tracking-wider">Bidang Usaha</span>
          </nav>
        </div>
      </div>

      {/* 2. Sub-nav Tab Bar */}
      <div className="sticky top-[56px] sm:top-[60px] z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-4 overflow-x-auto scrollbar-hide py-3">
          {subNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSubSection(item.id)}
              className={`whitespace-nowrap text-xs font-bold tracking-wider font-montserrat py-2 px-4 rounded-lg transition-all cursor-pointer ${
                activeTab === item.id
                  ? 'bg-[#0066b2] text-white shadow-md'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">

        {/* DEALER BONTANG GESITS */}
        {activeTab === 'dealer-gesits' && (
          <section id="dealer-gesits" className="space-y-10 max-w-6xl">
            <div>
              <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                <Bike className="w-4 h-4 text-[#ED1C24]" />
                <span>Dealer Resmi Motor Listrik Gesits Bontang</span>
                <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                Showroom & Pusat Layanan Kendaraan Listrik (EV)
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium font-sans">
                <p>
                  <strong className="text-[#0B1B3D] font-extrabold">PT. Premier Cabin Internasional</strong> bangga menjadi Dealer Resmi Motor Listrik <strong className="text-[#ED1C24]">GESITS</strong> di wilayah Bontang dan sekitarnya. Kami menghadirkan solusi mobilitas masa depan yang ramah lingkungan, efisien, dan bebas emisi (Zero Emission).
                </p>

                <div className="p-5 bg-blue-50/80 rounded-2xl border border-blue-100 space-y-3">
                  <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans uppercase flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#0066b2]" />
                    <span>Layanan Utama Dealer Gesits Bontang:</span>
                  </h4>
                  <ul className="space-y-2.5 text-slate-700 text-xs sm:text-sm font-medium">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Penjualan Unit Gesits G1 & Raya:</strong> Garansi resmi pabrik dan pilihan varian warna modern.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Pengadaan Fleet Operasional Korporasi:</strong> Solusi kendaraan listrik untuk armada perusahaan & instansi pemerintah.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Pusat Servis Resmi & Spareparts OEM:</strong> Teknisi bersertifikat dan jaminan ketersediaan suku cadang asli.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span><strong>Garansi Baterai & Motor Listrik:</strong> Layanan purna jual terjamin untuk kenyamanan berkendara Anda.</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenContact('Konsultasi / Test Drive Gesits')}
                    className="bg-[#ED1C24] hover:bg-[#C8102E] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Minta Penawaran / Jadwalkan Test Drive</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/6281254554817?text=Halo%20Dealer%20Bontang%20Gesits%2C%20saya%20ingin%20bertanya%20mengenai%20unit%20motor%20listrik"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hubungi Sales Dealer WA</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 group bg-white sticky top-36">
                  <img
                    src={dealerGesitsImg}
                    alt="GESITS Dealer Bontang Storefront Showroom"
                    className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#0B1B3D] text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-extrabold font-montserrat uppercase tracking-wider text-amber-400">
                        GESITS Dealer Bontang
                      </p>
                      <p className="text-[11px] text-slate-300">PT. Premier Cabin Internasional</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-600 text-white rounded text-[10px] font-black uppercase">
                      Official Dealer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* RENTAL MOBIL OPERASIONAL */}
        {activeTab === 'rental-mobil' && (
          <section id="rental-mobil" className="space-y-10 max-w-6xl">
            <div>
              <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                <Car className="w-4 h-4 text-[#ED1C24]" />
                <span>Layanan Rental Kendaraan Terpercaya & Fleksibel di Bontang</span>
                <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                Solusi Transportasi Andal untuk Perjalanan Bisnis, Wisata, dan Keluarga dengan Armada Modern Termasuk Mobil Listrik.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium font-sans">
                <p className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm leading-relaxed text-slate-700 font-medium">
                  Kami menyediakan layanan rental kendaraan terlengkap di Bontang untuk memenuhi berbagai kebutuhan mobilitas Anda. Mulai dari kenyamanan berkendara modern dan ramah lingkungan bersama <strong className="text-[#0066b2]">BYD M6 EV</strong>, kepraktisan rombongan sedang dengan <strong className="text-[#0B1B3D]">Mini Bus</strong>, hingga perjalanan grup besar yang aman dan nyaman menggunakan <strong className="text-[#ED1C24]">Bus Pariwisata</strong>. Nikmati armada yang terawat, fleksibilitas sewa (lepas kunci atau dengan pengemudi profesional), serta penawaran harga terbaik.
                </p>

                <div className="space-y-4">
                  <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans uppercase flex items-center gap-2 pt-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    <span>Fitur Utama / Ringkasan Armada:</span>
                  </h4>

                  <div className="grid sm:grid-cols-1 gap-3.5">
                    <div className="p-4 bg-gradient-to-r from-blue-50/90 to-white rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0066b2] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-md">
                        <Zap className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-[#0B1B3D] flex items-center gap-2">
                          <span>BYD M6 EV (Electric Vehicle)</span>
                          <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 text-[10px] rounded font-bold">Mobil Listrik Premium</span>
                        </h5>
                        <p className="text-xs text-slate-600 font-medium mt-1">
                          Nyaman, senyap, modern, dan hemat energi untuk kebutuhan premium & harian.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-slate-50 to-white rounded-2xl border border-slate-200 shadow-sm flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-md">
                        <Users className="w-5 h-5 text-blue-300" />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-[#0B1B3D]">Mini Bus</h5>
                        <p className="text-xs text-slate-600 font-medium mt-1">
                          Luas dan efisien untuk perjalanan dinas, rombongan keluarga, atau perjalanan antar-kota.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-red-50/80 to-white rounded-2xl border border-red-100 shadow-sm flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#ED1C24] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-md">
                        <Bus className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-[#0B1B3D]">Bus Pariwisata / Big Bus</h5>
                        <p className="text-xs text-slate-600 font-medium mt-1">
                          Fasilitas lengkap dan kapasitas besar untuk agenda perusahaan, wisata, maupun acara khusus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenContact('Sewa Mobil / Bus')}
                    className="bg-[#ED1C24] hover:bg-[#C8102E] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Minta Penawaran / Reservasi Mobil</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/6281254554817?text=Halo%20Rental%20Mobil%20Bontang%2C%20saya%20ingin%20bertanya%20mengenai%20sewa%20kendaraan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hubungi Sales Rental WA</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 group bg-white sticky top-36">
                  <img
                    src={rentalMobilFleetImg}
                    alt="Armada Rental Mobil & Bus PT. Premier Cabin Internasional"
                    className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#0B1B3D] text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-extrabold font-montserrat uppercase tracking-wider text-amber-400">
                        Armada Rental Mobil & Bus
                      </p>
                      <p className="text-[11px] text-slate-300">PT. Premier Cabin Internasional</p>
                    </div>
                    <span className="px-2.5 py-1 bg-blue-600 text-white rounded text-[10px] font-black uppercase">
                      Armada Terawat Prima
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* PABRIK & PERAKITAN BATERAI EV */}
        {activeTab === 'pabrik-baterai' && (
          <section id="pabrik-baterai" className="space-y-10 max-w-6xl">
            <div>
              <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                <BatteryCharging className="w-4 h-4 text-[#ED1C24]" />
                <span>Pusat Manufaktur & Inovasi Baterai Motor Listrik Berkualitas Tinggi</span>
                <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                Mendorong Ekosistem Kendaraan Listrik Indonesia Melalui Teknologi Baterai Berdaya Tahan Tinggi, Aman, dan Ramah Lingkungan.
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium font-sans">
                <p className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm leading-relaxed text-slate-700 font-medium">
                  Kami memproduksi dan merakit sistem baterai lithium terkini yang dirancang khusus untuk memenuhi standar performa tinggi kendaraan listrik harian Anda. Dengan standar manufaktur modern, fasilitas pengujian ketat, dan teknologi pengisian daya cepat (<em>fast-charging readiness</em>), pabrik kami siap mendukung kebutuhan industri otomotif listrik di Bontang dan seluruh Indonesia.
                </p>

                <div className="space-y-4">
                  <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans uppercase flex items-center gap-2 pt-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span>Keunggulan Produk & Teknologi Baterai:</span>
                  </h4>

                  <div className="grid sm:grid-cols-1 gap-3.5">
                    <div className="p-5 bg-gradient-to-r from-amber-50/90 to-white rounded-2xl border border-amber-100 shadow-sm flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-md">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-[#0B1B3D] flex items-center gap-2">
                          <span>Daya Tahan Tinggi (High Energy Density)</span>
                        </h5>
                        <p className="text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                          Menjangkau jarak lebih jauh dengan efisiensi energi maksimal. Baterai kami dirancang untuk memberikan performa optimal di setiap perjalanan.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-blue-50/90 to-white rounded-2xl border border-blue-100 shadow-sm flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-[#0066b2] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-md">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-[#0B1B3D] flex items-center gap-2">
                          <span>Keamanan Berlapis (Battery Management System / BMS)</span>
                        </h5>
                        <p className="text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                          Dilengkapi sistem perlindungan pintar terhadap panas berlebih dan konsleting. Teknologi BMS memastikan keamanan maksimal selama penggunaan.
                        </p>
                      </div>
                    </div>

                    <div className="p-5 bg-gradient-to-r from-emerald-50/90 to-white rounded-2xl border border-emerald-100 shadow-sm flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 font-bold shadow-md">
                        <Recycle className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-sm font-extrabold text-[#0B1B3D] flex items-center gap-2">
                          <span>Ramah Lingkungan & Tahan Lama</span>
                        </h5>
                        <p className="text-xs text-slate-600 font-medium mt-1.5 leading-relaxed">
                          Siklus pengisian daya (<em>cycle life</em>) yang panjang dengan komitmen daur ulang material. Mendukung masa depan mobilitas hijau Indonesia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenContact('Konsultasi Baterai EV / Kemitraan')}
                    className="bg-[#ED1C24] hover:bg-[#C8102E] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <span>Minta Penawaran / Kemitraan Baterai</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://wa.me/6281254554817?text=Halo%20PT.%20Harco%20Bontang%20Gesit%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20baterai%20EV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hubungi Tim Baterai WA</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 group bg-white sticky top-36">
                  <img
                    src={ecoEarthImg}
                    alt="Pabrik & Perakitan Baterai EV PT. Premier Cabin Internasional"
                    className="w-full h-80 sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#0B1B3D] text-white flex items-center justify-between">
                    <div>
                      <p className="text-xs font-extrabold font-montserrat uppercase tracking-wider text-amber-400">
                        Pabrik & Perakitan Baterai EV
                      </p>
                      <p className="text-[11px] text-slate-300">PT. Premier Cabin Internasional</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-600 text-white rounded text-[10px] font-black uppercase">
                      Green Energy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
