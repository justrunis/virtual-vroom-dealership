import Header from "../components/UI/Header";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CallToAction from "../components/Home/CallToAction";
import BackgroundImage from "../components/Home/BackgroundImage";
import carIcon from "../assets/car_image.jpg";
import logo from "../../public/logo-no-background.svg";
import Image from "../components/UI/Image";
import Footer from "../components/UI/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <BackgroundImage imageUrl={carIcon}>
        <div className="text-center">
          <Image
            src={logo}
            alt="Virtual Vroom"
            width={400}
            height={400}
            className="inline p-2 text-center"
          />
        </div>
        <HeroSection
          title={"Welcome to Virtual Vroom"}
          subtitle={"The best place to find your next vehicle."}
          animationDuration={0.5}
        />
        <FeaturesSection />
        <CallToAction />
      </BackgroundImage>
      <Footer />
    </main>
  );
}
