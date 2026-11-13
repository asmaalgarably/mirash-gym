"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "الكلاسات", href: "#classes" },
    { label: "احسبي لياقتك", href: "#calculator" },
    { label: "جو الصالة", href: "#gallery" },
    { label: "كابتن منار", href: "#coach" },
    { label: "تجارب الصبايا", href: "#testimonials" },
    { label: "الدوام والموقع", href: "#schedule" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-rose group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/assets/logo.svg"
                alt="شعار ميراش"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-2xl text-mirash-plum tracking-tight group-hover:text-mirash-500 transition-colors">
                ميراش | MIRASH
              </span>
              <span className="text-xs font-semibold text-gray-500">
                غزة – الرمال
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading font-bold text-[16px] text-gray-700 hover:text-mirash-500 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:inset-x-0 after:h-[2.5px] after:bg-mirash-500 after:rounded-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="bg-gradient-to-r from-mirash-500 via-mirash-600 to-mirash-700 text-white font-heading font-bold text-[15px] px-6 py-2.5 rounded-full shadow-rose hover:shadow-rose-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>احجزي مكانكِ</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl border border-mirash-200 text-mirash-plum hover:bg-mirash-50 transition-colors"
              aria-label="تبديل القائمة"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-mirash-100 bg-white/95 backdrop-blur-md px-5 py-6 space-y-3 shadow-xl animate-fadeInDown">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block font-heading font-bold text-lg text-gray-800 hover:text-mirash-500 py-2 border-b border-gray-100"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-bold text-center py-3 rounded-full shadow-rose flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>احجزي مكانكِ بالواتساب</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
