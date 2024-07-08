import { motion } from "framer-motion";
export default function VehicleMakesCard({ make, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white shadow-md rounded-lg p-4 m-4 primary
      flex flex-col justify-between items-center
      "
    >
      <h1 className="text-3xl font-semibold text-center">{make.make}</h1>
      <img
        src={make.imageUrl}
        alt={make.make}
        className="w-full h-1/2 w-1/2 object-fit"
      />
      <div className="flex gap-5 justify-center items-center p-4">
        <button className="btn btn-primary">View Vehicles</button>
      </div>
    </motion.div>
  );
}
