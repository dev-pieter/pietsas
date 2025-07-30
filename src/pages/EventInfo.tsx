import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Sun,
  Cloud,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router";

const EventInfo = () => {
  const navigate = useNavigate();

  const schedule = [
    {
      time: "15:00",
      event: "Guest Arrival",
      description: "Welcome drinks and mingling",
    },
    {
      time: "15:30",
      event: "Ceremony",
      description: "Exchange of vows in the garden",
    },
    {
      time: "16:00",
      event: "Cocktail Hour",
      description: "Drinks and canapés while photos are taken",
    },
    { time: "17:30", event: "Reception", description: "Dinner service begins" },
    {
      time: "20:00",
      event: "Speeches & Toasts",
      description: "Heartfelt words from our loved ones",
    },
    {
      time: "21:00",
      event: "Dancing",
      description: "Let's celebrate until late!",
    },
  ];

  const openGoogleMaps = () => {
    const address = "Hawksmoor House, Stellenbosch, South Africa";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-[#F0EDE8]">
      {/* Header with Hawksmoor Images Banner */}
      <section className="relative overflow-hidden">
        {/* Image Banner */}
        <div className="relative h-120">
          <div className="absolute inset-0 flex">
            {/* Repeated image pattern */}
            <div className="flex">
              <img
                src="/images/hawksmoor-1.png"
                alt="Hawksmoor House"
                className="h-120 w-auto object-cover"
              />
              <img
                src="/images/hawksmoor-2.png"
                alt="Hawksmoor House"
                className="h-120 w-auto object-cover"
              />
              <img
                src="/images/hawksmoor-3.png"
                alt="Hawksmoor House"
                className="h-120 w-auto object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
          </div>
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <Button
              onClick={() => navigate("/")}
              variant="ghost"
              className="mb-6 text-white/90 hover:bg-white/20 border-white/30"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <h1 className="text-5xl md:text-6xl font-serif mb-4">
              Event Details
            </h1>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Everything you need to know about our special day at Hawksmoor
              House
            </p>
          </div>
        </div>
      </section>

      {/* Date, Time & Venue */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <Calendar className="w-12 h-12 text-[#ABAC5A] mx-auto mb-4" />
              <h3 className="text-xl font-serif text-[#271203] mb-2">Date</h3>
              <p className="text-[#496677] text-lg">Saturday</p>
              <p className="text-[#496677] text-lg font-semibold">
                7 February 2026
              </p>
            </div>

            <div className="text-center bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <Clock className="w-12 h-12 text-[#ABAC5A] mx-auto mb-4" />
              <h3 className="text-xl font-serif text-[#271203] mb-2">Time</h3>
              <p className="text-[#496677] text-lg">Ceremony begins at</p>
              <p className="text-[#496677] text-lg font-semibold">15:30</p>
            </div>

            <div className="text-center bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <MapPin className="w-12 h-12 text-[#ABAC5A] mx-auto mb-4" />
              <h3 className="text-xl font-serif text-[#271203] mb-2">Venue</h3>
              <p className="text-[#496677] text-lg">Hawksmoor House</p>
              <p className="text-[#496677] text-lg">Stellenbosch</p>
              <Button
                onClick={openGoogleMaps}
                variant="ghost"
                size="sm"
                className="mt-2 text-[#ABAC5A] hover:bg-[#ABAC5A]/10"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View on Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Flow of the Day */}
      <section className="py-12 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#271203] mb-4">
              Flow of the Day
            </h2>
            <p className="text-[#496677] max-w-2xl mx-auto">
              Here's what to expect during our celebration. We can't wait to
              share every moment with you!
            </p>
          </div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-6 bg-white/50 rounded-lg p-6 border border-[#9FB2CD]/30"
              >
                <div className="bg-[#ABAC5A] text-white rounded-lg px-4 py-2 font-semibold min-w-[80px] text-center">
                  {item.time}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#271203] mb-2">
                    {item.event}
                  </h3>
                  <p className="text-[#496677]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-[#271203] mb-4">
              Dress Code
            </h2>
            <p className="text-[#496677] text-lg mb-8">Smart Casual Elegance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <h3 className="text-2xl font-serif text-[#271203] mb-4">
                For Her
              </h3>
              <ul className="space-y-2 text-[#496677]">
                <li>• Cocktail dress or elegant separates</li>
                <li>• Midi or maxi length preferred</li>
                <li>• Comfortable shoes for garden ceremony</li>
                <li>• Light shawl or jacket for evening</li>
                <li>• Please avoid white or ivory</li>
              </ul>
            </div>

            <div className="bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <h3 className="text-2xl font-serif text-[#271203] mb-4">
                For Him
              </h3>
              <ul className="space-y-2 text-[#496677]">
                <li>• Chinos or dress pants</li>
                <li>• Button-down shirt or polo</li>
                <li>• Blazer or sport coat (optional)</li>
                <li>• Leather shoes or smart loafers</li>
                <li>• No tie required - keep it relaxed!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Note */}
      <section className="py-12 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Sun className="w-8 h-8 text-[#ABAC5A]" />
              <Cloud className="w-8 h-8 text-[#9FB2CD]" />
            </div>
            <h2 className="text-3xl font-serif text-[#271203] mb-4">
              Weather & What to Expect
            </h2>
            <div className="max-w-2xl mx-auto text-[#496677] space-y-4">
              <p>
                February in Stellenbosch is typically warm and sunny with
                average temperatures around 26°C (79°F). Perfect weather for an
                outdoor celebration!
              </p>
              <p>
                Our ceremony will be held in the beautiful garden, so
                comfortable shoes are recommended. The reception area is
                covered, but feel free to bring a light jacket for the evening
                as temperatures can drop slightly.
              </p>
              <p className="text-sm italic">
                We'll keep an eye on the forecast and update you if there are
                any changes to the plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#271203] mb-6">
            Need More Information?
          </h2>
          <p className="text-[#496677] mb-8 max-w-2xl mx-auto">
            Check out our travel recommendations or let us know you're coming!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/travel")}
              variant="ghost"
              className="text-[#496677] hover:bg-[#9FB2CD]/20 border border-[#9FB2CD]/30"
            >
              Travel & Stay
            </Button>
            <Button
              onClick={() => navigate("/rsvp")}
              className="bg-[#ABAC5A] hover:bg-[#ABAC5A]/90 text-white"
            >
              RSVP Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventInfo;
