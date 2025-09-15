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
          
          <div className="relative">
            <img 
              src="/images/hero-info2.jpg" 
              alt="Wedding couple" 
              className="w-full max-w-2xl mx-auto shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
