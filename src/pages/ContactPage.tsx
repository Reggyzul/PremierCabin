import React, { useState } from 'react';
import { COMPANY_DATA } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const { language } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waNumber = COMPANY_DATA.contact.waNumber;
    const textTemplate = `Halo PT. Premier Cabin Internasional,

Nama: ${fullName}
No. HP: ${phone}
Email: ${email}
Pesan: ${message}`;

    window.open(`https://api.whatsapp.com/send?phone=${waNumber}&text=${encodeURIComponent(textTemplate)}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 bg-[#0B241C] text-[#F5F1E8] min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        
        {/* HEADER */}
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-3">
            <span className="h-[1px] w-8 bg-[#C9A227]" />
            <span className="text-[10px] sm:text-xs font-sans font-semibold tracking-[0.3em] uppercase text-[#C9A227]">
              CONTACT US
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-normal text-[#F5F1E8] leading-tight">
            {language === 'ID' ? 'Hubungi Kantor Pusat Kami' : 'Connect With Our Headquarters'}
          </h1>
        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: ADDRESS & DETAILS (5 COLS) */}
          <div className="lg:col-span-5 bg-white/5 p-8 border border-white/10 space-y-8">
            <h3 className="font-serif text-2xl text-[#F5F1E8]">PT. Premier Cabin Internasional</h3>

            <div className="space-y-4 text-xs font-sans font-light text-[#D8CDBB] leading-relaxed">
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

          {/* RIGHT: FORM (7 COLS) */}
          <div className="lg:col-span-7 bg-white/5 p-8 border border-white/10 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1">
                  {language === 'ID' ? 'Nama Lengkap' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1">
                    WhatsApp / HP *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-[#C9A227] mb-1">
                  {language === 'ID' ? 'Pesan / Pertanyaan' : 'Message'}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-xs font-sans text-white focus:border-[#C9A227] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full border border-[#C9A227] bg-[#C9A227] text-[#0B241C] font-sans font-semibold text-xs uppercase tracking-[0.2em] py-4 hover:bg-white transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{language === 'ID' ? 'Kirim Pesan' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}
