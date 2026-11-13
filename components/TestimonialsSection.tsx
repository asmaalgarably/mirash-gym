"use client";

import { useState, useEffect } from "react";
import { Star, MessageCircle, Heart, PlusCircle, CheckCircle, AlertCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

interface Review {
  id: string;
  name: string;
  area: string;
  rating: number;
  text: string;
  date?: string;
}

export default function TestimonialsSection() {
  const initialReviews: Review[] = [
    {
      id: "1",
      name: "روان م.",
      area: "غزة – الرمال (مشتركة من 7 شهور)",
      rating: 5,
      text: "أحلى ساعتين بقضيهم في يومي! الطاقة والموسيقى وتشجيع كابتن منار بغيروا النفسية 180 درجة. المكان نظيف ومرتب وراحة وأمان تام.",
    },
    {
      id: "2",
      name: "هبة س.",
      area: "غزة – تل الهوا (مشتركة كلاسات المقاومة)",
      rating: 5,
      text: "المكان مسكر تماماً وبنات وبس، بتاخدي راحتك ع الآخر وبتحسي إنك بين صحباتك وأهلك. جسمي انشد وخسيت 6 كيلو بكل روقان وبدون تعقيد.",
    },
    {
      id: "3",
      name: "نادين ك.",
      area: "غزة – النصر (مشتركة كلاسات الزومبا والجمب)",
      rating: 5,
      text: "النزول بالوزن مش مجرد أرقام على الميزان، شعور الخفة والنشاط اللي صار عندي بعد شهرين بميراش ما بوصفه حكي! كابتن منار بتعطيكي طاقة تفجري الدنيا!",
    },
  ];

  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formArea, setFormArea] = useState("");
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState("");
  const [alertType, setAlertType] = useState<"success" | "private" | null>(null);

  // Load reviews from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("mirash_next_reviews");
      if (saved) {
        const parsed = JSON.parse(saved);
        setReviews([...parsed, ...initialReviews]);
      }
    } catch (e) {}
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) return;

    const negativeWords = ["سيء", "زفت", "بشع", "نصابين", "نصب", "مش منيح", "قرف", "تعبان", "غالي ع الفاضي"];
    const hasNegative = negativeWords.some((w) => formText.includes(w));
    const isApproved = formRating >= 4 && !hasNegative;

    if (isApproved) {
      const newReview: Review = {
        id: Date.now().toString(),
        name: formName,
        area: formArea || "غزة",
        rating: formRating,
        text: formText,
      };

      const updated = [newReview, ...reviews];
      setReviews(updated);

      try {
        const customOnly = updated.filter(
          (r) => !initialReviews.some((init) => init.id === r.id)
        );
        localStorage.setItem("mirash_next_reviews", JSON.stringify(customOnly));
      } catch (e) {}

      setAlertType("success");
      setFormName("");
      setFormArea("");
      setFormText("");
      setIsFormOpen(false);
    } else {
      // Private routing
      setAlertType("private");
      setIsFormOpen(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FFF9FB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-500/10 text-mirash-500 font-heading font-extrabold text-sm mb-4">
            <Heart className="w-4 h-4 fill-mirash-500" />
            آراء مشتركاتنا
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            صبايا غزة بيحكوا عن ميراش
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            تجارب حقيقية من بنات وسيدات عاشوا تجربة الرياضة والفرفشة بميراش برمال غزة.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="bg-white rounded-3xl p-7 border border-mirash-100 shadow-luxury hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-mirash-gold mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-mirash-gold text-mirash-gold" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-body text-base sm:text-lg text-gray-700 leading-relaxed mb-6 italic">
                  «{r.text}»
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-mirash-500 to-mirash-300 text-white font-heading font-black text-lg flex items-center justify-center shrink-0">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-heading font-extrabold text-base text-mirash-plum">
                    {r.name}
                  </h5>
                  <span className="text-xs text-gray-500 font-medium">
                    {r.area}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Share Review CTA Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-mirash-200/80 shadow-luxury text-center">
          <h4 className="font-heading font-black text-2xl text-mirash-plum mb-2">
            مشتركة بميراش أو زرتينا من قبل؟
          </h4>
          <p className="font-body text-sm sm:text-base text-gray-600 mb-6">
            شاركينا رأيكِ وتجربتكِ بالصالة بكل حب.. صوتكِ بفرّحنا وبساعد صبايا تانيين يبدأوا مشوارهم!
          </p>

          {!isFormOpen && (
            <button
              onClick={() => setIsFormOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-mirash-500 text-mirash-500 hover:bg-mirash-500 hover:text-white font-heading font-extrabold text-base transition-all duration-200 shadow-sm"
            >
              <PlusCircle className="w-5 h-5" />
              <span>شاركي رأيكِ وتجربتكِ معنا</span>
            </button>
          )}

          {/* Form */}
          {isFormOpen && (
            <form onSubmit={handleSubmit} className="text-right space-y-4 pt-4 border-t border-gray-100 animate-fadeIn">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-heading font-bold text-xs text-gray-700 mb-1">
                    اسمكِ أو اسم الشهرة *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: ياسمين م."
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-mirash-500 outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="block font-heading font-bold text-xs text-gray-700 mb-1">
                    منطقتكِ في غزة *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="مثال: غزة – الرمال"
                    value={formArea}
                    onChange={(e) => setFormArea(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-mirash-500 outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block font-heading font-bold text-xs text-gray-700 mb-2">
                  تقييمكِ لميراش (بالنجوم) *
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormRating(star)}
                      className={`text-2xl transition-transform hover:scale-125 ${
                        formRating >= star ? "text-mirash-gold" : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="text-xs font-bold text-mirash-500 mr-2">
                    {formRating === 5 ? "ممتاز جداً 🌸" : `${formRating} من 5`}
                  </span>
                </div>
              </div>

              <div>
                <label className="block font-heading font-bold text-xs text-gray-700 mb-1">
                  اكتبي تجربتكِ أو رأيكِ بالصالة والكابتن *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="احكي لنا عن طاقتك، الكلاسات اللي حبيتيها، أو التغيير اللي حسيتيه بميراش..."
                  value={formText}
                  onChange={(e) => setFormText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-mirash-500 outline-none text-sm"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-5 py-2.5 rounded-full text-xs font-bold text-gray-500 hover:text-gray-700"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-7 py-2.5 rounded-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-bold text-sm shadow-rose"
                >
                  إرسال التقييم
                </button>
              </div>
            </form>
          )}

          {/* Alerts */}
          {alertType === "success" && (
            <div className="mt-5 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-bold flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>🎉 يسلم تمّك وشكراً لكلماتكِ الجميلة! تم نشر تقييمكِ بنجاح في الموقع 🌸</span>
            </div>
          )}

          {alertType === "private" && (
            <div className="mt-5 p-5 rounded-2xl bg-mirash-50 border border-mirash-200 text-mirash-plum text-sm font-medium space-y-3">
              <div className="flex items-center justify-center gap-2 font-bold text-mirash-500">
                <AlertCircle className="w-5 h-5" />
                <span>شكراً جزيلاً لملاحظتكِ واهتمامكِ 🌸</span>
              </div>
              <p>
                بنحرص دائماً إنك تكوني راضية 100%. حابين نسمع منكِ تفاصيل أكتر مباشرة عبر الواتساب مع كابتن منار لنعالج كل نقطة فوراً ونكون عند حسن ظنك!
              </p>
              <a
                href={getWhatsAppUrl("مرحبا كابتن منار، عندي ملاحظة واقتراح حابة احكيه معكِ بخصوص الجيم 🌸")}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-bold text-xs shadow-rose"
              >
                <MessageCircle className="w-4 h-4" />
                <span>تواصلي مع كابتن منار بالواتساب</span>
              </a>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
