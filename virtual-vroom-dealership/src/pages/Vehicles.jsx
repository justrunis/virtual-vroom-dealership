import VehicleCard from "../components/Vehicles/VehicleCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Pager from "../components/UI/Pager";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function Vehicles() {
  const { make } = useParams();

  const vehicles = useSelector((state) =>
    state.vehicles.vehicles.filter(
      (vehicle) => vehicle.make.toLowerCase() === make
    )
  );

  const [currentPage, setCurrentPage] = useState(1);

  const vehiclesPerPage = 6;
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;

  let currentVehicles = [];
  let totalPages = 0;

  if (vehicles.length > 0) {
    currentVehicles = vehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);
    totalPages = Math.ceil(vehicles.length / vehiclesPerPage);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-4">
        {currentVehicles.map((vehicle, index) => (
          <VehicleCard key={vehicle.id} car={vehicle} delay={index * 0.2} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mb-10">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </motion.div>
  );
}
