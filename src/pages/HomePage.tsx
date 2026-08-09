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

            // Travel distance: 0.75 * windowHeight — precise & responsive without dead scroll space
            const maxScroll = windowHeight * 0.75;
            const rawProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

            // Smooth quad easing curve
            const progress = 1 - Math.pow(1 - rawProgress, 2);

            // Sheet rises from translateY(100%) to translateY(0%)
            const translateY = (1 - progress) * 100;
            sheet.style.transform = `translate3d(0, ${translateY}%, 0)`;

            // Subtle scale & dark vignette transition on Hero
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

      {/* ── 1. PRECISE SCROLL SCENE (165vh for tight, responsive sheet reveal) ── */}
      <div style={{ height: '165vh' }} className="relative">

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

        {/* PRECISE RISING SHEET (KISAH KAMI / TENTANG KAMI) — h-auto content fitted */}
        <div
          ref={sheetRef}
          className="sticky top-0 z-10 w-full will-change-transform bg-[#0D2820] rounded-t-[32px] sm:rounded-t-[48px] shadow-[0_-25px_80px_rgba(0,0,0,0.9)] border-t border-white/10"
          style={{ transform: 'translate3d(0, 100%, 0)' }}
        >
          <StoryIntroSection onNavigatePage={onNavigatePage} />
        </div>

      </div>

      {/* ── 2. SEAMLESS CONTINUATION OF SECTIONS ── */}
      <div className="relative z-20 bg-[#0B241C]">
        <FullWidthImageStorySection />
        <ProjectShowcaseSection onOpenSaungSareModal={onOpenSaungSareModal} />
        <SustainabilitySection />
        <ValuesEditorialSection />
        <BrandStatementSection />
      </div>

    </div>
  );
}
