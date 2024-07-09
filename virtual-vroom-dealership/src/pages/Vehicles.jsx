import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import BackgroundImage from "../components/Home/BackgroundImage";
import VehicleCard from "../components/Vehicles/VehicleCard";
import { useParams } from "react-router-dom";

import { cars } from "../data/cars";

export default function Vehicles() {
  const { make } = useParams();

  const vehicles = cars.filter((car) => car.make.toLowerCase() === make);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {vehicles.map((vehicle, index) => (
        <VehicleCard key={vehicle.id} car={vehicle} delay={index * 0.2} />
      ))}
    </div>
  );
}
