"use client";

import Image from "next/image";
import { Sparkles, MessageCircle, Star, Award, HeartHandshake, Dumbbell } from "lucide-react";
import { CONFIG, getWhatsAppUrl } from "@/lib/config";

export default function CoachSpotlight() {
  const pillars = [
    {
      icon: Dumbbell,
      title: "متابعة وتوجيه فردي للتمارين",
      desc: "تصحيح الأداء والوضعيات لكل صبية لضمان النتيجة وبأمان كامل على المفاصل.",
    },
    {
      icon: Award,
      title: "برامج نحت الجسم وشد القوام",
      desc: "خطط تدريب متدرجة لشد ترهلات البطن والأرداف والذراعين بطريقة علمية وصحية.",
    },
    {
      icon: HeartHandshake,
      title: "طاقة وتشجيع وأجواء عائلية",
      desc: "بيئة بنات وبس كلها إيجابية وضحك وفرفشة بتخليكي تستني موعد التمرين بلهفة!",
    },
  ];

  return (
    <section id="coach" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-500/10 text-mirash-500 font-heading font-extrabold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            إشراف وتدريب كفاءة
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            تعرفي على الكابتن منار هنا
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            مؤسسة ومدربة مركز ميراش.. خبرة وشغف بطاقة إيجابية وتشجيع من القلب لكل صبية وسيدة.
          </p>
        </div>

        {/* Coach Card */}
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-white via-mirash-cream to-white rounded-4xl p-8 sm:p-12 border border-mirash-200/80 shadow-luxury">
          
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Coach Profile Image */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-mirash-gold via-mirash-rose to-mirash-500 shadow-rose mb-5">
                <div className="relative w-full h-full rounded-full overflow-hidden bg-mirash-plum">
                  <Image
                    src="/assets/logo.svg"
                    alt="كابتن منار هنا"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <h3 className="font-heading font-black text-2xl text-mirash-plum mb-1">
                كابتن منار هنا
              </h3>
              <p className="text-sm font-bold text-mirash-500">
                مؤسسة ومدربة اللياقة البدنية بميراش
              </p>
            </div>

            {/* Coach Info & Philosophy */}
            <div className="md:col-span-8 space-y-6">
              
              {/* Quote Block */}
              <div className="p-6 rounded-2xl bg-mirash-500/5 border-r-4 border-mirash-500">
                <p className="font-heading font-extrabold text-lg sm:text-xl text-mirash-plum leading-relaxed">
                  «{CONFIG.motto} هدفنا بميراش مش مجرد تمرين عادي، هدفنا تشوفي قوتك وتفرغي كل طاقة سلبية بروقان وحب وسط مجتمع صبايا بدعمك وبشجعك!»
                </p>
              </div>

              {/* Pillars Grid */}
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {pillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl bg-white border border-mirash-100 shadow-sm">
                      <div className="w-10 h-10 rounded-xl bg-mirash-50 text-mirash-500 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-mirash-plum mb-1.5">
                        {p.title}
                      </h4>
                      <p className="font-body text-xs text-gray-500 leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Direct WhatsApp Consultation */}
              <div className="pt-2">
                <a
                  href={getWhatsAppUrl("مرحبا كابتن منار، حابة استشيرك بخصوص كلاسات اللياقة واختيار الأنسب لجسمي 🌸")}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-extrabold text-base px-8 py-3.5 rounded-full shadow-rose hover:shadow-rose-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>استفسري مباشرة من كابتن منار</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
