"use client";

import { useState } from "react";
import { Clock, Sun, Moon, Calendar, MapPin, Sparkles } from "lucide-react";
import { CONFIG } from "@/lib/config";

interface LiveScheduleProps {
  onBookClass: (className: string) => void;
}

export default function LiveSchedule({ onBookClass }: LiveScheduleProps) {
  const [activeShift, setActiveShift] = useState<"morning" | "evening">("morning");

  const morningSchedule = [
    { time: "9:00 ص – 10:00 ص", title: "كارديو صباحي وتفريغ طاقة", coach: "كابتن منار", room: "صالة الكارديو الرئيسية", level: "جميع المستويات" },
    { time: "10:15 ص – 11:15 ص", title: "حصص ميراش الحصرية (نحت وشد)", coach: "كابتن منار", room: "صالة المقاومة", level: "متوسط إلى متقدم" },
    { time: "11:30 ص – 12:30 م", title: "زومبا وفرفشة صباحية", coach: "مدربة كلاسات الزومبا", room: "صالة الحركة", level: "حماسي وممتع" },
    { time: "12:30 م – 1:00 م", title: "بيلاتس واستطالة واسترخاء", coach: "كابتن منار", room: "ركن المرونة", level: "جميع المستويات" },
  ];

  const eveningSchedule = [
    { time: "3:00 م – 4:00 م", title: "تمارين مقاومة وشد ترهلات", coach: "كابتن منار", room: "صالة الأوزان والمقاومة", level: "نحت قوام" },
    { time: "4:15 م – 5:15 م", title: "جمب فيت وترامبولين جماعي", coach: "مدربة الترامبولين", room: "صالة القفز", level: "حرق عالي" },
    { time: "5:30 م – 6:30 م", title: "زومبا مسائية وأحلى فرفشة", coach: "مدربة الزومبا", room: "صالة الحركة", level: "طاقة ورقص" },
    { time: "6:30 م – 7:30 م", title: "تاباتا مكثف + ستريتش ختامي", coach: "كابتن منار", room: "صالة التمارين", level: "حرق وشد" },
  ];

  const currentSchedule = activeShift === "morning" ? morningSchedule : eveningSchedule;

  return (
    <section id="schedule" className="py-20 md:py-28 bg-[#FFF5F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-mirash-500/10 text-mirash-500 font-heading font-extrabold text-sm mb-4">
            <Clock className="w-4 h-4" />
            جدول المواعيد الحي
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-mirash-plum tracking-tight mb-4">
            أوقات الدوام وحصص اليوم
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600">
            أوقات مرنة صباحية ومسائية تناسب يومكِ ودراستكِ وعملكِ.. اختاري فترتكِ الأنسب!
          </p>
        </div>

        {/* Shift Toggle Buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-full bg-white border border-mirash-200/80 shadow-sm">
            <button
              onClick={() => setActiveShift("morning")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm sm:text-base transition-all ${
                activeShift === "morning"
                  ? "bg-gradient-to-r from-mirash-500 to-mirash-600 text-white shadow-rose"
                  : "text-gray-600 hover:text-mirash-plum"
              }`}
            >
              <Sun className="w-4 h-4" />
              <span>الفترة الصباحية (9:00 ص – 1:00 م)</span>
            </button>

            <button
              onClick={() => setActiveShift("evening")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-heading font-bold text-sm sm:text-base transition-all ${
                activeShift === "evening"
                  ? "bg-gradient-to-r from-mirash-plum to-mirash-800 text-white shadow-luxury"
                  : "text-gray-600 hover:text-mirash-plum"
              }`}
            >
              <Moon className="w-4 h-4" />
              <span>الفترة المسائية (3:00 م – 7:30 م)</span>
            </button>
          </div>
        </div>

        {/* Schedule Table / Cards */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentSchedule.map((session, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 sm:p-6 border border-mirash-100 shadow-sm hover:shadow-rose hover:border-mirash-300 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="p-3 rounded-2xl bg-mirash-50 text-mirash-500 font-heading font-black text-center min-w-[120px]">
                  <span className="block text-xs text-gray-500 font-medium">الوقت</span>
                  <span className="text-sm sm:text-base text-mirash-plum">{session.time}</span>
                </div>

                <div>
                  <h4 className="font-heading font-extrabold text-lg sm:text-xl text-mirash-plum mb-1">
                    {session.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500">
                    <span className="font-semibold text-mirash-600">بإشراف: {session.coach}</span>
                    <span>•</span>
                    <span>{session.room}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">
                      {session.level}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onBookClass(session.title)}
                className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-mirash-50 hover:bg-mirash-500 text-mirash-500 hover:text-white font-heading font-bold text-xs sm:text-sm border border-mirash-200 hover:border-transparent transition-all self-end sm:self-center"
              >
                احجزي هذه الحصة
              </button>
            </div>
          ))}
        </div>

        {/* Quick Location & Off-day Notice */}
        <div className="mt-10 max-w-2xl mx-auto text-center p-4 rounded-2xl bg-white/70 border border-mirash-200/60 backdrop-blur-sm flex items-center justify-center gap-2 text-sm text-gray-600">
          <MapPin className="w-4 h-4 text-mirash-500 shrink-0" />
          <span>الموقع: <strong>{CONFIG.address}</strong> — الدوام من السبت إلى الخميس (الجمعة عطلة)</span>
        </div>

      </div>
    </section>
  );
}
