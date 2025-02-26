import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";

interface AppLayoutProps {
  children: React.ReactNode;
  activeItem: string;
  heroImage?: string;
  heroTitle?: string;
  heroSubtitle?: string;
}

const AppLayout = ({
  children,
  activeItem,
  heroImage = "/images/hero-bg.jpg",
  heroTitle,
  heroSubtitle,
}: AppLayoutProps) => {
  return (
    <div className="mx-auto flex flex-col items-center justify-center gap-6">
      <Hero image={heroImage} title={heroTitle} subtitle={heroSubtitle} />
      <Navbar activeItem={activeItem} />
      <main className="container mx-auto px-4 pt-12 pb-50 space-y-24">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
