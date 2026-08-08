import React from 'react';
import { Service } from '../types';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Compass, TrendingUp, Cpu, Lock, BarChart3, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenContact: (inquiryType?: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenContact }) => {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Header */}
          <div className="bg-[#0B1B3D] text-white p-6 sm:p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-slate-300 hover:text-white bg-white/10 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold text-[#E63946] bg-[#E63946]/10 px-3 py-1 rounded-md uppercase tracking-wider">
              {service.category} Practice
            </span>

            <h3 className="text-2xl font-bold font-sans mt-3 text-white leading-tight">
              {service.title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            <div>
              <h4 className="text-xs font-bold text-[#0B1B3D] uppercase tracking-wider mb-2">
                Strategic Scope & Approach
              </h4>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">
                {service.fullDesc}
              </p>
            </div>

            {/* Key Deliverables */}
            <div>
              <h4 className="text-xs font-bold text-[#0B1B3D] uppercase tracking-wider mb-3">
                Core Deliverables & Outputs
              </h4>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {service.keyDeliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-[#F8F9FA] p-3 rounded-lg border border-slate-200/80">
                    <CheckCircle2 className="w-4 h-4 text-[#E63946] shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric Banner */}
            <div className="p-4 bg-[#0B1B3D]/5 border border-[#0B1B3D]/10 rounded-xl flex items-center justify-between">
              <div>
                <span className="text-[10px] text-slate-500 uppercase font-bold block">Historical Performance Impact</span>
                <span className="text-sm font-extrabold text-[#0B1B3D]">{service.impactMetric}</span>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#E63946]" />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close Window
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact(`Detailed Advisory Consultation for ${service.title}`);
              }}
              className="w-full sm:w-auto bg-[#E63946] hover:bg-[#D90429] text-white px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Capability Deep Dive</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
