import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineCar,
  AiOutlineShoppingCart,
  AiOutlinePhone,
  AiOutlineInfoCircle,
  AiOutlineStar,
} from "react-icons/ai";
import logo from "../../../public/logo-no-background.svg";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleShowCart() {
    dispatch(cartActions.showCart());
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

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
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 1 }}
          />
        </Link>
      </div>
      <div className="flex flex-row items-center">
        <button
          className="text-primary-content hover:text-base-100 text-xl font-bold mr-5 md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
        <nav
          className={`nav ${
            windowWidth >= 700 && windowWidth <= 1024 ? "block" : "hidden"
          } lg:block mr-10 flex flex-col lg:flex-row gap-2`}
        >
          <Link
            to="/models"
            className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
          >
            <AiOutlineCar className="inline mr-1" />
            Models
          </Link>
          <Link
            to="/popular"
            className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
          >
            <AiOutlineStar className="inline mr-1" />
            Top picks
          </Link>
          <Link
            to="/about"
            className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
          >
            <AiOutlineInfoCircle className="inline mr-1" />
            About
          </Link>{" "}
          <Link
            to="/contact"
            className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
          >
            <AiOutlinePhone className="inline mr-1" />
            Contact
          </Link>
          <Link
            onClick={handleShowCart}
            className="text-primary-content hover:text-base-100 text-xl font-bold mr-5"
          >
            <AiOutlineShoppingCart className="inline mr-1" />
            Cart {useSelector((state) => state.cart.items.length)}
          </Link>
        </nav>
      </div>
    </header>
  );
}
