import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { Service } from '../types';
import { Compass, TrendingUp, ShieldCheck, Bike, Car, BatteryCharging, ArrowRight, Briefcase, CheckCircle2, PhoneCall, Award, Layers, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (service: Service) => void;
  onOpenContact: (inquiryType?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService, onOpenContact }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const currentService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bike': return Bike;
      case 'Car': return Car;
      case 'BatteryCharging': return BatteryCharging;
      case 'Compass': return Compass;
      case 'TrendingUp': return TrendingUp;
      case 'ShieldCheck': return ShieldCheck;
      default: return Briefcase;
    }
  };

  const IconMain = getIcon(currentService.icon);

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-white text-xs font-black uppercase tracking-wider mb-3">
              <Briefcase className="w-4 h-4 text-amber-400" />
              <span>BIDANG USAHA & PORTOFOLIO SEKTOR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] font-sans tracking-tight uppercase">
              Unit Bisnis & Layanan Terintegrasi
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm mt-4 md:mt-0 font-medium leading-relaxed">
            <strong className="text-[#0B1B3D]">PT PREMIER CABIN INTERNASIONAL</strong> mengelola 6 bidang usaha strategis dengan dukungan armada prima, standar K3, dan tim teknis berpengalaman.
          </p>
        </div>

        {/* Interactive Unit Bisnis Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {SERVICES.map((service) => {
            const IconComp = getIcon(service.icon);
            const isSelected = service.id === selectedServiceId;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                className={`p-4 rounded-2xl border-2 text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#0B1B3D] bg-[#0B1B3D] text-white shadow-xl scale-105'
                    : 'border-slate-200 bg-[#F8FAFC] text-slate-700 hover:bg-slate-100 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-[#E63946] text-white' : 'bg-slate-200 text-[#0B1B3D]'}`}>
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded ${isSelected ? 'bg-white/20 text-amber-300' : 'bg-slate-200 text-slate-600'}`}>
                    {service.category}
                  </span>
                </div>
                <h4 className="text-xs font-black line-clamp-2 uppercase font-sans">
                  {service.title.split('(')[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Featured Spotlight Interactive Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-12 gap-8 items-stretch bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border-2 border-slate-200 shadow-2xl"
          >
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-xl min-h-[350px] border border-slate-200 bg-slate-900 group">
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="bg-[#E63946] text-white font-black text-xs uppercase px-3 py-1 rounded-md shadow-md">
                  {currentService.category}
                </span>
                <span className="bg-[#0B1B3D] text-amber-400 font-bold text-xs px-3 py-1 rounded-md border border-amber-400/30">
                  Ready Operations
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Keunggulan Layanan</span>
                </div>
                <h4 className="text-xl font-black font-sans leading-tight">
                  {currentService.impactMetric}
                </h4>
              </div>
            </div>

            {/* Right Specification & Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#0B1B3D] text-white flex items-center justify-center shadow-md">
                    <IconMain className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <span className="text-xs font-black text-[#E63946] uppercase tracking-wider block">
                      SPESIFIKASI SEKTOR
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1B3D] font-sans uppercase leading-tight">
                      {currentService.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed font-medium mt-3">
                  {currentService.fullDesc}
                </p>

                {/* Deliverables List */}
                <div className="mt-6 space-y-2 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-xs font-black text-[#0B1B3D] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#E63946]" />
                    Cakupan Layanan & Pengadaan:
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {currentService.keyDeliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-100">
                        <div className="w-2 h-2 rounded-full bg-[#E63946]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenContact(`Permintaan Penawaran Resmi: ${currentService.title}`)}
                  className="w-full sm:w-auto bg-[#E63946] hover:bg-[#D90429] text-white px-7 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer shine-effect"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Minta Penawaran Harga</span>
                </button>

                <button
                  onClick={() => onSelectService(currentService)}
                  className="w-full sm:w-auto bg-[#0B1B3D] hover:bg-[#162A45] text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Lihat Detail Lengkap</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
