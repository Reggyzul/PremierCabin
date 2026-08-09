import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_DATA } from '../data/companyData';
import {
  Trees,
  Bed,
  UtensilsCrossed,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Coins,
  Handshake,
  Clock,
  Gift,
  Flame,
  Wifi,
  Car,
  Compass,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Phone,
  FileText,
  Building2,
  Calendar,
  ChevronRight,
  UserCheck,
  FileCheck,
  Star,
  Coffee,
  Waves,
  Mountain,
  Tag,
  Check,
  Award,
} from 'lucide-react';

interface MyCabinPageProps {
  onOpenContactModal?: (serviceName?: string) => void;
}

export default function MyCabinPage({ onOpenContactModal }: MyCabinPageProps) {
  const { language } = useLanguage();

  const handleOpenWA = (text: string) => {
    const waNumber = COMPANY_DATA.contact.waNumber;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const premiereUnitTypes = [
    {
      id: 'tipe-45',
      title: 'TIPE 45',
      subtitle: 'Ideal for Couples & Small Families',
      price: 'Rp 598 Jt-an',
      specs: [
        '1 Kamar Tidur',
        '1 Kamar Mandi',
        'Ruang Tamu Nyaman',
        'Teras Santai',
      ],
      badge: 'POPULAR CHOICE',
      image: SITE_IMAGES.cabinExterior,
    },
    {
      id: 'tipe-60',
      title: 'TIPE 60',
      subtitle: 'Spacious Loft & Family Sanctuary',
      price: 'Rp 798 Jt-an',
      specs: [
        '2 Kamar Tidur',
        '1 Kamar Mandi',
        'Ruang Tamu Luas',
        'Teras & Balkon View',
      ],
      badge: 'RECOMMENDED',
      image: SITE_IMAGES.scandiAFrameCabin,
    },
    {
      id: 'tipe-90',
      title: 'TIPE 90',
      subtitle: 'Executive Suite & Large Family Haven',
      price: 'Rp 1,198 M-an',
      specs: [
        '3 Kamar Tidur',
        '2 Kamar Mandi',
        'Ruang Tamu & Dapur',
        'Teras, Balkon & Deck',
      ],
      badge: 'PREMIUM EXECUTIVE',
      image: SITE_IMAGES.cabinInterior,
    },
  ];

  const interiorGallery = [
    { title: 'RUANG TAMU NYAMAN', desc: 'Desain kaca panoramic dengan pemandangan pegunungan.', image: SITE_IMAGES.myCabinLivingRoom },
    { title: 'KAMAR TIDUR ELEGAN', desc: 'Panel kayu hangat & pencahayaan ambient menenangkan.', image: SITE_IMAGES.myCabinBedroom },
    { title: 'DAPUR MODERN', desc: 'Dapur & area makan modern berperalatan lengkap.', image: SITE_IMAGES.myCabinKitchen },
    { title: 'VIEW MENAKJUBKAN', desc: 'Teras terbuka menghadap lembah hutan pinus tropis.', image: SITE_IMAGES.myCabinPanoramicView },
  ];

  const proximityHighlights = [
    { time: '5 MENIT', destination: 'KE HUTAN PINUS', icon: <Trees className="w-5 h-5 text-[#D4AF37]" /> },
    { time: '7 MENIT', destination: 'KE CAFE & RESTO', icon: <Coffee className="w-5 h-5 text-[#D4AF37]" /> },
    { time: '10 MENIT', destination: 'KE SUNGAI', icon: <Waves className="w-5 h-5 text-[#D4AF37]" /> },
    { time: '15 MENIT', destination: 'KE SPOT WISATA', icon: <Mountain className="w-5 h-5 text-[#D4AF37]" /> },
  ];

  const investmentHighlights = [
    {
      icon: <Coins className="w-6 h-6 text-[#D4AF37]" />,
      label: 'ENTRY LEVEL',
      val: 'Mulai Rp150 Juta',
      sub: 'Affordable luxury villatel asset ownership',
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#D4AF37]" />,
      label: 'YIELD GUARANTEE',
      val: '7% Annual Yield',
      sub: 'Guaranteed annual fixed return rate',
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#D4AF37]" />,
      label: 'PROFIT SHARING',
      val: '30% : 30% : 40%',
      sub: 'Investor 30% — Landowner 30% — Operator 40%',
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D4AF37]" />,
      label: 'LONG-TERM CONTRACT',
      val: '10-Year Partnership',
      sub: 'Includes Money-Back Guarantee Scheme',
    },
    {
      icon: <Gift className="w-6 h-6 text-[#D4AF37]" />,
      label: 'EXCLUSIVE PERKS',
      val: 'Free Stay Points',
      sub: 'All-season stay access across all My Cabin units',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#D4AF37]" />,
      label: 'GROWTH POTENTIAL',
      val: 'High Capital Gain',
      sub: 'Limited units available with high occupancy rate',
    },
  ];

  return (
    <div className="bg-[#0D1712] text-[#F8F6F0] min-h-screen text-left selection:bg-[#D4AF37] selection:text-[#0D1712]">

      {/* ── SUB-HEADER PAGE BAR ── */}
      <div className="bg-[#111B15]/95 border-b border-[#D4AF37]/30 backdrop-blur-md pt-24 pb-4 px-6 sm:px-12 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Trees className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <span className="font-serif font-bold text-lg text-white tracking-wide block leading-none">
                MY CABIN PREMIERE
              </span>
              <span className="text-[9px] font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
                WHERE NATURE EMBRACES LUXURY
              </span>
            </div>
          </div>

          {/* NAV JUMP LINKS */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-sans tracking-widest text-[#EBE8DF]">
            <a href="#concept" className="hover:text-[#D4AF37] transition-colors">KONSEP</a>
            <a href="#interior" className="hover:text-[#D4AF37] transition-colors">INTERIOR</a>
            <a href="#units" className="hover:text-[#D4AF37] transition-colors">PILIHAN UNIT</a>
            <a href="#location" className="hover:text-[#D4AF37] transition-colors">LOKASI</a>
            <a href="#promo" className="hover:text-[#D4AF37] transition-colors">PROMO</a>
            <a href="#investment" className="hover:text-[#D4AF37] transition-colors">INVESTASI</a>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleOpenWA('Halo Concierge MY CABIN Premiere, saya berminat informasi brosur & penawaran unit.')}
              className="bg-[#D4AF37] hover:bg-white text-[#0D1712] text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] px-5 py-2 transition-all shadow-lg cursor-pointer"
            >
              Hubungi Kami
            </button>
          </div>

        </div>
      </div>


      {/* ── 1. HERO BANNER — MY CABIN PREMIERE ── */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden py-24 bg-[#0D1712]">
        
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.scandiAFrameCabin}
            alt="My Cabin Premiere - Where Nature Embraces Luxury"
            className="w-full h-full object-cover object-center filter brightness-[0.65] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0D1712]/60 to-[#0D1712] z-10" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-7 pt-6">
          
          {/* BADGE */}
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/50 bg-black/50 backdrop-blur-md px-6 py-2 rounded-full">
            <div className="flex text-[#D4AF37] gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
              ))}
            </div>
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#F8F6F0] font-semibold pl-2">
              PREMIUM CABIN LIVING
            </span>
          </div>

          {/* MAIN BRAND TITLE & TAGLINE */}
          <div className="space-y-3">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.02]">
              MY CABIN <span className="italic text-[#D4AF37] font-light">PREMIERE</span>
            </h1>
            <p className="font-serif italic text-xl sm:text-3xl text-[#D4AF37] font-light tracking-wide">
              Where Nature Embraces Luxury
            </p>
          </div>

          <p className="font-sans font-light text-sm sm:text-lg text-[#EBE8DF] max-w-2xl mx-auto leading-relaxed">
            Lebih dari tempat beristirahat, ini adalah pengalaman hidup yang sesungguhnya.
          </p>

          {/* 4 VALUE PILLARS BAR */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs font-sans text-[#EBE8DF]">
            <div className="flex flex-col items-center justify-center p-4 bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 space-y-2">
              <Trees className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-bold uppercase tracking-wider text-[11px]">Suasana Alam Asri</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 space-y-2">
              <Bed className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-bold uppercase tracking-wider text-[11px]">Desain Modern & Elegan</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-bold uppercase tracking-wider text-[11px]">Aman & Privat 24 Jam</span>
            </div>
            <div className="flex flex-col items-center justify-center p-4 bg-black/50 backdrop-blur-md border border-[#D4AF37]/30 space-y-2">
              <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
              <span className="font-bold uppercase tracking-wider text-[11px]">Investasi Bernilai Tinggi</span>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#units"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-white text-[#0D1712] font-sans font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all shadow-2xl cursor-pointer text-center"
            >
              Lihat Pilihan Unit
            </a>
            <a
              href="#investment"
              className="w-full sm:w-auto border border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#D4AF37] font-sans font-semibold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all backdrop-blur-md cursor-pointer text-center"
            >
              Skema Investasi Villatel
            </a>
          </div>

        </div>
      </section>


      {/* ── 2. CONCEPT: HIDUP SEMPURNA DI TENGAH ALAM ── */}
      <section id="concept" className="py-24 bg-[#111B15] text-[#F8F6F0] border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: TEXT */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#D4AF37]" />
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                  MY CABIN PREMIERE CONCEPT
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                Hidup Sempurna<br />
                <span className="italic text-[#D4AF37] font-light">Di Tengah Alam.</span>
              </h2>

              <p className="font-sans font-light text-base sm:text-lg text-[#EBE8DF]/90 leading-relaxed max-w-2xl">
                My Cabin Premiere dirancang untuk Anda yang menginginkan ketenangan, kenyamanan, dan kemewahan dalam satu harmoni. Dikelilingi pepohonan hijau, udara sejuk, dan pemandangan menakjubkan yang menenangkan jiwa.
              </p>
            </div>

            {/* RIGHT: CIRCLE EMBLEM BADGE */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 h-56 rounded-full border-2 border-[#D4AF37] bg-[#0D1712] shadow-2xl flex flex-col items-center justify-center p-6 text-center space-y-2">
                <Award className="w-8 h-8 text-[#D4AF37]" />
                <span className="font-serif text-xs uppercase tracking-widest text-[#D4AF37] font-bold">
                  INVESTASI TERBAIK
                </span>
                <span className="text-[10px] font-sans text-white/80 uppercase tracking-wider font-light">
                  UNTUK MASA DEPAN
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. INTERIOR GALLERY (4 FEATURES FROM POSTER) ── */}
      <section id="interior" className="py-24 bg-[#0D1712] text-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              PREMIUM INTERIOR & VIEW
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Kemewahan & Kenyamanan Detail
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interiorGallery.map((item, idx) => (
              <div key={idx} className="group bg-[#111B15] border border-white/10 overflow-hidden hover:border-[#D4AF37] transition-all">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                </div>
                <div className="p-5 space-y-1.5 text-center">
                  <h3 className="font-serif font-bold text-base text-[#D4AF37] tracking-wider">
                    {item.title}
                  </h3>
                  <p className="text-xs font-sans text-[#EBE8DF]/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 4. PILIHAN UNIT TERBAIK (TIPE 45, TIPE 60, TIPE 90) ── */}
      <section id="units" className="py-24 bg-[#111B15] text-[#F8F6F0] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                UNIT SELECTION
              </span>
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Pilihan Unit Terbaik
            </h2>
          </div>

          {/* 3 UNIT MATRIX CARDS */}
          <div className="grid md:grid-cols-3 gap-8">
            {premiereUnitTypes.map((unit) => (
              <div
                key={unit.id}
                className="bg-[#0D1712] border-2 border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-2xl relative"
              >
                <div>
                  {/* BADGE */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={unit.image}
                      alt={unit.title}
                      className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D1712] font-sans text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                      {unit.badge}
                    </span>
                  </div>

                  {/* SPECS */}
                  <div className="p-7 space-y-6">
                    <div>
                      <h3 className="font-serif font-bold text-3xl text-white">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-[#D4AF37] font-sans pt-1 font-medium">
                        {unit.subtitle}
                      </p>
                    </div>

                    <div className="space-y-3 border-t border-white/10 pt-4">
                      {unit.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3 text-xs text-[#EBE8DF]">
                          <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* PRICE */}
                    <div className="bg-[#111B15] p-4 border border-[#D4AF37]/40 text-center">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#EBE8DF]/60 block mb-1">
                        Starts From
                      </span>
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#D4AF37]">
                        {unit.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-7 pt-0">
                  <button
                    onClick={() => handleOpenWA(`Halo MY CABIN Premiere, saya ingin menanyakan info ketersediaan & brosur resmi unit *${unit.title}* (${unit.price}).`)}
                    className="w-full bg-[#D4AF37] hover:bg-white text-[#0D1712] text-xs font-sans uppercase font-bold tracking-[0.2em] py-3.5 transition-all cursor-pointer text-center"
                  >
                    Pesan Unit {unit.title}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-[#EBE8DF]/50 font-sans italic pt-2">
            *Harga dapat berubah sewaktu-waktu
          </p>

        </div>
      </section>


      {/* ── 5. LOKASI STRATEGIS & PROMO SPESIAL (GRID FROM POSTER) ── */}
      <section id="location" className="py-24 bg-[#0D1712] text-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* LEFT: LOKASI STRATEGIS (6 COLS) */}
            <div className="lg:col-span-6 space-y-8 bg-[#111B15] p-8 sm:p-10 border border-white/10">
              <div className="space-y-2">
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                  PROXIMITY & ACCESSIBILITY
                </span>
                <h3 className="font-serif text-3xl text-white">
                  Lokasi Strategis
                </h3>
                <p className="text-xs text-[#EBE8DF]/70 font-light">
                  Dekat dengan berbagai destinasi favorit keluarga & wisata alam.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                {proximityHighlights.map((item, idx) => (
                  <div key={idx} className="p-5 bg-[#0D1712] border border-[#D4AF37]/30 text-center space-y-2">
                    <div className="flex justify-center">{item.icon}</div>
                    <div className="font-serif font-bold text-lg text-white">{item.time}</div>
                    <div className="text-[10px] font-sans text-[#D4AF37] uppercase tracking-widest font-semibold">{item.destination}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: PROMO SPESIAL CARD (6 COLS) */}
            <div id="promo" className="lg:col-span-6 bg-[#111B15] p-8 sm:p-10 border-2 border-[#D4AF37] flex flex-col justify-between space-y-8 relative shadow-2xl">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-[#D4AF37] text-[#0D1712] font-sans text-[10px] font-bold uppercase tracking-widest px-4 py-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>PROMO SPESIAL BUYER</span>
                </div>

                <h3 className="font-serif text-4xl sm:text-5xl text-white leading-tight">
                  FREE* <br />
                  <span className="text-[#D4AF37]">BIAYA KPR & BPHTB</span>
                </h3>

                <p className="font-sans text-xs uppercase tracking-widest text-[#EBE8DF]/90 font-medium pt-2">
                  UNTUK PEMBELIAN UNIT TERTENTU
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={() => handleOpenWA('Halo Sales MY CABIN Premiere, saya ingin klaim *PROMO SPESIAL FREE BIAYA KPR & BPHTB*.')}
                  className="w-full bg-[#D4AF37] hover:bg-white text-[#0D1712] text-xs font-sans uppercase font-bold tracking-[0.2em] py-4 transition-all cursor-pointer text-center"
                >
                  Klaim Promo Spesial Sekarang
                </button>

                <p className="text-[10px] text-[#EBE8DF]/50 italic text-center">
                  *Syarat & Ketentuan Berlaku
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 6. SKEMA INVESTASI VILLATEL & YIELD ── */}
      <section id="investment" className="py-24 bg-[#111B15] text-[#F8F6F0] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37] px-4 py-1.5 text-[10px] font-sans font-bold tracking-[0.25em] uppercase text-[#D4AF37]">
              MY CABIN VILLATEL — INVESTASI ALAM & STAYCATION WITH RETURN
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
              Own a piece of paradise.<br />
              <span className="italic text-[#D4AF37] font-light">Invest in nature, stay in comfort.</span>
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-[#EBE8DF]/90 leading-relaxed max-w-3xl">
              Dapatkan pasif income berkelanjutan dari bisnis hospitality yang terus berkembang. Dikelola secara profesional oleh <strong className="text-[#D4AF37]">My Holiday</strong>, didukung penuh oleh <strong className="text-white">JBI World Holding</strong>.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentHighlights.map((item, idx) => (
              <div key={idx} className="bg-[#0D1712] border border-[#D4AF37]/40 p-6 space-y-3 hover:border-[#D4AF37] transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#D4AF37] uppercase">
                    {item.label}
                  </span>
                  {item.icon}
                </div>
                <div className="font-serif text-2xl font-bold text-white">
                  {item.val}
                </div>
                <p className="text-xs font-sans text-[#EBE8DF]/70 font-light leading-relaxed">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 7. GARUT LAND SPH FEATURE ── */}
      <section className="py-24 bg-[#0D1712] text-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: TEXT */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-[10px] font-sans font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/40 px-3 py-1">
                PROJECT DEVELOPMENT • GARUT
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                Surat Penawaran Harga (SPH)<br />
                <span className="italic text-[#D4AF37] font-light">& Pengembangan Lahan</span>
              </h2>

              <div className="flex items-center gap-2 text-sm text-[#D4AF37]">
                <MapPin className="w-4 h-4" />
                <span className="font-bold">Lokasi Proyek: Cibatu, Garut – Jawa Barat</span>
              </div>

              <p className="font-sans font-light text-xs sm:text-sm text-[#EBE8DF]/80 leading-relaxed">
                Pengembangan kawasan eco-tourism & cabin resort tahap awal di Cibatu, Garut. Penawaran resmi kerjasama pembebasan dan kemitraan lahan strategis dengan kepastian hukum transparan.
              </p>

              <button
                onClick={() => handleOpenWA('Halo Bapak Rikzan Qadri Albantani (Project Development MY CABIN), saya berminat mendiskusikan Surat Penawaran Harga (SPH) Lahan Cibatu Garut.')}
                className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-white text-[#0D1712] text-xs font-sans font-bold uppercase tracking-[0.2em] px-7 py-3.5 transition-all shadow-xl cursor-pointer"
              >
                <span>Diskusi Kerjasama Lahan Garut</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT: SPH CARD */}
            <div className="lg:col-span-6 bg-[#111B15] border-2 border-[#D4AF37] p-8 space-y-6 shadow-2xl relative">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="font-serif font-bold text-lg text-[#D4AF37]">RINGKASAN AKUISISI LAHAN GARUT</span>
                <FileCheck className="w-6 h-6 text-[#D4AF37]" />
              </div>

              <div className="space-y-4 text-xs font-sans">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#EBE8DF]/60">Luas Pembelian Tahap Awal:</span>
                  <span className="font-bold text-white">1 Hektare (10.000 m²)</span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#EBE8DF]/60">Nilai Penawaran / m²:</span>
                  <span className="font-bold text-[#D4AF37]">Rp100.000,- / m²</span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#EBE8DF]/60">Total Nilai Transaksi:</span>
                  <span className="font-bold text-xl text-white">Rp1.000.000.000,-</span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#EBE8DF]/60">Skema Pembayaran:</span>
                  <span className="font-bold text-white">Cash Bertahap (Sesuai Kesepakatan)</span>
                </div>

                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-[#EBE8DF]/60">Penanggung Jawab Proyek:</span>
                  <span className="font-bold text-[#D4AF37]">Rikzan Qadri Albantani</span>
                </div>
              </div>

              <div className="p-3 bg-[#0D1712] text-[10px] text-[#EBE8DF]/60 text-center font-light border border-white/5">
                Dikelola secara transparan di bawah payung hukum JBI World Holding Company.
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ── 8. FOOTER CALL TO ACTION BANNER (DIRECT PHONE & TAGLINE FROM POSTER) ── */}
      <footer className="py-20 bg-[#0A0F0D] text-[#F8F6F0] border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-12 text-center sm:text-left">
          
          <div className="p-8 sm:p-12 bg-[#111B15] border border-[#D4AF37]/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3">
              <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-[#D4AF37] block">
                MY CABIN PREMIERE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                HUBUNGI KAMI SEKARANG
              </h3>
              <p className="font-serif italic text-lg text-[#D4AF37] font-light">
                "Tempat istimewa untuk hidup yang lebih bermakna."
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end gap-3">
              <a
                href="https://wa.me/6287744990421"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-white text-[#0D1712] font-sans text-base font-bold tracking-widest px-8 py-4 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                <span>0877 4499 0421</span>
              </a>
              <span className="text-xs text-[#EBE8DF]/60 font-sans">
                www.mycabinpremiere.com
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#EBE8DF]/60 font-light gap-4 pt-4 border-t border-white/10">
            <p>© {new Date().getFullYear()} MY CABIN PREMIERE. Supported by <strong className="text-[#D4AF37]">MY HOLIDAY</strong> (Empowering Lifestyle Travel & Investment).</p>
            <p className="tracking-widest uppercase text-[#D4AF37] font-semibold">POWERED BY JBI WORLD HOLDING COMPANY</p>
          </div>

        </div>
      </footer>


      {/* ── 9. MOBILE STICKY ACTION BAR ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D1712]/95 border-t border-[#D4AF37]/40 backdrop-blur-lg p-3 grid grid-cols-2 gap-3 shadow-2xl">
        <button
          onClick={() => handleOpenWA('Halo Sales MY CABIN Premiere, saya berminat informasi unit & reservasi.')}
          className="bg-[#D4AF37] text-[#0D1712] text-[10px] font-sans font-bold uppercase tracking-wider py-3 flex items-center justify-center gap-1.5 shadow-lg"
        >
          <Bed className="w-3.5 h-3.5" />
          <span>Pesan Unit</span>
        </button>

        <button
          onClick={() => handleOpenWA('Halo Tim Investor Relations MY CABIN Premiere, saya ingin konsultasi promo KPR & Investasi.')}
          className="border border-[#D4AF37] text-[#D4AF37] bg-[#111B15] text-[10px] font-sans font-bold uppercase tracking-wider py-3 flex items-center justify-center gap-1.5"
        >
          <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Chat Investor</span>
        </button>
      </div>

    </div>
  );
}
