import { useState } from "react";

export default function Cart() {
  // Temporary cart data (will be replaced by Redux later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Running Shoes",
      price: 89.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const updateQuantity = (id, qty) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* LEFT: CART ITEMS */}
      <div className="lg:col-span-2 space-y-6">
        <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 border rounded-xl p-4 shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h2 className="text-xl font-medium">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>

                <div className="flex items-center gap-3 mt-3">
                  <label>Qty:</label>
                  <select
                    className="border px-2 py-1 rounded"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:underline ml-4"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* RIGHT: ORDER SUMMARY */}
      <div className="border rounded-xl p-6 shadow h-fit">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-xl font-semibold mb-6">
          <span>Total</span>
          <span>${(subtotal + 5).toFixed(2)}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}