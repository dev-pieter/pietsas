import LocationSection from "@/components/LocationSection";
import DateSection from "@/components/DateSection";
import WelcomeSection from "@/components/WelcomeSection";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto space-y-12">
        <WelcomeSection />
        <DateSection />
        <LocationSection />
      </div>
    </div>
  );
};

export default HomePage;
