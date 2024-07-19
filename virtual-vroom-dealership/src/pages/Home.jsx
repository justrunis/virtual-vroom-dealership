import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CallToAction from "../components/Home/CallToAction";
import logo from "/logo-no-background.svg";
import Image from "../components/UI/Image";
import Carousel from "../components/UI/Carousel";

export default function Home() {
  const images = [
    "https://www.hdcarwallpapers.com/walls/toyota_super_street_corolla_4k-HD.jpg",
    "https://www.hdcarwallpapers.com/walls/audi_rs6_4k-HD.jpg",
    "https://www.hdcarwallpapers.com/walls/toyota_supra_mk4-HD.jpg",
    "https://www.hdcarwallpapers.com/walls/mazda_cx_60_xd_hybrid_premium_sports_2022_5k-HD.jpg",
    "https://www.hdcarwallpapers.com/walls/lamborghini_urus_4k_2-HD.jpg",
    "https://www.hdcarwallpapers.com/walls/dodge_charger_hellcat_enforcer_5k-HD.jpg",
  ];

  return (
    <>
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
      <Carousel images={images} />
    </>
  );
}
