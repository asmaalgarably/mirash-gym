"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft, Maximize2, X, Sparkles, MapPin } from "lucide-react";

export default function StudioReelsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const slides = [
    {
      title: "صالة التمارين والكارديو الحقيقية",
      subtitle: "تصوير حي من داخل مركز ميراش – غزة، الرمال",
      image: "/assets/mirash-studio-hd.webp",
      desc: "أرضيات فوم مريحة لراحة المفاصل، أوزان متدرجة، ترامبولين، وشمس طبيعية بتفتح النفس مع لوجو ميراش الرسمي على الجدار.",
      tag: "استوديو الرمال الحقيقي",
    },
    {
      title: "منطقة تمارين المقاومة ونحت القوام",
      subtitle: "دمبلز وأوزان وأشرطة مقاومة متكاملة",
      image: "/assets/studio-strength.webp",
      desc: "كل ما يلزمك لشد الترهلات وبناء لياقة قوية وقوام مشدود بإشراف الكابتن منار خطوة بخطوة.",
      tag: "نحت وشد القوام",
    },
    {
      title: "ركن البيلاتس والمرونة والاسترخاء",
      subtitle: "فرشات رياضية وكرات توازن وأجواء هادئة",
      image: "/assets/studio-pilates.webp",
      desc: "مساحة مخصصة للاستطالة وراحة عضلات الظهر وتفريغ أي إرهاق أو ضغط في أجواء هادئة ومريحة تماماً.",
      tag: "مرونة وعافية",
    },
    {
      title: "ركن الاستقبال واللمة الدافئة",
      subtitle: "استقبال بكل محبة وابتسامة",
      image: "/assets/studio-lounge.webp",
      desc: "كادر نسائي لطيف يستقبلك برحابة، يجاوبك على كل استفساراتك، ويوفرلك الراحة والأمان من لحظة دخولك.",
      tag: "بيتكِ التاني",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[currentIndex];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-500/10 text-mirash-500 font-heading font-extrabold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            جولة بصرية في المكان
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            جو صالة ميراش برمال غزة
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            مساحة نظيفة، إضاءة مريحة، وأجهزة متكاملة مجهزة بكل حب لراحتكِ وحريتكِ التامة.
          </p>
        </div>

        {/* Interactive Feature Slider */}
        <div className="max-w-5xl mx-auto">
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-mirash-plum border border-mirash-100 group">
            
            {/* Slide Image */}
            <div className="relative h-[340px] sm:h-[460px] md:h-[540px] w-full">
              <Image
                src={current.image}
                alt={current.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-mirash-plum via-mirash-plum/30 to-transparent" />
            </div>

            {/* Slide Info Content */}
            <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 text-white flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <span className="inline-block px-3.5 py-1 rounded-full bg-mirash-500 text-white font-heading font-bold text-xs mb-3 shadow-sm">
                  {current.tag}
                </span>
                <h3 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-white mb-2 leading-tight">
                  {current.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-gray-200 line-clamp-2 sm:line-clamp-none">
                  {current.desc}
                </p>
              </div>

              <button
                onClick={() => setLightboxImg(current.image)}
                className="p-3 rounded-2xl bg-white/20 hover:bg-white/30 text-white backdrop-blur-md transition-colors shrink-0"
                aria-label="عرض الصورة بحجم كامل"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* Next / Prev Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-mirash-plum shadow-lg transition-transform hover:scale-110 active:scale-95"
              aria-label="الصورة السابقة"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/80 hover:bg-white text-mirash-plum shadow-lg transition-transform hover:scale-110 active:scale-95"
              aria-label="الصورة التالية"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

          </div>

          {/* Thumbnail Track */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 mt-6">
            {slides.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-20 sm:h-28 rounded-2xl overflow-hidden border-2 transition-all ${
                  currentIndex === idx
                    ? "border-mirash-500 scale-102 shadow-rose"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute bottom-1.5 inset-x-1 text-[11px] sm:text-xs font-heading font-bold text-white bg-black/60 backdrop-blur-sm rounded py-0.5 text-center truncate">
                  {s.tag}
                </span>
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImg && (
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-6 left-6 p-2 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-5xl max-h-[85vh] w-full h-[80vh]">
            <Image
              src={lightboxImg}
              alt="صورة الاستوديو"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

    </section>
  );
}
