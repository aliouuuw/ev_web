import { ChevronLeftIcon, ChevronRightIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Separator } from "../../../../components/ui/separator";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  image: string;
  bio?: string;
  linkedin?: string;
  email?: string;
}

export const TeamProfiles = (): JSX.Element => {
  // Team members data with enhanced information
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Alioune Ndour DIOUF",
      position: "Président du Conseil d'Administration",
      image: "/pca-mac--png.png",
      bio: "Leader expérimenté avec plus de 20 ans d'expertise dans la finance et l'investissement.",
      linkedin: "#",
      email: "a.diouf@everestfinance.com"
    },
    {
      id: 2,
      name: "Khady DIOUF",
      position: "Administrateur Directeur Général",
      image: "/mouradbc-png.png",
      bio: "Spécialiste en gestion d'actifs et stratégie d'investissement sur les marchés africains.",
      linkedin: "#",
      email: "k.diouf@everestfinance.com"
    },
    {
      id: 3,
      name: "Mamadou GUEYE",
      position: "Directeur Général Adjoint",
      image: "/fathis-png.png",
      bio: "Expert en analyse financière et développement des marchés de capitaux.",
      linkedin: "#",
      email: "m.gueye@everestfinance.com"
    },
    {
      id: 4,
      name: "Sokhna Moumy MBACKE",
      position: "Directeur de Contrôle de Gestion",
      image: "/img-7985-3-e1690893137314-png.png",
      bio: "Spécialiste en contrôle de gestion et optimisation des performances financières.",
      linkedin: "#",
      email: "s.mbacke@everestfinance.com"
    },
  ];

  return (
    <section className="relative w-full py-16 lg:py-24 bg-gradient-to-br from-[#303030] to-[#1a1a1a]">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#AD7F00]/20 rounded-full mb-6">
            <svg 
              className="w-8 h-8 text-[#AD7F00]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
              />
            </svg>
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-6 font-['Lato',Helvetica] tracking-wide">
            Découvrez Notre Équipe
          </h2>
          
          <Separator className="w-24 h-1 bg-[#AD7F00] mx-auto mb-8" />
          
          <p className="text-lg lg:text-xl text-gray-300 leading-relaxed font-['Source_Sans_Pro',Helvetica] max-w-3xl mx-auto">
            Une équipe de professionnels expérimentés dédiée à votre succès financier, 
            combinant expertise locale et standards internationaux.
          </p>
        </div>

        {/* Team Carousel */}
        <div className="relative">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            {/* Navigation Controls */}
            <div className="flex justify-end mb-8 gap-3">
              <CarouselPrevious className="static translate-x-0 translate-y-0 h-12 w-12 bg-[#AD7F00] hover:bg-[#8F6A00] border-none text-white rounded-full transition-all duration-300 hover:scale-110">
                <ChevronLeftIcon className="w-5 h-5" />
                <span className="sr-only">Membre précédent</span>
              </CarouselPrevious>
              <CarouselNext className="static translate-x-0 translate-y-0 h-12 w-12 bg-[#AD7F00] hover:bg-[#8F6A00] border-none text-white rounded-full transition-all duration-300 hover:scale-110">
                <ChevronRightIcon className="w-5 h-5" />
                <span className="sr-only">Membre suivant</span>
              </CarouselNext>
            </div>

            <CarouselContent className="-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="group h-full bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 overflow-hidden">
                    {/* Member Image */}
                    <div className="relative overflow-hidden">
                      <div
                        className="w-full h-64 bg-cover bg-center bg-gray-200 transition-transform duration-500 group-hover:scale-110"
                        style={{ backgroundImage: `url(${member.image})` }}
                      >
                        {/* Overlay for hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Social Links */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-10 w-10 bg-white/90 hover:bg-white text-[#435933] rounded-full"
                          >
                            <LinkedinIcon className="w-4 h-4" />
                            <span className="sr-only">LinkedIn de {member.name}</span>
                          </Button>
                          <Button
                            size="icon"
                            variant="secondary"
                            className="h-10 w-10 bg-white/90 hover:bg-white text-[#435933] rounded-full"
                          >
                            <MailIcon className="w-4 h-4" />
                            <span className="sr-only">Email de {member.name}</span>
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Member Information */}
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-[#435933] mb-2 font-['Lato',Helvetica] leading-tight">
                          {member.name}
                        </h3>
                        <p className="text-[#AD7F00] font-semibold text-sm uppercase tracking-wider font-['Source_Sans_Pro',Helvetica]">
                          {member.position}
                        </p>
                      </div>
                      
                      <Separator className="w-12 h-0.5 bg-[#AD7F00] mb-4" />
                      
                      {member.bio && (
                        <p className="text-gray-600 text-sm leading-relaxed font-['Source_Sans_Pro',Helvetica] flex-1">
                          {member.bio}
                        </p>
                      )}
                      
                      {/* Contact Info */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500 font-['Source_Sans_Pro',Helvetica]">
                            Contacter
                          </span>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-[#AD7F00] hover:text-[#8F6A00] hover:bg-[#AD7F00]/10"
                            >
                              <LinkedinIcon className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="h-8 w-8 p-0 text-[#AD7F00] hover:text-[#8F6A00] hover:bg-[#AD7F00]/10"
                            >
                              <MailIcon className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-[#435933] to-[#26351f] border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
                Rejoignez Notre Équipe
              </h3>
              <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
                Nous recherchons toujours des talents exceptionnels pour renforcer notre équipe. 
                Découvrez nos opportunités de carrière.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Voir les postes ouverts
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#435933] font-bold px-8 py-4 transition-all duration-300 bg-transparent"
                >
                  Candidature spontanée
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
