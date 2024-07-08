import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function VehicleMakesCard({ make, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white shadow-md rounded-lg p-4 m-4 primary flex flex-col justify-between items-center"
    >
      <h1 className="text-3xl font-semibold text-center">{make.make}</h1>
      <img
        src={make.imageUrl}
        alt={make.make}
        className="w-full h-1/4 w-1/4 sm:w-1/4 sm:h-1/4 md:w-1/3 md:h-1/3 lg:w-1/2 lg:h-1/2 object-fit"
      />
      <div className="flex gap-5 justify-center items-center p-4">
        <Link
          to={`/vehicles/${make.make.toLowerCase()}`}
          className="btn btn-primary"
        >
          View Vehicles
        </Link>
      </div>
    </motion.div>
  );
}
