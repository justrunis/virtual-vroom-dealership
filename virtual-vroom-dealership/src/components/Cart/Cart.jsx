import Modal from "../UI/Modal";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/slices/cartSlice";
import CartItem from "./CartItem";
import { currencyFormatter } from "../../utils/formating";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allItems = useSelector((state) => state.cart.items);
  const showCart = useSelector((state) => state.cart.showCart);

  function handleHideCart() {
    dispatch(cartActions.hideCart());
  }

  function handleCloseCart() {
    dispatch(cartActions.hideCart());
  }

  function handleShowCheckout() {
    console.log("show checkout");
    handleCloseCart();
    navigate("/checkout");
  }

  function decreaseItemHandler(id) {
    dispatch(cartActions.removeItemFromCart(id));
  }

  function increaseItemHandler(item) {
    dispatch(cartActions.addItemToCart(item));
  }

  return (
    <Modal
      key="cart"
      open={useSelector((state) => state.cart.show)}
      onClose={handleHideCart}
      className="w-100 p-4 rounded-lg shadow-lg dark:shadow-primary-dark"
    >
      <div className="p-4">
        <h2 className="text-2xl font-bold">Cart</h2>
        {allItems.length === 0 ? (
          <p className="my-4">Your cart is empty.</p>
        ) : (
          <>
            <ul className="my-4 flex flex-col items-between justify-center content-center">
              {allItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onDecrease={() => decreaseItemHandler(item.id)}
                  onIncrease={() => increaseItemHandler(item)}
                />
              ))}
            </ul>
            <p className="my-4">
              Total:{" "}
              <span className="font-bold">
                {currencyFormatter.format(
                  allItems.reduce((acc, item) => acc + item.totalPrice, 0)
                )}
              </span>
            </p>
          </>
        )}
        <div className="flex justify-center gap-5">
          <button
            className="btn btn-error text-white"
            onClick={handleCloseCart}
          >
            Close
          </button>
          {allItems.length > 0 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleShowCheckout}
            >
              Checkout
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
}
