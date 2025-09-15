import { useNavigate, useLocation } from "react-router";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "INFO", path: "/event-info" },
    { label: "ABOUT", path: "/our-story" },
    { label: "PIETER & SASKIA'S WEDDING", path: "/", isTitle: true },
    { label: "STORIES", path: "/stories" },
    { label: "RSVP", path: "/rsvp" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-sm border-b border-[#9FB2CD]/20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="flex items-center space-x-8 xl:space-x-12 text-sm tracking-wider">
            {navItems.map((item, index) => {
              if (item.isTitle) {
                return (
                  <button
                    key={index}
                    onClick={() => navigate("/")}
                    className="font-serif text-base xl:text-lg text-[#271203] hover:opacity-70 transition-opacity px-2 xl:px-4"
                  >
                    {item.label}
                  </button>
                );
              }
              
              return (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className={`uppercase text-[#496677] hover:text-[#271203] transition-colors text-xs xl:text-sm ${
                    location.pathname === item.path ? "text-[#271203]" : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            {/* Mobile Title */}
            <button
              onClick={() => navigate("/")}
              className="font-serif text-sm sm:text-base text-[#271203] hover:opacity-70 transition-opacity"
            >
              PIETER & SASKIA'S WEDDING
            </button>

            {/* Hamburger Button */}
            <button
              onClick={toggleMenu}
              className="text-[#496677] hover:text-[#271203] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-[#9FB2CD]/20">
              <div className="px-4 py-6 space-y-4">
                {navItems
                  .filter(item => !item.isTitle)
                  .map((item, index) => (
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