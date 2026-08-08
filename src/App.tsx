import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SaungSarePage from './pages/SaungSarePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { LanguageProvider } from './context/LanguageContext';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

function MainAppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'saung-sare' | 'services' | 'contact'>('home');
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Pilot Project Saung Sare');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setContactModalOpen(true);
  };

  const handleNavigatePage = (page: 'home' | 'about' | 'saung-sare' | 'services' | 'contact') => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#0B241C] text-[#F5F1E8] selection:bg-[#C9A227] selection:text-[#0B241C] font-sans antialiased">
      
      {/* NAVBAR */}
      <Navbar
        currentPage={currentPage}
        setCurrentPage={handleNavigatePage}
        onOpenContactModal={() => handleOpenContactWithService('General Consultation')}
      />

      {/* MAIN RENDERED PAGE FLOW */}
      <main className="relative z-10">
        {currentPage === 'home' ? (
          <HomePage
            onNavigatePage={handleNavigatePage}
            onOpenSaungSareModal={() => handleNavigatePage('saung-sare')}
            onOpenContactModal={handleOpenContactWithService}
          />
        ) : currentPage === 'about' ? (
          <AboutPage onOpenContactModal={(svc) => handleOpenContactWithService(svc)} />
        ) : currentPage === 'saung-sare' ? (
          <SaungSarePage onOpenContactModal={(svc) => handleOpenContactWithService(svc)} />
        ) : currentPage === 'services' ? (
          <ServicesPage onOpenContactModal={(svc) => handleOpenContactWithService(svc)} />
        ) : (
          <ContactPage />
        )}
      </main>

      {/* FOOTER SECTION */}
      <FooterSection
        onNavigatePage={handleNavigatePage}
        onOpenContactModal={(svc) => handleOpenContactWithService(svc || 'Footer Inquiry')}
      />

      {/* CONTACT POPUP MODAL */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialService={selectedService}
      />

      {/* FLOATING ACTION BUTTON (SCROLL TO TOP) */}
      <div className="fixed bottom-6 right-6 z-40">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={scrollToTop}
              className="w-11 h-11 bg-[#0B241C]/90 hover:bg-[#C9A227] text-[#C9A227] hover:text-[#0B241C] border border-[#C9A227]/40 backdrop-blur-md shadow-2xl flex items-center justify-center cursor-pointer transition-all duration-300"
              title="Return to top"
              id="floater-scroll-top"
            >
              <ChevronUp className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppContent />
    </LanguageProvider>
  );
}
