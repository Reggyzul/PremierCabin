import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { Quote, Star, ChevronLeft, ChevronRight, Award, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1B3D] text-white text-xs font-black uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-amber-400" />
            <span>TESTIMONIAL & TESTIMONI MITRA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1B3D] font-sans tracking-tight uppercase">
            Kepercayaan Mitra & Klien Terkemuka
          </h2>
        </div>

        {/* Testimonials Display */}
        <div className="max-w-4xl mx-auto relative bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border-2 border-slate-200 shadow-xl">
          <Quote className="w-16 h-16 text-[#0B1B3D]/10 absolute top-6 left-6 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 space-y-6"
            >
              {/* Badge & Rating */}
              <div className="flex items-center justify-between">
                <span className="bg-[#E63946] text-white text-xs font-black px-3.5 py-1 rounded-md uppercase tracking-wider shadow-sm">
                  {current.highlightStat}
                </span>

                <div className="flex items-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="text-lg sm:text-xl font-bold text-[#0B1B3D] leading-relaxed font-sans italic">
                "{current.quote}"
              </blockquote>

              {/* Author details */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#0B1B3D]"
                  />
                  <div>
                    <h4 className="text-base font-black text-[#0B1B3D]">{current.author}</h4>
                    <p className="text-xs text-slate-600 font-medium">{current.title}, <span className="font-bold text-[#E63946]">{current.company}</span></p>
                  </div>
                </div>

                {/* Slider Navigation */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white transition-colors cursor-pointer shadow-xs"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2.5 rounded-xl bg-white border border-slate-200 hover:bg-[#0B1B3D] hover:text-white transition-colors cursor-pointer shadow-xs"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-slate-600 font-bold">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E63946]" /> Klien Korporasi Terverifikasi</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E63946]" /> Armada & Unit Terawat Rutin</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#E63946]" /> Komitmen Zero Accident</span>
        </div>

      </div>
    </section>
  );
};

