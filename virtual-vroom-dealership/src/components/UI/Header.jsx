import { Link } from "react-router-dom";
import logo from "../../../public/logo-no-background.svg";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-primary text-primary-content flex justify-between p-4">
      <div className="flex flex-row items-center">
        <Link
          to="/"
          className="text-primary-content hover:text-base-100 text-xl font-bold ml-5"
        >
          <motion.img
            src={logo}
            alt="Virtual Vroom"
            className="inline p-2"
            width={160}
            height={80}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <Link
          to="/vehicles"
          className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
        >
          Vehicles
        </Link>
        <Link
          to="/inventory"
          className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
        >
          Inventory
        </Link>
        <Link
          to="/contact"
          className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
