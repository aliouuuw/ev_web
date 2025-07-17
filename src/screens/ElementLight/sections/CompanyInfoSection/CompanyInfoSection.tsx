import React from "react";
import { QuoteIcon, MapPinIcon, AwardIcon, TrendingUpIcon, UsersIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Badge } from "../../../../components/ui/badge";

interface Statistic {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface ActionButton {
  label: string;
  href: string;
  primary?: boolean;
}

export const CompanyInfoSection = (): JSX.Element => {
  // Company achievements and statistics
  const statistics: Statistic[] = [
    {
      icon: <AwardIcon className="w-5 h-5 text-[#AD7F00]" />,
      value: "2016",
      label: "Année de création"
    },
    {
      icon: <TrendingUpIcon className="w-5 h-5 text-[#AD7F00]" />,
      value: "8+",
      label: "Marchés UEMOA"
    },
    {
      icon: <UsersIcon className="w-5 h-5 text-[#AD7F00]" />,
      value: "1000+",
      label: "Clients satisfaits"
    }
  ];

  // Company description paragraphs
  const companyDescription = [
    "EVEREST Finance est une Société de Gestion et d'Intermédiation de droit sénégalais agréée par l'Autorité du Marché Financier – UMOA (AMF-UMOA).",
    "Elle exerce tous les métiers liés aux marchés financiers et aux opérations sur le capital des entreprises : l'intermédiation en Bourse, le conseil et l'ingénierie financière, la recherche et l'analyse financière.",
    "Notre expertise reconnue et notre engagement envers l'excellence nous permettent d'accompagner nos clients dans leurs projets les plus ambitieux."
  ];

  // Action buttons with enhanced options
  const actionButtons: ActionButton[] = [
    { label: "NOTRE SOCIÉTÉ", href: "/notre-societe", primary: true },
    { label: "NOS MÉTIERS", href: "/nos-metiers" },
    { label: "NOS SERVICES", href: "/nos-services" }
  ];

  return (
    <section className="w-full bg-white">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* Left side - Enhanced Map/Location Section */}
        <div className="flex-1 relative overflow-hidden order-2 lg:order-1">
          <div
            className="w-full h-full min-h-[400px] lg:min-h-[600px] bg-cover bg-center relative"
            style={{ backgroundImage: "url('/image.png')" }}
          >
            {/* Overlay for better content readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            
            {/* Location Information Overlay */}
            <div className="absolute inset-0 flex items-end p-8 lg:p-12">
              <div className="text-white max-w-md">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-[#AD7F00] rounded-full mr-3">
                    <MapPinIcon className="w-5 h-5 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white border-none">
                    Notre Localisation
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 font-['Lato',Helvetica]">
                  Au Cœur de Dakar
                </h3>
                
                <p className="text-white/90 leading-relaxed font-['Source_Sans_Pro',Helvetica] mb-4">
                  Situés dans la zone financière de Dakar, nous sommes facilement accessibles 
                  pour tous vos rendez-vous et consultations.
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#AD7F00] rounded-full mr-3"></span>
                    <span>Dakar, Sénégal</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#AD7F00] rounded-full mr-3"></span>
                    <span>Zone financière centrale</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#AD7F00] rounded-full mr-3"></span>
                    <span>Accès facile en transport</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Enhanced Company Information */}
        <div className="flex-1 order-1 lg:order-2">
          <Card className="h-full rounded-none border-0 bg-gradient-to-br from-neutral-950 to-neutral-900">
            <CardContent className="h-full flex flex-col justify-center p-8 lg:p-16 text-white">
              
              {/* Quote Icon */}
              <div className="flex justify-center mb-8">
                <div className="p-4 bg-[#AD7F00]/20 rounded-full">
                  <QuoteIcon className="w-8 h-8 text-[#AD7F00]" />
                </div>
              </div>

              {/* Company Name */}
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-black mb-4 font-['Lato',Helvetica] tracking-wide">
                  EVEREST Finance
                </h2>
                
                {/* Decorative separator */}
                <Separator className="w-16 h-1 bg-[#AD7F00] mx-auto" />
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {statistics.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <div className="text-xl lg:text-2xl font-bold text-[#AD7F00] mb-1 font-['Lato',Helvetica]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-300 font-['Source_Sans_Pro',Helvetica]">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Company Description */}
              <div className="mb-10 space-y-4">
                {companyDescription.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="text-gray-300 leading-relaxed font-['Source_Sans_Pro',Helvetica] text-center lg:text-left"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Enhanced Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {actionButtons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.primary ? "default" : "outline"}
                    size="lg"
                    className={`
                      px-8 py-3 font-bold text-sm tracking-wider transition-all duration-300 transform hover:scale-105
                      ${button.primary 
                        ? 'bg-[#AD7F00] hover:bg-[#8F6A00] text-white border-none' 
                        : 'border-2 border-[#AD7F00] text-[#AD7F00] hover:bg-[#AD7F00] hover:text-white bg-transparent'
                      }
                    `}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-12 p-6 bg-[#AD7F00]/10 rounded-xl border border-[#AD7F00]/20">
                <div className="text-center">
                  <h3 className="text-lg font-bold mb-2 font-['Lato',Helvetica]">
                    Besoin de conseils personnalisés ?
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 font-['Source_Sans_Pro',Helvetica]">
                    Nos experts sont à votre disposition pour vous accompagner.
                  </p>
                  <Button 
                    size="sm"
                    className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white border-none"
                  >
                    Prendre rendez-vous
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}; 