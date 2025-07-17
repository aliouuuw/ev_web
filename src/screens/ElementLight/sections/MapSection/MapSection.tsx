import React from "react";
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, ExternalLinkIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MapSection = (): JSX.Element => {
  // Location and contact information
  const locationInfo = {
    address: {
      street: "Avenue Léopold Sédar Senghor",
      city: "Dakar, Sénégal",
      postalCode: "BP 4035",
      country: "Sénégal"
    },
    contact: {
      phone: "+221 33 889 50 00",
      email: "contact@everestfinance.sn",
      website: "www.everestfinance.sn"
    },
    hours: {
      weekdays: "Lundi - Vendredi: 08h00 - 18h00",
      weekend: "Samedi: 08h00 - 13h00"
    }
  };

  const officeFeatures = [
    { icon: <MapPinIcon className="w-5 h-5" />, title: "Emplacement stratégique", description: "Situé au cœur du quartier des affaires de Dakar" },
    { icon: <PhoneIcon className="w-5 h-5" />, title: "Consultation personnalisée", description: "Rendez-vous sur mesure avec nos experts" },
    { icon: <ClockIcon className="w-5 h-5" />, title: "Horaires flexibles", description: "Ouvert 6 jours sur 7 pour votre convenance" }
  ];

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 font-['Lato',Helvetica] text-[#435933]">
            Visitez nos bureaux
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-['Source_Sans_Pro',Helvetica] max-w-3xl mx-auto">
            Rencontrez notre équipe d&apos;experts dans nos locaux modernes au cœur de Dakar. 
            Nous sommes à votre disposition pour discuter de vos projets d&apos;investissement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Map/Image Section */}
          <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative h-80 lg:h-96 bg-gradient-to-br from-[#435933] to-[#26351f]">
              {/* Placeholder for map - you can replace with actual map integration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPinIcon className="w-16 h-16 mx-auto mb-4 text-[#AD7F00]" />
                  <h3 className="text-xl font-semibold mb-2 font-['Lato',Helvetica]">EVEREST Finance</h3>
                  <p className="text-sm opacity-90 font-['Source_Sans_Pro',Helvetica]">
                    {locationInfo.address.street}<br />
                    {locationInfo.address.city}
                  </p>
                </div>
              </div>
              
              {/* Overlay with location pin */}
              <div className="absolute top-4 right-4">
                <Button 
                  variant="secondary" 
                  size="sm"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                >
                  <ExternalLinkIcon className="w-4 h-4 mr-2" />
                  Voir sur Google Maps
                </Button>
              </div>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details Card */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 font-['Lato',Helvetica] text-[#435933]">
                  Informations de contact
                </h3>
                
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#AD7F00]/10 rounded-lg">
                      <MapPinIcon className="w-5 h-5 text-[#AD7F00]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 font-['Lato',Helvetica] text-[#435933]">Adresse</h4>
                      <p className="text-gray-600 font-['Source_Sans_Pro',Helvetica]">
                        {locationInfo.address.street}<br />
                        {locationInfo.address.postalCode} {locationInfo.address.city}<br />
                        {locationInfo.address.country}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#AD7F00]/10 rounded-lg">
                      <PhoneIcon className="w-5 h-5 text-[#AD7F00]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 font-['Lato',Helvetica] text-[#435933]">Téléphone</h4>
                      <p className="text-gray-600 font-['Source_Sans_Pro',Helvetica]">
                        <a href={`tel:${locationInfo.contact.phone}`} className="hover:text-[#AD7F00] transition-colors">
                          {locationInfo.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#AD7F00]/10 rounded-lg">
                      <MailIcon className="w-5 h-5 text-[#AD7F00]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 font-['Lato',Helvetica] text-[#435933]">Email</h4>
                      <p className="text-gray-600 font-['Source_Sans_Pro',Helvetica]">
                        <a href={`mailto:${locationInfo.contact.email}`} className="hover:text-[#AD7F00] transition-colors">
                          {locationInfo.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-[#AD7F00]/10 rounded-lg">
                      <ClockIcon className="w-5 h-5 text-[#AD7F00]" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1 font-['Lato',Helvetica] text-[#435933]">Horaires d&apos;ouverture</h4>
                      <p className="text-gray-600 font-['Source_Sans_Pro',Helvetica]">
                        {locationInfo.hours.weekdays}<br />
                        {locationInfo.hours.weekend}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Features */}
            <div className="grid grid-cols-1 gap-4">
              {officeFeatures.map((feature, index) => (
                <Card key={index} className="border border-gray-200 hover:border-[#AD7F00] transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-[#AD7F00]">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm font-['Lato',Helvetica] text-[#435933]">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-600 font-['Source_Sans_Pro',Helvetica]">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-16 bg-gray-200" />

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-[#435933] to-[#26351f] border-0 text-white">
          <CardContent className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
              Prêt à nous rencontrer ?
            </h3>
            <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
              Planifiez un rendez-vous avec notre équipe pour discuter de vos objectifs financiers 
              et découvrir comment nous pouvons vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                className="bg-[#AD7F00] hover:bg-[#8A6600] text-white border-0 font-bold tracking-wide px-8 py-3"
              >
                Prendre rendez-vous
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#435933] font-semibold px-8 py-3"
              >
                Appeler maintenant
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
