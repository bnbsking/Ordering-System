import { useCart } from "../context/CartContext";


export default function Cart() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return <p className="p-4 text-center">Your cart is empty.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <ul className="space-y-4">
        {cart.map((item, i) => (
          <li
            key={i}
            className="flex justify-between items-center p-4 bg-gray-100 rounded shadow max-w-md mx-auto"
          >
            <div>
              <p className="font-bold">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <button
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={() => removeFromCart(item.name)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
