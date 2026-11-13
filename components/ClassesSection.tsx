"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Sparkles, Flame, Dumbbell, Activity, Compass } from "lucide-react";

interface ClassesSectionProps {
  onBookClass: (className: string) => void;
}

interface ClassItem {
  id: string;
  title: string;
  category: "all" | "cardio" | "strength" | "flex";
  categoryLabel: string;
  desc: string;
  image: string;
  initialLikes: number;
}

export default function ClassesSection({ onBookClass }: ClassesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [likedCards, setLikedCards] = useState<Record<string, boolean>>({});
  const [likeCounts, setLikeCounts] = useState<Record<string, number>>({
    zumba: 142,
    cardio: 98,
    strength: 175,
    pilates: 116,
    mirash: 249,
    jumpfit: 163,
  });

  const classes: ClassItem[] = [
    {
      id: "zumba",
      title: "زومبا وفرفشة",
      category: "cardio",
      categoryLabel: "حرق وفرفشة",
      desc: "أحلى ساعة رقص وتفريغ طاقة مع أحلى موسيقى وأجواء بتنعش القلب وتعدل المزاج 180 درجة.",
      image: "/assets/class-zumba.webp",
      initialLikes: 142,
    },
    {
      id: "cardio",
      title: "كارديو وتفريغ طاقة",
      category: "cardio",
      categoryLabel: "حرق مكثف",
      desc: "نشاط عالي وتمارين سرعة ورشاقة بتشغل الحرق لأعلى مستوى وتفرغ كل تعب وضغط اليوم.",
      image: "/assets/class-cardio.webp",
      initialLikes: 98,
    },
    {
      id: "strength",
      title: "تمارين المقاومة والشد",
      category: "strength",
      categoryLabel: "نحت وشد قوام",
      desc: "أوزان متدرجة مع مدربة بتتابعك خطوة بخطوة لنحت الخصر، شد البطن والأرداف، وتناسق القوام بأمان.",
      image: "/assets/studio-strength.webp",
      initialLikes: 175,
    },
    {
      id: "pilates",
      title: "بيلاتس ومرونة واسترخاء",
      category: "flex",
      categoryLabel: "مرونة وصحة ظهر",
      desc: "إطالات هادئة لتقوية عضلات الظهر والبطن العميقة لراحة المفاصل، قوام مشدود، وتناغم جسدي عالي.",
      image: "/assets/studio-pilates.webp",
      initialLikes: 116,
    },
    {
      id: "mirash",
      title: "حصص ميراش الحصرية",
      category: "strength",
      categoryLabel: "مكس النحت السريع",
      desc: "المكس الأشهر في غزة بين تمارين المقاومة والإيروبيك الشرقي.. طاقة وحماس ونحت فوري بإشراف كابتن منار!",
      image: "/assets/mirash-studio-hd.webp",
      initialLikes: 249,
    },
    {
      id: "jumpfit",
      title: "جمب فيت وترامبولين",
      category: "cardio",
      categoryLabel: "طاقة ومرح",
      desc: "تمارين قفز ممتعة على الترامبولين خفيفة على المفاصل وبتحرق سعرات مضاعفة وسط ضحك وتشجيع.",
      image: "/assets/class-group.webp",
      initialLikes: 163,
    },
  ];

  const filterTabs = [
    { id: "all", label: "الكل (6)" },
    { id: "cardio", label: "حرق ودهون" },
    { id: "strength", label: "نحت وشد" },
    { id: "flex", label: "مرونة واسترخاء" },
  ];

  const filteredClasses =
    activeFilter === "all"
      ? classes
      : classes.filter((c) => c.category === activeFilter);

  const toggleLike = (id: string) => {
    const isLiked = likedCards[id];
    setLikedCards((prev) => ({ ...prev, [id]: !isLiked }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: isLiked ? prev[id] - 1 : prev[id] + 1,
    }));
  };

  return (
    <section id="classes" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-500/10 text-mirash-500 font-heading font-extrabold text-sm mb-4">
            <Sparkles className="w-4 h-4" />
            جدول كلاسات ميراش
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            الكلاس اللي بناسب طاقتكِ وهدفكِ
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            تنوع حقيقي بين الحرق والشد والرقص والاسترخاء.. اختاري الكلاس اللي بحبه قلبك وتمرني بروقان!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`font-heading font-bold text-sm sm:text-base px-6 py-2.5 rounded-full transition-all duration-200 ${
                activeFilter === tab.id
                  ? "bg-mirash-500 text-white shadow-rose"
                  : "bg-mirash-50 text-gray-700 hover:bg-mirash-100 hover:text-mirash-plum border border-mirash-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredClasses.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden border border-mirash-100 shadow-luxury hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-mirash-plum">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-mirash-plum/70 backdrop-blur-md text-white font-heading font-bold text-xs">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-2xl text-mirash-plum mb-2.5 group-hover:text-mirash-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-gray-600 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-gray-100 mt-2">
                <button
                  onClick={() => toggleLike(item.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all ${
                    likedCards[item.id]
                      ? "border-mirash-500 bg-mirash-50 text-mirash-500"
                      : "border-gray-200 text-gray-500 hover:border-mirash-300"
                  }`}
                  aria-label="أعجبني الكلاس"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      likedCards[item.id] ? "fill-mirash-500 text-mirash-500" : ""
                    }`}
                  />
                  <span>{likeCounts[item.id]}</span>
                </button>

                <button
                  onClick={() => onBookClass(item.title)}
                  className="font-heading font-extrabold text-sm text-mirash-500 hover:text-mirash-700 hover:underline transition-colors"
                >
                  احجزي مكانكِ ←
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
