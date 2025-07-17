import React from "react";
import { CalendarIcon, TagIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { Badge } from "../../../../components/ui/badge";

interface Article {
  id: number;
  date: string;
  title: string;
  image: string;
  tags: string[];
  excerpt: string;
  category: string;
  readTime: string;
}

export const NewsSection = (): JSX.Element => {
  // Featured articles data for landing page
  const featuredArticles: Article[] = [
    {
      id: 1,
      date: "30 JUIN 2025",
      title: "Revue Hebdo du 23 au 27 Juin 2025",
      image: "/note-dinformation-2-png.png",
      tags: ["EVEREST Finance", "Revue Hebdo"],
      excerpt: "Analyse complète des tendances du marché financier de la semaine, avec focus sur les performances des valeurs vedettes de la BRVM.",
      category: "revue",
      readTime: "5 min"
    },
    {
      id: 2,
      date: "23 JUIN 2025",
      title: "Opportunités d'investissement dans les télécommunications",
      image: "/note-dinformation-2-png-1.png",
      tags: ["Télécommunications", "Investissement"],
      excerpt: "Le secteur des télécommunications en Afrique de l'Ouest présente des opportunités exceptionnelles pour les investisseurs avisés.",
      category: "analyses",
      readTime: "8 min"
    },
    {
      id: 3,
      date: "16 JUIN 2025",
      title: "Performance du marché BRVM - Juin 2025",
      image: "/note-dinformation-2-png-2.png",
      tags: ["BRVM", "Performance"],
      excerpt: "Bilan mensuel de la performance des principales valeurs cotées à la Bourse Régionale des Valeurs Mobilières.",
      category: "bourse",
      readTime: "6 min"
    },
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#AD7F00]/10 rounded-full mb-6">
            <TagIcon className="w-8 h-8 text-[#AD7F00]" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#435933] mb-6 font-['Lato',Helvetica] tracking-wide">
            ACTUALITÉS & ANALYSES
          </h2>
          
          <Separator className="w-24 h-1 bg-[#AD7F00] mx-auto mb-8" />
          
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-['Source_Sans_Pro',Helvetica] max-w-3xl mx-auto">
            Restez informé des dernières tendances du marché et des opportunités d&apos;investissement 
            avec nos analyses d&apos;experts.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Card
              key={article.id}
              className="group h-full bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 overflow-hidden"
            >
              {/* Article Image */}
              <div className="relative overflow-hidden">
                <div
                  className="w-full h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${article.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Read Time Badge */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-[#AD7F00] text-white border-none">
                      {article.readTime}
                    </Badge>
                  </div>
                </div>
              </div>

              {/* Article Content */}
              <CardContent className="p-6 flex flex-col h-full">
                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {formatDate(article.date)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#435933] mb-3 font-['Lato',Helvetica] leading-tight group-hover:text-[#AD7F00] transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed font-['Source_Sans_Pro',Helvetica] mb-4 flex-1">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 2).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold transition-all duration-300 group-hover:scale-105"
                >
                  <span className="mr-2">Lire l&apos;article</span>
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-[#435933] to-[#26351f] border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
                Plus d&apos;analyses et d&apos;actualités
              </h3>
              <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
                Découvrez toutes nos publications, analyses de marché et rapports d&apos;experts 
                pour prendre les meilleures décisions d&apos;investissement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Voir toutes les actualités
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#435933] font-bold px-8 py-4 transition-all duration-300 bg-transparent"
                >
                  S&apos;abonner à la newsletter
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}; 