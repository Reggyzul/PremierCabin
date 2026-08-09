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

            // Travel distance required to pull the sheet completely up: 1.4 * windowHeight
            const maxScroll = windowHeight * 1.4;
            const rawProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);

            // Smooth cubic easing for luxurious slow movement
            const progress = 1 - Math.pow(1 - rawProgress, 2.5);

            // Sheet rises from translateY(100%) to translateY(0%)
            const translateY = (1 - progress) * 100;
            sheet.style.transform = `translate3d(0, ${translateY}%, 0)`;

            // Subtle scale & dark vignette transition on Hero
            const scale = 1 + rawProgress * 0.05;
            const opacity = 1 - rawProgress * 0.45;
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

      {/* ── 1. SCROLL SCENE (240vh scene container for slow, smooth sheet reveal) ── */}
      <div style={{ height: '240vh' }} className="relative">

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

        {/* SLOW RISING SHEET (KISAH KAMI / TENTANG KAMI) */}
        <div
          ref={sheetRef}
          className="sticky top-0 z-10 w-full min-h-screen will-change-transform bg-[#0D2820] rounded-t-[36px] sm:rounded-t-[56px] shadow-[0_-30px_90px_rgba(0,0,0,0.9)] border-t border-white/10"
          style={{ transform: 'translate3d(0, 100%, 0)' }}
        >
          <StoryIntroSection onNavigatePage={onNavigatePage} />
        </div>

      </div>

      {/* ── 2. SUBSEQUENT PAGE SECTIONS ── */}
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
