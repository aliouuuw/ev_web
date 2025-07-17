import React from "react";

import { NavigationSection } from "./NavigationSection/NavigationSection";
import { FooterSection } from "./FooterSection/FooterSection";

export const NotreSocietePage: React.FC = () => {
  // Données de l'équipe
  const teamMembers = [
    {
      name: "Alioune Ndour DIOUF",
      position: "Président du Conseil d'Administration",
      photo: "/pca-mac--png.png",
      description: "Expert financier avec plus de 20 ans d&apos;expérience dans les marchés de l&apos;UEMOA."
    },
    {
      name: "Khady DIOUF",
      position: "Administrateur Directeur Général",
      photo: "/mouradbc-png.png",
      description: "Stratège financière reconnue, spécialisée en gestion de patrimoine."
    },
    {
      name: "Mamadou GUEYE",
      position: "Directeur Général Adjoint",
      photo: "/fathis-png.png", 
      description: "Expert en intermédiation et conseil financier."
    }
  ];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Navigation identique aux autres pages */}
      <NavigationSection />

      {/* Hero Section */}
      <section 
        className="w-full bg-cover bg-center bg-no-repeat flex items-center justify-center" 
        style={{ 
          height: '224px', 
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/img-header-societe.png")'
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide uppercase">
            Notre Société
          </h1>
        </div>
      </section>

      {/* Contenu principal */}
      <main className="flex-grow container mx-auto px-4 py-16 max-w-6xl">
        {/* Section Présentation */}
        <section className="mb-16">
          <div>
            <div>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 max-w-[660px]">
                  <p className="text-[#AD7F00] text-base mb-2 uppercase">
                    À PROPOS DE NOTRE SOCIÉTÉ
                  </p>
                  <h2 className="text-[#435933] text-3xl mb-6">
                    Qui sommes-nous
                  </h2>
                  <div className="text-[#26351f] text-lg space-y-4">
                    <p>
                      EVEREST Finance est une Société de Gestion et d&apos;Intermédiation (SGI) agréée par le Conseil Régional de l&apos;Epargne Publique et des Marchés Financiers (CREPMF) sous le numéro SGI /DA/2016/60.
                    </p>
                    <p>
                      Depuis sa création, EVEREST Finance accompagne ses clients institutionnels et particuliers dans la gestion, l&apos;investissement et l&apos;optimisation de leur patrimoine financier, avec une expertise reconnue sur les marchés de l&apos;UEMOA.
                    </p>
                    <p>
                      Notre mission : offrir des solutions sur-mesure, innovantes et performantes, dans le respect des valeurs d&apos;éthique, de transparence et de proximité.
                    </p>
                  </div>
                  <div className="mt-6">
                    <button className="bg-[#AD7F00] text-white px-6 py-3 rounded-md hover:bg-[#26351f] transition-colors duration-300">
                      Contactez-Nous
                    </button>
                  </div>
                </div>
                <div>
                  <img 
                    src="/43729015_m.jpg" 
                    alt="EVEREST Finance" 
                    className="w-[420px] h-[720px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Équipe */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-[#435933] mb-8 text-center">Notre Équipe</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="border-2 border-[#AD7F00] rounded-xl overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-[350px] object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-[#435933] mb-2">{member.name}</h4>
                  <p className="text-[#26351f] font-semibold mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section Contact */}
        <section className="text-center">
          <div className="border-t border-[#AD7F00] my-8"></div>
          <h3 className="text-2xl font-bold text-[#435933] mb-6">Nous rejoindre</h3>
          <p className="text-[#26351f] mb-8">Rejoignez une équipe dynamique et innovante</p>
          <button 
            className="bg-[#AD7F00] text-white font-bold px-8 py-3 rounded-md shadow hover:bg-[#26351f] transition"
          >
            Voir nos offres
          </button>
        </section>
      </main>

      {/* Footer identique aux autres pages */}
      <FooterSection />
    </div>
  );
}; 