import VehicleMakesCard from "../components/Vehicles/VehicleMakesCard";
import { carMakes } from "../data/cars";
import { motion } from "framer-motion";
import Pager from "../components/UI/Pager";
import { useState } from "react";

export default function Models() {
  const [currentPage, setCurrentPage] = useState(1);

  const modelsPerPage = 9;
  const indexOfLastModel = currentPage * modelsPerPage;
  const indexOfFirstModel = indexOfLastModel - modelsPerPage;

  let currentModels = [];
  let totalPages = 0;

  if (carMakes.length > 0) {
    currentModels = carMakes.slice(indexOfFirstModel, indexOfLastModel);
    totalPages = Math.ceil(carMakes.length / modelsPerPage);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-3 lg:gap-4 lg:p-4"
      >
        {currentModels.map((make, index) => (
          <VehicleMakesCard key={make.id} make={make} delay={index * 0.2} />
        ))}
      </motion.div>
      <div className="flex justify-center items-center gap-4 mb-10">
        <Pager
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}
