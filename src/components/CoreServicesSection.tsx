import React from 'react';
import { COMPANY_DATA } from '../data/companyData';

interface CoreServicesSectionProps {
  onSelectService?: (title: string) => void;
}

export default function CoreServicesSection({ onSelectService }: CoreServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto text-left">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">Layanan Utama</span>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B3B2B] mt-2">Solusi Integratif Bisnis Kami</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#1B3B2B]/10 text-[#1B3B2B] rounded-xl flex items-center justify-center font-bold text-xl mb-6">01</div>
          <h3 className="font-serif font-bold text-lg text-[#1B3B2B] mb-3">Property Development</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{COMPANY_DATA.services[0].description}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#1B3B2B]/10 text-[#1B3B2B] rounded-xl flex items-center justify-center font-bold text-xl mb-6">02</div>
          <h3 className="font-serif font-bold text-lg text-[#1B3B2B] mb-3">Hospitality Management</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{COMPANY_DATA.services[1].description}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#1B3B2B]/10 text-[#1B3B2B] rounded-xl flex items-center justify-center font-bold text-xl mb-6">03</div>
          <h3 className="font-serif font-bold text-lg text-[#1B3B2B] mb-3">Investment & Partnership</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{COMPANY_DATA.services[2].description}</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-[#1B3B2B]/10 text-[#1B3B2B] rounded-xl flex items-center justify-center font-bold text-xl mb-6">04</div>
          <h3 className="font-serif font-bold text-lg text-[#1B3B2B] mb-3">Travel & Lifestyle</h3>
          <p className="text-gray-600 text-sm leading-relaxed">{COMPANY_DATA.services[3].description}</p>
        </div>
      </div>
    </section>
  );
}
