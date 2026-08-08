import React, { useState, useEffect } from 'react';
import { ShieldCheck, Target, CheckCircle2, ChevronRight, Building, UserCheck, Truck, HardHat, FileCheck, Image as ImageIcon, Play, Phone } from 'lucide-react';
import { VISI_MISI, MANAGEMENT_TEAM, OPERATIONAL_RESOURCES, LEGALITAS_DATA, GALERI_ITEMS, PILARS } from '../data/companyData';
import tentangPerusahaanImg from '../assets/tentang_perusahaan.png';
import visiMisiImg from '../assets/visi_misi.png';
import layananKamiImg from '../assets/layanan_kami.png';
import pekerjaanKonstruksiImg from '../assets/pekerjaan_konstruksi.png';
import operatorSioImg from '../assets/operator_sio.png';

interface ProfilPageProps {
  onOpenContact: (inquiryType?: string) => void;
  onNavigateHome: () => void;
  initialTab?: string;
}

export const ProfilPage: React.FC<ProfilPageProps> = ({ onOpenContact, onNavigateHome, initialTab }) => {
  const [activeTab, setActiveTab] = useState<string>(initialTab || 'tentang-perusahaan');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
      const el = document.getElementById(initialTab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [initialTab]);

  const subNavItems = [
    { id: 'tentang-perusahaan', label: 'Tentang Perusahaan' },
    { id: 'visi-misi', label: 'Visi & Misi' },
    { id: 'layanan-kami', label: 'Layanan Kami' },
    { id: 'struktur-organisasi', label: 'Struktur Organisasi' },
    { id: 'legalitas', label: 'Legalitas' },
    { id: 'galeri', label: 'Galeri' },
  ];

  const galleryCategories = ['Semua', ...Array.from(new Set(GALERI_ITEMS.map((item) => item.category)))];
  const filteredGallery = selectedCategory === 'Semua' 
    ? GALERI_ITEMS 
    : GALERI_ITEMS.filter((item) => item.category === selectedCategory);

  const scrollToSubSection = (id: string) => {
    setActiveTab(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      
      {/* 1. Header Hero Page Banner with Transparent Professional Background Image */}
      <div className="relative bg-[#0B1B3D] border-b border-slate-800 py-7 sm:py-9 overflow-hidden">
        {/* Transparent Background Construction Crane & Building Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity pointer-events-none scale-105"
          style={{
            backgroundImage: `url(${pekerjaanKonstruksiImg})`
          }}
        />
        {/* Subtle Navy & Red Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1B3D]/95 via-[#D90429]/50 to-[#0B1B3D]/95 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-sans tracking-tight mb-2 drop-shadow-sm">
            {activeTab === 'visi-misi' 
              ? 'Visi & Misi' 
              : activeTab === 'layanan-kami'
              ? 'Layanan Kami'
              : activeTab === 'struktur-organisasi' 
              ? 'Struktur Organisasi' 
              : activeTab === 'legalitas' 
              ? 'Legalitas' 
              : activeTab === 'galeri' 
              ? 'Galeri' 
              : 'Profil'}
          </h1>
          <nav className="flex items-center justify-center space-x-2 text-xs font-bold text-slate-300 font-montserrat">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Beranda
            </button>
            <span className="text-slate-400">&gt;</span>
            <button
              onClick={() => setActiveTab('tentang-perusahaan')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Profil
            </button>
            {activeTab !== 'tentang-perusahaan' && (
              <>
                <span className="text-slate-400">&gt;</span>
                <span className="text-amber-400">
                  {subNavItems.find((i) => i.id === activeTab)?.label}
                </span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* 2. Sub-Navigation Tabs Bar */}
      <div className="sticky top-[73px] z-40 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 sm:space-x-8 overflow-x-auto py-3 no-scrollbar">
            {subNavItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSubSection(item.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-extrabold font-montserrat transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0066b2] text-white shadow-md'
                      : 'text-slate-600 hover:text-[#0066b2] hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* TAB 1: TENTANG PERUSAHAAN */}
        {activeTab === 'tentang-perusahaan' && (
          <section id="tentang-perusahaan" className="space-y-16">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Clean Typography & Exact Copy */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                    <span>Tentang Perusahaan Kami</span>
                    <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                    Solusi Infrastruktur, Otomotif & Energi Terbarukan Terpadu
                  </h2>
                </div>

                {/* Precise Typography Flow directly on page */}
                <div className="space-y-4 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium font-sans">
                  <p>
                    <strong className="text-[#0B1B3D] font-extrabold">PT. Premier Cabin Internasional</strong> adalah perusahaan multi-sektor yang bergerak di bidang <strong>General Contractor, Penyewaan Alat Berat, Manpower Supplier, Dealer Resmi Motor Listrik GESITS, Rental Kendaraan Operasional, serta Pusat Manufaktur & Perakitan Baterai EV</strong>. Kami hadir di Bontang dan Kalimantan Timur untuk menjawab tantangan pembangunan industri modern melalui ekosistem produk dan layanan terpadu yang andal, efisien, dan ramah lingkungan.
                  </p>

                  <p>
                    Dalam lini <strong>Infrastruktur & Konstruksi</strong>, kami menyediakan jasa general contractor, penyewaan armada alat berat bersertifikat (Excavator, Bulldozer, Vibro Roller, Dump Truck), serta penyediaan tenaga kerja terampil dan operator berlisensi SIO aktif. Kami menjamin setiap proyek didukung oleh unit berkinerja prima dan standar keselamatan kerja (K3L) yang ketat.
                  </p>

                  <p>
                    Dalam lini <strong>Mobilitas Hijau & Kendaraan Listrik (EV)</strong>, kami bangga menjadi Dealer Resmi Motor Listrik <strong className="text-[#ED1C24]">GESITS</strong> di Bontang yang menyediakan unit motor listrik, layanan purna jual OEM, serta pengadaan fleet kendaraan listrik korporasi. Selain itu, kami menghadirkan <strong>Pusat Manufaktur & Perakitan Baterai EV</strong> berkualitas tinggi berbasis teknologi BMS untuk mendukung keberlanjutan ekosistem kendaraan listrik di Indonesia.
                  </p>

                  <p>
                    Untuk melengkapi kebutuhan mobilitas bisnis, proyek, dan transportasi rombongan, kami menyediakan layanan <strong>Rental Mobil & Bus Operasional</strong> terlengkap—mulai dari mobil listrik premium <strong className="text-[#0066b2]">BYD M6 EV</strong>, Mini Bus efisien, hingga Bus Pariwisata berfasilitas lengkap dengan opsi lepas kunci atau pengemudi profesional.
                  </p>

                  <p className="pt-2 text-base font-extrabold text-[#ED1C24] font-montserrat italic">
                    Terima kasih atas kepercayaan dan kemitraan strategis yang terjalin bersama PT. Premier Cabin Internasional.
                  </p>
                </div>
              </div>

              {/* Right Column: Clean Operational Photo Collage matching multihanna style */}
              <div className="lg:col-span-5 relative pt-4">
                {/* Decorative Dot Grid Accent */}
                <div className="absolute top-0 -left-4 w-32 h-32 grid grid-cols-6 gap-2 opacity-40 pointer-events-none">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  ))}
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-16/10 group bg-white">
                    <img
                      src={tentangPerusahaanImg}
                      alt="Armada & Proyek PT PREMIER CABIN INTERNASIONAL"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-4/3 group bg-white">
                      <img
                        src={pekerjaanKonstruksiImg}
                        alt="Pekerjaan Konstruksi Lapangan"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 aspect-4/3 group bg-white">
                      <img
                        src={operatorSioImg}
                        alt="Operator & Tenaga Kerja SIO"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* 4 Pilar Keunggulan */}
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <h3 className="text-xs font-black text-[#ED1C24] uppercase tracking-widest mb-1">Empat Pilar Keunggulan</h3>
                <p className="text-2xl sm:text-3xl font-black text-[#0B1B3D] font-sans">
                  Sebagai mitra strategis dalam pengembangan infrastruktur, kami berfokus pada empat pilar keunggulan:
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {PILARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl p-6 border-2 border-slate-200 hover:border-[#ED1C24] transition-all duration-300 shadow-sm hover:shadow-xl group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center group-hover:bg-[#ED1C24] transition-colors font-bold text-sm">
                          0{idx + 1}
                        </div>
                        <span className="text-[10px] font-extrabold text-[#ED1C24] bg-red-50 border border-red-100 px-2 py-0.5 rounded">
                          PILAR
                        </span>
                      </div>

                      <h4 className="text-base font-black text-[#0B1B3D] uppercase group-hover:text-[#ED1C24] transition-colors mb-1 font-sans">
                        {pillar.title}
                      </h4>
                      <span className="text-xs font-bold text-[#ED1C24] block mb-3">
                        {pillar.subtitle}
                      </span>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* TAB 2: VISI & MISI DEDICATED PAGE VIEW */}
        {activeTab === 'visi-misi' && (
          <section id="visi-misi" className="space-y-8 max-w-6xl">
            {/* Category Sub-label & Title */}
            <div>
              <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                <span>Visi & Misi Perusahaan</span>
                <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                Arah Strategis & Komitmen Mutu PT. Premier Cabin Internasional
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Visi & Misi Text */}
              <div className="lg:col-span-7 space-y-8 text-slate-700 text-sm sm:text-[15px] leading-relaxed font-medium font-sans">
                {/* VISI */}
                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] font-sans">
                    Visi Perusahaan
                  </h3>
                  <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                    Menjadi perusahaan penyedia jasa konstruksi, penyewaan alat berat, dan pemasok tenaga kerja yang terdepan serta tepercaya, dengan mengutamakan keandalan armada, kompetensi sumber daya manusia, serta komitmen penuh pada kualitas dan keselamatan kerja.
                  </p>
                </div>

                {/* MISI */}
                <div className="space-y-4 pt-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] font-sans">
                    Misi Perusahaan
                  </h3>

                  <ul className="space-y-3 text-slate-700 text-sm sm:text-[15px] font-medium leading-relaxed pl-1">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                      <span>Menghasilkan pekerjaan konstruksi tepat waktu dengan standar kualitas yang tinggi.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                      <span>Menyediakan unit alat berat yang prima untuk mendukung kelancaran operasional pelanggan.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                      <span>Menyiapkan tenaga kerja yang terampil, profesional, dan berintegritas di lapangan.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                      <span>Membangun kemitraan strategis melalui layanan yang responsif dan kompetitif.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                      <span>Menerapkan standar keselamatan kerja yang ketat untuk mencapai target "Zero Accident".</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: AI Generated Visi & Misi Vision Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 group bg-white">
                  <img
                    src={visiMisiImg}
                    alt="Visi Misi PT PREMIER CABIN INTERNASIONAL"
                    className="w-full h-80 sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#0B1B3D] text-white">
                    <p className="text-xs font-bold font-montserrat uppercase tracking-wider text-center">
                      Komitmen Kualitas & Keberlanjutan Proyek
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 3: LAYANAN KAMI DEDICATED PAGE VIEW */}
        {activeTab === 'layanan-kami' && (
          <section id="layanan-kami" className="space-y-8 max-w-6xl">
            <div>
              <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                <span>Layanan & Spesialisasi Kami</span>
                <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                Solusi Terintegrasi Kebutuhan Proyek Modern
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-10 items-start">
              {/* Left Column: Specialization List */}
              <div className="lg:col-span-7 space-y-4 font-sans">
                <p className="text-slate-700 text-sm sm:text-[15px] font-medium leading-relaxed font-sans mb-4">
                  Kami menyediakan solusi terintegrasi untuk mendukung berbagai kebutuhan proyek infrastruktur, pertambangan, dan konstruksi. Ruang lingkup keahlian kami mencakup:
                </p>

                <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans uppercase tracking-wide">
                  Bidang Spesialisasi:
                </h4>

                <ul className="space-y-4 text-slate-700 text-sm sm:text-[15px] font-medium leading-relaxed pl-1">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">General Contractor:</strong> Pengelolaan proyek konstruksi secara menyeluruh mulai dari tahap persiapan lahan hingga penyelesaian akhir dengan manajemen kualitas yang ketat.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">Heavy Equipment Rental:</strong> Penyediaan jasa sewa alat berat (Excavator, Bulldozer, dll) dengan kondisi unit yang selalu prima guna menjamin efisiensi dan kelancaran operasional di lapangan.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">Manpower Supplier:</strong> Penyaluran tenaga kerja terampil dan operator alat berat yang berpengalaman, bersertifikat, serta memiliki etos kerja tinggi untuk memenuhi kebutuhan SDM proyek Anda.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">Project Support & Maintenance:</strong> Dukungan teknis berkelanjutan dan perawatan unit secara rutin untuk memastikan setiap instrumen kerja berfungsi optimal tanpa hambatan teknis.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">Dealer Bontang Gesits:</strong> Dealer resmi penyedia unit kendaraan listrik (EV) Gesits, suku cadang original, serta pusat layanan purna jual terpercaya di wilayah Bontang dan sekitarnya.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">Rental Mobil:</strong> Penyediaan armada kendaraan operasional (SUV, MPV, serta unit Double Cabin 4x4) dengan kondisi prima untuk kebutuhan transportasi proyek dan manajemen lapangan.
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#0066b2] mt-2 shrink-0" />
                    <div>
                      <strong className="text-[#0B1B3D] font-extrabold">Pabrik Baterai:</strong> Fasilitas perakitan, instalasi daya, dan pasokan boks baterai kendaraan listrik (EV Battery Assembly & Supply) berstandar tinggi.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Right Column: AI Generated Layanan Kami Image Card */}
              <div className="lg:col-span-5 relative">
                <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-slate-200 group bg-white sticky top-36">
                  <img
                    src={layananKamiImg}
                    alt="Layanan & Spesialisasi PT PREMIER CABIN INTERNASIONAL"
                    className="w-full h-80 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-4 bg-[#0B1B3D] text-white">
                    <p className="text-xs font-bold font-montserrat uppercase tracking-wider text-center">
                      Cakupan Operasional & Layanan Terintegrasi
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* TAB 4: STRUKTUR ORGANISASI DEDICATED PAGE VIEW */}
        {activeTab === 'struktur-organisasi' && (
          <section id="struktur-organisasi" className="space-y-10 max-w-4xl mx-auto">
            {/* Header Title */}
            <div>
              <div className="flex items-center gap-2 text-[#0066b2] text-sm font-extrabold uppercase font-montserrat tracking-tight mb-2">
                <span>Struktur Organisasi Perusahaan</span>
                <span className="h-0.5 w-10 bg-[#0066b2] inline-block rounded-full" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1B3D] font-sans leading-tight tracking-tight">
                Jajaran Manajemen & Struktur Kepemimpinan
              </h2>
            </div>

            {/* ORGANIZATIONAL HIERARCHY TREE CHART (Simple & Professional) */}
            <div className="py-6">
              <div className="flex flex-col items-center space-y-6 relative">

                {/* LEVEL 1: DIREKTUR */}
                <div className="w-full max-w-sm relative z-10">
                  <div className="bg-gradient-to-br from-[#0B1B3D] to-[#162A45] text-white p-6 rounded-2xl border-2 border-[#0066b2] shadow-xl text-center space-y-2">
                    <span className="inline-block px-3 py-1 bg-[#0066b2] text-white text-[11px] font-black uppercase tracking-wider rounded font-montserrat shadow-xs">
                      Direktur
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white font-sans tracking-tight">
                      Paimbar Parapat
                    </h3>
                  </div>
                </div>

                {/* Connecting Line 1 -> 2 */}
                <div className="w-0.5 h-6 bg-[#0066b2]" />

                {/* LEVEL 2: WAKIL DIREKTUR */}
                <div className="w-full max-w-sm relative z-10">
                  <div className="bg-white text-slate-800 p-6 rounded-2xl border-2 border-slate-300 shadow-md text-center space-y-2">
                    <span className="inline-block px-3 py-1 bg-blue-50 text-[#0066b2] text-[11px] font-extrabold uppercase tracking-wider rounded font-montserrat border border-blue-100">
                      Wakil Direktur
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1B3D] font-sans tracking-tight">
                      Emmy
                    </h3>
                  </div>
                </div>

                {/* Connecting Line 2 -> Branch */}
                <div className="w-0.5 h-6 bg-[#0066b2]" />

                {/* Horizontal Branch Bar */}
                <div className="w-full max-w-2xl hidden md:block relative">
                  <div className="h-0.5 bg-[#0066b2] w-full" />
                </div>

                {/* LEVEL 3: TIM STAFF (3 COLUMNS) */}
                <div className="grid md:grid-cols-3 gap-5 w-full pt-2">
                  
                  {/* Staff 1 */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0066b2] transition-all text-center space-y-2">
                    <span className="inline-block px-3 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider rounded font-montserrat">
                      Staff
                    </span>
                    <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans leading-snug">
                      Moses Hamongangan Parapat
                    </h4>
                  </div>

                  {/* Staff 2 */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0066b2] transition-all text-center space-y-2">
                    <span className="inline-block px-3 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider rounded font-montserrat">
                      Staff
                    </span>
                    <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans leading-snug">
                      Rebecca Octaviani
                    </h4>
                  </div>

                  {/* Staff 3 */}
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#0066b2] transition-all text-center space-y-2">
                    <span className="inline-block px-3 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-extrabold uppercase tracking-wider rounded font-montserrat">
                      Staff
                    </span>
                    <h4 className="text-base font-extrabold text-[#0B1B3D] font-sans leading-snug">
                      Situmorang Ishak Pernando
                    </h4>
                  </div>

                </div>

              </div>
            </div>

          </section>
        )}

        {/* TAB 5: LEGALITAS DEDICATED PAGE VIEW */}
        {activeTab === 'legalitas' && (
          <section id="legalitas" className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-slate-200 shadow-sm space-y-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0066b2] text-xs font-black uppercase tracking-wider mb-2">
                <FileCheck className="w-4 h-4" />
                <span>LEGALITAS PERUSAHAAN</span>
              </div>
              <h3 className="text-3xl font-black text-[#0B1B3D] font-sans uppercase">
                Dokumen Kepatuhan & Izin Usaha Resmi
              </h3>
              <p className="text-slate-600 text-sm font-medium mt-1">
                PT. Premier Cabin Internasional beroperasi secara legal sesuai peraturan perundang-undangan Republik Indonesia.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {LEGALITAS_DATA.map((doc, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0066b2] flex items-center justify-center mb-4 font-black">
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-black text-[#0B1B3D] mb-2">{doc.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{doc.detail}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Terverifikasi & Aktif</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* TAB 6: GALERI DEDICATED PAGE VIEW */}
        {activeTab === 'galeri' && (
          <section id="galeri" className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-[#0066b2] text-xs font-black uppercase tracking-wider mb-2">
                <ImageIcon className="w-4 h-4" />
                <span>GALERI PERUSAHAAN</span>
              </div>
              <h3 className="text-3xl font-black text-[#0B1B3D] font-sans uppercase">
                Dokumentasi Operasional & Proyek Lapangan
              </h3>
              <p className="text-slate-600 text-sm font-medium mt-1">
                Gambaran visual armada, fasilitas showroom, dan aktivitas pengerjaan proyek PT. Premier Cabin Internasional.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              {galleryCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#0066b2] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredGallery.map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl overflow-hidden shadow-md bg-slate-100 border border-slate-200 hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-video w-full overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#0066b2] px-2.5 py-1 rounded-md mb-2 inline-block shadow-sm">
                        {item.category}
                      </span>
                      <h4 className="text-base font-black leading-snug group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
};
