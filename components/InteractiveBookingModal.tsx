"use client";

import { useState } from "react";
import { X, CheckCircle, MessageCircle, Calendar, Sparkles } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultClass?: string;
}

export default function InteractiveBookingModal({
  isOpen,
  onClose,
  defaultClass = "حصص ميراش الحصرية",
}: BookingModalProps) {
  const [selectedClass, setSelectedClass] = useState(defaultClass);
  const [selectedShift, setSelectedShift] = useState("صباحي (9:00 ص – 1:00 م)");
  const [memberName, setMemberName] = useState("");
  const [memberArea, setMemberArea] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const classesList = [
    "زومبا وفرفشة (رقص وإيروبيك)",
    "كارديو وحرق دهون",
    "تمارين المقاومة والشد",
    "بيلاتس ومرونة واسترخاء",
    "حصص ميراش الحصرية (مكس مقاومة وإيروبيك)",
    "جمب فيت وترامبولين جماعي",
  ];

  const shifts = [
    "الفترة الصباحية (9:00 ص – 1:00 ظهراً)",
    "الفترة المسائية (3:00 م – 7:30 مساءً)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberName.trim()) return;

    const message = `مرحبا كابتن منار 🌸\nحابة احجز مكاني في مركز ميراش:\n- الاسم: ${memberName}\n- المنطقة: ${memberArea || "غزة"}\n- الكلاس المطلوب: ${selectedClass}\n- الفترة المفضلة: ${selectedShift}\n\nاسألي لي عن الموعد والاشتراك المناسب! ✨`;

    setIsSuccess(true);

    setTimeout(() => {
      window.open(getWhatsAppUrl(message), "_blank");
      setIsSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-mirash-100 overflow-hidden">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-mirash-500 via-mirash-600 to-mirash-700 px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-white/20">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-black text-xl">
                احجزي مكانكِ في ميراش
              </h3>
              <p className="text-xs text-white/90 font-medium">
                خطوة واحدة وسريعة لتبدأي طاقتك وتمرينك بروقان
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Step 1: Select Class */}
          <div>
            <label className="block font-heading font-bold text-sm text-mirash-plum mb-2">
              1. اختاري نوع الكلاس المفضل *
            </label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl border border-mirash-200 bg-mirash-50/50 font-body text-sm text-gray-800 focus:outline-none focus:border-mirash-500 transition-colors"
            >
              {classesList.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Step 2: Select Shift */}
          <div>
            <label className="block font-heading font-bold text-sm text-mirash-plum mb-2">
              2. الفترة الأنسب ليومكِ *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {shifts.map((shift) => (
                <button
                  type="button"
                  key={shift}
                  onClick={() => setSelectedShift(shift)}
                  className={`text-right px-4 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all ${
                    selectedShift === shift
                      ? "border-mirash-500 bg-mirash-500/10 text-mirash-500 shadow-sm"
                      : "border-gray-200 hover:border-mirash-200 text-gray-600 bg-white"
                  }`}
                >
                  {shift}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Member Name & Area */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-heading font-bold text-xs text-gray-700 mb-1">
                اسمكِ أو اسم الشهرة *
              </label>
              <input
                type="text"
                required
                placeholder="مثال: ليلى ع."
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-mirash-500 outline-none text-sm"
              />
            </div>
            <div>
              <label className="block font-heading font-bold text-xs text-gray-700 mb-1">
                منطقتكِ في غزة (اختياري)
              </label>
              <input
                type="text"
                placeholder="مثال: الرمال، تل الهوا..."
                value={memberArea}
                onChange={(e) => setMemberArea(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-mirash-500 outline-none text-sm"
              />
            </div>
          </div>

          {/* Confirmation button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSuccess}
              className="w-full bg-gradient-to-r from-mirash-500 to-mirash-700 text-white font-heading font-extrabold text-base py-3.5 rounded-full shadow-rose-lg hover:shadow-rose hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2"
            >
              {isSuccess ? (
                <>
                  <CheckCircle className="w-5 h-5 animate-spin" />
                  <span>جارٍ تحويلكِ للواتساب...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-5 h-5" />
                  <span>تثبيت الحجز وإرسال التفاصيل بالواتساب</span>
                </>
              )}
            </button>
            <p className="text-center text-[11.5px] text-gray-500 mt-2">
              * يتم إرسال طلبكِ مباشرة لكابتن منار مع حفظ بياناتك بخصوصية وأمان تامين.
            </p>
          </div>

        </form>

      </div>

    </div>
  );
}
