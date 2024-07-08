import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
import BackgroundImage from "../components/Home/BackgroundImage";
import VehicleCard from "../components/Vehicles/VehicleCard";
import { useParams } from "react-router-dom";

import { cars } from "../data/cars";

export default function Vehicles() {
  const { make } = useParams();

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <BackgroundImage imageUrl={make.imageUrl}></BackgroundImage>
      <Footer />
    </main>
  );
}
