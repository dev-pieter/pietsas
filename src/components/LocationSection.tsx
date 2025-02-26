import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LocationSection = () => {
  const images = [
    {
      src: "/images/hawksmoor-1.png",
      alt: "Hawksmoor Wedding Venue - Main View",
    },
    {
      src: "/images/hawksmoor-2.png",
      alt: "Hawksmoor Wedding Venue - Gardens",
    },
    {
      src: "/images/hawksmoor-3.png",
      alt: "Hawksmoor Wedding Venue - Interior",
    },
  ];

  return (
    <section className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">Venue</h2>
        <div className="space-y-2">
          <a href="https://hawksmoor.co.za/">
            <h3 className="text-2xl font-semibold text-primary">
              Hawksmoor House
            </h3>
          </a>
          <p className="text-muted-foreground">Matjieskuil Farm, R304</p>
          <p className="text-muted-foreground">Stellenbosch 7599</p>
        </div>
      </div>
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="aspect-video rounded-xl bg-muted overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default LocationSection;
