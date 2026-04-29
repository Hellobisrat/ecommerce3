import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../../store/checkoutSlice";
import { useNavigate } from "react-router-dom";

export default function ShippingAddress() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingAddress } = useSelector((state) => state.checkout);

  const [form, setForm] = useState(shippingAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress(form));
    navigate("/checkout/shipping-method");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Shipping Address</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border px-4 py-2 rounded"
          value={form.fullName || ""}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
        />

        <input
          type="text"
          placeholder="Address"
          className="w-full border px-4 py-2 rounded"
          value={form.address || ""}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />

        <input
          type="text"
          placeholder="City"
          className="w-full border px-4 py-2 rounded"
          value={form.city || ""}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />

        <input
          type="text"
          placeholder="Postal Code"
          className="w-full border px-4 py-2 rounded"
          value={form.postalCode || ""}
          onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
        />

        <input
          type="text"
          placeholder="Country"
          className="w-full border px-4 py-2 rounded"
          value={form.country || ""}
          onChange={(e) => setForm({ ...form, country: e.target.value })}
        />

        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Continue
        </button>
      </form>
    </div>
  );
}