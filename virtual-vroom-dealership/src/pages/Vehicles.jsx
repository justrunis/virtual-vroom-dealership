import VehicleCard from "../components/Vehicles/VehicleCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Pager from "../components/UI/Pager";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import SearchBar from "../components/UI/SearchBar";

export default function Vehicles() {
  const { make } = useParams();

  const vehicles = useSelector((state) =>
    state.vehicles.vehicles.filter(
      (vehicle) => vehicle.make.toLowerCase() === make
    )
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVehicles = vehicles.filter((vehicle) =>
    vehicle.model.toLowerCase().includes(searchQuery)
  );

  const vehiclesPerPage = 6;
  const indexOfLastVehicle = currentPage * vehiclesPerPage;
  const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;

  const currentVehicles = filteredVehicles.slice(
    indexOfFirstVehicle,
    indexOfLastVehicle
  );
  const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);

  function handleSearch(query) {
    setSearchQuery(query.toLowerCase());
    setCurrentPage(1);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SearchBar onSearch={handleSearch} placeholder="Search models" />
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
