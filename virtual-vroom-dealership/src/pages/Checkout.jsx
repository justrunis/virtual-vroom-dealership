import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CheckoutTable from "../components/Cart/CheckoutTable";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../components/UI/ConfirmationModal";
import { useState } from "react";
import { currencyFormatter } from "../utils/formating";

export default function Checkout() {
  const navigate = useNavigate();
  const allCartItems = useSelector((state) => state.cart.items);

  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(true);
  }

  function calculateTotal() {
    return allCartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white text-black p-1 lg:p-8 rounded-md mb-20"
    >
      {showModal && (
        <ConfirmationModal
          open={showModal}
          title="Order placed"
          message="Your order has been placed successfully."
          onConfirm={() => {
            setShowModal(false);
            navigate("/models");
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      <h3
        className="text-2xl font-bold text-center text-black p-4"
        data-testid="checkout-heading"
      >
        Checkout
      </h3>
      {allCartItems.length === 0 ? (
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-red-500 font-bold">Your cart is empty.</p>
          <p className="text-red-500 font-bold">
            Please add items to your cart to proceed to checkout.
          </p>
        </div>
      ) : (
        <>
          <CheckoutTable cartItems={allCartItems} />
          <div className="flex justify-end">
            <p className="text-md md:text-3xl font-bold p-4">
              Total price: {currencyFormatter.format(calculateTotal())}
            </p>
          </div>
          <div className="flex justify-center gap-5">
            <button
              onClick={() => navigate("/models")}
              className="btn btn-error text-white"
            >
              Back to Shop
            </button>
            <button onClick={handleShowModal} className="btn btn-primary">
              Buy
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
}
