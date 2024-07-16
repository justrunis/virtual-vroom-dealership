import VehicleMakesCard from "../components/Vehicles/VehicleMakesCard";
import { motion } from "framer-motion";
import Pager from "../components/UI/Pager";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "../components/UI/SearchBar";

export default function Models() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const carMakes = useSelector((state) => state.makes.makes);

  // Filter carMakes based on searchQuery
  const filteredCarMakes = carMakes.filter((make) =>
    make.make.toLowerCase().includes(searchQuery)
  );

  const modelsPerPage = 8;
  const indexOfLastModel = currentPage * modelsPerPage;
  const indexOfFirstModel = indexOfLastModel - modelsPerPage;

  const currentModels = filteredCarMakes.slice(
    indexOfFirstModel,
    indexOfLastModel
  );
  const totalPages = Math.ceil(filteredCarMakes.length / modelsPerPage);

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
      <SearchBar onSearch={handleSearch} placeholder="Search makes" />
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 lg:gap-4 p-4 items-center">
        {currentModels.map((make, index) => (
          <VehicleMakesCard key={make.id} make={make} delay={index * 0.2} />
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
