import React from 'react';
import HeroSection from '../components/HeroSection';
import StoryIntroSection from '../components/StoryIntroSection';
import FullWidthImageStorySection from '../components/FullWidthImageStorySection';
import SustainabilitySection from '../components/SustainabilitySection';
import ProjectShowcaseSection from '../components/ProjectShowcaseSection';
import ValuesEditorialSection from '../components/ValuesEditorialSection';
import BrandStatementSection from '../components/BrandStatementSection';

interface HomePageProps {
  onNavigatePage: (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => void;
  onOpenSaungSareModal: () => void;
  onOpenContactModal: (serviceName?: string) => void;
}

export default function HomePage({ onNavigatePage, onOpenSaungSareModal, onOpenContactModal }: HomePageProps) {
  return (
    <div className="relative text-left bg-[#0B241C] text-[#F5F1E8] overflow-x-hidden">

      {/* ── 1. STICKY HERO SECTION (Pinned at top background) ── */}
      <div className="sticky top-0 z-0 h-screen w-full overflow-hidden">
        <HeroSection
          onNavigatePage={onNavigatePage}
          onOpenSaungSare={onOpenSaungSareModal}
        />
      </div>

      {/* ── 2. UNIFIED CONTINUOUS SHEET OVERLAY (ALL sections joined seamlessly) ── */}
      {/* As the user scrolls, this single unified sheet slides smoothly over the sticky Hero */}
      <div className="relative z-10 bg-[#0B241C] rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-30px_90px_rgba(0,0,0,0.95)] border-t border-white/10">

        {/* KISAH KAMI / TENTANG KAMI */}
        <StoryIntroSection onNavigatePage={onNavigatePage} />

        {/* FULL-WIDTH CINEMATIC IMAGE STORY */}
        <FullWidthImageStorySection />

        {/* PROJECTS SHOWCASE (SAUNG SARE) */}
        <ProjectShowcaseSection onOpenSaungSareModal={onOpenSaungSareModal} />

        {/* NATURE & SUSTAINABILITY */}
        <SustainabilitySection />

        {/* VALUES (5-COLUMN EDITORIAL GRID) */}
        <ValuesEditorialSection />

        {/* BRAND STATEMENT */}
        <BrandStatementSection />

      </div>

    </div>
  );
}
