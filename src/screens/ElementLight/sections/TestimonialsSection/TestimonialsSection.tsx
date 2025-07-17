import React from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const TestimonialsSection = (): JSX.Element => {
  // Company description data
  const companyDescription = [
    "EVEREST Finance est une Société de Gestion et d'Intermédiation de droit et agréée par l'autorité du Marché Financier – UMOA (AMF-UMOA).",
    "Elle exerce tous les métiers liés aux marchés financiers et aux opérations sur le capital des entreprises : l'intermédiation en Bourse, le conseil et l'ingénierie financière, la recherche et l'analyse financière.",
  ];

  // Action buttons data
  const actionButtons = [
    { label: "NOTRE SOCIÉTÉ", href: "#" },
    { label: "NOS MÉTIERS", href: "#" },
  ];

  return (
    <section className="flex flex-col md:flex-row w-full">
      {/* Left side - Map image */}
      <div className="flex-1 relative h-[536px] overflow-hidden">
        <img
          className="w-full h-auto object-cover"
          alt="Map background"
          src="/image.png"
        />
      </div>

      {/* Right side - Company information */}
      <Card className="flex-1 rounded-none border-0">
        <CardContent className="bg-neutral-950 text-macafricansgicomwhite p-0 h-[536px]">
          <div className="flex flex-col items-center p-[95px] h-full">
            {/* Quote icon */}
            <div className="mb-7">
              <img
                className="w-[42px] h-[42px]"
                alt="Quote icon"
                src="/icon.svg"
              />
            </div>

            {/* Company name */}
            <h2 className="font-['Lato',Helvetica] font-black text-3xl text-center tracking-normal leading-9 mb-7">
              EVEREST Finance
            </h2>

            {/* Gold separator line */}
            <Separator className="w-[38px] h-1 bg-transparent border-b-4 border-[#AD7F00] mb-7" />

            {/* Company description */}
            <div className="font-['Source_Sans_Pro',Helvetica] font-normal text-[#dddddd] text-[15px] text-center leading-[25.5px] mb-10">
              {companyDescription.map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-2.5 justify-center">
              {actionButtons.map((button, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="px-[35px] py-[17px] border-2 border-[#AD7F00] bg-transparent rounded-none hover:bg-[#AD7F00]/10"
                >
                  <span className="font-['Source_Sans_Pro',Helvetica] font-bold text-[13px] tracking-[0.8px] leading-[22.1px]">
                    {button.label}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
