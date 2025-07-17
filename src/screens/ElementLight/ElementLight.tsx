import React from 'react';
import { NavigationSection } from './sections/NavigationSection/NavigationSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { AboutUsSection } from './sections/AboutUsSection/AboutUsSection';
import { ServicesSection } from './sections/ServicesSection/ServicesSection';
import { TeamSection } from './sections/TeamSection/TeamSection';
import { TestimonialsSection } from './sections/TestimonialsSection/TestimonialsSection';
import { ResourcesSection } from './sections/ResourcesSection/ResourcesSection';
import { CallToActionSection } from './sections/CallToActionSection/CallToActionSection';
import { MapSection } from './sections/MapSection/MapSection';
import { ContactSection } from './sections/ContactSection/ContactSection';
import { FooterSection } from './sections/FooterSection/FooterSection';

const ElementLight: React.FC = () => (
  <>
    <NavigationSection />
    <HeroSection />
    <AboutUsSection />
    <ServicesSection />
    <TeamSection />
    <TestimonialsSection />
    <ResourcesSection />
    <CallToActionSection />
    <MapSection />
    <ContactSection />
    <FooterSection />
  </>
);

export default ElementLight;
