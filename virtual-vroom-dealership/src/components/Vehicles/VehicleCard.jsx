import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";
import { currencyFormatter, dateFormating } from "../../utils/formating";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useState } from "react";
import { favoriteVehiclesActions } from "../../store/slices/favoriteVehiclesSlice";

export default function VehicleCard({ car, delay = 0 }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAddToCart() {
    dispatch(cartActions.addItemToCart(car));
  }

  const [isFavorite, setIsFavorite] = useState(
    useSelector((state) =>
      state.favoriteVehicles.favoriteVehicles.some((vehicle) => {
        return vehicle.id === car.id;
      })
    )
  );

  function handleDetailsClick() {
    navigate(`/vehicle/${car.id}`);
  }

  function handleFavoriteClick() {
    if (isFavorite) {
      dispatch(favoriteVehiclesActions.removeFavorite(car.id));
    } else {
      dispatch(favoriteVehiclesActions.addFavorite(car));
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="flex flex-col bg-white shadow-md rounded-lg md:p-4 md:m-4 primary"
    >
      <img
        src={car.imageUrl}
        alt={car.make + " " + car.model}
        className="w-full h-32 md:h-48 object-cover rounded-t-lg"
      />
      <div className="p-1 md:p-4 primary-content text-center md:text-start">
        <h2 className="text-xl font-semibold">{car.make + " " + car.model}</h2>
        <p className="text-accent-content">{car.type}</p>
        <p className="text-accent-content">
          {currencyFormatter.format(car.price)}
        </p>
      </div>
      <div className="flex xl:flex-row flex-col gap-1 md:gap-2 justify-center items-center p-2 md:p-4">
        <button
          onClick={handleFavoriteClick}
          className="btn bg-red-500 btn-sm md:btn-md hover:bg-red-600"
        >
          {isFavorite ? <FaHeart /> : <FaRegHeart />}
        </button>
        <button
          onClick={handleDetailsClick}
          className="btn btn-primary btn-sm md:btn-md"
        >
          View Details
        </button>
        <button
          onClick={handleAddToCart}
          className="btn btn-success btn-sm md:btn-md"
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
