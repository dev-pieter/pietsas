import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, Car, Plane, Phone, ExternalLink, Star } from "lucide-react";
import { useNavigate } from "react-router";

const TravelStay = () => {
  const navigate = useNavigate();

  const accommodations = [
    {
      name: "Oude Werf Hotel",
      type: "Historic Boutique Hotel",
      distance: "5 min drive to venue",
      price: "R2,500 - R3,500/night",
      description: "Charming historic hotel in the heart of Stellenbosch with beautiful gardens and excellent restaurant.",
      amenities: ["Free WiFi", "Restaurant", "Bar", "Garden", "Parking"],
      contact: "+27 21 887 4608",
      website: "oudewerf.co.za"
    },
    {
      name: "Lanzerac Hotel & Spa",
      type: "Luxury Wine Estate",
      distance: "10 min drive to venue",
      price: "R4,000 - R6,500/night",
      description: "Elegant 5-star hotel on a working wine estate with world-class spa and dining facilities.",
      amenities: ["Spa", "Wine Tasting", "Fine Dining", "Pool", "Concierge"],
      contact: "+27 21 887 1132",
      website: "lanzerac.co.za"
    },
    {
      name: "Eendracht Hotel",
      type: "Modern Boutique",
      distance: "3 min drive to venue",
      price: "R1,800 - R2,800/night",
      description: "Contemporary hotel with stylish rooms and excellent location near restaurants and shops.",
      amenities: ["Free WiFi", "Restaurant", "Fitness Center", "Parking"],
      contact: "+27 21 883 8843",
      website: "eendrachthotel.com"
    },
    {
      name: "Stellenbosch Hotel",
      type: "Classic Hotel",
      distance: "7 min drive to venue",
      price: "R1,500 - R2,200/night",
      description: "Comfortable accommodation with traditional charm and modern amenities in central location.",
      amenities: ["Free WiFi", "Restaurant", "Bar", "Pool", "Conference Facilities"],
      contact: "+27 21 887 3644",
      website: "stellenboschhotel.co.za"
    },
    {
      name: "De Zalze Lodge",
      type: "Golf Estate",
      distance: "15 min drive to venue",
      price: "R2,200 - R3,800/night",
      description: "Luxury lodge on championship golf course with stunning mountain views and premium facilities.",
      amenities: ["Golf Course", "Spa", "Multiple Restaurants", "Pool", "Tennis"],
      contact: "+27 21 875 8000",
      website: "dezalze.co.za"
    }
  ];

  const openWebsite = (website: string) => {
    window.open(`https://${website}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F0EDE8]">
      {/* Header */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Button
            onClick={() => navigate("/")}
            variant="ghost"
            className="mb-6 text-[#496677] hover:bg-[#9FB2CD]/20"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif text-[#271203] mb-4">
              Travel & Stay
            </h1>
            <p className="text-xl text-[#496677] max-w-2xl mx-auto">
              Your guide to accommodation and getting to our wedding in beautiful Stellenbosch
            </p>
          </div>
        </div>
      </section>

      {/* Accommodation Recommendations */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#271203] mb-4">Where to Stay</h2>
            <p className="text-[#496677] max-w-2xl mx-auto">
              We've selected some of our favorite accommodations in and around Stellenbosch. 
              Book early as February is peak season!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {accommodations.map((hotel, index) => (
              <div key={index} className="bg-white/50 rounded-lg p-6 border border-[#9FB2CD]/30">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-serif text-[#271203] mb-1">{hotel.name}</h3>
                    <p className="text-[#ABAC5A] text-sm font-medium">{hotel.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-[#496677] text-sm mb-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {hotel.distance}
                    </div>
                    <p className="text-[#271203] font-semibold text-sm">{hotel.price}</p>
                  </div>
                </div>

                <p className="text-[#496677] mb-4 text-sm leading-relaxed">{hotel.description}</p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, idx) => (
                      <span key={idx} className="bg-[#9FB2CD]/20 text-[#496677] px-2 py-1 rounded-full text-xs">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="text-sm text-[#496677]">
                    <Phone className="w-3 h-3 inline mr-1" />
                    {hotel.contact}
                  </div>
                  <Button
                    onClick={() => openWebsite(hotel.website)}
                    size="sm"
                    variant="ghost"
                    className="text-[#ABAC5A] hover:bg-[#ABAC5A]/10"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Visit Website
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="py-12 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#271203] mb-4">Getting There</h2>
            <p className="text-[#496677] max-w-2xl mx-auto">
              Stellenbosch is easily accessible from Cape Town. Here are your best transport options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <Car className="w-12 h-12 text-[#ABAC5A] mx-auto mb-4" />
              <h3 className="text-xl font-serif text-[#271203] mb-4">Car Rental</h3>
              <ul className="text-[#496677] text-sm space-y-2 mb-4">
                <li>• 45 minutes from Cape Town Airport</li>
                <li>• Easy N2 highway route</li>
                <li>• Major rental companies available</li>
                <li>• Most flexible option for wine tours</li>
              </ul>
              <p className="text-xs text-[#496677]/70">
                Recommended: Avis, Hertz, Budget at CPT Airport
              </p>
            </div>

            <div className="text-center bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <Plane className="w-12 h-12 text-[#ABAC5A] mx-auto mb-4" />
              <h3 className="text-xl font-serif text-[#271203] mb-4">Uber / Bolt</h3>
              <ul className="text-[#496677] text-sm space-y-2 mb-4">
                <li>• R400-600 from CPT Airport</li>
                <li>• Available for return journey</li>
                <li>• Book in advance for events</li>
                <li>• Convenient door-to-door service</li>
              </ul>
              <p className="text-xs text-[#496677]/70">
                Allow extra time during peak hours
              </p>
            </div>

            <div className="text-center bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <MapPin className="w-12 h-12 text-[#ABAC5A] mx-auto mb-4" />
              <h3 className="text-xl font-serif text-[#271203] mb-4">Shuttle Services</h3>
              <ul className="text-[#496677] text-sm space-y-2 mb-4">
                <li>• Airport shuttles available</li>
                <li>• Shared ride options</li>
                <li>• Private transfers can be arranged</li>
                <li>• Cost-effective for groups</li>
              </ul>
              <p className="text-xs text-[#496677]/70">
                Contact your hotel for recommendations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parking & Venue Access */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-serif text-[#271203] mb-4">Parking & Venue Access</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <h3 className="text-2xl font-serif text-[#271203] mb-4">Parking Information</h3>
              <ul className="space-y-3 text-[#496677]">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Free on-site parking available for all guests
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Secure parking attendants on duty
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Clear signage from main entrance
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Please do not leave valuables in vehicles
                </li>
              </ul>
            </div>

            <div className="bg-white/50 rounded-lg p-8 border border-[#9FB2CD]/30">
              <h3 className="text-2xl font-serif text-[#271203] mb-4">Alternative Options</h3>
              <ul className="space-y-3 text-[#496677]">
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Consider staying within walking distance
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Uber readily available in Stellenbosch
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Group transport can be arranged
                </li>
                <li className="flex items-start">
                  <Star className="w-4 h-4 text-[#ABAC5A] mr-2 mt-0.5 flex-shrink-0" />
                  Contact us for special requirements
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-white/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#271203] mb-6">
            Need More Help Planning?
          </h2>
          <p className="text-[#496677] mb-8 max-w-2xl mx-auto">
            Have questions about travel or accommodation? Check out our FAQ or get in touch with us directly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/faq")}
              variant="ghost"
              className="text-[#496677] hover:bg-[#9FB2CD]/20 border border-[#9FB2CD]/30"
            >
              View FAQ
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

export default TravelStay;