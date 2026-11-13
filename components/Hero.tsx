"use client";

import Image from "next/image";
import { Sparkles, ArrowDown, Calendar, ShieldCheck, Heart } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  return (
    <header id="hero" className="relative pt-12 pb-20 md:pt-16 md:pb-28 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-mirash-300/30 rounded-full blur-3xl pointer-events-none -z-10 animate-pulseGlow" />
      <div className="absolute top-40 left-1/4 w-80 h-80 bg-mirash-gold/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Banner */}
        <div className="flex items-center justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/80 border border-mirash-200/80 shadow-sm backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-heading font-bold text-sm sm:text-base text-mirash-plum">
              التسجيل مفتوح لكلاسات هذا الأسبوع في صالة الرمال
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right/Top: Hero Logo Vector Visual */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
              
              {/* Outer decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-mirash-500/20 via-transparent to-mirash-gold/20 blur-xl animate-pulse" />
              
              {/* Clean Vector Logo without border */}
              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl animate-float">
                <Image
                  src="/assets/logo.svg"
                  alt="شعار مركز ميراش الرياضي للسيدات"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating verified badge */}
              <div className="absolute -bottom-3 -right-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl border border-mirash-100 shadow-luxury flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-mirash-500" />
                <span className="font-heading font-extrabold text-xs sm:text-sm text-mirash-plum">
                  بيئة خاصة للبنات 100%
                </span>
              </div>

            </div>
          </div>

          {/* Left/Bottom: Hero Typography & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-right order-2 lg:order-1">
            
            {/* Wall Slogan Motto */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-mirash-500/10 border border-mirash-500/20 text-mirash-500 font-heading font-extrabold text-sm sm:text-base mb-6 shadow-sm">
              <Heart className="w-4 h-4 fill-mirash-500" />
              <span>{CONFIG.motto}</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-mirash-plum leading-[1.25] tracking-tight mb-6 headline-shimmer">
              شدّي حيلك بروقان.. وأحلى طاقة بتستناكي!
            </h1>

            {/* Sub-headline description */}
            <p className="font-body text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              جيم ومساحة خاصة للبنات والسيدات وبس برمال غزة.. جو بفرّح القلب، مدربات كفاءة برفعوا الراس، وخصوصية تامة 100% بإشراف <strong className="text-mirash-500">{CONFIG.coachName}</strong>. تعالي فرفشي، انحتي جسمك، واشحني طاقتك معنا كل يوم!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                onClick={onOpenBooking}
                className="bg-gradient-to-r from-mirash-500 via-mirash-600 to-mirash-700 text-white font-heading font-black text-lg px-8 py-4 rounded-full shadow-rose-lg hover:shadow-rose hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>احجزي مكانكِ الآن</span>
              </button>

              <a
                href="#classes"
                className="bg-white hover:bg-mirash-50 text-mirash-plum font-heading font-bold text-lg px-7 py-4 rounded-full border-2 border-mirash-200 hover:border-mirash-500 shadow-sm transition-all duration-200 flex items-center gap-2"
              >
                <span>شوفي الكلاسات والجدول</span>
                <ArrowDown className="w-4 h-4 text-mirash-500" />
              </a>
            </div>

            {/* Quick Micro-Highlights */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-mirash-200/60 max-w-xl mx-auto lg:mx-0">
              <div className="text-center lg:text-right">
                <span className="block font-heading font-black text-xl sm:text-2xl text-mirash-500">
                  100%
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
                  خصوصية للبنات فقط
                </span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block font-heading font-black text-xl sm:text-2xl text-mirash-plum">
                  صباحي ومسائي
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
                  أوقات دوام مرنة
                </span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block font-heading font-black text-xl sm:text-2xl text-mirash-gold">
                  غزة الرمال
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-500">
                  مفترق فلسطين
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}
