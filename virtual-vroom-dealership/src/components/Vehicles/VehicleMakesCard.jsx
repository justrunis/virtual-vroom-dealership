import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function VehicleMakesCard({ make, delay }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/models/${make.make.toLowerCase()}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white shadow-md rounded-lg p-4 m-4 primary grid grid-cols-1 justify-start md:justify-center items-center hover:cursor-pointer hover:bg-gray-200"
      onClick={handleClick}
    >
      <div className="flex justify-center">
        <img
          src={make.imageUrl}
          alt={make.make}
          className="w-full h-32 md:h-64 object-fit rounded-t-lg"
        />
      </div>
    </motion.div>
  );
}
