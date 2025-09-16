import Header from "@/components/Header";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-8 text-[#271203] leading-tight tracking-wide">
            A LOVE STORY
            <br />
            BEGINS IN STELLENBOSCH
          </h1>
          
          <p className="text-sm tracking-[0.2em] uppercase text-[#496677] mb-16">
            PIETER & SASKIA
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center max-w-4xl mx-auto">
            <img 
              src="/images/home-1.jpg" 
              alt="Pieter and Saskia on the beach" 
              className="flex-1 max-w-xs sm:max-w-xs shadow-lg mx-auto sm:mx-0"
            />
            <img 
              src="/images/home-2.jpg" 
              alt="Pieter and Saskia kiss" 
              className="hidden sm:block flex-1 max-w-xs shadow-lg"
            />
            <img 
              src="/images/home-3.jpg" 
              alt="Pieter and Saskia intimate moment" 
              className="hidden sm:block flex-1 max-w-xs shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
