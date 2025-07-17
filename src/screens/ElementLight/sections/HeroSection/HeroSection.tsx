import { useState, useEffect } from 'react';

import { Button } from '../../../../components/ui/button';

export const HeroSection = (): JSX.Element => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Des idées et des valeurs au service de vos ambitions";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/573258_Business_Stock_1920x1080.mp4" type="video/mp4" />
        {/* Fallback for unsupported video */}
        <div className="absolute inset-0 bg-gray-900" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header with Logo */}
        <div className="container mx-auto px-4 pt-4">
          <div className="flex justify-center md:justify-start">
            <div className="w-[120px] h-[80px] flex items-center justify-center">
              <img 
                src="/logo-everest.png" 
                alt="Logo EVEREST Finance" 
                className="w-full h-full object-contain drop-shadow-lg" 
              />
            </div>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Heading */}
              <h1 className="text-white mb-6">
                <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black font-['Lato',Helvetica] leading-tight tracking-wide">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-white/90 text-lg md:text-xl lg:text-2xl font-light font-['Source_Sans_Pro',Helvetica] mb-8 max-w-3xl mx-auto leading-relaxed">
                EVEREST Finance est une Société de Gestion et d&apos;Intermédiation agréée par le CREPMF. 
                Nous accompagnons nos clients dans la réalisation de leurs objectifs financiers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 text-base transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Découvrir nos services
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#435933] font-bold px-8 py-4 text-base transition-all duration-300 ease-in-out bg-transparent"
                >
                  Nous contacter
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pb-8 flex justify-center">
          <div className="animate-bounce">
            <svg 
              className="w-6 h-6 text-white/70" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3" 
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
