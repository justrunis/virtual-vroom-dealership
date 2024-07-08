import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import BackgroundImage from "../components/Home/BackgroundImage";
import VehicleMakesCard from "../components/Vehicles/VehicleMakesCard";
import { carMakes } from "../data/cars";
import carIcon from "../assets/background_image.jpg";

export default function Models() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <BackgroundImage imageUrl={carIcon}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {carMakes.map((make) => (
            <VehicleMakesCard key={make.id} make={make} delay={make.id * 0.2} />
          ))}
        </div>
      </BackgroundImage>
      <Footer />
    </main>
  );
}
