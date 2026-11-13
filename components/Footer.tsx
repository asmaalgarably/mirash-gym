"use client";

import Image from "next/image";
import { MessageCircle, Instagram, MapPin, Clock, Phone, Heart } from "lucide-react";
import { CONFIG, getWhatsAppUrl } from "@/lib/config";

interface FooterProps {
  onOpenBooking: () => void;
}

export default function Footer({ onOpenBooking }: FooterProps) {
  return (
    <>
      <footer id="contact" className="bg-mirash-plum text-white pt-20 pb-12 relative overflow-hidden">
        
        {/* Glow ambient */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-mirash-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
            
            {/* Brand Column */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-mirash-500 shadow-rose">
                  <Image
                    src="/assets/logo.svg"
                    alt="شعار ميراش"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading font-black text-2xl tracking-tight">
                    ميراش | MIRASH
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {CONFIG.tagline}
                  </p>
                </div>
              </div>

              <p className="font-body text-sm text-gray-300 leading-relaxed max-w-sm">
                مساحتكِ النسائية الخاصة في غزة الرمال.. رياضة، طاقة، ونحت قوام بإشراف الكابتن منار هنا وسط بيئة دافية وأخوية 100%.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-mirash-300">
                <Heart className="w-3.5 h-3.5 fill-mirash-300" />
                <span>{CONFIG.motto}</span>
              </div>
            </div>

            {/* Location & Hours */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-heading font-black text-lg text-mirash-300 mb-2">
                الموقع والدوام
              </h4>

              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="w-5 h-5 text-mirash-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">العنوان:</strong>
                  <span>{CONFIG.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-gray-300">
                <Clock className="w-5 h-5 text-mirash-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">الفترات:</strong>
                  <span>صباحي: {CONFIG.shifts.morning}</span>
                  <br />
                  <span>مسائي: {CONFIG.shifts.evening}</span>
                  <br />
                  <span className="text-xs text-gray-400">{CONFIG.shifts.offDays}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-heading font-black text-lg text-mirash-300 mb-2">
                تواصلي معنا
              </h4>

              <p className="text-xs text-gray-400">
                {CONFIG.phoneDisplay}
              </p>

              <div className="space-y-3">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-extrabold text-sm py-3 px-6 rounded-full shadow-rose hover:shadow-rose-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>احجزي مكانكِ بالواتساب</span>
                </button>

                <a
                  href={CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener"
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm py-3 px-6 rounded-full border border-white/20 transition-all flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4 text-mirash-pink" />
                  <span>تابعينا ع الإنستغرام</span>
                </a>
              </div>
            </div>

          </div>

          {/* Copyright bar */}
          <div className="pt-8 text-center text-xs text-gray-400 font-medium">
            جميع الحقوق محفوظة © {new Date().getFullYear()} — مركز ميراش للياقة البدنية للسيدات (غزة – الرمال) ♡
          </div>

        </div>
      </footer>

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener"
        className="fixed bottom-6 left-6 z-40 p-4 rounded-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all group flex items-center gap-2.5 border-2 border-white/40"
        aria-label="تواصل مباشر عبر الواتساب"
      >
        <span className="absolute inset-0 rounded-full bg-mirash-500 animate-ping opacity-25" />
        <MessageCircle className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-heading font-extrabold text-sm pl-1">
          احجزي معنا بالواتساب
        </span>
      </a>
    </>
  );
}
