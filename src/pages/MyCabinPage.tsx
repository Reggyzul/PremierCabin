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
} from 'lucide-react';

interface MyCabinPageProps {
  onOpenContactModal?: (serviceName?: string) => void;
}

export default function MyCabinPage({ onOpenContactModal }: MyCabinPageProps) {
  const { language } = useLanguage();
  const [selectedTab, setSelectedTab] = useState<'all' | 'lembang' | 'garut'>('all');

  const handleOpenWA = (text: string) => {
    const waNumber = COMPANY_DATA.contact.waNumber;
    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(text)}`, '_blank');
  };

  const cabinTypes = [
    {
      id: 'standard',
      title: 'STANDARD CABIN',
      size: '25 m²',
      capacity: '2 - 4 Guests (1 Queen Bed / Twin Bed)',
      badge: 'STAYCATION FAVORITE',
      description: 'Simple, private, and comfortable. Ideal for couples or small families looking for a quiet nature getaway.',
      features: ['En-suite Bathroom', 'Mountain / Forest View', 'High-Speed Wi-Fi', 'Private Terrace'],
      image: SITE_IMAGES.cabinExterior,
    },
    {
      id: 'cosmo',
      title: 'COSMO CABIN',
      size: '40 m²',
      capacity: '4 - 6 Guests (2 Bed / Family Room)',
      badge: 'FAMILY CHOICE',
      description: 'Panoramic, spacious, and cozy with loft design. Perfect for family staycations with panoramic wilderness views.',
      features: ['Spacious Living Room', 'Panoramic Glass Windows', 'Mini Bar & Coffee Corner', 'Outdoor Seating Area'],
      image: SITE_IMAGES.cabinInterior,
    },
    {
      id: 'premium',
      title: 'PREMIUM CABIN',
      size: '60 m²',
      capacity: '6 - 10 Guests (Multiple Beds / Suite)',
      badge: 'LUXURY EXECUTIVE',
      description: 'Spacious, luxurious Scandinavian architecture for large families, executive retreats, or group gatherings.',
      features: ['Full Living Room', 'Mini Kitchen & Bar', 'Luxury Modern Bathroom', 'Outdoor Balcony & Private Fire Pit'],
      image: SITE_IMAGES.scandiAFrameCabin,
    },
  ];

  const facilities = [
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-[#D4AF37]" />,
      title: 'My Cabin Resto',
      desc: 'Open nature dining serving gourmet dishes with panoramic pine forest views.',
    },
    {
      icon: <Flame className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Fire Pit & BBQ Lounge',
      desc: 'Warm evening bonfire gathering spot for families, friends, and corporate groups.',
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#D4AF37]" />,
      title: 'Outdoor Lounge & Event Space',
      desc: 'Scenic open-air venue ideal for MICE, intimate outdoor weddings, and retreats.',
    },
    {
      icon: <Wifi className="w-5 h-5 text-[#D4AF37]" />,
      title: 'High-Speed Wi-Fi & Parking',
      desc: 'Seamless connectivity throughout the sanctuary with dedicated parking spaces.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />,
      title: '24/7 Security & Concierge',
      desc: 'Round-the-clock white-glove hospitality management for ultimate peace of mind.',
    },
  ];

  const activities = [
    { title: 'Hiking & Forest Walk', desc: 'Guided nature trails through pine forests.', image: SITE_IMAGES.cabinMorning },
    { title: 'Night Bonfire & BBQ Party', desc: 'Cosy evening fireside gatherings under the stars.', image: SITE_IMAGES.restoSaungSare },
    { title: 'Cycling & Nature Trail', desc: 'Scenic mountain biking & walking paths.', image: SITE_IMAGES.travelLifestyle },
    { title: 'Family Photo Spots', desc: 'Iconic Scandinavian architecture & forest backdrop.', image: SITE_IMAGES.saungSareHero },
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
      <div className="bg-[#111B15]/90 border-b border-[#D4AF37]/20 backdrop-blur-md pt-24 pb-4 px-6 sm:px-12 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <Trees className="w-5 h-5 text-[#D4AF37]" />
            <div>
              <span className="font-serif font-bold text-lg text-white tracking-wide block leading-none">
                MY CABIN
              </span>
              <span className="text-[9px] font-sans tracking-[0.3em] text-[#D4AF37] uppercase font-medium">
                ESCAPE TO NATURE • PROSPECTUS
              </span>
            </div>
          </div>

          {/* NAV JUMP LINKS */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-sans tracking-widest text-[#EBE8DF]">
            <a href="#about" className="hover:text-[#D4AF37] transition-colors">PHILOSOPHY</a>
            <a href="#cabins" className="hover:text-[#D4AF37] transition-colors">THE CABINS</a>
            <a href="#facilities" className="hover:text-[#D4AF37] transition-colors">FACILITIES</a>
            <a href="#investment" className="hover:text-[#D4AF37] transition-colors">INVESTMENT</a>
            <a href="#garut-sph" className="hover:text-[#D4AF37] transition-colors">GARUT LAND SPH</a>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            <a
              href="#investment"
              className="border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1712] text-[10px] sm:text-xs font-sans font-semibold uppercase tracking-[0.2em] px-4 py-2 transition-all cursor-pointer"
            >
              Prospectus
            </a>
            <button
              onClick={() => handleOpenWA('Halo Concierge MY CABIN Indonesia, saya ingin reservasi staycation / konsultasi investasi.')}
              className="bg-[#D4AF37] hover:bg-white text-[#0D1712] text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] px-5 py-2 transition-all shadow-lg cursor-pointer"
            >
              Book A Stay
            </button>
          </div>

        </div>
      </div>


      {/* ── 1. HERO SECTION ── */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden py-20 bg-[#0D1712]">
        
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.scandiAFrameCabin}
            alt="My Cabin Scandinavian Sanctuary"
            className="w-full h-full object-cover object-center filter brightness-[0.7] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#0D1712]/50 to-[#0D1712] z-10" />
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center space-y-6 pt-8">
          
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#F8F6F0]">
              SCANDINAVIAN CABIN & VILLATEL INVESTMENT
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]">
            RETREAT ELEGAN.<br />
            <span className="italic text-[#D4AF37] font-light">INVESTASI CERDAS.</span>
          </h1>

          <p className="font-sans font-light text-sm sm:text-lg text-[#EBE8DF] max-w-3xl mx-auto leading-relaxed tracking-wide">
            Experience Nature in Premium Comfort — A Private Sanctuary in Lembang & Garut.
          </p>

          {/* DUAL CTA BUTTONS */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cabins"
              className="w-full sm:w-auto bg-[#D4AF37] hover:bg-white text-[#0D1712] font-sans font-bold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all shadow-2xl cursor-pointer text-center"
            >
              Jelajahi Cabin & Staycation
            </a>
            <a
              href="#investment"
              className="w-full sm:w-auto border border-[#D4AF37] hover:bg-[#D4AF37]/10 text-[#D4AF37] font-sans font-semibold text-xs uppercase tracking-[0.25em] px-8 py-4 transition-all backdrop-blur-md cursor-pointer text-center"
            >
              Peluang Investasi Villatel
            </a>
          </div>

          {/* TRUST BADGES BAR */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-xs font-sans text-[#EBE8DF]/90">
            <div className="flex items-center justify-center gap-2.5 bg-black/40 backdrop-blur-sm p-3 border border-white/10">
              <Trees className="w-4 h-4 text-[#D4AF37]" />
              <span>Nature Surrounding</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-black/40 backdrop-blur-sm p-3 border border-white/10">
              <Bed className="w-4 h-4 text-[#D4AF37]" />
              <span>Premium Accommodation</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-black/40 backdrop-blur-sm p-3 border border-white/10">
              <UtensilsCrossed className="w-4 h-4 text-[#D4AF37]" />
              <span>Fine Nature Dining</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 bg-black/40 backdrop-blur-sm p-3 border border-white/10">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>24/7 Security & Hospitality</span>
            </div>
          </div>

        </div>
      </section>


      {/* ── 2. BRAND PHILOSOPHY & CONCEPT ── */}
      <section id="about" className="py-24 bg-[#111B15] text-[#F8F6F0] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* LEFT: TEXT */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#D4AF37]" />
                <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                  BRAND PHILOSOPHY
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl text-white leading-tight">
                Harmoni Alam,<br />
                <span className="italic text-[#D4AF37] font-light">Kenyamanan Abadi.</span>
              </h2>

              <p className="font-sans font-light text-sm sm:text-base text-[#EBE8DF]/90 leading-relaxed">
                My Cabin Indonesia menghadirkan pengalaman beristirahat yang menyatu dengan alam, melepaskan penat, dan menghabiskan waktu berkualitas bersama orang tersayang. Menggabungkan arsitektur kayu khas Scandinavia dengan kemewahan fasilitas modern, kami menghadirkan konsep akomodasi sekaligus peluang investasi properti jangka panjang yang transparan dan bernilai tinggi.
              </p>

              {/* LOCATION HIGHLIGHT CARDS */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="p-6 bg-[#0D1712] border border-[#D4AF37]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                    <span className="font-serif font-bold text-base text-white">Lembang, Jawa Barat</span>
                  </div>
                  <p className="text-xs text-[#EBE8DF]/70 font-light leading-relaxed">
                    Serene pine forest, misty morning, & lake view atmosphere.
                  </p>
                </div>

                <div className="p-6 bg-[#0D1712] border border-[#D4AF37]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#D4AF37]">
                    <MapPin className="w-4 h-4" />
                    <span className="font-serif font-bold text-base text-white">Cibatu, Garut, Jawa Barat</span>
                  </div>
                  <p className="text-xs text-[#EBE8DF]/70 font-light leading-relaxed">
                    Eco-tourism mountain panorama & prime development land.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE */}
            <div className="lg:col-span-5 relative aspect-[4/5] overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
              <img
                src={SITE_IMAGES.travelLifestyle}
                alt="Scandinavian Lifestyle Sanctuary"
                className="w-full h-full object-cover filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D1712] via-transparent to-transparent flex items-end p-8">
                <p className="font-serif italic text-lg text-[#F8F6F0]">
                  "Designed for the way people want to live and invest today."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ── 3. ACCOMMODATION / CABIN TYPES ── */}
      <section id="cabins" className="py-24 bg-[#0D1712] text-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                STAYCATION COLLECTION
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Tipe Kabin & Akomodasi
            </h2>
            <p className="font-sans font-light text-sm sm:text-base text-[#EBE8DF]/80">
              Desain hangat, panorama alami, dan privasi penuh untuk kebutuhan istirahat Anda.
            </p>
          </div>

          {/* 3 CABIN CARDS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            {cabinTypes.map((cabin) => (
              <div
                key={cabin.id}
                className="bg-[#111B15] border border-white/10 hover:border-[#D4AF37] transition-all duration-500 flex flex-col justify-between group overflow-hidden"
              >
                <div>
                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={cabin.image}
                      alt={cabin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D1712] font-sans text-[9px] font-bold uppercase tracking-widest px-3 py-1">
                      {cabin.badge}
                    </span>
                    <span className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md text-[#D4AF37] font-serif text-xs font-bold px-3 py-1 border border-[#D4AF37]/40">
                      {cabin.size}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="font-serif font-bold text-2xl text-white group-hover:text-[#D4AF37] transition-colors">
                        {cabin.title}
                      </h3>
                      <p className="text-xs text-[#D4AF37] font-sans pt-1 font-medium">
                        {cabin.capacity}
                      </p>
                    </div>

                    <p className="font-sans font-light text-xs text-[#EBE8DF]/80 leading-relaxed">
                      {cabin.description}
                    </p>

                    <div className="pt-2 border-t border-white/10 space-y-2">
                      <span className="text-[10px] font-sans uppercase tracking-widest text-[#D4AF37] font-semibold block">
                        Kelebihan & Fasilitas:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#EBE8DF]/70 font-light">
                        {cabin.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* BOOK BUTTON */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => handleOpenWA(`Halo MY CABIN Indonesia, saya berminat reservasi unit *${cabin.title}* (${cabin.size}). Mohon informasi ketersediaan tanggal.`)}
                    className="w-full bg-[#D4AF37]/10 hover:bg-[#D4AF37] text-[#D4AF37] hover:text-[#0D1712] border border-[#D4AF37] text-xs font-sans uppercase font-bold tracking-[0.2em] py-3.5 transition-all cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <span>Pesan {cabin.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 4. FACILITIES & ACTIVITIES ── */}
      <section id="facilities" className="py-24 bg-[#111B15] text-[#F8F6F0] border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#D4AF37]" />
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
                GUEST EXPERIENCE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Fasilitas & Aktivitas Alam
            </h2>
          </div>

          {/* FACILITIES GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {facilities.map((fac, idx) => (
              <div key={idx} className="p-6 bg-[#0D1712] border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full border border-[#D4AF37]/50 flex items-center justify-center bg-[#D4AF37]/10">
                  {fac.icon}
                </div>
                <h3 className="font-serif font-bold text-base text-white">{fac.title}</h3>
                <p className="text-xs text-[#EBE8DF]/70 font-light leading-relaxed">{fac.desc}</p>
              </div>
            ))}
          </div>

          {/* ACTIVITIES VISUAL GRID */}
          <div className="space-y-6 pt-6">
            <h3 className="font-serif text-2xl text-[#D4AF37]">Ragam Aktivitas Menyenangkan</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activities.map((act, idx) => (
                <div key={idx} className="group relative aspect-[4/3] overflow-hidden border border-white/10">
                  <img src={act.image} alt={act.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-6">
                    <h4 className="font-serif font-bold text-lg text-white">{act.title}</h4>
                    <p className="text-xs text-[#EBE8DF]/80 font-light">{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* ── 5. VILLATEL INVESTMENT & PROSPECTUS ── */}
      <section id="investment" className="py-24 bg-[#0D1712] text-[#F8F6F0] relative overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16 relative z-10">
          
          {/* INVESTMENT HEADER */}
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

          {/* 6 INVESTMENT HIGHLIGHT METRICS */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investmentHighlights.map((item, idx) => (
              <div key={idx} className="bg-[#111B15] border border-[#D4AF37]/40 p-6 space-y-3 hover:border-[#D4AF37] transition-colors">
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

          {/* PROSPECTUS DOWNLOAD / INVESTOR ACTION */}
          <div className="p-8 bg-[#111B15] border border-[#D4AF37]/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl text-white">Tertarik Menjadi Mitra Investasi Villatel?</h3>
              <p className="text-xs text-[#EBE8DF]/80 font-sans">
                Unduh Prospectus resmi atau jadwalkan diskusi tatap muka bersama tim Investor Relations kami.
              </p>
            </div>
            <button
              onClick={() => handleOpenWA('Halo Tim Investor Relations MY CABIN Indonesia, saya ingin meminta PDF Prospectus Investasi Villatel & informasi skema kemitraan.')}
              className="bg-[#D4AF37] hover:bg-white text-[#0D1712] text-xs font-sans font-bold uppercase tracking-[0.25em] px-8 py-4 transition-all shadow-xl cursor-pointer shrink-0"
            >
              Request Prospectus PDF (WhatsApp)
            </button>
          </div>

        </div>
      </section>


      {/* ── 6. GARUT LAND SPH FEATURE ── */}
      <section id="garut-sph" className="py-24 bg-[#111B15] text-[#F8F6F0] border-t border-b border-white/5">
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

            {/* RIGHT: SPH METRIC CARD */}
            <div className="lg:col-span-6 bg-[#0D1712] border-2 border-[#D4AF37] p-8 space-y-6 shadow-2xl relative">
              
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

              <div className="p-3 bg-[#111B15] text-[10px] text-[#EBE8DF]/60 text-center font-light border border-white/5">
                Dikelola secara transparan di bawah payung hukum JBI World Holding Company.
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ── 7. BOOKING & INVESTMENT FLOW ── */}
      <section className="py-24 bg-[#0D1712] text-[#F8F6F0]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              SIMPLE USER FLOW
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white">
              Alur Pemesanan & Investasi
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Pilih Kabin / Skema', desc: 'Tentukan tipe kabin staycation atau opsi kemitraan villatel.' },
              { num: '02', title: 'Tanggal / Site Visit', desc: 'Pilih jadwal menginap atau survey lokasi lahan Lembang & Garut.' },
              { num: '03', title: 'Konsultasi Direct', desc: 'Hubungi tim Concierge & Investor Relations via WhatsApp.' },
              { num: '04', title: 'Konfirmasi & Enjoy', desc: 'Terima voucher menginap atau kontrak penawaran investasi resmi.' },
            ].map((step, idx) => (
              <div key={idx} className="p-6 bg-[#111B15] border border-white/10 space-y-3 relative">
                <span className="font-serif text-4xl text-[#D4AF37]/40 font-bold block">{step.num}</span>
                <h3 className="font-serif text-lg font-bold text-white">{step.title}</h3>
                <p className="text-xs text-[#EBE8DF]/70 font-light">{step.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ── 8. FOOTER ATTRIBUTION & BRAND CREDENTIALS ── */}
      <footer className="py-16 bg-[#0A0F0D] text-[#F8F6F0] border-t border-[#D4AF37]/30">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-8 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="font-serif text-2xl font-bold text-white block">MY CABIN INDONESIA</span>
              <span className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#D4AF37]">
                ESCAPE TO NATURE • VILLATEL & HOSPITALITY
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleOpenWA('Halo Concierge MY CABIN, saya ingin menanyakan info staycation.')}
                className="bg-[#D4AF37] hover:bg-white text-[#0D1712] text-xs font-sans font-bold uppercase tracking-widest px-6 py-3 transition-all cursor-pointer"
              >
                Chat WhatsApp
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#EBE8DF]/60 font-light gap-4">
            <p>© {new Date().getFullYear()} MY CABIN INDONESIA. Supported by <strong className="text-[#D4AF37]">MY HOLIDAY</strong> (Empowering Lifestyle Travel & Investment).</p>
            <p className="tracking-widest uppercase text-[#D4AF37] font-semibold">POWERED BY JBI WORLD HOLDING COMPANY</p>
          </div>

        </div>
      </footer>


      {/* ── 9. MOBILE STICKY BOTTOM ACTION BAR ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0D1712]/95 border-t border-[#D4AF37]/40 backdrop-blur-lg p-3 grid grid-cols-2 gap-3 shadow-2xl">
        <button
          onClick={() => handleOpenWA('Halo Concierge MY CABIN Indonesia, saya ingin reservasi kamar / staycation.')}
          className="bg-[#D4AF37] text-[#0D1712] text-[10px] font-sans font-bold uppercase tracking-wider py-3 flex items-center justify-center gap-1.5 shadow-lg"
        >
          <Bed className="w-3.5 h-3.5" />
          <span>Book Stay</span>
        </button>

        <button
          onClick={() => handleOpenWA('Halo Tim Investor Relations MY CABIN Indonesia, saya ingin konsultasi Investasi Villatel & Lahan Garut.')}
          className="border border-[#D4AF37] text-[#D4AF37] bg-[#111B15] text-[10px] font-sans font-bold uppercase tracking-wider py-3 flex items-center justify-center gap-1.5"
        >
          <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Investor Chat</span>
        </button>
      </div>

    </div>
  );
}
