import React from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, ArrowRight, Building, Calendar, Tag, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onOpenContact: (inquiryType?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onOpenContact }) => {
  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        >
          {/* Header Image Overlay */}
          <div className="relative h-64 bg-slate-900">
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/50 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <div className="flex items-center gap-3 text-xs font-bold text-slate-300">
                <span className="bg-[#E63946] text-white px-2.5 py-0.5 rounded text-[10px] uppercase">
                  {caseStudy.sector}
                </span>
                <span>{caseStudy.client} • {caseStudy.date}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-sans leading-tight">
                {caseStudy.title}
              </h3>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
            
            {/* Results Grid */}
            <div>
              <h4 className="text-xs font-bold text-[#0B1B3D] uppercase tracking-wider mb-3">
                Key Verified Results & Impact
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {caseStudy.results.map((res, i) => (
                  <div key={i} className="p-4 bg-[#F8F9FA] rounded-xl border border-slate-200 text-center">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block truncate">{res.label}</span>
                    <span className="text-base sm:text-lg font-extrabold text-[#0B1B3D]">{res.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4">
              <div className="p-4 bg-red-50/50 border border-red-100 rounded-xl">
                <h5 className="text-xs font-bold text-[#E63946] uppercase mb-1">Institutional Challenge</h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{caseStudy.challenge}</p>
              </div>

              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                <h5 className="text-xs font-bold text-[#0B1B3D] uppercase mb-1">Aetheris Advisory Solution</h5>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {caseStudy.tags.map((t, idx) => (
                <span key={idx} className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md">
                  #{t}
                </span>
              ))}
            </div>

          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="w-full sm:w-auto text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenContact(`Inquiry based on Case Study: ${caseStudy.title}`);
              }}
              className="w-full sm:w-auto bg-[#E63946] hover:bg-[#D90429] text-white px-6 py-3 rounded-xl font-bold text-xs transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Request Similar Advisory Briefing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
