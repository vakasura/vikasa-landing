"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Check if it's a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice && !isAnimating) {
      e.preventDefault();
      setIsAnimating(true);

      // Show animation for 1.5 seconds, then navigate
      setTimeout(() => {
        window.open("https://cal.com/gaurav-ranganath-qtw4rb/30min", "_blank", "noopener,noreferrer");
        setIsAnimating(false);
      }, 1500);
    }
    // Desktop: let the link work normally with hover effect
  };

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center">
      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="logo-container mb-4 mx-auto relative" style={{ width: '200px', height: '200px' }}>
              <Image
                src="/vikasa-logo.svg"
                alt="Vikasa Logo"
                width={200}
                height={200}
                className="logo-slow absolute inset-0"
              />
              <Image
                src="/vikasa-logo.svg"
                alt="Vikasa Logo"
                width={200}
                height={200}
                className="logo-fast absolute inset-0"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-light mb-8 tracking-tight relative z-10">
              vikasa
            </h1>
            <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto relative z-10">
              Venture advisory and hands-on support for early-stage Canadian founders
            </p>
            <Button
              size="lg"
              className={`button-creative rounded-none font-light px-8 relative z-10 ${isAnimating ? 'button-animating' : ''}`}
              asChild
            >
              <a
                href="https://cal.com/gaurav-ranganath-qtw4rb/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleButtonClick}
              >
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
