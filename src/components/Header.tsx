import { useNavigate, useLocation } from "react-router";
import { useState } from "react";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", path: "our-story" },
    { label: "INFO", path: "event-details" },
    { label: "TRAVEL", path: "travel-stay" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/30 pb-8">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 z-50 relative">
        <div className="hidden lg:flex items-center justify-center">
          <Button
            variant={"link"}
            onClick={() => navigate("/")}
            className="font-serif text-base xl:text-2xl text-primary py-4"
          >
            PIETER & SASKIA
          </Button>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex items-center space-x-4 xl:space-x-4 text-sm tracking-wider">
            {navItems.map((item, index) => {
              return (
                <Button
                  key={index}
                  variant={"link"}
                  onClick={() => window.scrollTo({ top: document.getElementById(item.path)?.offsetTop || 0, behavior: "smooth" })}
                  className={`uppercase text-foreground hover:text-secondary transition-colors text-xs xl:text-sm ${
                    location.pathname === item.path ? "text-secondary" : ""
                  }`}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            {/* Mobile Title */}
            <Button
              variant={"link"}
              onClick={() => navigate("/")}
              className="font-serif text-sm sm:text-base text-[#271203] hover:opacity-70 transition-opacity"
            >
              PIETER & SASKIA
            </Button>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="text-[#496677] hover:text-[#271203] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#9FB2CD]/20">
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      navigate(item.path);
                      setIsMenuOpen(false);
                    }}
                    className={`block w-full text-left uppercase text-sm tracking-wider text-[#496677] hover:text-[#271203] transition-colors py-2 ${
                      location.pathname === item.path ? "text-[#271203]" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
