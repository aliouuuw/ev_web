import React from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../../../../components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";

export const CallToActionSection = (): JSX.Element => {
  // Category tabs data
  const categoryTabs = [
    { id: "all", label: "All", active: true },
    { id: "actualites", label: "Actualités" },
    { id: "analyses", label: "Analyses Financières" },
    { id: "bourse", label: "Bourse" },
    { id: "calendrier", label: "Calendrier économique" },
    { id: "communique", label: "Communiqué de presse" },
    { id: "fiches", label: "Fiches" },
    { id: "valeurs", label: "valeurs" },
    { id: "introduction", label: "Introduction En Bourse" },
    { id: "lexique", label: "Lexique" },
    { id: "liens", label: "Liens utiles" },
    { id: "opportunite", label: "Opportunité d'investissement" },
    { id: "societes", label: "Societés cotées" },
    { id: "textes", label: "Textes réglementaires et Lois" },
    { id: "weekly", label: "Revue Hebdo EVEREST Finance" },
  ];

  // Article cards data
  const articleCards = [
    {
      id: 1,
      date: "30 JUIN 2025",
      title: "Revue Hebdo du 23 au 27 Juin 2025",
      image: "/note-dinformation-2-png.png",
      tags: ["EVEREST Finance", "REVUE HEBDO EVEREST Finance"],
    },
    {
      id: 2,
      date: "23 JUIN 2025",
      title: "Revue Hebdo du 16 au 20 Juin 2025",
      image: "/note-dinformation-2-png-1.png",
      tags: ["EVEREST Finance", "REVUE HEBDO EVEREST Finance"],
    },
    {
      id: 3,
      date: "16 JUIN 2025",
      title: "Revue Hebdo du 10 au 13 Juin 2025",
      image: "/note-dinformation-2-png-2.png",
      tags: ["EVEREST Finance", "REVUE HEBDO EVEREST Finance"],
    },
    {
      id: 4,
      date: "10 JUIN 2025",
      title: "BOA CI – Juin 2025",
      image: "/mac-banniere-article-1-png.png",
      tags: ["EVEREST Finance", "FICHES VALEURS"],
    },
    {
      id: 5,
      date: "10 JUIN 2025",
      title: "Revue Hebdo du 02 au 05 Juin 2025",
      image: "/note-dinformation-2-png-3.png",
      tags: ["EVEREST Finance", "REVUE HEBDO EVEREST Finance"],
    },
    {
      id: 6,
      date: "3 JUIN 2025",
      title: "Interview de M. Fethi\nESSGHIR, PDG de MAC\nAFRICAN SGI",
      image: "/mac-banniere-article-4-png.png",
      tags: ["EVEREST Finance", "ACTUALITÉS"],
    },
  ];

  // Pagination numbers (seulement 1 et 2)
  const paginationNumbers = [1, 2];

  return (
    <section className="w-full max-w-[1150px] mx-auto py-8">
      {/* Category Navigation */}
      <div className="mb-12">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="flex flex-wrap h-auto bg-transparent justify-start mb-4">
            {categoryTabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className={`px-3 py-1 text-sm font-bold tracking-[0.07px] leading-[23.8px] ${
                  tab.active ? "text-[#747474]" : "text-[#ababab]"
                } bg-transparent hover:bg-transparent`}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Article Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articleCards.map((article) => (
          <Card
            key={article.id}
            className="flex flex-col h-[546px] bg-[#303030] border-[#494949] rounded-none"
          >
            <div className="bg-macafricansgicomblack">
              <div
                className="w-full h-[210px] bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              />
            </div>

            <CardContent className="flex flex-col gap-1.5 pt-10 pb-6 px-9 flex-grow">
              <div className="text-[#959595] text-xs tracking-[1.50px] leading-[20.4px] [font-family:'Open_Sans',Helvetica] font-normal">
                {article.date}
              </div>

              <div className="text-[#AD7F00] text-[22px] tracking-[0] leading-[26.4px] [font-family:'Lato',Helvetica] font-normal whitespace-pre-line mt-1">
                {article.title}
              </div>

              <div className="flex-grow" />
              <div className="mt-6">
                <Button className="bg-[#AD7F00] hover:bg-[#AD7F00]/90 text-macafricansgicomwhite rounded-none px-8 py-3.5 h-auto [font-family:'Source_Sans_Pro',Helvetica] font-bold text-[13px] tracking-[0.80px] leading-[22.1px] w-full">
                  LIRE LE SUJET
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <Pagination className="flex justify-center">
        <PaginationContent className="flex flex-wrap gap-1.5">
          {paginationNumbers.map((number) => (
            <PaginationItem key={number}>
              <PaginationLink
                className={`px-3.5 py-2 rounded-[3px] ${
                  number === 1
                    ? "bg-[#AD7F00] text-[#202020]"
                    : "bg-[#efefef] text-[#202020]"
                } [font-family:'Source_Sans_Pro',Helvetica] font-bold text-sm`}
                href="#"
                isActive={number === 1}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
        </PaginationContent>
      </Pagination>
    </section>
  );
};
