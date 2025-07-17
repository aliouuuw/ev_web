import React from "react";
import { UserIcon, BriefcaseIcon, HandIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Badge } from "../../../../components/ui/badge";

interface ManagementService {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: React.ReactNode;
  bgGradient: string;
  features: string[];
  recommended?: boolean;
}

export const ServicesSection = (): JSX.Element => {
  // Enhanced management services data
  const managementServices: ManagementService[] = [
    {
      id: "libre",
      title: "LA GESTION LIBRE",
      shortTitle: "Gestion Libre",
      description:
        "Prenez le contrôle total de vos investissements. Effectuez vos choix d'investissement à tout moment et en toute autonomie avec notre plateforme intuitive.",
      icon: <UserIcon className="w-8 h-8 text-white" />,
      bgGradient: "bg-gradient-to-br from-[#242424] to-[#1a1a1a]",
      features: [
        "Autonomie complète",
        "Plateforme en ligne 24/7",
        "Frais réduits",
        "Formation incluse"
      ]
    },
    {
      id: "mandat",
      title: "LA GESTION SOUS MANDAT",
      shortTitle: "Gestion Sous Mandat",
      description:
        "Déléguez la gestion de votre portefeuille à nos experts. Bénéficiez de l'expérience et de l'expertise de notre équipe dédiée pour optimiser vos rendements.",
      icon: <BriefcaseIcon className="w-8 h-8 text-white" />,
      bgGradient: "bg-gradient-to-br from-[#435933] to-[#26351f]",
      features: [
        "Gestion professionnelle",
        "Stratégie personnalisée",
        "Suivi régulier",
        "Reporting détaillé"
      ],
      recommended: true
    },
    {
      id: "assistee",
      title: "LA GESTION ASSISTÉE",
      shortTitle: "Gestion Assistée",
      description:
        "Le parfait équilibre entre autonomie et accompagnement. Maximisez la performance de votre portefeuille avec l'assistance de nos experts à tarification accessible.",
      icon: <HandIcon className="w-8 h-8 text-white" />,
      bgGradient: "bg-gradient-to-br from-[#26351f] to-[#1a2415]",
      features: [
        "Accompagnement expert",
        "Conseils personnalisés",
        "Tarification attractive",
        "Flexibilité maximale"
      ]
    },
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#AD7F00]/10 rounded-full mb-6">
            <BriefcaseIcon className="w-8 h-8 text-[#AD7F00]" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#435933] mb-6 font-['Lato',Helvetica] tracking-wide">
            NOS SERVICES DE GESTION
          </h2>
          
          <Separator className="w-24 h-1 bg-[#AD7F00] mx-auto mb-8" />
          
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-['Source_Sans_Pro',Helvetica] max-w-3xl mx-auto">
            Choisissez le service de gestion qui correspond le mieux à vos besoins, 
            votre profil d&apos;investisseur et vos objectifs financiers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
          {managementServices.map((service, index) => (
            <Card
              key={service.id}
              className={`
                group relative overflow-hidden border-0 h-full lg:h-[600px] transition-all duration-500 hover:scale-105 hover:z-10
                ${service.bgGradient}
                ${index === 1 ? 'lg:-mx-4 lg:scale-110 lg:z-20' : ''}
              `}
            >
              {/* Recommended Badge */}
              {service.recommended && (
                <div className="absolute top-6 right-6 z-30">
                  <Badge className="bg-[#AD7F00] text-white border-none px-3 py-1 text-xs font-bold">
                    RECOMMANDÉ
                  </Badge>
                </div>
              )}

              <CardContent className="flex flex-col h-full p-8 lg:p-12 text-white relative">
                
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 transform rotate-12 translate-x-8 -translate-y-8">
                    {service.icon}
                  </div>
                </div>

                {/* Service Icon */}
                <div className="mb-8 relative z-10">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#AD7F00] rounded-full">
                    {service.icon}
                  </div>
                </div>

                {/* Service Title */}
                <div className="mb-6 relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-black font-['Lato',Helvetica] leading-tight mb-2">
                    {service.shortTitle}
                  </h3>
                  <Separator className="w-16 h-1 bg-[#AD7F00]" />
                </div>

                {/* Service Description */}
                <div className="mb-8 flex-1 relative z-10">
                  <p className="text-gray-200 leading-relaxed font-['Source_Sans_Pro',Helvetica] mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-[#AD7F00] rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm text-gray-300 font-['Source_Sans_Pro',Helvetica]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full group-hover:bg-[#AD7F00] group-hover:border-[#AD7F00] group-hover:text-white border-2 border-[#AD7F00] text-[#AD7F00] bg-transparent transition-all duration-300 font-bold"
                  >
                    <span className="mr-2">DÉCOUVRIR</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-[#435933] to-[#26351f] border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
                Besoin d&apos;aide pour choisir ?
              </h3>
              <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
                Nos conseillers sont disponibles pour vous aider à sélectionner le service de gestion 
                le plus adapté à votre profil et vos objectifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Parler à un conseiller
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#435933] font-bold px-8 py-4 transition-all duration-300 bg-transparent"
                >
                  Comparer les services
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}; 