import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { useNavigate } from "react-router";

const OurStory = () => {
  const navigate = useNavigate();

  const bridalParty = [
    { name: "Sarah", role: "Maid of Honor" },
    { name: "Emma", role: "Bridesmaid" },
    { name: "Lisa", role: "Bridesmaid" },
    { name: "Mike", role: "Best Man" },
    { name: "James", role: "Groomsman" },
    { name: "David", role: "Groomsman" },
  ];

  return (
    <div className="min-h-screen bg-[#F0EDE8]">
      {/* Header */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
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
              Our Story
            </h1>
            <div className="flex justify-center mb-8">
              <Heart className="w-8 h-8 text-[#ABAC5A] fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6 text-[#496677] leading-relaxed">
              <div>
                <h2 className="text-2xl font-serif text-[#271203] mb-4">How We Met</h2>
                <p className="mb-4">
                  Our love story began in the most unexpected way. We first crossed paths at a 
                  mutual friend's braai in Cape Town, where Piet was attempting to impress everyone 
                  with his "world-famous" boerewors technique, and Sas was quietly laughing at his 
                  overconfidence from across the garden.
                </p>
                <p>
                  What started as playful banter over the proper way to make potjiekos turned into 
                  hours of conversation under the stars. We discovered our shared love for adventure, 
                  good wine, and terrible dad jokes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-[#271203] mb-4">Our Journey</h2>
                <p className="mb-4">
                  From weekend wine tours in Stellenbosch to hiking Table Mountain at sunrise, 
                  we've explored every corner of the Western Cape together. Our relationship has been 
                  built on laughter, spontaneous road trips, and an endless supply of inside jokes 
                  that make absolutely no sense to anyone else.
                </p>
                <p>
                  After five incredible years together, Piet finally worked up the courage to propose 
                  during a sunset picnic at Kirstenbosch. Sas said yes (after making him sweat for 
                  a dramatic thirty seconds).
                </p>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="space-y-4">
              <div className="bg-white/50 rounded-lg p-8 text-center border-2 border-dashed border-[#9FB2CD]">
                <p className="text-[#496677] mb-2">Photo Gallery</p>
                <p className="text-sm text-[#496677]/70">
                  Wedding photos and memories will be displayed here
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/50 rounded-lg p-6 text-center border border-[#9FB2CD]/30 aspect-square flex items-center justify-center">
                  <p className="text-xs text-[#496677]/70">Engagement Photo</p>
                </div>
                <div className="bg-white/50 rounded-lg p-6 text-center border border-[#9FB2CD]/30 aspect-square flex items-center justify-center">
                  <p className="text-xs text-[#496677]/70">Adventure Shot</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bridal Party Section */}
      <section className="py-16 px-4 bg-white/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-[#271203] mb-4">Our Wedding Party</h2>
            <p className="text-[#496677] max-w-2xl mx-auto">
              We're so grateful to have these amazing people standing by our side on our special day. 
              They've been our cheerleaders, adventure companions, and sources of endless support.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {bridalParty.map((person, index) => (
              <div key={index} className="text-center">
                <div className="bg-[#9FB2CD]/20 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center border-2 border-[#9FB2CD]/30">
                  <span className="text-2xl text-[#496677]">
                    {person.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-[#271203] mb-1">{person.name}</h3>
                <p className="text-sm text-[#496677]/80">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-[#271203] mb-6">
            Ready to Celebrate With Us?
          </h2>
          <p className="text-[#496677] mb-8 max-w-2xl mx-auto">
            We can't wait to share this special moment with all our favorite people. 
            Check out the event details and let us know you'll be there!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => navigate("/event-info")}
              variant="ghost"
              className="text-[#496677] hover:bg-[#9FB2CD]/20 border border-[#9FB2CD]/30"
            >
              Event Details
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

export default OurStory;