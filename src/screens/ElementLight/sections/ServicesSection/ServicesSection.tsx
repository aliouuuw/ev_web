import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { Card, CardContent } from "../../../../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../../components/ui/carousel";
import { Separator } from "../../../../components/ui/separator";

export const ServicesSection = (): JSX.Element => {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alioune Ndour DIOUF",
      position: "Président du Conseil d'Administration",
      image: "/pca-mac--png.png",
    },
    {
      id: 2,
      name: "Khady DIOUF",
      position: "Administrateur Directeur Général",
      image: "/mouradbc-png.png",
    },
    {
      id: 3,
      name: "Mamadou GUEYE",
      position: "Directeur Général Adjoint",
      image: "/fathis-png.png",
    },
    {
      id: 4,
      name: "Sokhna Moumy MBACKE",
      position: "Directeur de Contrôle de Gestion",
      image: "/img-7985-3-e1690893137314-png.png",
    },
  ];

  return (
    <section className="relative w-full py-14 bg-[#303030]">
      <div className="container max-w-[1180px] mx-auto px-4">
        <div className="max-w-[766px] mb-8">
          <div className="space-y-5 px-4">
            <h2 className="font-macafricansgi-com-semantic-heading-3 text-macafricansgicomwhite text-[length:var(--macafricansgi-com-semantic-heading-3-font-size)] tracking-[var(--macafricansgi-com-semantic-heading-3-letter-spacing)] leading-[var(--macafricansgi-com-semantic-heading-3-line-height)] [font-style:var(--macafricansgi-com-semantic-heading-3-font-style)]">
              Découvrez notre équipe
            </h2>
            <Separator className="bg-[#494949]" />
          </div>
        </div>

        <div className="space-y-4">
          <Carousel className="w-full overflow-hidden">
            <div className="flex justify-end mb-4">
              <div className="flex space-x-2">
                <CarouselPrevious className="static transform-none h-[29px] w-[29px] rounded-none shadow-none border-none">
                  <ArrowLeftIcon className="w-[29px] h-[29px] text-[#AD7F00]" />
                </CarouselPrevious>
                <CarouselNext className="static transform-none h-[29px] w-[29px] rounded-none shadow-none border-none">
                  <ArrowRightIcon className="w-[29px] h-[29px] text-[#AD7F00]" />
                </CarouselNext>
              </div>
            </div>
            <CarouselContent className="ml-0">
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.id}
                  className="pl-0 md:basis-1/4 lg:basis-1/4 mx-2"
                >
                  <Card className="rounded-[5px] overflow-hidden border-none">
                    <div
                      className="w-full h-[153px] bg-cover bg-center"
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                    <CardContent className="flex flex-col gap-[7px] pt-[35px] pb-[25px] px-8 bg-neutral-200">
                      <div className="w-full">
                        <h3 className="mt-[-1px] [font-family:'Lato',Helvetica] font-bold text-neutral-950 text-base tracking-[1px] leading-[19.2px]">
                          {member.name}
                        </h3>
                      </div>
                      <div className="w-full">
                        <p className="mt-[-1px] [font-family:'Inter',Helvetica] font-normal text-macafricansgicomblue-stone text-[11px] tracking-[0.2px] leading-[22.1px] whitespace-pre-line">
                          {member.position}
                        </p>
                      </div>
                      <div className="w-[45px] h-3.5 border-b-2 border-[#666666]" />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
