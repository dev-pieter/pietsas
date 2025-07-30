import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router";

const Homepage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const weddingDate = new Date("2026-02-07T16:00:00");

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/home-bg.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Nortjé Wedding
          </h1>
          <div className="text-xl md:text-2xl font-light mb-8 space-y-2">
            <p>Saturday, 7 February 2026</p>
            <p>Hawksmoor House, Stellenbosch</p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
            <div className="flex gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm uppercase tracking-wide">Days</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm uppercase tracking-wide">Hours</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm uppercase tracking-wide">Minutes</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm uppercase tracking-wide">Seconds</div>
              </div>
            </div>
          </div>

          <Button
            onClick={() => scrollToSection("welcome")}
            variant="outline"
            className="bg-white/20 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm"
          >
            <ChevronDown />
          </Button>
        </div>
      </section>

      {/* Welcome Section */}
      <section id="welcome" className="py-20 px-4 bg-[#F0EDE8]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-[#271203] mb-8">Welcome</h2>
          <div className="prose prose-lg mx-auto text-[#496677] leading-relaxed">
            <p className="mb-6">
              We're so excited to celebrate our special day with you at the
              beautiful Hawksmoor House in Stellenbosch. Your presence means the
              world to us as we begin this new chapter together.
            </p>
            <p className="mb-8">
              Please explore the details below to help you prepare for our
              wedding day. We can't wait to see you there!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Button
              onClick={() => navigate("/our-story")}
              variant="ghost"
              className="h-24 text-[#496677] hover:bg-[#9FB2CD]/20 border border-[#9FB2CD]/30"
            >
              <div>
                <div className="text-lg font-semibold">Our Story</div>
                <div className="text-sm opacity-75">Learn about us</div>
              </div>
            </Button>

            <Button
              onClick={() => navigate("/event-info")}
              variant="ghost"
              className="h-24 text-[#496677] hover:bg-[#9FB2CD]/20 border border-[#9FB2CD]/30"
            >
              <div>
                <div className="text-lg font-semibold">Event Details</div>
                <div className="text-sm opacity-75">Time & location</div>
              </div>
            </Button>

            <Button
              onClick={() => scrollToSection("rsvp")}
              variant="default"
              className="h-24 bg-[#ABAC5A] hover:bg-[#ABAC5A]/90 text-white"
            >
              <div>
                <div className="text-lg font-semibold">RSVP</div>
                <div className="text-sm opacity-90">
                  Let us know you're coming
                </div>
              </div>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
