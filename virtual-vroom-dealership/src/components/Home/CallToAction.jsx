import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/models");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="text-center mb-20"
    >
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg shadow-md font-semibold transition duration-300"
        onClick={handleClick}
      >
        Explore Vehicles
      </button>
    </motion.div>
  );
}
