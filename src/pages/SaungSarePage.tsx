import React, { useState } from 'react';
import { SITE_IMAGES } from '../data/assetsData';
import { useLanguage } from '../context/LanguageContext';
import SiteExplorationVideoSection from '../components/SiteExplorationVideoSection';
import {
  Wind,
  Bed,
  UtensilsCrossed,
  Heart,
  ShieldCheck,
  Sparkles,
  TreePine,
  CheckCircle2,
  Phone,
  Instagram,
  Globe,
  MapPin,
  ArrowRight,
  Flame,
  Waves,
  Trees,
  Leaf,
  BadgeCheck,
} from 'lucide-react';

interface SaungSarePageProps {
  onOpenContactModal?: (service?: string) => void;
}

type FacilityTab = 'all' | 'rooms' | 'resto' | 'pool' | 'area' | 'activities';

export default function SaungSarePage({ onOpenContactModal }: SaungSarePageProps) {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<FacilityTab>('all');

  const pillars = [
    {
      icon: <Wind className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Udara Segar' : 'Fresh Air',
      desc: language === 'ID' ? 'Alam asri yang menenangkan.' : 'Serene natural environment.',
    },
    {
      icon: <Bed className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Istirahat Nyaman' : 'Comfortable Rest',
      desc: language === 'ID' ? 'Akomodasi nyaman untuk tidur berkualitas.' : 'Cozy accommodation for quality sleep.',
    },
    {
      icon: <UtensilsCrossed className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Makanan Lezat' : 'Delicious Dining',
      desc: language === 'ID' ? 'Hidangan rumahan yang menyehatkan.' : 'Wholesome home-cooked cuisine.',
    },
    {
      icon: <Heart className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Waktu Berkualitas' : 'Quality Time',
      desc: language === 'ID' ? 'Bersama keluarga, tanpa terburu-buru.' : 'With family, without rushing.',
    },
  ];

  const assurances = [
    { icon: <Leaf className="w-5 h-5" strokeWidth={1.5} />, label: language === 'ID' ? 'Tenang' : 'Serene', desc: language === 'ID' ? 'Tanpa keramaian' : 'Far from the crowd' },
    { icon: <BadgeCheck className="w-5 h-5" strokeWidth={1.5} />, label: language === 'ID' ? 'Nyaman' : 'Comfortable', desc: language === 'ID' ? 'Fasilitas lengkap' : 'Full amenities' },
    { icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />, label: language === 'ID' ? 'Aman' : 'Secure', desc: language === 'ID' ? 'Lingkungan terjaga' : 'Protected area' },
    { icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />, label: language === 'ID' ? 'Bersih' : 'Pristine', desc: language === 'ID' ? 'Standar kebersihan tinggi' : 'High hygiene standards' },
  ];

  const tabs: { id: FacilityTab; label: string }[] = [
    { id: 'all', label: language === 'ID' ? 'Semua' : 'All' },
    { id: 'rooms', label: language === 'ID' ? 'Akomodasi' : 'Rooms' },
    { id: 'resto', label: language === 'ID' ? 'Resto' : 'Dining' },
    { id: 'pool', label: language === 'ID' ? 'Kolam Renang' : 'Pool' },
    { id: 'area', label: language === 'ID' ? 'Area Santai' : 'Lounge' },
    { id: 'activities', label: language === 'ID' ? 'Aktivitas' : 'Activities' },
  ];

  const facilityCards: {
    category: FacilityTab;
    icon: React.ReactNode;
    title: string;
    desc: string;
    image: string;
  }[] = [
    {
      category: 'rooms',
      icon: <Bed className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Akomodasi Nyaman' : 'Comfortable Accommodation',
      desc: language === 'ID' ? 'Kamar dan saung dengan desain hangat dan tenang, dikelilingi panorama pegunungan.' : 'Warm and peaceful wooden rooms & saungs, framed by mountain views.',
      image: SITE_IMAGES.saungSareInterior,
    },
    {
      category: 'resto',
      icon: <UtensilsCrossed className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Resto Saung Sare' : 'Saung Sare Restaurant',
      desc: language === 'ID' ? 'Menu lezat, sehat, dan menggugah selera, disajikan dengan pemandangan alam.' : 'Delicious, healthy, and savory local cuisine served with a view.',
      image: SITE_IMAGES.restoSaungSare,
    },
    {
      category: 'pool',
      icon: <Waves className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Kolam Renang Infinity' : 'Infinity Swimming Pool',
      desc: language === 'ID' ? 'Bersih, luas, dan dikelilingi pemandangan hijau perbukitan Cisarua.' : 'Clean, spacious, overlooking the green hills of Cisarua.',
      image: SITE_IMAGES.saungSarePool,
    },
    {
      category: 'area',
      icon: <Trees className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Area Santai & Taman' : 'Relaxation Lawn & Gazebo',
      desc: language === 'ID' ? 'Gazebo, taman, hammock, dan banyak spot istirahat untuk melepas penat.' : 'Gazebos, lawns, hammocks, and quiet nooks to unwind.',
      image: SITE_IMAGES.cabinExterior,
    },
    {
      category: 'activities',
      icon: <Flame className="w-5 h-5 text-[#C9A227]" strokeWidth={1.5} />,
      title: language === 'ID' ? 'Aktivitas Relaksasi' : 'Relaxation Activities',
      desc: language === 'ID' ? 'Api unggun, yoga, bersepeda, membaca, dan lainnya untuk waktu berkualitas.' : 'Bonfires, yoga, cycling, reading & stargazing for quality time.',
      image: SITE_IMAGES.cabinMorning,
    },
  ];

  const visibleFacilities =
    activeTab === 'all' ? facilityCards : facilityCards.filter((c) => c.category === activeTab);

  return (
    <div className="bg-[#0B241C] text-[#F5F1E8] min-h-screen text-left">

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[92vh] sm:h-screen min-h-[620px] flex items-end overflow-hidden">
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <img
            src={SITE_IMAGES.saungSareHero}
            alt="Saung Sare Rest Destination Cisarua"
            className="w-full h-full object-cover object-center scale-105"
          />
          {/* MULTI-LAYER EDITORIAL GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-[#0B241C] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B241C] via-black/10 to-transparent z-10" />
        </div>

        {/* HERO CONTENT CONTAINER */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 pb-16 sm:pb-24 pt-32">
          <div className="max-w-3xl space-y-7">

            {/* BRAND MOTIF BADGE & TAGLINE */}
            <div className="inline-flex items-center gap-2.5 border border-[#C9A227]/50 bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full">
              <TreePine className="w-3.5 h-3.5 text-[#C9A227]" strokeWidth={1.5} />
              <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#F5F1E8]">
                Saung Sare Rest Destination
              </span>
            </div>


            {/* MAIN HEADLINE — MULIH KA ALAM */}
            <div className="space-y-4">
              <h1 className="font-serif font-light text-6xl sm:text-7xl md:text-[6.5rem] text-[#F5F1E8] tracking-tight leading-[0.95] drop-shadow-2xl">
                Mulih<br />
                <span className="text-[#C9A227]">Ka Alam.</span>
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-[#D8CDBB] font-light">
                {language === 'ID'
                  ? 'Kembali ke alam. Kembali ke diri.'
                  : 'Return to nature. Return to yourself.'}
              </p>
            </div>

            {/* SLOGAN SUBTEXT */}
            <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB]/80 max-w-xl leading-relaxed tracking-wide">
              {language === 'ID'
                ? 'Saung Sare hadir sebagai ruang untuk berhenti sejenak — melepas penat, menghirup alam, dan kembali bersama orang-orang yang berarti.'
                : 'Saung Sare is a space to pause — to rest, breathe in nature, and return to the people who matter most.'}
            </p>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button
                onClick={() => onOpenContactModal && onOpenContactModal('Reservasi Saung Sare Rest Destination')}
                className="w-full sm:w-auto border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white hover:border-white font-sans text-xs font-semibold uppercase tracking-[0.25em] px-8 py-4 transition-all shadow-xl cursor-pointer text-center"
              >
                {language === 'ID' ? 'Pesan Sekarang' : 'Book Now'}
              </button>

              <a
                href="#welcome"
                className="w-full sm:w-auto border border-white/30 hover:border-white/70 hover:bg-white/5 text-white font-sans text-xs font-semibold uppercase tracking-[0.25em] px-8 py-4 transition-all cursor-pointer backdrop-blur-sm text-center"
              >
                {language === 'ID' ? 'Lihat Fasilitas' : 'Explore Amenities'}
              </a>
            </div>
          </div>
        </div>

        {/* MAGER BADGE — bottom-right circular motif, mirrors the brochure */}
        <div className="hidden md:flex absolute z-20 bottom-10 right-10 lg:right-16 w-32 h-32 rounded-full border border-[#C9A227] bg-[#0B241C]/80 backdrop-blur-md flex-col items-center justify-center text-center p-4 shadow-2xl">
          <span className="font-serif italic text-xl text-[#C9A227] leading-none">Mager</span>
          <span className="font-sans text-[8px] uppercase tracking-[0.15em] text-white font-semibold mt-2 leading-tight">
            {language === 'ID' ? 'Itu boleh di Saung Sare!' : 'Is welcome here!'}
          </span>
        </div>
      </section>

      {/* 2. WELCOME SECTION (FILOSOFI & 4 PILAR UTAMA) */}
      <section id="welcome" className="py-24 sm:py-32 bg-[#0B241C] text-[#F5F1E8] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: FILOSOFI & 4 IKON (7 COLS) */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C9A227]" />
                  <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                    Saung Sare
                  </span>
                </div>
                <h2 className="font-serif font-normal text-4xl sm:text-5xl text-[#F5F1E8] leading-[1.1]">
                  {language === 'ID'
                    ? 'Tempat terbaik untuk mengisi ulang energi Anda.'
                    : 'The best place to recharge your energy.'}
                </h2>
                <p className="font-sans font-light text-sm sm:text-base text-[#D8CDBB]/90 leading-relaxed pt-1">
                  {language === 'ID'
                    ? 'Di sini, tidak ada agenda padat. Tidak ada terburu-buru. Hanya Anda, waktu, dan ketenangan di tengah bentang alam tropis yang segar.'
                    : 'Here, there is no packed agenda. No rushing. Only you, time, and stillness amid fresh tropical scenery.'}
                </p>
              </div>

              {/* 4 IKON PILLARS GRID */}
              <div className="grid grid-cols-2 gap-px bg-white/[0.06] border border-white/[0.06]">
                {pillars.map((item, idx) => (
                  <div key={idx} className="p-6 sm:p-7 bg-[#0B241C] space-y-3 hover:bg-white/[0.03] transition-colors">
                    <div className="p-2.5 border border-[#C9A227]/25 w-fit rounded-full">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-lg text-white pt-1">{item.title}</h4>
                    <p className="font-sans text-xs text-[#D8CDBB]/80 font-light leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT COLUMN: HIGHLIGHT QUOTE CARD (5 COLS) */}
            <div className="lg:col-span-5">
              <div className="h-full bg-gradient-to-b from-white/[0.06] to-transparent border border-[#C9A227]/25 p-9 sm:p-11 flex flex-col items-center justify-center text-center space-y-8">
                <Sparkles className="w-6 h-6 text-[#C9A227]" strokeWidth={1.25} />
                <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#F5F1E8] leading-snug">
                  {language === 'ID'
                    ? '"Bukan sekadar menginap, ini waktunya beristirahat."'
                    : '"Not just a stay — this is time to truly rest."'}
                </blockquote>
                <div className="h-px w-10 bg-[#C9A227]/50" />
                <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C9A227]/80">
                  Saung Sare — Mulih Ka Alam
                </p>
              </div>
            </div>

          </div>

          {/* 4 ASSURANCE BADGES BAR */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.08] border-t border-white/[0.08]">
            {assurances.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 bg-[#0B241C] flex flex-col items-center text-center gap-2"
              >
                <span className="text-[#C9A227]">{item.icon}</span>
                <span className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-white pt-1">{item.label}</span>
                <span className="font-sans font-light text-[11px] text-[#D8CDBB]/75">{item.desc}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. FACILITIES & ACCOMMODATION */}
      <section className="py-24 sm:py-32 bg-[#0B241C] text-[#F5F1E8] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-14">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#C9A227]" />
                <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                  {language === 'ID' ? 'Fasilitas Penunjang & Akomodasi' : 'Amenities & Accommodation'}
                </span>
              </div>
              <h2 className="font-serif font-normal text-4xl sm:text-5xl text-[#F5F1E8] leading-[1.1]">
                {language === 'ID' ? 'Suasana nyaman, fasilitas lengkap.' : 'A comfortable setting, complete facilities.'}
              </h2>
            </div>

            {/* FILTER TABS */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-[11px] font-sans font-medium uppercase tracking-[0.15em] border transition-colors cursor-pointer ${
                    activeTab === tab.id
                      ? 'bg-[#C9A227] border-[#C9A227] text-[#0B241C]'
                      : 'border-white/15 text-[#D8CDBB]/80 hover:border-[#C9A227]/60 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* FACILITIES LIST — editorial alternating layout */}
          <div className="divide-y divide-white/[0.08] border-t border-white/[0.08]">
            {visibleFacilities.map((card, idx) => (
              <div
                key={`${card.category}-${idx}`}
                onClick={() => onOpenContactModal && onOpenContactModal(`Tanya Fasilitas: ${card.title}`)}
                className="group cursor-pointer grid sm:grid-cols-12 gap-6 sm:gap-10 items-center py-8 sm:py-10"
              >
                <div className="sm:col-span-5 relative aspect-[16/10] overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                  />
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="p-2 border border-[#C9A227]/30 rounded-full">{card.icon}</span>
                    <span className="text-[10px] font-sans font-semibold tracking-[0.25em] uppercase text-[#C9A227]/80">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-[#C9A227] transition-colors">
                    {card.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-[#D8CDBB]/85 leading-relaxed max-w-lg">{card.desc}</p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-sans font-semibold uppercase tracking-[0.2em] text-white/50 group-hover:text-[#C9A227] transition-colors pt-1">
                    {language === 'ID' ? 'Tanya Detail' : 'Ask for details'}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE PASSAGEWAY (TRANSISI RITME ALAM) */}
      <section className="relative w-full h-[55vh] sm:h-[70vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <img
          src={SITE_IMAGES.fullWidthStory}
          alt="Saung Sare Mountain Landscape"
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.65]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/75 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/40 z-10" />

        <div className="relative z-20 text-center max-w-4xl px-6 space-y-5">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-6 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.35em] uppercase text-[#C9A227]">
              Saung Sare
            </span>
            <span className="h-px w-6 bg-[#C9A227]" />
          </div>
          <h3 className="font-serif font-normal text-3xl sm:text-6xl text-[#F5F1E8] italic leading-tight">
            {language === 'ID' ? '"Hanya Anda, waktu, dan ketenangan."' : '"Only you, time, and stillness."'}
          </h3>
        </div>
      </section>

      {/* 5. SAUNG SARE PASSPORT (MEMBERSHIP SECTION) */}
      <section className="py-24 sm:py-32 bg-[#071913] text-[#F5F1E8] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-20">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT: METALLIC PASSPORT CARD VISUAL (5 COLS) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-md aspect-[1.58/1] bg-gradient-to-br from-[#123C2E] via-[#0B241C] to-[#051A14] rounded-2xl border border-[#C9A227]/60 p-8 shadow-[0_30px_70px_rgba(0,0,0,0.85)] relative overflow-hidden group hover:-rotate-1 hover:scale-[1.02] transition-transform duration-500">
                {/* METALLIC FOIL ACCENTS */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C9A227]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-[#C9A227]/10 rounded-full pointer-events-none" />

                <div className="relative flex justify-between items-start">
                  <div className="flex items-center gap-2">
                    <TreePine className="w-6 h-6 text-[#C9A227]" strokeWidth={1.5} />
                    <span className="font-serif font-semibold text-lg text-white tracking-wide">Saung Sare</span>
                  </div>
                  <span className="text-[9px] font-sans font-bold tracking-[0.25em] text-[#C9A227] uppercase">Passport</span>
                </div>

                <div className="relative mt-14 space-y-1.5">
                  <span className="text-[9px] font-sans uppercase tracking-[0.25em] text-white/40 block">Member ID</span>
                  <span className="font-mono text-sm tracking-[0.2em] text-[#C9A227]">SS-VIP-2026-8888</span>
                </div>

                <div className="relative mt-8 flex justify-between items-end">
                  <span className="font-serif italic text-xs text-white/70">
                    {language === 'ID' ? 'Teman Perjalanan & Istirahat' : 'Rest & Travel Companion'}
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT: PASSPORT BENEFITS LIST (7 COLS) */}
            <div className="lg:col-span-7 space-y-9 text-left">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#C9A227]" />
                  <span className="text-[10px] font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
                    {language === 'ID' ? 'Membership Eksklusif' : 'Exclusive Membership'}
                  </span>
                </div>
                <h2 className="font-serif font-normal text-3xl sm:text-5xl text-[#F5F1E8] leading-[1.1]">
                  {language === 'ID' ? 'Saung Sare Passport: teman perjalanan & istirahat Anda.' : 'Saung Sare Passport: your rest & travel companion.'}
                </h2>
              </div>

              {/* BENEFITS LIST WITH GOLD CHECKMARKS */}
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-5 text-xs sm:text-sm font-sans font-light text-[#D8CDBB]">
                {[
                  language === 'ID' ? 'Akses khusus harga terbaik di Saung Sare dan mitra pilihan kami.' : 'Exclusive access to the best rates at Saung Sare and our partners.',
                  language === 'ID' ? 'Prioritas reservasi di semua properti Saung Sare.' : 'Priority reservations across all Saung Sare properties.',
                  language === 'ID' ? 'Travel Advisor pribadi untuk membantu rencana perjalanan Anda.' : 'A personal Travel Advisor to help plan your journey.',
                  language === 'ID' ? 'Promo eksklusif resto, aktivitas, dan fasilitas penunjang.' : 'Exclusive promos for dining, activities, and amenities.',
                  language === 'ID' ? 'Setiap perjalanan Anda mendukung pembangunan Saung Sare.' : "Every trip you take supports Saung Sare's growth.",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenContactModal && onOpenContactModal('Pendaftaran Saung Sare Passport')}
                  className="inline-flex items-center gap-3 border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white hover:border-white text-xs font-sans font-semibold uppercase tracking-[0.25em] px-8 py-4 transition-all shadow-xl cursor-pointer"
                >
                  <span>{language === 'ID' ? 'Daftar Passport Sekarang' : 'Register for Passport'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* CLOSING SLOGAN BOX */}
          <div className="p-10 sm:p-14 bg-[#0B241C] border border-[#C9A227]/30 text-center space-y-4">
            <h4 className="font-sans font-semibold text-xs sm:text-sm tracking-[0.3em] uppercase text-[#C9A227]">
              {language === 'ID' ? 'Saatnya Beristirahat. Karena Anda Pantas.' : 'Time to Rest. Because You Deserve It.'}
            </h4>
            <p className="font-serif italic text-2xl sm:text-4xl text-[#F5F1E8]">
              {language === 'ID' ? '"Datang. Istirahat. Pulang lebih baik."' : '"Come. Rest. Leave better."'}
            </p>
          </div>

        </div>
      </section>

      {/* 6. COMMITMENT SECTION & FOOTER INFO */}
      <section className="py-20 sm:py-24 bg-[#051A14] text-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-14 text-center">

          <div className="max-w-2xl mx-auto space-y-4">
            <TreePine className="w-7 h-7 text-[#C9A227] mx-auto" strokeWidth={1.25} />
            <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
              {language === 'ID'
                ? 'Setiap kunjungan Anda mendukung alam & masyarakat lokal.'
                : 'Every visit you make supports nature & the local community.'}
            </h3>
            <p className="font-sans font-light text-xs sm:text-sm text-[#D8CDBB]/80">
              {language === 'ID'
                ? 'Saung Sare berkomitmen untuk menjaga alam dan memberdayakan warga sekitar.'
                : 'Saung Sare is committed to preserving nature and empowering the surrounding community.'}
            </p>
          </div>

          {/* SITE EXPLORATION VIDEO LIGHTBOX */}
          <div className="pt-8">
            <SiteExplorationVideoSection />
          </div>

          {/* LOCATION & CONTACT BAR */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs font-sans text-[#D8CDBB]">
            {[
              { icon: <MapPin className="w-4 h-4" strokeWidth={1.5} />, label: 'Cisarua, Bogor - Jawa Barat' },
              { icon: <Phone className="w-4 h-4" strokeWidth={1.5} />, label: '0877 4499 0421 (WhatsApp)', href: 'https://wa.me/6287744990421' },
              { icon: <Instagram className="w-4 h-4" strokeWidth={1.5} />, label: '@saungsare' },
              { icon: <Globe className="w-4 h-4" strokeWidth={1.5} />, label: 'www.saungsare.id' },
            ].map((item, idx) => {
              const inner = (
                <>
                  <span className="text-[#C9A227]">{item.icon}</span>
                  <span>{item.label}</span>
                </>
              );
              return item.href ? (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 py-3 border border-white/10 hover:border-[#C9A227]/50 transition-colors text-[#D8CDBB] hover:text-[#C9A227]"
                >
                  {inner}
                </a>
              ) : (
                <div key={idx} className="flex items-center justify-center gap-2.5 py-3 border border-white/10 hover:border-[#C9A227]/50 transition-colors">
                  {inner}
                </div>
              );
            })}

          </div>

        </div>
      </section>

    </div>
  );
}
