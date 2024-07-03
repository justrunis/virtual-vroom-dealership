import Header from "../components/UI/Header";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CallToAction from "../components/Home/CallToAction";
import carIcon from "../assets/car_image.jpg";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <div className="relative flex-1">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${carIcon})` }}
        >
          <div className="bg-gray-900 bg-opacity-50 h-full w-full"></div>
        </div>
        <div className="container mx-auto py-12 relative z-10">
          <HeroSection
            title={"Welcome to Virtual Vroom"}
            subtitle={"The best place to find your next vehicle."}
            animationDuration={0.5}
          />
          <FeaturesSection />
          <CallToAction />
        </div>
      </div>
    </main>
  );
}
