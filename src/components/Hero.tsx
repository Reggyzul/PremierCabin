import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import craneBuildingImg from '../assets/hero_crane_bg.png';

interface HeroProps {
  onOpenContact: (inquiryType?: string) => void;
  onOpenEstimator?: () => void;
  onNavigateToProfil?: (subTabId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onNavigateToProfil }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'PT. Premier Cabin Internasional',
      subtitle: 'MEMBANGUN MASA DEPAN DENGAN ISOLASI DAN INTEGRITAS',
      description:
        'Mitra terpercaya industri di Bontang dan Kalimantan Timur dalam penyediaan layanan Isolasi Industri, Piping, Refractory, serta Pekerjaan Sipil & Konstruksi yang profesional, berintegritas, dan berkelanjutan.',
    },
    {
      title: 'Inovasi & Kualitas Konstruksi Terpadu',
      subtitle: 'Komitmen K3L & Zero Accident',
      description:
        'Mitra terpercaya industri manufaktur, pertambangan, pupuk, dan minyak & gas di Indonesia dalam penyediaan layanan isolasi termal & akustik, rental alat berat, serta solusi konstruksi terintegrasi.',
    },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="hero" className="relative pt-24 pb-24 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-r from-[#e7f7ec] via-[#f1f9f3] to-[#ffffff] text-slate-800">
      
      {/* Decorative Floating Green Leaves */}
      <div className="absolute top-6 left-1/3 w-10 h-10 pointer-events-none opacity-80 animate-bounce transition-transform duration-1000">
        <svg viewBox="0 0 24 24" fill="#66bb6a" className="w-full h-full transform -rotate-45">
          <path d="M17,8C8,10 5,16 5,16C5,16 9,15 14,12C19,9 19,4 19,4C19,4 17,6 17,8Z" />
        </svg>
      </div>
      <div className="absolute bottom-16 left-1/4 w-8 h-8 pointer-events-none opacity-70">
        <svg viewBox="0 0 24 24" fill="#4caf50" className="w-full h-full transform rotate-12">
          <path d="M17,8C8,10 5,16 5,16C5,16 9,15 14,12C19,9 19,4 19,4C19,4 17,6 17,8Z" />
        </svg>
      </div>

      {/* Side Navigation Carousel Arrows (< and >) */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#004b87] hover:scale-110 transition-transform cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-8 h-8 stroke-[3]" />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-[#004b87] hover:scale-110 transition-transform cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-8 h-8 stroke-[3]" />
      </button>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {/* Main Heading: PT PREMIER CABIN INTERNASIONAL */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0d2b45] font-montserrat leading-[1.12] tracking-tight">
                  {slide.title}
                </h1>

                {/* Subtitle / Tagline: MEMBANGUN MASA DEPAN DENGAN ISOLASI DAN INTEGRITAS */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#388e3c] font-montserrat tracking-wide py-1 leading-snug">
                  {slide.subtitle}
                </p>

                {/* Paragraph Description */}
                <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Precision Image */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Precision Image Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-md"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={craneBuildingImg}
                  alt="PT PREMIER CABIN INTERNASIONAL Building & Crane"
                  className="w-full h-72 sm:h-80 object-cover object-center hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Leaf graphic over image */}
              <div className="absolute -top-4 right-4 w-12 h-12 pointer-events-none opacity-90">
                <svg viewBox="0 0 24 24" fill="#388e3c" className="w-full h-full">
                  <path d="M17,8C8,10 5,16 5,16C5,16 9,15 14,12C19,9 19,4 19,4C19,4 17,6 17,8Z" />
                </svg>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Bottom-Center Precision Floating Button: Tentang Kami */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center justify-center">
        <button
          onClick={() => {
            if (onNavigateToProfil) {
              onNavigateToProfil('tentang-perusahaan');
            } else {
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="group flex flex-col items-center justify-center gap-1 px-6 py-2 rounded-full bg-white/90 hover:bg-[#0066b2] text-[#0066b2] hover:text-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 backdrop-blur-md cursor-pointer"
        >
          <span className="font-extrabold text-xs sm:text-sm font-montserrat uppercase tracking-wider">
            Tentang Kami
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce group-hover:translate-y-0.5 transition-transform" />
        </button>
      </div>

    </section>
  );
};
