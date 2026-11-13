"use client";

import { useEffect, useState } from "react";

export default function WelcomeSparkles() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  const particles = Array.from({ length: 24 });

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
      {particles.map((_, i) => {
        const left = 8 + (i * 3.8) + (Math.sin(i) * 3);
        const top = 30 + ((i % 5) * 12);
        const size = 16 + (i % 4) * 6;
        const delay = (i % 6) * 0.15;

        return (
          <div
            key={i}
            className="absolute animate-float opacity-80"
            style={{
              left: `${left}vw`,
              top: `${top}vh`,
              animationDelay: `${delay}s`,
              animationDuration: `${2.2 + (i % 3) * 0.4}s`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width={size}
              height={size}
              fill={i % 2 === 0 ? "#FFB300" : "#D81B60"}
              className="drop-shadow-md"
            >
              <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
}
