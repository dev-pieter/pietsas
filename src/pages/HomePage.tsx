import { Button } from "@/components/ui/button";

const images = [
  "/images/SasPiet-14.JPG",
  "/images/SasPiet-1.JPG",
  "/images/SasPiet-2.JPG",
  "/images/SasPiet-4.JPG",
  "/images/SasPiet-6.JPG",
  "/images/SasPiet-8.JPG",
  "/images/SasPiet-7.JPG",
  "/images/SasPiet-12.JPG",
  "/images/SasPiet-9.JPG",
  "/images/SasPiet-10.JPG",
  "/images/SasPiet-3.JPG",
  "/images/SasPiet-13.JPG",
  "/images/SasPiet-5.JPG",
  "/images/SasPiet-15.JPG",
  "/images/SasPiet-16.JPG",
  "/images/SasPiet-11.JPG",
];

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
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
            {/* {images.map((src, index) => (
              <img
                key={index + images.length}
                src={src}
                alt={`Pieter and Saskia duplicate ${index + 1}`}
                className="w-48 sm:w-64 md:w-80 h-64 sm:h-80 md:h-120 object-cover shadow-lg flex-shrink-0"
              />
            ))} */}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif mb-4 sm:mb-6 md:mb-8 text-white leading-tight tracking-[0.2em] text-center">
              WE'RE GETTING MARRIED
            </h1>

            {/* <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-white drop-shadow-lg">
              PIETER & SASKIA
            </p> */}
          </div>
        </div>
      </section>

      {/* Basic Event Info */}
      <section id="event-details" className="lg:w-full">
        <div className="grid grid-cols-3 gap-4 md:gap-12 bg-secondary text-secondary-foreground py-4">
          <div className="text-center">
            <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
              DATE
            </h3>
            <p className="text-sm md:text-xl uppercase tracking-[0.2em]">
              7 February 2026
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
              TIME
            </h3>
            <p className="text-sm md:text-xl uppercase tracking-[0.2em]">
              16:00
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase mb-4">
              VENUE
            </h3>
            <p className="text-sm md:text-xl uppercase tracking-[0.2em]">
              Hawksmoor House
            </p>
          </div>
        </div>
      </section>

      {/* Story Content */}
      <section className="pt-20 px-6" id="our-story">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-12 items-center">
            {/* Story Text */}
            <div className="space-y-6 text-[#496677] leading-relaxed text-justify">
              <div>
                <h2 className="text-center text-4xl uppercase font-serif text-[#271203] mb-4 tracking-[0.2em]">
                  and you're invited!
                </h2>
                <p className="mb-6 text-lg text-[#271203]">
                  Welcome to our wedding website! We're so excited to celebrate
                  our love with you in beautiful Stellenbosch on Saturday, 7
                  February 2026. We've created this space to keep you updated
                  with all the important details. Thank you for being part of
                  this special chapter in our lives. We are so greatful to be
                  sharing this momnent with the people we love. Thank you for
                  being part of our story.
                </p>

                <h2 className="pr-8 uppercase font-serif tracking-[0.2em] italic text-center text-lg text-[#271203] mb-2">
                  with love,
                </h2>
                <h2 className="pl-8 italic uppercase font-serif tracking-[0.2em] text-center text-lg text-[#271203]">
                  piet & sas
                </h2>
              </div>
            </div>
            <Button
              size="lg"
              variant="secondary"
              className="w-full mx-auto uppercase text-lg rounded-xs"
              onClick={() => {
                const rsvpSection = document.getElementById("rsvp");
                if (rsvpSection) {
                  rsvpSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              RSVP
            </Button>
          </div>
        </div>
      </section>

      <section>
        {/* Photo Gallery */}
        <div className="pt-20 relative w-full h-60 md:h-160">
          <img
            src="/images/SasPiet-banner.JPG"
            alt="Pieter and Saskia on the beach"
            className="flex-1 w-full h-full object-cover mx-auto sm:mx-0"
          />
        </div>
      </section>

      {/* Event Details */}
      <section className="pt-20 pb-20">
        <div className="mx-auto text-center">
          <h2 className="text-center text-4xl uppercase font-serif text-[#271203] mb-4 tracking-[0.2em]">
            event details
          </h2>
          <div className="mb-20 px-6">
            <h2 className="text-2xl uppercase mb-8 text-[#271203] tracking-[0.2em]">
              When & Where
            </h2>
            <img
              src="/images/hawksmoor.png"
              className="m-auto w-xl object-cover h-80"
            ></img>
            <p className="text-[#8a8a8aa1] text-center mb-6 italic">
              Matjieskuil Farm, R304, Stellenbosch 7599. <br />
              <a
                className="underline"
                href="https://www.hawksmoor.co.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                Go to website
              </a>
            </p>
            <div className="text-lg max-w-4xl mx-auto">
              <div className="text-center">
                <p className="text-[#271203] text-justify mb-6">
                  We can’t wait to celebrate with you in the beautiful Cape
                  Winelands! Our wedding will take place on Friday, 7 February
                  2026 at the charming Hawksmoor House near Stellenbosch.
                  Hawksmoor House is a historic Cape Dutch homestead set on a
                  working wine farm, about 40 minutes from Cape Town and 20
                  minutes from Stellenbosch town centre. There is ample on-site
                  parking, and for those staying nearby, Uber & Bolt do operate
                  in the area.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-10 bg-secondary w-full">
            {/* Schedule */}
            <h2 className="text-2xl pt-8 uppercase mb-8 text-secondary-foreground tracking-[0.2em]">
              Order of Events
            </h2>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-5 mx-auto py-8 text-center">
              <div className="pb-4">
                <p className="text-secondary-foreground font-serif tracking-[0.2em] font-bold text-4xl mb-4">
                  16:00
                </p>
                <p className="text-secondary-foreground uppercase">
                  Arrival & Drinks
                </p>
              </div>
              <div className="pb-4">
                <p className="text-secondary-foreground tracking-[0.2em] font-bold text-4xl mb-4 font-serif">
                  16:30
                </p>
                <p className="text-secondary-foreground uppercase">Ceremony</p>
              </div>
              <div className="pb-4">
                <p className="text-secondary-foreground tracking-[0.2em] font-bold text-4xl mb-4 font-serif">
                  17:00
                </p>
                <p className="text-secondary-foreground uppercase">
                  Cocktail Hour
                </p>
              </div>
              <div className="pb-4">
                <p className="text-secondary-foreground tracking-[0.2em] font-bold text-4xl mb-4 font-serif">
                  18:30
                </p>
                <p className="text-secondary-foreground uppercase">
                  Reception & Dinner
                </p>
              </div>
              <div className="pb-4">
                <p className="text-secondary-foreground tracking-[0.2em] font-bold text-4xl mb-4 font-serif">
                  20:30
                </p>
                <p className="text-secondary-foreground uppercase">Dancing</p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl m-auto mb-20 text-xs md:text-lg px-6">
            <img
              src="/images/hawksmoor-map-anotated.jpg"
              className="w-full object-cover max-h-140 mb-8"
            ></img>
            <p className="text-secondary text-center">
              1 ENTRANCE GATE | 2 PARKING | 3 ARRIVAL DRINKS | 4 CEREMONY
            </p>
            <p className="text-secondary text-center mb-6">
              5 COCKTAILS & CANAPES | 6 RECEPTION AREA | 7 DANCEFLOOR | 8 RESTROOMS
            </p>
          </div>

          {/* Dress Code */}
          <div className="mb-20 px-6">
            <h2 className="text-2xl uppercase mb-8 text-[#271203] tracking-[0.2em]">
              Dress Code
            </h2>
            <div className="text-lg max-w-4xl mx-auto">
              <div className="text-center">
                <h3 className="text-sm tracking-[0.2em] uppercase text-secondary mb-4">
                  Garden Formal
                </h3>
                <p className="text-[#271203] text-justify mb-6">
                  Our wedding will be an elegant outdoor celebration under the
                  oak trees of Hawksmoor House. Think Mediterranean meets Cape
                  Winelands: timeless, relaxed and a little romantic. As for
                  colour - don't be shy, any colour is welcome! Yes - even black
                  or red, but please do avoid white or ivory!
                </p>
                <h3 className="text-sm tracking-[0.2em] uppercase text-secondary mb-4">
                  Footwear
                </h3>
                <p className="text-[#271203] text-justify mb-6">
                  The ceremony and reception will take place on lawns and gravel
                  paths, so we recommend block heels, wedges, or smart flats
                  over stilettos or thin heels to keep you comfortable.
                </p>
                <h3 className="text-sm tracking-[0.2em] uppercase text-secondary mb-4">
                  Sun & Weather
                </h3>
                <p className="text-[#271203] text-justify">
                  Our celebrations will unfold mostly outdoors in the
                  late-summer sun. While we’ll provide shade where we can,
                  please wear sunscreen and consider the weather when planning
                  your outfit.
                </p>
                {/* Our wedding will be an elegant outdoor celebration under the oak trees of Hawksmoor House.
Think Mediterranean meets Cape Winelands: timeless, relaxed and a little romantic.
We love soft, natural tones that complement the setting—neutrals, sage, dusty blues, warm terracottas, blush, champagne, and muted pastels all blend beautifully with the surroundings.
Dress it up to wedding-guest chic (cocktail or semi-formal), but feel free to play with colour within this soft, sun-washed palette.

Footwear
The ceremony and reception will take place on lawns and gravel paths, so we recommend block heels, wedges, or smart flats over stilettos or thin heels to keep you comfortable.

Sun & Weather
Our celebrations will unfold mostly outdoors in the late-summer sun.
While we’ll provide shade where we can, please wear sunscreen and consider a stylish hat or fascinator for the daytime.
As evenings in the Winelands can cool off, a light shawl, jacket, or wrap will help you stay cosy once the sun sets. */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="event-details" className="w-full bg-secondary pt-8 pb-8">
        <h2 className="text-center text-4xl uppercase font-serif text-secondary-foreground mb-4 tracking-[0.2em]">
          FAQ
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-justify px-6">
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              Where is the wedding taking place?
            </p>
            <p className="text-secondary-foreground">
              The ceremony and reception will be held at Hawksmoor House, a
              historic wine farm and guesthouse nestled just outside
              Stellenbosch.
              <br />
              <br />
              Address: Hawksmoor House, R304, Stellenbosch Farms, Cape Town,
              7600 [View on Google Maps]
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              What time should I arrive?
            </p>
            <p className="text-secondary-foreground">
              Please arrive by 16:00 for welcome drinks. The ceremony will begin
              promptly at 16:30.
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              Is the wedding outdoors?
            </p>
            <p className="text-secondary-foreground">
              Yes! Both the ceremony and reception will take place outdoors on a
              lawn under large oak trees. The setting is beautiful and natural,
              so please wear appropriate footwear (flats or block heels are
              ideal).
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              What is the dress code?
            </p>
            <p className="text-secondary-foreground">
              Garden Formal: think relaxed summer elegance. Linen suits, light
              fabrics, flowy dresses, soft colours—feel free to lean into tones
              of blue, green, neutrals or earthy shades. It will be warm during
              the day, with a breeze in the evening—bring a light layer if you
              get chilly easily.
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              What happens if it rains?
            </p>
            <p className="text-secondary-foreground">
              Fingers crossed it doesn't, but we’ll have a backup plan in place
              to keep everyone dry and cozy—rain or shine, the show goes on!
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              Will there be transport or parking?
            </p>
            <p className="text-secondary-foreground">
              There is ample parking available at the venue, and Uber and Bolt
              are both operational at the wedding in case you'd like to indulge
              in the drinks!
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              Can I bring a plus one?
            </p>
            <p className="text-secondary-foreground">
              If your invitation included a plus one, you’ll see that option
              when you RSVP. Otherwise, we’re keeping the celebration intimate
              with our closest family and friends.
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              What kind of food will there be?
            </p>
            <p className="text-secondary-foreground">
              Expect a seasonal summer menu inspired by the Western Cape—think
              fresh ingredients, family-style dining, and a few local delights.
              Kindly let us know whether you have any dietary requirements we
              should know about ahead of time.
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              Will there be a bar?
            </p>
            <p className="text-secondary-foreground">
              No need for wallets—we’ve got you covered! We’ll be providing a
              generous selection of drinks for the evening, including local
              wines, MCC for toasts, and both beer and gin & tonic on tap. If
              you have a special favourite tipple that you simply can’t
              celebrate without, you’re welcome to bring a bottle along- just
              please keep it discreet (think a single bottle, not a big cooler
              box). Our goal is to keep the atmosphere relaxed and elegant,
              without bulky coolers cluttering the party. Cheers!
            </p>
          </div>
          <div className="pb-4">
            <p className="text-secondary-foreground font-bold mb-4">
              Is there a gift registry?
            </p>
            <p className="text-secondary-foreground">
              Your presence is truly the greatest gift. But if you'd like to
              contribute to our honeymoon or future home, we've created a
              registry here: [Insert link]
            </p>
          </div>
        </div>
      </section>
      <section className="pt-20 pb-20 max-w-4xl m-auto" id="rsvp">
        <h2 className="text-center text-4xl uppercase font-serif text-[#271203] mb-4 tracking-[0.2em]">
          RSVP
        </h2>
        <div className="text-lg max-w-4xl mx-auto px-6">
          <div className="text-center">
            <p className="text-[#271203] mb-6">
              Please submit your RSVP by 1 December 2025. We can’t wait to
              celebrate with you!
            </p>
          </div>
          <iframe
            src={import.meta.env.VITE_RSVP_URL}
            className="w-full h-150 rounded-md drop-shadow-lg"
          ></iframe>
        </div>
      </section>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScYcEEOAuIKUvTWaW7MAoZcwHDpmftTNxG32kel8D6hu3tjxQ/viewform?embedded=true" width="640" height="1347" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
    </div>
  );
};

export default Homepage;
