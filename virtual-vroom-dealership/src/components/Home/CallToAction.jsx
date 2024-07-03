import { motion } from "framer-motion";

export default function CallToAction() {
  function handleClick() {
    console.log("Explore Inventory button clicked!");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center mt-8"
    >
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md font-semibold transition duration-300"
        onClick={handleClick}
      >
        Explore Inventory
      </button>
    </motion.div>
  );
}
