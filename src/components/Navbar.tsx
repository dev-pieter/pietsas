import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavbarProps {
  activeItem: string;
}

const Navbar = ({ activeItem }: NavbarProps) => {
  const menuItems = [
    { title: "Home", href: "/" },
    { title: "Information", href: "/info" },
    { title: "Dress Code", href: "/dress-code" },
    { title: "RSVP", href: "/rsvp" },
  ];

  return (
    <div className="w-full max-w-3xl sticky top-4 z-50">
      <div className="container mx-auto px-4 md:px-0">
        <div className="bg-white/60 backdrop-blur-md rounded-lg shadow-md border border-gray-500/20">
          <NavigationMenu className="mx-auto py-3">
            <NavigationMenuList className="sm:gap-[0px] md:gap-6">
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  <Link to={item.href}>
                    <NavigationMenuLink
                      className={cn(
                        "relative px-2 py-2 text-sm font-medium tracking-wide transition-colors duration-200",
                        "hover:text-white",
                        activeItem === item.title.toLowerCase()
                          ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                          : "text-gray-600"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
