import React from "react";
import { UserIcon, BriefcaseIcon, HandRaisedIcon } from "@heroicons/react/24/outline";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const ResourcesSection = (): JSX.Element => {
  // Data for the three management service cards
  const managementServices = [
    {
      id: "libre",
      title: "LA GESTION LIBRE",
      description:
        "Si vous souhaitez effectuer vous-même vos choix d'investissement, à tout moment et en toute autonomie, la Gestion Libre est faite pour vous.",
      icon: <UserIcon className="w-[32.58px] h-[38px] text-[#AD7F00]" />,
      bgColor: "bg-[#242424]",
      separatorWidth: "w-[164px]",
      buttonAlignment: "items-start",
      textAlignment: "text-left",
    },
    {
      id: "mandat",
      title: "LA GESTION SOUS\nMANDAT",
      description:
        "Si vous souhaitez déléguer totalement la gestion de votre portefeuille à un gérant professionnel, avec la Gestion sous Mandat, vous bénéficiez de l'expérience de notre équipe dédiée.",
      icon: <BriefcaseIcon className="w-[38px] h-[38px] text-[#AD7F00]" />,
      bgColor: "bg-[#435933]",
      separatorWidth: "w-[197px]",
      buttonAlignment: "items-center",
      textAlignment: "text-left",
    },
    {
      id: "assistee",
      title: "LA GESTION\nASSISTÉE",
      description:
        "La gestion assistée est l'une des meilleures solutions pour maximiser la performance de votre portefeuille. Nos experts sont disponibles pour vous assister et notre tarification est accessible !",
      icon: <HandRaisedIcon className="w-[38px] h-[38px] text-[#AD7F00]" />,
      bgColor: "bg-[#26351f]",
      separatorWidth: "w-[197px]",
      buttonAlignment: "items-end",
      textAlignment: "text-right",
    },
  ];

  return (
    <section className="flex w-full max-w-[1180px] mx-auto items-start pt-[30px] pb-0 px-[15px]">
      {managementServices.map((service) => (
        <div key={service.id} className="flex-1">
          <Card
            className={`relative h-[602.92px] rounded-none border-0 ${service.bgColor}`}
          >
            <CardContent className="flex flex-col h-full pt-[100px] pb-[65px] px-[60px]">
              <div className="flex flex-col w-[263px] items-start pt-0 pb-[35px] px-[15px]">
                <div className="inline-flex min-w-[38px] min-h-[38px] items-start justify-center relative">
                  <div className="inline-flex items-start">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="flex flex-col w-[233px] items-start pt-0 pb-[2.3px] px-0 ml-[15px]">
                <h3 className="relative w-fit mt-[-1.00px] [font-family:'Lato',Helvetica] font-black text-macafricansgicomwhite text-[23px] tracking-[0] leading-[27.6px] whitespace-pre-line">
                  {service.title}
                </h3>
              </div>

              <Separator
                className={`${service.separatorWidth} h-px ml-[15px] mt-[15px] mb-[30px] bg-[#AD7F00]`}
              />

              <div className="flex flex-col w-[233px] items-start ml-[15px]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-[#dddddd] text-[15px] tracking-[0] leading-[25.5px] whitespace-pre-line">
                  {service.description}
                </p>
              </div>

              <div
                className={`flex flex-col w-[263px] ${service.buttonAlignment} pt-0 pb-[30px] px-[15px] mt-auto`}
              >
                <Button
                  variant="outline"
                  className={`px-[35px] py-[17px] border-2 border-[#AD7F00] rounded-none bg-transparent hover:bg-[#AD7F00] hover:text-macafricansgicomwhite transition-colors ${service.textAlignment}`}
                >
                  <span className="mt-[-2.00px] [font-family:'Source_Sans_Pro',Helvetica] font-bold text-macafricansgicomwhite text-[13px] tracking-[0.80px] leading-[22.1px] whitespace-nowrap">
                    DÉCOUVRIR
                  </span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </section>
  );
};
