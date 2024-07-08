import { motion } from "framer-motion";

export default function VehicleCard({ car, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white shadow-md rounded-lg p-4 m-4 primary"
    >
      <img
        src={car.imageUrl}
        alt={car.make + " " + car.model}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4 primary-content">
        <h2 className="text-xl font-semibold">{car.make + " " + car.model}</h2>
        <p className="text-gray-600">{car.year}</p>
        <p className="text-gray-600">{car.price}</p>
      </div>
      <div className="flex gap-5 justify-center items-center p-4">
        <button className="btn btn-primary">View Details</button>
        <button className="btn btn-success">Add to Cart</button>
      </div>
    </motion.div>
  );
}
