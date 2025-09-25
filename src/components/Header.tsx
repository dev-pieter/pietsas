import { useNavigate } from "react-router";
import { Button } from "./ui/button";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-white/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 z-50 relative">
        <div className="hidden lg:flex items-center justify-center">
          <Button
            variant={"link"}
            onClick={() => navigate("/")}
            className="font-serif text-base xl:text-3xl text-primary py-4"
          >
            PIETER & SASKIA
          </Button>
        </div>
        {/* Desktop Navigation */}
      </nav>
    </header>
  );
};

export default Header;
