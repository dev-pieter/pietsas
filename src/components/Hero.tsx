import React from "react";

interface HeroProps {
  image: string;
  title?: string;
  subtitle?: string;
}

const Hero = ({ image, title = "PietSas", subtitle }: HeroProps) => {
  return (
    <div className="relative w-full h-100">
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wider">
          {title}
        </h1>
        {subtitle && (
          <p className="text-2xl text-primary font-semibold mt-4">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default Hero;
