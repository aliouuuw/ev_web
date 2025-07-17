import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { ModalNotreSociete } from "../ModalNotreSociete";

export const NavigationSection = (): JSX.Element => {
  const [showSearch, setShowSearch] = useState(false);
  const [openNotreSociete, setOpenNotreSociete] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);
  // Navigation menu items data
  const navItems = [
    { name: "Accueil", isActive: true },
    { name: "NOTRE SOCIÉTÉ", isActive: false },
    { name: "NOS MÉTIERS", isActive: false },
    { name: "NOS SERVICES", isActive: false },
    { name: "Bourse", isActive: false },
    { name: "ACTUALITÉS", isActive: false },
    { name: "Contact", isActive: false },
  ];

  return (
    <>
      <header className="w-full bg-transparent sticky top-0 left-0 z-50">
        {/* Background bar */}
        <div className="w-full h-[62px] bg-[#242424]">
          <div className="container mx-auto px-6 flex justify-between items-center h-full">
            {/* Logo container */}
            <div className="flex items-center">
              <div className="max-w-[200px]">
                <div className="w-[200px] h-[61.97px] bg-[url(/logomac-png.png)] bg-cover bg-[50%_50%]" />
              </div>
            </div>

            {/* Navigation menu */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex items-end gap-3.5">
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item.name === "NOTRE SOCIÉTÉ" ? (
                      <Link
                        to="/notre-societe"
                        className={`px-2 pb-[22.19px] font-['Raleway',Helvetica] text-[11px] font-extrabold tracking-[0.5px] leading-[18.7px] uppercase ${
                          item.isActive
                            ? "text-[#AD7F00]"
                            : "text-macafricansgicomwhite"
                        } cursor-pointer`}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <NavigationMenuLink
                        className={`px-2 pb-[22.19px] font-['Raleway',Helvetica] text-[11px] font-extrabold tracking-[0.5px] leading-[18.7px] uppercase ${
                          item.isActive
                            ? "text-[#AD7F00]"
                            : "text-macafricansgicomwhite"
                        }`}
                        href="#"
                      >
                        {item.name}
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
              <div className="flex items-center ml-4 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.2}
                  stroke="currentColor"
                  className="w-[13px] h-[14px] text-white cursor-pointer transition-colors duration-200 hover:text-yellow-500 mr-4"
                  onClick={() => setShowSearch((v) => !v)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                  />
                </svg>
                {showSearch && (
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Rechercher..."
                    className="ml-3 px-3 py-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200 w-40 bg-white text-black shadow"
                    style={{ minWidth: 120 }}
                    onBlur={() => setShowSearch(false)}
                  />
                )}
              </div>
            </NavigationMenu>

            {/* Client access button */}
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="bg-[#AD7F00] hover:bg-[#AD7F00]/90 text-white font-bold text-[15px] px-6 py-2 rounded shadow-lg border-none transition-all duration-200 focus:ring-2 focus:ring-[#AD7F00] focus:outline-none"
              >
                ACCÈS CLIENT
              </Button>
            </div>
          </div>
        </div>
      </header>
      <ModalNotreSociete open={openNotreSociete} onClose={() => setOpenNotreSociete(false)} />
    </>
  );
};
