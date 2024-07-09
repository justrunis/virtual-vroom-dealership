import { currencyFormatter } from "../../utils/formating";

export default function CartItem({ item, onDecrease, onIncrease }) {
  return (
    <li className="flex flex-row items-center justify-between border-b border-primary-content p-4">
      <div className="flex flex-row items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-20 h-10 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm">
            {item.quantity} x {currencyFormatter.format(item.price)}
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={() => onDecrease(item.id)}
          className="btn btn-error text-white"
        >
          -
        </button>
        <span className="mx-4">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="btn btn-success text-white"
        >
          +
        </button>
      </div>
    </li>
  );
}
