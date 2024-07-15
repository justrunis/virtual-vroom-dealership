import { motion } from "framer-motion";
import VehicleCard from "../components/Vehicles/VehicleCard";
import Pager from "../components/UI/Pager";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function PopularVehicles() {
  const favoriteVehicles = useSelector(
    (state) => state.favoriteVehicles.favoriteVehicles
  );
  console.log(favoriteVehicles);

  const [currentPage, setCurrentPage] = useState(1);

  const vehiclesPerPage = 6;
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;

  let currentVehicles = [];
  let totalPages = 0;

  if (favoriteVehicles.length > 0) {
    currentVehicles = favoriteVehicles.slice(
      indexOfFirstVehicle,
      indexOfLastVehicle
    );
    totalPages = Math.ceil(favoriteVehicles.length / vehiclesPerPage);
  }

  return (
    <>
      {favoriteVehicles.length === 0 ? (
        <div className="flex flex-col justify-center items-center h-60 bg-error text-error-content">
          <h1 className="text-3xl font-bold">No favorite vehicles</h1>
          <p className="text-xl">
            Add vehicles to your favorites to see them here
          </p>
        </div>
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 p-4"
          >
            {currentVehicles.map((vehicle, index) => (
              <VehicleCard key={vehicle.id} car={vehicle} delay={index * 0.2} />
            ))}
          </motion.div>
          <div className="flex justify-center items-center gap-4 mb-10">
            <Pager
              totalPages={totalPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </>
      )}
    </>
  );
}
