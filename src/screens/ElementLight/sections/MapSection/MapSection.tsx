import React, { useEffect, useState } from "react";

import { Button } from "../../../../components/ui/button";

// Animation CSS pour le titre principal
const animatedTitleStyle = `
@keyframes fadeSlideUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}`;
if (typeof document !== 'undefined' && !document.getElementById('fadeSlideUp-style')) {
  const style = document.createElement('style');
  style.id = 'fadeSlideUp-style';
  style.innerHTML = animatedTitleStyle;
  document.head.appendChild(style);
}

export const MapSection = (): JSX.Element => {
  // Content data for the hero section
  const heroContent = {
    title: "Des idées et des valeurs au service de vos ambitions",
    subtitle: "",
    description: [
      "EVEREST Finance est une Société de Gestion et d’Intermédiation opérant sous le numéro",
      "d’agrément n° SGI /DA/2016/60 reçu du Conseil Régional de l’Epargne Publique et du",
      "Marché Financier en date du 30 Mars 2016.",
    ],
    buttons: [
      {
        text: "OUVRIR UN COMPTE",
        variant: "default",
        className:
          "bg-[#AD7F00] text-macafricansgicomwhite font-black text-[13px] tracking-[1px] px-8 py-[18px] rounded-[3px]",
      },
    ],
  };

  // Animation machine à écrire pour le titre
  const [displayedTitle, setDisplayedTitle] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedTitle(heroContent.title.slice(0, i + 1));
      i++;
      if (i === heroContent.title.length) clearInterval(interval);
    }, 40); // vitesse d'apparition des lettres
    return () => clearInterval(interval);
  }, [heroContent.title]);

  return (
    <section className="relative w-full h-[877px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full bg-[url(/imgslider.png)] bg-cover bg-center" />

      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col">
        {/* Logo */}
        <div className="w-[120px] h-[80px] mt-[4px] ml-[347px] flex items-center justify-center">
          <img
            src="/logo everest.png"
            alt="Logo EVEREST Finance"
            className="w-full h-full object-contain"
            style={{ maxWidth: '100%', maxHeight: '100%' }}
          />
        </div>

        {/* Main Content */}
        <div className="ml-[341px] mt-[30px] max-w-[1012px] flex flex-col items-center relative">
          {/* Logo absolute supprimé */}
          {/* Title */}
          <div
            className="mt-[160px] font-macafricansgi-com-lato-bold font-[number:var(--macafricansgi-com-lato-bold-font-weight)] text-macafricansgicomwhite text-[70px] tracking-[var(--macafricansgi-com-lato-bold-letter-spacing)] leading-tight [font-style:var(--macafricansgi-com-lato-bold-font-style)]"
            style={{ minHeight: 90 }}
          >
            {displayedTitle}
            <span className="inline-block animate-pulse">|</span>
          </div>

          {/* Subtitle */}
          <div className="mt-[40px] font-macafricansgi-com-lato-light font-[number:var(--macafricansgi-com-lato-light-font-weight)] text-macafricansgicomwhite text-[length:var(--macafricansgi-com-lato-light-font-size)] tracking-[var(--macafricansgi-com-lato-light-letter-spacing)] leading-[var(--macafricansgi-com-lato-light-line-height)] [font-style:var(--macafricansgi-com-lato-light-font-style)]">
            {heroContent.subtitle}
          </div>

          {/* Description */}
          <div className="mt-[65px] ml-[6px] space-y-[2px] w-full flex flex-col items-start">
            {heroContent.description.map((line, index) => (
              <div
                key={`desc-${index}`}
                className="font-macafricansgi-com-lato-regular font-[number:var(--macafricansgi-com-lato-regular-font-weight)] text-macafricansgicomwhite text-xl tracking-[var(--macafricansgi-com-lato-regular-letter-spacing)] leading-tight [font-style:var(--macafricansgi-com-lato-regular-font-style)] whitespace-normal text-left"
              >
                {line}
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex mt-[37px] ml-0 w-full justify-start space-x-3">
            {heroContent.buttons.map((button, index) => (
              <Button
                key={`btn-${index}`}
                variant={button.variant as unknown as Button['variant']}
                className={button.className}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
