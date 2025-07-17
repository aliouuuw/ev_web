import React, { useState } from "react";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { Separator } from "../../../../components/ui/separator";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5 text-[#AD7F00]" />,
      title: "Adresse",
      content: "Dakar, Sénégal\nZone industrielle"
    },
    {
      icon: <PhoneIcon className="w-5 h-5 text-[#AD7F00]" />,
      title: "Téléphone",
      content: "+221 33 XXX XX XX\n+221 77 XXX XX XX"
    },
    {
      icon: <MailIcon className="w-5 h-5 text-[#AD7F00]" />,
      title: "Email",
      content: "contact@everestfinance.com\ninfo@everestfinance.com"
    }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Le nom est requis";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-br from-white to-gray-50">
      <div className="container max-w-7xl mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#AD7F00]/10 rounded-full mb-6">
            <MailIcon className="w-8 h-8 text-[#AD7F00]" />
          </div>
          
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-black text-[#435933] mb-6 font-['Lato',Helvetica] tracking-wide">
            CONTACTEZ-NOUS
          </h2>
          
          <Separator className="w-24 h-1 bg-[#AD7F00] mx-auto mb-8" />
          
          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-['Source_Sans_Pro',Helvetica] max-w-3xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos projets d&apos;investissement. 
            N&apos;hésitez pas à nous contacter.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-[#435933] font-['Lato',Helvetica]">
                  Laissez-nous un message
                </CardTitle>
                <p className="text-gray-600 font-['Source_Sans_Pro',Helvetica]">
                  et nous reviendrons vers vous dans les plus brefs délais.
                </p>
              </CardHeader>
              
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                      <SendIcon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">Message envoyé !</h3>
                    <p className="text-gray-600">Nous vous répondrons dans les plus brefs délais.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Input
                          placeholder="Votre nom *"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className={`h-12 bg-gray-50 border-gray-200 focus:border-[#AD7F00] focus:ring-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica] ${
                            errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                      </div>

                      <div>
                        <Input
                          type="email"
                          placeholder="Votre email *"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={`h-12 bg-gray-50 border-gray-200 focus:border-[#AD7F00] focus:ring-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica] ${
                            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        type="tel"
                        placeholder="Téléphone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#AD7F00] focus:ring-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica]"
                      />

                      <Input
                        placeholder="Sujet"
                        value={formData.subject}
                        onChange={(e) => handleInputChange('subject', e.target.value)}
                        className="h-12 bg-gray-50 border-gray-200 focus:border-[#AD7F00] focus:ring-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica]"
                      />
                    </div>

                    <div>
                      <Textarea
                        placeholder="Votre message *"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className={`min-h-32 bg-gray-50 border-gray-200 focus:border-[#AD7F00] focus:ring-[#AD7F00] transition-colors font-['Source_Sans_Pro',Helvetica] resize-none ${
                          errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
                        }`}
                      />
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                      )}
                    </div>

                    <Button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-12 bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <SendIcon className="w-4 h-4 mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Image */}
          <div className="order-1 lg:order-2 space-y-8">
            
            {/* Contact Information Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#AD7F00]/10 rounded-full flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#435933] mb-2 font-['Lato',Helvetica]">
                          {info.title}
                        </h3>
                        <p className="text-gray-600 whitespace-pre-line font-['Source_Sans_Pro',Helvetica]">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div
                className="w-full h-80 lg:h-96 rounded-2xl bg-cover bg-center shadow-xl relative overflow-hidden"
                style={{ backgroundImage: "url('/shutterstock_1593018937.jpg')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-xl font-bold mb-2 font-['Lato',Helvetica]">
                    Votre succès financier, notre engagement
                  </h3>
                  <p className="text-sm opacity-90 font-['Source_Sans_Pro',Helvetica]">
                    Une équipe dédiée à votre service pour tous vos besoins d&apos;investissement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-[#435933] to-[#26351f] border-0 text-white">
            <CardContent className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 font-['Lato',Helvetica]">
                Prêt à commencer ?
              </h3>
              <p className="text-lg opacity-90 mb-8 font-['Source_Sans_Pro',Helvetica] max-w-2xl mx-auto">
                Prenez rendez-vous avec nos conseillers pour une consultation gratuite et personnalisée.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold px-8 py-4 transition-all duration-300 transform hover:scale-105"
                >
                  Prendre rendez-vous
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#435933] font-bold px-8 py-4 transition-all duration-300 bg-transparent"
                >
                  Télécharger notre brochure
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}; 