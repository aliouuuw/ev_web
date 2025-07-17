import { NavigationSection } from './sections/NavigationSection/NavigationSection';
import { HeroSection } from './sections/HeroSection/HeroSection';
import { AboutUsSection } from './sections/AboutUsSection/AboutUsSection';
import { TeamProfiles } from './sections/TeamProfiles/TeamProfiles';
import { CompanyInfoSection } from './sections/CompanyInfoSection/CompanyInfoSection';
import { NewsSection } from './sections/NewsSection/NewsSection';
import { ContactSection } from './sections/ContactSection/ContactSection';
import { MapSection } from './sections/MapSection/MapSection';
import { FooterSection } from './sections/FooterSection/FooterSection';
import { ServicesSection } from './sections/ServicesSection/ServicesSection';

const ElementLight: React.FC = () => (
  <>
    <HeroSection />
    <NavigationSection />
    <AboutUsSection />
    <ServicesSection />
    <TeamProfiles />
    <CompanyInfoSection />
    <NewsSection />
    <ContactSection />
    <MapSection />
    <FooterSection />
  </>
);

export default ElementLight;
