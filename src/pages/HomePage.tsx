import React, { useEffect, useRef } from 'react';
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
  const heroRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = heroRef.current;
      const sheet = sheetRef.current;
      if (!hero || !sheet) return;

      const heroHeight = hero.offsetHeight;
      const scrollY = window.scrollY;

      // The sheet starts sliding at 10% of hero height, fully covers at 75%
      const startAt = heroHeight * 0.1;
      const endAt = heroHeight * 0.75;

      const progress = Math.min(Math.max((scrollY - startAt) / (endAt - startAt), 0), 1);

      // Start at translateY(100%) → end at translateY(0%)
      const translateY = (1 - progress) * 100;
      sheet.style.transform = `translateY(${translateY}%)`;

      // Subtle scale on the hero image while sheet rises
      hero.style.transform = `scale(${1 + progress * 0.04})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative text-left bg-[#0B241C] text-[#F5F1E8]">

      {/* ── SCROLL SCENE: Hero (sticky) + Kisah Kami sheet ── */}
      <div style={{ height: '200vh' }} className="relative">

        {/* 1. HERO — sticks to top while we scroll through the 200vh container */}
        <div
          ref={heroRef}
          className="sticky top-0 overflow-hidden will-change-transform"
          style={{ height: '100vh', zIndex: 0 }}
        >
          <HeroSection
            onNavigatePage={onNavigatePage}
            onOpenSaungSare={onOpenSaungSareModal}
          />
        </div>

        {/* 2. KISAH KAMI — rises up as a sheet over the hero */}
        <div
          ref={sheetRef}
          className="absolute inset-x-0 bottom-0 will-change-transform"
          style={{
            zIndex: 10,
            transform: 'translateY(100%)',
            borderRadius: '28px 28px 0 0',
            overflow: 'hidden',
            boxShadow: '0 -16px 80px 0 rgba(0,0,0,0.55)',
          }}
        >
          <StoryIntroSection onNavigatePage={onNavigatePage} />
        </div>

      </div>

      {/* 3. FULL-WIDTH CINEMATIC IMAGE STORY (LIVING WITH THE LAND) */}
      <FullWidthImageStorySection />

      {/* 4. PROJECTS SHOWCASE (PENGEMBANGAN KAMI - SAUNG SARE) */}
      <ProjectShowcaseSection onOpenSaungSareModal={onOpenSaungSareModal} />

      {/* 5. NATURE & SUSTAINABILITY */}
      <SustainabilitySection />

      {/* 10. VALUES (EDITORIAL INTERACTIVE VERTICAL LIST) */}
      <ValuesEditorialSection />

      {/* 12. BRAND STATEMENT */}
      <BrandStatementSection />

    </div>
  );
}
