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
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const hero = heroRef.current;
          const sheet = sheetRef.current;
          if (hero && sheet) {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // Travel distance required to pull the entire connected sheet slowly up: 0.75 * windowHeight
            const maxScroll = windowHeight * 0.75;
            const rawProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

            // Smooth quad easing for slow, luxurious motion
            const progress = 1 - Math.pow(1 - rawProgress, 2);

            // Sheet rises slowly from translateY(100vh) down to translateY(0px)
            const translateY = (1 - progress) * windowHeight;
            sheet.style.transform = `translate3d(0, ${translateY}px, 0)`;

            // Subtle scale & dark vignette transition on Hero background
            const scale = 1 + rawProgress * 0.04;
            const opacity = 1 - rawProgress * 0.4;
            hero.style.transform = `scale(${scale})`;
            hero.style.opacity = `${opacity}`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative text-left bg-[#0B241C] text-[#F5F1E8] overflow-x-hidden">

      {/* ── 1. PARALLAX SCROLL SCENE (175vh for slow, smooth connected overlay reveal) ── */}
      <div style={{ height: '175vh' }} className="relative">

        {/* STICKY HERO BACKGROUND */}
        <div
          ref={heroRef}
          className="sticky top-0 z-0 h-screen w-full overflow-hidden will-change-transform"
        >
          <HeroSection
            onNavigatePage={onNavigatePage}
            onOpenSaungSare={onOpenSaungSareModal}
          />
        </div>

        {/* UNIFIED PARALLAX RISING SHEET (Contains ALL sections connected in one unbroken container) */}
        <div
          ref={sheetRef}
          className="sticky top-0 z-10 w-full will-change-transform bg-[#0B241C]"
          style={{ transform: 'translate3d(0, 100vh, 0)' }}
        >
          {/* Kisah Kami Sheet Header with Rounded Top & Shadow */}
          <div className="rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-30px_90px_rgba(0,0,0,0.95)] border-t border-white/10 bg-[#0D2820]">
            <StoryIntroSection onNavigatePage={onNavigatePage} />
          </div>

          {/* Connected Page Sections — 100% attached without gaps */}
          <FullWidthImageStorySection />
          <ProjectShowcaseSection onOpenSaungSareModal={onOpenSaungSareModal} />
          <SustainabilitySection />
          <ValuesEditorialSection />
          <BrandStatementSection />
        </div>

      </div>

    </div>
  );
}
