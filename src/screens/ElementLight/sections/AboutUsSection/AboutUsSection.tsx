import React from 'react';
import { GroupIcon, TrendingUpIcon, ShieldCheckIcon, HeartIcon } from 'lucide-react';

import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';
import { Separator } from '../../../../components/ui/separator';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const AboutUsSection = (): JSX.Element => {
  const features: FeatureItem[] = [
    {
      icon: <ShieldCheckIcon className="w-6 h-6 text-[#AD7F00]" />,
      title: "Expertise Reconnue",
      description: "Plus de 7 ans d'expérience dans la gestion et l'intermédiation financière sur les marchés de l'UEMOA."
    },
    {
      icon: <TrendingUpIcon className="w-6 h-6 text-[#AD7F00]" />,
      title: "Performance",
      description: "Des solutions d'investissement performantes adaptées à vos objectifs et votre profil de risque."
    },
    {
      icon: <HeartIcon className="w-6 h-6 text-[#AD7F00]" />,
      title: "Proximité",
      description: "Un accompagnement personnalisé et une relation de confiance avec nos clients institutionnels et particuliers."
    }
  ];

  const stats = [
    { number: "SGI/DA/2016/60", label: "Numéro d'agrément CREPMF" },
    { number: "2016", label: "Année de création" },
    { number: "8+", label: "Marchés UEMOA" },
    { number: "1000+", label: "Clients accompagnés" }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 lg:py-24">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="p-3 bg-[#AD7F00]/10 rounded-full">
              <GroupIcon className="w-8 h-8 text-[#AD7F00]" />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#435933] mb-6 font-['Lato',Helvetica] tracking-wide">
            À PROPOS DE NOUS
          </h2>
          
          <Separator className="w-24 h-1 bg-[#AD7F00] mx-auto mb-8" />
          
          <div className="max-w-4xl mx-auto">
            <p className="text-lg lg:text-xl text-[#435933] leading-relaxed font-['Source_Sans_Pro',Helvetica] mb-6">
              EVEREST Finance est une Société de Gestion et d&apos;Intermédiation (SGI) agréée par le Conseil Régional de l&apos;Épargne Publique et des Marchés Financiers (CREPMF).
            </p>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed font-['Source_Sans_Pro',Helvetica]">
              Notre mission est de vous accompagner dans la réalisation de vos objectifs financiers avec expertise, éthique et innovation, en offrant des solutions sur-mesure adaptées à vos besoins.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-[#AD7F00]/10 rounded-full group-hover:bg-[#AD7F00]/20 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-[#435933] mb-4 font-['Lato',Helvetica]">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed font-['Source_Sans_Pro',Helvetica]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-black text-[#AD7F00] mb-2 font-['Lato',Helvetica]">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base text-gray-600 font-medium font-['Source_Sans_Pro',Helvetica]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#435933] rounded-2xl p-8 lg:p-12 text-white mb-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 font-['Lato',Helvetica]">
              Notre Mission
            </h3>
            <p className="text-lg lg:text-xl leading-relaxed font-['Source_Sans_Pro',Helvetica] opacity-90 mb-8">
              Offrir des solutions sur-mesure, innovantes et performantes dans le respect des valeurs d&apos;éthique, de transparence et de proximité. Nous nous engageons à accompagner nos clients dans l&apos;optimisation de leur patrimoine financier avec une expertise reconnue sur les marchés de l&apos;UEMOA.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                Découvrir nos services
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-[#435933] font-bold px-8 py-4 transition-all duration-300 bg-transparent"
              >
                Notre équipe
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#AD7F00] to-[#8F6A00] border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
                Prêt à commencer votre parcours d&apos;investissement ?
              </h3>
              <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
                Contactez nos experts pour une consultation personnalisée et découvrez comment nous pouvons vous aider à atteindre vos objectifs financiers.
              </p>
              <Button 
                size="lg"
                variant="secondary"
                className="bg-white text-[#435933] hover:bg-gray-100 font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105"
              >
                Contactez-nous maintenant
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
