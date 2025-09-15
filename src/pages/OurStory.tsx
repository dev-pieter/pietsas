import Header from "@/components/Header";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Story Content */}
      <section className="pt-32 pb-20 px-6">
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
              <div className="bg-white/50 text-center h-full">
                <video src="/images/our-story.mp4" className="object-cover" autoPlay loop muted></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;