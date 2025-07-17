import React from 'react';
import { NavigationSection } from './sections/NavigationSection/NavigationSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { AboutUsSection } from './sections/AboutUsSection/AboutUsSection';
import { ContactSection } from './sections/ContactSection/ContactSection';
// Ajoutez ici les autres sections si besoin (FooterSection, TeamSection, etc.)

const ElementLight: React.FC = () => (
  <>
    <NavigationSection />
    <HeroSection />
    <AboutUsSection />
    <ContactSection />
    {/* Ajoutez ici les autres sections dans l'ordre voulu */}
  </>
);

export default ElementLight;
