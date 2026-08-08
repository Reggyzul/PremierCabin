import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle2, Phone, Mail, MapPin, Building2 } from 'lucide-react';
import { COMPANY_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { TRANSLATIONS } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({ isOpen, onClose, initialService }: ContactModalProps) {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language].modal;

  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceCategory, setServiceCategory] = useState(initialService || 'Pilot Project Saung Sare');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) {
      alert('Please fill out all required fields!');
      return;
    }


    const waNumber = COMPANY_DATA.contact.waNumber;
    const textTemplate = `Halo *PT. PREMIER CABIN INTERNASIONAL* 👋

Berikut pengajuan konsultasi properti & hospitality saya:

📋 *DETAIL KONSULTASI:*
• Kategori Layanan: *${serviceCategory}*
• Pesan: *${message || '-'}*

👤 *DATA DIRI:*
• Nama Lengkap: *${fullName}*
• Instansi / Perusahaan: *${company || '-'}*
• No. WhatsApp / HP: *${phone}*
• Email: *${email}*

Mohon tim advisor PT. Premier Cabin Internasional dapat memberikan konsultasi & penawaran resmi. Terima kasih!`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(textTemplate)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        
        {/* BACKDROP OVERLAY */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B241C]/85 backdrop-blur-md"
        />

        {/* MODAL CONTAINER */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-[#0B241C] text-[#F5F1E8] rounded-none w-full max-w-4xl shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 z-10 my-auto border border-[#C9A227]/30"
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-[#C9A227] transition-colors z-20 cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* LEFT COLUMN: BRAND & CONTACT */}
          <div className="lg:col-span-5 bg-[#071913] p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 text-left">
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <Building2 className="w-6 h-6 text-[#C9A227]" />
                <div>
                  <span className="font-serif text-lg text-white font-semibold block">Premier Cabin</span>
                  <span className="text-[8px] text-[#C9A227] tracking-[0.3em] uppercase block">INTERNASIONAL</span>
                </div>
              </div>

              <div>
                <h3 className="font-serif font-normal text-2xl text-[#F5F1E8]">
                  {t.contactTitle}
                </h3>
                <p className="font-sans font-light text-xs text-[#D8CDBB] mt-2 leading-relaxed">
                  {t.contactSubtitle}
                </p>
              </div>

              <div className="space-y-3 text-xs font-sans font-light text-[#D8CDBB] pt-4 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{COMPANY_DATA.address.fullAddress}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <span>{COMPANY_DATA.contact.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={COMPANY_DATA.contact.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#C9A227] hover:underline"
                  >
                    <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                    <span>{COMPANY_DATA.contact.whatsapp} (WhatsApp)</span>
                  </a>
                </div>

              </div>

            </div>

            <div className="pt-6 border-t border-white/10 text-[10px] text-white/40 font-sans">
              © {new Date().getFullYear()} PT. Premier Cabin Internasional
            </div>
          </div>

          {/* RIGHT COLUMN: FORM */}
          <div className="lg:col-span-7 p-8 bg-[#0B241C] text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1.5 font-medium">
                    {t.serviceLabel} *
                  </label>
                  <select
                    value={serviceCategory}
                    onChange={(e) => setServiceCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                  >
                    <option value="Pilot Project Saung Sare" className="bg-[#0B241C] text-white">Pilot Project: Saung Sare Eco Luxury Resort</option>
                    <option value="Property Development" className="bg-[#0B241C] text-white">Property Development</option>
                    <option value="Hospitality Management" className="bg-[#0B241C] text-white">Hospitality Management</option>
                    <option value="Investment & Partnership" className="bg-[#0B241C] text-white">Investment & Partnership</option>
                    <option value="Travel & Lifestyle Services" className="bg-[#0B241C] text-white">Travel & Lifestyle Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1.5 font-medium">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Hendra Wijaya"
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1.5 font-medium">
                      {t.phoneLabel} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+62 812-3456-7890"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1.5 font-medium">
                      {t.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hendra@domain.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1.5 font-medium">
                    {t.messageLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your inquiry details..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full border border-[#C9A227] bg-[#C9A227] text-[#0B241C] hover:bg-white hover:text-[#0B241C] font-sans font-semibold text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t.submitBtn}</span>
                  </button>
                </div>

              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#C9A227] mx-auto" />
                <h4 className="font-serif text-2xl text-[#F5F1E8]">
                  Inquiry Sent Successfully!
                </h4>
                <p className="text-xs font-sans text-[#D8CDBB] max-w-md mx-auto leading-relaxed">
                  {t.successMsg}
                </p>
                <button
                  onClick={onClose}
                  className="border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B241C] text-xs font-sans uppercase tracking-[0.2em] px-6 py-3"
                >
                  Close
                </button>
              </div>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
