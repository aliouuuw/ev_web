import React, { useState } from "react";
import { 
  DocumentTextIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  PhoneIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  ChartBarIcon
} from "@heroicons/react/24/outline";
import { 
  LinkedinIcon, 
  TwitterIcon, 
  FacebookIcon,
  InstagramIcon
} from "lucide-react";

import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Company information data
  const companyInfo = {
    description: `EVEREST Finance est une Société de Gestion et d'Intermédiation agréée par l'Autorité du Marché Financier (AMF-UMOA) sous le numéro d'agrément SGI / 2017-03. Nous accompagnons nos clients dans l'optimisation de leur patrimoine financier.`,
    address: "Avenue Léopold Sédar Senghor, BP 4035, Dakar, Sénégal",
    phone: "+221 33 889 50 00",
    email: "contact@everestfinance.sn"
  };

  // Recent articles data with dates
  const recentArticles = [
    { title: "Analyse du marché BRVM - Q4 2024", date: "15 Nov 2024" },
    { title: "Perspectives économiques UEMOA 2025", date: "10 Nov 2024" },
    { title: "Guide d'investissement obligataire", date: "05 Nov 2024" },
    { title: "Revue mensuelle des performances", date: "01 Nov 2024" },
  ];

  // Combined navigation menu
  const allNavigationLinks = [
    { name: "Gestion de Portefeuille", href: "#services", category: "Services" },
    { name: "Intermédiation Boursière", href: "#services", category: "Services" },
    { name: "Conseil en Investissement", href: "#services", category: "Services" },
    { name: "Recherche Financière", href: "#services", category: "Services" },
    { name: "Analyses de Marché", href: "#resources", category: "Ressources" },
    { name: "Publications", href: "#resources", category: "Ressources" },
    { name: "Actualités Financières", href: "#news", category: "Ressources" },
    { name: "Centre d'Aide", href: "#help", category: "Ressources" },
    { name: "À Propos", href: "#about", category: "Société" },
    { name: "Notre Équipe", href: "#team", category: "Société" },
    { name: "Nos Bureaux", href: "#contact", category: "Société" },
    { name: "Carrières", href: "#careers", category: "Société" }
  ];

  // Company statistics
  const stats = [
    { icon: <UserGroupIcon className="w-5 h-5" />, value: "500+", label: "Clients" },
    { icon: <ChartBarIcon className="w-5 h-5" />, value: "15 ans", label: "D'expérience" },
    { icon: <BuildingOfficeIcon className="w-5 h-5" />, value: "3", label: "Bureaux" }
  ];

  // Social media links
  const socialLinks = [
    { icon: <LinkedinIcon className="w-5 h-5" />, href: "#linkedin", label: "LinkedIn" },
    { icon: <TwitterIcon className="w-5 h-5" />, href: "#twitter", label: "Twitter" },
    { icon: <FacebookIcon className="w-5 h-5" />, href: "#facebook", label: "Facebook" },
    { icon: <InstagramIcon className="w-5 h-5" />, href: "#instagram", label: "Instagram" }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-gradient-to-b from-[#202020] to-[#1a1a1a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        {/* Large Screen Layout: 6-column grid for better space utilization */}
        <div className="hidden lg:grid lg:grid-cols-6 gap-12 xl:gap-16">
          
          {/* Company Info Section - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="mb-6">
                <img
                  src="/logo everest.png"
                  alt="EVEREST Finance"
                  className="h-20 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-6 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                À PROPOS DE NOUS
              </h3>
              <p className="text-gray-300 leading-relaxed font-['Source_Sans_Pro',Helvetica] text-base mb-8">
                {companyInfo.description}
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="text-[#AD7F00] mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-lg font-bold font-['Lato',Helvetica]">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-['Source_Sans_Pro',Helvetica]">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                CONTACT
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPinIcon className="w-5 h-5 text-[#AD7F00] mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-300 font-['Source_Sans_Pro',Helvetica]">
                    {companyInfo.address}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <PhoneIcon className="w-5 h-5 text-[#AD7F00] flex-shrink-0" />
                  <a href={`tel:${companyInfo.phone}`} className="text-sm text-gray-300 hover:text-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica]">
                    {companyInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <EnvelopeIcon className="w-5 h-5 text-[#AD7F00] flex-shrink-0" />
                  <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-300 hover:text-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica]">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links - 2 columns (organized in 2 equal columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-8 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
              NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {/* Column 1: Services & Resources */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-semibold mb-4 font-['Lato',Helvetica] text-white">
                    Services
                  </h4>
                  <div className="space-y-2">
                    {allNavigationLinks.filter(link => link.category === "Services").map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-['Source_Sans_Pro',Helvetica] text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-4 font-['Lato',Helvetica] text-white">
                    Ressources
                  </h4>
                  <div className="space-y-2">
                    {allNavigationLinks.filter(link => link.category === "Ressources").map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-['Source_Sans_Pro',Helvetica] text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 2: Society & Recent Articles */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-semibold mb-4 font-['Lato',Helvetica] text-white">
                    Société
                  </h4>
                  <div className="space-y-2">
                    {allNavigationLinks.filter(link => link.category === "Société").map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-['Source_Sans_Pro',Helvetica] text-sm"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-semibold mb-4 font-['Lato',Helvetica] text-white">
                    Articles Récents
                  </h4>
                  <div className="space-y-3">
                    {recentArticles.slice(0, 3).map((article, index) => (
                      <a
                        key={index}
                        href="#article"
                        className="flex items-start space-x-2 group hover:bg-white/5 p-2 rounded transition-colors"
                      >
                        <DocumentTextIcon className="w-4 h-4 text-[#AD7F00] mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="text-xs font-medium text-gray-200 group-hover:text-white transition-colors font-['Source_Sans_Pro',Helvetica] line-clamp-2 leading-tight">
                            {article.title}
                          </h5>
                          <p className="text-xs text-gray-400 mt-1">
                            {article.date}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Section - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Newsletter */}
            <div>
              <h3 className="text-xl font-bold mb-6 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                NEWSLETTER
              </h3>
              <p className="text-gray-300 font-['Source_Sans_Pro',Helvetica] text-base mb-6 leading-relaxed">
                Recevez nos analyses de marché et nos conseils d&apos;investissement directement dans votre boîte mail.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Votre adresse email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#AD7F00] flex-1"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-[#AD7F00] hover:bg-[#8A6600] text-white px-6 py-2"
                  >
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
                {isSubscribed && (
                  <p className="text-green-400 text-sm font-['Source_Sans_Pro',Helvetica]">
                    ✓ Inscription réussie ! Merci pour votre confiance.
                  </p>
                )}
              </form>
            </div>

            {/* Featured Content Card */}
            <Card className="bg-gradient-to-br from-[#AD7F00]/20 to-[#435933]/20 border-[#AD7F00]/30">
              <CardContent className="p-6">
                <h4 className="text-lg font-bold mb-3 font-['Lato',Helvetica] text-white">
                  Consultation Gratuite
                </h4>
                <p className="text-gray-300 font-['Source_Sans_Pro',Helvetica] text-sm mb-4">
                  Bénéficiez d&apos;une analyse personnalisée de votre portefeuille avec nos experts.
                </p>
                <Button 
                  variant="outline"
                  className="border-[#AD7F00] text-[#AD7F00] hover:bg-[#AD7F00] hover:text-white w-full"
                >
                  Prendre rendez-vous
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-bold mb-4 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                SUIVEZ-NOUS
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-[#AD7F00] transition-colors p-3 hover:bg-white/10 rounded-full border border-white/10 hover:border-[#AD7F00]/30"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout: Original responsive design */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* About Section */}
          <div className="space-y-6">
            <div>
              <div className="mb-4">
                <img
                  src="/logo everest.png"
                  alt="EVEREST Finance"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-4 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                À PROPOS DE NOUS
              </h3>
              <p className="text-gray-300 leading-relaxed font-['Source_Sans_Pro',Helvetica] text-sm">
                {companyInfo.description}
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
                  <CardContent className="p-3 text-center">
                    <div className="text-[#AD7F00] mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-sm font-bold font-['Lato',Helvetica]">{stat.value}</div>
                    <div className="text-xs text-gray-400 font-['Source_Sans_Pro',Helvetica]">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPinIcon className="w-4 h-4 text-[#AD7F00] mt-1 flex-shrink-0" />
                <p className="text-sm text-gray-300 font-['Source_Sans_Pro',Helvetica]">
                  {companyInfo.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-4 h-4 text-[#AD7F00] flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm text-gray-300 hover:text-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica]">
                  {companyInfo.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-4 h-4 text-[#AD7F00] flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-300 hover:text-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica]">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          {/* Navigation & Newsletter */}
          <div className="space-y-8">
            {/* Navigation */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                NAVIGATION
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  {allNavigationLinks.slice(0, 6).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-['Source_Sans_Pro',Helvetica] text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div className="space-y-3">
                  {allNavigationLinks.slice(6).map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="block text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 font-['Source_Sans_Pro',Helvetica] text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                NEWSLETTER
              </h3>
              <p className="text-gray-300 font-['Source_Sans_Pro',Helvetica] text-sm mb-4">
                Recevez nos analyses de marché et nos conseils d&apos;investissement directement dans votre boîte mail.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#AD7F00] flex-1"
                    required
                  />
                  <Button 
                    type="submit"
                    className="bg-[#AD7F00] hover:bg-[#8A6600] text-white px-6 py-2 whitespace-nowrap"
                  >
                    <ArrowRightIcon className="w-4 h-4" />
                  </Button>
                </div>
                {isSubscribed && (
                  <p className="text-green-400 text-sm font-['Source_Sans_Pro',Helvetica]">
                    ✓ Inscription réussie ! Merci pour votre confiance.
                  </p>
                )}
              </form>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-base font-bold mb-3 font-['Lato',Helvetica] text-[#AD7F00] tracking-wide">
                SUIVEZ-NOUS
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-[#AD7F00] transition-colors p-2 hover:bg-white/10 rounded-full"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-white/10" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-center lg:text-left">
            <p className="text-gray-400 font-['Source_Sans_Pro',Helvetica] text-sm">
              © 2024 EVEREST Finance. Tous droits réservés. | 
              <span className="ml-1">
                SGI / 2017-03 - Agréé par l&apos;AMF-UMOA
              </span>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors font-['Source_Sans_Pro',Helvetica] text-sm">
              Politique de confidentialité
            </a>
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors font-['Source_Sans_Pro',Helvetica] text-sm">
              Conditions d&apos;utilisation
            </a>
          </div>

          {/* Social Media Links for Bottom */}
          <div className="flex items-center space-x-4 lg:hidden">
            <span className="text-gray-400 font-['Source_Sans_Pro',Helvetica] text-sm mr-2">Suivez-nous:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-[#AD7F00] transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
