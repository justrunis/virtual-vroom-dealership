export default function CartItem({ item, onDecrease, onIncrease }) {
  console.log(item);

  return (
    <li className="flex flex-row items-center justify-between border-b border-primary-content p-4">
      <div className="flex flex-row items-center">
        <img
          src={item.imageUrl}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-lg"
        />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm">{item.price}</p>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <button
          onClick={() => onDecrease(item.id)}
          className="btn btn-secondary"
        >
          -
        </button>
        <span className="mx-4">{item.quantity}</span>
        <button
          onClick={() => onIncrease(item.id)}
          className="btn btn-secondary"
        >
          +
        </button>
      </div>
    </li>
  );
}
