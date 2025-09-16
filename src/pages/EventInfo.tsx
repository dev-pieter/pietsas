import Header from "@/components/Header";

const EventInfo = () => {

  const openGoogleMaps = () => {
    const address = "Hawksmoor House, Stellenbosch, South Africa";
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-12 text-[#271203] leading-tight tracking-wide">
            EVENT DETAILS
          </h1>
          
          {/* Basic Event Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-4">DATE</h3>
              <p className="text-xl text-[#271203] font-serif">Saturday</p>
              <p className="text-xl text-[#271203] font-serif">7 February 2026</p>
            </div>

            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-4">TIME</h3>
              <p className="text-xl text-[#271203] font-serif">Ceremony begins at</p>
              <p className="text-xl text-[#271203] font-serif">15:30</p>
            </div>

            <div className="text-center">
              <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-4">VENUE</h3>
              <p className="text-xl text-[#271203] font-serif">Hawksmoor House</p>
              <p className="text-xl text-[#271203] font-serif mb-4">Stellenbosch</p>
              <button
                onClick={openGoogleMaps}
                className="text-sm tracking-[0.1em] uppercase text-[#496677] hover:text-[#271203] transition-colors"
              >
                View on Maps
              </button>
            </div>
          </div>

          <div className="relative mb-20">
            <img 
              src="/images/hawksmoor-1.png" 
              alt="Wedding couple" 
              className="w-full max-w-2xl mx-auto shadow-lg"
            />
          </div>

          {/* Schedule */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif mb-12 text-[#271203]">
              Flow of the Day
            </h2>
            
            <div className="space-y-8 max-w-2xl mx-auto">
              <div className="flex justify-between items-center border-b border-[#9FB2CD]/30 pb-4">
                <span className="text-[#271203] font-serif">15:00</span>
                <span className="text-[#496677]">Guest Arrival & Welcome Drinks</span>
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
            <p className="text-xl font-serif text-[#271203] mb-12">Smart Casual Elegance</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-3xl mx-auto">
              <div className="text-left">
                <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-6">For Her</h3>
                <ul className="space-y-3 text-[#271203]">
                  <li>Cocktail dress or elegant separates</li>
                  <li>Midi or maxi length preferred</li>
                  <li>Comfortable shoes for garden ceremony</li>
                  <li>Light shawl for evening</li>
                  <li>Please avoid white or ivory</li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-6">For Him</h3>
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
            <h3 className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-6">Weather</h3>
            <p className="text-[#271203] leading-relaxed">
              February in Stellenbosch is typically warm and sunny with average temperatures around 26°C (79°F). 
              Perfect weather for an outdoor celebration! Our ceremony will be in the garden, 
              so comfortable shoes are recommended.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventInfo;
