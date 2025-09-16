import Header from "@/components/Header";

const images = [
  "/images/home-1.jpg",
  "/images/home-2.jpg",
  "/images/home-3.jpg",
  "/images/home-4.jpg",
  "/images/home-5.jpg",
];

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section id="home">
        <div className="max-w-full mx-auto text-center relative h-64 sm:h-80 md:h-120 overflow-hidden">
          {/* Film Roll Container */}
          <div className="absolute inset-0 flex animate-film-scroll">
            {/* First set of images */}
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Pieter and Saskia ${index + 1}`}
                className="w-48 sm:w-64 md:w-80 h-64 sm:h-80 md:h-120 object-cover shadow-lg flex-shrink-0"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((src, index) => (
              <img
                key={index + images.length}
                src={src}
                alt={`Pieter and Saskia duplicate ${index + 1}`}
                className="w-48 sm:w-64 md:w-80 h-64 sm:h-80 md:h-120 object-cover shadow-lg flex-shrink-0"
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {images.map((src, index) => (
              <img
                key={index + images.length}
                src={src}
                alt={`Pieter and Saskia duplicate ${index + 1}`}
                className="w-48 sm:w-64 md:w-80 h-64 sm:h-80 md:h-120 object-cover shadow-lg flex-shrink-0"
              />
            ))}
          </div>

          {/* Overlaid Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-wide drop-shadow-lg text-center">
              WE'RE GETTING MARRIED
            </h1>

            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white drop-shadow-lg">
              PIETER & SASKIA
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pt-20 px-6" id="our-story">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6 text-[#496677] leading-relaxed">
              <div>
                <h2 className="text-2xl font-serif text-[#271203] mb-4">
                  How We Met
                </h2>
                <p className="mb-4">
                  Our love story began in the most unexpected way. We first
                  crossed paths at a mutual friend's braai in Cape Town, where
                  Piet was attempting to impress everyone with his
                  "world-famous" boerewors technique, and Sas was quietly
                  laughing at his overconfidence from across the garden.
                </p>
                <p>
                  What started as playful banter over the proper way to make
                  potjiekos turned into hours of conversation under the stars.
                  We discovered our shared love for adventure, good wine, and
                  terrible dad jokes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-serif text-[#271203] mb-4">
                  Our Journey
                </h2>
                <p className="mb-4">
                  From weekend wine tours in Stellenbosch to hiking Table
                  Mountain at sunrise, we've explored every corner of the
                  Western Cape together. Our relationship has been built on
                  laughter, spontaneous road trips, and an endless supply of
                  inside jokes that make absolutely no sense to anyone else.
                </p>
                <p>
                  After five incredible years together, Piet finally worked up
                  the courage to propose during a sunset picnic at Kirstenbosch.
                  Sas said yes (after making him sweat for a dramatic thirty
                  seconds).
                </p>
              </div>
            </div>
            {/* Photo Gallery */}
            <div className="relative w-full h-80 lg:ml-auto lg:w-85 lg:h-full">
              <img
                src="/images/our-story.gif"
                alt="Pieter and Saskia on the beach"
                className="flex-1 w-full h-full object-cover shadow-lg mx-auto sm:mx-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="pt-20 pb-20 px-6" id="event-details">
        <div className="max-w-4xl mx-auto text-center">
          {/* Basic Event Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 bg-primary text-primary-foreground py-4">
            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase mb-4">DATE</h3>
              <p className="text-xl font-serif">Saturday</p>
              <p className="text-xl font-serif">7 February 2026</p>
            </div>

            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase mb-4">TIME</h3>
              <p className="text-xl font-serif">Ceremony begins at</p>
              <p className="text-xl font-serif">15:30</p>
            </div>

            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase mb-4">VENUE</h3>
              <p className="text-xl font-serif">Hawksmoor House</p>
              <p className="text-xl font-serif mb-4">Stellenbosch</p>
            </div>
          </div>

          <div className="relative mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div className="w-full h-90 mx-auto shadow-lg relative">
                <img
                  src="/images/hawksmoor-1.png"
                  alt="Wedding couple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-serif mb-4 text-white hover:text-primary leading-tight tracking-wide drop-shadow-lg text-center">
                    CEREMONY
                  </p>
                </div>
              </div>
              <div className="w-full h-90 mx-auto shadow-lg relative">
                <img
                  src="/images/hawksmoor-2.png"
                  alt="Wedding couple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-serif mb-4 text-white hover:text-primary leading-tight tracking-wide drop-shadow-lg text-center">
                    TRAVEL
                  </p>
                </div>
              </div>
              <div className="w-full h-90 mx-auto shadow-lg sm:col-span-2 relative">
                <img
                  src="/images/hawksmoor-3.png"
                  alt="Wedding couple"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
                  <p className="text-lg md:text-xl lg:text-2xl font-serif mb-4 text-white hover:text-primary leading-tight tracking-wide drop-shadow-lg text-center">
                    DRESS CODE
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Schedule */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif mb-12 text-[#271203]">
              Flow of the Day
            </h2>

            <div className="space-y-8 max-w-2xl mx-auto">
              <div className="flex justify-between items-center border-b border-[#9FB2CD]/30 pb-4">
                <span className="text-[#271203] font-serif">15:00</span>
                <span className="text-[#496677]">
                  Guest Arrival & Welcome Drinks
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-[#9FB2CD]/30 pb-4">
                <span className="text-[#271203] font-serif">15:30</span>
                <span className="text-[#496677]">Ceremony</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#9FB2CD]/30 pb-4">
                <span className="text-[#271203] font-serif">16:00</span>
                <span className="text-[#496677]">Cocktail Hour</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#9FB2CD]/30 pb-4">
                <span className="text-[#271203] font-serif">17:30</span>
                <span className="text-[#496677]">Reception & Dinner</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#9FB2CD]/30 pb-4">
                <span className="text-[#271203] font-serif">20:00</span>
                <span className="text-[#496677]">Speeches & Toasts</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#271203] font-serif">21:00</span>
                <span className="text-[#496677]">Dancing</span>
              </div>
            </div>
          </div>

          {/* Dress Code */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif mb-8 text-[#271203]">
              Dress Code
            </h2>
            <p className="text-xl font-serif text-[#271203] mb-12">
              Smart Casual Elegance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <div className="text-left">
                <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-6">
                  For Her
                </h3>
                <ul className="space-y-3 text-[#271203]">
                  <li>Cocktail dress or elegant separates</li>
                  <li>Midi or maxi length preferred</li>
                  <li>Comfortable shoes for garden ceremony</li>
                  <li>Light shawl for evening</li>
                  <li>Please avoid white or ivory</li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-6">
                  For Him
                </h3>
                <ul className="space-y-3 text-[#271203]">
                  <li>Chinos or dress pants</li>
                  <li>Button-down shirt or polo</li>
                  <li>Blazer or sport coat (optional)</li>
                  <li>Leather shoes or smart loafers</li>
                  <li>No tie required - keep it relaxed!</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Weather Note */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-6">
              Weather
            </h3>
            <p className="text-[#271203] leading-relaxed">
              February in Stellenbosch is typically warm and sunny with average
              temperatures around 26°C (79°F). Perfect weather for an outdoor
              celebration! Our ceremony will be in the garden, so comfortable
              shoes are recommended.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
