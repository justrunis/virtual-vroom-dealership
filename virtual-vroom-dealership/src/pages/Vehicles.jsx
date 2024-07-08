import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import BackgroundImage from "../components/Home/BackgroundImage";
import VehicleCard from "../components/Vehicles/VehicleCard";
import VehicleMakesCard from "../components/Vehicles/VehicleMakesCard";
import { cars } from "../data/cars";
import { carMakes } from "../data/cars";

export default function Vehicles() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <BackgroundImage imageUrl="https://cdn.dribbble.com/users/8156988/screenshots/16260376/media/d72c6c8fe5a5cded14961afbe4590e2d.gif">
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {cars.map((car) => (
            <VehicleCard key={car.id} car={car} delay={car.id * 0.2} />
          ))}
        </div> */}
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
