import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { currencyFormatter } from "../utils/formating";
import { FaRegHeart, FaHeart, FaShare } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState, useEffect } from "react";
import VehicleDetailsList from "../components/Vehicles/VehicleDetailsList";
import { favoriteVehiclesActions } from "../store/slices/favoriteVehiclesSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Vehicle() {
  const carId = parseInt(useParams().id);
  const dispatch = useDispatch();
  const car = useSelector((state) =>
    state.vehicles.vehicles.find((vehicle) => vehicle.id === carId)
  );

  const [isFavorite, setIsFavorite] = useState(
    useSelector((state) =>
      state.favoriteVehicles.favoriteVehicles.some((vehicle) => {
        return vehicle.id === carId;
      })
    )
  );
  const [clickedShare, setClickedShare] = useState(false);

  function handleFavoriteClick() {
    if (isFavorite) {
      dispatch(favoriteVehiclesActions.removeFavorite(carId));
    } else {
      dispatch(favoriteVehiclesActions.addFavorite(car));
    }
    setIsFavorite(!isFavorite);
  }

  function handleShareClick() {
    navigator.clipboard.writeText(window.location.href);
    setClickedShare(true);
  }

  useEffect(() => {
    if (clickedShare) {
      const timer = setTimeout(() => {
        setClickedShare(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [clickedShare]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="max-w-4xl mx-auto p-0"
    >
      {car ? (
        <motion.div
          className="bg-white shadow-md rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h1 className="text-3xl font-bold text-center p-4">
            {car.make + " " + car.model}
          </h1>
          <img
            src={car.imageUrl}
            alt={car.make + " " + car.model}
            className="w-auto h-auto object-cover rounded-lg"
          />
          <div className="flex flex-row justify-between items-center sm:items-start p-4">
            <div>
              <h3 className="text-xl lg:text-3xl font-bold text-red-600">
                Price
              </h3>
              <h3 className="text-xl lg:text-3xl font-bold text-red-600">
                {currencyFormatter.format(car.price)}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-stretch p-4">
              <button
                onClick={handleFavoriteClick}
                className="btn bg-red-500 btn-sm md:btn-md lg:btn-lg hover:bg-red-600"
              >
                {isFavorite ? <FaHeart /> : <FaRegHeart />}
              </button>
              <button
                onClick={handleShareClick}
                className="btn btn-primary btn-sm md:btn-md lg:btn-lg"
              >
                <FaShare />
                {clickedShare ? "Copied!" : "Share"}
              </button>
              <button className="btn btn-success btn-sm md:btn-md lg:btn-lg">
                <AiOutlineShoppingCart />
                Add to Cart
              </button>
            </div>
          </div>
          <VehicleDetailsList car={car} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center items-center bg-error shadow-md rounded-lg p-4"
        >
          <h1 className="text-3xl font-bold text-error-content text-center">
            Vehicle with id {carId} not found
          </h1>
        </motion.div>
      )}
    </motion.div>
  );
}
