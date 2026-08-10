import React, { useState } from 'react';
import { Play, X, Compass, MapPin, Sparkles } from 'lucide-react';
import { SITE_IMAGES } from '../data/assetsData';

interface VideoItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  badge: string;
}

export default function SiteExplorationVideoSection() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  const explorationVideos: VideoItem[] = [
    {
      id: 'garut-site',
      title: 'Eksplorasi Lahan Garut (Cibatu)',
      subtitle: 'Survei Kawasan Eco-Tourism 1 Hektare & Panorama Pegunungan',
      location: 'Cibatu, Garut – Jawa Barat',
      thumbnail: SITE_IMAGES.garutEcoLahan,
      videoUrl: '/assets/exploration_garut_site.mp4',
      badge: 'DOKUMENTASI LAHAN GARUT',
    },
    {
      id: 'lembang-site',
      title: 'Eksplorasi Kawasan Lembang',
      subtitle: 'Suasana Hutan Pinus, Udara Sejuk & Akses Danau Alami',
      location: 'Lembang, Bandung Barat',
      thumbnail: SITE_IMAGES.scandiAFrameCabin,
      videoUrl: '/assets/exploration_lembang_site.mp4',
      badge: 'SURVEI LOKASI LEMBANG',
    },
    {
      id: 'sanctuary-masterplan',
      title: 'Kabin & Masterplan Sanctuary',
      subtitle: 'Konsep Arsitektur Scandinavian & Saung Tepi Sungai',
      location: 'Premier Cabin Destination',
      thumbnail: SITE_IMAGES.myCabinPanoramicView,
      videoUrl: '/assets/exploration_sanctuary_site.mp4',
      badge: 'MASTERPLAN ARSITEKTUR',
    },
  ];

  return (
    <section className="py-24 bg-[#0D1712] text-[#F8F6F0] border-t border-b border-[#D4AF37]/30 relative overflow-hidden">
      
      {/* BACKGROUND DECORATIVE GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/40 bg-[#111B15] px-4 py-1.5 rounded-full">
            <Compass className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="text-[10px] font-sans font-bold tracking-[0.3em] uppercase text-[#D4AF37]">
              SITE EXPLORATION VIDEO GALLERY
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">
            Eksplorasi Lapangan & Survei Lokasi
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-[#EBE8DF]/80 max-w-2xl mx-auto leading-relaxed">
            Dokumentasi video langsung dari kawasan lahan Lembang & Garut. Klik kartu untuk menyaksikan peninjauan lokasi secara HD.
          </p>
        </div>

        {/* 3-COLUMN RESPONSIVE GRID (STATE 1: UNCLICKED THUMBNAILS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {explorationVideos.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(item)}
              className="group bg-[#111B15] border border-white/10 overflow-hidden hover:border-[#D4AF37] transition-all duration-500 shadow-2xl cursor-pointer flex flex-col justify-between"
            >
              {/* THUMBNAIL CONTAINER */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* DARK GRADIENT HOVER OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:via-black/20 transition-all duration-500" />

                {/* BADGE */}
                <span className="absolute top-4 left-4 bg-[#D4AF37] text-[#0D1712] font-sans text-[9px] font-bold uppercase tracking-widest px-3 py-1 shadow-md">
                  {item.badge}
                </span>

                {/* CENTERED WARM GOLD PLAY BUTTON (#D4AF37) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-[#0D1712]/80 border-2 border-[#D4AF37] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0D1712] group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-2xl backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-current ml-1" />
                  </div>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[10px] font-sans text-[#D4AF37] uppercase tracking-wider font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-serif font-bold text-xl text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="font-sans font-light text-xs text-[#EBE8DF]/70 leading-relaxed">
                  {item.subtitle}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-sans text-[#D4AF37] font-semibold tracking-wider group-hover:translate-x-1 transition-transform">
                  <span>Putar Video Eksplorasi</span>
                  <Play className="w-3 h-3 fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* STATE 2: FULL-SCREEN VIDEO LIGHTBOX MODAL (POP-UP) */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setActiveVideo(null)}
        >
          {/* MODAL CONTAINER */}
          <div
            className="relative w-full max-w-5xl bg-[#111B15] border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-2xl space-y-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between p-4 sm:p-6 bg-[#0D1712] border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base sm:text-xl text-white">
                    {activeVideo.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs font-sans text-[#D4AF37]">
                    {activeVideo.location}
                  </p>
                </div>
              </div>

              {/* CLOSE BUTTON (X) */}
              <button
                onClick={() => setActiveVideo(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#0D1712] transition-colors flex items-center justify-center cursor-pointer shadow-lg"
                aria-label="Close Video Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* VIDEO PLAYER */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Browser Anda tidak mendukung pemutaran video MP4.
              </video>
            </div>

            {/* MODAL FOOTER */}
            <div className="p-4 sm:p-5 bg-[#0D1712] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-[#EBE8DF]/80">
              <p>{activeVideo.subtitle}</p>
              <button
                onClick={() => setActiveVideo(null)}
                className="border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D1712] text-[10px] uppercase font-bold tracking-widest px-5 py-2 transition-all cursor-pointer"
              >
                Tutup Video
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
