import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import BackgroundImage from "../components/Home/BackgroundImage";
import VehicleCard from "../components/Vehicles/VehicleCard";
import { cars } from "../data/cars";

export default function Vehicles() {
  console.log(cars);
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <BackgroundImage imageUrl="https://source.unsplash.com/1600x900/?vehicles">
        <h1 className="text-4xl text-center mt-8">Vehicles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {cars.map((car) => (
            <VehicleCard key={car.id} car={car} />
          ))}
        </div>
      </BackgroundImage>
      <Footer />
    </main>
  );
}
