import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

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
    <section className="grid md:grid-cols-2 sm:grid-cols-1 gap-12">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold">The Venue</h2>
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
                <div className="aspect-square rounded-xl bg-muted overflow-hidden">
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
      <div className="md:col-span-2 bg-muted/50 rounded-xl p-8 relative">
        <div className="absolute -top-4 -left-4 bg-background p-2 rounded-full">
          <Quote className="h-6 w-6 text-black" />
        </div>
        <blockquote className="text-muted-foreground space-y-4 leading-relaxed">
          <p>
            At Hawksmoor House, we're passionate about hosting exclusive
            weddings and are delighted that you are considering us for your
            celebration.
          </p>
          <p>
            If you're looking for a scenic, historic, authentic Cape Dutch farm
            atmosphere, you've found the right place. Our barn is a spectacular
            venue and has enough warmth to host a Winelands Wedding of note. We
            can host up to 150 guests, and accommodate up to 32 guests sharing.
          </p>
          <p>
            There are several beautiful locations on the property to hold your
            ceremony and/or reception. We love to customise our weddings to suit
            the needs of the bride and groom.
          </p>
          <p>
            Hawksmoor House has 16 enchanting guest rooms in four buildings set
            around the historic 'werf', reflection pond and expansive gardens.
            The grounds are laid out to include a large lawn, lavender beds,
            vegetable, rose and herb gardens, and a swimming pool with a
            spectacular view of Table Mountain.
          </p>
          <footer className="text-sm italic mt-4">
            — Hawksmoor House
            <div className="text-xs mt-1">
              Winner of "Most Exclusive Wedding Venue 2024 – Western Cape"
            </div>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default LocationSection;
