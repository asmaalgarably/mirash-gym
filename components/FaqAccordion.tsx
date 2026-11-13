"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "هل بتقدموا حصص تجريبية مجانية؟",
      a: "ما في حصص تجريبية في مركز ميراش؛ لكن أبوابنا مفتوحة إلك دائماً لتنورينا بالصالة برمال غزة، تشوفي المكان والأجهزة، وتجلسي مع كابتن منار للاستشارة وتحديد هدفك قبل بدء الاشتراك!",
    },
    {
      q: "هل الصالة مغلقة وخاصة بالبنات 100%؟",
      a: "نعم بالتأكيد! الصالة مسكرة بالكامل ومخصصة للبنات والسيدات وبس مع كادر تدريبي وإداري نسائي 100%، وبتقدري تاخدي كامل راحتك وحريتك في اللباس والتمرين.",
    },
    {
      q: "شو أوقات الدوام وكيف اختار فترتي؟",
      a: "عندنا فترتين باليوم من السبت إلى الخميس: الفترة الصباحية (9:00 ص – 1:00 م) والفترة المسائية (3:00 م – 7:30 م)، ويوم الجمعة عطلة. بتقدري تختاري الفترة الأنسب لجدولك اليومي.",
    },
    {
      q: "كيف طريقة التسجيل والاشتراك؟",
      a: "التسجيل سهل وسريع جداً: اضغطي على زر 'احجزي مكانكِ' في الموقع وتواصلي معنا مباشرة عبر الواتساب لتثبيت اسمك ومعرفة عروض الاشتراكات الشهرية المتوفرة.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-500/10 text-mirash-500 font-heading font-extrabold text-sm mb-4">
            <HelpCircle className="w-4 h-4" />
            كل اللي ببالك
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            إليكِ الإجابات على أكتر الاستفسارات اللي بتسألنا إياها الصبايا قبل التسجيل:
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-mirash-100 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-right font-heading font-extrabold text-lg sm:text-xl text-mirash-plum bg-white hover:bg-mirash-50/50 flex items-center justify-between gap-4 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-mirash-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 font-body text-base text-gray-600 leading-relaxed border-t border-gray-50 bg-mirash-50/30 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
