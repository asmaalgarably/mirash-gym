"use client";

import { useState } from "react";
import { Calculator, Sparkles, Check, ArrowRight, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

export default function FitnessCalculator() {
  const [height, setHeight] = useState<string>("165");
  const [weight, setWeight] = useState<string>("68");
  const [goal, setGoal] = useState<string>("حرق دهون ونحت قوام");
  const [activity, setActivity] = useState<string>("moderate");

  const [result, setResult] = useState<{
    bmi: number;
    status: string;
    idealWeight: string;
    calories: number;
    recommendedClass: string;
    weeklyPlan: string[];
  } | null>(null);

  const calculateFitness = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) return;

    const hm = h / 100;
    const bmiVal = parseFloat((w / (hm * hm)).toFixed(1));

    let status = "";
    let recommended = "";
    let cal = 1800;
    let plan = [];

    // Ideal weight range: 19 - 24.5 BMI
    const idealLow = Math.round(19 * (hm * hm));
    const idealHigh = Math.round(24.5 * (hm * hm));
    const idealWeightStr = `${idealLow} – ${idealHigh} كغم`;

    if (bmiVal < 18.5) {
      status = "وزنكِ أقل من المعدل المثالي";
      recommended = "حصص المقاومة وبناء القوة لنحت القوام بروقان";
      cal = Math.round(w * 32);
      plan = [
        "السبت: تمارين مقاومة علوية + خصر",
        "الإثنين: مقاومة الجزء السفلي والأرداف",
        "الأربعاء: بيلاتس واستطالة لتقوية الظهر",
      ];
    } else if (bmiVal <= 24.9) {
      status = "وزنكِ مثالي ورائع ما شاء الله!";
      recommended = "حصص ميراش الحصرية + بيلاتس للحفاظ على الرشاقة والمرونة";
      cal = Math.round(w * 28);
      plan = [
        "السبت: حصص ميراش الحصرية (مكس)",
        "الإثنين: زومبا وفرفشة وكارديو",
        "الأربعاء: نحت قوام ومقاومة خفيفة",
      ];
    } else if (bmiVal <= 29.9) {
      status = "عندك زيادة خفيفة بالوزن";
      recommended = "مكس زومبا وكارديو لحرق سريع وتفريغ طاقة بتفتح النفس";
      cal = Math.round(w * 24);
      plan = [
        "السبت: كارديو وتفريغ طاقة + حرق دهون",
        "الإثنين: زومبا وفرفشة ورقص إيروبيك",
        "الأربعاء: تمارين مقاومة لشد الترهلات",
        "الخميس: جمب فيت وترامبولين ممتع",
      ];
    } else {
      status = "بداية مشوار التغيير الجميل!";
      recommended = "برنامج متكامل من الكارديو الخفيف والمقاومة بإشراف كابتن منار خطوة بخطوة";
      cal = Math.round(w * 22);
      plan = [
        "السبت: كارديو خفيف على المفاصل",
        "الإثنين: تمارين نحت وشد تدريجي",
        "الأربعاء: بيلاتس ومرونة واسترخاء",
        "الخميس: حصص ميراش الحصرية",
      ];
    }

    setResult({
      bmi: bmiVal,
      status,
      idealWeight: idealWeightStr,
      calories: cal,
      recommendedClass: recommended,
      weeklyPlan: plan,
    });
  };

  const sendPlanToWhatsApp = () => {
    if (!result) return;
    const msg = `مرحبا كابتن منار 🌸\nحسبت مؤشر كتلتي وخطة اللياقة بموقع ميراش:\n- الطول: ${height} سم | الوزن: ${weight} كغم\n- مؤشر الكتلة (BMI): ${result.bmi} (${result.status})\n- الوزن المثالي المقترح: ${result.idealWeight}\n- الكلاس المقترح: ${result.recommendedClass}\n\nحابة ابدأ معكم واستفسر عن جدول الحصص والاشتراك المناسب! ✨`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="calculator" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-gold/15 text-mirash-amber font-heading font-extrabold text-sm mb-4">
            <Calculator className="w-4 h-4" />
            حاسبة اللياقة الذكية
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            احسبي مؤشر كتلتكِ وخطة تدريبكِ
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            أدخلي طولكِ ووزنكِ وهدفكِ لتعرفي الكلاس الأنسب إلك وخطة أسبوعية مقترحة بروقان!
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-white via-mirash-cream to-white rounded-3xl p-6 sm:p-10 border border-mirash-200/80 shadow-luxury">
          
          <form onSubmit={calculateFitness} className="grid sm:grid-cols-3 gap-6 mb-8">
            
            {/* Height */}
            <div>
              <label className="block font-heading font-bold text-sm text-mirash-plum mb-2">
                الطول (سم) *
              </label>
              <input
                type="number"
                required
                min={120}
                max={220}
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl border border-mirash-200 focus:border-mirash-500 bg-white font-body text-base outline-none shadow-sm transition-all"
                placeholder="مثال: 165"
              />
            </div>

            {/* Weight */}
            <div>
              <label className="block font-heading font-bold text-sm text-mirash-plum mb-2">
                الوزن الحالي (كغم) *
              </label>
              <input
                type="number"
                required
                min={30}
                max={200}
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl border border-mirash-200 focus:border-mirash-500 bg-white font-body text-base outline-none shadow-sm transition-all"
                placeholder="مثال: 68"
              />
            </div>

            {/* Goal */}
            <div>
              <label className="block font-heading font-bold text-sm text-mirash-plum mb-2">
                هدفكِ الأساسي *
              </label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
                className="w-full px-5 py-3.5 rounded-2xl border border-mirash-200 focus:border-mirash-500 bg-white font-body text-base outline-none shadow-sm transition-all cursor-pointer"
              >
                <option value="حرق دهون ونحت قوام">حرق دهون ونحت قوام</option>
                <option value="شد ترهلات ورفع لياقة">شد ترهلات ورفع لياقة</option>
                <option value="فرفشة وتفريغ طاقة">فرفشة وتفريغ طاقة ورقص</option>
                <option value="مرونة وعافية ظهر">مرونة وعافية ظهر ومفاصل</option>
              </select>
            </div>

            <div className="sm:col-span-3 pt-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-mirash-500 via-mirash-600 to-mirash-700 text-white font-heading font-extrabold text-lg py-4 rounded-full shadow-rose hover:shadow-rose-lg hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                <span>احسبي مؤشر الكتلة وخطة التمارين</span>
              </button>
            </div>

          </form>

          {/* Results Box */}
          {result && (
            <div className="pt-8 border-t border-mirash-200/80 animate-fadeIn space-y-6">
              
              <div className="grid sm:grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-2xl bg-white border border-mirash-100 shadow-sm">
                  <span className="block text-xs font-semibold text-gray-500 mb-1">مؤشر الكتلة (BMI)</span>
                  <span className="font-heading font-black text-3xl text-mirash-500">{result.bmi}</span>
                  <span className="block text-xs font-bold text-gray-700 mt-1">{result.status}</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-mirash-100 shadow-sm">
                  <span className="block text-xs font-semibold text-gray-500 mb-1">الوزن الصحي المثالي</span>
                  <span className="font-heading font-black text-2xl text-mirash-plum">{result.idealWeight}</span>
                  <span className="block text-xs font-bold text-gray-700 mt-1">المعدل الموصى به</span>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-mirash-100 shadow-sm">
                  <span className="block text-xs font-semibold text-gray-500 mb-1">السعرات اليومية المقترحة</span>
                  <span className="font-heading font-black text-3xl text-mirash-gold">{result.calories}</span>
                  <span className="block text-xs font-bold text-gray-700 mt-1">سعرة حرارية / يوم</span>
                </div>
              </div>

              {/* Recommended Class */}
              <div className="p-5 rounded-2xl bg-mirash-500/10 border border-mirash-500/20">
                <span className="block font-heading font-extrabold text-sm text-mirash-500 mb-1">
                  الكلاس الموصى به لكِ بميراش:
                </span>
                <p className="font-heading font-black text-xl text-mirash-plum">
                  {result.recommendedClass}
                </p>
              </div>

              {/* Weekly Plan */}
              <div className="bg-white p-5 rounded-2xl border border-mirash-100">
                <span className="block font-heading font-bold text-sm text-gray-700 mb-3">
                  جدول تدريب مقترح لكِ لأفضل نتيجة:
                </span>
                <ul className="space-y-2 text-sm text-gray-600 font-medium">
                  {result.weeklyPlan.map((p, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-mirash-100 text-mirash-500 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp Action Button */}
              <button
                onClick={sendPlanToWhatsApp}
                className="w-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-extrabold text-base py-3.5 rounded-full shadow-rose hover:shadow-rose-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>إرسال خطتي لكابتن منار والاستفسار بالواتساب</span>
              </button>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
