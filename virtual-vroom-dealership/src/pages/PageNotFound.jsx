import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import carImage from "../assets/pagenotfound.jpg";

export default function PageNotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center gap-4 bg-primary text-primary-content p-4 rounded-md shadow-lg"
    >
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-center">
        The page you are looking for does not exist.
      </p>
      <p className="text-center">Please check the URL and try again.</p>
      <img src={carImage} alt="Car" className="w-auto" />
      <Link to="/" className="btn btn-success">
        Go Home
      </Link>
    </motion.div>
  );
}
