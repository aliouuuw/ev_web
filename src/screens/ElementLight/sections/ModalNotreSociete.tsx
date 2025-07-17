// ModalNotreSociete.tsx
import React from "react";

import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

interface ModalNotreSocieteProps {
  open: boolean;
  onClose: () => void;
}

export const ModalNotreSociete: React.FC<ModalNotreSocieteProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <Card className="relative w-full max-w-xl border-4 border-[#AD7F00] bg-white shadow-2xl rounded-xl">
        <CardContent className="p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#AD7F00] text-2xl font-bold hover:text-[#26351f] focus:outline-none"
            aria-label="Fermer"
          >
            ×
          </button>
          <h2 className="font-['Lato',Helvetica] font-black text-[#435933] text-3xl mb-6 text-center tracking-wide leading-tight">
            Notre société
          </h2>
          <div className="text-[#26351f] text-lg leading-relaxed font-['Source_Sans_Pro',Helvetica] mb-4 text-center">
            EVEREST Finance est une Société de Gestion et d’Intermédiation (SGI) agréée par le Conseil Régional de l’Epargne Publique et des Marchés Financiers (CREPMF) sous le numéro SGI /DA/2016/60.<br/><br/>
            Depuis sa création, EVEREST Finance accompagne ses clients institutionnels et particuliers dans la gestion, l’investissement et l’optimisation de leur patrimoine financier, avec une expertise reconnue sur les marchés de l’UEMOA.<br/><br/>
            Notre mission : offrir des solutions sur-mesure, innovantes et performantes, dans le respect des valeurs d’éthique, de transparence et de proximité.
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="default" className="bg-[#AD7F00] text-white font-bold px-8 py-3 rounded-md shadow hover:bg-[#26351f] transition">
              Nous contacter
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 