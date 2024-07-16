import { motion } from "framer-motion";
import { currencyFormatter } from "../../utils/formating";

export default function CheckoutTable({ cartItems }) {
  return (
    <div className="overflow-x-auto">
      <table className="table-xs sm:table-sm md:table-md lg:table w-full table-zebra table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <th>Image</th>
            <th>Vehicle</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-10 h-5 lg:w-20 lg:h-10 object-contain rounded-lg"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>{currencyFormatter.format(item.price)}</td>
              <td>{currencyFormatter.format(item.price * item.quantity)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
