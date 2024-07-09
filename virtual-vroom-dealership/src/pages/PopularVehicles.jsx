import { motion } from "framer-motion";
import { cars } from "../data/cars";
import VehicleCard from "../components/Vehicles/VehicleCard";

export default function PopularVehicles() {
  function getRandomCars(amount) {
    const randomVehicles = [];
    const randomIndexes = [];
    while (randomIndexes.length < amount) {
      const randomIndex = Math.floor(Math.random() * cars.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
        randomVehicles.push(cars[randomIndex]);
      }
    }
    return randomVehicles;
  }

  const randomVehicles = getRandomCars(10);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4"
    >
      {randomVehicles.map((vehicle, index) => (
        <VehicleCard key={vehicle.id} car={vehicle} delay={index * 0.2} />
      ))}
    </motion.div>
  );
}
