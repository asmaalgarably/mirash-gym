import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#D81B60",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "ميراش | MIRASH — مركز اللياقة البدنية الأول للبنات والسيدات في غزة",
  description: "جيم ومساحة نسائية خاصة للبنات والسيدات في غزة الرمال بإشراف الكابتن منار هنا. زومبا، تاباتا، نحت وشد قوام، بيلاتس، وترامبولين بخصوصية تامة 100%.",
  keywords: ["جيم سيدات غزة", "ميراش غزة", "جيم الرمال", "كابتن منار هنا", "زومبا غزة", "نحت قوام", "لياقة نسائية"],
  icons: {
    icon: "/assets/logo.svg",
    apple: "/assets/logo.png",
  },
  openGraph: {
    title: "ميراش | MIRASH — مركز اللياقة البدنية الأول للبنات والسيدات في غزة",
    description: "جيم نسائي متكامل 100% في غزة الرمال. طاقة، فرفشة، ونحت قوام بإشراف الكابتن منار هنا.",
    images: [{ url: "/assets/mirash-studio-hd.webp", width: 1200, height: 630 }],
    locale: "ar_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@600;700;800&family=Tajawal:wght@400;500;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#FFF9FB] text-mirash-plum min-h-screen">
        {children}
      </body>
    </html>
  );
}
