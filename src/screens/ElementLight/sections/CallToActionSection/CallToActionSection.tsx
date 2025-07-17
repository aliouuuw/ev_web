import { useState } from "react";
import { CalendarIcon, TagIcon, ArrowRightIcon, SearchIcon, FilterIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../../components/ui/pagination";
import { Tabs, TabsList, TabsTrigger } from "../../../../components/ui/tabs";
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

interface CategoryTab {
  id: string;
  label: string;
  count: number;
}

export const CallToActionSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 6;

  // Enhanced category tabs with counts
  const categoryTabs: CategoryTab[] = [
    { id: "all", label: "Tous", count: 24 },
    { id: "actualites", label: "Actualités", count: 8 },
    { id: "analyses", label: "Analyses Financières", count: 6 },
    { id: "bourse", label: "Bourse", count: 5 },
    { id: "revue", label: "Revue Hebdo", count: 12 },
    { id: "fiches", label: "Fiches Valeurs", count: 4 },
    { id: "communique", label: "Communiqués", count: 3 },
  ];

  // Enhanced article data with more details
  const articles: Article[] = [
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
    {
      id: 4,
      date: "10 JUIN 2025",
      title: "BOA CI - Analyse fondamentale",
      image: "/mac-banniere-article-1-png.png",
      tags: ["BOA", "Analyse"],
      excerpt: "Analyse approfondie de Bank of Africa Côte d'Ivoire, ses perspectives de croissance et recommandations d'investissement.",
      category: "fiches",
      readTime: "10 min"
    },
    {
      id: 5,
      date: "10 JUIN 2025",
      title: "Nouvelle réglementation des marchés financiers UEMOA",
      image: "/note-dinformation-2-png-3.png",
      tags: ["Réglementation", "UEMOA"],
      excerpt: "Impact des nouvelles directives de l'AMF-UMOA sur les investissements et les stratégies de gestion de portefeuille.",
      category: "actualites",
      readTime: "7 min"
    },
    {
      id: 6,
      date: "3 JUIN 2025",
      title: "Interview - Stratégies d'investissement en 2025",
      image: "/mac-banniere-article-4-png.png",
      tags: ["Interview", "Stratégie"],
      excerpt: "Entretien exclusif avec nos experts sur les meilleures stratégies d'investissement pour maximiser les rendements en 2025.",
      category: "actualites",
      readTime: "12 min"
    },
  ];

  // Filter articles based on category and search
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

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
            Restez informé des dernières tendances du marché, analyses d&apos;experts et opportunités d&apos;investissement 
            avec nos publications régulières.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Rechercher dans les articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white border-gray-200 focus:border-[#AD7F00] focus:ring-[#AD7F00]"
              />
            </div>
            <Button
              variant="outline"
              className="h-12 px-6 border-[#AD7F00] text-[#AD7F00] hover:bg-[#AD7F00] hover:text-white"
            >
              <FilterIcon className="w-4 h-4 mr-2" />
              Filtres avancés
            </Button>
          </div>

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="flex flex-wrap h-auto bg-white border border-gray-200 p-2 rounded-lg">
              {categoryTabs.map((tab) => (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="px-4 py-2 text-sm font-medium transition-all duration-200 data-[state=active]:bg-[#AD7F00] data-[state=active]:text-white rounded-md"
                >
                  {tab.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {tab.count}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
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

        {/* Enhanced Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <Pagination>
              <PaginationContent className="flex items-center gap-2">
                <PaginationPrevious 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : 'hover:bg-[#AD7F00] hover:text-white'}`}
                />
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => setCurrentPage(page)}
                      isActive={currentPage === page}
                      className={`${
                        currentPage === page 
                          ? 'bg-[#AD7F00] text-white' 
                          : 'hover:bg-[#AD7F00] hover:text-white'
                      }`}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationNext 
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : 'hover:bg-[#AD7F00] hover:text-white'}`}
                />
              </PaginationContent>
            </Pagination>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-[#435933] to-[#26351f] border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
                Ne manquez aucune actualité
              </h3>
              <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
                Abonnez-vous à notre newsletter pour recevoir nos dernières analyses, 
                rapports de marché et opportunités d&apos;investissement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <Input 
                  placeholder="Votre adresse email"
                  className="bg-white text-[#435933] border-none h-12"
                />
                <Button 
                  size="lg"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 h-12 transition-all duration-300 transform hover:scale-105"
                >
                  S&apos;abonner
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
