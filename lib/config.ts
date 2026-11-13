export const CONFIG = {
  gymName: "ميراش | MIRASH",
  tagline: "مركز ميراش للياقة البدنية للسيدات",
  motto: "أنتِ البداية .. وأنتِ الحكاية ♡",
  whatsappNumber: "970XXXXXXXXX", // replace with real number if needed
  address: "غزة – الرمال، مفترق فلسطين",
  instagramUrl: "https://www.instagram.com/merash.gym",
  coachName: "الكابتن منار هنا",
  phoneDisplay: "الاستفسار والتسجيل عبر الواتساب أو الخاص",
  defaultWhatsAppMessage: "مرحبا كابتن منار، حابة استفسر عن جدول الحصص والاشتراكات في مركز ميراش 🌸",
  shifts: {
    morning: "9:00 صباحاً – 1:00 ظهراً",
    evening: "3:00 عصراً – 7:30 مساءً",
    offDays: "الجمعة عطلة أسبوعية",
  },
};

export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || CONFIG.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message);
  if (CONFIG.whatsappNumber.includes("X")) {
    return `https://wa.me/?text=${encoded}`;
  }
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encoded}`;
}
