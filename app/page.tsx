"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClassesSection from "@/components/ClassesSection";
import FitnessCalculator from "@/components/FitnessCalculator";
import LiveSchedule from "@/components/LiveSchedule";
import StudioReelsCarousel from "@/components/StudioReelsCarousel";
import CoachSpotlight from "@/components/CoachSpotlight";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqAccordion from "@/components/FaqAccordion";
import Footer from "@/components/Footer";
import InteractiveBookingModal from "@/components/InteractiveBookingModal";
import WelcomeSparkles from "@/components/WelcomeSparkles";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedClassForBooking, setSelectedClassForBooking] = useState("حصص ميراش الحصرية");

  const handleOpenBooking = (className?: string) => {
    if (className) {
      setSelectedClassForBooking(className);
    }
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen relative selection:bg-mirash-500 selection:text-white">
      {/* Welcome Entrance Sparkles */}
      <WelcomeSparkles />

      {/* Sticky Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Hero Showcase */}
      <Hero onOpenBooking={() => handleOpenBooking()} />

      {/* Classes & Workouts Grid with expressive photos */}
      <ClassesSection onBookClass={(name) => handleOpenBooking(name)} />

      {/* Interactive Fitness & Calorie Calculator */}
      <FitnessCalculator />

      {/* Live Shifts & Sessions Schedule Table */}
      <LiveSchedule onBookClass={(name) => handleOpenBooking(name)} />

      {/* Interactive Studio Reels / Atmospheric Carousel */}
      <StudioReelsCarousel />

      {/* Coach Spotlight — كابتن منار هنا */}
      <CoachSpotlight />

      {/* Member Testimonials & Review Moderation System */}
      <TestimonialsSection />

      {/* FAQ Accordion */}
      <FaqAccordion />

      {/* Footer & Floating WhatsApp Trigger */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Interactive Booking Modal */}
      <InteractiveBookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultClass={selectedClassForBooking}
      />
    </main>
  );
}
