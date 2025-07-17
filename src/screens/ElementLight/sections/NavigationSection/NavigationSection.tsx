import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SearchIcon, MenuIcon, XIcon } from "lucide-react";

import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();

  // Navigation menu items data
  const navItems = [
    { name: "Accueil", href: "/", isActive: location.pathname === "/" },
    { name: "NOTRE SOCIÉTÉ", href: "/notre-societe", isActive: location.pathname === "/notre-societe" },
    { name: "NOS MÉTIERS", href: "/nos-metiers", isActive: location.pathname === "/nos-metiers" },
    { name: "NOS SERVICES", href: "/nos-services", isActive: location.pathname === "/nos-services" },
    { name: "Bourse", href: "/bourse", isActive: location.pathname === "/bourse" },
    { name: "ACTUALITÉS", href: "/actualites", isActive: location.pathname === "/actualites" },
    { name: "Contact", href: "/contact", isActive: location.pathname === "/contact" },
  ];

  // Focus search input when search is opened
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [showSearch]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log("Searching for:", searchQuery);
      setShowSearch(false);
      setSearchQuery("");
    }
  };

  // Handle escape key to close modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSearch(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <>
      <header className="w-full bg-transparent sticky top-0 left-0 z-50">
        <div className="w-full h-16 lg:h-[62px] bg-[#435933]">
          <div className="container mx-auto px-4 lg:px-6 flex justify-between items-center h-full">
            
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="/logo-everest.png" 
                  alt="EVEREST Finance - Accueil" 
                  className="h-10 lg:h-[50px] w-auto object-contain hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        className={`
                          px-3 py-2 text-[11px] font-extrabold tracking-[0.5px] uppercase transition-colors duration-200
                          hover:text-[#AD7F00] focus:text-[#AD7F00] focus:outline-none focus:ring-2 focus:ring-[#AD7F00] focus:ring-offset-2 focus:ring-offset-[#435933] rounded-sm
                          ${item.isActive ? "text-[#AD7F00]" : "text-white"}
                        `}
                      >
                        <Link to={item.href} className="font-['Raleway',Helvetica]">
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              {/* Desktop Search */}
              <div className="flex items-center space-x-3">
                {showSearch ? (
                  <form onSubmit={handleSearchSubmit} className="flex items-center">
                    <Input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 h-8 text-sm bg-white border-white/20 focus:border-[#AD7F00] transition-colors"
                      onBlur={() => {
                        setTimeout(() => setShowSearch(false), 150);
                      }}
                    />
                  </form>
                ) : (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowSearch(true)}
                    className="text-white hover:text-[#AD7F00] hover:bg-white/10 h-8 w-8"
                    aria-label="Ouvrir la recherche"
                  >
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold border-none transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#435933]"
                >
                  ACCÈS CLIENT
                </Button>
              </div>
            </div>

            {/* Mobile Menu Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(!showSearch)}
                className="text-white hover:text-[#AD7F00] hover:bg-white/10 h-9 w-9"
                aria-label="Rechercher"
              >
                <SearchIcon className="h-4 w-4" />
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-[#AD7F00] hover:bg-white/10 h-9 w-9"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              >
                {mobileMenuOpen ? (
                  <XIcon className="h-5 w-5" />
                ) : (
                  <MenuIcon className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          {showSearch && (
            <div className="lg:hidden border-t border-white/10 p-4">
              <form onSubmit={handleSearchSubmit}>
                <Input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Rechercher..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border-white/20 focus:border-[#AD7F00]"
                />
              </form>
            </div>
          )}
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#435933] border-t border-white/10 shadow-lg">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-2">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className={`
                        block px-3 py-3 text-sm font-bold uppercase tracking-wide transition-colors duration-200 rounded-sm
                        hover:text-[#AD7F00] hover:bg-white/5 focus:text-[#AD7F00] focus:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#AD7F00] focus:ring-offset-2 focus:ring-offset-[#435933]
                        ${item.isActive ? "text-[#AD7F00] bg-white/5" : "text-white"}
                      `}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              {/* Mobile Client Access Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-[#AD7F00] hover:bg-[#8F6A00] text-white font-bold border-none transition-colors duration-200"
                >
                  ACCÈS CLIENT
                </Button>
              </div>
            </nav>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 z-40"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>

      <ModalNotreSociete 
        open={openNotreSociete} 
        onClose={() => setOpenNotreSociete(false)} 
      />
    </>
  );
};
