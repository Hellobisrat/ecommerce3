import { useDispatch, useSelector } from "react-redux";
import { saveShippingMethod } from "../../store/checkoutSlice";
import { useNavigate } from "react-router-dom";

export default function ShippingMethod() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { shippingMethod } = useSelector((state) => state.checkout);

  const handleSelect = (method) => {
    dispatch(saveShippingMethod(method));
    navigate("/checkout/review");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold mb-6">Shipping Method</h1>

      <div className="space-y-4">
        <button
          onClick={() => handleSelect("standard")}
          className={`w-full border px-4 py-3 rounded-lg ${
            shippingMethod === "standard" ? "bg-black text-white" : ""
          }`}
        >
          Standard Shipping — Free
        </button>

        <button
          onClick={() => handleSelect("express")}
          className={`w-full border px-4 py-3 rounded-lg ${
            shippingMethod === "express" ? "bg-black text-white" : ""
          }`}
        >
          Express Shipping — $10
        </button>
      </div>
    </div>
  );
}