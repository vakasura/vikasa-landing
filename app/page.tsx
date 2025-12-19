"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMainClick = (e: React.MouseEvent | React.TouchEvent) => {
    // Only toggle if not clicking the button
    if (!(e.target as HTMLElement).closest('.contact-button')) {
      toggleDarkMode();
    }
  };

  return (
    <main
      className={`h-screen flex items-center justify-center transition-colors duration-700 ease-in-out relative overflow-hidden ${
        isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
      onClick={handleMainClick}
      onTouchEnd={handleMainClick}
    >
      {/* Animated Background */}
      <div className="background-gradient" />

      {/* Night Sky Stars */}
      <div className={`stars-container ${isDarkMode ? 'stars-visible' : ''}`}>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`logo-container mb-4 mx-auto relative ${isLoaded ? "logo-loaded" : ""}`}
              style={{ width: "200px", height: "200px" }}
            >
              <Image
                src="/vikasa-logo.svg"
                alt="Vikasa Logo"
                width={200}
                height={200}
                className={`logo-slow absolute inset-0 ${isDarkMode ? 'logo-inverted' : ''}`}
              />
            </div>
            <h1
              className={`text-4xl md:text-5xl font-light mb-8 tracking-tight relative z-10 ${
                isLoaded ? "title-loaded" : ""
              }`}
            >
              vikasa
            </h1>
            <p
              className={`text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto relative z-10 ${
                isLoaded ? "description-loaded" : ""
              }`}
            >
              Venture advisory and hands-on support for early-stage Canadian founders
            </p>
            <Button
              size="lg"
              className={`contact-button rounded-lg font-light px-8 relative z-10 transition-all duration-700 ease-in-out hover:-translate-y-1 hover:shadow-2xl ${
                isLoaded ? "button-loaded" : ""
              } ${
                isDarkMode ? 'bg-white text-black hover:bg-white hover:brightness-90' : 'bg-black text-white hover:bg-white hover:text-black'
              }`}
              asChild
            >
              <a
                href="https://cal.com/gaurav-ranganath-qtw4rb/30min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
