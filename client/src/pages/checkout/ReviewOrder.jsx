import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ReviewOrder() {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const { shippingAddress, shippingMethod } = useSelector(
    (state) => state.checkout
  );

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingCost = shippingMethod === "express" ? 10 : 0;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Review Your Order</h1>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Shipping Address</h2>
        <p>{shippingAddress.fullName}</p>
        <p>{shippingAddress.address}</p>
        <p>
          {shippingAddress.city}, {shippingAddress.postalCode}
        </p>
        <p>{shippingAddress.country}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Shipping Method</h2>
        <p>{shippingMethod}</p>
      </div>

      <div className="mb-6">
        <h2 className="font-semibold mb-2">Items</h2>
        {items.map((item) => (
          <p key={item._id}>
            {item.name} x {item.quantity}
          </p>
        ))}
      </div>

      <div className="text-xl font-bold mb-6">
        Total: ${(total + shippingCost).toFixed(2)}
      </div>

      <button
        onClick={() => navigate("/checkout/payment")}
        className="bg-black text-white px-6 py-3 rounded-lg"
      >
        Proceed to Payment
      </button>
    </div>
  );
}