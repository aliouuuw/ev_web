import React from "react";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

import { Card, CardContent } from "../../../../components/ui/card";

export const FooterSection = (): JSX.Element => {
  // Company information data
  const companyInfo = {
    description: `EVEREST Finance est une Société de Gestion et
d'Intermédiation de droit et agréée par
l'Autorité du Marché Financier (AMF-UMOA) sous le
numéro d'agrément SGI / 2017-03`,
  };

  // Recent articles data
  const recentArticles = [
    "Revue Hebdo du 23 au 27 Juin",
    "Revue Hebdo du 16 au 20 Juin",
    "Revue Hebdo du 10 au 13 Juin",
    "BOA CI – Juin",
  ];

  // Site menu data
  const siteMenuItems = [
    { name: "Accueil", col: 1, row: 1 },
    { name: "Notre société", col: 2, row: 1 },
    { name: "Nos métiers", col: 1, row: 2 },
    { name: "Nos Services", col: 2, row: 2 },
    { name: "Bourse", col: 1, row: 3 },
    { name: "Actualités", col: 2, row: 3 },
    { name: "Contact", col: 1, row: 4 },
  ];

  return (
    <footer className="flex flex-col w-full items-start bg-transparent">
      <div className="flex flex-col items-start py-[70px] px-4 md:px-8 lg:px-[370px] w-full bg-[#202020]">
        <div className="relative w-full max-w-[1180px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About section */}
            <Card className="border-0 bg-transparent">
              <CardContent className="p-0 space-y-8">
                <div className="pt-0">
                  <h3 className="[font-family:'Lato',Helvetica] font-bold text-macafricansgicomwhite text-[13px] tracking-[1.50px] leading-[15.6px]">
                    A PROPOS
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-5">
                  <div className="relative w-[182px] h-[250px] bg-[url(/logo-macafrican-bleu-jpg.png)] bg-cover bg-[50%_50%]" />
                  <p className="[font-family:'Source_Sans_Pro',Helvetica] text-[#ababab] text-[15px] leading-[25.5px] font-normal tracking-[0]">
                    {companyInfo.description}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent articles section */}
            <Card className="border-0 bg-transparent relative border-l border-[#3f3f3f] pl-8">
              <CardContent className="p-0 space-y-8">
                <div className="pt-0">
                  <h3 className="[font-family:'Lato',Helvetica] font-bold text-macafricansgicomwhite text-[13px] tracking-[1.50px] leading-[15.6px]">
                    ARTICLES RÉCENTS
                  </h3>
                </div>

                <div className="flex flex-col items-start gap-[15px]">
                  {recentArticles.map((article, index) => (
                    <div
                      key={`article-${index}`}
                      className="flex pl-7 pr-0 pt-0 pb-4 relative w-full border-b border-[#3f3f3f]"
                    >
                      <div className="inline-flex items-start">
                        <p className="mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-macafricansgicomsilver-chalice text-base tracking-[0] leading-5 whitespace-nowrap">
                          {article}
                        </p>
                      </div>
                      <div className="flex flex-col w-5 h-5 items-start absolute top-0 left-0">
                        <DocumentTextIcon className="w-5 h-5 text-[#AD7F00]" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Site menu section */}
            <Card className="border-0 bg-transparent relative border-l border-[#3f3f3f] pl-8">
              <CardContent className="p-0 space-y-8">
                <div className="pt-0">
                  <h3 className="[font-family:'Lato',Helvetica] font-bold text-macafricansgicomwhite text-[13px] tracking-[1.50px] leading-[15.6px]">
                    MENU DE NOTRE SITE
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-y-[34px] gap-x-0">
                  {siteMenuItems.map((item, index) => (
                    <div
                      key={`menu-${index}`}
                      className={`flex w-[161px] col-start-${item.col} row-start-${item.row}`}
                    >
                      <div className="inline-flex items-start">
                        <p className="mt-[-1.00px] [font-family:'Source_Sans_Pro',Helvetica] font-normal text-macafricansgicomsilver-chalice text-[15px] tracking-[0] leading-[25.5px] whitespace-nowrap">
                          {item.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="flex flex-col items-center w-full py-[38px] px-4 md:px-8 lg:px-[385px] bg-macafricansgicomcod-gray">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <p className="relative w-fit mt-[-1.00px] font-macafricansgi-com-source-sans-pro-regular-upper font-[number:var(--macafricansgi-com-source-sans-pro-regular-upper-font-weight)] text-macafricansgicomgray text-[length:var(--macafricansgi-com-source-sans-pro-regular-upper-font-size)] text-center tracking-[var(--macafricansgi-com-source-sans-pro-regular-upper-letter-spacing)] leading-[var(--macafricansgi-com-source-sans-pro-regular-upper-line-height)] whitespace-nowrap [font-style:var(--macafricansgi-com-source-sans-pro-regular-upper-font-style)]">
            2022 © TOUS LES DROITS RÉSERVÉS EVEREST Finance
          </p>
        </div>
      </div>
    </footer>
  );
};
